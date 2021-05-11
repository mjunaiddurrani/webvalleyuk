<!doctype html>
<html lang="en-GB">

<!-- Mirrored from websitevalley.co.uk/packages by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 21 Jan 2021 17:41:06 GMT -->
<!-- Added by HTTrack --><head>

<title>Designing, Developing, Marketing, and Branding Packages </title>

<meta name="description" content="We have a professional in-house team who is ready to work on your project at any time. Our Packages are designed to fulfill your budget needs with ease.">


<?php include_once($_SERVER['DOCUMENT_ROOT'].'/includes/head.php');?><!-- seo  -->
<meta property="og:locale" content="en_GB" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Website Valley's Portfolio is Built with Love" />
  <meta property="og:description" content="A portfolio is the heart of every company, so it is always built through dedication and handwork. See our portfolio to understand our unique capabilities." />
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
$websitePackages = $api->hit('GET',$_SESSION['dashboard'].'/api/packages/websitevalley.co.uk/website-design');


?>



<section class="sec-padding pricing-sec mtpx-100 portfolio-page">
  <div class="container">
    <div class="row">
      <div class="col-lg-10 offset-lg-1"> 
        <h1 class="pkgewrp h2">What Do Our Packages Look Like?</h1>
        <p>Our packages are designed to suit your budgets and requirements with ease.</p>
      </div>  
      <div class="col-lg-12"> 
          <ul class="nav nav-pills">
            <li><a data-toggle="pill" href="#webd" class="active show">Web Design</a></li>
            <li><a data-toggle="pill" href="#ecomm" class="">Ecommerce</a></li>
            <li><a data-toggle="pill" href="#portal" class="">Web Portal</a></li>
             <li><a data-toggle="pill" href="#brandd" class="">Branding</a></li>
            <li><a data-toggle="pill" href="#videod" class="">Video Animation</a></li>
            <li><a data-toggle="pill" href="#seo" class="">Seo</a></li>

          </ul>
        <div class="tab-content pricingboxes">
          
          


          <div id="webd" class="tab-pane active">
            
            <div class="smallboxes packagesslider">
<?php foreach($websitePackages as $key => $value):?>            
  <div class="smallbox">
  <div class="package_inner">
    <h4><?= $value['heading'];?></h4>
    <!-- <h4>Startup Website  <br> Package</h4> -->
    <h2><span class="currency_symbol"><?= $value['currency'];?></span><?= $value['price']-0.01;?> <span><s><?= $value['currency'];?><?= $value['cut_price']-0.01;?></s></span> </h2>
    <!-- <p>Suitable for potential super-startups and brand revamps for companies.</p> -->
    <!-- <div class="hrline"></div> -->
    
    <ul class="ticklist2 list-scroll">
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
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div></div>
    <div class="price-btnwrap">
      <a href="/packages/startup-website-package/">View Details</a> 
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>
  </div>
  <?php endforeach;?>
