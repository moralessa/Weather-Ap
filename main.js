/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ "./src/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box; }\n\nbody {\n  width: 100%;\n  height: 100vh;\n  font-size: 16px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center, center;\n  background-repeat: no-repeat;\n  font-family: Montserrat, sans-serif; }\n  @media only screen and (max-width: 600px) {\n    body.rendered {\n      height: auto; } }\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.336); }\n\nmain {\n  opacity: 0;\n  display: none;\n  max-width: 100%;\n  max-height: 100%;\n  z-index: 5;\n  color: white;\n  position: relative;\n  transition: all 500ms ease-in; }\n  main .head-information {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    padding: 5rem; }\n    @media only screen and (max-width: 600px) {\n      main .head-information {\n        padding: 2rem; } }\n    main .head-information .left-side .forecast-heading {\n      font-weight: 500;\n      font-size: 36px; }\n    main .head-information .left-side .city {\n      font-size: 1rem;\n      font-weight: 500;\n      padding: 5px; }\n    main .head-information .left-side .date, main .head-information .left-side .time {\n      font-size: 12px;\n      font-weight: 500;\n      padding: 5px; }\n    main .head-information .left-side .temperature {\n      font-size: 48px;\n      font-weight: 700;\n      padding: 5px; }\n    main .head-information .left-side .display {\n      margin-bottom: 1rem;\n      transition: 200ms ease-in-out; }\n    main .head-information .left-side .display:hover {\n      cursor: pointer;\n      opacity: .8; }\n    main .head-information .left-side .weather-info {\n      padding: 5px; }\n      main .head-information .left-side .weather-info svg {\n        width: 100px; }\n    main .head-information .left-side .search {\n      position: relative;\n      padding: 5px;\n      width: 200px; }\n      main .head-information .left-side .search input {\n        color: white;\n        padding-left: 1rem;\n        border: none;\n        border-bottom: 2px solid white;\n        background-color: transparent;\n        height: 30px;\n        width: 100%; }\n        main .head-information .left-side .search input::placeholder {\n          color: white;\n          font-size: .72rem; }\n        main .head-information .left-side .search input:focus {\n          outline: none; }\n      main .head-information .left-side .search #search-icon {\n        position: absolute;\n        top: 35%;\n        left: 85%; }\n        main .head-information .left-side .search #search-icon:hover {\n          cursor: pointer; }\n    main .head-information .left-side .error {\n      display: none;\n      margin-top: 5px;\n      font-size: 11px; }\n    main .head-information .right-side {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between; }\n      @media only screen and (max-width: 600px) {\n        main .head-information .right-side {\n          flex-direction: row;\n          flex-wrap: wrap;\n          justify-content: center;\n          margin-top: 10px; }\n          main .head-information .right-side .detail {\n            margin: 5px; } }\n      main .head-information .right-side .detail {\n        display: flex;\n        justify-content: space-around;\n        align-items: center; }\n        main .head-information .right-side .detail svg {\n          width: 40px; }\n        main .head-information .right-side .detail .detail-text {\n          text-align: center;\n          width: 100px; }\n          main .head-information .right-side .detail .detail-text p {\n            font-size: 11px;\n            margin-bottom: 5px; }\n          main .head-information .right-side .detail .detail-text h4 {\n            font-size: 18px; }\n  main .body-information {\n    padding: 5rem; }\n    @media only screen and (max-width: 600px) {\n      main .body-information {\n        padding: 2rem; } }\n    main .body-information .days-of-week {\n      display: flex;\n      justify-content: space-around;\n      flex-wrap: wrap; }\n      main .body-information .days-of-week .day-container {\n        margin: 20px; }\n        main .body-information .days-of-week .day-container .day {\n          font-size: 22px; }\n        main .body-information .days-of-week .day-container h4, main .body-information .days-of-week .day-container h5, main .body-information .days-of-week .day-container p {\n          margin-bottom: 5px; }\n        main .body-information .days-of-week .day-container h4 {\n          font-size: 25px; }\n        main .body-information .days-of-week .day-container h5 {\n          font-weight: 500; }\n        main .body-information .days-of-week .day-container .day-icon {\n          margin-top: 15px;\n          font-size: 30px; }\n", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAEA;EACI,UAAU;EACV,SAAS;EACT,sBAAsB,EAAA;;AAG1B;EACI,WAAW;EACX,aAAa;EAMb,eAAe;EACf,yDAAgD;EAChD,sBAAsB;EACtB,mCAAmC;EACnC,4BAA4B;EAC5B,mCAAmC,EAAA;EAVnC;IAHJ;MAKY,YACJ,EAAA,EAAC;;AAUT;EACI,eAAe;EACf,MAAM;EACN,OAAO;EACP,UAAU;EACV,WAAW;EACX,YAAY;EACZ,sCAAsC,EAAA;;AAG1C;EACI,UAAU;EACV,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,UAAU;EACV,YAAY;EACZ,kBAAkB;EAClB,6BAA6B,EAAA;EARjC;IAWQ,aAAa;IACb,eAAe;IACf,8BAA8B;IAC9B,aAAa,EAAA;IACb;MAfR;QAgBY,aAAa,EAAA,EAwHpB;IAxIL;MAqBgB,gBAAgB;MAChB,eAAe,EAAA;IAtB/B;MA0BgB,eAAe;MACf,gBAAgB;MAChB,YAAY,EAAA;IA5B5B;MAgCgB,eAAe;MACf,gBAAgB;MAChB,YAAY,EAAA;IAlC5B;MAsCgB,eAAe;MACf,gBAAgB;MAChB,YAAY,EAAA;IAxC5B;MA4CgB,mBAAmB;MACnB,6BAA6B,EAAA;IA7C7C;MAiDgB,eAAe;MACf,WAAW,EAAA;IAlD3B;MAsDgB,YAAY,EAAA;MAtD5B;QAwDoB,YAAY,EAAA;IAxDhC;MA6DgB,kBAAkB;MAClB,YAAY;MACZ,YAAY,EAAA;MA/D5B;QAiEoB,YAAY;QACZ,kBAAkB;QAClB,YAAY;QACZ,8BAA8B;QAC9B,6BAA6B;QAC7B,YAAY;QACZ,WAAW,EAAA;QAvE/B;UAyEwB,YAAY;UACZ,iBAAiB,EAAA;QA1EzC;UA8EwB,aAAa,EAAA;MA9ErC;QAmFoB,kBAAkB;QAClB,QAAQ;QACR,SAAS,EAAA;QArF7B;UAwFwB,eAAe,EAAA;IAxFvC;MA8FgB,aAAa;MACb,eAAe;MACf,eAAe,EAAA;IAhG/B;MAqGY,aAAa;MACb,sBAAsB;MACtB,8BAA8B,EAAA;MAC9B;QAxGZ;UAyGgB,mBAAmB;UACnB,eAAe;UACf,uBAAuB;UACvB,gBAAgB,EAAA;UA5GhC;YA8GoB,WAAW,EAAA,EACd;MA/GjB;QAkHgB,aAAa;QACb,6BAA6B;QAC7B,mBAAmB,EAAA;QApHnC;UAuHoB,WAAW,EAAA;QAvH/B;UA2HoB,kBAAkB;UAClB,YAAY,EAAA;UA5HhC;YA8HwB,eAAe;YACf,kBAAkB,EAAA;UA/H1C;YAmIwB,eAAe,EAAA;EAnIvC;IA2IQ,aAAa,EAAA;IACb;MA5IR;QA6IY,aAAa,EAAA,EAgCpB;IA7KL;MAiJY,aAAa;MACb,6BAA6B;MAC7B,eAAe,EAAA;MAnJ3B;QAsJgB,YAAY,EAAA;QAtJ5B;UAwJoB,eAAe,EAAA;QAxJnC;UA4JoB,kBAAkB,EAAA;QA5JtC;UAgKoB,eAAe,EAAA;QAhKnC;UAoKoB,gBAAgB,EAAA;QApKpC;UAwKoB,gBAAgB;UAChB,eAAe,EAAA","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');\r\n\r\n*, *::after, *::before{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody{\r\n    width: 100%;\r\n    height: 100vh;\r\n    @media only screen and (max-width: 600px) {\r\n        &.rendered{\r\n            height: auto\r\n        }\r\n    }\r\n    font-size: 16px;\r\n    background-image: url('./images/background.jpg');\r\n    background-size: cover;\r\n    background-position: center, center;\r\n    background-repeat: no-repeat;\r\n    font-family: Montserrat, sans-serif;\r\n}\r\n\r\n.overlay{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.336);\r\n}\r\n\r\nmain{\r\n    opacity: 0;\r\n    display: none;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    z-index: 5;\r\n    color: white;\r\n    position: relative;\r\n    transition: all 500ms ease-in;\r\n\r\n    .head-information{\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: space-between;\r\n        padding: 5rem;\r\n        @media only screen and (max-width: 600px) {\r\n            padding: 2rem;\r\n        }\r\n\r\n        .left-side{\r\n            .forecast-heading{\r\n                font-weight: 500;\r\n                font-size: 36px;\r\n            }\r\n    \r\n            .city{\r\n                font-size: 1rem;\r\n                font-weight: 500;\r\n                padding: 5px;\r\n            }\r\n    \r\n            .date, .time{\r\n                font-size: 12px;\r\n                font-weight: 500;\r\n                padding: 5px;\r\n            }\r\n\r\n            .temperature{\r\n                font-size: 48px;\r\n                font-weight: 700;\r\n                padding: 5px;\r\n            }\r\n\r\n            .display{\r\n                margin-bottom: 1rem;\r\n                transition: 200ms ease-in-out;\r\n            }\r\n\r\n            .display:hover{\r\n                cursor: pointer;\r\n                opacity: .8;\r\n            }\r\n\r\n            .weather-info{\r\n                padding: 5px;\r\n                svg{\r\n                    width: 100px;\r\n                }\r\n            }\r\n\r\n            .search{\r\n                position: relative;\r\n                padding: 5px;\r\n                width: 200px;\r\n                input{\r\n                    color: white;\r\n                    padding-left: 1rem;\r\n                    border: none;\r\n                    border-bottom: 2px solid white;\r\n                    background-color: transparent;\r\n                    height: 30px;\r\n                    width: 100%;\r\n                    &::placeholder{\r\n                        color: white;\r\n                        font-size: .72rem;\r\n                    }\r\n\r\n                    &:focus{\r\n                        outline: none;\r\n                    }\r\n                }\r\n\r\n                #search-icon{\r\n                    position: absolute;\r\n                    top: 35%;\r\n                    left: 85%;\r\n\r\n                    &:hover{\r\n                        cursor: pointer;\r\n                    }\r\n                }\r\n            }\r\n\r\n            .error{\r\n                display: none;\r\n                margin-top: 5px;\r\n                font-size: 11px;\r\n            }\r\n        }\r\n\r\n        .right-side{\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-between;\r\n            @media only screen and (max-width: 600px) {\r\n                flex-direction: row;     \r\n                flex-wrap: wrap;\r\n                justify-content: center;\r\n                margin-top: 10px;\r\n                .detail{\r\n                    margin: 5px;\r\n                }\r\n            }\r\n            .detail{\r\n                display: flex;\r\n                justify-content: space-around;\r\n                align-items: center;\r\n\r\n                svg{\r\n                    width: 40px;\r\n                }\r\n\r\n                .detail-text{\r\n                    text-align: center;\r\n                    width: 100px;\r\n                    p{\r\n                        font-size: 11px;\r\n                        margin-bottom: 5px;\r\n                    }\r\n\r\n                    h4{\r\n                        font-size: 18px;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .body-information{\r\n        padding: 5rem;\r\n        @media only screen and (max-width: 600px) {\r\n            padding: 2rem;\r\n        }\r\n\r\n        .days-of-week{\r\n            display: flex;\r\n            justify-content: space-around;\r\n            flex-wrap: wrap;\r\n\r\n            .day-container{\r\n                margin: 20px;\r\n                .day{\r\n                    font-size: 22px;\r\n                }\r\n\r\n                h4, h5, p{\r\n                    margin-bottom: 5px;\r\n                }\r\n\r\n                h4{\r\n                    font-size: 25px;\r\n                }\r\n\r\n                h5{\r\n                    font-weight: 500;\r\n                }\r\n\r\n                .day-icon{\r\n                    margin-top: 15px;\r\n                    font-size: 30px;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/apiFunctionality.js":
/*!*****************************************!*\
  !*** ./src/modules/apiFunctionality.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "foreCastRequest": () => (/* binding */ foreCastRequest),
