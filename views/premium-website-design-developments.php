<?php 
include_once("includes/token.php");
if (isset($_SERVER['HTTPS'])) {
	$requesMet = "https";
}else{
	$requesMet = "http";
}

if(!isset($_SESSION['url'])){
  $_SESSION['url'] = "$_SERVER[REQUEST_URI]";
 }
//  echo $_SESSION['url'];
//  session_destroy();
// die;

?>

<!doctype html>
<html lang="en">
  <head>
    <title>Website Design And Development | Website Valley</title>


    <style>
.innserservice-commonfolds.cwebdesign {
    background:url(/images/abt-custom-website-design.png) no-repeat;
    background-position: top right -20px;
    background-size: 40%;
    padding: 60px 0;
}
.blogo{
            max-width:180px;
        }
.mblForm{
  background-color:#000;
  padding:100px 0;
  
}    
.mblForm .fldset{
  margin-top:20px;
}    
.beforemblform{
  background:#fff;
  padding:20px;
  border-radius:20px;
  max-width:80%;
  margin:0 auto;
}
    body > main > div.slider-wrapper > section > div > div > div > div > div > div > div > div:nth-child(2) > form{
    
    background-color: #ffffffc2;
    width: 70%;
    margin: 0 auto;
    border-radius: 30px;
    padding: 30px;
    }


    body > main > div.slider-wrapper > section > div > div > div > div > div > div > div > div:nth-child(2) > form input{
    width: 100%;
    padding: 10px;
    background-color: #fff;
    border: none;
    margin-bottom: 10px;
    border-radius: 10px;

    }


    body > main > div.slider-wrapper > section > div > div > div > div > div > div > div > div:nth-child(2) > form textarea{
    width: 100%;
    padding: 10px;
    background-color: #fff;
    border: none;
    margin-bottom: 10px;
    border-radius: 10px;

    }



    body > main > div.slider-wrapper > section > div > div > div > div > div > div > div > div:nth-child(2) > form > div > div:nth-child(5) > div > input[type=submit]{

background-color:#D93954 ;
color: #fff;
font-size: 20px;
font-weight: 600;

    }
    .form-box-main form input[type=checkbox]:not(old)+label, input[type=radio]:not(old)+label {
    background: none !important;
  }
  .radioText input{
    margin-top: 5px;
    /* margin-left: 3px; */
    margin-right: 6px;
}
input#other {
    margin-top: 12px !important;
    margin-right: 30px !important;
    /* margin-left: 11px; */
}



    @media screen and (min-width: 600px) {

    .home-banner-content{

margin-top: 50px;

    }

    }

.float {
    position: fixed;
    width: 55px;
    height: 55px;
    bottom: 29px;
    left: 19px;
    background-color: #25d366;
    color: #FFF;
    border-radius: 50px;
    text-align: center;
    font-size: 30px;
    box-shadow: 2px 2px 3px #999;
    z-index: 100;
    animation: .7s hilado infinite alternate;
}

@keyframes hilado{
  0%{
    bottom:10px;
  }
  100%{
    bottom: 29px;
  }
}

.my-float{
	margin-top:9px;
    color: #fff;
    font-size:37px !important;

}
.my-float:focus,.my-float:hover{
    color: #fff;
    box-shadow: none;
}

button[type="submit"] {
    display: none;
}

input[type="submit"] {
    display: none;
}

.jun {
    visibility: hidden !important;
    position: absolute;
    max-width: 1px !important;
}

    </style>
    <?php 

if (isset($_SERVER['HTTPS'])) {
	$requesMet = "https";
}else{
	$requesMet = "http";
}

?>
<base href="<?php echo $requesMet.'://'.$_SERVER['HTTP_HOST'].'/' ?>">
<?php include_once('landing-assets/include/packages.php');?>
<link rel="canonical" href="<?php echo $requesMet.'://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'] ?>">
    <meta name="keywords" content="">
    <meta name="description" content="">
        <meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png">
<link rel="icon" href="favicon.png" type="image/x-icon" />
<link rel="manifest" href="images/site.webmanifest">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
<link href="landing-assets/css/css-m-style.css" rel="stylesheet" type="text/css" />
<link href="landing-assets/css/css-style.css" rel="stylesheet" type="text/css" />
<link href="https://fonts.googleapis.com/css?family=Cabin:400,400i,500,500i,600,600i,700,700i&display=swap" rel="stylesheet">
<link rel='stylesheet' id='main-style-css'  href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css' type="text/css" />
<meta HTTP-EQUIV="Pragma" CONTENT="Cache">

  </head>
  <body class="hompg innerpage">
    

<!-- Modal -->




<div class="ys-layer "></div>
<div class="ys-container mycustompop " id="ys-container">
  <div class="ys-box">
    <a class="ys-popup-close ys-exit closePopup" href="javascript:void;">x</a>
    <div class="ys-popup-content">
      <div class="left">
        <h3>Discover The World's top Designer & Developers</h3>
      </div>
      <div class="right">
        <div class="popupform tabform clearfix  text-left">
         
          <h3 class="main-heading text-center">Get Special Discount</h3>
          
          <P>Don't miss out on special discount offer</P>
          <form class="cmxform" id="bannerform"  method="POST" action="/leads/">
          <input type="text" name="name" class="jun name" value="">   
              <input type="text" name="firstname" class="jun firstname" value="legit">  
              <input name="email" type="email" class="form-control txt-sub text-left emailBootom jun email" placeholder="your email address">
              <input type="hidden" name="token" value="<?= $token;?>">
            <input type="hidden" name="route" value="<?= $_SERVER['REQUEST_URI'] ?>">   
            <input type="hidden" name="brand" value="websitevalley">   
            <input type="hidden" name="tag" value="footer-form in landingpage">
            <input type="hidden" name="price" value="null">
            <input type="hidden" name="news" value="1">
            <div class="row">
              <div class="col-lg-12">
                <div class="fldset">
                  <input id="username" name="name" minlength="2" type="text" placeholder="Enter your name *" required />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="fldset">
                  <input id="cemail" type="email" name="email" placeholder="Enter email here *" required>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="fldset">
                  <input id="phone-coun" name="phone" type="number" placeholder="Phone Number *" maxlength="10" onkeypress="return isNumberKey(event);" required />
                </div>
              </div>
              <div class="col-lg-12">
                <div class="fldset">
                  <textarea name="brief" id="" rows="7" placeholder="Talk About Your Project"></textarea>
                </div>
              </div>
              
              <div class="col-lg-12">
                <div class="fldset">
                  <input name="submit" type="submit" placeholder="Connect With Us" required />
                   <script type="text/javascript">
                document.getElementById('location').value = window.location.href;
                </script>
        
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


<div class="mobile-nav"> <a href="/" class="logo-main"> <img src="assets/images/logo.png" alt="*" /></a>
  <nav>

  <ul class="unstyled mainnav pbpx-15">
      <li><a href="/">Home</a></li>
      
      <li><a href="javascript:;">Services <i class="xicon fa fa-angle-down"></i></a>
        <ul class="firstlevel unstyled">
          <li><a href="/logo-services/">Logo Design</a></li>
          <li><a href="/website-design-development/">Website Design &amp; Development</a></li>
          <li><a href="/wordpress-website/">Wordpress Development</a></li>
          <li><a href="/ecommerce-website/">Ecommerce Solutions</a></li>
          <li><a href="/web-app-development/">Web Application Development</a></li>
          <li><a href="/mobile-app-development/">Mobile App Development</a></li>
          <li><a href="/branding/">Branding</a></li>
          <li><a href="/video-animation/">Video Animation</a></li>
          <li><a href="/seo-services/">Search Engine Optimization</a></li>
        </ul>
      </li>
      <li><a href="/portfolio/">Portfolio</a></li>
      <li><a href="/packages/">Packages</a></li>
      <li><a href="/about-us/">About</a></li>
      <li><a href="/contact/">Contact</a></li>
    </ul>

  </nav>
