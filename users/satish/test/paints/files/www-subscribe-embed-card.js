(function(){var k=this;function l(a){a=a.split(".");for(var b=k,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function n(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function p(a){return"string"==typeof a}function t(a,b){var c=a.split("."),d=k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b};var aa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function v(a,b){return a<b?-1:a>b?1:0};var z=Array.prototype,ca=z.indexOf?function(a,b,c){return z.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},da=z.filter?function(a,b,c){return z.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=p(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var q=g[h];b.call(c,q,h,a)&&(e[f++]=q)}return e};
function ea(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c],e=d,f=n(e);if("array"==f||"object"==f&&"number"==typeof e.length){e=a.length||0;f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}};function fa(a){if(a.classList)return a.classList;a=a.className;return p(a)&&a.match(/\S+/g)||[]}function ga(a,b){var c;a.classList?c=a.classList.contains(b):(c=fa(a),c=0<=ca(c,b));return c}function ha(a,b){a.classList?a.classList.add(b):ga(a,b)||(a.className+=0<a.className.length?" "+b:b)}function ia(a,b){a.classList?a.classList.remove(b):ga(a,b)&&(a.className=da(fa(a),function(a){return a!=b}).join(" "))};var ja="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ka(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ja.length;f++)c=ja[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}function A(a){var b=arguments.length;if(1==b&&"array"==n(arguments[0]))return A.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};A("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));A("action","cite","data","formaction","href","manifest","poster","src");A("EMBED","IFRAME","LINK","OBJECT","SCRIPT","STYLE","TEMPLATE");function la(a,b){this.width=a;this.height=b};var B;r:{var ma=k.navigator;if(ma){var na=ma.userAgent;if(na){B=na;break r}}B=""};function D(){return-1!=B.indexOf("Edge")};var oa=-1!=B.indexOf("Opera")||-1!=B.indexOf("OPR"),E=-1!=B.indexOf("Edge")||-1!=B.indexOf("Trident")||-1!=B.indexOf("MSIE"),F=-1!=B.indexOf("Gecko")&&!(-1!=B.toLowerCase().indexOf("webkit")&&!D())&&!(-1!=B.indexOf("Trident")||-1!=B.indexOf("MSIE"))&&!D(),pa=-1!=B.toLowerCase().indexOf("webkit")&&!D();function qa(){var a=B;if(F)return/rv\:([^\);]+)(\)|;)/.exec(a);if(E&&D())return/Edge\/([\d\.]+)/.exec(a);if(E)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(pa)return/WebKit\/(\S+)/.exec(a)}
function ra(){var a=k.document;return a?a.documentMode:void 0}var sa=function(){if(oa&&k.opera){var a=k.opera.version;return"function"==n(a)?a():a}var a="",b=qa();b&&(a=b?b[1]:"");return E&&!D()&&(b=ra(),b>parseFloat(a))?String(b):a}(),ta={};
function ua(a){if(!ta[a]){for(var b=0,c=aa(String(sa)).split("."),d=aa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",q=RegExp("(\\d*)(\\D*)","g"),w=RegExp("(\\d*)(\\D*)","g");do{var m=q.exec(g)||["","",""],r=w.exec(h)||["","",""];if(0==m[0].length&&0==r[0].length)break;b=v(0==m[1].length?0:parseInt(m[1],10),0==r[1].length?0:parseInt(r[1],10))||v(0==m[2].length,0==r[2].length)||v(m[2],r[2])}while(0==b)}ta[a]=0<=b}}
var va=k.document,wa=ra(),xa=!va||!E||!wa&&D()?void 0:wa||("CSS1Compat"==va.compatMode?parseInt(sa,10):5);var G;if(!(G=!F&&!E)){var H;if(H=E)H=E&&(D()||9<=xa);G=H}G||F&&ua("1.9.1");E&&ua("9");function ya(){var a=document;return p("yt-subscribe-card")?a.getElementById("yt-subscribe-card"):"yt-subscribe-card"};function za(a){var b=a.offsetWidth,c=a.offsetHeight,d=pa&&!b&&!c;if((void 0===b||d)&&a.getBoundingClientRect){var e;r:{try{e=a.getBoundingClientRect()}catch(f){e={left:0,top:0,right:0,bottom:0};break r}E&&a.ownerDocument.body&&(a=a.ownerDocument,e.left-=a.documentElement.clientLeft+a.body.clientLeft,e.top-=a.documentElement.clientTop+a.body.clientTop)}return new la(e.right-e.left,e.bottom-e.top)}return new la(b,c)};var I=window,J=document,Aa=I.location;function Ba(){}var Ca=/\[native code\]/;function K(a,b,c){return a[b]=a[b]||c}function Da(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}function Ea(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}function L(){var a;if((a=Object.create)&&Ca.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}var M=K(I,"gapi",{});var N;N=K(I,"___jsl",L());K(N,"I",0);K(N,"hel",10);function Fa(){var a=Aa.href,b;if(N.dpo)b=N.h;else{b=N.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}function Ga(a){var b=K(N,"PQ",[]);N.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}function O(a){return K(K(N,"H",L()),a,L())};var P=K(N,"perf",L());K(P,"g",L());var Ha=K(P,"i",L());K(P,"r",[]);L();L();function Q(a,b,c){b&&0<b.length&&(b=Ia(b),c&&0<c.length&&(b+="___"+Ia(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=K(Ha,"_p",L()),K(b,c,L())[a]=(new Date).getTime(),b=P.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}function Ia(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/\,/g,"_")};var Ja=L(),R=[];function S(a){throw Error("Bad hint"+(a?": "+a:""));};R.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?N[b]=K(N,b,[]).concat(c):K(N,b,c)}if(b=a.u)a=K(N,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);var Ka=/^(\/[a-zA-Z0-9_\-]+)+$/,La=/^[a-zA-Z0-9\-_\.,!]+$/,Ma=/^gapi\.loaded_[0-9]+$/,Na=/^[a-zA-Z0-9,._-]+$/;function Oa(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Ja[f],h=null;g?h=g(e,b,c,d):S("no hint processor for: "+f);h||S("failed to generate load url");b=h;c=b.match(Pa);(d=b.match(Qa))&&1===d.length&&Ra.test(b)&&c&&1===c.length||S("failed sanity: "+a);return h}
function Sa(a,b,c,d){function e(a){return encodeURIComponent(a).replace(/%2C/g,",")}a=Ta(a);Ma.test(c)||S("invalid_callback");b=Ua(b);d=d&&d.length?Ua(d):null;return[encodeURIComponent(a.f).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.c?"/am="+e(a.c):"",a.d?"/rs="+e(a.d):"",a.e?"/t="+e(a.e):"","/cb=",e(c)].join("")}
function Ta(a){"/"!==a.charAt(0)&&S("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))S("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Ka.test(b)||S("invalid_prefix");c=T(a,"k",!0);d=T(a,"am");e=T(a,"rs");a=T(a,"t");return{f:b,version:c,
c:d,d:e,e:a}}function Ua(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Na.test(e)&&b.push(e)}return b.join(",")}function T(a,b,c){a=a[b];!a&&c&&S("missing: "+b);if(a){if(La.test(a))return a;S("invalid: "+b)}return null}var Ra=/^https?:\/\/[a-z0-9_.-]+\.google\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Qa=/\/cb=/g,Pa=/\/\//g;function Va(){var a=Fa();if(!a)throw Error("Bad hint");return a}
Ja.m=function(a,b,c,d){(a=a[0])||S("missing_hint");return"https://apis.google.com"+Sa(a,b,c,d)};var U=decodeURI("%73cript");function Wa(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&0>Da.call(b,e)&&c.push(e)}return c}function Xa(a){"loading"!=J.readyState?Ya(a):J.write("<"+U+' src="'+encodeURI(a)+'"></'+U+">")}function Ya(a){var b=J.createElement(U);b.setAttribute("src",a);b.async="true";(a=J.getElementsByTagName(U)[0])?a.parentNode.insertBefore(b,a):(J.head||J.body||J.documentElement).appendChild(b)}
function Za(a,b){var c=b&&b._c;if(c)for(var d=0;d<R.length;d++){var e=R[d][0],f=R[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}function $a(a,b){ab(function(){var c;c=b===Fa()?K(M,"_",L()):L();c=K(O(b),"_",c);a(c)})}
function bb(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Za(a,c);var d=a?a.split(":"):[],e=c.h||Va(),f=K(N,"ah",L());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var q=h.split("."),q=f[h]||f[q[1]&&"ns:"+q[0]||""]||e,w=g.length&&g[g.length-1]||null,m=w;w&&w.hint==q||(m={hint:q,features:[]},g.push(m));m.features.push(h)}var r=g.length;if(1<r){var C=c.callback;C&&(c.callback=function(){0==--r&&C()})}for(;d=g.shift();)cb(d.features,c,d.hint)}else cb(d||[],c,e)}
function cb(a,b,c){function d(a,b){if(w)return 0;I.clearTimeout(q);r.push.apply(r,u);var d=((M||{}).config||{}).update;d?d(f):f&&K(N,"cu",[]).push(f);if(b){Q("me0",a,C);try{$a(b,c)}finally{Q("me1",a,C)}}return 1}a=Ea(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,q=null,w=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";var m=K(O(c),"r",[]).sort(),r=K(O(c),"L",[]).sort(),C=[].concat(m);0<g&&(q=I.setTimeout(function(){w=!0;h()},g));
var u=Wa(a,r);if(u.length){var u=Wa(a,m),x=K(N,"CP",[]),y=x.length;x[y]=function(a){function b(){var a=x[y+1];a&&a()}function c(b){x[y]=null;d(u,a)&&Ga(function(){e&&e();b()})}if(!a)return 0;Q("ml1",u,C);0<y&&x[y-1]?x[y]=function(){c(b)}:c(b)};if(u.length){var ba="loaded_"+N.I++;M[ba]=function(a){x[y](a);M[ba]=null};a=Oa(c,u,"gapi."+ba,m);m.push.apply(m,u);Q("ml0",u,C);b.sync||I.___gapisync?Xa(a):Ya(a)}else x[y](Ba)}else d(u)&&e&&e()};function ab(a){if(N.hee&&0<N.hel)try{return a()}catch(b){N.hel--,bb("debug_error",function(){try{window.___jsl.hefn(b)}catch(a){throw b;}})}else return a()};M.load=function(a,b){return ab(function(){return bb(a,b)})};var db=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};t("yt.config_",db);t("yt.tokens_",window.yt&&window.yt.tokens_||{});t("yt.msgs_",window.yt&&window.yt.msgs_||{});function eb(){return l("gapi.iframes.getContext")()}function fb(){return l("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER")};var gb=l("yt.net.ping.workerUrl_")||null;t("yt.net.ping.workerUrl_",gb);function hb(a){try{var b=ib,c=fb();a.register("msg-hovercard-subscription",b,c)}catch(d){}}function ib(a){if(a){a=!!a.isSubscribed;var b=ya();a?ia(b,"subscribe"):ha(b,"subscribe");a?ha(b,"subscribed"):ia(b,"subscribed")}};var jb;
function kb(){var a;a=ya();var b;n:{b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.display||b.getPropertyValue("display")||"";break n}b=""}if("none"!=(b||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))a=za(a);else{b=a.style;var c=b.display,d=b.visibility,e=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=za(a);b.display=c;b.position=e;b.visibility=d}a=
{width:a.width,height:a.height};eb().ready(a,null,void 0);a=fb();eb().addOnOpenerHandler(hb,null,a)}jb="function"==n(kb)?{callback:kb}:kb||{};
if("GAPI_HINT_OVERRIDE"in db&&db.GAPI_HINT_OVERRIDE){var lb;var V=document.location.href;if(-1!=V.indexOf("?")){var V=(V||"").split("#")[0],mb=V.split("?",2),W=1<mb.length?mb[1]:mb[0];"?"==W.charAt(0)&&(W=W.substr(1));for(var nb=W.split("&"),X={},ob=0,pb=nb.length;ob<pb;ob++){var Y=nb[ob].split("=");if(1==Y.length&&Y[0]||2==Y.length){var Z=decodeURIComponent((Y[0]||"").replace(/\+/g," ")),qb=decodeURIComponent((Y[1]||"").replace(/\+/g," "));Z in X?"array"==n(X[Z])?ea(X[Z],qb):X[Z]=[X[Z],qb]:X[Z]=
qb}}lb=X}else lb={};var rb=lb.gapi_jsh;rb&&ka(jb,{_c:{jsl:{h:rb}}})}bb("gapi.iframes:gapi.iframes.style.common",jb);})();