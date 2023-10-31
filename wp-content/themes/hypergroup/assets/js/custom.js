/*
| ----------------------------------------------------------------------------------
| TABLE OF CONTENT
| ----------------------------------------------------------------------------------
-SETTING
-Preloader
-Scroll Animation
-Parallax(Stellar)
-Animated Entrances
-Chars Start
-Loader blocks
-Accordion
-Tooltip
-Zoom Images
-Isotope filter
-Select customization
-Main slider
-OWL Sliders
-Image animation
*/





let i=2;


        $(document).ready(function(){
        var radius = 200;
        var fields = $('.itemDot');
        var container = $('.dotCircle');
        var width = container.width();
        radius = width/2.5;

        var height = container.height();
        var angle = 0, step = (2*Math.PI) / fields.length;
        fields.each(function() {
        var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
        var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
        if(window.console) {
        // console.log($(this).text(), x, y);
        }

        $(this).css({
        left: x + 'px',
        top: y + 'px'
        });
        angle += step;
        });


        $('.itemDot').click(function(){

        var dataTab= $(this).data("tab");
        $('.itemDot').removeClass('active');
        $(this).addClass('active');
        $('.CirItem').removeClass('active');
        $( '.CirItem'+ dataTab).addClass('active');
        i=dataTab;

        $('.dotCircle').css({
        "transform":"rotate("+(360-(i-1)*36)+"deg)",
        "transition":"2s"
        });
        $('.itemDot').css({
        "transform":"rotate("+((i-1)*36)+"deg)",
        "transition":"1s"
        });


        });

        setInterval(function(){
        var dataTab= $('.itemDot.active').data("tab");
        if(dataTab>10||i>10){
        dataTab=1;
        i=1;
        }
        $('.itemDot').removeClass('active');
        $('[data-tab="'+i+'"]').addClass('active');
        $('.CirItem').removeClass('active');
        $( '.CirItem'+i).addClass('active');
        i++;


        $('.dotCircle').css({
        "transform":"rotate("+(360-(i-2)*36)+"deg)",
        "transition":"2s"
        });
        $('.itemDot').css({
        "transform":"rotate("+((i-2)*36)+"deg)",
        "transition":"1s"
        });

        }, 5000);

        });
    $(document).ready(function(event) {
        $('ul.nav-pills .nav-item .nav-link').click(function(event){
             event.preventDefault();
           $('ul.nav-pills .nav-item .nav-link').removeClass('active');   // it remove all the active links
           $(this).addClass('active');    // it adds active class to the current link you have opened
            
            var href = $(this).attr('href');
            href = href.replace('#','');

            $('.tab-content .tab-pane').removeClass('show');
            $('.tab-content .tab-pane').removeClass('active');
            // console.log('#pills-tabContent .tab-pane #'+href);
            $('#pills-tabContent .tab-pane').each(function() {
                  var id = $(this).attr('id');
                  if(id == href){
                    jQuery(this).addClass('show');
                    jQuery(this).addClass('active');
                  }
            });
        })

    });


$(".brand-logo-grid").owlCarousel({
            margin: 10,
            dots: false,
            loop: true,
            autoplayTimeout: 8000,
            autoplay:true,
            nav: true,
            navText: ['<i class="fal fa-long-arrow-left"></i>', '<i class="fal fa-long-arrow-right"></i>'],
            navContainer: '.brand-wrapper .brand-carousel-nav',
            responsive : {
                // breakpoint from 0 up
                0 : {
                    items: 1,
                },
                767 : {
                    items: 2
                },
                991 : {
                    items: 3
                },
                // breakpoint from 992 up
                1191 : {
                    items: 5
                }
            }
        });




    $(document).ready(function() {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    });
    $(document).ready(function() {
        $('.image-link').magnificPopup({type:'image'});
            $('.popup_link').magnificPopup({
              type: 'image'
              // other options
            });
        

    });

