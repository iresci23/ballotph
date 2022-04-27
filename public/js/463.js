(self.webpackChunk=self.webpackChunk||[]).push([[463],{7757:(t,e,r)=>{t.exports=r(5666)},5076:(t,e,r)=>{"use strict";r.d(e,{o:()=>c});var a=r(7757),n=r.n(a);function o(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function l(t,e,r,a,n,o,i){try{var l=t[o](i),c=l.value}catch(t){return void r(t)}l.done?e(c):Promise.resolve(c).then(a,n)}var c=(0,r(8262).Q_)("candidate",{state:function(){return{wizard:{lastSavedStep:"president",completedSteps:[],bottomOfPage:!1},dataSource:{president:[],vice_president:[],senator:[],partylist:[],localities:[],local_candidates:[]},ballot:{president:null,vice_president:null,senators:[],partylist:null,house_representative:null,governor:null,vice_governor:null,mayor:null,vice_mayor:null,prov_sang_members:[],city_sang_members:[]},votingLimits:{president:1,vicePresident:1,senators:12,partylist:1},search:{senator:"",partylist:"",province:"",citydist:""},showModal:!1,modalCandidate:[]}},actions:{fetchCandidates:function(t,e){var r,a=this;return(r=n().mark((function r(){var o;return n().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!(a.dataSource[t]&&0==a.dataSource[t].length||!0===e)){r.next=6;break}return r.next=4,window.axios.get("/json/candidates",{params:{position:t,locality_id:a.search.citydist}});case 4:o=r.sent,a.dataSource[t]=o.data;case 6:r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})),function(){var t=this,e=arguments;return new Promise((function(a,n){var o=r.apply(t,e);function i(t){l(o,a,n,i,c,"next",t)}function c(t){l(o,a,n,i,c,"throw",t)}i(void 0)}))})()},setLocalities:function(t){this.dataSource.localities=t},reset:function(t){this.wizard={lastSavedStep:"president",completedSteps:[]},this.ballot={president:null,vice_president:null,senators:[],partylist:null,house_representative:null,governor:null,vice_governor:null,mayor:null,vice_mayor:null,prov_sang_members:[],city_sang_members:[]},this.search={senator:"",partylist:"",province:"",citydist:""},this.gtag("start_over"),t()},select:function(t,e){var r=this.selectedLocale;if(["senators","prov_sang_members","city_sang_members"].includes(t)){var a=this.ballot[t];if(a.includes(e.id))return void a.splice(a.indexOf(e.id),1);this.ballot[t].push(e.id)}else this.ballot[t]&&this.ballot[t]===e.id?this.ballot[t]=null:this.ballot[t]=e.id;this.gtag("clicked_candidate",{id:e.id,name:e.name,ballot_number:e.ballot_number,position:e.position,partylist:e.partylist,locale_id:r&&r.id?r.id:"",locale_province:r&&r.province?r.province:"",locale_name:r&&r.city_dist?r.city_dist:""})},saveCompletedSteps:function(t,e){var r=o(new Set(t));this.wizard.completedSteps=r,this.wizard.lastSavedStep=e},getProfileUrl:function(t){if(t.profile_url)return t.profile_url;var e=t.position.replace(/_/g," ");return"https://www.google.com/search?q=".concat(t.name," candidate running for ").concat(e)},gtag:function(t,e,r){"undefined"!=typeof window&&window.gtag("event",t,e),r()}},getters:{presidents:function(t){return t.dataSource.president},vicePresidents:function(t){return t.dataSource.vice_president},senators:function(t){var e=t.dataSource.senator;return t.search.senator?e.filter((function(e){return t.search.senator.toLowerCase().split(" ").every((function(t){return e.name.toLowerCase().includes(t)}))})):e},partylist:function(t){var e=t.dataSource.partylist;return t.search.partylist?e.filter((function(e){return t.search.partylist.toLowerCase().split(" ").every((function(t){return e.name.toLowerCase().includes(t)}))})):e},provinces:function(t){var e=o(new Map(t.dataSource.localities.map((function(t){return[t.province,t]}))).values());return e.sort((function(t,e){return t.province.localeCompare(e.province)})),e},citydists:function(t){if(t.search.province){var e=t.dataSource.localities;return e.filter((function(e){return e.province===t.search.province}))}return[]},houseRepresentatives:function(t){return t.dataSource.local_candidates.filter((function(t){return"house_representative"===t.position}))},governors:function(t){return t.dataSource.local_candidates.filter((function(t){return"governor"===t.position}))},viceGovernors:function(t){return t.dataSource.local_candidates.filter((function(t){return"vice_governor"===t.position}))},provSangMembers:function(t){return t.dataSource.local_candidates.filter((function(t){return"prov_saggunian_member"===t.position}))},mayors:function(t){return t.dataSource.local_candidates.filter((function(t){return"mayor"===t.position}))},viceMayors:function(t){return t.dataSource.local_candidates.filter((function(t){return"vice_mayor"===t.position}))},citySangMembers:function(t){return t.dataSource.local_candidates.filter((function(t){return"city_saggunian_member"===t.position}))},selectedLocale:function(t){return t.dataSource.localities.find((function(e){return e.id===t.search.citydist}))},myBallot:function(t){var e=t.dataSource.senator.filter((function(e){return t.ballot.senators.includes(e.id)})),r=t.provSangMembers.filter((function(e){return t.ballot.prov_sang_members.includes(e.id)})),a=t.citySangMembers.filter((function(e){return t.ballot.city_sang_members.includes(e.id)}));return{president:t.dataSource.president.find((function(e){return e.id===t.ballot.president})),vice_president:t.dataSource.vice_president.find((function(e){return e.id===t.ballot.vice_president})),senators:e,partylist:t.dataSource.partylist.find((function(e){return e.id===t.ballot.partylist})),house_representative:t.houseRepresentatives.find((function(e){return e.id===t.ballot.house_representative})),governor:t.governors.find((function(e){return e.id===t.ballot.governor})),vice_governor:t.viceGovernors.find((function(e){return e.id===t.ballot.vice_governor})),prov_sang_members:r,mayor:t.mayors.find((function(e){return e.id===t.ballot.mayor})),vice_mayor:t.viceMayors.find((function(e){return e.id===t.ballot.vice_mayor})),city_sang_members:a}}},persist:{enabled:!0}})},7249:(t,e,r)=>{"use strict";r.d(e,{Z:()=>o});var a=r(3645),n=r.n(a)()((function(t){return t[1]}));n.push([t.id,'.bg-gray-100[data-v-6042043a]{background-color:#f7fafc;background-color:rgba(247,250,252,var(--tw-bg-opacity))}.border-gray-200[data-v-6042043a]{border-color:#edf2f7;border-color:rgba(237,242,247,var(--tw-border-opacity))}.text-gray-400[data-v-6042043a]{color:#cbd5e0;color:rgba(203,213,224,var(--tw-text-opacity))}.text-gray-500[data-v-6042043a]{color:#a0aec0;color:rgba(160,174,192,var(--tw-text-opacity))}.text-gray-600[data-v-6042043a]{color:#718096;color:rgba(113,128,150,var(--tw-text-opacity))}.text-gray-700[data-v-6042043a]{color:#4a5568;color:rgba(74,85,104,var(--tw-text-opacity))}.text-gray-900[data-v-6042043a]{color:#1a202c;color:rgba(26,32,44,var(--tw-text-opacity))}.browser-mockup[data-v-6042043a]{border-top:2em solid hsla(0,0%,90%,.7);height:100%;position:relative}.browser-mockup[data-v-6042043a]:before{background-color:#f44;border-radius:50%;box-shadow:0 0 0 2px #f44,1.5em 0 0 2px #9b3,3em 0 0 2px #fb5;content:"";display:block;height:.5em;left:1em;position:absolute;top:-1.25em;width:.5em}.browser-mockup>*[data-v-6042043a]{display:block}@media (prefers-color-scheme:dark){.dark\\:bg-gray-800[data-v-6042043a]{background-color:#2d3748;background-color:rgba(45,55,72,var(--tw-bg-opacity))}.dark\\:bg-gray-900[data-v-6042043a]{background-color:#1a202c;background-color:rgba(26,32,44,var(--tw-bg-opacity))}.dark\\:border-gray-700[data-v-6042043a]{border-color:#4a5568;border-color:rgba(74,85,104,var(--tw-border-opacity))}.dark\\:text-white[data-v-6042043a]{color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.dark\\:text-gray-400[data-v-6042043a]{color:#cbd5e0;color:rgba(203,213,224,var(--tw-text-opacity))}}',""]);const o=n},3645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,a){"string"==typeof t&&(t=[[null,t,""]]);var n={};if(a)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(n[i]=!0)}for(var l=0;l<t.length;l++){var c=[].concat(t[l]);a&&n[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),e.push(c))}},e}},5666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,a=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,a){var n=e&&e.prototype instanceof h?e:h,o=Object.create(n.prototype),i=new O(a||[]);return o._invoke=function(t,e,r){var a=d;return function(n,o){if(a===p)throw new Error("Generator is already running");if(a===m){if("throw"===n)throw o;return j()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var l=E(i,r);if(l){if(l===v)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(a===d)throw a=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a=p;var c=u(t,e,r);if("normal"===c.type){if(a=r.done?m:f,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a=m,r.method="throw",r.arg=c.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d="suspendedStart",f="suspendedYield",p="executing",m="completed",v={};function h(){}function g(){}function y(){}var b={};c(b,o,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(C([])));w&&w!==r&&a.call(w,o)&&(b=w);var _=y.prototype=h.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(n,o,i,l){var c=u(t[n],t,o);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==typeof d&&a.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,l)}),(function(t){r("throw",t,i,l)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,l)}))}l(c.arg)}var n;this._invoke=function(t,a){function o(){return new e((function(e,n){r(t,a,e,n)}))}return n=n?n.then(o,o):o()}}function E(t,r){var a=t.iterator[r.method];if(a===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var n=u(a,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,v;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function C(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(a.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return g.prototype=y,c(_,"constructor",y),c(y,"constructor",g),g.displayName=c(y,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,l,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},k(S.prototype),c(S.prototype,i,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,a,n,o){void 0===o&&(o=Promise);var i=new S(s(e,r,a,n),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},k(_),c(_,l,"Generator"),c(_,o,(function(){return this})),c(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var a=e.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}},t.values=C,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(a,n){return l.type="throw",l.arg=t,r.next=a,n&&(r.method="next",r.arg=e),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;N(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,a){return this.delegate={iterator:C(t),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},3379:(t,e,r)=>{"use strict";var a,n=function(){return void 0===a&&(a=Boolean(window&&document&&document.all&&!window.atob)),a},o=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}(),i=[];function l(t){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===t){e=r;break}return e}function c(t,e){for(var r={},a=[],n=0;n<t.length;n++){var o=t[n],c=e.base?o[0]+e.base:o[0],s=r[c]||0,u="".concat(c," ").concat(s);r[c]=s+1;var d=l(u),f={css:o[1],media:o[2],sourceMap:o[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:h(f,e),references:1}),a.push(u)}return a}function s(t){var e=document.createElement("style"),a=t.attributes||{};if(void 0===a.nonce){var n=r.nc;n&&(a.nonce=n)}if(Object.keys(a).forEach((function(t){e.setAttribute(t,a[t])})),"function"==typeof t.insert)t.insert(e);else{var i=o(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var u,d=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function f(t,e,r,a){var n=r?"":a.media?"@media ".concat(a.media," {").concat(a.css,"}"):a.css;if(t.styleSheet)t.styleSheet.cssText=d(e,n);else{var o=document.createTextNode(n),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}function p(t,e,r){var a=r.css,n=r.media,o=r.sourceMap;if(n?t.setAttribute("media",n):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=a;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(a))}}var m=null,v=0;function h(t,e){var r,a,n;if(e.singleton){var o=v++;r=m||(m=s(e)),a=f.bind(null,r,o,!1),n=f.bind(null,r,o,!0)}else r=s(e),a=p.bind(null,r,e),n=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return a(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;a(t=e)}else n()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=n());var r=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var a=0;a<r.length;a++){var n=l(r[a]);i[n].references--}for(var o=c(t,e),s=0;s<r.length;s++){var u=l(r[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}r=o}}}},3744:(t,e)=>{"use strict";e.Z=(t,e)=>{const r=t.__vccOpts||t;for(const[t,a]of e)r[t]=a;return r}},6783:(t,e,r)=>{"use strict";r.d(e,{Z:()=>h});var a=r(821),n=r(5076),o=r(9038),i=(0,a.createStaticVNode)('<header><nav id="header" class="w-full z-30 top-0 text-white py-1 lg:py-4"><div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2"><div class="md:pl-4 flex lg:items-center"><a class="text-black no-underline hover:no-underline font-bold text-sm flex items-center" href="/"><img src="/images/SBGLOGO.png" alt="Sample Ballot Generator Logo" class="logo mr-5 ml-5 md:ml-0"><div class="flex flex-col"><span>Sample Ballot</span><span>Generator</span></div></a></div></div></nav></header>',1),l={class:"bg-white"},c={class:"container mx-auto px-8"},s={class:"w-full flex flex-col md:flex-row py-6 md:pb-0"},u=(0,a.createStaticVNode)('<div class="flex-1 flex md:mb-6 md:flex-row flex-col flex-wrap justify-center"><div class="flex md:footer-text-logo footer-text-logo-small"><div class="md:pr-5"><a href="/"><img src="/images/SBGLOGO.png" alt="Logo" class="logo ml-0"></a></div></div><div class="flex flex-col justify-center xl:items-start"><div class="flex flex-col flex-wrap items-center pt-5 md:pt-0"><a class="text-black no-underline hover:no-underline font-bold text-lg lg:text-md" href="/"> Sample Ballot Generator</a></div><div class="flex xl:footer-links justify-center md:justify-start"><ul class="list-reset mb-6 text-center md:text-justify"><li class="mt-2 inline-block mr-2 md:block md:mr-10 lg:mr-0 xl:mr-6"><a href="/privacy" class="font-light no-underline hover:underline text-gray-800 hover:text-orange-500">Privacy Policy</a></li></ul></div></div></div>',1),d={class:"flex-1 flex md:m-5 md:ml-5 md:mt-1 md:footer-kofi flex-col flex-wrap items-center"},f=(0,a.createElementVNode)("div",{class:"pb-3"},[(0,a.createElementVNode)("p",{class:"text-black text-center md:text-left text-xs"},[(0,a.createTextVNode)(" Hi! If this app helped you, "),(0,a.createElementVNode)("br"),(0,a.createTextVNode)(" maybe you can buy us coffee? ❤")])],-1),p={class:"flex"},m=[(0,a.createElementVNode)("img",{class:"h-6",src:"/images/Kofi_pixel_logo_with_text_dark.png",alt:"Kofi Logo"},null,-1)],v={components:{Link:o.rU}};const h=Object.assign(v,{setup:function(t){var e=(0,n.o)();return function(t,r){return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[i,(0,a.createElementVNode)("main",null,[(0,a.renderSlot)(t.$slots,"default")]),(0,a.createElementVNode)("footer",l,[(0,a.createElementVNode)("div",c,[(0,a.createElementVNode)("div",s,[u,(0,a.createElementVNode)("div",d,[f,(0,a.createElementVNode)("div",p,[(0,a.createElementVNode)("a",{href:"https://ko-fi.com/codesandpaws",onClick:r[0]||(r[0]=(0,a.withModifiers)((function(t){(0,a.unref)(e).gtag("kofi_button_click",{},(function(){window.open("https://ko-fi.com/codesandpaws","_blank")}))}),["prevent"])),target:"blank"},m)])])])])])],64)}}})},9463:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>w});var a=r(821),n=r(6783),o=r(9038),i=r(5076),l=function(t){return(0,a.pushScopeId)("data-v-6042043a"),t=t(),(0,a.popScopeId)(),t},c={class:"container mx-auto md:h-screen"},s={class:"text-center px-3 lg:px-0"},u=l((function(){return(0,a.createElementVNode)("h1",{class:"my-4 text-2xl md:text-3xl lg:text-5xl font-black leading-tight"}," Election Ready ka na ba? ",-1)})),d=l((function(){return(0,a.createElementVNode)("div",{class:"leading-normal text-gray-800 text-base md:text-xl lg:text-2xl mt-8 mb-8"},[(0,a.createElementVNode)("p",{class:"font-medium p-2"}," Hindi na pwede ang hula-hula! "),(0,a.createElementVNode)("p",null," Mag generate ng sample ballot para tama ang mailagay sa balota. Tara na! ")],-1)})),f=l((function(){return(0,a.createElementVNode)("button",{id:"navAction",class:"mx-auto lg:mx-0 hover:underline text-black font-bold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 button-gradient drop-shadow-md"}," Generate My Ballot ",-1)})),p=l((function(){return(0,a.createElementVNode)("div",{class:"flex items-center w-full mx-auto content-end"},[(0,a.createElementVNode)("div",{class:"browser-mockup flex flex-1 m-6 md:px-0 md:m-12 bg-white w-1/2 rounded shadow-xl"},[(0,a.createElementVNode)("img",{class:"max-h-44 md:max-h-full",src:"/images/Sample_Ballot_Comelec.png",alt:"Sample Ballot"})])],-1)})),m=(0,a.createStaticVNode)('<section class="bg-white border-b pt-10 xl:pt-72 lg:pt-40" data-v-6042043a><div class="container mx-auto flex flex-wrap items-center justify-between pb-12" data-v-6042043a><h2 class="w-full my-2 lg:text-3xl text-2xl font-black leading-tight text-center text-gray-800 md:pt-4 xl:pt-2" data-v-6042043a> Paano gamitin ang Generator </h2><div class="w-full mb-4" data-v-6042043a><div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" data-v-6042043a></div></div><div class="w-full" data-v-6042043a><div class="p-5 pb-0" data-v-6042043a><p class="text-center lg:text-2xl text-xl pb-4" data-v-6042043a> Hindi na kailangan mag sign-up. <strong data-v-6042043a>Libre &#39;to!</strong></p><p class="text-center lg:text-2xl text-xl" data-v-6042043a> Madali lang mag generate ng personalized sample ballot with these easy steps: </p></div><div class="w-full p-5 flex justify-center" data-v-6042043a><ul class="list-decimal md:max-w-3xl text-left" data-v-6042043a><li class="p-3 text-lg" data-v-6042043a>I-click ang &quot;Create My Ballot&quot; button para mag simula.</li><img class="md:max-w-2xl mx-auto" src="/images/step-one.png" alt="" data-v-6042043a><li class="p-3 text-lg" data-v-6042043a>Piliin ang kandidatong gusto mong iboto at i-click ang &quot;Next&quot; button.</li><img class="md:max-w-2xl mx-auto" src="/images/step-two.png" alt="" data-v-6042043a><li class="p-3 text-lg" data-v-6042043a>I-check ang listahan at i-click ang “Download” button para ma-save sa&#39;yong device ang personalized sample ballot mo.</li><img class="md:max-w-2xl mx-auto" src="/images/step-three.png" alt="" data-v-6042043a><li class="p-3 text-lg" data-v-6042043a>At &#39;yun na! <strong data-v-6042043a>Mayroon ka ng sample ballot para sa May 9!</strong></li></ul></div></div></div></section><section class="gradient border-b py-8" data-v-6042043a><div class="container max-w-5xl mx-auto m-8" data-v-6042043a><h2 class="w-full my-2 text-2xl md:text-4xl font-black leading-tight text-center text-gray-800" data-v-6042043a> Useful Links </h2><div class="w-full mb-4" data-v-6042043a><div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" data-v-6042043a></div><div class="usefullinksdiv" data-v-6042043a><a class="my-4 md:mx-4" href="https://comelec.gov.ph/" target="_blank" data-v-6042043a><img class="md:usefullinksimg" src="/images/COMELECLOGO.png" alt="COMELEC Logo" data-v-6042043a></a><a class="my-4 md:mx-4" href="https://eboto.ph/" target="_blank" data-v-6042043a><img class="md:usefullinksimg" src="/images/EBOTOLOGO.svg" alt="eBoto Logo" data-v-6042043a></a><a class="my-4 md:mx-4" href="https://votepilipinas.com/" target="_blank" data-v-6042043a><img class="md:usefullinksimg" src="/images/VOTEPILIPINASLOGO.png" alt="Vote Pilipinas Logo" data-v-6042043a></a><a class="my-4 md:mx-4" href="https://voterverifier.comelec.gov.ph/voter_precinct" target="_blank" data-v-6042043a><img class="md:usefullinksimg" src="/images/precinct4.png" alt="Precinct Finder" data-v-6042043a></a></div></div><div class="flex flex-col items-center text-justify p-1" data-v-6042043a><h3 class="font-bold" data-v-6042043a>Disclaimer:</h3><p class="py-4" data-v-6042043a> We are not affiliated, associated, authorized or in any way officially connected with the <strong data-v-6042043a>Commissions on Elections (COMELEC)</strong>. The official COMELEC website can be found at <a class="hover:underline" href="https://comelec.gov.ph/" target="_blank" data-v-6042043a>https://comelec.gov.ph/</a>. </p><p data-v-6042043a> This website aims to provide convenience to Filipino voters for the upcoming 2022 Elections. </p></div></div></section>',2),v={layout:n.Z};const h=Object.assign(v,{setup:function(t){var e=(0,i.o)();return function(t,r){return(0,a.openBlock)(),(0,a.createElementBlock)(a.Fragment,null,[(0,a.createVNode)((0,a.unref)(o.Fb),{title:"Home"}),(0,a.createElementVNode)("div",c,[(0,a.createElementVNode)("div",s,[u,d,(0,a.createVNode)((0,a.unref)(o.rU),{href:"/generator",onClick:r[0]||(r[0]=(0,a.withModifiers)((function(t){return(0,a.unref)(e).gtag("home_generate_button_click")}),["prevent"]))},{default:(0,a.withCtx)((function(){return[f]})),_:1})]),p]),m],64)}}});var g=r(3379),y=r.n(g),b=r(7249),x={insert:"head",singleton:!1};y()(b.Z,x);b.Z.locals;const w=(0,r(3744).Z)(h,[["__scopeId","data-v-6042043a"]])}}]);