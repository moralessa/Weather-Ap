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
    const foreCastResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${locationData[0].lat}&lon=${locationData[0].lon}&units=imperial&appid=${API_KEY}`);
    const foreCastData = await foreCastResponse.json();
    if(foreCastResponse.status !== 200){
        throw new Error('cannot fetch forecast data');
    }
    return foreCastData;
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
    firstDayForeCastRequest().then(forecast =>{
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
    console.log(forecast);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDbUQ7QUFDRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixxRUFBVTtBQUMxQix5QkFBeUIsMEVBQWU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlFQUFjO0FBQ2xCLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvbW9kdWxlcy9hcGlGdW5jdGlvbmFsaXR5LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL21vZHVsZXMvZG9tRnVuY3Rpb25hbGl0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iYWNrZ3JvdW5kLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjphZnRlciwgKjo6YmVmb3JlIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuaHRtbCwgYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7IH1cXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgaHRtbCwgYm9keSB7XFxuICAgICAgaGVpZ2h0OiBhdXRvOyB9IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyLCBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQsIHNhbnMtc2VyaWY7IH1cXG5cXG4ub3ZlcmxheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogMTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMzNik7IH1cXG5cXG5tYWluIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiA1O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDVyZW07IH1cXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24ge1xcbiAgICAgICAgcGFkZGluZzogMnJlbTsgfSB9XFxuICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24gLmxlZnQtc2lkZSAuZm9yZWNhc3QtaGVhZGluZyB7XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICBmb250LXNpemU6IDM2cHg7IH1cXG4gICAgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiAubGVmdC1zaWRlIC5jaXR5IHtcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICBwYWRkaW5nOiA1cHg7IH1cXG4gICAgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiAubGVmdC1zaWRlIC5kYXRlLCBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLnRpbWUge1xcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgIHBhZGRpbmc6IDVweDsgfVxcbiAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLnRlbXBlcmF0dXJlIHtcXG4gICAgICBmb250LXNpemU6IDQ4cHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICBwYWRkaW5nOiA1cHg7IH1cXG4gICAgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiAubGVmdC1zaWRlIC5kaXNwbGF5IHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgICAgIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW4tb3V0OyB9XFxuICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24gLmxlZnQtc2lkZSAuZGlzcGxheTpob3ZlciB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIG9wYWNpdHk6IC44OyB9XFxuICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24gLmxlZnQtc2lkZSAud2VhdGhlci1pbmZvIHtcXG4gICAgICBwYWRkaW5nOiA1cHg7IH1cXG4gICAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLndlYXRoZXItaW5mbyBpIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDsgfVxcbiAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLnNlYXJjaCB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHBhZGRpbmc6IDVweDtcXG4gICAgICB3aWR0aDogMjAwcHg7IH1cXG4gICAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLnNlYXJjaCBpbnB1dCB7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgICAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLnNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogLjcycmVtOyB9XFxuICAgICAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLnNlYXJjaCBpbnB1dDpmb2N1cyB7XFxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gICAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLnNlYXJjaCAjc2VhcmNoLWljb24ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAzNSU7XFxuICAgICAgICBsZWZ0OiA4NSU7IH1cXG4gICAgICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24gLmxlZnQtc2lkZSAuc2VhcmNoICNzZWFyY2gtaWNvbjpob3ZlciB7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5sZWZ0LXNpZGUgLmVycm9yIHtcXG4gICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgICBmb250LXNpemU6IDExcHg7IH1cXG4gICAgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiAucmlnaHQtc2lkZSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgfVxcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24gLnJpZ2h0LXNpZGUge1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuICAgICAgICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24gLnJpZ2h0LXNpZGUgLmRldGFpbCB7XFxuICAgICAgICAgICAgbWFyZ2luOiA1cHg7IH0gfVxcbiAgICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24gLnJpZ2h0LXNpZGUgLmRldGFpbCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgICAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5yaWdodC1zaWRlIC5kZXRhaWwgc3ZnIHtcXG4gICAgICAgICAgd2lkdGg6IDQwcHg7IH1cXG4gICAgICAgIG1haW4gLmhlYWQtaW5mb3JtYXRpb24gLnJpZ2h0LXNpZGUgLmRldGFpbCAuZGV0YWlsLXRleHQge1xcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIHdpZHRoOiAxMDBweDsgfVxcbiAgICAgICAgICBtYWluIC5oZWFkLWluZm9ybWF0aW9uIC5yaWdodC1zaWRlIC5kZXRhaWwgLmRldGFpbC10ZXh0IHAge1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cXG4gICAgICAgICAgbWFpbiAuaGVhZC1pbmZvcm1hdGlvbiAucmlnaHQtc2lkZSAuZGV0YWlsIC5kZXRhaWwtdGV4dCBoNCB7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4OyB9XFxuICBtYWluIC5ib2R5LWluZm9ybWF0aW9uIHtcXG4gICAgcGFkZGluZzogNXJlbTsgfVxcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgICAgbWFpbiAuYm9keS1pbmZvcm1hdGlvbiB7XFxuICAgICAgICBwYWRkaW5nOiAycmVtOyB9IH1cXG4gICAgbWFpbiAuYm9keS1pbmZvcm1hdGlvbiAuZGF5cy1vZi13ZWVrIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgIGZsZXgtd3JhcDogd3JhcDsgfVxcbiAgICAgIG1haW4gLmJvZHktaW5mb3JtYXRpb24gLmRheXMtb2Ytd2VlayAuZGF5LWNvbnRhaW5lciB7XFxuICAgICAgICBtYXJnaW46IDIwcHg7IH1cXG4gICAgICAgIG1haW4gLmJvZHktaW5mb3JtYXRpb24gLmRheXMtb2Ytd2VlayAuZGF5LWNvbnRhaW5lciAuZGF5IHtcXG4gICAgICAgICAgZm9udC1zaXplOiAyMnB4OyB9XFxuICAgICAgICBtYWluIC5ib2R5LWluZm9ybWF0aW9uIC5kYXlzLW9mLXdlZWsgLmRheS1jb250YWluZXIgaDQsIG1haW4gLmJvZHktaW5mb3JtYXRpb24gLmRheXMtb2Ytd2VlayAuZGF5LWNvbnRhaW5lciBoNSwgbWFpbiAuYm9keS1pbmZvcm1hdGlvbiAuZGF5cy1vZi13ZWVrIC5kYXktY29udGFpbmVyIHAge1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cXG4gICAgICAgIG1haW4gLmJvZHktaW5mb3JtYXRpb24gLmRheXMtb2Ytd2VlayAuZGF5LWNvbnRhaW5lciBoNCB7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDsgfVxcbiAgICAgICAgbWFpbiAuYm9keS1pbmZvcm1hdGlvbiAuZGF5cy1vZi13ZWVrIC5kYXktY29udGFpbmVyIGg1IHtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxcbiAgICAgICAgbWFpbiAuYm9keS1pbmZvcm1hdGlvbiAuZGF5cy1vZi13ZWVrIC5kYXktY29udGFpbmVyIC5kYXktaWNvbiB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNJLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCLEVBQUE7O0FBRzFCO0VBQ0ksV0FBVztFQUNYLGFBQWEsRUFBQTtFQUNiO0lBSEo7TUFJUSxZQUFZLEVBQUEsRUFFbkI7O0FBRUQ7RUFDSSxlQUFlO0VBQ2YseURBQWdEO0VBQ2hELHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsNEJBQTRCO0VBQzVCLG1DQUFtQyxFQUFBOztBQUd2QztFQUNJLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNDQUFzQyxFQUFBOztBQUcxQztFQUNJLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0IsRUFBQTtFQUx0QjtJQVFRLGFBQWE7SUFDYixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLGFBQWEsRUFBQTtJQUNiO01BWlI7UUFhWSxhQUFhLEVBQUEsRUF3SHBCO0lBcklMO01Ba0JnQixnQkFBZ0I7TUFDaEIsZUFBZSxFQUFBO0lBbkIvQjtNQXVCZ0IsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixZQUFZLEVBQUE7SUF6QjVCO01BNkJnQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLFlBQVksRUFBQTtJQS9CNUI7TUFtQ2dCLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsWUFBWSxFQUFBO0lBckM1QjtNQXlDZ0IsbUJBQW1CO01BQ25CLDZCQUE2QixFQUFBO0lBMUM3QztNQThDZ0IsZUFBZTtNQUNmLFdBQVcsRUFBQTtJQS9DM0I7TUFtRGdCLFlBQVksRUFBQTtNQW5ENUI7UUFxRG9CLGVBQWUsRUFBQTtJQXJEbkM7TUEwRGdCLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osWUFBWSxFQUFBO01BNUQ1QjtRQThEb0IsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osOEJBQThCO1FBQzlCLDZCQUE2QjtRQUM3QixZQUFZO1FBQ1osV0FBVyxFQUFBO1FBcEUvQjtVQXNFd0IsWUFBWTtVQUNaLGlCQUFpQixFQUFBO1FBdkV6QztVQTJFd0IsYUFBYSxFQUFBO01BM0VyQztRQWdGb0Isa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTLEVBQUE7UUFsRjdCO1VBcUZ3QixlQUFlLEVBQUE7SUFyRnZDO01BMkZnQixhQUFhO01BQ2IsZUFBZTtNQUNmLGVBQWUsRUFBQTtJQTdGL0I7TUFrR1ksYUFBYTtNQUNiLHNCQUFzQjtNQUN0Qiw4QkFBOEIsRUFBQTtNQUM5QjtRQXJHWjtVQXNHZ0IsbUJBQW1CO1VBQ25CLGVBQWU7VUFDZix1QkFBdUI7VUFDdkIsZ0JBQWdCLEVBQUE7VUF6R2hDO1lBMkdvQixXQUFXLEVBQUEsRUFDZDtNQTVHakI7UUErR2dCLGFBQWE7UUFDYiw2QkFBNkI7UUFDN0IsbUJBQW1CLEVBQUE7UUFqSG5DO1VBb0hvQixXQUFXLEVBQUE7UUFwSC9CO1VBd0hvQixrQkFBa0I7VUFDbEIsWUFBWSxFQUFBO1VBekhoQztZQTJId0IsZUFBZTtZQUNmLGtCQUFrQixFQUFBO1VBNUgxQztZQWdJd0IsZUFBZSxFQUFBO0VBaEl2QztJQXdJUSxhQUFhLEVBQUE7SUFDYjtNQXpJUjtRQTBJWSxhQUFhLEVBQUEsRUFnQ3BCO0lBMUtMO01BOElZLGFBQWE7TUFDYiw2QkFBNkI7TUFDN0IsZUFBZSxFQUFBO01BaEozQjtRQW1KZ0IsWUFBWSxFQUFBO1FBbko1QjtVQXFKb0IsZUFBZSxFQUFBO1FBckpuQztVQXlKb0Isa0JBQWtCLEVBQUE7UUF6SnRDO1VBNkpvQixlQUFlLEVBQUE7UUE3Sm5DO1VBaUtvQixnQkFBZ0IsRUFBQTtRQWpLcEM7VUFxS29CLGdCQUFnQjtVQUNoQixlQUFlLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdDp3Z2h0QDQwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbiosICo6OmFmdGVyLCAqOjpiZWZvcmV7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCwgYm9keXtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvYmFja2dyb3VuZC5qcGcnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyLCBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0LCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheXtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMzYpO1xcclxcbn1cXHJcXG5cXHJcXG5tYWlue1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDU7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICAuaGVhZC1pbmZvcm1hdGlvbntcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBwYWRkaW5nOiA1cmVtO1xcclxcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAubGVmdC1zaWRle1xcclxcbiAgICAgICAgICAgIC5mb3JlY2FzdC1oZWFkaW5ne1xcclxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAuY2l0eXtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICBcXHJcXG4gICAgICAgICAgICAuZGF0ZSwgLnRpbWV7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAudGVtcGVyYXR1cmV7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcXHJcXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAuZGlzcGxheXtcXHJcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgIC5kaXNwbGF5OmhvdmVye1xcclxcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC44O1xcclxcbiAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAud2VhdGhlci1pbmZve1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgIGl7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLnNlYXJjaHtcXHJcXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAgICAgICAgICAgICAgaW5wdXR7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXJ7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjcycmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgJjpmb2N1c3tcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICNzZWFyY2gtaWNvbntcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMzUlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogODUlO1xcclxcblxcclxcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmVycm9ye1xcclxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAucmlnaHQtc2lkZXtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXHJcXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdzsgICAgIFxcclxcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICAgICAgICAgICAgICAuZGV0YWlse1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgLmRldGFpbHtcXHJcXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIHN2Z3tcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5kZXRhaWwtdGV4dHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHB7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIGg0e1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH1cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYm9keS1pbmZvcm1hdGlvbntcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVyZW07XFxyXFxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5kYXlzLW9mLXdlZWt7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgLmRheS1jb250YWluZXJ7XFxyXFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweDtcXHJcXG4gICAgICAgICAgICAgICAgLmRheXtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgICAgICAgICBoNCwgaDUsIHB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaDR7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgaDV7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgIC5kYXktaWNvbntcXHJcXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IEFQSV9LRVkgPSAnOTZmNzQwMTkyODNhM2Y4Y2RjNjliNjAwMjY3MzJlYzInO1xyXG5sZXQgcHJldmlvdXNDaXR5O1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gZmlyc3REYXlGb3JlQ2FzdFJlcXVlc3QoKXtcclxuICAgIGNvbnN0IGxvY2F0aW9uUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke3ByZXZpb3VzQ2l0eX0mYXBwaWQ9JHtBUElfS0VZfSZsaW1pdD0xYClcclxuICAgIGNvbnN0IGxvY2F0aW9uRGF0YSA9IGF3YWl0IGxvY2F0aW9uUmVzcG9uc2UuanNvbigpO1xyXG4gICAgaWYobG9jYXRpb25SZXNwb25zZS5zdGF0dXMgIT09IDIwMCl7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgZmV0Y2ggbG9jYXRpb24gZGF0YScpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZm9yZUNhc3RSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsb2NhdGlvbkRhdGFbMF0ubGF0fSZsb249JHtsb2NhdGlvbkRhdGFbMF0ubG9ufSZ1bml0cz1pbXBlcmlhbCZhcHBpZD0ke0FQSV9LRVl9YCk7XHJcbiAgICBjb25zdCBmb3JlQ2FzdERhdGEgPSBhd2FpdCBmb3JlQ2FzdFJlc3BvbnNlLmpzb24oKTtcclxuICAgIGlmKGZvcmVDYXN0UmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApe1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IGZldGNoIGZvcmVjYXN0IGRhdGEnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmb3JlQ2FzdERhdGE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdENpdHkoaW5wdXQpe1xyXG4gICAgbGV0IGlucHV0QXJyYXkgPSBpbnB1dC5zcGxpdCgnJyk7XHJcbiAgICBsZXQgbG9jYXRpb25JbnB1dFJlZmFjdG9yZWQgPSBpbnB1dEFycmF5LmZpbHRlcihjaGFyID0+IGNoYXIgIT09ICcgJykuam9pbignJylcclxuICAgIHByZXZpb3VzQ2l0eSA9IGxvY2F0aW9uSW5wdXRSZWZhY3RvcmVkO1xyXG4gICAgcmV0dXJuIGxvY2F0aW9uSW5wdXRSZWZhY3RvcmVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1RpbWUoaW5wdXQpe1xyXG4gICAgaWYoaW5wdXQgPT0gJzIxOjAwOjAwJyB8fCBpbnB1dCA9PSAnMDA6MDA6MDAnKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKXtcclxuICAgIGxldCBkYXRlVW5mb3JtYXR0ZWQgPSBkYXRlO1xyXG4gICAgbGV0IGRhdGVVbmZvcm1hdHRlZEFycmF5ID0gZGF0ZVVuZm9ybWF0dGVkLnNwbGl0KCcgJyk7XHJcbiAgICBsZXQgdGltZVZhbGlkYXRpb24gPSBjaGVja1RpbWUoZGF0ZVVuZm9ybWF0dGVkQXJyYXlbMV0pO1xyXG4gICAgcmV0dXJuIFt0aW1lVmFsaWRhdGlvbiwgZGF0ZVVuZm9ybWF0dGVkQXJyYXlbMF1dO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvdmVyUmlkZUZpcnN0RGF5Rm9yZWNhc3QoZGF0YSl7XHJcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGF0YSk7XHJcbiAgICBmaXJzdERheUZvcmVDYXN0UmVxdWVzdCgpLnRoZW4oZm9yZWNhc3QgPT57XHJcbiAgICAgICAgZGF0YVtrZXlzWzBdXSA9IGZvcmVjYXN0O1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZpdmVEYXlGb3JlY2FzdChkYXRhKXtcclxuICAgIGNvbnN0IGxpc3QgPSBkYXRhLmxpc3Q7XHJcbiAgICBsZXQgZGF5Rm9yZWNhc3RzID0ge307XHJcbiAgICBsaXN0LmZvckVhY2goaXRlbSA9PntcclxuICAgICAgIGxldCB0ZW1wID0gZm9ybWF0RGF0ZShpdGVtLmR0X3R4dCk7XHJcbiAgICAgICBpZih0ZW1wWzBdKXtcclxuICAgICAgICAgICAgaWYoZGF5Rm9yZWNhc3RzW3RlbXBbMV1dKXtcclxuICAgICAgICAgICAgICAgIGRheUZvcmVjYXN0c1t0ZW1wWzFdXS5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGRheUZvcmVjYXN0c1t0ZW1wWzFdXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZGF5Rm9yZWNhc3RzW3RlbXBbMV1dLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBkYXlGb3JlY2FzdHNbJ3RvdGFsRGF0YSddID0gZGF0YTtcclxuICAgIG92ZXJSaWRlRmlyc3REYXlGb3JlY2FzdChkYXlGb3JlY2FzdHMpO1xyXG4gICAgcmV0dXJuIGRheUZvcmVjYXN0cztcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZm9yZUNhc3RSZXF1ZXN0KGlucHV0KXtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9xPSR7aW5wdXR9JmFwcGlkPSR7QVBJX0tFWX0mdW5pdHM9aW1wZXJpYWxgKTtcclxuICAgIGlmKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKXtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBmZXRjaCBmb3JlY2FzdCBkYXRhJyk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc3QgZm9yZWNhc3QgPSBnZXRGaXZlRGF5Rm9yZWNhc3QoZGF0YSk7XHJcbiAgICByZXR1cm4gZm9yZWNhc3Q7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7Zm9ybWF0Q2l0eSwgZm9yZUNhc3RSZXF1ZXN0fTsiLCJjb25zdCBmb3JlY2FzdEhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWNhc3QtaGVhZGluZycpO1xyXG5jb25zdCBjaXR5SGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaXR5Jyk7XHJcbmNvbnN0IGRhdGVIZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhdGUnKTtcclxuY29uc3QgdGltZUhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpO1xyXG5jb25zdCB0ZW1wZXJhdHVyZUhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcclxuY29uc3QgY2hhbmdlVGVtcEhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hhbmdlLXRlbXAnKTtcclxuY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtaWNvbicpO1xyXG5jb25zdCBkZXRhaWxzRmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZlZWxzLWxpa2UnKTtcclxuY29uc3QgZGV0YWlsc0h1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5Jyk7XHJcbmNvbnN0IGRldGFpbHNQcmVjaXBpdGF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZWNpcGl0YXRpb24nKTtcclxuY29uc3QgZGV0YWlsc1dpbmRTcGVlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kLXNwZWVkJyk7XHJcbmxldCBmb3JlY2FzdDtcclxubGV0IGtleXM7XHJcblxyXG5cclxuZnVuY3Rpb24gZG9tU2V0Rm9yZWNhc3QoaW5wdXQpe1xyXG4gICAgZm9yZWNhc3QgPSBpbnB1dDtcclxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhmb3JlY2FzdCk7XHJcbiAgICBjb25zb2xlLmxvZyhmb3JlY2FzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlSGVhZCgpe1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVCb2R5KCl7XHJcblxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gcG9wdWxhdGVDb250ZW50KCl7XHJcbiAgICBwb3B1bGF0ZUhlYWQoKTtcclxuICAgIHBvcHVsYXRlQm9keSgpO1xyXG59XHJcblxyXG5leHBvcnQge2RvbVNldEZvcmVjYXN0LCBwb3B1bGF0ZUNvbnRlbnR9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLnNjc3MnXHJcbmltcG9ydCB7IGZvcm1hdENpdHksIGZvcmVDYXN0UmVxdWVzdCB9IGZyb20gJy4vbW9kdWxlcy9hcGlGdW5jdGlvbmFsaXR5JztcclxuaW1wb3J0IHtkb21TZXRGb3JlY2FzdCwgcG9wdWxhdGVDb250ZW50fSBmcm9tICcuL21vZHVsZXMvZG9tRnVuY3Rpb25hbGl0eSc7XHJcblxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIG1ha2VDYWxsKCl7XHJcbiAgICBsZXQgaW5wdXQgPSBmb3JtYXRDaXR5KCdSb3ksIFV0YWgsIFVTJyk7XHJcbiAgICBsZXQgZm9yZUNhc3QgPSBhd2FpdCBmb3JlQ2FzdFJlcXVlc3QoaW5wdXQpO1xyXG4gICAgcmV0dXJuIGZvcmVDYXN0XHJcbn1cclxuXHJcbm1ha2VDYWxsKCkudGhlbihkYXRhID0+e1xyXG4gICAgZG9tU2V0Rm9yZWNhc3QoZGF0YSk7XHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9