$(document).ready(function() {

    "use strict";
    /*********************
        BEE 3D Carousel

    **********************/
      var pageURL = $(location).attr("href");


      if (pageURL.indexOf("contact-us") === -1) {
          
        var clients = document.getElementById('clients-gallery');
      
        var slider_clients = new Bee3D(clients, {
            effect: 'wave',
            listeners: { // <-- added here
              keys: true,
              touches:true,
              drag:true,
              clicks:true,
            },
            navigation: {
                enabled: true,
                next:'.bee3D--nav__next',
                prev:'.bee3D--nav__prev',
            },
            autoplay: {
                enabled:true,
                pauseHover:true,
            },
            loop: {
                enabled:true,
                continuous:true,
            }
          });

        var partners = document.getElementById('partners-gallery');
      
        var slider_partners = new Bee3D(partners, {
            effect: 'wave',
            listeners: { // <-- added here
              keys: true,
              touches:true,
              drag:true,
              clicks:true,
            },
            navigation: {
                enabled: true,
                next:'.bee3D--nav__next',
                prev:'.bee3D--nav__prev',
            },
            autoplay: {
                enabled:true,
                pauseHover:true,
            },
            loop: {
                enabled:true,
                continuous:true,
            }
          });

         // var partners_logo = document.getElementById('logo-part');
      
         // var logo_partners = new Bee3D(partners_logo, {
         //    effect: 'wave',
         //    listeners: { // <-- added here
         //      keys: true,
         //      touches:true,
         //      drag:true,
         //      clicks:true,
         //    },
         //    navigation: {
         //        enabled: true,
         //        next:'.bee3D--nav__next',
         //        prev:'.bee3D--nav__prev',
         //    },
         //    autoplay: {
         //        enabled:true,
         //        pauseHover:true,
         //    },
         //    loop: {
         //        enabled:true,
         //        continuous:true,
         //    }
         //  });
      }
      


    /////////////////////////////////////////////////////////////////
    // Underline magic
    /////////////////////////////////////////////////////////////////

    // VARIABLES
    const magicalUnderlines = Array.from(document.querySelectorAll('.underline--magical'));

    const gradientAPI = 'https://gist.githubusercontent.com/wking-io/3e116c0e5675c8bcad8b5a6dc6ca5344/raw/4e783ce3ad0bcd98811c6531e40256b8feeb8fc8/gradient.json';

    // HELPER FUNCTIONS

    // 1. Get random number in range. Used to get random index from array.
    const randNumInRange = max => Math.floor(Math.random() * (max - 1));

    // 2. Merge two separate array values at the same index to 
    // be the same value in new array.
    const mergeArrays = (arrOne, arrTwo) => arrOne.
    map((item, i) => `${item} ${arrTwo[i]}`).
    join(', ');

    // 3. Curried function to add a background to array of elms
    const addBackground = elms => color => {
      elms.forEach(el => {
        el.style.backgroundImage = color;
      });
    };
    // 4. Function to get data from API
    const getData = async url => {
      const response = await fetch(url);
      const data = await response.json();
      return data.data;
    };

    // 5. Partial Application of addBackground to always apply 
    // background to the magicalUnderlines constant
    const addBackgroundToUnderlines = addBackground(magicalUnderlines);

    // GRADIENT FUNCTIONS

    // 1. Build CSS formatted linear-gradient from API data
    const buildGradient = obj => `linear-gradient(${obj.direction}, ${mergeArrays(obj.colors, obj.positions)})`;

    // 2. Get single gradient from data pulled in array and
    // apply single gradient to a callback function
    const applyGradient = async (url, callback) => {
      const data = await getData(url);
      const gradient = buildGradient(data[randNumInRange(data.length)]);
      callback(gradient);
    };

    // RESULT
    applyGradient(gradientAPI, addBackgroundToUnderlines);



    /////////////////////////////////////////////////////////////////
    // LOADER
    /////////////////////////////////////////////////////////////////



    $('.yamm  a , .b-title-page__list li a , .breadcrumb a').on("click", function(e) {



        e.preventDefault();

        $('.screen-loader').removeClass("screen-start");
        $('.screen-loader').addClass("screen-end");
        $('.loading').removeClass("loading-hide");

        setTimeout(screenerGo, 2000);

        function loadingHide() {


            $('.loading').removeClass("loading-hide");

        }

        var goTo = this.getAttribute("href");
        setTimeout(function() {
            window.location = goTo;
        }, 700);



        setTimeout(loadingHide, 1400);

    });




    var $preloader = $('#page-preloader'),
        $spinner = $preloader.find('.spinner-loader');
    $spinner.fadeOut();
    $preloader.delay(50).fadeOut('slow');




    function screenerGo() {


        $('.screen-loader').removeClass("screen-end");
        $('.screen-loader').addClass("screen-start");


    }

    setTimeout(screenerGo, 1500);


    function loadingHide() {


        $('.loading').addClass("loading-hide");

    }

    setTimeout(loadingHide, 2300);




    /////////////////////////////////////
    //  Scroll Animation
    /////////////////////////////////////


    if ($('.scrollreveal').length > 0) {
        window.sr = ScrollReveal({
            reset: true,
            duration: 1000,
            delay: 200
        });

        sr.reveal('.scrollreveal');
    }

    /**
     * Portfolio sticky menu
     */




    $(".sticky-bar").stick_in_parent();
 



    //////////////////////////////
    // Parallax(Stellar)
    //////////////////////////////

    if ($('.stellar').length > 0) {
        $.stellar({
            responsive: true
        });
    }


    /////////////////////////////////////
    //  Chars Start
    /////////////////////////////////////


    if ($('body').length) {
        $(window).on('scroll', function() {
            var winH = $(window).scrollTop();

            $('.b-progress-list').waypoint(function() {
                $('.js-chart').each(function() {
                    CharsStart();
                });
            }, {
                offset: '80%'
            });
        });
    }


    function CharsStart() {

        $('.js-chart').easyPieChart({
            barColor: false,
            trackColor: false,
            scaleColor: false,
            scaleLength: false,
            lineCap: false,
            lineWidth: false,
            size: false,
            animate: 5000,

            onStep: function(from, to, percent) {
                $(this.el).find('.js-percent').text(Math.round(percent));
            }
        });
    }




    /////////////////////////////////////
    //  Loader blocks
    /////////////////////////////////////


    $(".js-scroll-next").on("click", function() {

        var hiddenContent = $(".js-scroll-next + .js-scroll-content");

        $(".js-scroll-next").hide();
        hiddenContent.show();
        hiddenContent.addClass("animated");
        hiddenContent.addClass("animation-done");
        hiddenContent.addClass("bounceInUp");

    });



    /////////////////////////////////////////////////////////////////
    // Accordion
    /////////////////////////////////////////////////////////////////

    $(".btn-collapse").on('click', function() {
        $(this).parents('.panel-group').children('.panel').removeClass('panel-default');
        $(this).parents('.panel').addClass('panel-default');
        if ($(this).is(".collapsed")) {
            $('.panel-title').removeClass('panel-passive');
        } else {
            $(this).next().toggleClass('panel-passive');
        };
    });




    /////////////////////////////////////
    //  Tooltip
    /////////////////////////////////////


    $('.link-tooltip-1').tooltip({
        template: '<div class="tooltip tooltip-1" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    });
    $('.link-tooltip-2').tooltip({
        template: '<div class="tooltip tooltip-2" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    });





    /////////////////////////////////////
    //  Zoom Images
    /////////////////////////////////////



    if ($('.js-zoom-gallery').length > 0) {
        $('.js-zoom-gallery').each(function() { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: '.js-zoom-gallery__item', // the selector for gallery item
                type: 'image',
                gallery: {
                    enabled: true
                },
                mainClass: 'mfp-with-zoom', // this class is for CSS animation below

                zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it

                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function

                    // The "opener" function should return the element from which popup will be zoomed in
                    // and to which popup will be scaled down
                    // By defailt it looks for an image tag:
                    opener: function(openerElement) {
                        // openerElement is the element on which popup was initialized, in this case its <a> tag
                        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
            });
        });
    }


    if ($('.js-zoom-images').length > 0) {
        $('.js-zoom-images').magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom', // this class is for CSS animation below

            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                // The "opener" function should return the element from which popup will be zoomed in
                // and to which popup will be scaled down
                // By defailt it looks for an image tag:
                opener: function(openerElement) {
                    // openerElement is the element on which popup was initialized, in this case its <a> tag
                    // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });

    }



    if ($('.popup-youtube').length > 0) {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });
    }
    if ($('.popup-img').length > 0) {
        $('.popup-img').magnificPopup({
            type:'image',
            closeBtnInside: false,
            closeOnContentClick: false,
          
            callbacks: {
              open: function() {
                var self = this;
                self.wrap.on('click.pinhandler', 'img', function() {
                  self.wrap.toggleClass('mfp-force-scrollbars');
                });
              },
              beforeClose: function() {
                    this.wrap.off('click.pinhandler');
                this.wrap.removeClass('mfp-force-scrollbars');
              }
            },
             
            image: {
                    verticalFit: false
                }
                });
    }


    ////////////////////////////////////////////
    // ISOTOPE FILTER
    ///////////////////////////////////////////


    if ($('.b-isotope').length > 0) {

        var $container = $('.b-isotope-grid');

        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                columnWidth: '.grid-sizer'
            }
        });
        // layout Isotope after each image loads
        $grid.imagesLoaded().progress(function() {
            $grid.isotope('layout');
        });

        // filter items when filter link is clicked
        $('.b-isotope-filter a').on('click', function() {
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector
            });
            return false;
        });

        $('.b-isotope-filter a').on('click', function() {
            $('.b-isotope-filter').find('.current').removeClass('current');
            $(this).parent().addClass('current');
        });
    }




    /////////////////////////////////////
    // Select customization
    /////////////////////////////////////

    if ($('.selectpicker').length > 0) {

        $('.selectpicker').selectpicker({
            style: 'ui-select'
        });
    }



    ////////////////////////////////////////////
    // Main slider
    ///////////////////////////////////////////


    if ($('#main-slider').length > 0) {

        var sliderWidth = $("#main-slider").data("slider-width");
        var sliderHeigth = $("#main-slider").data("slider-height");
        var sliderArrows = $("#main-slider").data("slider-arrows");
        var sliderButtons = $("#main-slider").data("slider-buttons");

        $('#main-slider').sliderPro({
            width: sliderWidth,
            height: sliderHeigth,
            arrows: sliderArrows,
            buttons: sliderButtons,
            fade: true,
            fullScreen: true,
            touchSwipe: false,
            autoplay: false
        });
    }

    /* Typed cursor */


    $(".typed-strings").typed({
        stringsElement: $('.typed-strings ul'),
        typeSpeed: 30,
        backDelay: 500,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
        resetCallback: function() {
            newTyped();
        }
    });


    $(".typed-strings2").typed({
        stringsElement: $('.typed-strings2 ul'),
        typeSpeed: 30,
        backDelay: 500,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: true,
        resetCallback: function() {
            newTyped();
        }
    });




    /////////////////////////////////////
    //  RevealFX Start
    /////////////////////////////////////





    $('#revealfx1').waypoint(function() {



        var rev1 = new RevealFx

            (


            document.querySelector('#revealfx1'), {
                revealSettings: {
                    bgcolor: '#d2b886',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }

            }

        );

        rev1.reveal();


    }, {
        triggerOnce: true,
        offset: '95%'
    });





    $('#revealfx2').waypoint(function() {



        var rev1 = new RevealFx

            (


            document.querySelector('#revealfx2'), {
                revealSettings: {
                    bgcolor: '#d2b886',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }

            }

        );

        rev1.reveal();


    }, {
        triggerOnce: true,
        offset: '95%'
    });



    $('#revealfx3').waypoint(function() {



        var rev1 = new RevealFx

            (


            document.querySelector('#revealfx3'), {
                revealSettings: {
                    bgcolor: '#d2b886',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }

            }

        );

        rev1.reveal();


    }, {
        triggerOnce: true,
        offset: '95%'
    });



    $('#revealfx4').waypoint(function() {



        var rev1 = new RevealFx

            (


            document.querySelector('#revealfx4'), {
                revealSettings: {
                    bgcolor: '#d2b886',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }

            }

        );

        rev1.reveal();


    }, {
        triggerOnce: true,
        offset: '95%'
    });








    $('#revealfx5').waypoint(function() {



        var rev1 = new RevealFx

            (


            document.querySelector('#revealfx5'), {
                revealSettings: {
                    bgcolor: '#d2b886',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }

            }

        );

        rev1.reveal();


    }, {
        triggerOnce: true,
        offset: '95%'
    });






    $('#revealfx6').waypoint(function() {



        var rev1 = new RevealFx

            (


            document.querySelector('#revealfx6'), {
                revealSettings: {
                    bgcolor: '#d2b886',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }

            }

        );

        rev1.reveal();


    }, {
        triggerOnce: true,
        offset: '95%'
    });







    $('#revealfx7').waypoint(function() {



        var rev1 = new RevealFx

            (


            document.querySelector('#revealfx7'), {
                revealSettings: {
                    bgcolor: '#d2b886',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }

            }

        );

        rev1.reveal();


    }, {
        triggerOnce: true,
        offset: '95%'
    });





    $('#revealfx8').waypoint(function() {



        var rev1 = new RevealFx

            (


            document.querySelector('#revealfx8'), {
                revealSettings: {
                    bgcolor: '#d2b886',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }

            }

        );

        rev1.reveal();


    }, {
        triggerOnce: true,
        offset: '95%'
    });


    $('#revealfx8').waypoint(function() {



        var rev1 = new RevealFx

            (


            document.querySelector('#revealfx8'), {
                revealSettings: {
                    bgcolor: '#d2b886',
                    onCover: function(contentEl, revealerEl) {
                        contentEl.style.opacity = 1;
                    }
                }

            }

        );

        rev1.reveal();


    }, {
        triggerOnce: true,
        offset: '95%'
    });


    /////////////////////////////////////
    //  Effect Active
    /////////////////////////////////////  






    $('.effect-active').waypoint(function() {


        $(this).addClass("active");


    }, {
        triggerOnce: true,
        offset: '55%'
    });

    $('.effect-active').on("hover", function() {
        $(this).removeClass("active");
    });









    /////////////////////////////////////////////////////////////////
    // OWL Sliders
    /////////////////////////////////////////////////////////////////

    var Core = {

        initialized: false,

        initialize: function() {

            if (this.initialized) return;
            this.initialized = true;

            this.build();

        },

        build: function() {

            // Owl Carousel

            this.initOwlCarousel();
        },
        initOwlCarousel: function(options) {

            $(".enable-owl-carousel").each(function(i) {
                var $owl = $(this);

                var itemsData = $owl.data('items');
                var navigationData = $owl.data('navigation');
                var paginationData = $owl.data('pagination');
                var singleItemData = $owl.data('single-item');
                var autoPlayData = $owl.data('auto-play');
                var transitionStyleData = $owl.data('transition-style');
                var mainSliderData = $owl.data('main-text-animation');
                var afterInitDelay = $owl.data('after-init-delay');
                var stopOnHoverData = $owl.data('stop-on-hover');
                var min480 = $owl.data('min480');
                var min768 = $owl.data('min768');
                var min992 = $owl.data('min992');
                var min1200 = $owl.data('min1200');

                $owl.owlCarousel({
                    navigation: navigationData,
                    pagination: paginationData,
                    singleItem: singleItemData,
                    autoPlay: autoPlayData,
                    transitionStyle: transitionStyleData,
                    stopOnHover: stopOnHoverData,
                    navigationText: ["<i></i>", "<i></i>"],
                    items: itemsData,
                    itemsCustom: [
                        [0, 1],
                        [465, min480],
                        [750, min768],
                        [975, min992],
                        [1185, min1200]
                    ],
                    afterInit: function(elem) {
                        if (mainSliderData) {
                            setTimeout(function() {
                                $('.main-slider_zoomIn').css('visibility', 'visible').removeClass('zoomIn').addClass('zoomIn');
                                $('.main-slider_fadeInLeft').css('visibility', 'visible').removeClass('fadeInLeft').addClass('fadeInLeft');
                                $('.main-slider_fadeInLeftBig').css('visibility', 'visible').removeClass('fadeInLeftBig').addClass('fadeInLeftBig');
                                $('.main-slider_fadeInRightBig').css('visibility', 'visible').removeClass('fadeInRightBig').addClass('fadeInRightBig');
                            }, afterInitDelay);
                        }
                    },
                    beforeMove: function(elem) {
                        if (mainSliderData) {
                            $('.main-slider_zoomIn').css('visibility', 'hidden').removeClass('zoomIn');
                            $('.main-slider_slideInUp').css('visibility', 'hidden').removeClass('slideInUp');
                            $('.main-slider_fadeInLeft').css('visibility', 'hidden').removeClass('fadeInLeft');
                            $('.main-slider_fadeInRight').css('visibility', 'hidden').removeClass('fadeInRight');
                            $('.main-slider_fadeInLeftBig').css('visibility', 'hidden').removeClass('fadeInLeftBig');
                            $('.main-slider_fadeInRightBig').css('visibility', 'hidden').removeClass('fadeInRightBig');
                        }
                    },
                    afterMove: sliderContentAnimate,
                    afterUpdate: sliderContentAnimate,
                });
            });

            function sliderContentAnimate(elem) {
                var $elem = elem;
                var afterMoveDelay = $elem.data('after-move-delay');
                var mainSliderData = $elem.data('main-text-animation');
                if (mainSliderData) {
                    setTimeout(function() {
                        $('.main-slider_zoomIn').css('visibility', 'visible').addClass('zoomIn');
                        $('.main-slider_slideInUp').css('visibility', 'visible').addClass('slideInUp');
                        $('.main-slider_fadeInLeft').css('visibility', 'visible').addClass('fadeInLeft');
                        $('.main-slider_fadeInRight').css('visibility', 'visible').addClass('fadeInRight');
                        $('.main-slider_fadeInLeftBig').css('visibility', 'visible').addClass('fadeInLeftBig');
                        $('.main-slider_fadeInRightBig').css('visibility', 'visible').addClass('fadeInRightBig');
                    }, afterMoveDelay);
                }
            }
        },

    };

    Core.initialize();


});



