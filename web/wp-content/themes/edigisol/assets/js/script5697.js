var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}


//General Script
jQuery(document).ready(function ($) {

    //carousel Start
    $('.owl-carousel-clientlogos').owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        lazyLoad:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    //carousel End


    //Package Tabs Animation Effect
    if($("#Tabs-animation").length === 1){
        $mainNav2 = $("#Tabs-animation");
        $mainNav2.append("<li id='magic-line-two' role='tab' ></li>");
        $activeLink = $("#Tabs-animation .nav-link.active");

        var $magicLineTwo = $("#magic-line-two");

        setTimeout(function () {
            $magicLineTwo
                .width($($activeLink).parent().outerWidth())
                .height($mainNav2.height())
                .css("left", $($activeLink).position().left)
                .data("origLeft", $($activeLink).position().left)
                .data("origWidth", $($activeLink).outerWidth())
                .data("origColor", $($activeLink).attr("rel"));
        }, 200);
        var elementIsClicked = false; // declare the variable that tracks the state


        $("#Tabs-animation a").on('mouseenter', function () {
            elementIsClicked = false;
            $("#Tabs-animation a").click(function () {
                elementIsClicked = true;
                setTimeout(function () {
                    $magicLineTwo
                        .data("origLeft", $($activeLink).position().left)
                        .data("origWidth", $($activeLink).outerWidth())
                        .data("origColor", $($activeLink).attr("rel"));
                }, 100);
            });

            $el = $(this);
            leftPos = $el.position().left;
            newWidth = $el.parent().width();
            $magicLineTwo.stop().animate({
                left: leftPos,
                width: newWidth,
                backgroundColor: $el.attr("rel")
            });


            if (elementIsClicked === false) {
                $("#Tabs-animation a").on('mouseleave', function () {
                    if ($("#Tabs-animation a").hasClass("active")){
                        $el = $("#Tabs-animation a.active");
                        leftPos = $el.position().left;
                        newWidth = $el.parent().width();
                        $magicLineTwo.stop().animate({
                            left: leftPos,
                            width: newWidth,
                            backgroundColor: $el.attr("rel")
                        });
                    } else {
                        $magicLineTwo.stop().animate({
                            left: $magicLineTwo.data("origLeft"),
                            width: $magicLineTwo.data("origWidth"),
                            backgroundColor: $magicLineTwo.data("origColor")
                        });
                    }
                });
            }
        });

        if (elementIsClicked === true) {
            $el = $(this);
            leftPosCurrent = $el.position().left;
            newWidthCurrent = $el.parent().width();
            var e = $activeLink;
            $magicLineTwo.stop().animate({
                left: leftPosCurrent,
                width: newWidthCurrent,
                backgroundColor: $el.attr("rel")
            });
        };

        $("#Tabs-animation a").on('mouseleave', function () {
            if(elementIsClicked === false) {
                if ($("#Tabs-animation a").hasClass("active")){
                    $el = $(this);
                    leftPos = $el.position().left;
                    newWidth = $el.parent().width();
                    $magicLineTwo.stop().animate({
                        left: leftPos,
                        width: newWidth,
                        backgroundColor: $el.attr("rel")
                    });
                } else{
                    $magicLineTwo.stop().animate({
                        left: $magicLineTwo.data("origLeft"),
                        width: $magicLineTwo.data("origWidth"),
                        backgroundColor: $magicLineTwo.data("origColor")
                    });
                }

            };
        });
    }


    // Reviews Carousel
    $('.owl-carousel-reviews').owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        loop: false,
        margin: 5,
        nav: false,
        dots: true,
        lazyLoad:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
    $('.reviews .owl-carousel-reviews.owl-theme .owl-dots .owl-dot').attr('aria-label','reviews slider navigation')

    //Video Banner's
    if($('.banner').hasClass('video_banner') === true){
        $('header').addClass('video_header');
    }

    //Video Popup
    $('.youtube-vid-btn').on('click', function () {
        var url = $("a[data-toggle='modal']").attr('data-src');

        window.$("#myModal").on('hide.bs.modal', function(){
            $("#cartoonVideo").attr('src', '');
        });
    });
    $('.youtube-vid-btn').on('click', function () {
        var url = $(this).attr('data-src');

        window.$("#myModal").on('show.bs.modal', function(){
            $("#cartoonVideo").attr('src', url);
        }).modal({ show: true });
    });
    //Video Popup End

    //Portfolio Popup
    $('.portfolio-img-btn').on('click', function () {
        window.$("#myModal").on('hide.bs.modal', function(){
            $("#portfolioimg").attr('src', '');
        });
    });

    $('.portfolio-img-btn').on('click', function () {
        var url = $(this).attr('data-src');

        window.$("#myModal").on('show.bs.modal', function(){
            $("#portfolioimg").attr('src', url);
        }).modal({ show: true });
    });
    //Portfolio Popup End

    //Nav dropdown add class
    $('.dropdown > a').addClass('nav-link dropdown-toggle');
    $('.dropdown > a').attr('data-toggle','dropdown');
    $('.dropdown > ul.sub-menu').addClass('dropdown-menu');
    $('.dropdown > ul li a').addClass('dropdown-item');

    //add z-index on container for header
    $('.navbar').parent('.container').css({'position':'relative', 'z-index':'9999999'});
});

