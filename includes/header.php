<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TMM78JN"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<div id="top-to-scroll"></div>

<div class="mobile-nav"> <a href="/" class=" logo-main"> <img src="assets/images/logo.png" alt="*" /></a>
  <nav>

    <ul class="unstyled mainnav pbpx-15">
      <li><a href="/">Home</a></li>
      <li><a href="javascript:;">Services <i class="xicon icon-angle-down"></i></a>
        <ul class="firstlevel unstyled">
          <li><a href="/web-app-development/">Web App Development</a></li>
          <li><a href="/web-design-development/">Web Design Development</a></li>
          <li><a href="/mobile-app-development/">Mobile App Development</a></li>
          <li><a href="/ecommerce-web-development/">Ecommerce Web Development</a></li>
          <li><a href="/branding/">Branding</a></li>
        
        </ul>
      </li>
      
      
      <li><a href="/combo-packages/">Combo Packages</a></li>
      <li><a href="/packages/">Packages</a></li>
      <li><a href="/portfolio/">Portfolio</a></li>
      <li><a href="/contact/">Contact</a></li>
    </ul>

    


  </nav>
</div>
<main class="app-container">
<!-- Mobile Navigation Button Start-->
<div class="mobile-nav-btn"> <span class="lines"></span> </div>

<header class="header-main">
  <div class="top-bar d-none d-lg-block">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="secondlogo">
            <a href="/">
              <img class="img-fluid fblack" src="assets/images/logo.png" alt="logo" />
              <img class="img-fluid fwhite" src="assets/images/logo.png" alt="logo" />
            </a>
          </div>
          <div class="emailsec">
            <a href="mailto:query@websitevalley.co.uk"><span class="icon-envelope2"></span>query@websitevalley.co.uk</a>
          </div>
         
          
          
        </div>
        <div class="col-lg-6">
          <ul class="top-info-list">
            <li><a href="tel:+442038087061"><img src="assets/images/uk-flag.png" alt="UK Flag" />+442038087061</a></li>
            <li><a href="javascript:;" onclick="setButtonURL();" target="_self"><span class="icon-chat"></span> Live Chat</a> </li>
            <li><a href="javascript:;" onclick="setButtonURL();"  class="btn-main">Let's Get Started</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="nav-area-full">
    <div class="container">
      <div class="row">
        <div class="col-lg-2 mobile-res-logo">
          <div class="logo">
            <a href="/">
              <img class="img-fluid" src="assets/images/logo.png" alt="*">
            </a>
          </div>
        </div>
        <div class="col-lg-12 d-flex ">
          <div class="main-menu align-self-center d-none d-lg-block">
            <ul class="forpgactive">



              <li class="home"><a href="/">Home</a></li>
              <li class="serviceli"><a href="">Services</a>
                <ul>
                  <li><a href="/web-design-development/">Web Design Development</a></li>
                  <li class="ecommerce"><a href="/ecommerce-web-development/">Ecommerce Web Development</a></li>
                  <li class="web"><a href="/web-app-development/">Web App Development</a></li><li><a href="/mobile-app-development/">Mobile App Development</a></li>
                  <li><a href="/branding/">Branding</a></li>

                </ul>
              </li>
              
             
              
              
              <li class="web"><a href="/blog/">Blog</a></li>
                   
                    <li class="combo"><a href="/combo-packages/">Combo Packages</a></li>
              <li class="packages"><a href="/packages/">Packages</a></li>
              
              <li class="portfolio"><a href="/portfolio/">Portfolio</a></li>
              <li class="contact"><a href="/contact/">Contact</a></li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <a href="https://websitevalley.co.uk/" class="logo-main"> <img class="mobile-res-logo" src="assets/images/logo.png" alt="*"></a> -->
</header>



<!-- Modal For Queries -->
<div class="modal fade" id="modalForDiscount" tabindex="-1" role="dialog" aria-labelledby="modalForDiscount" aria-hidden="true" style="top:10%;">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-body">
      <button type="button" class="close modalClose" data-dismiss="modal">×</button>
	  <!-- <button type="button" class="close modalClose" data-dismiss="modal" onclick="alert(3)">&times;</button> -->
	  <div class="container">
			<div class="row">
				<div class="col-lg-5 col-md-12 mbl-none p-0">
						<!--<a type="button" class="modalClose" data-dismiss="modal" style="text-align: right;"><i class="fa fa-times"></i></a>-->
					
					<!-- <img src="img/footer.jpg" style="width:100%;height:100%;" alt="imgae"> -->
				</div>
				<div class="col-lg-7 col-md-12 col-sm-12 col-12 text-white">
					<div class="modalDetailsOf">
						<div class="row modalDetailsOfRow text-center">
							<p class="mainH1 pt-5 w-100">LET'S GET STARTED</p>
							<hr class="hrModal">
							
						</div>
						<p class="text-center modal-para p-md-4">To schedule a consultation, please send us your details.</p>
						<form action="/leads/" method="POST" class="modal-fom">
							<!-- <input type="hidden" name="setprice" class="setprice">	 -->
							<div class="row">
								<div class="col-md-6">
									<input required type="text" name="name" class="form-control" placeholder="Write your full name">
									<input required type="email" name="email" class="form-control" placeholder="Write your email address">
									<input required type="tel" name="phone"  class="form-control phone" placeholder="Write your phone number">
                    <input type="hidden" name="route" value="<?= $_SERVER['REQUEST_URI'] ?>">   
                    <input type="hidden" name="brand" value="webvalleyuk">   
                    <input type="hidden" name="tag" value="modal-auto">
                    <input type="hidden" name="price" value="null">
                    <input type="hidden" name="news" value="1">
								</div>
							<div class="col-md-6 ">
								<textarea name="brief" required class="form-control"  style="" placeholder="Write your project description"></textarea>
							</div>
							</div>
							
								<label class="containerCheckBox">
									<!-- <input  type="checkbox" name="subscription" checked disabled> -->
									<span class="modal-check-para"> Our senior consultant will guide you through the entire design & development process.</span>
								</label>
								<input type="hidden" name="set" value="true">
								<div class="text-center pb-3">
									<button class="btn btn-submit btn-modal font-weight-bold pl-md-4 pr-md-4 p-md-3">SUBMIT NOW</button>
								</div>
							
						</form>
					</div>
				</div>
			</div>
		</div>
      </div>
      
    </div>
  </div>
</div>
