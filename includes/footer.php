<footer class="footer-main">
    <div class="footer-top">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <p class="h3 ">Services</p>
                    <ul class="linkinglist">
                        <li><a href="/web-app-development/">Web App Development</a></li>
                        <li><a href="/web-design-development/">Web Design Development</a></li>
                        <li><a href="/mobile-app-development/">Mobile App Development</a></li>
                        <li><a href="/ecommerce-web-development/">Ecommerce Web Development</a></li>
                        <li><a href="/branding/">Branding</a></li>



                    </ul>
                </div>
                <div class="col-lg-3">
                    <p class="xsmtpx-30 h3">Quick Links</p>
                    <ul class="linkinglist">
                        <li><a href="/packages/">Packages</a></li>
                        <li><a href="/combo-packages/">Combo Packages</a></li>
                        <li><a href="/portfolio/">Portfolio</a></li>


                    </ul>
                </div>
                <div class="col-lg-3">
                    <p class="xshide h3">Company</p>
                    <ul class="linkinglist">
                        <!--<li><a href="https://websitevalley.co.uk/culture">Our Culture</a></li>-->
                        <li><a href="/contact/">Contact us</a></li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <p class="xsmtpx-30 h3">About</p>
                    <ul class="linkinglist">
                        <li><a href="tel:+442038087061">+442038087061</a></li>
                        <li><a href="mailto:query@websitevalley.co.uk">query@websitevalley.co.uk</a></li>
                        <li><a class="address"> 54 park avenue barking, Essex, IG11 8QU, UK</a></li>
                        <!-- <li><a class="address"> 104 Meads Lane, Ilford IG3<br> 8PE, UK</a></li> -->
                    </ul>
                    <!-- <ul class="scalmdia">
              <li><a href="https://www.facebook.com/websitevalleyUK/" rel="nofollow"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="https://twitter.com/websitevalleyuk" rel="nofollow"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="https://www.instagram.com/websitevalleyuk/" rel="nofollow"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
              <li><a href="https://www.linkedin.com/company/websitevalley" rel="nofollow"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
          </ul> -->
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="iconswrap">
                        <div class="mycenter">
                            <ul class="topajencies">
                                <li style="    margin-right: 25px;">
                                    <figure>
                                        <img src="assets/images/trust-verified.png" alt="trust verified">
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img src="assets/images/copyscape.png" alt="copy scape">
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img src="assets/images/partner1.png" alt="partner one">
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img src="assets/images/partner5.png" alt="partner">
                                    </figure>
                                </li>
                                <li>
                                    <figure>
                                        <img src="assets/images/partner2.png" alt="partner">
                                    </figure>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-img">
                            <figure>
                                <img src="assets/images/payment-icon.png" alt="payment icon">
                            </figure>
                        </div>
                        <div class="social">
                            <a href="https://www.facebook.com/websitevalleyuk" rel="nofollow"><i
                                    class="fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/websitevalley/" rel="nofollow"><i
                                    class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="footer-bottom">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="fologo">
                        <img src="assets/images/logof.png" alt="logo">
                    </div>

                </div>


                <div class="col-sm-4">
                    <div class="focopy">
                        <p class="copyright">&copy; websitevalley <span id="year"></span>. All rights reserved.</p>
                    </div>

                </div>


                <div class="col-sm-4">
                    <ul class="footer-nav2">
                        <li><a href="/terms-conditions/" title=""> Terms of Services</a></li>
                        <li><a href="/privacy-policy/" title="">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!--<img class="badge-dic " src="assets/images/halloween.png">-->

</footer>


<div class="mobile-cta hidden-sm-up">
    <a href="tel:+442038087061" class="xicon phone">
        <i class="icon-phone"></i>
    </a>
</div>

