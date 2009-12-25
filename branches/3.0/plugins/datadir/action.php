<?php

require_once( "../../php/xmlrpc.php" );
require_once( './util_rt.php' );
require_once( './conf.php' );

function Debug( $str )
{
	global $datadir_debug_enabled;
	if( $datadir_debug_enabled ) rtDbg( "DataDir", $str );
}

ignore_user_abort( true );
set_time_limit( 0 );

umask( $datadir_umask );
$errors = array();

if( !isset( $HTTP_RAW_POST_DATA ) )
	$HTTP_RAW_POST_DATA = file_get_contents( "php://input" );
if( isset( $HTTP_RAW_POST_DATA ) )
{
	$vars = split( '&', $HTTP_RAW_POST_DATA );
	$hash = null;
	$datadir = "";
	$move_datafiles = "0";
	foreach( $vars as $var )
	{
		$parts = split( "=", $var );
		if( $parts[0] == "hash" )
		{
			$hash = trim( $parts[1] );
		}
		else if( $parts[0] == "datadir" )
		{
			$datadir = trim( rawurldecode( $parts[1] ) );
		}
		else if( $parts[0] == "move_datafiles" )
		{
			$move_datafiles = trim( $parts[1] );
		}
	}

	Debug( "" );
	Debug( "--- begin ---" );
	if( $move_datafiles == '1' )
		Debug( $datadir.", move files" );
	else
		Debug( $datadir.", don't move files" );
	Debug( "run mode: \"".$datadir_runmode."\"" );

	if( $hash && strlen( $datadir ) > 0 && $datadir_runmode == 'rtorrent' )
	{
		$script_dir = rtAddTailSlash( dirname( __FILE__ ) );
		$php = $pathToPHP;
		if( !$php || $php == "" ) $php = "php";
		Debug( "script dir  : ".$script_dir );
		Debug( "path to php : ".$php );
		Debug( "hash        : ".$hash );
		Debug( "data dir    : ".$datadir );
		Debug( "move files  : ".$move_datafiles );
		$res = rtExec( "execute",
			array( "sh",
				"-c",
				$php." ".$script_dir."setdir.php ".
					$hash." \"".$datadir."\" ".$move_datafiles." &amp; exit 0",
			),
			$datadir_debug_enabled );
		if( !$res )
		{
			$errors[] = array('desc'=>"WUILang.datadirSetDirFail", 'prm'=>$datadir);
		}
	}

	if( $hash && strlen( $datadir ) > 0 && $datadir_runmode == 'webserver' )
	{
		if( !rtMkDir( $datadir, 0777 ) )
		{
			Debug( "can't create ".$datadir );
			$errors[] = array( 'desc'=>"WUILang.datadirDirNotFound", 'prm'=>$datadir );
		}
		elseif( !rtSetDataDir( $hash, $datadir, $move_datafiles == '1', $datadir_debug_enabled ) )
		{
			Debug( "rtSetDataDir() fail!" );
			$errors[] = array( 'desc'=>"WUILang.datadirSetDirFail", 'prm'=>$datadir );
		}
	}
}

$ret = "{ errors: [";
foreach( $errors as $err )
	$ret .= "{ prm: \"".addslashes( $err['prm'] )."\", desc: ".$err['desc']." },";
$len = strlen( $ret );
if( $ret[$len - 1] == ',' )
	$ret = substr( $ret, 0, $len - 1 );
$ret .= "]}";

header( "Content-Length: ".strlen( $ret ) );
header("Content-Type: application/json; charset=UTF-8");
echo $ret;

Debug( "--- end ---" );

?>