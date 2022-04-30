(self.webpackChunk=self.webpackChunk||[]).push([[84],{7757:(e,t,r)=>{e.exports=r(5666)},5076:(e,t,r)=>{"use strict";r.d(t,{o:()=>s});var n=r(7757),o=r.n(n);function a(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t,r,n,o,a,i){try{var c=e[a](i),s=c.value}catch(e){return void r(e)}c.done?t(s):Promise.resolve(s).then(n,o)}var s=(0,r(8262).Q_)("candidate",{state:function(){return{wizard:{lastSavedStep:"president",completedSteps:[],bottomOfPage:!1,loading:!1},dataSource:{loading:!1,president:[],vice_president:[],senator:[],partylist:[],localities:[],local_candidates:[]},ballot:{president:null,vice_president:null,senators:[],partylist:null,house_representative:null,governor:null,vice_governor:null,mayor:null,vice_mayor:null,prov_sang_members:[],city_sang_members:[]},votingLimits:{president:1,vicePresident:1,senators:12,partylist:1},search:{senator:"",partylist:"",province:"",citydist:""},showModal:!1,modalCandidate:[]}},actions:{fetchCandidates:function(e,t){var r,n=this;return(r=o().mark((function r(){var a;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,n.dataSource.loading=!0,!(n.dataSource[e]&&0==n.dataSource[e].length||!0===t)){r.next=11;break}if("local_candidates"!=e||n.search.citydist){r.next=6;break}r.next=10;break;case 6:return r.next=8,window.axios.get("/json/candidates",{params:{position:e,locality_id:n.search.citydist}});case 8:a=r.sent,n.dataSource[e]=a.data;case 10:n.dataSource.loading=!1;case 11:r.next=17;break;case 13:r.prev=13,r.t0=r.catch(0),n.dataSource.loading=!1,console.log(r.t0);case 17:case"end":return r.stop()}}),r,null,[[0,13]])})),function(){var e=this,t=arguments;return new Promise((function(n,o){var a=r.apply(e,t);function i(e){c(a,n,o,i,s,"next",e)}function s(e){c(a,n,o,i,s,"throw",e)}i(void 0)}))})()},setLocalities:function(e){this.dataSource.localities=e},reset:function(e){this.wizard={lastSavedStep:"president",completedSteps:[]},this.ballot={president:null,vice_president:null,senators:[],partylist:null,house_representative:null,governor:null,vice_governor:null,mayor:null,vice_mayor:null,prov_sang_members:[],city_sang_members:[]},this.search={senator:"",partylist:"",province:"",citydist:""},this.gtag("start_over"),e()},select:function(e,t){var r=this.selectedLocale;if(["senators","prov_sang_members","city_sang_members"].includes(e)){var n=this.ballot[e];if(n.includes(t.id))return void n.splice(n.indexOf(t.id),1);this.ballot[e].push(t.id)}else this.ballot[e]&&this.ballot[e]===t.id?this.ballot[e]=null:this.ballot[e]=t.id;this.gtag("clicked_candidate",{position:t.position,partylist:t.partylist,locale_id:r&&r.id?r.id:"",locale_province:r&&r.province?r.province:"",locale_name:r&&r.city_dist?r.city_dist:""})},saveCompletedSteps:function(e,t){var r=a(new Set(e));this.wizard.completedSteps=r,this.wizard.lastSavedStep=t},getProfileUrl:function(e){if(e.profile_url)return e.profile_url;var t=e.position.replace(/_/g," ");return"https://www.google.com/search?q=".concat(e.name," candidate running for ").concat(t)},gtag:function(e,t,r){"undefined"!=typeof window&&window.gtag("event",e,t),r&&r()}},getters:{presidents:function(e){return e.dataSource.president},vicePresidents:function(e){return e.dataSource.vice_president},senators:function(e){var t=e.dataSource.senator;return e.search.senator?t.filter((function(t){return e.search.senator.toLowerCase().split(" ").every((function(e){return t.name.toLowerCase().includes(e)}))})):t},partylist:function(e){var t=e.dataSource.partylist;return e.search.partylist?t.filter((function(t){return e.search.partylist.toLowerCase().split(" ").every((function(e){return t.name.toLowerCase().includes(e)}))})):t},provinces:function(e){var t=a(new Map(e.dataSource.localities.map((function(e){return[e.province,e]}))).values());return t.sort((function(e,t){return e.province.localeCompare(t.province)})),t},citydists:function(e){if(e.search.province){var t=e.dataSource.localities;return t.filter((function(t){return t.province===e.search.province}))}return[]},houseRepresentatives:function(e){return e.dataSource.local_candidates.filter((function(e){return"house_representative"===e.position}))},governors:function(e){return e.dataSource.local_candidates.filter((function(e){return"governor"===e.position}))},viceGovernors:function(e){return e.dataSource.local_candidates.filter((function(e){return"vice_governor"===e.position}))},provSangMembers:function(e){return e.dataSource.local_candidates.filter((function(e){return"prov_saggunian_member"===e.position}))},mayors:function(e){return e.dataSource.local_candidates.filter((function(e){return"mayor"===e.position}))},viceMayors:function(e){return e.dataSource.local_candidates.filter((function(e){return"vice_mayor"===e.position}))},citySangMembers:function(e){return e.dataSource.local_candidates.filter((function(e){return"city_saggunian_member"===e.position}))},selectedLocale:function(e){return e.dataSource.localities.find((function(t){return t.id===e.search.citydist}))},myBallot:function(e){var t=e.dataSource.senator.filter((function(t){return e.ballot.senators.includes(t.id)})),r=e.provSangMembers.filter((function(t){return e.ballot.prov_sang_members.includes(t.id)})),n=e.citySangMembers.filter((function(t){return e.ballot.city_sang_members.includes(t.id)}));return{president:e.dataSource.president.find((function(t){return t.id===e.ballot.president})),vice_president:e.dataSource.vice_president.find((function(t){return t.id===e.ballot.vice_president})),senators:t,partylist:e.dataSource.partylist.find((function(t){return t.id===e.ballot.partylist})),house_representative:e.houseRepresentatives.find((function(t){return t.id===e.ballot.house_representative})),governor:e.governors.find((function(t){return t.id===e.ballot.governor})),vice_governor:e.viceGovernors.find((function(t){return t.id===e.ballot.vice_governor})),prov_sang_members:r,mayor:e.mayors.find((function(t){return t.id===e.ballot.mayor})),vice_mayor:e.viceMayors.find((function(t){return t.id===e.ballot.vice_mayor})),city_sang_members:n}}},persist:{enabled:!0}})},8851:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(3645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,'.bg-gray-100[data-v-bed2cfec]{background-color:#f7fafc;background-color:rgba(247,250,252,var(--tw-bg-opacity))}.border-gray-200[data-v-bed2cfec]{border-color:#edf2f7;border-color:rgba(237,242,247,var(--tw-border-opacity))}.text-gray-400[data-v-bed2cfec]{color:#cbd5e0;color:rgba(203,213,224,var(--tw-text-opacity))}.text-gray-500[data-v-bed2cfec]{color:#a0aec0;color:rgba(160,174,192,var(--tw-text-opacity))}.text-gray-600[data-v-bed2cfec]{color:#718096;color:rgba(113,128,150,var(--tw-text-opacity))}.text-gray-700[data-v-bed2cfec]{color:#4a5568;color:rgba(74,85,104,var(--tw-text-opacity))}.text-gray-900[data-v-bed2cfec]{color:#1a202c;color:rgba(26,32,44,var(--tw-text-opacity))}.browser-mockup[data-v-bed2cfec]{border-top:2em solid hsla(0,0%,90%,.7);height:100%;position:relative}.browser-mockup[data-v-bed2cfec]:before{background-color:#f44;border-radius:50%;box-shadow:0 0 0 2px #f44,1.5em 0 0 2px #9b3,3em 0 0 2px #fb5;content:"";display:block;height:.5em;left:1em;position:absolute;top:-1.25em;width:.5em}.browser-mockup>*[data-v-bed2cfec]{display:block}@media (prefers-color-scheme:dark){.dark\\:bg-gray-800[data-v-bed2cfec]{background-color:#2d3748;background-color:rgba(45,55,72,var(--tw-bg-opacity))}.dark\\:bg-gray-900[data-v-bed2cfec]{background-color:#1a202c;background-color:rgba(26,32,44,var(--tw-bg-opacity))}.dark\\:border-gray-700[data-v-bed2cfec]{border-color:#4a5568;border-color:rgba(74,85,104,var(--tw-border-opacity))}.dark\\:text-white[data-v-bed2cfec]{color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.dark\\:text-gray-400[data-v-bed2cfec]{color:#cbd5e0;color:rgba(203,213,224,var(--tw-text-opacity))}}',""]);const a=o},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);n&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),t.push(s))}},t}},5666:e=>{var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof m?t:m,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(e,t,r){var n=u;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return C()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===u)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=d(e,t,r);if("normal"===s.type){if(n=r.done?v:f,s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=v,r.method="throw",r.arg=s.arg)}}}(e,r,i),a}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var u="suspendedStart",f="suspendedYield",p="executing",v="completed",h={};function m(){}function y(){}function g(){}var b={};s(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(O([])));x&&x!==r&&n.call(x,a)&&(b=x);var _=g.prototype=m.prototype=Object.create(b);function S(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function k(e,t){function r(o,a,i,c){var s=d(e[o],e,a);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==typeof u&&n.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(u).then((function(e){l.value=e,i(l)}),(function(e){return r("throw",e,i,c)}))}c(s.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function L(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=d(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,h):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function O(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:C}}function C(){return{value:t,done:!0}}return y.prototype=g,s(_,"constructor",g),s(g,"constructor",y),y.displayName=s(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,c,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},S(k.prototype),s(k.prototype,i,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new k(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},S(_),s(_,c,"Generator"),s(_,a,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(s&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:O(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),h}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},3379:(e,t,r)=>{"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function c(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function s(e,t){for(var r={},n=[],o=0;o<e.length;o++){var a=e[o],s=t.base?a[0]+t.base:a[0],l=r[s]||0,d="".concat(s," ").concat(l);r[s]=l+1;var u=c(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:m(f,t),references:1}),n.push(d)}return n}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=u(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var v=null,h=0;function m(e,t){var r,n,o;if(t.singleton){var a=h++;r=v||(v=l(t)),n=f.bind(null,r,a,!1),o=f.bind(null,r,a,!0)}else r=l(t),n=p.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=c(r[n]);i[o].references--}for(var a=s(e,t),l=0;l<r.length;l++){var d=c(r[l]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}r=a}}}},3744:(e,t)=>{"use strict";t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[e,n]of t)r[e]=n;return r}},6783:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(821),o=r(5076),a=r(9038),i=(0,n.createStaticVNode)('<header><nav id="header" class="w-full z-30 top-0 text-white py-1 lg:py-4"><div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2"><div class="md:pl-4 flex lg:items-center"><a class="text-black no-underline hover:no-underline font-bold text-sm flex items-center" href="/"><img src="/images/SBGLOGO.png" alt="Sample Ballot Generator Logo" class="logo mr-5 ml-5 md:ml-0"><div class="flex flex-col"><span>Sample Ballot</span><span>Generator</span></div></a></div></div></nav></header>',1),c={class:"bg-white"},s={class:"container mx-auto px-8"},l={class:"w-full flex flex-col md:flex-row py-6 md:pb-0"},d=(0,n.createStaticVNode)('<div class="flex-1 flex md:mb-6 md:flex-row flex-col flex-wrap justify-center"><div class="flex md:footer-text-logo footer-text-logo-small"><div class="md:pr-5"><a href="/"><img src="/images/SBGLOGO.png" alt="Logo" class="logo ml-0"></a></div></div><div class="flex flex-col justify-center xl:items-start"><div class="flex flex-col flex-wrap items-center pt-5 md:pt-0"><a class="text-black no-underline hover:no-underline font-bold text-lg lg:text-md" href="/"> Sample Ballot Generator</a></div><div class="flex xl:footer-links justify-center md:justify-start"><ul class="list-reset mb-6 text-center md:text-justify"><li class="mt-2 inline-block mr-2 md:block md:mr-10 lg:mr-0 xl:mr-6"><a href="/privacy" class="font-light no-underline hover:underline text-gray-800 hover:text-orange-500">Privacy Policy</a></li></ul></div></div></div>',1),u={class:"flex-1 flex md:m-5 md:ml-5 md:mt-1 md:footer-kofi flex-col flex-wrap items-center"},f=(0,n.createElementVNode)("div",{class:"pb-3"},[(0,n.createElementVNode)("p",{class:"text-black text-center md:text-left text-xs"},[(0,n.createTextVNode)(" Hi! If this app helped you, "),(0,n.createElementVNode)("br"),(0,n.createTextVNode)(" maybe you can buy us coffee? ❤")])],-1),p={class:"flex"},v=[(0,n.createElementVNode)("img",{class:"h-6",src:"/images/Kofi_pixel_logo_with_text_dark.png",alt:"Kofi Logo"},null,-1)],h={components:{Link:a.rU}};const m=Object.assign(h,{setup:function(e){var t=(0,o.o)();return function(e,r){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[i,(0,n.createElementVNode)("main",null,[(0,n.renderSlot)(e.$slots,"default")]),(0,n.createElementVNode)("footer",c,[(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("div",l,[d,(0,n.createElementVNode)("div",u,[f,(0,n.createElementVNode)("div",p,[(0,n.createElementVNode)("a",{href:"https://ko-fi.com/codesandpaws",onClick:r[0]||(r[0]=(0,n.withModifiers)((function(e){(0,n.unref)(t).gtag("kofi_button_click",{},(function(){window.open("https://ko-fi.com/codesandpaws","_blank")}))}),["prevent"])),target:"blank"},v)])])])])])],64)}}})},5084:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(821),o=r(6783),a=r(9038),i=(0,n.createStaticVNode)('<section class="bg-white border-b py-10" data-v-bed2cfec><div class="container mx-auto md:px-8 max-w-6xl" data-v-bed2cfec><div class="pb-4" data-v-bed2cfec><h1 class="text-4xl font-bold text-center pb-10" data-v-bed2cfec>Privacy Policy</h1><p class="" data-v-bed2cfec>Updated: May 2022</p></div><div class="priv-spacing" data-v-bed2cfec><p data-v-bed2cfec>Codes &amp; Paws (“us”, “we”, or “our”) operates phballotgenerator.com (the “Website”, &quot;Site&quot;). This page informs you of our policies regarding the collection, use and disclosure of information about users of the Site. Your use of the Website constitutes your acceptance of the Privacy Policy.</p></div><div class="priv-spacing" data-v-bed2cfec><p data-v-bed2cfec>If at any time you do not agree to all terms and practices described in this Privacy Policy, you must cease all use of the Website and you must cease visiting the Website.</p></div><div class="priv-spacing" data-v-bed2cfec><h2 data-v-bed2cfec>Information that we collect</h2><p data-v-bed2cfec> We value your privacy. We <strong data-v-bed2cfec>DO NOT</strong> collect personally identifiable information that can be used to contact or identify you. </p><p data-v-bed2cfec> We DO NOT collect the names nor the ballot numbers of the candidates you select. </p></div><div class="priv-spacing" data-v-bed2cfec><h2 data-v-bed2cfec>Site Visit Information</h2><p data-v-bed2cfec> We use Google Analytics on our Website. Google Analytics provides additional information and data related to you, your device and your computer browser and your use of, and activity on, our Website. For information regarding Google’s privacy practices please visit Google’s site. </p></div><div class="priv-spacing" data-v-bed2cfec><h2 data-v-bed2cfec>Use of Information</h2><p data-v-bed2cfec>All information and data collected may be used for purposes of monitoring usage of the Site, and for purposes of improving the Site and its service offerings.</p></div><div class="priv-spacing" data-v-bed2cfec><h2 data-v-bed2cfec>Cookies</h2><p data-v-bed2cfec> Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer’s hard drive. Like many sites, we use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. If you choose to remove or reject cookies, this could affect the availability and functionality of the Site. </p></div><div class="priv-spacing" data-v-bed2cfec><h2 data-v-bed2cfec>Policy Changes</h2><p data-v-bed2cfec> We may update this Privacy Policy from time-to-time by posting a new version on to this page. </p></div><div class="priv-spacing" data-v-bed2cfec><h2 data-v-bed2cfec>Contact</h2><p data-v-bed2cfec>If you have any questions or concerns, please contact us at codesandpaws@gmail.com</p></div></div></section>',1),c={layout:o.Z};const s=Object.assign(c,{props:{canLogin:Boolean,canRegister:Boolean,laravelVersion:String,phpVersion:String},setup:function(e){return function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)((0,n.unref)(a.Fb),{title:"Privacy"}),i],64)}}});var l=r(3379),d=r.n(l),u=r(8851),f={insert:"head",singleton:!1};d()(u.Z,f);u.Z.locals;const p=(0,r(3744).Z)(s,[["__scopeId","data-v-bed2cfec"]])}}]);