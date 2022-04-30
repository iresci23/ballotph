(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Privacy_vue"],{

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/SiteLayout.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/SiteLayout.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stores_Candidate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Stores/Candidate */ "./resources/js/Stores/Candidate.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");


var __default__ = {
  components: {
    Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var store = (0,_Stores_Candidate__WEBPACK_IMPORTED_MODULE_0__.useCandidateStore)();

    function openKofi() {
      window.open('https://ko-fi.com/codesandpaws', '_blank' // <- This is what makes it open in a new window.
      );
    }

    var __returned__ = {
      store: store,
      openKofi: openKofi,
      Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link,
      useCandidateStore: _Stores_Candidate__WEBPACK_IMPORTED_MODULE_0__.useCandidateStore
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Privacy.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Privacy.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_SiteLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Layouts/SiteLayout */ "./resources/js/Layouts/SiteLayout.vue");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");

var __default__ = {
  // Using the shorthand
  layout: _Layouts_SiteLayout__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var __returned__ = {
      SiteLayout: _Layouts_SiteLayout__WEBPACK_IMPORTED_MODULE_0__["default"],
      Head: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Head,
      Link: _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.Link
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/SiteLayout.vue?vue&type=template&id=61958455":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/SiteLayout.vue?vue&type=template&id=61958455 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<header><nav id=\"header\" class=\"w-full z-30 top-0 text-white py-1 lg:py-4\"><div class=\"w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2\"><div class=\"md:pl-4 flex lg:items-center\"><a class=\"text-black no-underline hover:no-underline font-bold text-sm flex items-center\" href=\"/\"><img src=\"/images/SBGLOGO.png\" alt=\"Sample Ballot Generator Logo\" class=\"logo mr-5 ml-5 md:ml-0\"><div class=\"flex flex-col\"><span>Sample Ballot</span><span>Generator</span></div></a></div><!-- &lt;Link href=&quot;/generator&quot;&gt;\r\n                  &lt;button\r\n                      id=&quot;navAction&quot;\r\n                      class=&quot;mx-auto lg:mx-0 hover:underline text-gray-800 font-extrabold rounded mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 button-gradient&quot;\r\n                  &gt;\r\n                      Generate My Ballot\r\n                  &lt;/button&gt;\r\n                &lt;/Link&gt; --></div></nav><!-- &lt;Link href=&quot;/&quot;&gt;Home&lt;/Link&gt;\r\n      &lt;Link href=&quot;/about&quot;&gt;About&lt;/Link&gt;\r\n      &lt;Link href=&quot;/contact&quot;&gt;Contact&lt;/Link&gt; --></header>", 1);

var _hoisted_2 = {
  "class": "bg-white"
};
var _hoisted_3 = {
  "class": "container mx-auto px-8"
};
var _hoisted_4 = {
  "class": "w-full flex flex-col md:flex-row py-6 md:pb-0"
};

var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<div class=\"flex-1 flex md:mb-6 md:flex-row flex-col flex-wrap justify-center\"><div class=\"flex md:footer-text-logo footer-text-logo-small\"><div class=\"md:pr-5\"><a href=\"/\"><img src=\"/images/SBGLOGO.png\" alt=\"Logo\" class=\"logo ml-0\"></a></div></div><div class=\"flex flex-col justify-center xl:items-start\"><div class=\"flex flex-col flex-wrap items-center pt-5 md:pt-0\"><a class=\"text-black no-underline hover:no-underline font-bold text-lg lg:text-md\" href=\"/\"> Sample Ballot Generator</a></div><div class=\"flex xl:footer-links justify-center md:justify-start\"><ul class=\"list-reset mb-6 text-center md:text-justify\"><li class=\"mt-2 inline-block mr-2 md:block md:mr-10 lg:mr-0 xl:mr-6\"><a href=\"/privacy\" class=\"font-light no-underline hover:underline text-gray-800 hover:text-orange-500\">Privacy Policy</a></li><!-- &lt;li class=&quot;mt-2 inline-block mr-2 md:block md:mr-10 lg:mr-0 xl:mr-6&quot;&gt;\r\n                                    &lt;a\r\n                                        href=&quot;#&quot;\r\n                                        class=&quot;font-light no-underline hover:underline text-gray-800 hover:text-orange-500&quot;\r\n                                        &gt;About Us&lt;/a\r\n                                    &gt;\r\n                                &lt;/li&gt;\r\n                                &lt;li class=&quot;mt-2 inline-block mr-2 md:block md:mr-10 lg:mr-0 xl:mr-6&quot;&gt;\r\n                                    &lt;a\r\n                                        href=&quot;#&quot;\r\n                                        class=&quot;font-light no-underline hover:underline text-gray-800 hover:text-orange-500&quot;\r\n                                        &gt;Contact Us&lt;/a\r\n                                    &gt;\r\n                                &lt;/li&gt; --></ul></div></div></div>", 1);

var _hoisted_6 = {
  "class": "flex-1 flex md:m-5 md:ml-5 md:mt-1 md:footer-kofi flex-col flex-wrap items-center"
};

var _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "pb-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "text-black text-center md:text-left text-xs"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Hi! If this app helped you, "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" maybe you can buy us coffee? ❤")])], -1
/* HOISTED */
);

