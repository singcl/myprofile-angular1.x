<?php
$callback = $_GET("callback");
$data = array("a","b","c");
$json = json_encode($data);
echo $callback."(".$json.")";
?>