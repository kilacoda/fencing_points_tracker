/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/sql.js-httpvfs/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/sql.js-httpvfs/dist/index.js ***!
  \***************************************************/
/***/ (function(module) {

eval("!function(e,t){if(true)module.exports=t();else { var r, n; }}(this,(function(){return(()=>{\"use strict\";var e={870:(e,t,n)=>{n.r(t),n.d(t,{createEndpoint:()=>o,expose:()=>l,proxy:()=>v,proxyMarker:()=>r,releaseProxy:()=>a,transfer:()=>y,transferHandlers:()=>c,windowEndpoint:()=>g,wrap:()=>f});const r=Symbol(\"Comlink.proxy\"),o=Symbol(\"Comlink.endpoint\"),a=Symbol(\"Comlink.releaseProxy\"),i=Symbol(\"Comlink.thrown\"),s=e=>\"object\"==typeof e&&null!==e||\"function\"==typeof e,c=new Map([[\"proxy\",{canHandle:e=>s(e)&&e[r],serialize(e){const{port1:t,port2:n}=new MessageChannel;return l(e,t),[n,[n]]},deserialize:e=>(e.start(),f(e))}],[\"throw\",{canHandle:e=>s(e)&&i in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function l(e,t=self){t.addEventListener(\"message\",(function n(r){if(!r||!r.data)return;const{id:o,type:a,path:s}=Object.assign({path:[]},r.data),c=(r.data.argumentList||[]).map(w);let f;try{const t=s.slice(0,-1).reduce(((e,t)=>e[t]),e),n=s.reduce(((e,t)=>e[t]),e);switch(a){case 0:f=n;break;case 1:t[s.slice(-1)[0]]=w(r.data.value),f=!0;break;case 2:f=n.apply(t,c);break;case 3:f=v(new n(...c));break;case 4:{const{port1:t,port2:n}=new MessageChannel;l(e,n),f=y(t,[t])}break;case 5:f=void 0}}catch(e){f={value:e,[i]:0}}Promise.resolve(f).catch((e=>({value:e,[i]:0}))).then((e=>{const[r,i]=b(e);t.postMessage(Object.assign(Object.assign({},r),{id:o}),i),5===a&&(t.removeEventListener(\"message\",n),u(t))}))})),t.start&&t.start()}function u(e){(function(e){return\"MessagePort\"===e.constructor.name})(e)&&e.close()}function f(e,t){return d(e,[],t)}function p(e){if(e)throw new Error(\"Proxy has been released and is not useable\")}function d(e,t=[],n=function(){}){let r=!1;const i=new Proxy(n,{get(n,o){if(p(r),o===a)return()=>E(e,{type:5,path:t.map((e=>e.toString()))}).then((()=>{u(e),r=!0}));if(\"then\"===o){if(0===t.length)return{then:()=>i};const n=E(e,{type:0,path:t.map((e=>e.toString()))}).then(w);return n.then.bind(n)}return d(e,[...t,o])},set(n,o,a){p(r);const[i,s]=b(a);return E(e,{type:1,path:[...t,o].map((e=>e.toString())),value:i},s).then(w)},apply(n,a,i){p(r);const s=t[t.length-1];if(s===o)return E(e,{type:4}).then(w);if(\"bind\"===s)return d(e,t.slice(0,-1));const[c,l]=m(i);return E(e,{type:2,path:t.map((e=>e.toString())),argumentList:c},l).then(w)},construct(n,o){p(r);const[a,i]=m(o);return E(e,{type:3,path:t.map((e=>e.toString())),argumentList:a},i).then(w)}});return i}function m(e){const t=e.map(b);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const h=new WeakMap;function y(e,t){return h.set(e,t),e}function v(e){return Object.assign(e,{[r]:!0})}function g(e,t=self,n=\"*\"){return{postMessage:(t,r)=>e.postMessage(t,n,r),addEventListener:t.addEventListener.bind(t),removeEventListener:t.removeEventListener.bind(t)}}function b(e){for(const[t,n]of c)if(n.canHandle(e)){const[r,o]=n.serialize(e);return[{type:3,name:t,value:r},o]}return[{type:0,value:e},h.get(e)||[]]}function w(e){switch(e.type){case 3:return c.get(e.name).deserialize(e.value);case 0:return e.value}}function E(e,t,n){return new Promise((r=>{const o=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join(\"-\");e.addEventListener(\"message\",(function t(n){n.data&&n.data.id&&n.data.id===o&&(e.removeEventListener(\"message\",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},t),n)}))}},162:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,\"default\",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)\"default\"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,\"__esModule\",{value:!0}),t.createDbWorker=void 0;const i=a(n(870));async function s(e){if(e.data&&\"eval\"===e.data.action){const t=new Int32Array(e.data.notify,0,2),n=new Uint8Array(e.data.notify,8);let r;try{r={ok:await u(e.data.request)}}catch(t){console.error(\"worker request error\",e.data.request,t),r={err:String(t)}}const o=(new TextEncoder).encode(JSON.stringify(r));n.set(o,0),t[1]=o.length,Atomics.notify(t,0)}}function c(e){if(\"BODY\"===e.tagName)return\"body\";const t=[];for(;e.parentElement&&\"BODY\"!==e.tagName;){if(e.id){t.unshift(\"#\"+e.id);break}{let n=1,r=e;for(;r.previousElementSibling;)r=r.previousElementSibling,n++;t.unshift(e.tagName.toLowerCase()+\":nth-child(\"+n+\")\")}e=e.parentElement}return t.join(\" > \")}function l(e){return Object.keys(e)}async function u(e){if(console.log(\"dom vtable request\",e),\"select\"===e.type)return[...document.querySelectorAll(e.selector)].map((t=>{const n={};for(const r of e.columns)\"selector\"===r?n.selector=c(t):\"parent\"===r?t.parentElement&&(n.parent=t.parentElement?c(t.parentElement):null):\"idx\"===r||(n[r]=t[r]);return n}));if(\"insert\"===e.type){if(!e.value.parent)throw Error('\"parent\" column must be set when inserting');const t=document.querySelectorAll(e.value.parent);if(0===t.length)throw Error(`Parent element ${e.value.parent} could not be found`);if(t.length>1)throw Error(`Parent element ${e.value.parent} ambiguous (${t.length} results)`);const n=t[0];if(!e.value.tagName)throw Error(\"tagName must be set for inserting\");const r=document.createElement(e.value.tagName);for(const t of l(e.value))if(null!==e.value[t]){if(\"tagName\"===t||\"parent\"===t)continue;if(\"idx\"===t||\"selector\"===t)throw Error(`${t} can't be set`);r[t]=e.value[t]}return n.appendChild(r),null}if(\"update\"===e.type){const t=document.querySelector(e.value.selector);if(!t)throw Error(`Element ${e.value.selector} not found!`);const n=[];for(const r of l(e.value)){const o=e.value[r];if(\"parent\"!==r){if(\"idx\"!==r&&\"selector\"!==r&&o!==t[r]){if(console.log(\"SETTING \",r,t[r],\"->\",o),\"tagName\"===r)throw Error(\"can't change tagName\");n.push(r)}}else if(o!==c(t.parentElement)){const e=document.querySelectorAll(o);if(1!==e.length)throw Error(`Invalid target parent: found ${e.length} matches`);e[0].appendChild(t)}}for(const r of n)t[r]=e.value[r];return null}throw Error(`unknown request ${e.type}`)}i.transferHandlers.set(\"WORKERSQLPROXIES\",{canHandle:e=>!1,serialize(e){throw Error(\"no\")},deserialize:e=>(e.start(),i.wrap(e))}),t.createDbWorker=async function(e,t,n,r=1/0){const o=new Worker(t),a=i.wrap(o),c=await a.SplitFileHttpDatabase(n,e,void 0,r);return o.addEventListener(\"message\",s),{db:c,worker:a,configs:e}}},432:function(e,t,n){var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)\"default\"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,\"__esModule\",{value:!0}),o(n(162),t)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{\"undefined\"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:\"Module\"}),Object.defineProperty(e,\"__esModule\",{value:!0})},n(432)})()}));\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/sql.js-httpvfs/dist/index.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var sql_js_httpvfs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sql.js-httpvfs */ \"./node_modules/sql.js-httpvfs/dist/index.js\");\n/* harmony import */ var sql_js_httpvfs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sql_js_httpvfs__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nconst federations = __webpack_require__(/*! ../../federations.json */ \"./federations.json\");\r\n\r\nconst workerUrl = new URL(\r\n  /* asset import */ __webpack_require__(/*! sql.js-httpvfs/dist/sqlite.worker.js */ \"./node_modules/sql.js-httpvfs/dist/sqlite.worker.js\"), __webpack_require__.b\r\n);\r\nconst wasmUrl = new URL(/* asset import */ __webpack_require__(/*! sql.js-httpvfs/dist/sql-wasm.wasm */ \"./node_modules/sql.js-httpvfs/dist/sql-wasm.wasm\"), __webpack_require__.b);\r\n\r\nasync function load(e) {\r\n  const worker = await (0,sql_js_httpvfs__WEBPACK_IMPORTED_MODULE_0__.createDbWorker)(\r\n    [\r\n      {\r\n        from: \"inline\",\r\n        config: {\r\n          serverMode: \"full\",\r\n          url: \"/fencers.db\",\r\n          requestChunkSize: 4096,\r\n        },\r\n      },\r\n    ],\r\n    workerUrl.toString(),\r\n    wasmUrl.toString()\r\n  );\r\n  const weapon = document.getElementById(\"weapon-select\").value;\r\n  const gender = document.getElementById(\"gender-select\").value;\r\n  const category = document.getElementById(\"category-select\").value;\r\n  const event = document.getElementById(\"event-select\").value;\r\n  const zone = document.getElementById(\"zone-select\").value;\r\n\r\n  console.log(weapon, gender, category, event, zone);\r\n\r\n  if (zone == \"world\") {\r\n    var query = `select * from ${weapon}_${category}_${gender}_${event}_fencers`\r\n  } else {\r\n    var query = `select country from ${weapon}_${category}_${gender}_E_fencers where name in (${federations[zone].map((x) => `'${x.replace(\"'\", \"''\")}'`).join(\",\")});`;\r\n\r\n    console.log(query);\r\n    const country_codes = await worker.db.query(query);\r\n\r\n    console.log(\"country_codes\", country_codes);\r\n    query = `select * from ${weapon}_${category}_${gender}_${event}_fencers where country in (${country_codes.map((x) => `'${x[\"country\"]}'`).join(\",\")});`;\r\n  }\r\n\r\n  console.log(query);\r\n  const result = await worker.db.query(query);\r\n\r\n  var points_table_body = document.getElementById(\"points-table-body\");\r\n  points_table_body.innerHTML = \"\";\r\n\r\n  console.log(result);\r\n  result.forEach((row) => {\r\n    var new_row = points_table_body.appendChild(document.createElement(\"tr\"));\r\n    new_row.appendChild(document.createElement(\"td\")).innerText = row[\"rank\"];\r\n    new_row.appendChild(document.createElement(\"td\")).innerText = row[\"name\"];\r\n    new_row.appendChild(document.createElement(\"td\")).innerText = row[\"country\"];\r\n    new_row.appendChild(document.createElement(\"td\")).innerText = row[\"points\"];\r\n  });\r\n  // const result = await worker.db.query(`select * from E_S_M_I_fencers`);\r\n\r\n}\r\n\r\n\r\nload();\r\n\r\ndocument.getElementById(\"weapon-select\").addEventListener(\"change\", load);\r\ndocument.getElementById(\"gender-select\").addEventListener(\"change\", load);\r\ndocument.getElementById(\"event-select\").addEventListener(\"change\", load);\r\ndocument.getElementById(\"category-select\").addEventListener(\"change\", load);\r\ndocument.getElementById(\"zone-select\").addEventListener(\"change\", load);\r\n\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ }),

/***/ "./node_modules/sql.js-httpvfs/dist/sql-wasm.wasm":
/*!********************************************************!*\
  !*** ./node_modules/sql.js-httpvfs/dist/sql-wasm.wasm ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"8a2a3c8efae774018112.wasm\";\n\n//# sourceURL=webpack:///./node_modules/sql.js-httpvfs/dist/sql-wasm.wasm?");

/***/ }),

/***/ "./node_modules/sql.js-httpvfs/dist/sqlite.worker.js":
/*!***********************************************************!*\
  !*** ./node_modules/sql.js-httpvfs/dist/sqlite.worker.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9181ee78cd72b9be8ba3.js\";\n\n//# sourceURL=webpack:///./node_modules/sql.js-httpvfs/dist/sqlite.worker.js?");

/***/ }),