<?php die();?>

  <div class="smallbox bst-selr">
  <div class="package_inner">
    <h4>Professional Website  <br> Package</h4>
    <h2><span class="currency_symbol">£</span>399.99 <span><s>£819.99</s></span> </h2>
    <!-- <p>Suitable for potential super-startups and brand revamps for companies.</p> -->
    <!-- <div class="hrline"></div> -->
    
    <ul class="ticklist2 list-scroll">
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
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    
    
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
      <div class="price-btnwrap">
      <a href="/packages/professional-website-package/">View Details</a>
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>
  </div>

  <div class="smallbox">
  <div class="package_inner">
    <h4>Elite Website <br> Package</h4>
    <h2><span class="currency_symbol">£</span>699.99 <span><s> £1419.99</s></span> </h2>
    <!-- <p>Suitable for potential super-startups and brand revamps for companies.</p> -->
    <!-- <div class="hrline"></div> -->
    
    <ul class="ticklist2 list-scroll">
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
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    
    
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
      <div class="price-btnwrap">
      <a href="/packages/elite-website-package/">View Details</a>
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>
  </div>

  <div class="smallbox bst-selr">
  <div class="package_inner">
    <h4>E-Commerce Website  <br> Package</h4>
    <h2><span class="currency_symbol">£</span>999.99 <span><s>£2009.99</s></span> </h2>
    <!-- <p>Suitable for potential super-startups and brand revamps for companies.</p> -->
    <!-- <div class="hrline"></div> -->
    
    <ul class="ticklist2 list-scroll">
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
        <li>Sales & Inventory Management</li>
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
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="price-btnwrap">
      <a href="/packages/e-commerce-website-package/">View Details</a>
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>
  </div>

  <div class="smallbox">
  <div class="package_inner">
    <h4>Silver Website  <br> Package</h4>
    <h2><span class="currency_symbol">£</span>1599.99 <span><s> £3219.99</s></span> </h2>
    <!-- <p>Suitable for potential super-startups and brand revamps for companies.</p> -->
    <!-- <div class="hrline"></div> -->
    
    <ul class="ticklist2 list-scroll">
      <li>15 to 20 Pages Website</li>
        <li>Custom Made, Interactive, Dynamic & High End Design</li>
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
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="price-btnwrap">
      <a href="/packages/silver-website-package/">View Details</a>
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>
  </div>

  

  
  
