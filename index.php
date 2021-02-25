<?php
ob_start();
session_start();


$url = $_SERVER['REQUEST_URI'];



$pieces = explode(' ', $url);
$last_word = array_pop($pieces);




$current_url = explode('?', $url);
$url = $current_url[0];


switch($url){
    case '/' :
        require __DIR__.'/views/home.php';
        break;
    case addslashes('/leads/') :
        require __DIR__.'/views/leads.php';
        break;
    case addslashes('/order/') :
        require __DIR__.'/views/order.php';
        break;
    case addslashes('/thank-you/') :
        require __DIR__.'/views/thankyou.php';
        break;
    case addslashes('/contact-us/') :
        require __DIR__.'/views/contact.php';
        break;
    default:
        http_response_code(404);
        require __DIR__ . '/views/404.php';
        break;    
}






?>