/***/ "./federations.json":
/*!**************************!*\
  !*** ./federations.json ***!
  \**************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"Africa\":[\"ALGERIA\",\"ANGOLA\",\"BENIN\",\"BOTSWANA\",\"BURKINA FASO\",\"CAMEROON\",\"CAPE VERDE\",\"CONGO\",\"COTE D\\'IVOIRE\",\"DEMOCRATIC REPUBLIC OF CONGO\",\"EGYPT\",\"GHANA\",\"GUINEA\",\"KENYA\",\"LIBYA\",\"MADAGASCAR\",\"MALI\",\"MAURITANIA\",\"MAURITIUS\",\"MOROCCO\",\"NAMIBIA\",\"NIGER\",\"NIGERIA\",\"RWANDA\",\"SENEGAL\",\"SIERRA LEONE\",\"SOUTH AFRICA\",\"TOGO\",\"TUNISIA\",\"UGANDA\"],\"America\":[\"ANTIGUA AND BARBUDA\",\"ARGENTINA\",\"ARUBA\",\"BAHAMAS\",\"BARBADOS\",\"BELIZE\",\"BERMUDA\",\"BOLIVIA\",\"BRAZIL\",\"CANADA\",\"CHILE\",\"COLOMBIA\",\"COSTA RICA\",\"CUBA\",\"DOMINICA\",\"DOMINICAN REPUBLIC\",\"ECUADOR\",\"EL SALVADOR\",\"GUATEMALA\",\"GUYANA\",\"HAITI\",\"HONDURAS\",\"JAMAICA\",\"MEXICO\",\"NICARAGUA\",\"PANAMA\",\"PARAGUAY\",\"PERU\",\"PUERTO RICO\",\"URUGUAY\",\"USA\",\"VENEZUELA\",\"VIRGIN ISLANDS\"],\"Asia And Oceania\":[\"AFGHANISTAN\",\"AMERICAN SAMOA\",\"AUSTRALIA\",\"BAHRAIN\",\"BANGLADESH\",\"BRUNEI DARUSSALAM\",\"CAMBODIA\",\"CHINA\",\"CHINESE TAIPEI\",\"GUAM\",\"HONG KONG, CHINA\",\"INDIA\",\"INDONESIA\",\"IRAN\",\"IRAQ\",\"JAPAN\",\"JORDAN\",\"KAZAKHSTAN\",\"KOREA\",\"KUWAIT\",\"KYRGYZSTAN\",\"LEBANON\",\"MACAO, CHINA\",\"MALAYSIA\",\"MONGOLIA\",\"MYANMAR\",\"NEPAL\",\"NEW ZEALAND\",\"NORTH KOREA\",\"OMAN\",\"PAKISTAN\",\"PALESTINE\",\"PAPUA NEW GUINEA\",\"PHILIPPINES\",\"QATAR\",\"SAMOA\",\"SAUDI ARABIA\",\"SINGAPORE\",\"SRI LANKA\",\"SYRIAN ARAB REPUBLIC\",\"TAJIKISTAN\",\"THAILAND\",\"TURKMENISTAN\",\"UNITED ARAB EMIRATES\",\"UZBEKISTAN\",\"VIETNAM\",\"YEMEN\"],\"Europe\":[\"AIN_\",\"_AIN\",\"ARMENIA\",\"AUSTRIA\",\"AZERBAIJAN\",\"BELARUS\",\"BELGIUM\",\"BULGARIA\",\"CROATIA\",\"CYPRUS\",\"CZECH REPUBLIC\",\"DENMARK\",\"ESTONIA\",\"FINLAND\",\"FRANCE\",\"GEORGIA\",\"GERMANY\",\"GREAT BRITAIN\",\"GREECE\",\"HUNGARY\",\"ICELAND\",\"IRELAND\",\"ISRAEL\",\"ITALY\",\"LATVIA\",\"LITHUANIA\",\"LUXEMBOURG\",\"MALTA\",\"MOLDOVA\",\"MONACO\",\"NETHERLANDS\",\"NORTH MACEDONIA\",\"NORWAY\",\"POLAND\",\"PORTUGAL\",\"ROMANIA\",\"RUSSIA\",\"SAN MARINO\",\"SERBIA\",\"SLOVAKIA\",\"SLOVENIA\",\"SPAIN\",\"SWEDEN\",\"SWITZERLAND\",\"TÜRKIYE\",\"UKRAINE\"]}');\n\n//# sourceURL=webpack:///./federations.json?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;