</div>
<main class="app-container">
<!-- Mobile Navigation Button Start-->
<div class="mobile-nav-btn"> <span class="lines"></span> </div>
<!-- Mobile Navigation Button End-->




<header class="mheader">
  <!-- <div class="topbarr flex flex-align-items-center" style="background-image:url(images/banner-bg.png)">
    <div class="container">
      <div class="row"> 
        <div class="col-lg-12">
          <div class="offerbar">
            <h4>Avail <span>50%</span> Discount On all services</h4>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="mainbarr">
    <div class="container-custom">
      <div class="row">
        <div class="col-lg-12">
          <div class="boxednav">
            <div class="logo">
              <a href="/">
                <!-- <h3>Logo</h3> -->
                <img class="wlogo" src="assets/images/logo.png">
                <img class="blogo" src="assets/images/logo.png">
              </a>
            </div>
            <div class="navigation">
              <ul class="linkingchannel">
                <li class=""><a href="/">Home</a></li>
                
                <li class="ddlistmenu active"><a href="javascript:;">Services <span class="fa fa-angle-down"></span></a>
                  <div class="dropdown">
                    <ul>
                    <li><a href="/logo-services/">Logo Design</a></li>
                    <li><a href="/website-design-development/">Website Design &amp; Development</a></li>
                    <li><a href="/wordpress-website/">Wordpress Development</a></li>
                    <li><a href="/ecommerce-website/">Ecommerce Solutions</a></li>
                    <li><a href="/web-app-development/">Web Application Development</a></li>
                    <li><a href="/mobile-app-development/">Mobile App Development</a></li>
                    <li><a href="/video-animation/">Video Animation</a></li>
                    <li><a href="/seo-services/">Search Engine Optimization</a></li>
                      
                    </ul>
                  </div>
                </li>
                <li><a href="/branding/">Branding</a></li>

                <li><a href="/portfolio/">Portfolio</a></li>
                <li><a href="/packages/">Packages</a></li>
                <li><a href="/about-us/">About</a></li>
                <li><a href="/contact-us/">Contact</a></li>
              </ul>
              <ul class="infochannel">
                <li><a class="numbercta" href="tel:+14423191348"><i class="fa fa-phone" style="color: #dd3854;margin-right: 5px;"></i>+44 2038 087061</a></li>
                <li><a href="javascript:void(0)" class="btn-primary" onclick="setButtonURL();">Live Chat</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="nav-area-full stickyhead">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 logo-area">
          <div class="logo">
            <a href="https://websitevalley.co.uk/">
              <img class="img-fluid" src="images/home/logo.png" alt="*">
            </a>
          </div>
        </div>
   
      </div>
    </div>
  </div>
</header>

    <div class="slider-wrapper">
      <section class="">
        <div class="banslider">
          <div class="item">
            <div class="home-banner d-flex" style="background-image:url(images/website-banner.jpg)">
              <div class="container align-self-center">
                <div class="row">
                  <div class=" col-lg-6">
                    <div class="home-banner-content">
                      <h1>Website that drives the best return for your investment</h1>
                      <p class="subtitle">Our web designing and development experts ensure that your website is search engine friendly, aesthetically appealing and user friendly.</p>
                     
                      <div class="btn-wrap">
                        <a href="javascript:;" onclick="setButtonURL();" class="btn-primary " >Get Started</a>
                     
                        <a href="tel:+14423191348" class="btn-secondary-outline">+44 2038 087061</a>
                      </div>
                    </div>
                  </div>

        <div class=" col-lg-6 d-none d-lg-block" style="z-index: 1000000;">

        <form method="POST" action="/leads/">
        <input type="text" name="name" class="jun name" value="">   
              <input type="text" name="firstname" class="jun firstname" value="legit">  
              <input name="email" type="email" class="form-control txt-sub text-left emailBootom jun email" placeholder="your email address">
              <input type="hidden" name="token" value="<?= $token;?>">
        <h4 style="text-align:center;color:#D93954;font-weight:600;">Get an Experts Consultation</h4>
        <p style="text-align:center;color:#333;">or Call Now <b>+44 2038 087061</b></p>
           <input type="hidden" name="route" value="/premium-website-design-development/">   
           <input type="hidden" name="brand" value="websitevalley">   
           <input type="hidden" name="tag" value="footer-form in landingpage">
           <input type="hidden" name="price" value="null">
           <input type="hidden" name="news" value="1">
           <div class="row">
             <div class="col-lg-12">
               <div class="fldset">
                 <input id="username" name="name" minlength="2" type="text" placeholder="Enter your name *" required="">
               </div>
             </div>
             <div class="col-lg-12">
               <div class="fldset">
                 <input id="cemail" type="email" name="email" placeholder="Enter email here *" required="">
               </div>
             </div>
             <div class="col-lg-12">
               <div class="fldset">
   <input id="cphone" type="tel" name="phone" placeholder="Phone Number *" required="">
               </div>
             </div>
             <div class="col-lg-12">
               <div class="fldset">
                 <textarea name="brief" id="" rows="7" placeholder="Talk About Your Project"></textarea>
               </div>
             </div>
             
             <div class="col-lg-12">
               <div class="fldset">
                 <input name="submit" type="submit" placeholder="Connect With Us" required="">
                  <script type="text/javascript">
               document.getElementById('location').value = window.location.href;
               </script>
       
               </div>
             </div>
           </div>
         </form>

                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
  </div>
<div class=" ">
<div class="mblForm d-block d-lg-none">
  <div class="row">
    <div class="col-lg-6 offset-lg-3 ">
    <div class="beforemblform">
    <form method="POST" action="/leads/">
    <input type="text" name="name" class="jun name" value="">   
              <input type="text" name="firstname" class="jun firstname" value="legit">  
              <input name="email" type="email" class="form-control txt-sub text-left emailBootom jun email" placeholder="your email address">
              <input type="hidden" name="token" value="<?= $token;?>">
        <h4 style="text-align:center;color:#D93954;font-weight:600;">Get an Experts Consultation</h4>
        <p style="text-align:center;color:#333;">or Call Now <b>+44 2038 087061</b></p>
           <input type="hidden" name="route" value="/premium-website-design-development/">   
           <input type="hidden" name="brand" value="websitevalley">   
           <input type="hidden" name="tag" value="footer-form in landingpage">
           <input type="hidden" name="price" value="null">
           <input type="hidden" name="news" value="1">
           <div class="row">
             <div class="col-lg-12">
               <div class="fldset">
                 <input class="form-control" id="username" name="name" minlength="2" type="text" placeholder="Enter your name *" required="">
               </div>
             </div>
             <div class="col-lg-12">
               <div class="fldset">
                 <input class="form-control" id="cemail" type="email" name="email" placeholder="Enter email here *" required="">
               </div>
             </div>
             <div class="col-lg-12">
               <div class="fldset">
   <input class="form-control" id="cphone" type="tel" name="phone" placeholder="Phone Number *" required="">
               </div>
             </div>
             <div class="col-lg-12">
               <div class="fldset">
                 <textarea class="form-control" name="brief" id="" rows="7" placeholder="Talk About Your Project"></textarea>
               </div>
             </div>
             
             <div class="col-lg-12">
               <div class="fldset text-center mt-3">
                 <input class="btn btn-success " name="submit" type="submit" placeholder="Connect With Us" required="">
                
       
               </div>
             </div>
           </div>
         </form>
         </div>
    </div>
  </div>
