<!DOCTYPE html>
<html lang="en-US">
 
<head>
    <meta charset="utf-8">
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta content="Through our social media specialist agency, we provide social media content creation services as well as the simplest and the most comprehensive solutions." name="description">
    <link rel="canonical" href="social-media-marketing/" />
    <meta content="" name="author">
    <link href="images/fav.png" rel="icon">
    <title>Best Social Media Marketing Agency in UK | Professional Web Designs</title>
    
<!-- head start -->


<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
include_once($_SERVER['DOCUMENT_ROOT']."/includes/token.php");
if (isset($_SERVER['HTTPS'])) {
	$requesMet = "https";
}else{
	$requesMet = "http";
}

if(!isset($_SESSION['url'])){
  $_SESSION['url'] = "$_SERVER[REQUEST_URI]";
 }

//  echo $_SESSION['url'];
//  die;
$pageUri =  $_SERVER['REQUEST_URI'];
$csrf = bin2hex(random_bytes(35));
$_SESSION['csrf'] = $csrf;

$metaData = json_decode(file_get_contents($_SERVER['DOCUMENT_ROOT'].'/json/metaData.json'),true);
$pacakges = json_decode(file_get_contents($_SERVER['DOCUMENT_ROOT'].'/json/packages.json'));
$curruntPage = "https://www.websitevalley.co.uk".$pageUri;

if(array_key_exists($curruntPage,$metaData)){
  $metaTitle = $metaData[$curruntPage]['meta_data']['metaTitle'];
  $metaDescription = $metaData[$curruntPage]['meta_data']['metaDescription'];

}else{
  $metaTitle = "";
  $metaDescription ="";
}

$headFileContent  = json_decode(file_get_contents($_SERVER['DOCUMENT_ROOT'].'/json/headFile.json'))->headContent;



// define dashboard url
$_SESSION['dashboard'] = 'http://127.0.0.1:8000';


?>

<base href="<?= $requesMet.'://'.$_SERVER['HTTP_HOST'].'/landingsmm/' ?>">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="google-site-verification" content="gy6PSMlqKV0kfPcqYFhdqUXgfpeXsasVfzn_EToaZK0" />
<link rel="icon" href="favicon.png" type="image/x-icon" />
<link href="../assets/css/m-style.css" rel="stylesheet" type="text/css" />
<link href="../assets/css/style.css" rel="stylesheet" type="text/css" />


<link href="../css/all03c7.css?s" rel="stylesheet">

<link href="../css/custom274a.css?204" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="../cdn.jsdelivr.net/npm/slick-carousel%401.8.1/slick/slick.css"/>





<style>
   #modalForDiscount p{
		color:#fff;
	}
	#modalForDiscount input,
	#modalForDiscount textarea{
		margin-top:10px;
	}
	.mainH1{
		font-size:25px;
		font-weight:bold;
	}
  .jun {
    visibility: hidden !important;
    position: absolute;
    max-width: 1px !important;
}
</style>




  <link rel="canonical" href="<?= $requesMet.'://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'] ?>">
  <link rel="alternate" href="<?= $requesMet.'://'.$_SERVER['HTTP_HOST'].''.$_SERVER['REQUEST_URI'] ?>" hreflang="en-GB" />

  
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-194982789-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-194982789-1');
</script>


<!-- head end -->



<link href="css/all03c7.css?s" rel="stylesheet">
<link href="../www.jqueryscript.net/demo/Date-Time-Picker-Bootstrap-4/build/css/bootstrap-datetimepicker.min.css" rel="stylesheet">
<link href="css/custom274a.css?204" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="../cdn.jsdelivr.net/npm/slick-carousel%401.8.1/slick/slick.css"/>

    

<!-- Start of  Zendesk Widget script -->
<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=b24c63b6-64a3-4e62-b7ee-492f535de0cd" defer type="c8557bf7748ccc07b58855cf-text/javascript"> </script>
<!-- End of  Zendesk Widget script -->
<meta name="google-site-verification" content="MiG8AqBFAMCQR5pc28_hxXHNUiMbAMJ70s3qe4zzR_8" />


  <script async src='cdn-cgi/challenge-platform/h/g/scripts/invisible0955.js?ts=1654516800'></script></head>
  <body>


  <!-- Header Section Begin -->

  <?php include_once($_SERVER['DOCUMENT_ROOT'].'/includes/header.php');?>

  <!-- Header Section End -->

<!-- Inner Banner Section Begin -->

      <section class="inner-banner blue-bg_01">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6 col-sm-6">
              <div class="web_content_Sec text-left">
                <h1 class="text-white">Strategic Social Media Marketing in UK</h1>
                <p  class="text-white font-weight-lighter">Driving your businesses to the limelight with robust social media marketing Services. We are a Social media marketing company crafting strategies for implementation to maximise your brand visibility converting visitors to a loyal clientele. We give your website a boost by driving organic lead to your brand. Work with us to ensure a leading position in the market. With our affordable SEO services, we ensure to elevate your brand visibility on the search engines.  </p>
                <ul class="banner_list">
                  <li>Higher Rank Your Website On (SERP)</li>
                  <li>Ranked #1 SEO Agency On Search Engines</li>
                  <li>Get Your Website SEO Audit Report for Free</li>
                  <li>15+ Years of SEO Experience & Over 500 Clients</li>
                </ul>

                <div class="rating_banner">
                  <span>Rated 9 out of 10</span>
                  <ul>
                    <li><img src="images/stars_icon.png" class="img-responsive" alt=""></li>
                    <li><img src="images/stars_icon.png" class="img-responsive" alt=""></li>
                    <li><img src="images/stars_icon.png" class="img-responsive" alt=""></li>
                    <li><img src="images/stars_icon.png" class="img-responsive" alt=""></li>
                    <li><img src="images/stars_icon.png" class="img-responsive" alt=""></li>
                  </ul>
                  <span>based on 3,543 satisfied customers.</span>
                </div>

                <div class="partner_logo">
                  <img src="images/partner_logo.png" class="img-responsive" alt="">
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-6">
              <div class="banner_form_sec">
                <form data-aos="fade-right" data-aos-duration="1000"  method="POST" data-noinfo="true"action="/leads/">

                  
                
                <input type="hidden" name="route" value="<?= $_SERVER['REQUEST_URI'] ?>">   
                    <input type="hidden" name="brand" value="webvalleyuk">   
                    <input type="hidden" name="token" value="<?= $token;?>">   
                    <input type="hidden" name="tag" value="modal-auto">
                    <input type="hidden" name="price" value="null">
                    <input type="hidden" name="news" value="1">
<input type="text" class="jun"  name="gender">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="banner_form_head">
                        <h3>Social Media Marketing</h3>
                        <h2>Get a Quote</h2>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                      <input type="text" name="name" class="form-control" required="" placeholder="Full Name*">
                    </div>

                    <div class="col-md-6 col-sm-6">
                      <input type="email" name="email" class="form-control" required="" placeholder="Email*">
                    </div>

                    <div class="col-md-12 col-sm-6">
                      <input type="phone" name="phone" class="form-control" required="" placeholder="Phone*">
                    </div>

                    <!-- <div class="col-md-6 col-sm-6">
                      <input type="text" name="country" class="form-control" required="" placeholder="Country*">
                    </div> -->

                    <!-- <div class="col-md-6 col-sm-6">
                      <select name="Interested-in" required="">
                        <option value="">I am Interested in</option>
                        <option value="Logo Design">Logo Design  </option>
                        <option value="Brand Development ">Brand Development </option>
                        <option value="Web Design &amp; Development ">Web Design &amp; Development </option>
                        <option value="App Design &amp; Development">App Design &amp; Development </option>
                        <option value="Back-End Development">Back-End Development </option>
                        <option value="Digital Marketing ">Digital Marketing </option>
                        <option value="Marketing Collaterals">Marketing Collaterals </option>
                        <option value="Motion Graphics">Motion Graphics </option>
                        <option value="Website Management">Website Management </option>
                        <option value="Domain Registration">Domain Registration </option>
                        <option value="Creative Copywriting">Creative Copywriting </option>
                        <option value="2D &amp; 3D Illustration">2D &amp; 3D Illustration </option>
                      </select>
                    </div>

                    <div class="col-md-6 col-sm-6">
                      <select name="Forecasted-Budget" required="">
                        <option value="">Forecasted-Budget</option>
                        <option>Less than $1000</option>
                        <option>$1000 to $2000</option>
                        <option>$2000 to $5000</option>
                        <option>$5000 to $10,000 </option>
                        <option>$20,000 to $30,000</option>
                        <option>$35,000 to $50,000</option>
                        <option>$50,000 and above</option>
                      </select>
                    </div> -->

                    <div class="col-md-12">
                      <textarea name="brief" placeholder="Message" required="" class="form-control"></textarea>
                    </div>
                    <div class="col-md-12">
                      <div class="form_btn">
                        <input type="submit" value="Get a Free Quote">
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

<!-- Inner Banner Section End -->

  
  <!-- How does it work Section Begin -->

      <section class="does_work_sec">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-sm-12">
              <div class="web_content_Sec">
                <h2>CONFIRMED RESULT-DRIVEN DIGITAL PLANS  </h2>
                <p>At professional web designs, we can help modify and handle social media marketing for you. We will provide the results during your social media campaigns successes. In addition, we will be suggesting on improvements and brand growth awareness on all highlighted social networks. Visit our experts today.</p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="portfolio_tab_sec">
              <div>
                <ul class="nav nav-tabs"  role="tablist" id="nav-tab">
                  <li class="ltd-tab_icon_01 col-3">
                    <a class="nav-item nav-link  active" id="research-tab" data-toggle="tab" href="#research" role="tab" aria-controls="research" aria-selected="true">
                      <img src="images/ltd-tab_icon_01.png" class="img-responsive icon-bg" alt="tab_icon"><span><img src="images/logo-design/ld-logo-design_img_01.png"></span>
                      <h3>Research</h3>
                    </a>
                  </li>
                  <li class="ltd-tab_icon_02 col-3">
                    <a class="nav-item nav-link " id="imagine-tab" data-toggle="tab" href="#imagine" role="tab" aria-controls="imagine" aria-selected="true">
                      <img src="images/ltd-tab_icon_02.png" class="img-responsive icon-bg" alt="tab_icon"><span><img src="images/logo-design/ld-logo-design_img_02.png"></span>
                      <h3>Imagine</h3>
                    </a>
                  </li>
                  <li class="ltd-tab_icon_03 col-3">
                    <a class="nav-item nav-link " id="plan-tab" data-toggle="tab" href="#plan" role="tab" aria-controls="plan" aria-selected="true">
                      <img src="images/ltd-tab_icon_03.png" class="img-responsive icon-bg" alt="tab_icon"><span><img src="images/logo-design/ld-logo-design_img_03.png"></span>
                      <h3>Plan</h3>
                    </a>
                  </li>
                  <li class="ltd-tab_icon_04 col-3">
                    <a class="nav-item nav-link " id="create-tab" data-toggle="tab" href="#create" role="tab" aria-controls="create" aria-selected="true">
                      <img src="images/ltd-tab_icon_04.png" class="img-responsive icon-bg" alt="tab_icon"><span><img src="images/logo-design/ld-logo-design_img_04.png"></span>
                      <h3>Create</h3>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="does_work_tab">
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="research" role="tabpanel" aria-labelledby="research-tab">
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                      <div class="does_work_content">
                        <h2>Research</h2>
                        <p>You will be Beholding the position of best Social Media Service provider. We research to provide you with services you want in social media marketing if you want to level up the number of your followers on platforms.  </p>
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-6">
                      <div class="does_work_img">
                        <img src="images/research_icon_img_01.png" class="img-responsive" alt="">
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade show" id="imagine" role="tabpanel" aria-labelledby="imagine-tab">
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                      <div class="does_work_content">
                        <h2>Imagine</h2>
                        <p>According to your business, a perfect marketing strategy is imagined and drawn on paper. Get the right plan for your business by contacting us now.</p>
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-6">
                      <div class="does_work_img">
                        <img src="images/research_icon_img_02.png" class="img-responsive" alt="">
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade show" id="plan" role="tabpanel" aria-labelledby="plan-tab">
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                      <div class="does_work_content">
                        <h2>Plan</h2>
                        <p>We then plan with our professionals to create a scheme that matches your brand. Finally, effortlessly engage with your followers with our handy plans.</p>
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-6">
                      <div class="does_work_img">
                        <img src="images/research_icon_img_03.png" class="img-responsive" alt="">
                      </div>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade show" id="create" role="tabpanel" aria-labelledby="create-tab">
                  <div class="row">
                    <div class="col-md-6 col-sm-6">
                      <div class="does_work_content">
                        <h2>Create</h2>
                        <p>The last and final step for your business is to create the most diversified plan you might be looking for everywhere else.</p>
                      </div>
                    </div>

                    <div class="col-md-6 col-sm-6">
                      <div class="does_work_img">
                        <img src="images/research_icon_img_04.png" class="img-responsive" alt="">
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

  <!-- How does it work Section End -->


  <!-- Design Services Section Begin -->

    <section class="design_serices_Sec">
      <div class="container">
        <div class="row align-items-center order-change">
          <div class="col-md-6 col-sm-6">
            <div class="design_services_img">
              <img src="images/socail-media-marketing.png" class="img-responsive" alt="">
            </div>
          </div>

          <div class="col-md-6 col-sm-6">
            <div class="web_content_Sec text-left">
              <h2>

