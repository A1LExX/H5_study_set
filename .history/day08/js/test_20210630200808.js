var o2=o2||{};o2.detect={browser:function(){var ua=navigator.userAgent.toLowerCase(),opera=window.opera,result={engine:0,system:0,browser:0,version:0},systemList={},ieBrowserList={},engineList={},i;systemList={macintosh:ua.indexOf("macintosh")>-1,windows:ua.indexOf("windows")>-1,linux:ua.indexOf("linux")>-1,android:ua.indexOf("android")>-1,ipad:ua.indexOf("ipad")>-1,iphone:ua.indexOf("iphone")>-1};ieBrowserList={ie6:!window.XMLHttpRequest||engineList.quirk,ie7:/msie 7/i.test(ua),ie8:document.documentMode==8,ie9:document.documentMode==9,ie10:document.documentMode==10,ie11:document.documentMode==11};engineList={ie:/msie/i.test(ua),quirk:document.compatMode=="BackCompat",webkit:ua.indexOf(" applewebkit/")>-1,opera:(!!opera&&opera.version),gecko:navigator.product=="Gecko"&&!engineList.webkit&&!engineList.opera};if(engineList.ie){for(i in ieBrowserList){if(ieBrowserList[i]){result.engine="ie";result.browser=i;result.version=/msie 7/i.test(ua)?7:document.documentMode;getSystem();return result}}}if(engineList.webkit){if(ua.indexOf("safari")>-1){if(ua.indexOf("chrome")>-1){result.browser="chrome";result.version="latest"}else{result.browser="safari";result.version=parseInt(ua.match(/ applewebkit\/(\d+)/)[1])}}else{result.browser="webkit";result.version="unknown"}result.engine="webkit";getSystem();return result}if(engineList.opera){result.engine="opera";result.browser="opera";result.version=parseInt(opera.version());getSystem();return result}if(engineList.gecko){if(ua.indexOf("firefox")>-1){result.browser="firefox";result.version=ua.match(/rv:(\d+)/)[1]}else{result.browser="unknown";result.version="unknown"}result.engine="gecko";getSystem();return result}return result;function getSystem(){var i;for(i in systemList){if(systemList[i]){result.system=i}}}},css3test:function(prop){var div=document.createElement("div"),vendors="Khtml Ms O Moz Webkit".split(" "),len=vendors.length-1;if(prop in div.style){return true}prop=prop.replace(/^[a-z]/,function(val){return val.toUpperCase()});len=vendors.length-1;while(len>=0){if(vendors[len]+prop in div.style){return true}len--}return false}};o2.init=function(){var browser=o2.detect.browser();var cssTest=o2.detect.css3test("transition")?("csstransitions"):("no-csstransitions");cssTest=o2.detect.css3test("animation")?(cssTest+" cssanimations"):(cssTest+" no-cssanimations");var classList=[];classList.push(cssTest,browser.engine,browser.browser,browser.version);$("html").addClass(classList.join(" o2_"))};o2.init();!function(t){"use strict";function e(t,e,n){var i;return i=e&&e.hasOwnProperty("constructor")?e.constructor:function(){t.apply(this,arguments)},$.extend(i,t),s.prototype=t.prototype,i.prototype=new s,e&&$.extend(i.prototype,e),n&&$.extend(i,n),i.prototype.constructor=i,i.__super__=t.prototype,i}function n(t,n){var i=e(this,t,n);return i.extend=this.extend,i}function i(t){"undefined"!=typeof t&&t.callbacks?this.callbacks=t.callbacks:this.callbacks={}}var c=/\s+/,r=[].slice,o=t._||(t._={}),s=function(){};i.extend=n,i.prototype={on:function(t,e,n){var i,r,o,s,a;if(!e)return this;for(t=t.split(c),i=this.callbacks;r=t.shift();)a=i[r],o=a?a.tail:{},o.next=s={},o.context=n,o.callback=e,i[r]={tail:s,next:a?a.next:o};return this},off:function(t,e,n){var i,r,s,a,l,f;if(r=this.callbacks){if(!(t||e||n))return delete this.callbacks,this;for(t=t?t.split(c):o.keys(r);i=t.shift();)if(s=r[i],delete r[i],s&&(e||n))for(a=s.tail;(s=s.next)!==a;)l=s.callback,f=s.context,(e&&l!==e||n&&f!==n)&&this.on(i,l,f);return this}},trigger:function(t){var e,n,i,o,s,a,l;if(!(i=this.callbacks))return this;for(a=i.all,t=t.split(c),l=r.call(arguments,1);e=t.shift();){if(n=i[e])for(o=n.tail;(n=n.next)!==o;)n.callback.apply(n.context||this,l);if(n=a)for(o=n.tail,s=[e].concat(l);(n=n.next)!==o;)n.callback.apply(n.context||this,s)}return this}},o.Events=i,o.eventCenter=new i}(window,void 0);