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
    case addslashes('/branding/') :
        require __DIR__.'/views/branding.php';
        break;
    case addslashes('/combo-packages/') :
        require __DIR__.'/views/combo-packages.php';
        break;
    case addslashes('/contact/') :
        require __DIR__.'/views/contact.php';
        break;
    case addslashes('/custom-quote/') :
        require __DIR__.'/views/custom-quote.php';
        break;
    case addslashes('/ecommerce-website-design/') :
        require __DIR__.'/views/ecommerce-website-design.php';
        break;
    case addslashes('/mobile-application/') :
        require __DIR__.'/views/mobile-application.php';
        break;
    case addslashes('/not-found/') :
        require __DIR__.'/views/not-found.php';
        break;
    case addslashes('/order/') :
        require __DIR__.'/views/order.php';
        break;
    case addslashes('/packages/') :
        require __DIR__.'/views/packages.php';
        break;
    case addslashes('/portfolio/') :
        require __DIR__.'/views/portfolio.php';
        break;
    case addslashes('/privacy-policy/') :
        require __DIR__.'/views/privacy-policy.php';
        break;
    case addslashes('/terms-conditions/') :
        require __DIR__.'/views/terms-conditions.php';
        break;
    case addslashes('/video-animation/') :
        require __DIR__.'/views/video-animation.php';
        break;
    case addslashes('/web-app-development/') :
        require __DIR__.'/views/web-app-development.php';
        break;
    case addslashes('/web-design/') :
        require __DIR__.'/views/web-design.php';
        break;
    case addslashes('/website-design-prototype/') :
        require __DIR__.'/views/website-design-prototype.php';
        break;
    default:
        http_response_code(404);
        require __DIR__ . '/views/404.php';
        break;    
}






?>