</div>          </div>

          <div id="portal" class="tab-pane">
            
            <div class="smallboxes packagesslider">

  <div class="smallbox">
  <div class="package_inner">
    <h4>Business Website  <br> Package</h4>
    <h2><span class="currency_symbol">£</span>1999.00 <span><s>£3998.00</s></span> </h2>
    <!-- <p>Suitable for potential super-startups and brand revamps for companies.</p> -->
    <!-- <div class="hrline"></div> -->
    
    <ul class="ticklist2 list-scroll">
      <li class="heading">Website </li>
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
      <li>SEO Meta Tags</li>
      <li>Live Feeds of Social Networks integration (Optional)</li>
      <li>Mobile Responsive</li>
      <li>Free Google Friendly Sitemap</li>
      <li>Search Engine Submission</li>
      <li>Complete W3C Certified HTML</li>
      <li>Industry Specified Team of Expert Designers and Developers</li>
      <li>Complete Deployment</li>
      <li>Dedicated Accounts Manager</li>
      <li class="heading">Video </li>
      <li>15 Seconds 2D Explainer Video</li>
      <li>Voice - Over &amp; Sound Effects</li>
      <li>Professional Script Writing</li>
      <li>Storyboard</li>
      <li>100% Ownership Rights</li>
      <li>100% Satisfaction Guarantee</li>
      <li>100% Unique Design Guarantee</li>
      <li>100% Money Back Guarantee *</li>
    </ul>
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div></div>
    <div class="price-btnwrap">
      <a href="/packages/business-website-package/">View Details</a> 
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>
  </div>



  <div class="smallbox bst-selr">
  <div class="package_inner">
    <h4>Automated/Interactive <br>Conferencing Portal</h4>
    <h2><span class="currency_symbol">£</span>3999.00 <span><s>£7998.00</s></span> </h2>
    <!-- <p>Suitable for potential super-startups and brand revamps for companies.</p> -->
    <!-- <div class="hrline"></div> -->
    
    <ul class="ticklist2 list-scroll">
    <li class="heading">Website </li>
      <li>Unlimited Page Website</li>
      <li>Custom Content Management System (CMS)</li>
      <li>Unique Pages and UI Design</li>
      <li>Complete Custom Development</li>
      <li>Process Automation Tools</li>
      <li>Newsfeed Integration</li>
      <li>Social Media Plugins Integration</li>
      <li>Upto 40 Stock images</li>
      <li>10 Unique Banner Designs</li>
      <li>JQuery Slider</li>
      <li>Search Engine Submission</li>
      <li>Free Google Friendly Sitemap</li>
      <li>Custom Email Addresses</li>
      <li>Social Media Page Designs (Facebook, Twitter, Instagram)</li>
      <li>Complete W3C Certified HTML</li>
      <li>Complete Deployment</li>
      <li>100% Satisfaction Guarantee</li>
      <li>100% Unique Design Guarantee</li>
      <li>Money Back Guarantee</li>
      <li><strong>Key features</strong></li>
      <li>Automated Course Creation</li>
      <li>Video Conferencing</li>
      <li>Skills/Certification Tracking</li>
      <li>Mobile Learning</li>
      <li>Asynchronous Learning</li>
      <li>CRM Features</li>
      <li>Gamification</li>
      <li>Social Learning/Message Boards</li>
      <li>Motivational Triggers</li>
      <li>Forums And Webinars</li>
      <li>E-commerce And Subscriptions</li>
      <li>Online Course Booking</li>
      <li>Excellent Reporting</li>
      <li>Invoicing Integration</li>
      <li>Financial Integrations</li>
      <li>Student Information management</li>
      <li>Automated communications</li>
      <li>Learning Management System</li>
      <li>Quick And Easy Course Scheduling</li>
      <li>Reporting And Data Analysis</li>
      <li>Assessment Management &amp; Live Feedback</li>
      <li>Gradebooks</li>
      <li>Quick User Integration</li>
      <li>Easy Payment Methods</li>
      <li>Online Communities &amp; Social Engagement</li>
      <li>Curation of Resources And Adding Own Resources</li>
    </ul>
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    
    
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
      <div class="price-btnwrap">
      <a href="/packages/automated-Interactive-conferencing-portal/">View Details</a>
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>
  </div>

  <div class="smallbox">
  <div class="package_inner">
    <h4>Automated/Interactive <br> E-Commerce Website</h4>
    <h2><span class="currency_symbol">£</span>4999.00 <span><s> £9998.00</s></span> </h2>
    <!-- <p>Suitable for potential super-startups and brand revamps for companies.</p> -->
    <!-- <div class="hrline"></div> -->
    
    <ul class="ticklist2 list-scroll">
        <li class="heading">Website </li>
        <li>Unlimited Page Website</li>
        <li>Custom Content Management System (CMS)</li>
        <li>Unique Pages and UI Design</li>
        <li>Complete Custom Development</li>
        <li>Process Automation Tools</li>
        <li>Newsfeed Integration</li>
        <li>Social Media Plugins Integration</li>
        <li>Upto 40 Stock images</li>
        <li>10 Unique Banner Designs</li>
        <li>JQuery Slider</li>
        <li>Search Engine Submission</li>
        <li>Free Google Friendly Sitemap</li>
        <li>Custom Email Addresses</li>
        <li>Social Media Page Designs (Facebook, Twitter, Instagram)</li>
        <li>Complete W3C Certified HTML</li>
        <li>Complete Deployment</li>
        <li>100% Satisfaction Guarantee</li>
        <li>100% Unique Design Guarantee</li>
        <li>Money Back Guarantee</li>
        <li><strong>Automated Inventory/Shipping/Supplier Module:</strong></li>
        <li>Manage thousands to millions of inventory with ease and check stock levels in real-time. Receive low inventory notifications and generate purchase orders to replenish your stock.</li>
        
        <li>Suppliers Integration (API NEEDED)</li>
        <li>Shipper Integration (API NEEDED)</li>
        <li>Order management</li>
        <li>LOT numbers and expire date tracking</li>
        <li>Transfer stock between warehouses (If Warehouse - API NEEDED)</li>
        <li>Receive stock into a specific warehouse (If Warehouse - API NEEDED)</li>
        <li>Fulfill orders from a particular warehouse (If Warehouse - API NEEDED)</li>
        <li>Stock Management</li>
        <li>Actionable Insights</li>
        <li>Real- Time Visibility</li>
        <li>Inventory Opportunities</li>
        
        <li><strong>Advanced Features: (API Needed For Suppliers/Warehouse)</strong></li>
        
        <li>Speak to suppliers during trivial conversations.</li>
        <li>Set and send actions to suppliers regarding governance and compliance materials.
