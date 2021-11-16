/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/front.css":
/*!***********************!*\
  !*** ./src/front.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://firma/./src/front.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _front_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./front.css */ \"./src/front.css\");\n\r\n\r\nlet canvas = document.getElementById('canvas');\r\nlet context = canvas.getContext('2d');\r\n/*\r\ncanvas.width = window.innerWidth \r\ncanvas.height = window.innerHeight \r\n*/\r\n\r\nlet s = getComputedStyle(canvas);\r\nlet w = s.width;\r\nlet h = s.height;\r\n\r\n//tamaño segun el tañano del css widht\r\ncanvas.width = w.split(\"px\")[0];\r\ncanvas.height = h.split(\"px\")[0];\r\n\r\n//config de linea\r\ncontext.lineWidth = 3; //grosor de linea\r\n//Para el texto\r\ncontext.font = \"16pt Calibri\";\r\ncontext.fillText('------------------------------------', 30, h.split(\"px\")[0] - 8);\r\n\r\n\r\nlet prevX = null\r\nlet prevY = null\r\n\r\nlet draw = false\r\n\r\ncontext.strokeStyle = '#000099'; //trazo color\r\n\r\n// canvas events\r\ncanvas.onmousedown = function (event) {\r\n  draw = true;\r\n};\r\n\r\ncanvas.onmousemove = function (event) {\r\n \r\n  dibujar(event.layerX, event.layerY);\r\n\r\n};\r\n\r\ncanvas.onmouseup = function (event) {\r\n  draw = false;\r\n};\r\n\r\ncanvas.onmouseleave = function (event) {\r\n  draw = false;\r\n};\r\n\r\n\r\n//canvas touch events\r\nlet canvasCss\r\ncanvas.ontouchstart = function (event) {\r\n  event.preventDefault();\r\n  draw = true;\r\n  canvasCss = event.target.getBoundingClientRect();\r\n};\r\n\r\ncanvas.ontouchmove = function (event) {\r\n  let x = event.targetTouches[0].clientX  - canvasCss.left\r\n  let y = event.targetTouches[0].clientY  - canvasCss.top\r\n  dibujar(x, y);\r\n\r\n};\r\n\r\ncanvas.ontouchend = function (event) {\r\n  draw = false;\r\n  prevX = null\r\n  prevY = null\r\n};\r\n\r\n\r\n\r\nconst dibujar = function (mouseX, mouseY) {\r\n\r\n  console.log(mouseX);\r\n\r\n  if (prevX == null || prevY == null || !draw) {\r\n    prevX = mouseX\r\n    prevY = mouseY\r\n    return\r\n  }\r\n\r\n  context.beginPath()\r\n  context.moveTo(prevX, prevY)\r\n  context.lineTo(mouseX, mouseY)\r\n  context.stroke()\r\n\r\n  prevX = mouseX\r\n  prevY = mouseY\r\n}\r\n\r\n/*\r\nwindow.addEventListener(\"mousedown\", (e) => draw = true)\r\nwindow.addEventListener(\"mouseup\", (e) => draw = false)\r\nwindow.addEventListener(\"mousemove\", function (e) {\r\n\r\n    if (prevX == null || prevY == null || !draw) {\r\n        prevX = e.clientX\r\n        prevY = e.clientY\r\n        return\r\n    }\r\n\r\n    let mouseX = e.clientX\r\n    let mouseY = e.clientY\r\n\r\n    context.beginPath()\r\n    context.moveTo(prevX, prevY)\r\n    context.lineTo(mouseX, mouseY)\r\n    context.stroke()\r\n\r\n    //message = \"Mouse position: \" + mouseX + \",\" + mouseY;\r\n\r\n    prevX = e.clientX\r\n    prevY = e.clientY\r\n})*/\n\n//# sourceURL=webpack://firma/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;