//Portfolio Section
jQuery(document).ready(function ($){
    //Portfolia Tabs Animation Effect
    if($("#portfolio-tabs-animation").length === 1){
        $portfolio_mainNav2 = $("#portfolio-tabs-animation");
        $portfolio_mainNav2.append("<li id='portfolio-magic-line-two' role='tab'></li>");
        $portfolio_activeLink = $("#portfolio-tabs-animation .nav-link.active");

        var $magicLineTwo_portfolio = $("#portfolio-magic-line-two");

        setTimeout(function () {
            $magicLineTwo_portfolio
                .width($($portfolio_activeLink).outerWidth())
                .height($portfolio_mainNav2.height())
                .css("left", $($portfolio_activeLink).position().left)
                .data("origLeft", $($portfolio_activeLink).position().left)
                .data("origWidth", $($portfolio_activeLink).outerWidth())
                .data("origColor", $($portfolio_activeLink).attr("rel"));
        }, 100);
        var elementIsClicked = false; // declare the variable that tracks the state


        $("#portfolio-tabs-animation a").on('mouseenter', function () {
            elementIsClicked = false;
            $("#portfolio-tabs-animation a").click(function () {
                elementIsClicked = true;
                setTimeout(function () {
                    $magicLineTwo_portfolio
                        .data("origLeft", $($portfolio_activeLink).position().left)
                        .data("origWidth", $($portfolio_activeLink).outerWidth())
                        .data("origColor", $($portfolio_activeLink).attr("rel"));
                }, 100);
            });

            $portfolio_el = $(this);
            portfolio_leftPos = $portfolio_el.position().left;
            portfolio_newWidth = $portfolio_el.parent().width();
            $magicLineTwo_portfolio.stop().animate({
                left: portfolio_leftPos,
                width: portfolio_newWidth,
                backgroundColor: $portfolio_el.attr("rel")
            });


            if (elementIsClicked === false) {
                $("#portfolio-tabs-animation a").on('mouseleave', function () {
                    if ($("#portfolio-tabs-animation a").hasClass("active")){
                        $portfolio_el = $("#portfolio-tabs-animation a.active");
                        portfolio_leftPos = $portfolio_el.position().left;
                        portfolio_newWidth = $portfolio_el.parent().width();
                        $magicLineTwo_portfolio.stop().animate({
                            left: portfolio_leftPos,
                            width: portfolio_newWidth,
                            backgroundColor: $portfolio_el.attr("rel")
                        });
                    } else {
                        $magicLineTwo_portfolio.stop().animate({
                            left: $magicLineTwo_portfolio.data("origLeft"),
                            width: $magicLineTwo_portfolio.data("origWidth"),
                            backgroundColor: $magicLineTwo_portfolio.data("origColor")
                        });
                    }
                });
            }
        });

        if (elementIsClicked === true) {
            $portfolio_el = $(this);
            portfolio_leftPosCurrent = $portfolio_el.position().left;
            portfolio_newWidthCurrent = $portfolio_el.parent().width();
            var e = $portfolio_activeLink;
            $magicLineTwo_portfolio.stop().animate({
                left: portfolio_leftPosCurrent,
                width: portfolio_newWidthCurrent,
                backgroundColor: $portfolio_el.attr("rel")
            });
        };

        $("#portfolio-tabs-animation a").on('mouseleave', function () {
            if(elementIsClicked === false) {
                if ($("#portfolio-tabs-animation a").hasClass("active")){
                    $portfolio_el = $(this);
                    portfolio_leftPos = $portfolio_el.position().left;
                    portfolio_newWidth = $portfolio_el.parent().width();
                    $magicLineTwo_portfolio.stop().animate({
                        left: portfolio_leftPos,
                        width: portfolio_newWidth,
                        backgroundColor: $portfolio_el.attr("rel")
                    });
                } else{
                    $magicLineTwo_portfolio.stop().animate({
                        left: $magicLineTwo_portfolio.data("origLeft"),
                        width: $magicLineTwo_portfolio.data("origWidth"),
                        backgroundColor: $magicLineTwo_portfolio.data("origColor")
                    });
                }

            };
        });
    }


    //Portfolio Carousel
    $('.owl-carousel-Portfolio-rtl').owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        lazyLoad:true,
        rtl:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    $('.owl-carousel-Portfolio').owlCarousel({
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        loop: true,
        margin: 20,
        nav: false,
        lazyLoad:true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    //Packages Carousel
    $('.owl-carousel-Packages').owlCarousel({
        autoplay: false,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        loop: false,
        margin: 20,
        nav: true,
        dots: false,
        lazyLoad:true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});

//ProgressBar
jQuery(document).ready(function ($) {
    /*** Add class for Fixed navigation on scroll ***/
    $(window).scroll(function (event) {
        var y = $(this).scrollTop();
        if (y >= 664) {
            $('nav.navbar').addClass('fixed-top');
        }
        else if (y <= 663)
        {
            $('nav.navbar').removeClass('fixed-top');
        }
    });

    if ( $('body').hasClass('home')) {

    } else {
        /*** animation on scroll of progress bar ***/
        // debugger;
        if($('.why-us').length === 1){
            $(window).scroll(function (event) {
                var y = $(this).scrollTop();
                var div_height = ($('.why-us').offset().top) - 50;

                if (y >= div_height) {
                    var Animation = function (animationBar, percentage) {
                        this.animationBar = animationBar;
                        this.percentage = percentage;
                        this.animationArray = null;
                        this.animationOffset = null;
                        this.labelArray = null;
                        this.percentageArray = null;
                        this.index = 0;


                        this.initialize();
                        // $(window).scroll(function () {
                        //     var y = $(this).scrollTop();
                        //     if (y >= 5000) {
                        //
                        //     }
                        // });

                    };

                    Animation.prototype.initialize = function () {
                        this.animationArray = document.getElementsByClassName(this.percentage);

                        if (this.animationOffset === null) this.animationOffset = [];

                        if (this.labelArray === null) this.labelArray = [];

                        if (this.percentageArray === null) this.percentageArray = [];

                        this.setUpElements();
                    };

                    Animation.prototype.setUpElements = function () {
                        for (var i = 0; i < this.animationArray.length; i++) {
                            var elem = this.animationArray[i],
                                offset =
                                    elem.offsetTop +
                                    document.getElementsByClassName(this.percentage)[0].clientHeight,
                                percentage = $(this.animationArray[i]).data(this.percentage);

                            this.animationOffset.push(offset);
                            this.percentageArray.push(percentage);

                            $(this.animationArray[i])
                                .find(".label span")
                                .html("" + percentage + "%");
                        }

                        this.attachListeners();
                    };

                    Animation.prototype.attachListeners = function () {
                        $(window).on("scroll", this.onWindowScroll.bind(this));
                    };

                    Animation.prototype.onWindowScroll = function () {
                        for (var i = 0; i < this.animationArray.length; i++) {
                            if (
                                window.pageYOffset >=
                                this.animationOffset[this.index] - window.innerHeight
                            ) {
                                this.showElement();
                                this.index++;
                            } else return;
                        }
                    };

                    Animation.prototype.showElement = function () {
                        var element = document.getElementsByClassName(this.percentage)[this.index];
                        element.className += " show";
                        this.animateBar(element, this.percentageArray[this.index]);
                    };

                    Animation.prototype.animateBar = function (element, width) {
                        var $element = $(element),
                            className = " p" + width;

                        $element.find(this.animationBar).addClass(className);
                        $element.find('.label').addClass(className);
                    };

                    new Animation(".animation-bar", "percentage");
                }
            });
        }


        /*** Add class for animation on scroll ***/
        if($('.procedure_section').length === 1){
            $(window).scroll(function (event) {
                var y = $(this).scrollTop();
                var div_height = ($('.procedure_section').offset().top) - 50;

                if (y >= div_height) {
                    $('.procedure-process .svg').addClass('active');
                    $('.procedure-process .icon').addClass('active');
                    $('.procedure-process .conuter').addClass('active');

                    setTimeout(function(){
                        $('.procedure-process-2 .svg').addClass('active');
                        $('.procedure-process-2 .icon').addClass('active');
                        $('.procedure-process-2 .conuter').addClass('active');

                    }, 500)
                    setTimeout(function(){
                        $('.procedure-process-3 .svg').addClass('active');
                        $('.procedure-process-3 .icon').addClass('active');
                        $('.procedure-process-3 .conuter').addClass('active');
                    }, 800)

                }
                else
                {
                    $('.procedure-process .svg').removeClass('active');
                    $('.procedure-process .icon').removeClass('active');
                    $('.procedure-process .conuter').removeClass('active');
                    $('.procedure-process-2 .svg').removeClass('active');
                    $('.procedure-process-2 .icon').removeClass('active');
                    $('.procedure-process-2 .conuter').removeClass('active');
                    $('.procedure-process-3 .svg').removeClass('active');
                    $('.procedure-process-3 .icon').removeClass('active');
                    $('.procedure-process-3 .conuter').removeClass('active');

                }
            });
        }
    }

});

jQuery(document).ready(function($){
    var $customerName = $('#wpforms-401-field_7').val();
    var $cusotmeremail = $('#wpforms-401-field_10').val();
    var $customerPhone = $('#wpforms-401-field_12').val();
    var $customerService = $('#wpforms-401-field_11').val();
    var $customerQty = $('#wpforms-401-field_9').val();
    var $customerDeadline = $('#wpforms-401-field_13').val();


    $('#customerName').text($customerName);
    $('#customerEmail').text($cusotmeremail);
    $('#customerPhone').text($customerPhone);
    $('#customerService').text($customerService);
    $('#customerQuantity').text($customerQty);
    $('.totalPayment').text($customerQty);
    $('#customerDeadline').text($customerDeadline);
    $('#wpforms-401-field_19').val('$ ' + $customerQty+'.00');
    $('#wpforms-401-field_19').attr('value','$ ' + $customerQty+'.00');
});

jQuery(function($){
    $('.wpf-num-limit input').attr({'min':0}); // Define number limits
});