BUILD RELATIONSHIPS ALONG WITH YOUR OBTAINER
</h2>
              <p>We plan to make new customer while keeping our existing ones happy and interested. In this era, social media is a powerful tool for your business to boost your sale, visibility and reach and to engage by posting contents that are trending. Our team will ensure you get your social media post to get enough reaches and audience through the graphic, video, and blog post.  </p>
              <p>We are offering complete social media marketing procedures that are planned according to the altered data according to your business demand. We will also be taking care of all the things, including account management, social posting, photos editorial, videos and reporting.</p>

            </div>
          </div>
        </div>
      </div>
    </section>

  <!-- Design Services Section End -->


  <!-- Portfolio Section Begin -->

    <section class="portfolio portfolio-col" id="portfolia-sec">
    <div class="container-fluid">
        <div class="img-head text-center">
            <h2>OUR PORTFOLIO </h2>
            <p>Our work speaks for itself. Don’t just take our word for it, take a look at our portfolio to decide. </p>
        </div>
    
    <ul class="nav nav-tabs" id="myTab" role="tablist">
    
    <li class="nav-item">
        <a class="nav-link active" id="website-tab" data-toggle="tab" href="#website" role="tab" aria-controls="website" aria-selected="true">Website</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="logo-tab" data-toggle="tab" href="#logo" role="tab" aria-controls="logo" aria-selected="false">Logo</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="branding-tab" data-toggle="tab" href="#branding" role="tab" aria-controls="branding" aria-selected="false">Branding</a>
    </li>

    <li class="nav-item">
        <a class="nav-link" id="illustration-tab" data-toggle="tab" href="#illustration" role="tab" aria-controls="illustration" aria-selected="false">Illustration</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" id="video-tab" data-toggle="tab" href="#video" role="tab" aria-controls="video" aria-selected="false">Video</a>
    </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade" id="logo" role="tabpanel" aria-labelledby="logo-tab">
                <div class="row">
                    
                        <div class="col-sm-3">
                            <a href="images/logo/home/h1.jpg" class="portfolio_various" data-fancybox="images">
                                <img data-src="images/logo/home/h1.jpg" alt="images1" class="lazy"> 
                            </a>
                        </div>

                
                <div class="col-sm-3">
                    <a href="images/logo/home/h2.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/logo/home/h2.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/logo/home/h3.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/logo/home/h3.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/logo/home/h4.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/logo/home/h4.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/logo/home/h5.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/logo/home/h5.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/logo/home/h6.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/logo/home/h6.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/logo/home/h7.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/logo/home/h7.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/logo/home/h8.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/logo/home/h8.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                        </div>
    </div>
    <div class="tab-pane fade active show" id="website" role="tabpanel" aria-labelledby="website-tab">
        <div class="row">
            
                <div class="col-sm-3">
                    <a href="images/portfolio/websites/1_b.png" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/portfolio/websites/1.png" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/portfolio/websites/2_b.png" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/portfolio/websites/2.png" alt="images2" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/portfolio/websites/3_b.png" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/portfolio/websites/3.png" alt="images3" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/portfolio/websites/4_b.png" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/portfolio/websites/4.png" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/portfolio/websites/5_b.png" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/portfolio/websites/5.png" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/portfolio/websites/6_b.png" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/portfolio/websites/6.png" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/portfolio/websites/8_b.png" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/portfolio/websites/8.png" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/portfolio/websites/9_b.png" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/portfolio/websites/9.png" alt="images1" class="lazy">
                    </a>
                </div>




                <div class="col-sm-3">
                    <a href="images/portfolio/websites/10_b.png" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/portfolio/websites/10.png" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/portfolio/websites/11_b.png" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/portfolio/websites/11.png" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/portfolio/websites/12_b.png" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/portfolio/websites/12.png" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/portfolio/websites/13_b.png" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/portfolio/websites/13.png" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/portfolio/websites/14_b.png" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/portfolio/websites/14.png" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/portfolio/websites/15_b.png" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/portfolio/websites/15.png" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/portfolio/websites/16_b.png" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/portfolio/websites/16.png" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/portfolio/websites/9_b.png" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/portfolio/websites/9.png" alt="images1" class="lazy">
                    </a>
                </div>

                        </div>
    </div>
    <div class="tab-pane fade" id="branding" role="tabpanel" aria-labelledby="branding-tab">
        <div class="row">
            
                <div class="col-sm-3">
                    <a href="images/branding/1.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/branding/1.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/branding/2.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/branding/2.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/branding/3.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/branding/3.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/branding/4.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/branding/4.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/branding/5.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/branding/5.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/branding/6.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/branding/6.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/branding/7.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/branding/7.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/branding/8.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/branding/8.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                        </div>
    </div>
    <div class="tab-pane fade" id="illustration" role="tabpanel" aria-labelledby="illustration-tab">
        <div class="row">
            
                <div class="col-sm-3">
                    <a href="images/illustration/1.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/illustration/1.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/illustration/2.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/illustration/2.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/illustration/3.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/illustration/3.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/illustration/4.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/illustration/4.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/illustration/5.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/illustration/5.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/illustration/6.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/illustration/6.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/illustration/7.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/illustration/7.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                
                <div class="col-sm-3">
                    <a href="images/illustration/8.jpg" class="portfolio_various" data-fancybox="images">
                        <img data-src="images/illustration/8.jpg" alt="images1" class="lazy">
                    </a>
                </div>

                        </div>
    </div>
    <div class="tab-pane fade" id="video" role="tabpanel" aria-labelledby="video-tab">
        <div class="row">
            
            <div class="element-item col-sm-3" data-category="video">
                <a href="https://youtu.be/k6sESMwsEWw" data-fancybox="video">
                    <img data-src="https://img.youtube.com/vi/k6sESMwsEWw/hqdefault.jpg" class="lazy"></a></div>
            
                <div class="element-item col-sm-3" data-category="video">
                    <a href="https://youtu.be/eQQCGJtKuMU" data-fancybox="video">
                        <img data-src="https://img.youtube.com/vi/eQQCGJtKuMU/hqdefault.jpg" class="lazy"></a></div>
                
                <div class="element-item col-sm-3" data-category="video">
                   <a href="https://youtu.be/epNr1clxG3Y" data-fancybox="video"><img data-src="https://img.youtube.com/vi/epNr1clxG3Y/hqdefault.jpg" class="lazy"></a> 
                </div>
                
                <div class="element-item col-sm-3" data-category="video">
                   <a href="https://youtu.be/OB4C1AVd9qo" data-fancybox="video"><img data-src="https://img.youtube.com/vi/OB4C1AVd9qo/hqdefault.jpg" class="lazy"></a> 
                </div>
                
                <div class="element-item col-sm-3" data-category="video">
                   <a href="https://youtu.be/-0dfLT0UQjA" data-fancybox="video"><img data-src="https://img.youtube.com/vi/-0dfLT0UQjA/hqdefault.jpg" class="lazy"></a> 
                </div>
                
                <div class="element-item col-sm-3" data-category="video">
                   <a href="https://youtu.be/MfdnkFcsEbA" data-fancybox="video"><img data-src="https://img.youtube.com/vi/MfdnkFcsEbA/hqdefault.jpg" class="lazy" ></a> 
                </div>
                
                <div class="element-item col-sm-3" data-category="video">
                   <a href="https://youtu.be/pB2Qmg40EDc" data-fancybox="video"><img data-src="https://img.youtube.com/vi/pB2Qmg40EDc/hqdefault.jpg" class="lazy"></a> 
                </div>
                
                 <div class="element-item col-sm-3" data-category="video">
                   <a href="https://youtu.be/v-rVRb84ZOo" data-fancybox="video"><img data-src="https://img.youtube.com/vi/v-rVRb84ZOo/hqdefault.jpg" class="lazy"></a> 
                </div>
                
                

                        </div>
    </div>
    </div>
            <a href="portfolio/" class="btn-custom">View More</a>
            

    </div>
</section>
  <!-- Portfolio Section Begin -->
    
    



<!-- Packages Section Begin -->

<section class="package-section logo_pacages seo_packages pd-70">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="web_content_Sec">
          <h3>Get Started</h3>
          <h2>Build Impressive SMM Campaigns on Budget</h2>
          <p>Here we offer the best social media marketing solutions to maximize your brand awareness. Have a session with our team to get a custom quote for SMM.</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-6 col-12">
        <div class="package-box">
          <h4>Startup Plan Packages</h4>
          <span class="del-amount"><del>£400.00 ONLY</del></span>
          <span class="price-amount"><span class="smal">£</span>350.00</span>
          <span class="plan">£950 – Quarterly Plan</span>
          <span class="plan1">£300 – Recurring Monthly Payment</span>
          <p>Suitable for newly formed organizations or small incubated startups</p>
          <div class="package-list">
            <ul class="pkg-opt mt-3 mb-3 pkg1_opt">
              <li>3 postings per week (per network) Facebook + Twitter + Instagram + Google+ </li>
              <li>Content Creation </li>
              <li>Business Page Optimization </li>
              <li>Social Media Strategy (Overview) </li>
              <li>Facebook Likes Campaign </li>
              <li>Monthly Progress report </li>
              <li>Copy Writing</li>
            </ul>
          </div>
          <div class="package-footer d-flex justify-content-between">
            <span>
              <p>Share your idea?</p>
              <a href="tel:1234567000">+1 234-567-0000</a>
            </span>
            <span>
              <p>Want to discuss?</p>
              <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
            </span>
          </div>
          <div class="text-center">
              
            <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
            <form method="POST" action="/leads/">
                            <button type="submit" class="theme-btn pink-bd-btn text-center open_modal" name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite" data-pack_id="Startup Plan - £350.00">Order Now</button>
               
                            <input type="hidden" name="route" value="<?= $_SERVER['REQUEST_URI'] ?>">   
                    <input type="hidden" name="brand" value="webvalleyuk">   
                    <input type="hidden" name="token" value="<?= $token;?>">   
                    <input type="hidden" name="tag" value="modal-auto">
                    <input type="hidden" name="price" value="null">
                    <input type="hidden" name="news" value="1">