</div>
</div>
   <div class="bottomSec">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <ul class="mlogos">
                <li>
                  <img src="images/clients-01.png" alt="">
                </li>
                <li>
                  <img src="images/clients-02.png" alt="">
                </li>
                <li>
                  <img src="images/clients-03.png" alt="">
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="top-slider">
                <li>
                  <img src="images/clients-04.png" alt="">
                </li>
                <li>
                  <img src="images/clients-05.png" alt="">
                </li>
                <li>
                  <img src="images/clients-06.png" alt="">
                </li>
                <li>
                  <img src="images/clients-07.png" alt="">
                </li>
                <li>
                  <img src="images/clients-08.png" alt="">
                </li>
                <li>
                  <img src="images/clients-09.png" alt="">
                </li>
                <li>
                  <img src="images/clients-01.png" alt="">
                </li>
                <li>
                  <img src="images/clients-02.png" alt="">
                </li>
                <li>
                  <img src="images/clients-03.png" alt="">
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>  
  <section class="innserservice-commonfolds cwebdesign">
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <h4 class="subheading">DESIGN IS POWERFUL</h4>
          <h2>Your website doesn't have to be complicated. </h2>
          <p>We are fearless about taking on challenges! With collaboration at our core, we are ready to work with you to craft winning solutions. We excel at listening, and then acting on your needs, to deliver a successful project outcome. Our team of experts are equipped with the knowledge and experience needed to get the job done, and are poised to deliver a responsive website for your business.</p>
          
          <div class="btnwrap">
            <a href="javascript:;" onclick="setButtonURL();" class="btn-primary">Chat With Us</a>
            <a href="tel:+14423191348" class="btn-secondary-outline" tabindex="0">+44 2038 087061</a>
          </div>
        </div>
      </div>
    </div>
  </section>
<section class="portfolioboxes">
    <div class="container-custom">
      <div class="row">
        <div class="col-lg-12">
          <div class="portwrappp">
            <h4 class="subheading">OUR PORTFOLIO</h4>
            <h2>Focused, bold solutions, for an evolving world </h2>
            <p>Our success lies in changing the game for our clients' brands. By focusing on customer outcomes, we build beautiful, engaging experiences that drive real business results.</p>
            <div class="tab-custom">
              <ul class="tabs tabs-webport current mportt">
                
  <li class="to-win-box">
    <a data-fancybox="port" href="images/web-1.jpg">
      <figure>
        <img src="images/web-1.jpg" alt="">
      </figure>
    </a>
  </li>
  <li class="to-win-box">
    <a data-fancybox="port" href="images/web-2.jpg">
      <figure>
        <img src="images/web-2.jpg" alt="">
      </figure>
    </a>
  </li>
  <li class="to-win-box">
    <a data-fancybox="port" href="images/web-3.jpg">
      <figure>
        <img src="images/web-3.jpg" alt="">
      </figure>
    </a>
  </li>
  <li class="to-win-box">
    <a data-fancybox="port" href="images/web-4.jpg">
      <figure>
        <img src="images/web-4.jpg" alt="">
      </figure>
    </a>
  </li>
  <li class="to-win-box">
    <a data-fancybox="port" href="images/web-5.jpg">
      <figure>
        <img src="images/web-5.jpg" alt="">
      </figure>
    </a>
  </li>
  <li class="to-win-box">
    <a data-fancybox="port" href="images/web-6.jpg">
      <figure>
        <img src="images/web-6.jpg" alt="">
      </figure>
    </a>
  </li>
  <li class="to-win-box">
    <a data-fancybox="port" href="images/web-7.jpg">
      <figure>
        <img src="images/web-7.jpg" alt="">
      </figure>
    </a>
  </li>
  <li class="to-win-box">
    <a data-fancybox="port" href="images/web-8.jpg">
      <figure>
        <img src="images/web-8.jpg" alt="">
      </figure>
    </a>
  </li>
  <li class="to-win-box">
    <a data-fancybox="port" href="images/web-9.jpg">
      <figure>
        <img src="images/web-9.jpg" alt="">
      </figure>
    </a>
  </li>
              </ul>
              
            </div>
            <div class="btn-wrap">
              <a href="tel:+14423191348" class="btn-primary">+44 2038 087061</a>
              <!-- <a href="" class="btn-secondary-outline">View more</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mcta">
    <div class="container-custom">
      <div class="row">
        <div class="col-lg-8">
          <div class="textwrap">
            <h4 class="subheading">GOT A PROJECT IN MIND, LET’S GRAB A COFFEE</h4>
            <h2>We’re just as excited about your idea as you are</h2>
            <p>We are a full service digital consultancy with experience and capacity to meet the needs of even the largest most complex of organizations in the world. Our services portfolio enables us to offer clients the best of experiences.</p>
            <div class="btn-wrap">
              <a href="javascript:void(0)" onclick="setButtonURL()" class="btn-secondary">Let's Chat</a>
              <a href="tel:+14423191348" class="btn-secondary-outline">+44 2038 087061</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>  