////////////////////////////////////////////
// Image animation
///////////////////////////////////////////

(function() {
    var tiltSettings = [{}, {
        movement: {
            imgWrapper: {
                translation: {
                    x: 10,
                    y: 10,
                    z: 30
                },
                rotation: {
                    x: 0,
                    y: -10,
                    z: 0
                },
                reverseAnimation: {
                    duration: 200,
                    easing: 'easeOutQuad'
                }
            },
            lines: {
                translation: {
                    x: 10,
                    y: 10,
                    z: [0, 70]
                },
                rotation: {
                    x: 0,
                    y: 0,
                    z: -2
                },
                reverseAnimation: {
                    duration: 2000,
                    easing: 'easeOutExpo'
                }
            },
            caption: {
                rotation: {
                    x: 0,
                    y: 0,
                    z: 2
                },
                reverseAnimation: {
                    duration: 200,
                    easing: 'easeOutQuad'
                }
            },
            overlay: {
                translation: {
                    x: 10,
                    y: -10,
                    z: 0
                },
                rotation: {
                    x: 0,
                    y: 0,
                    z: 2
                },
                reverseAnimation: {
                    duration: 2000,
                    easing: 'easeOutExpo'
                }
            },
            shine: {
                translation: {
                    x: 100,
                    y: 100,
                    z: 0
                },
                reverseAnimation: {
                    duration: 200,
                    easing: 'easeOutQuad'
                }
            }
        }
    }, {
        movement: {
            imgWrapper: {
                rotation: {
                    x: -5,
                    y: 10,
                    z: 0
                },
                reverseAnimation: {
                    duration: 900,
                    easing: 'easeOutCubic'
                }
            },
            caption: {
                translation: {
                    x: 30,
                    y: 30,
                    z: [0, 40]
                },
                rotation: {
                    x: [0, 15],
                    y: 0,
                    z: 0
                },
                reverseAnimation: {
                    duration: 1200,
                    easing: 'easeOutExpo'
                }
            },
            overlay: {
                translation: {
                    x: 10,
                    y: 10,
                    z: [0, 20]
                },
                reverseAnimation: {
                    duration: 1000,
                    easing: 'easeOutExpo'
                }
            },
            shine: {
                translation: {
                    x: 100,
                    y: 100,
                    z: 0
                },
                reverseAnimation: {
                    duration: 900,
                    easing: 'easeOutCubic'
                }
            }
        }
    }, {
        movement: {
            imgWrapper: {
                rotation: {
                    x: -5,
                    y: 10,
                    z: 0
                },
                reverseAnimation: {
                    duration: 50,
                    easing: 'easeOutQuad'
                }
            },
            caption: {
                translation: {
                    x: 20,
                    y: 20,
                    z: 0
                },
                reverseAnimation: {
                    duration: 200,
                    easing: 'easeOutQuad'
                }
            },
            overlay: {
                translation: {
                    x: 5,
                    y: -5,
                    z: 0
                },
                rotation: {
                    x: 0,
                    y: 0,
                    z: 6
                },
                reverseAnimation: {
                    duration: 1000,
                    easing: 'easeOutQuad'
                }
            },
            shine: {
                translation: {
                    x: 50,
                    y: 50,
                    z: 0
                },
                reverseAnimation: {
                    duration: 50,
                    easing: 'easeOutQuad'
                }
            }
        }
    }, {
        movement: {
            imgWrapper: {
                translation: {
                    x: 0,
                    y: -8,
                    z: 0
                },
                rotation: {
                    x: 3,
                    y: 3,
                    z: 0
                },
                reverseAnimation: {
                    duration: 1200,
                    easing: 'easeOutExpo'
                }
            },
            lines: {
                translation: {
                    x: 15,
                    y: 15,
                    z: [0, 15]
                },
                reverseAnimation: {
                    duration: 1200,
                    easing: 'easeOutExpo'
                }
            },
            overlay: {
                translation: {
                    x: 0,
                    y: 8,
                    z: 0
                },
                reverseAnimation: {
                    duration: 600,
                    easing: 'easeOutExpo'
                }
            },
            caption: {
                translation: {
                    x: 10,
                    y: -15,
                    z: 0
                },
                reverseAnimation: {
                    duration: 900,
                    easing: 'easeOutExpo'
                }
            },
            shine: {
                translation: {
                    x: 50,
                    y: 50,
                    z: 0
                },
                reverseAnimation: {
                    duration: 1200,
                    easing: 'easeOutExpo'
                }
            }
        }
    }, {
        movement: {
            lines: {
                translation: {
                    x: -5,
                    y: 5,
                    z: 0
                },
                reverseAnimation: {
                    duration: 1000,
                    easing: 'easeOutExpo'
                }
            },
            caption: {
                translation: {
                    x: 15,
                    y: 15,
                    z: 0
                },
                rotation: {
                    x: 0,
                    y: 0,
                    z: 3
                },
                reverseAnimation: {
                    duration: 1500,
                    easing: 'easeOutElastic',
                    elasticity: 700
                }
            },
            overlay: {
                translation: {
                    x: 15,
                    y: -15,
                    z: 0
                },
                reverseAnimation: {
                    duration: 500,
                    easing: 'easeOutExpo'
                }
            },
            shine: {
                translation: {
                    x: 50,
                    y: 50,
                    z: 0
                },
                reverseAnimation: {
                    duration: 500,
                    easing: 'easeOutExpo'
                }
            }
        }
    }, {
        movement: {
            imgWrapper: {
                translation: {
                    x: 5,
                    y: 5,
                    z: 0
                },
                reverseAnimation: {
                    duration: 800,
                    easing: 'easeOutQuart'
                }
            },
            caption: {
                translation: {
                    x: 10,
                    y: 10,
                    z: [0, 50]
                },
                reverseAnimation: {
                    duration: 1000,
                    easing: 'easeOutQuart'
                }
            },
            shine: {
                translation: {
                    x: 50,
                    y: 50,
                    z: 0
                },
                reverseAnimation: {
                    duration: 800,
                    easing: 'easeOutQuart'
                }
            }
        }
    }, {
        movement: {
            lines: {
                translation: {
                    x: 40,
                    y: 40,
                    z: 0
                },
                reverseAnimation: {
                    duration: 1500,
                    easing: 'easeOutElastic'
                }
            },
            caption: {
                translation: {
                    x: 20,
                    y: 20,
                    z: 0
                },
                rotation: {
                    x: 0,
                    y: 0,
                    z: -5
                },
                reverseAnimation: {
                    duration: 1000,
                    easing: 'easeOutExpo'
                }
            },
            overlay: {
                translation: {
                    x: -30,
                    y: -30,
                    z: 0
                },
                rotation: {
                    x: 0,
                    y: 0,
                    z: 3
                },
                reverseAnimation: {
                    duration: 750,
                    easing: 'easeOutExpo'
                }
            },
            shine: {
                translation: {
                    x: 100,
                    y: 100,
                    z: 0
                },
                reverseAnimation: {
                    duration: 750,
                    easing: 'easeOutExpo'
                }
            }
        }
    }];

    function init() {
        var idx = 0;
        [].slice.call(document.querySelectorAll('a.tilter')).forEach(function(el, pos) {
            idx = pos % 2 === 0 ? idx + 1 : idx;
            new TiltFx(el, tiltSettings[idx - 1]);
        });
    }

    // Preload all images.
    imagesLoaded(document.querySelector('body'), function() {
        document.body.classList.remove('loading');
        init();
    });

})();
    $(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  
      // Change 33% earlier than scroll position so colour is there when you arrive.
      var scroll = $window.scrollTop() + ($window.height() / 3);
     
      $panel.each(function () {
        var $this = $(this);
        
        // if position is within range of this panel.
        // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
        // Remember we set the scroll to 33% earlier in scroll var.
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
              
          // Remove all classes on body with color-
          $body.removeClass(function (index, css) {
            return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
          });
           
          // Add class of currently active div
          $body.addClass('color-' + $(this).data('color'));
        }
      });    
      
    }).scroll();
