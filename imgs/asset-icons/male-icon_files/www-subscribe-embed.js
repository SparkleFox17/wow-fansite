(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
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
b.prototype=a;return new b},ia=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ha(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ja;
function pa(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.D=b.prototype}
function qa(){this.A=!1;this.i=null;this.B=void 0;this.f=1;this.l=this.o=0;this.L=this.g=null}
function ra(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
qa.prototype.F=function(a){this.B=a};
function sa(a,b){a.g={Ab:b,Ra:!0};a.f=a.o||a.l}
qa.prototype["return"]=function(a){this.g={"return":a};this.f=this.l};
function ta(a,b,c){a.f=c;return{value:b}}
qa.prototype.qa=function(a){this.f=a};
function ua(a){a.o=2;a.l=3}
function va(a){a.o=0;a.g=null}
function wa(a){a.L=[a.g];a.o=0;a.l=0}
function xa(a){var b=a.L.splice(0)[0];(b=a.g=a.g||b)?b.Ra?a.f=a.o||a.l:void 0!=b.qa&&a.l<b.qa?(a.f=b.qa,a.g=null):a.f=a.l:a.f=4}
function ya(a){this.f=new qa;this.g=a}
function za(a,b){ra(a.f);var c=a.f.i;if(c)return Aa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return Ba(a)}
function Aa(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.A=!1,e;var f=e.value}catch(g){return a.f.i=null,sa(a.f,g),Ba(a)}a.f.i=null;d.call(a.f,f);return Ba(a)}
function Ba(a){for(;a.f.f;)try{var b=a.g(a.f);if(b)return a.f.A=!1,{value:b.value,done:!1}}catch(c){a.f.B=void 0,sa(a.f,c)}a.f.A=!1;if(a.f.g){b=a.f.g;a.f.g=null;if(b.Ra)throw b.Ab;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function Ca(a){this.next=function(b){ra(a.f);a.f.i?b=Aa(a,a.f.i.next,b,a.f.F):(a.f.F(b),b=Ba(a));return b};
this["throw"]=function(b){ra(a.f);a.f.i?b=Aa(a,a.f.i["throw"],b,a.f.F):(sa(a.f,b),b=Ba(a));return b};
this["return"]=function(b){return za(a,b)};
this[Symbol.iterator]=function(){return this}}
function Da(a,b){var c=new Ca(new ya(b));oa&&a.prototype&&oa(c,a.prototype);return c}
t("Reflect",function(a){return a?a:{}});
t("Reflect.construct",function(){return ia});
t("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
function Ea(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ea(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ea(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
t("Object.setPrototypeOf",function(a){return a||oa});
function Fa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Ga="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Fa(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Ga});
t("Promise",function(a){function b(g){this.G=0;this.R=void 0;this.f=[];this.o=!1;var h=this.g();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.i(function(){h.o()})}this.f.push(g)};
var e=da.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.f=null};
c.prototype.l=function(g){this.i(function(){throw g;})};
b.prototype.g=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.ha),reject:g(this.i)}};
b.prototype.ha=function(g){if(g===this)this.i(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ua(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.L(g):this.l(g)}};
b.prototype.L=function(g){var h=void 0;try{h=g.then}catch(k){this.i(k);return}"function"==typeof h?this.va(h,g):this.l(g)};
b.prototype.i=function(g){this.A(2,g)};
b.prototype.l=function(g){this.A(1,g)};
b.prototype.A=function(g,h){if(0!=this.G)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.G);this.G=g;this.R=h;2===this.G&&this.ia();this.B()};
b.prototype.ia=function(){var g=this;e(function(){if(g.F()){var h=da.console;"undefined"!==typeof h&&h.error(g.R)}},1)};
b.prototype.F=function(){if(this.o)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.R;return k(g)};
b.prototype.B=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.ua=function(g){var h=this.g();g.ka(h.resolve,h.reject)};
b.prototype.va=function(g,h){var k=this.g();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,q){return"function"==typeof r?function(w){try{l(r(w))}catch(F){n(F)}}:q}
var l,n,p=new b(function(r,q){l=r;n=q});
this.ka(k(g,l),k(h,n));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.ka=function(g,h){function k(){switch(l.G){case 1:g(l.R);break;case 2:h(l.R);break;default:throw Error("Unexpected state: "+l.G);}}
var l=this;null==this.f?f.g(k):this.f.push(k);this.o=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),n=l.next();!n.done;n=l.next())d(n.value).ka(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(w){return function(F){r[w]=F;q--;0==q&&l(r)}}
var r=[],q=0;do r.push(void 0),q++,d(k.value).ka(p(r.length-1),n),k=h.next();while(!k.done)})};
return b});
function Ha(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
t("Array.prototype.entries",function(a){return a?a:function(){return Ha(this,function(b,c){return[b,c]})}});
t("Array.prototype.keys",function(a){return a?a:function(){return Ha(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Ha(this,function(b,c){return c})}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ea(this,b,"includes").indexOf(b,c||0)}});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Fa(b,d)&&c.push([d,b[d]]);return c}});
t("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Fa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n["delete"](k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Fa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&Fa(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&Fa(k,g)&&Fa(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&Fa(k,g)&&Fa(k[g],this.f)?delete k[g][this.f]:!1};
return b});
t("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ea(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.g[l];if(n&&Fa(h.g,l))for(var p=0;p<n.length;p++){var r=n[p];if(k!==k&&r.key!==r.key||k===r.key)return{id:l,list:n,index:p,J:r}}return{id:l,list:n,index:-1,J:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.J?l.J.value=k:(l.J={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.J),this.f.previous.next=l.J,this.f.previous=l.J,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.J&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.J.previous.next=h.J.next,h.J.next.previous=h.J.previous,h.J.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).J};
e.prototype.get=function(h){return(h=d(this,h).J)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
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
var v=this||self;function x(a,b){for(var c=a.split("."),d=b||v,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Ia(){}
function Ja(a){a.ya=void 0;a.C=function(){return a.ya?a.ya:a.ya=new a}}
function Ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function La(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ma(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Oa(a){return Object.prototype.hasOwnProperty.call(a,Pa)&&a[Pa]||(a[Pa]=++Qa)}
var Pa="closure_uid_"+(1E9*Math.random()>>>0),Qa=0;function Ra(a,b,c){return a.call.apply(a.bind,arguments)}
function Sa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function y(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y=Ra:y=Sa;return y.apply(null,arguments)}
function Ta(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ua(){return Date.now()}
function z(a,b){var c=a.split("."),d=v;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function A(a,b){function c(){}
c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Dc=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Va(a){return a}
function Wa(a){var b=null,c=v.trustedTypes;if(!c||!c.createPolicy)return b;try{b=c.createPolicy(a,{createHTML:Va,createScript:Va,createScriptURL:Va})}catch(d){v.console&&v.console.error(d.message)}return b}
;function Xa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Xa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
A(Xa,Error);Xa.prototype.name="CustomError";var Ya;function Za(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.f=/[?&]adurl=([^&]*)/.exec(a))&&this.f[1]){try{var c=decodeURIComponent(this.f[1])}catch(d){c=null}this.g=c}}
;function $a(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var ab=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},B=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},bb=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g="string"===typeof a?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},cb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},db=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
B(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},eb=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1};
function fb(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function gb(a,b){return 0<=ab(a,b)}
function hb(a,b){var c=ab(a,b),d;(d=0<=c)&&Array.prototype.splice.call(a,c,1);return d}
function ib(a){return Array.prototype.concat.apply([],arguments)}
function jb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function kb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function lb(a,b,c,d){return Array.prototype.splice.apply(a,mb(arguments,1))}
function mb(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function nb(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Array.isArray(d))for(var e=0;e<d.length;e+=8192){var f=mb(d,e,e+8192);f=nb.apply(null,f);for(var g=0;g<f.length;g++)b.push(f[g])}else b.push(d)}return b}
;function ob(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function pb(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function qb(a){var b=rb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function sb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function tb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=tb(a[c]);return b}
var ub="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function vb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ub.length;f++)c=ub[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var wb;var xb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function yb(a,b){if(b)a=a.replace(zb,"&amp;").replace(Ab,"&lt;").replace(Bb,"&gt;").replace(Cb,"&quot;").replace(Db,"&#39;").replace(Eb,"&#0;");else{if(!Fb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(zb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ab,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Bb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Cb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Db,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Eb,"&#0;"))}return a}
var zb=/&/g,Ab=/</g,Bb=/>/g,Cb=/"/g,Db=/'/g,Eb=/\x00/g,Fb=/[\x00&<>"']/;
function Gb(a,b){for(var c=0,d=xb(String(a)).split("."),e=xb(String(b)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var h=d[g]||"",k=e[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==h[0].length&&0==k[0].length)break;c=Ib(0==h[1].length?0:parseInt(h[1],10),0==k[1].length?0:parseInt(k[1],10))||Ib(0==h[2].length,0==k[2].length)||Ib(h[2],k[2]);h=h[3];k=k[3]}while(0==c)}return c}
function Ib(a,b){return a<b?-1:a>b?1:0}
;function Jb(a,b){this.f=b===Kb?a:""}
Jb.prototype.ea=!0;Jb.prototype.ca=function(){return this.f.toString()};
Jb.prototype.Pa=!0;Jb.prototype.La=function(){return 1};
function Lb(a){if(a instanceof Jb&&a.constructor===Jb)return a.f;Ka(a);return"type_error:SafeUrl"}
var Mb=/^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,Nb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Ob=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Kb={},Pb=new Jb("about:invalid#zClosurez",Kb);var Qb;a:{var Rb=v.navigator;if(Rb){var Sb=Rb.userAgent;if(Sb){Qb=Sb;break a}}Qb=""}function C(a){return-1!=Qb.indexOf(a)}
;function Tb(){return C("Firefox")||C("FxiOS")}
function Ub(){return C("Safari")&&!(Vb()||C("Coast")||C("Opera")||C("Edge")||C("Edg/")||C("OPR")||Tb()||C("Silk")||C("Android"))}
function Vb(){return(C("Chrome")||C("CriOS"))&&!C("Edge")}
function Wb(){return C("Android")&&!(Vb()||Tb()||C("Opera")||C("Silk"))}
;function Xb(a,b,c){this.f=c===Yb?a:"";this.g=b}
Xb.prototype.Pa=!0;Xb.prototype.La=function(){return this.g};
Xb.prototype.ea=!0;Xb.prototype.ca=function(){return this.f.toString()};
function Zb(a){if(a instanceof Xb&&a.constructor===Xb)return a.f;Ka(a);return"type_error:SafeHtml"}
var Yb={};function $b(a,b){void 0===wb&&(wb=Wa("goog#html"));var c=(c=wb)?c.createHTML(a):a;return new Xb(c,b,Yb)}
var ac=new Xb(v.trustedTypes&&v.trustedTypes.emptyHTML||"",0,Yb);var bc=$a(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=Zb(ac);return!b.parentElement});
function cc(a,b){if(bc())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Zb(b)}
;function dc(a){return a=yb(a,void 0)}
function ec(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function fc(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})}
;var gc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function hc(a){return a?decodeURI(a):a}
function ic(a){return hc(a.match(gc)[3]||null)}
function jc(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function kc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)kc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function lc(a,b){for(var c=[],d=b||0;d<a.length;d+=2)kc(a[d],a[d+1],c);return c.join("&")}
function mc(a){var b=[],c;for(c in a)kc(c,a[c],b);return b.join("&")}
function nc(a,b){var c=2==arguments.length?lc(arguments[1],0):lc(arguments,1);return jc(a,c)}
function oc(a,b){var c=mc(b);return jc(a,c)}
var pc=/#|$/;function qc(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(k){try{h(b.next(k))}catch(l){e(l)}}
function g(k){try{h(b["throw"](k))}catch(l){e(l)}}
function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(f,g)}
h((b=b.apply(a,void 0)).next())})}
;function rc(){return C("iPhone")&&!C("iPod")&&!C("iPad")}
function sc(){return rc()||C("iPad")||C("iPod")}
;function tc(a){tc[" "](a);return a}
tc[" "]=Ia;function uc(a,b){try{return tc(a[b]),!0}catch(c){}return!1}
function vc(a,b,c,d){d=d?d(b):b;return Object.prototype.hasOwnProperty.call(a,d)?a[d]:a[d]=c(b)}
;var wc=C("Opera"),D=C("Trident")||C("MSIE"),xc=C("Edge"),yc=xc||D,zc=C("Gecko")&&!(-1!=Qb.toLowerCase().indexOf("webkit")&&!C("Edge"))&&!(C("Trident")||C("MSIE"))&&!C("Edge"),Ac=-1!=Qb.toLowerCase().indexOf("webkit")&&!C("Edge"),Bc=C("Macintosh"),Cc=C("Windows"),Dc=C("Android"),Ec=rc(),Fc=C("iPad"),Hc=C("iPod"),Ic=sc();function Jc(){var a=v.document;return a?a.documentMode:void 0}
var Kc;a:{var Lc="",Mc=function(){var a=Qb;if(zc)return/rv:([^\);]+)(\)|;)/.exec(a);if(xc)return/Edge\/([\d\.]+)/.exec(a);if(D)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ac)return/WebKit\/(\S+)/.exec(a);if(wc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Mc&&(Lc=Mc?Mc[1]:"");if(D){var Nc=Jc();if(null!=Nc&&Nc>parseFloat(Lc)){Kc=String(Nc);break a}}Kc=Lc}var Oc=Kc,Pc={};function Qc(a){return vc(Pc,a,function(){return 0<=Gb(Oc,a)})}
var Rc;if(v.document&&D){var Sc=Jc();Rc=Sc?Sc:parseInt(Oc,10)||void 0}else Rc=void 0;var Tc=Rc;var Uc=Tb(),Vc=rc()||C("iPod"),Wc=C("iPad"),Xc=Wb(),Yc=Vb(),Zc=Ub()&&!sc();var $c={},ad=null;var bd=window;function cd(a){var b=x("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||v.$googDebugFname||b}catch(g){e="Not available",c=!0}b=dd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ed[c])c=ed[c];else{c=String(c);if(!ed[c]){var f=/function\s+([^\(]+)/m.exec(c);ed[c]=f?f[1]:"[Anonymous]"}c=ed[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function dd(a,b){b||(b={});b[fd(a)]=!0;var c=a.stack||"",d=a.Ec;d&&!b[fd(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=dd(d,b));return c}
function fd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ed={};function gd(a){this.f=a||{cookie:""}}
m=gd.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Nc;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ua}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);this.f.cookie=a+"="+b+(f?";domain="+f:"")+(g?";path="+g:"")+(0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString())+(d?";secure":"")+(null!=e?";samesite="+e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=xb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ua:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.f.cookie};
m.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=xb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var hd=new gd("undefined"==typeof document?null:document);var id=!D||9<=Number(Tc),jd=!zc&&!D||D&&9<=Number(Tc)||zc&&Qc("1.9.1"),kd=D&&!Qc("9");function E(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=E.prototype;m.clone=function(){return new E(this.x,this.y)};
m.equals=function(a){return a instanceof E&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function ld(a,b){return new E(a.x-b.x,a.y-b.y)}
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function md(a,b){this.width=a;this.height=b}
m=md.prototype;m.clone=function(){return new md(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function nd(a){return a?new od(pd(a)):Ya||(Ya=new od)}
function G(a){return"string"===typeof a?document.getElementById(a):a}
function qd(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):rd(document,"*",a,b)}
function H(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):rd(c,"*",a,b)[0]||null}return c||null}
function rd(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,g;g=a[f];f++)b==g.nodeName&&(d[e++]=g);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;g=a[f];f++)b=g.className,"function"==typeof b.split&&gb(b.split(/\s+/),c)&&(d[e++]=g);d.length=e;return d}return a}
function sd(a,b){ob(b,function(c,d){c&&"object"==typeof c&&c.ea&&(c=c.ca());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:td.hasOwnProperty(d)?a.setAttribute(td[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var td={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function ud(a){a=a.document;a=vd(a)?a.documentElement:a.body;return new md(a.clientWidth,a.clientHeight)}
function wd(a){var b=xd(a);a=yd(a);return D&&Qc("10")&&a.pageYOffset!=b.scrollTop?new E(b.scrollLeft,b.scrollTop):new E(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function xd(a){return a.scrollingElement?a.scrollingElement:!Ac&&vd(a)?a.documentElement:a.body||a.documentElement}
function yd(a){return a.parentWindow||a.defaultView}
function zd(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!id&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',dc(g.name),'"');if(g.type){f.push(' type="',dc(g.type),'"');var h={};vb(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=Ad(e,f);g&&("string"===typeof g?f.className=g:Array.isArray(g)?f.className=g.join(" "):sd(f,g));2<d.length&&Bd(e,f,d);return f}
function Bd(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!La(f)||Ma(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Ma(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}B(g?jb(f):f,d)}}}
function Ad(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function vd(a){return"CSS1Compat"==a.compatMode}
function Cd(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Dd(a){return jd&&void 0!=a.children?a.children:bb(a.childNodes,function(b){return 1==b.nodeType})}
function Ed(a){return Ma(a)&&1==a.nodeType}
function Fd(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function pd(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Gd(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);c=pd(a);a.appendChild(c.createTextNode(String(b)))}}
function Hd(a,b){var c=[];return Id(a,b,c,!0)?c[0]:void 0}
function Id(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Id(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Jd={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Kd={IMG:" ",BR:"\n"};function Ld(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!Md(a)||Nd(a)):Md(a)&&Nd(a))&&D){var c;"function"!==typeof a.getBoundingClientRect||D&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function Md(a){return D&&!Qc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function Nd(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a}
function Od(a){if(kd&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];Qd(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");kd||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Qd(a,b,c){if(!(a.nodeName in Jd))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Kd)b.push(Kd[a.nodeName]);else for(a=a.firstChild;a;)Qd(a,b,c),a=a.nextSibling}
function Rd(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return Sd(a,function(f){return(!e||f.nodeName==e)&&(!c||"string"===typeof f.className&&gb(f.className.split(/\s+/),c))},!0,d)}
function I(a,b){return Rd(a,null,b,void 0)}
function Sd(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function od(a){this.f=a||v.document||document}
od.prototype.getElementsByTagName=function(a,b){return(b||this.f).getElementsByTagName(String(a))};
od.prototype.createElement=function(a){return Ad(this.f,a)};
od.prototype.appendChild=function(a,b){a.appendChild(b)};
od.prototype.isElement=Ed;function Td(a){var b=Ud;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Vd(){var a=[];Td(function(b){a.push(b)});
return a}
var Ud={mc:"allow-forms",nc:"allow-modals",oc:"allow-orientation-lock",pc:"allow-pointer-lock",qc:"allow-popups",sc:"allow-popups-to-escape-sandbox",tc:"allow-presentation",uc:"allow-same-origin",wc:"allow-scripts",xc:"allow-top-navigation",yc:"allow-top-navigation-by-user-activation"},Wd=$a(function(){return Vd()});
function Xd(){var a=Ad(document,"IFRAME"),b={};B(Wd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Yd(){this.i=this.i;this.l=this.l}
Yd.prototype.i=!1;Yd.prototype.oa=function(){return this.i};
Yd.prototype.dispose=function(){this.i||(this.i=!0,this.T())};
Yd.prototype.T=function(){if(this.l)for(;this.l.length;)this.l.shift()()};
function Zd(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function $d(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
m=$d.prototype;m.getHeight=function(){return this.bottom-this.top};
m.clone=function(){return new $d(this.top,this.right,this.bottom,this.left)};
m.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
m.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
m.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function ae(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
ae.prototype.clone=function(){return new ae(this.left,this.top,this.width,this.height)};
ae.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
ae.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
ae.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var be={};function ce(){}
function de(a,b){if(b!==be)throw Error("Bad secret");this.f=a}
pa(de,ce);de.prototype.toString=function(){return this.f};new de("about:blank",be);new de("about:invalid#zTSz",be);function ee(a,b,c){if("string"===typeof b)(b=fe(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=fe(c,d);f&&(c.style[f]=e)}}
var ge={};function fe(a,b){var c=ge[b];if(!c){var d=ec(b);c=d;void 0===a.style[d]&&(d=(Ac?"Webkit":zc?"Moz":D?"ms":wc?"O":null)+fc(d),void 0!==a.style[d]&&(c=d));ge[b]=c}return c}
function he(a,b){var c=pd(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function ie(a,b){return he(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function je(a){try{return a.getBoundingClientRect()}catch(b){return{left:0,top:0,right:0,bottom:0}}}
function ke(a){if(D&&!(8<=Number(Tc)))return a.offsetParent;var b=pd(a),c=ie(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=ie(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function le(a){for(var b=new $d(0,Infinity,Infinity,0),c=nd(a),d=c.f.body,e=c.f.documentElement,f=xd(c.f);a=ke(a);)if(!(D&&0==a.clientWidth||Ac&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=ie(a,"overflow")){var g=me(a),h=new E(a.clientLeft,a.clientTop);g.x+=h.x;g.y+=h.y;b.top=Math.max(b.top,g.y);b.right=Math.min(b.right,g.x+a.clientWidth);b.bottom=Math.min(b.bottom,g.y+a.clientHeight);b.left=Math.max(b.left,g.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
ud(yd(c.f)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function me(a){var b=pd(a),c=new E(0,0);var d=b?pd(b):document;d=!D||9<=Number(Tc)||vd(nd(d).f)?d.documentElement:d.body;if(a==d)return c;a=je(a);b=wd(nd(b).f);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function ne(a){a=je(a);return new E(a.left,a.top)}
function oe(a,b,c){if(b instanceof md)c=b.height,b=b.width;else if(void 0==c)throw Error("missing height argument");a.style.width=pe(b,!0);a.style.height=pe(c,!0)}
function pe(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function qe(a){var b=re;if("none"!=ie(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function re(a){var b=a.offsetWidth,c=a.offsetHeight,d=Ac&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=je(a),new md(a.right-a.left,a.bottom-a.top)):new md(b,c)}
function se(a){var b=me(a);a=qe(a);return new ae(b.x,b.y,a.width,a.height)}
function te(a){return"rtl"==ie(a,"direction")}
function ue(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function ve(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?ue(a,c):0}
var we={thin:2,medium:4,thick:6};function xe(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in we?we[c]:ue(a,c)}
;var ye=(new Date).getTime();function ze(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"moz-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Ae=window,Be=document,Ce=Ae.location;function De(){}
var Ee=/\[native code\]/;function K(a,b,c){return a[b]=a[b]||c}
function Fe(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Ge(){var a;if((a=Object.create)&&Ee.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var He=K(Ae,"gapi",{});var L;L=K(Ae,"___jsl",Ge());K(L,"I",0);K(L,"hel",10);function Ie(){var a=Ce.href;if(L.dpo)var b=L.h;else{b=L.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function Je(a){var b=K(L,"PQ",[]);L.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function Ke(a){return K(K(L,"H",Ge()),a,Ge())}
;function Le(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var r=g,q=0;64>q;q+=4)r[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=r[q-3]^r[q-8]^r[q-14]^r[q-16],r[q]=(p<<1|p>>>31)&4294967295;p=e[0];var w=e[1],F=e[2],J=e[3],Hb=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var na=J^w&(F^J);var Na=1518500249}else na=w^F^J,Na=1859775393;else 60>q?(na=w&F|J&(w|F),Na=2400959708):(na=w^F^J,Na=3395469782);na=((p<<5|p>>>27)&4294967295)+na+Hb+Na+r[q]&4294967295;Hb=J;J=F;F=(w<<30|w>>>2)&4294967295;w=p;p=na}e[0]=e[0]+p&4294967295;e[1]=e[1]+
w&4294967295;e[2]=e[2]+F&4294967295;e[3]=e[3]+J&4294967295;e[4]=e[4]+Hb&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],w=0,F=p.length;w<F;++w)q.push(p.charCodeAt(w));p=q}r||(r=p.length);q=0;if(0==l)for(;q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<r;)if(f[l++]=p[q++],n++,64==l)for(l=0,b(f);q+64<r;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=r&255,r>>>=8;b(f);for(q=r=0;5>q;q++)for(var w=24;0<=w;w-=8)p[r++]=e[q]>>w&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,wb:function(){for(var p=d(),r="",q=0;q<p.length;q++)r+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return r}}}
;function Me(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],B(d,function(h){e.push(h)}),Ne(e.join(" "));
var f=[],g=[];B(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];B(d,function(h){e.push(h)});
a=Ne(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ne(a){var b=Le();b.update(a);return b.wb().toLowerCase()}
;function Oe(a){var b=ze(String(v.location.href)),c;(c=v.__SAPISID||v.__APISID||v.__OVERRIDE_SID)?c=!0:(c=new gd(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:")||0==b.indexOf("moz-extension:"))?v.__SAPISID:v.__APISID,c||(c=new gd(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(v.location.href);return d&&c&&b?[b,Me(ze(d),
c,a||null)].join(" "):null}return null}
;var Pe=K(L,"perf",Ge());K(Pe,"g",Ge());var Qe=K(Pe,"i",Ge());K(Pe,"r",[]);Ge();Ge();function Re(a,b,c){b&&0<b.length&&(b=Se(b),c&&0<c.length&&(b+="___"+Se(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=K(Qe,"_p",Ge()),K(b,c,Ge())[a]=(new Date).getTime(),b=Pe.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function Se(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var Te=Ge(),Ue=[];function Ve(a){throw Error("Bad hint"+(a?": "+a:""));}
Ue.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?L[b]=K(L,b,[]).concat(c):K(L,b,c)}if(b=a.u)a=K(L,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var We=/^(\/[a-zA-Z0-9_\-]+)+$/,Xe=[/\/amp\//,/\/amp$/,/^\/amp$/],Ye=/^[a-zA-Z0-9\-_\.,!]+$/,Ze=/^gapi\.loaded_[0-9]+$/,$e=/^[a-zA-Z0-9,._-]+$/;function af(a,b,c,d){var e=a.split(";"),f=e.shift(),g=Te[f],h=null;g?h=g(e,b,c,d):Ve("no hint processor for: "+f);h||Ve("failed to generate load url");b=h;c=b.match(bf);(d=b.match(cf))&&1===d.length&&df.test(b)&&c&&1===c.length||Ve("failed sanity: "+a);return h}
function ef(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=ff(a);Ze.test(c)||Ve("invalid_callback");b=gf(b);d=d&&d.length?gf(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.Da?"/am="+e(a.Da):"",a.ib?"/rs="+e(a.ib):"",a.rb?"/t="+e(a.rb):"","/cb=",e(c)].join("")}
function ff(a){"/"!==a.charAt(0)&&Ve("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))Ve("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),g=decodeURIComponent(f[0]),h=decodeURIComponent(f[1]);2==f.length&&g&&h&&(a[g]=a[g]||h)}b="/"+c.join("/");We.test(b)||Ve("invalid_prefix");c=0;for(d=Xe.length;c<d;++c)Xe[c].test(b)&&Ve("invalid_prefix");c=hf(a,
"k",!0);d=hf(a,"am");e=hf(a,"rs");a=hf(a,"t");return{pathPrefix:b,version:c,Da:d,ib:e,rb:a}}
function gf(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");$e.test(e)&&b.push(e)}return b.join(",")}
function hf(a,b,c){a=a[b];!a&&c&&Ve("missing: "+b);if(a){if(Ye.test(a))return a;Ve("invalid: "+b)}return null}
var df=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,cf=/\/cb=/g,bf=/\/\//g;function jf(){var a=Ie();if(!a)throw Error("Bad hint");return a}
Te.m=function(a,b,c,d){(a=a[0])||Ve("missing_hint");return"https://apis.google.com"+ef(a,b,c,d)};
var kf=decodeURI("%73cript"),lf=/^[-+_0-9\/A-Za-z]+={0,2}$/;function mf(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function nf(){var a=L.nonce;return void 0!==a?a&&a===String(a)&&a.match(lf)?a:L.nonce=null:Be.querySelector?(a=Be.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(lf)?L.nonce=a:L.nonce=null):null:null}
function of(a){if("loading"!=Be.readyState)pf(a);else{var b=nf(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+kf+' src="'+encodeURI(a)+'"'+c+"></"+kf+">";Be.write(qf?qf.createHTML(a):a)}}
function pf(a){var b=Be.createElement(kf);b.setAttribute("src",qf?qf.createScriptURL(a):a);a=nf();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Be.getElementsByTagName(kf)[0])?a.parentNode.insertBefore(b,a):(Be.head||Be.body||Be.documentElement).appendChild(b)}
function rf(a,b){var c=b&&b._c;if(c)for(var d=0;d<Ue.length;d++){var e=Ue[d][0],f=Ue[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function sf(a,b,c){tf(function(){var d=b===Ie()?K(He,"_",Ge()):Ge();d=K(Ke(b),"_",d);a(d)},c)}
function uf(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);rf(a,c);var d=a?a.split(":"):[],e=c.h||jf(),f=K(L,"ah",Ge());if(f["::"]&&d.length){for(var g=[],h=null;h=d.shift();){var k=h.split(".");k=f[h]||f[k[1]&&"ns:"+k[0]||""]||e;var l=g.length&&g[g.length-1]||null,n=l;l&&l.hint==k||(n={hint:k,features:[]},g.push(n));n.features.push(h)}var p=g.length;if(1<p){var r=c.callback;r&&(c.callback=function(){0==--p&&r()})}for(;d=g.shift();)vf(d.features,c,d.hint)}else vf(d||[],c,e)}
function vf(a,b,c){function d(na,Na){if(p)return 0;Ae.clearTimeout(n);r.push.apply(r,w);var Gc=((He||{}).config||{}).update;Gc?Gc(f):f&&K(L,"cu",[]).push(f);if(Na){Re("me0",na,q);try{sf(Na,c,l)}finally{Re("me1",na,q)}}return 1}
a=Fe(a)||[];var e=b.callback,f=b.config,g=b.timeout,h=b.ontimeout,k=b.onerror,l=void 0;"function"==typeof k&&(l=k);var n=null,p=!1;if(g&&!h||!g&&h)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";k=K(Ke(c),"r",[]).sort();var r=K(Ke(c),"L",[]).sort(),q=[].concat(k);0<g&&(n=Ae.setTimeout(function(){p=!0;h()},g));
var w=mf(a,r);if(w.length){w=mf(a,k);var F=K(L,"CP",[]),J=F.length;F[J]=function(na){function Na(){var Pd=F[J+1];Pd&&Pd()}
function Gc(Pd){F[J]=null;d(w,na)&&Je(function(){e&&e();Pd()})}
if(!na)return 0;Re("ml1",w,q);0<J&&F[J-1]?F[J]=function(){Gc(Na)}:Gc(Na)};
if(w.length){var Hb="loaded_"+L.I++;He[Hb]=function(na){F[J](na);He[Hb]=null};
a=af(c,w,"gapi."+Hb,k);k.push.apply(k,w);Re("ml0",w,q);b.sync||Ae.___gapisync?of(a):pf(a)}else F[J](De)}else d(w)&&e&&e()}
var qf=Wa("goog#gapi");function tf(a,b){if(L.hee&&0<L.hel)try{return a()}catch(c){b&&b(c),L.hel--,uf("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
He.load=function(a,b){return tf(function(){return uf(a,b)})};function wf(){this.g=[];this.f=-1}
wf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
wf.prototype.get=function(a){return!!this.g[a]};
function xf(a){-1==a.f&&(a.f=db(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function yf(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.f=!1}
yf.prototype.stopPropagation=function(){this.f=!0};
yf.prototype.preventDefault=function(){this.defaultPrevented=!0};var zf=!D||9<=Number(Tc),Af=D&&!Qc("9"),Bf=function(){if(!v.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{v.addEventListener("test",Ia,b),v.removeEventListener("test",Ia,b)}catch(c){}return a}();function Cf(a,b){yf.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.g=null;a&&this.init(a,b)}
A(Cf,yf);var Df={2:"touch",3:"pen",4:"mouse"};
Cf.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.currentTarget=b;var e=a.relatedTarget;e?zc&&(uc(e,"nodeName")||(e=null)):"mouseover"==c?e=a.fromElement:"mouseout"==c&&(e=a.toElement);this.relatedTarget=e;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=void 0!==a.clientX?
a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Df[a.pointerType]||"";this.state=a.state;this.g=a;a.defaultPrevented&&this.preventDefault()};
Cf.prototype.stopPropagation=function(){Cf.D.stopPropagation.call(this);this.g.stopPropagation?this.g.stopPropagation():this.g.cancelBubble=!0};
Cf.prototype.preventDefault=function(){Cf.D.preventDefault.call(this);var a=this.g;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Af)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Ef="closure_listenable_"+(1E6*Math.random()|0),Ff=0;function Gf(a,b,c,d,e){this.listener=a;this.f=null;this.src=b;this.type=c;this.capture=!!d;this.na=e;this.key=++Ff;this.aa=this.ja=!1}
function Hf(a){a.aa=!0;a.listener=null;a.f=null;a.src=null;a.na=null}
;function If(a){this.src=a;this.listeners={};this.f=0}
If.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.f++);var g=Jf(a,b,d,e);-1<g?(b=a[g],c||(b.ja=!1)):(b=new Gf(b,this.src,f,!!d,e),b.ja=c,a.push(b));return b};
If.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Jf(e,b,c,d);return-1<b?(Hf(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.f--),!0):!1};
function Kf(a,b){var c=b.type;c in a.listeners&&hb(a.listeners[c],b)&&(Hf(b),0==a.listeners[c].length&&(delete a.listeners[c],a.f--))}
function Jf(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.aa&&f.listener==b&&f.capture==!!c&&f.na==d)return e}return-1}
;var Lf="closure_lm_"+(1E6*Math.random()|0),Mf={},Nf=0;function Of(a,b,c,d,e){if(d&&d.once)Pf(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Of(a,b[f],c,d,e);else c=Qf(c),a&&a[Ef]?a.f.add(String(b),c,!1,Ma(d)?!!d.capture:!!d,e):Rf(a,b,c,!1,d,e)}
function Rf(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ma(e)?!!e.capture:!!e,h=Sf(a);h||(a[Lf]=h=new If(a));c=h.add(b,c,d,g,f);if(!c.f){d=Tf();c.f=d;d.src=a;d.listener=c;if(a.addEventListener)Bf||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Uf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Nf++}}
function Tf(){var a=Vf,b=zf?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);
if(!c)return c};
return b}
function Pf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Pf(a,b[f],c,d,e);else c=Qf(c),a&&a[Ef]?a.f.add(String(b),c,!0,Ma(d)?!!d.capture:!!d,e):Rf(a,b,c,!0,d,e)}
function Wf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Wf(a,b[f],c,d,e);else(d=Ma(d)?!!d.capture:!!d,c=Qf(c),a&&a[Ef])?a.f.remove(String(b),c,d,e):a&&(a=Sf(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Jf(b,c,d,e)),(c=-1<a?b[a]:null)&&Xf(c))}
function Xf(a){if("number"!==typeof a&&a&&!a.aa){var b=a.src;if(b&&b[Ef])Kf(b.f,a);else{var c=a.type,d=a.f;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Uf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Nf--;(c=Sf(b))?(Kf(c,a),0==c.f&&(c.src=null,b[Lf]=null)):Hf(a)}}}
function Uf(a){return a in Mf?Mf[a]:Mf[a]="on"+a}
function Yf(a,b,c,d){var e=!0;if(a=Sf(a))if(b=a.listeners[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.aa&&(f=Zf(f,d),e=e&&!1!==f)}return e}
function Zf(a,b){var c=a.listener,d=a.na||a.src;a.ja&&Xf(a);return c.call(d,b)}
function Vf(a,b){if(a.aa)return!0;if(!zf){var c=b||x("window.event"),d=new Cf(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(k){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);f=a.type;for(var g=c.length-1;!d.f&&0<=g;g--){d.currentTarget=c[g];var h=Yf(c[g],f,!0,d);e=e&&h}for(g=0;!d.f&&g<c.length;g++)d.currentTarget=c[g],h=Yf(c[g],f,!1,d),e=e&&h}return e}return Zf(a,new Cf(b,this))}
function Sf(a){a=a[Lf];return a instanceof If?a:null}
var $f="__closure_events_fn_"+(1E9*Math.random()>>>0);function Qf(a){if("function"===typeof a)return a;a[$f]||(a[$f]=function(b){return a.handleEvent(b)});
return a[$f]}
;function ag(){Yd.call(this);this.f=new If(this);this.A=this;this.o=null}
A(ag,Yd);ag.prototype[Ef]=!0;ag.prototype.addEventListener=function(a,b,c,d){Of(this,a,b,c,d)};
ag.prototype.removeEventListener=function(a,b,c,d){Wf(this,a,b,c,d)};
ag.prototype.dispatchEvent=function(a){var b=this.o;if(b){var c=[];for(var d=1;b;b=b.o)c.push(b),++d}b=this.A;d=a.type||a;if("string"===typeof a)a=new yf(a,b);else if(a instanceof yf)a.target=a.target||b;else{var e=a;a=new yf(d,b);vb(a,e)}e=!0;if(c)for(var f=c.length-1;!a.f&&0<=f;f--){var g=a.currentTarget=c[f];e=bg(g,d,!0,a)&&e}a.f||(g=a.currentTarget=b,e=bg(g,d,!0,a)&&e,a.f||(e=bg(g,d,!1,a)&&e));if(c)for(f=0;!a.f&&f<c.length;f++)g=a.currentTarget=c[f],e=bg(g,d,!1,a)&&e;return e};
ag.prototype.T=function(){ag.D.T.call(this);if(this.f){var a=this.f,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Hf(d[e]);delete a.listeners[c];a.f--}}this.o=null};
function bg(a,b,c,d){b=a.f.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.aa&&g.capture==c){var h=g.listener,k=g.na||g.src;g.ja&&Kf(a.f,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function cg(a,b){this.i=a;this.l=b;this.g=0;this.f=null}
cg.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.i();return a};
function dg(a,b){a.l(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function eg(a){v.setTimeout(function(){throw a;},0)}
var fg;
function gg(){var a=v.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!C("Presto")&&(a=function(){var e=Ad(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=y(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!C("Trident")&&!C("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Fa;c.Fa=null;e()}};
return function(e){d.next={Fa:e};d=d.next;b.port2.postMessage(0)}}return function(e){v.setTimeout(e,0)}}
;function hg(){this.g=this.f=null}
var jg=new cg(function(){return new ig},function(a){a.reset()});
hg.prototype.add=function(a,b){var c=jg.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
hg.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function ig(){this.next=this.scope=this.f=null}
ig.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
ig.prototype.reset=function(){this.next=this.scope=this.f=null};function kg(a,b){lg||mg();ng||(lg(),ng=!0);og.add(a,b)}
var lg;function mg(){if(v.Promise&&v.Promise.resolve){var a=v.Promise.resolve(void 0);lg=function(){a.then(pg)}}else lg=function(){var b=pg;
"function"!==typeof v.setImmediate||v.Window&&v.Window.prototype&&!C("Edge")&&v.Window.prototype.setImmediate==v.setImmediate?(fg||(fg=gg()),fg(b)):v.setImmediate(b)}}
var ng=!1,og=new hg;function pg(){for(var a;a=og.remove();){try{a.f.call(a.scope)}catch(b){eg(b)}dg(jg,a)}ng=!1}
;function qg(a){this.G=0;this.R=void 0;this.Z=this.P=this.V=null;this.ma=this.xa=!1;if(a!=Ia)try{var b=this;a.call(void 0,function(c){rg(b,2,c)},function(c){rg(b,3,c)})}catch(c){rg(this,3,c)}}
function sg(){this.next=this.context=this.onRejected=this.i=this.f=null;this.g=!1}
sg.prototype.reset=function(){this.context=this.onRejected=this.i=this.f=null;this.g=!1};
var tg=new cg(function(){return new sg},function(a){a.reset()});
function ug(a,b,c){var d=tg.get();d.i=a;d.onRejected=b;d.context=c;return d}
function vg(a){if(a instanceof qg)return a;var b=new qg(Ia);rg(b,2,a);return b}
function wg(a,b,c){xg(a,b,c,null)||kg(Ta(b,a))}
function yg(a){return new qg(function(b,c){var d=a.length,e=[];if(d)for(var f=function(l,n){d--;e[l]=n;0==d&&b(e)},g=function(l){c(l)},h=0,k;h<a.length;h++)k=a[h],wg(k,Ta(f,h),g);
else b(e)})}
qg.prototype.then=function(a,b,c){return zg(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
qg.prototype.$goog_Thenable=!0;function Ag(a,b){var c=ug(b,b,void 0);c.g=!0;Bg(a,c)}
function Cg(a,b){return zg(a,null,b,void 0)}
qg.prototype.cancel=function(a){if(0==this.G){var b=new Dg(a);kg(function(){Eg(this,b)},this)}};
function Eg(a,b){if(0==a.G)if(a.V){var c=a.V;if(c.P){for(var d=0,e=null,f=null,g=c.P;g&&(g.g||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.G&&1==d?Eg(c,b):(f?(d=f,d.next==c.Z&&(c.Z=d),d.next=d.next.next):Fg(c),Gg(c,e,3,b)))}a.V=null}else rg(a,3,b)}
function Bg(a,b){a.P||2!=a.G&&3!=a.G||Hg(a);a.Z?a.Z.next=b:a.P=b;a.Z=b}
function zg(a,b,c,d){var e=ug(null,null,null);e.f=new qg(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Dg?g(h):f(k)}catch(l){g(l)}}:g});
e.f.V=a;Bg(a,e);return e.f}
qg.prototype.fc=function(a){this.G=0;rg(this,2,a)};
qg.prototype.hc=function(a){this.G=0;rg(this,3,a)};
function rg(a,b,c){0==a.G&&(a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself")),a.G=1,xg(c,a.fc,a.hc,a)||(a.R=c,a.G=b,a.V=null,Hg(a),3!=b||c instanceof Dg||Ig(a,c)))}
function xg(a,b,c,d){if(a instanceof qg)return Bg(a,ug(b||Ia,c||null,d)),!0;if(a)try{var e=!!a.$goog_Thenable}catch(g){e=!1}else e=!1;if(e)return a.then(b,c,d),!0;if(Ma(a))try{var f=a.then;if("function"===typeof f)return Jg(a,f,b,c,d),!0}catch(g){return c.call(d,g),!0}return!1}
function Jg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Hg(a){a.xa||(a.xa=!0,kg(a.Bb,a))}
function Fg(a){var b=null;a.P&&(b=a.P,a.P=b.next,b.next=null);a.P||(a.Z=null);return b}
qg.prototype.Bb=function(){for(var a;a=Fg(this);)Gg(this,a,this.G,this.R);this.xa=!1};
function Gg(a,b,c,d){if(3==c&&b.onRejected&&!b.g)for(;a&&a.ma;a=a.V)a.ma=!1;if(b.f)b.f.V=null,Kg(b,c,d);else try{b.g?b.i.call(b.context):Kg(b,c,d)}catch(e){Lg.call(null,e)}dg(tg,b)}
function Kg(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Ig(a,b){a.ma=!0;kg(function(){a.ma&&Lg.call(null,b)})}
var Lg=eg;function Dg(a){Xa.call(this,a)}
A(Dg,Xa);Dg.prototype.name="cancel";function Mg(a,b,c){Yd.call(this);this.f=a;this.A=b||0;this.g=c;this.o=y(this.yb,this)}
A(Mg,Yd);m=Mg.prototype;m.da=0;m.T=function(){Mg.D.T.call(this);this.stop();delete this.f;delete this.g};
m.start=function(a){this.stop();var b=this.o;a=void 0!==a?a:this.A;if("function"!==typeof b)if(b&&"function"==typeof b.handleEvent)b=y(b.handleEvent,b);else throw Error("Invalid listener argument");this.da=2147483647<Number(a)?-1:v.setTimeout(b,a||0)};
m.stop=function(){this.isActive()&&v.clearTimeout(this.da);this.da=0};
m.isActive=function(){return 0!=this.da};
m.yb=function(){this.da=0;this.f&&this.f.call(this.g)};function Ng(){this.g=-1}
;function Og(){this.g=64;this.f=[];this.A=[];this.B=[];this.l=[];this.l[0]=128;for(var a=1;a<this.g;++a)this.l[a]=0;this.o=this.i=0;this.reset()}
A(Og,Ng);Og.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.o=this.i=0};
function Pg(a,b,c){c||(c=0);var d=a.B;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
Og.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.A,f=this.i;d<b;){if(0==f)for(;d<=c;)Pg(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Pg(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Pg(this,e);f=0;break}}this.i=f;this.o+=b}};
Og.prototype.digest=function(){var a=[],b=8*this.o;56>this.i?this.update(this.l,56-this.i):this.update(this.l,this.g-(this.i-56));for(var c=this.g-1;56<=c;c--)this.A[c]=b&255,b/=256;Pg(this,this.A);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var Qg="StopIteration"in v?v.StopIteration:{message:"StopIteration",stack:""};function Rg(){}
Rg.prototype.next=function(){throw Qg;};
Rg.prototype.O=function(){return this};
function Sg(a){if(a instanceof Rg)return a;if("function"==typeof a.O)return a.O(!1);if(La(a)){var b=0,c=new Rg;c.next=function(){for(;;){if(b>=a.length)throw Qg;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Tg(a,b){if(La(a))try{B(a,b,void 0)}catch(c){if(c!==Qg)throw c;}else{a=Sg(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Qg)throw c;}}}
function Ug(a){if(La(a))return jb(a);a=Sg(a);var b=[];Tg(a,function(c){b.push(c)});
return b}
;function Vg(a,b){this.i={};this.f=[];this.S=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Vg)for(c=Wg(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Wg(a){Xg(a);return a.f.concat()}
m=Vg.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||Yg;Xg(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Yg(a,b){return a===b}
m.isEmpty=function(){return 0==this.g};
m.clear=function(){this.i={};this.S=this.g=this.f.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.g--,this.S++,this.f.length>2*this.g&&Xg(this),!0):!1};
function Xg(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.g++,this.f.push(a),this.S++);this.i[a]=b};
m.forEach=function(a,b){for(var c=Wg(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Vg(this)};
m.O=function(a){Xg(this);var b=0,c=this.S,d=this,e=new Rg;e.next=function(){if(c!=d.S)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Qg;var f=d.f[b++];return a?f:d.i[f]};
return e};function Zg(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function $g(a){return a.classList?a.classList:Zg(a).match(/\S+/g)||[]}
function ah(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function M(a,b){return a.classList?a.classList.contains(b):gb($g(a),b)}
function N(a,b){if(a.classList)a.classList.add(b);else if(!M(a,b)){var c=Zg(a);ah(a,c+(0<c.length?" "+b:b))}}
function bh(a,b){if(a.classList)B(b,function(f){N(a,f)});
else{var c={};B($g(a),function(f){c[f]=!0});
B(b,function(f){c[f]=!0});
var d="",e;for(e in c)d+=0<d.length?" "+e:e;ah(a,d)}}
function ch(a,b){a.classList?a.classList.remove(b):M(a,b)&&ah(a,bb($g(a),function(c){return c!=b}).join(" "))}
function dh(a,b){a.classList?B(b,function(c){ch(a,c)}):ah(a,bb($g(a),function(c){return!gb(b,c)}).join(" "))}
function eh(a,b,c){c?N(a,b):ch(a,b)}
function fh(a,b,c){M(a,b)&&(ch(a,b),N(a,c))}
function gh(a,b){var c=!M(a,b);eh(a,b,c)}
;var hh=!D&&!Ub();function ih(a,b){if(/-[a-z]/.test(b))return null;if(hh&&a.dataset){if(Wb()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;function jh(a){var b=[];kh(new lh,a,b);return b.join("")}
function lh(){}
function kh(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),kh(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),mh(d,c),c.push(":"),kh(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":mh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var nh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},oh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function mh(a,b){b.push('"',a.replace(oh,function(c){var d=nh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),nh[c]=d);return d}),'"')}
;var ph=new WeakMap;function qh(a,b){for(var c=[a],d=b.length-1;0<=d;--d)c.push(typeof b[d],b[d]);return c.join("\x0B")}
;var rh=function(){if(Cc){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(Qb))?a[1]:"0"}return Bc?(a=/10[_.][0-9_.]+/,(a=a.exec(Qb))?a[0].replace(/_/g,"."):"10"):Dc?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(Qb))?a[1]:""):Ec||Fc||Hc?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(Qb))?a[1].replace(/_/g,"."):""):""}();function sh(a){return(a=a.exec(Qb))?a[1]:""}
var th=function(){if(Uc)return sh(/Firefox\/([0-9.]+)/);if(D||xc||wc)return Oc;if(Yc)return sc()?sh(/CriOS\/([0-9.]+)/):sh(/Chrome\/([0-9.]+)/);if(Zc&&!sc())return sh(/Version\/([0-9.]+)/);if(Vc||Wc){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(Qb);if(a)return a[1]+"."+a[2]}else if(Xc)return(a=sh(/Android\s+([0-9.]+)/))?a:sh(/Version\/([0-9.]+)/);return""}();function uh(a,b,c,d,e,f,g){var h;if(h=c.offsetParent){var k="HTML"==h.tagName||"BODY"==h.tagName;if(!k||"static"!=ie(h,"position")){var l=me(h);if(!k){k=te(h);var n;if(n=k){n=Zc&&0<=Gb(th,10);var p;if(p=Ic)p=0<=Gb(rh,10);var r=Yc&&0<=Gb(th,85);n=zc||n||p||r}k=n?-h.scrollLeft:!k||yc&&Qc("8")||"visible"==ie(h,"overflowX")?h.scrollLeft:h.scrollWidth-h.clientWidth-h.scrollLeft;l=ld(l,new E(k,h.scrollTop))}}}h=l||new E;l=se(a);if(k=le(a))r=new ae(k.left,k.top,k.right-k.left,k.bottom-k.top),k=Math.max(l.left,
r.left),n=Math.min(l.left+l.width,r.left+r.width),k<=n&&(p=Math.max(l.top,r.top),r=Math.min(l.top+l.height,r.top+r.height),p<=r&&(l.left=k,l.top=p,l.width=n-k,l.height=r-p));k=nd(a);p=nd(c);if(k.f!=p.f){n=k.f.body;p=yd(p.f);r=new E(0,0);var q=(q=pd(n))?yd(q):window;if(uc(q,"parent")){var w=n;do{var F=q==p?me(w):ne(w);r.x+=F.x;r.y+=F.y}while(q&&q!=p&&q!=q.parent&&(w=q.frameElement)&&(q=q.parent))}n=ld(r,me(n));!D||9<=Number(Tc)||vd(k.f)||(n=ld(n,wd(k.f)));l.left+=n.x;l.top+=n.y}a=vh(a,b);b=l.left;
a&4?b+=l.width:a&2&&(b+=l.width/2);b=new E(b,l.top+(a&1?l.height:0));b=ld(b,h);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var J;g&&(J=le(c))&&(J.top-=h.y,J.right-=h.x,J.bottom-=h.y,J.left-=h.x);return wh(b,c,d,f,J,g,void 0)}
function wh(a,b,c,d,e,f,g){a=a.clone();var h=vh(b,c);c=qe(b);g=g?g.clone():c.clone();a=a.clone();g=g.clone();var k=0;if(d||0!=h)h&4?a.x-=g.width+(d?d.right:0):h&2?a.x-=g.width/2:d&&(a.x+=d.left),h&1?a.y-=g.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;h=g;k=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,k|=1);if(f&16){var l=d.x;d.x<e.left&&(d.x=e.left,k|=4);d.x+h.width>e.right&&(h.width=Math.min(e.right-d.x,
l+h.width-e.left),h.width=Math.max(h.width,0),k|=4)}d.x+h.width>e.right&&f&1&&(d.x=Math.max(e.right-h.width,e.left),k|=1);f&2&&(k|=(d.x<e.left?16:0)|(d.x+h.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,k|=2);f&32&&(l=d.y,d.y<e.top&&(d.y=e.top,k|=8),d.y+h.height>e.bottom&&(h.height=Math.min(e.bottom-d.y,l+h.height-e.top),h.height=Math.max(h.height,0),k|=8));d.y+h.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-h.height,e.top),k|=2);f&8&&(k|=(d.y<e.top?64:0)|(d.y+h.height>e.bottom?128:0));e=k}else e=
256;k=e}f=new ae(0,0,0,0);f.left=a.x;f.top=a.y;f.width=g.width;f.height=g.height;e=k;if(e&496)return e;a=new E(f.left,f.top);a instanceof E?(g=a.x,a=a.y):(g=a,a=void 0);b.style.left=pe(g,!1);b.style.top=pe(a,!1);g=new md(f.width,f.height);c==g||c&&g&&c.width==g.width&&c.height==g.height||(c=g,g=pd(b),a=vd(nd(g).f),!D||Qc("10")||a&&Qc("8")?(b=b.style,zc?b.MozBoxSizing="border-box":Ac?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,
0)+"px"):(g=b.style,a?(D?(a=ve(b,"paddingLeft"),f=ve(b,"paddingRight"),d=ve(b,"paddingTop"),h=ve(b,"paddingBottom"),a=new $d(d,f,h,a)):(a=he(b,"paddingLeft"),f=he(b,"paddingRight"),d=he(b,"paddingTop"),h=he(b,"paddingBottom"),a=new $d(parseFloat(d),parseFloat(f),parseFloat(h),parseFloat(a))),!D||9<=Number(Tc)?(f=he(b,"borderLeftWidth"),d=he(b,"borderRightWidth"),h=he(b,"borderTopWidth"),b=he(b,"borderBottomWidth"),b=new $d(parseFloat(h),parseFloat(d),parseFloat(b),parseFloat(f))):(f=xe(b,"borderLeft"),
d=xe(b,"borderRight"),h=xe(b,"borderTop"),b=xe(b,"borderBottom"),b=new $d(h,d,b,f)),g.pixelWidth=c.width-b.left-a.left-a.right-b.right,g.pixelHeight=c.height-b.top-a.top-a.bottom-b.bottom):(g.pixelWidth=c.width,g.pixelHeight=c.height)));return e}
function vh(a,b){return(b&8&&te(a)?b^4:b)&-9}
;function O(a){Yd.call(this);this.B=1;this.o=[];this.A=0;this.f=[];this.g={};this.F=!!a}
A(O,Yd);m=O.prototype;m.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.B;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.B=e+3;d.push(e);return e};
function xh(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(e){c||(c=!0,this.ba(d),b.apply(void 0,arguments))},a)}
function yh(a,b,c){if(b=a.g[b]){var d=a.f;(b=fb(b,function(e){return d[e+1]==c&&void 0==d[e+2]}))&&a.ba(b)}}
m.ba=function(a){var b=this.f[a];if(b){var c=this.g[b];0!=this.A?(this.o.push(a),this.f[a+1]=Ia):(c&&hb(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
m.M=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.F)for(e=0;e<c.length;e++){var g=c[e];zh(this.f[g+1],this.f[g+2],d)}else{this.A++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.A--,0<this.o.length&&0==this.A)for(;c=this.o.pop();)this.ba(c)}}return 0!=e}return!1};
function zh(a,b,c){kg(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.g[a];b&&(B(b,this.ba,this),delete this.g[a])}else this.f.length=0,this.g={}};
function Ah(a,b){if(b){var c=a.g[b];return c?c.length:0}c=0;for(var d in a.g)c+=Ah(a,d);return c}
m.T=function(){O.D.T.call(this);this.clear();this.o.length=0};function Bh(a){this.f=a}
Bh.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,jh(b))};
Bh.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Bh.prototype.remove=function(a){this.f.remove(a)};function Ch(a){this.f=a}
A(Ch,Bh);function Dh(a){this.data=a}
function Eh(a){return void 0===a||a instanceof Dh?a:new Dh(a)}
Ch.prototype.set=function(a,b){Ch.D.set.call(this,a,Eh(b))};
Ch.prototype.g=function(a){a=Ch.D.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ch.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Fh(a){this.f=a}
A(Fh,Ch);Fh.prototype.set=function(a,b,c){if(b=Eh(b)){if(c){if(c<Ua()){Fh.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ua()}Fh.D.set.call(this,a,b)};
Fh.prototype.g=function(a){var b=Fh.D.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ua()||c&&c>Ua())Fh.prototype.remove.call(this,a);else return b}};function Gh(){}
;function Hh(){}
A(Hh,Gh);Hh.prototype.clear=function(){var a=Ug(this.O(!0)),b=this;B(a,function(c){b.remove(c)})};function Ih(a){this.f=a}
A(Ih,Hh);m=Ih.prototype;m.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeItem(a)};
m.O=function(a){var b=0,c=this.f,d=new Rg;d.next=function(){if(b>=c.length)throw Qg;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.f.clear()};
m.key=function(a){return this.f.key(a)};function Jh(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
A(Jh,Ih);function Kh(a,b){this.g=a;this.f=null;if(D&&!(9<=Number(Tc))){Lh||(Lh=new Vg);this.f=Lh.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Lh.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
A(Kh,Hh);var Mh={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Lh=null;function Nh(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Mh[b]})}
m=Kh.prototype;m.isAvailable=function(){return!!this.f};
m.set=function(a,b){this.f.setAttribute(Nh(a),b);Oh(this)};
m.get=function(a){a=this.f.getAttribute(Nh(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeAttribute(Nh(a));Oh(this)};
m.O=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new Rg;d.next=function(){if(b>=c.length)throw Qg;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Oh(this)};
function Oh(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ph(a,b){this.g=a;this.f=b+"::"}
A(Ph,Hh);Ph.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Ph.prototype.get=function(a){return this.g.get(this.f+a)};
Ph.prototype.remove=function(a){this.g.remove(this.f+a)};
Ph.prototype.O=function(a){var b=this.g.O(!0),c=this,d=new Rg;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var Qh=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",Qh);function Rh(a){var b=arguments;1<b.length?Qh[b[0]]=b[1]:1===b.length&&Object.assign(Qh,b[0])}
function P(a,b){return a in Qh?Qh[a]:b}
;var Sh=[];function Th(a){Sh.forEach(function(b){return b(a)})}
function Uh(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Vh(b),Th(b)}}:a}
function Vh(a){var b=x("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Rh("ERRORS",b))}
function Wh(a){var b=x("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Rh("ERRORS",b))}
;function Xh(a,b){"function"===typeof a&&(a=Uh(a));return window.setTimeout(a,b)}
function Yh(a){window.clearTimeout(a)}
;var Zh=v.ytPubsubPubsubInstance||new O,$h=v.ytPubsubPubsubSubscribedKeys||{},ai=v.ytPubsubPubsubTopicToKeys||{},bi=v.ytPubsubPubsubIsSynchronous||{};function ci(a,b,c){var d=di();if(d&&b){var e=d.subscribe(a,function(){var f=arguments;var g=function(){$h[e]&&b.apply&&"function"==typeof b.apply&&b.apply(c||window,f)};
try{bi[a]?g():Xh(g,0)}catch(h){Vh(h)}},c);
$h[e]=!0;ai[a]||(ai[a]=[]);ai[a].push(e);return e}return 0}
function ei(a){var b=di();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),B(a,function(c){b.unsubscribeByKey(c);delete $h[c]}))}
function fi(a,b){var c=di();return c?c.publish.apply(c,arguments):!1}
function gi(a,b){bi[a]=!0;var c=di();c&&c.publish.apply(c,arguments);bi[a]=!1}
function di(){return v.ytPubsubPubsubInstance}
O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.ba;O.prototype.publish=O.prototype.M;O.prototype.clear=O.prototype.clear;z("ytPubsubPubsubInstance",Zh);z("ytPubsubPubsubTopicToKeys",ai);z("ytPubsubPubsubIsSynchronous",bi);z("ytPubsubPubsubSubscribedKeys",$h);function hi(a,b,c){a&&(a.dataset?a.dataset[ii(b)]=String(c):a.setAttribute("data-"+b,c))}
function ji(a,b){return a?a.dataset?a.dataset[ii(b)]:a.getAttribute("data-"+b):null}
function ki(a,b){a&&(a.dataset?delete a.dataset[ii(b)]:a.removeAttribute("data-"+b))}
var li={};function ii(a){return li[a]||(li[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;function Q(a,b){this.version=a;this.args=b}
;function R(a,b){this.topic=a;this.f=b}
R.prototype.toString=function(){return this.topic};function mi(){}
;function ni(){}
pa(ni,mi);function oi(a,b,c){isNaN(c)&&(c=void 0);var d=x("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Xh(a,c||0)}
ni.prototype.start=function(){var a=x("yt.scheduler.instance.start");a&&a()};
Ja(ni);ni.C();var pi=x("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.ba;O.prototype.publish=O.prototype.M;O.prototype.clear=O.prototype.clear;z("ytPubsub2Pubsub2Instance",pi);var qi=x("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",qi);var ri=x("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",ri);var si=x("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",si);
z("ytPubsub2Pubsub2SkipSubKey",null);function S(a,b){var c=ti();c&&c.publish.call(c,a.toString(),a,b)}
function ui(a,b,c){var d=ti();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,g){var h=x("ytPubsub2Pubsub2SkipSubKey");h&&h==e||(h=function(){if(qi[e])try{if(g&&a instanceof R&&a!=f)try{var k=a.f,l=g;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!k.S){var n=new k;k.S=n.version}var p=k.S}catch(r){}if(!p||l.version!=p)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{g=Reflect.construct(k,jb(l.args))}catch(r){throw r.message=
"yt.pubsub2.Data.deserialize(): "+r.message,r;}}catch(r){throw r.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+r.message,r;}b.call(c||window,g)}catch(r){Vh(r)}},si[a.toString()]?x("yt.scheduler.instance")?oi(h,1,void 0):Xh(h,0):h())});
qi[e]=!0;ri[a.toString()]||(ri[a.toString()]=[]);ri[a.toString()].push(e);return e}
function vi(a){var b=ti();b&&("number"===typeof a&&(a=[a]),B(a,function(c){b.unsubscribeByKey(c);delete qi[c]}))}
function ti(){return x("ytPubsub2Pubsub2Instance")}
;var wi=0;function xi(a){var b=a.__yt_uid_key;b||(b=yi(),a.__yt_uid_key=b);return b}
function zi(a,b){a=G(a);b=G(b);return!!Sd(a,function(c){return c===b},!0,void 0)}
function Ai(a,b){var c=rd(document,a,null,b);return c.length?c[0]:null}
function Bi(){var a=document,b;eb(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function Ci(){eh(document.body,"hide-players",!1);var a=qd("preserve-players");B(a,function(b){ch(b,"preserve-players")})}
var yi=x("ytDomDomGetNextId")||function(){return++wi};
z("ytDomDomGetNextId",yi);var Di={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Ei(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Di||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Ei.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Ei.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Ei.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var rb=v.ytEventsEventsListeners||{};z("ytEventsEventsListeners",rb);var Fi=v.ytEventsEventsCounter||{count:0};z("ytEventsEventsCounter",Fi);
function Gi(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return qb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ma(e[4])&&Ma(d)&&sb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function T(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Gi(a,b,c,d);if(e)return e;e=++Fi.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Ei(h);if(!Sd(h.relatedTarget,function(k){return k==a},!0))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Ei(h);
h.currentTarget=a;return c.call(a,h)};
g=Uh(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Hi()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);rb[e]=[a,b,c,g,d];return e}
function Ii(a,b,c){var d=a||document;return T(d,"click",function(e){var f=Sd(e.target,function(g){return g===d||c(g)},!0);
f&&f!==d&&!f.disabled&&(e.currentTarget=f,b.call(f,e))})}
function Ji(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var Hi=$a(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Ki(a,b,c){return Ii(a,b,function(d){return M(d,c)})}
function Li(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function Mi(a){a&&("string"==typeof a&&(a=[a]),B(a,function(b){if(b in rb){var c=rb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Hi()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete rb[b]}}))}
;var Ni={},Oi="ontouchstart"in document;function Pi(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return Sd(c,function(e){return M(e,b)},!0,d)}
function Qi(a){var b="mouseover"==a.type&&"mouseenter"in Ni||"mouseout"==a.type&&"mouseleave"in Ni,c=a.type in Ni||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=Ni[b];for(var d in c.g){var e=Pi(b,d,a.target);e&&!Sd(a.relatedTarget,function(f){return f==e},!0)&&c.M(d,e,b,a)}}if(b=Ni[a.type])for(d in b.g)(e=Pi(a.type,d,a.target))&&b.M(d,e,a.type,a)}}
T(document,"blur",Qi,!0);T(document,"change",Qi,!0);T(document,"click",Qi);T(document,"focus",Qi,!0);T(document,"mouseover",Qi);T(document,"mouseout",Qi);T(document,"mousedown",Qi);T(document,"keydown",Qi);T(document,"keyup",Qi);T(document,"keypress",Qi);T(document,"cut",Qi);T(document,"paste",Qi);Oi&&(T(document,"touchstart",Qi),T(document,"touchend",Qi),T(document,"touchcancel",Qi));function Ri(a){this.o=a;this.B={};this.L=[];this.F=[]}
m=Ri.prototype;m.K=function(a){return I(a,U(this))};
function U(a,b){return"yt-uix"+(a.o?"-"+a.o:"")+(b?"-"+b:"")}
m.unregister=function(){ei(this.L);this.L.length=0;vi(this.F);this.F.length=0};
m.init=Ia;m.dispose=Ia;function Si(a,b,c){a.L.push(ci(b,c,a))}
function Ti(a,b,c){a.F.push(ui(b,c,a))}
function V(a,b,c,d){d=U(a,d);var e=y(c,a);b in Ni||(Ni[b]=new O);Ni[b].subscribe(d,e);a.B[c]=e}
function W(a,b,c,d){if(b in Ni){var e=Ni[b];yh(e,U(a,d),a.B[c]);0>=Ah(e)&&(e.dispose(),delete Ni[b])}delete a.B[c]}
m.Y=function(a,b,c){var d=this.j(a,b);if(d&&(d=x(d))){var e=mb(arguments,2);lb(e,0,0,a);d.apply(null,e)}};
m.j=function(a,b){return ji(a,b)};
function Ui(a,b){hi(a,"tooltip-text",b)}
;var Vi=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};z("yt.uix.widgets_",Vi);var Wi={q:!0,search_query:!0};function Xi(a){var b=[];ob(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];B(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Yi(a){"?"==a.charAt(0)&&(a=a.substr(1));for(var b=a.split("&"),c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=decodeURIComponent((f[0]||"").replace(/\+/g," ")),h=decodeURIComponent((f[1]||"").replace(/\+/g," "));g in c?Array.isArray(c[g])?kb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(k){Wi.hasOwnProperty(f[0])||(k.args=[{key:f[0],value:f[1],query:a}],Vh(k))}}return c}
function Zi(a){return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Yi(1<a.length?a[1]:a[0])):{}}
function $i(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Yi(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return oc(a,e)+d}
function aj(a){if(!b)var b=window.location.href;var c=a.match(gc)[1]||null,d=ic(a);c&&d?(a=a.match(gc),b=b.match(gc),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?ic(b)==d&&(Number(b.match(gc)[4]||null)||null)==(Number(a.match(gc)[4]||null)||null):!0;return a}
;function bj(a){a=void 0===a?{}:a;"function"===typeof a&&(a={callback:a});if(a.gapiHintOverride||P("GAPI_HINT_OVERRIDE")){var b=Zi(document.location.href).gapi_jsh;b&&vb(a,{_c:{jsl:{h:b}}})}uf("gapi.iframes:gapi.iframes.style.common",a)}
;function cj(){return x("gapi.iframes.getContext")()}
;function dj(a){Q.call(this,1,arguments);this.f=a}
A(dj,Q);function ej(a){Q.call(this,1,arguments);this.f=a}
A(ej,Q);function fj(a,b,c){Q.call(this,3,arguments);this.i=a;this.g=b;this.f=null!=c?!!c:null}
A(fj,Q);function gj(a,b,c,d,e,f){Q.call(this,2,arguments);this.f=a;this.g=b;this.l=c||null;this.i=d||null;this.source=e||null;this.params=f||null}
A(gj,Q);function hj(a,b,c){Q.call(this,1,arguments);this.f=a;this.g=b}
A(hj,Q);function ij(a,b,c,d,e,f,g,h){Q.call(this,1,arguments);this.f=a;this.o=b;this.g=c;this.A=d||null;this.l=e||null;this.i=f||null;this.source=g||null;this.params=h||null}
A(ij,Q);
var jj=new R("subscription-batch-subscribe",dj),kj=new R("subscription-batch-unsubscribe",dj),lj=new R("subscription-subscribe",gj),mj=new R("subscription-subscribe-loading",ej),nj=new R("subscription-subscribe-loaded",ej),oj=new R("subscription-subscribe-success",hj),pj=new R("subscription-subscribe-external",gj),qj=new R("subscription-unsubscribe",ij),rj=new R("subscription-unsubscirbe-loading",ej),sj=new R("subscription-unsubscribe-loaded",ej),tj=new R("subscription-unsubscribe-success",ej),uj=
new R("subscription-external-unsubscribe",ij),vj=new R("subscription-enable-ypc",ej),wj=new R("subscription-disable-ypc",ej),xj=new R("subscription-prefs",fj),yj=new R("subscription-prefs-success",fj),zj=new R("subscription-prefs-failure",fj);function Aj(){var a=void 0===a?!1:a;var b=Bi();if(a)for(;b&&b.shadowRoot;)b=b.shadowRoot.fullscreenElement;return b?b:null}
;function Bj(a,b){(a=G(a))&&a.style&&(a.style.display=b?"":"none",eh(a,"hid",!b))}
function Cj(a){return(a=G(a))?"none"!=a.style.display&&!M(a,"hid"):!1}
function Dj(a){B(arguments,function(b){!La(b)||b instanceof Element?Bj(b,!0):B(b,function(c){Dj(c)})})}
function Ej(a){B(arguments,function(b){!La(b)||b instanceof Element?Bj(b,!1):B(b,function(c){Ej(c)})})}
(function(a,b){function c(f){var g=u(f);f=g.next().value;g=fa(g);return a.apply(f,g)}
function d(f){f=u(f);f.next();f=fa(f);return b(e,f)}
b=void 0===b?qh:b;var e=Oa(a);return function(f){for(var g=[],h=0;h<arguments.length;++h)g[h-0]=arguments[h];h=this||v;var k=ph.get(h);k||(k={},ph.set(h,k));return vc(k,[this].concat(g instanceof Array?g:fa(u(g))),c,d)}})(function(a){var b=Ad(document,"DIV");
a&&(b.className=a);b.style.cssText="overflow:auto;position:absolute;top:0;width:100px;height:100px";a=Ad(document,"DIV");oe(a,"200px","200px");b.appendChild(a);document.body.appendChild(b);a=b.offsetWidth-b.clientWidth;Cd(b);return a});function Fj(){Ri.call(this,"tooltip");this.f=0;this.g={}}
A(Fj,Ri);Ja(Fj);m=Fj.prototype;m.register=function(){V(this,"mouseover",this.ra);V(this,"mouseout",this.U);V(this,"focus",this.Ka);V(this,"blur",this.Ea);V(this,"click",this.U);V(this,"touchstart",this.mb);V(this,"touchend",this.ta);V(this,"touchcancel",this.ta)};
m.unregister=function(){W(this,"mouseover",this.ra);W(this,"mouseout",this.U);W(this,"focus",this.Ka);W(this,"blur",this.Ea);W(this,"click",this.U);W(this,"touchstart",this.mb);W(this,"touchend",this.ta);W(this,"touchcancel",this.ta);this.dispose();Fj.D.unregister.call(this)};
m.dispose=function(){for(var a in this.g)this.U(this.g[a]);this.g={}};
m.ra=function(a){if(!(this.f&&1E3>Ua()-this.f)){var b=parseInt(this.j(a,"tooltip-hide-timer"),10);b&&(ki(a,"tooltip-hide-timer"),Yh(b));b=y(function(){Gj(this,a);ki(a,"tooltip-show-timer")},this);
var c=parseInt(this.j(a,"tooltip-show-delay"),10)||0;b=Xh(b,c);hi(a,"tooltip-show-timer",b.toString());a.title&&(Ui(a,Hj(this,a)),a.title="");b=Oa(a).toString();this.g[b]=a}};
m.U=function(a){var b=parseInt(this.j(a,"tooltip-show-timer"),10);b&&(Yh(b),ki(a,"tooltip-show-timer"));b=y(function(){if(a){var c=G(Ij(this,a));c&&(Jj(c),Cd(c),ki(a,"content-id"));c=G(Ij(this,a,"arialabel"));Cd(c)}ki(a,"tooltip-hide-timer")},this);
b=Xh(b,50);hi(a,"tooltip-hide-timer",b.toString());if(b=this.j(a,"tooltip-text"))a.title=b;b=Oa(a).toString();delete this.g[b]};
m.Ka=function(a,b){this.f=0;this.ra(a,b)};
m.Ea=function(a){this.f=0;this.U(a)};
m.mb=function(a,b,c){c.changedTouches&&(this.f=0,(a=Pi(b,U(this),c.changedTouches[0].target))&&this.ra(a,b))};
m.ta=function(a,b,c){c.changedTouches&&(this.f=Ua(),(a=Pi(b,U(this),c.changedTouches[0].target))&&this.U(a))};
function Kj(a,b,c){Ui(b,c);a=a.j(b,"content-id");(a=G(a))&&Gd(a,c)}
function Hj(a,b){return a.j(b,"tooltip-text")||b.title}
function Gj(a,b){if(b){var c=Hj(a,b);if(c){var d=G(Ij(a,b));if(!d){d=document.createElement("div");d.id=Ij(a,b);ah(d,U(a,"tip"));var e=document.createElement("div");ah(e,U(a,"tip-body"));var f=document.createElement("div");ah(f,U(a,"tip-arrow"));var g=document.createElement("div");g.setAttribute("aria-hidden","true");ah(g,U(a,"tip-content"));var h=Lj(a,b),k=Ij(a,b,"content");g.id=k;hi(b,"content-id",k);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);var l=Od(b);k=Ij(a,b,"arialabel");
f=document.createElement("div");N(f,U(a,"arialabel"));f.id=k;l=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+l:l+" "+c;Gd(f,l);b.setAttribute("aria-labelledby",k);k=Aj()||document.body;k.appendChild(f);k.appendChild(d);Kj(a,b,c);(c=parseInt(a.j(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",N(g,U(a,"normal-wrap")));g=M(b,U(a,"reverse"));Mj(a,b,d,e,h,g)||Mj(a,b,d,e,h,!g);var n=U(a,"tip-visible");Xh(function(){N(d,n)},0)}}}}
function Mj(a,b,c,d,e,f){eh(c,U(a,"tip-reverse"),f);var g=0;f&&(g=1);var h=qe(b);f=new E((h.width-10)/2,f?h.height:0);var k=me(b);wh(new E(k.x+f.x,k.y+f.y),c,g);f=ud(window);if(1==c.nodeType)var l=ne(c);else c=c.changedTouches?c.changedTouches[0]:c,l=new E(c.clientX,c.clientY);c=qe(d);var n=Math.floor(c.width/2);g=!!(f.height<l.y+h.height);h=!!(l.y<h.height);k=!!(l.x<n);f=!!(f.width<l.x+n);l=(c.width+3)/-2- -5;a=a.j(b,"force-tooltip-direction");if("left"==a||k)l=-5;else if("right"==a||f)l=20-c.width-
3;a=Math.floor(l)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||h)}
function Ij(a,b,c){a=U(a)+xi(b);c&&(a+="-"+c);return a}
function Lj(a,b){var c=null;Cc&&M(b,U(a,"masked"))&&((c=G("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),Dj(c)):(c=Ad(document,"IFRAME"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",ah(c,U(a,"tip-mask"))));return c}
function Jj(a){var b=G("yt-uix-tooltip-shared-mask"),c=b&&Sd(b,function(d){return d==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),Ej(b),document.body.appendChild(b))}
;function Nj(a){var b=Oj();if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=ci("LOGGED_IN",function(d){ei(P("LOGGED_IN_PUBSUB_KEY",void 0));Rh("LOGGED_IN",!0);a(d)});
Rh("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
function Oj(){var a=document.location.protocol+"//"+document.domain+"/post_login";a=nc(a,"mode","subscribe");a=nc("/signin?context=popup","next",a);return a=nc(a,"feature","sub_button")}
z("yt.pubsub.publish",fi);function X(a){a=Pj(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Qj(a,b){var c=Pj(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Pj(a){var b=P("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:P("EXPERIMENT_FLAGS",{})[a]}
function Rj(){var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=P("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Sj=window,Y=Sj.ytcsi&&Sj.ytcsi.now?Sj.ytcsi.now:Sj.performance&&Sj.performance.timing&&Sj.performance.now&&Sj.performance.timing.navigationStart?function(){return Sj.performance.timing.navigationStart+Sj.performance.now()}:function(){return(new Date).getTime()};var Tj=Qj("initial_gel_batch_timeout",1E3),Uj=Math.pow(2,16)-1,Vj=null,Wj=0,Xj=void 0,Yj=0,Zj=0,ak=0,bk=!0,ck=v.ytLoggingTransportGELQueue_||new Map;z("ytLoggingTransportGELQueue_",ck);var dk=v.ytLoggingTransportTokensToCttTargetIds_||{};z("ytLoggingTransportTokensToCttTargetIds_",dk);function ek(a){a=void 0===a?!1:a;return new qg(function(b){Yh(Yj);Yh(Zj);Zj=0;Xj&&Xj.isReady()?(fk(b,a),ck.clear()):(gk(),b())})}
function gk(){X("web_gel_timeout_cap")&&!Zj&&(Zj=Xh(ek,6E4));Yh(Yj);var a=P("LOGGING_BATCH_TIMEOUT",Qj("web_gel_debounce_ms",1E4));X("shorten_initial_gel_batch_timeout")&&bk&&(a=Tj);Yj=Xh(ek,a)}
function fk(a,b){var c=Xj;b=void 0===b?!1:b;for(var d=Math.round(Y()),e=ck.size,f=u(ck),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;var k=h.next().value;h=tb({context:hk(c.f||ik())});h.events=k;(k=dk[g])&&jk(h,g,k);delete dk[g];kk(h,d);lk(c,"log_event",h,{retry:!0,onSuccess:function(){e--;e||a();Wj=Math.round(Y()-d)},
onError:function(){e--;e||a()},
kc:b});bk=!1}}
function kk(a,b){a.requestTimeMs=String(b);X("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=P("EVENT_ID",void 0);if(c){var d=P("BATCH_CLIENT_COUNTER",void 0)||0;!d&&X("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Uj/2));d++;d>Uj&&(d=1);Rh("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Vj&&Wj&&X("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Vj,roundtripMs:String(Wj)});Vj=c;Wj=0}}
function jk(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var mk=v.ytLoggingGelSequenceIdObj_||{};z("ytLoggingGelSequenceIdObj_",mk);
function nk(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||Y());e[a]=b;a=x("_lact",window);a=null==a?-1:Math.max(Ua()-a,0);e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};X("log_sequence_info_on_gel_web")&&d.jb&&(a=e.context,b=d.jb,mk[b]=b in mk?mk[b]+1:0,a.sequence={index:mk[b],groupKey:b},d.Hc&&delete mk[d.jb]);d=d.Gc;a="";d&&(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),dk[d.token]=a,a=d.token);d=ck.get(a)||[];ck.set(a,
d);d.push(e);c&&(Xj=new c);c=Qj("web_logging_max_batch")||100;e=Y();d.length>=c?ek(!0):10<=e-ak&&(gk(),ak=e)}
;function ok(a){var b=pk;a=void 0===a?x("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(qk(b),rk(b));b.ca_type="image";a&&(b.bid=a);return b}
function qk(a){var b={};b.dt=ye;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?bd:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!bd.navigator&&"unknown"!==typeof bd.navigator.javaEnabled&&!!bd.navigator.javaEnabled&&bd.navigator.javaEnabled();bd.screen&&(b.u_h=bd.screen.height,b.u_w=bd.screen.width,b.u_ah=bd.screen.availHeight,b.u_aw=bd.screen.availWidth,b.u_cd=
bd.screen.colorDepth);bd.navigator&&bd.navigator.plugins&&(b.u_nplug=bd.navigator.plugins.length);bd.navigator&&bd.navigator.mimeTypes&&(b.u_nmime=bd.navigator.mimeTypes.length);return b}
function rk(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(l){}try{var e=b.outerWidth;var f=b.outerHeight}catch(l){}try{var g=b.innerWidth;var h=b.innerHeight}catch(l){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=ud(c||window).round()}catch(l){k=new md(-12245933,-12245933)}c=k;k={};d=new wf;v.SVGElement&&v.document.createElementNS&&d.set(0);e=Xd();e["allow-top-navigation-by-user-activation"]&&d.set(1);e["allow-popups-to-escape-sandbox"]&&
d.set(2);v.crypto&&v.crypto.subtle&&d.set(3);v.TextDecoder&&v.TextEncoder&&d.set(4);d=xf(d);k.bc=d;k.bih=c.height;k.biw=c.width;k.brdim=b.join();a=a.g;return k.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,k.wgl=!!bd.WebGLRenderingContext,k}
var pk=new function(){var a=window.document;this.f=window;this.g=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return Xi(ok(a))});var sk="XMLHttpRequest"in v?function(){return new XMLHttpRequest}:null;
function tk(){if(!sk)return null;var a=sk();return"open"in a?a:null}
;var uk={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},vk="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address client_dev_root_url".split(" "),
wk=!1;function xk(a,b){b=void 0===b?{}:b;var c=aj(a),d=X("web_ajax_ignore_global_headers_if_set"),e;for(e in uk){var f=P(uk[e]);!f||!c&&ic(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!ic(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!ic(a))&&(d="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=d);if(c||!ic(a))b["X-YouTube-Ad-Signals"]=Xi(ok(void 0));return b}
function yk(a){var b=window.location.search,c=ic(a),d=hc(a.match(gc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Yi(b),f={};B(vk,function(g){e[g]&&(f[g]=e[g])});
return $i(a,f||{},!1)}
function zk(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Ak(a,b);var d=Bk(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&Yh(f);var h=g.ok,k=function(l){l=l||{};var n=b.context||v;h?b.onSuccess&&b.onSuccess.call(n,l,g):b.onError&&b.onError.call(n,l,g);b.fa&&b.fa.call(n,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.eb&&0<b.timeout&&(f=Xh(function(){e||(e=!0,Yh(f),b.eb.call(b.context||v))},b.timeout))}else Ck(a,b)}
function Ck(a,b){var c=b.format||"JSON";a=Ak(a,b);var d=Bk(a,b),e=!1,f=Dk(a,function(k){if(!e){e=!0;h&&Yh(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var n=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)n=Ek(a,c,k,b.Fc);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||v;
l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.fa&&b.fa.call(p,k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.sa&&0<b.timeout){var g=b.sa;var h=Xh(function(){e||(e=!0,f.abort(),Yh(h),g.call(b.context||v,f))},b.timeout)}}
function Ak(a,b){b.Kc&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME",void 0),d=b.Ba;d&&(d[c]&&delete d[c],a=$i(a,d||{},!0));return a}
function Bk(a,b){var c=P("XSRF_FIELD_NAME",void 0),d=P("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.H,g=P("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.Ic||ic(a)&&!b.withCredentials&&ic(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.H&&b.H[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Yi(e),vb(e,f),e=b.hb&&"JSON"==b.hb?JSON.stringify(e):mc(e));if(!(c=e)&&(c=f)){a:{for(var k in f){f=!1;break a}f=!0}c=!f}!wk&&c&&"POST"!=b.method&&
(wk=!0,Vh(Error("AJAX request with postData should use POST")));return e}
function Ek(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Wh(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Fk(a):null)e={},B(a.getElementsByTagName("*"),function(g){e[g.tagName]=Gk(g)})}d&&Hk(e);
return e}
function Hk(a){if(Ma(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=$b(a[b],null);a[c]=d}else Hk(a[b])}}
function Fk(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Gk(a){var b="";B(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Dk(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Uh(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=tk();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;X("debug_forward_web_query_parameters")&&(a=yk(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=xk(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function Ik(){for(var a={},b=u(Object.entries(Yi(P("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function Jk(){return"INNERTUBE_API_KEY"in Qh&&"INNERTUBE_API_VERSION"in Qh}
function ik(){return{innertubeApiKey:P("INNERTUBE_API_KEY",void 0),innertubeApiVersion:P("INNERTUBE_API_VERSION",void 0),Ib:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Jb:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Lb:P("INNERTUBE_CONTEXT_HL",void 0),Kb:P("INNERTUBE_CONTEXT_GL",void 0),Mb:P("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ob:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Nb:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function hk(a){var b={client:{hl:a.Lb,gl:a.Kb,clientName:a.Jb,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ib}},c=window.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Rj();0<c.length&&(b.request={internalExperimentFlags:c});a.appInstallData&&X("web_log_app_install_experiments")&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);P("DELEGATED_SESSION_ID")&&
!X("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});b.client=Object.assign(b.client,Ik());return b}
function Kk(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Cc||P("AUTHORIZATION"))||(a?b="Bearer "+x("gapi.auth.getToken")().Bc:b=Oe([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),X("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
;function Lk(a){a=Object.assign({},a);delete a.Authorization;var b=Oe();if(b){var c=new Og;c.update(P("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;La(b);void 0===c&&(c=0);if(!ad){ad={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));$c[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===ad[k]&&(ad[k]=h)}}}c=$c[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],n=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|n>>4;n=(n&15)<<2|k>>6;k&=63;g||(k=64,f||(n=64));d.push(c[h],c[l],c[n]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Mk(a,b,c,d,e){hd.set(""+a,b,{Ua:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;function Nk(a){var b=new Jh;(b=b.isAvailable()?a?new Ph(b,a):b:null)||(a=new Kh(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.f=(a=b)?new Fh(a):null;this.g=document.domain||window.location.hostname}
Nk.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,Ua()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(jh(b))}catch(f){return}else e=escape(b);Mk(a,e,c,this.g)};
Nk.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=hd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Nk.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;hd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ok;function Pk(){Ok||(Ok=new Nk("yt.innertube"));return Ok}
function Qk(a,b,c,d){if(d)return null;d=Pk().get("nextId",!0)||1;var e=Pk().get("requests",!0)||{};e[d]={method:a,request:b,authState:Lk(c),requestTime:Math.round(Y())};Pk().set("nextId",d+1,86400,!0);Pk().set("requests",e,86400,!0);return d}
function Rk(a){var b=Pk().get("requests",!0)||{};delete b[a];Pk().set("requests",b,86400,!0)}
function Sk(a){var b=Pk().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState,f=Lk(Kk(!1));sb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),lk(a,d.method,e,{}));delete b[c]}}Pk().set("requests",b,86400,!0)}}
;function Tk(){this.f=!0}
function Uk(a){var b={},c=Oe([]);c&&(a=null===a||void 0===a?void 0:a.sessionIndex,b.Authorization=c,b["X-Goog-AuthUser"]=void 0!==a?a:P("SESSION_INDEX",0),"INNERTUBE_HOST_OVERRIDE"in Qh||(b["X-Origin"]=window.location.origin),X("pageid_as_header_web")&&void 0===a&&"DELEGATED_SESSION_ID"in Qh&&(b["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return b}
;var Vk={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};new ag;var Wk=[],Xk=!1;function Yk(a,b){Xk||(Wk.push({type:"EVENT",eventType:a,payload:b}),10<Wk.length&&Wk.shift())}
;function Zk(a){if(!a)throw Error();throw a;}
function $k(a){return a}
function al(a){var b=this;this.g=a;this.state={status:"PENDING"};this.f=[];this.onRejected=[];this.g(function(c){if("PENDING"===b.state.status){b.state={status:"FULFILLED",value:c};c=u(b.f);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}},function(c){if("PENDING"===b.state.status){b.state={status:"REJECTED",
reason:c};c=u(b.onRejected);for(var d=c.next();!d.done;d=c.next())d=d.value,d()}})}
al.all=function(a){return new al(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={W:0};f.W<a.length;f={W:f.W},++f.W)al.resolve(a[f.W]).then(function(g){return function(h){d[g.W]=h;e--;0===e&&b(d)}}(f))["catch"](function(g){c(g)})})};
al.resolve=function(a){return new al(function(b,c){a instanceof al?a.then(b,c):b(a)})};
al.reject=function(a){return new al(function(b,c){c(a)})};
al.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:$k,e=null!==b&&void 0!==b?b:Zk;return new al(function(f,g){"PENDING"===c.state.status?(c.f.push(function(){bl(c,c,d,f,g)}),c.onRejected.push(function(){cl(c,c,e,f,g)})):"FULFILLED"===c.state.status?bl(c,c,d,f,g):"REJECTED"===c.state.status&&cl(c,c,e,f,g)})};
al.prototype["catch"]=function(a){return this.then(void 0,a)};
function bl(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof al?dl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function cl(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof al?dl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function dl(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof al?dl(a,b,f,d,e):d(f)},function(f){e(f)})}
;function el(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function fl(a){return new qg(function(b,c){el(a,b,c)})}
function gl(a){return new al(function(b,c){el(a,b,c)})}
;function hl(a,b){return new al(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()})}
;function il(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:fa(u(c)))}
pa(il,Error);var jl={},kl=(jl.AUTH_INVALID="No user identifier specified.",jl.EXPLICIT_ABORT="Transaction was explicitly aborted.",jl.IDB_NOT_SUPPORTED="IndexedDB is not supported.",jl.MISSING_OBJECT_STORE="Object store not created.",jl.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",jl.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",jl.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",jl);
function ll(a,b,c){b=void 0===b?{}:b;c=void 0===c?kl[a]:c;il.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;Object.setPrototypeOf(this,ll.prototype);Xk||(Wk.push({type:"ERROR",payload:this}),10<Wk.length&&Wk.shift())}
pa(ll,il);function ml(a,b,c){ll.call(this,"UNKNOWN_ABORT",{objectStoreNames:a,dbName:b,mode:c});Object.setPrototypeOf(this,ml.prototype)}
pa(ml,ll);function nl(a){ll.call(this,"MISSING_OBJECT_STORE",{Lc:a},kl.MISSING_OBJECT_STORE);Object.setPrototypeOf(this,nl.prototype)}
pa(nl,ll);function ol(a,b){this.f=a;this.options=b;this.transactionCount=0;this.i=Y();this.g=!1}
m=ol.prototype;m.add=function(a,b,c){return pl(this,[a],"readwrite",function(d){return ql(d,a).add(b,c)})};
m.clear=function(a){return pl(this,[a],"readwrite",function(b){return ql(b,a).clear()})};
m.close=function(){var a;this.f.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return pl(this,[a],"readonly",function(c){return ql(c,a).count(b)})};
m["delete"]=function(a,b){return pl(this,[a],"readwrite",function(c){return ql(c,a)["delete"](b)})};
m.get=function(a,b){return pl(this,[a],"readwrite",function(c){return ql(c,a).get(b)})};
function rl(a,b){return pl(a,["databases"],"readwrite",function(c){c=ql(c,"databases");return gl(c.f.put(b,void 0))})}
function pl(a,b,c,d){c=void 0===c?"readonly":c;a.transactionCount++;var e=a.f.transaction(b,c);e=new sl(e);d=tl(e,d);ul(a,d,b.join(),c);return d}
function ul(a,b,c,d){var e=Y();Cg(b.then(function(){vl(a,!0,c,Y()-e)}),function(f){var g=Y(),h=a.f.name,k=a.transactionCount,l;
"QuotaExceededError"===f.name?l=new ll("QUOTA_EXCEEDED",{objectStoreNames:c,dbName:h,mode:d}):"UnknownError"===f.name&&(l=new ll("QUOTA_MAYBE_EXCEEDED",{objectStoreNames:c,dbName:h,mode:d}));l&&Yk("QUOTA_EXCEEDED",{dbName:h,objectStoreNames:c,transactionCount:k,transactionMode:d});h=Math.round(g-e);f instanceof ml&&(Yk("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:c,transactionDuration:h,transactionCount:a.transactionCount,dbDuration:Math.round(g-a.i)}),a.g=!0);vl(a,!1,c,h)})}
function vl(a,b,c,d){Yk("TRANSACTION_ENDED",{objectStoreNames:c,connectionHasUnknownAbortedTransaction:a.g,duration:d,isSuccessful:b})}
function wl(a){this.f=a}
m=wl.prototype;m.add=function(a,b){return gl(this.f.add(a,b))};
m.clear=function(){return gl(this.f.clear()).then(function(){})};
m.count=function(a){return gl(this.f.count(a))};
function xl(a,b){return yl(a,{query:b},function(c){return c["delete"]().then(function(){return c["continue"]()})}).then(function(){})}
m["delete"]=function(a){return a instanceof IDBKeyRange?xl(this,a):gl(this.f["delete"](a))};
m.get=function(a){return gl(this.f.get(a))};
m.index=function(a){return new zl(this.f.index(a))};
m.getName=function(){return this.f.name};
function yl(a,b,c){a=a.f.openCursor(b.query,b.direction);return Al(a).then(function(d){return hl(d,c)})}
function sl(a){var b=this;this.f=a;this.g=new Map;this.aborted=!1;this.done=new qg(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.f.error)});
b.f.addEventListener("abort",function(){var e=b.f.error;if(e)d(e);else if(!b.aborted){e=ml;for(var f=b.f.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e(g.join(),b.f.db.name,b.f.mode);d(e)}})})}
function tl(a,b){var c=new qg(function(d,e){b(a).then(function(f){a.commit();d(f)})["catch"](e)});
return yg([c,a.done]).then(function(d){return u(d).next().value})}
sl.prototype.abort=function(){this.f.abort();this.aborted=!0;throw new ll("EXPLICIT_ABORT");};
sl.prototype.commit=function(){var a=this.f;a.commit&&!this.aborted&&a.commit()};
function ql(a,b){var c=a.f.objectStore(b),d=a.g.get(c);d||(d=new wl(c),a.g.set(c,d));return d}
function zl(a){this.f=a}
zl.prototype.count=function(a){return gl(this.f.count(a))};
zl.prototype["delete"]=function(a){return Bl(this,{query:a},function(b){return b["delete"]().then(function(){return b["continue"]()})})};
zl.prototype.get=function(a){return gl(this.f.get(a))};
zl.prototype.getKey=function(a){return gl(this.f.getKey(a))};
function Bl(a,b,c){a=a.f.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Al(a).then(function(d){return hl(d,c)})}
function Cl(a,b){this.request=a;this.cursor=b}
function Al(a){return gl(a).then(function(b){return null===b?null:new Cl(a,b)})}
m=Cl.prototype;m.advance=function(a){this.cursor.advance(a);return Al(this.request)};
m["continue"]=function(a){this.cursor["continue"](a);return Al(this.request)};
m["delete"]=function(){return gl(this.cursor["delete"]()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.update=function(a){return gl(this.cursor.update(a))};function Dl(a,b,c){function d(){n||(n=new ol(e.result,{closed:l}));return n}
var e=self.indexedDB.open(a,b),f=c.blocked,g=c.blocking,h=c.ec,k=c.upgrade,l=c.closed,n;k&&e.addEventListener("upgradeneeded",function(p){if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===e.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var r=d(),q=new sl(e.transaction);k(r,p.oldVersion,p.newVersion,q)});
f&&e.addEventListener("blocked",function(){f()});
return fl(e).then(function(p){g&&p.addEventListener("versionchange",function(){g(d())});
p.addEventListener("close",function(){Yk("IDB_UNEXPECTEDLY_CLOSED",{dbName:a,dbVersion:p.version});h&&h()});
return d()})}
function El(a,b,c){c=void 0===c?{}:c;return Dl(a,b,c)}
function Fl(a,b){b=void 0===b?{}:b;var c=self.indexedDB.deleteDatabase(a),d=b.blocked;d&&c.addEventListener("blocked",function(){d()});
return fl(c).then(function(){})}
;var Gl=Vc||Wc;function Hl(){var a=/WebKit\/([0-9]+)/.exec(Qb);return!!(a&&600<=parseInt(a[1],10))}
function Il(){var a=/WebKit\/([0-9]+)/.exec(Qb);return!!(a&&602<=parseInt(a[1],10))}
function Jl(a){var b=Qb;return b?0<=b.toLowerCase().indexOf(a):!1}
;function Kl(a,b){for(var c=u(Object.keys(b.Vb)),d=c.next();!d.done;d=c.next())if(d=d.value,!a.f.objectStoreNames.contains(d))return d}
function Ll(a){this.name="YtIdbMeta";this.options=a;this.g=!1}
function Ml(a,b,c){c=void 0===c?{}:c;return El(a,b,c)}
Ll.prototype["delete"]=function(a){a=void 0===a?{}:a;return Fl(this.name,a)};
Ll.prototype.open=function(){var a=this;if(!this.f){var b,c=function(){a.f===b&&(a.f=void 0)},d={blocking:function(f){f.close()},
closed:c,ec:c,upgrade:this.options.upgrade},e=function(){return Cg(Ml(a.name,a.options.version,d).then(function(f){if(Uc){var g=Kl(f,a.options);if(void 0!==g){if(Uc&&!a.g)return a.g=!0,a["delete"]().then(function(){return e()});
throw new nl(g);}}return f}),function(f){if(f instanceof DOMException?"VersionError"===f.name:"DOMError"in self&&f instanceof DOMError?"VersionError"===f.name:f instanceof Object&&"message"in f&&"An attempt was made to open a database using a lower version than the existing version."===f.message)return Ml(a.name,void 0,Object.assign(Object.assign({},d),{upgrade:void 0}));
c();throw f;})};
this.f=b=e()}return this.f};var Nl=new Ll({Vb:{databases:!0},upgrade:function(a,b){1>b&&a.f.createObjectStore("databases",{keyPath:"actualName"})}});
function Ol(){var a={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0,signedIn:!1};return Nl.open().then(function(b){return b.get("databases",a.actualName).then(function(c){if(c?a.actualName!==c.actualName||a.publicName!==c.publicName||a.userIdentifier!==c.userIdentifier||a.signedIn!==c.signedIn||a.clearDataOnAuthChange!==c.clearDataOnAuthChange:1)return rl(b,a)})})}
function Pl(){return Nl.open().then(function(a){return a["delete"]("databases","yt-idb-test-do-not-use")})}
;var Ql;function Rl(){return qc(this,function b(){var c,d;return Da(b,function(e){switch(e.f){case 1:if(Gl&&Hl()&&!Il()&&!X("ytidb_allow_on_ios_safari_v8_and_v9")||xc)return e["return"](!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e["return"](!1)}catch(f){return e["return"](!1)}if(X("ytidb_new_supported_check_with_delete"))return e["return"](new Promise(function(f){Cg(Pl().then(function(){f(!0)}),function(){f(!1)})}));
if(X("ytidb_new_supported_check_with_add_and_delete"))return e["return"](new Promise(function(f){Cg(Ol().then(function(){return Pl()}).then(function(){f(!0)}),function(){f(!1)})}));
ua(e);return ta(e,Cg(El("yt-idb-test-do-not-use"),function(){}),5);
case 5:if(d=e.B,!d)return e["return"](!1);case 3:wa(e);if(d)try{d.close()}catch(f){}xa(e);break;case 2:return va(e),e["return"](!1);case 4:return"IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype?e["return"](!0):e["return"](!1)}})})}
function Sl(){if(void 0!==Ql)return Ql;var a=Y();Xk=!0;return Ql=new qg(function(b){Rl().then(function(c){Xk=!1;Yk("IS_SUPPORTED_COMPLETED",{duration:Math.round(Y()-a),isSupported:c});b(c)})})}
;function Tl(){ag.call(this);this.g=Ul();Vl(this);Wl(this)}
pa(Tl,ag);function Ul(){var a=window.navigator.onLine;return void 0===a?!0:a}
function Wl(a){window.addEventListener("online",function(){a.g=!0;a.F&&a.F()})}
function Vl(a){window.addEventListener("offline",function(){a.g=!1;a.B&&a.B()})}
;function Xl(a,b){b=void 0===b?{}:b;Sl().then(function(){Tl.f||(Tl.f=new Tl);Tl.f.g!==Ul()&&Vh(Error("NetworkStatusManager isOnline does not match window status"));Ck(a,b)})}
function Yl(a,b){b=void 0===b?{}:b;Sl().then(function(){Ck(a,b)})}
;function Zl(a){var b=this;this.f=null;a?this.f=a:Jk()&&(this.f=ik());oi(function(){Sk(b)},0,5E3)}
Zl.prototype.isReady=function(){!this.f&&Jk()&&(this.f=ik());return!!this.f};
function lk(a,b,c,d){!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Wh(new il("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new il("innertube xhrclient not ready",b,c,d);Vh(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",H:c,hb:"JSON",sa:function(){d.sa()},
eb:d.sa,onSuccess:function(p,r){if(d.onSuccess)d.onSuccess(r)},
cb:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,r){if(d.onError)d.onError(r)},
Mc:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.Mb)&&(g=e);var h=a.f.Ob||!1,k=Kk(h,g,d);Object.assign(f.headers,k);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var l={alt:"json"};a.f.Nb&&f.headers.Authorization||(l.key=a.f.innertubeApiKey);var n=$i(""+g+e,l||{},!0);Sl().then(function(p){if(d.retry&&X("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(X("networkless_gel")&&!p||!X("networkless_gel"))var r=Qk(b,
c,k,h);if(r){var q=f.onSuccess,w=f.cb;f.onSuccess=function(F,J){Rk(r);q(F,J)};
c.cb=function(F,J){Rk(r);w(F,J)}}}try{X("use_fetch_for_op_xhr")?zk(n,f):X("networkless_gel")&&d.retry?(f.method="POST",!d.kc&&X("nwl_send_fast_on_unload")?Yl(n,f):Xl(n,f)):(f.method="POST",f.H||(f.H={}),Ck(n,f))}catch(F){if("InvalidAccessError"==F.name)r&&(Rk(r),r=0),Wh(Error("An extension is blocking network request."));
else throw F;}r&&oi(function(){Sk(a)},0,5E3)})}
;var $l=Ua().toString();
function am(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Ua();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if($l)for(a=1,b=0;b<$l.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^$l.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var bm=v.ytLoggingDocDocumentNonce_||am();z("ytLoggingDocDocumentNonce_",bm);function cm(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function dm(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
z("yt_logging_screen.getRootVeType",function(a){return P(dm(void 0===a?0:a),void 0)});
function em(){var a=P("csn-to-ctt-auth-info");a||(a={},Rh("csn-to-ctt-auth-info",a));return a}
function fm(a){a=void 0===a?0:a;var b=P(cm(a));if(!b&&!P("USE_CSN_FALLBACK",!0))return null;b||0!=a||(X("kevlar_client_side_screens")||X("c3_client_side_screens")?b="UNDEFINED_CSN":b=P("EVENT_ID"));return b?b:null}
z("yt_logging_screen.getCurrentCsn",fm);function gm(a,b,c){var d=em();(c=fm(c))&&delete d[c];b&&(d[a]=b)}
z("yt_logging_screen.getCttAuthInfo",function(a){return em()[a]});
z("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==P(cm(c))||b!==P(dm(c)))if(gm(a,d,c),Rh(cm(c),a),Rh(dm(c),b),0==c||X("web_screen_associated_all_layers"))b=function(){setTimeout(function(){a&&nk("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:bm,clientScreenNonce:a},Zl)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()});function hm(){Ri.call(this,"button");this.f=null;this.i=[];this.g={}}
A(hm,Ri);Ja(hm);m=hm.prototype;m.register=function(){V(this,"click",this.nb);V(this,"keydown",this.Sa);V(this,"keypress",this.Ta);Si(this,"page-scroll",this.Fb)};
m.unregister=function(){W(this,"click",this.nb);W(this,"keydown",this.Sa);W(this,"keypress",this.Ta);im(this);this.g={};hm.D.unregister.call(this)};
m.nb=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
m.Sa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=jm(this,a))){var d=function(g){var h="";g.tagName&&(h=g.tagName.toLowerCase());return"ul"==h||"table"==h},e;
d(b)?e=b:e=Hd(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.Tb;else"table"==e&&(f=this.Sb);f&&km(this,a,b,c,y(f,this))}}};
m.Fb=function(){var a=this.g,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=I(b.activeButtonNode||b.parentNode,U(this));if(void 0==d||void 0==b)break;lm(this,d,b,!0)}};
function km(a,b,c,d,e){var f=Cj(c),g=9==d.keyCode;if(g||32==d.keyCode||13==d.keyCode)if(d=mm(a,c)){if(void 0!==d.firstElementChild)b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;if("a"==b.tagName.toLowerCase()){var h=void 0===h?{}:h;var k=void 0===k?"":k;var l=void 0===l?window:l;l=l.location;h=oc(b.href,h)+k;h instanceof Jb||h instanceof Jb||(h="object"==typeof h&&h.ea?h.ca():String(h),Ob.test(h)||(h="about:invalid#zClosurez"),h=new Jb(h,Kb));l.href=Lb(h)}else Li(b)}else g&&
nm(a,b);else f?27==d.keyCode?(mm(a,c),nm(a,b)):e(b,c,d):(h=M(b,U(a,"reverse"))?38:40,d.keyCode==h&&(Li(b),d.preventDefault()))}
m.Ta=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=jm(this,a),Cj(a)&&c.preventDefault())};
function mm(a,b){var c=U(a,"menu-item-highlight"),d=H(c,b);d&&ch(d,c);return d}
function om(a,b,c){N(c,U(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=U(a,"item-id-"+Oa(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
m.Sb=function(a,b,c){var d=mm(this,b);b=Ai("table",b);var e=Ai("tr",b);e=rd(document,"td",null,e).length;b=rd(document,"td",null,b);d=pm(d,b,e,c);-1!=d&&(om(this,a,b[d]),c.preventDefault())};
m.Tb=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=mm(this,b);b=bb(rd(document,"li",null,b),Cj);d=pm(d,b,1,c);om(this,a,b[d]);c.preventDefault()}};
function pm(a,b,c,d){var e=b.length;a=ab(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function qm(a,b){var c=b.iframeMask;c||(c=Ad(document,"IFRAME"),c.src='javascript:""',ah(c,U(a,"menu-mask")),Ej(c),b.iframeMask=c);return c}
function lm(a,b,c,d){var e=I(b,U(a,"group")),f=!!a.j(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var g=8,h=se(b);if(M(b,U(a,"reverse"))){f=8;g=9;h=h.top+"px";try{c.style.maxHeight=h}catch(n){}}M(b,"flip")&&(M(b,U(a,"reverse"))?(f=12,g=13):(f=13,g=12));var k;a.j(b,"button-has-sibling-menu")?k=ke(e):a.j(b,"button-menu-root-container")&&(k=rm(a,b));D&&!Qc("8")&&(k=null);if(k){var l=se(k);l=new $d(-l.top,l.left,l.top,-l.left)}k=new E(0,1);M(b,U(a,"center-menu"))&&(k.x-=Math.round((qe(c).width-qe(b).width)/
2));d&&(k.y+=wd(document).y);if(a=qm(a,b))b=qe(c),a.style.width=b.width+"px",a.style.height=b.height+"px",uh(e,f,a,g,k,l,197),d&&ee(a,"position","fixed");uh(e,f,c,g,k,l,197)}
function rm(a,b){if(a.j(b,"button-menu-root-container")){var c=a.j(b,"button-menu-root-container");return I(b,c)}return document.body}
m.pb=function(a){if(a){var b=jm(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.j(a,"button-has-sibling-menu")?c=a.parentNode:c=rm(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=qm(this,a);d&&c.appendChild(d);(c=!!this.j(a,"button-menu-fixed"))&&(this.g[xi(a).toString()]=b);lm(this,a,b,c);gi("yt-uix-button-menu-before-show",a,b);Dj(b);d&&Dj(d);
this.Y(a,"button-menu-action",!0);N(a,U(this,"active"));b=y(this.ob,this,a,!1);d=y(this.ob,this,a,!0);c=y(this.jc,this,a,void 0);this.f&&jm(this,this.f)==jm(this,a)||im(this);fi("yt-uix-button-menu-show",a);Mi(this.i);this.i=[T(document,"click",d),T(document,"contextmenu",b),T(window,"resize",c)];this.f=a}}};
function nm(a,b){if(b){var c=jm(a,b);if(c){a.f=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");Ej(c);a.Y(b,"button-menu-action",!1);var d=qm(a,b),e=xi(c).toString();delete a.g[e];Xh(function(){d&&d.parentNode&&(Ej(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=I(b,U(a,"group"));
var f=[U(a,"active")];e&&f.push(U(a,"group-active"));dh(b,f);fi("yt-uix-button-menu-hide",b);Mi(a.i);a.i.length=0}}
m.jc=function(a,b){var c=jm(this,a);if(c){b&&(b instanceof Xb?cc(c,b):Gd(c,b));var d=!!this.j(a,"button-menu-fixed");lm(this,a,c,d)}};
m.ob=function(a,b,c){c=Ji(c);var d=I(c,U(this));if(d){d=jm(this,d);var e=jm(this,a);if(d==e)return}d=I(c,U(this,"menu"));e=d==jm(this,a);var f=M(c,U(this,"menu-item")),g=M(c,U(this,"menu-close"));if(!d||e&&(f||g))nm(this,a),d&&b&&this.j(a,"button-menu-indicate-selected")&&((a=H(U(this,"content"),a))&&Gd(a,Od(c)),sm(this,d,c))};
function sm(a,b,c){var d=U(a,"menu-item-selected");a=qd(d,b);B(a,function(e){ch(e,d)});
N(c.parentNode,d)}
function jm(a,b){if(!b.widgetMenu){var c=a.j(b,"button-menu-id");c=c&&G(c);var d=U(a,"menu");c?bh(c,[d,U(a,"menu-external")]):c=H(d,b);b.widgetMenu=c}return b.widgetMenu}
m.isToggled=function(a){return M(a,U(this,"toggled"))};
m.toggle=function(a){if(this.j(a,"button-toggle")){var b=I(a,U(this,"group")),c=U(this,"toggled"),d=M(a,c);if(b&&this.j(b,"button-toggle-group")){var e=this.j(b,"button-toggle-group");b=qd(U(this),b);B(b,function(f){f!=a||"optional"==e&&d?(ch(f,c),f.removeAttribute("aria-pressed")):(N(a,c),f.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),gh(a,c)}};
m.click=function(a){if(jm(this,a)){var b=jm(this,a);if(b){var c=I(b.activeButtonNode||b.parentNode,U(this));c&&c!=a?(nm(this,c),Xh(y(this.pb,this,a),1)):Cj(b)?nm(this,a):this.pb(a)}a.focus()}this.Y(a,"button-action")};
function im(a){a.f&&nm(a,a.f)}
;function tm(a){Ri.call(this,a);this.i=null}
A(tm,Ri);m=tm.prototype;m.K=function(a){var b=Ri.prototype.K.call(this,a);return b?b:a};
m.register=function(){Si(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
m.dispose=function(){um(this);tm.D.dispose.call(this)};
m.j=function(a,b){var c=tm.D.j.call(this,a,b);return c?c:(c=tm.D.j.call(this,a,"card-config"))&&(c=x(c))&&c[b]?c[b]:null};
m.show=function(a){var b=this.K(a);if(b){N(b,U(this,"active"));var c=vm(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;wm(this,a,c);var d=U(this,"card-visible"),e=this.j(a,"card-delegate-show")&&this.j(b,"card-action");this.Y(b,"card-action",a);this.i=a;Ej(c);Xh(y(function(){e||(Dj(c),fi("yt-uix-card-show",b,a,c));xm(c);N(c,d);fi("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function vm(a,b,c){var d=c||b,e=U(a,"card");c=ym(a,d);var f=G(U(a,"card")+xi(d));if(f)return a=H(U(a,"card-body"),f),Fd(a,c)||(Cd(c),a.appendChild(c)),f;f=document.createElement("div");f.id=U(a,"card")+xi(d);ah(f,e);(d=a.j(d,"card-class"))&&bh(f,d.split(/\s+/));d=document.createElement("div");d.className=U(a,"card-border");b=a.j(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var g=document.createElement("div");g.className=
U(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;Cd(c);g.appendChild(c);d.appendChild(a);d.appendChild(g);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function wm(a,b,c){var d=a.j(b,"orientation")||"horizontal";var e=H(U(a,"anchor"),b)||b;var f=a.j(b,"position"),g=!!a.j(b,"force-position"),h=a.j(b,"position-fixed");d="horizontal"==d;var k="bottomright"==f||"bottomleft"==f,l="topright"==f||"bottomright"==f;if(l&&k){var n=13;var p=8}else l&&!k?(n=12,p=9):!l&&k?(n=9,p=12):(n=8,p=13);var r=te(document.body);f=te(b);r!=f&&(n^=4);if(d){f=b.offsetHeight/2-12;var q=new E(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,q=new E(b.offsetWidth+6,-12);var w=
qe(c);f=Math.min(f,(d?w.height:w.width)-24-6);6>f&&(f=6,d?q.y+=12-b.offsetHeight/2:q.x+=12-b.offsetWidth/2);w=null;g||(w=10);b=U(a,"card-flip");a=U(a,"card-reverse");eh(c,b,l);eh(c,a,k);w=uh(e,n,c,p,q,null,w);!g&&w&&(w&48&&(l=!l,n^=4,p^=4),w&192&&(k=!k,n^=1,p^=1),eh(c,b,l),eh(c,a,k),uh(e,n,c,p,q));h&&(e=parseInt(c.style.top,10),g=wd(document).y,ee(c,"position","fixed"),ee(c,"top",e-g+"px"));r&&(c.style.right="",e=se(c),e.left=e.left||parseInt(c.style.left,10),g=ud(window),c.style.left="",c.style.right=
g.width-e.left-e.width+"px");e=H("yt-uix-card-body-arrow",c);g=H("yt-uix-card-border-arrow",c);d=d?k?"top":"bottom":!r&&l||r&&!l?"left":"right";e.setAttribute("style","");g.setAttribute("style","");e.style[d]=f+"px";g.style[d]=f+"px";k=H("yt-uix-card-arrow",c);l=H("yt-uix-card-arrow-background",c);k&&l&&(c="right"==d?qe(c).width-f-13:f+11,f=c/Math.sqrt(2),k.style.left=c+"px",k.style.marginLeft="1px",l.style.marginLeft=-f+"px",l.style.marginTop=f+"px")}
m.hide=function(a){if(a=this.K(a)){var b=G(U(this,"card")+xi(a));b&&(ch(a,U(this,"active")),ch(b,U(this,"card-visible")),Ej(b),this.i=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(Cd(b.cardMask),b.cardMask=null))}};
function um(a){a.i&&a.hide(a.i)}
m.ic=function(a,b){var c=this.K(a);if(c){if(b){var d=ym(this,c);if(!d)return;b instanceof Xb?cc(d,b):Gd(d,b)}M(c,U(this,"active"))&&(c=vm(this,a,c),wm(this,a,c),Dj(c),xm(c))}};
m.isActive=function(a){return(a=this.K(a))?M(a,U(this,"active")):!1};
function ym(a,b){var c=b.cardContentNode;if(!c){var d=U(a,"content"),e=U(a,"card-content");(c=(c=a.j(b,"card-id"))?G(c):H(d,b))||(c=document.createElement("div"));var f=c;ch(f,d);N(f,e);b.cardContentNode=c}return c}
function xm(a){var b=a.cardMask;b||(b=Ad(document,"IFRAME"),b.src='javascript:""',bh(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function zm(){Ri.call(this,"kbd-nav")}
var Am;A(zm,Ri);Ja(zm);m=zm.prototype;m.register=function(){V(this,"keydown",this.Na);Si(this,"yt-uix-kbd-nav-move-in",this.ab);Si(this,"yt-uix-kbd-nav-move-in-to",this.Ub);Si(this,"yt-uix-kbd-move-next",this.bb);Si(this,"yt-uix-kbd-nav-move-to",this.la)};
m.unregister=function(){W(this,"keydown",this.Na);Mi(Am)};
m.Na=function(a,b,c){var d=c.keyCode;if(a=I(a,U(this)))switch(d){case 13:case 32:this.ab(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=ih(a,"kbdNavMoveOut");!c;){c=I(a.parentElement,U(this));if(!c)break a;c=ih(c,"kbdNavMoveOut")}c=G(c);this.la(c);fi("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&M(a,U(this,"list")))switch(d){case 40:this.bb(b,a);break;case 38:d=document.activeElement==a,a=Bm(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+
b-1)%a.length,a[b].focus(),Cm(this,a[b]))}c.preventDefault()}};
m.ab=function(a){var b=ih(a,"kbdNavMoveIn");b=G(b);Dm(this,a,b);this.la(b)};
m.Ub=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}Dm(this,d,a);this.la(a)};
m.la=function(a){if(a)if(Ld(a))a.focus();else{var b=Hd(a,function(c){return Ed(c)?Ld(c):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function Dm(a,b,c){if(b&&c)if(N(c,U(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,hh&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
m.bb=function(a,b){var c=document.activeElement==b,d=Bm(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),Cm(this,d[c]))};
function Cm(a,b){if(b){var c=Rd(b,"LI");c&&(N(c,U(a,"highlight")),Am=T(b,"blur",y(function(d){ch(d,U(this,"highlight"));Mi(Am)},a,c)))}}
function Bm(a){if("UL"!=a.tagName.toUpperCase())return[];a=bb(Dd(a),function(b){return"LI"==b.tagName.toUpperCase()});
return bb(cb(a,function(b){return Cj(b)?Hd(b,function(c){return Ed(c)?Ld(c):!1}):!1}),function(b){return!!b})}
;function Em(){Ri.call(this,"menu");this.g=this.f=null;this.i={};this.A={};this.l=null}
A(Em,Ri);Ja(Em);function Fm(a){var b=Em.C();if(M(a,U(b)))return a;var c=b.K(a);return c?c:I(a,U(b,"content"))==b.f?b.g:null}
m=Em.prototype;m.register=function(){V(this,"click",this.Ma);V(this,"mouseenter",this.Db);Si(this,"page-scroll",this.Gb);Si(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.K(a);Gm(this,a)});
this.l=new O};
m.unregister=function(){W(this,"click",this.Ma);this.g=this.f=null;Mi(nb(pb(this.i)));this.i={};ob(this.A,function(a){Cd(a)},this);
this.A={};Zd(this.l);this.l=null;Em.D.unregister.call(this)};
m.Ma=function(a,b,c){a&&(b=Hm(this,a),!b.disabled&&zi(c.target,b)&&Im(this,a))};
m.Db=function(a,b,c){a&&M(a,U(this,"hover"))&&(b=Hm(this,a),zi(c.target,b)&&Im(this,a,!0))};
m.Gb=function(){this.f&&this.g&&Jm(this,this.g,this.f)};
function Jm(a,b,c){var d=Km(a,b);d&&oe(d,qe(c));if(c==a.f){var e=9,f=8;M(b,U(a,"reversed"))&&(e^=1,f^=1);M(b,U(a,"flipped"))&&(e^=4,f^=4);a=new E(0,1);d&&uh(b,e,d,f,a,null,197);uh(b,e,c,f,a,null,197)}}
function Im(a,b,c){Lm(a,b)&&!c?Gm(a,b):(Mm(a,b),!a.f||zi(b,a.f)?a.qb(b):xh(a.l,y(a.qb,a,b)))}
m.qb=function(a){if(a){var b=Nm(this,a);if(b){gi("yt-uix-menu-before-show",a,b);if(this.f)zi(a,this.f)||Gm(this,this.g);else{this.g=a;this.f=b;M(a,U(this,"sibling-content"))||(Cd(b),document.body.appendChild(b));var c=Hm(this,a).offsetWidth-2;b.style.minWidth=c+"px"}(c=Km(this,a))&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);ch(b,U(this,"content-hidden"));Jm(this,a,b);bh(Hm(this,a),[U(this,"trigger-selected"),"yt-uix-button-toggled"]);fi("yt-uix-menu-show",a);Om(b);Pm(this,a);fi("yt-uix-kbd-nav-move-in-to",
b);var d=y(this.lc,this,a),e=y(this.Qb,this,a);c=Oa(a).toString();this.i[c]=[T(b,"click",e),T(document,"click",d)];M(a,U(this,"indicate-selected"))&&(d=y(this.Rb,this,a),this.i[c].push(T(b,"click",d)));M(a,U(this,"hover"))&&(a=y(this.Eb,this,a),this.i[c].push(T(document,"mousemove",a)))}}};
m.Eb=function(a,b){var c=Ji(b);if(c){var d=Hm(this,a);zi(c,d)||Qm(this,c)||Rm(this,a)}};
m.lc=function(a,b){var c=Ji(b);if(c){if(Qm(this,c)){var d=I(c,U(this,"content")),e=Rd(c,"LI");e&&d&&Fd(d,e)&&gi("yt-uix-menu-item-clicked",c);c=I(c,U(this,"close-on-select"));if(!c)return;d=Fm(c)}Gm(this,d||a)}};
function Mm(a,b){if(b){var c=I(b,U(a,"content"));c&&(c=qd(U(a),c),B(c,function(d){!zi(d,b)&&Lm(this,d)&&Rm(this,d)},a))}}
function Gm(a,b){if(b){var c=[];c.push(b);var d=Nm(a,b);d&&(d=qd(U(a),d),d=jb(d),c=c.concat(d),B(c,function(e){Lm(this,e)&&Rm(this,e)},a))}}
function Rm(a,b){if(b){var c=Nm(a,b);dh(Hm(a,b),[U(a,"trigger-selected"),"yt-uix-button-toggled"]);N(c,U(a,"content-hidden"));var d=Nm(a,b);d&&sd(d,{"aria-expanded":"false"});(d=Km(a,b))&&d.parentNode&&Cd(d);c&&c==a.f&&(a.g.appendChild(c),a.f=null,a.g=null,a.l&&a.l.M("ROOT_MENU_REMOVED"));fi("yt-uix-menu-hide",b);c=Oa(b).toString();Mi(a.i[c]);delete a.i[c]}}
m.Qb=function(a,b){var c=Ji(b);c&&Sm(this,a,c)};
m.Rb=function(a,b){var c=Ji(b);if(c){var d=Hm(this,a);if(d&&(c=Rd(c,"LI")))if(c=Od(c).trim(),d.hasChildNodes()){var e=hm.C();(d=H(U(e,"content"),d))&&Gd(d,c)}else Gd(d,c)}};
function Pm(a,b){var c=Nm(a,b);if(c){B(c.children,function(e){"LI"==e.tagName&&sd(e,{role:"menuitem"})});
sd(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Oa(c),c.id=d);(c=Hm(a,b))&&sd(c,{"aria-controls":d})}}
function Sm(a,b,c){var d=Nm(a,b);d&&M(b,U(a,"checked"))&&(a=Rd(c,"LI"))&&(a=H("yt-ui-menu-item-checked-hid",a))&&(d=qd("yt-ui-menu-item-checked",d),B(d,function(e){fh(e,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),fh(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function Lm(a,b){var c=Nm(a,b);return c?!M(c,U(a,"content-hidden")):!1}
function Om(a){a=rd(document,"UL",null,a);B(a,function(b){b.tabIndex=0;var c=zm.C();bh(b,[U(c),U(c,"list")])})}
function Nm(a,b){var c=ji(b,"menu-content-id");return c&&(c=G(c))?(bh(c,[U(a,"content"),U(a,"content-external")]),c):b==a.g?a.f:H(U(a,"content"),b)}
function Km(a,b){var c=Oa(b).toString(),d=a.A[c];if(!d){d=Ad(document,"IFRAME");d.src='javascript:""';var e=[U(a,"mask")];B($g(b),function(f){e.push(f+"-mask")});
bh(d,e);a.A[c]=d}return d||null}
function Hm(a,b){return H(U(a,"trigger"),b)}
function Qm(a,b){return zi(b,a.f)||zi(b,a.g)}
;function Tm(){tm.call(this,"clickcard");this.f={};this.g={}}
A(Tm,tm);Ja(Tm);m=Tm.prototype;m.register=function(){Tm.D.register.call(this);V(this,"click",this.Ha,"target");V(this,"click",this.Ga,"close")};
m.unregister=function(){Tm.D.unregister.call(this);W(this,"click",this.Ha,"target");W(this,"click",this.Ga,"close");for(var a in this.f)Mi(this.f[a]);this.f={};for(a in this.g)Mi(this.g[a]);this.g={}};
m.Ha=function(a,b,c){c.preventDefault();b=Rd(c.target,"button");if(!b||!b.disabled){if(b=this.j(a,"card-target"))a=document,a="string"===typeof b?a.getElementById(b):b;b=this.K(a);this.j(b,"disabled")||(M(b,U(this,"active"))?(this.hide(a),ch(b,U(this,"active"))):(this.show(a),N(b,U(this,"active"))))}};
m.show=function(a){Tm.D.show.call(this,a);var b=this.K(a),c=Oa(a).toString();if(!ji(b,"click-outside-persists")){if(this.f[c])return;b=T(document,"click",y(this.Ia,this,a));var d=T(window,"blur",y(this.Ia,this,a));this.f[c]=[b,d]}a=T(window,"resize",y(this.ic,this,a,void 0));this.g[c]=a};
m.hide=function(a){Tm.D.hide.call(this,a);a=Oa(a).toString();var b=this.f[a];b&&(Mi(b),this.f[a]=null);if(b=this.g[a])Mi(b),delete this.g[a]};
m.Ia=function(a,b){var c="yt-uix"+(this.o?"-"+this.o:"")+"-card",d=null;b.target&&(d=I(b.target,c)||I(Fm(b.target),c));(d=d||I(document.activeElement,c)||(document.activeElement?I(Fm(document.activeElement),c):null))||this.hide(a)};
m.Ga=function(a){(a=I(a,U(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function Um(){tm.call(this,"hovercard")}
A(Um,tm);Ja(Um);m=Um.prototype;m.register=function(){V(this,"mouseenter",this.Wa,"target");V(this,"mouseleave",this.Ya,"target");V(this,"mouseenter",this.Xa,"card");V(this,"mouseleave",this.Za,"card")};
m.unregister=function(){W(this,"mouseenter",this.Wa,"target");W(this,"mouseleave",this.Ya,"target");W(this,"mouseenter",this.Xa,"card");W(this,"mouseleave",this.Za,"card")};
m.Wa=function(a){if(Vm!=a){Vm&&(this.hide(Vm),Vm=null);var b=y(this.show,this,a),c=parseInt(this.j(a,"delay-show"),10);b=Xh(b,-1<c?c:200);hi(a,"card-timer",b.toString());Vm=a;a.alt&&(hi(a,"card-alt",a.alt),a.alt="");a.title&&(hi(a,"card-title",a.title),a.title="")}};
m.Ya=function(a){var b=parseInt(this.j(a,"card-timer"),10);Yh(b);this.K(a).isCardHidable=!0;b=parseInt(this.j(a,"delay-hide"),10);b=-1<b?b:200;Xh(y(this.Hb,this,a),b);if(b=this.j(a,"card-alt"))a.alt=b;if(b=this.j(a,"card-title"))a.title=b};
m.Hb=function(a){this.K(a).isCardHidable&&(this.hide(a),Vm=null)};
m.Xa=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
m.Za=function(a){a&&this.hide(a.cardTargetNode)};
var Vm=null;function Wm(a,b,c,d,e,f){this.f=a;this.B=null;this.i=H("yt-dialog-fg",this.f)||this.f;if(a=H("yt-dialog-title",this.i)){var g="yt-dialog-title-"+Oa(this.i);a.setAttribute("id",g);this.i.setAttribute("aria-labelledby",g)}this.i.setAttribute("tabindex","-1");this.ha=H("yt-dialog-focus-trap",this.f);this.ia=!1;this.l=new O;this.F=[];this.F.push(Ki(this.f,y(this.Wb,this),"yt-dialog-dismiss"));this.F.push(T(this.ha,"focus",y(this.Cb,this),!0));Xm(this);this.ua=b;this.sb=c;this.va=d;this.L=e;this.tb=f;
this.A=this.o=null}
var Ym={LOADING:"loading",zc:"content",Ac:"working"};function Zm(a,b){a.oa()||a.l.subscribe("post-all",b)}
function Xm(a){a=H("yt-dialog-fg-content",a.f);var b=[];ob(Ym,function(c){b.push("yt-dialog-show-"+c)});
dh(a,b);N(a,"yt-dialog-show-content")}
m=Wm.prototype;
m.show=function(){if(!this.oa()){this.B=document.activeElement;if(!this.va){this.g||(this.g=G("yt-dialog-bg"),this.g||(this.g=Ad(document,"div"),this.g.id="yt-dialog-bg",ah(this.g,"yt-dialog-bg"),document.body.appendChild(this.g)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=ud(a).height,vd(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);c=
b>a?b>e?b:e:b<e?b:e}else c=0}this.g.style.height=c+"px";Dj(this.g)}this.Oa();c=$m(this);an(c);this.o=T(document,"keydown",y(this.Pb,this));c=this.f;d=ci("player-added",this.Oa,this);hi(c,"player-ready-pubsub-key",d);this.sb&&(this.A=T(document,"click",y(this.cc,this)));Dj(this.f);this.i.setAttribute("tabindex","0");bn(this);this.L||N(document.body,"yt-dialog-active");im(hm.C());um(Tm.C());um(Um.C());fi("yt-ui-dialog-show-complete",this)}};
function cn(){var a=qd("yt-dialog");return eb(a,function(b){return Cj(b)})}
m.Oa=function(){if(!this.tb){var a=this.f;eh(document.body,"hide-players",!0);a&&eh(a,"preserve-players",!0)}};
function $m(a){var b=rd(document,"IFRAME",null,a.f);B(b,function(c){var d=ji(c,"onload");d&&(d=x(d))&&T(c,"load",d);if(d=ji(c,"src"))c.src=d},a);
return jb(b)}
function an(a){B(document.getElementsByTagName("iframe"),function(b){-1==ab(a,b)&&N(b,"iframe-hid")})}
function dn(){var a=qd("iframe-hid");B(a,function(b){ch(b,"iframe-hid")})}
m.Wb=function(a){a=a.currentTarget;a.disabled||(a=ji(a,"action")||"",this.dismiss(a))};
m.dismiss=function(a){if(!this.oa()){this.l.M("pre-all");this.l.M("pre-"+a);Ej(this.f);um(Tm.C());um(Um.C());this.i.setAttribute("tabindex","-1");cn()||(Ej(this.g),this.L||ch(document.body,"yt-dialog-active"),Ci(),dn());this.o&&(Mi(this.o),this.o=null);this.A&&(Mi(this.A),this.A=null);var b=this.f;if(b){var c=ji(b,"player-ready-pubsub-key");c&&(ei(c),ki(b,"player-ready-pubsub-key"))}this.l.M("post-all");fi("yt-ui-dialog-hide-complete",this);"cancel"==a&&fi("yt-ui-dialog-cancelled",this);this.l&&this.l.M("post-"+
a);this.B&&this.B.focus()}};
m.setTitle=function(a){Gd(H("yt-dialog-title",this.f),a)};
m.Pb=function(a){Xh(y(function(){this.ua||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&M(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
m.cc=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
m.oa=function(){return this.ia};
m.dispose=function(){Cj(this.f)&&this.dismiss("dispose");Mi(this.F);this.F.length=0;Xh(y(function(){this.B=null},this),0);
this.ha=this.i=null;this.l.dispose();this.l=null;this.ia=!0};
m.Cb=function(a){a.stopPropagation();bn(this)};
function bn(a){Xh(y(function(){this.i&&this.i.focus()},a),0)}
z("yt.ui.Dialog",Wm);function en(){Ri.call(this,"overlay");this.l=this.g=this.i=this.f=null}
pa(en,Ri);m=en.prototype;m.register=function(){V(this,"click",this.Aa,"target");V(this,"click",this.hide,"close");fn(this)};
m.unregister=function(){Ri.prototype.unregister.call(this);W(this,"click",this.Aa,"target");W(this,"click",this.hide,"close");this.l&&(ei(this.l),this.l=null);this.g&&(Mi(this.g),this.g=null)};
m.Aa=function(a){if(!this.f||!Cj(this.f.f)){var b=this.K(a);a=gn(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.j(b,"disable-shortcuts")||!1,d=!!this.j(b,"disable-outside-click-dismiss")||!1;this.f=new Wm(a,c);this.i=b;var e=H("yt-dialog-fg",a);if(e){var f=this.j(b,"overlay-class")||"",g=this.j(b,"overlay-style")||"default",h=this.j(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(U(this,g));f.push(U(this,h));bh(e,f)}this.f.show();fi("yt-uix-kbd-nav-move-to",e||a);fn(this);c||
d||(c=y(function(k){M(k.target,"yt-dialog-base")&&hn(this)},this),a=H("yt-dialog-base",a),this.g=T(a,"click",c));
this.Y(b,"overlay-shown");fi("yt-uix-overlay-shown",b)}}};
function fn(a){a.l||(a.l=ci("yt-uix-overlay-hide",jn));a.f&&Zm(a.f,function(){var b=en.C();b.i=null;b.f.dispose();b.f=null})}
function hn(a){if(a.f){var b=a.i;a.f.dismiss("overlayhide");b&&a.Y(b,"overlay-hidden");a.i=null;a.g&&(Mi(a.g),a.g=null);a.f=null}}
function gn(a,b){var c;if(a)if(c=H("yt-dialog",a)){var d=G("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=I(b,"yt-dialog"));return c}
function kn(){var a=en.C();if(a.i)a=H("yt-dialog-fg-content",a.i.overlayContentNode);else a:{if(a=qd("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=I(a[b],"yt-dialog");if(Cj(c)){a=a[b];break a}}a=null}return a}
m.hide=function(a){a&&a.disabled||fi("yt-uix-overlay-hide")};
function jn(){hn(en.C())}
m.show=function(a){this.Aa(a)};
Ja(en);var ln={},mn=[];function nn(a){a=I(a,"yt-uix-button-subscription-container");a=H("unsubscribe-confirmation-overlay-container",a);return H("yt-dialog",a)}
function on(a,b){Mi(mn);mn.length=0;ln[b]||(ln[b]=nn(a));en.C().show(ln[b]);var c=kn();return new qg(function(d){mn.push(Ki(c,function(){d()},"overlay-confirmation-unsubscribe-button"))})}
;function pn(){var a=P("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!P("SESSION_INDEX")&&!P("LOGGED_IN"))}
;function qn(){Ri.call(this,"subscription-button")}
pa(qn,Ri);m=qn.prototype;m.register=function(){V(this,"click",this.Ca);Ti(this,mj,this.gb);Ti(this,nj,this.fb);Ti(this,oj,this.Zb);Ti(this,rj,this.gb);Ti(this,sj,this.fb);Ti(this,tj,this.ac);Ti(this,vj,this.Yb);Ti(this,wj,this.Xb)};
m.unregister=function(){W(this,"click",this.Ca);Ri.prototype.unregister.call(this)};
m.isSubscribed=function(a){return!!this.j(a,"is-subscribed")};
m.Ca=function(a){var b=this.j(a,"href"),c=this.j(a,"insecure");if(b)a=this.j(a,"target")||"_self",window.open(b,a);else if(!c)if(pn()){b=this.j(a,"channel-external-id");c=this.j(a,"clicktracking");var d=rn(this,a),e=this.j(a,"parent-url");if(this.j(a,"is-subscribed")){var f=this.j(a,"subscription-id"),g=this.j(a,"unsubscribe-params"),h=new ij(b,f,d,a,c,e,g);this.j(a,"show-unsub-confirm-dialog")?on(a,b).then(function(){S(qj,h)}):S(qj,h)}else a=this.j(a,"params"),S(lj,new gj(b,d,c,e,void 0,a))}else sn(this,
a)};
m.gb=function(a){this.X(a.f,this.kb,!0)};
m.fb=function(a){this.X(a.f,this.kb,!1)};
m.Zb=function(a){this.X(a.f,this.lb,!0,a.g)};
m.ac=function(a){this.X(a.f,this.lb,!1)};
m.Yb=function(a){this.X(a.f,this.zb)};
m.Xb=function(a){this.X(a.f,this.xb)};
m.lb=function(a,b,c){b?(hi(a,"is-subscribed","true"),c&&hi(a,"subscription-id",c)):(ki(a,"is-subscribed"),ki(a,"subscription-id"));tn(this,a)};
function rn(a,b){if(!a.j(b,"ypc-enabled"))return null;var c=a.j(b,"ypc-item-type"),d=a.j(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
m.kb=function(a,b){var c=I(a,"yt-uix-button-subscription-container");eh(c,"yt-subscription-button-disabled-mask-container",b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function tn(a,b){var c=a.j(b,"style-type"),d=!!a.j(b,"is-subscribed");c="-"+c;var e="yt-uix-button-subscribed"+c;eh(b,"yt-uix-button-subscribe"+c,!d);eh(b,e,d);a.j(b,"subscriber-count-tooltip")&&!a.j(b,"subscriber-count-show-when-subscribed")&&(c=U(Fj.C()),eh(b,c,!d),b.title=d?"":a.j(b,"subscriber-count-title"));d?Xh(function(){N(b,"hover-enabled")},1E3):ch(b,"hover-enabled")}
m.zb=function(a){var b=!!this.j(a,"ypc-item-type"),c=!!this.j(a,"ypc-item-id");!this.j(a,"ypc-enabled")&&b&&c&&(N(a,"ypc-enabled"),hi(a,"ypc-enabled","true"))};
m.xb=function(a){this.j(a,"ypc-enabled")&&(ch(a,"ypc-enabled"),ki(a,"ypc-enabled"))};
function un(a,b){var c=qd(U(a));return bb(c,function(d){return b==this.j(d,"channel-external-id")},a)}
m.ub=function(a,b,c){var d=mb(arguments,2);B(a,function(e){b.apply(this,ib(e,d))},this)};
m.X=function(a,b,c){var d=un(this,a);d=ib([d],mb(arguments,1));this.ub.apply(this,d)};
function sn(a,b){var c=y(function(d){d.discoverable_subscriptions&&Rh("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",d.discoverable_subscriptions);this.Ca(b)},a);
Nj(c)}
Ja(qn);function vn(a,b,c){c=void 0===c?{}:c;var d=Zl;P("ytLoggingEventsDefaultDisabled",!1)&&Zl==Zl&&(d=null);nk(a,b,d,c)}
;var wn=[{Va:function(a){return"Cannot read property '"+a.key+"'"},
za:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{Va:function(a){return"Cannot call '"+a.key+"'"},
za:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}}];function xn(){this.f=[];this.g=[]}
var yn;var zn=new O;function An(a,b,c,d){c+="."+a;a=Bn(b);d[c]=a;return c.length+a.length}
function Bn(a){return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}
;var Cn=new Set,Dn=0,En=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Fn(a){Gn(a)}
function Hn(a){Gn(a,"WARNING")}
function Gn(a,b){var c=void 0===c?{}:c;c.name=P("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);var d=c||{};c=void 0===b?"ERROR":b;c=void 0===c?"ERROR":c;var e=void 0===e?!1:e;if(a){if(X("console_log_js_exceptions")){var f=[];f.push("Name: "+a.name);f.push("Message: "+a.message);a.hasOwnProperty("params")&&f.push("Error Params: "+JSON.stringify(a.params));f.push("File name: "+a.fileName);f.push("Stacktrace: "+a.stack);window.console.log(f.join("\n"),a)}if((window&&
window.yterr||e)&&!(5<=Dn)&&0!==a.sampleWeight){var g=cd(a);e=g.message||"Unknown Error";f=g.name||"UnknownError";var h=g.lineNumber||"Not available",k=g.fileName||"Not available";g=g.stack||a.f||"Not available";if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0,n=0;n<a.args.length;n++){var p=a.args[n],r="params."+n;l+=r.length;if(p)if(Array.isArray(p))for(var q=d,w=0;w<p.length&&!(p[w]&&(l+=An(w,p[w],r,q),500<l));w++);else if("object"===typeof p)for(q in q=void 0,w=d,p){if(p[q]&&(l+=
An(q,p[q],r,w),500<l))break}else d[r]=Bn(p),l+=d[r].length;else d[r]=Bn(p),l+=d[r].length;if(500<=l)break}else if(a.hasOwnProperty("params")&&a.params)if(p=a.params,"object"===typeof a.params)for(n in r=0,p){if(p[n]&&(l="params."+n,q=Bn(p[n]),d[l]=q,r+=l.length+q.length,500<r))break}else d.params=Bn(p);navigator.vendor&&!d.hasOwnProperty("vendor")&&(d.vendor=navigator.vendor);d={message:e,name:f,lineNumber:h,fileName:k,stack:g,params:d};e=Number(a.columnNumber);isNaN(e)||(d.lineNumber=d.lineNumber+
":"+e);e=u(wn);for(f=e.next();!f.done;f=e.next())if(f=f.value,f.za[d.name])for(k=u(f.za[d.name]),h=k.next();!h.done;h=k.next())if(g=h.value,h=d.message.match(g.regexp)){d.params["error.original"]=h[0];k=g.groups;g={};for(n=0;n<k.length;n++)g[k[n]]=h[n+1],d.params["error."+k[n]]=h[n+1];d.message=f.Va(g);break}window.yterr&&"function"===typeof window.yterr&&window.yterr(d);if(!(Cn.has(d.message)||0<=d.stack.indexOf("/YouTubeCenter.js")||0<=d.stack.indexOf("/mytube.js"))){"ERROR"===c?zn.M("handleError",
d):"WARNING"===c&&zn.M("handleWarning",d);if(X("kevlar_gel_error_routing")){e=c;a:{f=u(En);for(h=f.next();!h.done;h=f.next())if(Jl(h.value.toLowerCase())){f=!0;break a}f=!1}if(!f){h={stackTrace:d.stack};d.fileName&&(h.filename=d.fileName);f=d.lineNumber&&d.lineNumber.split?d.lineNumber.split(":"):[];0!==f.length&&(1!==f.length||isNaN(Number(f[0]))?2!==f.length||isNaN(Number(f[0]))||isNaN(Number(f[1]))||(h.lineNumber=Number(f[0]),h.columnNumber=Number(f[1])):h.lineNumber=Number(f[0]));yn||(yn=new xn);
f=yn;k=d.message;g=d.name;a:{n=u(f.g);for(p=n.next();!p.done;p=n.next())if(p=p.value,d.message&&d.message.match(p.f)){n=p.weight;break a}n=u(f.f);for(p=n.next();!p.done;p=n.next())if(p=p.value,p.f(d)){n=p.weight;break a}n=1}k={level:"ERROR_LEVEL_UNKNOWN",message:k,errorClassName:g,sampleWeight:n};"ERROR"===e?k.level="ERROR_LEVEL_ERROR":"WARNING"===e&&(k.level="ERROR_LEVEL_WARNNING");e={isObfuscated:!0,browserStackInfo:h};h={pageUrl:window.location.href};P("FEXP_EXPERIMENTS")&&(h.experimentIds=P("FEXP_EXPERIMENTS"));
h.kvPairs=[{key:"client.params.errorServiceSignature",value:"msg="+f.g.length+"&cb="+f.f.length}];if(f=d.params)for(g=u(Object.keys(f)),n=g.next();!n.done;n=g.next())n=n.value,h.kvPairs.push({key:"client."+n,value:String(f[n])});f=P("SERVER_NAME",void 0);g=P("SERVER_VERSION",void 0);f&&g&&(h.kvPairs.push({key:"server.name",value:f}),h.kvPairs.push({key:"server.version",value:g}));vn("clientError",{errorMetadata:h,stackTrace:e,logMessage:k});ek()}}if(!X("suppress_error_204_logging")){e=d.params||{};
c={Ba:{a:"logerror",t:"jserror",type:d.name,msg:d.message.substr(0,250),line:d.lineNumber,level:c,"client.name":e.name},H:{url:P("PAGE_NAME",window.location.href),file:d.fileName},method:"POST"};e.version&&(c["client.version"]=e.version);if(c.H){d.stack&&(c.H.stack=d.stack);f=u(Object.keys(e));for(h=f.next();!h.done;h=f.next())h=h.value,c.H["client."+h]=e[h];if(e=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(f=u(Object.keys(e)),h=f.next();!h.done;h=f.next())h=h.value,c.H[h]=e[h];e=P("SERVER_NAME",
void 0);f=P("SERVER_VERSION",void 0);e&&f&&(c.H["server.name"]=e,c.H["server.version"]=f)}Ck(P("ECATCHER_REPORT_HOST","")+"/error_204",c)}Cn.add(d.message);Dn++}}}}
;function In(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!Jn(a)||c.some(function(e){return!Jn(e)}))throw Error("Only objects may be merged.");
c=u(c);for(d=c.next();!d.done;d=c.next())Kn(a,d.value);return a}
function Kn(a,b){for(var c in b)if(Jn(b[c])){if(c in a&&!Jn(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Kn(a[c],b[c])}else if(Ln(b[c])){if(c in a&&!Ln(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Mn(a[c],b[c])}else a[c]=b[c];return a}
function Mn(a,b){for(var c=u(b),d=c.next();!d.done;d=c.next())d=d.value,Jn(d)?a.push(Kn({},d)):Ln(d)?a.push(Mn([],d)):a.push(d);return a}
function Jn(a){return"object"===typeof a&&!Array.isArray(a)}
function Ln(a){return"object"===typeof a&&Array.isArray(a)}
;var Nn={},On=0;
function Pn(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!Jl("cobalt")){if(a){a instanceof Jb||(a="object"==typeof a&&a.ea?a.ca():String(a),Ob.test(a)?a=new Jb(a,Kb):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Nb))&&Mb.test(b[1])?new Jb(a,Kb):null));a=Lb(a||Pb);if("about:invalid#zClosurez"===a||a.startsWith("data"))a="";else{if(!(a instanceof Xb)){b="object"==typeof a;var f=null;b&&a.Pa&&(f=a.La());a=$b(yb(b&&a.ea?a.ca():String(a)),f)}a=Zb(a).toString();a=encodeURIComponent(String(jh(a)))}/^[\s\xa0]*$/.test(a)||(a=
zd("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),pd(a).body.appendChild(a))}}else if(e)Dk(a,b,"POST",e,d);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)Dk(a,b,"GET","",d);else{b:{try{var g=new Za({url:a});if(g.i&&g.g||g.l){var h=hc(a.match(gc)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(pc);d:{for(c=0;0<=(c=a.indexOf("ri",c))&&c<l;){var n=a.charCodeAt(c-1);if(38==n||63==n){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var r=
c;break d}}c+=3}r=-1}if(0>r)var q=null;else{var w=a.indexOf("&",r);if(0>w||w>l)w=l;r+=3;q=decodeURIComponent(a.substr(r,w-r).replace(/\+/g," "))}k="1"!==q}f=!k;break b}}catch(F){}f=!1}f?Qn(a)?(b&&b(),f=!0):f=!1:f=!1;f||Rn(a,b)}}
function Qn(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Rn(a,b){var c=new Image,d=""+On++;Nn[d]=c;c.onload=c.onerror=function(){b&&Nn[d]&&b();delete Nn[d]};
c.src=a}
;function Sn(a,b){Q.call(this,1,arguments)}
pa(Sn,Q);function Tn(a,b){Q.call(this,1,arguments)}
pa(Tn,Q);var Un=new R("aft-recorded",Sn),Vn=new R("timing-sent",Tn);var Wn=window;function Xn(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var Yn=Wn.performance||Wn.mozPerformance||Wn.msPerformance||Wn.webkitPerformance||new Xn;var Zn=!1;y(Yn.clearResourceTimings||Yn.webkitClearResourceTimings||Yn.mozClearResourceTimings||Yn.msClearResourceTimings||Yn.oClearResourceTimings||Ia,Yn);function $n(a){var b=ao(a);if(b.aft)return b.aft;a=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function bo(a){var b;(b=x("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},z("ytcsi."+(a||"")+"data_",b));return b}
function co(a){a=bo(a);a.info||(a.info={});return a.info}
function ao(a){a=bo(a);a.tick||(a.tick={});return a.tick}
function eo(a){var b=bo(a).nonce;b||(b=am(),bo(a).nonce=b);return b}
function fo(a){var b=ao(a||""),c=$n(a);c&&!Zn&&(S(Un,new Sn(Math.round(c-b._start),a)),Zn=!0)}
;function go(){var a=x("ytcsi.debug");a||(a=[],z("ytcsi.debug",a),z("ytcsi.reference",{}));return a}
function ho(a){a=a||"";var b=x("ytcsi.reference");b||(go(),b=x("ytcsi.reference"));if(b[a])return b[a];var c=go(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var io=v.ytLoggingLatencyUsageStats_||{};z("ytLoggingLatencyUsageStats_",io);function jo(){this.f=0}
function ko(){jo.f||(jo.f=new jo);return jo.f}
jo.prototype.tick=function(a,b,c){lo(this,"tick_"+a+"_"+b)||vn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
jo.prototype.info=function(a,b){var c=Object.keys(a).join("");lo(this,"info_"+c+"_"+b)||(c=Object.assign({},a),c.clientActionNonce=b,vn("latencyActionInfo",c))};
jo.prototype.span=function(a,b){var c=Object.keys(a).join("");lo(this,"span_"+c+"_"+b)||(a.clientActionNonce=b,vn("latencyActionSpan",a))};
function lo(a,b){io[b]=io[b]||{count:0};var c=io[b];c.count++;c.time=Y();a.f||(a.f=oi(function(){var d=Y(),e;for(e in io)io[e]&&6E4<d-io[e].time&&delete io[e];a&&(a.f=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new il("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Hn(c)),!0):!1}
;var Z={},mo=(Z.ad_allowed="adTypesAllowed",Z.yt_abt="adBreakType",Z.ad_cpn="adClientPlaybackNonce",Z.ad_docid="adVideoId",Z.yt_ad_an="adNetworks",Z.ad_at="adType",Z.aida="appInstallDataAgeMs",Z.browse_id="browseId",Z.p="httpProtocol",Z.t="transportProtocol",Z.cpn="clientPlaybackNonce",Z.ccs="creatorInfo.creatorCanaryState",Z.cseg="creatorInfo.creatorSegment",Z.csn="clientScreenNonce",Z.docid="videoId",Z.GetHome_rid="requestIds",Z.GetSearch_rid="requestIds",Z.GetPlayer_rid="requestIds",Z.GetWatchNext_rid=
"requestIds",Z.GetBrowse_rid="requestIds",Z.GetLibrary_rid="requestIds",Z.is_continuation="isContinuation",Z.is_nav="isNavigation",Z.b_p="kabukiInfo.browseParams",Z.is_prefetch="kabukiInfo.isPrefetch",Z.is_secondary_nav="kabukiInfo.isSecondaryNav",Z.prev_browse_id="kabukiInfo.prevBrowseId",Z.query_source="kabukiInfo.querySource",Z.voz_type="kabukiInfo.vozType",Z.yt_lt="loadType",Z.mver="creatorInfo.measurementVersion",Z.yt_ad="isMonetized",Z.nr="webInfo.navigationReason",Z.nrsu="navigationRequestedSameUrl",
Z.ncnp="webInfo.nonPreloadedNodeCount",Z.pnt="performanceNavigationTiming",Z.prt="playbackRequiresTap",Z.plt="playerInfo.playbackType",Z.pis="playerInfo.playerInitializedState",Z.paused="playerInfo.isPausedOnLoad",Z.yt_pt="playerType",Z.fmt="playerInfo.itag",Z.yt_pl="watchInfo.isPlaylist",Z.yt_pre="playerInfo.preloadType",Z.yt_ad_pr="prerollAllowed",Z.pa="previousAction",Z.yt_red="isRedSubscriber",Z.rce="mwebInfo.responseContentEncoding",Z.scrh="screenHeight",Z.scrw="screenWidth",Z.st="serverTimeMs",
Z.ssdm="shellStartupDurationMs",Z.br_trs="tvInfo.bedrockTriggerState",Z.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Z.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Z.label="tvInfo.label",Z.is_mdx="tvInfo.isMdx",Z.preloaded="tvInfo.isPreloaded",Z.upg_player_vis="playerInfo.visibilityState",Z.query="unpluggedInfo.query",Z.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Z.yt_vst="videoStreamType",Z.vph="viewportHeight",Z.vpw="viewportWidth",Z.yt_vis="isVisible",Z.rcl="mwebInfo.responseContentLength",
Z.GetSettings_rid="requestIds",Z.GetTrending_rid="requestIds",Z.GetMusicSearchSuggestions_rid="requestIds",Z.REQUEST_ID="requestIds",Z),no="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),oo={},po=(oo.ccs="CANARY_STATE_",
oo.mver="MEASUREMENT_VERSION_",oo.pis="PLAYER_INITIALIZED_STATE_",oo.yt_pt="LATENCY_PLAYER_",oo.pa="LATENCY_ACTION_",oo.yt_vst="VIDEO_STREAM_TYPE_",oo),qo="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function ro(a){return!!P("FORCE_CSI_ON_GEL",!1)||X("csi_on_gel")||!!bo(a).useGel}
function so(a){a=bo(a);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;function to(a,b,c){if(null!==b)if(co(c)[a]=b,ro(c)){var d=b;b=so(c);if(b.gelInfos)b.gelInfos["info_"+a]=!0;else{var e={};b.gelInfos=(e["info_"+a]=!0,e)}if(a.match("_rid")){var f=a.split("_rid")[0];a="REQUEST_ID"}if(a in mo){b=mo[a];gb(no,b)&&(d=!!d);a in po&&"string"===typeof d&&(d=po[a]+d.toUpperCase());a=d;d=b.split(".");for(var g=e={},h=0;h<d.length-1;h++){var k=d[h];g[k]={};g=g[k]}g[d[d.length-1]]="requestIds"===b?[{id:a,endpoint:f}]:a;f=In({},e)}else gb(qo,a)||Hn(new il("Unknown label logged with GEL CSI",
a)),f=void 0;f&&ro(c)&&(b=ho(c||""),In(b.info,f),b=so(c),"gelInfos"in b||(b.gelInfos={}),In(b.gelInfos,f),c=eo(c),ko().info(f,c))}else ho(c||"").info[a]=b}
function uo(a,b,c){var d=ao(c);if(X("use_first_tick")&&vo(a,c))return d[a];if(!b&&"_"!==a[0]){var e=a;Yn.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),Yn.mark(e))}e=b||Y();d[a]=e;e=so(c);e.gelTicks&&(e.gelTicks["tick_"+a]=!0);c||b||Y();if(ro(c)){ho(c||"").tick[a]=b||Y();e=eo(c);if("_start"===a){var f=ko();lo(f,"baseline_"+e)||vn("latencyActionBaselined",{clientActionNonce:e},{timestamp:b})}else ko().tick(a,e,b);fo(c);e=!0}else e=!1;if(!e){if(!x("yt.timing."+(c||"")+"pingSent_")&&
(f=P((c||"")+"TIMING_ACTION",void 0),e=ao(c),x("ytglobal.timing"+(c||"")+"ready_")&&f&&vo("_start")&&$n(c)))if(fo(c),c)wo(c);else{f=!0;var g=P("TIMING_WAIT",[]);if(g.length)for(var h=0,k=g.length;h<k;++h)if(!(g[h]in e)){f=!1;break}f&&wo(c)}ho(c||"").tick[a]=b||Y()}return d[a]}
function vo(a,b){var c=ao(b);return a in c}
function wo(a){if(!ro(a)){var b=ao(a),c=co(a),d=b._start,e=P("CSI_SERVICE_NAME","youtube"),f={v:2,s:e,action:P((a||"")+"TIMING_ACTION",void 0)},g=c.srt;void 0!==b.srt&&delete c.srt;b.aft=$n(a);var h=ao(a),k=h.pbr,l=h.vc;h=h.pbs;k&&l&&h&&k<l&&l<h&&co(a).yt_pvis&&"youtube"===e&&(to("yt_lt","hot_bg",a),e=b.vc,k=b.pbs,delete b.aft,c.aft=Math.round(k-e));for(var n in c)"_"!==n.charAt(0)&&(f[n]=c[n]);b.ps=Y();n={};e=[];for(var p in b)"_"!==p.charAt(0)&&(k=Math.round(b[p]-d),n[p]=k,e.push(p+"."+k));f.rt=
e.join(",");b=!!c.ap;X("debug_csi_data")&&(c=x("yt.timing.csiData"),c||(c=[],z("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:f}));c="";for(var r in f)f.hasOwnProperty(r)&&(c+="&"+r+"="+f[r]);f="/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&b){var q=void 0===q?"":q;Qn(f,q)||Pn(f,void 0,void 0,void 0,q)}else Pn(f);z("yt.timing."+(a||"")+"pingSent_",!0);S(Vn,new Tn(n.aft+(Number(g)||0),a))}}
var xo=window;xo.ytcsi&&(xo.ytcsi.info=to,xo.ytcsi.tick=uo);new Mg(yo,1E3);function yo(){uo("vptl",0);uo("vpl",0)}
;function zo(a){this.f=a;this.N=null;P("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(Ao(this),T(this.f,"mouseover",y(this.l,this)),T(this.f,"mouseout",y(this.wa,this)),T(this.f,"click",y(this.wa,this)),ui(oj,Ta(this.g,!0),this),ui(tj,Ta(this.g,!1),this),Bo(this))}
function Ao(a){var b={url:P("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.f,relayOpen:"-1"};a=y(a.i,a);cj().open(b,a)}
function Bo(a){pn()||ci("LOGGED_IN",function(){this.N&&(this.wa(),this.N.close(),this.N=null,Ao(this))},a)}
zo.prototype.i=function(a){this.N=a;a=qn.C().isSubscribed(this.f);this.g(a)};
zo.prototype.l=function(){this.N&&this.N.restyle({show:!0})};
zo.prototype.wa=function(){this.N&&this.N.restyle({show:!1})};
zo.prototype.g=function(a){if(this.N){a={isSubscribed:a};try{this.N.send("msg-hovercard-subscription",a,void 0,x("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER"))}catch(b){}}};function Co(){bj(function(){var a=qe(G("yt-subscribe"));a={width:a.width,height:a.height};var b=Do;cj().ready(a,null,b)})}
function Do(a){if(a.length&&a[a.length-1]){a=a[a.length-1].eurl;var b=G("yt-subscribe"),c=qn.C();if(b=H(U(c),b))a&&(qn.C(),hi(b,"parent-url",a)),new zo(b)}}
;var Eo=x("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Eo);function Fo(){this.f=P("ALT_PREF_COOKIE_NAME","PREF");var a=hd.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Eo[d]=c.toString())}}}
m=Fo.prototype;m.get=function(a,b){Go(a);Ho(a);var c=Io(a);return null!=c?c:b?b:""};
m.set=function(a,b){Go(a);Ho(a);if(null==b)throw Error("ExpectedNotNull");Eo[a]=b.toString()};
function Jo(a){var b=Io("f"+(Math.floor(a/31)+1));return!!(((null!=b&&/^[A-Fa-f0-9]+$/.test(b)?parseInt(b,16):null)||0)&1<<a%31)}
m.remove=function(a){Go(a);Ho(a);delete Eo[a]};
m.save=function(){Mk(this.f,this.dump(),63072E3)};
m.clear=function(){for(var a in Eo)delete Eo[a]};
m.dump=function(){var a=[],b;for(b in Eo)a.push(b+"="+encodeURIComponent(String(Eo[b])));return a.join("&")};
function Ho(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Go(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Io(a){return void 0!==Eo[a]?Eo[a].toString():null}
Ja(Fo);var Ko=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]),Lo=["/fashion","/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ","/channel/UCTApTkbpcqiLL39WUlne4ig","/channel/UCW5PCzG3KQvbOX4zc3KY0lQ"];function Mo(){var a=void 0===a?window.location.href:a;if(X("kevlar_disable_theme_param"))return null;var b=hc(a.match(gc)[5]||null);if(No(b))return"USER_INTERFACE_THEME_DARK";try{var c=Zi(a).theme;return Ko.get(c)||null}catch(d){}return null}
function No(a){var b=Lo.map(function(c){return c.toLowerCase()});
return!X("disable_dark_fashion_destination_launch")&&b.some(function(c){return a.toLowerCase().startsWith(c)})?!0:!1}
;function Oo(){this.f={};var a=hd.get("CONSISTENCY",void 0);a&&Po(this,{encryptedTokenJarContents:a})}
Oo.prototype.g=function(a,b){var c,d,e,f=null===(d=null===(c=b.Qa.context)||void 0===c?void 0:c.request)||void 0===d?void 0:d.consistencyTokenJars,g=null===(e=a.responseContext)||void 0===e?void 0:e.consistencyTokenJar;f&&g&&this.replace(f,g)};
Oo.prototype.replace=function(a,b){for(var c=u(a),d=c.next();!d.done;d=c.next())delete this.f[d.value.encryptedTokenJarContents];Po(this,b)};
function Po(a,b){if(b.encryptedTokenJarContents&&(a.f[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.f[b.encryptedTokenJarContents]},1E3*c);
Mk("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;function Qo(){var a=P("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===P("INNERTUBE_CLIENT_NAME")&&(this.localStorage=Ro(this))&&(a=this.localStorage.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.f=void 0)}
function So(){Qo.f||(Qo.f=new Qo);return Qo.f}
Qo.prototype.g=function(a){var b,c,d=null===(b=a.responseContext)||void 0===b?void 0:b.locationPlayabilityToken;void 0!==d&&(this.locationPlayabilityToken=d,this.f=void 0,"TVHTML5"===(null===(c=a.responseContext)||void 0===c?void 0:c.clientName)?(this.localStorage=Ro(this))&&this.localStorage.set("yt-location-playability-token",d,15552E3):Mk("YT_CL",d,15552E3,void 0,!0))};
function Ro(a){return void 0===a.localStorage?new Nk("yt-client-location"):a.localStorage}
;var To={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"};function Uo(a,b,c){var d=Vo.f;this.f=a;this.o=d;this.l=b;this.g=Fn;this.i=c}
function Wo(a){if(!Xo){var b={Ja:{playlistEditEndpoint:Yo,subscribeEndpoint:Zo,unsubscribeEndpoint:$o,modifyChannelNotificationPreferenceEndpoint:ap}},c=X("web_enable_client_location_service")?So():void 0,d=[];c&&d.push(c);if(void 0===e){Tk.f||(Tk.f=new Tk);var e=Tk.f}Vo.f||(Vo.f=new Vo);Uo.f=new Uo(b,e,d);Xo=Uo.f}e=Xo;var f=void 0===f?Vk:f;a:{var g,h;if((null===(g=a.signalServiceEndpoint)||void 0===g?0:g.signal)&&e.f.dc&&(g=e.f.dc[a.signalServiceEndpoint.signal])){var k=new g;break a}if((null===
(h=a.continuationCommand)||void 0===h?0:h.request)&&e.f.vb&&(h=e.f.vb[a.continuationCommand.request])){k=new h;break a}for(k in a)if(e.f.Ja[k]&&(h=e.f.Ja[k])){k=new h;break a}k=void 0}if(!k)return e.g(new il("Error: No request builder found for command.",a)),vg({});var l;h=void 0;h=void 0===h?{}:h;f=void 0===f?Vk:f;var n;b=a.clickTrackingParams;var p=void 0===p?!0:p;if(g=P("INNERTUBE_CONTEXT")){g=tb(g);var r;g.client||(g.client={});c=g.client;"MWEB"===c.clientName&&(c.clientFormFactor=P("IS_TABLET")?
"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");c.screenWidthPoints=window.innerWidth;c.screenHeightPoints=window.innerHeight;c.screenPixelDensity=Math.round(window.devicePixelRatio||1);c.screenDensityFloat=window.devicePixelRatio||1;c.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var q=void 0===q?!1:q;Fo.C();d="USER_INTERFACE_THEME_LIGHT";Jo(165)?d="USER_INTERFACE_THEME_DARK":Jo(174)?d="USER_INTERFACE_THEME_LIGHT":!X("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&
window.matchMedia("(prefers-color-scheme: dark)").matches&&(d="USER_INTERFACE_THEME_DARK");q=q?d:Mo()||d;c.userInterfaceTheme=q;if(X("web_log_connection")){c:{if(d=(q=window.navigator)?q.connection:void 0){q=To[d.type||"unknown"]||"CONN_UNKNOWN";d=To[d.f||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===q&&"CONN_UNKNOWN"!==d&&(q=d);if("CONN_UNKNOWN"!==q)break c;if("CONN_UNKNOWN"!==d){q=d;break c}}q=void 0}q&&(c.connectionType=q)}X("web_populate_graft_url_killswitch")||"MWEB"!==c.clientName&&"WEB"!==
c.clientName||(c.mainAppWebInfo={graftUrl:v.location.href});X("web_populate_time_zone_itc_killswitch")||(q="undefined"!==typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:void 0,q&&(c.timeZone=q));(q=hd.get("EXPERIMENTS_DEBUG",void 0))?c.experimentsToken="ZERO"===q?"GgIQAQ%3D%3D":q:delete c.experimentsToken;q=Rj();Oo.f||(Oo.f=new Oo);c=pb(Oo.f.f);g.request=Object.assign(Object.assign({},g.request),{internalExperimentFlags:q,consistencyTokenJars:c});c=Fo.C();q=Jo(58);c=c.get("gsml",
"");g.user=Object.assign({},g.user);q&&(g.user.enableSafetyMode=q);c&&(g.user.lockedSafetyMode=!0);(q=P("DELEGATED_SESSION_ID"))&&!X("pageid_as_header_web")&&(g.user.onBehalfOfUser=q);p&&(p=fm())&&(g.clientScreenNonce=p);b&&(g.clickTracking={clickTrackingParams:b});X("web_enable_client_location_service")&&(p=So(),g.client||(g.client={}),p.f?(g.client.locationInfo||(g.client.locationInfo={}),g.client.locationInfo.latitudeE7=1E7*p.f.coords.latitude,g.client.locationInfo.longitudeE7=1E7*p.f.coords.longitude,
g.client.locationInfo.horizontalAccuracyMeters=p.f.coords.accuracy):p.locationPlayabilityToken&&(g.client.locationPlayabilityToken=p.locationPlayabilityToken));if(X("web_enable_ad_signals_in_it_context")){p=null===(r=g.adSignalsInfo)||void 0===r?void 0:r.consentBumpParams;r=ok(void 0);b=r.bid;delete r.bid;g.adSignalsInfo={params:[],bid:b};r=u(Object.entries(r));for(b=r.next();!b.done;b=r.next())q=u(b.value),b=q.next().value,q=q.next().value,null===(n=g.adSignalsInfo.params)||void 0===n?void 0:n.push({key:b,
value:""+q});!hd.get("CONSENT","").startsWith("YES+")&&p&&(g.adSignalsInfo.consentBumpParams=p)}n=g}else Gn(Error("Error: No InnerTubeContext shell provided in ytconfig.")),n={};n={context:n};if(r=k.i(a)){k.f(n,r,h);var w;r="/youtubei/v1/"+bp(k.g());(k=null===(w=null===(l=a.commandMetadata)||void 0===l?void 0:l.webCommandMetadata)||void 0===w?void 0:w.apiUrl)&&(r=k);r=$i(r,{key:P("INNERTUBE_API_KEY")},!1);if(l=P("INNERTUBE_HOST_OVERRIDE"))l=String(l),w=String,h=r.match(gc),r=h[5],k=h[6],h=h[7],p=
"",r&&(p+=r),k&&(p+="?"+k),h&&(p+="#"+h),r=l+w(p);l=r;l={input:l,ga:{method:"POST",mode:aj(l)?"same-origin":"cors",credentials:aj(l)?"same-origin":"include"},Qa:n,config:Object.assign({},void 0)};l.config.f?l.config.f.identity=f:l.config.f={identity:f}}else Gn(new il("Error: Failed to create Request from Command.",a)),l=void 0;if(l)return vg(cp(e,l));e.g(new il("Error: Failed to build request for command.",a));return vg({})}
function cp(a,b){return qc(a,function d(){var e=this,f,g,h,k,l;return Da(d,function(n){if(1==n.f)return f=e,g=JSON.stringify(b.Qa),e.l.f?(h=dp(b),n.qa(2)):ta(n,ep(b),3);2!=n.f&&(h=n.B);b.ga=Object.assign(Object.assign({},b.ga),{headers:h});X("enable_get_account_switcher_endpoint_on_webfe")?(k=Object.assign({},b.ga),"POST"===b.ga.method&&(k=Object.assign(Object.assign({},k),{body:g}))):k=Object.assign(Object.assign({},b.ga),{body:g});l=e.o.fetch(b.input,k);return n["return"](l.then(function(p){if(p&&
f.i)for(var r=u(f.i),q=r.next();!q.done;q=r.next())q.value.g(p,b);return Promise.resolve(p)}))})})}
function ep(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.f)||void 0===c?void 0:c.sessionIndex;return vg(Uk({sessionIndex:a})).then(function(d){return Promise.resolve(Object.assign(Object.assign({},fp()),d))})}
function dp(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.f)||void 0===c?void 0:c.sessionIndex;a=Uk({sessionIndex:a});return Object.assign(Object.assign({},fp()),a)}
function fp(){var a={"Content-Type":"application/json"},b=P("VISITOR_DATA");b&&(a["X-Goog-Visitor-Id"]=b);return a}
;var gp=["notification/modify_channel_preference"],hp=["browse/edit_playlist"],ip=["subscription/subscribe"],jp=["subscription/unsubscribe"];var kp={},lp=(kp.WEB_UNPLUGGED="^unplugged/",kp.WEB_UNPLUGGED_ONBOARDING="^unplugged/",kp.WEB_UNPLUGGED_OPS="^unplugged/",kp.WEB_UNPLUGGED_PUBLIC="^unplugged/",kp.WEB_CREATOR="^creator/",kp.WEB_KIDS="^kids/",kp.WEB_EXPERIMENTS="^experiments/",kp.WEB_MUSIC="^music/",kp.WEB_REMIX="^music/",kp.WEB_MUSIC_EMBEDDED_PLAYER="^music/",kp.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",kp);
function bp(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=lp[b];if(c){var d=new RegExp(c),e=u(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,d.exec(c))return c}var f=[];Object.entries(lp).forEach(function(g){var h=u(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
d=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
e=u(a);for(c=e.next();!c.done;c=e.next())if(c=c.value,!d.exec(c))return c;return a[0]}
;function mp(){}
;function Zo(){}
pa(Zo,mp);Zo.prototype.g=function(){return ip};
Zo.prototype.i=function(a){return a.subscribeEndpoint};
Zo.prototype.f=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};function $o(){}
pa($o,mp);$o.prototype.g=function(){return jp};
$o.prototype.i=function(a){return a.unsubscribeEndpoint};
$o.prototype.f=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};function ap(){}
pa(ap,mp);ap.prototype.g=function(){return gp};
ap.prototype.i=function(a){return a.modifyChannelNotificationPreferenceEndpoint};
ap.prototype.f=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Yo(){}
pa(Yo,mp);Yo.prototype.g=function(){return hp};
Yo.prototype.i=function(a){return a.playlistEditEndpoint};
Yo.prototype.f=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Vo(){this.f=void 0}
Vo.prototype.fetch=function(a,b){var c;if(null===(c=this.f)||void 0===c?0:c.g(a,b))return vg(this.f.f(a,b)["catch"](function(e){Hn(e)}));
var d=new Request(a,b);return vg(fetch(d).then(function(e){return np(e)})["catch"](function(e){Hn(e)}))};
function np(a){var b;X("enable_get_account_switcher_endpoint_on_webfe")?b=a.text().then(function(c){return JSON.parse(c.replace(")]}'",""))}):b=a.json();
a.redirected||a.ok||b.then(function(c){Hn(new il("Error: API fetch failed",a.status,a.url,c))});
return b}
;var Xo;function op(a){Q.call(this,1,arguments)}
A(op,Q);function pp(a,b){Q.call(this,2,arguments);this.g=a;this.f=b}
A(pp,Q);function qp(a,b,c,d){Q.call(this,1,arguments);this.f=b;this.itemType=c||null;this.itemId=d||null}
A(qp,Q);function rp(a,b){Q.call(this,1,arguments);this.g=a;this.f=b||null}
A(rp,Q);function sp(a){Q.call(this,1,arguments)}
A(sp,Q);var tp=new R("ypc-core-load",op),up=new R("ypc-guide-sync-success",pp),vp=new R("ypc-purchase-success",qp),wp=new R("ypc-subscription-cancel",sp),xp=new R("ypc-subscription-cancel-success",rp),yp=new R("ypc-init-subscription",sp);var zp=[];function Ap(a){a.g?S(tp,new op(function(){S(yp,new sp(a.g))})):X("web_classic_innertube_subscription_update")?Bp(a.f,a.params):Cp(a.f,a.l,a.i,a.source,a.params)}
function Dp(a){a.g?S(tp,new op(function(){S(wp,new sp(a.g))})):X("web_classic_innertube_subscription_update")?Ep(a.f,a.params):Fp(a.f,a.o,a.l,a.i,a.source)}
function Gp(a){Hp(jb(a.f))}
function Ip(a){Jp(jb(a.f))}
function Kp(a){Lp(a.i,a.g,a.f)}
function Mp(a){var b=a.itemId,c=a.f.subscriptionId;b&&c&&S(oj,new hj(b,c,a.f.channelInfo))}
function Np(a){var b=a.f;ob(a.g,function(c,d){S(oj,new hj(d,c,b[d]))})}
function Op(a){S(tj,new ej(a.g.itemId));a.f&&a.f.length&&(Pp(a.f,tj),Pp(a.f,vj))}
function Bp(a,b){var c=new ej(a);S(mj,c);Ag(Wo({commandMetadata:{webCommandMetadata:{apiUrl:"/youtubei/v1/subscription/subscribe"}},subscribeEndpoint:{channelIds:[a],params:b}}).then(function(){S(oj,new hj(a,Math.round(1E4*Math.random()).toString(),{thumbnail:"",title:"",url:"",Jc:a}))}),function(){S(nj,c)})}
function Cp(a,b,c,d,e){var f=new ej(a);S(mj,f);var g={};g.c=a;c&&(g.eurl=c);d&&(g.source=d);c={};(d=P("PLAYBACK_ID"))&&(c.plid=d);(d=P("EVENT_ID"))&&(c.ei=d);e&&(c.params=e);b&&Qp(b,c);Ck("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Ba:g,H:c,onSuccess:function(h,k){var l=k.response;S(oj,new hj(a,l.id,l.channel_info));l.show_feed_privacy_dialog&&fi("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a)},
fa:function(){S(nj,f)}})}
function Ep(a,b){var c=new ej(a);S(rj,c);Ag(Wo({commandMetadata:{webCommandMetadata:{apiUrl:"/youtubei/v1/subscription/unsubscribe"}},unsubscribeEndpoint:{channelIds:[a],params:b}}).then(function(){S(tj,c)}),function(){S(sj,c)})}
function Fp(a,b,c,d,e){var f=new ej(a);S(rj,f);var g={};g.c=a;d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=P("PLAYBACK_ID"))&&(d.plid=a);(a=P("EVENT_ID"))&&(d.ei=a);c&&Qp(c,d);Ck("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Ba:g,H:d,onSuccess:function(){S(tj,f)},
fa:function(){S(sj,f)}})}
function Lp(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new fj(a,b,c);Ck("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",H:d,onError:function(){S(zj,e)},
onSuccess:function(){S(yj,e)}})}}
function Hp(a){if(a.length){var b=lb(a,0,40);S("subscription-batch-subscribe-loading");Pp(b,mj);var c={};c.a=b.join(",");var d=function(){S("subscription-batch-subscribe-loaded");Pp(b,nj)};
Ck("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",H:c,onSuccess:function(e,f){d();var g=f.response,h=g.id;if(Array.isArray(h)&&h.length==b.length){var k=g.channel_info_map;B(h,function(l,n){var p=b[n];S(oj,new hj(p,l,k[p]))});
a.length?Hp(a):S("subscription-batch-subscribe-finished")}},
onError:function(){d();S("subscription-batch-subscribe-failure")}})}}
function Jp(a){if(a.length){var b=lb(a,0,40);S("subscription-batch-unsubscribe-loading");Pp(b,rj);var c={};c.c=b.join(",");var d=function(){S("subscription-batch-unsubscribe-loaded");Pp(b,sj)};
Ck("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",H:c,onSuccess:function(){d();Pp(b,tj);a.length&&Jp(a)},
onError:function(){d()}})}}
function Pp(a,b){B(a,function(c){S(b,new ej(c))})}
function Qp(a,b){var c=Yi(a),d;for(d in c)b[d]=c[d]}
;z("yt.setConfig",Rh);z("yt.config.set",Rh);z("ytbin.www.subscribeembed.init",function(){var a=!0;zp.push(ui(lj,Ap),ui(qj,Dp));a||zp.push(ui(pj,Ap),ui(uj,Dp),ui(jj,Gp),ui(kj,Ip),ui(xj,Kp),ui(vp,Mp),ui(xp,Op),ui(up,Np));a=qn.C();var b=U(a);b in Vi||(a.register(),Si(a,"yt-uix-init-"+b,a.init),Si(a,"yt-uix-dispose-"+b,a.dispose),Vi[b]=a);Co()});}).call(this);