var _hoisted_8 = {
  "class": "flex"
};

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "h-6",
  src: "/images/Kofi_pixel_logo_with_text_dark.png",
  alt: "Kofi Logo"
}, null, -1
/* HOISTED */
);

var _hoisted_10 = [_hoisted_9];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("main", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("footer", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [_hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"flex-1\">\r\n                    <p class=\"uppercase font-extrabold text-gray-500 md:mb-6\">\r\n                        Links\r\n                    </p>\r\n                    <ul class=\"list-reset mb-6\">\r\n                        <li class=\"mt-2 inline-block mr-2 md:block md:mr-0\">\r\n                            <a\r\n                                href=\"#\"\r\n                                class=\"font-light no-underline hover:underline text-gray-800 hover:text-orange-500\"\r\n                                >FAQ</a\r\n                            >\r\n                        </li>\r\n                        <li class=\"mt-2 inline-block mr-2 md:block md:mr-0\">\r\n                            <a\r\n                                href=\"#\"\r\n                                class=\"font-light no-underline hover:underline text-gray-800 hover:text-orange-500\"\r\n                                >Terms</a\r\n                            >\r\n                        </li>\r\n                        <li class=\"mt-2 inline-block mr-2 md:block md:mr-0\">\r\n                            <a\r\n                                href=\"#\"\r\n                                class=\"font-light no-underline hover:underline text-gray-800 hover:text-orange-500\"\r\n                                >Privacy</a\r\n                            >\r\n                        </li>\r\n                    </ul>\r\n                </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"flex-1\">\r\n                    <p class=\"uppercase font-extrabold text-gray-500 md:mb-6\">\r\n                        Social\r\n                    </p>\r\n                    <ul class=\"list-reset mb-6\">\r\n                        <li class=\"mt-2 inline-block mr-2 md:block md:mr-0\">\r\n                            <a\r\n                                href=\"#\"\r\n                                class=\"font-light no-underline hover:underline text-gray-800 hover:text-orange-500\"\r\n                                >Facebook</a\r\n                            >\r\n                        </li>\r\n                        <li class=\"mt-2 inline-block mr-2 md:block md:mr-0\">\r\n                            <a\r\n                                href=\"#\"\r\n                                class=\"font-light no-underline hover:underline text-gray-800 hover:text-orange-500\"\r\n                                >Linkedin</a\r\n                            >\r\n                        </li>\r\n                        <li class=\"mt-2 inline-block mr-2 md:block md:mr-0\">\r\n                            <a\r\n                                href=\"#\"\r\n                                class=\"font-light no-underline hover:underline text-gray-800 hover:text-orange-500\"\r\n                                >Twitter</a\r\n                            >\r\n                        </li>\r\n                    </ul>\r\n                </div> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
    href: "https://ko-fi.com/codesandpaws",
    onClick: _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
      $setup.store.gtag('kofi_button_click', {}, function () {
        $setup.openKofi();
      });
    }, ["prevent"])),
    target: "blank"
  }, _hoisted_10)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <ul class=\"list-reset mb-6\">\r\n                        <li class=\"mt-2 inline-block mr-2 md:block md:mr-0\">\r\n                            <a\r\n                                href=\"#\"\r\n                                class=\"font-light no-underline hover:underline text-gray-800 hover:text-orange-500\"\r\n                                >About Us</a\r\n                            >\r\n                        </li>\r\n                        <li class=\"mt-2 inline-block mr-2 md:block md:mr-0\">\r\n                            <a\r\n                                href=\"#\"\r\n                                class=\"font-light no-underline hover:underline text-gray-800 hover:text-orange-500\"\r\n                                >Contact</a\r\n                            >\r\n                        </li>\r\n                    </ul> ")])])])])], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Privacy.vue?vue&type=template&id=411677ef&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Privacy.vue?vue&type=template&id=411677ef&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-411677ef"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createStaticVNode)("<section class=\"bg-white border-b py-10\" data-v-411677ef><div class=\"container mx-auto md:px-8 max-w-6xl\" data-v-411677ef><div class=\"pb-4\" data-v-411677ef><h1 class=\"text-4xl font-bold text-center pb-10\" data-v-411677ef>Privacy Policy</h1><p class=\"\" data-v-411677ef>Updated: April 2022</p></div><div class=\"priv-spacing\" data-v-411677ef><p data-v-411677ef>Codes &amp; Paws (“us”, “we”, or “our”) operates phballotgenerator.com (the “Website”, &quot;Site&quot;). This page informs you of our policies regarding the collection, use and disclosure of information about users of the Site. Your use of the Website constitutes your acceptance of the Privacy Policy.</p></div><div class=\"priv-spacing\" data-v-411677ef><p data-v-411677ef>If at any time you do not agree to all terms and practices described in this Privacy Policy, you must cease all use of the Website and you must cease visiting the Website.</p></div><div class=\"priv-spacing\" data-v-411677ef><h2 data-v-411677ef>Information that we collect</h2><p data-v-411677ef> We value your privacy. We <strong data-v-411677ef>DO NOT</strong> collect personally identifiable information that can be used to contact or identify you. </p></div><div class=\"priv-spacing\" data-v-411677ef><h2 data-v-411677ef>Site Visit Information</h2><p data-v-411677ef> We use Google Analytics on our Website. Google Analytics provides additional information and data related to you, your device and your computer browser and your use of, and activity on, our Website. For information regarding Google’s privacy practices please visit Google’s site. </p></div><div class=\"priv-spacing\" data-v-411677ef><h2 data-v-411677ef>Use of Information</h2><p data-v-411677ef>All information and data collected may be used for purposes of monitoring usage of the Site and for purposes of improving the Site and service offerings.</p></div><div class=\"priv-spacing\" data-v-411677ef><h2 data-v-411677ef>Cookies</h2><p data-v-411677ef> Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer’s hard drive. Like many sites, we use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. If you choose to remove or reject cookies, this could affect the availability and functionality of the Site. </p></div><div class=\"priv-spacing\" data-v-411677ef><h2 data-v-411677ef>Policy Changes</h2><p data-v-411677ef> We may update this Privacy Policy from time-to-time by posting a new version on to this page. </p></div><div class=\"priv-spacing\" data-v-411677ef><h2 data-v-411677ef>Contact</h2><p data-v-411677ef>If you have any questions or concerns, please contact us at <a class=\"hover:underline\" href=\"mailto:codesandpaws@gmail.com\" data-v-411677ef>codesandpaws@gmail.com</a></p></div></div></section>", 1);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Head"], {
    title: "Privacy"
  }), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <section class=\"gradient w-full mx-auto text-center pt-6 pb-12\">\r\n        <h2\r\n            class=\"w-full my-2 text-5xl font-black leading-tight text-center text-white\">\r\n            Are You Election Ready?\r\n        </h2>\r\n        <div class=\"w-full mb-4\">\r\n            <div\r\n                class=\"h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t\"\r\n            ></div>\r\n        </div>\r\n\r\n        <h3 class=\"my-4 text-3xl font-extrabold\">\r\n            Be prepared for the election,\r\n        </h3>\r\n        <h3 class=\"my-4 text-3xl font-extrabold\">\r\n            generate a sample ballot based on your selections.\r\n        </h3>\r\n\r\n        <button\r\n            class=\"mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded my-6 py-4 px-8 shadow-lg button-gradient\">\r\n            Generate My Ballot\r\n        </button>\r\n    </section> ")], 64
  /* STABLE_FRAGMENT */
  );
}

