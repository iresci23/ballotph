(self.webpackChunk=self.webpackChunk||[]).push([[974],{7757:(t,e,r)=>{t.exports=r(5666)},5076:(t,e,r)=>{"use strict";r.d(e,{o:()=>l});var n=r(7757),o=r.n(n);function a(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e,r,n,o,a,i){try{var c=t[a](i),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}var l=(0,r(8262).Q_)("candidate",{state:function(){return{wizard:{lastSavedStep:"president",completedSteps:[],bottomOfPage:!1,loading:!1},dataSource:{president:[],vice_president:[],senator:[],partylist:[],localities:[],local_candidates:[]},ballot:{president:null,vice_president:null,senators:[],partylist:null,house_representative:null,governor:null,vice_governor:null,mayor:null,vice_mayor:null,prov_sang_members:[],city_sang_members:[]},votingLimits:{president:1,vicePresident:1,senators:12,partylist:1},search:{senator:"",partylist:"",province:"",citydist:""},showModal:!1,modalCandidate:[]}},actions:{fetchCandidates:function(t,e){var r,n=this;return(r=o().mark((function r(){var a;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,!(n.dataSource[t]&&0==n.dataSource[t].length||!0===e)){r.next=6;break}return r.next=4,window.axios.get("/json/candidates",{params:{position:t,locality_id:n.search.citydist}});case 4:a=r.sent,n.dataSource[t]=a.data;case 6:r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.log(r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})),function(){var t=this,e=arguments;return new Promise((function(n,o){var a=r.apply(t,e);function i(t){c(a,n,o,i,l,"next",t)}function l(t){c(a,n,o,i,l,"throw",t)}i(void 0)}))})()},setLocalities:function(t){this.dataSource.localities=t},reset:function(t){this.wizard={lastSavedStep:"president",completedSteps:[]},this.ballot={president:null,vice_president:null,senators:[],partylist:null,house_representative:null,governor:null,vice_governor:null,mayor:null,vice_mayor:null,prov_sang_members:[],city_sang_members:[]},this.search={senator:"",partylist:"",province:"",citydist:""},this.gtag("start_over"),t()},select:function(t,e){var r=this.selectedLocale;if(["senators","prov_sang_members","city_sang_members"].includes(t)){var n=this.ballot[t];if(n.includes(e.id))return void n.splice(n.indexOf(e.id),1);this.ballot[t].push(e.id)}else this.ballot[t]&&this.ballot[t]===e.id?this.ballot[t]=null:this.ballot[t]=e.id;this.gtag("clicked_candidate",{id:e.id,name:e.name,ballot_number:e.ballot_number,position:e.position,partylist:e.partylist,locale_id:r&&r.id?r.id:"",locale_province:r&&r.province?r.province:"",locale_name:r&&r.city_dist?r.city_dist:""})},saveCompletedSteps:function(t,e){var r=a(new Set(t));this.wizard.completedSteps=r,this.wizard.lastSavedStep=e},getProfileUrl:function(t){if(t.profile_url)return t.profile_url;var e=t.position.replace(/_/g," ");return"https://www.google.com/search?q=".concat(t.name," candidate running for ").concat(e)},gtag:function(t,e,r){"undefined"!=typeof window&&window.gtag("event",t,e),r&&r()}},getters:{presidents:function(t){return t.dataSource.president},vicePresidents:function(t){return t.dataSource.vice_president},senators:function(t){var e=t.dataSource.senator;return t.search.senator?e.filter((function(e){return t.search.senator.toLowerCase().split(" ").every((function(t){return e.name.toLowerCase().includes(t)}))})):e},partylist:function(t){var e=t.dataSource.partylist;return t.search.partylist?e.filter((function(e){return t.search.partylist.toLowerCase().split(" ").every((function(t){return e.name.toLowerCase().includes(t)}))})):e},provinces:function(t){var e=a(new Map(t.dataSource.localities.map((function(t){return[t.province,t]}))).values());return e.sort((function(t,e){return t.province.localeCompare(e.province)})),e},citydists:function(t){if(t.search.province){var e=t.dataSource.localities;return e.filter((function(e){return e.province===t.search.province}))}return[]},houseRepresentatives:function(t){return t.dataSource.local_candidates.filter((function(t){return"house_representative"===t.position}))},governors:function(t){return t.dataSource.local_candidates.filter((function(t){return"governor"===t.position}))},viceGovernors:function(t){return t.dataSource.local_candidates.filter((function(t){return"vice_governor"===t.position}))},provSangMembers:function(t){return t.dataSource.local_candidates.filter((function(t){return"prov_saggunian_member"===t.position}))},mayors:function(t){return t.dataSource.local_candidates.filter((function(t){return"mayor"===t.position}))},viceMayors:function(t){return t.dataSource.local_candidates.filter((function(t){return"vice_mayor"===t.position}))},citySangMembers:function(t){return t.dataSource.local_candidates.filter((function(t){return"city_saggunian_member"===t.position}))},selectedLocale:function(t){return t.dataSource.localities.find((function(e){return e.id===t.search.citydist}))},myBallot:function(t){var e=t.dataSource.senator.filter((function(e){return t.ballot.senators.includes(e.id)})),r=t.provSangMembers.filter((function(e){return t.ballot.prov_sang_members.includes(e.id)})),n=t.citySangMembers.filter((function(e){return t.ballot.city_sang_members.includes(e.id)}));return{president:t.dataSource.president.find((function(e){return e.id===t.ballot.president})),vice_president:t.dataSource.vice_president.find((function(e){return e.id===t.ballot.vice_president})),senators:e,partylist:t.dataSource.partylist.find((function(e){return e.id===t.ballot.partylist})),house_representative:t.houseRepresentatives.find((function(e){return e.id===t.ballot.house_representative})),governor:t.governors.find((function(e){return e.id===t.ballot.governor})),vice_governor:t.viceGovernors.find((function(e){return e.id===t.ballot.vice_governor})),prov_sang_members:r,mayor:t.mayors.find((function(e){return e.id===t.ballot.mayor})),vice_mayor:t.viceMayors.find((function(e){return e.id===t.ballot.vice_mayor})),city_sang_members:n}}},persist:{enabled:!0}})},9150:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var n=r(3645),o=r.n(n)()((function(t){return t[1]}));o.push([t.id,'.bg-gray-100[data-v-061fe305]{background-color:#f7fafc;background-color:rgba(247,250,252,var(--tw-bg-opacity))}.border-gray-200[data-v-061fe305]{border-color:#edf2f7;border-color:rgba(237,242,247,var(--tw-border-opacity))}.text-gray-400[data-v-061fe305]{color:#cbd5e0;color:rgba(203,213,224,var(--tw-text-opacity))}.text-gray-500[data-v-061fe305]{color:#a0aec0;color:rgba(160,174,192,var(--tw-text-opacity))}.text-gray-600[data-v-061fe305]{color:#718096;color:rgba(113,128,150,var(--tw-text-opacity))}.text-gray-700[data-v-061fe305]{color:#4a5568;color:rgba(74,85,104,var(--tw-text-opacity))}.text-gray-900[data-v-061fe305]{color:#1a202c;color:rgba(26,32,44,var(--tw-text-opacity))}.browser-mockup[data-v-061fe305]{border-top:2em solid hsla(0,0%,90%,.7);height:100%;position:relative}.browser-mockup[data-v-061fe305]:before{background-color:#f44;border-radius:50%;box-shadow:0 0 0 2px #f44,1.5em 0 0 2px #9b3,3em 0 0 2px #fb5;content:"";display:block;height:.5em;left:1em;position:absolute;top:-1.25em;width:.5em}.browser-mockup>*[data-v-061fe305]{display:block}@media (prefers-color-scheme:dark){.dark\\:bg-gray-800[data-v-061fe305]{background-color:#2d3748;background-color:rgba(45,55,72,var(--tw-bg-opacity))}.dark\\:bg-gray-900[data-v-061fe305]{background-color:#1a202c;background-color:rgba(26,32,44,var(--tw-bg-opacity))}.dark\\:border-gray-700[data-v-061fe305]{border-color:#4a5568;border-color:rgba(74,85,104,var(--tw-border-opacity))}.dark\\:text-white[data-v-061fe305]{color:#fff;color:rgba(255,255,255,var(--tw-text-opacity))}.dark\\:text-gray-400[data-v-061fe305]{color:#cbd5e0;color:rgba(203,213,224,var(--tw-text-opacity))}}',""]);const a=o},3645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r=t(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(t,r,n){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);n&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),e.push(l))}},e}},5666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n=d;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return C()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var l=u(t,e,r);if("normal"===l.type){if(n=r.done?v:f,l.arg===h)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=v,r.method="throw",r.arg=l.arg)}}}(t,r,i),a}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var d="suspendedStart",f="suspendedYield",p="executing",v="completed",h={};function m(){}function g(){}function y(){}var b={};l(b,a,(function(){return this}));var x=Object.getPrototypeOf,w=x&&x(x(O([])));w&&w!==r&&n.call(w,a)&&(b=w);var _=y.prototype=m.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,i,c){var l=u(t[o],t,a);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(d).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return h;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=u(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,h):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:C}}function C(){return{value:e,done:!0}}return g.prototype=y,l(_,"constructor",y),l(y,"constructor",g),g.displayName=l(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},S(k.prototype),l(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new k(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(_),l(_,c,"Generator"),l(_,a,(function(){return this})),l(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),h}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},3379:(t,e,r)=>{"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var t={};return function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}t[e]=r}return t[e]}}(),i=[];function c(t){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===t){e=r;break}return e}function l(t,e){for(var r={},n=[],o=0;o<t.length;o++){var a=t[o],l=e.base?a[0]+e.base:a[0],s=r[l]||0,u="".concat(l," ").concat(s);r[l]=s+1;var d=c(u),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:u,updater:m(f,e),references:1}),n.push(u)}return n}function s(t){var e=document.createElement("style"),n=t.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(t){e.setAttribute(t,n[t])})),"function"==typeof t.insert)t.insert(e);else{var i=a(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var u,d=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function f(t,e,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(t.styleSheet)t.styleSheet.cssText=d(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function p(t,e,r){var n=r.css,o=r.media,a=r.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var v=null,h=0;function m(t,e){var r,n,o;if(e.singleton){var a=h++;r=v||(v=s(e)),n=f.bind(null,r,a,!1),o=f.bind(null,r,a,!0)}else r=s(e),n=p.bind(null,r,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(r)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=l(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var n=0;n<r.length;n++){var o=c(r[n]);i[o].references--}for(var a=l(t,e),s=0;s<r.length;s++){var u=c(r[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}r=a}}}},3744:(t,e)=>{"use strict";e.Z=(t,e)=>{const r=t.__vccOpts||t;for(const[t,n]of e)r[t]=n;return r}},6783:(t,e,r)=>{"use strict";r.d(e,{Z:()=>m});var n=r(821),o=r(5076),a=r(9038),i=(0,n.createStaticVNode)('<header><nav id="header" class="w-full z-30 top-0 text-white py-1 lg:py-4"><div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2"><div class="md:pl-4 flex lg:items-center"><a class="text-black no-underline hover:no-underline font-bold text-sm flex items-center" href="/"><img src="/images/SBGLOGO.png" alt="Sample Ballot Generator Logo" class="logo mr-5 ml-5 md:ml-0"><div class="flex flex-col"><span>Sample Ballot</span><span>Generator</span></div></a></div></div></nav></header>',1),c={class:"bg-white"},l={class:"container mx-auto px-8"},s={class:"w-full flex flex-col md:flex-row py-6 md:pb-0"},u=(0,n.createStaticVNode)('<div class="flex-1 flex md:mb-6 md:flex-row flex-col flex-wrap justify-center"><div class="flex md:footer-text-logo footer-text-logo-small"><div class="md:pr-5"><a href="/"><img src="/images/SBGLOGO.png" alt="Logo" class="logo ml-0"></a></div></div><div class="flex flex-col justify-center xl:items-start"><div class="flex flex-col flex-wrap items-center pt-5 md:pt-0"><a class="text-black no-underline hover:no-underline font-bold text-lg lg:text-md" href="/"> Sample Ballot Generator</a></div><div class="flex xl:footer-links justify-center md:justify-start"><ul class="list-reset mb-6 text-center md:text-justify"><li class="mt-2 inline-block mr-2 md:block md:mr-10 lg:mr-0 xl:mr-6"><a href="/privacy" class="font-light no-underline hover:underline text-gray-800 hover:text-orange-500">Privacy Policy</a></li></ul></div></div></div>',1),d={class:"flex-1 flex md:m-5 md:ml-5 md:mt-1 md:footer-kofi flex-col flex-wrap items-center"},f=(0,n.createElementVNode)("div",{class:"pb-3"},[(0,n.createElementVNode)("p",{class:"text-black text-center md:text-left text-xs"},[(0,n.createTextVNode)(" Hi! If this app helped you, "),(0,n.createElementVNode)("br"),(0,n.createTextVNode)(" maybe you can buy us coffee? ❤")])],-1),p={class:"flex"},v=[(0,n.createElementVNode)("img",{class:"h-6",src:"/images/Kofi_pixel_logo_with_text_dark.png",alt:"Kofi Logo"},null,-1)],h={components:{Link:a.rU}};const m=Object.assign(h,{setup:function(t){var e=(0,o.o)();return function(t,r){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[i,(0,n.createElementVNode)("main",null,[(0,n.renderSlot)(t.$slots,"default")]),(0,n.createElementVNode)("footer",c,[(0,n.createElementVNode)("div",l,[(0,n.createElementVNode)("div",s,[u,(0,n.createElementVNode)("div",d,[f,(0,n.createElementVNode)("div",p,[(0,n.createElementVNode)("a",{href:"https://ko-fi.com/codesandpaws",onClick:r[0]||(r[0]=(0,n.withModifiers)((function(t){(0,n.unref)(e).gtag("kofi_button_click",{},(function(){window.open("https://ko-fi.com/codesandpaws","_blank")}))}),["prevent"])),target:"blank"},v)])])])])])],64)}}})},4974:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>p});var n=r(821),o=r(6783),a=r(9038),i=(0,n.createStaticVNode)('<section class="bg-white border-b py-10" data-v-061fe305><div class="container mx-auto px-8" data-v-061fe305> Some content here </div></section><section class="gradient w-full mx-auto text-center pt-6 pb-12" data-v-061fe305><h2 class="w-full my-2 text-5xl font-black leading-tight text-center text-white" data-v-061fe305> Are You Election Ready? </h2><div class="w-full mb-4" data-v-061fe305><div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" data-v-061fe305></div></div><h3 class="my-4 text-3xl font-extrabold" data-v-061fe305> Be prepared for the election, </h3><h3 class="my-4 text-3xl font-extrabold" data-v-061fe305> generate a sample ballot based on your selections. </h3><button class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg button-gradient" data-v-061fe305> Generate My Ballot </button></section>',2),c={layout:o.Z};const l=Object.assign(c,{props:{canLogin:Boolean,canRegister:Boolean,laravelVersion:String,phpVersion:String},setup:function(t){return function(t,e){return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)((0,n.unref)(a.Fb),{title:"Terms"}),i],64)}}});var s=r(3379),u=r.n(s),d=r(9150),f={insert:"head",singleton:!1};u()(d.Z,f);d.Z.locals;const p=(0,r(3744).Z)(l,[["__scopeId","data-v-061fe305"]])}}]);