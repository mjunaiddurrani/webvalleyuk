$(".test_slider").slick({
  arrows: false,
  infinite: true,
  speed:300,
  autoplay:true,
  slidesToShow: 1,
  slidesToScroll: 1
});

$('.ser_slider').slick({
  dots: false,
  arrows:true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  autoplay: true,
  centerMode: true,
  centerPadding: '180px',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
        arrows: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        centerPadding: '0px',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplaySpeed: 2000,
        autoplay: true
      }
    }
  ]
});

  function setButtonURL() {

        $zopim.livechat.window.show();

    }

    function toggleChat() {

        $zopim.livechat.window.show();

    }
    
    zE(function() {
        $zopim.livechat.setOnUnreadMsgs(function(numUnread) {
            if (numUnread > 0 && !$zopim.livechat.window.getDisplay()) {
                $zopim.livechat.window.show();
            }
        })
    });

    function setButtonURL() {
        $zopim.livechat.window.show();
    }

    function toggleChat() {

        $zopim.livechat.window.show();
    }
    
   
    zE(function() {
        zE.activate();
    });


 $(".popupBtn").click(function() {
        $('.bg-overlay').css('display', 'block')
        $("#popupform1").css("display", 'inline-block');
        $("body").addClass('popupOpened')
    })
    $(".fancybox-close-small").click(function() {
        $('.bg-overlay').css('display', 'none')
        $("#popupform1").hide();
        $("body").removeClass('popupOpened')
    })



// PRICING start
$('.pricing-slider').slick({
    dots: true,
    arrows: true,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
              centerMode: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.fold_slider').slick({
    dots: false,
    arrows: false,
    dots: false,
    speed: 9000,
    rtl: true,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 6,
  slidesToScroll: 1,
  variableWidth: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// PRICING END





// SERVICE SLIDER start
$('.core_value_slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 100,
   centerMode: true,
  centerPadding: '80px',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        autoplay: false,
        centerPadding: '0px',
        arrows: false
      }
    }
  ]
});

// SERVICE SLIDER end


// SERVICE SLIDER start
$('.techno_slider').slick({
  dots: false,
  arrows:true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 100,
  // centerMode: true,
  centerPadding: '80px',
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        autoplay: false,
        centerPadding: '0px',
        arrows: false
      }
    }
  ]
});




// blogslider start
$('.technology_slider').slick({
  dots: true,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false
      }
    }
  ]
});

// blogslider end

// blogslider start
$('.reviews_slider').slick({
  dots: false,
  arrows:true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});

// blogslider end

// product slider jas start

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true
});
// product slider jas end

// simple slick slider start
$(".regular").slick({
  dots: true,
  infinite: true,
  speed:300,
  autoplay:true,
  slidesToShow: 3,
  slidesToScroll: 3
});
$(".showcase_slider").slick({
  centerMode:true,
  centerPadding:'399PX',
  dots: true,
  arrows: false,
  infinite: true,
  speed:300,
  autoplay:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1030,
      settings: {
        slidesToShow: 1,
        
        slidesToScroll: 1,
      
        centerPadding: '150px',
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: '0',
        arrows: false,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: '0',
        arrows: false,
        dots: false
      }
    }
  ]
});

$(".review_slider").slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed:300,
  autoplay:true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: '0',
        arrows: false,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots: false
      }
    }
  ]
});

// simple slick slider end

// wow animation js

$(function () {
    new WOW().init();
  });


// responsive menu js

$(function () {
  $('#menu').slicknav();
});



// slick slider in tabs js start

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += "active";
}


// slick slider in tabs js end



const bg1 = $('.carousel-inner');
const windowWidth1 = window.innerWidth / 2;
const windowHeight1 = window.innerHeight / 2;

bg1.on('mousemove', (e) => {
    const mouseX1 = e.clientX / windowWidth1;
    const mouseY1 = e.clientY / windowHeight1;

    $('.x-banner').css('transform', 'translate(' + mouseX1 + 'pc, ' + mouseY1 + 'pc)');
    $('.x-banner3').css('transform', 'translate(' + mouseX1 + 'pc, ' + mouseY1 + 'pc)');
    $('.sml-b2b1').css('transform', 'translate(' + mouseX1 + 'pc, ' + mouseY1 + 'pc)');
    // $('.sml-b2b').css('transform', 'translate(-' + mouseX1 + 'pc, -' + mouseY1 + 'pc)');
    // bg.style.backgroundPosition = `(-${mouseX}%, -${mouseY}%)`;
});



const bg = $('.carousel-inner');
const windowWidth = window.innerWidth / 2;
const windowHeight = window.innerHeight / 2;

