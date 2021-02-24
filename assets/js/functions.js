

// wow start
new WOW().init();
// wow end

$(document).ready(function(){
  jQuery(window).on("load",function() {
//   setTimeout(function(){
  
//   jQuery(".eggoffer").trigger("click");        

//   },5000);
  });

  jQuery(".eggoffer").click(function(){
  // alert();
  // jQuery(".mypopup-wrap").addClass('active');
  jQuery(".mypopup-wrap").css("top","0px");
  jQuery(".overlay-bg").addClass('vis');
  });
  jQuery(".closebutton").click(function(){
  // jQuery(".mypopup-wrap").removeClass('active');
  jQuery(".mypopup-wrap").css("top","-20000px");
  jQuery(".overlay-bg").removeClass('vis');
  });


    

});




$('.eggoffer').click(function(){
    $('.mypopup-wrap').toggle();
});

$('.closebutton').click(function(){
$('.mypopup-wrap').hide();
});







// sticky social
$(document).scroll(function () {
	"use strict";
    var y = $(this).scrollTop();
    if (y > 200) {
        $('.sticky-container').fadeIn();
    } else {
        $('.sticky-container').fadeOut();
    }
    if (y > 5) {
        $('.header-main').addClass('stick');
        
    } else {
        $('.header-main').removeClass('stick');

    }

    if (y > 500) {
      $('.floating_wrap').addClass('visible');
        $('.floatbutton').addClass('visible');
        
        
    } else {
      $('.floating_wrap').removeClass('visible');
        $('.floatbutton').removeClass('visible');
        
    }


    if (y >= 150) {
        
        $(".gototop").fadeIn();
    } else {
        
        $(".gototop").fadeOut();
    }

   

    

}); 
// sticky social end


$('[data-parallaxit]').each(function(){
        var $this = $(this),
        movement = $(this).data('parallax-value');
        $(window).mousemove(function(e) {
            var $win = $(this),
            relX = e.pageX - $(this).offset().left,
            relY = e.pageY - $(this).offset().top;
            
            $this.css({
                'left': (relX - $win.width() / 2) / $win.width() * movement,
                'top': (relY - $win.height() / 2) / $win.height() * movement
            });
            
        });
    });

$(document).ready(function() {
"use strict";

$('.timer').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});



$(document).on("click",".ys-container",function(){
  // var element=$(".ys-box");
 if($(event.target).closest(".ys-popup-content").length != 1){
    $('.ys-layer').removeClass("visible");
         $('.ys-container').removeClass("visible");
         $('.ys-container').removeClass("finished");
    // alert('element is a child of the custom controller');
 }


  
});

/*// setTimeout(function(){
var size_webdesign = $(".loadmoreweb li").length;
    var x=6;
    $('.loadmoreweb .border-box-effect:lt('+x+')').css("display","inline-block");
    $('#loadmoreweb').click(function () {

        x= (x+4 <= size_webdesign) ? x+4 : size_webdesign;
        if(x==size_webdesign){
          $("#loadmoreweb").hide();
        }
        $('.loadmoreweb .border-box-effect:lt('+x+')').css("display","inline-block");
    });



var size_webapp = $(".loadmorewebapp li").length;
    var x=6;
    $('.loadmorewebapp .border-box-effect:lt('+x+')').css("display","inline-block");
    $('#loadmorewebapp').click(function () {

        x= (x+4 <= size_webapp) ? x+4 : size_webapp;
        if(x==size_webapp){
          $("#loadmorewebapp").hide();
        }
        $('.loadmorewebapp .border-box-effect:lt('+x+')').css("display","inline-block");
    });




var size_ecommer = $(".loadmoreecomm li").length;
    var x=6;
    $('.loadmoreecomm .border-box-effect:lt('+x+')').css("display","inline-block");
    $('#loadmoreecomm').click(function () {

        x= (x+4 <= size_ecommer) ? x+4 : size_ecommer;
        if(x==size_ecommer){
          $("#loadmoreecomm").hide();
        }
        $('.loadmoreecomm .border-box-effect:lt('+x+')').css("display","inline-block");
    });




var size_brand = $(".loadmorebrand li").length;
    var x=6;
    $('.loadmorebrand .border-box-effect:lt('+x+')').css("display","inline-block");
    $('#loadmorebrand').click(function () {

        x= (x+4 <= size_brand) ? x+4 : size_brand;
        if(x==size_brand){
          $("#loadmorebrand").hide();
        }
        $('.loadmorebrand .border-box-effect:lt('+x+')').css("display","inline-block");
    });


var size_video = $(".loadmorevideo li").length;
    var x=6;
    $('.loadmorevideo .border-box-effect:lt('+x+')').css("display","inline-block");
    $('#loadmorevideo').click(function () {

        x= (x+4 <= size_video) ? x+4 : size_video;
        if(x==size_video){
          $("#loadmorevideo").hide();
        }
        $('.loadmorevideo .border-box-effect:lt('+x+')').css("display","inline-block");
    });*/

    