<section class="packagesmain">
    <div class="container-custom">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <h4 class="subheading">Our Packages</h4>
          <h2> How will your business reach ahead?</h2>
          <p>Our local teams are working today to create the business of tomorrow. Get in touch and let's find out how we transform your industry, together.</p>
        </div>
      </div>
      <div class="row">
        <div class="packk">
          <div class="tab-custom">
            
            <ul class="tabs tabs-websitepack current packlliist slidepack">
              
    <li class="mypack">
      <div class="pkhead">
        <h3>STARTUP WEBSITE <br> PACKAGE </h3>
        <h2>£199</h2>
        <p>Suitable for potential startups and brand revamps for companies.</p>
      </div>
      <div class="bdy">
        <ul class="listscroll">
        <li>5 Stock Photos</li>
          <li>5 Page Website</li>
          <li>3 Banner Design</li>
          <li>1 jQuery Slider Banner</li>
          <li>FREE Google Friendly Sitemap</li>
          <li>Complete W3C Certified HTML</li>
          <li>48 to 72 hours TAT</li>
          <li>100% Satisfaction Guarantee</li>
          <li>100% Unique Design Guarantee</li>
          <li>100% Money Back Guarantee *</li>
          <li>Mobile Responsive will be Additional £200*</li>
          <li>CMS will be Additional £250*</li>
        </ul>
      </div>
      <div class="ftter">
      <a href="javascript:void" class="formBtn btn-primary">Get Started</a>
      <!-- <a href="https://websitevalley.co.uk/pricing/basic-website-package" class="viewdetails"><span class="icon-magnifying-glass2"></span> See Details</a> -->
      </div>
    </li>
    <li class="mypack popular">
      <div class="pkhead">
        <h3>PROFESSIONAL WEBSITE<br> PACKAGE </h3>
        <h2>£449</h2>
        <p>Suitable for potential startups and brand revamps for companies.</p>
      </div>
      <div class="bdy">
        <ul class="listscroll">

        <li>10 Page Website</li>
          <li>CMS / Admin Panel Support</li>
          <li>8 Stock images</li>
          <li>5 Banner Designs</li>
          <li>1 jQuery Slider Banner</li>
          <li>FREE Google Friendly Sitemap</li>
          <li>Complete W3C Certified HTML</li>
          <li>48 to 72 hours TAT</li>
          <li>Facebook Page Design</li>
          <li>Twitter Page Design</li>
          <li>YouTube Page Design</li>
          <li>Dedicated Project Manager</li>
          <li>Complete Deployment</li>

       
        </ul>
      </div>
      <div class="ftter">
      <a href="javascript:void" class="formBtn btn-primary">Get Started</a>
      <!-- <a href="https://websitevalley.co.uk/pricing/startup-website-package" class="viewdetails"><span class="icon-magnifying-glass2"></span> See Details</a> -->
      </div>
    </li>
    <li class="mypack ">
      <div class="pkhead">
        <h3>ELITE WEBSITE <br> PACKAGE  </h3>
        <h2>£749</h2>
        <p>Suitable for potential startups and brand revamps for companies.</p>
      </div>
      <div class="bdy">
        <ul class="listscroll">
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
          <li>48 to 72 hours TAT</li>
          <li>Facebook Page Design</li>
          <li>Twitter Page Design</li>
          <li>YouTube Page Design</li>
          <li>Dedicated Project Manager</li>
          <li>Complete Deployment</li>
        </ul>
      </div>
      <div class="ftter">
      <a href="javascript:void" class="formBtn btn-primary">Get Started</a>
      <!-- <a href="https://websitevalley.co.uk/pricing/professional-website-package" class="viewdetails"><span class="icon-magnifying-glass2"></span> See Details</a> -->
      </div>
    </li>
    <li class="mypack popular">
      <div class="pkhead">
        <h3>SILVER WEBSITE<br> PACKAGE  </h3>
        <h2>£<?= $silverWebsite?></h2>
        <p>Suitable for potential startups and brand revamps for companies.</p>
      </div>
      <div class="bdy">
        <ul class="listscroll">
          <li>Custom Made, Interactive, Dynamic &amp; High End Design</li>
          <li>Custom WP (or) Custom PHP Development</li>
          <li>1 jQuery Slider Banner</li>
          <li>Up to 10 Custom Made Banner Designs</li>
          <li>10 Stock Images</li>
          <li>Unlimited Revisions</li>
          <li>Special Hover Effects</li>
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
          <li>Dedicated Project Manager</li>
          <li>Dedicated Accounts Manager</li>
          <li>Facebook Page Design</li>
          <li>Twitter Page Design</li>
          <li>YouTube Page Design</li>
        </ul>
      </div>
      <div class="ftter">
      <a href="javascript:void" class="formBtn btn-primary">Get Started</a>
      <!-- <a href="https://websitevalley.co.uk/pricing/elite-website-package" class="viewdetails"><span class="icon-magnifying-glass2"></span> See Details</a> -->
      </div>
    </li>
    <li class="mypack ">
      <div class="pkhead">
        <h3>BUSINESS WEBSITE<br> PACKAGE   </h3>
        <h2>£<?= $businessWebsite?></h2>
        <p>Suitable for potential startups and brand revamps for companies.</p>
      </div>
      <div class="bdy">
        <ul class="listscroll">
          <li>Custom Made, Interactive, Dynamic &amp; High End Design</li>
          <li>Custom WP (or) Custom PHP Development</li>
          <li>1 jQuery Slider Banner</li>
          <li>Up to 10 Custom Made Banner Designs</li>
          <li>10 Stock Images</li>
          <li>Unlimited Revisions</li>
          <li>Special Hover Effects</li>
          <li>Content Management System (CMS)</li>
          <li>Online Appointment/Scheduling/Online Ordering Integration (Optional)</li>
          <li>Online Payment Integration (Optional)</li>
          <li>Multi Lingual (Optional)</li>
          <li>Custom Dynamic Forms (Optional)</li>
          <li>Signup Area (For Newsletters, Offers etc.)</li>
          <li>Search Bar</li>
          <li>Live Feeds of Social Networks integration (Optional)</li>
          <li>Mobile Responsive</li>
          <li>15 Seconds 2D Explainer Video</li>
          <li>Voice - Over &amp; Sound Effects</li>
          <li>Professional Script Writing</li>
          <li>Storyboard</li>
          <li>SEO Meta Tags</li>
          <li>FREE 5 Years Domain Name</li>
          <li>Free Google Friendly Sitemap</li>
          <li>Search Engine Submission</li>
          <li>Complete W3C Certified HTML</li>
          <li>Industry Specified Team of Expert Designers and Developers</li>
          <li>Dedicated Accounts Manager</li>
          <li>Complete Deployment</li>
        </ul>
      </div>
      <div class="ftter">
      <a href="javascript:void" class="formBtn btn-primary">Get Started</a>
      <!-- <a href="https://websitevalley.co.uk/pricing/business-website-package" class="viewdetails"><span class="icon-magnifying-glass2"></span> See Details</a> -->
      </div>
    </li>
             </ul>
            
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="comboopack">
    <div class="container-custom">
      <div class="row">
        <div class="col-lg-12">
          <div class="combopackwrap">
            <div class="headdd">
              <figure>
                <img src="images/images-discount50.png">
              </figure>
              <h3>Customized web portal <span>Professional Combo</span></h3>
            </div>
            <div class="bodyyy">
              
              <div class="coll">
                <ul>
                  <li class="heading">WEBSITE</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Complete Custom Design & Development</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Dating Portal, Job Portal, Professional Network Portal, Social Network Portal, Restaurant Portal, Medical Portal, Enterprise Portal (Any One)</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Unique, User Friendly, Interactive, Dynamic, High End UI Design</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Unlimited Banner Designs</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Interactive Sliding Banners</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Special Hover Effects</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Unlimited Stock Images</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>User Signup Area</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Client/User Dashboard Area</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Custom Coding and Development</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Content Management System (Custom)</li>
                  
                </ul>
              </div>
              <div class="coll">
                <ul>
                  
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Online Appointment/Scheduling/Online Ordering Integration (Optional)</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Online Payment Integration (Optional)</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Multi Lingual (Optional)</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Custom Dynamic Forms (Optional)</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Shopping Cart Integration (Optional)</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Complete Database Creation</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Signup Automated Email Authentication</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Web Traffic Analytics Integration</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>3rd Party API Integrations</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Signup Area (For Newsletters, Offers etc.)</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Search Bar for Easy Search</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Live Feeds of Social Networks integration (Optional)</li>
                  
                </ul>
              </div>
              <div class="coll">
                <ul>

                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Search Engine Submission</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Module-wise Architecture</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Extensive Admin Panel</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Award Winning Team of Expert Designers and Developers</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Complete Deployment</li>
                </ul>
                <ul>
                  <li class="heading">VALUE ADDED SERVICES</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Complete Source Files</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Dedicated Project Manager</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>100% Ownership Rights</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>100% Satisfaction Guarantee</li>
                  <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>100% Money Back Guarantee</li>
                </ul>
                
              </div>
            </div>
            
            <div class="footterr">
              <div class="left">
                <div class="txtt">
                  <h4>For more information speak with us</h4>    
                </div>
                <div class="btnwrap">
                  <a class="numbercta" href="tel:+14423191348">+44 2038 087061</a>
                  <a class="chatcta" href="javascript:;" onclick="setButtonURL()">Live Chat</a>
                </div>

              </div>
              <div class="right">
                <figure class="loudfig">
                  <img src="images/images-loud.png">
                </figure>
                <div class="price">
                  <h2>£2999<span>£5,999</span></h2>
                  <h6>50% Discounted Price</h6>
                </div>
                <div class="orderbtn">
                  <a href="javascript:void(0)" class="btn-primary formBtn" data-toggle="modal" data-target="#modalForDiscount">Get A Quote</a>
                  <!-- <a href="" class="viewdetails"><span class="icon-magnifying-glass2"></span> See Details</a> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</section>  
  <section class="solutionssec" style="">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="textwrap mwrapp">
            <h4 class="subheading">TECHNOLOGIES</h4>
            <h2>The craft of blending superlative design with flawless execution</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-7">
          <figure class="mainfigure">
            <img src="images/services-custom-web.png" style="width: 800px;margin-right: 0;">
          </figure>
        </div>
        <div class="col-lg-5">
          <div class="textwrap">
            <h4 class="subheading">WEBSITE DESIGN & DEVELOPMENT</h4>
            <h2>Designing and building user interfaces</h2>
            <p>The Website valley specializes in website design and development services. Our web experiences are high-performing, designed to be user-friendly, fully functional, very secure and able to scale as your enterprise grows. </p>
            <ul class="solutionslist">
              <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>HTML5 </li>
              <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>CSS3</li>
              <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>JavaScript</li>
              <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>jQuery</li>
              <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>PhP</li>
              <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Laravel</li>
              <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>CodeIgniter</li>
              <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Java</li>
              <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>.Net</li>
              <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Python</li>
              <li><i class="fa fa-check" style="color: #dd3854;margin-right: 5px;"></i>Wordpress</li>
            </ul>
            <div class="btn-wrap">
              <a href="javascript:;" onclick="setButtonURL();" class="btn-primary">Chat Now</a>
              <a href="tel:+14423191348" class="btn-secondary-outline">+44 2038 087061</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