Place purchasing requests.</li>
        <li>Research and answer internal questions regarding procurement functionalities or a supplier/supplier set.</li>
        <li>Receiving/filing/documentation of invoices and payments/order requests</li>
        <li>Machine Learning (ML) for Supply Chain Planning (SCP)</li>
        <li>Machine Learning for Warehouse Management</li>
        <li>Natural Language Processing (NLP) for Data Cleansing and Building Data Robustness</li>
       
       <li><strong>Automated Invoices &amp; Estimates</strong></li> 
        
        <li>Create beautiful, professional invoices &amp; estimates in just a few seconds and then instantly email them as PDF's directly to your customers or prospects.</li>
        <li>Automated Split invoicing</li>
        <li>Automated Combine invoices</li>
        <li>Invoice templates</li>
        
        <li><strong>Automated Barcode Scanning</strong></li>
        <li>Scan inventory into your orders, generate barcodes for your documents, and search for inventory or documents by scanning barcodes.
</li>

        <li><strong>Locations and Zones</strong></li>
        <li>Have multiple warehouses, offices, or retail stores? No problem. Easily track where all your inventory is by organizing everything into locations and zones. Organize inventory items using custom attributes such as size, color, and location. View how many you have globally or at each location.</li>
        
        <li><strong>Customer Accounts</strong></li>
        
        <li>Performance and analytics</li>
        <li>Customization of Personal Details</li>
        <li>Process management</li>
        <li>Sales Automation</li>
        <li>Team Collaboration</li>
        <li>Marketing Automation</li>
        <li> Security</li>
        <li>Integrations</li>
        <li>Mobile Notifications</li>
        <li>Sales Reports</li>
        <li>Trend Analytics</li>
        <li>Forecasting</li>
        <li>Territory Management</li>
        <li>Account Management</li>
        <li>Event Integration</li>
        <li>Advanced Data Security</li>
        <li><strong>Purchase Orders</strong></li>
        
        <li>With integrated purchase orders, you can easily replenish your inventory levels by ordering more stock and even track when those new items will arrive.</li>
        <li>Partial orders fulfill</li>
        <li>Backordering</li>
        
        
         <li><strong>Financial Reports</strong></li>
        
        <li>Generate extremely detailed reports for your inventory, sales and services. Filter your reports by date-range and category to see what's making you the most money.</li>
                
    </ul>
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    
    
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
      <div class="price-btnwrap">
      <a href="/packages/automated-interactive-e-Commerce-website/">View Details</a>
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>
  </div>

  
  
  
</div>          </div>

          <div id="ecomm" class="tab-pane">
            
            <div class="smallboxes packagesslider">

  <div class="smallbox">
  <div class="package_inner">
    <h4>E-Commerce   <br> Startup</h4>
    <h2><span class="currency_symbol">£</span>600.00 <span><s>£1,200.00</s></span> </h2>
    <!-- <p>Suitable for potential super-startups and brand revamps for companies.</p> -->
    <!-- <div class="hrline"></div> -->
    
    <ul class="ticklist2 list-scroll">
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
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="price-btnwrap">
      <a href="/packages/e-commerce-startup-package/">View Details</a> 
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>
  </div>

  <div class="smallbox bst-selr">
  <div class="package_inner">
    <h4>E-Commerce  <br> Professional</h4>
    <h2><span class="currency_symbol">£</span>1,394.00 <span><s>£2,788.00</s></span> </h2>
    <!-- <p>Suitable for potential super-startups and brand revamps for companies.</p> -->
    <!-- <div class="hrline"></div> -->
    
    <ul class="ticklist2 list-scroll">
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
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="price-btnwrap">
      <a href="/packages/e-commerce-professional-package/">View Details</a>
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div> 
    </div>
  </div>

  <div class="smallbox">
  <div class="package_inner">
    <h4>E-Commerce  <br> Elite</h4>
    <h2><span class="currency_symbol">£</span>3,694.00 <span><s> £7,388.00</s></span> </h2>
    <!-- <p>Suitable for potential super-startups and brand revamps for companies.</p> -->
    <!-- <div class="hrline"></div> -->
    
    <ul class="ticklist2 list-scroll">
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
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="price-btnwrap">
      <a href="/packages/e-commerce-elite-package/">View Details</a>
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>
  </div>

  

  

  
  
