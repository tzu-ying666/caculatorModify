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

/***/ "./src/components/Monitor.js":
/*!***********************************!*\
  !*** ./src/components/Monitor.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// function Monitor(){\r\nconst monitor = document.createElement('div'); //創造monitor\r\nmonitor.id = 'monitor';\r\n\r\nfunction install (info) {\r\n    monitor.innerHTML = info;\r\n    app.appendChild(monitor); //將monitor掛在app裡\r\n    // return 1;\r\n}\r\n\r\nfunction render (info) { //顯示info在螢幕\r\n    console.log('monitor render num: ', info);\r\n    let appMonitor = document.getElementById('monitor'); //尋找monitor元件\r\n    // console.log('target div: ', monitor, appMonitor);\r\n\r\n    appMonitor.innerHTML = info;  //會覆蓋原本的內容\r\n}\r\n\r\nfunction input (text, info) {\r\n    text = text.toString();\r\n    if (text === '.') {\r\n        if (info.includes('.') === false) {\r\n            info = info + text;                \r\n        } \r\n    } else if (info === '0') {\r\n        info = text;\r\n    } else { \r\n        info = info + text;\r\n    }\r\n\r\n    console.log('monitor input info:', info, text);\r\n    render(info);\r\n    return info;\r\n}\r\n\r\n// function clean () {\r\n//     info = '0';\r\n//     render();\r\n// }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    install: install,\r\n    input: input,\r\n    // clean: clean,\r\n    render: render,\r\n});\r\n\r\n// }\r\n\r\n// export default Monitor; //輸出\n\n//# sourceURL=webpack://test/./src/components/Monitor.js?");

/***/ }),

/***/ "./src/components/Monitor2.js":
/*!************************************!*\
  !*** ./src/components/Monitor2.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar info = '';\r\nconst monitor = document.createElement('div');\r\nmonitor.id = 'monitor2';\r\n\r\nfunction install (info) {\r\n    monitor.innerHTML = info;\r\n    app.appendChild(monitor);\r\n    // return 1;\r\n}\r\n\r\nfunction render () {\r\n    let appMonitor = document.getElementById('monitor2'); //尋找monitor元件\r\n    // console.log('target div: ', monitor, appMonitor);\r\n\r\n    appMonitor.innerHTML = info;  //會覆蓋原本的內容\r\n}\r\n\r\nfunction input (text) {\r\n    info = text + '<br>' + info;\r\n    // console.log(info);\r\n    render();\r\n}\r\n\r\n// function clean () {\r\n//     info = '0';\r\n//     render();\r\n// }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    install: install,\r\n    input: input,\r\n    // clean: clean,\r\n    render: render,\r\n});\r\n\n\n//# sourceURL=webpack://test/./src/components/Monitor2.js?");

/***/ }),

