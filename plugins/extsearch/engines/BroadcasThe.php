<?php

class BroadcasTheEngine extends commonEngine
{
	public $defaults = array( "public"=>false, "page_size"=>50, "auth"=>1 );
	public $categories = array( 'all'=>'&action=basic', 
		'Season'=>'&action=advanced&filter_cat[2]=1',
		'Episode'=>'&action=advanced&filter_cat[1]=1',
		'SD'=>'&action=advanced&resolution=SD', 
		'SD+Season'=>'&action=advanced&resolution=SD&filter_cat[2]=1',
		'720p'=>'&action=advanced&resolution=720p', 
		'720p+Season'=>'&action=advanced&resolution=720p&filter_cat[2]=1',
		'1080p'=>'&action=advanced&resolution=1080p', 
		'1080p+Season'=>'&action=advanced&resolution=1080p&filter_cat[2]=1',
		'1080i'=>'&action=advanced&resolution=1080i', 
		'1080i+Season'=>'&action=advanced&resolution=1080i&filter_cat[2]=1',
		'Portable'=>'&action=advanced&resolution=Portable Device', 
		'Portable+Season'=>'&action=advanced&resolution=Portable Device&filter_cat[2]=1',
		);

	public function action($what,$cat,&$ret,$limit,$useGlobalCats)
	{
		$added = 0;
		$url = 'http://broadcasthe.net';
		if($useGlobalCats)
			$categories = array( 'all'=>'&action=basic' );
		else
			$categories = &$this->categories;
		if(!array_key_exists($cat,$categories))
			$cat = $categories['all'];
		else
			$cat = $categories[$cat];
		for($pg = 1; $pg<11; $pg++)
		{
			$cli = $this->fetch( $url.'/torrents.php?searchstr='.$what.'&artistname='.$what.$cat.'&searchtags=&tags_type=0&order_by=s6&order_way=desc&page='.$pg );
			if( ($cli==false) || (strpos($cli->results, "<h2>Your search was way too l33t, try dumbing it down a bit.</h2>")!==false)
				|| (strpos($cli->results, '<form name="loginform" id="loginform" method="post"')!==false))
				break;
			$res = preg_match_all('/<tr class="torrent">.*<td class="center"><img src=".*" alt="(?P<cat>.*)".*<\/td>.*'.
				'<a href="torrents.php\?action=download(?P<link>.*)" title="Download">.*'.
                		'<a href="series.php\?id=.*>(?P<name1>.*)<\/a> - <a href="torrents.php\?id=(?P<desc>.*)" title="View Torrent">(?P<name2>.*)<\/a><br \/>.*'.
		             	'<b>Added:<\/b>(?P<date>.*)<\/div>.*'.
				'<td>.*<\/td>.*'.
				'<td class="nobr">(?P<size>.*)<\/td>.*'.
				'<td>(?P<seeds>.*)<\/td>.*'.
				'<td>(?P<leech>.*)<\/td>/siU', $cli->results, $matches);
			if($res)
			{
				for($i=0; $i<$res; $i++)
				{

					$link = $url."/torrents.php?action=download".self::removeTags($matches["link"][$i]);
					if(!array_key_exists($link,$ret))
					{
						$item = $this->getNewEntry();
						$item["cat"] = self::removeTags($matches["cat"][$i]);
						$item["desc"] = $url."/torrents.php?id=".self::removeTags($matches["desc"][$i]);
						$item["name"] = self::removeTags($matches["name1"][$i]." - ".$matches["name2"][$i]);
						$item["size"] = self::formatSize($matches["size"][$i]);
						$item["time"] = strtotime(trim(self::removeTags($matches["date"][$i])));
						$item["seeds"] = intval(self::removeTags($matches["seeds"][$i]));
						$item["peers"] = intval(self::removeTags($matches["leech"][$i]));
						$ret[$link] = $item;
						$added++;
						if($added>=$limit)
							return;
					}
				}
			}
			else
				break;
		}
	}
}