<input type="text" class="jun"  name="gender">
            </form>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 col-sm-6 col-12">
        <div class="package-box best-seller">
          <h4>Scaling Plan</h4>
          <span class="del-amount"><del>£800.00 ONLY</del></span>
          <span class="price-amount"><span class="smal">£</span>700.00</span>
          <span class="plan">£1600 – Quarterly Plan</span>
          <span class="plan1">£450 – Recurring Monthly Payment</span>
          <p>Suitable for newly formed organizations or small incubated startups</p>
          <div class="package-list">
            <ul class="pkg-opt mt-3 mb-3 pkg1_opt">
              <li>Copywriting &amp; Visual designs </li>
              <li>Business Page Optimization </li>
              <li>Ad Campaign Management </li>
              <li>Spam monitoring </li>
              <li>Monthly Progress report </li>
              <li>5 postings per week Facebook + Twitter + Instagram + Google+ </li>
              <li>Reputation Management </li>
              <li>Social Account Setup </li>
              <li>Content Creation </li>
              <li>Social Media Listening </li>
              <li>Query and comments reply</li>
            </ul>
          </div>
          <div class="package-footer d-flex justify-content-between">
            <span>
              <p>Share your idea?</p>
              <a href="tel:1234567000">+1 234-567-0000</a>
            </span>
            <span>
              <p>Want to discuss?</p>
              <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
            </span>
          </div>
          <div class="text-center">
              
            <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
            <form method="POST" action="/leads/">
                            <button type="submit" class="theme-btn pink-bd-btn text-center open_modal" name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite" data-pack_id="Scaling Plan - £700.00">Order Now</button>
               <input type="hidden" name="route" value="<?= $_SERVER['REQUEST_URI'] ?>">   
                    <input type="hidden" name="brand" value="webvalleyuk">   
                    <input type="hidden" name="token" value="<?= $token;?>">   
                    <input type="hidden" name="tag" value="modal-auto">
                    <input type="hidden" name="price" value="null">
                    <input type="hidden" name="news" value="1">
<input type="text" class="jun"  name="gender">
            </form>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 col-sm-6 col-12">
        <div class="package-box">
          <h4>Venture Plan</h4>
          <span class="del-amount"><del>£1300.00 ONLY</del></span>
          <span class="price-amount"><span class="smal">£</span>1200.00</span>
          <span class="plan">£2600 – Quarterly Plan</span>
          <span class="plan1">£700 – Recurring Monthly Payment</span>
          <p>Suitable for newly formed organizations or small incubated startups</p>
          <div class="package-list">
            <ul class="pkg-opt mt-3 mb-3 pkg1_opt">
              <li>Copywriting &amp; Visual designs </li>
              <li>Business Page Optimization </li>
              <li>Ad Campaign Management </li>
              <li>Spam monitoring </li>
              <li>6 postings per week Facebook + Twitter + Instagram + Google+  </li>
              <li>Reputation Management </li>
              <li>Social Account Setup </li>
              <li>Content Creation </li>
              <li>Social Media Hearing </li>
              <li>Query and comments reply</li>
            </ul>
          </div>
          <div class="package-footer d-flex justify-content-between">
            <span>
              <p>Share your idea?</p>
              <a href="tel:1234567000">+1 234-567-0000</a>
            </span>
            <span>
              <p>Want to discuss?</p>
              <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
            </span>
          </div>
          <div class="text-center">
              
            <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
            <form method="POST" action="/leads/">
            <button type="submit" class="theme-btn pink-bd-btn text-center open_modal" name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite" data-pack_id="Venture Plan - £1200.00">Order Now</button>
                            <input type="hidden" name="route" value="<?= $_SERVER['REQUEST_URI'] ?>">   
                    <input type="hidden" name="brand" value="webvalleyuk">   
                    <input type="hidden" name="token" value="<?= $token;?>">   
                    <input type="hidden" name="tag" value="modal-auto">
                    <input type="hidden" name="price" value="null">
                    <input type="hidden" name="news" value="1">
<input type="text" class="jun"  name="gender">
             
            </form>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- Packages Section End -->

