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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::after, *::before {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box; }\n\nhtml, body {\n  width: 100%;\n  height: 100vh; }\n  @media only screen and (max-width: 600px) {\n    html, body {\n      height: auto; } }\n\nbody {\n  font-size: 16px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-position: center, center;\n  background-repeat: no-repeat;\n  font-family: Montserrat, sans-serif; }\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.336); }\n\nmain {\n  max-width: 100%;\n  max-height: 100%;\n  z-index: 5;\n  color: white;\n  position: relative; }\n  main .head-information {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    padding: 5rem; }\n    @media only screen and (max-width: 600px) {\n      main .head-information {\n        padding: 2rem; } }\n    main .head-information .left-side .forecast-heading {\n      font-weight: 500;\n      font-size: 36px; }\n    main .head-information .left-side .city {\n      font-size: 1rem;\n      font-weight: 500;\n      padding: 5px; }\n    main .head-information .left-side .date, main .head-information .left-side .time {\n      font-size: 12px;\n      font-weight: 500;\n      padding: 5px; }\n    main .head-information .left-side .temperature {\n      font-size: 48px;\n      font-weight: 700;\n      padding: 5px; }\n    main .head-information .left-side .display {\n      margin-bottom: 1rem;\n      transition: 200ms ease-in-out; }\n    main .head-information .left-side .display:hover {\n      cursor: pointer;\n      opacity: .8; }\n    main .head-information .left-side .weather-info {\n      padding: 5px; }\n      main .head-information .left-side .weather-info i {\n        font-size: 60px; }\n    main .head-information .left-side .search {\n      position: relative;\n      padding: 5px;\n      width: 200px; }\n      main .head-information .left-side .search input {\n        color: white;\n        padding-left: 1rem;\n        border: none;\n        border-bottom: 2px solid white;\n        background-color: transparent;\n        height: 30px;\n        width: 100%; }\n        main .head-information .left-side .search input::placeholder {\n          color: white;\n          font-size: .72rem; }\n        main .head-information .left-side .search input:focus {\n          outline: none; }\n      main .head-information .left-side .search #search-icon {\n        position: absolute;\n        top: 35%;\n        left: 85%; }\n        main .head-information .left-side .search #search-icon:hover {\n          cursor: pointer; }\n    main .head-information .left-side .error {\n      display: none;\n      margin-top: 5px;\n      font-size: 11px; }\n    main .head-information .right-side {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between; }\n      @media only screen and (max-width: 600px) {\n        main .head-information .right-side {\n          flex-direction: row;\n          flex-wrap: wrap;\n          justify-content: center;\n          margin-top: 10px; }\n          main .head-information .right-side .detail {\n            margin: 5px; } }\n      main .head-information .right-side .detail {\n        display: flex;\n        justify-content: space-around;\n        align-items: center; }\n        main .head-information .right-side .detail svg {\n          width: 40px; }\n        main .head-information .right-side .detail .detail-text {\n          text-align: center;\n          width: 100px; }\n          main .head-information .right-side .detail .detail-text p {\n            font-size: 11px;\n            margin-bottom: 5px; }\n          main .head-information .right-side .detail .detail-text h4 {\n            font-size: 18px; }\n  main .body-information {\n    padding: 5rem; }\n    @media only screen and (max-width: 600px) {\n      main .body-information {\n        padding: 2rem; } }\n    main .body-information .days-of-week {\n      display: flex;\n      justify-content: space-around;\n      flex-wrap: wrap; }\n      main .body-information .days-of-week .day-container {\n        margin: 20px; }\n        main .body-information .days-of-week .day-container .day {\n          font-size: 22px; }\n        main .body-information .days-of-week .day-container h4, main .body-information .days-of-week .day-container h5, main .body-information .days-of-week .day-container p {\n          margin-bottom: 5px; }\n        main .body-information .days-of-week .day-container h4 {\n          font-size: 25px; }\n        main .body-information .days-of-week .day-container h5 {\n          font-weight: 500; }\n        main .body-information .days-of-week .day-container .day-icon {\n          margin-top: 15px;\n          font-size: 30px; }\n", "",{"version":3,"sources":["webpack://./src/styles.scss"],"names":[],"mappings":"AAEA;EACI,UAAU;EACV,SAAS;EACT,sBAAsB,EAAA;;AAG1B;EACI,WAAW;EACX,aAAa,EAAA;EACb;IAHJ;MAIQ,YAAY,EAAA,EAEnB;;AAED;EACI,eAAe;EACf,yDAAgD;EAChD,sBAAsB;EACtB,mCAAmC;EACnC,4BAA4B;EAC5B,mCAAmC,EAAA;;AAGvC;EACI,eAAe;EACf,MAAM;EACN,OAAO;EACP,UAAU;EACV,WAAW;EACX,YAAY;EACZ,sCAAsC,EAAA;;AAG1C;EACI,eAAe;EACf,gBAAgB;EAChB,UAAU;EACV,YAAY;EACZ,kBAAkB,EAAA;EALtB;IAQQ,aAAa;IACb,eAAe;IACf,8BAA8B;IAC9B,aAAa,EAAA;IACb;MAZR;QAaY,aAAa,EAAA,EAwHpB;IArIL;MAkBgB,gBAAgB;MAChB,eAAe,EAAA;IAnB/B;MAuBgB,eAAe;MACf,gBAAgB;MAChB,YAAY,EAAA;IAzB5B;MA6BgB,eAAe;MACf,gBAAgB;MAChB,YAAY,EAAA;IA/B5B;MAmCgB,eAAe;MACf,gBAAgB;MAChB,YAAY,EAAA;IArC5B;MAyCgB,mBAAmB;MACnB,6BAA6B,EAAA;IA1C7C;MA8CgB,eAAe;MACf,WAAW,EAAA;IA/C3B;MAmDgB,YAAY,EAAA;MAnD5B;QAqDoB,eAAe,EAAA;IArDnC;MA0DgB,kBAAkB;MAClB,YAAY;MACZ,YAAY,EAAA;MA5D5B;QA8DoB,YAAY;QACZ,kBAAkB;QAClB,YAAY;QACZ,8BAA8B;QAC9B,6BAA6B;QAC7B,YAAY;QACZ,WAAW,EAAA;QApE/B;UAsEwB,YAAY;UACZ,iBAAiB,EAAA;QAvEzC;UA2EwB,aAAa,EAAA;MA3ErC;QAgFoB,kBAAkB;QAClB,QAAQ;QACR,SAAS,EAAA;QAlF7B;UAqFwB,eAAe,EAAA;IArFvC;MA2FgB,aAAa;MACb,eAAe;MACf,eAAe,EAAA;IA7F/B;MAkGY,aAAa;MACb,sBAAsB;MACtB,8BAA8B,EAAA;MAC9B;QArGZ;UAsGgB,mBAAmB;UACnB,eAAe;UACf,uBAAuB;UACvB,gBAAgB,EAAA;UAzGhC;YA2GoB,WAAW,EAAA,EACd;MA5GjB;QA+GgB,aAAa;QACb,6BAA6B;QAC7B,mBAAmB,EAAA;QAjHnC;UAoHoB,WAAW,EAAA;QApH/B;UAwHoB,kBAAkB;UAClB,YAAY,EAAA;UAzHhC;YA2HwB,eAAe;YACf,kBAAkB,EAAA;UA5H1C;YAgIwB,eAAe,EAAA;EAhIvC;IAwIQ,aAAa,EAAA;IACb;MAzIR;QA0IY,aAAa,EAAA,EAgCpB;IA1KL;MA8IY,aAAa;MACb,6BAA6B;MAC7B,eAAe,EAAA;MAhJ3B;QAmJgB,YAAY,EAAA;QAnJ5B;UAqJoB,eAAe,EAAA;QArJnC;UAyJoB,kBAAkB,EAAA;QAzJtC;UA6JoB,eAAe,EAAA;QA7JnC;UAiKoB,gBAAgB,EAAA;QAjKpC;UAqKoB,gBAAgB;UAChB,eAAe,EAAA","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap');\r\n\r\n*, *::after, *::before{\r\n    padding: 0;\r\n    margin: 0;\r\n    box-sizing: border-box;\r\n}\r\n\r\nhtml, body{\r\n    width: 100%;\r\n    height: 100vh;\r\n    @media only screen and (max-width: 600px) {\r\n        height: auto;\r\n    }\r\n}\r\n\r\nbody{\r\n    font-size: 16px;\r\n    background-image: url('./images/background.jpg');\r\n    background-size: cover;\r\n    background-position: center, center;\r\n    background-repeat: no-repeat;\r\n    font-family: Montserrat, sans-serif;\r\n}\r\n\r\n.overlay{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.336);\r\n}\r\n\r\nmain{\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    z-index: 5;\r\n    color: white;\r\n    position: relative;\r\n\r\n    .head-information{\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n        justify-content: space-between;\r\n        padding: 5rem;\r\n        @media only screen and (max-width: 600px) {\r\n            padding: 2rem;\r\n        }\r\n\r\n        .left-side{\r\n            .forecast-heading{\r\n                font-weight: 500;\r\n                font-size: 36px;\r\n            }\r\n    \r\n            .city{\r\n                font-size: 1rem;\r\n                font-weight: 500;\r\n                padding: 5px;\r\n            }\r\n    \r\n            .date, .time{\r\n                font-size: 12px;\r\n                font-weight: 500;\r\n                padding: 5px;\r\n            }\r\n\r\n            .temperature{\r\n                font-size: 48px;\r\n                font-weight: 700;\r\n                padding: 5px;\r\n            }\r\n\r\n            .display{\r\n                margin-bottom: 1rem;\r\n                transition: 200ms ease-in-out;\r\n            }\r\n\r\n            .display:hover{\r\n                cursor: pointer;\r\n                opacity: .8;\r\n            }\r\n\r\n            .weather-info{\r\n                padding: 5px;\r\n                i{\r\n                    font-size: 60px;\r\n                }\r\n            }\r\n\r\n            .search{\r\n                position: relative;\r\n                padding: 5px;\r\n                width: 200px;\r\n                input{\r\n                    color: white;\r\n                    padding-left: 1rem;\r\n                    border: none;\r\n                    border-bottom: 2px solid white;\r\n                    background-color: transparent;\r\n                    height: 30px;\r\n                    width: 100%;\r\n                    &::placeholder{\r\n                        color: white;\r\n                        font-size: .72rem;\r\n                    }\r\n\r\n                    &:focus{\r\n                        outline: none;\r\n                    }\r\n                }\r\n\r\n                #search-icon{\r\n                    position: absolute;\r\n                    top: 35%;\r\n                    left: 85%;\r\n\r\n                    &:hover{\r\n                        cursor: pointer;\r\n                    }\r\n                }\r\n            }\r\n\r\n            .error{\r\n                display: none;\r\n                margin-top: 5px;\r\n                font-size: 11px;\r\n            }\r\n        }\r\n\r\n        .right-side{\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-between;\r\n            @media only screen and (max-width: 600px) {\r\n                flex-direction: row;     \r\n                flex-wrap: wrap;\r\n                justify-content: center;\r\n                margin-top: 10px;\r\n                .detail{\r\n                    margin: 5px;\r\n                }\r\n            }\r\n            .detail{\r\n                display: flex;\r\n                justify-content: space-around;\r\n                align-items: center;\r\n\r\n                svg{\r\n                    width: 40px;\r\n                }\r\n\r\n                .detail-text{\r\n                    text-align: center;\r\n                    width: 100px;\r\n                    p{\r\n                        font-size: 11px;\r\n                        margin-bottom: 5px;\r\n                    }\r\n\r\n                    h4{\r\n                        font-size: 18px;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    .body-information{\r\n        padding: 5rem;\r\n        @media only screen and (max-width: 600px) {\r\n            padding: 2rem;\r\n        }\r\n\r\n        .days-of-week{\r\n            display: flex;\r\n            justify-content: space-around;\r\n            flex-wrap: wrap;\r\n\r\n            .day-container{\r\n                margin: 20px;\r\n                .day{\r\n                    font-size: 22px;\r\n                }\r\n\r\n                h4, h5, p{\r\n                    margin-bottom: 5px;\r\n                }\r\n\r\n                h4{\r\n                    font-size: 25px;\r\n                }\r\n\r\n                h5{\r\n                    font-weight: 500;\r\n                }\r\n\r\n                .day-icon{\r\n                    margin-top: 15px;\r\n                    font-size: 30px;\r\n                }\r\n            }\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
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
let previousCity;

