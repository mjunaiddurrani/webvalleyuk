<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


require('class/Api.class.php');
require('config.php');
$base_dev_dashboard = "http://dev.dashboard.ourbase.camp/api/";
$brandUrl = "https://www.websitevalley.co.uk/";


if(!isset($_REQUEST['token']) || $_REQUEST['token'] != "4ef81179fbfb0ac711af4949fe4b85f1" || !isset($_REQUEST['backUrl'])){
    header('location: /');
    exit();
}
$error = "";
$api = new Api;


$dataFiles = [
    'robotsFileName' => "robots.txt",
    'pacakgeJson' => "json/packages.json",
    'metaData' => "json/metaData.json",
    'headFile' => "json/headFile.json",
    'scriptFile' => "json/scriptFile.json",
];

foreach($dataFiles as $file){
    if(!file_exists($file)){
        $fp = fopen($file,'wb');
        fwrite($fp,"");
        fclose($fp);
    }
}
$endPoints = [
    'robots' => 'robots',
    'packages' => 'packages',
    'meta-data' => 'meta-data',
    'head-file' => 'head-file',
    'script-file' => 'script-file',
];

// the bellow brand url comes from config file 
$brandData = [
    'brandUrl' => $brandUrl,
];
// work for fetch robots file data and write in robots file
$responseRobots = $api->hit($base_dev_dashboard.$endPoints['robots'],$brandData,"GET");
$rbotsFile = json_decode($responseRobots)->data->robotsContent;
$robotsFileOpen = fopen($dataFiles['robotsFileName'],'w') or die("unable to open ".$dataFiles['robotsFileName']." file");
if(!fwrite($robotsFileOpen,$rbotsFile)){
    $error = "$robotsFile can not be write";
}

// robots file work end 

// packages file json work starts here 
$responsePackages = $api->hit($base_dev_dashboard.$endPoints['packages'],$brandData,"GET");
$packagesFile = json_decode($responsePackages)->data;
$packageJsonFile = fopen($dataFiles['pacakgeJson'],'w') or die("unable to open ".$dataFiles['pacakgeJson']." file");
if(!fwrite($packageJsonFile,json_encode($packagesFile))){
    $error = "$robotsFile can not be write";
}

// metaData file update 
$responseMetaData = $api->hit($base_dev_dashboard.$endPoints['meta-data'],$brandData,"GET");
$metaDataD = json_decode($responseMetaData)->data;
$metaDataFile = fopen($dataFiles['metaData'],'w') or die("unable to open ".$dataFiles['metaData']." file");
if(!fwrite($metaDataFile,json_encode($metaDataD))){
    $error = "$robotsFile can not be write";
}
// headFile file update 
$responseHeadFile = $api->hit($base_dev_dashboard.$endPoints['head-file'],$brandData,"GET");
$headFileD = json_decode($responseHeadFile)->data;
$headFileData = fopen($dataFiles['headFile'],'w') or die("unable to open ".$dataFiles['headFile']." file");
if(!fwrite($headFileData,json_encode($headFileD))){
    $error = "$robotsFile can not be write";
}
// scriptFile file update 
$responsescriptFile = $api->hit($base_dev_dashboard.$endPoints['script-file'],$brandData,"GET");
$scriptFileD = json_decode($responsescriptFile)->data;
$scriptFileData = fopen($dataFiles['scriptFile'],'w') or die("unable to open ".$dataFiles['scriptFile']." file");
if(!fwrite($scriptFileData,json_encode($scriptFileD))){
    $error = "$robotsFile can not be write";
}

$backUrl = $_REQUEST['backUrl'];
if(strpos($backUrl,'?')){
    $querySymbol = "&";
}else{
    $querySymbol = "?";
}

header("location: ".$backUrl.$querySymbol."message=data updated successfully");
