<script src="assets/js/mlib.js"></script> 
<script>
if (window.innerWidth < 767) {
    $('.ttff').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1399,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false

                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
}
</script>

<script>
    $('form').submit(function(){
        $(this).find('button').attr("disabled",true);
        $(this).find('input[type="submit"]').attr("disabled",true);
        $(this).find('button[type="submit"]').attr("disabled",true);
        $(this).submit();
    });
</script>
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

          <\/script>
  `);
}, 10000);

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

$('.modalOpen1').click(function(){
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
    
    $('head').append('<script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=5fe575df-6fd0-413e-b12c-daccdb6b0bfb"><\/script>');
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


<script src="https://code.jquery.com/jquery-3.6.0.min.js"
    integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
    integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous">
  </script>
  <script type="text/javascript" src="https://unpkg.com/default-passive-events"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
    integrity=" sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous">
  </script>
  <!-- <script src="js/main.js"></script> -->
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.13.0/dist/sweetalert2.all.min.js"></script>

  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"> -->
  <link href="https://cdn.jsdelivr.net/npm/smartwizard@5/dist/css/smart_wizard_all.min.css" rel="stylesheet"
    type="text/css" />
  <script src="https://cdn.jsdelivr.net/npm/smartwizard@5/dist/js/jquery.smartWizard.min.js" type="text/javascript">
  </script>
  <script src="https://cdn.jsdelivr.net/npm/smartwizard@5/dist/js/jquery.smartWizard.min.js" type="text/javascript">
  </script>

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
    $(".btn-theme-outline, .modalOpen, .hello_buddy").click(function () {
      $("#modalSteper").modal("show")
      $('#stepwizard').smartWizard({
        hiddenSteps: []
      });
    })
    $(document).ready(function () {
      $("#otherSelectionBox").on('click', function () {
        $("#others-req").prop('checked', true);
      })
      $("#otherSelectionBox").on('keyup', function () {
        let value = $(this).val();
        $("#others-req").val(value);
      })

      $("#other-step2-input").on('click', function () {
        $("#other-step2").prop('checked', true);
      })
      $("#other-step2-input").on('keyup', function () {
        let value = $(this).val();
        $("#other-step2").val(value);
      })

      $("#step3-input").on('click', function () {
        $("#step3-radio").prop('checked', true);
      })
      $("#step3-input").on('keyup', function () {
        let value = $(this).val();
        $("#step3-radio").val(value);
      })

      $("#step4-input").on('click', function () {
        $("#step4-radio").prop('checked', true);
      })
      $("#step4-input").on('keyup', function () {
        let value = $(this).val();
        $("#step4-radio").val(value);
      })

      $("#step5-input").on('click', function () {
        $("#step5-radio").prop('checked', true);
      })
      $("#step5-input").on('keyup', function () {
        let value = $(this).val();
        $("#step5-radio").val(value);
      })
      $('#modalSteper .close').click(function () {
        window.history.pushState({}, "", "/");
        $('#modalSteper').modal('hide');
      })

      // setTimeout(() => {
      //   $('#modalSteper').modal('show');
      //   $('#stepwizard').smartWizard({
      //     hiddenSteps: []
      //   });

      // }, 10000);

      $("#stepwizard").on("stepContent", function (e, anchorObject, currentStepIndex, nextStepIndex,
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



    $(function () {
      $("input[name='other1']").click(function () {
        $('.other1').removeAttr("disabled");
      });
    });

    $('form').submit(function () {
      $(this).find('button').attr("disabled", true);
      $(this).find('input[type="submit"]').attr("disabled", true);
      $(this).find('button[type="submit"]').attr("disabled", true);
      $(this).submit();
    });
  </script>





<script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "websitevalley",
        "url": "https://www.websitevalley.co.uk/",
        "logo": "https://www.websitevalley.co.uk/assets/images/logo.png",
        "contactPoint": { "@type": "ContactPoint", "telephone": "020 3930 1277", "contactType": "customer service" },
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