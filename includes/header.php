<header class="header-main">
  <div class="top-bar d-none d-lg-block">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="secondlogo">
            <a href="/">
              <img class="img-fluid fblack" src="assets/images/logo.png" alt="*" />
              <img class="img-fluid fwhite" src="assets/images/logo.png" alt="*" />
            </a>
          </div>
          <div class="emailsec">
            <a href="mailto:query@websitevalley.co.uk"><span class="icon-envelope2"></span>query@websitevalley.co.uk</a>
          </div>
         
          
          
        </div>
        <div class="col-lg-6">
          <ul class="top-info-list">
            <li><a href="tel:+4402038087061"><img src="assets/images/uk-flag.png" alt="UK Flag" />+4402038087061</a></li>
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
              <li class="active"><a href="/">Home</a></li>
              <li class=""><a href="/ecommerce-website-design/">Ecommerce Solutions</a></li>
               <li class=""><a href="/web-app-development/">Web App Development</a></li>

                   
                    <li class=""><a href="/combo-packages/">Combo Packages</a></li>
              <li class=""><a href="/packages/">Packages</a></li>
              
              <li class=""><a href="/portfolio/">Portfolio</a></li>
              <li class=""><a href="/contact/">Contact</a></li>
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
    <div class="modal-content" style="background-image:url('img/popup.jpg');background-size:cover">
      <div class="modal-body">
	  <!-- <button type="button" class="close modalClose" data-dismiss="modal" onclick="alert(3)">&times;</button> -->
	  <div class="container">
			<div class="row">
				<div class="col-lg-5 col-md-12 mbl-none p-0">
						<!--<a type="button" class="modalClose" data-dismiss="modal" style="text-align: right;"><i class="fa fa-times"></i></a>-->
					
					<!-- <img src="img/footer.jpg" style="width:100%;height:100%;" alt=""> -->
				</div>
				<div class="col-lg-7 col-md-12 col-sm-12 col-12 text-white">
					<div class="modalDetailsOf">
						<div class="row modalDetailsOfRow text-center">
							<p class="mainH1 pt-5 w-100">LET'S GET STARTED</p>
							<hr class="hrModal">
							
						</div>
						<p class="text-center modal-para p-md-4">To schedule a consultation, please send us your details. We will guide you through the entire writing and publishing process.</p>
						<form action="/leads/" method="POST" class="modal-fom">
							<!-- <input type="hidden" name="setprice" class="setprice">	 -->
							<div class="row">
								<div class="col-md-6">
									<input required type="text" name="name" class="form-control" placeholder="Write your full name">
									<input required type="email" name="email" class="form-control" placeholder="Write your email address">
									<input required type="tel" name="phone"  class="form-control" placeholder="Write your phone number">
                    <input type="hidden" name="route" value="<?= $_SERVER['REQUEST_URI'] ?>">   
                    <input type="hidden" name="brand" value="webvalleyuk">   
                    <input type="hidden" name="tag" value="modal-auto">
                    <input type="hidden" name="price" value="null">
                    <input type="hidden" name="news" value="1">
								</div>
							<div class="col-md-6 ">
								<textarea name="brief" class="form-control"  style="" placeholder="Write your project description"></textarea>
							</div>
							</div>
							
								<label class="containerCheckBox">
									<input  type="checkbox" name="subscription" checked disabled>
									<span class="modal-check-para">I want to receive the latest news, updates and special offers directly to my inbox.</span>
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

