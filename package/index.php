
<!doctype html>
<html lang="en">

<head>

<?php include_once($_SERVER['DOCUMENT_ROOT'].'/includes/head.php') ?>
<?php
$url = $_SERVER['REQUEST_URI'];
$urlPrams = explode('/',$url);
$category =$urlPrams[2];
$packageSlug = $urlPrams[3];

$packageArray = (array)$pacakges->$category->packagesArray;
$package = $packageArray[$packageSlug];

?>

<title><?= $package->heading ?>| Website Valley </title>
<meta name="description" content="<?= $package->heading ?> package allows live conferencing features and tailored client/user dashboards with a strong semi-automated admin panel.">

<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<link rel="icon" href="favicon.ico" type="image/x-icon" />
<link href="/css/m-style.css" rel="stylesheet" type="text/css" />
<link href="/css/new-inner-package.css" rel="stylesheet" type="text/css" />
<link href="https://fonts.googleapis.com/css?family=Bai+Jamjuree:300,400,500,600,700|Libre+Franklin:400,500,600,700,800,900&amp;display=swap" rel="stylesheet">


<style>
  header .navbar {
    background: #042048;
    animation: header .7s ease-in-out;
}
</style>
</head>
<body class="inerservice">



<div class="mobile-nav"> <a href="/" class="logo-main"> <img src="/images/home/logo.png" alt="*" /></a>
  
</div>
<main class="app-container">

<?php include_once($_SERVER['DOCUMENT_ROOT'].'/includes/header.php') ?>
 



        <div class="works-wrap">

            <section class="subscribe-fold sec-padding-60">

                <div class="container">
                    <div class="col-md-12">
                        <h1 class="myheading"><?= $package->heading ?></h1>

                        <!-- <p class="mytext">Subscription Fee 4 Months £2599 - 30% OFF 5 Keywords</p> -->
                    </div>


                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-4">
                            <div class="subs-pac bronze ">
                                <h3><?= $package->heading ?></h3>
                                <h6><span class="old">£<?= $package->amount *2 ?></span><?= $package->amount ?>
                                    <!-- <b>USD</b> --><span><b class="monthss"></b><?= $package->description ?></span></h6>
                                <a href="tel:+4402038087061" class="ordrrrr ">Order Now</a>

                                <div class="actions row">
                                    <div class="col-md-5 col-xs-6">
                                        <a href="javascript:;" onclick="setButtonURL();" target="_self" class="chatbtn"><i class="fa fa-wechat"></i> Live Chat</a>
                                    </div>
                                    <div class="col-md-7 col-xs-6">
                                        <a href="tel:442038087061" class="numberbtn"><i class="fa fa-phone-square"></i> +442038087061</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-8">
                            <div class="sub-list ">
                                <div class="table-packages bronze">
                                    <div class="head">
                                        <h5>Package Includes</h5>
                                        <!-- <h6><b>$</b><span>1,600.00</span> only</h6> -->
                                    </div>
                                    <div class="body">
                                        <ul class="subscription-list">
                                        <?php foreach($package->details as $detail):?>
                                            <li>
                                                <h6><?= $detail->detail?></h6>
                                            </li>
                                        <?php endforeach;?>
                                           
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


        <section class="bottomcta">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <ul class="ctalist">
                            <li>
                                <h3>Email</h3>
                                <div class="wrap">
                                    <div class="iconpart">
                                        <span class="icon-envelope-o"></span>
                                    </div>
                                    <div class="textpart">

                                        <a href="mailto:query@websitevalley.co.uk">query@websitevalley.co.uk</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <h3>Address</h3>
                                <div class="wrap">
                                    <div class="iconpart">
                                        <span class="icon-location"></span>
                                    </div>
                                    <div class="textpart">
                                        <p> 54 park avenue barking, Essex, IG11 8QU,  UK</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <h3>Phone</h3>
                                <div class="wrap">
                                    <div class="iconpart">
                                        <span class="icon-phone2"></span>
                                    </div>
                                    <div class="textpart">
                                        <a href="tel:+442038087061" class="callbx">Call Us +442038087061</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>



        <div class="belowform" id="btm-frm">
            <div class="container ">
                <div class="row">
                    <div class=" col-lg-12 col-xl-12 text-center">
                        <div class="home-banner-content">
                            <div class="col-lg-8 offset-lg-2 inner-content text-left">
                                <div class="form-box-main clearfix">
                                      <h2>Let’s talk about your next Big thing!</h2>
                                    <p>Heads up! We require that you sign up for Website Valleyservices and packages. We make all your dreams come true in a successful project.</p>
 <?php include_once($_SERVER['DOCUMENT_ROOT'].'/includes/form.php');?>

                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>





<?php include_once($_SERVER['DOCUMENT_ROOT'].'/includes/footer.php');?>
<!-- <script src="../assets/js/mlib.js"></script> 
<script src="../assets/js/jquery.cookie.js" defer></script>  -->
<?php include_once($_SERVER['DOCUMENT_ROOT'].'/includes/scripts.php');?>
<script src="/js/functions.js" defer></script> 
</body>

</html>