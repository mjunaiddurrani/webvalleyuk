
<?php
ob_start();
session_start();


$url = $_SERVER['REQUEST_URI'];

// if(strpos($url,'/packages')){
//     require_once('./packages/index.php');
//     exit();
// }
if(strstr($url,'/packages',false)){
    require_once('./packages/index.php');
    exit();
}


$current_url = explode('?', $url);
$url = $current_url[0];



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




?>