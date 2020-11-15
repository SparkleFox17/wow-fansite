<?php

$route->add('/', function() {
    $siteTitle = 'WoW - fansite';
    $siteDesc = 'wow fansite yeah';
    $logo = 'WoWlogo';

    getClasses();
    getHead($siteTitle, $siteDesc, $logo);
    include("view/index.php");
    getFoot();   
});

$route->add('/wotlk', function() {
    $siteTitle = 'WoW - fansite';
    $siteDesc = 'wow fansite yeah';
    $logo = 'WOW_Wrath_of_the_Lich_King';

    getClasses();
    getHead($siteTitle, $siteDesc, $logo);
    include("view/wotlk/index.php");
    getFoot();   
});

/* BUY STARTS */
$route->add('/buy/.+', function($service) {
    $siteTitle = 'kevinstoddart.com - Services- ' . undoSEOURL($service);
    $siteDesc = 'Ontario based realestate';
    $page = undoSEOURL($service);

    getClasses();
    getHead($siteTitle, $siteDesc);
    include("view/buy.php");
    getFoot();   
});
/* BUY ENDS */

$route->submit();

function getHead($siteTitle = null, $siteDesc = null, $logo = null) {

    include("./template/header.php");    

    return;
}

function getClasses() {
    
}

function getFoot() {
    include("./template/footer.php");  

    return;
}

function makeSEOURL($toURL){
    //Lower case everything
    $toURL = strtolower($toURL);
    //Make alphanumeric (removes all other characters)
    $toURL = preg_replace("/[^a-z0-9_\s-]/", "", $toURL);
    //Clean up multiple dashes or whitespaces
    $toURL = preg_replace("/[\s-]+/", " ", $toURL);
    //Convert whitespaces and underscore to dash
    $toURL = preg_replace("/[\s_]/", "-", $toURL);
    return $toURL;
}

function undoSEOURL($toName){
    $toName = str_replace('-', ' ', $toName);
    $toName = preg_replace('/(?<!\s)-(?!\s)/', ' ', $toName);
    $toName = ucwords($toName);
    return $toName;
}