<section class="package-section pd-70">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="web_content_Sec" data-aos="fade-down" data-aos-duration="1000">
          <span></span>
          <h2>Delivering exclusive designs at Pocket-friendly prices</h2>
          <p>Your professional website is the face of your business requiring exceptional services. We offer a competitive price plan to meet your unique design and development needs. </p>
        </div>
      </div>
      <div class="col-12">
        <nav class="packages_nav" data-aos="fade-left" data-aos-duration="1000">
          <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
              <a class="nav-item nav-link active" id="nav-website-tab" data-toggle="tab" href="#nav-website" role="tab" aria-controls="nav-website" aria-selected="false">Web</a>
            <a class="nav-item nav-link " id="nav-logo-tab" data-toggle="tab" href="#nav-logo" role="tab" aria-controls="nav-logo" aria-selected="true">Logo</a>
            
            <a class="nav-item nav-link" id="nav-corporate-tab" data-toggle="tab" href="#nav-seo" role="tab" aria-controls="nav-seo" aria-selected="false">Seo</a>
            <!--<a class="nav-item nav-link" id="nav-corporate-tab" data-toggle="tab" href="#nav-smm" role="tab" aria-controls="nav-smm" aria-selected="false">Smm</a>-->
            <a class="nav-item nav-link" id="nav-ecommerce-tab" data-toggle="tab" href="#nav-ecommerce" role="tab" aria-controls="nav-ecommerce" aria-selected="false">E-commerce</a>
            <a class="nav-item nav-link" id="nav-video-tab" data-toggle="tab" href="#nav-video" role="tab" aria-controls="nav-video" aria-selected="false">Video</a>
            <!--<a class="nav-item nav-link" id="nav-content-tab" data-toggle="tab" href="#nav-content" role="tab" aria-controls="nav-content" aria-selected="false">Content Writing</a>-->
          </div>
        </nav>
      </div>
    </div>
    <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent" data-aos="fade-right" data-aos-duration="1000">
        
    <div class="tab-pane fade show active" id="nav-website" role="tabpanel" aria-labelledby="nav-profile-tab">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box">
              <h4>Startup Website Package</h4>
              <span class="del-amount"><del>£460.00 ONLY</del></span>
              <span class="price-amount"><span class="smal">£</span>228.00</span>
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg1_opt">
                   <li>5 Stock Photos</li>
                      <li>5 Page Website</li>
                      <li>3 Banner Design</li>
                      <li>1 jQuery Slider Banner</li>
                      <li>FREE Google Friendly Sitemap</li>
                      <li>Complete W3C Certified HTML</li>
                      <li>Facebook Page Design</li>
                      <li>Twitter Page Design</li>
                      <li>YouTube Page Design</li>
                      <li>100% Satisfaction Guarantee</li>
                      <li>100% Unique Design Guarantee</li>
                      <li>100% Money Back Guarantee *</li>
                      <li>Mobile Responsive will be Additional £99*</li>
                      <li>CMS will be Additional £149*</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                
                <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
                <button type="button" class="theme-btn pink-bd-btn text-center various grad-btn open_modal"  name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite" data-pack_id="Startup Website Package - £228.00">Order Now</button>
                
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box">
              <h4>Professional Website Package</h4>
              <span class="del-amount"><del>£819.98 ONLY</del></span>
              <span class="price-amount"><span class="smal">£</span>408.99</span>
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg2_opt">
                  <li>10 Unique Pages Website</li>
                  <li>CMS / Admin Panel Support</li>
                  <li>8 Stock images</li>
                  <li>5 Banner Designs</li>
                  <li>1 jQuery Slider Banner</li>
                  <li>FREE Google Friendly Sitemap</li>
                  <li>Complete W3C Certified HTML</li>
                  <li>Facebook Page Design</li>
                  <li>Twitter Page Design</li>
                  <li>YouTube Page Design</li>
                  <li>Complete Deployment</li>
                  <li>100% Satisfaction Guarantee</li>
                  <li>100% Unique Design Guarantee</li>
                  <li>100% Money Back Guarantee *</li>
                  <li>Mobile Responsive will be Additional £99*</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
                <button type="button" class="theme-btn pink-bd-btn text-center open_modal"  name="299" data-src="#popupformWebsite" data-fancybox="" title="Starters Pack For Only $299"  data-pack_id="Professional Website Package - £408.99">Order Now</button>
                
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box best-seller">
              <h4>Elite Website Package</h4>
              <span class="del-amount"><del>£1419.98 ONLY</del></span>
              <span class="price-amount"><span class="smal">£</span>707.99</span>
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg3_opt">
                   <li>Upto 15 Unique Pages Website</li>
                    <li>Conceptual and Dynamic Website</li>
                    <li>Mobile Responsive</li>
                    <li>Online Reservation/Appointment Tool (Optional)</li>
                    <li>Online Payment Integration (Optional)</li>
                    <li>Custom Forms</li>
                    <li>Lead Capturing Forms (Optional)</li>
                    <li>Striking Hover Effects</li>
                    <li>Newsletter Subscription (Optional)</li>
                    <li>Newsfeed Integration</li>
                    <li>Social Media Integration</li>
                    <li>Search Engine Submission</li>
                    <li>5 Stock Photos</li>
                    <li>3 Unique Banner Design</li>
                    <li>1 jQuery Slider Banner</li>
                    <li> Complete W3C Certified HTML</li>
                    <li>Facebook Page Design</li>
                    <li>Twitter Page Design</li>
                    <li>YouTube Page Design</li>
                    <li>Complete Deployment</li>
                    <li>100% Satisfaction Guarantee</li>
                    <li>100% Unique Design Guarantee</li>
                    <li>100% Money Back Guarantee *</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
                <button type="button" class="theme-btn pink-bd-btn text-center various grad-btn open_modal"  name="299" data-fancybox="" data-src="#popupformWebsite" title="Starters Pack For Only $299"  data-pack_id="Elite Website Package - £707.99">Order Now</button>
                
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box">
              <h4>E-Commerce Website Package</h4>
              <span class="del-amount"><del>£2009.98 ONLY</del></span>
              <span class="price-amount"><span class="smal">£</span>1001.99</span>
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg3_opt">
                   <li>Upto 15 Unique Pages Website</li>
                    <li>Conceptual and Dynamic Website</li>
                    <li>Content Management System (CMS)</li>
                    <li>Mobile Responsive</li>
                    <li>Easy Product Search</li>
                    <li>Product Reviews</li>
                    <li>Unlimited Products</li>
                    <li>Unlimited Categories</li>
                    <li>Promotional Product Showcase</li>
                    <li>New Product Showcase</li>
                    <li>Full Shopping Cart Integration</li>
                    <li>Payment Module Integration</li>
                    <li>Sales &amp; Inventory Management</li>
                    <li>JQuery Slider</li>
                    <li>Social Media Page Designs (Facebook, Twitter, Instagram)</li>
                    <li>Free Google Friendly Sitemap</li>
                    <li>Custom Email Addresses</li>
                    <li>Complete W3C Certified HTML</li>
                    <li>Facebook Page Design</li>
                    <li>Twitter Page Design</li>
                    <li>YouTube Page Design</li>
                    <li>Complete Deployment</li>
                    <li>Dedicated Accounts Manager</li>
                    <li>100% Ownership Rights</li>
                    <li>100% Satisfaction Guarantee</li>
                    <li>100% Unique Design Guarantee</li>
                    <li>100% Money Back Guarantee *</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
                <button type="button" class="theme-btn pink-bd-btn text-center various grad-btn open_modal"  name="299" data-fancybox="" title="E-Commerce Website Package - £1001.99" data-src="#popupformWebsite" data-pack_id="E-Commerce Website Package - £1,001.99">Order Now</button>
                
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box ">
              <h4>Silver Website Package</h4>
              <span class="del-amount"><del>£3219.98 ONLY</del></span>
              <span class="price-amount"><span class="smal">£</span>1607.99</span>
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg3_opt">
                   <li>15 to 20 Pages Website</li>
                    <li>Custom Made, Interactive, Dynamic &amp; High End Design</li>
                    <li>Custom WP (or) Custom PHP Development</li>
                    <li>1 jQuery Slider Banner</li>
                    <li>Up to 10 Custom Made Banner Designs</li>
                    <li>10 Stock Images</li>
                    <li>Unlimited Revisions</li>
                    <li>Special Hoover Effects</li>
                    <li>Content Management System (CMS)</li>
                    <li>Online Appointment/Scheduling/Online Ordering Integration (Optional)</li>
                    <li>Online Payment Integration (Optional)</li>
                    <li>Multi Lingual (Optional)</li>
                    <li>Custom Dynamic Forms (Optional)</li>
                    <li>Signup Area (For Newsletters, Offers etc.)</li>
                    <li>Search Bar</li>
                    <li>Live Feeds of Social Networks integration (Optional)</li>
                    <li>Mobile Responsive</li>
                    <li>FREE 5 Years Domain Name</li>
                    <li>Free Google Friendly Sitemap</li>
                    <li>Search Engine Submission</li>
                    <li>Complete W3C Certified HTML</li>
                    <li>Industry Specified Team of Expert Designers and Developers</li>
                    <li>Complete Deployment</li>
                    <li>Dedicated Accounts Manager</li>
                    <li>Facebook Page Design</li>
                    <li>Twitter Page Design</li>
                    <li>YouTube Page Design</li>
                    <li>100% Ownership Rights</li>
                    <li>100% Satisfaction Guarantee</li>
                    <li>100% Unique Design Guarantee</li>
                    <li>100% Money Back Guarantee *</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
                <button type="button" class="theme-btn pink-bd-btn text-center various grad-btn open_modal"  name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite" data-pack_id="Silver Website Package - £1,607.99">Order Now</button>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      
      <div class="tab-pane fade " id="nav-logo" role="tabpanel" aria-labelledby="nav-home-tab">
        <div class="row">
            
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box">
              <h4>Basic Logo Package</h4>
              <span class="del-amount"><del>£22.00 ONLY</del></span>
              <span class="price-amount"><span class="smal">£</span>20.00</span>
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg1_opt">
                  <li>1 Custom Logo Design Concepts</li>
                  <li>1 Dedicated Designer</li>
                  <li>4 Revisions</li>
                  <li>48 to 72 hours TAT</li>
                  <li>100% Unique Design Guarantee</li>
                  <li>100% Satisfaction Guarantee</li>
                  <li>100% Money Back Guarantee *</li>
                  <li>100% Ownership Rights</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              <span class="text-center addon_services">$25 for 24 hours Rush Delivery</span>
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
                <button type="button" class="theme-btn pink-bd-btn text-center various grad-btn open_modal"  name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite"  data-pack_id="Basic Logo Package - £20.00">Order Now</button>
                
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box">
              <h4>Start Up Logo Package </h4>
              <span class="del-amount"><del>£168.00 ONLY</del></span>
              <span class="price-amount"><span class="smal">£</span>74.00</span>
              
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg2_opt">
                  <li>4 Custom Logo Design Concepts</li>
                  <li>By 2 Designers</li>
                  <li>FREE Icon</li>
                  <li>FREE Business Card Design</li>
                  <li>UNLIMITED Revisions</li>
                  <li>48 to 72 hours TAT</li>
                  <li>All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)</li>
                  <li>100% Satisfaction Guarantee</li>
                  <li>100% Unique Design Guarantee</li>
                  <li>100% Money Back Guarantee *</li>
                  <li>100% Ownership Rights</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              <span class="text-center addon_services">$25 for 24 hours Rush Delivery</span>
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                  <button type="button" class="theme-btn pink-bd-btn text-center various grad-btn open_modal"  name="299" data-fancybox=""  title="Starters Pack For Only $299" data-src="#popupformWebsite" data-pack_id="Start Up Logo Package - £74.00">Order Now</button>
                
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box best-seller">
              <h4>Professional Logo Package</h4>
              <span class="del-amount"><del>£248.00 ONLY</del></span>
              <span class="price-amount"><span class="smal">£</span>124.00</span>
              
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg3_opt">
                  <li>UNLIMITED Logo Design Concepts</li>
                  <li>By 3 Designers</li>
                  <li>UNLIMITED Revisions</li>
                  <li>FREE Stationary Design Set</li>
                  <li>FREE MS Word Letterhead</li>
                  <li>48 to 72 hours TAT</li>
                  <li>All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)</li>
                  <li>100% Ownership Rights</li>
                  <li>100% Satisfaction Guarantee</li>
                  <li>100% Unique Design Guarantee</li>
                  <li>100% Money Back Guarantee *</li>
                  <li>15% Discount on your next order</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              <span class="text-center addon_services">$25 for 24 hours Rush Delivery</span>
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                  <button type="button" class="theme-btn pink-bd-btn text-center various grad-btn open_modal" name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite" data-pack_id="Professional Logo Package - £124.00">Order Now</button>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>

      

      <div class="tab-pane fade" id="nav-seo" role="tabpanel" aria-labelledby="nav-profile-tab">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box">
              <h4>Seo Booster Package </h4>
              <span class="del-amount"><del>£400.00 ONLY</del></span>
              <span class="price-amount"><span class="smal">£</span>200.00</span>
              
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg1_opt">
                  <li class="heading">Campaign Setup and Optimization</li>
        <li>Website Audit</li>
        <li>Pages Optimized (10 pages) </li>
        <li>Keyword Research</li>
        <li>Keyword Grouping</li>
        <li>Keyword Mapping</li>
        <li class="heading">On-Page Optimization</li>
        <li>SEO Road Map</li>
        <li>Blog Creation</li>
        <li>Webpage Copywriting (3 pages, 350 words per page)</li>
        <li>Title Tag Optimization (10 titles)</li>
        <li>Meta Description Optimization (10 meta description)</li>
        <li>Meta Keyword Optimization (10 meta keywords)</li>
        <li>Domain Redirect Optimization (10 domain redirects)</li>
        <li>xml Sitemap Optimization</li>
        <li>Robots.txt Check</li>
        <li>URL Rewrites (10 URL rewrites)</li>
        <li>Broken Link Report</li>
        <li class="heading">Rich Snippet Recommendations</li>
        <li>Breadcrumbs</li>
        <li class="heading">Initial Off-Page SEO</li>
        <li>Social Bookmarking</li>
        <li>Slide Share Marketing</li>
        <li>Forums/FAQ’s</li>
        <li>Link Building</li>
        <li>Directory Submission</li>
        <li>Local Business Listings</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              <span class="text-center addon_services">$25 for 24 hours Rush Delivery</span>
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
                <button type="button" class="theme-btn pink-bd-btn text-center various grad-btn open_modal"  name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite" data-pack_id="Seo Booster Package - £200.00">Order Now</button>
                
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box">
              <h4>Seo Value Package</h4>
              <span class="del-amount"><del>£800.00 ONLY</del></span>
              <span class="price-amount"><span class="smal">£</span>400.00</span>
              
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg2_opt">
                  <li class="heading">Prior Analysis</li>
        <li>Business Analysis</li>
        <li>Consumer Analysis</li>
        <li>Competitor Analysis</li>
        <li>15 Selected Keywords Targeting</li>
        <li>15 Pages Keyword Targeted</li>

        <li class="heading">Webpage</li>
        <li>Meta Tags Creation</li>
        <li>Keyword Optimization </li>
        <li>Image Optimization </li>
        <li>Inclusion of anchors</li>

        <li class="heading">Tracking and analysis </li>
        <li>Google Analytics Installation</li>
        <li>Google Webmaster Installation </li>
        <li>Call To Action Plan </li>
        <li>Creation of Sitemaps</li>

        <li class="heading">Reporting </li>
        <li>Monthly Reporting </li>
        <li>Recommendation </li>
        <li>Email Support </li>
        <li>Phone Support</li>

        <li class="heading">Off Page Optimization</li>
        <li>Social Bookmarking</li>
        <li>Slide Share Marketing </li>
        <li>Forums/FAQ’s </li>
        <li>Link Building </li>
        <li>Directory Submission </li>
        <li>Local Business Listings</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              <span class="text-center addon_services">$25 for 24 hours Rush Delivery</span>
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
                <button type="button" class="theme-btn pink-bd-btn text-center various grad-btn open_modal"  name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite" data-pack_id="Seo Value Package - £400.00">Order Now</button>
                
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box">
              <h4>Seo Pro Package</h4>
              <span class="del-amount"><del>£1,200.00 ONLY</del></span>
              <span class="price-amount"><span class="smal">£</span>600.00</span>
              
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg3_opt">
                  <li class="heading">Prior Analysis </li>
        <li>Business Analysis</li>
        <li>Competitor Analysis </li>
        <li>Consumer Analysis</li>
        <li>30 Selected Keywords Targeting </li>
        <li>30 Pages Keyword Targeted</li>

        <li class="heading">Webpage Optimization </li>
        <li>Meta Tags Creation</li>
        <li>Keyword Optimization </li>
        <li>Image Optimization </li>
        <li>Inclusion of anchors Tags </li>
        <li>Inclusion of anchors </li>
        <li>Indexing Modifications</li>

        <li class="heading">Tracking &amp; Analysis </li>
        <li>Google Places Inclusions</li>
        <li>Google Analytics Installation</li>
        <li>Google Analytics Installation</li>
        <li>Call To Action Plan </li>
        <li>Creation of Sitemaps</li>

        <li class="heading">Reporting  </li>
        <li>Monthly Reporting </li>
        <li>Recommendation </li>
        <li>Email Support </li>
        <li>Phone Support</li>

        <li class="heading">Off Page Optimization </li>
        <li>Social Bookmarking</li>
        <li>Slide Share Marketing </li>
        <li>Forums/FAQ’s </li>
        <li>Link Building </li>
        <li>Directory Submission  </li>
        <li>Local Business Listings</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              <span class="text-center addon_services">$25 for 24 hours Rush Delivery</span>
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
                <button type="button" class="theme-btn pink-bd-btn text-center various grad-btn open_modal"  name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite" data-pack_id="Seo Pro Package - £600.00">Order Now</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="tab-pane fade" id="nav-smm" role="tabpanel" aria-labelledby="nav-profile-tab">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box">
              <h4>Startup Collateral Package </h4>
              <span class="del-amount"><del>$198.00 ONLY</del></span>
              <span class="price-amount"><span class="smal">$</span>99.00 <span class="smal">USD</span></span>
              
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg1_opt">
                  <li>2 Stationery Design Set</li>
                  <li>FREE Fax Template</li>
                  <li>Print Ready Formats</li>
                  <li>UNLIMITED Revisions</li>
                  <li>100% Satisfaction Guarantee</li>
                  <li>100% Money Back Guarantee *</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              <span class="text-center addon_services">$25 for 24 hours Rush Delivery</span>
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
                <button type="button" class="theme-btn pink-bd-btn text-center"  name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite" class="various grad-btn open_modal" data-pack_id="Basic Website Package - $244.00">Order Now</button>
                
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box">
              <h4>Collateral Classic Package </h4>
              <span class="del-amount"><del>$398.00 ONLY</del></span>
              <span class="price-amount"><span class="smal">$</span>199.00 <span class="smal">USD</span></span>
              
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg2_opt">
                  <li>2 Stationery Design Set</li>
                  <li>UNLIMITED Revisions</li>
                  <li>Flyer Design</li>
                  <li>Brochure Design (Bi-fold/Tri-fold)</li>
                  <li>100% Satisfaction Guarantee</li>
                  <li>100% Money Back Guarantee *</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              <span class="text-center addon_services">$25 for 24 hours Rush Delivery</span>
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
                <button type="button" class="theme-btn pink-bd-btn text-center"  name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite" class="various grad-btn open_modal" data-pack_id="Basic Website Package - $244.00">Order Now</button>
                
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box">
              <h4>Premium Collateral Package </h4>
              <span class="del-amount"><del>$798.00 ONLY</del></span>
              <span class="price-amount"><span class="smal">$</span>399.00 <span class="smal">USD</span></span>
              
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg3_opt">
                  <li>2 Stationery Design Set</li>
                  <li>Packaging Design</li>
                  <li>UNLIMITED Revisions</li>
                  <li>T-Shirt Design</li>
                  <li>100% Satisfaction Guarantee</li>
                  <li>100% Money Back Guarantee *</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              <span class="text-center addon_services">$25 for 24 hours Rush Delivery</span>
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
                <button type="button" class="theme-btn pink-bd-btn text-center"  name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite" class="various grad-btn open_modal" data-pack_id="Basic Website Package - $244.00">Order Now</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="tab-pane fade" id="nav-ecommerce" role="tabpanel" aria-labelledby="nav-profile-tab">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box">
              <h4>E-Commerce Startup</h4>
              <span class="del-amount"><del>£1,200.00 ONLY</del></span>
              <span class="price-amount"><span class="smal">£</span>595.00</span>
              
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg1_opt">
                  <li>Up-to 100 Products</li>
      <li>Content Management System (CMS)</li>
      <li>Mini Shopping Cart Integration</li>
      <li>Payment Module Integration</li>
      <li>Easy Product Search</li>
      <li>Dedicated designer &amp; developer</li>
      <li>Unlimited Revisions</li>
      <li>100% Satisfaction Guarantee</li>
      <li>100% Unique Design Guarantee</li>
      <li>100% Money Back Guarantee *</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
                <button type="button" class="theme-btn pink-bd-btn text-center various grad-btn open_modal"  name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite" data-pack_id="E-Commerce Startup - £595.00">Order Now</button>
                
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box">
              <h4>E-Commerce Professional</h4>
              <span class="del-amount"><del>£2,788.00 ONLY</del></span>
              <span class="price-amount"><span class="smal">£</span>1,397.00</span>
              
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg2_opt">
                  <li>Customized Design</li>
      <li>Up-to 500 Products</li>
      <li>Content Management System (CMS)</li>
      <li>Full Shopping Cart Integration</li>
      <li>Payment Module Integration</li>
      <li>Easy Product Search</li>
      <li>Product Reviews</li>
      <li>5 Promotional Banners</li>
      <li>Team of Expert Designers &amp; Developers</li>
      <li>Unlimited Revisions</li>
      <li>100% Satisfaction Guarantee</li>
      <li>100% Unique Design Guarantee</li>
      <li>100% Money Back Guarantee *</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
                <button type="button" class="theme-btn pink-bd-btn text-center various grad-btn open_modal"  name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite"  data-pack_id="E-Commerce Professional - £1397.00">Order Now</button>
                
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box">
              <h4>E-Commerce Elite</h4>
              <span class="del-amount"><del>£7,388.00 ONLY</del></span>
              <span class="price-amount"><span class="smal">£</span>3,693.00</span>
              
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg3_opt">
                   <li>UNLIMITED Logo Design Concepts</li>
      <li>By 6 Award Winning Designers</li>
      <li>Icon Design</li>
      <li>UNLIMITED Revisions</li>
      <li>Print Media</li>
      <li>Stationary Design (BusinessCard,Letterhead &amp; Envelope)</li>
      <li>Invoice Design, Email Signature</li>
      <li>Bi-Fold Brochure (OR) 2 Sided Flyer Design</li>
      <li>Product Catalog Design</li>
      <li>Sign age Design (OR) Label Design</li>
      <li>T-Shirt Design (OR) Car Wrap Design</li>
      <li>Website</li>
      <li>E-Commerce Store Design</li>
      <li>Product Detail Page Design</li>
      <li>Unique Banner Slider</li>
      <li>Featured Products Showcase</li>
      <li>Full Shopping Cart Integration</li>
      <li>Unlimited Products</li>
      <li>Unlimited Categories</li>
      <li>Product Rating &amp; Reviews</li>
      <li>Easy Product Search</li>
      <li>Payment Gateway Integration</li>
      <li>Multi-currency Support</li>
      <li>Content Management System</li>
      <li>Cutomer Log-in Area</li>
      <li>Mobile Responsive</li>
      <li>Social Media Plugins Integration</li>
      <li>Tell a Friend Feature</li>
      <li>Social Media Pages</li>
      <li>Facebook , Twitter, YouTube, Google+ &amp; Pinterest Page Designs</li>
      <li>Value Added Services</li>
      <li>Dedicated Account Manager</li>
      <li>Unlimited Revisions</li>
      <li>All Final File Formats</li>
      <li>100% Ownership Rights</li>
      <li>100% Satisfaction Guarantee</li>
      <li>100% Unique Design Guarantee</li>
      <li>100% Money Back Guarantee *</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
                <button type="button" class="theme-btn pink-bd-btn text-center various grad-btn open_modal"  name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite" data-pack_id="E-Commerce Elite - £3693.00">Order Now</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="tab-pane fade" id="nav-video" role="tabpanel" aria-labelledby="nav-profile-tab">
        <div class="row">
            
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box">
              <h4>Startup Video Package</h4>
              <span class="del-amount"><del>£419.98 ONLY</del></span>
              <span class="price-amount"><span class="smal">£</span>207.99</span>
              
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg1_opt">
                  <li>30 Second Video</li>
        <li>Professional Script</li>
        <li>Storyboard</li>
        <li>Animation</li>
        <li>Voice - Over &amp; Sound Effects</li>
        
        <li>Unlimited Revisions</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
                <button type="button" class="theme-btn pink-bd-btn text-center various grad-btn open_modal"  name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite"   data-pack_id="Startup Video Package - £207.99">Order Now</button>
                
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box">
              <h4>Classic Video Package </h4>
              <span class="del-amount"><del>£819.98 ONLY</del></span>
              <span class="price-amount"><span class="smal">£</span>407.99</span>
              
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg2_opt">
                  <li>60 Second Video</li>
        <li>Professional Script</li>
        <li>Sample Theme</li>
        <li>Storyboard</li>
        <li>Animation</li>
        <li>Voice - Over &amp; Sound Effects</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
                <button type="button" class="theme-btn pink-bd-btn text-center various grad-btn open_modal"  name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite" data-pack_id="Classic Video Package - £407.99">Order Now</button>
                
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box">
              <h4>Premium Video Package</h4>
              <span class="del-amount"><del>£1619.98 ONLY</del></span>
              <span class="price-amount"><span class="smal">£</span>806.99</span>
              
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg3_opt">
                   <li>90 Second Video</li>
      <li>Professional Script</li>
      <li>Sample Theme</li>
      <li>Storyboard</li>
      <li>Animation</li>
      <li>Voice - Over &amp; Sound Effects</li>
      <li>6 Weeks Delivery</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
                <button type="buttton" class="theme-btn pink-bd-btn text-center various grad-btn open_modal"  name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite" data-pack_id="Premium Video Package - £806.99">Order Now</button>
                
              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box">
              <h4>Unlimited Animation Package</h4>
              <span class="del-amount"><del>£2819.98 ONLY</del></span>
              <span class="price-amount"><span class="smal">£</span>1408.99</span>
              
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg3_opt">
                   <li>120 Second Video</li>
      <li>Professional Script</li>
      <li>Sample Theme</li>
      <li>Storyboard</li>
      <li>Animation</li>
      <li>Voice - Over &amp; Sound Effects</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
                <button type="button" class="theme-btn pink-bd-btn text-center various grad-btn open_modal"  name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite" data-pack_id="Unlimited Animation Package - £1408.99">Order Now</button>

              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box">
              <h4>Professional 3D VFX Animation</h4>
              <span class="del-amount"><del>£4019.98 ONLY</del></span>
              <span class="price-amount"><span class="smal">£</span>2005.99</span>
              
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg3_opt">
                   <li>30s Duration - HD 1080</li>
      <li>Unlimited Edits/Revisions &amp; Concepts</li>
      <li>Professional Script</li>
      <li>Concept and Storyboards</li>
      <li>3D Modeling</li>
      <li>Texturing</li>
      <li>Rigging</li>
      <li>Animation</li>
      <li>Lighting</li>
      <li>Camera Setting</li>
      <li>Rendering</li>
      <li>Compositing and Special VFX</li>
      <li>Music and Foley</li>
      <li>Custom Setting, 2 Characters &amp; Graphics</li>
      <li>Animation Effects &amp; Visualization</li>
      <li>Voice Over - All accents (M/F)</li>
      <li>Editing and Final Output</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                <!-- <a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a> -->
                <button type="button" class="theme-btn pink-bd-btn text-center various grad-btn open_modal"  name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite" data-pack_id="Professional 3D VFX Animation - £2005.99">Order Now</button>

              </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="package-box">
              <h4>Elite 3D VFX Animation</h4>
              <span class="del-amount"><del>£5019.98 ONLY</del></span>
              <span class="price-amount"><span class="smal">£</span>2502.99</span>
              
              <div class="package-list">
                <ul class="pkg-opt mt-3 mb-3 pkg3_opt">
                   <li>60s Duration - HD 1080</li>
      <li>Unlimited Edits/Revisions &amp; Concepts</li>
      <li>Professional Script</li>
      <li>Concept and Storyboards</li>
      <li>3D Modeling</li>
      <li>Texturing</li>
      <li>Rigging</li>
      <li>Animation</li>
      <li>Lighting</li>
      <li>Camera Setting</li>
      <li>Rendering</li>
      <li>Compositing and Special VFX</li>
      <li>Music and Foley</li>
      <li>Custom Setting, 2 Characters &amp; Graphics</li>
      <li>Animation Effects &amp; Visualization</li>
      <li>Voice Over - All accents (M/F)</li>
      <li>Editing and Final Output</li>
                </ul>
              </div>
              <span class="text-center features_text">More FEATURES</span>
              
              <div class="package-footer d-flex justify-content-between">
                <span>
                  <p>Share your idea?</p>
                  <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
                </span>
                <span>
                  <p>Want to discuss?</p>
                  <a class="live-btn" href="javascript:;" onclick="if (!window.__cfRLUnblockHandlers) return false; $zopim.livechat.window.toggle()" data-cf-modified-c8557bf7748ccc07b58855cf-="">Live Chat Now</a>
                </span>
              </div>
              <div class="text-center">
                 
                <!--<a class="theme-btn pink-bd-btn text-center" href="#">Order Now</a>-->
                <button type="button" class="theme-btn pink-bd-btn text-center various grad-btn open_modal"  name="299" data-fancybox="" title="Starters Pack For Only $299" data-src="#popupformWebsite" data-pack_id="Elite 3D VFX Animation - £2502.99">Order Now</button>
                

              </div>
            </div>
          </div>
          
        </div>
      </div>

    </div>

    <!-- <div class="col-md-12 text-center">
      <div class="full-learn">
        <a href="packages/">
          <div class="arrow-parent">
            <div class="arrow-bg"></div>
              <div class="arrow">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="7.566" height="12.305" viewBox="0 0 7.566 12.305"><path d="M-13482.287,5833l5.445,5.445-5.445,5.446" transform="translate(13482.994 -5832.293)" fill="none" stroke="#fff" stroke-width="2"/></svg>
                      </div>
            <p>Click Here to View More</p>
          </div>
        </a>
      </div>
    </div>  -->

  </div>
