(self.AMP=self.AMP||[]).push({n:"amp-mustache",ev:"0.2",l:true,v:"2103122145004",m:0,f:(function(AMP,_){
'use strict';var w;function aa(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}aa(this);"function"===typeof Symbol&&Symbol("x");var ca="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ha;
if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var pa;a:{var qa={a:!0},ra={};try{ra.__proto__=qa;pa=ra.a;break a}catch(a){}pa=!1}ha=pa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=ha;
function ta(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.M=b.prototype};function za(a,b){var c=b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(d){return c}};var Aa=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;var K=self.AMP_CONFIG||{},Ba=("string"==typeof K.cdnProxyRegex?new RegExp(K.cdnProxyRegex):K.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function Ca(a){if(!self.document||!self.document.head||self.location&&Ba.test(self.location.origin))return null;var b=self.document.head.querySelector('meta[name="'+a+'"]');return b&&b.getAttribute("content")||null}
var Da={thirdParty:K.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:K.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof K.thirdPartyFrameRegex?new RegExp(K.thirdPartyFrameRegex):K.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:K.cdnUrl||Ca("runtime-host")||"https://cdn.ampproject.org",cdnProxyRegex:Ba,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,errorReporting:K.errorReportingUrl||"https://us-central1-amp-error-reporting.cloudfunctions.net/r",betaErrorReporting:K.betaErrorReportingUrl||
"https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",localDev:K.localDev||!1,trustedViewerHosts:[/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/,/(^|\.)gmail\.(com|dev)$/],geoApi:K.geoApiUrl||Ca("amp-geo-api")};self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var Ea=self.__AMP_LOG;function Fa(){if(!Ea.user)throw Error("failed to call initLogConstructor");return Ea.user}function Ga(a,b,c){Fa().assert(a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function Ma(a,b){var c=a=a.__AMP_TOP||(a.__AMP_TOP=a),d=Na(c),h=d.purifier;h||(h=d.purifier={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1});h.ctor||(h.ctor=b,h.context=a,h.sharedInstance=!1,h.resolve&&Oa(c,"purifier"))}function Pa(a,b){a=a.__AMP_TOP||(a.__AMP_TOP=a);return Oa(a,b)}function Qa(a){return a.nodeType?Pa((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}
function Oa(a,b){a=Na(a)[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function Na(a){var b=a.__AMP_SERVICES;b||(b=a.__AMP_SERVICES={});return b};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function Ra(a){a?-1==a.indexOf("\u200b\u200b\u200b")&&(a+="\u200b\u200b\u200b"):a="\u200b\u200b\u200b";a=Error.call(this,a);this.message=a.message;"stack"in a&&(this.stack=a.stack)}ta(Ra,Error);
function Sa(a,b,c,d){if(!b){var h=Array.prototype.slice.call(arguments,3),p=[],x,t=(c||"Assertion failed").replace(/%s/g,function(){var v=h.shift();""!=v&&p.push(v);x||1!=(null==v?void 0:v.nodeType)||(x=v);return 1==(null==v?void 0:v.nodeType)?v.tagName.toLowerCase()+(v.id?"#"+v.id:""):v});t=new a(t);t.messageArray=p;x&&(t.associatedElement=x,x.classList.add("i-amphtml-error"));throw t;}}function Ta(a,b,c){Sa(Ra,a,b,c,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function Ua(a){return a||{}};function Va(a,b){for(var c=a.length,d=0;d<c;d++)b(a[d],d)};function Wa(a,b){this.element=a;this.win=a.ownerDocument.defaultView||b;a=Qa(this.element);a=Qa(a);a=a.isSingleDoc()?a.win:a;this.L=Oa(a,"viewer");this.compileCallback()}w=Wa.prototype;w.compileCallback=function(){};w.setHtml=function(){};w.render=function(){};w.renderAsString=function(){};function Xa(a,b){for(a=a.firstChild;null!=a;a=a.nextSibling)if(3==a.nodeType){var c=a.textContent.trim();c&&b(c)}else 8!=a.nodeType&&1==a.nodeType&&b(a)}
w.tryUnwrap=function(a){var b;Xa(a,function(c){b=void 0===b&&c.nodeType?c:null});return b||a};w.unwrapChildren=function(a){var b=this,c=[];Xa(a,function(d){if("string"==typeof d){var h=b.win.document.createElement("div");h.textContent=d;c.push(h)}else c.push(d)});return c};w.viewerCanRenderTemplates=function(){return this.L.hasCapability("viewerRenderTemplate")};function Ya(a){var b=a.documentElement;return["\u26a14email","amp4email"].some(function(c){return b.hasAttribute(c)})};function Za(){this.J=100;this.B=this.D=0;this.o=Object.create(null)}Za.prototype.has=function(a){return!!this.o[a]};Za.prototype.get=function(a){var b=this.o[a];if(b)return b.access=++this.B,b.payload};
Za.prototype.put=function(a,b){this.has(a)||this.D++;this.o[a]={payload:b,access:this.B};if(!(this.D<=this.J)){if(Ea.dev)a=Ea.dev;else throw Error("failed to call initLogConstructor");a.warn("lru-cache","Trimming LRU cache");a=this.o;var c=this.B+1,d;for(d in a){var h=a[d].access;if(h<c){c=h;var p=d}}void 0!==p&&(delete a[p],this.D--)}};var $a=Ua({c:!0,v:!0,a:!0,ad:!0}),ab,bb,lb=/[?&]amp_js[^&]*/,mb=/[?&]amp_gsa[^&]*/,nb=/[?&]amp_r[^&]*/,ob=/[?&]amp_kit[^&]*/,pb=/[?&]usqp[^&]*/;
function O(a){ab||(ab=self.document.createElement("a"),bb=self.__AMP_URL_CACHE||(self.__AMP_URL_CACHE=new Za));var b=bb,c=ab;if(b&&b.has(a))a=b.get(a);else{c.href=a;c.protocol||(c.href=c.href);var d={href:c.href,protocol:c.protocol,host:c.host,hostname:c.hostname,port:"0"==c.port?"":c.port,pathname:c.pathname,search:c.search,hash:c.hash,origin:null};"/"!==d.pathname[0]&&(d.pathname="/"+d.pathname);if("http:"==d.protocol&&80==d.port||"https:"==d.protocol&&443==d.port)d.port="",d.host=d.hostname;d.origin=
c.origin&&"null"!=c.origin?c.origin:"data:"!=d.protocol&&d.host?d.protocol+"//"+d.host:d.href;b&&b.put(a,d);a=d}return a}function qb(a){"string"==typeof a&&(a=O(a));return Da.cdnProxyRegex.test(a.origin)}
function rb(a){"string"==typeof a&&(a=O(a));if(!qb(a))return a.href;var b=a.pathname.split("/");Ta($a[b[1]],"Unknown path prefix in url %s",a.href);var c=b[2],d="s"==c?"https://"+decodeURIComponent(b[3]):"http://"+decodeURIComponent(c);Ta(0<d.indexOf("."),"Expected a . in origin %s",d);b.splice(1,"s"==c?3:2);b=d+b.join("/");d=(d=a.search)&&"?"!=d?(d=d.replace(lb,"").replace(mb,"").replace(nb,"").replace(ob,"").replace(pb,"").replace(/^[?&]/,""))?"?"+d:"":"";return b+d+(a.hash||"")}
function sb(a,b){"string"==typeof b&&(b=O(b));if("function"==typeof URL)var c=(new URL(a,b.href)).toString();else{c=a;var d=b;"string"==typeof d&&(d=O(d));c=c.replace(/\\/g,"/");var h=O(c);c=c.toLowerCase().startsWith(h.protocol)?h.href:c.startsWith("//")?d.protocol+c:c.startsWith("/")?d.origin+c:d.origin+d.pathname.replace(/\/[^/]*$/,"/")+c}return c}
function tb(a){var b=O(a).search,c=Object.create(null);if(b)for(var d;d=Aa.exec(b);){var h=za(d[1],d[1]);d=d[2]?za(d[2].replace(/\+/g," "),d[2]):"";c[h]=d}Ta(!("__amp_source_origin"in c),"Source origin is not allowed in %s",a)};var ub=/(\S+)(?:\s+(?:(-?\d+(?:\.\d+)?)([a-zA-Z]*)))?\s*(?:,|$)/g;function vb(a){for(var b=[],c;c=ub.exec(a);){var d=c[1],h=void 0,p=void 0;if(c[2]){var x=c[3].toLowerCase();if("w"==x)h=parseInt(c[2],10);else if("x"==x)p=parseFloat(c[2]);else continue}else p=1;b.push({url:d,width:h,dpr:p})}return new wb(b)}
function wb(a){Ga(0<a.length,"Srcset must have at least one source");this.j=a;for(var b=!1,c=!1,d=0;d<a.length;d++){var h=a[d];b=b||!!h.width;c=c||!!h.dpr}Ga(!!(b^c),"Srcset must have width or dpr sources, but not both");a.sort(b?xb:yb);this.I=b}
wb.prototype.select=function(a,b){if(this.I){b*=a;a=this.j;for(var c=0,d=Infinity,h=Infinity,p=0;p<a.length;p++){var x=a[p].width,t=Math.abs(x-b);if(t<=1.1*d||1.2<b/h)c=p,d=t,h=x;else break}b=c}else{a=this.j;c=0;d=Infinity;for(h=0;h<a.length;h++)if(p=Math.abs(a[h].dpr-b),p<=d)c=h,d=p;else break;b=c}return this.j[b].url};wb.prototype.getUrls=function(){return this.j.map(function(a){return a.url})};
wb.prototype.stringify=function(a){for(var b=[],c=this.j,d=0;d<c.length;d++){var h=c[d],p=h.url;a&&(p=a(p));p=this.I?p+(" "+h.width+"w"):p+(" "+h.dpr+"x");b.push(p)}return b.join(", ")};function xb(a,b){Ga(a.width!=b.width,"Duplicate width: %s",a.width);return a.width-b.width}function yb(a,b){Ga(a.dpr!=b.dpr,"Duplicate dpr: %s",a.dpr);return a.dpr-b.dpr};function zb(a,b,c){return Ab(b)?Bb(a,b,c):c}function Ab(a){return"src"==a||"href"==a||"xlink:href"==a||"srcset"==a}function Bb(a,b,c){var d=self.location;tb(c);var h=qb(d),p=O(rb(d));if("href"==b&&!c.startsWith("#"))return sb(c,p);if("src"==b)return"amp-img"==a?Cb(c,p,h):sb(c,p);if("srcset"==b){try{var x=vb(c)}catch(t){return Fa().error("URL-REWRITE","Failed to parse srcset: ",t),c}return x.stringify(function(t){return Cb(t,p,h)})}return c}
function Cb(a,b,c){a=O(sb(a,b));return"data:"==a.protocol||qb(a)||!c?a.href:Da.cdn+"/i/"+("https:"==a.protocol?"s/":"")+encodeURIComponent(a.host)+a.pathname+(a.search||"")+(a.hash||"")};var Db={"AMP-IMG":["src","srcset","layout","width","height"]};function Eb(a,b){var c=a.tagName.startsWith("AMP-"),d=a.hasAttribute("i-amphtml-binding");if(!d&&Db[a.tagName])a.setAttribute("i-amphtml-ignore","");else if(d||c)a.hasAttribute("i-amphtml-key")||a.setAttribute("i-amphtml-key",b())}
var Fb={applet:!0,audio:!0,base:!0,embed:!0,frame:!0,frameset:!0,iframe:!0,img:!0,link:!0,meta:!0,object:!0,style:!0,video:!0},Gb={"amp-accordion":!0,"amp-anim":!0,"amp-bind-macro":!0,"amp-carousel":!0,"amp-fit-text":!0,"amp-img":!0,"amp-layout":!0,"amp-selector":!0,"amp-sidebar":!0,"amp-timeago":!0},Hb="a amp-img article aside b blockquote br caption code col colgroup dd del details div dl dt em figcaption figure footer h1 h2 h3 header hr i ins li main mark nav ol p pre q s section small span strong sub summary sup table tbody td tfoot th thead time tr u ul".split(" "),
Ib="amp-fx fallback heights layout min-font-size max-font-size on option placeholder submitting submit-success submit-error validation-for verify-error visible-when-invalid href style text subscriptions-action subscriptions-actions subscriptions-decorate subscriptions-dialog subscriptions-display subscriptions-section subscriptions-service subscriptions-google-rtc amp-nested-submenu amp-nested-submenu-open amp-nested-submenu-close itemprop".split(" "),Jb={a:["rel","target"],div:["template"],form:["action-xhr",
"verify-xhr","custom-validation-reporting","target"],input:["mask-output"],template:["type"],textarea:["autoexpand"]},Kb=["_top","_blank"],Lb=/^(?:\w+script|data|blob):/i,Mb=/^(?:blob):/i,Nb=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,Ob=Object.freeze(Ua({input:{type:/(?:image|button)/i}})),Pb=Object.freeze(Ua({input:{type:/(?:button|file|image|password)/i}})),Qb=Object.freeze("form formaction formmethod formtarget formnovalidate formenctype".split(" ")),Rb=Object.freeze(Ua({input:Qb,
textarea:Qb,select:Qb})),dc=Object.freeze(Ua({"amp-anim":["controls"],form:["name"]})),ec=/!important|position\s*:\s*fixed|position\s*:\s*sticky/i;
function fc(a,b,c,d){var h=!0,p=h=void 0===h?!1:h,x=c?c.replace(Nb,""):"";if(!p){if(b.startsWith("on")&&"on"!=b)return!1;var t=x.toLowerCase();if(0<=t.indexOf("<script")||0<=t.indexOf("\x3c/script")||Lb.test(x))return!1}if(Mb.test(x))return!1;if("style"==b)return!ec.test(c);if("class"==b&&c&&/(^|\W)i-amphtml-/i.test(c)||Ab(b)&&/__amp_source_origin/.test(c))return!1;var v=Ya(d),E=Object.assign(Object.create(null),Rb,v?dc:{})[a];if(E&&-1!=E.indexOf(b))return!1;var F=Object.assign(Object.create(null),
Ob,v?Pb:{})[a];if(F){var B=F[b];if(B&&-1!=c.search(B))return!1}return!0};/*
 @license DOMPurify | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.2.2/LICENSE */
var gc=Object.hasOwnProperty,hc=Object.setPrototypeOf,ic=Object.isFrozen,jc=Object.getPrototypeOf,kc=Object.getOwnPropertyDescriptor,S=Object.freeze,U=Object.seal,lc=Object.create,mc="undefined"!==typeof Reflect&&Reflect,nc=mc.apply,oc=mc.construct;nc||(nc=function(a,b,c){return a.apply(b,c)});S||(S=function(a){return a});U||(U=function(a){return a});
oc||(oc=function(a,b){var c=Function.prototype.bind,d=c.apply,h=[null],p=h.concat;if(Array.isArray(b)){for(var x=0,t=Array(b.length);x<b.length;x++)t[x]=b[x];b=t}else b=Array.from(b);return new (d.call(c,a,p.call(h,b)))});var pc=V(Array.prototype.forEach),qc=V(Array.prototype.pop),rc=V(Array.prototype.push),sc=V(String.prototype.toLowerCase),tc=V(String.prototype.match),X=V(String.prototype.replace),uc=V(String.prototype.indexOf),vc=V(String.prototype.trim),wc=V(RegExp.prototype.test),yc=xc();
function V(a){return function(b){for(var c=arguments.length,d=Array(1<c?c-1:0),h=1;h<c;h++)d[h-1]=arguments[h];return nc(a,b,d)}}function xc(){var a=TypeError;return function(){for(var b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];return oc(a,c)}}function Y(a,b){hc&&hc(a,null);for(var c=b.length;c--;){var d=b[c];if("string"===typeof d){var h=sc(d);h!==d&&(ic(b)||(b[c]=h),d=h)}a[d]=!0}return a}function zc(a){var b=lc(null),c=void 0;for(c in a)nc(gc,a,[c])&&(b[c]=a[c]);return b}
function Ac(a,b){for(;null!==a;){var c=kc(a,b);if(c){if(c.get)return V(c.get);if("function"===typeof c.value)return V(c.value)}a=jc(a)}return null}
var Bc=S("a abbr acronym address area article aside audio b bdi bdo big blink blockquote body br button canvas caption center cite code col colgroup content data datalist dd decorator del details dfn dialog dir div dl dt element em fieldset figcaption figure font footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i img input ins kbd label legend li main map mark marquee menu menuitem meter nav nobr ol optgroup option output p picture pre progress q rp rt ruby s samp section select shadow small source spacer span strike strong style sub summary sup table tbody td template textarea tfoot th thead time tr track tt u ul var video wbr".split(" ")),Cc=
S("svg a altglyph altglyphdef altglyphitem animatecolor animatemotion animatetransform circle clippath defs desc ellipse filter font g glyph glyphref hkern image line lineargradient marker mask metadata mpath path pattern polygon polyline radialgradient rect stop style switch symbol text textpath title tref tspan view vkern".split(" ")),Dc=S("feBlend feColorMatrix feComponentTransfer feComposite feConvolveMatrix feDiffuseLighting feDisplacementMap feDistantLight feFlood feFuncA feFuncB feFuncG feFuncR feGaussianBlur feMerge feMergeNode feMorphology feOffset fePointLight feSpecularLighting feSpotLight feTile feTurbulence".split(" ")),
Ec=S("animate color-profile cursor discard fedropshadow feimage font-face font-face-format font-face-name font-face-src font-face-uri foreignobject hatch hatchpath mesh meshgradient meshpatch meshrow missing-glyph script set solidcolor unknown use".split(" ")),Fc=S("math menclose merror mfenced mfrac mglyph mi mlabeledtr mmultiscripts mn mo mover mpadded mphantom mroot mrow ms mspace msqrt mstyle msub msup msubsup mtable mtd mtext mtr munder munderover".split(" ")),Gc=S("maction maligngroup malignmark mlongdiv mscarries mscarry msgroup mstack msline msrow semantics annotation annotation-xml mprescripts none".split(" ")),
Hc=S(["#text"]),Ic=S("accept action align alt autocapitalize autocomplete autopictureinpicture autoplay background bgcolor border capture cellpadding cellspacing checked cite class clear color cols colspan controls controlslist coords crossorigin datetime decoding default dir disabled disablepictureinpicture disableremoteplayback download draggable enctype enterkeyhint face for headers height hidden high href hreflang id inputmode integrity ismap kind label lang list loading loop low max maxlength media method min minlength multiple muted name noshade novalidate nowrap open optimum pattern placeholder playsinline poster preload pubdate radiogroup readonly rel required rev reversed role rows rowspan spellcheck scope selected shape size sizes span srclang start src srcset step style summary tabindex title translate type usemap valign value width xmlns".split(" ")),
Jc=S("accent-height accumulate additive alignment-baseline ascent attributename attributetype azimuth basefrequency baseline-shift begin bias by class clip clippathunits clip-path clip-rule color color-interpolation color-interpolation-filters color-profile color-rendering cx cy d dx dy diffuseconstant direction display divisor dur edgemode elevation end fill fill-opacity fill-rule filter filterunits flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight fx fy g1 g2 glyph-name glyphref gradientunits gradienttransform height href id image-rendering in in2 k k1 k2 k3 k4 kerning keypoints keysplines keytimes lang lengthadjust letter-spacing kernelmatrix kernelunitlength lighting-color local marker-end marker-mid marker-start markerheight markerunits markerwidth maskcontentunits maskunits max mask media method mode min name numoctaves offset operator opacity order orient orientation origin overflow paint-order path pathlength patterncontentunits patterntransform patternunits points preservealpha preserveaspectratio primitiveunits r rx ry radius refx refy repeatcount repeatdur restart result rotate scale seed shape-rendering specularconstant specularexponent spreadmethod startoffset stddeviation stitchtiles stop-color stop-opacity stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke stroke-width style surfacescale systemlanguage tabindex targetx targety transform text-anchor text-decoration text-rendering textlength type u1 u2 unicode values viewbox visibility version vert-adv-y vert-origin-x vert-origin-y width word-spacing wrap writing-mode xchannelselector ychannelselector x x1 x2 xmlns y y1 y2 z zoomandpan".split(" ")),
Kc=S("accent accentunder align bevelled close columnsalign columnlines columnspan denomalign depth dir display displaystyle encoding fence frame height href id largeop length linethickness lspace lquote mathbackground mathcolor mathsize mathvariant maxsize minsize movablelimits notation numalign open rowalign rowlines rowspacing rowspan rspace rquote scriptlevel scriptminsize scriptsizemultiplier selection separator separators stretchy subscriptshift supscriptshift symmetric voffset width xmlns".split(" ")),
Lc=S(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Mc=U(/\{\{[\s\S]*|[\s\S]*\}\}/gm),Nc=U(/<%[\s\S]*|[\s\S]*%>/gm),Oc=U(/^data-[\-\w.\u00B7-\uFFFF]/),Pc=U(/^aria-[\-\w]+$/),Qc=U(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Rc=U(/^(?:\w+script|data):/i),Sc=U(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Tc="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===
typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};function Z(a){if(Array.isArray(a)){for(var b=0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}
function Uc(a,b){if("object"!==("undefined"===typeof a?"undefined":Tc(a))||"function"!==typeof a.createPolicy)return null;var c=null;b.currentScript&&b.currentScript.hasAttribute("data-tt-policy-suffix")&&(c=b.currentScript.getAttribute("data-tt-policy-suffix"));var d="dompurify"+(c?"#"+c:"");try{return a.createPolicy(d,{createHTML:function(h){return h}})}catch(h){return console.warn("TrustedTypes policy "+d+" could not be created."),null}}
function Vc(){function a(e){var g,m;d("beforeSanitizeAttributes",e,null);var n=e.attributes;if(n){var G={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:L};for(m=n.length;m--;){var da=g=n[m],R=da.name,Ha=da.namespaceURI;g=vc(g.value);var W=sc(R);G.attrName=W;G.attrValue=g;G.keepAttr=!0;G.forceKeepAttr=void 0;d("uponSanitizeAttribute",e,G);g=G.attrValue;if(!G.forceKeepAttr&&(v(R,e),G.keepAttr))if(wc(/\/>/i,g))v(R,e);else{ia&&(g=X(g,Mc," "),g=X(g,Nc," "));var ed=e.nodeName.toLowerCase();if(b(ed,
W,g))try{Ha?e.setAttributeNS(Ha,R,g):e.setAttribute(R,g),qc(r.removed)}catch(nd){}}}d("afterSanitizeAttributes",e,null)}}function b(e,g,m){if(Sb&&("id"===g||"name"===g)&&(m in P||m in fd))return!1;if(!cb||!wc(Oc,g))if(!Tb||!wc(Pc,g))if(!L[g]||Ub[g]||!(db[g]||wc(ua,X(m,Sc,""))||("src"===g||"xlink:href"===g||"href"===g)&&"script"!==e&&0===uc(m,"data:")&&Vb[e]||Wb&&!wc(Rc,X(m,Sc,"")))&&m)return!1;return!0}function c(e){d("beforeSanitizeElements",e,null);if(p(e))return E(e),!0;if(tc(e.nodeName,/[\u0080-\uFFFF]/))return E(e),
!0;var g=sc(e.nodeName);d("uponSanitizeElement",e,{tagName:g,allowedTags:C});if(!(h(e.firstElementChild)||h(e.content)&&h(e.content.firstElementChild))&&wc(/<[/\w]/g,e.innerHTML)&&wc(/<[/\w]/g,e.textContent))return E(e),!0;if(!C[g]||eb[g]){if(fb&&!gd[g]){var m=z(e),n=A(e);for(g=n.length-1;0<=g;--g)m.insertBefore(q(n[g],!0),y(e))}E(e);return!0}if(e instanceof Ia&&!F(e)||("noscript"===g||"noembed"===g)&&wc(/<\/no(script|embed)/i,e.innerHTML))return E(e),!0;ia&&3===e.nodeType&&(g=e.textContent,g=X(g,
Mc," "),g=X(g,Nc," "),e.textContent!==g&&(rc(r.removed,{element:e.cloneNode()}),e.textContent=g));d("afterSanitizeElements",e,null);return!1}function d(e,g,m){I[e]&&pc(I[e],function(n){n.call(r,g,m,ja)})}function h(e){return"object"===("undefined"===typeof ka?"undefined":Tc(ka))?e instanceof ka:e&&"object"===("undefined"===typeof e?"undefined":Tc(e))&&"number"===typeof e.nodeType&&"string"===typeof e.nodeName}function p(e){return e instanceof va||e instanceof f?!1:"string"===typeof e.nodeName&&"string"===
typeof e.textContent&&"function"===typeof e.removeChild&&e.attributes instanceof gb&&"function"===typeof e.removeAttribute&&"function"===typeof e.setAttribute&&"string"===typeof e.namespaceURI&&"function"===typeof e.insertBefore?!1:!0}function x(e){return H.call(e.ownerDocument||e,e,ea.SHOW_ELEMENT|ea.SHOW_COMMENT|ea.SHOW_TEXT,function(){return ea.FILTER_ACCEPT},!1)}function t(e){var g=void 0,m=void 0;if(hb)e="<remove></remove>"+e;else{var n=tc(e,/^[\r\n\t ]+/);m=n&&n[0]}var G=u?u.createHTML(e):e;
try{g=(new k).parseFromString(G,"text/html")}catch(da){}g&&g.documentElement||(g=ba.createHTMLDocument(""),n=g.body,n.parentNode.removeChild(n.parentNode.firstElementChild),n.outerHTML=G);e&&m&&g.body.insertBefore(P.createTextNode(m),g.body.childNodes[0]||null);return J.call(g,wa?"html":"body")[0]}function v(e,g){try{rc(r.removed,{attribute:g.getAttributeNode(e),from:g})}catch(m){rc(r.removed,{attribute:null,from:g})}g.removeAttribute(e)}function E(e){rc(r.removed,{element:e});try{e.parentNode.removeChild(e)}catch(g){try{e.outerHTML=
M}catch(m){e.remove()}}}function F(e){var g=z(e);g&&g.tagName||(g={namespaceURI:"http://www.w3.org/1999/xhtml",tagName:"template"});var m=sc(e.tagName),n=sc(g.tagName);if("http://www.w3.org/2000/svg"===e.namespaceURI)return"http://www.w3.org/1999/xhtml"===g.namespaceURI?"svg"===m:"http://www.w3.org/1998/Math/MathML"===g.namespaceURI?"svg"===m&&("annotation-xml"===n||Xb[n]):!!Ja[m];if("http://www.w3.org/1998/Math/MathML"===e.namespaceURI)return"http://www.w3.org/1999/xhtml"===g.namespaceURI?"math"===
m:"http://www.w3.org/2000/svg"===g.namespaceURI?"math"===m&&Yb[n]:!!ib[m];if("http://www.w3.org/1999/xhtml"===e.namespaceURI){if("http://www.w3.org/2000/svg"===g.namespaceURI&&!Yb[n]||"http://www.w3.org/1998/Math/MathML"===g.namespaceURI&&!Xb[n])return!1;var G=Y({},["title","style","font","a","script"]);return!ib[m]&&(G[m]||!Ja[m])}return!1}function B(e){ja&&ja===e||(e&&"object"===("undefined"===typeof e?"undefined":Tc(e))||(e={}),e=zc(e),C="ALLOWED_TAGS"in e?Y({},e.ALLOWED_TAGS):Zb,L="ALLOWED_ATTR"in
e?Y({},e.ALLOWED_ATTR):$b,db="ADD_URI_SAFE_ATTR"in e?Y(zc(ac),e.ADD_URI_SAFE_ATTR):ac,Vb="ADD_DATA_URI_TAGS"in e?Y(zc(bc),e.ADD_DATA_URI_TAGS):bc,eb="FORBID_TAGS"in e?Y({},e.FORBID_TAGS):{},Ub="FORBID_ATTR"in e?Y({},e.FORBID_ATTR):{},la="USE_PROFILES"in e?e.USE_PROFILES:!1,Tb=!1!==e.ALLOW_ARIA_ATTR,cb=!1!==e.ALLOW_DATA_ATTR,Wb=e.ALLOW_UNKNOWN_PROTOCOLS||!1,ia=e.SAFE_FOR_TEMPLATES||!1,wa=e.WHOLE_DOCUMENT||!1,xa=e.RETURN_DOM||!1,jb=e.RETURN_DOM_FRAGMENT||!1,cc=!1!==e.RETURN_DOM_IMPORT,Ka=e.RETURN_TRUSTED_TYPE||
!1,hb=e.FORCE_BODY||!1,Sb=!1!==e.SANITIZE_DOM,fb=!1!==e.KEEP_CONTENT,ya=e.IN_PLACE||!1,ua=e.ALLOWED_URI_REGEXP||ua,ia&&(cb=!1),jb&&(xa=!0),la&&(C=Y({},[].concat(Z(Hc))),L=[],!0===la.html&&(Y(C,Bc),Y(L,Ic)),!0===la.svg&&(Y(C,Cc),Y(L,Jc),Y(L,Lc)),!0===la.svgFilters&&(Y(C,Dc),Y(L,Jc),Y(L,Lc)),!0===la.mathMl&&(Y(C,Fc),Y(L,Kc),Y(L,Lc))),e.ADD_TAGS&&(C===Zb&&(C=zc(C)),Y(C,e.ADD_TAGS)),e.ADD_ATTR&&(L===$b&&(L=zc(L)),Y(L,e.ADD_ATTR)),e.ADD_URI_SAFE_ATTR&&Y(db,e.ADD_URI_SAFE_ATTR),fb&&(C["#text"]=!0),wa&&
Y(C,["html","head","body"]),C.table&&(Y(C,["tbody"]),delete eb.tbody),S&&S(e),ja=e)}function r(e){return Vc(e)}var D=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"undefined"===typeof window?null:window;r.version="2.2.6";r.removed=[];if(!D||!D.document||9!==D.document.nodeType)return r.isSupported=!1,r;var Q=D.document,P=D.document,La=D.DocumentFragment,fa=D.HTMLTemplateElement,ka=D.Node,Ia=D.Element,ea=D.NodeFilter,ma=D.NamedNodeMap,gb=void 0===ma?D.NamedNodeMap||D.MozNamedAttrMap:ma,va=
D.Text,f=D.Comment,k=D.DOMParser;ma=D.trustedTypes;var l=Ia.prototype,q=Ac(l,"cloneNode"),y=Ac(l,"nextSibling"),A=Ac(l,"childNodes"),z=Ac(l,"parentNode");"function"===typeof fa&&(fa=P.createElement("template"),fa.content&&fa.content.ownerDocument&&(P=fa.content.ownerDocument));var u=Uc(ma,Q),M=u&&Ka?u.createHTML(""):"",N=P,ba=N.implementation,H=N.createNodeIterator,J=N.getElementsByTagName,T=N.createDocumentFragment,na=Q.importNode,oa={};try{oa=zc(P).documentMode?P.documentMode:{}}catch(e){}var I=
{};r.isSupported=ba&&"undefined"!==typeof ba.createHTMLDocument&&9!==oa;var ua=Qc,C=null,Zb=Y({},[].concat(Z(Bc),Z(Cc),Z(Dc),Z(Fc),Z(Hc))),L=null,$b=Y({},[].concat(Z(Ic),Z(Jc),Z(Kc),Z(Lc))),eb=null,Ub=null,Tb=!0,cb=!0,Wb=!1,ia=!1,wa=!1,kb=!1,hb=!1,xa=!1,jb=!1,cc=!0,Ka=!1,Sb=!0,fb=!0,ya=!1,la={},gd=Y({},"annotation-xml audio colgroup desc foreignobject head iframe math mi mn mo ms mtext noembed noframes noscript plaintext script style svg template thead title video xmp".split(" ")),Vb=null,bc=Y({},
"audio video img source image track".split(" ")),db=null,ac=Y({},"alt class for id label name pattern placeholder summary title value style xmlns".split(" ")),ja=null,fd=P.createElement("form"),Xb=Y({},["mi","mo","mn","ms","mtext"]),Yb=Y({},["foreignobject","desc","title","annotation-xml"]),Ja=Y({},Cc);Y(Ja,Dc);Y(Ja,Ec);var ib=Y({},Fc);Y(ib,Gc);var hd=function m(g){var n=void 0,G=x(g);for(d("beforeSanitizeShadowDOM",g,null);n=G.nextNode();)d("uponSanitizeShadowNode",n,null),c(n)||(n.content instanceof
La&&m(n.content),a(n));d("afterSanitizeShadowDOM",g,null)};r.sanitize=function(g,m){var n=void 0,G=void 0,da=void 0,R=void 0;g||(g="\x3c!--\x3e");if("string"!==typeof g&&!h(g)){if("function"!==typeof g.toString)throw yc("toString is not a function");g=g.toString();if("string"!==typeof g)throw yc("dirty is not a string, aborting");}if(!r.isSupported){if("object"===Tc(D.toStaticHTML)||"function"===typeof D.toStaticHTML){if("string"===typeof g)return D.toStaticHTML(g);if(h(g))return D.toStaticHTML(g.outerHTML)}return g}kb||
B(m);r.removed=[];"string"===typeof g&&(ya=!1);if(!ya)if(g instanceof ka)n=t("\x3c!----\x3e"),G=n.ownerDocument.importNode(g,!0),1===G.nodeType&&"BODY"===G.nodeName?n=G:"HTML"===G.nodeName?n=G:n.appendChild(G);else{if(!xa&&!ia&&!wa&&-1===g.indexOf("<"))return u&&Ka?u.createHTML(g):g;n=t(g);if(!n)return xa?null:M}n&&hb&&E(n.firstChild);for(var Ha=x(ya?g:n);m=Ha.nextNode();)3===m.nodeType&&m===da||c(m)||(m.content instanceof La&&hd(m.content),a(m),da=m);da=null;if(ya)return g;if(xa){if(jb)for(R=T.call(n.ownerDocument);n.firstChild;)R.appendChild(n.firstChild);
else R=n;cc&&(R=na.call(Q,R,!0));return R}var W=wa?n.outerHTML:n.innerHTML;ia&&(W=X(W,Mc," "),W=X(W,Nc," "));return u&&Ka?u.createHTML(W):W};r.setConfig=function(g){B(g);kb=!0};r.clearConfig=function(){ja=null;kb=!1};r.isValidAttribute=function(g,m,n){ja||B({});g=sc(g);m=sc(m);return b(g,m,n)};r.addHook=function(g,m){"function"===typeof m&&(I[g]=I[g]||[],rc(I[g],m))};r.removeHook=function(g){I[g]&&qc(I[g])};r.removeHooks=function(g){I[g]&&(I[g]=[])};r.removeAllHooks=function(){I={}};return r}
var Wc=Vc();var Xc={script:{attribute:"type",values:["application/json","application/ld+json"]}},Yc={USE_PROFILES:{html:!0,svg:!0,svgFilters:!0}};function Zc(a){this.A=a;this.K=1;this.h=Wc(self);this.F=Wc(self);a=Object.assign({},Object.assign({},Yc,{ADD_ATTR:Ib,ADD_TAGS:["use"],FORBID_TAGS:Object.keys(Fb),FORCE_BODY:!0,RETURN_DOM:!0,ALLOW_UNKNOWN_PROTOCOLS:!0}));this.h.setConfig(a);$c(this,this.h);ad(this.F)}Zc.prototype.purifyHtml=function(a){return this.h.sanitize(a)};
Zc.prototype.purifyTagsForTripleMustache=function(a){a=this.F.sanitize(a,{ALLOWED_TAGS:Hb,FORCE_BODY:!0,RETURN_DOM_FRAGMENT:!0});var b=this.A.createElement("div");b.appendChild(a);return b.innerHTML};Zc.prototype.getAllowedTags=function(){var a={};this.h.addHook("uponSanitizeElement",function(c,d){Object.assign(a,d.allowedTags)});var b=this.A.createElement("p");this.h.sanitize(b);Object.keys(Fb).forEach(function(c){a[c]=!1});this.h.removeHook("uponSanitizeElement");return a};
Zc.prototype.validateAttributeChange=function(a,b,c){var d=a.nodeName.toLowerCase(),h=Xc[d];if(h){var p=h.values;if(h.attribute===b&&(null==c||!p.includes(c)))return!1}if("a"===d&&"target"===b&&(null==c||!Kb.includes(c)))return!1;if(null==c)return!0;if(bd(b)!==cd)return!1;if(!this.h.isValidAttribute(d,b,c)){var x=Jb[d];if(!(x&&x.includes(b)||d.startsWith("amp-")))return!1}a=a.ownerDocument?a.ownerDocument:a;return c&&!fc(d,b,c,a)?!1:!0};
function $c(a,b){var c=Ya(a.A),d,h=[],p,x=[];b.addHook("uponSanitizeElement",function(t,v){var E=v.tagName;d=v.allowedTags;E.startsWith("amp-")&&(d[E]=!c||Gb[E]);"a"===E&&t.hasAttribute("href")&&!t.hasAttribute("target")&&t.setAttribute("target","_top");var F=Xc[E];F&&(v=F.attribute,F=F.values,t.hasAttribute(v)&&F.includes(t.getAttribute(v))&&(d[E]=!0,h.push(E)))});b.addHook("afterSanitizeElements",function(){h.forEach(function(t){delete d[t]});h.length=0});b.addHook("uponSanitizeAttribute",function(t,
v){function E(){p[B]||(p[B]=!0,x.push(B))}var F=t.nodeName.toLowerCase(),B=v.attrName,r=v.attrValue;p=v.allowedAttributes;if(F.startsWith("amp-"))E();else{if("a"==F&&"target"==B){var D=r.toLowerCase();r=Kb.includes(D)?D:"_top"}var Q=Jb[F];Q&&Q.includes(B)&&E()}var P=bd(B);P===dd&&(Q=B.substring(1,B.length-1),t.setAttribute("data-amp-bind-"+Q,r));P!==cd&&t.setAttribute("i-amphtml-binding","");fc(F,B,r,a.A)?zb&&r&&!B.startsWith("data-amp-bind-")&&(r=zb(F,B,r)):(v.keepAttr=!1,Fa().error("purifier",'Removed invalid attribute %s[%s="%s"].',
F,B,r));v.attrValue=r});b.addHook("afterSanitizeAttributes",function(t){Eb(t,function(){return String(a.K++)});x.forEach(function(v){delete p[v]});x.length=0;"use"===t.nodeName.toLowerCase()&&["href","xlink:href"].forEach(function(v){t.hasAttribute(v)&&!t.getAttribute(v).startsWith("#")&&(t.parentElement&&t.parentElement.removeChild(t),Fa().error("purifier",'Removed invalid <use>. use[href] must start with "#".'))})})}
function ad(a){var b;a.addHook("uponSanitizeElement",function(c,d){var h=d.tagName;b=d.allowedTags;"template"===h&&(c=c.getAttribute("type"))&&"amp-mustache"===c.toLowerCase()&&(b.template=!0)});a.addHook("afterSanitizeElements",function(){b.template=!1})}var cd=0,dd=1,id=2;function bd(a){return"["==a[0]&&"]"==a[a.length-1]?dd:a.startsWith("data-amp-bind-")?id:cd};/*
 mustache.js - Logic-less {{mustache}} templates with JavaScript
 http://github.com/janl/mustache.js
*/
var jd={};
(function(a){function b(f){return"function"===typeof f}function c(f){return Q(f)?"array":typeof f}function d(f){return f.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function h(f,k){return null!=f&&"object"===typeof f&&Object.prototype.hasOwnProperty.call(f,k)}function p(f,k){return P.call(f,k)}function x(f){return!p(La,f)}function t(f,k){function l(){if(z&&!u)for(;A.length;)delete y[A.pop()];else A=[];u=z=!1}if(!f)return[];var q=[],y=[],A=[],z=!1,u=!1,M,N,ba;(function(C){"string"===typeof C&&(C=
C.split(Ia,2));if(!Q(C)||2!==C.length)throw Error("Invalid tags: "+C);M=new RegExp(d(C[0])+"\\s*");N=new RegExp("\\s*"+d(C[1]));ba=new RegExp("\\s*"+d("}"+C[1]))})(k||a.tags);for(var H=new F(f),J,T,na,oa,I;!H.eos();){f=H.pos;if(T=H.scanUntil(M)){J=0;for(var ua=T.length;J<ua;++J)na=T.charAt(J),x(na)?A.push(y.length):u=!0,y.push(["text",na,f,f+1]),f+=1,"\n"===na&&l()}if(!H.scan(M))break;z=!0;J=H.scan(gb)||"name";H.scan(ka);"="===J?(T=H.scanUntil(ea),H.scan(ea),H.scanUntil(N)):"{"===J?(T=H.scanUntil(ba),
H.scan(ma),H.scanUntil(N),J="&"):T=H.scanUntil(N);if(!H.scan(N))throw Error("Unclosed tag at "+H.pos);oa=[J,T,f,H.pos];y.push(oa);if("#"===J||"^"===J)q.push(oa);else if("/"===J){I=q.pop();if(!I)throw Error('Unopened section "'+T+'" at '+f);if(I[1]!==T)throw Error('Unclosed section "'+I[1]+'" at '+f);}else if("name"===J||"{"===J||"&"===J)u=!0}if(I=q.pop())throw Error('Unclosed section "'+I[1]+'" at '+H.pos);return E(v(y))}function v(f){for(var k=[],l,q,y=0,A=f.length;y<A;++y)if(l=f[y])"text"===l[0]&&
q&&"text"===q[0]?(q[1]+=l[1],q[3]=l[3]):(k.push(l),q=l);return k}function E(f){for(var k=[],l=k,q=[],y,A,z=0,u=f.length;z<u;++z)switch(y=f[z],y[0]){case "#":case "^":l.push(y);q.push(y);l=y[4]=[];break;case "/":A=q.pop();A[5]=y[2];l=0<q.length?q[q.length-1][4]:k;break;default:l.push(y)}return k}function F(f){this.tail=this.string=f;this.pos=0}function B(f,k){this.view=f;this.cache={".":this.view};this.parent=k}function r(){this.cache={}}var D=Object.prototype.toString,Q=Array.isArray||function(f){return"[object Array]"===
D.call(f)},P=RegExp.prototype.test,La=/\S/,fa={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},ka=/\s*/,Ia=/\s+/,ea=/\s*=/,ma=/\s*\}/,gb=/#|\^|\/|>|\{|&|=|!/;F.prototype.eos=function(){return""===this.tail};F.prototype.scan=function(f){f=this.tail.match(f);if(!f||0!==f.index)return"";f=f[0];this.tail=this.tail.substring(f.length);this.pos+=f.length;return f};F.prototype.scanUntil=function(f){f=this.tail.search(f);switch(f){case -1:var k=this.tail;
this.tail="";break;case 0:k="";break;default:k=this.tail.substring(0,f),this.tail=this.tail.substring(f)}this.pos+=k.length;return k};B.prototype.push=function(f){return new B(f,this)};B.prototype.lookup=function(f){var k=this.cache;if(k.hasOwnProperty(f))var l=k[f];else{for(var q=this,y,A,z=!1;q;){if(0<f.indexOf("."))for(l=q.view,y=f.split("."),A=0;null!=l&&A<y.length;){if(!h(l,y[A])){l=null;break}A===y.length-1&&(z=!0);l=l[y[A++]]}else h(q.view,f)?(l=q.view[f],z=!0):l=null;if(z)break;q=q.parent}k[f]=
l}b(l)&&(l=l.call(this.view));return l};r.prototype.clearCache=function(){this.cache={}};r.prototype.parse=function(f,k){var l=this.cache,q=l[f];null==q&&(q=l[f]=t(f,k));return q};r.prototype.render=function(f,k,l){var q=this.parse(f);k=k instanceof B?k:new B(k);return this.renderTokens(q,k,l,f)};r.prototype.renderTokens=function(f,k,l,q){for(var y="",A,z,u,M=0,N=f.length;M<N;++M)u=void 0,A=f[M],z=A[0],"#"===z?u=this.renderSection(A,k,l,q):"^"===z?u=this.renderInverted(A,k,l,q):">"===z?u=this.renderPartial(A,
k,l,q):"&"===z?u=this.unescapedValue(A,k):"name"===z?u=this.escapedValue(A,k):"text"===z&&(u=this.rawValue(A)),void 0!==u&&(y+=u);return y};r.prototype.renderSection=function(f,k,l,q){function y(ba){return A.render(ba,k,l)}var A=this,z="",u=k.lookup(f[1]);if(u){if(Q(u))for(var M=0,N=u.length;M<N;++M)z+=this.renderTokens(f[4],k.push(u[M]),l,q);else if("object"===typeof u||"string"===typeof u||"number"===typeof u)z+=this.renderTokens(f[4],k.push(u),l,q);else if(b(u)){if("string"!==typeof q)throw Error("Cannot use higher-order sections without the original template");
u=u.call(k.view,q.slice(f[3],f[5]),y);null!=u&&(z+=u)}else z+=this.renderTokens(f[4],k,l,q);return z}};r.prototype.renderInverted=function(f,k,l,q){var y=k.lookup(f[1]);if(!y||Q(y)&&0===y.length)return this.renderTokens(f[4],k,l,q)};r.prototype.renderPartial=function(f,k,l){if(l&&(f=b(l)?l(f[1]):l[f[1]],null!=f))return this.renderTokens(this.parse(f),k,l,f)};r.prototype.unescapedValue=function(f,k){f=k.lookup(f[1]);if(null!=f)return a.sanitizeUnescaped?a.sanitizeUnescaped(f):f};r.prototype.escapedValue=
function(f,k){f=k.lookup(f[1]);if(null!=f)return a.escape(f)};r.prototype.rawValue=function(f){return f[1]};a.name="mustache.js";a.version="2.2.0";a.tags=["{{","}}"];var va=new r;a.clearCache=function(){return va.clearCache()};a.parse=function(f,k){return va.parse(f,k)};a.render=function(f,k,l){if("string"!==typeof f)throw new TypeError('Invalid template! Template should be a "string" but "'+c(f)+'" was given as the first argument for mustache#render(template, view, partials)');return va.render(f,
k,l)};a.to_html=function(f,k,l,q){f=a.render(f,k,l);if(b(q))q(f);else return f};a.escape=function(f){return String(f).replace(/[&<>"'`=\/]/g,function(k){return fa[k]})};a.sanitizeUnescaped=null;a.setUnescapedSanitizer=function(f){a.sanitizeUnescaped=f};a.Scanner=F;a.Context=B;a.Writer=r})(jd);function kd(a,b){Wa.call(this,a,b);var c=this;Ma(b,function(){return new Zc(b.document)});this.C=Pa(b,"purifier");jd.setUnescapedSanitizer(function(d){return c.C.purifyTagsForTripleMustache(d)})}ta(kd,Wa);
kd.prototype.compileCallback=function(){if(!this.viewerCanRenderTemplates()){this.G={};if("TEMPLATE"==this.element.tagName){var a=this.element;if("content"in a)var b=a.content.cloneNode(!0);else{b=a.ownerDocument.createDocumentFragment();var c=b.ownerDocument.createDocumentFragment();for(a=a.firstChild;a;a=a.nextSibling)c.appendChild(a.cloneNode(!0));b.appendChild(c)}ld(this,b);c=this.element.ownerDocument.createElement("div");c.appendChild(b);b=c.innerHTML}else b="SCRIPT"==this.element.tagName?this.element.textContent:
"";this.H=b;try{jd.parse(this.H,void 0)}catch(d){Fa().error("amp-mustache",d.message,this.element)}}};function ld(a,b){var c=b.querySelectorAll("template");Va(c,function(d,h){h="__AMP_NESTED_TEMPLATE_"+h;a.G[h]=d.outerHTML;var p=a.element.ownerDocument.createTextNode("{{{"+h+"}}}");d.parentNode.replaceChild(p,d)})}kd.prototype.setHtml=function(a){var b=this.tryUnwrap(this.C.purifyHtml("<div><div>"+(a+"</div></div>")).firstElementChild);return this.unwrapChildren(b)};
kd.prototype.render=function(a){return this.tryUnwrap(md(this,a))};kd.prototype.renderAsString=function(a){return md(this,a).innerHTML};function md(a,b){var c=b;"object"===typeof b&&(c=Object.assign({},b,a.G));b=jd.render(a.H,c,void 0);return a.C.purifyHtml("<div>"+b+"</div>").firstElementChild}(function(a){a.registerTemplate("amp-mustache",kd)})(self.AMP);
})});

//# sourceMappingURL=amp-mustache-0.2.js.map