bg.on('mousemove', (e) => {
    const mouseX = e.clientX / windowWidth;
    const mouseY = e.clientY / windowHeight;

    $('.x-banner2').css('transform', 'translate(-' + mouseX + 'pc, -' + mouseY + 'pc)');
    // bg.style.backgroundPosition = `(-${mouseX}%, -${mouseY}%)`;
});


const bg2 = $('.web_design_sec');
const windowWidth2 = window.innerWidth / 1;
const windowHeight2 = window.innerHeight / 1;

bg2.on('mousemove', (e) => {
    const mouseX2 = e.clientX / windowWidth2;
    const mouseY2 = e.clientY / windowHeight2;

    $('.web_design2').css('transform', 'translate(-' + mouseX2 + 'pc, -' + mouseY2 + 'pc)');
    $('.web_design_mate').css('transform', 'translate(-' + mouseX2 + 'pc, -' + mouseY2 + 'pc)');
    $('.web_design_cloud').css('transform', 'translate(-' + mouseX2 + 'pc, -' + mouseY2 + 'pc)');
    $('.img3').css('transform', 'translate(-' + mouseX2 + 'pc, -' + mouseY2 + 'pc)');
    $('.img1').css('transform', 'translate(' + mouseX2 + 'pc, ' + mouseY2 + 'pc)');
    $('.img4').css('transform', 'translate(-' + mouseX2 + 'pc, -' + mouseY2 + 'pc)');
    // $('.tools-left').css('transform', 'translate(-' + mouseX2 + 'pc, -' + mouseY2 + 'pc)');
    // bg.style.backgroundPosition = `(-${mouseX}%, -${mouseY}%)`;
});


const bg3 = $('.dev_plane_sec');
const windowWidth3 = window.innerWidth / 2;
const windowHeight3 = window.innerHeight / 2;

bg3.on('mousemove', (e) => {
    const mouseX3 = e.clientX / windowWidth3;
    const mouseY3 = e.clientY / windowHeight3;

    $('.d_plan1').css('transform', 'translate(-' + mouseX3 + 'pc, -' + mouseY3 + 'pc)');
    $('.d_plan2').css('transform', 'translate(' + mouseX3 + 'pc, ' + mouseY3 + 'pc)');
    // bg.style.backgroundPosition = `(-${mouseX}%, -${mouseY}%)`;
});


const bg4 = $('.value_sec');
const windowWidth4 = window.innerWidth / 2;
const windowHeight4 = window.innerHeight / 2;

bg4.on('mousemove', (e) => {
    const mouseX4 = e.clientX / windowWidth4;
    const mouseY4 = e.clientY / windowHeight4;

    $('.value_target').css('transform', 'translate(-' + mouseX4 + 'pc, -' + mouseY4 + 'pc)');
    // $('.tools-left').css('transform', 'translate(' + mouseX4 + 'pc, ' + mouseY4 + 'pc)');
    // bg.style.backgroundPosition = `(-${mouseX}%, -${mouseY}%)`;
});


const bg5 = $('.testimonials');
const windowWidth5 = window.innerWidth / 2;
const windowHeight5 = window.innerHeight / 2;

bg5.on('mousemove', (e) => {
    const mouseX5 = e.clientX / windowWidth5;
    const mouseY5 = e.clientY / windowHeight5;

    $('.testi_user').css('transform', 'translate(-' + mouseX5 + 'pc, -' + mouseY5 + 'pc)');
    // bg.style.backgroundPosition = `(-${mouseX}%, -${mouseY}%)`;
});


const bg6 = $('.speak-sec');
const windowWidth6 = window.innerWidth / 2;
const windowHeight6 = window.innerHeight / 2;

bg6.on('mousemove', (e) => {
    const mouseX6 = e.clientX / windowWidth6;
    const mouseY6 = e.clientY / windowHeight6;

    $('.form_cloud').css('transform', 'translate(-' + mouseX6 + 'pc, -' + mouseY6 + 'pc)');
    $('.form_cloud_bottom').css('transform', 'translate(-' + mouseX6 + 'pc, -' + mouseY6 + 'pc)');
    // bg.style.backgroundPosition = `(-${mouseX}%, -${mouseY}%)`;
});

const bg7 = $('.building-relation');
const windowWidth7 = window.innerWidth / 2;
const windowHeight7 = window.innerHeight / 2;

bg7.on('mousemove', (e) => {
    const mouseX7 = e.clientX / windowWidth7;
    const mouseY7 = e.clientY / windowHeight7;

    $('.lasntg2').css('transform', 'translate(-' + mouseX7 + 'pc, -' + mouseY7 + 'pc)');
    $('.lasntg3').css('transform', 'translate(-' + mouseX7 + 'pc, -' + mouseY7 + 'pc)');
    $('.lasntg4').css('transform', 'translate(-' + mouseX7 + 'pc, -' + mouseY7 + 'pc)');
    // bg.style.backgroundPosition = `(-${mouseX}%, -${mouseY}%)`;
});
const bg9 = $('.inner_contact');
const windowWidth9 = window.innerWidth / 2;
const windowHeight9  = window.innerHeight / 2;