/* harmony export */   "formatCity": () => (/* binding */ formatCity)
/* harmony export */ });
const API_KEY = '96f74019283a3f8cdc69b60026732ec2';

async function firstDayForeCastRequest(data){
    const totalData = data['totalData'];
    const foreCastResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${totalData.city.coord.lat}&lon=${totalData.city.coord.lon}&units=imperial&precipitation.mode='rain'&appid=${API_KEY}`);
    const foreCastData = await foreCastResponse.json();
    if(foreCastResponse.status !== 200){
        throw new Error('cannot fetch forecast data');
    }
    return foreCastData;
}

function formatCity(cityName){
    let returnCity = '';
    if (cityName) {
        // remove whitespace for the api call
         returnCity = cityName
          .replace(/(\s+$|^\s+)/g, '') // remove whitespace from begining and end of string
          .replace(/(,\s+)/g, ',') // remove any white space that follows a comma
          .replace(/(\s+,)/g, ',') // remove any white space that preceeds a comma
          .replace(/\s+/g, '+'); // replace any remaining white space with +, so it works in api call
      }
      return returnCity;
}

function checkTime(input){
    if(input == '21:00:00' || input == '00:00:00'){
        return true;
    }
    return false;
}

function formatDate(date){
    let dateUnformatted = date;
    let dateUnformattedArray = dateUnformatted.split(' ');
    let timeValidation = checkTime(dateUnformattedArray[1]);
    return [timeValidation, dateUnformattedArray[0]];
}

function overRideFirstDayForecast(data){
    const keys = Object.keys(data);
    firstDayForeCastRequest(data).then(forecast =>{
        data[keys[0]] = forecast;
    });
}

function getFiveDayForecast(data){
    const list = data.list;
    let dayForecasts = {};
    list.forEach(item =>{
       let temp = formatDate(item.dt_txt);
       if(temp[0]){
            if(dayForecasts[temp[1]]){
                dayForecasts[temp[1]].push(item);
            }else{
                dayForecasts[temp[1]] = [];
                dayForecasts[temp[1]].push(item);
            }
       }
    })
    dayForecasts['totalData'] = data;
    overRideFirstDayForecast(dayForecasts);
    return dayForecasts;
}

async function foreCastRequest(input){
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${API_KEY}&units=imperial`);
    if(response.status !== 200){
        throw new Error('cannot fetch forecast data');
    }
    const data = await response.json();
    const forecast = getFiveDayForecast(data);
    return forecast;
}






/***/ }),

/***/ "./src/modules/domFunctionality.js":
/*!*****************************************!*\
  !*** ./src/modules/domFunctionality.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domSetForecast": () => (/* binding */ domSetForecast),
/* harmony export */   "populateContent": () => (/* binding */ populateContent)
/* harmony export */ });
const mainContent = document.querySelector('main');
const forecastHeading = document.querySelector('.forecast-heading');
const cityHeading = document.querySelector('.city');
const dateHeading = document.querySelector('.date');
const timeHeading = document.querySelector('.time');
const temperatureHeading = document.querySelector('.temperature');
const weatherIconHeading = document.querySelector('.weather-info');
const detailsFeelsLike = document.getElementById('feels-like');
const detailsHumidity = document.getElementById('humidity');
const detailsWindSpeed = document.getElementById('wind-speed');
let forecast;
let keys;


 function domSetForecast(input){
    forecast = input;
    keys = Object.keys(forecast);
    console.log(forecast);
    setTimeout(() =>{
        populateContent();
    },500)
}

function capitalizeText(input){
    let inpArr = input.split(' ');
    for(let i = 0; i < inpArr.length; i++){
        inpArr[i] = inpArr[i][0].toUpperCase() + inpArr[i].substr(1);
    }
    return inpArr.join(' ');
}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  function getIcon(code) {
    if (code === '01d') {
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="3 3 26 26">
      <title>sun</title>
      <path d="M16 9c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7c0-3.859-3.141-7-7-7zM16 21c-2.762 0-5-2.238-5-5s2.238-5 5-5 5 2.238 5 5-2.238 5-5 5zM16 7c0.552 0 1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 0.552 0.448 1 1 1zM16 25c-0.552 0-1 0.448-1 1v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1zM23.777 9.635l1.414-1.414c0.391-0.391 0.391-1.023 0-1.414s-1.023-0.391-1.414 0l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0zM8.223 22.365l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0l1.414-1.414c0.391-0.392 0.391-1.023 0-1.414s-1.023-0.392-1.414 0zM7 16c0-0.552-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2c0.552 0 1-0.448 1-1zM28 15h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1zM8.221 9.635c0.391 0.391 1.024 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414c-0.391-0.391-1.023-0.391-1.414 0s-0.391 1.023 0 1.414l1.414 1.414zM23.779 22.363c-0.392-0.391-1.023-0.391-1.414 0s-0.392 1.023 0 1.414l1.414 1.414c0.391 0.391 1.023 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414z"/>
      </svg>`;
    }
  
    if (code === '01n') {
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="8.21 8.21 15.57 15.57">
      <title>moon</title>
      <path d="M21.866 21.447c-3.117 3.12-8.193 3.12-11.313 0s-3.12-8.195 0-11.314c0.826-0.824 1.832-1.453 2.989-1.863 0.365-0.128 0.768-0.035 1.039 0.237 0.274 0.273 0.366 0.677 0.237 1.039-0.784 2.211-0.25 4.604 1.391 6.245 1.638 1.639 4.031 2.172 6.245 1.391 0.362-0.129 0.767-0.036 1.039 0.237 0.273 0.271 0.365 0.676 0.236 1.039-0.408 1.157-1.038 2.164-1.863 2.989zM11.967 11.547c-2.34 2.34-2.34 6.147 0 8.486 2.5 2.501 6.758 2.276 8.937-0.51-2.247 0.141-4.461-0.671-6.109-2.318s-2.458-3.861-2.318-6.108c-0.18 0.141-0.35 0.29-0.51 0.451z"/>
      </svg>`;
    }
    if (code === '02d') {
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 0 32 32">
      <title>cloudy-day</title>
      <path d="M13 4c0.552 0 1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 0.552 0.448 1 1 1zM20.777 6.635l1.414-1.414c0.391-0.391 0.391-1.023 0-1.414s-1.023-0.391-1.414 0l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0zM1 14h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM22 13c0 0.552 0.448 1 1 1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1zM5.221 6.635c0.391 0.391 1.024 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414c-0.391-0.391-1.023-0.391-1.414 0s-0.391 1.023 0 1.414l1.414 1.414zM25 16c-0.332 0-0.66 0.023-0.987 0.070-1.048-1.43-2.445-2.521-4.029-3.219-0.081-3.789-3.176-6.852-6.984-6.852-3.859 0-7 3.141-7 7 0 1.090 0.271 2.109 0.719 3.027-3.727 0.152-6.719 3.211-6.719 6.973 0 3.859 3.141 7 7 7 0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM13 8c2.488 0 4.535 1.823 4.919 4.203-0.626-0.125-1.266-0.203-1.919-0.203-2.871 0-5.531 1.238-7.398 3.328-0.371-0.698-0.602-1.482-0.602-2.328 0-2.762 2.238-5 5-5zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.484 0 0.941 0.091 1.383 0.221 0.176 0.049 0.354 0.089 0.52 0.158 0.273-0.535 0.617-1.025 0.999-1.484 1.461-1.758 3.634-2.895 6.099-2.895 0.633 0 1.24 0.091 1.828 0.232 0.66 0.156 1.284 0.393 1.865 0.706 1.456 0.773 2.651 1.971 3.404 3.441 0.587-0.242 1.229-0.379 1.904-0.379 2.762 0 5 2.238 5 5s-2.238 5-5 5z"/>
      </svg>`;
    }
    if (code === '02n') {
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 2.42 32 29.57">
      <title>cloudy-night</title>
      <path d="M27.191 16.385c0.305-0.227 0.613-0.449 0.889-0.725 0.826-0.827 1.454-1.833 1.862-2.991 0.13-0.362 0.038-0.768-0.236-1.039-0.272-0.273-0.676-0.366-1.039-0.237-2.212 0.781-4.605 0.25-6.244-1.391-1.641-1.641-2.174-4.033-1.391-6.244 0.128-0.363 0.036-0.767-0.237-1.040-0.271-0.271-0.676-0.365-1.039-0.237-1.159 0.411-2.164 1.039-2.99 1.864-2.096 2.094-2.749 5.063-2.030 7.737-2.703 0.345-5.133 1.781-6.751 3.987-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-3.090-2.026-5.689-4.809-6.615zM18.182 5.76c0.159-0.161 0.329-0.311 0.509-0.452-0.141 2.249 0.671 4.461 2.319 6.108 1.648 1.648 3.861 2.458 6.109 2.319-0.862 1.099-2.050 1.783-3.32 2.074-1.711-2.172-4.225-3.539-6.997-3.762-0.767-2.122-0.318-4.59 1.38-6.288zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.137 1.902 0.379 1.262-2.46 3.734-4.181 6.645-4.346 0.152-0.009 0.301-0.033 0.453-0.033 0.807 0 1.582 0.126 2.313 0.349 0.987 0.302 1.887 0.794 2.668 1.428 0.746 0.605 1.371 1.348 1.863 2.181 0.083 0.141 0.177 0.273 0.253 0.421 0.587-0.242 1.229-0.379 1.904-0.379 2.762 0 5 2.238 5 5s-2.238 5-5 5z"/>
      </svg>`;
    }
    if (code === '03d' || code === '03n') {
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 6 32 20">
      <title>cloud</title>
      <path d="M25 10c-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM25 22c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.138 1.902 0.38 1.327-2.588 3.991-4.38 7.098-4.38s5.771 1.792 7.096 4.38c0.587-0.242 1.229-0.38 1.904-0.38 2.762 0 5 2.238 5 5s-2.238 5-5 5z"/>
      </svg>`;
    }
    if (code === '04d' || code === '04n') {
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 6.57 32 25.43">
      <title>cloudy</title>
      <path d="M32 15c0-3.073-2.5-5.572-5.573-5.572-0.15 0-0.298 0.007-0.447 0.018-1.445-1.803-3.624-2.874-5.98-2.874-2.355 0-4.535 1.070-5.98 2.874-0.148-0.012-0.298-0.018-0.449-0.018-3.070-0-5.57 2.499-5.57 5.572 0 0.322 0.043 0.631 0.094 0.94-0.034 0.044-0.074 0.085-0.107 0.13-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-1.605-0.565-3.068-1.479-4.25 0.911-0.994 1.479-2.302 1.479-3.75zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.137 1.902 0.379 0.035-0.066 0.078-0.125 0.113-0.189 0.352-0.642 0.785-1.23 1.292-1.753 1.443-1.495 3.448-2.438 5.693-2.438 3.107 0 5.771 1.792 7.096 4.379 0.353-0.145 0.729-0.238 1.117-0.301l0.787-0.078c0.771 0 1.492 0.19 2.145 0.5 0.707 0.338 1.314 0.836 1.79 1.449 0.656 0.845 1.065 1.897 1.065 3.051 0 2.762-2.238 5-5 5zM29.098 17.352c-1.155-0.841-2.563-1.352-4.098-1.352-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070-2.133 0-4.145 0.69-5.809 1.896 0.467-1.428 1.796-2.467 3.379-2.467 0.484 0 0.941 0.098 1.359 0.271 0.949-1.848 2.852-3.126 5.070-3.126s4.122 1.279 5.068 3.126c0.421-0.173 0.88-0.271 1.359-0.271 1.974 0 3.573 1.599 3.573 3.572 0 0.905-0.348 1.721-0.902 2.351z"/>
      </svg>`;
    }
    if (code === '09d' || code === '09n' || code === '10d' || code === '10n') {
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 0 32 32">
      <title>rainy</title>
      <path d="M25 4c-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM25 16c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.138 1.902 0.38 1.327-2.588 3.991-4.38 7.098-4.38s5.771 1.792 7.096 4.38c0.587-0.242 1.229-0.38 1.904-0.38 2.762 0 5 2.238 5 5s-2.238 5-5 5zM14.063 30c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM22 28c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM6 24c0 1.105 0.894 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4z"/>
      </svg>`;
    }
    if (code === '11d' || code === '11n') {
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 0 32 32">
      <title>lightning</title>
      <path d="M12 24l2 2-2 6 6-6-2-2 2-4-6 4zM32 8.427c0-3.072-2.5-5.57-5.573-5.57-0.15 0-0.298 0.005-0.447 0.017-1.445-1.802-3.624-2.874-5.98-2.874-2.355 0-4.535 1.072-5.98 2.874-0.148-0.012-0.298-0.017-0.449-0.017-3.070 0-5.57 2.499-5.57 5.57 0 0.322 0.043 0.633 0.094 0.94-0.034 0.044-0.074 0.085-0.107 0.13-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 0.069 0.060 0.151 0.102 0.221 0.16l1.77-1.18c-0.59-0.418-1.141-0.883-1.602-1.438-0.813 0.572-1.801 0.915-2.871 0.915-2.762 0-5-2.237-5-5 0-2.76 2.238-5 5-5 0.676 0 1.316 0.138 1.902 0.38 0.035-0.068 0.078-0.125 0.113-0.19 0.352-0.642 0.785-1.229 1.292-1.753 1.443-1.493 3.448-2.438 5.693-2.438 3.107 0 5.771 1.792 7.096 4.38 0.353-0.146 0.729-0.24 1.117-0.302l0.787-0.078c0.771 0 1.492 0.19 2.145 0.5 0.707 0.339 1.314 0.836 1.79 1.45 0.656 0.845 1.065 1.896 1.065 3.050 0 2.763-2.238 5-5 5-1.070 0-2.057-0.344-2.871-0.915-0.875 1.055-2.027 1.848-3.322 2.348l-0.374 0.746 1.141 1.141c1.066-0.415 2.064-1.012 2.944-1.777 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-1.604-0.565-3.068-1.479-4.25 0.911-0.992 1.479-2.301 1.479-3.75zM29.098 10.779c-1.155-0.84-2.563-1.352-4.098-1.352-0.332 0-0.66 0.023-0.987 0.070-1.867-2.543-4.814-4.070-8.013-4.070-2.133 0-4.145 0.691-5.809 1.897 0.467-1.428 1.796-2.467 3.379-2.467 0.484 0 0.941 0.098 1.359 0.271 0.949-1.849 2.852-3.128 5.070-3.128s4.122 1.279 5.068 3.128c0.421-0.173 0.88-0.271 1.359-0.271 1.974 0 3.573 1.599 3.573 3.57 0 0.906-0.348 1.723-0.902 2.352z"/>
      </svg>`;
    }
    if (code === '13d' || code === '13n') {
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0.5 1 47.01 47.01">
      <title>snow</title>
      <path d="M14.5 24.502c0 1 0.16 1.97 0.44 2.871l-4.080 2.35-7.26-1.94c-1.31-0.35-2.66 0.43-3.020 1.729-0.35 1.311 0.43 2.65 1.75 3l5.87 1.57-1.58 5.84c-0.35 1.301 0.43 2.65 1.74 3 1.32 0.35 2.67-0.43 3.020-1.738l1.94-7.221 4.27-2.451c1.11 1.010 2.46 1.771 3.95 2.172v5.5l-5.32 4.488c-0.96 0.99-0.96 2.59 0 3.59 0.96 0.99 2.52 0.99 3.48 0l4.3-4.439 4.3 4.439c0.96 0.99 2.52 0.99 3.479 0 0.961-1 0.961-2.6 0-3.59l-5.319-4.488v-5.5c1.49-0.4 2.84-1.162 3.95-2.172l4.27 2.451 1.94 7.221c0.35 1.309 1.699 2.088 3.020 1.738 1.311-0.35 2.091-1.699 1.74-3l-1.58-5.84 5.87-1.57c1.32-0.35 2.1-1.689 1.75-3-0.359-1.299-1.71-2.078-3.020-1.729l-7.261 1.939-4.079-2.35c0.279-0.9 0.439-1.871 0.439-2.871s-0.16-1.97-0.439-2.88l4.079-2.34 7.261 1.94c1.31 0.35 2.66-0.431 3.020-1.73 0.35-1.31-0.43-2.65-1.75-3l-5.87-1.57 1.58-5.84c0.351-1.3-0.43-2.649-1.74-3-1.32-0.35-2.67 0.43-3.020 1.74l-1.94 7.22-4.27 2.45c-1.11-1.010-2.46-1.77-3.95-2.17v-4.5l5.319-5.49c0.961-0.99 0.961-2.59 0-3.59-0.96-0.99-2.52-0.99-3.479 0l-4.3 4.442-4.3-4.44c-0.96-0.99-2.52-0.99-3.48 0-0.96 1-0.96 2.6 0 3.59l5.32 5.49v4.5c-1.49 0.4-2.84 1.16-3.95 2.17l-4.27-2.45-1.94-7.22c-0.35-1.311-1.7-2.090-3.020-1.74-1.31 0.351-2.090 1.7-1.74 3l1.58 5.84-5.87 1.57c-1.32 0.35-2.1 1.69-1.75 3 0.36 1.3 1.71 2.080 3.020 1.73l7.26-1.94 4.080 2.34c-0.28 0.91-0.44 1.879-0.44 2.879zM24 29.002c-2.49 0-4.5-2.010-4.5-4.5s2.010-4.5 4.5-4.5 4.5 2.010 4.5 4.5c0 2.49-2.010 4.5-4.5 4.5z"/>
      </svg>`;
    }
    if (code === '50d' || code === '50n') {
      return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="1.94 5.94 30 18">
      <title>mist</title>
      <path d="M30.938 13.938h-5.102c-0.504-4.487-4.277-8-8.898-8-3.113 0-5.859 1.591-7.477 4h-6.523c-0.552 0-1 0.448-1 1s0.448 1 1 1h5.552c-0.226 0.638-0.374 1.306-0.45 2h-3.102c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.102c0.077 0.693 0.224 1.363 0.45 2h-5.37c-0.654 0-1.182 0.448-1.182 1s0.529 1 1.182 1h6.341c1.617 2.41 4.363 4 7.477 4s5.859-1.59 7.477-4h2.341c0.654 0 1.182-0.448 1.182-1s-0.529-1-1.182-1h-1.37c0.227-0.637 0.372-1.307 0.451-2h5.102c0.552 0 1-0.448 1-1s-0.448-1-1-1zM10.639 11.938h6.298c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4.884c1.263-1.233 2.983-2 4.884-2 3.518 0 6.409 2.617 6.898 6h-13.797c0.102-0.707 0.302-1.378 0.6-2zM16.938 21.938c-1.901 0-3.621-0.768-4.884-2h9.767c-1.262 1.232-2.982 2-4.883 2zM23.234 17.938h-12.595c-0.298-0.622-0.499-1.293-0.6-2h13.797c-0.102 0.707-0.302 1.378-0.602 2z"/>
      </svg>`;
    }
  
    return '';
  }

