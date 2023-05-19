<!doctype html>
<html lang="en-GB">

<!-- Mirrored from websitevalley.co.uk/packages by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 21 Jan 2021 17:41:06 GMT -->
<!-- Added by HTTrack -->

<head>

    <title>Complete Business Start Up Packages | Get 50% OFF</title>

    <meta name="description"
        content="Looking to start a business online? check out our complete business start up packages to help your business establish a strong online presence.">


    <?php include_once($_SERVER['DOCUMENT_ROOT'].'/includes/head.php');?>
    <!-- seo  -->
    <meta property="og:locale" content="en_GB" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Designing, Developing, Marketing, and Branding Packages" />
    <meta property="og:description"
        content="We have a professional in-house team who is ready to work on your project at any time. Our Packages are designed to fulfill your budget needs with ease." />
    <meta property="og:url" content="<?= $requesMet.'://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'] ?>" />
    <meta property="og:site_name" content="websitevalley" />
    <meta property="article:publisher" content="https://www.facebook.com/websitevalley" />
    <meta property="og:image" content="<?= $requesMet.'://'.$_SERVER['HTTP_HOST']; ?>/assets/images/logo.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@websitevalleyuk" />
    <meta name="twitter:site" content="@websitevalleyuk" />
    <meta name="twitter:image:src" content="<?= $requesMet.'://'.$_SERVER['HTTP_HOST']; ?>/assets/images/logo.png">






</head>

<body class="inner-pages cltestpg pckgepge hdar-clr">


    <!-- Mobile Navigation Button End-->

    <?php include_once($_SERVER['DOCUMENT_ROOT'].'/includes/header.php');?>
    <?php include_once($_SERVER['DOCUMENT_ROOT'].'/includes/api.class.php');?>

    <?php 
$api = new Api;
// $data = $api->hit('GET','http://127.0.0.1:8000/api/packages/websitevalley.co.uk');

