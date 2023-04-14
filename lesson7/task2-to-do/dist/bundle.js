/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _list_toDolist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/toDolist.js */ \"./src/list/toDolist.js\");\n/* harmony import */ var _list_render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/render.js */ \"./src/list/render.js\");\n/* harmony import */ var _list_taskGateway_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/taskGateway.js */ \"./src/list/taskGateway.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  Object(_list_taskGateway_js__WEBPACK_IMPORTED_MODULE_2__[\"getTasksList\"])().then(function () {\n    Object(_list_render_js__WEBPACK_IMPORTED_MODULE_1__[\"renderTasks\"])();\n  });\n  Object(_list_toDolist_js__WEBPACK_IMPORTED_MODULE_0__[\"initTodoListHandlers\"])();\n}); // 1.Get data from server\n// 2. Save data to front-end storage//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0VG9kb0xpc3RIYW5kbGVycyB9IGZyb20gXCIuL2xpc3QvdG9Eb2xpc3QuanNcIjtcbmltcG9ydCB7IHJlbmRlclRhc2tzIH0gZnJvbSBcIi4vbGlzdC9yZW5kZXIuanNcIjtcbmltcG9ydCB7IGdldFRhc2tzTGlzdCB9IGZyb20gXCIuL2xpc3QvdGFza0dhdGV3YXkuanNcIjtcbmltcG9ydCAnLi9zdHlsZXMuc2NzcydcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBnZXRUYXNrc0xpc3QoKS50aGVuKCgpID0+IHtcbiAgICByZW5kZXJUYXNrcygpO1xuICB9KTtcbiAgaW5pdFRvZG9MaXN0SGFuZGxlcnMoKTtcbn0pO1xuXG4vLyAxLkdldCBkYXRhIGZyb20gc2VydmVyXG4vLyAyLiBTYXZlIGRhdGEgdG8gZnJvbnQtZW5kIHN0b3JhZ2VcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/list/createTask.js":
/*!********************************!*\
  !*** ./src/list/createTask.js ***!
  \********************************/
/*! exports provided: createNewTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNewTask\", function() { return createNewTask; });\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./src/list/render.js\");\n/* harmony import */ var _taskGateway_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskGateway.js */ \"./src/list/taskGateway.js\");\n\n\nvar createNewTask = function createNewTask() {\n  var taskTitleInputElem = document.querySelector(\".task-input\");\n  var text = taskTitleInputElem.value;\n\n  if (!text) {\n    return;\n  }\n\n  taskTitleInputElem.value = \"\";\n  var newTasks = {\n    text: text,\n    done: false\n  };\n  Object(_taskGateway_js__WEBPACK_IMPORTED_MODULE_1__[\"createTask\"])(newTasks).then(function () {\n    return Object(_taskGateway_js__WEBPACK_IMPORTED_MODULE_1__[\"getTasksList\"])();\n  }).then(function () {\n    Object(_render_js__WEBPACK_IMPORTED_MODULE_0__[\"renderTasks\"])();\n  });\n}; // 1. Prepare the data\n// 2. Add data to database\n// 3. Read new data from the server\n// 4. Save new data to front-end storage\n// 5. Update UI based on new data//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlzdC9jcmVhdGVUYXNrLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3QvY3JlYXRlVGFzay5qcz8wZDI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlclRhc2tzIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVUYXNrLCBnZXRUYXNrc0xpc3QgfSBmcm9tIFwiLi90YXNrR2F0ZXdheS5qc1wiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlTmV3VGFzayA9ICgpID0+IHtcbiAgY29uc3QgdGFza1RpdGxlSW5wdXRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLWlucHV0XCIpO1xuICBjb25zdCB0ZXh0ID0gdGFza1RpdGxlSW5wdXRFbGVtLnZhbHVlO1xuXG4gIGlmICghdGV4dCkge1xuICAgIHJldHVybjtcbiAgfVxuICB0YXNrVGl0bGVJbnB1dEVsZW0udmFsdWUgPSBcIlwiO1xuXG4gIGNvbnN0IG5ld1Rhc2tzID0ge1xuICAgIHRleHQsXG4gICAgZG9uZTogZmFsc2UsXG4gIH07XG5cbiAgY3JlYXRlVGFzayhuZXdUYXNrcylcbiAgICAudGhlbigoKSA9PiBnZXRUYXNrc0xpc3QoKSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICByZW5kZXJUYXNrcygpO1xuICAgIH0pO1xufTtcblxuLy8gMS4gUHJlcGFyZSB0aGUgZGF0YVxuLy8gMi4gQWRkIGRhdGEgdG8gZGF0YWJhc2Vcbi8vIDMuIFJlYWQgbmV3IGRhdGEgZnJvbSB0aGUgc2VydmVyXG4vLyA0LiBTYXZlIG5ldyBkYXRhIHRvIGZyb250LWVuZCBzdG9yYWdlXG4vLyA1LiBVcGRhdGUgVUkgYmFzZWQgb24gbmV3IGRhdGFcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/list/createTask.js\n");