// },1000)


 // Tabbing 
    //*****************************
    
    $('[data-targetit]').on('click',function () {
        $(this).siblings().removeClass('current');
        $(this).addClass('current');
        var target = $(this).data('targetit');
        $('.'+target).siblings('[class^="tabs"]').removeClass('current');
        $('.'+target).addClass('current');
    });


$(document).on("click",".gototop",function(){
    $('html, body').animate({
                    scrollTop: $(".header-main").offset().top
                }, 2000);
});

$(".callusnow").click(function(){
        $('.book-call-ys-layer').fadeIn();
        $('.book-call-ys-container').fadeIn();
        $('.book-call-ys-popup-content').fadeIn();
    });

$(".book-callbtn").click(function(){
        $('.book-call-ys-layer').fadeIn();
        $('.book-call-ys-container').fadeIn();
        $('.book-call-ys-popup-content').fadeIn();
    });

    $(".book-call-ys-popup-close").click(function(){
        $('.book-call-ys-layer').fadeOut();
        $('.book-call-ys-container').fadeOut();
        $('.book-call-ys-popup-content').fadeOut();
    });

    


   //*****************************
    // Mobile Navigation
    //*****************************
    $('.mobile-nav-btn').click(function() {
        $('.mobile-nav-btn, .mobile-nav, .app-container').toggleClass('active');
    });


    $('.firstlevel li a').click(function() {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).siblings('ul').slideUp();
        }else{
            $('.firstlevel li a').removeClass('active');
            $(this).addClass('active');
            $('.dropdown').slideUp();
            $(this).siblings('ul').slideDown();
        }
    });

    $('.mainnav > li > a').click(function() {
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).parents('li').children('.firstlevel').slideUp();
        }else{
            $(this).addClass('active');
            $(this).parents('li').children('.firstlevel').slideDown();
            $(this).parents('li').siblings('li').children('a').removeClass('active');
            $(this).parents('li').siblings('li').children('.firstlevel').slideUp();
        }
    }); 

     

$(".banslidee").slick({
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,

    fade: true,
    autoplay: true,
    speed: 1000,
    cssEase: 'linear'

});

$(".mslider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    // fade: true,
    slidesToScroll: 1,
    slidesToShow: 5,
    autoplay: true,
    // speed: 1000,
    // cssEase: 'linear'
    responsive: [
    {
        breakpoint: 767,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        dots:true,
        }
      }
    ]

});

$(".lptesti").slick({
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    // fade: true,
    slidesToScroll: 1,
    slidesToShow:3,
    autoplay: true,
    // speed: 1000,
    // cssEase: 'linear'
    responsive: [
    {
        breakpoint: 767,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        dots:true,
        }
      }
    ]

});


if ($(window).width() < 767) {
  $('.count-slider-for-mobile').slick({
      arrows: false,
      dots: false,
      autoplay: true,
      slidesToScroll: 1,
      slidesToShow:1,
      autoplaySpeed: 2000
  });
}

$('.testslider').slick({
  infinite: true,
  slidesToShow: 2,
  arrows:true,
  dots:false,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
    // dots: true,
    //     arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
      }
    }
  ]

});



$('.web-design-portfolio-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 4000,
        lazyLoad: 'ondemand'
    });









$('.coslider').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    vertical: true,
    autoplaySpeed: 3000
});