/***/ "./src/components/button.js":
/*!**********************************!*\
  !*** ./src/components/button.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Monitor2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Monitor2 */ \"./src/components/Monitor2.js\");\n/* harmony import */ var _Monitor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Monitor */ \"./src/components/Monitor.js\");\n\r\n\r\n\r\nvar onSecondInput = false;\r\nvar firstNumber = 0;\r\nvar operator = '';\r\nvar remember =  '';\r\n\r\nfunction Button () {\r\n    const operators = ['÷', 'x', '-', '+'];\r\n    const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0','.']; \r\n\r\n    function isOperator (text) { // 符號判斷式\r\n        return operators.includes(text);    //是符號就回傳ture\r\n    }\r\n    function isNumber (text) { // 數字判斷式\r\n        return numbers.includes(text);\r\n    }\r\n\r\n    function getPow (number) { //解決js乘除問題\r\n        var numberString = number.toString();\r\n        if (numberString.includes('.') === false) {\r\n            return 1;  //如果整數就就會傳1\r\n        }\r\n        var digitAfterDot = numberString.length - 1 - numberString.indexOf('.'); //找出小數點後面有幾位\r\n        var pow = Math.pow(10, digitAfterDot); //pow變成10的次方\r\n        console.log(pow, number);\r\n        return  pow;     \r\n    }\r\n\r\n    function showResult (secondNumberString) { \r\n        var secondNumber = Number(secondNumberString);\r\n        var result = 0;\r\n        if (operator === '+') {\r\n            result = firstNumber + secondNumber;\r\n        } else if (operator === '-') {\r\n            result = firstNumber - secondNumber;\r\n        } else if (operator === 'x') {\r\n            var pow1 = getPow(firstNumber); //宣告pow1替代getPow\r\n            var pow2 = getPow(secondNumber);\r\n            // var firstString = firstNumber.toString();\r\n            // var digitAfterDot1 = firstString.length - 1 - firstString.indexOf('.');\r\n            // var pow1 = Math.pow(10,digitAfterDot1);\r\n            // var secondString = secondNumber.toString();\r\n            // var digitAfterDot2 = secondString.length - 1 - secondString.indexOf('.');\r\n            // var pow2 = Math.pow(10,digitAfterDot2);\r\n            // console.log(digitAfterDot1, digitAfterDot2);\r\n            firstNumber = firstNumber * pow1;\r\n            secondNumber = secondNumber * pow2;\r\n            //小數變整數\r\n            result = firstNumber * secondNumber / pow1 / pow2;\r\n        } else if (operator === '÷') {\r\n            var pow1 = getPow(firstNumber);\r\n            var pow2 = getPow(secondNumber);\r\n            var powMax = Math.max(pow1, pow2);\r\n            // var powMax = (pow1 > pow2) ? pow1 : pow2;\r\n            firstNumber = firstNumber * powMax;\r\n            secondNumber = secondNumber * powMax;    \r\n            console.log(pow1, pow2, firstNumber, secondNumber);    \r\n            result = firstNumber / secondNumber;\r\n        }\r\n        input(result);\r\n        _Monitor__WEBPACK_IMPORTED_MODULE_1__.default.render(result);\r\n        // monitor.input(result); //monitor.input(result.toString());\r\n        console.log(firstNumber, operator, secondNumber, '=', result);\r\n        // 準備下一次運算環境\r\n        onSecondInput = false;\r\n    }\r\n\r\n    function input (text, toReplace = true) {\r\n        console.log('input content text: ', text);\r\n        if (toReplace) {  //是否要被覆蓋\r\n            remember = text;\r\n        }\r\n        else {\r\n            if (text === '.') {\r\n                if (remember.includes('.') === false) {\r\n                    remember = remember + text;                \r\n                } \r\n            } else if (remember === '0') {\r\n                remember = text;\r\n            } else { \r\n                remember = remember + text;\r\n            }\r\n        }\r\n        console.log('input re:', remember);\r\n    }\r\n\r\n    function createButton (text, containers) {\r\n        const button = document.createElement('button');\r\n        var parent = undefined;\r\n\r\n        // button.id = 'button_' + text; //創造HTML的id \r\n        button.classList.add('button');\r\n        button.classList.add('button' + text);\r\n\r\n        if (isNumber(text) || text === '.'){\r\n            button.classList.add('gray');\r\n            parent = containers.numberButtonContainer;\r\n        } \r\n        if (isOperator(text) || text === '=') {\r\n            button.classList.add('orange');\r\n            parent = containers.operatorButtonContainer;\r\n        }\r\n        if (text === 'AC' || text === 'C' || text === '+/-') {\r\n            button.classList.add('white');\r\n            parent = containers.otherButtonContainer;\r\n        }\r\n        const inputText = () => {\r\n            _Monitor2__WEBPACK_IMPORTED_MODULE_0__.default.input('按下按鈕:' + text);\r\n            console.log('按下按鈕' + text);\r\n\r\n            if (text === 'AC') {\r\n                input('0');\r\n                operator = '';\r\n                onSecondInput = false;\r\n                firstNumber = 0;\r\n                _Monitor__WEBPACK_IMPORTED_MODULE_1__.default.render(remember);\r\n                // monitor.clean();\r\n            } else if (text === 'C') {\r\n                input('0');\r\n                _Monitor__WEBPACK_IMPORTED_MODULE_1__.default.render(remember);\r\n                // monitor.clean();\r\n            } else if (text ==='+/-') {\r\n                var infoNumber = Number(remember);\r\n                var isPositive = infoNumber > 0;\r\n                var newInfo = '';\r\n\r\n                if (isPositive) {\r\n                    newInfo = '-' + remember;\r\n                } else {\r\n                    console.log(remember);\r\n                    newInfo = remember.slice(1); //第1個留下 開頭是0\r\n                }\r\n\r\n                input(newInfo);\r\n                monitor.render(remember);\r\n            } else if (text === '<-') {\r\n                var newInfo = '';\r\n                if (remember.length === 1) {\r\n                    input('0');\r\n                } else {\r\n                    newInfo = remember.slice(0, remember.length - 1); //backspace 從第0個開始算到字串長度-1 都留下\r\n                }\r\n                input(newInfo);\r\n                _Monitor__WEBPACK_IMPORTED_MODULE_1__.default.render(remember);\r\n            } else if (isOperator(text)) { //operator判斷\r\n                if (operator !== '' && onSecondInput === true) {\r\n                    // const secondNumberString = remember;\r\n                    console.log(remember, '123');\r\n                    showResult(remember);\r\n                }\r\n                operator = text; //text取代operator\r\n            } else if (isNumber(text)) {  //num判斷\r\n                if (operator !== '') {  // second input\r\n                    if (onSecondInput === false) {\r\n                        firstNumber = Number(remember);  //轉換成數字\r\n                        // remember = monitor.input(text, remember);\r\n                        remember = _Monitor__WEBPACK_IMPORTED_MODULE_1__.default.input('', text); //????\r\n                        input('0');\r\n                        onSecondInput = true; \r\n                         //firstnum save\r\n                    } \r\n\r\n                }\r\n\r\n                // let remember = '10';\r\n                // remember = input(text, false);\r\n                input(text, false);\r\n                console.log('remenber first num: ', remember);\r\n\r\n                _Monitor__WEBPACK_IMPORTED_MODULE_1__.default.render(remember);\r\n            } else if (text === '=' && operator !== '' && onSecondInput === true) {  //&& all ture\r\n               showResult(remember);\r\n            //    monitor.render(remember);\r\n            }\r\n\r\n            const data = {\r\n                operator,\r\n                remember,\r\n                onSecondInput,\r\n                firstNumber,\r\n            };\r\n            const dataString = JSON.stringify(data); //數據轉字串\r\n            // console.table(data);\r\n            _Monitor2__WEBPACK_IMPORTED_MODULE_0__.default.input(dataString);\r\n\r\n            // if (text === 'Clean log') {\r\n            //     Monitor2.clean();\r\n            // }\r\n        };\r\n        \r\n        button.innerHTML = text;\r\n        button.onclick = inputText;\r\n        parent.appendChild(button); //parent取代app\r\n\r\n    }\r\n    // create buttons\r\n    function install (containers) {\r\n        var arr = [\r\n            ...numbers,\r\n            ...operators,\r\n            '=', 'AC', 'C','+/-',\r\n            //'Clean log' \r\n            //'<-'\r\n        ];\r\n        console.log(arr);\r\n            //為createButton\r\n        arr.forEach((text) => {\r\n            createButton(text, containers);\r\n        });\r\n        // return '123'\r\n    }\r\n    return {\r\n        install: install,\r\n        createButton,\r\n        input,\r\n        showResult,\r\n    };\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);\n\n//# sourceURL=webpack://test/./src/components/button.js?");

