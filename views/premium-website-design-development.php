<!doctype html>
<html lang="en-US" style="overflow-x: hidden;">

<head>
  <?php include_once('includes/head.php') ?>
    <link rel="stylesheet" href="css/home.css">
    <title>The Web Founders Providing Top-Notch Digital Services</title>
    <meta name="description" content="Get all your designing needs fulfilled by the best in the business! We provide affordable designing solutions for your business needs.">
    <style>
        
    
.navbar {
    padding: 45px 15px;
}


.inerservice-banner .isb-textwrapper {
    padding: 0 0 0 0 !important;
    /* display: table-cell; */
    width: 100%;
    vertical-align: middle;
}

#home-pricing-brands .item, #home-pricing-ecoms .item, #home-pricing-videos .item, #home-pricing-webs .item {
    margin: 7px;
    width: 31%;
    float: left;
    margin-bottom:25px;
}
#home-pricing-webs > div:nth-child(7){

width:100%;

}
        .bg-video-wrap {
  position: relative;
  overflow: hidden;
  width: 100%;
  /* height: 100vh; */
  background: url('img/video.jpg') no-repeat center center/cover;
}
.headerVideo {
  width: 100%;
  /* min-height: 100vh; */
  z-index: 1;
}
.overlay {
  width: 100%;
  background: url('img/video.jpg') no-repeat center center/cover;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  /* background:#00000075; */
  /* background-image: linear-gradient(45deg, rgba(0,0,0,.3) 50%, rgba(0,0,0,.7) 50%); */
  background-size: 3px 3px;
  z-index: 2;
}
.screen {
    width: 100%;
    height: 450px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }
  .screen img {
    position: absolute;
    left: 0;
    right:0;
    top: 0;
    max-width: 290px;
    transition: transform 1s ease-in-out 0.5s;
    margin:0 auto;
}
.screen:hover img {
    transform: translateY(-50%);
}
.home-form{z-index:9;}
.bnr-slider.slick-slider{z-index:1}

@media(max-width:1000px){
.bg-video-wrap{
  height:65vh;
  /* display:none; */
}

.bg-video-wrap{
  background:url('img/mblVideoBanner.jpg');
  background-size:cover;
  background-repeat:no-repeat;
}

.headerVideo{
  display:none;
}
.overlay {
  height:100vh;
}

}
.position-relative{
  position:relative;
}

.bottom-button{
  /* position:absolute;
  bottom: -241px;
  left:25%; */

}
.bottom-button button{
  margin-left:10px
}
@media (max-width:519px){
  .bottom-button{
    /* left:8%; */
  }
  .lgos-sctn ul li {
    display: inline-block;
    padding: 20px !important;
}
}
.visibility-hidden{
  visibility:hidden;
}

button.play.rounded-box.state-paused {
    display: none;
}
button.play.rounded-box.state-playing {
    display: none;
}
.vp-controls-wrapper ,.vp-controls{
  display: none !important;
}
.mt-min-2{
  margin-top:-22px;
}