new WOW().init();


/***************/
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("imgBox");
var modalImg = document.getElementsByClassName("modal");
// var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}


/****/ 

// function of everything

window.onload = function(){

    // image and popup variables
  
        var overlayDiv;
        var imgBox;
        var prevButt;
        var nextButt;
        var sliderBox;
        var closeButt;
        var count;
        var images;
        var imgDivs;
        var imgObjectArray;
        var thumbCount;
  
    // image and popup variables
  
  // object array
  
      imgObjectArray = [];
  
  // object array
  
  // thumbnail count (increment the number of little thumbnails to be shown as you wish)
    
      thumbCount = 12;
    
  // thumbnail count end
  
  // image objects function
  
    var createThumb = function(imgSource){
            this.imgSource = imgSource;
            imgObjectArray.push(imgSource);
        };
  
  // image objects function
  

  
  // structure of the html
  
      // thumbnail divs
  
        for (var i = 0; i < thumbCount; i++) {
  
                imgDivs = document.createElement("DIV");
                imgDivs.className = "imgBox";
                imgDivs.style.background = imgObjectArray[i];
                imgDivs.style.backgroundSize = "cover";
  
                imgDivs.onclick = function(){
  
                  createPopup();
  
                  // popUp image box
  
  
                  // background blur effect
  
                    container.classList.add("blur");
  
                  // background blur effect
  
                    imgBox = document.createElement("DIV");
                    imgBox.className = "popUpImg";
  
                    // clicked image
  
                    var currentImage = this.style.backgroundImage;
                        imgBox.style.backgroundImage = currentImage;
  
  
                    // clicked image
  
                    imgBox.style.backgroundSize = "cover";
                    sliderBox.appendChild(imgBox);
  
                  // popUp image box
  
  
              for (var j = 0; j < thumbCount; j++) {
  
  
                        if (currentImage === imgObjectArray[j] || currentImage.replace(/["]/g, '') === imgObjectArray[j]) {
  
                            return count = j;
                        }
                    }
                }
  
                thumbnailBody.appendChild(imgDivs);
  
              }
  
        // thumbnail divs
  
      // container

  // structure of the html
  
  
  // popup function
  
  function createPopup(){
  
  
  
  // slider box inside overlay
  
              sliderBox = document.createElement("DIV");
              sliderBox.className = "sliderBox";
              document.body.appendChild(sliderBox);
  
  // slider box inside overlay
  
  
  // dark overlay
  
              overlayDiv = document.createElement("DIV");
              overlayDiv.className = "overlay";
              overlayDiv.onclick = function(){
              closeOverlay();
            };
    
              document.body.appendChild(overlayDiv);
  
  // dark overlay
  
  // close button
  
              closeButt = document.createElement("DIV");
          var closeText = document.createTextNode("Close");
              closeButt.appendChild(closeText);
              closeButt.className = "closeButt";
              closeButt.onclick = closeOverlay;
              overlayDiv.appendChild(closeButt);
  
  // close button
  
  
  // Button to previous image
  
              prevButt = document.createElement("DIV");
              prevButt.className = "prevButt";
              prevButt.id = "navButt";
              prevButt.onclick = prevImage;
              sliderBox.appendChild(prevButt);
  
  // Button to previous image
  
  
  // Button to next image
  
              nextButt = document.createElement("DIV");
              nextButt.className = "nextButt";
              nextButt.id = "navButt";
              nextButt.onclick = nextImage;
              sliderBox.appendChild(nextButt);
  
  // Button to next imag
  
  }
  
  // popup function
  
  
  // slider function
  
    // next image
  
  
        function nextImage() {
  
          count++;
  
          imgBox.style.background = imgObjectArray[count];
          imgBox.style.backgroundSize = "cover";
  
          if (count >= imgObjectArray.length - 1) {
            count = -1;
          }
        }
  
    // next image
  
    // previous image
  
        function prevImage() {
  
          count--;
  
          if (count < 0) {
            count = imgObjectArray.length - 1;
          }
  
          imgBox.style.background = imgObjectArray[count];
          imgBox.style.backgroundSize = "cover";
        }
  
    // previous image
  
  // slider function
  
  // close overlay function
  
      function closeOverlay(){
        overlayDiv.style.display = "none";
        sliderBox.style.display = "none";
        container.classList.remove("blur");
      }
  
  // close overlay function
  
  
  // keyboard image switch
  
      document.onkeydown = function(e) {
          switch (e.keyCode) {
            // switch previous
              case 37:
                  prevImage();
                  break;
            // switch previous
  
            // switch next
              case 39:
                  nextImage();
                  break;
            // switch next
  
            // close the overlay
              case 27:
                  closeOverlay();
                  break;
            // close the overlay
  
          };
      };
  
  // keyboard image switch
  
  
    
  };
  // function of everything