/***/ }),

/***/ "./src/components/monitor.js":
/*!***********************************!*\
  !*** ./src/components/monitor.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// function Monitor(){\r\nconst monitor = document.createElement('div'); //創造monitor\r\nmonitor.id = 'monitor';\r\n\r\nfunction install (info) {\r\n    monitor.innerHTML = info;\r\n    app.appendChild(monitor); //將monitor掛在app裡\r\n    // return 1;\r\n}\r\n\r\nfunction render (info) { //顯示info在螢幕\r\n    console.log('monitor render num: ', info);\r\n    let appMonitor = document.getElementById('monitor'); //尋找monitor元件\r\n    // console.log('target div: ', monitor, appMonitor);\r\n\r\n    appMonitor.innerHTML = info;  //會覆蓋原本的內容\r\n}\r\n\r\nfunction input (text, info) {\r\n    text = text.toString();\r\n    if (text === '.') {\r\n        if (info.includes('.') === false) {\r\n            info = info + text;                \r\n        } \r\n    } else if (info === '0') {\r\n        info = text;\r\n    } else { \r\n        info = info + text;\r\n    }\r\n\r\n    console.log('monitor input info:', info, text);\r\n    render(info);\r\n    return info;\r\n}\r\n\r\n// function clean () {\r\n//     info = '0';\r\n//     render();\r\n// }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    install: install,\r\n    input: input,\r\n    // clean: clean,\r\n    render: render,\r\n});\r\n\r\n// }\r\n\r\n// export default Monitor; //輸出\n\n//# sourceURL=webpack://test/./src/components/monitor.js?");

/***/ }),