/***/ }),

/***/ "./src/list/render.js":
/*!****************************!*\
  !*** ./src/list/render.js ***!
  \****************************/
/*! exports provided: renderTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTasks\", function() { return renderTasks; });\n/* harmony import */ var _taskGateway_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskGateway.js */ \"./src/list/taskGateway.js\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nvar listElem = document.querySelector(\".list\");\n\nvar compareTasks = function compareTasks(a, b) {\n  return a.done - b.done;\n};\n\nvar createListItem = function createListItem(_ref) {\n  var text = _ref.text,\n      done = _ref.done,\n      id = _ref.id;\n  var listItemElem = document.createElement(\"li\");\n  listItemElem.classList.add(\"list-item\");\n  var checkbox = document.createElement(\"input\");\n  checkbox.setAttribute(\"type\", \"checkbox\");\n  checkbox.dataset.id = Number(id);\n  checkbox.checked = done;\n  checkbox.classList.add(\"list-item__checkbox\");\n\n  if (done) {\n    listItemElem.classList.add(\"list-item_done\");\n  }\n\n  var createText = document.createElement(\"span\");\n  createText.classList.add(\"list-item__text\");\n  createText.textContent = text;\n  var deleteBtn = document.createElement(\"button\");\n  deleteBtn.classList.add(\"list-item__delete-btn\");\n  listItemElem.append(checkbox, createText, deleteBtn);\n  listItemElem.dataset.id = Number(id);\n  return listItemElem;\n};\n\nvar renderTasks = function renderTasks() {\n  Object(_taskGateway_js__WEBPACK_IMPORTED_MODULE_0__[\"getTasksList\"])().then(function (tasksList) {\n    listElem.innerHTML = \"\";\n    var tasksElems = tasksList.slice().sort(compareTasks).map(createListItem);\n    listElem.append.apply(listElem, _toConsumableArray(tasksElems));\n  });\n};\nrenderTasks(); // const tasksList = (listElem.innerHTML = \"\");\n// const tasksElems = tasksList.slice().sort(compareTasks).map(createListItem);\n// listElem.append(...tasksElems);\n// 1. Prepare the data\n// 2. Add data to database\n// 3. Read new data from the server\n// 4. Save new data to front-end storage\n// 5. Update UI based on new data//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlzdC9yZW5kZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGlzdC9yZW5kZXIuanM/ZDY0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRUYXNrc0xpc3QgfSBmcm9tIFwiLi90YXNrR2F0ZXdheS5qc1wiO1xuaW1wb3J0ICcuLi9zdHlsZXMuc2NzcydcblxuY29uc3QgbGlzdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RcIik7XG5cbmNvbnN0IGNvbXBhcmVUYXNrcyA9IChhLCBiKSA9PiBhLmRvbmUgLSBiLmRvbmU7XG5cbmNvbnN0IGNyZWF0ZUxpc3RJdGVtID0gKHsgdGV4dCwgZG9uZSwgaWQgfSkgPT4ge1xuICBjb25zdCBsaXN0SXRlbUVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpc3RJdGVtRWxlbS5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtXCIpO1xuICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICBjaGVja2JveC5kYXRhc2V0LmlkID0gTnVtYmVyKGlkKTtcbiAgY2hlY2tib3guY2hlY2tlZCA9IGRvbmU7XG4gIGNoZWNrYm94LmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW1fX2NoZWNrYm94XCIpO1xuICBpZiAoZG9uZSkge1xuICAgIGxpc3RJdGVtRWxlbS5jbGFzc0xpc3QuYWRkKFwibGlzdC1pdGVtX2RvbmVcIik7XG4gIH1cblxuICBjb25zdCBjcmVhdGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGNyZWF0ZVRleHQuY2xhc3NMaXN0LmFkZChcImxpc3QtaXRlbV9fdGV4dFwiKTtcbiAgY3JlYXRlVGV4dC50ZXh0Q29udGVudCA9IHRleHQ7XG5cbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJsaXN0LWl0ZW1fX2RlbGV0ZS1idG5cIik7XG5cbiAgbGlzdEl0ZW1FbGVtLmFwcGVuZChjaGVja2JveCwgY3JlYXRlVGV4dCwgZGVsZXRlQnRuKTtcbiAgbGlzdEl0ZW1FbGVtLmRhdGFzZXQuaWQgPSBOdW1iZXIoaWQpO1xuICByZXR1cm4gbGlzdEl0ZW1FbGVtO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbmRlclRhc2tzID0gKCkgPT4ge1xuICBnZXRUYXNrc0xpc3QoKS50aGVuKCh0YXNrc0xpc3QpID0+IHtcbiAgICBsaXN0RWxlbS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGNvbnN0IHRhc2tzRWxlbXMgPSB0YXNrc0xpc3Quc2xpY2UoKS5zb3J0KGNvbXBhcmVUYXNrcykubWFwKGNyZWF0ZUxpc3RJdGVtKTtcbiAgICBsaXN0RWxlbS5hcHBlbmQoLi4udGFza3NFbGVtcyk7XG4gIH0pO1xufTtcbnJlbmRlclRhc2tzKCk7XG5cbi8vIGNvbnN0IHRhc2tzTGlzdCA9IChsaXN0RWxlbS5pbm5lckhUTUwgPSBcIlwiKTtcbi8vIGNvbnN0IHRhc2tzRWxlbXMgPSB0YXNrc0xpc3Quc2xpY2UoKS5zb3J0KGNvbXBhcmVUYXNrcykubWFwKGNyZWF0ZUxpc3RJdGVtKTtcbi8vIGxpc3RFbGVtLmFwcGVuZCguLi50YXNrc0VsZW1zKTtcblxuLy8gMS4gUHJlcGFyZSB0aGUgZGF0YVxuLy8gMi4gQWRkIGRhdGEgdG8gZGF0YWJhc2Vcbi8vIDMuIFJlYWQgbmV3IGRhdGEgZnJvbSB0aGUgc2VydmVyXG4vLyA0LiBTYXZlIG5ldyBkYXRhIHRvIGZyb250LWVuZCBzdG9yYWdlXG4vLyA1LiBVcGRhdGUgVUkgYmFzZWQgb24gbmV3IGRhdGFcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/list/render.js\n");

