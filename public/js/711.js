(self.webpackChunk=self.webpackChunk||[]).push([[711],{7757:(e,t,r)=>{e.exports=r(5666)},5076:(e,t,r)=>{"use strict";r.d(t,{o:()=>c});var a=r(7757),n=r.n(a);function o(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function l(e,t,r,a,n,o,i){try{var l=e[o](i),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(a,n)}var c=(0,r(8262).Q_)("candidate",{state:function(){return{wizard:{lastSavedStep:"president",completedSteps:[],bottomOfPage:!1,loading:!1},dataSource:{president:[],vice_president:[],senator:[],partylist:[],localities:[],local_candidates:[]},ballot:{president:null,vice_president:null,senators:[],partylist:null,house_representative:null,governor:null,vice_governor:null,mayor:null,vice_mayor:null,prov_sang_members:[],city_sang_members:[]},votingLimits:{president:1,vicePresident:1,senators:12,partylist:1},search:{senator:"",partylist:"",province:"",citydist:""},showModal:!1,modalCandidate:[]}},actions:{fetchCandidates:function(e,t){var r,a=this;return(r=n().mark((function r(){var o;return n().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!(a.dataSource[e]&&0==a.dataSource[e].length||!0===t)){r.next=6;break}return r.next=4,window.axios.get("/json/candidates",{params:{position:e,locality_id:a.search.citydist}});case 4:o=r.sent,a.dataSource[e]=o.data;case 6:r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})),function(){var e=this,t=arguments;return new Promise((function(a,n){var o=r.apply(e,t);function i(e){l(o,a,n,i,c,"next",e)}function c(e){l(o,a,n,i,c,"throw",e)}i(void 0)}))})()},setLocalities:function(e){this.dataSource.localities=e},reset:function(e){this.wizard={lastSavedStep:"president",completedSteps:[]},this.ballot={president:null,vice_president:null,senators:[],partylist:null,house_representative:null,governor:null,vice_governor:null,mayor:null,vice_mayor:null,prov_sang_members:[],city_sang_members:[]},this.search={senator:"",partylist:"",province:"",citydist:""},this.gtag("start_over"),e()},select:function(e,t){var r=this.selectedLocale;if(["senators","prov_sang_members","city_sang_members"].includes(e)){var a=this.ballot[e];if(a.includes(t.id))return void a.splice(a.indexOf(t.id),1);this.ballot[e].push(t.id)}else this.ballot[e]&&this.ballot[e]===t.id?this.ballot[e]=null:this.ballot[e]=t.id;this.gtag("clicked_candidate",{id:t.id,name:t.name,ballot_number:t.ballot_number,position:t.position,partylist:t.partylist,locale_id:r&&r.id?r.id:"",locale_province:r&&r.province?r.province:"",locale_name:r&&r.city_dist?r.city_dist:""})},saveCompletedSteps:function(e,t){var r=o(new Set(e));this.wizard.completedSteps=r,this.wizard.lastSavedStep=t},getProfileUrl:function(e){if(e.profile_url)return e.profile_url;var t=e.position.replace(/_/g," ");return"https://www.google.com/search?q=".concat(e.name," candidate running for ").concat(t)},gtag:function(e,t,r){"undefined"!=typeof window&&window.gtag("event",e,t),r&&r()}},getters:{presidents:function(e){return e.dataSource.president},vicePresidents:function(e){return e.dataSource.vice_president},senators:function(e){var t=e.dataSource.senator;return e.search.senator?t.filter((function(t){return e.search.senator.toLowerCase().split(" ").every((function(e){return t.name.toLowerCase().includes(e)}))})):t},partylist:function(e){var t=e.dataSource.partylist;return e.search.partylist?t.filter((function(t){return e.search.partylist.toLowerCase().split(" ").every((function(e){return t.name.toLowerCase().includes(e)}))})):t},provinces:function(e){var t=o(new Map(e.dataSource.localities.map((function(e){return[e.province,e]}))).values());return t.sort((function(e,t){return e.province.localeCompare(t.province)})),t},citydists:function(e){if(e.search.province){var t=e.dataSource.localities;return t.filter((function(t){return t.province===e.search.province}))}return[]},houseRepresentatives:function(e){return e.dataSource.local_candidates.filter((function(e){return"house_representative"===e.position}))},governors:function(e){return e.dataSource.local_candidates.filter((function(e){return"governor"===e.position}))},viceGovernors:function(e){return e.dataSource.local_candidates.filter((function(e){return"vice_governor"===e.position}))},provSangMembers:function(e){return e.dataSource.local_candidates.filter((function(e){return"prov_saggunian_member"===e.position}))},mayors:function(e){return e.dataSource.local_candidates.filter((function(e){return"mayor"===e.position}))},viceMayors:function(e){return e.dataSource.local_candidates.filter((function(e){return"vice_mayor"===e.position}))},citySangMembers:function(e){return e.dataSource.local_candidates.filter((function(e){return"city_saggunian_member"===e.position}))},selectedLocale:function(e){return e.dataSource.localities.find((function(t){return t.id===e.search.citydist}))},myBallot:function(e){var t=e.dataSource.senator.filter((function(t){return e.ballot.senators.includes(t.id)})),r=e.provSangMembers.filter((function(t){return e.ballot.prov_sang_members.includes(t.id)})),a=e.citySangMembers.filter((function(t){return e.ballot.city_sang_members.includes(t.id)}));return{president:e.dataSource.president.find((function(t){return t.id===e.ballot.president})),vice_president:e.dataSource.vice_president.find((function(t){return t.id===e.ballot.vice_president})),senators:t,partylist:e.dataSource.partylist.find((function(t){return t.id===e.ballot.partylist})),house_representative:e.houseRepresentatives.find((function(t){return t.id===e.ballot.house_representative})),governor:e.governors.find((function(t){return t.id===e.ballot.governor})),vice_governor:e.viceGovernors.find((function(t){return t.id===e.ballot.vice_governor})),prov_sang_members:r,mayor:e.mayors.find((function(t){return t.id===e.ballot.mayor})),vice_mayor:e.viceMayors.find((function(t){return t.id===e.ballot.vice_mayor})),city_sang_members:a}}},persist:{enabled:!0}})},5679:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var a=r(3645),n=r.n(a)()((function(e){return e[1]}));n.push([e.id,'.bg-gray-100[data-v-47d5ed4a]{background-color:#f7fafc;background-color:rgba(247,250,252,var(--tw-bg-opacity))}.border-gray-200[data-v-47d5ed4a]{border-color:#edf2f7;border-color:rgba(237,242,247,var(--tw-border-opacity))}.text-gray-400[data-v-47d5ed4a]{color:#cbd5e0;color:rgba(203,213,224,var(--tw-text-opacity))}.text-gray-500[data-v-47d5ed4a]{color:#a0aec0;color:rgba(160,174,192,var(--tw-text-opacity))}.text-gray-600[data-v-47d5ed4a]{color:#718096;color:rgba(113,128,150,var(--tw-text-opacity))}.text-gray-700[data-v-47d5ed4a]{color:#4a5568;color:rgba(74,85,104,var(--tw-text-opacity))}.text-gray-900[data-v-47d5ed4a]{color:#1a202c;color:rgba(26,32,44,var(--tw-text-opacity))}.browser-mockup[data-v-47d5ed4a]{border-top:2em solid hsla(0,0%,90%,.7);height:100%;position:relative}.browser-mockup[data-v-47d5ed4a]:before{background-color:#f44;border-radius:50%;box-shadow:0 0 0 2px #f44,1.5em 0 0 2px #9b3,3em 0 0 2px #fb5;content:"";display:block;height:.5em;left:1em;position:absolute;top:-1.25em;width:.5em}.browser-mockup>*[data-v-47d5ed4a]{display:block}@media (prefers-color-scheme:dark){.dark\\:bg-gray-800[data-v-47d5ed4a]{background-color:#2d3748;background-color:rgba(45,55,72,var(--tw-bg-opacity))}.dark\\:bg-gray-900[data-v-47d5ed4a]{background-color:#1a202c;background-color:rgba(26,32,44,var(--tw-bg-opacity))}.dark\\:border-gray-700[data-v-47d5ed4a]{border-color:#4a5568;border-color:rgba(74,85,104,var(--tw-border-opacity))}.dark\\:text-white[data-v-47d5ed4a]{color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.dark\\:text-gray-400[data-v-47d5ed4a]{color:#cbd5e0;color:rgba(203,213,224,var(--tw-text-opacity))}}',""]);const o=n},3645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,a){"string"==typeof e&&(e=[[null,e,""]]);var n={};if(a)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);a&&n[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},5666:e=>{var t=function(e){"use strict";var t,r=Object.prototype,a=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var n=t&&t.prototype instanceof h?t:h,o=Object.create(n.prototype),i=new O(a||[]);return o._invoke=function(e,t,r){var a=u;return function(n,o){if(a===p)throw new Error("Generator is already running");if(a===m){if("throw"===n)throw o;return j()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var l=E(i,r);if(l){if(l===v)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===u)throw a=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=p;var c=d(e,t,r);if("normal"===c.type){if(a=r.done?m:f,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=m,r.method="throw",r.arg=c.arg)}}}(e,r,i),o}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=s;var u="suspendedStart",f="suspendedYield",p="executing",m="completed",v={};function h(){}function g(){}function y(){}var b={};c(b,o,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(C([])));w&&w!==r&&a.call(w,o)&&(b=w);var _=y.prototype=h.prototype=Object.create(b);function k(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function r(n,o,i,l){var c=d(e[n],e,o);if("throw"!==c.type){var s=c.arg,u=s.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(u).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}var n;this._invoke=function(e,a){function o(){return new t((function(t,n){r(e,a,t,n)}))}return n=n?n.then(o,o):o()}}function E(e,r){var a=e.iterator[r.method];if(a===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,E(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var n=d(a,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,v;var o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function C(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function r(){for(;++n<e.length;)if(a.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:t,done:!0}}return g.prototype=y,c(_,"constructor",y),c(y,"constructor",g),g.displayName=c(y,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,l,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},k(S.prototype),c(S.prototype,i,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var i=new S(s(t,r,a,n),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(_),c(_,l,"Generator"),c(_,o,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=C,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(a,n){return l.type="throw",l.arg=e,r.next=a,n&&(r.method="next",r.arg=t),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;N(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,a){return this.delegate={iterator:C(e),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},3379:(e,t,r)=>{"use strict";var a,n=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function l(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function c(e,t){for(var r={},a=[],n=0;n<e.length;n++){var o=e[n],c=t.base?o[0]+t.base:o[0],s=r[c]||0,d="".concat(c," ").concat(s);r[c]=s+1;var u=l(d),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==u?(i[u].references++,i[u].updater(f)):i.push({identifier:d,updater:h(f,t),references:1}),a.push(d)}return a}function s(e){var t=document.createElement("style"),a=e.attributes||{};if(void 0===a.nonce){var n=r.nc;n&&(a.nonce=n)}if(Object.keys(a).forEach((function(e){t.setAttribute(e,a[e])})),"function"==typeof e.insert)e.insert(t);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,r,a){var n=r?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(e.styleSheet)e.styleSheet.cssText=u(t,n);else{var o=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function p(e,t,r){var a=r.css,n=r.media,o=r.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}var m=null,v=0;function h(e,t){var r,a,n;if(t.singleton){var o=v++;r=m||(m=s(t)),a=f.bind(null,r,o,!1),n=f.bind(null,r,o,!0)}else r=s(t),a=p.bind(null,r,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return a(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;a(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var r=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var a=0;a<r.length;a++){var n=l(r[a]);i[n].references--}for(var o=c(e,t),s=0;s<r.length;s++){var d=l(r[s]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}r=o}}}},3744:(e,t)=>{"use strict";t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[e,a]of t)r[e]=a;return r}},6783:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var a=r(821),n=r(5076),o=r(9038),i=(0,a.createStaticVNode)('<header><nav id="header" class="w-full z-30 top-0 text-white py-1 lg:py-4"><div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2"><div class="md:pl-4 flex lg:items-center"><a class="text-black no-underline hover:no-underline font-bold text-sm flex items-center" href="/"><img src="/images/SBGLOGO.png" alt="Sample Ballot Generator Logo" class="logo mr-5 ml-5 md:ml-0"><div class="flex flex-col"><span>Sample Ballot</span><span>Generator</span></div></a></div></div></nav></header>',1),l={class:"bg-white"},c={class:"container mx-auto px-8"},s={class:"w-full flex flex-col md:flex-row py-6 md:pb-0"},d=(0,a.createStaticVNode)('<div class="flex-1 flex md:mb-6 md:flex-row flex-col flex-wrap justify-center"><div class="flex md:footer-text-logo footer-text-logo-small"><div class="md:pr-5"><a href="/"><img src="/images/SBGLOGO.png" alt="Logo" class="logo ml-0"></a></div></div><div class="flex flex-col justify-center xl:items-start"><div class="flex flex-col flex-wrap items-center pt-5 md:pt-0"><a class="text-black no-underline hover:no-underline font-bold text-lg lg:text-md" href="/"> Sample Ballot Generator</a></div><div class="flex xl:footer-links justify-center md:justify-start"><ul class="list-reset mb-6 text-center md:text-justify"><li class="mt-2 inline-block mr-2 md:block md:mr-10 lg:mr-0 xl:mr-6"><a href="/privacy" class="font-light no-underline hover:underline text-gray-800 hover:text-orange-500">Privacy Policy</a></li></ul></div></div></div>',1),u={class:"flex-1 flex md:m-5 md:ml-5 md:mt-1 md:footer-kofi flex-col flex-wrap items-center"},f=(0,a.createElementVNode)("div",{class:"pb-3"},[(0,a.createElementVNode)("p",{class:"text-black text-center md:text-left text-xs"},[(0,a.createTextVNode)(" Hi! If this app helped you, "),(0,a.createElementVNode)("br"),(0,a.createTextVNode)(" maybe you can buy us coffee? ❤")])],-1),p={class:"flex"},m=[(0,a.createElementVNode)("img",{class:"h-6",src:"/images/Kofi_pixel_logo_with_text_dark.png",alt:"Kofi Logo"},null,-1)],v={components:{Link:o.rU}};const h=Object.assign(v,{setup:function(e){var t=(0,n.o)();return function(e,r){return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[i,(0,a.createElementVNode)("main",null,[(0,a.renderSlot)(e.$slots,"default")]),(0,a.createElementVNode)("footer",l,[(0,a.createElementVNode)("div",c,[(0,a.createElementVNode)("div",s,[d,(0,a.createElementVNode)("div",u,[f,(0,a.createElementVNode)("div",p,[(0,a.createElementVNode)("a",{href:"https://ko-fi.com/codesandpaws",onClick:r[0]||(r[0]=(0,a.withModifiers)((function(e){(0,a.unref)(t).gtag("kofi_button_click",{},(function(){window.open("https://ko-fi.com/codesandpaws","_blank")}))}),["prevent"])),target:"blank"},m)])])])])])],64)}}})},8711:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>w});var a=r(821),n=r(6783),o=r(9038),i=r(5076),l=function(e){return(0,a.pushScopeId)("data-v-47d5ed4a"),e=e(),(0,a.popScopeId)(),e},c={class:"container mx-auto md:h-screen"},s={class:"text-center px-3 lg:px-0"},d=l((function(){return(0,a.createElementVNode)("h1",{class:"my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight"}," Election Ready ka na ba? ",-1)})),u=l((function(){return(0,a.createElementVNode)("div",{class:"leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mt-8 mb-8"},[(0,a.createElementVNode)("p",{class:"font-medium p-2"}," Hindi na pwede ang hula-hula! "),(0,a.createElementVNode)("p",null," Mag generate ng sample ballot para tama ang mailagay sa balota. Tara na! ")],-1)})),f=l((function(){return(0,a.createElementVNode)("button",{id:"navAction",class:"mx-auto lg:mx-0 hover:underline text-black font-bold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 button-gradient drop-shadow-md"}," Generate My Ballot ",-1)})),p=l((function(){return(0,a.createElementVNode)("div",{class:"flex items-center w-full mx-auto content-end"},[(0,a.createElementVNode)("div",{class:"browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl"},[(0,a.createElementVNode)("img",{class:"max-h-44 md:max-h-full",src:"/images/Sample_Ballot_Comelec.png",alt:"Sample Ballot"})])],-1)})),m=(0,a.createStaticVNode)('<section class="bg-white border-b pt-10 xl:pt-72 lg:pt-40" data-v-47d5ed4a><div class="container mx-auto flex flex-wrap items-center justify-between pb-12" data-v-47d5ed4a><h2 class="w-full my-2 lg:text-3xl text-2xl font-black leading-tight text-center text-gray-800 md:pt-4 xl:pt-2" data-v-47d5ed4a> Paano gamitin ang Generator </h2><div class="w-full mb-4" data-v-47d5ed4a><div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" data-v-47d5ed4a></div></div><div class="w-full" data-v-47d5ed4a><div class="p-5 pb-0" data-v-47d5ed4a><p class="text-center lg:text-2xl text-xl pb-4" data-v-47d5ed4a> Hindi na kailangan mag sign-up. <strong data-v-47d5ed4a>Libre &#39;to!</strong></p><p class="text-center lg:text-2xl text-xl" data-v-47d5ed4a> Madali lang mag generate ng personalized sample ballot with these easy steps: </p></div><div class="w-full p-5 flex justify-center" data-v-47d5ed4a><ul class="list-decimal md:max-w-3xl text-left" data-v-47d5ed4a><li class="p-3 text-lg" data-v-47d5ed4a>I-click ang &quot;Generate My Ballot&quot; button para mag simula.</li><img class="md:max-w-2xl mx-auto" src="/images/step-one.png" alt="" data-v-47d5ed4a><li class="p-3 text-lg" data-v-47d5ed4a>Piliin ang kandidatong gusto mong iboto at i-click ang &quot;Next&quot; button.</li><img class="md:max-w-2xl mx-auto" src="/images/step-two.png" alt="" data-v-47d5ed4a><li class="p-3 text-lg" data-v-47d5ed4a>I-check ang listahan at i-click ang “Download” button para ma-save sa&#39;yong device ang personalized sample ballot mo.</li><img class="md:max-w-2xl mx-auto" src="/images/step-three.png" alt="" data-v-47d5ed4a><li class="p-3 text-lg" data-v-47d5ed4a>At &#39;yun na! <strong data-v-47d5ed4a>Mayroon ka ng sample ballot para sa May 9!</strong></li></ul></div></div></div></section><section class="gradient border-b py-8" data-v-47d5ed4a><div class="container max-w-5xl mx-auto m-8" data-v-47d5ed4a><h2 class="w-full my-2 text-2xl md:text-4xl font-black leading-tight text-center text-gray-800" data-v-47d5ed4a> Useful Links </h2><div class="w-full mb-4" data-v-47d5ed4a><div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" data-v-47d5ed4a></div><div class="usefullinksdiv" data-v-47d5ed4a><a class="my-4 md:mx-4" href="https://comelec.gov.ph/" target="_blank" data-v-47d5ed4a><img class="md:usefullinksimg" src="/images/COMELECLOGO.png" alt="COMELEC Logo" data-v-47d5ed4a></a><a class="my-4 md:mx-4" href="https://eboto.ph/" target="_blank" data-v-47d5ed4a><img class="md:usefullinksimg" src="/images/EBOTOLOGO.svg" alt="eBoto Logo" data-v-47d5ed4a></a><a class="my-4 md:mx-4" href="https://votepilipinas.com/" target="_blank" data-v-47d5ed4a><img class="md:usefullinksimg" src="/images/VOTEPILIPINASLOGO.png" alt="Vote Pilipinas Logo" data-v-47d5ed4a></a><a class="my-4 md:mx-4" href="https://voterverifier.comelec.gov.ph/voter_precinct" target="_blank" data-v-47d5ed4a><img class="md:usefullinksimg" src="/images/precinct4.png" alt="Precinct Finder" data-v-47d5ed4a></a></div></div><div class="flex flex-col items-center text-justify p-1" data-v-47d5ed4a><h3 class="font-bold" data-v-47d5ed4a>Disclaimer:</h3><p class="py-4" data-v-47d5ed4a> We are not affiliated, associated, authorized or in any way officially connected with the <strong data-v-47d5ed4a>Commissions on Elections (COMELEC)</strong>. The official COMELEC website can be found at <a class="hover:underline" href="https://comelec.gov.ph/" target="_blank" data-v-47d5ed4a>https://comelec.gov.ph/</a>. </p><p data-v-47d5ed4a> This website aims to provide convenience to Filipino voters for the upcoming 2022 Elections. </p></div></div></section>',2),v={layout:n.Z};const h=Object.assign(v,{setup:function(e){var t=(0,i.o)();return function(e,r){return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)((0,a.unref)(o.Fb),{title:"Home"}),(0,a.createElementVNode)("div",c,[(0,a.createElementVNode)("div",s,[d,u,(0,a.createVNode)((0,a.unref)(o.rU),{href:"/generator",onClick:r[0]||(r[0]=(0,a.withModifiers)((function(e){return(0,a.unref)(t).gtag("home_generate_button_click")}),["prevent"]))},{default:(0,a.withCtx)((function(){return[f]})),_:1})]),p]),m],64)}}});var g=r(3379),y=r.n(g),b=r(5679),x={insert:"head",singleton:!1};y()(b.Z,x);b.Z.locals;const w=(0,r(3744).Z)(h,[["__scopeId","data-v-47d5ed4a"]])}}]);