.myCustomCardPrice .myCard2 {
    margin-bottom: 20px;
    border: 1px solid #00000069;
    box-shadow: 12px 10px 30px #00000050;
}
.cstmwebdesgn .inerservice-banner {

    padding: 50px 0;
}
.inerservice-banner {
    background-position: center;
    background-size: cover !important;
    /* margin-top: 70px; */
    padding: 120px 0;
    background-attachment: fixed;
    position: relative;
    background : #042048;
}
.inerservice-banner:before {
    position: absolute;
    content: "";
    top: 0;
    width: 100%;
    height: 100%;
    background: #68bef10008c;
    /* z-index: 1; */
}
.inerservice-banner .isb-textwrapper {
    padding: 0 110px 0 0;
    /* display: table-cell; */
    width: 100%;
    vertical-align: middle;
}
.inerservice-banner .isb-textwrapper h5 {
    color: #68bef1;
    letter-spacing: 2px!important;
    font-family: AvenirRoman, sans-serif;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    padding: 0;
    margin: 0;
}
.inerservice-banner .isb-textwrapper h1 {
    line-height: 1;
    text-transform: uppercase;
    color: #fff;
    font-size: 50px;
    margin-bottom: 20px;
    font-weight: 900;
    padding: 20px 20px 0 0px;
    letter-spacing: 2px;
}
.inerservice-banner .isb-textwrapper p {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0;
    padding: 0 0 30px;
}
.cstmwebdesgn .btn-red {
    font-weight: 600;
}
.btn-red {
    text-align: center;
    border-radius: 10px;
    padding: 14px 20px;
    background-color: #68bef1;
    color: #fff;
    display: inline-block;
    width: 250px;
    font-size: 16px;
    font-weight: 400;
    -webkit-transition: 0.4s;
    -moz-transition: 0.4s;
    -o-transition: 0.4s;
    transition: 0.4s;
}
.inerservice-banner form {
    width: 85%;
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 1px -2px 17px #68bef1;
}
.inerservice-banner form h4 {
    text-align: center;
    width: 100%;
    color: #000;
    font-size: 30px;
    font-weight: 700;
    text-transform: capitalize;
    padding: 0;
}
.inerservice-banner form p {
    text-align: center;
    width: 100%;
    color: #68bef1;
    font-weight: 500;
    padding: 0 ;
}
.inerservice-banner form .from-control {
    /* padding: 0 0 20px; */
}
.inerservice-banner form .from-control label {
    width: 100%;
    font-size:14px;
    display: block;
    color: #000;
}
.inerservice-banner form .from-control input {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: transparent;
    background: #e8e8e8;
}
.inerservice-banner .submit {
    margin: 0px 0 0;
    display: inline-block;
    background: #fff;
    border: 1px solid #fff;
    color: #000;
    font-size: 14px;
    padding: 13px 31px;
    text-align: center;
    text-transform: capitalize;
    display: inline-block;
    border-radius: 5px;
    -webkit-transition: color 200ms ease-in-out, background-color 200ms ease-in-out, border-color 200ms ease-in-out;
    -moz-transition: color 200ms ease-in-out, background-color 200ms ease-in-out, border-color 200ms ease-in-out;
    -o-transition: color 200ms ease-in-out, background-color 200ms ease-in-out, border-color 200ms ease-in-out;
    transition: color 200ms ease-in-out, background-color 200ms ease-in-out, border-color 200ms ease-in-out;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    font-weight: 600;
    cursor: pointer;
}
.inerservice-banner .submit {
    background: #68bef1 !important;
    color: #fff !important;
    border: 1px solid #fff0;
}

.lgos-sctn  {
  margin-top: 30px;
}

.lgos-sctn ul {
    text-align: left;
    margin: 0;
    padding: 0;
    margin-left: -20px;
}

.lgos-sctn ul li {
    display: inline-block;
    padding: 0 10px;
}
    </style>
</head>

