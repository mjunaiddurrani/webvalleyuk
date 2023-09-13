<?php
if ($_SERVER['REQUEST_METHOD'] != 'POST') {
    
    http_response_code(200);
    echo "GET method is not allowed";
    die();
}

include_once($_SERVER['DOCUMENT_ROOT']."/includes/get-dashboard.php");
include_once($_SERVER['DOCUMENT_ROOT']."/class/Api.class.php");
function get_client_ip(){
    return isset($_SERVER['HTTP_CF_CONNECTING_IP'])?$_SERVER['HTTP_CF_CONNECTING_IP']:'127.0.0.1';
}
$route = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '';

$reference_url;

if (strlen($_SESSION['refer_url']) > 500) {
    $reference_url = substr($_SESSION['refer_url'], 0, 500);
} else {
    $reference_url = $_SESSION['refer_url'];
}


$brief = $_REQUEST['brief'];
if(isset($_REQUEST['company']) || isset($_REQUEST['budget'])) {
    $brief .= '|| company =>' . $_REQUEST['company'] . '|| budget =>' . $_REQUEST['budget'];
}

$data = array(
    'name' => $_REQUEST['name'],
    'email' => $_REQUEST['email'],
    'phone' => $_REQUEST['phone'],
    'website_url' => $_SERVER['HTTP_HOST'],
    'brief' => $brief,
    'source' => $_SESSION['lead_type'],
    'news' => 1,
    'route' => $route,
    'brand' => $_REQUEST['brand'],
    'tag' => $_REQUEST['tag'],
    'price' => $_REQUEST['price'],
    'domain' => $_SERVER['HTTP_HOST'],
    'ip_address' => get_client_ip(),
    'server_ip' => $_SERVER['SERVER_ADDR'] ?? null,
    'reference_url' => $reference_url ?? null,
);

// print_r($data);
// die();

try{
    function random_string($length) {
        return bin2hex(random_bytes($length));
    }
    $fileName = random_string(5).date("Y-m-d_h_i_sA").".txt";
    $path = $_SERVER['DOCUMENT_ROOT'].'/.hkjgdshagkjhadskjhfkjdsafhakjdsfhakjdshgf';

    if (!file_exists($path)) {
        mkdir($path, 0777, true);
    }

    $myfile = fopen($path.'/'.$fileName, "w");
    $txt = json_encode($_REQUEST);
    fwrite($myfile, $txt);
    fclose($myfile);
    
}catch(\Exception $e){
    $error = $e->getMessage();
}

$api = new Api();
$res = $api->hit($dashboardUrl."/customer",$data, "POST");
$res = json_decode($res);
$msg = $res[1];

header("location:/thank-you/?successMsg=$msg");

if(!$msg){
    exit(header("location:/"));
}