<section class="valuablewrp">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="txtwrp">
          <h4 class="subheading">TESTIMONIALS</h4>
          <h2>What our valuable clients say</h2>
          <p></p>
        </div>
        <div class="maindiv">
          <div class="testmslider1">
            
            <div class="col-md-4">
              <div class="mainwrp">
                <div class="starwrp">
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                </div>
                <p>The website received positive feedback and drove an increase in sales. Flexible and efficient, the team produced high-quality content within a short period. The Website valley innovative ideas and hands-on approach made for a fruitful partnership. They produced landing pages of varying lengths to be used on a website and for marketing campaigns.</p>
              </div>
              <div class="icli">
                <div class="round">
                  <h5>EJ</h5>
                </div>
                <div class="clname">
                  <h6>Emily Jordan</h6>
                  <p>Head of Marketing</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="mainwrp">
                <div class="starwrp">
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                </div>
                <p>We are excited to be working with The Website valley and building on their Chain of Custody solution. It has helped set the foundation for the Responsible Gold Supply Chain and Emergent Technology'sability to track gold from mine to vault.</p>
              </div>
              <div class="icli">
                <div class="round">
                  <h5>LM</h5>
                </div>
                <div class="clname">
                  <h6>Louis Martin</h6>
                  <p>Technology Head</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="mainwrp">
                <div class="starwrp">
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                </div>
                <p>Our online ordering has increased about 4x in the past 3–4 years and websitevalley has made it easier and more efficient to get orders through. It fits right into the operational flow.</p>
              </div>
              <div class="icli">
                <div class="round">
                  <h5>AJ</h5>
                </div>
                <div class="clname">
                  <h6>Amber Jamal</h6>
                  <p>Marketing & PR Manager</p>
                </div>
              </div>
            </div>
            
            
            <div class="col-md-4">
              <div class="mainwrp">
                <div class="starwrp">
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                </div>
                <p>We’ve been using @websitevalley  here at A Better Lemonade Stand for several years now. We've seen incredible growth - achieving a 532% growth one year. If you'd like to know more about them, read our review on the blog:</p>
              </div>
              <div class="icli">
                <div class="round">
                  <h5>JH</h5>
                </div>
                <div class="clname">
                  <h6>Joscelyn Henneton</h6>
                  <p>Sales Manager</p>
                </div>
              </div>
            </div>
            
            
            <div class="col-md-4">
              <div class="mainwrp">
                <div class="starwrp">
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                </div>
                <p>The Website valley specializing in both 2D & 3D animation including production of explainer videos, product demos, mobile app demos, corporate animated videos as well as character design. We work for both Fortune 500 companies and emerging new brands. Some of our clients include: Miami Air International, CanTrack Global, Universal ID and Photobox Group.</p>
              </div>
              <div class="icli">
                <div class="round">
                  <h5>KC</h5>
                </div>
                <div class="clname">
                  <h6>Kevin Cooper</h6>
                  <p>Managing Director</p>
                </div>
              </div>
            </div>
            
            
            <div class="col-md-4">
              <div class="mainwrp">
                <div class="starwrp">
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                  <i class="icon-star"></i>
                </div>
                <p>websitevalley takes a modern approach to event software, thinking outside the box. Its everything you need with one platform, including marketing tools.</p>
              </div>
              <div class="icli">
                <div class="round">
                  <h5>AA</h5>
                </div>
                <div class="clname">
                  <h6>Amanda Allen</h6>
                  <p>Regional Manager Operations</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  <section class="queryform innerfrom">
    <div class="container-custom">
    <div class="row">
      <div class="col-md-12">
        
        <div class="textwrap">
          <h4 class="subheading">PERSONAL</h4>
          <h2>Know Us Better</h2>
          <p>Feel free to contact us regarding any queries or questions that you may have.</p>
        </div>
      </div>
      <div class="col-lg-12" >
        <div class="bot-form">
          <form class="cmxform" id="contactForm"  method="POST" action="/leads/">
          <input type="text" name="name" class="jun name" value="">   
              <input type="text" name="firstname" class="jun firstname" value="legit">  
              <input name="email" type="email" class="form-control txt-sub text-left emailBootom jun email" placeholder="your email address">
              <input type="hidden" name="token" value="<?= $token;?>">
            <input type="hidden" name="route" value="<?= $_SERVER['REQUEST_URI'] ?>">   
            <input type="hidden" name="brand" value="websitevalley">   
            <input type="hidden" name="tag" value="footer form">
            <input type="hidden" name="price" value="null">
            <input type="hidden" name="news" value="1">
            <div class="row">
              <div class="col-lg-6">
                <div class="fldset">
                  <input id="username" name="name" minlength="2" type="text" placeholder="Enter your name" required />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="fldset">
                  <input id="cemail" type="email" name="email" placeholder="Enter email here" required>
                </div>
              </div>
              <div class="col-lg-6 ">
                <div class="fldset">
                  <input id="phone-coun" name="phone" type="number" placeholder="Phone Number" required />
                </div>
              </div>
              <div class="col-lg-6">
                <div class="fldset">
                  <textarea name="brief" placeholder="Enter message here"></textarea>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="fldset">
                <div class="gle-cpcha"><div id="google_recaptcha"></div></div>
                  <input class="btn-secondary btn-default" type="submit" value="Submit" />
                  <script type="text/javascript">
                  document.getElementById('location').value = window.location.href;
                  </script>
                  
                </div>
              </div>
            </div>
          </form>
        </div> 
      </div>
    </div>
    </div>
