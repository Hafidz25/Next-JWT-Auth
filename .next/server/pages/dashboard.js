"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dashboard),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function getServerSideProps(ctx) {\n    const cookies = nookies__WEBPACK_IMPORTED_MODULE_1___default().get(ctx);\n    if (!cookies.token) {\n        return {\n            redirect: {\n                destination: \"/login\"\n            }\n        };\n    }\n    return {\n        props: {}\n    };\n}\nfunction Dashboard() {\n    function logout() {\n        nookies__WEBPACK_IMPORTED_MODULE_1___default().destroy(null, \"token\");\n        next_router__WEBPACK_IMPORTED_MODULE_2___default().replace(\"/login\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen flex justify-center items-center text-4xl flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Dashboard\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\Daily Code\\\\13 - Strapi Auth\\\\client\\\\pages\\\\dashboard.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: logout,\n                className: \"bg-red-500 rounded mt-4 py-2 px-3 text-white\",\n                children: \"Logout\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Project\\\\Daily Code\\\\13 - Strapi Auth\\\\client\\\\pages\\\\dashboard.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Project\\\\Daily Code\\\\13 - Strapi Auth\\\\client\\\\pages\\\\dashboard.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUE2QjtBQUNJO0FBRTFCLGVBQWVFLGtCQUFrQixDQUFDQyxHQUFHLEVBQUM7SUFDekMsTUFBTUMsT0FBTyxHQUFHSixrREFBVyxDQUFDRyxHQUFHLENBQUM7SUFDaEMsSUFBRyxDQUFDQyxPQUFPLENBQUNFLEtBQUssRUFBQztRQUNkLE9BQU87WUFDSEMsUUFBUSxFQUFFO2dCQUNOQyxXQUFXLEVBQUUsUUFBUTthQUN4QjtTQUNKO0tBQ0o7SUFDRCxPQUFPO1FBQ0hDLEtBQUssRUFBRSxFQUFFO0tBQ1o7Q0FDSjtBQUVjLFNBQVNDLFNBQVMsR0FBRTtJQUMvQixTQUFTQyxNQUFNLEdBQUc7UUFDZFgsc0RBQWUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO1FBQzlCQywwREFBYyxDQUFDLFFBQVEsQ0FBQztLQUMzQjtJQUVELHFCQUNJLDhEQUFDYSxLQUFHO1FBQUNDLFNBQVMsRUFBQyxzRUFBc0U7OzBCQUNqRiw4REFBQ0MsSUFBRTswQkFBQyxXQUFTOzs7OztvQkFBSzswQkFDbEIsOERBQUNDLFFBQU07Z0JBQUNDLE9BQU8sRUFBRVAsTUFBTTtnQkFBRUksU0FBUyxFQUFDLDhDQUE4QzswQkFBQyxRQUFNOzs7OztvQkFBUzs7Ozs7O1lBQy9GLENBQ1Q7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2Rhc2hib2FyZC5qcz8wZTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBub29raWVzIGZyb20gJ25vb2tpZXMnXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpe1xyXG4gICAgY29uc3QgY29va2llcyA9IG5vb2tpZXMuZ2V0KGN0eClcclxuICAgIGlmKCFjb29raWVzLnRva2VuKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZWRpcmVjdDoge1xyXG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb246ICcvbG9naW4nIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge31cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFzaGJvYXJkKCl7XHJcbiAgICBmdW5jdGlvbiBsb2dvdXQoKSB7XHJcbiAgICAgICAgbm9va2llcy5kZXN0cm95KG51bGwsICd0b2tlbicpXHJcbiAgICAgICAgUm91dGVyLnJlcGxhY2UoJy9sb2dpbicpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIHctc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtNHhsIGZsZXgtY29sXCI+XHJcbiAgICAgICAgICAgIDxoMT5EYXNoYm9hcmQ8L2gxPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2xvZ291dH0gY2xhc3NOYW1lPSdiZy1yZWQtNTAwIHJvdW5kZWQgbXQtNCBweS0yIHB4LTMgdGV4dC13aGl0ZSc+TG9nb3V0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsibm9va2llcyIsIlJvdXRlciIsImdldFNlcnZlclNpZGVQcm9wcyIsImN0eCIsImNvb2tpZXMiLCJnZXQiLCJ0b2tlbiIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwcm9wcyIsIkRhc2hib2FyZCIsImxvZ291dCIsImRlc3Ryb3kiLCJyZXBsYWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("nookies");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/dashboard.js"));
module.exports = __webpack_exports__;

})();