function populateHead(){
    forecastHeading.textContent = capitalizeText(forecast[keys[0]].weather[0].description);
    cityHeading.textContent = capitalizeText(forecast[keys[0]].name);
    let myDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateHeading.textContent = new Intl.DateTimeFormat('En-US', options).format(myDate);
    timeHeading.textContent = formatAMPM(myDate);
    temperatureHeading.textContent = `${Math.floor(forecast[keys[0]].main.temp)} \u00B0F`;
    weatherIconHeading.innerHTML = getIcon(forecast[keys[0]].weather[0].icon);
    detailsFeelsLike.textContent = `${forecast[keys[0]].main.feels_like} \u00B0F`;
    detailsHumidity.textContent = `${forecast[keys[0]].main.humidity} %`;
    detailsWindSpeed.textContent = `${forecast[keys[0]].wind.speed} mph`;
}

function populateBody(){

}


function populateContent(){
    populateHead();
    populateBody();
    document.body.classList.add('rendered');
    mainContent.style.display = 'block';
    setTimeout(() =>{
        mainContent.style.opacity = '1';
    }, 100)
}



/***/ }),

/***/ "./src/images/background.jpg":
/*!***********************************!*\
  !*** ./src/images/background.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8173c34cbdd3a57acf80.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
/* harmony import */ var _modules_apiFunctionality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/apiFunctionality */ "./src/modules/apiFunctionality.js");
/* harmony import */ var _modules_domFunctionality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/domFunctionality */ "./src/modules/domFunctionality.js");



const errorText = document.querySelector('.error');



async function makeCall(){
    let input = (0,_modules_apiFunctionality__WEBPACK_IMPORTED_MODULE_1__.formatCity)('Salt Lake City, Utah, US');
    let foreCast = await (0,_modules_apiFunctionality__WEBPACK_IMPORTED_MODULE_1__.foreCastRequest)(input);
    return foreCast
}