<body  style="overflow:hidden;">
  <?php include_once('includes/header.php') ?>
  <body style="overflow:hidden;">
  <section class="section1 inerservice-banner" >
      <div class="container py-5">
        <div class="row">
          <div class="col-lg-7 align-self-center py-5">
            <div class="isb-textwrapper">
              <h5>CUSTOM WEBSITE DEVELOPMENT</h5>
              <h1>We Design and Develop Custom-Tailored Websites</h1>
              
              <p>We create responsive web applications and sites leveraging the most robust technologies in the industry to help you boost your business.</p>
              <a href="javascript:;" class="btn-red liveChat">Let’s Build it together</a>
              <div class="lgos-sctn">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul>
              <li><img src="images/tdf-logo-2.png" width="65" height="48" alt=""></li>
              <li><img src="images/top-digital.png" width="123" height="48" alt=""></li>
              <li><img src="images/clutch.png" width="123" height="48" alt=""></li>
              <li><img src="images/google-partner.png" width="123" height="48" alt=""></li>
            </ul>
          </div>
        </div>
      </div>
    </div>


            </div>
          </div>
          <div class="col-lg-5">
            <form class="cmxform" id="contactForm" method="POST" action="/leads/">
            <input type="text" name="name" class="jun name" value="">   
              <input type="text" name="firstname" class="jun firstname" value="legit">  
              <input name="email" type="email" class="form-control txt-sub text-left emailBootom jun email" placeholder="your email address">
              <input type="hidden" name="token" value="<?= $token;?>">
            <input type="hidden" name="route" value="/premium-website-design-development/">   
                    <input type="hidden" name="brand" value="webfoundersuk">   
                    <input type="hidden" name="tag" value="footer-form">
                    <input type="hidden" name="price" value="null">
                    <input type="hidden" name="news" value="1">
