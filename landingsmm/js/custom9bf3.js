
      
      $('#send-ppc').click(function(){
        var name = $('#ppc-name').val();
        var email = $('#ppc-email').val();
        var phone = $('#ppc-phone').val();
        var country = $('#ppc-country').val();
        var msg = $('#ppc-msg').val();
       
        if(name=='' || email=='' || phone=='' || country=='' || msg == '')
        {
            $.notify("Email Not Sent: Kindly Fill the form properly.", {align:"center", verticalAlign:"top"});
            
        }
        else
        {
            
            var data = $('.CrudFr').serialize();
              var url = 'https://logodesigntown.com/js/sendmail';
              var res = AjaxRequest(url,data);
              console.log(res);
              if(res.status==1)
              {
                document.getElementById("ppc-name").value='';
                document.getElementById("ppc-email").value='';
                document.getElementById("ppc-name").value='';
                document.getElementById("ppc-phone").value='';
                document.getElementById("ppc-country").value='';
                document.getElementById("ppc-msg").value='';
                return gtag_report_conversion('https://logodesigntown.com/thank-you');
              }
        }
        
              
          
      })


function AjaxRequest(url,data)
{
	var res;
	$.ajax({
        url: url,
        data: data,
        async: false,
        error: function() {
        console.log('error');
        },
        dataType: 'json',
        success: function(data) {
        res= data;	
       
        },
        type: 'POST'
        });

	return res;
}
$(function () {
    $('#datetimepicker1').datetimepicker();
});
 function showvisible() {
    $("img").each(function () {
        var s = $(this).visible("partial"),
            e = $(this);
        e.prop("complete") || e.on("load", function () {}), s && $(this).attr("src", $(this).data("url"));
    });
}

// BEGIN: RESPONSIVE NAVBAR       
// $(function() {
//     $(".navbar-nav li > a").each(function() {
//         var href = $(this).attr('href');
//         var heading = $(this).text();
//         $('.sidenav').append('<a href="' + href + '">' + heading + '<\/a>');
//     });
// });

// $('.navbar-nav').clone().appendTo(".sidenav");


function openNav() {
    document.getElementById("mySidenav").style.left = "0px";
}
function closeNav() {
    document.getElementById("mySidenav").style.left = "-250px";
}
// END: RESPONSIVE NAVBAR 

// AOS ANIMATION
$(document).ready(function(){
AOS.init();
});
// AOS ANIMATION



//------Menu Fixed JS------//

$(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('header').addClass('menu_fixed animated fadeInDown');
    } else {
      $('header').removeClass('menu_fixed animated fadeInDown');
    }
  });
//------Menu Fixed JS------//


// Counter Function Begin //

$(window).scroll(function() {
  $('.counter').each(function() {
  var $this = $(this),
  countTo = $this.attr('data-count');
  $({ countNum: $this.text()}).animate({
  countNum: countTo
  },
    {
    duration: 3000,
    easing:'linear',
      step: function() {
      $this.text(Math.floor(this.countNum));
      },
      complete: function() {
      $this.text(this.countNum);
      //alert('finished');
      }

    });
  });
})

// Counter Function End //


//=========== FLOATING FORM STARTS
  $(".clickbutton").click(function(){
   $('.floatbutton').toggleClass("active");
   //$('.crossplus').toggleClass("rotate");
});
//=========== FLOATING FORM ENDS




const inner = document.querySelector(".blue-inner");
const section = document.querySelector("#all-section");

window.onscroll = function() {
//   let value = window.pageYOffset / section.offsetTop + 1;
//   inner.style.transform = `scale(${value})`;
};


$(function(){
  
  var $window = $(window);    //Window object
  
  var scrollTime = 1;     //Scroll time
  var scrollDistance = 100;   //Distance. Use smaller value for shorter scroll and greater value for longer scroll
    
  $window.on("mousewheel DOMMouseScroll", function(event){
     
                    
    var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop - parseInt(delta*scrollDistance);
      

          
  });
  
});






$(window).on("load", function() {
     $('#load-wrapp').fadeToggle("slow")
});


$('.js-tilt').tilt();







var btn = $('.backtop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  $('html, body').animate({scrollTop:0}, '300');
});




const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".combo_pacages_sec",
    start: "top center",
    end: "center top",
    scrub:2

   

  }
});

const pa = gsap.timeline({
  scrollTrigger: {
    trigger: ".get_consultancy_sec",
    start: "center bottom",
    end: "center top",
    scrub:2

   

  }
});

tl.to(".left_img_btm", {yPercent: 100, duration: 2})
tl.to(".left_img_btm", {yPercent: 200, duration: 2})



pa.to(".consultancy_right_btm", {y: 50, duration: 2})
pa.to(".consultancy_right_btm", {y: 300, duration: 2})
// $('.hover-effect').hover(function(){
//   $(this).find('.dropdown-menu').addClass('show');
//   $(this).removeClass('hover-effect');
//   $(this).addClass('hover-effect-out');
// })
// $('.hover-effect-out').hover(function(){
//   $(this).find('.dropdown-menu').removeClass('show');
//   $(this).addClass('hover-effect');
//   $(this).removeClass('hover-effect-out');
// })




AOS.init({
disable: function() {
var maxWidth = 800;
return window.innerWidth < maxWidth;
}
});


//=========== LAZY LOAD IMAGES


document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})




//=========== LAZY LOAD IMAGES






