$(window).scroll(function(){$(window).scrollTop()>=300?$("header").addClass("stickyheader"):$("header").removeClass("stickyheader")}),(new WOW).init(),$(document).scroll(function(){"use strict";var e=$(this).scrollTop();e>200?$(".sticky-container").fadeIn():$(".sticky-container").fadeOut(),e>=70?$(".header-main").addClass("showmenu"):$(".header-main").removeClass("showmenu")}),$(document).ready(function(){"use strict";$(".salecrcle-btn").click(function(){$(".sale-blckfriday, .salecrcle-btn, .sale-box, .uppersale-bx").toggleClass("open")}),window.setTimeout(function(){$(".salecrcle-btn, .salecrcle-btn, .sale-box, .uppersale-bx").toggleClass("open")},6e3),$(".mobile-nav-btn").click(function(){$(".mobile-nav-btn, .mobile-nav, .app-container").toggleClass("active")}),$(".firstlevel li a").click(function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).siblings("ul").slideUp()):($(".firstlevel li a").removeClass("active"),$(this).addClass("active"),$(".dropdown").slideUp(),$(this).siblings("ul").slideDown())}),$(".mainnav > li > a").click(function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).parents("li").children(".firstlevel").slideUp()):($(this).addClass("active"),$(this).parents("li").children(".firstlevel").slideDown(),$(this).parents("li").siblings("li").children("a").removeClass("active"),$(this).parents("li").siblings("li").children(".firstlevel").slideUp())}),$(".cs-slider").slick({dots:!1,arrows:!1,infinite:!0,speed:1e3,slidesToShow:1,autoplay:!0,autoplaySpeed:4e3,adaptiveHeight:!0}),$(".portslider").slick({dots:!0,arrows:!1,infinite:!0,speed:1e3,slidesToShow:1,autoplay:!1,slide:"li",adaptiveHeight:!0}),$(".top-slider").slick({dots:!1,arrows:!1,speed:1e3,slidesToShow:3,autoplay:!0,autoplaySpeed:1e3,adaptiveHeight:!0,responsive:[{breakpoint:767,settings:{dots:!1,arrows:!1,slidesToShow:1,slidesToScroll:1}}]}),$(".clientsslider").slick({dots:!1,arrows:!1,speed:1e3,slidesToShow:5,autoplay:!0,autoplaySpeed:1e3,adaptiveHeight:!0,responsive:[{breakpoint:767,settings:{dots:!0,arrows:!1,slidesToShow:1,slidesToScroll:1}}]}),$(".banslider").slick({dots:!1,arrows:!1,infinite:!0,speed:1e3,autoplay:!0,autoplaySpeed:4e3,adaptiveHeight:!0,fade:!0,cssEase:"linear"}),$(".ctaslider").slick({dots:!1,arrows:!1,infinite:!0,speed:1e3,autoplay:!0,autoplaySpeed:4e3,adaptiveHeight:!0,fade:!0,cssEase:"linear"}),$(".serviceicons").slick({dots:!1,arrows:!1,infinite:!0,speed:1e3,slidesToShow:6,slidesToScroll:1,autoplay:!1,autoplaySpeed:2e3,responsive:[{breakpoint:776,settings:{slidesToShow:2}}]}),$(".csesldr").slick({dots:!0,arrows:!1,infinite:!1,speed:1e3,slidesToShow:1,slidesToScroll:1,autoplay:!0,fade:!0,autoplaySpeed:4e3}),$("").slick({dots:!0,arrows:!1,infinite:!1,speed:1e3,slidesToShow:3,slidesToScroll:1,autoplay:!0,fade:!0,autoplaySpeed:4e3}),$(".testmslider1").slick({dots:!0,arrows:!0,speed:1e3,slidesToShow:3,autoplay:!1,slidesToScroll:1,responsive:[{breakpoint:769,settings:{dots:!0,arrows:!1,autoplay:!1,slidesToShow:1,slidesToScroll:1}}]});var e,s,t,i,o,a=4;function n(){e.css({width:"0%"}),clearTimeout(i),o=0,t=!1,i=setInterval(l,10)}function l(){!1===t&&(o+=1/(a+.1),e.css({width:o+"%"}),o>=100&&(s.slick("slickNext"),n()))}s=$(".home-slider"),e=$(".slider-progress .progress"),$(".slider-wrapper").on({mouseenter:function(){t=!0},mouseleave:function(){t=!1}}),n();var r={dots:!0,arrows:!0,infinite:!0,speed:1e3,slidesToShow:1,autoplay:!0,autoplaySpeed:4e3,adaptiveHeight:!0,prevArrow:$(".prev-btn"),nextArrow:$(".next-btn"),customPaging:function(e,s){return"<a> 0"+(s+1)+"</a>"}};$(".number-slider").slick(r),$(".sliderxs").slick({arrows:!1,dots:!0,autoplay:!0,adaptiveHeight:!0,responsive:[{breakpoint:1e4,settings:"unslick"},{breakpoint:767,settings:{unslick:!0}}]}),$(".testslider").slick({dots:!0,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,speed:500,autoplay:!0,autoplaySpeed:2e3,fade:!0,cssEase:"linear",responsive:[{breakpoint:776,settings:{vertical:!1,arrows:!1}}]});$.each({1:{slider:".packslider"},2:{slider:".boxwrap"}},function(){$(this.slider).slick({arrows:!1,dots:!1,autoplay:!0,settings:"unslick",responsive:[{breakpoint:2e3,settings:"unslick"},{breakpoint:767,settings:{unslick:!0}}]})}),$(".product-slider-gallery").slick({dots:!1,arrows:!1,infinite:!0,slidesToShow:1,slidesToScroll:1,speed:800,autoplay:!0,autoplaySpeed:3e3,asNavFor:".product-gallery-nav"}),$(".product-gallery-nav").slick({dots:!1,arrows:!0,slidesToShow:4,slidesToScroll:1,speed:800,autoplay:!0,autoplaySpeed:3e3,vertical:!0,verticalSwiping:!0,focusOnSelect:!0,asNavFor:".product-slider-gallery",responsive:[{breakpoint:991,settings:{vertical:!1}},{breakpoint:776,settings:{vertical:!1}},{breakpoint:480,settings:{vertical:!1,slidesToShow:2,slidesToScroll:1}}]}),$(".thumb-slider").slick({centerMode:!0,centerPadding:"0px",arrows:!0,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:768,settings:{arrows:!1,dots:!1,centerMode:!0,centerPadding:"10px",slidesToShow:3}},{breakpoint:767,settings:{arrows:!1,dots:!1,centerMode:!1,centerPadding:"10px",slidesToShow:1}},{breakpoint:480,settings:{arrows:!1,dots:!1,centerMode:!0,centerPadding:"10px",slidesToShow:1}}]}),$(".slider-for").slick({dots:!0,arrows:!1,infinite:!0,speed:500,slide:"li",fade:!1,cssEase:"linear",centerMode:!0,slidesToShow:1,variableWidth:!0,autoplay:!0,autoplaySpeed:4e3,responsive:[{breakpoint:800,settings:{arrows:!1,centerMode:!1,centerPadding:"40px",variableWidth:!1,slidesToShow:1,dots:!0},breakpoint:1200,settings:{arrows:!1,centerMode:!1,centerPadding:"40px",variableWidth:!1,slidesToShow:1,dots:!0}}],customPaging:function(e,s){return'<button class="tab">'+$(".thumbsmain li:nth-child("+(s+1)+")").html()+"</button>"}}),$("[data-targetit]").on("click",function(){$(this).siblings().removeClass("current"),$(this).addClass("current");var e=$(this).data("targetit");$("."+e).siblings('[class^="tabs"]').removeClass("current"),$("."+e).addClass("current"),$(".slick-slider").slick("setPosition",0)});var c=decodeURIComponent((new RegExp("[?|&]"+"pack"+"=([^&;]+?)(&|#|;|$)").exec(location.search)||[null,""])[1].replace(/\+/g,"%20"))||null;function d(){jQuery(".accordion .quest-title").removeClass("active"),jQuery(".accordion .quest-content").slideUp(300).removeClass("open")}let u;$("#packages option:eq("+c+")").prop("selected",!0),$("#shakira .box").hover(function(){$(this).hasClass("act")||($(this).hasClass("plogo")&&($("#shakira .box").removeClass("act"),$("#shakira .mainfigure").addClass("logoimg").removeClass("webimg").removeClass("videoimg").removeClass("mobimg"),$(this).addClass("act")),$(this).hasClass("pweb")&&($("#shakira .box").removeClass("act"),$("#shakira .mainfigure").addClass("webimg").removeClass("logoimg").removeClass("videoimg").removeClass("mobimg"),$(this).addClass("act")),$(this).hasClass("pvideo")&&($("#shakira .box").removeClass("act"),$("#shakira .mainfigure").addClass("videoimg").removeClass("webimg").removeClass("logoimg").removeClass("mobimg"),$(this).addClass("act")),$(this).hasClass("pmob")&&($("#shakira .box").removeClass("act"),$("#shakira .mainfigure").addClass("mobimg").removeClass("webimg").removeClass("logoimg").removeClass("videoimg"),$(this).addClass("act")))}),$(".tab-custom .tab-custom-nav a").click(function(e){$(this).closest("li").siblings("li").children("a").removeClass("current"),$(this).addClass("current"),$(this).closest(".tab-custom").children("div.tab-content-panel:not(:hidden)").hide(),$(this.hash).show(),e.preventDefault(),$(".sliderxs").slick("setPosition")}),$(".tabs-custom-nav a").click(function(e){$(this).closest("li").siblings("li").children("a").removeClass("current"),$(this).addClass("current"),$(this.hash).closest(".general").children("div.tab-content-panel:not(:hidden)").hide(),$(this.hash).show(),e.preventDefault(),$(".sliderxs").slick("setPosition")}),$(".accordion .quest-title.active1").addClass("active"),jQuery(".quest-title").click(function(e){var s=jQuery(this).attr("href");jQuery(e.target).is(".active")?d():(d(),jQuery(this).addClass("active"),jQuery(".accordion "+s).slideDown(300).addClass("open")),e.preventDefault()}),$('[data-fancybox="swf-file"]').fancybox({iframe:{css:{width:"336px",height:"280px"}}}),$('[data-fancybox="video-file"]').fancybox({iframe:{css:{width:"580px",height:"340px"}}}),$("#phone-country,#phone-coun").intlTelInput({geoIpLookup:function(e){$.get("https://ipinfo.io",function(){},"jsonp").always(function(s){var t=s&&s.country?s.country:"";e(t),u=s.ip})},initialCountry:"auto",nationalMode:!0,separateDialCode:!0}),setTimeout(function(){$('input[name="cip"]').val(u),$('input[name="pc"]').val($(".selected-dial-code").text()),$('input[name="ctry"]').val($(".country-list .country.active .country-name").text())},3e3),$("body").delegate(".country","click",function(){$('input[name="pc"]').val($(this).find(".dial-code").text()),$('input[name="ctry"]').val($(this).closest("form").find(".country-list .country.active .country-name").text())}),$("body").delegate(".country","click",function(){$('input[name="pc"]').val($(this).find(".dial-code").text());var e=$(".selected-flag").attr("title").toUpperCase().split(":",1)[0];$('input[name="ctry"]').val(e)});var p=jQuery(".car-top");jQuery(window).scroll(function(){jQuery(window).scrollTop()>=200?(p.addClass("show"),p.addClass("car-down")):(p.removeClass("show"),setTimeout(function(){p.removeClass("car-down")},300))}),p.on("click",function(){return jQuery("html,body").animate({scrollTop:0},800),jQuery(this).addClass("car-run"),setTimeout(function(){p.removeClass("car-run")},1e3),!1})});var $gallery=$(".gallery-slider-main"),slideCount=null;function setSlideCount(){"use strict";$(".slide-count-wrap").find(".total").text(slideCount)}function setCurrentSlideNumber(e){"use strict";$(".slide-count-wrap").find(".current").text(e+1)}function setButtonURL(){$zopim.livechat.window.show()}$gallery.on("init",function(e,s){"use strict";slideCount=s.slideCount,setSlideCount(),setCurrentSlideNumber(s.currentSlide)}),$gallery.on("beforeChange",function(e,s,t,i){"use strict";setCurrentSlideNumber(i)}),$("#banform").validate({rules:{username:{required:!0,minlength:2},email:{required:!0,email:!0},agree:"required"},messages:{username:{required:"Please enter a username",minlength:"Your username must consist of at least 2 characters"},email:"Please enter a valid email address"}}),$("#contactForm").validate(),$(function(){"use strict";var e=(new Date).getFullYear();$("#year").html(e)}),$(function(){$.mCustomScrollbar.defaults.theme="light-1",$(".listscroll, .subscription-list,.valuablewrp .maindiv .mainwrp p").mCustomScrollbar({scrollButtons:{enable:!0},callbacks:{onTotalScroll:function(){addContent(this)},onTotalScrollOffset:100,alwaysTriggerOffsets:!1}})}),$(".clickbutton").click(function(){$(".floatbutton").toggleClass("active")}),$(".book-call-now").click(function(){$(".book-call-ys-layer").fadeIn(),$(".book-call-ys-container").fadeIn(),$(".book-call-ys-popup-content").fadeIn()}),$(".book-callbtn").click(function(){$(".book-call-ys-layer").fadeIn(),$(".book-call-ys-container").fadeIn(),$(".book-call-ys-popup-content").fadeIn()}),$(".book-call-ys-popup-close").click(function(){$(".book-call-ys-layer").fadeOut(),$(".book-call-ys-container").fadeOut(),$(".book-call-ys-popup-content").fadeOut()}),function(e){"use strict";window.ysExit=function(e){var s={width:"40%",height:"",target:"#ys-container",cookieValidity:1,closeOnOutsideClick:!0,delay:0,debug:!1},t=function(e){var t={};return Object.keys(s).forEach(function(i){t[i]=e.hasOwnProperty(i)?e[i]:s[i]}),t}(e),i=document.querySelector(t.target),o=document.querySelector(".ys-layer"),a=document.querySelector(t.target+" .ys-popup-close"),n=document.querySelector(t.target+" .ys-box"),l=document.querySelector(t.target+" .ys-exit"),r=function(e,s,t){var i=[e+"="+s];if(t){var o=new Date;o.setTime(o.getTime()+24*t*3600*1e3),i.push("expires="+o.toGMTString())}i.push("path=/"),document.cookie=i.join("; ")},c={active:!1,mouseLeftWindow:function(e){(e=e||window.event).relatedTarget||e.toElement},setDimension:function(e,s){-1===s.toString().indexOf("%")&&(s+="px"),n.style[e]=s},attachEvents:function(){function e(e){c.destroy(),e.preventDefault()}a.addEventListener("click",e),l.addEventListener("click",e),t.closeOnOutsideClick&&(i.addEventListener("click",e),n.addEventListener("click",function(e){e.stopPropagation()})),this.active=!0},detachEvents:function(){document.removeEventListener("mouseout",c.mouseLeftWindow)},open:function(){var e=this;i.classList.add("visible"),o.classList.add("visible"),e.detachEvents(),setTimeout(function(){e.setDimension("width",t.width),e.setDimension("height",t.height)},20),setTimeout(function(){i.classList.add("finished")},200)},destroy:function(){this.active&&(c.detachEvents(),setTimeout(function(){i.parentNode.removeChild(i),o.classList.remove("visible")},200),t.debug||r("ysExit",1,t.cookieValidity))}};function d(e,s){return function(){s.apply(e,arguments)}}if(!function(e){var s,t=e+"=",i=document.cookie.split(";");for(s=0;s<i.length;s++){var o=i[s].trim();if(0===o.indexOf(t))return o.substring(t.length)}return null}(t.cookieIdentifier)){if("number"!=typeof t.delay)throw new Error("options.delay must be a numeric value");if(!i)throw new Error("Could not find element with selector: "+t.target);if(i.parentNode!==document.body)throw new Error(t.target+" element must be placed directly inside of the <body> element");setTimeout(d(c,c.attachEvents),t.delay)}return{open:d(c,c.open),destroy:d(c,c.destroy),getElement:function(){return i}}}}();var options={debug:!0};1==$.cookie("ysExit")||ysExit(options);