plugin.loadLang();

if(plugin.enabled)
{
	plugin.loadMainCSS();

	plugin.config = theWebUI.config;
	theWebUI.config = function(data)
	{
		if(plugin.canChangeColumns())
		{
			this.tables.trt.columns.push({ text: 'Channel', width: '60px', id: "throttle", type: TYPE_STRING});
			plugin.trtFormat = this.tables.trt.format;
			this.tables.trt.format = function(table,arr)
			{
				for(var i in arr)
				{
   					if(table.getIdByCol(i)=="throttle")
   					{
	   					var thr = arr[i].match(/^thr_(\d{1,2})$/);
						arr[i] = ( thr && (thr.length>1) && theWebUI.isCorrectThrottle(thr[1]) ? theWebUI.throttles[thr[1]].name : "" );
						break;
					}
			        }
				return(plugin.trtFormat(table,arr));
			};
		}
		theRequestManager.addRequest("trt", "d.get_throttle_name=",function(hash,torrent,value)
		{
			torrent.throttle = value;
		});
		plugin.config.call(this,data);
		if(plugin.canChangeColumns())
			plugin.trtRenameColumn();
	}

	if(plugin.canChangeColumns())
	{
		plugin.trtRenameColumn = function()
		{
			if(plugin.allStuffLoaded)
			{
				theWebUI.getTable("trt").renameColumnById("throttle",WUILang.throttle);
				if(thePlugins.isInstalled("rss"))
					plugin.rssRenameColumn();
			}
			else
				setTimeout(arguments.callee,1000);
		}

		plugin.rssRenameColumn = function()
		{
			if(theWebUI.getTable("rss").created)
				theWebUI.getTable("rss").renameColumnById("throttle",WUILang.throttle);
			else
				setTimeout(arguments.callee,1000);
		}
	}
	if(plugin.canChangeOptions())
	{
		plugin.addAndShowSettings = theWebUI.addAndShowSettings;
		theWebUI.addAndShowSettings = function(arg) 
		{
		        for(var i=0; i<theWebUI.maxThrottle; i++)
			{
	        		if(theWebUI.isCorrectThrottle(i))
				{
					$('#thr_up'+i).val( theWebUI.throttles[i].up );
					$('#thr_down'+i).val( theWebUI.throttles[i].down );
					$('#thr_name'+i).val( theWebUI.throttles[i].name );
				}
				else
					$('#thr_up'+i+',#thr_down'+i+',#thr_name'+i).val('');
			}
			plugin.addAndShowSettings.call(theWebUI,arg);
		}

		theWebUI.throttleWasChanged = function() 
		{
			for(var i=0; i<theWebUI.maxThrottle; i++)
			{
				if( 	(theWebUI.throttles[i].up!=$('#thr_up'+i).val()) ||
					(theWebUI.throttles[i].down!=$('#thr_down'+i).val()) ||
					(theWebUI.throttles[i].name!=$('#thr_name'+i).val()))
					return(true);
			}
			return(false);
		}

		plugin.setSettings = theWebUI.setSettings;
		theWebUI.setSettings = function() 
		{
			plugin.setSettings.call(this);
			if(this.throttleWasChanged())
				this.request("?action=setthrottleprm");
		}

		rTorrentStub.prototype.setthrottleprm = function()
		{
			this.content = "dummy=1";
			for(var i=0; i<theWebUI.maxThrottle; i++)
			{
				var name = $.trim($('#thr_name'+i).val());
				var up = iv($('#thr_up'+i).val());
				var down = iv($('#thr_down'+i).val());
                		if(name.length)
					this.content += ('&thr_up'+i+'='+up+'&thr_down'+i+'='+down+'&thr_name'+i+'='+encodeURIComponent(name));
			}
	        	this.contentType = "application/x-www-form-urlencoded";
			this.mountPoint = "plugins/throttle/action.php";
			this.dataType = "script";
		}
	}
	if(plugin.canChangeMenu())
	{
		theWebUI.getThrottleData = function(id)
		{
			var curNo = -1;
			var s = this.torrents[id].throttle;
			var arr = s.match(/^thr_(\d{1,2})$/);
			if(arr && (arr.length>1))
				curNo = arr[1];
			return(curNo);
		}

		plugin.createMenu = theWebUI.createMenu;
		theWebUI.createMenu = function(e, id)
		{
			plugin.createMenu.call(this, e, id);
			if(plugin.allStuffLoaded)
			{
				var el = theContextMenu.get(WUILang.Priority);
				var curNo = null;
				if(this.getTable("trt").selCount==1)
					curNo = theWebUI.getThrottleData(id);
				var down = [];
				down.push([WUILang.mnuUnlimited, (curNo==-1) ? null : "theWebUI.setThrottle('-1')"]);
				down.push([CMENU_SEP]);
				for(var i=0; i<theWebUI.maxThrottle; i++)
				{
					if(theWebUI.isCorrectThrottle(i))
						down.push([theWebUI.throttles[i].name,(i!=curNo) ? "theWebUI.setThrottle('"+i+"')" : null]);
				}
				theContextMenu.add(el,[CMENU_CHILD, WUILang.mnuThrottle, down]);
			}
		}

		theWebUI.setThrottle = function(throttle)
		{
			var sr = this.getTable("trt").rowSel;
			var req = '';
			for(var k in sr)
	       			if(sr[k])
					req += ("&hash=" + k + "&v="+throttle);
			if(req.length>0)
				this.request("?action=setthrottle"+req+"&list=1",[this.addTorrents, this]);
		}

		rTorrentStub.prototype.setthrottle = function()
		{
			for(var i=0; i<this.vs.length; i++)
			{
				var needRestart = (theWebUI.torrents[this.hashes[i]].status==WUILang.Seeding) || (theWebUI.torrents[this.hashes[i]].status==WUILang.Downloading);
				var name = (this.vs[i]>=0) ? "thr_"+this.vs[i] : "";
				if(needRestart)
				{
					cmd = new rXMLRPCCommand('d.stop');
					cmd.addParameter("string",this.hashes[i]);
					this.commands.push( cmd );
				}
				cmd = new rXMLRPCCommand('d.set_throttle_name');
				cmd.addParameter("string",this.hashes[i]);
				cmd.addParameter("string",name);
				this.commands.push( cmd );
				if(needRestart)
				{
					cmd = new rXMLRPCCommand('d.start');
					cmd.addParameter("string",this.hashes[i]);
					this.commands.push( cmd );
				}
			}
		}
	}

	theWebUI.isCorrectThrottle = function(i)
	{
		return( ((i>=0) && (i<theWebUI.throttles.length)) &&
	        	(theWebUI.throttles[i].name!="") &&
			(theWebUI.throttles[i].up>=0) &&
			(theWebUI.throttles[i].down>=0));
	}
}