</section>
<!-- Logo design Section BEgin -->

<section class="logo_design_content pd-70">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="web_content_Sec">
          <h2>WHAT MAKES US STAND-OUT</h2>
          <p>Professional Web Designs is a digital company working to deliver up-to-standard results for each of our services. From the inception, we have learned that picking up the fast track is critical then delivering a pleasant experience to the customer.</p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-5">
        <div class="logo_content_tab">
          <div class="services_boxes">
            <h2><img src="images/choose1.png" alt="" class="img-responsive"> Exclusive Content</h2>
            <p>As professionals, we make sure to submit fresh, exclusive content that creates fascination among the readers. Content plays a critical part in a post, so our contents are very attention-grabbing.</p>
          </div>

          <div class="services_boxes">
            <h2><img src="images/choose3.png" alt="" class="img-responsive"> Influencer Management</h2>
            <p>Our full skilled team build strategies that work for everyone accordingly to their business. As a team, we help business uplift their influencer marketing.</p>
          </div>

        </div>
      </div>
       <div class="col-md-2 col-sm-6">
        <div class="logo_content_tab mb">
        <img src="images/pencil.png" alt="" class="img-responsive" width="100%">
        </div>
      </div>

      <div class="col-md-5">
        <div class="logo_content_tab">
          <div class="services_boxes">
            <h2><img src="images/choose4.png" alt="" class="img-responsive"> Experienced Team</h2>
            <p>Our set of teams are highly experienced in providing outstanding services in their respective departments, and they are capable of providing you with the best.  </p>
          </div>

          <div class="services_boxes">
            <h2><img src="images/choose5.png" alt="" class="img-responsive"> Limitless Support</h2>
            <p>The support team will be here to provide you with answers regarding any problem. Please feel not tied up while asking your concerns.</p>
          </div>
          <div class="logo_content_tab">
        <img src="images/choosebg.png" alt="" class="img-responsive" width="100%">
        </div>

        </div>
      </div>
    </div>


  </div>
