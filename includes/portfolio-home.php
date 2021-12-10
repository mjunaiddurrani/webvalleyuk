
    <section class="py-5">
	  <div class="container text-dark">
	  	<div class="row">
		  <div class="col-12">
		  <ul class="nav nav-pills mb-5 justify-content-center" id="pills-tab" role="tablist">
			<li class="nav-item">
				<a class="nav-link active" id="pills-webs-tab" data-toggle="pill" href="#pills-webs" role="tab" aria-controls="pills-webs" aria-selected="false">Website Design</a>
			</li>
			<li class="nav-item">
				<a class="nav-link 	" id="pills-logo-tab" data-toggle="pill" href="#pills-logo" role="tab" aria-controls="pills-logo" aria-selected="true">Logo Design</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="pills-branding-tab" data-toggle="pill" href="#pills-branding" role="tab" aria-controls="pills-branding" aria-selected="false">Branding</a>
			</li>
			<li class="nav-item">
				<a class="nav-link" id="pills-video-tabs" data-toggle="pill" href="#pills-videos" role="tab" aria-controls="pills-videos" aria-selected="false">Video Animation</a>
            </li>
			<li class="nav-item">
				<a class="nav-link" id="pills-mobile-tab" data-toggle="pill" href="#pills-mobile" role="tab" aria-controls="pills-mobile" aria-selected="false">Mobile Application</a>
            </li>

	 	  </ul>
		<div class="tab-content" id="pills-tabContent">
			<div class="tab-pane fade show " id="pills-logo" role="tabpanel" aria-labelledby="pills-logo-tab">
			     <!-- Page Content -->
            <div class=" page-top">
            <?php include(__DIR__.'/portfolio/logo-design.php');?>
            </div>


            </div>
			<div class="tab-pane fade show active" id="pills-webs" role="tabpanel" aria-labelledby="pills-webs-tab">
                <div class="page-top">
                <?php include(__DIR__.'/portfolio/website-home.php');?>
                </div>
            </div>
			<div class="tab-pane fade show " id="pills-branding" role="tabpanel" aria-labelledby="pills-branding-tab">
                <div class="page-top">
                    <div class="row">
                        
                  <?php include(__DIR__.'/portfolio/branding.php');?>
                    </div>
                </div>
            </div>
       
            <div class="tab-pane fades" id="pills-videos" role="tabpanel" aria-labelledby="pills-video-tabs">
                <div class="page-top">
                    <?php include(__DIR__.'/portfolio/video.php');?>
                </div>
            </div>
            
            <div class="tab-pane fade" id="pills-mobile" role="tabpanel" aria-labelledby="pills-mobile-tab">
               <?php include(__DIR__.'/portfolio/app.php');?>
            
            </div>
        </div>





			</div>
		  </div>
		</div>
	  </div>
	</section>
