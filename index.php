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
    case addslashes('/website-design-development/') :
        require __DIR__.'/views/website-design-development.php';
        break;
    case addslashes('/mobile-apps/') :
        require __DIR__.'/views/mobile-apps.php';
        break;
    case addslashes('/logo-design/') :
        require __DIR__.'/views/logo-design.php';
        break;
    case addslashes('/branding/') :
        require __DIR__.'/views/branding.php';
        break;
    case addslashes('/2d-3d-illustration/') :
        require __DIR__.'/views/2d-3d-illustration.php';
        break;
    case addslashes('/motion-graphics/') :
        require __DIR__.'/views/motion-graphics.php';
        break;
    case addslashes('/seo/') :
        require __DIR__.'/views/seo.php';
        break;
    case addslashes('/ghost-book-writing/') :
        require __DIR__.'/views/ghost-book-writing.php';
        break;
    case addslashes('/creative-copywriting/') :
        require __DIR__.'/views/creative-copywriting.php';
        break;
    case addslashes('/digital-marketing/') :
        require __DIR__.'/views/digital-marketing.php';
        break;
    case addslashes('/works/') :
        require __DIR__.'/views/works.php';
        break;
    case addslashes('/packages/') :
        require __DIR__.'/views/packages.php';
        break;
    case addslashes('/combo-packages/') :
        require __DIR__.'/views/combo-packages.php';
        break;
    case addslashes('/process/') :
        require __DIR__.'/views/process.php';
        break;
    case addslashes('/company/') :
        require __DIR__.'/views/company.php';
        break;
    case addslashes('/marketing-collaterals/') :
        require __DIR__.'/views/marketing-collaterals.php';
        break;
    case addslashes('/content/') :
        require __DIR__.'/views/content.php';
        break;
    case addslashes('/contact/') :
        require __DIR__.'/views/contact.php';
        break;
    case addslashes('/terms/') :
        require __DIR__.'/views/terms.php';
        break;
    case addslashes('/privacy-policy/') :
        require __DIR__.'/views/privacy-policy.php';
        break;

    case addslashes('/professional-logo-design/') :
        require __DIR__.'/landing2/professional-logo-design-sale.php';
        break;
        
        case addslashes('/professional-logo-design') :
            require __DIR__.'/landing2/professional-logo-design-sale.php';
            break;
    default:
        http_response_code(404);
        require __DIR__ . '/views/404.php';
        break;    
}






?>