</div>          </div>


           <div id="brandd" class="tab-pane">
            <div class="smallboxes packagesslider">
  
    <div class="smallbox">
    <div class="package_inner">
    <h4>Stationery <br> Package</h4>
    <h2><span class="currency_symbol">£</span>74.99 <span><s>£149.99</s></span> </h2>
    <!-- <p>Suitable for potential super-startups and brand revamps for companies.</p> -->
    <!-- <div class="hrline"></div> -->
    
    <ul class="ticklist2 list-scroll">
      <li>1 Business Card Design</li>
      <li>1 Letterhead Design</li>
      <li>1 Envelope Design</li>
      <li>Dedicated Designer</li>
      <li>3 Design Revisions</li>
      <li>Turnaround Time 24 - 48 Hours</li>
      
      <li class="heading">Features</li>
      <li>100% Satisfaction Guaranteed</li>
      <li>100% Ownership rights</li>
      <li>100% Unique Design Guarantee</li>
      <li>100% Money Back Guarantee</li>
      <li>All Final File Formats</li>
    </ul>
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div class="price-btnwrap">
      <a href="/packages/stationery-package/">View Details</a>
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>

  </div>

  <div class="smallbox bst-selr">
  <div class="package_inner">
    <h4>Infographic <br> Package</h4>
    <h2><span class="currency_symbol">£</span>139.99 <span><s>£279.98</s></span> </h2>
    <!-- <p>Suitable for potential super-startups and brand revamps for companies.</p> -->
    <!-- <div class="hrline"></div> -->
    <ul class="ticklist2 list-scroll">
      <li>1 Unique Design</li>
      <li>6 Design concepts</li>
      <li>Dedicated Designer</li>
      <li>Dedicated Account Manager</li>
      <li>Unlimited Revisions</li>
      <li>Turnaround Time - 48 - 72 Hours</li>
      <li class="heading">Features</li>
      <li>100% Satisfaction Guaranteed</li>
      <li>100% Ownership rights</li>
      <li>100% Unique Design Guarantee</li>
      <li>100% Money Back Guarantee</li>
      <li>All Final File Formats</li>
    </ul>
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="price-btnwrap">
      <a href="/packages/infographic-package/">View Details</a> 
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>
  </div>

  <div class="smallbox">
  <div class="package_inner">
    <h4>Brochure/Flyer <br> Package</h4>
    <h2><span class="currency_symbol">£</span>134.99 <span><s>£269.98</s></span> </h2>
    <!-- <p>Suitable for potential super-startups and brand revamps for companies.</p> -->
    <!-- <div class="hrline"></div> -->
    <ul class="ticklist2 list-scroll">
      <li>1 Unique Design</li>
      <li>4 Design concepts (Trifold / Bi-fold)</li>
      <li>Dedicated Designer</li>
      <li>Dedicated Account Manager</li>
      <li>Unlimited Revisions</li>
      <li>Turnaround Time - 48 - 72 Hours</li>
      <li class="heading">Features</li>
      <li>100% Satisfaction Guaranteed</li>
      <li>100% Ownership rights</li>
      <li>100% Unique Design Guarantee</li>
      <li>100% Money Back Guarantee</li>
      <li>All Final File Formats</li>
    
    </ul>
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="price-btnwrap">
      <a href="/packages/brochure-flyer-package/">View Details</a> 
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>
  </div>

 