</section>  <footer class="footer-main">
  <div class="footer-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-12">
          <h3>Services</h3>
          <ul class="linkinglist">
            <li><a href="/logo-services/">Logo Design</a></li>
            <li><a href="/wordpress-website/">Wordpress Development</a></li>
            <li><a href="/ecommerce-website/">Ecommerce Solutions</a></li>
            <li><a href="/web-app-development/">Web Application Development</a></li>
            

            
          </ul>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12">
          <h3 class="xsmtpx-30">&nbsp;</h3>
          <ul class="linkinglist">
            
            <li><a href="/mobile-app-development/">Mobile App Development</a></li>
            <li><a href="/branding/">Branding</a></li>
            <li><a href="/video-animation/">Video Animation</a></li>
            <li><a href="/seo-services/">Search Engine Optimization</a></li>
            
            
          </ul>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12">
          <h3 class="xshide">Company</h3>
          <ul class="linkinglist">
           <li><a href="/portfolio/">Portfolio</a></li>
      <li><a href="/packages/">Packages</a></li>
      <li><a href="/about-us/">About</a></li>
      <li><a href="/contact-us/">Contact</a></li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12">
          <h3 class="xsmtpx-30">About</h3>
          <ul class="linkinglist">
            <li><a href="mailto:query@websitevalley.co.uk">query@websitevalley.co.uk</a></li>
            <li><a href="tel:+14423191348">+44 2038 087061</a></li>
            <li><a class="address">Address: 54 park avenue barking, Essex, IG11 8QU, UK</a></li>
            
            <div class="dmca">
            <a href="//www.dmca.com/Protection/Status.aspx?ID=e8023e7e-ce1b-46c1-bf63-1c0fcb4ff438" title="DMCA.com Protection Status" class="dmca-badge"> <img src ="https://images.dmca.com/Badges/_dmca_premi_badge_4.png?ID=e8023e7e-ce1b-46c1-bf63-1c0fcb4ff438"  alt="DMCA.com Protection Status" /></a> 
            </div>
          </ul>
        </div>  
      </div>
      <div class="row">
        <div class="socialmid">
          <div class="left">
            <ul class="ftr-social">
              <li><a target="_blank" href=""><span class="fa fa-facebook"></span></a></li>
              <li><a target="_blank" href=""><span class="fa fa-twitter"></span></a></li>
              <li><a target="_blank" href=""><span class="fa fa-linkedin"></span></a></li>
              <li><a target="_blank" href=""><span class="fa fa-instagram"></span></a></li>
              <li><a target="_blank" href=""><span class="fa fa-medium"></span></a></li>
            </ul>
          </div>
           <div class="right">
            <img src="images/images-card-brands.svg">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="fologo">
            <img src="assets/images/logo.png">
          </div>
          <p class="copyright">&copy;  websitevalley <span id="year"></span>. All rights reserved.</p>
        </div>
        
        <div class="col-sm-6">
          <ul class="footer-nav2">
            <li><a href="/terms-conditions/" > Terms of Services</a></li>
            <li><a href="/privacy-policy/" >Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <a href="https://api.whatsapp.com/send?phone=14423191348&text=" class="float" target="_blank">
    <i class="fa fa-whatsapp my-float"></i>
  </a>
</footer>




<div class="floatbutton">
  <div class="btns_wrap">
    <a href="javascript:;" class="chat_wrap" onclick="setButtonURL();">
      <span class="icoo"><i class="fa fa-comment"></i></span>
      <span>Chat With Us</span>
    </a>
    <a href="tel:+14423191348" class="call_wrap">
      <span class="icoo"><i class="fa fa-phone"></i></span>
      <span> +14423191348 </span>
    </a>
  </div>
  <div class="clickbutton"><div class="crossplus"> LET’S GET STARTED</div></div>
  <div class="banner-form">
    <h3>Sign Up Now &  <br><Strong>Let’s Get Started</Strong></h3>
    <div class="banform">
      <div class="container">
        <div class="row">
          <div class="ban-form">
            <form class="cmxform" id="bannerform"  method="POST" action="/leads/">
            <input type="text" name="name" class="jun name" value="">   
              <input type="text" name="firstname" class="jun firstname" value="legit">  
              <input name="email" type="email" class="form-control txt-sub text-left emailBootom jun email" placeholder="your email address">
              <input type="hidden" name="token" value="<?= $token;?>">
                  <input type="hidden" name="route" value="<?= $_SERVER['REQUEST_URI'] ?>">   
                  <input type="hidden" name="brand" value="websitevalley">   
                  <input type="hidden" name="tag" value="sidepanel form in landing-page">
                  <input type="hidden" name="price" value="null">
                  <input type="hidden" name="news" value="1">
              <div class="row">
                <div class="col-lg-12">
                  <div class="fldset">
                    <input id="username" name="name" minlength="2" type="text" placeholder="Enter your name *" required />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="fldset">
                    <input id="cemail" type="email" name="email" placeholder="Enter email here *" required>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="fldset">
                    <input id="phone-coun" name="phone" type="number" placeholder="Phone Number *" maxlength="10" onkeypress="return isNumberKey(event);" required />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="fldset">
                    <textarea name="brief" id="" rows="7" placeholder="Talk About Your Project"></textarea>
                  </div>
                </div>
                
                <div class="col-lg-12">
                  <div class="fldset">
                    <input name="submit" type="submit" placeholder="Connect With Us" required />
                     <script type="text/javascript">
                  document.getElementById('location').value = window.location.href;
                  </script>
                  <input type="hidden" name="hiddencapcha" value="">
                  <input type="hidden" name="ctry" value="">
                  <input type="hidden" name="pc" value="">
                  <input type="hidden" name="cip" >
                  <input type="hidden" id="location" name="locationURL" value="http://websitevalley.co.uk/website-design-development" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</main>



<script src="landing-assets/js/js-mlib.js"></script> 
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
<script src="landing-assets/js/js-functions.js"></script> 

<script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>




<script>

setTimeout(function(){  
    // $("#modalForDiscount").modal("show");
    $('head').append('<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=b24c63b6-64a3-4e62-b7ee-492f535de0cd"><\/script>');
    $(document).on('click','.liveChat',function(){
        $zopim.livechat.window.show();

    });

    $(document).on('click','.formBtn',function(){
      if(window.innerWidth > 600){
        $('.ys-container').show();
      }else{
        window.open('tel:+14423191348','_self');
      }
   

});
$('.closePopup').click(function(){
   $('.ys-container').hide();

})

    
    $zopim(function() {
       $zopim.livechat.hideAll();
    });
}, 3000);

</script>