<div class="floating_wrap">
    <div class="btns_wrap">
        <a href="javascript:;" class="chat_wrap" onclick="setButtonURL();">
            <span class="icoo"><i class="icon-chat"></i></span>
            <span>Chat With Us</span>
        </a>
        <a href="tel:+442038087061" class="call_wrap">
            <span class="icoo"><i class="icon-phone2"></i></span>
            <span>+442038087061</span>
        </a>
    </div>
</div>


<div class="floatbutton">
    <div class="clickbutton">
        <div class="crossplus"><i class="fa fa-envelope"></i></div>
    </div>
    <div class="banner-form">
        <span class="font-20">Chat With Us to <br>Avail 50% Discount</span>
        <div class="banform">
            <div class="container">
                <div class="row">
                    <div class="ban-form">
                        <form class="cmxform" id="bannerform" method="POST" action="/leads/">
                            <input type="hidden" name="route" value="<?= $_SERVER['REQUEST_URI'] ?>">
                            <input type="hidden" name="brand" value="webvalleyuk">
                            <input type="hidden" name="token" value="<?= $token;?>">
                            <input type="hidden" name="tag" value="modal-auto">
                            <input type="hidden" name="price" value="null">
                            <input type="hidden" name="news" value="1">
                            <input type="text" class="jun" name="gender">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="fldset">
                                        <input name="name" minlength="2" type="text" placeholder="Enter your name"
                                            required />
                                        <i class="fa fa-user" aria-hidden="true"></i>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="fldset">
                                        <input type="email" name="email" placeholder="Enter email here" required>
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="fldset">
                                        <input name="phone" class="phone" type="number" placeholder="Phone Number"
                                            required />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="fldset">
                                        <textarea name="brief" required rows="7"
                                            placeholder="Talk About Your Project"></textarea>
                                        <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="fldset">
                                        <input name="submit" type="submit" />

                                        <script>

                                        </script>
                                        <input type="hidden" name="hiddencapcha" value="">
                                        <input type="hidden" name="ctry" value="">
                                        <input type="hidden" name="pc" value="">
                                        <input type="hidden" id="locationURL" name="page"
                                            value="https://websitevalley.co.uk/" />
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




<div class="book-call-ys-layer"></div>
<div class="book-call-ys-container" id="ys-container">
    <div class="book-call-ys-box">
        <a class="book-call-ys-popup-close ys-exit" href="javascript:;"><i class="fa fa-times"></i></a>
        <div class="book-call-ys-popup-content">
            <!-- <p>Are Your Sure?</p>
           <a href="#" class="ys-exit">Exit</a> -->

            <div class="book-call-popupform tabform clearfix  text-left">
                <figure style="background-image: url(assets/images/linda-dok.jpg);"> </figure>
                <span class="heading">Book a Call </span>

                <form id="popupfrm" class="cmxform" method="POST" action="/leads/">

                    <div class="fldst btnattach">
                        <!-- <input class="submit" type="submit" value="" class="btnsb" /> -->
                        <a class="callus" href="tel:+442038087061"> Free design consultation <i class="fa fa-phone"></i>
                            +442038087061</a>
                    </div>
                    <div class="fldst-two">
                        <input type="text" name="name" placeholder="Enter Name" required="">
                    </div>
                    <div class="fldst-two last">
                        <input type="email" name="email" placeholder="Enter Email" required="">
                    </div>
                    <div class="fldst">
                        <p>Send us your number to speak with an actual human.</p>
                        <input name="phone" required="" type="number" placeholder="Enter phone here">
                        <button class="newbtn" type="submit">Submit</button>
                        <script>

                        </script>
                        <input type="hidden" name="hiddencapcha" value="">
                        <input type="hidden" name="ctry" value="">
                        <input type="hidden" name="pc" value="">

                    </div>

                    <p class="lst-p">Not ready for a call? <a href="javascript:;" onclick="setButtonURL();"> Discuss
                            with our strategist</a></p>

                </form>
            </div>
        </div>
    </div>
</div>


<a href="javascript:;" class="gototop"><i class="fa fa-chevron-up" aria-hidden="true"></i></a>

