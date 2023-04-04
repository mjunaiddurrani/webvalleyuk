<?php
session_start();

ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(E_ALL);

$url = $_SERVER['REQUEST_URI'];

// if(strpos($url,'/packages')){
//     require_once('./packages/index.php');
//     exit();
// }

if(strpos($url,'web-design-development/web-design-company')){
    require_once('./views/web-design-company.php');
    exit();
}

if($url == addslashes("/web-design-company/") || $url == "/web-design-company"){
    header("HTTP/1.1 301 Moved Permanently");
    header("Location: /web-design-development/web-design-company/");
    exit();
}

if($url == addslashes("/blog/contact/") || $url == "/blog/contact"){
    header("HTTP/1.1 301 Moved Permanently");
    header("Location: /contact/");
    exit();
}

if($url == addslashes("/blog/how-to-find-the-best-local-website-designers/") || $url == "/blog/how-to-find-the-best-local-website-designers"){
    header("HTTP/1.1 301 Moved Permanently");
    header("Location: /blog/how-to-find-the-best-local-website-designer/");
    exit();
}

$current_url = explode('?', $url);
$url = $current_url[0];


if(strpos($url,"/package/") !== false){
    require(__DIR__.'/package/index.php');
    exit();
}


$dir    = __DIR__.'/views';

$files = array_slice(scandir($dir), 2); 
// echo "<pre>";

$fileWithOutExt = array();

foreach($files as $file){
    // remove end slash if you dont need traling slash
    $without_extension = '/'.pathinfo($file, PATHINFO_FILENAME).'/';
    array_push($fileWithOutExt,$without_extension);
}

if($url=="/"){
    require $dir.'/home.php';
    die();
}

// print_r($fileWithOutExt);
// die();
if (in_array($url,$fileWithOutExt)) {
    for($i=0;$i<count($files);$i++){
        

        if($url == $fileWithOutExt[$i]){
            require $dir.'/'.$files[$i];
            // echo "somethisn";
        }
    
    }
    
}
else{
    require $dir.'/404.php';
}

// ob_flush();


?>
