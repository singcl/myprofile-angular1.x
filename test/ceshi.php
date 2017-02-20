<?php
header('content-type:application/json;charset=utf8');
$callback = $_GET["callback"];
$data = array(
	'status' => true,
	'errMsg' => '',
	'user' =>array(
		array(
			'email' => 'mhd@163.com',
			'name' => 'mhd'
		),
		array(
			'email' => 'xyt@163.com',
			'name' => 'xyt'
		)
	)
);
$json = json_encode($data);
echo $callback."(".$json.")";
?>