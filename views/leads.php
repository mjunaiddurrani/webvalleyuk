<?php
// session_start();
include_once($_SERVER['DOCUMENT_ROOT'] . "/includes/get-dashboard.php");
include_once($_SERVER['DOCUMENT_ROOT'] . "/class/Api.class.php");

$brief = (isset($_REQUEST['brief'])?$_REQUEST['brief']:" "). ' | ' .  (isset($_REQUEST['company'])?$_REQUEST['company']:" ") ." | ".  (isset($_REQUEST['budget'])?$_REQUEST['budget']:" "); 

function get_client_ip()
{
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if (isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if (isset($_SERVER['HTTP_X_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if (isset($_SERVER['HTTP_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if (isset($_SERVER['HTTP_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if (isset($_SERVER['REMOTE_ADDR']))
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = null;
    return $ipaddress;
    // return $_SERVER['REMOTE_ADDR'];
}

$route = explode('?', $_REQUEST['route']);
$route = $route[0];

$reference_url;

if (strlen($_SESSION['refer_url']) > 500) {
    $reference_url = substr($_SESSION['refer_url'], 0, 500);
} else {
    $reference_url = $_SESSION['refer_url'];
}



$data = array(
    'name' => $_REQUEST['name'],
    'email' => $_REQUEST['email'],
    'phone' => $_REQUEST['phone'],
    'website_url' => $_SERVER['HTTP_HOST'],
    'brief'=>$brief,
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

try {
    function random_string($length)
    {
        return bin2hex(random_bytes($length));
    }
    $fileName = random_string(5) . date("Y-m-d_h_i_sA") . ".txt";
    $path = $_SERVER['DOCUMENT_ROOT'] . '/.hkjgdshagkjhadskjhfkjdsafhakjdsfhakjdshgf';

    if (!file_exists($path)) {
        mkdir($path, 0777, true);
    }

    $myfile = fopen($path . '/' . $fileName, "w");
    $txt = json_encode($_REQUEST);
    fwrite($myfile, $txt);
    fclose($myfile);
} catch (\Exception $e) {
    $error = $e->getMessage();
}

$api = new Api();
$res = $api->hit($dashboardUrl . "/customer", $data, "POST");

// var_dump($res);
// die();
$res = json_decode($res);




$msg = $res[1];

header("location:/thank-you/?successMsg=$msg");

if (!$msg) {
    exit(header("location:/"));
}