/***/ "./src/components/monitor2.js":
/*!************************************!*\
  !*** ./src/components/monitor2.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar info = '';\r\nconst monitor = document.createElement('div');\r\nmonitor.id = 'monitor2';\r\n\r\nfunction install (info) {\r\n    monitor.innerHTML = info;\r\n    app.appendChild(monitor);\r\n    // return 1;\r\n}\r\n\r\nfunction render () {\r\n    let appMonitor = document.getElementById('monitor2'); //尋找monitor元件\r\n    // console.log('target div: ', monitor, appMonitor);\r\n\r\n    appMonitor.innerHTML = info;  //會覆蓋原本的內容\r\n}\r\n\r\nfunction input (text) {\r\n    info = text + '<br>' + info;\r\n    // console.log(info);\r\n    render();\r\n}\r\n\r\n// function clean () {\r\n//     info = '0';\r\n//     render();\r\n// }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n    install: install,\r\n    input: input,\r\n    // clean: clean,\r\n    render: render,\r\n});\r\n\n\n//# sourceURL=webpack://test/./src/components/monitor2.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_monitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/monitor */ \"./src/components/monitor.js\");\n/* harmony import */ var _components_monitor2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/monitor2 */ \"./src/components/monitor2.js\");\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/button */ \"./src/components/button.js\");\n\r\n\r\n\r\nvar app = document.querySelector('#app'); //是一個ID 只能被使用一次 JS API HTML\r\nvar info = '0'; //顯示\r\n\r\n\r\nfunction createLayout () { //創一個class在monitior下\r\n    const numberButtonContainer = document.createElement('div');\r\n    const operatorButtonContainer = document.createElement('div');\r\n    const otherButtonContainer = document.createElement('div');  //other創div 會保存原本的內容\r\n\r\n    numberButtonContainer.classList.add('numberButtonContainer');\r\n    operatorButtonContainer.classList.add('operatorButtonContainer');\r\n    otherButtonContainer.classList.add('otherButtonContainer'); //other創class 可以被使用很多次\r\n\r\n    app.appendChild(numberButtonContainer);\r\n    app.appendChild(operatorButtonContainer);\r\n    app.appendChild(otherButtonContainer); //將DOM放到app之下 文件物件管理\r\n\r\n    return {\r\n        numberButtonContainer,\r\n        operatorButtonContainer,\r\n        otherButtonContainer,\r\n    }\r\n}\r\n\r\n\r\n\r\nvar button = (0,_components_button__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n// var monitor = Monitor();\r\n_components_monitor__WEBPACK_IMPORTED_MODULE_0__.default.install(info);\r\nvar containers = createLayout();\r\nbutton.install(containers);\r\n_components_monitor2__WEBPACK_IMPORTED_MODULE_1__.default.install(info);\r\n\r\n\r\n// Rest API\r\n\r\n\r\n\n\n//# sourceURL=webpack://test/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;