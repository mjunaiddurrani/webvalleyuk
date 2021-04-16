
<footer class="footer-main">
  <div class="footer-top">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <p class="h3 ">Services</p>
          <ul class="linkinglist">
          <li><a href="/web-app-development/">Web App Development</a></li>
          <li><a href="/web-design-development/">Web Design Development</a></li>
          <li><a href="/mobile-application/">Mobile App Development</a></li>
          <li><a href="/ecommerce-website-design/">Ecommerce Web Development</a></li>
          <li><a href="/branding/">Branding</a></li>
        
          <!-- <li><a href="/website-design-prototype/">Design & Prototype</a></li> -->
          
            
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
            <li><a class="address"> 86-90 Paul Street, London <br>EC2A 4NE, UK</a></li>
            <li><a class="address"> 104 Meads Lane, Ilford IG3<br> 8PE, UK</a></li>
          </ul>
          <!-- <ul class="scalmdia">
              <li><a href="https://www.facebook.com/websitevalleyUK/"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="https://twitter.com/websitevalleyuk"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="https://www.instagram.com/websitevalleyuk/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
              <li><a href="https://www.linkedin.com/company/websitevalley"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
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
                    <img src="assets/images/trust-verified.png" alt="trust verified" style="height: auto;">
                  </figure>
                </li>
                <li>
                  <figure>
                    <img src="assets/images/copyscape.png" alt="copy scape" style="height: auto;">
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
    <a href="javascript:;" class="chat_wrap" onclick="setButtonURL();" >
      <span class="icoo"><i class="icon-chat"></i></span>
      <span>Chat With Us</span>
    </a>
    <a href="tel:+442038087061" class="call_wrap" >
     <span class="icoo"><i class="icon-phone2"></i></span>
      <span>+442038087061</span>
    </a>
  </div>
</div>


<div class="floatbutton">
    <div class="clickbutton"><div class="crossplus"><i class="fa fa-envelope"></i></div></div>
      <div class="banner-form">
        <span class="font-20">Chat With Us to <br>Avail 50% Discount</span>
        <div class="banform">
          <div class="container">
            <div class="row">
                <div class="ban-form">
                  <form class="cmxform" id="bannerform" method="POST" action="/leads/">
                    <input type="hidden" name="route" value="<?= $_SERVER['REQUEST_URI'] ?>">   
                    <input type="hidden" name="brand" value="webvalleyuk">   
                    <input type="hidden" name="tag" value="modal-auto">
                    <input type="hidden" name="price" value="null">
                    <input type="hidden" name="news" value="1">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="fldset">
                          <input  name="name" minlength="2" type="text" placeholder="Enter your name" required />
                          <i class="fa fa-user" aria-hidden="true"></i>
                        </div>
                      </div>
                     
                      <div class="col-lg-12">
                        <div class="fldset">
                          <input  type="email" name="email" placeholder="Enter email here" required>
                          <i class="fa fa-envelope" aria-hidden="true"></i>
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="fldset">
                          <input  name="phone" type="number" placeholder="Phone Number" required />
                        </div>
                      </div>
                      <div class="col-lg-12">
                        <div class="fldset">
                          <textarea name="brief"  rows="7" placeholder="Talk About Your Project"></textarea>
                          <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                        </div>
                      </div>
                      
                      <div class="col-lg-12">
                        <div class="fldset">
                          <input name="submit" type="submit"   />
        
                          <script data-cfasync="false" src=""></script><script >
                        document.getElementById('flocation').value = window.location.href;
                      </script>
                      <input type="hidden" name="hiddencapcha" value="">
                      <input type="hidden" name="ctry" value="">
                      <input type="hidden" name="pc" value="">
                      <input type="hidden" id="locationURL" name="page" value="https://websitevalley.co.uk/" />
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
             
             <form id="popupfrm" class="cmxform"  method="POST" action="">

               <div class="fldst btnattach">
                 <!-- <input class="submit" type="submit" value="" class="btnsb" /> -->
                 <a class="callus" href="tel:+442038087061"> Free design consultation <i class="fa fa-phone"></i>  +442038087061</a>
               </div>
              <div class="fldst-two">
                <input type="text" name="Name" placeholder="Enter Name" required="">
              </div>
              <div class="fldst-two last">
                <input type="email"  name="Email" placeholder="Enter Email" required="">
              </div>
               <div class="fldst">
                <p>Send us your number to speak with an actual human.</p>
                 <input  name="Number" required="" type="text" onkeypress="return isNumberKey(event);"  placeholder="Enter phone here">
                 <button class="newbtn" type="submit">Submit</button>
                 <script>
                document.getElementById('location').value = window.location.href;
              </script>
              <input type="hidden" name="hiddencapcha" value="">
              <input type="hidden" name="ctry" value="">
              <input type="hidden" name="pc" value="">
              
              <input type="hidden"  name="locationURL" value="http://websitevalley.co.uk/" />
               </div>

               
              
               <p class="lst-p">Not ready for a call? <a href="javascript:;" onclick="setButtonURL();"> Discuss with our strategist</a></p>

             </form>
           </div>
       </div>
   </div>
</div>





 

<a href="javascript:;" class="gototop"><i class="fa fa-chevron-up" aria-hidden="true"></i></a>



</main>





<!--<div class="eggoffer">-->
  
<!--  <div class="top">-->
<!--    <figure>-->
<!--      <img class="lazy loaded" src="assets/images/popup.png" data-src="assets/images/popup.png" data-was-processed="true">-->
<!--    </figure>-->
<!--  </div>-->
  
<!--</div>-->






<div class="mypopup-wrap active" style="display: none;">
  <div class="mypopup">
    <div class="left">
      <figure>
        <img class="lazy loaded" src="" alt="not found" data-src="assets/images/popup-inner.png" data-was-processed="true">
      </figure>
    </div>
    <div class="right">
      <div class="closebutton">x</div>
      <div class="mypopup-innerwrap">
        <span class="text-center font-20">CHRISTMAS SALE! <br>SIGN UP NOW TO GET <span> 75% DISCOUNT</span></span>
        <div class="form_wrap">
          <div class="analyzeform ">
            <form class="" id="banform" method="POST" action="">
              <div class="row">
                <div class="wrap">
                  <div class="dtf">
                    <input id="fname" name="Name" minlength="5" class="round" type="text" placeholder="Enter Name" required="">
                  </div>
                  <div class="dtf">
                    <input  type="email" name="Email" placeholder="Enter email here" required="">
                  </div>
                  <div class="dtf">
                    <input  type="email" name="Email" placeholder="Enter email here" required="">
                  </div>
                  <div class="dtf text-left">
                  
                    <input class="submit" type="submit" value="RESERVE THIS OFFER">
                   
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