<input type="text" class="jun"  name="gender">
              <div class="row">
                <h4>Get an Experts Consultation</h4>
                <p>or Call Now <b>+44-203-883-4810</b></p>
                <div class="col-lg-12">
                  <div class="from-control">
                    <label for="Name">Full Name <span>*</span></label>
                    <input type="text" name="name" placeholder="" required="" pattern="^[A-Za-z ]+$" maxlength="45">
                  </div>
                </div>
                
                <div class="col-lg-12">
                  <div class="from-control">
                    <label for="Email">Email <span>*</span></label>
                    <input type="text" name="email" placeholder="" required="" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="from-control">
                    <label for="Number">Phone Number <span>*</span></label>
                    <input type="text" name="phone" placeholder="" required="" maxlength="15" pattern="^[0-9]*$">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="from-control">
                    <label for="projectdescr">Project Description <span>*</span></label>
                    <!-- <input type="text" name="brief" placeholder=""> -->
                    <textarea name="brief" style="resize:none;min-height:90px;background-color: #e5e5e5;margin-bottom:12px;" class="form-control" maxlength="250" pattern="^[A-Za-z ]+$"></textarea>
                  </div>
                </div>
                <div class="col-lg-12 text-center">
                  <input class="submit mx-auto" type="submit" value="Let's Grow Your Business">
                  <input class="" type="hidden" name="ctry" value="Pakistan Pakistan ">
                  <input type="hidden" name="pc" value="+92+92">
                  <input type="hidden" name="cip" value="103.104.193.174">
                  <input type="hidden" id="location" name="locationURL" value="custom-website-design/">
                  <input type="hidden" name="hiddencapcha" value="">
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

  <section class="mt-min-2">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="owl-carousel owl-home-clients owl-theme">
            <div class="item">
              <div class="img-wrap">
                <img src="images/home/clients/audi-logo.png">
              </div>
            </div>

            <div class="item">
              <div class="img-wrap">
                <img src="images/home/clients/cisco-logo.png">
              </div>
            </div>

            <div class="item">
              <div class="img-wrap">
                <img src="images/home/clients/dhl-logo.png">
              </div>
            </div>

            <div class="item">
              <div class="img-wrap">
                <img src="images/home/clients/hersheys-logo.png">
              </div>
            </div>

            <div class="item">
              <div class="img-wrap">
                <img src="images/home/clients/honey-well-logo.png">
              </div>
            </div>

            <div class="item">
              <div class="img-wrap">
                <img src="images/home/clients/ibm-logo.png">
              </div>
            </div>

            <div class="item">
              <div class="img-wrap">
                <img src="images/home/clients/lenovo-logo.png">
              </div>
            </div>

            <div class="item">
              <div class="img-wrap">
                <img src="images/home/clients/metlife-logo.png">
              </div>
            </div>

      
      

            <div class="item">
              <div class="img-wrap">
                <img src="images/home/clients/new-york-film-academy-logo.png">
              </div>
            </div>

            <div class="item">
              <div class="img-wrap">
                <img src="images/home/clients/printful-logo.png">
              </div>
            </div>

            <div class="item">
              <div class="img-wrap">
                <img src="images/home/clients/sephora-logo.png">
              </div>
            </div>
            <div class="item">
              <div class="img-wrap">
                <img src="images/home/clients/slazenger-logo.png">
              </div>
            </div>

            <!-- <div class="item">
              <div class="img-wrap">
                <img src="images/home/clients/audi-logo.png">
              </div>
            </div> -->

            <div class="item">
              <div class="img-wrap">
                <img src="images/home/clients/toyota-logo.png">
              </div>
            </div>

            <div class="item">
              <div class="img-wrap">
                <img src="images/home/clients/waze-logo.png">
              </div>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </section>

  <?php
  
  $pageIsLanding = true;
 ?>
 <div class="portfolioHere"></div>
 <section class="sec-padding pricing-sec packages-sec-before d-none" style="background: linear-gradient(to top, #daeef4 0%,rgba(255,255,255,0) 20%);">
  <div class="container my-5">
    <div class="row">
      <div class="col-lg-10 offset-lg-1"> 
        <h3 class="text-center" style="font-size: 30px; font-weight:600;">How Much Do We Charge For Our Services?</h3>
        <p>Our quick, professional services may be affordable, but they are not cheap. We have a mission to create creative, authentic, and valuable designs. We aim to offer our services with a great passion for driving results for our costumes. Our top creative-led design and development agency enables your brand image to become the best, firm, marketable, media-worthy at an affordable price.</p>
      </div>  
      <div class="col-lg-12"> 
          <ul class="nav nav-pills">
              <?php 
              $categoryCounter = 0;
              foreach($pacakges as $category):?>
                <li><a data-toggle="pill" href="#pills-web-<?=$category->id?>" class="<?= ($categoryCounter==0?'active show':'')?>"><?=$category->name?></a></li>
              <?php
              $categoryCounter++;
              endforeach;?>

          </ul>
        <div class="tab-content pricingboxes">
        <?php 
            // var_dump($pacakges);die;
            $pacakgesCounter=0;
            foreach($pacakges as $category):?>
            <div class="tab-pane <?= ($pacakgesCounter==0?'active':'')?>" id="pills-web-<?=$category->id?>" role="tabpanel" aria-labelledby="pills-web-tab-<?=$category->id?>">
                <div class="smallboxes packagesslider">
                  
                    <?php foreach($category->packages as $package):?>
                      <div class="smallbox">
                        <div class="package_inner">
                          <p class="h4 h4Heading"><?=$package->heading;?></p>
                          <p class="h2 h2Heading"><span class="currency_symbol">£</span><?=$package->amount?> <span><s>£<?=$package->amount*2?></s></span> </p>
                          
                          <ul class="ticklist2 list-scroll">
                            <?php foreach($package->details as $detail):?>
                              <li><?=$detail->detail?></li>
                            <?php endforeach;?>
                          </ul>
                          <p class="text-center ad-don">Add on: <span>£50</span> for 24 Hours Rush Delivery</p>
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
                                  <a class="wnt-disx" tabindex="0" href="javascript:;" onclick="setButtonURL();" target="_self">
                                    <span><small>Want to discuss?</small> Live Chat Now</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div></div>
                          <div class="price-btnwrap">
                            <a href="/package/<?= $category->slug.'/'.$package->slug?>">View Details</a> 
                            <div class="row">
                              
                              <div class="col-md-12">
                                <a href="javascript:void(0)" class="btn-packages btn-packages2 btn-theme-outline" tabindex="0">Order Now </a>

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


  
  <section class="floating_wrap d-none">
  <div class="btns_wrap">
    
    <a href="javascript:;" class="chat_wrap liveChat">
      <i class="fa fa-comment pur-bg"></i>
      <span class="pur">Chat With Us</span>
    </a>
    <a href="tel:+442038856237" class="call_wrap">
      <i class="fa fa-phone pur-bg"></i>
      <span class="pur">+44 2038 087061</span>
    </a>
  </div>

  <div class="float_form_box">
    <div class="floating_form">
      <div class="floating_strip">
        <div class="rotatekaro">
          <a href="javascript:;" class="">Get Free Consultancy</a>
        </div>
      </div>
      <div class="floating_inner">
        <h3>Signup Now</h3>
        <div class="form_wrap">
           <form method="POST" action="/leads/" id="quoteForm" autocomplete="off">
           <input type="text" name="name" class="jun name" value="">   
              <input type="text" name="firstname" class="jun firstname" value="legit">  
              <input name="email" type="email" class="form-control txt-sub text-left emailBootom jun email" placeholder="your email address">
              <input type="hidden" name="token" value="<?= $token;?>">
           <input type="hidden" name="route" value="/">   
                  <input type="hidden" name="brand" value="thewebfoundersuk">   
                  <input type="hidden" name="tag" value="modal-auto">
                  <input type="hidden" name="price" value="null">
                  <input type="hidden" name="news" value="1">