/***/ }),

/***/ "./resources/js/Stores/Candidate.js":
/*!******************************************!*\
  !*** ./resources/js/Stores/Candidate.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCandidateStore": () => (/* binding */ useCandidateStore)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pinia */ "./node_modules/pinia/dist/pinia.esm-browser.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var useCandidateStore = (0,pinia__WEBPACK_IMPORTED_MODULE_1__.defineStore)('candidate', {
  // could also be defined as
  // state: () => ({ count: 0 })
  state: function state() {
    return {
      wizard: {
        lastSavedStep: "president",
        completedSteps: [],
        bottomOfPage: false,
        loading: false
      },
      dataSource: {
        loading: false,
        president: [],
        vice_president: [],
        senator: [],
        partylist: [],
        localities: [],
        //list of provinces...
        local_candidates: [] //local candidates based on filters selected

      },
      ballot: {
        president: null,
        vice_president: null,
        senators: [],
        partylist: null,
        house_representative: null,
        governor: null,
        vice_governor: null,
        mayor: null,
        vice_mayor: null,
        prov_sang_members: [],
        city_sang_members: []
      },
      votingLimits: {
        president: 1,
        vicePresident: 1,
        senators: 12,
        partylist: 1
      },
      search: {
        senator: '',
        partylist: '',
        province: '',
        citydist: ''
      },
      showModal: false,
      modalCandidate: []
    };
  },
  actions: {
    fetchCandidates: function fetchCandidates(position, reload) {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                // get data if empty
                _this.dataSource.loading = true;

                if (!(_this.dataSource[position] && _this.dataSource[position].length == 0 || reload === true)) {
                  _context.next = 11;
                  break;
                }

                if (!(position == 'local_candidates' && !_this.search.citydist)) {
                  _context.next = 6;
                  break;
                }

                _context.next = 10;
                break;

              case 6:
                _context.next = 8;
                return window.axios.get('/json/candidates', {
                  params: {
                    position: position,
                    locality_id: _this.search.citydist
                  }
                });

              case 8:
                data = _context.sent;
                _this.dataSource[position] = data.data;

              case 10:
                _this.dataSource.loading = false;

              case 11:
                _context.next = 17;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](0);
                _this.dataSource.loading = false;
                console.log(_context.t0);

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 13]]);
      }))();
    },
    setLocalities: function setLocalities(data) {
      this.dataSource.localities = data;
    },
    reset: function reset(callback) {
      this.wizard = {
        lastSavedStep: "president",
        completedSteps: []
      };
      this.ballot = {
        president: null,
        vice_president: null,
        senators: [],
        partylist: null,
        house_representative: null,
        governor: null,
        vice_governor: null,
        mayor: null,
        vice_mayor: null,
        prov_sang_members: [],
        city_sang_members: []
      };
      this.search = {
        senator: '',
        partylist: '',
        province: '',
        citydist: ''
      };
      this.gtag('start_over');
      callback();
    },
    select: function select(position, candidate) {
      var selectedLocale = this.selectedLocale;
      var positions = ['senators', 'prov_sang_members', 'city_sang_members']; // multi select

      if (positions.includes(position)) {
        var arr = this.ballot[position];

        if (arr.includes(candidate.id)) {
          arr.splice(arr.indexOf(candidate.id), 1);
          return;
        }

        this.ballot[position].push(candidate.id);
      } else {
        // single select
        if (this.ballot[position] && this.ballot[position] === candidate.id) {
          //unselect if the same
          this.ballot[position] = null;
        } else {
          //select
          this.ballot[position] = candidate.id;
        }
      }

      this.gtag('clicked_candidate', {
        id: candidate.id,
        name: candidate.name,
        ballot_number: candidate.ballot_number,
        position: candidate.position,
        partylist: candidate.partylist,
        locale_id: selectedLocale && selectedLocale.id ? selectedLocale.id : "",
        locale_province: selectedLocale && selectedLocale.province ? selectedLocale.province : "",
        locale_name: selectedLocale && selectedLocale.city_dist ? selectedLocale.city_dist : ""
      });
    },
    saveCompletedSteps: function saveCompletedSteps(steps, last_step) {
      var uniq = _toConsumableArray(new Set(steps));

      this.wizard.completedSteps = uniq;
      this.wizard.lastSavedStep = last_step;
    },
    getProfileUrl: function getProfileUrl(candidate) {
      if (candidate.profile_url) {
        return candidate.profile_url;
      }

      var position = candidate.position.replace(/_/g, " ");
      return "https://www.google.com/search?q=".concat(candidate.name, " candidate running for ").concat(position);
    },
    gtag: function gtag(event, params, callback) {
      if (typeof window !== 'undefined') {
        window.gtag("event", event, params);
      }

      callback && callback();
    }
  },
  getters: {
    presidents: function presidents(state) {
      return state.dataSource.president;
    },
    vicePresidents: function vicePresidents(state) {
      return state.dataSource.vice_president;
    },
    senators: function senators(state) {
      // check if there is a search query
      var filtered = state.dataSource.senator;

      if (state.search.senator) {
        return filtered.filter(function (c) {
          return state.search.senator.toLowerCase().split(' ').every(function (v) {
            return c.name.toLowerCase().includes(v);
          });
        });
      }

      return filtered;
    },
    partylist: function partylist(state) {
      // check if there is a search query
      var filtered = state.dataSource.partylist;

      if (state.search.partylist) {
        return filtered.filter(function (c) {
          return state.search.partylist.toLowerCase().split(' ').every(function (v) {
            return c.name.toLowerCase().includes(v);
          });
        });
      }

      return filtered;
    },
    provinces: function provinces(state) {
      var provinces = _toConsumableArray(new Map(state.dataSource.localities.map(function (item) {
        return [item['province'], item];
      })).values());

      provinces.sort(function (a, b) {
        return a.province.localeCompare(b.province);
      });
      return provinces;
    },
    citydists: function citydists(state) {
      if (state.search.province) {
        var citydists = state.dataSource.localities;
        return citydists.filter(function (c) {
          return c.province === state.search.province;
        });
      }

      return [];
    },
    houseRepresentatives: function houseRepresentatives(state) {
      return state.dataSource.local_candidates.filter(function (c) {
        return c.position === 'house_representative';
      });
    },
    governors: function governors(state) {
      return state.dataSource.local_candidates.filter(function (c) {
        return c.position === 'governor';
      });
    },
    viceGovernors: function viceGovernors(state) {
      return state.dataSource.local_candidates.filter(function (c) {
        return c.position === 'vice_governor';
      });
    },
    provSangMembers: function provSangMembers(state) {
      return state.dataSource.local_candidates.filter(function (c) {
        return c.position === 'prov_saggunian_member';
      });
    },
    mayors: function mayors(state) {
      return state.dataSource.local_candidates.filter(function (c) {
        return c.position === 'mayor';
      });
    },
    viceMayors: function viceMayors(state) {
      return state.dataSource.local_candidates.filter(function (c) {
        return c.position === 'vice_mayor';
      });
    },
    citySangMembers: function citySangMembers(state) {
      return state.dataSource.local_candidates.filter(function (c) {
        return c.position === 'city_saggunian_member';
      });
    },
    selectedLocale: function selectedLocale(state) {
      return state.dataSource.localities.find(function (c) {
        return c.id === state.search.citydist;
      });
    },
    myBallot: function myBallot(state) {
      var senators = state.dataSource.senator.filter(function (c) {
        return state.ballot.senators.includes(c.id);
      });
      var prov_sang_members = state.provSangMembers.filter(function (c) {
        return state.ballot.prov_sang_members.includes(c.id);
      });
      var city_sang_members = state.citySangMembers.filter(function (c) {
        return state.ballot.city_sang_members.includes(c.id);
      });
      return {
        president: state.dataSource.president.find(function (c) {
          return c.id === state.ballot.president;
        }),
        vice_president: state.dataSource.vice_president.find(function (c) {
          return c.id === state.ballot.vice_president;
        }),
        senators: senators,
        partylist: state.dataSource.partylist.find(function (c) {
          return c.id === state.ballot.partylist;
        }),
        house_representative: state.houseRepresentatives.find(function (c) {
          return c.id === state.ballot.house_representative;
        }),
        governor: state.governors.find(function (c) {
          return c.id === state.ballot.governor;
        }),
        vice_governor: state.viceGovernors.find(function (c) {
          return c.id === state.ballot.vice_governor;
        }),
        prov_sang_members: prov_sang_members,
        mayor: state.mayors.find(function (c) {
          return c.id === state.ballot.mayor;
        }),
        vice_mayor: state.viceMayors.find(function (c) {
          return c.id === state.ballot.vice_mayor;
        }),
        city_sang_members: city_sang_members
      };
    }
  },
  persist: {
    enabled: true
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Privacy.vue?vue&type=style&index=0&id=411677ef&scoped=true&lang=css":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Privacy.vue?vue&type=style&index=0&id=411677ef&scoped=true&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.bg-gray-100[data-v-411677ef] {\r\n    background-color: #f7fafc;\r\n    background-color: rgba(247, 250, 252, var(--tw-bg-opacity));\n}\n.border-gray-200[data-v-411677ef] {\r\n    border-color: #edf2f7;\r\n    border-color: rgba(237, 242, 247, var(--tw-border-opacity));\n}\n.text-gray-400[data-v-411677ef] {\r\n    color: #cbd5e0;\r\n    color: rgba(203, 213, 224, var(--tw-text-opacity));\n}\n.text-gray-500[data-v-411677ef] {\r\n    color: #a0aec0;\r\n    color: rgba(160, 174, 192, var(--tw-text-opacity));\n}\n.text-gray-600[data-v-411677ef] {\r\n    color: #718096;\r\n    color: rgba(113, 128, 150, var(--tw-text-opacity));\n}\n.text-gray-700[data-v-411677ef] {\r\n    color: #4a5568;\r\n    color: rgba(74, 85, 104, var(--tw-text-opacity));\n}\n.text-gray-900[data-v-411677ef] {\r\n    color: #1a202c;\r\n    color: rgba(26, 32, 44, var(--tw-text-opacity));\n}\r\n\r\n/* Browser mockup code\r\n    * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f\r\n    * Live example: https://updown.io\r\n    */\n.browser-mockup[data-v-411677ef] {\r\n    border-top: 2em solid rgba(230, 230, 230, 0.7);\r\n    position: relative;\r\n    height: 100%;\n}\n.browser-mockup[data-v-411677ef]:before {\r\n    display: block;\r\n    position: absolute;\r\n    content: \"\";\r\n    top: -1.25em;\r\n    left: 1em;\r\n    width: 0.5em;\r\n    height: 0.5em;\r\n    border-radius: 50%;\r\n    background-color: #f44;\r\n    box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;\n}\n.browser-mockup > *[data-v-411677ef] {\r\n    display: block;\n}\r\n\r\n/* Custom code for the demo */\n@media (prefers-color-scheme: dark) {\n.dark\\:bg-gray-800[data-v-411677ef] {\r\n        background-color: #2d3748;\r\n        background-color: rgba(45, 55, 72, var(--tw-bg-opacity));\n}\n.dark\\:bg-gray-900[data-v-411677ef] {\r\n        background-color: #1a202c;\r\n        background-color: rgba(26, 32, 44, var(--tw-bg-opacity));\n}\n.dark\\:border-gray-700[data-v-411677ef] {\r\n        border-color: #4a5568;\r\n        border-color: rgba(74, 85, 104, var(--tw-border-opacity));\n}\n.dark\\:text-white[data-v-411677ef] {\r\n        color: #fff;\r\n        color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.dark\\:text-gray-400[data-v-411677ef] {\r\n        color: #cbd5e0;\r\n        color: rgba(203, 213, 224, var(--tw-text-opacity));\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Privacy.vue?vue&type=style&index=0&id=411677ef&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Privacy.vue?vue&type=style&index=0&id=411677ef&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Privacy_vue_vue_type_style_index_0_id_411677ef_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Privacy.vue?vue&type=style&index=0&id=411677ef&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Privacy.vue?vue&type=style&index=0&id=411677ef&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Privacy_vue_vue_type_style_index_0_id_411677ef_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Privacy_vue_vue_type_style_index_0_id_411677ef_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/Layouts/SiteLayout.vue":
/*!*********************************************!*\
  !*** ./resources/js/Layouts/SiteLayout.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SiteLayout_vue_vue_type_template_id_61958455__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SiteLayout.vue?vue&type=template&id=61958455 */ "./resources/js/Layouts/SiteLayout.vue?vue&type=template&id=61958455");
