(self.AMP=self.AMP||[]).push({n:"amp-selector",ev:"0.1",l:true,v:"2103122145004",m:0,f:(function(AMP,_){
'use strict';var k,l="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b};function m(a){for(var b=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global],c=0;c<b.length;++c){var d=b[c];if(d&&d.Math==Math)return}(function(){throw Error("Cannot find global object");})()}m(this);"function"===typeof Symbol&&Symbol("x");var n;
if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var p;a:{var q={a:!0},r={};try{r.__proto__=q;p=r.a;break a}catch(a){}p=!1}n=p?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=n,u;function v(){return u?u:u=Promise.resolve(void 0)};function w(a){return a?Array.prototype.slice.call(a):[]};var x=self.AMP_CONFIG||{},y=("string"==typeof x.cdnProxyRegex?new RegExp(x.cdnProxyRegex):x.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;function z(a){if(self.document&&self.document.head&&(!self.location||!y.test(self.location.origin))){var b=self.document.head.querySelector('meta[name="'+a+'"]');b&&b.getAttribute("content")}}x.cdnUrl||z("runtime-host");x.geoApiUrl||z("amp-geo-api");self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var A=self.__AMP_LOG;function B(){if(!A.user)throw Error("failed to call initLogConstructor");return A.user}function C(a,b){B().assert(a,b,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0)};function E(a){a=F(a);a=F(a);a=a.isSingleDoc()?a.win:a;return G(a,"action")?H(a,"action"):null}function F(a){if(a.nodeType){var b=(a.ownerDocument||a).defaultView;b=b.__AMP_TOP||(b.__AMP_TOP=b);a=H(b,"ampdoc").getAmpDoc(a)}return a}function H(a,b){G(a,b);var c=a.__AMP_SERVICES;c||(c=a.__AMP_SERVICES={});a=c[b];a.obj||(a.obj=new a.ctor(a.context),a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}function G(a,b){a=a.__AMP_SERVICES&&a.__AMP_SERVICES[b];return!(!a||!a.ctor)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function I(a,b){for(;a&&void 0!==a;a=a.parentElement)if(b(a))return a;return null}function J(a){return a.closest?a.closest("[option]"):I(a,function(b){var c=b.matches||b.webkitMatchesSelector||b.mozMatchesSelector||b.msMatchesSelector||b.oMatchesSelector;return c?c.call(b,"[option]"):!1})}function K(a){return"rtl"==(a.body.getAttribute("dir")||a.documentElement.getAttribute("dir")||"ltr")};function L(a,b){if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0};var M={NONE:"none",FOCUS:"focus",SELECT:"select"};function N(a){a=AMP.BaseElement.call(this,a)||this;a.A=!1;a.o=[];a.h=[];a.F=[];a.C=null;a.j=0;a.B="none";return a}var O=AMP.BaseElement;N.prototype=l(O.prototype);N.prototype.constructor=N;if(t)t(N,O);else for(var P in O)if("prototype"!=P)if(Object.defineProperties){var Q=Object.getOwnPropertyDescriptor(O,P);Q&&Object.defineProperty(N,P,Q)}else N[P]=O[P];N.L=O.prototype;N.prerenderAllowed=function(){return!0};k=N.prototype;k.isLayoutSupported=function(){return!0};
k.buildCallback=function(){var a=this;this.C=E(this.element);this.A=this.element.hasAttribute("multiple");this.element.hasAttribute("role")||this.element.setAttribute("role","listbox");this.A&&this.element.setAttribute("aria-multiselectable","true");this.element.hasAttribute("disabled")&&this.element.setAttribute("aria-disabled","true");var b=this.element.getAttribute("keyboard-select-mode");b?(b=b.toLowerCase(),B().assertEnumValue(M,b),C(!(this.A&&"select"==b),"[keyboard-select-mode=select] not supported for multiple selection amp-selector")):
b="none";this.B=b;this.registerAction("clear",this.D.bind(this));R(this);this.element.addEventListener("click",this.G.bind(this));this.element.addEventListener("keydown",this.H.bind(this));this.registerAction("selectUp",function(c){var d=c.args;S(a,d&&void 0!==d.delta?-d.delta:-1,c.trust)},1);this.registerAction("selectDown",function(c){var d=c.args;S(a,d&&void 0!==d.delta?d.delta:1,c.trust)},1);this.registerAction("toggle",function(c){var d=c.args;c=c.trust;C(0<=d.index,"'index' must be greater than 0");
C(d.index<a.h.length,"'index' must be less than the length of options in the <amp-selector>");return d&&void 0!==d.index?aa(a,d.index,d.value,c):Promise.reject("'index' must be specified")},1);this.C.addToAllowlist("amp-selector",["clear","selectDown","selectUp","toggle"],["email"]);this.element.addEventListener("amp:dom-update",this.I.bind(this))};
k.mutatedAttributesCallback=function(a){var b=a.selected;void 0!==b&&ba(this,b);var c=a.disabled;void 0!==c&&(c?this.element.setAttribute("aria-disabled","true"):this.element.removeAttribute("aria-disabled"))};
function ba(a,b){var c=Array.isArray(b)?b:[b];if(null===b||0==c.length)a.D();else{a.A||(c=c.slice(0,1));var d=T(a);if(!L(d.sort(),c.sort())){var e=c.reduce(function(f,h){f[h]=!0;return f},Object.create(null));for(b=0;b<a.h.length;b++){c=a.h[b];var g=c.getAttribute("option");e[g]?U(a,c):V(a,c)}W(a);X(a)}}}function W(a,b){if("none"!=a.B){a.h.forEach(function(d){d.tabIndex=-1});var c=b;c||(c=a.A?a.h[0]:a.o[0]||a.h[0]);c&&(a.j=a.h.indexOf(c),c.tabIndex=0)}}
k.I=function(){var a=w(this.element.querySelectorAll("[option]"));L(this.h,a)||R(this,a)};function R(a,b){a.o.length=0;var c=b?b:w(a.element.querySelectorAll("[option]"));c.forEach(function(d){d.hasAttribute("role")||d.setAttribute("role","option");d.hasAttribute("disabled")&&d.setAttribute("aria-disabled","true");d.hasAttribute("selected")?U(a,d):V(a,d);d.tabIndex=0});a.h=c;W(a);X(a)}
function X(a){var b=[],c=a.element.getAttribute("name");if(c&&!a.element.hasAttribute("disabled")){var d=a.element.getAttribute("form");a.F.forEach(function(f){a.element.removeChild(f)});a.F=[];var e=a.win.document,g=e.createDocumentFragment();a.o.forEach(function(f){if(!f.hasAttribute("disabled")){var h=e.createElement("input");f=f.getAttribute("option");h.setAttribute("type","hidden");h.setAttribute("name",c);h.setAttribute("value",f);d&&h.setAttribute("form",d);a.F.push(h);g.appendChild(h);b.push(f)}});
a.element.appendChild(g)}}function Y(a,b){b.hasAttribute("disabled")||a.mutateElement(function(){b.hasAttribute("selected")?a.A&&(V(a,b),X(a)):(U(a,b),X(a));W(a,b);Z(a,b,3)})}function T(a){return a.o.map(function(b){return b.getAttribute("option")})}k.G=function(a){!this.element.hasAttribute("disabled")&&(a=a.target)&&(a.hasAttribute("option")||(a=J(a)),a&&Y(this,a))};
function aa(a,b,c,d){var e=a.h[b],g=e.hasAttribute("selected"),f=void 0!==c?c:!g,h=a.h.indexOf(a.o[0]);return f===g?v():a.mutateElement(function(){if(h!==b){U(a,e);var D=a.h[h];D&&V(a,D)}else V(a,e);Z(a,e,d)})}
function Z(a,b,c){var d=a.win;b={targetOption:b.getAttribute("option"),selectedOptions:T(a)};var e={detail:b};Object.assign(e,void 0);"function"==typeof d.CustomEvent?d=new d.CustomEvent("amp-selector.select",e):(d=d.document.createEvent("CustomEvent"),d.initCustomEvent("amp-selector.select",!!e.bubbles,!!e.cancelable,b));var g=d;2>c&&B().warn("amp-selector",'"select" event now has the same trust as the originating action. See https://github.com/ampproject/amphtml/issues/24443 for details.');a.C.trigger(a.element,
"select",g,c)}function S(a,b,c){var d=a.h.indexOf(a.o[0]);b=-1===d&&0>b?b:d+b;var e=a.h.length;b=a.h[0<b&&0<e?b%e:(b%e+e)%e];U(a,b);var g=a.h[d];g&&V(a,g);X(a);Z(a,b,c)}k.H=function(a){if(this.element.hasAttribute("disabled"))return v();switch(a.key){case "ArrowLeft":case "ArrowUp":case "ArrowRight":case "ArrowDown":case "Home":case "End":if("none"!=this.B)return ca(this,a);break;case "Enter":case " ":var b=a.key;" "!=b&&"Enter"!=b||!this.h.includes(a.target)||(a.preventDefault(),Y(this,a.target))}return v()};
function ca(a,b){var c=a.win.document,d=0;switch(b.key){case "ArrowLeft":d=K(c)?1:-1;break;case "ArrowUp":d=-1;break;case "ArrowRight":d=K(c)?-1:1;break;case "ArrowDown":d=1;break;case "Home":d=1;break;case "End":d=-1;break;default:return v()}b.preventDefault();a.h[a.j].tabIndex=-1;return da(a).then(function(e){var g=a.j;switch(b.key){case "Home":a.j=a.h.length-1;break;case "End":a.j=0}do a.j=(a.j+d)%a.h.length,0>a.j&&(a.j+=a.h.length);while(ea(a.h[a.j],e[a.j])&&a.j!=g);var f=a.h[a.j];f.tabIndex=
0;try{f.focus()}catch(D){}var h=a.h[a.j];"select"==a.B&&Y(a,h)})}function V(a,b){b.removeAttribute("selected");b.setAttribute("aria-selected","false");var c=a.o.indexOf(b);-1!==c&&a.o.splice(c,1)}k.D=function(){for(;0<this.o.length;){var a=this.o.pop();V(this,a)}X(this)};function U(a,b){a.o.includes(b)||(a.A||a.D(),b.setAttribute("selected",""),b.setAttribute("aria-selected","true"),a.o.push(b))}k.J=function(){return this.h};k.K=function(){return this.o};
function da(a){return a.measureElement(function(){return a.h.map(function(b){return b.getBoundingClientRect()})})}function ea(a,b){var c=b.width,d=b.height;return a.hidden||0==c||0==d}(function(a){a.registerElement("amp-selector",N,"amp-selector [option]{cursor:pointer}amp-selector [option][selected]{cursor:auto;outline:1px solid rgba(0,0,0,0.7)}amp-selector[multiple] [option][selected]{cursor:pointer;outline:1px solid rgba(0,0,0,0.7)}amp-selector [disabled][option],amp-selector[disabled] [option],amp-selector[disabled] [selected],amp-selector [selected][disabled]{cursor:auto;outline:none}\n/*# sourceURL=/extensions/amp-selector/0.1/amp-selector.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-selector-0.1.js.map