bg9.on('mousemove', (e) => {
    const mouseX9 = e.clientX / windowWidth7;
    const mouseY9 = e.clientY / windowHeight7;

    $('.con1').css('transform', 'translate(-' + mouseX9 + 'pc, -' + mouseY9 + 'pc)');
    $('.con2').css('transform', 'translate(-' + mouseX9 + 'pc, -' + mouseY9 + 'pc)');
    $('.con2').css('transform', 'translate(-' + mouseX9 + 'pc, -' + mouseY9 + 'pc)');
    // bg.style.backgroundPosition = `(-${mouseX}%, -${mouseY}%)`;
});



const bg8 = $('.app_devv');
const windowWidth8 = window.innerWidth / 2;
const windowHeight8 = window.innerHeight / 2;

bg8.on('mousemove', (e) => {
    const mouseX8 = e.clientX / windowWidth8;
    const mouseY8 = e.clientY / windowHeight8;

    // $('.tools-left').css('transform', 'translate(' + mouseX8 + 'pc, ' + mouseY8 + 'pc)');
    // $('.theme_images2').css('transform', 'translate(-' + mouseX8 + 'pc, -' + mouseY8 + 'pc)');
    $('.theme_images3').css('transform', 'translate(-' + mouseX8 + 'pc, -' + mouseY8 + 'pc)');
});

const bg10 = $('.benefits-b2b');
const windowWidth10 = window.innerWidth / 2;
const windowHeight10 = window.innerHeight / 2;

bg10.on('mousemove', (e) => {
    const mouseX10 = e.clientX / windowWidth10;
    const mouseY10 = e.clientY / windowHeight10;

    $('.benefit-3').css('transform', 'translate(' + mouseX10 + 'pc, ' + mouseY10 + 'pc)');
    // $('.theme_images2').css('transform', 'translate(-' + mouseX9 + 'pc, -' + mouseY9 + 'pc)');
    $('.benefit-2').css('transform', 'translate(-' + mouseX10 + 'pc, -' + mouseY10 + 'pc)');
});


const bg11 = $('.types_of');
const windowWidth11 = window.innerWidth / 2;
const windowHeight11 = window.innerHeight / 2;

bg11.on('mousemove', (e) => {
    const mouseX11 = e.clientX / windowWidth11;
    const mouseY11 = e.clientY / windowHeight11;

    $('.theme_images2').css('transform', 'translate(' + mouseX11 + 'pc, ' + mouseY11 + 'pc)');
});





// gsap.set(".ball", {xPercent: -50, yPercent: -50});

// const ball = document.querySelector(".ball");
// const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
// const mouse = { x: pos.x, y: pos.y };
// const speed = 0.35;

// const xSet = gsap.quickSetter(ball, "x", "px");
// const ySet = gsap.quickSetter(ball, "y", "px");

// window.addEventListener("mousemove", e => {    
//   mouse.x = e.x;
//   mouse.y = e.y;  
// });

// gsap.ticker.add(() => {
  
//   // adjust speed for higher refresh monitors
//   const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()); 
  
//   pos.x += (mouse.x - pos.x) * dt;
//   pos.y += (mouse.y - pos.y) * dt;
//   xSet(pos.x);
//   ySet(pos.y);
// });

// $('h2,h1,a,button').mouseover(function(){
//   $('.ball').css('width','90px').css('height','90px');
// })
// $('h2,h1,a,button').mouseout(function(){
//   $('.ball').css('width','30px').css('height','30px');
// })











let loops = gsap.utils.toArray('.text-single').map((line, i) => {
    const links = line.querySelectorAll(".js-text"),
    tl = horizontalLoop(links, {
              repeat: -1, 
              speed: 1 + i * 0.5,
        draggable: true,
              reversed: false,
              paddingRight: parseFloat(gsap.getProperty(links[0], "marginRight", "px"))
          });
  links.forEach(link => {
    link.addEventListener("mouseenter", () => gsap.to(tl, {timeScale: 0, overwrite: true}));
    link.addEventListener("mouseleave", () => gsap.to(tl, {timeScale: i ? -1 : 1, overwrite: true}));
  });
});

let currentScroll = 0;
let scrollDirection = 1;

window.addEventListener("scroll", () => {
  let direction = (window.pageYOffset > currentScroll) ? 1 : -1;
  if (direction !== scrollDirection) {
      loops.forEach(tl => gsap.to(tl, {timeScale: direction, overwrite: true}));
      scrollDirection = direction;
  }
  currentScroll = window.pageYOffset;
});