makeCall().then(data =>{
    (0,_modules_domFunctionality__WEBPACK_IMPORTED_MODULE_2__.domSetForecast)(data)
}).catch(err =>{
    errorText.style.display = 'block';
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDbUQ7QUFDRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHFFQUFVO0FBQzFCLHlCQUF5QiwwRUFBZTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkseUVBQWM7QUFDbEIsQ0FBQztBQUNEO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5zY3NzP2E2MDkiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2FwaUZ1bmN0aW9uYWxpdHkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9kb21GdW5jdGlvbmFsaXR5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Nb250c2VycmF0OndnaHRANDAwOzYwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmFmdGVyLCAqOjpiZWZvcmUge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5ib2R5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyLCBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgYm9keS5yZW5kZXJlZCB7XFxuICAgICAgaGVpZ2h0OiBhdXRvOyB9IH1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMzNik7IH1cXG5cXG5tYWluIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbjsgfVxcbiAgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiA1cmVtOyB9XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIHtcXG4gICAgICAgIHBhZGRpbmc6IDJyZW07IH0gfVxcbiAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLmZvcmVjYXN0LWhlYWRpbmcge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgZm9udC1zaXplOiAzNnB4OyB9XFxuICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24gLmxlZnQtc2lkZSAuY2l0eSB7XFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgcGFkZGluZzogNXB4OyB9XFxuICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24gLmxlZnQtc2lkZSAuZGF0ZSwgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiAubGVmdC1zaWRlIC50aW1lIHtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICBwYWRkaW5nOiA1cHg7IH1cXG4gICAgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiAubGVmdC1zaWRlIC50ZW1wZXJhdHVyZSB7XFxuICAgICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgcGFkZGluZzogNXB4OyB9XFxuICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24gLmxlZnQtc2lkZSAuZGlzcGxheSB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDsgfVxcbiAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLmRpc3BsYXk6aG92ZXIge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBvcGFjaXR5OiAuODsgfVxcbiAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLndlYXRoZXItaW5mbyB7XFxuICAgICAgcGFkZGluZzogNXB4OyB9XFxuICAgICAgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiAubGVmdC1zaWRlIC53ZWF0aGVyLWluZm8gc3ZnIHtcXG4gICAgICAgIHdpZHRoOiAxMDBweDsgfVxcbiAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLnNlYXJjaCB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICB3aWR0aDogMjAwcHg7IH1cXG4gICAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLnNlYXJjaCBpbnB1dCB7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgICAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLnNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogLjcycmVtOyB9XFxuICAgICAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLnNlYXJjaCBpbnB1dDpmb2N1cyB7XFxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLnNlYXJjaCAjc2VhcmNoLWljb24ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAzNSU7XFxuICAgICAgICBsZWZ0OiA4NSU7IH1cXG4gICAgICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24gLmxlZnQtc2lkZSAuc2VhcmNoICNzZWFyY2gtaWNvbjpob3ZlciB7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLmVycm9yIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgICBmb250LXNpemU6IDExcHg7IH1cXG4gICAgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiAucmlnaHQtc2lkZSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24gLnJpZ2h0LXNpZGUge1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuICAgICAgICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24gLnJpZ2h0LXNpZGUgLmRldGFpbCB7XFxuICAgICAgICAgICAgbWFyZ2luOiA1cHg7IH0gfVxcbiAgICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24gLnJpZ2h0LXNpZGUgLmRldGFpbCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgICAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5yaWdodC1zaWRlIC5kZXRhaWwgc3ZnIHtcXG4gICAgICAgICAgd2lkdGg6IDQwcHg7IH1cXG4gICAgICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24gLnJpZ2h0LXNpZGUgLmRldGFpbCAuZGV0YWlsLXRleHQge1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIHdpZHRoOiAxMDBweDsgfVxcbiAgICAgICAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5yaWdodC1zaWRlIC5kZXRhaWwgLmRldGFpbC10ZXh0IHAge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cXG4gICAgICAgICAgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiAucmlnaHQtc2lkZSAuZGV0YWlsIC5kZXRhaWwtdGV4dCBoNCB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4OyB9XFxuICBtYWluIC5ib2R5LWluZm9ybWF0aW9uIHtcXG4gICAgcGFkZGluZzogNXJlbTsgfVxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgbWFpbiAuYm9keS1pbmZvcm1hdGlvbiB7XFxuICAgICAgICBwYWRkaW5nOiAycmVtOyB9IH1cXG4gICAgbWFpbiAuYm9keS1pbmZvcm1hdGlvbiAuZGF5cy1vZi13ZWVrIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgICAgIG1haW4gLmJvZHktaW5mb3JtYXRpb24gLmRheXMtb2Ytd2VlayAuZGF5LWNvbnRhaW5lciB7XFxuICAgICAgICBtYXJnaW46IDIwcHg7IH1cXG4gICAgICAgIG1haW4gLmJvZHktaW5mb3JtYXRpb24gLmRheXMtb2Ytd2VlayAuZGF5LWNvbnRhaW5lciAuZGF5IHtcXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4OyB9XFxuICAgICAgICBtYWluIC5ib2R5LWluZm9ybWF0aW9uIC5kYXlzLW9mLXdlZWsgLmRheS1jb250YWluZXIgaDQsIG1haW4gLmJvZHktaW5mb3JtYXRpb24gLmRheXMtb2Ytd2VlayAuZGF5LWNvbnRhaW5lciBoNSwgbWFpbiAuYm9keS1pbmZvcm1hdGlvbiAuZGF5cy1vZi13ZWVrIC5kYXktY29udGFpbmVyIHAge1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cXG4gICAgICAgIG1haW4gLmJvZHktaW5mb3JtYXRpb24gLmRheXMtb2Ytd2VlayAuZGF5LWNvbnRhaW5lciBoNCB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDsgfVxcbiAgICAgICAgbWFpbiAuYm9keS1pbmZvcm1hdGlvbiAuZGF5cy1vZi13ZWVrIC5kYXktY29udGFpbmVyIGg1IHtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxcbiAgICAgICAgbWFpbiAuYm9keS1pbmZvcm1hdGlvbiAuZGF5cy1vZi13ZWVrIC5kYXktY29udGFpbmVyIC5kYXktaWNvbiB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksV0FBVztFQUNYLGFBQWE7RUFNYixlQUFlO0VBQ2YseURBQWdEO0VBQ2hELHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsNEJBQTRCO0VBQzVCLG1DQUFtQyxFQUFBO0VBVm5DO0lBSEo7TUFLWSxZQUNKLEVBQUEsRUFBQzs7QUFVVDtFQUNJLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNDQUFzQyxFQUFBOztBQUcxQztFQUNJLFVBQVU7RUFDVixhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiw2QkFBNkIsRUFBQTtFQVJqQztJQVdRLGFBQWE7SUFDYixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLGFBQWEsRUFBQTtJQUNiO01BZlI7UUFnQlksYUFBYSxFQUFBLEVBd0hwQjtJQXhJTDtNQXFCZ0IsZ0JBQWdCO01BQ2hCLGVBQWUsRUFBQTtJQXRCL0I7TUEwQmdCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsWUFBWSxFQUFBO0lBNUI1QjtNQWdDZ0IsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixZQUFZLEVBQUE7SUFsQzVCO01Bc0NnQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLFlBQVksRUFBQTtJQXhDNUI7TUE0Q2dCLG1CQUFtQjtNQUNuQiw2QkFBNkIsRUFBQTtJQTdDN0M7TUFpRGdCLGVBQWU7TUFDZixXQUFXLEVBQUE7SUFsRDNCO01Bc0RnQixZQUFZLEVBQUE7TUF0RDVCO1FBd0RvQixZQUFZLEVBQUE7SUF4RGhDO01BNkRnQixrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFlBQVksRUFBQTtNQS9ENUI7UUFpRW9CLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0IsWUFBWTtRQUNaLFdBQVcsRUFBQTtRQXZFL0I7VUF5RXdCLFlBQVk7VUFDWixpQkFBaUIsRUFBQTtRQTFFekM7VUE4RXdCLGFBQWEsRUFBQTtNQTlFckM7UUFtRm9CLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUyxFQUFBO1FBckY3QjtVQXdGd0IsZUFBZSxFQUFBO0lBeEZ2QztNQThGZ0IsYUFBYTtNQUNiLGVBQWU7TUFDZixlQUFlLEVBQUE7SUFoRy9CO01BcUdZLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsOEJBQThCLEVBQUE7TUFDOUI7UUF4R1o7VUF5R2dCLG1CQUFtQjtVQUNuQixlQUFlO1VBQ2YsdUJBQXVCO1VBQ3ZCLGdCQUFnQixFQUFBO1VBNUdoQztZQThHb0IsV0FBVyxFQUFBLEVBQ2Q7TUEvR2pCO1FBa0hnQixhQUFhO1FBQ2IsNkJBQTZCO1FBQzdCLG1CQUFtQixFQUFBO1FBcEhuQztVQXVIb0IsV0FBVyxFQUFBO1FBdkgvQjtVQTJIb0Isa0JBQWtCO1VBQ2xCLFlBQVksRUFBQTtVQTVIaEM7WUE4SHdCLGVBQWU7WUFDZixrQkFBa0IsRUFBQTtVQS9IMUM7WUFtSXdCLGVBQWUsRUFBQTtFQW5JdkM7SUEySVEsYUFBYSxFQUFBO0lBQ2I7TUE1SVI7UUE2SVksYUFBYSxFQUFBLEVBZ0NwQjtJQTdLTDtNQWlKWSxhQUFhO01BQ2IsNkJBQTZCO01BQzdCLGVBQWUsRUFBQTtNQW5KM0I7UUFzSmdCLFlBQVksRUFBQTtRQXRKNUI7VUF3Sm9CLGVBQWUsRUFBQTtRQXhKbkM7VUE0Sm9CLGtCQUFrQixFQUFBO1FBNUp0QztVQWdLb0IsZUFBZSxFQUFBO1FBaEtuQztVQW9Lb0IsZ0JBQWdCLEVBQUE7UUFwS3BDO1VBd0tvQixnQkFBZ0I7VUFDaEIsZUFBZSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qLCAqOjphZnRlciwgKjo6YmVmb3Jle1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgICAgICAmLnJlbmRlcmVke1xcclxcbiAgICAgICAgICAgIGhlaWdodDogYXV0b1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZycpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIsIGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5e1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMzNik7XFxyXFxufVxcclxcblxcclxcbm1haW57XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gICAgei1pbmRleDogNTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluO1xcclxcblxcclxcbiAgICAuaGVhZC1pbmZvcm1hdGlvbntcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cmVtO1xcclxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubGVmdC1zaWRle1xcclxcbiAgICAgICAgICAgIC5mb3JlY2FzdC1oZWFkaW5ne1xcclxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAuY2l0eXtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAuZGF0ZSwgLnRpbWV7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAudGVtcGVyYXR1cmV7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuZGlzcGxheXtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5kaXNwbGF5OmhvdmVye1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC44O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAud2VhdGhlci1pbmZve1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgIHN2Z3tcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuc2VhcmNoe1xcclxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICAgICAgICAgICAgICBpbnB1dHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB3aGl0ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAmOjpwbGFjZWhvbGRlcntcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuNzJyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAmOmZvY3Vze1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgI3NlYXJjaC1pY29ue1xcclxcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAzNSU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA4NSU7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVye1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuZXJyb3J7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5yaWdodC1zaWRle1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93OyAgICAgXFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgICAgICAgICAgICAgIC5kZXRhaWx7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAuZGV0YWlse1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgc3Zne1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLmRldGFpbC10ZXh0e1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgcHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgaDR7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5ib2R5LWluZm9ybWF0aW9ue1xcclxcbiAgICAgICAgcGFkZGluZzogNXJlbTtcXHJcXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmRheXMtb2Ytd2Vla3tcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHJcXG4gICAgICAgICAgICAuZGF5LWNvbnRhaW5lcntcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xcclxcbiAgICAgICAgICAgICAgICAuZGF5e1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGg0LCBoNSwgcHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBoNHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBoNXtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgLmRheS1pY29ue1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgQVBJX0tFWSA9ICc5NmY3NDAxOTI4M2EzZjhjZGM2OWI2MDAyNjczMmVjMic7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmaXJzdERheUZvcmVDYXN0UmVxdWVzdChkYXRhKXtcclxuICAgIGNvbnN0IHRvdGFsRGF0YSA9IGRhdGFbJ3RvdGFsRGF0YSddO1xyXG4gICAgY29uc3QgZm9yZUNhc3RSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHt0b3RhbERhdGEuY2l0eS5jb29yZC5sYXR9Jmxvbj0ke3RvdGFsRGF0YS5jaXR5LmNvb3JkLmxvbn0mdW5pdHM9aW1wZXJpYWwmcHJlY2lwaXRhdGlvbi5tb2RlPSdyYWluJyZhcHBpZD0ke0FQSV9LRVl9YCk7XHJcbiAgICBjb25zdCBmb3JlQ2FzdERhdGEgPSBhd2FpdCBmb3JlQ2FzdFJlc3BvbnNlLmpzb24oKTtcclxuICAgIGlmKGZvcmVDYXN0UmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IGZldGNoIGZvcmVjYXN0IGRhdGEnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmb3JlQ2FzdERhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdENpdHkoY2l0eU5hbWUpe1xyXG4gICAgbGV0IHJldHVybkNpdHkgPSAnJztcclxuICAgIGlmIChjaXR5TmFtZSkge1xyXG4gICAgICAgIC8vIHJlbW92ZSB3aGl0ZXNwYWNlIGZvciB0aGUgYXBpIGNhbGxcclxuICAgICAgICAgcmV0dXJuQ2l0eSA9IGNpdHlOYW1lXHJcbiAgICAgICAgICAucmVwbGFjZSgvKFxccyskfF5cXHMrKS9nLCAnJykgLy8gcmVtb3ZlIHdoaXRlc3BhY2UgZnJvbSBiZWdpbmluZyBhbmQgZW5kIG9mIHN0cmluZ1xyXG4gICAgICAgICAgLnJlcGxhY2UoLygsXFxzKykvZywgJywnKSAvLyByZW1vdmUgYW55IHdoaXRlIHNwYWNlIHRoYXQgZm9sbG93cyBhIGNvbW1hXHJcbiAgICAgICAgICAucmVwbGFjZSgvKFxccyssKS9nLCAnLCcpIC8vIHJlbW92ZSBhbnkgd2hpdGUgc3BhY2UgdGhhdCBwcmVjZWVkcyBhIGNvbW1hXHJcbiAgICAgICAgICAucmVwbGFjZSgvXFxzKy9nLCAnKycpOyAvLyByZXBsYWNlIGFueSByZW1haW5pbmcgd2hpdGUgc3BhY2Ugd2l0aCArLCBzbyBpdCB3b3JrcyBpbiBhcGkgY2FsbFxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiByZXR1cm5DaXR5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1RpbWUoaW5wdXQpe1xyXG4gICAgaWYoaW5wdXQgPT0gJzIxOjAwOjAwJyB8fCBpbnB1dCA9PSAnMDA6MDA6MDAnKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKXtcclxuICAgIGxldCBkYXRlVW5mb3JtYXR0ZWQgPSBkYXRlO1xyXG4gICAgbGV0IGRhdGVVbmZvcm1hdHRlZEFycmF5ID0gZGF0ZVVuZm9ybWF0dGVkLnNwbGl0KCcgJyk7XHJcbiAgICBsZXQgdGltZVZhbGlkYXRpb24gPSBjaGVja1RpbWUoZGF0ZVVuZm9ybWF0dGVkQXJyYXlbMV0pO1xyXG4gICAgcmV0dXJuIFt0aW1lVmFsaWRhdGlvbiwgZGF0ZVVuZm9ybWF0dGVkQXJyYXlbMF1dO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvdmVyUmlkZUZpcnN0RGF5Rm9yZWNhc3QoZGF0YSl7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XHJcbiAgICBmaXJzdERheUZvcmVDYXN0UmVxdWVzdChkYXRhKS50aGVuKGZvcmVjYXN0ID0+e1xyXG4gICAgICAgIGRhdGFba2V5c1swXV0gPSBmb3JlY2FzdDtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGaXZlRGF5Rm9yZWNhc3QoZGF0YSl7XHJcbiAgICBjb25zdCBsaXN0ID0gZGF0YS5saXN0O1xyXG4gICAgbGV0IGRheUZvcmVjYXN0cyA9IHt9O1xyXG4gICAgbGlzdC5mb3JFYWNoKGl0ZW0gPT57XHJcbiAgICAgICBsZXQgdGVtcCA9IGZvcm1hdERhdGUoaXRlbS5kdF90eHQpO1xyXG4gICAgICAgaWYodGVtcFswXSl7XHJcbiAgICAgICAgICAgIGlmKGRheUZvcmVjYXN0c1t0ZW1wWzFdXSl7XHJcbiAgICAgICAgICAgICAgICBkYXlGb3JlY2FzdHNbdGVtcFsxXV0ucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBkYXlGb3JlY2FzdHNbdGVtcFsxXV0gPSBbXTtcclxuICAgICAgICAgICAgICAgIGRheUZvcmVjYXN0c1t0ZW1wWzFdXS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgZGF5Rm9yZWNhc3RzWyd0b3RhbERhdGEnXSA9IGRhdGE7XHJcbiAgICBvdmVyUmlkZUZpcnN0RGF5Rm9yZWNhc3QoZGF5Rm9yZWNhc3RzKTtcclxuICAgIHJldHVybiBkYXlGb3JlY2FzdHM7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZvcmVDYXN0UmVxdWVzdChpbnB1dCl7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT0ke2lucHV0fSZhcHBpZD0ke0FQSV9LRVl9JnVuaXRzPWltcGVyaWFsYCk7XHJcbiAgICBpZihyZXNwb25zZS5zdGF0dXMgIT09IDIwMCl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgZmV0Y2ggZm9yZWNhc3QgZGF0YScpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIGNvbnN0IGZvcmVjYXN0ID0gZ2V0Rml2ZURheUZvcmVjYXN0KGRhdGEpO1xyXG4gICAgcmV0dXJuIGZvcmVjYXN0O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQge2Zvcm1hdENpdHksIGZvcmVDYXN0UmVxdWVzdH07IiwiY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XHJcbmNvbnN0IGZvcmVjYXN0SGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlY2FzdC1oZWFkaW5nJyk7XHJcbmNvbnN0IGNpdHlIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKTtcclxuY29uc3QgZGF0ZUhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xyXG5jb25zdCB0aW1lSGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lJyk7XHJcbmNvbnN0IHRlbXBlcmF0dXJlSGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wZXJhdHVyZScpO1xyXG5jb25zdCB3ZWF0aGVySWNvbkhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1pbmZvJyk7XHJcbmNvbnN0IGRldGFpbHNGZWVsc0xpa2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmVlbHMtbGlrZScpO1xyXG5jb25zdCBkZXRhaWxzSHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtaWRpdHknKTtcclxuY29uc3QgZGV0YWlsc1dpbmRTcGVlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kLXNwZWVkJyk7XHJcbmxldCBmb3JlY2FzdDtcclxubGV0IGtleXM7XHJcblxyXG5cclxuIGZ1bmN0aW9uIGRvbVNldEZvcmVjYXN0KGlucHV0KXtcclxuICAgIGZvcmVjYXN0ID0gaW5wdXQ7XHJcbiAgICBrZXlzID0gT2JqZWN0LmtleXMoZm9yZWNhc3QpO1xyXG4gICAgY29uc29sZS5sb2coZm9yZWNhc3QpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PntcclxuICAgICAgICBwb3B1bGF0ZUNvbnRlbnQoKTtcclxuICAgIH0sNTAwKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjYXBpdGFsaXplVGV4dChpbnB1dCl7XHJcbiAgICBsZXQgaW5wQXJyID0gaW5wdXQuc3BsaXQoJyAnKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBpbnBBcnIubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIGlucEFycltpXSA9IGlucEFycltpXVswXS50b1VwcGVyQ2FzZSgpICsgaW5wQXJyW2ldLnN1YnN0cigxKTtcclxuICAgIH1cclxuICAgIHJldHVybiBpbnBBcnIuam9pbignICcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRBTVBNKGRhdGUpIHtcclxuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcclxuICAgIHZhciBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICB2YXIgYW1wbSA9IGhvdXJzID49IDEyID8gJ3BtJyA6ICdhbSc7XHJcbiAgICBob3VycyA9IGhvdXJzICUgMTI7XHJcbiAgICBob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjsgLy8gdGhlIGhvdXIgJzAnIHNob3VsZCBiZSAnMTInXHJcbiAgICBtaW51dGVzID0gbWludXRlcyA8IDEwID8gJzAnK21pbnV0ZXMgOiBtaW51dGVzO1xyXG4gICAgdmFyIHN0clRpbWUgPSBob3VycyArICc6JyArIG1pbnV0ZXMgKyAnICcgKyBhbXBtO1xyXG4gICAgcmV0dXJuIHN0clRpbWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRJY29uKGNvZGUpIHtcclxuICAgIGlmIChjb2RlID09PSAnMDFkJykge1xyXG4gICAgICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIiBmaWxsPVwiI2Y1ZjVmNVwiIHZpZXdCb3g9XCIzIDMgMjYgMjZcIj5cclxuICAgICAgPHRpdGxlPnN1bjwvdGl0bGU+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTYgOWMtMy44NTkgMC03IDMuMTQxLTcgN3MzLjE0MSA3IDcgNyA3LTMuMTQxIDctN2MwLTMuODU5LTMuMTQxLTctNy03ek0xNiAyMWMtMi43NjIgMC01LTIuMjM4LTUtNXMyLjIzOC01IDUtNSA1IDIuMjM4IDUgNS0yLjIzOCA1LTUgNXpNMTYgN2MwLjU1MiAwIDEtMC40NDggMS0xdi0yYzAtMC41NTItMC40NDgtMS0xLTFzLTEgMC40NDgtMSAxdjJjMCAwLjU1MiAwLjQ0OCAxIDEgMXpNMTYgMjVjLTAuNTUyIDAtMSAwLjQ0OC0xIDF2MmMwIDAuNTUyIDAuNDQ4IDEgMSAxczEtMC40NDggMS0xdi0yYzAtMC41NTItMC40NDgtMS0xLTF6TTIzLjc3NyA5LjYzNWwxLjQxNC0xLjQxNGMwLjM5MS0wLjM5MSAwLjM5MS0xLjAyMyAwLTEuNDE0cy0xLjAyMy0wLjM5MS0xLjQxNCAwbC0xLjQxNCAxLjQxNGMtMC4zOTEgMC4zOTEtMC4zOTEgMS4wMjMgMCAxLjQxNHMxLjAyMyAwLjM5MSAxLjQxNCAwek04LjIyMyAyMi4zNjVsLTEuNDE0IDEuNDE0Yy0wLjM5MSAwLjM5MS0wLjM5MSAxLjAyMyAwIDEuNDE0czEuMDIzIDAuMzkxIDEuNDE0IDBsMS40MTQtMS40MTRjMC4zOTEtMC4zOTIgMC4zOTEtMS4wMjMgMC0xLjQxNHMtMS4wMjMtMC4zOTItMS40MTQgMHpNNyAxNmMwLTAuNTUyLTAuNDQ4LTEtMS0xaC0yYy0wLjU1MiAwLTEgMC40NDgtMSAxczAuNDQ4IDEgMSAxaDJjMC41NTIgMCAxLTAuNDQ4IDEtMXpNMjggMTVoLTJjLTAuNTUyIDAtMSAwLjQ0OC0xIDFzMC40NDggMSAxIDFoMmMwLjU1MiAwIDEtMC40NDggMS0xcy0wLjQ0OC0xLTEtMXpNOC4yMjEgOS42MzVjMC4zOTEgMC4zOTEgMS4wMjQgMC4zOTEgMS40MTQgMHMwLjM5MS0xLjAyMyAwLTEuNDE0bC0xLjQxNC0xLjQxNGMtMC4zOTEtMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQgMHMtMC4zOTEgMS4wMjMgMCAxLjQxNGwxLjQxNCAxLjQxNHpNMjMuNzc5IDIyLjM2M2MtMC4zOTItMC4zOTEtMS4wMjMtMC4zOTEtMS40MTQgMHMtMC4zOTIgMS4wMjMgMCAxLjQxNGwxLjQxNCAxLjQxNGMwLjM5MSAwLjM5MSAxLjAyMyAwLjM5MSAxLjQxNCAwczAuMzkxLTEuMDIzIDAtMS40MTRsLTEuNDE0LTEuNDE0elwiLz5cclxuICAgICAgPC9zdmc+YDtcclxuICAgIH1cclxuICBcclxuICAgIGlmIChjb2RlID09PSAnMDFuJykge1xyXG4gICAgICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIiBmaWxsPVwiI2Y1ZjVmNVwiIHZpZXdCb3g9XCI4LjIxIDguMjEgMTUuNTcgMTUuNTdcIj5cclxuICAgICAgPHRpdGxlPm1vb248L3RpdGxlPlxyXG4gICAgICA8cGF0aCBkPVwiTTIxLjg2NiAyMS40NDdjLTMuMTE3IDMuMTItOC4xOTMgMy4xMi0xMS4zMTMgMHMtMy4xMi04LjE5NSAwLTExLjMxNGMwLjgyNi0wLjgyNCAxLjgzMi0xLjQ1MyAyLjk4OS0xLjg2MyAwLjM2NS0wLjEyOCAwLjc2OC0wLjAzNSAxLjAzOSAwLjIzNyAwLjI3NCAwLjI3MyAwLjM2NiAwLjY3NyAwLjIzNyAxLjAzOS0wLjc4NCAyLjIxMS0wLjI1IDQuNjA0IDEuMzkxIDYuMjQ1IDEuNjM4IDEuNjM5IDQuMDMxIDIuMTcyIDYuMjQ1IDEuMzkxIDAuMzYyLTAuMTI5IDAuNzY3LTAuMDM2IDEuMDM5IDAuMjM3IDAuMjczIDAuMjcxIDAuMzY1IDAuNjc2IDAuMjM2IDEuMDM5LTAuNDA4IDEuMTU3LTEuMDM4IDIuMTY0LTEuODYzIDIuOTg5ek0xMS45NjcgMTEuNTQ3Yy0yLjM0IDIuMzQtMi4zNCA2LjE0NyAwIDguNDg2IDIuNSAyLjUwMSA2Ljc1OCAyLjI3NiA4LjkzNy0wLjUxLTIuMjQ3IDAuMTQxLTQuNDYxLTAuNjcxLTYuMTA5LTIuMzE4cy0yLjQ1OC0zLjg2MS0yLjMxOC02LjEwOGMtMC4xOCAwLjE0MS0wLjM1IDAuMjktMC41MSAwLjQ1MXpcIi8+XHJcbiAgICAgIDwvc3ZnPmA7XHJcbiAgICB9XHJcbiAgICBpZiAoY29kZSA9PT0gJzAyZCcpIHtcclxuICAgICAgcmV0dXJuIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIgZmlsbD1cIiNmNWY1ZjVcIiB2aWV3Qm94PVwiMCAwIDMyIDMyXCI+XHJcbiAgICAgIDx0aXRsZT5jbG91ZHktZGF5PC90aXRsZT5cclxuICAgICAgPHBhdGggZD1cIk0xMyA0YzAuNTUyIDAgMS0wLjQ0OCAxLTF2LTJjMC0wLjU1Mi0wLjQ0OC0xLTEtMXMtMSAwLjQ0OC0xIDF2MmMwIDAuNTUyIDAuNDQ4IDEgMSAxek0yMC43NzcgNi42MzVsMS40MTQtMS40MTRjMC4zOTEtMC4zOTEgMC4zOTEtMS4wMjMgMC0xLjQxNHMtMS4wMjMtMC4zOTEtMS40MTQgMGwtMS40MTQgMS40MTRjLTAuMzkxIDAuMzkxLTAuMzkxIDEuMDIzIDAgMS40MTRzMS4wMjMgMC4zOTEgMS40MTQgMHpNMSAxNGgyYzAuNTUyIDAgMS0wLjQ0OCAxLTFzLTAuNDQ4LTEtMS0xaC0yYy0wLjU1MiAwLTEgMC40NDgtMSAxczAuNDQ4IDEgMSAxek0yMiAxM2MwIDAuNTUyIDAuNDQ4IDEgMSAxaDJjMC41NTIgMCAxLTAuNDQ4IDEtMXMtMC40NDgtMS0xLTFoLTJjLTAuNTUyIDAtMSAwLjQ0OC0xIDF6TTUuMjIxIDYuNjM1YzAuMzkxIDAuMzkxIDEuMDI0IDAuMzkxIDEuNDE0IDBzMC4zOTEtMS4wMjMgMC0xLjQxNGwtMS40MTQtMS40MTRjLTAuMzkxLTAuMzkxLTEuMDIzLTAuMzkxLTEuNDE0IDBzLTAuMzkxIDEuMDIzIDAgMS40MTRsMS40MTQgMS40MTR6TTI1IDE2Yy0wLjMzMiAwLTAuNjYgMC4wMjMtMC45ODcgMC4wNzAtMS4wNDgtMS40My0yLjQ0NS0yLjUyMS00LjAyOS0zLjIxOS0wLjA4MS0zLjc4OS0zLjE3Ni02Ljg1Mi02Ljk4NC02Ljg1Mi0zLjg1OSAwLTcgMy4xNDEtNyA3IDAgMS4wOTAgMC4yNzEgMi4xMDkgMC43MTkgMy4wMjctMy43MjcgMC4xNTItNi43MTkgMy4yMTEtNi43MTkgNi45NzMgMCAzLjg1OSAzLjE0MSA3IDcgNyAwLjg1NiAwIDEuNjkzLTAuMTU2IDIuNDgyLTAuNDU4IDEuODEgMS41NzggNC4xMTIgMi40NTggNi41MTggMi40NTggMi40MDkgMCA0LjcwOC0wLjg4IDYuNTE4LTIuNDU4IDAuNzg5IDAuMzAyIDEuNjI2IDAuNDU4IDIuNDgyIDAuNDU4IDMuODU5IDAgNy0zLjE0MSA3LTdzLTMuMTQxLTctNy03ek0xMyA4YzIuNDg4IDAgNC41MzUgMS44MjMgNC45MTkgNC4yMDMtMC42MjYtMC4xMjUtMS4yNjYtMC4yMDMtMS45MTktMC4yMDMtMi44NzEgMC01LjUzMSAxLjIzOC03LjM5OCAzLjMyOC0wLjM3MS0wLjY5OC0wLjYwMi0xLjQ4Mi0wLjYwMi0yLjMyOCAwLTIuNzYyIDIuMjM4LTUgNS01ek0yNSAyOGMtMS4wNzAgMC0yLjA1Ny0wLjM0NC0yLjg3MS0wLjkxNy0xLjQ2NyAxLjc2OC0zLjY1MiAyLjkxNy02LjEyOSAyLjkxN3MtNC42NjItMS4xNDgtNi4xMjktMi45MTdjLTAuODEzIDAuNTczLTEuODAxIDAuOTE3LTIuODcxIDAuOTE3LTIuNzYyIDAtNS0yLjIzOC01LTVzMi4yMzgtNSA1LTVjMC40ODQgMCAwLjk0MSAwLjA5MSAxLjM4MyAwLjIyMSAwLjE3NiAwLjA0OSAwLjM1NCAwLjA4OSAwLjUyIDAuMTU4IDAuMjczLTAuNTM1IDAuNjE3LTEuMDI1IDAuOTk5LTEuNDg0IDEuNDYxLTEuNzU4IDMuNjM0LTIuODk1IDYuMDk5LTIuODk1IDAuNjMzIDAgMS4yNCAwLjA5MSAxLjgyOCAwLjIzMiAwLjY2IDAuMTU2IDEuMjg0IDAuMzkzIDEuODY1IDAuNzA2IDEuNDU2IDAuNzczIDIuNjUxIDEuOTcxIDMuNDA0IDMuNDQxIDAuNTg3LTAuMjQyIDEuMjI5LTAuMzc5IDEuOTA0LTAuMzc5IDIuNzYyIDAgNSAyLjIzOCA1IDVzLTIuMjM4IDUtNSA1elwiLz5cclxuICAgICAgPC9zdmc+YDtcclxuICAgIH1cclxuICAgIGlmIChjb2RlID09PSAnMDJuJykge1xyXG4gICAgICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIiBmaWxsPVwiI2Y1ZjVmNVwiIHZpZXdCb3g9XCIwIDIuNDIgMzIgMjkuNTdcIj5cclxuICAgICAgPHRpdGxlPmNsb3VkeS1uaWdodDwvdGl0bGU+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMjcuMTkxIDE2LjM4NWMwLjMwNS0wLjIyNyAwLjYxMy0wLjQ0OSAwLjg4OS0wLjcyNSAwLjgyNi0wLjgyNyAxLjQ1NC0xLjgzMyAxLjg2Mi0yLjk5MSAwLjEzLTAuMzYyIDAuMDM4LTAuNzY4LTAuMjM2LTEuMDM5LTAuMjcyLTAuMjczLTAuNjc2LTAuMzY2LTEuMDM5LTAuMjM3LTIuMjEyIDAuNzgxLTQuNjA1IDAuMjUtNi4yNDQtMS4zOTEtMS42NDEtMS42NDEtMi4xNzQtNC4wMzMtMS4zOTEtNi4yNDQgMC4xMjgtMC4zNjMgMC4wMzYtMC43NjctMC4yMzctMS4wNDAtMC4yNzEtMC4yNzEtMC42NzYtMC4zNjUtMS4wMzktMC4yMzctMS4xNTkgMC40MTEtMi4xNjQgMS4wMzktMi45OSAxLjg2NC0yLjA5NiAyLjA5NC0yLjc0OSA1LjA2My0yLjAzMCA3LjczNy0yLjcwMyAwLjM0NS01LjEzMyAxLjc4MS02Ljc1MSAzLjk4Ny0wLjMyNy0wLjA0Ny0wLjY1NS0wLjA3MC0wLjk4Ny0wLjA3MC0zLjg1OSAwLTcgMy4xNDEtNyA3czMuMTQxIDcgNyA3YzAuODU2IDAgMS42OTMtMC4xNTYgMi40ODItMC40NTggMS44MSAxLjU3OCA0LjExMiAyLjQ1OCA2LjUxOCAyLjQ1OCAyLjQwOSAwIDQuNzA4LTAuODggNi41MTgtMi40NTggMC43ODkgMC4zMDIgMS42MjYgMC40NTggMi40ODIgMC40NTggMy44NTkgMCA3LTMuMTQxIDctNyAwLTMuMDkwLTIuMDI2LTUuNjg5LTQuODA5LTYuNjE1ek0xOC4xODIgNS43NmMwLjE1OS0wLjE2MSAwLjMyOS0wLjMxMSAwLjUwOS0wLjQ1Mi0wLjE0MSAyLjI0OSAwLjY3MSA0LjQ2MSAyLjMxOSA2LjEwOCAxLjY0OCAxLjY0OCAzLjg2MSAyLjQ1OCA2LjEwOSAyLjMxOS0wLjg2MiAxLjA5OS0yLjA1MCAxLjc4My0zLjMyIDIuMDc0LTEuNzExLTIuMTcyLTQuMjI1LTMuNTM5LTYuOTk3LTMuNzYyLTAuNzY3LTIuMTIyLTAuMzE4LTQuNTkgMS4zOC02LjI4OHpNMjUgMjhjLTEuMDcwIDAtMi4wNTctMC4zNDQtMi44NzEtMC45MTctMS40NjcgMS43NjgtMy42NTIgMi45MTctNi4xMjkgMi45MTdzLTQuNjYyLTEuMTQ4LTYuMTI5LTIuOTE3Yy0wLjgxMyAwLjU3My0xLjgwMSAwLjkxNy0yLjg3MSAwLjkxNy0yLjc2MiAwLTUtMi4yMzgtNS01czIuMjM4LTUgNS01YzAuNjc2IDAgMS4zMTYgMC4xMzcgMS45MDIgMC4zNzkgMS4yNjItMi40NiAzLjczNC00LjE4MSA2LjY0NS00LjM0NiAwLjE1Mi0wLjAwOSAwLjMwMS0wLjAzMyAwLjQ1My0wLjAzMyAwLjgwNyAwIDEuNTgyIDAuMTI2IDIuMzEzIDAuMzQ5IDAuOTg3IDAuMzAyIDEuODg3IDAuNzk0IDIuNjY4IDEuNDI4IDAuNzQ2IDAuNjA1IDEuMzcxIDEuMzQ4IDEuODYzIDIuMTgxIDAuMDgzIDAuMTQxIDAuMTc3IDAuMjczIDAuMjUzIDAuNDIxIDAuNTg3LTAuMjQyIDEuMjI5LTAuMzc5IDEuOTA0LTAuMzc5IDIuNzYyIDAgNSAyLjIzOCA1IDVzLTIuMjM4IDUtNSA1elwiLz5cclxuICAgICAgPC9zdmc+YDtcclxuICAgIH1cclxuICAgIGlmIChjb2RlID09PSAnMDNkJyB8fCBjb2RlID09PSAnMDNuJykge1xyXG4gICAgICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIiBmaWxsPVwiI2Y1ZjVmNVwiIHZpZXdCb3g9XCIwIDYgMzIgMjBcIj5cclxuICAgICAgPHRpdGxlPmNsb3VkPC90aXRsZT5cclxuICAgICAgPHBhdGggZD1cIk0yNSAxMGMtMC4zMzIgMC0wLjY2IDAuMDIzLTAuOTg3IDAuMDcwLTEuODY3LTIuNTQ0LTQuODE0LTQuMDcwLTguMDEzLTQuMDcwcy02LjE0NSAxLjUyNi04LjAxMyA0LjA3MGMtMC4zMjctMC4wNDctMC42NTUtMC4wNzAtMC45ODctMC4wNzAtMy44NTkgMC03IDMuMTQxLTcgN3MzLjE0MSA3IDcgN2MwLjg1NiAwIDEuNjkzLTAuMTU2IDIuNDgyLTAuNDU4IDEuODEgMS41NzggNC4xMTIgMi40NTggNi41MTggMi40NTggMi40MDkgMCA0LjcwOC0wLjg4IDYuNTE4LTIuNDU4IDAuNzg5IDAuMzAyIDEuNjI2IDAuNDU4IDIuNDgyIDAuNDU4IDMuODU5IDAgNy0zLjE0MSA3LTdzLTMuMTQxLTctNy03ek0yNSAyMmMtMS4wNzAgMC0yLjA1Ny0wLjM0NC0yLjg3MS0wLjkxNy0xLjQ2NyAxLjc2OC0zLjY1MiAyLjkxNy02LjEyOSAyLjkxN3MtNC42NjItMS4xNDgtNi4xMjktMi45MTdjLTAuODEzIDAuNTczLTEuODAxIDAuOTE3LTIuODcxIDAuOTE3LTIuNzYyIDAtNS0yLjIzOC01LTVzMi4yMzgtNSA1LTVjMC42NzYgMCAxLjMxNiAwLjEzOCAxLjkwMiAwLjM4IDEuMzI3LTIuNTg4IDMuOTkxLTQuMzggNy4wOTgtNC4zOHM1Ljc3MSAxLjc5MiA3LjA5NiA0LjM4YzAuNTg3LTAuMjQyIDEuMjI5LTAuMzggMS45MDQtMC4zOCAyLjc2MiAwIDUgMi4yMzggNSA1cy0yLjIzOCA1LTUgNXpcIi8+XHJcbiAgICAgIDwvc3ZnPmA7XHJcbiAgICB9XHJcbiAgICBpZiAoY29kZSA9PT0gJzA0ZCcgfHwgY29kZSA9PT0gJzA0bicpIHtcclxuICAgICAgcmV0dXJuIGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIgZmlsbD1cIiNmNWY1ZjVcIiB2aWV3Qm94PVwiMCA2LjU3IDMyIDI1LjQzXCI+XHJcbiAgICAgIDx0aXRsZT5jbG91ZHk8L3RpdGxlPlxyXG4gICAgICA8cGF0aCBkPVwiTTMyIDE1YzAtMy4wNzMtMi41LTUuNTcyLTUuNTczLTUuNTcyLTAuMTUgMC0wLjI5OCAwLjAwNy0wLjQ0NyAwLjAxOC0xLjQ0NS0xLjgwMy0zLjYyNC0yLjg3NC01Ljk4LTIuODc0LTIuMzU1IDAtNC41MzUgMS4wNzAtNS45OCAyLjg3NC0wLjE0OC0wLjAxMi0wLjI5OC0wLjAxOC0wLjQ0OS0wLjAxOC0zLjA3MC0wLTUuNTcgMi40OTktNS41NyA1LjU3MiAwIDAuMzIyIDAuMDQzIDAuNjMxIDAuMDk0IDAuOTQtMC4wMzQgMC4wNDQtMC4wNzQgMC4wODUtMC4xMDcgMC4xMy0wLjMyNy0wLjA0Ny0wLjY1NS0wLjA3MC0wLjk4Ny0wLjA3MC0zLjg1OSAwLTcgMy4xNDEtNyA3czMuMTQxIDcgNyA3YzAuODU2IDAgMS42OTMtMC4xNTYgMi40ODItMC40NTggMS44MSAxLjU3OCA0LjExMiAyLjQ1OCA2LjUxOCAyLjQ1OCAyLjQwOSAwIDQuNzA4LTAuODggNi41MTgtMi40NTggMC43ODkgMC4zMDIgMS42MjYgMC40NTggMi40ODIgMC40NTggMy44NTkgMCA3LTMuMTQxIDctNyAwLTEuNjA1LTAuNTY1LTMuMDY4LTEuNDc5LTQuMjUgMC45MTEtMC45OTQgMS40NzktMi4zMDIgMS40NzktMy43NXpNMjUgMjhjLTEuMDcwIDAtMi4wNTctMC4zNDQtMi44NzEtMC45MTctMS40NjcgMS43NjgtMy42NTIgMi45MTctNi4xMjkgMi45MTdzLTQuNjYyLTEuMTQ4LTYuMTI5LTIuOTE3Yy0wLjgxMyAwLjU3My0xLjgwMSAwLjkxNy0yLjg3MSAwLjkxNy0yLjc2MiAwLTUtMi4yMzgtNS01czIuMjM4LTUgNS01YzAuNjc2IDAgMS4zMTYgMC4xMzcgMS45MDIgMC4zNzkgMC4wMzUtMC4wNjYgMC4wNzgtMC4xMjUgMC4xMTMtMC4xODkgMC4zNTItMC42NDIgMC43ODUtMS4yMyAxLjI5Mi0xLjc1MyAxLjQ0My0xLjQ5NSAzLjQ0OC0yLjQzOCA1LjY5My0yLjQzOCAzLjEwNyAwIDUuNzcxIDEuNzkyIDcuMDk2IDQuMzc5IDAuMzUzLTAuMTQ1IDAuNzI5LTAuMjM4IDEuMTE3LTAuMzAxbDAuNzg3LTAuMDc4YzAuNzcxIDAgMS40OTIgMC4xOSAyLjE0NSAwLjUgMC43MDcgMC4zMzggMS4zMTQgMC44MzYgMS43OSAxLjQ0OSAwLjY1NiAwLjg0NSAxLjA2NSAxLjg5NyAxLjA2NSAzLjA1MSAwIDIuNzYyLTIuMjM4IDUtNSA1ek0yOS4wOTggMTcuMzUyYy0xLjE1NS0wLjg0MS0yLjU2My0xLjM1Mi00LjA5OC0xLjM1Mi0wLjMzMiAwLTAuNjYgMC4wMjMtMC45ODcgMC4wNzAtMS44NjctMi41NDQtNC44MTQtNC4wNzAtOC4wMTMtNC4wNzAtMi4xMzMgMC00LjE0NSAwLjY5LTUuODA5IDEuODk2IDAuNDY3LTEuNDI4IDEuNzk2LTIuNDY3IDMuMzc5LTIuNDY3IDAuNDg0IDAgMC45NDEgMC4wOTggMS4zNTkgMC4yNzEgMC45NDktMS44NDggMi44NTItMy4xMjYgNS4wNzAtMy4xMjZzNC4xMjIgMS4yNzkgNS4wNjggMy4xMjZjMC40MjEtMC4xNzMgMC44OC0wLjI3MSAxLjM1OS0wLjI3MSAxLjk3NCAwIDMuNTczIDEuNTk5IDMuNTczIDMuNTcyIDAgMC45MDUtMC4zNDggMS43MjEtMC45MDIgMi4zNTF6XCIvPlxyXG4gICAgICA8L3N2Zz5gO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvZGUgPT09ICcwOWQnIHx8IGNvZGUgPT09ICcwOW4nIHx8IGNvZGUgPT09ICcxMGQnIHx8IGNvZGUgPT09ICcxMG4nKSB7XHJcbiAgICAgIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIGZpbGw9XCIjZjVmNWY1XCIgdmlld0JveD1cIjAgMCAzMiAzMlwiPlxyXG4gICAgICA8dGl0bGU+cmFpbnk8L3RpdGxlPlxyXG4gICAgICA8cGF0aCBkPVwiTTI1IDRjLTAuMzMyIDAtMC42NiAwLjAyMy0wLjk4NyAwLjA3MC0xLjg2Ny0yLjU0NC00LjgxNC00LjA3MC04LjAxMy00LjA3MHMtNi4xNDUgMS41MjYtOC4wMTMgNC4wNzBjLTAuMzI3LTAuMDQ3LTAuNjU1LTAuMDcwLTAuOTg3LTAuMDcwLTMuODU5IDAtNyAzLjE0MS03IDdzMy4xNDEgNyA3IDdjMC44NTYgMCAxLjY5My0wLjE1NiAyLjQ4Mi0wLjQ1OCAxLjgxIDEuNTc4IDQuMTEyIDIuNDU4IDYuNTE4IDIuNDU4IDIuNDA5IDAgNC43MDgtMC44OCA2LjUxOC0yLjQ1OCAwLjc4OSAwLjMwMiAxLjYyNiAwLjQ1OCAyLjQ4MiAwLjQ1OCAzLjg1OSAwIDctMy4xNDEgNy03cy0zLjE0MS03LTctN3pNMjUgMTZjLTEuMDcwIDAtMi4wNTctMC4zNDQtMi44NzEtMC45MTctMS40NjcgMS43NjgtMy42NTIgMi45MTctNi4xMjkgMi45MTdzLTQuNjYyLTEuMTQ4LTYuMTI5LTIuOTE3Yy0wLjgxMyAwLjU3My0xLjgwMSAwLjkxNy0yLjg3MSAwLjkxNy0yLjc2MiAwLTUtMi4yMzgtNS01czIuMjM4LTUgNS01YzAuNjc2IDAgMS4zMTYgMC4xMzggMS45MDIgMC4zOCAxLjMyNy0yLjU4OCAzLjk5MS00LjM4IDcuMDk4LTQuMzhzNS43NzEgMS43OTIgNy4wOTYgNC4zOGMwLjU4Ny0wLjI0MiAxLjIyOS0wLjM4IDEuOTA0LTAuMzggMi43NjIgMCA1IDIuMjM4IDUgNXMtMi4yMzggNS01IDV6TTE0LjA2MyAzMGMwIDEuMTA1IDAuODk1IDIgMiAyczItMC44OTUgMi0yLTItNC0yLTQtMiAyLjg5NS0yIDR6TTIyIDI4YzAgMS4xMDUgMC44OTUgMiAyIDJzMi0wLjg5NSAyLTItMi00LTItNC0yIDIuODk1LTIgNHpNNiAyNGMwIDEuMTA1IDAuODk0IDIgMiAyczItMC44OTUgMi0yLTItNC0yLTQtMiAyLjg5NS0yIDR6XCIvPlxyXG4gICAgICA8L3N2Zz5gO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvZGUgPT09ICcxMWQnIHx8IGNvZGUgPT09ICcxMW4nKSB7XHJcbiAgICAgIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIGZpbGw9XCIjZjVmNWY1XCIgdmlld0JveD1cIjAgMCAzMiAzMlwiPlxyXG4gICAgICA8dGl0bGU+bGlnaHRuaW5nPC90aXRsZT5cclxuICAgICAgPHBhdGggZD1cIk0xMiAyNGwyIDItMiA2IDYtNi0yLTIgMi00LTYgNHpNMzIgOC40MjdjMC0zLjA3Mi0yLjUtNS41Ny01LjU3My01LjU3LTAuMTUgMC0wLjI5OCAwLjAwNS0wLjQ0NyAwLjAxNy0xLjQ0NS0xLjgwMi0zLjYyNC0yLjg3NC01Ljk4LTIuODc0LTIuMzU1IDAtNC41MzUgMS4wNzItNS45OCAyLjg3NC0wLjE0OC0wLjAxMi0wLjI5OC0wLjAxNy0wLjQ0OS0wLjAxNy0zLjA3MCAwLTUuNTcgMi40OTktNS41NyA1LjU3IDAgMC4zMjIgMC4wNDMgMC42MzMgMC4wOTQgMC45NC0wLjAzNCAwLjA0NC0wLjA3NCAwLjA4NS0wLjEwNyAwLjEzLTAuMzI3LTAuMDQ3LTAuNjU1LTAuMDcwLTAuOTg3LTAuMDcwLTMuODU5IDAtNyAzLjE0MS03IDdzMy4xNDEgNyA3IDdjMC44NTYgMCAxLjY5My0wLjE1NiAyLjQ4Mi0wLjQ1OCAwLjA2OSAwLjA2MCAwLjE1MSAwLjEwMiAwLjIyMSAwLjE2bDEuNzctMS4xOGMtMC41OS0wLjQxOC0xLjE0MS0wLjg4My0xLjYwMi0xLjQzOC0wLjgxMyAwLjU3Mi0xLjgwMSAwLjkxNS0yLjg3MSAwLjkxNS0yLjc2MiAwLTUtMi4yMzctNS01IDAtMi43NiAyLjIzOC01IDUtNSAwLjY3NiAwIDEuMzE2IDAuMTM4IDEuOTAyIDAuMzggMC4wMzUtMC4wNjggMC4wNzgtMC4xMjUgMC4xMTMtMC4xOSAwLjM1Mi0wLjY0MiAwLjc4NS0xLjIyOSAxLjI5Mi0xLjc1MyAxLjQ0My0xLjQ5MyAzLjQ0OC0yLjQzOCA1LjY5My0yLjQzOCAzLjEwNyAwIDUuNzcxIDEuNzkyIDcuMDk2IDQuMzggMC4zNTMtMC4xNDYgMC43MjktMC4yNCAxLjExNy0wLjMwMmwwLjc4Ny0wLjA3OGMwLjc3MSAwIDEuNDkyIDAuMTkgMi4xNDUgMC41IDAuNzA3IDAuMzM5IDEuMzE0IDAuODM2IDEuNzkgMS40NSAwLjY1NiAwLjg0NSAxLjA2NSAxLjg5NiAxLjA2NSAzLjA1MCAwIDIuNzYzLTIuMjM4IDUtNSA1LTEuMDcwIDAtMi4wNTctMC4zNDQtMi44NzEtMC45MTUtMC44NzUgMS4wNTUtMi4wMjcgMS44NDgtMy4zMjIgMi4zNDhsLTAuMzc0IDAuNzQ2IDEuMTQxIDEuMTQxYzEuMDY2LTAuNDE1IDIuMDY0LTEuMDEyIDIuOTQ0LTEuNzc3IDAuNzg5IDAuMzAyIDEuNjI2IDAuNDU4IDIuNDgyIDAuNDU4IDMuODU5IDAgNy0zLjE0MSA3LTcgMC0xLjYwNC0wLjU2NS0zLjA2OC0xLjQ3OS00LjI1IDAuOTExLTAuOTkyIDEuNDc5LTIuMzAxIDEuNDc5LTMuNzV6TTI5LjA5OCAxMC43NzljLTEuMTU1LTAuODQtMi41NjMtMS4zNTItNC4wOTgtMS4zNTItMC4zMzIgMC0wLjY2IDAuMDIzLTAuOTg3IDAuMDcwLTEuODY3LTIuNTQzLTQuODE0LTQuMDcwLTguMDEzLTQuMDcwLTIuMTMzIDAtNC4xNDUgMC42OTEtNS44MDkgMS44OTcgMC40NjctMS40MjggMS43OTYtMi40NjcgMy4zNzktMi40NjcgMC40ODQgMCAwLjk0MSAwLjA5OCAxLjM1OSAwLjI3MSAwLjk0OS0xLjg0OSAyLjg1Mi0zLjEyOCA1LjA3MC0zLjEyOHM0LjEyMiAxLjI3OSA1LjA2OCAzLjEyOGMwLjQyMS0wLjE3MyAwLjg4LTAuMjcxIDEuMzU5LTAuMjcxIDEuOTc0IDAgMy41NzMgMS41OTkgMy41NzMgMy41NyAwIDAuOTA2LTAuMzQ4IDEuNzIzLTAuOTAyIDIuMzUyelwiLz5cclxuICAgICAgPC9zdmc+YDtcclxuICAgIH1cclxuICAgIGlmIChjb2RlID09PSAnMTNkJyB8fCBjb2RlID09PSAnMTNuJykge1xyXG4gICAgICByZXR1cm4gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIiBmaWxsPVwiI2Y1ZjVmNVwiIHZpZXdCb3g9XCIwLjUgMSA0Ny4wMSA0Ny4wMVwiPlxyXG4gICAgICA8dGl0bGU+c25vdzwvdGl0bGU+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMTQuNSAyNC41MDJjMCAxIDAuMTYgMS45NyAwLjQ0IDIuODcxbC00LjA4MCAyLjM1LTcuMjYtMS45NGMtMS4zMS0wLjM1LTIuNjYgMC40My0zLjAyMCAxLjcyOS0wLjM1IDEuMzExIDAuNDMgMi42NSAxLjc1IDNsNS44NyAxLjU3LTEuNTggNS44NGMtMC4zNSAxLjMwMSAwLjQzIDIuNjUgMS43NCAzIDEuMzIgMC4zNSAyLjY3LTAuNDMgMy4wMjAtMS43MzhsMS45NC03LjIyMSA0LjI3LTIuNDUxYzEuMTEgMS4wMTAgMi40NiAxLjc3MSAzLjk1IDIuMTcydjUuNWwtNS4zMiA0LjQ4OGMtMC45NiAwLjk5LTAuOTYgMi41OSAwIDMuNTkgMC45NiAwLjk5IDIuNTIgMC45OSAzLjQ4IDBsNC4zLTQuNDM5IDQuMyA0LjQzOWMwLjk2IDAuOTkgMi41MiAwLjk5IDMuNDc5IDAgMC45NjEtMSAwLjk2MS0yLjYgMC0zLjU5bC01LjMxOS00LjQ4OHYtNS41YzEuNDktMC40IDIuODQtMS4xNjIgMy45NS0yLjE3Mmw0LjI3IDIuNDUxIDEuOTQgNy4yMjFjMC4zNSAxLjMwOSAxLjY5OSAyLjA4OCAzLjAyMCAxLjczOCAxLjMxMS0wLjM1IDIuMDkxLTEuNjk5IDEuNzQtM2wtMS41OC01Ljg0IDUuODctMS41N2MxLjMyLTAuMzUgMi4xLTEuNjg5IDEuNzUtMy0wLjM1OS0xLjI5OS0xLjcxLTIuMDc4LTMuMDIwLTEuNzI5bC03LjI2MSAxLjkzOS00LjA3OS0yLjM1YzAuMjc5LTAuOSAwLjQzOS0xLjg3MSAwLjQzOS0yLjg3MXMtMC4xNi0xLjk3LTAuNDM5LTIuODhsNC4wNzktMi4zNCA3LjI2MSAxLjk0YzEuMzEgMC4zNSAyLjY2LTAuNDMxIDMuMDIwLTEuNzMgMC4zNS0xLjMxLTAuNDMtMi42NS0xLjc1LTNsLTUuODctMS41NyAxLjU4LTUuODRjMC4zNTEtMS4zLTAuNDMtMi42NDktMS43NC0zLTEuMzItMC4zNS0yLjY3IDAuNDMtMy4wMjAgMS43NGwtMS45NCA3LjIyLTQuMjcgMi40NWMtMS4xMS0xLjAxMC0yLjQ2LTEuNzctMy45NS0yLjE3di00LjVsNS4zMTktNS40OWMwLjk2MS0wLjk5IDAuOTYxLTIuNTkgMC0zLjU5LTAuOTYtMC45OS0yLjUyLTAuOTktMy40NzkgMGwtNC4zIDQuNDQyLTQuMy00LjQ0Yy0wLjk2LTAuOTktMi41Mi0wLjk5LTMuNDggMC0wLjk2IDEtMC45NiAyLjYgMCAzLjU5bDUuMzIgNS40OXY0LjVjLTEuNDkgMC40LTIuODQgMS4xNi0zLjk1IDIuMTdsLTQuMjctMi40NS0xLjk0LTcuMjJjLTAuMzUtMS4zMTEtMS43LTIuMDkwLTMuMDIwLTEuNzQtMS4zMSAwLjM1MS0yLjA5MCAxLjctMS43NCAzbDEuNTggNS44NC01Ljg3IDEuNTdjLTEuMzIgMC4zNS0yLjEgMS42OS0xLjc1IDMgMC4zNiAxLjMgMS43MSAyLjA4MCAzLjAyMCAxLjczbDcuMjYtMS45NCA0LjA4MCAyLjM0Yy0wLjI4IDAuOTEtMC40NCAxLjg3OS0wLjQ0IDIuODc5ek0yNCAyOS4wMDJjLTIuNDkgMC00LjUtMi4wMTAtNC41LTQuNXMyLjAxMC00LjUgNC41LTQuNSA0LjUgMi4wMTAgNC41IDQuNWMwIDIuNDktMi4wMTAgNC41LTQuNSA0LjV6XCIvPlxyXG4gICAgICA8L3N2Zz5gO1xyXG4gICAgfVxyXG4gICAgaWYgKGNvZGUgPT09ICc1MGQnIHx8IGNvZGUgPT09ICc1MG4nKSB7XHJcbiAgICAgIHJldHVybiBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIGZpbGw9XCIjZjVmNWY1XCIgdmlld0JveD1cIjEuOTQgNS45NCAzMCAxOFwiPlxyXG4gICAgICA8dGl0bGU+bWlzdDwvdGl0bGU+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMzAuOTM4IDEzLjkzOGgtNS4xMDJjLTAuNTA0LTQuNDg3LTQuMjc3LTgtOC44OTgtOC0zLjExMyAwLTUuODU5IDEuNTkxLTcuNDc3IDRoLTYuNTIzYy0wLjU1MiAwLTEgMC40NDgtMSAxczAuNDQ4IDEgMSAxaDUuNTUyYy0wLjIyNiAwLjYzOC0wLjM3NCAxLjMwNi0wLjQ1IDJoLTMuMTAyYy0wLjU1MiAwLTEgMC40NDgtMSAxczAuNDQ4IDEgMSAxaDMuMTAyYzAuMDc3IDAuNjkzIDAuMjI0IDEuMzYzIDAuNDUgMmgtNS4zN2MtMC42NTQgMC0xLjE4MiAwLjQ0OC0xLjE4MiAxczAuNTI5IDEgMS4xODIgMWg2LjM0MWMxLjYxNyAyLjQxIDQuMzYzIDQgNy40NzcgNHM1Ljg1OS0xLjU5IDcuNDc3LTRoMi4zNDFjMC42NTQgMCAxLjE4Mi0wLjQ0OCAxLjE4Mi0xcy0wLjUyOS0xLTEuMTgyLTFoLTEuMzdjMC4yMjctMC42MzcgMC4zNzItMS4zMDcgMC40NTEtMmg1LjEwMmMwLjU1MiAwIDEtMC40NDggMS0xcy0wLjQ0OC0xLTEtMXpNMTAuNjM5IDExLjkzOGg2LjI5OGMwLjU1MiAwIDEtMC40NDggMS0xcy0wLjQ0OC0xLTEtMWgtNC44ODRjMS4yNjMtMS4yMzMgMi45ODMtMiA0Ljg4NC0yIDMuNTE4IDAgNi40MDkgMi42MTcgNi44OTggNmgtMTMuNzk3YzAuMTAyLTAuNzA3IDAuMzAyLTEuMzc4IDAuNi0yek0xNi45MzggMjEuOTM4Yy0xLjkwMSAwLTMuNjIxLTAuNzY4LTQuODg0LTJoOS43NjdjLTEuMjYyIDEuMjMyLTIuOTgyIDItNC44ODMgMnpNMjMuMjM0IDE3LjkzOGgtMTIuNTk1Yy0wLjI5OC0wLjYyMi0wLjQ5OS0xLjI5My0wLjYtMmgxMy43OTdjLTAuMTAyIDAuNzA3LTAuMzAyIDEuMzc4LTAuNjAyIDJ6XCIvPlxyXG4gICAgICA8L3N2Zz5gO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlSGVhZCgpe1xyXG4gICAgZm9yZWNhc3RIZWFkaW5nLnRleHRDb250ZW50ID0gY2FwaXRhbGl6ZVRleHQoZm9yZWNhc3Rba2V5c1swXV0ud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XHJcbiAgICBjaXR5SGVhZGluZy50ZXh0Q29udGVudCA9IGNhcGl0YWxpemVUZXh0KGZvcmVjYXN0W2tleXNbMF1dLm5hbWUpO1xyXG4gICAgbGV0IG15RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBjb25zdCBvcHRpb25zID0geyB3ZWVrZGF5OiAnbG9uZycsIHllYXI6ICdudW1lcmljJywgbW9udGg6ICdsb25nJywgZGF5OiAnbnVtZXJpYycgfTtcclxuICAgIGRhdGVIZWFkaW5nLnRleHRDb250ZW50ID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQoJ0VuLVVTJywgb3B0aW9ucykuZm9ybWF0KG15RGF0ZSk7XHJcbiAgICB0aW1lSGVhZGluZy50ZXh0Q29udGVudCA9IGZvcm1hdEFNUE0obXlEYXRlKTtcclxuICAgIHRlbXBlcmF0dXJlSGVhZGluZy50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IoZm9yZWNhc3Rba2V5c1swXV0ubWFpbi50ZW1wKX0gXFx1MDBCMEZgO1xyXG4gICAgd2VhdGhlckljb25IZWFkaW5nLmlubmVySFRNTCA9IGdldEljb24oZm9yZWNhc3Rba2V5c1swXV0ud2VhdGhlclswXS5pY29uKTtcclxuICAgIGRldGFpbHNGZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdFtrZXlzWzBdXS5tYWluLmZlZWxzX2xpa2V9IFxcdTAwQjBGYDtcclxuICAgIGRldGFpbHNIdW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0W2tleXNbMF1dLm1haW4uaHVtaWRpdHl9ICVgO1xyXG4gICAgZGV0YWlsc1dpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0W2tleXNbMF1dLndpbmQuc3BlZWR9IG1waGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlQm9keSgpe1xyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlQ29udGVudCgpe1xyXG4gICAgcG9wdWxhdGVIZWFkKCk7XHJcbiAgICBwb3B1bGF0ZUJvZHkoKTtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgncmVuZGVyZWQnKTtcclxuICAgIG1haW5Db250ZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PntcclxuICAgICAgICBtYWluQ29udGVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgfSwgMTAwKVxyXG59XHJcblxyXG5leHBvcnQge2RvbVNldEZvcmVjYXN0LCBwb3B1bGF0ZUNvbnRlbnR9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXHJcbmltcG9ydCB7IGZvcm1hdENpdHksIGZvcmVDYXN0UmVxdWVzdCB9IGZyb20gJy4vbW9kdWxlcy9hcGlGdW5jdGlvbmFsaXR5JztcclxuaW1wb3J0IHtkb21TZXRGb3JlY2FzdCwgcG9wdWxhdGVDb250ZW50fSBmcm9tICcuL21vZHVsZXMvZG9tRnVuY3Rpb25hbGl0eSc7XHJcbmNvbnN0IGVycm9yVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lcnJvcicpO1xyXG5cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBtYWtlQ2FsbCgpe1xyXG4gICAgbGV0IGlucHV0ID0gZm9ybWF0Q2l0eSgnU2FsdCBMYWtlIENpdHksIFV0YWgsIFVTJyk7XHJcbiAgICBsZXQgZm9yZUNhc3QgPSBhd2FpdCBmb3JlQ2FzdFJlcXVlc3QoaW5wdXQpO1xyXG4gICAgcmV0dXJuIGZvcmVDYXN0XHJcbn1cclxuXHJcbm1ha2VDYWxsKCkudGhlbihkYXRhID0+e1xyXG4gICAgZG9tU2V0Rm9yZWNhc3QoZGF0YSlcclxufSkuY2F0Y2goZXJyID0+e1xyXG4gICAgZXJyb3JUZXh0LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==