/* harmony import */ var _SiteLayout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SiteLayout.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Layouts/SiteLayout.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var D_xampp_htdocs_ballotph_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_ballotph_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SiteLayout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SiteLayout_vue_vue_type_template_id_61958455__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Layouts/SiteLayout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Pages/Privacy.vue":
/*!****************************************!*\
  !*** ./resources/js/Pages/Privacy.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Privacy_vue_vue_type_template_id_411677ef_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Privacy.vue?vue&type=template&id=411677ef&scoped=true */ "./resources/js/Pages/Privacy.vue?vue&type=template&id=411677ef&scoped=true");
/* harmony import */ var _Privacy_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Privacy.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Pages/Privacy.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Privacy_vue_vue_type_style_index_0_id_411677ef_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Privacy.vue?vue&type=style&index=0&id=411677ef&scoped=true&lang=css */ "./resources/js/Pages/Privacy.vue?vue&type=style&index=0&id=411677ef&scoped=true&lang=css");
/* harmony import */ var D_xampp_htdocs_ballotph_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,D_xampp_htdocs_ballotph_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Privacy_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Privacy_vue_vue_type_template_id_411677ef_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-411677ef"],['__file',"resources/js/Pages/Privacy.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Layouts/SiteLayout.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/Layouts/SiteLayout.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SiteLayout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SiteLayout_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SiteLayout.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/SiteLayout.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/Privacy.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************!*\
  !*** ./resources/js/Pages/Privacy.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Privacy_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Privacy_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Privacy.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Privacy.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Layouts/SiteLayout.vue?vue&type=template&id=61958455":
