(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron img {\n    vertical-align: bottom;\n    margin-right: 10px;\n}\n\n.center-content {\n    width: 100%;\n    max-width: 800px;\n    margin: auto;\n    padding: 0 15px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n}\n\n.center-content img {\n    margin: 30px;\n    cursor: pointer;\n}\n\np {\n    margin: 0;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"jumbotron text-center\">\n    <h1>\n        <img height=\"70\" src=\"assets/popover.png\">ngx-smart-popover Demo\n    </h1>\n</div>\n\n\n\n<h3 class=\"text-center\">Hover the emojis!</h3>\n<div class=\"center-content\">\n    <popover-content #tearsRef>\n        <h2>😂 Face With Tears of Joy</h2>\n        A yellow face with a big grin, uplifted eyebrows, and smiling eyes, each shedding a tear from laughing so hard. Widely used to show something is funny or pleasing.\n    </popover-content>\n    <img height=\"75\" [popover]=\"tearsRef\" src=\"assets/tears.png\">\n    <popover-content #eyebrowRef>\n        <h2>🤨 Face With Raised Eyebrow</h2>\n        A face with a neutral mouth and single eyebrow raised. May be used to denote scepticism, disbelief, or disapproval.\n    </popover-content>\n    <img height=\"75\" [popover]=\"eyebrowRef\" popoverPlacement=\"top-right\" src=\"assets/eyebrow.png\">\n    <popover-content #droolRef>\n        <h2>🤤 Drooling Face</h2>\n        A face shown with drool dripping from one side of the mouth. May be used as a display of desire in a person, object or concept. Previously displayed with a startled appearance on Samsung devices.\n    </popover-content>\n    <img height=\"75\" [popover]=\"droolRef\" popoverPlacement=\"right\" src=\"assets/drool.png\">\n    <popover-content #kissRef>\n        <h2>😘 Face Blowing a Kiss</h2>\n        An emoji face blowing a kiss, usually shown with one eye open and the other eye winking. A heart is shown leaving the kissing mouth.\n    </popover-content>\n    <img height=\"75\" [popover]=\"kissRef\" popoverPlacement=\"bottom-right\" src=\"assets/kiss.png\">\n    <popover-content #persevereRef>\n        <h2>😣 Persevering Face</h2>\n        Face with scrunched up and closed eyes, frowning. Used to show helplessness in a situation. May be on the verge of tears.\n    </popover-content>\n    <img height=\"75\" [popover]=\"persevereRef\" popoverPlacement=\"bottom\" src=\"assets/persevere.png\">\n    <popover-content #sunglassesRef>\n        <h2>😎 Smiling Face With Sunglasses</h2>\n        A face smiling and wearing dark sunglasses that is used to denote a sense of cool. The <a href=\"https://emojipedia.org/nerd-face/\" target=\"_blank\">nerd face emoji</a> is a similar face, but with regular glasses.\n    </popover-content>\n    <img height=\"75\" [popover]=\"sunglassesRef\" popoverPlacement=\"bottom-left\" src=\"assets/sunglasses.png\">\n    <popover-content #sweatRef>\n        <h2>😅 Grinning Face With Sweat</h2>\n        A face with a grin and smiling eyes similar to 😄 <a href=\"https://emojipedia.org/smiling-face-with-open-mouth-and-smiling-eyes/\" target=\"_blank\">Grinning Face With Smiling Eyes</a> but with a single bead of forehead sweat over its left eye (right on WhatsApp). Intended to depict nerves or discomfort but commonly used as a means of expressing \"whew!\" or \"close call!\" that would be implied when a person wipes sweat from their brow in an exaggerated manner.\n    </popover-content>\n    <img height=\"75\" [popover]=\"sweatRef\" popoverPlacement=\"left\" src=\"assets/sweat.png\">\n    <popover-content #thinkingRef>\n        <h2>🤔 Thinking Face</h2>\n        A face shown with a single finger and thumb resting on the chin, glancing upward. Used to indicate thinking, or deep thought.\n    </popover-content>\n    <img height=\"75\" [popover]=\"thinkingRef\" popoverPlacement=\"top-left\" src=\"assets/thinking.png\">\n</div>\n\n<br/><br/>\n<h3 class=\"text-center\">Click the emoji!</h3>\n<div class=\"center-content\">\n    <popover-content #tongueRef>\n        <h2>😜 Winking Face With Tongue</h2>\n        A face showing a stuck-out tongue, winking at the same time. Used in an attempt to be wacky, zany, or otherwise joking.\n    </popover-content>\n    <img height=\"75\" [popover]=\"tongueRef\" [popoverOnHover]=\"false\" src=\"assets/tongue.png\">\n</div>\n\n<br/><br/>\n<h3 class=\"text-center\">This popover is set to open on the bottom.</h3>\n<p class=\"text-center\">if you scroll the emoji to the bottom of the viewport, it will auto reflect to the top.</p>\n<p class=\"text-center\">scroll the page down to see it open on the bottom.</p>\n<div class=\"center-content\">\n    <popover-content #cryRef>\n        <h2>😭 Loudly Crying Face</h2>\n        A sad face with tears streaming down both cheeks. This face is distraught and inconsolable. Not to be confused with the <a href=\"https://emojipedia.org/face-with-tears-of-joy/\" target=\"_blank\">tears of joy emoji</a>.\n    </popover-content>\n    <img height=\"75\" [popover]=\"cryRef\" popoverPlacement=\"bottom\" src=\"assets/cry.png\">\n</div>\n\n<div style=\"height: 500px;\"></div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_smart_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-smart-popover */ "./node_modules/ngx-smart-popover/index.js");
/* harmony import */ var ngx_smart_popover__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ngx_smart_popover__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_smart_popover__WEBPACK_IMPORTED_MODULE_3__["PopoverModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tbottonari/code/ngx-smart-popover/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map