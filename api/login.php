<?php
header('content-type:application/json;charset=utf8');
if($_POST['email'] == 'mhd@163.com') {
	$arr = array(
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

echo json_encode($arr);
}
?>