</div>          </div>

          <div id="videod" class="tab-pane">
            <div class="smallboxes packagesslider">

  <div class="smallbox">
  <div class="package_inner">
    <h4>Startup Video <br> Package</h4>
    <h2><span class="currency_symbol">£</span>209.99 <span><s>£419.98</s></span> </h2>
    <!-- <p>Suitable for potential super-startups and brand revamps for companies.</p> -->
    <!-- <div class="hrline"></div> -->
    
    <ul class="ticklist2 list-scroll">
      <li>30 Second Video</li>
        <li>Professional Script</li>
        <li>Storyboard</li>
        <li>Animation</li>
        <li>Voice - Over & Sound Effects</li>
        
        <li>Unlimited Revisions</li>
    </ul>
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="price-btnwrap">
      <a href="/packages/startup-video-package/">View Details</a>
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>

  </div>

  <div class="smallbox">
  <div class="package_inner">
    <h4>Classic Video <br> Package</h4>
    <h2><span class="currency_symbol">£</span>409.99 <span><s>£819.99</s></span> </h2>
    <!-- <p>Suitable for potential super-startups and brand revamps for companies.</p> -->
    <!-- <div class="hrline"></div> -->
    <ul class="ticklist2 list-scroll">
      <li>60 Second Video</li>
        <li>Professional Script</li>
        <li>Sample Theme</li>
        <li>Storyboard</li>
        <li>Animation</li>
        <li>Voice - Over & Sound Effects</li>
    </ul>
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="price-btnwrap">
      <a href="/packages/classic-video-package/">View Details</a>
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>
  </div>

  <div class="smallbox bst-selr">
  <div class="package_inner">
    <h4>Premium Video <br> Package</h4>
    <h2><span class="currency_symbol">£</span>809.99 <span><s>£1619.98</s></span> </h2>
    <!-- <p>Suitable for potential super-startups and brand revamps for companies.</p> -->
    <!-- <div class="hrline"></div> -->
    <ul class="ticklist2 list-scroll">
      <li>90 Second Video</li>
      <li>Professional Script</li>
      <li>Sample Theme</li>
      <li>Storyboard</li>
      <li>Animation</li>
      <li>Voice - Over & Sound Effects</li>
      <li>6 Weeks Delivery</li>
    </ul>
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="price-btnwrap">
      <a href="/packages/premium-video-package/">View Details</a>
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>
  </div>

  <div class="smallbox">
  <div class="package_inner">
    <h4>Unlimited Animation <br> Package</h4>
    <h2><span class="currency_symbol">£</span>1409.99 <span><s>£2819.98</s></span> </h2>
    <!-- <p>Suitable for potential super-startups and brand revamps for companies.</p> -->
    <!-- <div class="hrline"></div> -->
    <ul class="ticklist2 list-scroll">
      <li>120 Second Video</li>
      <li>Professional Script</li>
      <li>Sample Theme</li>
      <li>Storyboard</li>
      <li>Animation</li>
      <li>Voice - Over & Sound Effects</li>
    </ul>
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="price-btnwrap">
      <a href="/packages/unlimited-animation-package/">View Details</a>
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>
  </div>

  <div class="smallbox bst-selr">
  <div class="package_inner">
    <h4>Professional 3D VFX <br> Animation</h4>
    <h2><span class="currency_symbol">£</span>2009.99 <span><s>£4019.99</s></span> </h2>
    <!-- <p>Suitable for potential super-startups and brand revamps for companies.</p> -->
    <!-- <div class="hrline"></div> -->
    <ul class="ticklist2 list-scroll">
      <li>30s Duration - HD 1080</li>
      <li>Unlimited Edits/Revisions & Concepts</li>
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
      <li>Custom Setting, 2 Characters & Graphics</li>
      <li>Animation Effects & Visualization</li>
      <li>Voice Over - All accents (M/F)</li>
      <li>Editing and Final Output</li>
    </ul>
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="price-btnwrap">
      <a href="/packages/professional-3d-vfx-animation/">View Details</a>
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>
  </div>

  <div class="smallbox">
  <div class="package_inner">
    <h4>Elite 3D VFX <br> Animation</h4>
    <h2><span class="currency_symbol">£</span>2509.99 <span><s>£5019.98</s></span> </h2>
    <!-- <p>Suitable for potential super-startups and brand revamps for companies.</p> -->
    <!-- <div class="hrline"></div> -->
    <ul class="ticklist2 list-scroll">
      <li>60s Duration - HD 1080</li>
      <li>Unlimited Edits/Revisions & Concepts</li>
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
      <li>Custom Setting, 2 Characters & Graphics</li>
      <li>Animation Effects & Visualization</li>
      <li>Voice Over - All accents (M/F)</li>
      <li>Editing and Final Output</li>
    </ul>
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="price-btnwrap">
      <a href="/packages/elite-3d-vfx-animation/">View Details</a>
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>
  </div>

 
  