<!-- Start of Zendesk Widget script -->
<!-- <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=b24c63b6-64a3-4e62-b7ee-492f535de0cd"></script> -->
<!-- End of Zendesk Widget script -->

 <script type="text/javascript">
  function setButtonURL(){
    //CUGICHelper.bubbleChat.toggle();
    $zopim.livechat.window.toggle();
    //LC_API.open_chat_window();
    //Tawk_API.toggle();
    //tidioChatApi.open();
    }
  </script>
  <script>
    $(document).ready(function(){
    
$('html').hover(function() {
    $('button[type="submit"]').css('display', 'block');
    $('input[type="submit"]').css('display', 'block');
  });

$('body').hover(function() {
    $('button[type="submit"]').css('display', 'block');
    $('input[type="submit"]').css('display', 'block');
  });

  $('*').hover(function() {
    $('button[type="submit"]').css('display', 'block');
    $('input[type="submit"]').css('display', 'block');
  });
    
$("form").submit(function(e) {
        if(jQuery(this).children("input.name")[0].value != "" || jQuery(this).children("input.email")[0].value != "" || jQuery(this).children("input.firstname")[0].value != "legit") {

        e.preventDefault();
        console.log('form stoped');
        }
        });

});
  </script>
  
<!-- Clickcease.com tracking-->
<script type='text/javascript'>var script = document.createElement('script');
script.async = true; script.type = 'text/javascript';
var target = 'https://www.clickcease.com/monitor/stat.js';
script.src = target;var elem = document.head;elem.appendChild(script);
</script>
<noscript>
<a href='https://www.clickcease.com' rel='nofollow'><img src='https://monitor.clickcease.com/stats/stats.aspx' alt='ClickCease'/></a>
</noscript>
<!-- Clickcease.com tracking-->

<!-- steper form -->
<div class="modal moda-fade  mx-auto" tabindex="-1" role="dialog" id="modalSteper" style="padding:0 !important;margin-top: 100px !important;">
    <div class="modal-dialog mySteeperModal" role="document">
      <div class="modal-content">
        <div class="modal-header" style="border:none;">
          <!-- <h5 class="modal-title">Modal title</h5> -->
          <button type="button" class="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <img class="logoweb" src="img/logo.png" alt="logo" style="    margin-bottom: 22px;margin-top: -71px;width: 44% !important;">
          <div id="stepwizard">
            <ul class="nav">
              <li class="nav-item"><a href="#step1" class="nav-link"></a></li>
              <li class="nav-item"><a href="#step2" class="nav-link"></a></li>
              <li class="nav-item"><a href="#step3" class="nav-link"></a></li>
              <li class="nav-item"><a href="#step4" class="nav-link"></a></li>
              <li class="nav-item"><a href="#step5" class="nav-link"></a></li>
              <li class="nav-item"><a href="#step6" class="nav-link"></a></li>
            </ul>
            <form name="sterperform" action="/leads/" class="form-steper" id="sterperform" method="POST">
              <div class="tab-content text-black">
                <div id="step1" class="tab-pane" role="tabpanel" aria-labelledby="step-1">

                  <input type="hidden" name="token" value="<?= $token;?>">
                  <input type="hidden" name="route" value="home button">
                  <input type="hidden" name="brand" value="thewebsitevalley">
                  <input type="hidden" name="tag" value="modal-auto">
                  <input type="hidden" name="steperForm" value="true">
                  <input type="hidden" name="price" value="null">
                  <input type="hidden" name="news" value="1">
<input type="text" class="jun"  name="gender">
                  <h3 style ="margin-top: 29px;margin-bottom: 10px;">What is your web design requirement?</h3>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step1" id="create-website" value="Create a new website">
                      <label class="labels" for="create-website">Create a new website</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step1" id="major-changes" value="Major changes to my website">
                      <label class="labels" for="major-changes">Major changes to my website</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step1" id="minor-changes-website" value="Minor changes to my website">
                      <label class="labels" for="minor-changes-website">Minor changes to my website</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 " >
                      <input type="radio" name="step1" id="others-req" style="margin-left: 1px;">
                      <label class="labels" for="others-req">
                        <input class="other" type="text" id="otherSelectionBox" id="" placeholder="Other" style="
    margin-left: 3px;">
                      </label>
                    </div>
                  </div>

                </div>
                <div id="step2" class="tab-pane" role="tabpanel" aria-labelledby="step-2">
                  <h3 style ="margin-top: 29px;margin-bottom: 10px;">What are your website needs?</h3>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step2" id="to-advertise" value="To advertise my business/services">
                      <label class="labels" for="to-advertise">To advertise my business/services</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step2" id="to-sell-products"
                        value="To sell products/services e.g. e-commerce">
                      <label class="labels" for="to-sell-products">To sell products/services e.g. e-commerce</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step2" id="to-offer-bespoke"
                        value="To offer bespoke functionality e.g. logins, forums, CRM">
                      <label class="labels" for="to-offer-bespoke">To offer bespoke functionality e.g. logins, forums,
                        CRM</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 " >
                      <input type="radio" name="step2" id="other-step2" style="margin-left: 1px;">
                      <label class="labels" for="other-step2">
                        <input class="other" type="text" id="other-step2-input" placeholder="Other" style="
    margin-left: 3px;">
                      </label>
                    </div>
                  </div>
                </div>
                <div id="step3" class="tab-pane" role="tabpanel" aria-labelledby="step-3">
                  <h3 style ="margin-top: 29px;margin-bottom: 10px;">What type of business is this for?</h3>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step3" id="personal-project" value="Personal project">
                      <label class="labels" for="personal-project">Personal project</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step3" id="sole-trader-self-emp" value="Sole trader/self-employed">
                      <label class="labels" for="sole-trader-self-emp">Sole trader/self-employed</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step3" id="small-business" value="Small business (1 - 9 employees)">
                      <label class="labels" for="small-business">Small business (1 - 9 employees)</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step3" id="medium-business" value="Medium business (10 - 29 employees)">
                      <label class="labels" for="medium-business">Medium business (10 - 29 employees)</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step3" id="large-business" value="Large business (30 - 99 employees)">
                      <label class="labels" for="large-business">Large business (30 - 99 employees)</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step3" id="extra-larage-business"
                        value="Extra large business (100 or more employees)">
                      <label class="labels" for="extra-larage-business">Extra large business (100 or more
                        employees)</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step3" id="charity-non-profit" value="Charity/non-profit">
                      <label class="labels" for="charity-non-profit">Charity/non-profit</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 " >
                      <input type="radio" name="step3" id="step3-radio" style="margin-left: 1px;">
                      <label class="labels" for="step3-radio">
                        <input class="other" type="text" id="step3-input" placeholder="Other" style="
    margin-left: 3px;">
                      </label>
                    </div>
                  </div>
                </div>
                <div id="step4" class="tab-pane" role="tabpanel" aria-labelledby="step-4">
                  <h3 style ="margin-top: 29px;margin-bottom: 10px;">What industry do you operate in?</h3>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step4" id="business-services" value="Business services">
                      <label class="labels" for="business-services">Business services</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step4" id="create-industries" value="Creative industries">
                      <label class="labels" for="create-industries">Creative industries</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step4" id="entertainment-and-events" value="Entertainment & events">
                      <label class="labels" for="entertainment-and-events">Entertainment & events</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step4" id="financial-services" value="Financial services">
                      <label class="labels" for="financial-services">Financial services</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step4" id="health-and-fitness" value="Health & fitness">
                      <label class="labels" for="health-and-fitness">Health & fitness</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step4" id="home-services" value="Home services">
                      <label class="labels" for="home-services">Home services</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step4" id="resturant-food" value="Restaurant/food">
                      <label class="labels" for="resturant-food">Restaurant/food</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step4" id="retail-consumer-good" value="Retail/consumer goods">
                      <label class="labels" for="retail-consumer-good">Retail/consumer goods</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step4" id="technology-software" value="Technology/software">
                      <label class="labels" for="technology-software">Technology/software</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 " >
                      <input type="radio" name="step4" id="step4-radio" style="margin-left: 1px;">
                      <label class="labels" for="step4-radio">
                        <input class="other" type="text" id="step4-input" placeholder="Other" style="
    margin-left: 3px;">
                      </label>
                    </div>
                  </div>
                </div>
                <div id="step5" class="tab-pane" role="tabpanel" aria-labelledby="step-5">
                  <h3 style ="margin-top: 29px;margin-bottom: 10px;">What is your estimated budget for this project?</h3>
                  
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step5" id="500_999" value="$500 - $999">
                      <label class="labels" for="500_999">$500 - $999</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step5" id="1000_1999" value="$1,000 - $1,999">
                      <label class="labels" for="1000_1999">$1,000 - $1,999</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step5" id="2000_2999" value="$2,000 - $2,999">
                      <label class="labels" for="2000_2999">$2,000 - $2,999</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step5" id="3000_4999" value="$3,000 - $4,999">
                      <label class="labels" for="3000_4999">$3,000 - $4,999</label>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 d-flex radioText">
                      <input type="radio" name="step5" id="5000_more" value="$5,000 or more">
                      <label class="labels" for="5000_more">$5,000 or more</label>
                    </div>
                  </div>
                </div>
                <div id="step6" class="tab-pane" role="tabpanel" aria-labelledby="step-6">
                  <h3 style ="margin-top: 29px;margin-bottom: 10px;">Get a free quote now</h3>
                  <div class="row">
                    <div class="col-md-12">
                      <label for="enter_name">Name</label>
                      <input type="text" required name="name" id="enter_name" class="form-control"
                        placeholder="Enter Your Name Here">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <label for="enter_email">Email</label>
                      <input type="text" required name="email" id="enter_email" class="form-control"
                        placeholder="Enter Your Email Here">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <label for="enter_phone">Phone</label>
                      <input type="number" required name="phone" id="enter_phone" class="form-control"
                        placeholder="Enter Your Phone">
                    </div>
                  </div>
                  <input type="hidden" name="brief" value="hidden">
                  <!-- <div class="row">
                      <div class="col-md-12">
                      <label for="">Phone</label>
                        <textarea name="brief" id="" class="form-control" cols="10" rows="2" placeholder="Brief Message"></textarea>
                      </div>
                    </div> -->
                  <div class="row">
                    <div class="col-md-12 mt-3">
                      <button class="btn-red1  header-button text-white btn-block p-2"
                        style="font-weight:bold;width:100%; background:#263055">Submit Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>


      </div>
    </div>
  </div>