/*
This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.

Features:
 - Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
 - When each item animates to the left or right enough, it will loop back to the other side
 - Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean),  repeat, reversed, and paddingRight.
 - The returned timeline will have the following methods added to it:
   - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
   - current() - returns the current index (if an animation is in-progress, it reflects the final index)
   - times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
 */
function horizontalLoop(items, config) {
	items = gsap.utils.toArray(items);
	config = config || {};
	let tl = gsap.timeline({repeat: config.repeat, paused: config.paused, defaults: {ease: "none"}, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)}),
		length = items.length,
		startX = items[0].offsetLeft,
		times = [],
		widths = [],
		xPercents = [],
		curIndex = 0,
		pixelsPerSecond = (config.speed || 1) * 100,
		snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
		populateWidths = () => items.forEach((el, i) => {
      widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
      xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / widths[i] * 100 + gsap.getProperty(el, "xPercent"));
    }),
    getTotalWidth = () => items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * gsap.getProperty(items[length-1], "scaleX") + (parseFloat(config.paddingRight) || 0),
      totalWidth, curX, distanceToStart, distanceToLoop, item, i;
	populateWidths();
  gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
		xPercent: i => xPercents[i]
	});
	gsap.set(items, {x: 0});
	totalWidth = getTotalWidth();
	for (i = 0; i < length; i++) {
		item = items[i];
		curX = xPercents[i] / 100 * widths[i];
		distanceToStart = item.offsetLeft + curX - startX;
		distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
		tl.to(item, {xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond}, 0)
		  .fromTo(item, {xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100)}, {xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false}, distanceToLoop / pixelsPerSecond)
		  .add("label" + i, distanceToStart / pixelsPerSecond);
		times[i] = distanceToStart / pixelsPerSecond;
	}
	function toIndex(index, vars) {
		vars = vars || {};
		(Math.abs(index - curIndex) > length / 0.3) && (index += index > curIndex ? -length : length); // always go in the shortest direction
		let newIndex = gsap.utils.wrap(0, length, index),
			time = times[newIndex];
		if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
			vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
			time += tl.duration() * (index > curIndex ? 1 : -1);
		}
		curIndex = newIndex;
		vars.overwrite = true;
		return tl.tweenTo(time, vars);
	}
	tl.next = vars => toIndex(curIndex+1, vars);
	tl.previous = vars => toIndex(curIndex-1, vars);
	tl.current = () => curIndex;
	tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.updateIndex = () => curIndex = Math.round(tl.progress() * (items.length - 1));
	tl.times = times;
  tl.progress(1, true).progress(0, true); // pre-render for performance
  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }
  if (config.draggable && typeof(Draggable) === "function") {
    let proxy = document.createElement("div"),
        wrap = gsap.utils.wrap(0, 1),
        ratio, startProgress, draggable, dragSnap, roundFactor,
        align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
        syncIndex = () => tl.updateIndex();
    typeof(InertiaPlugin) === "undefined" && console.warn("InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club");
    draggable = Draggable.create(proxy, {
      trigger: items[0].parentNode,
      type: "x",
      onPress() {
        startProgress = tl.progress();
        tl.progress(0);
        populateWidths();
        totalWidth = getTotalWidth();
        ratio = 1 / totalWidth;
        dragSnap = totalWidth / items.length;
        roundFactor = Math.pow(10, ((dragSnap + "").split(".")[1] || "").length);
        tl.progress(startProgress);
      },
      onDrag: align,
      onThrowUpdate: align,
      inertia: true,
      snap: value => {
        let n = Math.round(parseFloat(value) / dragSnap) * dragSnap * roundFactor;
        return (n - n % 1) / roundFactor;
      },
      onRelease: syncIndex,
      onThrowComplete: () => gsap.set(proxy, {x: 0}) && syncIndex()
    })[0];
  }
  
	return tl;
}

// b2b-sc_mb_slider

$(document).ready(function(){
   
    if (window.matchMedia('(max-width: 767px)').matches) {
         $('.b2b-sc_mb_slider').removeClass('row')
         
         
         $('.mobile_state_slider').removeClass('row')
         
         
    $(".b2b-sc_mb_slider").slick({
     arrows: false,
     dots: false,
     infinite: true,
    speed:300,
    autoplay:true,
     slidesToShow: 1,
    slidesToScroll: 1,
  
});
    $(".mobile_state_slider").slick({
     arrows: false,
     dots: false,
     infinite: true,
    speed:300,
    autoplay:true,
     slidesToShow: 1,
    slidesToScroll: 1,
  
});



    } 
    else {
        //...
    }
});

$('[data-tab]').on('click', function () {
    $(this).siblings().removeClass('curr-tab');
    $(this).addClass('curr-tab');
    var target = $(this).data('tab');
    $('.' + target).siblings('[class^="cus-tabs"]').removeClass('curr-tab');
    $('.' + target).addClass('curr-tab');
});





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