plugin.onLangLoaded = function() 
{
	if(this.enabled)
	{
		var s = 
			"<fieldset>"+
				"<legend>"+WUILang.throttles+"</legend>"+
				"<div id='st_throttle_h'>"+
				"<table>"+
					"<tr>"+
						"<td><b>No</b></td>"+
						"<td><b>"+WUILang.channelName+"</b></td>"+
						"<td><b>"+WUILang.UL+" ("+WUILang.KB+"/"+WUILang.s+")</b></td>"+
						"<td><b>"+WUILang.DL+" ("+WUILang.KB+"/"+WUILang.s+")</b></td>"+
					"</tr>";
		for(var i=0; i<theWebUI.maxThrottle; i++)
			s +=
				"<tr>"+
				        "<td class='alr'><b>"+(i+1)+".</b></td>"+
					"<td><input type='text' id='thr_name"+i+"' class='TextboxLarge'/></td>"+
					"<td><input type='text' id='thr_up"+i+"' class='Textbox num' maxlength='6'/></td>"+
					"<td><input type='text' id='thr_down"+i+"' class='Textbox num' maxlength='6'/></td>"+
				"</tr>";
		s+="</table></div></fieldset>";
		this.attachPageToOptions($("<div>").attr("id","st_throttle").html(s).get(0),WUILang.throttles);
	}
	else
		log(WUILang.throttleUnsupported);
}