$(function() {
  function slickInit() {
    $('').slick({
      infinite: false,
      slidesToShow: 3,
      arrows:true,
      dots:false,
      slidesToScroll: 1,
      responsive: [
    {
      breakpoint: 768,
      settings: {
    // dots: true,
    //     arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
      }
    }
  ]

    });
    
    $('.web-design-portfolio-slider').slick('setPosition');
  }
  slickInit();
  $('a[data-toggle="pill"]').on("shown.bs.tab", function(e) {
    // $(".packagesslider").slick("unslick");
    slickInit();
    $('.portfoliolist, .count-slider-for-mobile').slick('setPosition');
  });

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
});

 

//*****************************
    // Tabbing 
    //*****************************
    
    $('[data-targetit]').on('click',function () {
        $(this).siblings().removeClass('current');
        $(this).addClass('current');
        var target = $(this).data('targetit');
        $('.'+target).siblings('[class^="tabs"]').removeClass('current');
        $('.'+target).addClass('current');
        $('.slick-slider').slick('setPosition', 0);

    });




function getURLParameter(name) {
      return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
    }
    var a=getURLParameter('pack');

    $('#packages option:eq('+ a +')').prop('selected', true);

// var val = location.href.match(/[?&]days=(.*?)(?:$|&)/)[1];   // get params from URL
// $('#days').val(val); 



////// tabs generic (nav and tabs in main div)
$('.tab-custom .tab-custom-nav a').click(function(event){
$(this).closest('li').siblings('li').children('a').removeClass('current');
$(this).addClass('current');
$(this).closest('.tab-custom').children('div.tab-content-panel:not(:hidden)').hide();
$(this.hash).show();
event.preventDefault();
$('.sliderxs').slick('setPosition');
});
////// tabs generic end

////// tabs custom (place nav and tabs anywhere separately)
$('.tabs-custom-nav a').click(function(event){
$(this).closest('li').siblings('li').children('a').removeClass('current');
$(this).addClass('current');
$(this.hash).closest('.general').children('div.tab-content-panel:not(:hidden)').hide();
$(this.hash).show();
event.preventDefault();
$('.sliderxs').slick('setPosition');
});
////// tabs custom end

////// Accordion 
$('.accordion .quest-title.active1').addClass('active');
// $('#accordion-1').slideDown(300).addClass('open');
function close_accordion_section() {
jQuery('.accordion .quest-title').removeClass('active');
jQuery('.accordion .quest-content').slideUp(300).removeClass('open');
}
jQuery('.quest-title').click(function(e) {
// Grab current anchor value
var currentAttrValue = jQuery(this).attr('href');
if(jQuery(e.target).is('.active')) {
close_accordion_section();
}else {
close_accordion_section();
// Add active class to section title
jQuery(this).addClass('active');
// Open up the hidden content panel
jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
}
e.preventDefault();
});
////// Accordion end 

////// fancybox
$('[data-fancybox="swf-file"]').fancybox({
	iframe : {
		css : {
			width : '336px',
			height : '280px'
		}
	}
});

$('[data-fancybox="video-file"]').fancybox({
	iframe : {
		css : {
			width : '580px',
			height : '340px'
		}
	}
});		
////// fancybox end

// intel Tel Input

// intel Tel Input
let ip; 
let ip_value;
 $("#phone-country,#phone-coun").intlTelInput({
     
      // allowDropdown: false,
      // autoHideDialCode: false,
      // autoPlaceholder: "off",
      // dropdownContainer: "body",
      // excludeCountries: ["us"],
      // formatOnDisplay: false,
    geoIpLookup: function(callback) {
            $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
              var countryCode = (resp && resp.country) ? resp.country : "";
              callback(countryCode);
              ip=resp.ip;
            
              
            });
          },
       initialCountry: "auto",
       nationalMode: true,
       separateDialCode: true,
      // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      // placeholderNumberType: "MOBILE",
      // preferredCountries: ['cn', 'jp'],
     // utilsScript: "<?php echo $basesurl;?>js/utils.js"
    });



setTimeout(function(){
    console.log(ip);
    
    $('input[name="pc"]').val($('.selected-dial-code').text());
   $('input[name="cip"]').val(ip);
    console.log(ip);
    $('input[name="ctry"]').val( $('.country-list .country.active .country-name').text());
}, 3000);