async function firstDayForeCastRequest(){
    const locationResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${previousCity}&appid=${API_KEY}&limit=1`)
    const locationData = await locationResponse.json();
    if(locationResponse.status !== 200){
        throw new Error('cannot fetch location data');
    }
    const foreCastResponse = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${33.44}&lon=${-94.04}&exclude=hourly,minutely,alerts&appid=${API_KEY}`);
    const foreCastData = await foreCastResponse.json();
    if(foreCastResponse.status !== 200){
        throw new Error('cannot fetch forecast data');
    }else{
        console.log(foreCastData);
    }
}

function formatCity(input){
    let inputArray = input.split('');
    let locationInputRefactored = inputArray.filter(char => char !== ' ').join('')
    previousCity = locationInputRefactored;
    return locationInputRefactored;
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
    firstDayForeCastRequest();
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
const forecastHeading = document.querySelector('.forecast-heading');
const cityHeading = document.querySelector('.city');
const dateHeading = document.querySelector('.date');
const timeHeading = document.querySelector('.time');
const temperatureHeading = document.querySelector('.temperature');
const changeTempHeading = document.querySelector('.change-temp');
const searchIcon = document.getElementById('search-icon');
const detailsFeelsLike = document.getElementById('feels-like');
const detailsHumidity = document.getElementById('humidity');
const detailsPrecipitation = document.getElementById('precipitation');
const detailsWindSpeed = document.getElementById('wind-speed');
let forecast;
let keys;


function domSetForecast(input){
    forecast = input;
    keys = Object.keys(forecast);
}

function populateHead(){
    
}

function populateBody(){

}


function populateContent(){
    populateHead();
    populateBody();
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






async function makeCall(){
    let input = (0,_modules_apiFunctionality__WEBPACK_IMPORTED_MODULE_1__.formatCity)('Roy, Utah, US');
    let foreCast = await (0,_modules_apiFunctionality__WEBPACK_IMPORTED_MODULE_1__.foreCastRequest)(input);
    return foreCast
}

makeCall().then(data =>{
    (0,_modules_domFunctionality__WEBPACK_IMPORTED_MODULE_2__.domSetForecast)(data);
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7OztVQ2pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ21EO0FBQ0U7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscUVBQVU7QUFDMUIseUJBQXlCLDBFQUFlO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx5RUFBYztBQUNsQixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLnNjc3M/YTYwOSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvYXBpRnVuY3Rpb25hbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9tb2R1bGVzL2RvbUZ1bmN0aW9uYWxpdHkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmFja2dyb3VuZC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YWZ0ZXIsICo6OmJlZm9yZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbmh0bWwsIGJvZHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoOyB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIGh0bWwsIGJvZHkge1xcbiAgICAgIGhlaWdodDogYXV0bzsgfSB9XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciwgY2VudGVyO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmOyB9XFxuXFxuLm92ZXJsYXkge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHotaW5kZXg6IDE7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMzYpOyB9XFxuXFxubWFpbiB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogNTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiA1cmVtOyB9XFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIHtcXG4gICAgICAgIHBhZGRpbmc6IDJyZW07IH0gfVxcbiAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLmZvcmVjYXN0LWhlYWRpbmcge1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgZm9udC1zaXplOiAzNnB4OyB9XFxuICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24gLmxlZnQtc2lkZSAuY2l0eSB7XFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgcGFkZGluZzogNXB4OyB9XFxuICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24gLmxlZnQtc2lkZSAuZGF0ZSwgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiAubGVmdC1zaWRlIC50aW1lIHtcXG4gICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICBwYWRkaW5nOiA1cHg7IH1cXG4gICAgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiAubGVmdC1zaWRlIC50ZW1wZXJhdHVyZSB7XFxuICAgICAgZm9udC1zaXplOiA0OHB4O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgcGFkZGluZzogNXB4OyB9XFxuICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24gLmxlZnQtc2lkZSAuZGlzcGxheSB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gICAgICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDsgfVxcbiAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLmRpc3BsYXk6aG92ZXIge1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICBvcGFjaXR5OiAuODsgfVxcbiAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLndlYXRoZXItaW5mbyB7XFxuICAgICAgcGFkZGluZzogNXB4OyB9XFxuICAgICAgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiAubGVmdC1zaWRlIC53ZWF0aGVyLWluZm8gaSB7XFxuICAgICAgICBmb250LXNpemU6IDYwcHg7IH1cXG4gICAgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiAubGVmdC1zaWRlIC5zZWFyY2gge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgd2lkdGg6IDIwMHB4OyB9XFxuICAgICAgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiAubGVmdC1zaWRlIC5zZWFyY2ggaW5wdXQge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICB3aWR0aDogMTAwJTsgfVxcbiAgICAgICAgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiAubGVmdC1zaWRlIC5zZWFyY2ggaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICBmb250LXNpemU6IC43MnJlbTsgfVxcbiAgICAgICAgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiAubGVmdC1zaWRlIC5zZWFyY2ggaW5wdXQ6Zm9jdXMge1xcbiAgICAgICAgICBvdXRsaW5lOiBub25lOyB9XFxuICAgICAgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiAubGVmdC1zaWRlIC5zZWFyY2ggI3NlYXJjaC1pY29uIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIHRvcDogMzUlO1xcbiAgICAgICAgbGVmdDogODUlOyB9XFxuICAgICAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLnNlYXJjaCAjc2VhcmNoLWljb246aG92ZXIge1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiAubGVmdC1zaWRlIC5lcnJvciB7XFxuICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgICAgZm9udC1zaXplOiAxMXB4OyB9XFxuICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24gLnJpZ2h0LXNpZGUge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5yaWdodC1zaWRlIHtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDsgfVxcbiAgICAgICAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5yaWdodC1zaWRlIC5kZXRhaWwge1xcbiAgICAgICAgICAgIG1hcmdpbjogNXB4OyB9IH1cXG4gICAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5yaWdodC1zaWRlIC5kZXRhaWwge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAgICAgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiAucmlnaHQtc2lkZSAuZGV0YWlsIHN2ZyB7XFxuICAgICAgICAgIHdpZHRoOiA0MHB4OyB9XFxuICAgICAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5yaWdodC1zaWRlIC5kZXRhaWwgLmRldGFpbC10ZXh0IHtcXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICB3aWR0aDogMTAwcHg7IH1cXG4gICAgICAgICAgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiAucmlnaHQtc2lkZSAuZGV0YWlsIC5kZXRhaWwtdGV4dCBwIHtcXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XFxuICAgICAgICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24gLnJpZ2h0LXNpZGUgLmRldGFpbCAuZGV0YWlsLXRleHQgaDQge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDsgfVxcbiAgbWFpbiAuYm9keS1pbmZvcm1hdGlvbiB7XFxuICAgIHBhZGRpbmc6IDVyZW07IH1cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgIG1haW4gLmJvZHktaW5mb3JtYXRpb24ge1xcbiAgICAgICAgcGFkZGluZzogMnJlbTsgfSB9XFxuICAgIG1haW4gLmJvZHktaW5mb3JtYXRpb24gLmRheXMtb2Ytd2VlayB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7IH1cXG4gICAgICBtYWluIC5ib2R5LWluZm9ybWF0aW9uIC5kYXlzLW9mLXdlZWsgLmRheS1jb250YWluZXIge1xcbiAgICAgICAgbWFyZ2luOiAyMHB4OyB9XFxuICAgICAgICBtYWluIC5ib2R5LWluZm9ybWF0aW9uIC5kYXlzLW9mLXdlZWsgLmRheS1jb250YWluZXIgLmRheSB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDsgfVxcbiAgICAgICAgbWFpbiAuYm9keS1pbmZvcm1hdGlvbiAuZGF5cy1vZi13ZWVrIC5kYXktY29udGFpbmVyIGg0LCBtYWluIC5ib2R5LWluZm9ybWF0aW9uIC5kYXlzLW9mLXdlZWsgLmRheS1jb250YWluZXIgaDUsIG1haW4gLmJvZHktaW5mb3JtYXRpb24gLmRheXMtb2Ytd2VlayAuZGF5LWNvbnRhaW5lciBwIHtcXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4OyB9XFxuICAgICAgICBtYWluIC5ib2R5LWluZm9ybWF0aW9uIC5kYXlzLW9mLXdlZWsgLmRheS1jb250YWluZXIgaDQge1xcbiAgICAgICAgICBmb250LXNpemU6IDI1cHg7IH1cXG4gICAgICAgIG1haW4gLmJvZHktaW5mb3JtYXRpb24gLmRheXMtb2Ytd2VlayAuZGF5LWNvbnRhaW5lciBoNSB7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cXG4gICAgICAgIG1haW4gLmJvZHktaW5mb3JtYXRpb24gLmRheXMtb2Ytd2VlayAuZGF5LWNvbnRhaW5lciAuZGF5LWljb24ge1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLFdBQVc7RUFDWCxhQUFhLEVBQUE7RUFDYjtJQUhKO01BSVEsWUFBWSxFQUFBLEVBRW5COztBQUVEO0VBQ0ksZUFBZTtFQUNmLHlEQUFnRDtFQUNoRCxzQkFBc0I7RUFDdEIsbUNBQW1DO0VBQ25DLDRCQUE0QjtFQUM1QixtQ0FBbUMsRUFBQTs7QUFHdkM7RUFDSSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixzQ0FBc0MsRUFBQTs7QUFHMUM7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7RUFMdEI7SUFRUSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixhQUFhLEVBQUE7SUFDYjtNQVpSO1FBYVksYUFBYSxFQUFBLEVBd0hwQjtJQXJJTDtNQWtCZ0IsZ0JBQWdCO01BQ2hCLGVBQWUsRUFBQTtJQW5CL0I7TUF1QmdCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsWUFBWSxFQUFBO0lBekI1QjtNQTZCZ0IsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixZQUFZLEVBQUE7SUEvQjVCO01BbUNnQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLFlBQVksRUFBQTtJQXJDNUI7TUF5Q2dCLG1CQUFtQjtNQUNuQiw2QkFBNkIsRUFBQTtJQTFDN0M7TUE4Q2dCLGVBQWU7TUFDZixXQUFXLEVBQUE7SUEvQzNCO01BbURnQixZQUFZLEVBQUE7TUFuRDVCO1FBcURvQixlQUFlLEVBQUE7SUFyRG5DO01BMERnQixrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFlBQVksRUFBQTtNQTVENUI7UUE4RG9CLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLDhCQUE4QjtRQUM5Qiw2QkFBNkI7UUFDN0IsWUFBWTtRQUNaLFdBQVcsRUFBQTtRQXBFL0I7VUFzRXdCLFlBQVk7VUFDWixpQkFBaUIsRUFBQTtRQXZFekM7VUEyRXdCLGFBQWEsRUFBQTtNQTNFckM7UUFnRm9CLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUyxFQUFBO1FBbEY3QjtVQXFGd0IsZUFBZSxFQUFBO0lBckZ2QztNQTJGZ0IsYUFBYTtNQUNiLGVBQWU7TUFDZixlQUFlLEVBQUE7SUE3Ri9CO01Ba0dZLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsOEJBQThCLEVBQUE7TUFDOUI7UUFyR1o7VUFzR2dCLG1CQUFtQjtVQUNuQixlQUFlO1VBQ2YsdUJBQXVCO1VBQ3ZCLGdCQUFnQixFQUFBO1VBekdoQztZQTJHb0IsV0FBVyxFQUFBLEVBQ2Q7TUE1R2pCO1FBK0dnQixhQUFhO1FBQ2IsNkJBQTZCO1FBQzdCLG1CQUFtQixFQUFBO1FBakhuQztVQW9Ib0IsV0FBVyxFQUFBO1FBcEgvQjtVQXdIb0Isa0JBQWtCO1VBQ2xCLFlBQVksRUFBQTtVQXpIaEM7WUEySHdCLGVBQWU7WUFDZixrQkFBa0IsRUFBQTtVQTVIMUM7WUFnSXdCLGVBQWUsRUFBQTtFQWhJdkM7SUF3SVEsYUFBYSxFQUFBO0lBQ2I7TUF6SVI7UUEwSVksYUFBYSxFQUFBLEVBZ0NwQjtJQTFLTDtNQThJWSxhQUFhO01BQ2IsNkJBQTZCO01BQzdCLGVBQWUsRUFBQTtNQWhKM0I7UUFtSmdCLFlBQVksRUFBQTtRQW5KNUI7VUFxSm9CLGVBQWUsRUFBQTtRQXJKbkM7VUF5Sm9CLGtCQUFrQixFQUFBO1FBekp0QztVQTZKb0IsZUFBZSxFQUFBO1FBN0puQztVQWlLb0IsZ0JBQWdCLEVBQUE7UUFqS3BDO1VBcUtvQixnQkFBZ0I7VUFDaEIsZUFBZSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA0MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qLCAqOjphZnRlciwgKjo6YmVmb3Jle1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHl7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2JhY2tncm91bmQuanBnJyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciwgY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXl7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzM2KTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbntcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB6LWluZGV4OiA1O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgLmhlYWQtaW5mb3JtYXRpb257XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgcGFkZGluZzogNXJlbTtcXHJcXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmxlZnQtc2lkZXtcXHJcXG4gICAgICAgICAgICAuZm9yZWNhc3QtaGVhZGluZ3tcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgLmNpdHl7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgXFxyXFxuICAgICAgICAgICAgLmRhdGUsIC50aW1le1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLnRlbXBlcmF0dXJle1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmRpc3BsYXl7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuZGlzcGxheTpob3ZlcntcXHJcXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAuODtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLndlYXRoZXItaW5mb3tcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgICAgICAgICBpe1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5zZWFyY2h7XFxyXFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgICAgICAgICAgICAgIGlucHV0e1xcclxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHdoaXRlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICY6OnBsYWNlaG9sZGVye1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC43MnJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICY6Zm9jdXN7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAjc2VhcmNoLWljb257XFxyXFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0b3A6IDM1JTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDg1JTtcXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5lcnJvcntcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnJpZ2h0LXNpZGV7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7ICAgICBcXHJcXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgICAgICAgICAgICAgLmRldGFpbHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIC5kZXRhaWx7XFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICBzdmd7XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAuZGV0YWlsLXRleHR7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwe1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgICBoNHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJvZHktaW5mb3JtYXRpb257XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cmVtO1xcclxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuZGF5cy1vZi13ZWVre1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcblxcclxcbiAgICAgICAgICAgIC5kYXktY29udGFpbmVye1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHg7XFxyXFxuICAgICAgICAgICAgICAgIC5kYXl7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaDQsIGg1LCBwe1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGg0e1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIGg1e1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAuZGF5LWljb257XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBBUElfS0VZID0gJzk2Zjc0MDE5MjgzYTNmOGNkYzY5YjYwMDI2NzMyZWMyJztcclxubGV0IHByZXZpb3VzQ2l0eTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGZpcnN0RGF5Rm9yZUNhc3RSZXF1ZXN0KCl7XHJcbiAgICBjb25zdCBsb2NhdGlvblJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtwcmV2aW91c0NpdHl9JmFwcGlkPSR7QVBJX0tFWX0mbGltaXQ9MWApXHJcbiAgICBjb25zdCBsb2NhdGlvbkRhdGEgPSBhd2FpdCBsb2NhdGlvblJlc3BvbnNlLmpzb24oKTtcclxuICAgIGlmKGxvY2F0aW9uUmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IGZldGNoIGxvY2F0aW9uIGRhdGEnKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGZvcmVDYXN0UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMy4wL29uZWNhbGw/bGF0PSR7MzMuNDR9Jmxvbj0key05NC4wNH0mZXhjbHVkZT1ob3VybHksbWludXRlbHksYWxlcnRzJmFwcGlkPSR7QVBJX0tFWX1gKTtcclxuICAgIGNvbnN0IGZvcmVDYXN0RGF0YSA9IGF3YWl0IGZvcmVDYXN0UmVzcG9uc2UuanNvbigpO1xyXG4gICAgaWYoZm9yZUNhc3RSZXNwb25zZS5zdGF0dXMgIT09IDIwMCl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgZmV0Y2ggZm9yZWNhc3QgZGF0YScpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAgY29uc29sZS5sb2coZm9yZUNhc3REYXRhKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0Q2l0eShpbnB1dCl7XHJcbiAgICBsZXQgaW5wdXRBcnJheSA9IGlucHV0LnNwbGl0KCcnKTtcclxuICAgIGxldCBsb2NhdGlvbklucHV0UmVmYWN0b3JlZCA9IGlucHV0QXJyYXkuZmlsdGVyKGNoYXIgPT4gY2hhciAhPT0gJyAnKS5qb2luKCcnKVxyXG4gICAgcHJldmlvdXNDaXR5ID0gbG9jYXRpb25JbnB1dFJlZmFjdG9yZWQ7XHJcbiAgICByZXR1cm4gbG9jYXRpb25JbnB1dFJlZmFjdG9yZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrVGltZShpbnB1dCl7XHJcbiAgICBpZihpbnB1dCA9PSAnMjE6MDA6MDAnIHx8IGlucHV0ID09ICcwMDowMDowMCcpe1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpe1xyXG4gICAgbGV0IGRhdGVVbmZvcm1hdHRlZCA9IGRhdGU7XHJcbiAgICBsZXQgZGF0ZVVuZm9ybWF0dGVkQXJyYXkgPSBkYXRlVW5mb3JtYXR0ZWQuc3BsaXQoJyAnKTtcclxuICAgIGxldCB0aW1lVmFsaWRhdGlvbiA9IGNoZWNrVGltZShkYXRlVW5mb3JtYXR0ZWRBcnJheVsxXSk7XHJcbiAgICByZXR1cm4gW3RpbWVWYWxpZGF0aW9uLCBkYXRlVW5mb3JtYXR0ZWRBcnJheVswXV07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG92ZXJSaWRlRmlyc3REYXlGb3JlY2FzdChkYXRhKXtcclxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcclxuICAgIGZpcnN0RGF5Rm9yZUNhc3RSZXF1ZXN0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZpdmVEYXlGb3JlY2FzdChkYXRhKXtcclxuICAgIGNvbnN0IGxpc3QgPSBkYXRhLmxpc3Q7XHJcbiAgICBsZXQgZGF5Rm9yZWNhc3RzID0ge307XHJcbiAgICBsaXN0LmZvckVhY2goaXRlbSA9PntcclxuICAgICAgIGxldCB0ZW1wID0gZm9ybWF0RGF0ZShpdGVtLmR0X3R4dCk7XHJcbiAgICAgICBpZih0ZW1wWzBdKXtcclxuICAgICAgICAgICAgaWYoZGF5Rm9yZWNhc3RzW3RlbXBbMV1dKXtcclxuICAgICAgICAgICAgICAgIGRheUZvcmVjYXN0c1t0ZW1wWzFdXS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGRheUZvcmVjYXN0c1t0ZW1wWzFdXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZGF5Rm9yZWNhc3RzW3RlbXBbMV1dLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBkYXlGb3JlY2FzdHNbJ3RvdGFsRGF0YSddID0gZGF0YTtcclxuICAgIG92ZXJSaWRlRmlyc3REYXlGb3JlY2FzdChkYXlGb3JlY2FzdHMpO1xyXG4gICAgcmV0dXJuIGRheUZvcmVjYXN0cztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZm9yZUNhc3RSZXF1ZXN0KGlucHV0KXtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7aW5wdXR9JmFwcGlkPSR7QVBJX0tFWX0mdW5pdHM9aW1wZXJpYWxgKTtcclxuICAgIGlmKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBmZXRjaCBmb3JlY2FzdCBkYXRhJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc3QgZm9yZWNhc3QgPSBnZXRGaXZlRGF5Rm9yZWNhc3QoZGF0YSk7XHJcbiAgICByZXR1cm4gZm9yZWNhc3Q7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7Zm9ybWF0Q2l0eSwgZm9yZUNhc3RSZXF1ZXN0fTsiLCJjb25zdCBmb3JlY2FzdEhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QtaGVhZGluZycpO1xyXG5jb25zdCBjaXR5SGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XHJcbmNvbnN0IGRhdGVIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcclxuY29uc3QgdGltZUhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpO1xyXG5jb25zdCB0ZW1wZXJhdHVyZUhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcclxuY29uc3QgY2hhbmdlVGVtcEhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLXRlbXAnKTtcclxuY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtaWNvbicpO1xyXG5jb25zdCBkZXRhaWxzRmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzLWxpa2UnKTtcclxuY29uc3QgZGV0YWlsc0h1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5Jyk7XHJcbmNvbnN0IGRldGFpbHNQcmVjaXBpdGF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZWNpcGl0YXRpb24nKTtcclxuY29uc3QgZGV0YWlsc1dpbmRTcGVlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kLXNwZWVkJyk7XHJcbmxldCBmb3JlY2FzdDtcclxubGV0IGtleXM7XHJcblxyXG5cclxuZnVuY3Rpb24gZG9tU2V0Rm9yZWNhc3QoaW5wdXQpe1xyXG4gICAgZm9yZWNhc3QgPSBpbnB1dDtcclxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhmb3JlY2FzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlSGVhZCgpe1xyXG4gICAgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlQm9keSgpe1xyXG5cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlQ29udGVudCgpe1xyXG4gICAgcG9wdWxhdGVIZWFkKCk7XHJcbiAgICBwb3B1bGF0ZUJvZHkoKTtcclxufVxyXG5cclxuZXhwb3J0IHtkb21TZXRGb3JlY2FzdCwgcG9wdWxhdGVDb250ZW50fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5zY3NzJ1xyXG5pbXBvcnQgeyBmb3JtYXRDaXR5LCBmb3JlQ2FzdFJlcXVlc3QgfSBmcm9tICcuL21vZHVsZXMvYXBpRnVuY3Rpb25hbGl0eSc7XHJcbmltcG9ydCB7ZG9tU2V0Rm9yZWNhc3QsIHBvcHVsYXRlQ29udGVudH0gZnJvbSAnLi9tb2R1bGVzL2RvbUZ1bmN0aW9uYWxpdHknO1xyXG5cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBtYWtlQ2FsbCgpe1xyXG4gICAgbGV0IGlucHV0ID0gZm9ybWF0Q2l0eSgnUm95LCBVdGFoLCBVUycpO1xyXG4gICAgbGV0IGZvcmVDYXN0ID0gYXdhaXQgZm9yZUNhc3RSZXF1ZXN0KGlucHV0KTtcclxuICAgIHJldHVybiBmb3JlQ2FzdFxyXG59XHJcblxyXG5tYWtlQ2FsbCgpLnRoZW4oZGF0YSA9PntcclxuICAgIGRvbVNldEZvcmVjYXN0KGRhdGEpO1xyXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==