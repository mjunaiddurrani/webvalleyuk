<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$domain = "www.thewebfounders.co.uk";
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$phone = $_REQUEST['phone'];
$brief = $_REQUEST['brief'];
$news = $_REQUEST['news'];
$route = $_REQUEST['route'];
$brand = $_REQUEST['brand'];
$tag = $_REQUEST['tag'];
$price = $_REQUEST['price'];
$domain = "www.websitevalley.co.uk";


$data=array(
'name'=> $name,
'email'=>$email,
'phone'=>$phone,
'brief'=>$brief,
'news'=>$news,
'route'=>$route,
'brand'=>$brand,
'tag' => $tag,
'price'=> $price,
'domain'=> $domain
);
$payload=json_encode($data);
$curl = curl_init();
curl_setopt_array($curl, array(
CURLOPT_URL => "https://dashboard.ghostwritingfounder.com/api/customer",
CURLOPT_RETURNTRANSFER => true,
CURLOPT_ENCODING => "",
CURLOPT_MAXREDIRS => 10,
CURLOPT_TIMEOUT => 30,
CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
CURLOPT_CUSTOMREQUEST => "POST",
CURLOPT_POSTFIELDS => $payload,
CURLOPT_HTTPHEADER => array(
'Content-Type: application/json',
),
));

$response = curl_exec($curl);

curl_close($curl);

$decodeResponse = json_decode($response);

$msg = $decodeResponse[1];


// $_SESSION['thanksMsg'] = $msg;

if (headers_sent()) {
    echo "<script>
    window.open('/thank-you/?thanksMsg=$msg','_self')
    </script>";
    echo "Redirect failed. Please click on this link: <a href='/thank-you/?thanksMsg=$msg'>/thank-you/?thanksMsg=$msg</a>";
}
else{
    exit(header("location:/thank-you/?thanksMsg=$msg"));
}