</div>          </div>

          <div id="seo" class="tab-pane">
            <div class="smallboxes packagesslider">

  <div class="smallbox seopack">
  <div class="package_inner">
    <h4>Seo Booster <br> Package</h4>
    <h2><span class="currency_symbol">£</span>200.00 <span><s>£400.00</s></span> </h2>
    <p>£600 – Quarterly Plan</p>
    <!-- <div class="hrline"></div> -->
    <ul class="ticklist2 list-scroll">
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
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="price-btnwrap">
      <a href="/packages/seo-booster-package/">View Details</a>
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>

  </div>

  <div class="smallbox bst-selr seopack">
  <div class="package_inner">
    <h4>Seo Value<br> Package</h4>
    <h2><span class="currency_symbol">£</span>400.00 <span><s>£800.00</s></span> </h2>
    <p>£1200 – Quarterly Plan</p>
    <!-- <div class="hrline"></div> -->
    <!-- <h3>Payable Amount</h3> -->
    <ul class="ticklist2 list-scroll">
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
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="price-btnwrap">
      <a href="/packages/seo-value-package/">View Details</a>
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>

  </div>

  <div class="smallbox seopack">
  <div class="package_inner">
    <h4>Seo Pro<br> Package</h4>
    <h2><span class="currency_symbol">£</span>600.00 <span><s>£1,200.00</s></span> </h2>
    <p>£1800 – Quarterly Plan</p>
    <!-- <div class="hrline"></div> -->
    <!-- <h3>Payable Amount</h3> -->
    <ul class="ticklist2 list-scroll">
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
    <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
    
    <div class="actions">
      <div class="row">
        <div class="col-md-6 col-xs-6">
          <div class="act-box1">
            <a class="spek-us" tabindex="0" href="tel:+442038087061">
              <span><small>Speak with us</small>+442038087061</span>
            </a>
          </div>
        </div>
        <div class="col-md-6 col-xs-6">
          <div class="act-box2">
            <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
              <span><small>Want to discuss?</small> Live Chat Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="price-btnwrap">
      <a href="/packages/seo-pro-package/">View Details</a>
      <div class="row">
         
         <div class="col-md-12">
          <a href="javascript:void(0)" class="btn-packages btn-packages2 " data-toggle="modal" data-target="#modalForDiscount" tabindex="0">Order Now </a>

        </div>
      </div>
    </div>

  </div>
  
</div>          </div>

          <!--<div id="content" class="tab-pane">
                      </div>

          <div id="mobiled" class="tab-pane">
                      </div>

          <div id="socal" class="tab-pane">
                      </div> -->

          
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
                <p>Received my project on time and provided me proper assistance along the way. Loved working with them!</p>
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
                <p>I am extremely happy with websitevalley. They solved a huge source of frustration and do a much better job than website designers that charge thousands of dollars. Please, please you owe it to your business and company to use these guys.</p>
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
                <p>Wow! They turned my dream into reality and bring it to live. from Logo creation, Web development they have been Rocking it all through. They have the talented team you can trust.</p>
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
                <p>I want to thank websitevalley team for doing such a great job on our Website, it was easy and phenominal. Thankyou very much and looking forward to doing business with websitevalley in the future. </p>
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
                <p>We talk regarding web design services for our website and how it was affecting our rankings. The team provided us responsive web design services and SEO consultation too!</p>
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
                <p>I was a bit confused when I got to LDH, and the excellent team helped us along the way! We’re more than happy working with them.</p>
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
<?php include_once($_SERVER['DOCUMENT_ROOT'].'/includes/scripts.php');?>


</body>

<!-- Mirrored from websitevalley.co.uk/packages by HTTrack Website Copier/3.x [XR&CO'2014], Thu, 21 Jan 2021 17:41:06 GMT -->
</html>