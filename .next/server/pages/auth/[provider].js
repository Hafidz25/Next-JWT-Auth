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
exports.id = "pages/auth/[provider]";
exports.ids = ["pages/auth/[provider]"];
exports.modules = {

/***/ "./pages/auth/[provider].js":
/*!**********************************!*\
  !*** ./pages/auth/[provider].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Connect),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function getServerSideProps({ params: { provider  } , query: { access_token  } , ...ctx }) {\n    const req = await fetch(`${\"http://localhost:1337\"}/auth/${provider}/callback?access_token=${access_token}`);\n    const res = await req.json();\n    if (res.jwt) {\n        nookies__WEBPACK_IMPORTED_MODULE_1___default().set(ctx, \"token\", res.jwt, {\n            path: \"/\"\n        });\n        return {\n            redirect: {\n                destination: \"/dashboard\"\n            }\n        };\n    }\n    return {\n        props: {}\n    };\n}\nfunction Connect() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Hello\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Project\\\\Daily Code\\\\13 - Strapi Auth\\\\client\\\\pages\\\\auth\\\\[provider].js\",\n        lineNumber: 25,\n        columnNumber: 12\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL1twcm92aWRlcl0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFFdEIsZUFBZUMsa0JBQWtCLENBQUMsRUFBRUMsTUFBTSxFQUFFLEVBQUNDLFFBQVEsR0FBQyxHQUFFQyxLQUFLLEVBQUUsRUFBQ0MsWUFBWSxHQUFDLEdBQUUsR0FBR0MsR0FBRyxFQUFFLEVBQUM7SUFFM0YsTUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBQyxDQUFDLEVBQUVDLHVCQUEyQixDQUFDLE1BQU0sRUFBRU4sUUFBUSxDQUFDLHVCQUF1QixFQUFFRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ2hILE1BQU1PLEdBQUcsR0FBRyxNQUFNTCxHQUFHLENBQUNNLElBQUksRUFBRTtJQUU1QixJQUFHRCxHQUFHLENBQUNFLEdBQUcsRUFBQztRQUNQZCxrREFBVyxDQUFDTSxHQUFHLEVBQUUsT0FBTyxFQUFFTSxHQUFHLENBQUNFLEdBQUcsRUFBRTtZQUMvQkUsSUFBSSxFQUFFLEdBQUc7U0FDWixDQUFDO1FBQ0YsT0FBTztZQUNIQyxRQUFRLEVBQUU7Z0JBQ05DLFdBQVcsRUFBRSxZQUFZO2FBQzVCO1NBQ0o7S0FDSjtJQUVELE9BQU87UUFDSEMsS0FBSyxFQUFFLEVBQUU7S0FDWjtDQUNKO0FBRWMsU0FBU0MsT0FBTyxHQUFHO0lBQzlCLHFCQUFPLDhEQUFDQyxLQUFHO2tCQUFDLE9BQUs7Ozs7O1lBQU07Q0FDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hdXRoL1twcm92aWRlcl0uanM/OTUyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9va2llcyBmcm9tICdub29raWVzJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtczoge3Byb3ZpZGVyfSwgcXVlcnk6IHthY2Nlc3NfdG9rZW59LCAuLi5jdHggfSl7XHJcblxyXG4gICAgY29uc3QgcmVxID0gYXdhaXQgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfVVJMfS9hdXRoLyR7cHJvdmlkZXJ9L2NhbGxiYWNrP2FjY2Vzc190b2tlbj0ke2FjY2Vzc190b2tlbn1gKVxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgcmVxLmpzb24oKVxyXG5cclxuICAgIGlmKHJlcy5qd3Qpe1xyXG4gICAgICAgIG5vb2tpZXMuc2V0KGN0eCwgJ3Rva2VuJywgcmVzLmp3dCwge1xyXG4gICAgICAgICAgICBwYXRoOiAnLydcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbjogJy9kYXNoYm9hcmQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHt9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbm5lY3QoKSB7XHJcbiAgICByZXR1cm4gPGRpdj5IZWxsbzwvZGl2PlxyXG59Il0sIm5hbWVzIjpbIm5vb2tpZXMiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwYXJhbXMiLCJwcm92aWRlciIsInF1ZXJ5IiwiYWNjZXNzX3Rva2VuIiwiY3R4IiwicmVxIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfVVJMIiwicmVzIiwianNvbiIsImp3dCIsInNldCIsInBhdGgiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicHJvcHMiLCJDb25uZWN0IiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/auth/[provider].js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/[provider].js"));
module.exports = __webpack_exports__;

})();