</section>

<!-- Logo Design Section End -->


<!-- Review Section Begin -->
<div class="grey_bg">
    <section class="customers_review_Sec">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="web_content_Sec" data-aos="fade-down" data-aos-duration="1000">
            <span>Our Customers</span>
            <h2>Simply Love Our Work</h2>
          </div>
        </div>
      </div>


      <div class="customers_review_main"> 
        <div class="row">

          <div class="item col-md-4">
            <div class="itext">
              <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <p class="cstm">I was looking for a creative web development company for my brand; I wasn’t able to vibe with any of them. When I consulted professional web designs, I knew right away they have the impulse I am looking for.</p>
            </div>
            <div class="icli">
              <div class="cliimg">
                <!-- <img src="/assets/Professional Web Designsmg/services/cli-1.jpg"> -->
                <span>MM</span>
              </div>
              <div class="cliname">
                <h6>ANNIE</h6>
              </div>
            </div>
          </div>

          <div class="item col-md-4">
            <div class="itext">
              <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <p class="cstm">When I spoke to them for the first time, they assured me about the logo design I wanted, they didn’t neglect my requirements and gave exactly what I wanted.</p>
            </div>
            <div class="icli">
              <div class="cliimg">
                
                <span>KP</span>
                <!-- <img src="/assets/img/services/cli-2.jpg"> -->
              </div>
              <div class="cliname">
                <h6>Racheal </h6>
              </div>
            </div>
          </div>

          <div class="item col-md-4">
            <div class="itext">
              <div class="star">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </div>
              <p class="cstm">I will 100% recommend them to everyone who wants to get their website done. They are totally life-savers. So happy with their work.</p>
            </div>
            <div class="icli">
              <div class="cliimg">
                
                <span>JL</span>
                <!-- <img src="/assets/img/services/cli-3.jpg"> -->
              </div>
              <div class="cliname">
                <h6>Ruby </h6>
              </div>
            </div>
          </div>

          <!-- <div class="col-lg-5 col-md-5 col-sm-6">
            <div class="customers_sec_img bounce-img-animation" data-aos="fade-right" data-aos-duration="1000">
              <img src="images/review_img_01.png?asd" data-aos="zoom-in"  data-aos-delay="400" data-aos-offset="0" data-aos-duration="1000" class="img-responsive animate" alt="Review Bg">
            </div>
          </div>

          <div class="col-lg-5 col-md-6 col-sm-6 offset-lg-1">
            <div id="reviews_slider" class="carousel slide" data-ride="carousel"  data-aos="fade-left" data-aos-duration="1000">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="customers_review_content">
                    <p>“I need a user-friendly website with all the modern technologies and functionalities. Logo Design Town meets all my objectives on time and budget. My newly build website truly represents what my offerings are. It was a pleasure to work with them and I would definitely recommend them as their efforts were a game-changer for us.” </p>

                    <div class="customers_review_author">
                      <h3>Kenneth Armenta</h3>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="customers_review_content">
                    <p>“We need an animated logo that suits perfectly with our e-commerce brand. Team Logo Design Town brilliantly designed our brand identity and meet all requirements in a hassle-free manner. Their creative level, passion, and teamwork are beyond my expectation.” </p>

                    <div class="customers_review_author">
                      <h3>Patrina Bandy</h3>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="customers_review_content">
                    <p>“My friend suggested Logo Design Town and I am pleased with their services and love to recommend them to everyone who aims to run an engaging brand development campaign on a tight budget. Their brand management team helped me to pick the right elements to give a competitive edge to rivals.”</p>

                    <div class="customers_review_author">
                      <h3>Nelida Hart</h3>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="customers_review_content">
                    <p>“I am really impressed by the quick services of the Logo Design Town friendly support team. They created a user-friendly website for my e-commerce store from scratch with custom functionalities. Their team carefully cater to all my requirements and I will surely do business again with them.”</p>

                    <div class="customers_review_author">
                      <h3>Kenny Aurand</h3>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="customers_review_content">
                    <p>“I hired Logo Design Town for creating an animated video and it was a mind-blowing experience working with them. Their team quickly created easy-to-understand graphic videos based on our requirements. I am amazed by their level of creativity. Highly Recommended!”</p>

                    <div class="customers_review_author">
                      <h3>Jose Roberts</h3>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="customers_review_content">
                    <p>“We need a top-rated SEO agency to rank our website on the first page of Google. Luckily, I landed on Logo Design Town and decided to hire their SEO specialist for my online e-commerce store. They ranked my targeted keyword on the first page in a specified time. Recommended to everyone.”</p>

                    <div class="customers_review_author">
                      <h3>Brandon Brown</h3>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div class="customers_review_content">
                    <p>“One of my best friends told me about Logo Design Town for social media marketing. I discussed my requirements with their friendly customer support team and they help me to choose the right package. My experience of working with their social media marketing team was astonishing. I want to recommend them for their exceptional SMM services.”</p>

                    <div class="customers_review_author">
                      <h3>Brenda Jones</h3>
                    </div>
                  </div>
                </div>

              </div>
              <a class="carousel-control-prev" href="#reviews_slider" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#reviews_slider" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div> -->

        </div>
<div class="text-center">
<a href="testimonials/" class="btn-customer-review">View More Reviews</a>
</div>

      </div>
    </div> 
  </section></div>
<!-- Review Section End -->


<!-- Faq Section Begin -->
  
  <section class="faq_sec_main pd-70 bg-white">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="web_content_Sec">
            <h3>FAQ’s</h3>
            <h2>What People Frequently Ask Us?</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-10 mx-auto">
          <div id="accordion" class="my-5">
            <div class="card mb-3 colored-bd green-bd">
              <div class="card-header" id="headingOne">
                <h5 class="mb-0">
                  <button class="btn btn-link text-left w-100" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Why Should I Choose Professional Web Designs for Social Media Marketing?
                  <i class="fa fa-minus float-right" aria-hidden="true"></i>
                  </button>
                </h5>
              </div>
              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                  We provide active social media marketing to elevate the brand performance to the optimum level. Our experts know how to work dominantly for social media marketing no matter what is the budget or level of the competition. 
                </div>
              </div>
            </div>
            <div class="card mb-3 colored-bd blue-bd">
              <div class="card-header" id="headingTwo">
                <h5 class="mb-0">
                  <button class="btn btn-link text-left w-100 collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How Fast Can You Develop A Social Media Marketing Plan?
                  <i class="fa fa-minus float-right" aria-hidden="true"></i>
                  </button>
                </h5>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div class="card-body">
                  Our professionals provide prompt responses to our clients and work hard to accomplish their targets before the deadlines. If you want to speedily build a relationship of trust among your targeted audience then you should have a session with us.
                </div>
              </div>
            </div>
            <div class="card mb-3 colored-bd purple-bd">
              <div class="card-header" id="headingThree">
                <h5 class="mb-0">
                  <button class="btn btn-link text-left w-100 collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Can I Share My Ideas for Social Media Marketing Post?
                  <i class="fa fa-minus float-right" aria-hidden="true"></i>
                  </button>
                </h5>
              </div>
              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div class="card-body">
                  It will be an honor for us to know your valuable thoughts. Our social media marketing team will actively work with you to enhance your brand recognition on your desired platform with the right content.

                </div>
              </div>
            </div>
            <div class="card mb-3 colored-bd red-bd">
              <div class="card-header" id="headingfour">
                <h5 class="mb-0">
                  <button class="btn btn-link text-left w-100 collapsed" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                  How Much Will You Charge for Social Media Marketing?
                  <i class="fa fa-minus float-right" aria-hidden="true"></i>
                  </button>
                </h5>
              </div>
              <div id="collapsefour" class="collapse" aria-labelledby="headingfour" data-parent="#accordion">
                <div class="card-body">
                  There are numerous packages of social media marketing from which you will need to choose the best one. Charges for social media marketing depends on the number of platforms as well.
                </div>
              </div>
            </div>
            <div class="card mb-3 colored-bd orange-bd">
              <div class="card-header" id="headingfive">
                <h5 class="mb-0">
                  <button class="btn btn-link text-left w-100 collapsed" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                  Do You Offer 100% Satisfaction?
                  <i class="fa fa-minus float-right" aria-hidden="true"></i>
                  </button>
                </h5>
              </div>
              <div id="collapsefive" class="collapse" aria-labelledby="headingfive" data-parent="#accordion">
                <div class="card-body">
                  The primary goal of Professional Web Designs is to do everything possible for the happiness of the customer. We assure to refund your amount in case you are not satisfied with our work.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="faq_img_btm">
      <div class="left_btm_img">
        <img src="images/faq_left_btm01.png" class="img-responsive" alt="FAQ">
      </div>

      <div class="right_btm_img">
        <img src="images/faq_right_btm01.png" class="img-responsive" alt="FAQ">
      </div>
    </div>
