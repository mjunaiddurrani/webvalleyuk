<?php
ob_start();
session_start();

$token = $_POST['stripeToken'];
$last4 = $_POST['last4'];
$exp_month = $_POST['exp_month'];
$exp_year = $_POST['exp_year'];
// $name = $_SESSION['name'];
$amount = $_POST['setprice'];
$purpose = $_POST['description'];
$userId = $_POST['user_id'];

$fname=$_POST['fname'];
$lname=$_POST['lname'];
$email=$_POST['email'];
$address=$_POST['address'];
$phonenumber=$_POST['phonenumber'];
$leadId=$_POST['lead_id'];
$TOKEN_URL=$_POST['TOKEN'];
$currency=$_POST['currency'];
$brand=$_POST['brand'];
// var_dump($brand);
// die();
$data = array(
    'leadid' => $leadId,
    'currency' => $currency,
    'fname' => $fname,
    'lname' => $lname,
    'email' => $email,
    'purpose' => $purpose,
    'amount' => $amount,
    'phonenumber' => $phonenumber,
    'user_id' => $userId,
    'address' => $address,
    'stripeToken' => $token,
    'last4' => $last4,
    'exp_month' => $exp_month,
    'exp_year' => $exp_year,
    'token_url'=>$TOKEN_URL,
    'brand'=>$brand
);
$d = json_encode($data);
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_URL => "https://www.ghostwritingfounder.com/stripeapi2.php",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => $d,
    CURLOPT_HTTPHEADER => array(
        'Content-Type: application/json',

    ),
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);
    // echo "<pre>";
    // var_dump($response,$err);
    // die();
    // echo "</pre>";
    curl_close($curl);
    $response=json_decode($response);
    if($response==null)
    {
    $msg="Payment Successfully";
    $status=1;    
    }
    else
    {
    $msg=$response->message;
    $status=$response->status;    
    }
    
    header("location:/thank-you/?successMsg=$msg&status=$status");
    

?>