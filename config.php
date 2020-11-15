<?php

require_once("./model/class.route.php");
$route = new Route();

if(isset($_REQUEST['uri'])) {
    $u = $_REQUEST['uri'];
}else{
    $u = "/";
}

$GLOBALS['active'] = $u;

$sitepath = "http://" . $_SERVER['HTTP_HOST'] . "/2020/world-of-warcraft";

define('SITEPATH', $sitepath);

require_once('appRoute.php');
?>