// var_dump($pacakges->package_categories);die;
?>




    <section class="sec-padding pricing-sec packages-sec-before mt-5"
        style="background: linear-gradient(to top, #daeef4 0%,rgba(255,255,255,0) 20%);">
        <div class="container my-5">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <h1 class="text-center" style="font-size: 30px; font-weight:600;color: #000;">Business Start Up Packages</h1>
                    <h1 style="font-size: 15px;line-height: 1.4;text-align: center;margin-top: 15px;margin-bottom: 22px;">Our business startup packages are a comprehensive solution for entrepreneurs looking to launch a successful website. We offer a range of essential tools such as business planning, legal compliance, branding, web design and development services to get your business up and running. We provide an all-in-one solution to save time and money. Whether you're a new entrepreneur or an experienced business owner, start up business packages can give you the support and resources you need to succeed.</h1>
                </div>
                <div class="col-lg-12">
                    <ul class="nav nav-pills">
                        <?php 
                        $pacakges = $pacakges;
              $categoryCounter = 0;
              foreach($pacakges as $category):?>
                        <li><a data-toggle="pill" href="#pills-web-<?=$category->id?>"
                                class="<?= ($categoryCounter==0?'active show':'')?>"><?=$category->name?></a></li>
                        <?php
              $categoryCounter++;
              endforeach;?>

                    </ul>
                    <div class="tab-content pricingboxes">
                        <?php 
            // var_dump($pacakges);die;
            $pacakgesCounter=0;
            foreach($pacakges as $category):?>
                        <div class="tab-pane <?= ($pacakgesCounter==0?'active':'')?>" id="pills-web-<?=$category->id?>"
                            role="tabpanel" aria-labelledby="pills-web-tab-<?=$category->id?>">
                            <div class="smallboxes packagesslider">

                                <?php foreach($category->packages as $package):?>
                                <!-- bst-selr    use this class to make it best seller -->
                                <div class="smallbox ">
                                    <div class="package_inner">
                                        <p class="h4 h4Heading"><?=$package->heading;?></p>
                                        <p class="h2 h2Heading"><span
                                                class="currency_symbol">£</span><?=$package->amount?>
                                            <span><s>£<?=$package->amount*2?></s></span> </p>

                                        <ul class="ticklist2 list-scroll">
                                            <?php foreach($package->details as $detail):?>
                                            <li><?=$detail->detail?></li>
                                            <?php endforeach;?>
                                        </ul>
                                        <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush
                                            Delivery</p>
                                        <div class="actions">
                                            <div class="row">
                                                <div class="col-md-6 col-xs-6">
                                                    <div class="act-box1">
                                                        <a class="spek-us" tabindex="0" href="tel:+442038856237">
                                                            <span><small>Speak with us</small>+442038856237</span>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="col-md-6 col-xs-6">
                                                    <div class="act-box2">
                                                        <a class="wnt-disx" tabindex="0" href="javascript:;"
                                                            onclick="setButtonURL();" target="_self">
                                                            <span><small>Want to discuss?</small> Live Chat Now</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="price-btnwrap">
                                        <a href="/package/<?= $category->slug.'/'.$package->slug?>">View Details</a>
                                        <div class="row">

                                            <div class="col-md-12">
                                                <a href="javascript:void(0)"data-toggle="modal" data-target="#modalForDiscount"
                                                    class="btn-packages btn-packages2 btn-theme-outline"
                                                    tabindex="0">Order Now </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <?php endforeach;?>

                            </div>
                        </div>

                        <?php
            $pacakgesCounter++;
            endforeach;?>






                    </div>
                </div>
            </div>
        </div>
    </section>





    <section class="dptestimonials testiem">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Our business is built from satisfied clients</h2>

                    <ul class="testwrap testslider">
                        <li>
                            <div class="testbox">
                                <div class="user">
                                    <p class="h3">OG</p>
                                </div>
                                <div class="usertest">
                                    <h4>Extremely Satisfied with the services!</h4>
                                    <p>Received my project on time and provided me proper assistance along the way.
                                        Loved working with them!</p>
                                    <h6>— Sarah Ramirez, Brand Owner</h6>
                                    <div class="ratings">
                                        <span class="icon-star"></span>
                                        <span class="icon-star"></span>
                                        <span class="icon-star"></span>
                                        <span class="icon-star"></span>
                                        <span class="icon-star-half-empty"></span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="testbox">
                                <div class="user">
                                    <p class="h3">JV</p>
                                </div>
                                <div class="usertest">
                                    <h4>Websitevalley Rocked!!</h4>
                                    <p>I am extremely happy with websitevalley. They solved a huge source of frustration
                                        and do a much better job than website designers that charge thousands of
                                        dollars. Please, please you owe it to your business and company to use these
                                        guys.</p>
                                    <h6>— Mike Miller, Project Owner</h6>
                                    <div class="ratings">
                                        <span class="icon-star"></span>
                                        <span class="icon-star"></span>
                                        <span class="icon-star"></span>
                                        <span class="icon-star"></span>
                                        <span class="icon-star"></span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="testbox">
                                <div class="user">
                                    <p class="h3">TR</p>
                                </div>
                                <div class="usertest">
                                    <h4>Big Shout-out to the websitevalley Team!!</h4>
                                    <p>Wow! They turned my dream into reality and bring it to live. from Logo creation,
                                        Web development they have been Rocking it all through. They have the talented
                                        team you can trust.</p>
                                    <h6>— Bhooshan Ramchurn, SteamWipe</h6>
                                    <div class="ratings">
                                        <span class="icon-star"></span>
                                        <span class="icon-star"></span>
                                        <span class="icon-star"></span>
                                        <span class="icon-star"></span>
                                        <span class="icon-star"></span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="testbox">
                                <div class="user">
                                    <h3>KA</h3>
                                </div>
                                <div class="usertest">
                                    <h4>We Couldn't Ask for a Better Job!!</h4>
                                    <p>I want to thank websitevalley team for doing such a great job on our Website, it
                                        was easy and phenominal. Thankyou very much and looking forward to doing
                                        business with websitevalley in the future. </p>
                                    <h6>— Michael Vanzille, Achievers Day School</h6>
                                    <div class="ratings">
                                        <span class="icon-star"></span>
                                        <span class="icon-star"></span>
                                        <span class="icon-star"></span>
                                        <span class="icon-star"></span>
                                        <span class="icon-star-half-empty"></span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="testbox">
                                <div class="user">
                                    <h3>AM</h3>
                                </div>
                                <div class="usertest">
                                    <h4>Brilliant Responsive Work</h4>
                                    <p>We talk regarding web design services for our website and how it was affecting
                                        our rankings. The team provided us responsive web design services and SEO
                                        consultation too!</p>
                                    <h6>Antionio Moreno, Business Owner</h6>
                                    <div class="ratings">
                                        <span class="icon-star"></span>
                                        <span class="icon-star"></span>
                                        <span class="icon-star"></span>
                                        <span class="icon-star"></span>
                                        <span class="icon-star"></span>
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div class="testbox">
                                <div class="user">
                                    <h3>CR</h3>
                                </div>
                                <div class="usertest">
                                    <h4>Excellent Web Consultation For My Website</h4>
                                    <p>I was a bit confused when I got to LDH, and the excellent team helped us along
                                        the way! We’re more than happy working with them.</p>
                                    <h6>Erika Blackwell, Business Owner</h6>
                                    <div class="ratings">
                                        <span class="icon-star"></span>
                                        <span class="icon-star"></span>
                                        <span class="icon-star"></span>
                                        <span class="icon-star"></span>
                                        <span class="icon-star-half-empty"></span>
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>



                    <p class="h2 text-center">Our Clients</p>
                    <ul class="mycli mslider">
                        <li class="first"><img src="assets/images/spo1.jpg" alt="imgae" width="40" height="40"></li>
                        <li><img src="assets/images/spo2.png" alt="imgae" width="223" height="40"></li>
                        <li><img src="assets/images/spo3.jpg" alt="imgae" width="173" height="40"></li>
                        <li><img src="assets/images/spo4.png" alt="imgae" width="181" height="40"></li>
                        <li><img src="assets/images/spo5.jpg" alt="imgae" width="317" height="40"></li>
                        <li><img src="assets/images/spo6.png" alt="imgae" width="146" height="40"></li>
                        <li><img src="assets/images/spo7.jpg" alt="imgae" width="87" height="40"></li>
                        <li><img src="assets/images/spo8.jpg" alt="imgae" width="175" height="40"></li>
                        <li><img src="assets/images/spo9.png" alt="imgae" width="286" height="40"></li>
                        <li><img src="assets/images/spo10.jpg" alt="imgae" width="269" height="40"></li>
                        <li><img src="assets/images/spo11.jpg" alt="imgae" width="133" height="40"></li>
                        <li><img src="assets/images/spo12.jpg" alt="imgae" width="127" height="40"></li>
                        <li><img src="assets/images/spo13.jpg" alt="imgae" width="80" height="40"></li>
                        <li><img src="assets/images/spo14.jpg" alt="imgae" width="122" height="40"></li>
                        <li class="last"><img src="assets/images/spo15.jpg" alt="imgae" width="156" height="40"></li>
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
                                <p>Heads up! We require that you sign up for Website Valleyservices and packages. We
                                    make all your dreams come true in a successful project.</p>
                                <?php include_once($_SERVER['DOCUMENT_ROOT'].'/includes/form.php');?>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




    <?php include_once($_SERVER['DOCUMENT_ROOT'].'/includes/footer.php');?>
    <?php include_once($_SERVER['DOCUMENT_ROOT'].'/includes/scripts.php');?>


</body>

<!-- Mirrored from websitevalley.co.uk/packages by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 21 Jan 2021 17:41:06 GMT -->

</html>