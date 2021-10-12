<script src="assets/js/mlib.js"></script> 
<script>

	  var check = true;
$(window).scroll(function (event) {
	    var scroll = $(window).scrollTop();
      var headContent = `<link href="https://fonts.googleapis.com/css?family=Poppins:400,600,800,900&amp;display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous">
      
      <script src="assets/js/functions.js"><\/script> 


      `;
      if (scroll>80) {
        if(check == true){
         $('head').append(headContent);
        
        }
        check = false;
	    }
	});

setTimeout(() => {
  $('head').append(`
  <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TMM78JN');<\/script>
<!-- End Google Tag Manager -->
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.13.0/dist/sweetalert2.all.min.js"><\/script>

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
      <script src="https://rawgit.com/RobinHerbots/jquery.inputmask/3.x/dist/jquery.inputmask.bundle.js"><\/script>
      <script>
                
          $(document).ready(function() {
            $(".phone").keyup(function () {
              $(this).attr("value", $(this).val());
              if ($(this).val().length > 2) {
                var twoNumbers = $(this).val().substr(0, 2);
                if (twoNumbers == 33 || twoNumbers == 55 || twoNumbers == 81) {
                  console.log("First: " + twoNumbers);
                  $(".phone").inputmask({
                    mask: "99-9999-9999"
                  });
                } else {
                  console.log("Second: " + twoNumbers);
                  $(".phone").inputmask({
                    mask: "999-999-9999"
                  });
                }
              }
            });
          });

      </script>
  `);
  alert('helo')
}, 10000);

</script>


<!--Start of Zendesk Chat Script-->
<script>



function setButtonURL(){
  javascript:$zopim.livechat.window.show();
  }

</script>
<!--End of Zendesk Chat Script-->




<script>
var options = {
debug: false,
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

      
 <script>
setTimeout(function(){  
    // $("#modalForDiscount").modal("show");
    
    $('head').append('<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=b24c63b6-64a3-4e62-b7ee-492f535de0cd"><\/script>');
    $(document).on('click','.liveChat',function(){
        $zopim.livechat.window.show();

    });
    
}, 10000);


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
}else if(window.location.pathname=="/ecommerce-web-development/"){
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
        "logo": "https://www.websitevalley.co.uk/assets/images/logo.png",
        "contactPoint": { "@type": "ContactPoint", "telephone": "+442038087061", "contactType": "customer service" },
        "sameAs": ["https://www.facebook.com/websitevalley/", "https://twitter.com/websitevalley", "https://www.instagram.com/websitevalley/", "https://www.linkedin.com/company/websitevalley/"]
    }
</script>
<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "SiteNavigationElement",
        "hasPart": [
            { "@context": "https://schema.org", "@type": "WebPage", "url": "/web-design-development/" },
            { "@context": "https://schema.org", "@type": "WebPage", "url": "/ecommerce-web-development/" },
            { "@context": "https://schema.org", "@type": "WebPage", "url": "/web-app-development/" },
            { "@context": "https://schema.org", "@type": "WebPage", "url": "/mobile-app-development/" },
            { "@context": "https://schema.org", "@type": "WebPage", "url": "/branding/" },
            { "@context": "https://schema.org", "@type": "WebPage", "url": "/blog/" }
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