//  $("#phone-country,#phone-coun").intlTelInput({
     
//       // allowDropdown: false,
//       // autoHideDialCode: false,
//       // autoPlaceholder: "off",
//       // dropdownContainer: "body",
//       // excludeCountries: ["us"],
//       // formatOnDisplay: false,
//    geoIpLookup: function(callback) {
//   $.ajax({
//       url: 'https://telize-v1.p.mashape.com/geoip',
//       type: 'GET',
//       data: {},
//       dataType: 'json',
//       success: function (data) {
//         var countryCode = (data && data.country_code) ? data.country_code : "";
        
//         callback(countryCode);
//       },
//       error: function (err) {
//         //alert("")
//       },
//       beforeSend: function (xhr) {
//         xhr.setRequestHeader("X-Mashape-Authorization", "qKsg8tYMdTmshjZ0eSZznAWBhwOFp1huvy7jsnNg3rhw4x8SGD"); // Enter here your Mashape key
//       }
//     }); 
//      },
//        initialCountry: "auto",
//        nationalMode: true,
//        separateDialCode: true,
//       // onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
//       // placeholderNumberType: "MOBILE",
//       // preferredCountries: ['cn', 'jp'],
//      // utilsScript: "<?php echo $basesurl;?>js/utils.js"
//     });



// setTimeout(function(){
//     $('input[name="pc"]').val($('.selected-dial-code').text());
//     $('input[name="ctry"]').val( $('.country-list .country.active .country-name').text());
// }, 3000);


$('body').delegate('.country','click',function(){
$('input[name="pc"]').val($(this).find('.dial-code').text());

var oldString2=$('.selected-flag').attr('title').toUpperCase();
  var newString12 = oldString2.split(':',1)[0];
               $('input[name="ctry"]').val(newString12);
 });

 



}); // document ready end
 


// validate contact form on keyup and submit
    $("#banform").validate({
      rules: {
        username: {
          required: true,
          minlength: 2
        },
        email: {
          required: true,
          email: true
        },
        agree: "required"
      },
      messages: {
        username: {
          required: "Please enter a username",
          minlength: "Your username must consist of at least 2 characters"
        },
        email: "Please enter a valid email address"
      }
    });

    $("#contactForm").validate();



////// footer year
$(function(){
"use strict";
var theYear = new Date().getFullYear();
$('#year').html(theYear);
});	


function setButtonURL(){
 javascript:$zopim.livechat.window.show();
 }

$(function(){
//Slim Scroller
    
        $.mCustomScrollbar.defaults.theme="light-1"; //set "light-2" as the default theme
        $(".list-scroll,.subscription-list").mCustomScrollbar({
            scrollButtons:{
                enable:true
            },
            callbacks:{
                onTotalScroll:function(){ addContent(this) },
                onTotalScrollOffset:100,
                alwaysTriggerOffsets:false
            }
        });

    
}); 





$(document).ready(function(){
    $(".clickbutton").click(function(){
        $('.floatbutton').toggleClass("active");
        $('.crossplus').toggleClass("rotate");
    });

    $(".topformswitch").click(function(){
        $('.topformwrap').toggleClass("active");
    });
});



$(".smth-scrl").click(function (){
  var currentdt=$(this).attr("data-nav");
               $('html, body').animate({
                   scrollTop: $("#btm-frm").offset().top
               }, 2000);
});



$(".sldrtstmnl").slick({
    dots: false,
    arrows: true,
    centerMode:true,
    centerPadding:'120px 0 0',
    speed: 1000,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 767,
      settings: {
    dots: true,
        arrows: false,
        centerMode:false,
        autoplay: true
      }
    }
  ]
    });