</section>

<!-- Faq Section End -->


<!-- Get Free Consultancy Section Begin -->

  <section class="get_consultancy_sec pd-70">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="web_content_Sec" data-aos="fade-down" data-aos-duration="1000">
            <h2>Get in Touch</h2>
            <p>End your woes now! Acquire free consultancy from Professional Web Design industry veterans. Let’s talk about your next project with our highly experienced team of professionals to level up your brand.</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-10 center_web_sec">
          <div class="consultancy_form">
            <form data-aos="fade-right" data-aos-duration="1000"  method="POST" data-noinfo="true" class="contact-form plan-form" action="/leads/">
              <input type="hidden" name="route" value="<?= $_SERVER['REQUEST_URI'] ?>">   
                    <input type="hidden" name="brand" value="webvalleyuk">   
                    <input type="hidden" name="token" value="<?= $token;?>">   
                    <input type="hidden" name="tag" value="modal-auto">
                    <input type="hidden" name="price" value="null">
                    <input type="hidden" name="news" value="1">
<input type="text" class="jun"  name="gender">
              <div class="row">
                <div class="col-md-6 col-sm-6">
                  <input type="text" name="name" class="form-control" required="" placeholder="Full Name*">
                </div>

                <div class="col-md-6 col-sm-6">
                  <input type="email" name="email" class="form-control" required="" placeholder="Email*">
                </div>

                <div class="col-md-12 col-sm-6">
                  <input type="phone" name="phone" class="form-control" required="" placeholder="Phone*">
                </div>

                <!-- <div class="col-md-6 col-sm-6">
                  <input type="text" name="country" class="form-control" required="" placeholder="Country*">
                </div> -->

                <!-- <div class="col-md-6 col-sm-6">
                  <select name="Interested-In" required="">
                    <option value="" selected disabled>I am Interested in</option>
                    <option value="Logo Design">Logo Design  </option>
                    <option value="Brand Development ">Brand Development </option>
                    <option value="Web Design &amp; Development ">Web Design &amp; Development </option>
                    <option value="App Design &amp; Development">App Design &amp; Development </option>
                    <option value="Back-End Development">Back-End Development </option>
                    <option value="Digital Marketing ">Digital Marketing </option>
                    <option value="Marketing Collaterals">Marketing Collaterals </option>
                    <option value="Motion Graphics">Motion Graphics </option>
                    <option value="Website Management">Website Management </option>
                    <option value="Domain Registration">Domain Registration </option>
                    <option value="Creative Copywriting">Creative Copywriting </option>
                    <option value="2D &amp; 3D Illustration">2D &amp; 3D Illustration </option>
                  </select>
                </div>

                <div class="col-md-6 col-sm-6">
                  <select name="Forecasted-Budget" required="">
                    <option value="" selected disabled>Forecasted-Budget</option>
                    <option value="Less than $1000">Less than $1000</option>
                    <option value="$1000 to $2000">$1000 to $2000</option>
                    <option value="$2000 to $5000">$2000 to $5000</option>
                    <option value="$5000 to $10,000">$5000 to $10,000 </option>
                    <option value="$20,000 to $30,000">$20,000 to $30,000</option>
                    <option value="$35,000 to $50,000">$35,000 to $50,000</option>
                    <option value="$50,000 and above">$50,000 and above</option>
                  </select>
                </div> -->

                <div class="col-md-12">
                  <textarea name="message" placeholder="Message" class="form-control" required=""></textarea>
                </div>

                <div class="col-md-12">
                  <input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1">
                  <label for="styled-checkbox-1">By clicking the submit button below, I hereby agree to your <a href="term-and-condition/">terms and conditions.</a></label>
                </div>

                <div class="col-md-12">
                  <div class="form_btn">
                    <input type="submit" value="Contact Our Team">
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="consultancy_img_btm">
      <div class="consultancy_left_btm">
        <img data-src="images/ltd-consultancy_btm_left01.png" class="img-responsive lazy" alt="FAQ">
      </div>

      <div class="consultancy_right_btm">
        <img data-src="images/ltd-consultancy_btm_right01.png" class="img-responsive lazy" alt="FAQ">
      </div>
    </div>
  </section>
<!-- Get Free Consultancy Section End -->



<!-- begin: contact detail section -->
<section class="contact_footer_details " >
  <div class="container">
    <div class="row">
      <div class="col-sm-4  bd-left">
        <div class="contact_footer_box py-5">
          <h4  data-aos="fade-right" data-aos-duration="1000">Email</h4>
          <div class="d-flex align-items-center"  data-aos="fade-up" data-aos-duration="1000"> 
            <i class=" fa fa-envelope-o" aria-hidden="true"></i>
            <span>  
            <a href="mailto:query@websitevalley.co.uk"><span class="__cf_email__" >query@websitevalley.co.uk</span></a>
            </span>
          </div>
        </div>
      </div>
      <div class="col-sm-4 ">
        <div class="contact_footer_box py-5">
          <h4  data-aos="fade-right" data-aos-duration="1000">Contact Us</h4>
          <div class="d-flex align-items-center"  data-aos="fade-up" data-aos-duration="1000"> 
            <i class="fa fa-map-o" aria-hidden="true"></i>
            <span>  
            <a href="javascript:void(0)">54 park avenue barking, Essex, IG11 8QU,  UK</a>
            </span>
          </div>
        </div>
      </div>
      <div class="col-sm-4 ">
        <div class="contact_footer_box py-5">
          <h4  data-aos="fade-right" data-aos-duration="1000">Phone</h4>
          <div class="d-flex align-items-center"  data-aos="fade-up" data-aos-duration="1000"> 
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span>  
            <a href="tel:+44-2038-087-061">+44-2038-087-061</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- end:contact detail section -->
<footer>
  <div class="container">
    <div class="row">
      <div class="col-lg-4 ">
        <div class="footer-item text-center text-lg-left">
          <img data-src="assets/images/logo.png" class="img-responsive lazy" alt="logo">
          <p>At Professional Web Designs we are consistently providing new-age digital branding services to exceed client’s expectations. No matter if you want to launch a new brand identity or you want to improve your website design and functionality, our team will dedicatedly work on your project to ace all your goals effortlessly on time and budget. </p>
        </div>
      </div>
      <div class="col-lg-3 col-sm-4">
        <div class="footer-item">
          <h2>Packages</h2>
          <ul>
          <!-- <li><a href="/packages/">Packages</a></li> -->
            <!-- <li><a href="/combo-">Combo Packages</a></li> -->
            <li><a href="/portfolio/">Portfolio</a></li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3 col-sm-4">
        <div class="footer-item">
          <h2>Services</h2>
          <ul>
          <li><a href="/web-app-development/">Web App Development</a></li>
          <li><a href="/web-design-development/">Web Design Development</a></li>
          <li><a href="/mobile-app-development/">Mobile App Development</a></li>
          <li><a href="/ecommerce-web-development/">Ecommerce Web Development</a></li>
          <li><a href="/branding/">Branding</a></li>
          </ul>
        </div>
      </div>
      <div class="col-lg-2 col-sm-4">
        <!--<div class="footer-item">-->
        <!--  <h2>Follow Us On</h2>-->
        <!--  <ul>-->
        <!--    <li><a href="#"><img src="images/social-01.png" alt=""></a></li>-->
        <!--    <li><a href="#"><img src="images/social-02.png" alt=""></a></li>-->
        <!--    <li><a href="#"><img src="images/social-03.png" alt=""></a></li>-->
        <!--  </ul>-->
        <!--</div>-->
      </div>
    </div>
  </div>
  <div class="copy_right_sec">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-sm-6">
          <div class="copy_right_content" >
            <p>Copyright © 2021 website valley. All Rights Reserved.</p>
          </div>
        </div>
        <div class="col-md-6 col-sm-6">
          <div class="term_links">
            <!-- <ul>
              <li><a href="term-and-condition/">Terms & Conditions</a></li>
              <li><a href="privacy-policy/">Privacy Policy</a></li>
            </ul> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
<div class="dis" style="background:#000;">
<div class="container">
    <div class="row">
        <div class="col-md-12">
        <div class="global_disclamer text-center p-1">
	<h2 style="color: #fff; font-weight: 400px; font-size: 20px; margin: 0; line-height: 40px;">Disclaimer:</h2>
	<p style="color:#fff; font-weight: 400px; font-size: 14px; line-height: 26px;">
 All company logos and trademarks appearing on our website are the property of their respective owners.
 We are not affiliated, associated, endorsed by, or in any way officially connected with these companies
 or their trademarks. The use of these logos and trademarks does not imply any endorsement, affiliation,
 or relationship between us and the respective companies. We solely use these logos and trademarks for 
identification purposes only. All information and content provided on our website is for informational 
purposes only and should not be construed as professional advice. We do not guarantee the accuracy or 
completeness of any information provided on our website. We are not responsible for any errors or omissions, 
or for the results obtained from the use of this information. Any reliance you place on such information 
is strictly at your own risk.
</p>
</div>
        </div>
    </div>
</div>
</div>

<div id="load-wrapp" class="load-wrapp">
  <div class="load-10">
    <div class="logo mb-4">
      <img alt="Image" class="img-fluid lazy" data-src="images/logo2.png">
    </div>
  </div>
</div>

<!-- Back To Top Section Begin -->

<div class="backtop">
  <a id="button"></a>
  <span>Back To Top</span>
</div>
<!-- Back To Top Section End -->


<!-- Modal Section Begin -->

  <section class="popup_project">
    <div class="modal fade " id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="col-md-12">
              <div class="web_content_Sec" data-aos="fade-down" data-aos-duration="1000">
                <h2>Get Free Consultancy</h2>
                <p>Are you in the position where you have everything on your brand but still nothing is going your way? Don’t panic we got you covered. With years of industry experience, our experts will find the problems and their solutions too.</p>
              </div>
            </div>
            <div class="consultancy_form">
              <form data-aos="fade-right" data-aos-duration="1000"  method="POST" class="contact-form plan-form" action="/leads/">
                <input type="hidden" name="route" value="<?= $_SERVER['REQUEST_URI'] ?>">   
                    <input type="hidden" name="brand" value="webvalleyuk">   
                    <input type="hidden" name="token" value="<?= $token;?>">   
                    <input type="hidden" name="tag" value="modal-auto">
                    <input type="hidden" name="price" value="null">
                    <input type="hidden" name="news" value="1">
