
<script src="assets/js/mlib.js"></script> 



<script src="assets/js/functions.js"></script> 

<!--Start of Zendesk Chat Script-->
<script>



function setButtonURL(){
  javascript:$zopim.livechat.window.show();
  }

</script>
<!--End of Zendesk Chat Script-->




<!-- <script src="../cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script> -->

<script>
var options = {
debug: false,
}







if ($.cookie('ysExit') == 1)
     {

     }
else{
 ysExit(options);
}



$(document).on("click",".ys-container",function(){
  // var element=$(".ys-box");
 if($(event.target).closest(".ys-popup-content").length != 1){
    $('.ys-layer').removeClass("visible");
         $('.ys-container').removeClass("visible");
         $('.ys-container').removeClass("finished");
    // alert('element is a child of the custom controller');
 }


  
});



setTimeout(function(){
    // console.log("asdasdsa");   
         $('.ys-layer').addClass("visible");
         $('.ys-container').addClass("visible");
         $('.ys-container').addClass("finished");
         // $('.ys-popup-content').fadeIn();


},60000);

$('.modalOpen').click(function(){
  $('#modalForDiscount').modal('show');
})



// $(document).on("click",".ys-container",function(){ 
$(document).on("click",".ys-popup-close.ys-exit",function(){ 

   $(".ys-container").removeClass("visible"); $(".ys-layer").removeClass("visible");

   });
   
   

function isNumberKey(t){var e=t.which?t.which:event.keyCode;return!(e>31&&(e<48||e>57))}
</script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.13.0/dist/sweetalert2.all.min.js"></script>

<?php 
       	if(isset($_REQUEST['successMsg'])){
          if ($_REQUEST['status']==1) {
              echo "<script>Swal.fire({
                  position: 'top-center',
                  icon: 'success',
                  title: '$_REQUEST[successMsg]'
                })</script>";
          } else {
              echo "<script>Swal.fire({
                  position: 'top-center',
                  icon: 'warning',
                  title: '$_REQUEST[successMsg]'
                })</script>";
          }
          
         
      }
      ?>
      
 <script>
setTimeout(function(){  
    // $("#modalForDiscount").modal("show");
    
    $('head').append('<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=b24c63b6-64a3-4e62-b7ee-492f535de0cd"><\/script>');
    $(document).on('click','.liveChat',function(){
        $zopim.livechat.window.show();

    });
    $zopim(function() {
       $zopim.livechat.hideAll();
    });
}, 2000);


$(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
    
    $(".zoom").hover(function(){
		
		$(this).addClass('transition');
	}, function(){
        
		$(this).removeClass('transition');
	});





if(window.location.pathname=="/"){
  $('.home').addClass('active');
}else if(window.location.pathname=="/ecommerce-website-design/"){
  $('.ecommerce').addClass('active');
}else if(window.location.pathname=="/web-app-development/"){
  $('.web').addClass('active');
}else if(window.location.pathname=="/combo-packages/"){
  $('.combo').addClass('active');
}else if(window.location.pathname=="/packages/"){
  $('.packages').addClass('active');
}else if(window.location.pathname=="/portfolio/"){
  $('.portfolio').addClass('active');
}else if(window.location.pathname=="/contact/"){
  $('.contact').addClass('active');
}



</script>


<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "websitevalley",
        "url": "https://www.websitevalley.co.uk/",
        "logo": "https://www.websitevalley.co.uk/img/logo.png",
        "contactPoint": { "@type": "ContactPoint", "telephone": "+442038087061", "contactType": "customer service" },
        "sameAs": ["https://www.facebook.com/websitevalley/", "https://twitter.com/websitevalley", "https://www.instagram.com/websitevalley/", "https://www.linkedin.com/company/websitevalley/"]
    }
</script>
<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "SiteNavigationElement",
        "hasPart": [
            { "@context": "https://schema.org", "@type": "WebPage", "url": "/editing/" },
            { "@context": "https://schema.org", "@type": "WebPage", "url": "/publishing/" },
            { "@context": "https://schema.org", "@type": "WebPage", "url": "/pricing/" },
            { "@context": "https://schema.org", "@type": "WebPage", "url": "/blog/" },
            { "@context": "https://schema.org", "@type": "WebPage", "url": "/contact-us/" }
        ]
    }
</script>
<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 0, "name": "Home", "item": "https://www.websitevalley.co.uk/" },
            { "@type": "ListItem", "position": 1, "name": "websitevalley" }
        ]
    }
</script>