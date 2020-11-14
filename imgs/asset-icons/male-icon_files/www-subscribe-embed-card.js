(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function t(a,b){if(b)a:{for(var c=da,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function fa(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ha="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ia;
if("function"==typeof Object.setPrototypeOf)ia=Object.setPrototypeOf;else{var ja;a:{var ka={a:!0},la={};try{la.__proto__=ka;ja=la.a;break a}catch(a){}ja=!1}ia=ja?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ma=ia;
function v(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(ma)ma(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.F=b.prototype}
function na(){this.o=!1;this.i=null;this.C=void 0;this.g=1;this.j=this.l=0;this.K=this.f=null}
function oa(a){if(a.o)throw new TypeError("Generator is already running");a.o=!0}
na.prototype.A=function(a){this.C=a};
function pa(a,b){a.f={va:b,ea:!0};a.g=a.l||a.j}
na.prototype["return"]=function(a){this.f={"return":a};this.g=this.j};
function qa(a,b){a.g=5;return{value:b}}
na.prototype.X=function(a){this.g=a};
function ra(a){a.l=2;a.j=3}
function sa(a){a.l=0;a.f=null}
function ua(a){a.K=[a.f];a.l=0;a.j=0}
function va(a){var b=a.K.splice(0)[0];(b=a.f=a.f||b)?b.ea?a.g=a.l||a.j:void 0!=b.X&&a.j<b.X?(a.g=b.X,a.f=null):a.g=a.j:a.g=4}
function wa(a){this.f=new na;this.g=a}
function xa(a,b){oa(a.f);var c=a.f.i;if(c)return ya(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return za(a)}
function ya(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.o=!1,e;var f=e.value}catch(g){return a.f.i=null,pa(a.f,g),za(a)}a.f.i=null;d.call(a.f,f);return za(a)}
function za(a){for(;a.f.g;)try{var b=a.g(a.f);if(b)return a.f.o=!1,{value:b.value,done:!1}}catch(c){a.f.C=void 0,pa(a.f,c)}a.f.o=!1;if(a.f.f){b=a.f.f;a.f.f=null;if(b.ea)throw b.va;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function Aa(a){this.next=function(b){oa(a.f);a.f.i?b=ya(a,a.f.i.next,b,a.f.A):(a.f.A(b),b=za(a));return b};
this["throw"]=function(b){oa(a.f);a.f.i?b=ya(a,a.f.i["throw"],b,a.f.A):(pa(a.f,b),b=za(a));return b};
this["return"]=function(b){return xa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ba(a,b){var c=new Aa(new wa(b));ma&&a.prototype&&ma(c,a.prototype);return c}
t("Reflect.setPrototypeOf",function(a){return a?a:ma?function(b,c){try{return ma(b,c),!0}catch(d){return!1}}:null});
function Ca(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ca(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ca(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
t("Object.setPrototypeOf",function(a){return a||ma});
function y(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Da="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)y(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Da});
t("Promise",function(a){function b(g){this.f=0;this.i=void 0;this.g=[];this.A=!1;var h=this.j();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.i(function(){h.l()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.l=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.j(l)}}}this.f=null};
c.prototype.j=function(g){this.i(function(){throw g;})};
b.prototype.j=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.oa),reject:g(this.l)}};
b.prototype.oa=function(g){if(g===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ra(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.na(g):this.o(g)}};
b.prototype.na=function(g){var h=void 0;try{h=g.then}catch(k){this.l(k);return}"function"==typeof h?this.sa(h,g):this.o(g)};
b.prototype.l=function(g){this.C(2,g)};
b.prototype.o=function(g){this.C(1,g)};
b.prototype.C=function(g,h){if(0!=this.f)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.f);this.f=g;this.i=h;2===this.f&&this.qa();this.K()};
b.prototype.qa=function(){var g=this;e(function(){if(g.W()){var h=da.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.W=function(){if(this.A)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.K=function(){if(null!=this.g){for(var g=0;g<this.g.length;++g)f.g(this.g[g]);this.g=null}};
var f=new c;b.prototype.ra=function(g){var h=this.j();g.O(h.resolve,h.reject)};
b.prototype.sa=function(g,h){var k=this.j();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,p){return"function"==typeof q?function(w){try{l(q(w))}catch(x){m(x)}}:p}
var l,m,n=new b(function(q,p){l=q;m=p});
this.O(k(g,l),k(h,m));return n};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.O=function(g,h){function k(){switch(l.f){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.f);}}
var l=this;null==this.g?f.g(k):this.g.push(k);this.A=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).O(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(w){return function(x){q[w]=x;p--;0==p&&l(q)}}
var q=[],p=0;do q.push(void 0),p++,d(k.value).O(n(q.length-1),m),k=h.next();while(!k.done)})};
return b});
function Ea(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ea(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ea(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ea(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ca(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)y(b,d)&&c.push([d,b[d]]);return c}});
t("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!y(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m["delete"](k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!y(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&y(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&y(k,g)&&y(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&y(k,g)&&y(k[g],this.f)?delete k[g][this.f]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ea(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.g[l];if(m&&y(h.g,l))for(var n=0;n<m.length;n++){var q=m[n];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:n,B:q}}return{id:l,list:m,index:-1,B:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.B?l.B.value=k:(l.B={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.B),this.f.previous.next=l.B,this.f.previous=l.B,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.B&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.B.previous.next=h.B.next,h.B.next.previous=h.B.previous,h.B.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).B};
e.prototype.get=function(h){return(h=d(this,h).B)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var z=this||self;function A(a,b){for(var c=a.split("."),d=b||z,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Fa(){}
function Ga(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ha(a){var b=Ga(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ja(a,b,c){return a.call.apply(a.bind,arguments)}
function Ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function La(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?La=Ja:La=Ka;return La.apply(null,arguments)}
function Ma(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function B(a,b){var c=a.split("."),d=z;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function C(a,b){function c(){}
c.prototype=b.prototype;a.F=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ua=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Na(a){return a}
function Oa(a){var b=null,c=z.trustedTypes;if(!c||!c.createPolicy)return b;try{b=c.createPolicy(a,{createHTML:Na,createScript:Na,createScriptURL:Na})}catch(d){z.console&&z.console.error(d.message)}return b}
;function Pa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Pa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
C(Pa,Error);Pa.prototype.name="CustomError";function Qa(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.j=!b&&/[?&]ae=2(&|$)/.test(a);if((this.f=/[?&]adurl=([^&]*)/.exec(a))&&this.f[1]){try{var c=decodeURIComponent(this.f[1])}catch(d){c=null}this.g=c}}
;var Ra=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Sa=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ta=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ua(a,b){var c=Ra(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function Va(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Xa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ha(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Ya(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Za(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=Za(a[c]);return b}
var $a="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ab(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<$a.length;f++)c=$a[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var bb;var cb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function db(a,b){if(b)a=a.replace(eb,"&amp;").replace(fb,"&lt;").replace(gb,"&gt;").replace(hb,"&quot;").replace(ib,"&#39;").replace(jb,"&#0;");else{if(!kb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(eb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(fb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(gb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(hb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(ib,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(jb,"&#0;"))}return a}
var eb=/&/g,fb=/</g,gb=/>/g,hb=/"/g,ib=/'/g,jb=/\x00/g,kb=/[\x00&<>"']/;function lb(a,b){return a<b?-1:a>b?1:0}
;function E(a,b){this.f=b===mb?a:""}
E.prototype.T=!0;E.prototype.P=function(){return this.f.toString()};
E.prototype.da=!0;E.prototype.ca=function(){return 1};
var nb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,ob=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,pb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,mb={},qb=new E("about:invalid#zClosurez",mb);var F;a:{var rb=z.navigator;if(rb){var sb=rb.userAgent;if(sb){F=sb;break a}}F=""}function H(a){return-1!=F.indexOf(a)}
;function tb(a,b,c){this.f=c===ub?a:"";this.g=b}
tb.prototype.da=!0;tb.prototype.ca=function(){return this.g};
tb.prototype.T=!0;tb.prototype.P=function(){return this.f.toString()};
var ub={};function vb(a,b){void 0===bb&&(bb=Oa("goog#html"));var c=(c=bb)?c.createHTML(a):a;return new tb(c,b,ub)}
;function wb(a){return a=db(a,void 0)}
;var xb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function yb(a){return a?decodeURI(a):a}
function I(a){return yb(a.match(xb)[3]||null)}
function zb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)zb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Ab(a){var b=[],c;for(c in a)zb(c,a[c],b);return b.join("&")}
var Bb=/#|$/;function Cb(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function Db(a){Db[" "](a);return a}
Db[" "]=Fa;var Fb=H("Opera"),Gb=H("Trident")||H("MSIE"),Hb=H("Edge"),Ib=H("Gecko")&&!(-1!=F.toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),Jb=-1!=F.toLowerCase().indexOf("webkit")&&!H("Edge");function Kb(){var a=z.document;return a?a.documentMode:void 0}
var Lb;a:{var Mb="",Nb=function(){var a=F;if(Ib)return/rv:([^\);]+)(\)|;)/.exec(a);if(Hb)return/Edge\/([\d\.]+)/.exec(a);if(Gb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Jb)return/WebKit\/(\S+)/.exec(a);if(Fb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Nb&&(Mb=Nb?Nb[1]:"");if(Gb){var Ob=Kb();if(null!=Ob&&Ob>parseFloat(Mb)){Lb=String(Ob);break a}}Lb=Mb}var Pb=Lb,Qb={},Rb;if(z.document&&Gb){var Sb=Kb();Rb=Sb?Sb:parseInt(Pb,10)||void 0}else Rb=void 0;var Tb=Rb;var Ub=H("Firefox")||H("FxiOS"),Vb=H("iPhone")&&!H("iPod")&&!H("iPad")||H("iPod"),Wb=H("iPad");var Xb={},Yb=null;var J=window;function Zb(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||z.$googDebugFname||b}catch(g){e="Not available",c=!0}b=$b(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ac[c])c=ac[c];else{c=String(c);if(!ac[c]){var f=/function\s+([^\(]+)/m.exec(c);ac[c]=f?f[1]:"[Anonymous]"}c=ac[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function $b(a,b){b||(b={});b[bc(a)]=!0;var c=a.stack||"",d=a.Va;d&&!b[bc(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=$b(d,b));return c}
function bc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ac={};function cc(a){this.f=a||{cookie:""}}
r=cc.prototype;r.isEnabled=function(){return navigator.cookieEnabled};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.eb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.fa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.f.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=cb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{fa:0,path:b,domain:c});return d};
r.isEmpty=function(){return!this.f.cookie};
r.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=cb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var dc=new cc("undefined"==typeof document?null:document);var ec=!Gb||9<=Number(Tb);function fc(a,b){this.width=a;this.height=b}
r=fc.prototype;r.clone=function(){return new fc(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.isEmpty=function(){return!(this.width*this.height)};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function gc(a,b){Ya(b,function(c,d){c&&"object"==typeof c&&c.T&&(c=c.P());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:hc.hasOwnProperty(d)?a.setAttribute(hc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var hc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function ic(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!ec&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',wb(g.name),'"');if(g.type){f.push(' type="',wb(g.type),'"');var h={};ab(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=jc(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):gc(f,g));2<d.length&&kc(e,f,d);return f}
function kc(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Ha(f)||Ia(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ia(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}D(g?Va(f):f,d)}}}
function jc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
;function lc(a){var b=mc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function nc(){var a=[];lc(function(b){a.push(b)});
return a}
var mc={Ha:"allow-forms",Ia:"allow-modals",Ja:"allow-orientation-lock",Ka:"allow-pointer-lock",La:"allow-popups",Ma:"allow-popups-to-escape-sandbox",Na:"allow-presentation",Oa:"allow-same-origin",Pa:"allow-scripts",Qa:"allow-top-navigation",Ra:"allow-top-navigation-by-user-activation"},oc=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return nc()});
function pc(){var a=jc(document,"IFRAME"),b={};D(oc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function K(){this.i=this.i;this.j=this.j}
K.prototype.i=!1;K.prototype.dispose=function(){this.i||(this.i=!0,this.H())};
K.prototype.H=function(){if(this.j)for(;this.j.length;)this.j.shift()()};var qc={};function rc(){}
function sc(a,b){if(b!==qc)throw Error("Bad secret");this.f=a}
v(sc,rc);sc.prototype.toString=function(){return this.f};new sc("about:blank",qc);new sc("about:invalid#zTSz",qc);function tc(a){var b=a.offsetWidth,c=a.offsetHeight,d=Jb&&!b&&!c;if((void 0===b||d)&&a.getBoundingClientRect){try{var e=a.getBoundingClientRect()}catch(f){e={left:0,top:0,right:0,bottom:0}}return new fc(e.right-e.left,e.bottom-e.top)}return new fc(b,c)}
;var uc=(new Date).getTime();function vc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"moz-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var wc=window,xc=document,yc=wc.location;function zc(){}
var Ac=/\[native code\]/;function L(a,b,c){return a[b]=a[b]||c}
function Bc(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function M(){var a;if((a=Object.create)&&Ac.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Cc=L(wc,"gapi",{});var O;O=L(wc,"___jsl",M());L(O,"I",0);L(O,"hel",10);function Dc(){var a=yc.href;if(O.dpo)var b=O.h;else{b=O.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Ec(a){var b=L(O,"PQ",[]);O.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Fc(a){return L(L(O,"H",M()),a,M())}
;function Gc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var q=g,p=0;64>p;p+=4)q[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=q[p-3]^q[p-8]^q[p-14]^q[p-16],q[p]=(n<<1|n>>>31)&4294967295;n=e[0];var w=e[1],x=e[2],G=e[3],ta=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var N=G^w&(x^G);var U=1518500249}else N=w^x^G,U=1859775393;else 60>p?(N=w&x|G&(w|x),U=2400959708):(N=w^x^G,U=3395469782);N=((n<<5|n>>>27)&4294967295)+N+ta+U+q[p]&4294967295;ta=G;G=x;x=(w<<30|w>>>2)&4294967295;w=n;n=N}e[0]=e[0]+n&4294967295;e[1]=e[1]+w&4294967295;
e[2]=e[2]+x&4294967295;e[3]=e[3]+G&4294967295;e[4]=e[4]+ta&4294967295}
function c(n,q){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],w=0,x=n.length;w<x;++w)p.push(n.charCodeAt(w));n=p}q||(q=n.length);p=0;if(0==l)for(;p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<q;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],q=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=q&255,q>>>=8;b(f);for(p=q=0;5>p;p++)for(var w=24;0<=w;w-=8)n[q++]=e[p]>>w&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,ta:function(){for(var n=d(),q="",p=0;p<n.length;p++)q+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return q}}}
;function Hc(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],D(d,function(h){e.push(h)}),Ic(e.join(" "));
var f=[],g=[];D(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(h){e.push(h)});
a=Ic(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ic(a){var b=Gc();b.update(a);return b.ta().toLowerCase()}
;function Jc(a){var b=vc(String(z.location.href)),c;(c=z.__SAPISID||z.__APISID||z.__OVERRIDE_SID)?c=!0:(c=new cc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?z.__SAPISID:z.__APISID,c||(c=new cc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(z.location.href);return d&&c&&b?[b,Hc(vc(d),
c,a||null)].join(" "):null}return null}
;var Kc=L(O,"perf",M());L(Kc,"g",M());var Lc=L(Kc,"i",M());L(Kc,"r",[]);M();M();function Mc(a,b,c){b&&0<b.length&&(b=Nc(b),c&&0<c.length&&(b+="___"+Nc(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=L(Lc,"_p",M()),L(b,c,M())[a]=(new Date).getTime(),b=Kc.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Nc(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var Oc=M(),Pc=[];function P(a){throw Error("Bad hint"+(a?": "+a:""));}
Pc.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?O[b]=L(O,b,[]).concat(c):L(O,b,c)}if(b=a.u)a=L(O,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var Qc=/^(\/[a-zA-Z0-9_\-]+)+$/,Rc=[/\/amp\//,/\/amp$/,/^\/amp$/],Sc=/^[a-zA-Z0-9\-_\.,!]+$/,Tc=/^gapi\.loaded_[0-9]+$/,Uc=/^[a-zA-Z0-9,._-]+$/;function Vc(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Oc[f],h=null;g?h=g(e,b,c,d):P("no hint processor for: "+f);h||P("failed to generate load url");b=h;c=b.match(Wc);(d=b.match(Xc))&&1===d.length&&Yc.test(b)&&c&&1===c.length||P("failed sanity: "+a);return h}
function Zc(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=$c(a);Tc.test(c)||P("invalid_callback");b=ad(b);d=d&&d.length?ad(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.aa?"/am="+e(a.aa):"",a.ka?"/rs="+e(a.ka):"",a.ma?"/t="+e(a.ma):"","/cb=",e(c)].join("")}
function $c(a){"/"!==a.charAt(0)&&P("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))P("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");Qc.test(b)||P("invalid_prefix");c=0;for(d=Rc.length;c<d;++c)Rc[c].test(b)&&P("invalid_prefix");c=bd(a,
"k",!0);d=bd(a,"am");e=bd(a,"rs");a=bd(a,"t");return{pathPrefix:b,version:c,aa:d,ka:e,ma:a}}
function ad(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");Uc.test(e)&&b.push(e)}return b.join(",")}
function bd(a,b,c){a=a[b];!a&&c&&P("missing: "+b);if(a){if(Sc.test(a))return a;P("invalid: "+b)}return null}
var Yc=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,Xc=/\/cb=/g,Wc=/\/\//g;function cd(){var a=Dc();if(!a)throw Error("Bad hint");return a}
Oc.m=function(a,b,c,d){(a=a[0])||P("missing_hint");return"https://apis.google.com"+Zc(a,b,c,d)};
var dd=decodeURI("%73cript"),ed=/^[-+_0-9\/A-Za-z]+={0,2}$/;function fd(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function gd(){var a=O.nonce;return void 0!==a?a&&a===String(a)&&a.match(ed)?a:O.nonce=null:xc.querySelector?(a=xc.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(ed)?O.nonce=a:O.nonce=null):null:null}
function hd(a){if("loading"!=xc.readyState)id(a);else{var b=gd(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+dd+' src="'+encodeURI(a)+'"'+c+"></"+dd+">";xc.write(jd?jd.createHTML(a):a)}}
function id(a){var b=xc.createElement(dd);b.setAttribute("src",jd?jd.createScriptURL(a):a);a=gd();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=xc.getElementsByTagName(dd)[0])?a.parentNode.insertBefore(b,a):(xc.head||xc.body||xc.documentElement).appendChild(b)}
function kd(a,b){var c=b&&b._c;if(c)for(var d=0;d<Pc.length;d++){var e=Pc[d][0],f=Pc[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function ld(a,b,c){md(function(){var d=b===Dc()?L(Cc,"_",M()):M();d=L(Fc(b),"_",d);a(d)},c)}
function nd(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);kd(a,c);var d=a?a.split(":"):[],e=c.h||cd(),f=L(O,"ah",M());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split(".");k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e;var l=g.length&&g[g.length-1]||null,m=l;l&&l.hint==k||(m={hint:k,features:[]},g.push(m));m.features.push(h)}var n=g.length;if(1<n){var q=c.callback;q&&(c.callback=function(){0==--n&&q()})}for(;d=g.shift();)od(d.features,c,d.hint)}else od(d||[],c,e)}
function od(a,b,c){function d(N,U){if(n)return 0;wc.clearTimeout(m);q.push.apply(q,w);var Wa=((Cc||{}).config||{}).update;Wa?Wa(f):f&&L(O,"cu",[]).push(f);if(U){Mc("me0",N,p);try{ld(U,c,l)}finally{Mc("me1",N,p)}}return 1}
a=Bc(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,l=void 0;"function"==typeof k&&(l=k);var m=null,n=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";k=L(Fc(c),"r",[]).sort();var q=L(Fc(c),"L",[]).sort(),p=[].concat(k);0<g&&(m=wc.setTimeout(function(){n=!0;h()},g));
var w=fd(a,q);if(w.length){w=fd(a,k);var x=L(O,"CP",[]),G=x.length;x[G]=function(N){function U(){var Eb=x[G+1];Eb&&Eb()}
function Wa(Eb){x[G]=null;d(w,N)&&Ec(function(){e&&e();Eb()})}
if(!N)return 0;Mc("ml1",w,p);0<G&&x[G-1]?x[G]=function(){Wa(U)}:Wa(U)};
if(w.length){var ta="loaded_"+O.I++;Cc[ta]=function(N){x[G](N);Cc[ta]=null};
a=Vc(c,w,"gapi."+ta,k);k.push.apply(k,w);Mc("ml0",w,p);b.sync||wc.___gapisync?hd(a):id(a)}else x[G](zc)}else d(w)&&e&&e()}
var jd=Oa("goog#gapi");function md(a,b){if(O.hee&&0<O.hel)try{return a()}catch(c){b&&b(c),O.hel--,nd("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Cc.load=function(a,b){return md(function(){return nd(a,b)})};function pd(){this.g=[];this.f=-1}
pd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
pd.prototype.get=function(a){return!!this.g[a]};
function qd(a){-1==a.f&&(a.f=Ta(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function rd(a,b){this.type=a;this.f=this.target=b;this.defaultPrevented=!1}
rd.prototype.g=function(){this.defaultPrevented=!0};var sd=!Gb||9<=Number(Tb),td;
if(td=Gb){var ud;if(Object.prototype.hasOwnProperty.call(Qb,"9"))ud=Qb["9"];else{for(var vd=0,wd=cb(String(Pb)).split("."),xd=cb("9").split("."),yd=Math.max(wd.length,xd.length),zd=0;0==vd&&zd<yd;zd++){var Ad=wd[zd]||"",Bd=xd[zd]||"";do{var Cd=/(\d*)(\D*)(.*)/.exec(Ad)||["","","",""],Dd=/(\d*)(\D*)(.*)/.exec(Bd)||["","","",""];if(0==Cd[0].length&&0==Dd[0].length)break;vd=lb(0==Cd[1].length?0:parseInt(Cd[1],10),0==Dd[1].length?0:parseInt(Dd[1],10))||lb(0==Cd[2].length,0==Dd[2].length)||lb(Cd[2],Dd[2]);
Ad=Cd[3];Bd=Dd[3]}while(0==vd)}ud=Qb["9"]=0<=vd}td=!ud}var Ed=td,Fd=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{z.addEventListener("test",Fa,b),z.removeEventListener("test",Fa,b)}catch(c){}return a}();function Gd(a,b){rd.call(this,a?a.type:"");this.relatedTarget=this.f=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
C(Gd,rd);var Hd={2:"touch",3:"pen",4:"mouse"};
Gd.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.f=b;var e=a.relatedTarget;if(e){if(Ib){a:{try{Db(e.nodeName);var f=!0;break a}catch(g){}f=!1}f||(e=null)}}else"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Hd[a.pointerType]||"";this.state=a.state;this.i=a;a.defaultPrevented&&this.g()};
Gd.prototype.g=function(){Gd.F.g.call(this);var a=this.i;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Ed)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Id="closure_listenable_"+(1E6*Math.random()|0),Jd=0;function Kd(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.S=e;this.key=++Jd;this.L=this.N=!1}
function Ld(a){a.L=!0;a.listener=null;a.f=null;a.src=null;a.S=null}
;function Md(a){this.src=a;this.listeners={};this.f=0}
Md.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=Nd(a,b,d,e);-1<g?(b=a[g],c||(b.N=!1)):(b=new Kd(b,this.src,f,!!d,e),b.N=c,a.push(b));return b};
Md.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Nd(e,b,c,d);return-1<b?(Ld(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function Od(a,b){var c=b.type;c in a.listeners&&Ua(a.listeners[c],b)&&(Ld(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function Nd(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.L&&f.listener==b&&f.capture==!!c&&f.S==d)return e}return-1}
;var Pd="closure_lm_"+(1E6*Math.random()|0),Qd={},Rd=0;function Sd(a,b,c,d,e){if(d&&d.once)Td(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Sd(a,b[f],c,d,e);else c=Ud(c),a&&a[Id]?a.f.add(String(b),c,!1,Ia(d)?!!d.capture:!!d,e):Vd(a,b,c,!1,d,e)}
function Vd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ia(e)?!!e.capture:!!e,h=Wd(a);h||(a[Pd]=h=new Md(a));c=h.add(b,c,d,g,f);if(!c.f){d=Xd();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)Fd||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Yd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Rd++}}
function Xd(){var a=Zd,b=sd?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Td(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Td(a,b[f],c,d,e);else c=Ud(c),a&&a[Id]?a.f.add(String(b),c,!0,Ia(d)?!!d.capture:!!d,e):Vd(a,b,c,!0,d,e)}
function $d(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)$d(a,b[f],c,d,e);else(d=Ia(d)?!!d.capture:!!d,c=Ud(c),a&&a[Id])?a.f.remove(String(b),c,d,e):a&&(a=Wd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Nd(b,c,d,e)),(c=-1<a?b[a]:null)&&ae(c))}
function ae(a){if("number"!==typeof a&&a&&!a.L){var b=a.src;if(b&&b[Id])Od(b.f,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Yd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Rd--;(c=Wd(b))?(Od(c,a),0==c.f&&(c.src=null,b[Pd]=null)):Ld(a)}}}
function Yd(a){return a in Qd?Qd[a]:Qd[a]="on"+a}
function be(a,b,c,d){var e=!0;if(a=Wd(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.L&&(f=ce(f,d),e=e&&!1!==f)}return e}
function ce(a,b){var c=a.listener,d=a.S||a.src;a.N&&ae(a);return c.call(d,b)}
function Zd(a,b){if(a.L)return!0;if(!sd){var c=b||A("window.event"),d=new Gd(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.f;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;0<=g;g--){d.f=c[g];var h=be(c[g],f,!0,d);e=e&&h}for(g=0;g<c.length;g++)d.f=c[g],h=be(c[g],f,!1,d),e=e&&h}return e}return ce(a,new Gd(b,this))}
function Wd(a){a=a[Pd];return a instanceof Md?a:null}
var de="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ud(a){if("function"===typeof a)return a;a[de]||(a[de]=function(b){return a.handleEvent(b)});
return a[de]}
;function Q(){K.call(this);this.f=new Md(this);this.o=this;this.l=null}
C(Q,K);Q.prototype[Id]=!0;Q.prototype.addEventListener=function(a,b,c,d){Sd(this,a,b,c,d)};
Q.prototype.removeEventListener=function(a,b,c,d){$d(this,a,b,c,d)};
Q.prototype.dispatchEvent=function(a){var b=this.l;if(b){var c=[];for(var d=1;b;b=b.l)c.push(b),++d}b=this.o;d=a.type||a;if("string"===typeof a)a=new rd(a,b);else if(a instanceof rd)a.target=a.target||b;else{var e=a;a=new rd(d,b);ab(a,e)}e=!0;if(c)for(var f=c.length-1;0<=f;f--){var g=a.f=c[f];e=ee(g,d,!0,a)&&e}g=a.f=b;e=ee(g,d,!0,a)&&e;e=ee(g,d,!1,a)&&e;if(c)for(f=0;f<c.length;f++)g=a.f=c[f],e=ee(g,d,!1,a)&&e;return e};
Q.prototype.H=function(){Q.F.H.call(this);if(this.f){var a=this.f,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Ld(d[e]);delete a.listeners[c];a.f--}}this.l=null};
function ee(a,b,c,d){b=a.f.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.L&&g.capture==c){var h=g.listener,k=g.S||g.src;g.N&&Od(a.f,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function fe(a,b){this.i=a;this.j=b;this.g=0;this.f=null}
fe.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.i();return a};
function ge(a,b){a.j(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function he(a){z.setTimeout(function(){throw a;},0)}
var ie;
function je(){var a=z.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var e=jc(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=La(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!H("Trident")&&!H("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ba;c.ba=null;e()}};
return function(e){d.next={ba:e};d=d.next;b.port2.postMessage(0)}}return function(e){z.setTimeout(e,0)}}
;function ke(){this.g=this.f=null}
var me=new fe(function(){return new le},function(a){a.reset()});
ke.prototype.add=function(a,b){var c=me.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
ke.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function le(){this.next=this.scope=this.f=null}
le.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
le.prototype.reset=function(){this.next=this.scope=this.f=null};function ne(a,b){oe||pe();qe||(oe(),qe=!0);re.add(a,b)}
var oe;function pe(){if(z.Promise&&z.Promise.resolve){var a=z.Promise.resolve(void 0);oe=function(){a.then(se)}}else oe=function(){var b=se;
"function"!==typeof z.setImmediate||z.Window&&z.Window.prototype&&!H("Edge")&&z.Window.prototype.setImmediate==z.setImmediate?(ie||(ie=je()),ie(b)):z.setImmediate(b)}}
var qe=!1,re=new ke;function se(){for(var a;a=re.remove();){try{a.f.call(a.scope)}catch(b){he(b)}ge(me,a)}qe=!1}
;function R(a){this.f=0;this.A=void 0;this.j=this.g=this.i=null;this.l=this.o=!1;if(a!=Fa)try{var b=this;a.call(void 0,function(c){te(b,2,c)},function(c){te(b,3,c)})}catch(c){te(this,3,c)}}
function ue(){this.next=this.context=this.onRejected=this.g=this.f=null;this.i=!1}
ue.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.i=!1};
var ve=new fe(function(){return new ue},function(a){a.reset()});
function we(a,b,c){var d=ve.get();d.g=a;d.onRejected=b;d.context=c;return d}
function xe(a,b,c){ye(a,b,c,null)||ne(Ma(b,a))}
function ze(a){return new R(function(b,c){var d=a.length,e=[];if(d)for(var f=function(l,m){d--;e[l]=m;0==d&&b(e)},g=function(l){c(l)},h=0,k;h<a.length;h++)k=a[h],xe(k,Ma(f,h),g);
else b(e)})}
R.prototype.then=function(a,b,c){return Ae(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
R.prototype.$goog_Thenable=!0;function Be(a,b){return Ae(a,null,b,void 0)}
R.prototype.cancel=function(a){if(0==this.f){var b=new Ce(a);ne(function(){De(this,b)},this)}};
function De(a,b){if(0==a.f)if(a.i){var c=a.i;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.i||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?De(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):Ee(c),Fe(c,e,3,b)))}a.i=null}else te(a,3,b)}
function Ge(a,b){a.g||2!=a.f&&3!=a.f||He(a);a.j?a.j.next=b:a.g=b;a.j=b}
function Ae(a,b,c,d){var e=we(null,null,null);e.f=new R(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Ce?g(h):f(k)}catch(l){g(l)}}:g});
e.f.i=a;Ge(a,e);return e.f}
R.prototype.K=function(a){this.f=0;te(this,2,a)};
R.prototype.W=function(a){this.f=0;te(this,3,a)};
function te(a,b,c){0==a.f&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.f=1,ye(c,a.K,a.W,a)||(a.A=c,a.f=b,a.i=null,He(a),3!=b||c instanceof Ce||Ie(a,c)))}
function ye(a,b,c,d){if(a instanceof R)return Ge(a,we(b||Fa,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(Ia(a))try{var f=a.then;if("function"===typeof f)return Je(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}
function Je(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function He(a){a.o||(a.o=!0,ne(a.C,a))}
function Ee(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.j=null);return b}
R.prototype.C=function(){for(var a;a=Ee(this);)Fe(this,a,this.f,this.A);this.o=!1};
function Fe(a,b,c,d){if(3==c&&b.onRejected&&!b.i)for(;a&&a.l;a=a.i)a.l=!1;if(b.f)b.f.i=null,Ke(b,c,d);else try{b.i?b.g.call(b.context):Ke(b,c,d)}catch(e){Le.call(null,e)}ge(ve,b)}
function Ke(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Ie(a,b){a.l=!0;ne(function(){a.l&&Le.call(null,b)})}
var Le=he;function Ce(a){Pa.call(this,a)}
C(Ce,Pa);Ce.prototype.name="cancel";function Me(a,b,c){K.call(this);this.f=a;this.o=b||0;this.g=c;this.l=La(this.ua,this)}
C(Me,K);r=Me.prototype;r.M=0;r.H=function(){Me.F.H.call(this);this.stop();delete this.f;delete this.g};
r.start=function(a){this.stop();var b=this.l;a=void 0!==a?a:this.o;if("function"!==typeof b)if(b&&"function"==typeof b.handleEvent)b=La(b.handleEvent,b);else throw Error("Invalid listener argument");this.M=2147483647<Number(a)?-1:z.setTimeout(b,a||0)};
r.stop=function(){this.isActive()&&z.clearTimeout(this.M);this.M=0};
r.isActive=function(){return 0!=this.M};
r.ua=function(){this.M=0;this.f&&this.f.call(this.g)};function Ne(){this.g=-1}
;function Oe(){this.g=64;this.f=[];this.o=[];this.A=[];this.j=[];this.j[0]=128;for(var a=1;a<this.g;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
C(Oe,Ne);Oe.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.l=this.i=0};
function Pe(a,b,c){c||(c=0);var d=a.A;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
Oe.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.o,f=this.i;d<b;){if(0==f)for(;d<=c;)Pe(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Pe(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Pe(this,e);f=0;break}}this.i=f;this.l+=b}};
Oe.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.g-(this.i-56));for(var c=this.g-1;56<=c;c--)this.o[c]=b&255,b/=256;Pe(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var Qe="StopIteration"in z?z.StopIteration:{message:"StopIteration",stack:""};function Re(){}
Re.prototype.next=function(){throw Qe;};
Re.prototype.G=function(){return this};
function Se(a){if(a instanceof Re)return a;if("function"==typeof a.G)return a.G(!1);if(Ha(a)){var b=0,c=new Re;c.next=function(){for(;;){if(b>=a.length)throw Qe;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Te(a,b){if(Ha(a))try{D(a,b,void 0)}catch(c){if(c!==Qe)throw c;}else{a=Se(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Qe)throw c;}}}
function Ue(a){if(Ha(a))return Va(a);a=Se(a);var b=[];Te(a,function(c){b.push(c)});
return b}
;function Ve(a,b){this.i={};this.f=[];this.j=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Ve)for(c=We(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function We(a){Xe(a);return a.f.concat()}
r=Ve.prototype;r.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||Ye;Xe(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Ye(a,b){return a===b}
r.isEmpty=function(){return 0==this.g};
r.clear=function(){this.i={};this.j=this.g=this.f.length=0};
r.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.g--,this.j++,this.f.length>2*this.g&&Xe(this),!0):!1};
function Xe(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
r.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
r.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.g++,this.f.push(a),this.j++);this.i[a]=b};
r.forEach=function(a,b){for(var c=We(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new Ve(this)};
r.G=function(a){Xe(this);var b=0,c=this.j,d=this,e=new Re;e.next=function(){if(c!=d.j)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Qe;var f=d.f[b++];return a?f:d.i[f]};
return e};function Ze(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function $e(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function af(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Ze(a).match(/\S+/g)||[],c=0<=Ra(c,b);return c}
function bf(a,b){if(a.classList)a.classList.add(b);else if(!af(a,b)){var c=Ze(a);$e(a,c+(0<c.length?" "+b:b))}}
function cf(a,b){a.classList?a.classList.remove(b):af(a,b)&&$e(a,Sa(a.classList?a.classList:Ze(a).match(/\S+/g)||[],function(c){return c!=b}).join(" "))}
;function df(a){var b=[];ef(new ff,a,b);return b.join("")}
function ff(){}
function ef(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),ef(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),gf(d,c),c.push(":"),ef(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":gf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var hf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},jf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function gf(a,b){b.push('"',a.replace(jf,function(c){var d=hf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),hf[c]=d);return d}),'"')}
;function S(a){K.call(this);this.A=1;this.l=[];this.o=0;this.f=[];this.g={};this.C=!!a}
C(S,K);r=S.prototype;r.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.A;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.A=e+3;d.push(e);return e};
r.V=function(a){var b=this.f[a];if(b){var c=this.g[b];0!=this.o?(this.l.push(a),this.f[a+1]=Fa):(c&&Ua(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
r.R=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.C)for(e=0;e<c.length;e++){var g=c[e];kf(this.f[g+1],this.f[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.o--,0<this.l.length&&0==this.o)for(;c=this.l.pop();)this.V(c)}}return 0!=e}return!1};
function kf(a,b,c){ne(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.g[a];b&&(D(b,this.V,this),delete this.g[a])}else this.f.length=0,this.g={}};
r.H=function(){S.F.H.call(this);this.clear();this.l.length=0};function lf(a){this.f=a}
lf.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,df(b))};
lf.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
lf.prototype.remove=function(a){this.f.remove(a)};function mf(a){this.f=a}
C(mf,lf);function nf(a){this.data=a}
function of(a){return void 0===a||a instanceof nf?a:new nf(a)}
mf.prototype.set=function(a,b){mf.F.set.call(this,a,of(b))};
mf.prototype.g=function(a){a=mf.F.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
mf.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function pf(a){this.f=a}
C(pf,mf);pf.prototype.set=function(a,b,c){if(b=of(b)){if(c){if(c<Date.now()){pf.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}pf.F.set.call(this,a,b)};
pf.prototype.g=function(a){var b=pf.F.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())pf.prototype.remove.call(this,a);else return b}};function qf(){}
;function rf(){}
C(rf,qf);rf.prototype.clear=function(){var a=Ue(this.G(!0)),b=this;D(a,function(c){b.remove(c)})};function sf(a){this.f=a}
C(sf,rf);r=sf.prototype;r.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
r.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.f.removeItem(a)};
r.G=function(a){var b=0,c=this.f,d=new Re;d.next=function(){if(b>=c.length)throw Qe;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){this.f.clear()};
r.key=function(a){return this.f.key(a)};function tf(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
C(tf,sf);function uf(a,b){this.g=a;this.f=null;if(Gb&&!(9<=Number(Tb))){vf||(vf=new Ve);this.f=vf.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),vf.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
C(uf,rf);var wf={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},vf=null;function xf(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return wf[b]})}
r=uf.prototype;r.isAvailable=function(){return!!this.f};
r.set=function(a,b){this.f.setAttribute(xf(a),b);yf(this)};
r.get=function(a){a=this.f.getAttribute(xf(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.f.removeAttribute(xf(a));yf(this)};
r.G=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new Re;d.next=function(){if(b>=c.length)throw Qe;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);yf(this)};
function yf(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function zf(a,b){this.g=a;this.f=b+"::"}
C(zf,rf);zf.prototype.set=function(a,b){this.g.set(this.f+a,b)};
zf.prototype.get=function(a){return this.g.get(this.f+a)};
zf.prototype.remove=function(a){this.g.remove(this.f+a)};
zf.prototype.G=function(a){var b=this.g.G(!0),c=this,d=new Re;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var Af=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};B("yt.config_",Af);function Bf(a){var b=arguments;1<b.length?Af[b[0]]=b[1]:1===b.length&&Object.assign(Af,b[0])}
function T(a,b){return a in Af?Af[a]:b}
;var Cf=[];function Df(a){Cf.forEach(function(b){return b(a)})}
function Ef(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Ff(b),Df(b)}}:a}
function Ff(a){var b=A("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=T("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Bf("ERRORS",b))}
function Gf(a){var b=A("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=T("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Bf("ERRORS",b))}
;var Hf={q:!0,search_query:!0};function If(a){var b=[];Ya(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];D(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Jf(a){"?"==a.charAt(0)&&(a=a.substr(1));for(var b=a.split("&"),c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=decodeURIComponent((f[0]||"").replace(/\+/g," ")),h=decodeURIComponent((f[1]||"").replace(/\+/g," "));g in c?Array.isArray(c[g])?Xa(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(k){Hf.hasOwnProperty(f[0])||(k.args=[{key:f[0],value:f[1],query:a}],Ff(k))}}return c}
function Kf(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Jf(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Ab(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;function Lf(){return A("gapi.iframes.getContext")()}
function Mf(){return A("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER")}
;function V(a){a=Nf(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Of(a,b){var c=Nf(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Nf(a){var b=T("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:T("EXPERIMENT_FLAGS",{})[a]}
;var Pf=0;B("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++Pf});B("ytEventsEventsListeners",z.ytEventsEventsListeners||{});B("ytEventsEventsCounter",z.ytEventsEventsCounter||{count:0});function Qf(a,b){"function"===typeof a&&(a=Ef(a));return window.setTimeout(a,b)}
;function Rf(){}
function Sf(a){var b=5E3;isNaN(b)&&(b=void 0);var c=A("yt.scheduler.instance.addJob");c?a=c(a,0,b):void 0===b?(a(),a=NaN):a=Qf(a,b||0);return a}
;function Tf(){}
v(Tf,Rf);Tf.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
Tf.f=void 0;Tf.g=function(){Tf.f||(Tf.f=new Tf)};
Tf.g();var Uf=z.ytPubsubPubsubInstance||new S,Vf=z.ytPubsubPubsubSubscribedKeys||{},Wf=z.ytPubsubPubsubTopicToKeys||{},Xf=z.ytPubsubPubsubIsSynchronous||{};S.prototype.subscribe=S.prototype.subscribe;S.prototype.unsubscribeByKey=S.prototype.V;S.prototype.publish=S.prototype.R;S.prototype.clear=S.prototype.clear;B("ytPubsubPubsubInstance",Uf);B("ytPubsubPubsubTopicToKeys",Wf);B("ytPubsubPubsubIsSynchronous",Xf);B("ytPubsubPubsubSubscribedKeys",Vf);var Yf=window,W=Yf.ytcsi&&Yf.ytcsi.now?Yf.ytcsi.now:Yf.performance&&Yf.performance.timing&&Yf.performance.now&&Yf.performance.timing.navigationStart?function(){return Yf.performance.timing.navigationStart+Yf.performance.now()}:function(){return(new Date).getTime()};var Zf=Of("initial_gel_batch_timeout",1E3),$f=Math.pow(2,16)-1,ag=null,bg=0,cg=void 0,dg=0,eg=0,fg=0,gg=!0,hg=z.ytLoggingTransportGELQueue_||new Map;B("ytLoggingTransportGELQueue_",hg);var ig=z.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",ig);function jg(a){a=void 0===a?!1:a;return new R(function(b){window.clearTimeout(dg);window.clearTimeout(eg);eg=0;cg&&cg.isReady()?(kg(b,a),hg.clear()):(lg(),b())})}
function lg(){V("web_gel_timeout_cap")&&!eg&&(eg=Qf(jg,6E4));window.clearTimeout(dg);var a=T("LOGGING_BATCH_TIMEOUT",Of("web_gel_debounce_ms",1E4));V("shorten_initial_gel_batch_timeout")&&gg&&(a=Zf);dg=Qf(jg,a)}
function kg(a,b){var c=cg;b=void 0===b?!1:b;for(var d=Math.round(W()),e=hg.size,f=u(hg),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=Za({context:mg(c.f||ng())});h.events=k;(k=ig[g])&&og(h,g,k);delete ig[g];pg(h,d);qg(c,"log_event",h,{retry:!0,onSuccess:function(){e--;e||a();bg=Math.round(W()-d)},
onError:function(){e--;e||a()},
Ga:b});gg=!1}}
function pg(a,b){a.requestTimeMs=String(b);V("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=T("EVENT_ID",void 0);if(c){var d=T("BATCH_CLIENT_COUNTER",void 0)||0;!d&&V("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*$f/2));d++;d>$f&&(d=1);Bf("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;ag&&bg&&V("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:ag,roundtripMs:String(bg)});ag=c;bg=0}}
function og(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var rg=z.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",rg);
function sg(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||W());e[a]=b;a=A("_lact",window);a=null==a?-1:Math.max(Date.now()-a,0);e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};V("log_sequence_info_on_gel_web")&&d.la&&(a=e.context,b=d.la,rg[b]=b in rg?rg[b]+1:0,a.sequence={index:rg[b],groupKey:b},d.Ya&&delete rg[d.la]);d=d.Xa;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),ig[d.token]=a,a=d.token);d=hg.get(a)||[];hg.set(a,
d);d.push(e);c&&(cg=new c);c=Of("web_logging_max_batch")||100;e=W();d.length>=c?jg(!0):10<=e-fg&&(lg(),fg=e)}
;function tg(a){var b=ug;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(vg(b),wg(b));b.ca_type="image";a&&(b.bid=a);return b}
function vg(a){var b={};b.dt=uc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?J:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!J.navigator&&"unknown"!==typeof J.navigator.javaEnabled&&!!J.navigator.javaEnabled&&J.navigator.javaEnabled();J.screen&&(b.u_h=J.screen.height,b.u_w=J.screen.width,b.u_ah=J.screen.availHeight,b.u_aw=J.screen.availWidth,b.u_cd=J.screen.colorDepth);
J.navigator&&J.navigator.plugins&&(b.u_nplug=J.navigator.plugins.length);J.navigator&&J.navigator.mimeTypes&&(b.u_nmime=J.navigator.mimeTypes.length);return b}
function wg(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(n){}try{var e=b.outerWidth;var f=b.outerHeight}catch(n){}try{var g=b.innerWidth;var h=b.innerHeight}catch(n){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var m=(new fc(l.clientWidth,l.clientHeight)).round()}catch(n){m=new fc(-12245933,-12245933)}k=m;m={};l=new pd;z.SVGElement&&
z.document.createElementNS&&l.set(0);c=pc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);z.crypto&&z.crypto.subtle&&l.set(3);z.TextDecoder&&z.TextEncoder&&l.set(4);l=qd(l);m.bc=l;m.bih=k.height;m.biw=k.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!J.WebGLRenderingContext,m}
var ug=new function(){var a=window.document;this.f=window;this.g=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return If(tg(a))});var xg="XMLHttpRequest"in z?function(){return new XMLHttpRequest}:null;
function yg(){if(!xg)return null;var a=xg();return"open"in a?a:null}
;var zg={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Ag="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
Bg=!1;
function Cg(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(xb)[1]||null,e=I(a);d&&e?(d=c,c=a.match(xb),d=d.match(xb),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?I(c)==e&&(Number(c.match(xb)[4]||null)||null)==(Number(a.match(xb)[4]||null)||null):!0;d=V("web_ajax_ignore_global_headers_if_set");for(var f in zg)e=T(zg[f]),!e||!c&&I(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!I(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!I(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!I(a))b["X-YouTube-Ad-Signals"]=If(tg(void 0));return b}
function Dg(a){var b=window.location.search,c=I(a),d=yb(a.match(xb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Jf(b),f={};D(Ag,function(g){e[g]&&(f[g]=e[g])});
return Kf(a,f||{},!1)}
function Eg(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Fg(a,b);var d=Gg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var h=g.ok,k=function(l){l=l||{};var m=b.context||z;h?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.Y&&b.Y.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.ia&&0<b.timeout&&(f=Qf(function(){e||(e=!0,window.clearTimeout(f),b.ia.call(b.context||z))},b.timeout))}else Hg(a,b)}
function Hg(a,b){var c=b.format||"JSON";a=Fg(a,b);var d=Gg(a,b),e=!1,f=Ig(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||n||q)m=Jg(a,c,k,b.Wa);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||
{};n=b.context||z;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.Y&&b.Y.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.U&&0<b.timeout){var g=b.U;var h=Qf(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||z,f))},b.timeout)}}
function Fg(a,b){b.ab&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=T("XSRF_FIELD_NAME",void 0),d=b.Fa;d&&(d[c]&&delete d[c],a=Kf(a,d||{},!0));return a}
function Gg(a,b){var c=T("XSRF_FIELD_NAME",void 0),d=T("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.D,g=T("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Za||I(a)&&!b.withCredentials&&I(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.D&&b.D[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Jf(e),ab(e,f),e=b.ja&&"JSON"==b.ja?JSON.stringify(e):Ab(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=!f}!Bg&&c&&"POST"!=b.method&&
(Bg=!0,Ff(Error("AJAX request with postData should use POST")));return e}
function Jg(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Gf(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Kg(a):null)e={},D(a.getElementsByTagName("*"),function(g){e[g.tagName]=Lg(g)})}d&&Mg(e);
return e}
function Mg(a){if(Ia(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=vb(a[b],null);a[c]=d}else Mg(a[b])}}
function Kg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Lg(a){var b="";D(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ig(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Ef(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=yg();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;V("debug_forward_web_query_parameters")&&(a=Dg(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Cg(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Ng(){for(var a={},b=u(Object.entries(Jf(T("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function Og(){return"INNERTUBE_API_KEY"in Af&&"INNERTUBE_API_VERSION"in Af}
function ng(){return{innertubeApiKey:T("INNERTUBE_API_KEY",void 0),innertubeApiVersion:T("INNERTUBE_API_VERSION",void 0),wa:T("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),xa:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:T("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),za:T("INNERTUBE_CONTEXT_HL",void 0),ya:T("INNERTUBE_CONTEXT_GL",void 0),Aa:T("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ca:!!T("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Ba:!!T("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:T("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function mg(a){var b={client:{hl:a.za,gl:a.ya,clientName:a.xa,clientVersion:a.innertubeContextClientVersion,configInfo:a.wa}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=T("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=[];var d=T("EXPERIMENTS_FORCED_FLAGS",{});for(e in d)c.push({key:e,value:String(d[e])});var e=T("EXPERIMENT_FLAGS",{});for(var f in e)f.startsWith("force_")&&void 0===d[f]&&c.push({key:f,value:String(e[f])});0<c.length&&(b.request={internalExperimentFlags:c});
a.appInstallData&&V("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);T("DELEGATED_SESSION_ID")&&!V("pageid_as_header_web")&&(b.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});b.client=Object.assign(b.client,Ng());return b}
function Pg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||T("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ta||T("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().Sa:b=Jc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=T("SESSION_INDEX",0),V("pageid_as_header_web")&&(d["X-Goog-PageId"]=T("DELEGATED_SESSION_ID")));return d}
;function Qg(a){a=Object.assign({},a);delete a.Authorization;var b=Jc();if(b){var c=new Oe;c.update(T("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ha(b);void 0===c&&(c=0);if(!Yb){Yb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Xb[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Yb[k]&&(Yb[k]=h)}}}c=Xb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|k>>6;k&=63;g||(k=64,f||(m=64));d.push(c[h],c[l],c[m]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Rg(){var a=new tf;(a=a.isAvailable()?new zf(a,"yt.innertube"):null)||(a=new uf("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new pf(a):null;this.g=document.domain||window.location.hostname}
Rg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(df(b))}catch(f){return}else e=escape(b);b=this.g;dc.set(""+a,e,{fa:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Rg.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=dc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Rg.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;dc.remove(""+a,"/",void 0===b?"youtube.com":b)};var Sg;function Tg(){Sg||(Sg=new Rg);return Sg}
function Ug(a,b,c,d){if(d)return null;d=Tg().get("nextId",!0)||1;var e=Tg().get("requests",!0)||{};e[d]={method:a,request:b,authState:Qg(c),requestTime:Math.round(W())};Tg().set("nextId",d+1,86400,!0);Tg().set("requests",e,86400,!0);return d}
function Vg(a){var b=Tg().get("requests",!0)||{};delete b[a];Tg().set("requests",b,86400,!0)}
function Wg(a){var b=Tg().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(W())-d.requestTime)){var e=d.authState;var f=Qg(Pg(!1));a:{var g=void 0,h=void 0;for(h in e)if(!(h in f)||e[h]!==f[h]){e=!1;break a}for(g in f)if(!(g in e)){e=!1;break a}e=!0}e&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),qg(a,d.method,e,{}));delete b[c]}}Tg().set("requests",b,86400,!0)}}
;new Q;var Xg=[],Yg=!1;function Zg(a,b){Yg||(Xg.push({type:"EVENT",eventType:a,payload:b}),10<Xg.length&&Xg.shift())}
;function $g(a){if(!a)throw Error();throw a;}
function ah(a){return a}
function X(a){var b=this;this.g=a;this.state={status:"PENDING"};this.f=[];this.onRejected=[];this.g(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.f);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
X.all=function(a){return new X(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={J:0};f.J<a.length;f={J:f.J},++f.J)bh(X.resolve(a[f.J]).then(function(g){return function(h){d[g.J]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})})};
X.resolve=function(a){return new X(function(b,c){a instanceof X?a.then(b,c):b(a)})};
X.reject=function(a){return new X(function(b,c){c(a)})};
X.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:ah,e=null!==b&&void 0!==b?b:$g;return new X(function(f,g){"PENDING"===c.state.status?(c.f.push(function(){ch(c,c,d,f,g)}),c.onRejected.push(function(){dh(c,c,e,f,g)})):"FULFILLED"===c.state.status?ch(c,c,d,f,g):"REJECTED"===c.state.status&&dh(c,c,e,f,g)})};
function bh(a,b){a.then(void 0,b)}
function ch(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof X?eh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function dh(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof X?eh(a,b,f,d,e):d(f)}catch(g){e(g)}}
function eh(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof X?eh(a,b,f,d,e):d(f)},function(f){e(f)})}
;function fh(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function gh(a){return new R(function(b,c){fh(a,b,c)})}
function Y(a){return new X(function(b,c){fh(a,b,c)})}
;function hh(a,b){return new X(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function ih(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(u(c)))}
v(ih,Error);var jh={},kh=(jh.AUTH_INVALID="No user identifier specified.",jh.EXPLICIT_ABORT="Transaction was explicitly aborted.",jh.IDB_NOT_SUPPORTED="IndexedDB is not supported.",jh.MISSING_OBJECT_STORE="Object store not created.",jh.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",jh.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",jh.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",jh);
function lh(a,b,c){b=void 0===b?{}:b;c=void 0===c?kh[a]:c;ih.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,lh.prototype);Yg||(Xg.push({type:"ERROR",payload:this}),10<Xg.length&&Xg.shift())}
v(lh,ih);function mh(a,b,c){lh.call(this,"UNKNOWN_ABORT",{objectStoreNames:a,dbName:b,mode:c});Object.setPrototypeOf(this,mh.prototype)}
v(mh,lh);function nh(a){lh.call(this,"MISSING_OBJECT_STORE",{bb:a},kh.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,nh.prototype)}
v(nh,lh);function oh(a,b){this.f=a;this.options=b;this.transactionCount=0;this.i=W();this.g=!1}
r=oh.prototype;r.add=function(a,b,c){return ph(this,[a],"readwrite",function(d){return qh(d,a).add(b,c)})};
r.clear=function(a){return ph(this,[a],"readwrite",function(b){return qh(b,a).clear()})};
r.close=function(){var a;this.f.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return ph(this,[a],"readonly",function(c){return qh(c,a).count(b)})};
r["delete"]=function(a,b){return ph(this,[a],"readwrite",function(c){return qh(c,a)["delete"](b)})};
r.get=function(a,b){return ph(this,[a],"readwrite",function(c){return qh(c,a).get(b)})};
function rh(a,b){return ph(a,["databases"],"readwrite",function(c){c=qh(c,"databases");return Y(c.f.put(b,void 0))})}
function ph(a,b,c,d){c=void 0===c?"readonly":c;a.transactionCount++;var e=a.f.transaction(b,c);e=new sh(e);d=th(e,d);uh(a,d,b.join(),c);return d}
function uh(a,b,c,d){var e=W();Be(b.then(function(){vh(a,!0,c,W()-e)}),function(f){var g=W(),h=a.f.name,k=a.transactionCount,l;
"QuotaExceededError"===f.name?l=new lh("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:h,mode:d}):"UnknownError"===f.name&&(l=new lh("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:h,mode:d}));l&&Zg("QUOTA_EXCEEDED",{dbName:h,objectStoreNames:c,transactionCount:k,transactionMode:d});h=Math.round(g-e);f instanceof mh&&(Zg("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,transactionDuration:h,transactionCount:a.transactionCount,dbDuration:Math.round(g-a.i)}),a.g=!0);vh(a,!1,c,h)})}
function vh(a,b,c,d){Zg("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.g,duration:d,isSuccessful:b})}
function wh(a){this.f=a}
r=wh.prototype;r.add=function(a,b){return Y(this.f.add(a,b))};
r.clear=function(){return Y(this.f.clear()).then(function(){})};
r.count=function(a){return Y(this.f.count(a))};
function xh(a,b){return yh(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
r["delete"]=function(a){return a instanceof IDBKeyRange?xh(this,a):Y(this.f["delete"](a))};
r.get=function(a){return Y(this.f.get(a))};
r.index=function(a){return new zh(this.f.index(a))};
r.getName=function(){return this.f.name};
function yh(a,b,c){a=a.f.openCursor(b.query,b.direction);return Ah(a).then(function(d){return hh(d,c)})}
function sh(a){var b=this;this.f=a;this.g=new Map;this.aborted=!1;this.done=new R(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.f.error)});
b.f.addEventListener("abort",function(){var e=b.f.error;if(e)d(e);else if(!b.aborted){e=mh;for(var f=b.f.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e(g.join(),b.f.db.name,b.f.mode);d(e)}})})}
function th(a,b){var c=new R(function(d,e){bh(b(a).then(function(f){a.commit();d(f)}),e)});
return ze([c,a.done]).then(function(d){return u(d).next().value})}
sh.prototype.abort=function(){this.f.abort();this.aborted=!0;throw new lh("EXPLICIT_ABORT");};
sh.prototype.commit=function(){var a=this.f;a.commit&&!this.aborted&&a.commit()};
function qh(a,b){var c=a.f.objectStore(b),d=a.g.get(c);d||(d=new wh(c),a.g.set(c,d));return d}
function zh(a){this.f=a}
zh.prototype.count=function(a){return Y(this.f.count(a))};
zh.prototype["delete"]=function(a){return Bh(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
zh.prototype.get=function(a){return Y(this.f.get(a))};
zh.prototype.getKey=function(a){return Y(this.f.getKey(a))};
function Bh(a,b,c){a=a.f.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Ah(a).then(function(d){return hh(d,c)})}
function Ch(a,b){this.request=a;this.cursor=b}
function Ah(a){return Y(a).then(function(b){return null===b?null:new Ch(a,b)})}
r=Ch.prototype;r.advance=function(a){this.cursor.advance(a);return Ah(this.request)};
r["continue"]=function(a){this.cursor["continue"](a);return Ah(this.request)};
r["delete"]=function(){return Y(this.cursor["delete"]()).then(function(){})};
r.getKey=function(){return this.cursor.key};
r.update=function(a){return Y(this.cursor.update(a))};function Dh(a,b,c){function d(){m||(m=new oh(e.result,{closed:l}));return m}
var e=self.indexedDB.open(a,b),f=c.blocked,g=c.blocking,h=c.Ea,k=c.upgrade,l=c.closed,m;k&&e.addEventListener("upgradeneeded",function(n){if(null===n.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===e.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var q=d(),p=new sh(e.transaction);k(q,n.oldVersion,n.newVersion,p)});
f&&e.addEventListener("blocked",function(){f()});
return gh(e).then(function(n){g&&n.addEventListener("versionchange",function(){g(d())});
n.addEventListener("close",function(){Zg("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:n.version});h&&h()});
return d()})}
function Eh(a,b,c){c=void 0===c?{}:c;return Dh(a,b,c)}
function Fh(a,b){b=void 0===b?{}:b;var c=self.indexedDB.deleteDatabase(a),d=b.blocked;d&&c.addEventListener("blocked",function(){d()});
return gh(c).then(function(){})}
;var Gh=Vb||Wb;function Hh(){var a=/WebKit\/([0-9]+)/.exec(F);return!!(a&&600<=parseInt(a[1],10))}
function Ih(){var a=/WebKit\/([0-9]+)/.exec(F);return!!(a&&602<=parseInt(a[1],10))}
function Jh(a){var b=F;return b?0<=b.toLowerCase().indexOf(a):!1}
;function Kh(a,b){for(var c=u(Object.keys(b.Da)),d=c.next();!d.done;d=c.next())if(d=d.value,!a.f.objectStoreNames.contains(d))return d}
function Lh(a){this.name="YtIdbMeta";this.options=a;this.g=!1}
function Mh(a,b,c){c=void 0===c?{}:c;return Eh(a,b,c)}
Lh.prototype["delete"]=function(a){a=void 0===a?{}:a;return Fh(this.name,a)};
Lh.prototype.open=function(){var a=this;if(!this.f){var b,c=function(){a.f===b&&(a.f=void 0)},d={blocking:function(f){f.close()},
closed:c,Ea:c,upgrade:this.options.upgrade},e=function(){return Be(Mh(a.name,a.options.version,d).then(function(f){if(Ub){var g=Kh(f,a.options);if(void 0!==g){if(Ub&&!a.g)return a.g=!0,a["delete"]().then(function(){return e()});
throw new nh(g);}}return f}),function(f){if(f instanceof DOMException?"VersionError"===f.name:"DOMError"in self&&f instanceof DOMError?"VersionError"===f.name:f instanceof Object&&"message"in f&&"An attempt was made to open a database using a lower version than the existing version."===f.message)return Mh(a.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0}));
c();throw f;})};
this.f=b=e()}return this.f};var Nh=new Lh({Da:{databases:!0},upgrade:function(a,b){1>b&&a.f.createObjectStore("databases",{keyPath:"actualName"})}});
function Oh(){var a={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return Nh.open().then(function(b){return b.get("databases",a.actualName).then(function(c){if(c?a.actualName!==c.actualName||a.publicName!==c.publicName||a.userIdentifier!==c.userIdentifier||a.signedIn!==c.signedIn||a.clearDataOnAuthChange!==c.clearDataOnAuthChange:1)return rh(b,a)})})}
function Ph(){return Nh.open().then(function(a){return a["delete"]("databases","yt-idb-test-do-not-use")})}
;var Qh;function Rh(){return Cb(this,function b(){var c,d;return Ba(b,function(e){switch(e.g){case 1:if(Gh&&Hh()&&!Ih()&&!V("ytidb_allow_on_ios_safari_v8_and_v9")||Hb)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(f){return e["return"](!1)}if(V("ytidb_new_supported_check_with_delete"))return e["return"](new Promise(function(f){Be(Ph().then(function(){f(!0)}),function(){f(!1)})}));
if(V("ytidb_new_supported_check_with_add_and_delete"))return e["return"](new Promise(function(f){Be(Oh().then(function(){return Ph()}).then(function(){f(!0)}),function(){f(!1)})}));
ra(e);return qa(e,Be(Eh("yt-idb-test-do-not-use"),function(){}));
case 5:if(d=e.C,!d)return e["return"](!1);case 3:ua(e);if(d)try{d.close()}catch(f){}va(e);break;case 2:return sa(e),e["return"](!1);case 4:return"IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype?e["return"](!0):e["return"](!1)}})})}
function Sh(){if(void 0!==Qh)return Qh;var a=W();Yg=!0;return Qh=new R(function(b){Rh().then(function(c){Yg=!1;Zg("IS_SUPPORTED_COMPLETED",{duration:Math.round(W()-a),isSupported:c});b(c)})})}
;function Th(){Q.call(this);this.g=Uh();Vh(this);Wh(this)}
v(Th,Q);function Uh(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Wh(a){window.addEventListener("online",function(){a.g=!0;a.C&&a.C()})}
function Vh(a){window.addEventListener("offline",function(){a.g=!1;a.A&&a.A()})}
;function Xh(a,b){b=void 0===b?{}:b;Sh().then(function(){Th.f||(Th.f=new Th);Th.f.g!==Uh()&&Ff(Error("NetworkStatusManager isOnline does not match window status"));Hg(a,b)})}
function Yh(a,b){b=void 0===b?{}:b;Sh().then(function(){Hg(a,b)})}
;function Zh(a){var b=this;this.f=null;a?this.f=a:Og()&&(this.f=ng());Sf(function(){Wg(b)})}
Zh.prototype.isReady=function(){!this.f&&Og()&&(this.f=ng());return!!this.f};
function qg(a,b,c,d){!T("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Gf(new ih("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new ih("innertube xhrclient not ready",b,c,d);Ff(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",D:c,ja:"JSON",U:function(){d.U()},
ia:d.U,onSuccess:function(n,q){if(d.onSuccess)d.onSuccess(q)},
ha:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,q){if(d.onError)d.onError(q)},
cb:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.Aa)&&(g=e);var h=a.f.Ca||!1,k=Pg(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var l={alt:"json"};a.f.Ba&&f.headers.Authorization||(l.key=a.f.innertubeApiKey);var m=Kf(""+g+e,l||{},!0);Sh().then(function(n){if(d.retry&&V("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(V("networkless_gel")&&!n||!V("networkless_gel"))var q=Ug(b,
c,k,h);if(q){var p=f.onSuccess,w=f.ha;f.onSuccess=function(x,G){Vg(q);p(x,G)};
c.ha=function(x,G){Vg(q);w(x,G)}}}try{V("use_fetch_for_op_xhr")?Eg(m,f):V("networkless_gel")&&d.retry?(f.method="POST",!d.Ga&&V("nwl_send_fast_on_unload")?Yh(m,f):Xh(m,f)):(f.method="POST",f.D||(f.D={}),Hg(m,f))}catch(x){if("InvalidAccessError"==x.name)q&&(Vg(q),q=0),Gf(Error("An extension is blocking network request."));
else throw x;}q&&Sf(function(){Wg(a)})})}
;function $h(a,b,c){c=void 0===c?{}:c;var d=Zh;T("ytLoggingEventsDefaultDisabled",!1)&&Zh==Zh&&(d=null);sg(a,b,d,c)}
;var ai=Date.now().toString();
function bi(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(ai)for(a=1,b=0;b<ai.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^ai.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var ci=z.ytLoggingDocDocumentNonce_||bi();B("ytLoggingDocDocumentNonce_",ci);function di(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function ei(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
B("yt_logging_screen.getRootVeType",function(a){return T(ei(void 0===a?0:a),void 0)});
function fi(){var a=T("csn-to-ctt-auth-info");a||(a={},Bf("csn-to-ctt-auth-info",a));return a}
function gi(a){a=void 0===a?0:a;var b=T(di(a));if(!b&&!T("USE_CSN_FALLBACK",!0))return null;b||0!=a||(V("kevlar_client_side_screens")||V("c3_client_side_screens")?b="UNDEFINED_CSN":b=T("EVENT_ID"));return b?b:null}
B("yt_logging_screen.getCurrentCsn",gi);function hi(a,b,c){var d=fi();(c=gi(c))&&delete d[c];b&&(d[a]=b)}
B("yt_logging_screen.getCttAuthInfo",function(a){return fi()[a]});
B("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==T(di(c))||b!==T(ei(c)))if(hi(a,d,c),Bf(di(c),a),Bf(ei(c),b),0==c||V("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&sg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:ci,clientScreenNonce:a},Zh)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()});function ii(a,b){this.version=a;this.args=b}
;function ji(a){this.topic=a}
ji.prototype.toString=function(){return this.topic};var ki=A("ytPubsub2Pubsub2Instance")||new S;S.prototype.subscribe=S.prototype.subscribe;S.prototype.unsubscribeByKey=S.prototype.V;S.prototype.publish=S.prototype.R;S.prototype.clear=S.prototype.clear;B("ytPubsub2Pubsub2Instance",ki);B("ytPubsub2Pubsub2SubscribedKeys",A("ytPubsub2Pubsub2SubscribedKeys")||{});B("ytPubsub2Pubsub2TopicToKeys",A("ytPubsub2Pubsub2TopicToKeys")||{});B("ytPubsub2Pubsub2IsAsync",A("ytPubsub2Pubsub2IsAsync")||{});B("ytPubsub2Pubsub2SkipSubKey",null);
function li(a,b){var c=A("ytPubsub2Pubsub2Instance");c&&c.publish.call(c,a.toString(),a,b)}
;var mi=[{ga:function(a){return"Cannot read property '"+a.key+"'"},
Z:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{ga:function(a){return"Cannot call '"+a.key+"'"},
Z:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function ni(){this.f=[];this.g=[]}
var oi;var pi=new S;function qi(a,b,c,d){c+="."+a;a=ri(b);d[c]=a;return c.length+a.length}
function ri(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var si=new Set,ti=0,ui=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];
function vi(a){var b=void 0===b?{}:b;b.name=T("INNERTUBE_CONTEXT_CLIENT_NAME",1);b.version=T("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var c=b||{};b="WARNING";b=void 0===b?"ERROR":b;var d=void 0===d?!1:d;if(a){if(V("console_log_js_exceptions")){var e=[];e.push("Name: "+a.name);e.push("Message: "+a.message);a.hasOwnProperty("params")&&e.push("Error Params: "+JSON.stringify(a.params));e.push("File name: "+a.fileName);e.push("Stacktrace: "+a.stack);window.console.log(e.join("\n"),a)}if((window&&window.yterr||
d)&&!(5<=ti)&&0!==a.sampleWeight){var f=Zb(a);d=f.message||"Unknown Error";e=f.name||"UnknownError";var g=f.lineNumber||"Not available",h=f.fileName||"Not available";f=f.stack||a.f||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var k=0,l=0;l<a.args.length;l++){var m=a.args[l],n="params."+l;k+=n.length;if(m)if(Array.isArray(m))for(var q=c,p=0;p<m.length&&!(m[p]&&(k+=qi(p,m[p],n,q),500<k));p++);else if("object"===typeof m)for(q in q=void 0,p=c,m){if(m[q]&&(k+=qi(q,m[q],n,p),
500<k))break}else c[n]=ri(m),k+=c[n].length;else c[n]=ri(m),k+=c[n].length;if(500<=k)break}else if(a.hasOwnProperty("params")&&a.params)if(m=a.params,"object"===typeof a.params)for(l in n=0,m){if(m[l]&&(k="params."+l,q=ri(m[l]),c[k]=q,n+=k.length+q.length,500<n))break}else c.params=ri(m);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c.vendor=navigator.vendor);c={message:d,name:e,lineNumber:g,fileName:h,stack:f,params:c};a=Number(a.columnNumber);isNaN(a)||(c.lineNumber=c.lineNumber+":"+a);a=u(mi);
for(d=a.next();!d.done;d=a.next())if(d=d.value,d.Z[c.name])for(g=u(d.Z[c.name]),e=g.next();!e.done;e=g.next())if(h=e.value,e=c.message.match(h.regexp)){c.params["error.original"]=e[0];g=h.groups;h={};for(f=0;f<g.length;f++)h[g[f]]=e[f+1],c.params["error."+g[f]]=e[f+1];c.message=d.ga(h);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(c);if(!(si.has(c.message)||0<=c.stack.indexOf("/YouTubeCenter.js")||0<=c.stack.indexOf("/mytube.js"))){"ERROR"===b?pi.R("handleError",c):"WARNING"===
b&&pi.R("handleWarning",c);if(V("kevlar_gel_error_routing")){a=b;a:{d=u(ui);for(e=d.next();!e.done;e=d.next())if(Jh(e.value.toLowerCase())){d=!0;break a}d=!1}if(!d){e={stackTrace:c.stack};c.fileName&&(e.filename=c.fileName);d=c.lineNumber&&c.lineNumber.split?c.lineNumber.split(":"):[];0!==d.length&&(1!==d.length||isNaN(Number(d[0]))?2!==d.length||isNaN(Number(d[0]))||isNaN(Number(d[1]))||(e.lineNumber=Number(d[0]),e.columnNumber=Number(d[1])):e.lineNumber=Number(d[0]));oi||(oi=new ni);d=oi;g=c.message;
h=c.name;a:{f=u(d.g);for(l=f.next();!l.done;l=f.next())if(l=l.value,c.message&&c.message.match(l.f)){f=l.weight;break a}f=u(d.f);for(l=f.next();!l.done;l=f.next())if(l=l.value,l.callback(c)){f=l.weight;break a}f=1}g={level:"ERROR_LEVEL_UNKNOWN",message:g,errorClassName:h,sampleWeight:f};"ERROR"===a?g.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(g.level="ERROR_LEVEL_WARNNING");a={isObfuscated:!0,browserStackInfo:e};e={pageUrl:window.location.href};T("FEXP_EXPERIMENTS")&&(e.experimentIds=T("FEXP_EXPERIMENTS"));
e.kvPairs=[{key:"client.params.errorServiceSignature",value:"msg="+d.g.length+"&cb="+d.f.length}];if(d=c.params)for(h=u(Object.keys(d)),f=h.next();!f.done;f=h.next())f=f.value,e.kvPairs.push({key:"client."+f,value:String(d[f])});d=T("SERVER_NAME",void 0);h=T("SERVER_VERSION",void 0);d&&h&&(e.kvPairs.push({key:"server.name",value:d}),e.kvPairs.push({key:"server.version",value:h}));$h("clientError",{errorMetadata:e,stackTrace:a,logMessage:g});jg()}}if(!V("suppress_error_204_logging")){a=c.params||{};
b={Fa:{a:"logerror",t:"jserror",type:c.name,msg:c.message.substr(0,250),line:c.lineNumber,level:b,"client.name":a.name},D:{url:T("PAGE_NAME",window.location.href),file:c.fileName},method:"POST"};a.version&&(b["client.version"]=a.version);if(b.D){c.stack&&(b.D.stack=c.stack);d=u(Object.keys(a));for(e=d.next();!e.done;e=d.next())e=e.value,b.D["client."+e]=a[e];if(a=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(d=u(Object.keys(a)),e=d.next();!e.done;e=d.next())e=e.value,b.D[e]=a[e];a=T("SERVER_NAME",
void 0);d=T("SERVER_VERSION",void 0);a&&d&&(b.D["server.name"]=a,b.D["server.version"]=d)}Hg(T("ECATCHER_REPORT_HOST","")+"/error_204",b)}si.add(c.message);ti++}}}}
;function wi(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!xi(a)||c.some(function(e){return!xi(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())yi(a,d.value);return a}
function yi(a,b){for(var c in b)if(xi(b[c])){if(c in a&&!xi(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});yi(a[c],b[c])}else if(zi(b[c])){if(c in a&&!zi(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Ai(a[c],b[c])}else a[c]=b[c];return a}
function Ai(a,b){for(var c=u(b),d=c.next();!d.done;d=c.next())d=d.value,xi(d)?a.push(yi({},d)):zi(d)?a.push(Ai([],d)):a.push(d);return a}
function xi(a){return"object"===typeof a&&!Array.isArray(a)}
function zi(a){return"object"===typeof a&&Array.isArray(a)}
;var Bi={},Ci=0;
function Di(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Jh("cobalt")){if(a){a instanceof E||(a="object"==typeof a&&a.T?a.P():String(a),pb.test(a)?a=new E(a,mb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(ob))&&nb.test(b[1])?new E(a,mb):null));a=a||qb;a instanceof E&&a.constructor===E?a=a.f:(Ga(a),a="type_error:SafeUrl");if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof tb)){b="object"==typeof a;var f=null;b&&a.da&&(f=a.ca());a=vb(db(b&&a.T?a.P():String(a)),
f)}a instanceof tb&&a.constructor===tb?a=a.f:(Ga(a),a="type_error:SafeHtml");a=encodeURIComponent(String(df(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=ic("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))}}else if(e)Ig(a,b,"POST",e,d);else if(T("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Ig(a,b,"GET","",d);else{b:{try{var g=new Qa({url:a});if(g.i&&g.g||g.j){var h=yb(a.match(xb)[5]||null),k;if(!(k=
!h||!h.endsWith("/aclk"))){var l=a.search(Bb);d:{for(c=0;0<=(c=a.indexOf("ri",c))&&c<l;){var m=a.charCodeAt(c-1);if(38==m||63==m){var n=a.charCodeAt(c+2);if(!n||61==n||38==n||35==n){var q=c;break d}}c+=3}q=-1}if(0>q)var p=null;else{var w=a.indexOf("&",q);if(0>w||w>l)w=l;q+=3;p=decodeURIComponent(a.substr(q,w-q).replace(/\+/g," "))}k="1"!==p}f=!k;break b}}catch(x){}f=!1}f?Ei(a)?(b&&b(),f=!0):f=!1:f=!1;f||Fi(a,b)}}
function Ei(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Fi(a,b){var c=new Image,d=""+Ci++;Bi[d]=c;c.onload=c.onerror=function(){b&&Bi[d]&&b();delete Bi[d]};
c.src=a}
;function Gi(a,b){ii.call(this,1,arguments)}
v(Gi,ii);function Hi(a,b){ii.call(this,1,arguments)}
v(Hi,ii);var Ii=new ji("aft-recorded"),Ji=new ji("timing-sent");var Ki=window;function Li(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var Mi=Ki.performance||Ki.mozPerformance||Ki.msPerformance||Ki.webkitPerformance||new Li;var Ni=!1;La(Mi.clearResourceTimings||Mi.webkitClearResourceTimings||Mi.mozClearResourceTimings||Mi.msClearResourceTimings||Mi.oClearResourceTimings||Fa,Mi);function Oi(a){var b=Pi(a);if(b.aft)return b.aft;a=T((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function Qi(a){var b;(b=A("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},B("ytcsi."+(a||"")+"data_",b));return b}
function Ri(a){a=Qi(a);a.info||(a.info={});return a.info}
function Pi(a){a=Qi(a);a.tick||(a.tick={});return a.tick}
function Si(a){var b=Qi(a).nonce;b||(b=bi(),Qi(a).nonce=b);return b}
function Ti(a){var b=Pi(a||""),c=Oi(a);c&&!Ni&&(li(Ii,new Gi(Math.round(c-b._start),a)),Ni=!0)}
;function Ui(){var a=A("ytcsi.debug");a||(a=[],B("ytcsi.debug",a),B("ytcsi.reference",{}));return a}
function Vi(a){a=a||"";var b=A("ytcsi.reference");b||(Ui(),b=A("ytcsi.reference"));if(b[a])return b[a];var c=Ui(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Wi=z.ytLoggingLatencyUsageStats_||{};B("ytLoggingLatencyUsageStats_",Wi);function Xi(){this.f=0}
function Yi(){Xi.f||(Xi.f=new Xi);return Xi.f}
Xi.prototype.tick=function(a,b,c){Zi(this,"tick_"+a+"_"+b)||$h("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
Xi.prototype.info=function(a,b){var c=Object.keys(a).join("");Zi(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,$h("latencyActionInfo",c))};
Xi.prototype.span=function(a,b){var c=Object.keys(a).join("");Zi(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,$h("latencyActionSpan",a))};
function Zi(a,b){Wi[b]=Wi[b]||{count:0};var c=Wi[b];c.count++;c.time=W();a.f||(a.f=Sf(function(){var d=W(),e;for(e in Wi)Wi[e]&&6E4<d-Wi[e].time&&delete Wi[e];a&&(a.f=0)}));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new ih("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||vi(c)),!0):!1}
;var Z={},$i=(Z.ad_allowed="adTypesAllowed",Z.yt_abt="adBreakType",Z.ad_cpn="adClientPlaybackNonce",Z.ad_docid="adVideoId",Z.yt_ad_an="adNetworks",Z.ad_at="adType",Z.aida="appInstallDataAgeMs",Z.browse_id="browseId",Z.p="httpProtocol",Z.t="transportProtocol",Z.cpn="clientPlaybackNonce",Z.ccs="creatorInfo.creatorCanaryState",Z.cseg="creatorInfo.creatorSegment",Z.csn="clientScreenNonce",Z.docid="videoId",Z.GetHome_rid="requestIds",Z.GetSearch_rid="requestIds",Z.GetPlayer_rid="requestIds",Z.GetWatchNext_rid=
"requestIds",Z.GetBrowse_rid="requestIds",Z.GetLibrary_rid="requestIds",Z.is_continuation="isContinuation",Z.is_nav="isNavigation",Z.b_p="kabukiInfo.browseParams",Z.is_prefetch="kabukiInfo.isPrefetch",Z.is_secondary_nav="kabukiInfo.isSecondaryNav",Z.prev_browse_id="kabukiInfo.prevBrowseId",Z.query_source="kabukiInfo.querySource",Z.voz_type="kabukiInfo.vozType",Z.yt_lt="loadType",Z.mver="creatorInfo.measurementVersion",Z.yt_ad="isMonetized",Z.nr="webInfo.navigationReason",Z.nrsu="navigationRequestedSameUrl",
Z.ncnp="webInfo.nonPreloadedNodeCount",Z.pnt="performanceNavigationTiming",Z.prt="playbackRequiresTap",Z.plt="playerInfo.playbackType",Z.pis="playerInfo.playerInitializedState",Z.paused="playerInfo.isPausedOnLoad",Z.yt_pt="playerType",Z.fmt="playerInfo.itag",Z.yt_pl="watchInfo.isPlaylist",Z.yt_pre="playerInfo.preloadType",Z.yt_ad_pr="prerollAllowed",Z.pa="previousAction",Z.yt_red="isRedSubscriber",Z.rce="mwebInfo.responseContentEncoding",Z.scrh="screenHeight",Z.scrw="screenWidth",Z.st="serverTimeMs",
Z.ssdm="shellStartupDurationMs",Z.br_trs="tvInfo.bedrockTriggerState",Z.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Z.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Z.label="tvInfo.label",Z.is_mdx="tvInfo.isMdx",Z.preloaded="tvInfo.isPreloaded",Z.upg_player_vis="playerInfo.visibilityState",Z.query="unpluggedInfo.query",Z.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Z.yt_vst="videoStreamType",Z.vph="viewportHeight",Z.vpw="viewportWidth",Z.yt_vis="isVisible",Z.rcl="mwebInfo.responseContentLength",
Z.GetSettings_rid="requestIds",Z.GetTrending_rid="requestIds",Z.GetMusicSearchSuggestions_rid="requestIds",Z.REQUEST_ID="requestIds",Z),aj="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),bj={},cj=(bj.ccs="CANARY_STATE_",
bj.mver="MEASUREMENT_VERSION_",bj.pis="PLAYER_INITIALIZED_STATE_",bj.yt_pt="LATENCY_PLAYER_",bj.pa="LATENCY_ACTION_",bj.yt_vst="VIDEO_STREAM_TYPE_",bj),dj="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function ej(a){return!!T("FORCE_CSI_ON_GEL",!1)||V("csi_on_gel")||!!Qi(a).useGel}
function fj(a){a=Qi(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function gj(a,b,c){if(null!==b)if(Ri(c)[a]=b,ej(c)){var d=b;b=fj(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in $i){b=$i[a];0<=Ra(aj,b)&&(d=!!d);a in cj&&"string"===typeof d&&(d=cj[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=wi({},e)}else 0<=Ra(dj,a)||vi(new ih("Unknown label logged with GEL CSI",
a)),f=void 0;f&&ej(c)&&(b=Vi(c||""),wi(b.info,f),b=fj(c),"gelInfos"in b||(b.gelInfos={}),wi(b.gelInfos,f),c=Si(c),Yi().info(f,c))}else Vi(c||"").info[a]=b}
function hj(a,b,c){var d=Pi(c);if(V("use_first_tick")&&ij(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;Mi.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Mi.mark(e))}e=b||W();d[a]=e;e=fj(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||W();if(ej(c)){Vi(c||"").tick[a]=b||W();e=Si(c);if("_start"===a){var f=Yi();Zi(f,"baseline_"+e)||$h("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else Yi().tick(a,e,b);Ti(c);e=!0}else e=!1;if(!e){if(!A("yt.timing."+(c||"")+"pingSent_")&&
(f=T((c||"")+"TIMING_ACTION",void 0),e=Pi(c),A("ytglobal.timing"+(c||"")+"ready_")&&f&&ij("_start")&&Oi(c)))if(Ti(c),c)jj(c);else{f=!0;var g=T("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&jj(c)}Vi(c||"").tick[a]=b||W()}return d[a]}
function ij(a,b){var c=Pi(b);return a in c}
function jj(a){if(!ej(a)){var b=Pi(a),c=Ri(a),d=b._start,e=T("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:T((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=Oi(a);var h=Pi(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&Ri(a).yt_pvis&&"youtube"===e&&(gj("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var m in c)"_"!==m.charAt(0)&&(f[m]=c[m]);b.ps=W();m={};e=[];for(var n in b)"_"!==n.charAt(0)&&(k=Math.round(b[n]-d),m[n]=k,e.push(n+"."+k));f.rt=
e.join(",");b=!!c.ap;V("debug_csi_data")&&(c=A("yt.timing.csiData"),c||(c=[],B("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var q in f)f.hasOwnProperty(q)&&(c+="&"+q+"="+f[q]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var p=void 0===p?"":p;Ei(f,p)||Di(f,void 0,void 0,void 0,p)}else Di(f);B("yt.timing."+(a||"")+"pingSent_",!0);li(Ji,new Hi(m.aft+(Number(g)||0),a))}}
var kj=window;kj.ytcsi&&(kj.ytcsi.info=gj,kj.ytcsi.tick=hj);new Me(lj,1E3);function lj(){hj("vptl",0);hj("vpl",0)}
;function mj(a){try{a.register("msg-hovercard-subscription",nj,Mf())}catch(b){}}
function nj(a){if(a){a=!!a.isSubscribed;var b=document.getElementById("yt-subscribe-card");a?cf(b,"subscribe"):bf(b,"subscribe");a?bf(b,"subscribed"):cf(b,"subscribed")}}
;function oj(){var a=document.getElementById("yt-subscribe-card");b:{var b=9==a.nodeType?a:a.ownerDocument||a.document;if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,null))){b=b.display||b.getPropertyValue("display")||"";break b}b=""}if("none"!=(b||(a.currentStyle?a.currentStyle.display:null)||a.style&&a.style.display))a=tc(a);else{b=a.style;var c=b.display,d=b.visibility,e=b.position;b.visibility="hidden";b.position="absolute";b.display="inline";a=tc(a);b.display=
c;b.position=e;b.visibility=d}a={width:a.width,height:a.height};Lf().ready(a,null,void 0);a=Mf();Lf().addOnOpenerHandler(mj,null,a)}
var pj=oj;pj=void 0===pj?{}:pj;"function"===typeof pj&&(pj={callback:pj});oj=pj;if(oj.gapiHintOverride||T("GAPI_HINT_OVERRIDE")){var qj;var rj=document.location.href;if(-1!=rj.indexOf("?")){rj=(rj||"").split("#")[0];var sj=rj.split("?",2);qj=Jf(1<sj.length?sj[1]:sj[0])}else qj={};var tj=qj.gapi_jsh;tj&&ab(oj,{_c:{jsl:{h:tj}}})}nd("gapi.iframes:gapi.iframes.style.common",oj);}).call(this);