<!-- steper form -->
<!-- <script src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script> -->

  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
  </script>
  <script type="text/javascript" src="https://unpkg.com/default-passive-events"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
    integrity=" sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous">
  </script>
  <!-- <script src="js/main.js"></script> -->
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.13.0/dist/sweetalert2.all.min.js"></script>

  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"> -->
  <link href="https://cdn.jsdelivr.net/npm/smartwizard@5/dist/css/smart_wizard_all.min.css" rel="stylesheet"
    type="text/css" />
  <script src="https://cdn.jsdelivr.net/npm/smartwizard@5/dist/js/jquery.smartWizard.min.js" type="text/javascript">
  </script>
  <script src="https://cdn.jsdelivr.net/npm/smartwizard@5/dist/js/jquery.smartWizard.min.js" type="text/javascript"></script>

  <style>
    @media screen and (max-width: 640px){
.sw>.nav {
    flex-direction: initial!important;
    
}
.form-box-main form input[type=checkbox]:not(old)+label, input[type=radio]:not(old)+label {
  font-size: 12px !important;
}
}
  </style>
  <script>

    $(".btn-theme-outline").click(function(){
      $("#modalSteper").modal("show")
      $('#stepwizard').smartWizard({
        hiddenSteps: []
      });
    })
    $(document).ready(function () {
      $("#otherSelectionBox").on('click', function () {
        $("#others-req").prop('checked', true);
      })
      $("#otherSelectionBox").on('keyup', function () {
        let value = $(this).val();
        $("#others-req").val(value);
      })

      $("#other-step2-input").on('click', function () {
        $("#other-step2").prop('checked', true);
      })
      $("#other-step2-input").on('keyup', function () {
        let value = $(this).val();
        $("#other-step2").val(value);
      })

      $("#step3-input").on('click', function () {
        $("#step3-radio").prop('checked', true);
      })
      $("#step3-input").on('keyup', function () {
        let value = $(this).val();
        $("#step3-radio").val(value);
      })

      $("#step4-input").on('click', function () {
        $("#step4-radio").prop('checked', true);
      })
      $("#step4-input").on('keyup', function () {
        let value = $(this).val();
        $("#step4-radio").val(value);
      })

      $("#step5-input").on('click', function () {
        $("#step5-radio").prop('checked', true);
      })
      $("#step5-input").on('keyup', function () {
        let value = $(this).val();
        $("#step5-radio").val(value);
      })
      $('#modalSteper .close').click(function(){
        window.history.pushState({}, "", "/");
        $('#modalSteper').modal('hide');
      })

      setTimeout(() => {
        $('#modalSteper').modal('show');
        $('#stepwizard').smartWizard({
          hiddenSteps: []
        });

      }, 15000);
      
      $("#stepwizard").on("stepContent", function (e, anchorObject, currentStepIndex, nextStepIndex,
      stepDirection) {
        window.history.pushState({}, "", "premium-website-design-developments/" + anchorObject.attr('href'));
        console.log('now step is ', anchorObject.attr('href'));
        // if(anchorObject.prevObject.length - 1 == nextStepIndex){
        //     // e.preventDefault();
        //     console.log('anchor obj',anchorObject);
        //     console.log('current step',currentStepIndex);
        //     console.log('next stp',nextStepIndex);
        //     console.log('step dir',stepDirection);
        //     let finalButton= $(" .sw-btn-next",e.target);
        //     finalButton.text('submit form');
        //     finalButton.addClass('myClassR');
        //     finalButton.attr('type','submit');
        //     finalButton.click(function(e){
        //       $(this).removeClass("disabled");
        //       console.log('heelo',$(".form-steper"));
        //       console.log('e',e.target);
        //       $("#sterperform").submit();

        //     });
        //     // $(".sw-btn-next.myClassR").click(function(e){
        //     //   e.preventDefault();
        //     //   console.log('e',e);
        //     //   alert('hello')
        //     // })
        // }else{
        //     // alert('this is not the last step');                
        // }
      });




    });



    $(function () {
      $("input[name='other1']").click(function () {
        $('.other1').removeAttr("disabled");
      });
    });

    $('form').submit(function () {
      $(this).find('button').attr("disabled", true);
      $(this).find('input[type="submit"]').attr("disabled", true);
      $(this).find('button[type="submit"]').attr("disabled", true);
      $(this).submit();
    });
  </script>

  
 </body>
</html>