<input type="text" class="jun"  name="gender">
            <div class="row">
            <div class="col-md-12 col-xs-12 margin-bottom-10">
              <input type="text" autocomplete="off" class="form-control" placeholder="Full Name" name="name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Full Name'" required="required" pattern="^[A-Za-z ]+$" maxlength="45">
            </div>
            <input type="hidden" name="_token" value="N49UNLabJbUSvBDJEo7foM8hpNuXpnw4qMXgV2mo">
            <div class="col-md-12 col-xs-12 margin-bottom-10">
              <input type="email" autocomplete="off" class="form-control" placeholder="Email" name="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email'" required="required" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
            </div>
            <div class="col-md-12 col-xs-12 margin-bottom-10 ">
              <input type="number" min="1" autocomplete="off" class="form-control" placeholder="Phone Number" name="phone" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Phone Number'" required="" maxlength="15" pattern="^[0-9]*$">
            </div>
              <div class="col-md-12 col-xs-12 margin-bottom-20">
                <textarea class="form-control" col="5" name="brief" placeholder="Talk about your project" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Project Description'" required="" maxlength="250" pattern="^[A-Za-z ]+$"></textarea>
              </div>
              <div class="col-md-12 col-xs-12 text-center">
                <div class="text-center mid-body">
                  <input class="btn-fill btn-quote" type="submit" id="quoteSubmit" name="quote" value="Send Query">
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</section>



    <?php include_once('includes/footer.php');?>
    
    

      <?php include_once('includes/scripts.php');?>
      
      <script>
      $('.owl-home-clients').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
      </script>
        <script>
//   var portfolioContent = `<?php //include('include/portfolio-home.php');?>`;
// // sticky social



//   var  checNewIT = true;
  
//   var scrollY = $(document).scroll(function(){
//         var scrollYHeight = $(this).scrollTop();
//         if(scrollYHeight >300){
//           if(checNewIT === true){
//             $('.portfolioHere').html(portfolioContent);
//             $('head').append(' <link rel="stylesheet" href="css/home.css">');
//             checNewIT =false;
//           }
//         }


//   });
//   $(document).scroll(function(){
//     var scrollH = $(this).scrollTop();
//     if(scrollH > 400){
//         $('.floating_wrap').removeClass('d-none')
//     }else{
//         $('.floating_wrap').addClass('d-none')
//     }
// });
</script>
       <script>
    $(document).on('click','.formBtn',function(){
      if(window.innerWidth > 600){
        $("#modalForDiscount").modal('show');
      }else{
        window.open('tel:+442038856237','_self');
      }
      

    });
 



    </script>




</body>
</html>