<input type="text" class="jun"  name="gender">
                <div class="row">
                  <div class="col-md-6">
                    <input type="text" name="name" class="form-control" required="" placeholder="Full Name*">
                  </div>

                  <div class="col-md-6">
                    <input type="email" name="email" class="form-control" required="" placeholder="Email*">
                  </div>

                  <div class="col-md-12">
                    <input type="tel" name="phone" oninput="if (!window.__cfRLUnblockHandlers) return false; validity.valid||(value='');" class="form-control phone" required="" placeholder="Phone*" data-cf-modified-c8557bf7748ccc07b58855cf-="">
                  </div>

                  

                  <!-- <div class="col-md-6">
                    <select class="form-control" name="interested_in" required="">
                      <option value="" selected disabled>I am Interested in</option>
                      <option value="Logo Design">Logo Design  </option>
                      <option value="Brand Development ">Brand Development </option>
                      <option value="Web Design &amp; Development ">Web Design &amp; Development </option>
                      <option value="App Design &amp; Development">App Design &amp; Development </option>
                      <option value="Back-End Development">Back-End Development </option>
                      <option value="Digital Marketing ">Digital Marketing </option>
                     <option value="Motion Graphics">Motion Graphics </option>
                      <option value="Website Management">Website Management </option>
                      <option value="Domain Registration">Domain Registration </option>
                      <option value="Creative Copywriting">Creative Copywriting </option>
                      <option value="2D &amp; 3D Illustration">2D &amp; 3D Illustration </option>
                    </select>
                  </div>

                  <div class="col-md-6">
                    <select class="form-control" name="budget" required="">
                      <option value="" selected disabled>Forecasted-Budget</option>
                      <option value="Less than $1000">Less than $1000</option>
                      <option value="$1000 to $2000">$1000 to $2000</option>
                      <option value="$2000 to $5000">$2000 to $5000</option>
                      <option value="$5000 to $10,000">$5000 to $10,000 </option>
                      <option value="$20,000 to $30,000">$20,000 to $30,000</option>
                      <option value="$35,000 to $50,000">$35,000 to $50,000</option>
                      <option value="$50,000 and above">$50,000 and above</option>
                    </select>
                  </div> -->

                  <div class="col-md-12">
                    <textarea name="brief" placeholder="Message" class="form-control" required=""></textarea>
                  </div>

                  <div class="col-md-12">
                    <input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="I Agree with Term and Condition">
                    <label for="styled-checkbox-1">By clicking the submit button below, I hereby agree to your <a href="term-and-condition/">terms and conditions.</a></label>
                  </div>

                  <div class="col-md-12">
                    <div class="form_btn">
                      <input type="submit" value="Contact Our Team">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

<!-- Modal Section End -->

<!-- End of Logo Design Townsupport Zendesk Widget script -->


<!--<script id="ze-snippet" src=""> </script>-->
<!-- End of Logo Design Townus Zendesk Widget script -->

    <script src="js/all9996.js?1235" type="c8557bf7748ccc07b58855cf-text/javascript"></script>
    <script src="../cdnjs.cloudflare.com/ajax/libs/moment.js/2.21.0/moment.min.js" type="c8557bf7748ccc07b58855cf-text/javascript"></script>
<script src="../www.jqueryscript.net/demo/Date-Time-Picker-Bootstrap-4/build/js/bootstrap-datetimepicker.min.js" type="c8557bf7748ccc07b58855cf-text/javascript"></script>
    <script src="js/custom9bf3.js?15" type="c8557bf7748ccc07b58855cf-text/javascript"></script>
    <script type="c8557bf7748ccc07b58855cf-text/javascript" src="../cdn.jsdelivr.net/npm/slick-carousel%401.8.1/slick/slick.min.js"></script>

<script>
  $('.services-slider').slick({
  dots:false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
</script>


    <script>
$(".open_modal").click(function(){
    $(".pack_select").find("option:selected").attr("selected", false);
    var pack_id = $(this).data("pack_id");
    console.log(pack_id);
    $(".pack_select").find("option[value='" + pack_id + "']").attr("selected", true);
    //$("#popupformWebsite").modal("show")
})

$("#package_submit").click(function(){
    $("#package_form").submit();
});

function phone_formatting(ele,restore) {
  var new_number,
      selection_start = ele.selectionStart,
      selection_end = ele.selectionEnd,
      number = ele.value.replace(/\D/g,'');
  
  // automatically add dashes
  if (number.length > 2) {
    // matches: 123 || 123-4 || 123-45
    new_number = number.substring(0,3) + '-';
    if (number.length === 4 || number.length === 5) {
      // matches: 123-4 || 123-45
      new_number += number.substr(3);
    }
    else if (number.length > 5) {
      // matches: 123-456 || 123-456-7 || 123-456-789
      new_number += number.substring(3,6) + '-';
    }
    if (number.length > 6) {
      // matches: 123-456-7 || 123-456-789 || 123-456-7890
      new_number += number.substring(6);
    }
  }
  else {
    new_number = number;
  }
  
  // if value is heigher than 12, last number is dropped
  // if inserting a number before the last character, numbers
  // are shifted right, only 12 characters will show
  ele.value =  (new_number.length > 12) ? new_number.substring(12,0) : new_number;
  
  // restore cursor selection,
  // prevent it from going to the end
  // UNLESS
  // cursor was at the end AND a dash was added
  document.getElementById('msg').innerHTML='<p>Selection is: ' + selection_end + ' and length is: ' + new_number.length + '</p>';
  
  if (new_number.slice(-1) === '-' && restore === false
      && (new_number.length === 8 && selection_end === 7)
          || (new_number.length === 4 && selection_end === 3)) {
      selection_start = new_number.length;
      selection_end = new_number.length;
  }
  else if (restore === 'revert') {
    selection_start--;
    selection_end--;
  }
  ele.setSelectionRange(selection_start, selection_end);

}
function phone_number_check(field,e) {
  var key_code = e.keyCode,
      key_string = String.fromCharCode(key_code),
      press_delete = false,
      dash_key = 189,
      delete_key = [8,46],
      direction_key = [33,34,35,36,37,38,39,40],
      selection_end = field.selectionEnd;
  
  // delete key was pressed
  if (delete_key.indexOf(key_code) > -1) {
    press_delete = true;
  }
  
  // only force formatting is a number or delete key was pressed
  if (key_string.match(/^\d+$/) || press_delete) {
    phone_formatting(field,press_delete);
  }
  // do nothing for direction keys, keep their default actions
  else if(direction_key.indexOf(key_code) > -1) {
    // do nothing
  }
  else if(dash_key === key_code) {
    if (selection_end === field.value.length) {
      field.value = field.value.slice(0,-1)
    }
    else {
      field.value = field.value.substring(0,(selection_end - 1)) + field.value.substr(selection_end)
      field.selectionEnd = selection_end - 1;
    }
  }
  // all other non numerical key presses, remove their value
  else {
    e.preventDefault();
//    field.value = field.value.replace(/[^0-9\-]/g,'')
    phone_formatting(field,'revert');
  }

}

document.getElementsByClassName('phone').onkeyup = function(e) {
  phone_number_check(this,e);
}

$(".phone").keyup(function(e){
  phone_number_check(this,e);  
});

</script>
<script src="cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="c8557bf7748ccc07b58855cf-|49" defer=""></script><script type="text/javascript">(function(){window['__CF$cv$params']={r:'7171155c3e270b3f',m:'dUc5YJ9sSMJuGw_Zl14WmbFB9VD.ZEYAUduwgHn9ECY-1654517831-0-Ad3oJvHIRIZhZJMbC8zTJs2ae+FTHY4JR67TxqfLmr4chU1NQMzyW2PodHZeBF1tbAVRlCKiRgR+HIvKI3PhEBfqmMPsRMeTYjsNIqVcb4TZI0rsruyMqCsltkvlmDaQdwUPDEhsrUMj809D++KmCYY=',s:[0x169339d26d,0x4d1aa00b49],u:'/cdn-cgi/challenge-platform/h/g'}})();</script><script defer src="https://static.cloudflareinsights.com/beacon.min.js/v652eace1692a40cfa3763df669d7439c1639079717194" integrity="sha512-Gi7xpJR8tSkrpF7aordPZQlW2DLtzUlZcumS8dMQjwDHEnw9I7ZLyiOj/6tZStRBGtGgN6ceN6cMH8z7etPGlw==" data-cf-beacon='{"rayId":"7171155c3e270b3f","version":"2021.12.0","r":1,"token":"42a362bc0ac84bd8bf23c02e5c3979da","si":100}' crossorigin="anonymous"></script>
</body>

<!-- Mirrored from professionalwebdesigns.co.uk/social-media-marketing by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 06 Jun 2022 12:17:49 GMT -->
</html>


<div style="display: none;" class="popupform myModal" id="popupformWebsite">
    <h2>We are here to help!</h2>
    <p>Providing you the perfect solution for your business needs. Let's work together and unlock doors to success.</p>
        
        <form class="validate-popupform-web" method="POST" action="/leads/" id="package_form">
        <input type="hidden" name="route" value="<?= $_SERVER['REQUEST_URI'] ?>">   
                    <input type="hidden" name="brand" value="webvalleyuk">   
                    <input type="hidden" name="token" value="<?= $token;?>">   
                    <input type="hidden" name="tag" value="modal-auto">
                    <input type="hidden" name="price" value="null">
                    <input type="hidden" name="news" value="1">
            
        <div class="row">
            <div class="col-md-6">
                <ul>
                    <li>
                        <i class="fa fa-user" aria-hidden="true"></i>
                        <input type="text" class="required" required placeholder="Full Name *" name="name">
                    </li>
                </ul>
            </div>
            <div class="col-md-6">
                <ul>
                    <li>
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                        <input type="email" class="required email" required placeholder="Email " name="email">
                    </li>
                </ul>
            </div>
            <div class="col-md-12">
                <ul>
                    <li>
                        <i class="fa fa-phone" aria-hidden="true"></i>
                        <input name="phone" id="phone-coun" class="phone form-control" type="tel" oninput="if (!window.__cfRLUnblockHandlers) return false; validity.valid||(value='');" max="10" placeholder="Contact Number *" required="" autocomplete="off" data-cf-modified-c8557bf7748ccc07b58855cf-="">
                    </li>
                </ul>
            </div>
            
            <div class="col-md-12">
                <ul>
                    <li>
                        <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                        <textarea name="brief" class="required" required placeholder="Business Description"></textarea>
                    </li>
                </ul>
            </div>
            
            
            <div class="col-md-12">
                <ul>

                    <li>
                        <!--<input  class="btn-custom" type="button" id="package_submit"  value="Submit">-->
                        
                        <button class="btn-custom popup-btn" type="submit" style="cursor:pointer;" id="package_submit">Submit</button>
                        

                    </li>
                </ul>
            </div>
        </div>
    </form>
</div>


<div class="cookie-disclaimer js-cookie-disclaimer cookies_secrion">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="main_cookies">
          <div class="txt">We use cookies to enhance your user experience. By continuing using our site, you agree to our use of cookies.</div>
          <div class="button_sec">
            <button class="button">I AGREE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