/***/ }),

/***/ "./src/list/taskGateway.js":
/*!*********************************!*\
  !*** ./src/list/taskGateway.js ***!
  \*********************************/
/*! exports provided: getTasksList, createTask, updateTask, deleteTask */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTasksList\", function() { return getTasksList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTask\", function() { return createTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTask\", function() { return updateTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTask\", function() { return deleteTask; });\nvar baseUrl = \"https://62f9bd43ffd7197707df7c8f.mockapi.io/tasks\";\nvar getTasksList = function getTasksList() {\n  return fetch(baseUrl).then(function (response) {\n    return response.json();\n  });\n};\nvar createTask = function createTask(taskData) {\n  return fetch(baseUrl, {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/json;charset=utf-8\"\n    },\n    body: JSON.stringify(taskData)\n  });\n};\nvar updateTask = function updateTask(taskId, updatedTaskData) {\n  return fetch(\"\".concat(baseUrl, \"/\").concat(taskId), {\n    method: \"PUT\",\n    headers: {\n      \"Content-Type\": \"application/json;charset=utf-8\"\n    },\n    body: JSON.stringify(updatedTaskData)\n  });\n};\nvar deleteTask = function deleteTask(taskId) {\n  return fetch(\"\".concat(baseUrl, \"/\").concat(taskId), {\n    method: \"DELETE\"\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlzdC90YXNrR2F0ZXdheS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9saXN0L3Rhc2tHYXRld2F5LmpzPzg1MWEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmFzZVVybCA9IFwiaHR0cHM6Ly82MmY5YmQ0M2ZmZDcxOTc3MDdkZjdjOGYubW9ja2FwaS5pby90YXNrc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0VGFza3NMaXN0ID0gKCkgPT4ge1xuICByZXR1cm4gZmV0Y2goYmFzZVVybCkudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVGFzayA9ICh0YXNrRGF0YSkgPT4ge1xuICByZXR1cm4gZmV0Y2goYmFzZVVybCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLThcIixcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRhc2tEYXRhKSxcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVGFzayA9ICh0YXNrSWQsIHVwZGF0ZWRUYXNrRGF0YSkgPT4ge1xuICByZXR1cm4gZmV0Y2goYCR7YmFzZVVybH0vJHt0YXNrSWR9YCwge1xuICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOFwiLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXBkYXRlZFRhc2tEYXRhKSxcbiAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlVGFzayA9ICh0YXNrSWQpID0+IHtcbiAgcmV0dXJuIGZldGNoKGAke2Jhc2VVcmx9LyR7dGFza0lkfWAsIHtcbiAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gIH0pO1xufTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/list/taskGateway.js\n");