/*!***************************************************************************!*\
  !*** ./resources/js/Layouts/SiteLayout.vue?vue&type=template&id=61958455 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SiteLayout_vue_vue_type_template_id_61958455__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SiteLayout_vue_vue_type_template_id_61958455__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SiteLayout.vue?vue&type=template&id=61958455 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Layouts/SiteLayout.vue?vue&type=template&id=61958455");


/***/ }),

/***/ "./resources/js/Pages/Privacy.vue?vue&type=template&id=411677ef&scoped=true":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/Privacy.vue?vue&type=template&id=411677ef&scoped=true ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Privacy_vue_vue_type_template_id_411677ef_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Privacy_vue_vue_type_template_id_411677ef_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Privacy.vue?vue&type=template&id=411677ef&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Privacy.vue?vue&type=template&id=411677ef&scoped=true");


/***/ }),

/***/ "./resources/js/Pages/Privacy.vue?vue&type=style&index=0&id=411677ef&scoped=true&lang=css":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/Privacy.vue?vue&type=style&index=0&id=411677ef&scoped=true&lang=css ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Privacy_vue_vue_type_style_index_0_id_411677ef_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Privacy.vue?vue&type=style&index=0&id=411677ef&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/Privacy.vue?vue&type=style&index=0&id=411677ef&scoped=true&lang=css");


/***/ })

}]);