</main>


<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "web development services",
    "description": "Get affordable web design services from our local web designers in your timeline! Also, hire a web developer UK for custom web development services.",
    "thumbnailUrl": "https://www.websitevalley.co.uk/images/video-thumbnail.png",
    "uploadDate": "2021-02-10",
    "duration": "PT0M23S",
    "embedUrl": "https://vimeo.com/757639937"
}
</script>

<!--<div class="eggoffer">-->

<!--  <div class="top">-->
<!--    <figure>-->
<!--      <img class="lazy loaded" src="assets/images/popup.png" data-src="assets/images/popup.png" data-was-processed="true">-->
<!--    </figure>-->
<!--  </div>-->

<!--</div>-->
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
</script>
<script type="text/javascript" src="https://unpkg.com/default-passive-events"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity=" sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous">
</script>
<!-- <script src="js/main.js"></script> -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.13.0/dist/sweetalert2.all.min.js"></script>

<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"> -->
<link href="https://cdn.jsdelivr.net/npm/smartwizard@5/dist/css/smart_wizard_all.min.css" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/smartwizard@5/dist/js/jquery.smartWizard.min.js" type="text/javascript">
</script>
<script src="https://cdn.jsdelivr.net/npm/smartwizard@5/dist/js/jquery.smartWizard.min.js" type="text/javascript"></script>

<style>
  @media screen and (max-width: 640px) {
    .sw>.nav {
      flex-direction: initial !important;

    }

    .form-box-main form input[type=checkbox]:not(old)+label,
    input[type=radio]:not(old)+label {
      font-size: 12px !important;
    }
  }
</style>
<script>
  $(".btn-theme-outline").click(function() {
    $("#modalSteper").modal("show")
    $('#stepwizard').smartWizard({
      hiddenSteps: []
    });
  })
  $(document).ready(function() {
    $("#otherSelectionBox").on('click', function() {
      $("#others-req").prop('checked', true);
    })
    $("#otherSelectionBox").on('keyup', function() {
      let value = $(this).val();
      $("#others-req").val(value);
    })

    $("#other-step2-input").on('click', function() {
      $("#other-step2").prop('checked', true);
    })
    $("#other-step2-input").on('keyup', function() {
      let value = $(this).val();
      $("#other-step2").val(value);
    })

    $("#step3-input").on('click', function() {
      $("#step3-radio").prop('checked', true);
    })
    $("#step3-input").on('keyup', function() {
      let value = $(this).val();
      $("#step3-radio").val(value);
    })

    $("#step4-input").on('click', function() {
      $("#step4-radio").prop('checked', true);
    })
    $("#step4-input").on('keyup', function() {
      let value = $(this).val();
      $("#step4-radio").val(value);
    })

    $("#step5-input").on('click', function() {
      $("#step5-radio").prop('checked', true);
    })
    $("#step5-input").on('keyup', function() {
      let value = $(this).val();
      $("#step5-radio").val(value);
    })
    $('#modalSteper .close').click(function() {
      window.history.pushState({}, "", "/");
      $('#modalSteper').modal('hide');
    })

    // setTimeout(() => {
    //   $('#modalSteper').modal('show');
    //   $('#stepwizard').smartWizard({
    //     hiddenSteps: []
    //   });

    // }, 10000);

    $("#stepwizard").on("stepContent", function(e, anchorObject, currentStepIndex, nextStepIndex,
      stepDirection) {
      window.history.pushState({}, "", "/" + anchorObject.attr('href'));
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



  $(function() {
    $("input[name='other1']").click(function() {
      $('.other1').removeAttr("disabled");
    });
  });

  $('form').submit(function() {
    $(this).find('button').attr("disabled", true);
    $(this).find('input[type="submit"]').attr("disabled", true);
    $(this).find('button[type="submit"]').attr("disabled", true);
    $(this).submit();
  });
</script>