/***/ }),

/***/ "./src/list/toDolist.js":
/*!******************************!*\
  !*** ./src/list/toDolist.js ***!
  \******************************/
/*! exports provided: initTodoListHandlers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initTodoListHandlers\", function() { return initTodoListHandlers; });\n/* harmony import */ var _createTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask.js */ \"./src/list/createTask.js\");\n/* harmony import */ var _updateTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateTask.js */ \"./src/list/updateTask.js\");\n\n\nvar initTodoListHandlers = function initTodoListHandlers() {\n  var findCreateButton = document.querySelector(\".create-task-btn\");\n  findCreateButton.addEventListener(\"click\", _createTask_js__WEBPACK_IMPORTED_MODULE_0__[\"createNewTask\"]);\n  var listElem = document.querySelector(\".list\");\n  listElem.addEventListener(\"click\", _updateTask_js__WEBPACK_IMPORTED_MODULE_1__[\"onListClick\"]);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlzdC90b0RvbGlzdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9saXN0L3RvRG9saXN0LmpzP2M3MjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlTmV3VGFzayB9IGZyb20gXCIuL2NyZWF0ZVRhc2suanNcIjtcbmltcG9ydCB7IG9uTGlzdENsaWNrIH0gZnJvbSBcIi4vdXBkYXRlVGFzay5qc1wiO1xuXG5leHBvcnQgY29uc3QgaW5pdFRvZG9MaXN0SGFuZGxlcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGZpbmRDcmVhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS10YXNrLWJ0blwiKTtcbiAgZmluZENyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlTmV3VGFzayk7XG5cbiAgY29uc3QgbGlzdEVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxpc3RcIik7XG4gIGxpc3RFbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvbkxpc3RDbGljayk7XG59O1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/list/toDolist.js\n");

/***/ }),

/***/ "./src/list/updateTask.js":
/*!********************************!*\
  !*** ./src/list/updateTask.js ***!
  \********************************/
