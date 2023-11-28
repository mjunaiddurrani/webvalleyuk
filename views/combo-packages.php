<!doctype html>
<html lang="en-GB">

<!-- Mirrored from websitevalley.co.uk/combo-packages by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 21 Jan 2021 17:41:04 GMT -->
<!-- Added by HTTrack -->

<head>

    <title>Combo Packages for Development and Branding Services </title>

    <meta name="description"
        content="Avail affordable packages to achieve your business goals at a competitive market price! Website Valley offers combo packages for every type of business.">


    <?php include_once('includes/head.php');?>
    <!-- seo  -->
    <meta property="og:locale" content="en_GB" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Combo Packages for Development and Branding Services" />
    <meta property="og:description"
        content="Avail affordable packages to achieve your business goals at a competitive market price! Website Valley offers combo packages for every type of business." />
    <meta property="og:url" content="<?= $requesMet.'://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'] ?>" />
    <meta property="og:site_name" content="websitevalley" />
    <meta property="article:publisher" content="https://www.facebook.com/websitevalley" />
    <meta property="og:image" content="<?= $requesMet.'://'.$_SERVER['HTTP_HOST']; ?>/assets/images/logo.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:creator" content="@websitevalleyuk" />
    <meta name="twitter:site" content="@websitevalleyuk" />
    <meta name="twitter:image:src" content="<?= $requesMet.'://'.$_SERVER['HTTP_HOST']; ?>/assets/images/logo.png">






</head>

<body class="inner-pages cltestpg hdar-clr cmbo-pgess">


    <!-- Mobile Navigation Button End-->

    <?php include_once('includes/header.php');?>








    <section class="sec-padding pricing-sec mtpx-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                    <h1 class="h2">Our Combos</h1>
                    <p>Combo Packages allow you to pick and choose from a variety of options that suit your
                        requirements.</p>
                </div>
                <div class="col-lg-12">
                    <div class="tab-content pricingboxes">




                        <div class="tab-pane active">
                            <div class="smallboxes packagesslider">
                                <?php 
                            $pacakgesOf = "combo-packages";
                            $pacakges = $pacakges->package_categories;
                          foreach($pacakges->$pacakgesOf->packages as $package):?>
                                <!-- bst-selr    use this class to make it best seller -->
                                <div class="smallbox ">
                                    <div class="package_inner">
                                        <p class="h4 h4Heading"><?=$package->heading;?></p>
                                        <p class="h2 h2Heading"><span
                                                class="currency_symbol">£</span><?=$package->amount?>
                                            <span><s>£<?=$package->amount*2?></s></span>
                                        </p>

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
                                        <a href="/package/<?= $pacakgesOf.'/'.$package->slug?>">View Details</a>
                                        <div class="row">

                                            <div class="col-md-12">
                                                <a href="javascript:void(0)" data-toggle="modal" data-target="#modalForDiscount"
                                                    class="btn-packages btn-packages2 btn-theme-outline"
                                                    tabindex="0">Order Now </a>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <?php endforeach;?>
                            </div>
                        </div>






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
                                    <h4>Web site valley Rocked!!</h4>
                                    <p>I am extremely happy with web Site Valley. They solved a huge source of frustration
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
                                    <h4>Big Shout-out to the web site valley Team!!</h4>
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
                                    <p>I want to thank web site valley team for doing such a great job on our Website, it
                                        was easy and phenominal. Thankyou very much and looking forward to doing
                                        business with web site valley in the future. </p>
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



                    <p class="h2 text-center" style="margin-top:50px;">Our Clients</p>
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
                                <?php include_once('includes/form.php');?>
                            </div>




                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <?php include_once('includes/footer.php');?>

    <?php include_once('includes/scripts.php');?>
</body>

<!-- Mirrored from websitevalley.co.uk/combo-packages by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 21 Jan 2021 17:41:06 GMT -->

</html>