//=========== EXIT POPUP FUNCTION START
// var val = location.href.match(/[?&]days=(.*?)(?:$|&)/)[1];   // get params from URL
// $('#days').val(val);
(function(w) {
    "use strict";
    w.ysExit = function(o) {
        var defaults = {
                width: '40%', //popup width
                height: '', //popup height
                target: '#ys-container', //popup selector
                cookieValidity: 1, //days
                closeOnOutsideClick: true, //close popup if user clicks outside
                delay: 0, //delay in ms until the popup is registered
                debug: false //if true, the cookie will not be set
                
            },
            options = fixOptions(o),
            element = document.querySelector(options.target),
            layer   = document.querySelector('.ys-layer'),
            closeBt = document.querySelector(options.target + ' .ys-popup-close'),
            inner = document.querySelector(options.target + ' .ys-box'),
            exitBt = document.querySelector(options.target + ' .ys-exit'),
            //cookies management helper
            cookies = {
                set: function(name, value, days) {
                    var components = [name + '=' + value];
                    if (days) {
                        var date = new Date();
                        date.setTime(date.getTime() + (days * 24 * 3600 * 1000));
                        components.push('expires=' + date.toGMTString());
                    }
                    
                    components.push('path=/');
                    document.cookie = components.join('; ');
                },
                get: function(name) {
                    var start = name + '=',
                        arr = document.cookie.split(';'),
                        i;
                    for(i = 0; i < arr.length; i++) {
                        var item = arr[i].trim();
                        
                        if (item.indexOf(start) === 0){
                            return item.substring(start.length);
                        }
                    }
                    return null;
                }
            },
            //the popup object
            pop = {
                active: false,
                mouseLeftWindow: function(e) {
                    var from, to;
                    
                    e = e ? e : window.event;
                    from = e.relatedTarget || e.toElement;
                    if (!from || from.nodeName === "HTML") {
                        pop.open();
                    }
                },
                setDimension: function(dimension, value) {
                    if (value.toString().indexOf('%') === -1) {
                        value = value + 'px';
                    }
                    
                    inner.style[dimension] = value;
                },
                attachEvents: function() {
                    function close(e) {
                        pop.destroy();
                        e.preventDefault();
                    }
                    
                    document.addEventListener('mouseout', pop.mouseLeftWindow, false);
                    closeBt.addEventListener('click', close);
                    exitBt.addEventListener('click', close);
                    
                    if (options.closeOnOutsideClick) {
                        element.addEventListener('click', close);
                        inner.addEventListener('click', function(e) {
                            e.stopPropagation();
                        });
                    }
                    
                    this.active = true;
                },
                detachEvents: function() {
                    document.removeEventListener('mouseout', pop.mouseLeftWindow);
                },
                open: function() {
                    var self = this;
                    
                    element.classList.add('visible');
                    layer.classList.add('visible');
                    self.detachEvents();
                    setTimeout(function() {
                        self.setDimension('width', options.width);
                        self.setDimension('height', options.height);
                    }, 20);
                    setTimeout(function() {
                        element.classList.add('finished');
                    }, 200);
                },
                destroy: function() {
                    if (this.active) {
                        pop.detachEvents();
                        setTimeout(function () {
                            element.parentNode.removeChild(element);
                            layer.classList.remove('visible');
                        }, 200);
                        
                        if (!options.debug) {
                            cookies.set('ysExit', 1, options.cookieValidity);
                        }
                    }
                }
            };
        
        //helper functions
        function fixOptions(options) {
            var newOptions = {};
            
            Object.keys(defaults).forEach(function(key) {
                newOptions[key] = options.hasOwnProperty(key) ? options[key] : defaults[key];
            });
            
            return newOptions;
        }
        
        function delegate(obj, func) {
            return function() {
                func.apply(obj, arguments);
            };
        }
        
        //start logic
        if (!cookies.get(options.cookieIdentifier)) {
            if (typeof options.delay !== 'number') {
                throw new Error('options.delay must be a numeric value');
            }
            if (!element) {
                throw new Error('Could not find element with selector: ' + options.target);
            }
            
            if (element.parentNode !== document.body) {
                throw new Error(options.target + ' element must be placed directly inside of the <body> element');
            }
            
            setTimeout(delegate(pop, pop.attachEvents), options.delay);
        }
        
        //return object with public interface
        return {
            open: delegate(pop, pop.open),
            destroy: delegate(pop, pop.destroy),
            getElement: function() {
                return element;
            }
        };
    };
})(window);
var options = {
debug: false,
}
if ($.cookie('ysExit') == 1)
     {
     }
else{
 ysExit(options);
}