/*! exports provided: handleToggleTask, onDelete, onListClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handleToggleTask\", function() { return handleToggleTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onDelete\", function() { return onDelete; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onListClick\", function() { return onListClick; });\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./src/list/render.js\");\n/* harmony import */ var _taskGateway_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskGateway.js */ \"./src/list/taskGateway.js\");\n\n\nvar handleToggleTask = function handleToggleTask(event) {\n  var isCheckBox = event.target.classList.contains(\"list-item__checkbox\");\n  var taskId = event.target.dataset.id;\n\n  if (!isCheckBox) {\n    return;\n  }\n\n  Object(_taskGateway_js__WEBPACK_IMPORTED_MODULE_1__[\"getTasksList\"])().then(function (tasksList) {\n    var _tasksList$find = tasksList.find(function (task) {\n      return task.id === event.target.dataset.id;\n    }),\n        text = _tasksList$find.text;\n\n    var done = event.target.checked;\n    var updatedTask = {\n      text: text,\n      done: done\n    };\n    Object(_taskGateway_js__WEBPACK_IMPORTED_MODULE_1__[\"updateTask\"])(taskId, updatedTask).then(function () {\n      return Object(_taskGateway_js__WEBPACK_IMPORTED_MODULE_1__[\"getTasksList\"])();\n    }).then(function () {\n      Object(_render_js__WEBPACK_IMPORTED_MODULE_0__[\"renderTasks\"])();\n    });\n  });\n};\nvar onDelete = function onDelete(event) {\n  var isDeleteButton = event.target.classList.contains(\"list-item__delete-btn\");\n\n  if (!isDeleteButton) {\n    return;\n  }\n\n  var taskId = event.target.closest(\".list-item\").dataset.id;\n  Object(_taskGateway_js__WEBPACK_IMPORTED_MODULE_1__[\"deleteTask\"])(taskId).then(function () {\n    return Object(_taskGateway_js__WEBPACK_IMPORTED_MODULE_1__[\"getTasksList\"])();\n  }).then(function () {\n    Object(_render_js__WEBPACK_IMPORTED_MODULE_0__[\"renderTasks\"])();\n  });\n};\nvar onListClick = function onListClick(event) {\n  if (event.target.classList.contains(\"list-item__delete-btn\")) {\n    onDelete(event);\n  }\n\n  if (event.target.classList.contains(\"list-item__checkbox\")) {\n    handleToggleTask(event);\n  }\n}; // 1. Prepare the data\n// 2. Update data to database\n// 3. Read new data from the server\n// 4. Save new data to front-end storage\n// 5. Update UI based on new data\n// 1. Find id to delete\n// 2. Delete data from database\n// 3. Read new data from the server\n// 4. Save new data to front-end storage\n// 5. Update UI based on new data//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlzdC91cGRhdGVUYXNrLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2xpc3QvdXBkYXRlVGFzay5qcz8xNDM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlclRhc2tzIH0gZnJvbSBcIi4vcmVuZGVyLmpzXCI7XG5pbXBvcnQgeyBnZXRUYXNrc0xpc3QsIHVwZGF0ZVRhc2ssIGRlbGV0ZVRhc2sgfSBmcm9tIFwiLi90YXNrR2F0ZXdheS5qc1wiO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlVG9nZ2xlVGFzayA9IChldmVudCkgPT4ge1xuICBjb25zdCBpc0NoZWNrQm94ID0gZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImxpc3QtaXRlbV9fY2hlY2tib3hcIik7XG4gIGNvbnN0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmlkO1xuICBpZiAoIWlzQ2hlY2tCb3gpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZ2V0VGFza3NMaXN0KCkudGhlbigodGFza3NMaXN0KSA9PiB7XG4gICAgY29uc3QgeyB0ZXh0IH0gPSB0YXNrc0xpc3QuZmluZChcbiAgICAgICh0YXNrKSA9PiB0YXNrLmlkID09PSBldmVudC50YXJnZXQuZGF0YXNldC5pZFxuICAgICk7XG5cbiAgICBjb25zdCBkb25lID0gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG5cbiAgICBjb25zdCB1cGRhdGVkVGFzayA9IHtcbiAgICAgIHRleHQsXG4gICAgICBkb25lLFxuICAgIH07XG5cbiAgICB1cGRhdGVUYXNrKHRhc2tJZCwgdXBkYXRlZFRhc2spXG4gICAgICAudGhlbigoKSA9PiBnZXRUYXNrc0xpc3QoKSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgcmVuZGVyVGFza3MoKTtcbiAgICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBvbkRlbGV0ZSA9IChldmVudCkgPT4ge1xuICBjb25zdCBpc0RlbGV0ZUJ1dHRvbiA9IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXG4gICAgXCJsaXN0LWl0ZW1fX2RlbGV0ZS1idG5cIlxuICApO1xuICBpZiAoIWlzRGVsZXRlQnV0dG9uKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHRhc2tJZCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLmxpc3QtaXRlbVwiKS5kYXRhc2V0LmlkO1xuICBkZWxldGVUYXNrKHRhc2tJZClcbiAgICAudGhlbigoKSA9PiBnZXRUYXNrc0xpc3QoKSlcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICByZW5kZXJUYXNrcygpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IG9uTGlzdENsaWNrID0gKGV2ZW50KSA9PiB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGlzdC1pdGVtX19kZWxldGUtYnRuXCIpKSB7XG4gICAgb25EZWxldGUoZXZlbnQpO1xuICB9XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibGlzdC1pdGVtX19jaGVja2JveFwiKSkge1xuICAgIGhhbmRsZVRvZ2dsZVRhc2soZXZlbnQpO1xuICB9XG59O1xuXG4vLyAxLiBQcmVwYXJlIHRoZSBkYXRhXG4vLyAyLiBVcGRhdGUgZGF0YSB0byBkYXRhYmFzZVxuLy8gMy4gUmVhZCBuZXcgZGF0YSBmcm9tIHRoZSBzZXJ2ZXJcbi8vIDQuIFNhdmUgbmV3IGRhdGEgdG8gZnJvbnQtZW5kIHN0b3JhZ2Vcbi8vIDUuIFVwZGF0ZSBVSSBiYXNlZCBvbiBuZXcgZGF0YVxuXG4vLyAxLiBGaW5kIGlkIHRvIGRlbGV0ZVxuLy8gMi4gRGVsZXRlIGRhdGEgZnJvbSBkYXRhYmFzZVxuLy8gMy4gUmVhZCBuZXcgZGF0YSBmcm9tIHRoZSBzZXJ2ZXJcbi8vIDQuIFNhdmUgbmV3IGRhdGEgdG8gZnJvbnQtZW5kIHN0b3JhZ2Vcbi8vIDUuIFVwZGF0ZSBVSSBiYXNlZCBvbiBuZXcgZGF0YVxuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFEQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/list/updateTask.js\n");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLnNjc3M/MDI5YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles.scss\n");

/***/ })

/******/ });