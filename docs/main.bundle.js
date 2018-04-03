webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"grid\">\r\n  <button (click)=\"showMenu = true\"><span class=\"fa fa-bars\"></span>{{ ['選單', 'Menu'][lang] }}</button>\r\n  <ul class=\"menu\" [class.show]=\"showMenu\">\r\n    <li (click)=\"newGame()\">{{ ['新遊戲', 'New Game'][lang] }}</li>\r\n    <li (click)=\"toggleLang()\">{{ ['English', '中文'][lang] }}</li>\r\n  </ul>\r\n  <div class=\"menu-backdrop\" [class.show]=\"showMenu\" (click)=\"showMenu = false\"></div>\r\n  <div class=\"no-select\" (click)=\"changePlayerName(index)\" *ngFor=\"let player of playerArr;let index = index\">{{player}}</div>\r\n</header>\r\n<main class=\"grid\">\r\n  <ng-template let-type ngFor [ngForOf]=\"clues\">\r\n    <div class=\"row-type no-select\">{{type.type[lang]}}</div>\r\n    <ng-template let-item ngFor [ngForOf]=\"type.items\">\r\n      <div class=\"no-select box-item\" [innerHTML]=\"item[lang]\"></div>\r\n      <div class=\"box-clue\" *ngFor=\"let p of playerArr;let player = index;\" [class.selected]=\"selected === item + player\" [style.background]=\"color[item + player]\"\r\n        (click)=\"selected = item + player\">\r\n        <span class=\"fa fa-2x\" [ngClass]=\"'fa-' + icon[item + player]\"></span>\r\n      </div>\r\n      <div class=\"box-clue-num\" *ngFor=\"let p of playerArr;let player = index;\" [class.selected]=\"selected === item + player\" [style.background]=\"color[item + player]\"\r\n        (click)=\"selected = item + player\">{{ num[item + player]?.join(',') }}</div>\r\n    </ng-template>\r\n  </ng-template>\r\n</main>\r\n<app-toolbox [disabled]=\"!selected\" (buttonClick)=\"onButtonClick($event)\"></app-toolbox>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "header {\n  left: 0;\n  top: 0;\n  position: fixed;\n  background: white;\n  z-index: 10; }\n  header > div {\n    text-align: center; }\n  ul.menu {\n  display: none;\n  position: fixed;\n  background: #ffffff;\n  z-index: 21;\n  padding: 0;\n  margin: 0;\n  font-size: 2em;\n  border-radius: 5px; }\n  ul.menu > li {\n    list-style: none;\n    padding: 0.25em 0.4em;\n    margin: 0;\n    border-radius: 5px;\n    cursor: pointer; }\n  ul.menu > li:hover {\n      background: #aaaaff;\n      color: white; }\n  ul.menu.show {\n  display: block; }\n  .menu-backdrop {\n  opacity: 0.4;\n  background: #000000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 10;\n  display: none; }\n  .menu-backdrop.show {\n  display: block; }\n  main {\n  margin-top: 29px;\n  margin-bottom: 200px; }\n  app-toolbox {\n  position: fixed;\n  bottom: 0; }\n  .grid {\n  width: 100vw;\n  overflow: auto;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: minmax(70px, 2fr) (minmax(30px, 1fr))[6];\n      grid-template-columns: minmax(70px, 2fr) repeat(6, minmax(30px, 1fr)); }\n  .grid div {\n    padding: 3px;\n    border: 1px solid #aaaaff;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n  .grid div.box-item {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      vertical-align: middle;\n      overflow: hidden;\n      grid-row: span 2; }\n  .grid div.box-clue {\n      border-bottom: 0; }\n  .grid div.box-clue-num {\n      border-top: 0;\n      font-size: 0.6em;\n      word-break: break-all; }\n  .grid div.selected {\n      border-style: dashed; }\n  .grid div.selected.box-clue::before {\n        content: '';\n        border-style: solid;\n        width: 0px;\n        height: 0px;\n        -webkit-box-sizing: content-box;\n                box-sizing: content-box;\n        border-width: 8px;\n        border-color: #aaaaff transparent transparent #aaaaff;\n        position: absolute;\n        margin: -3px 0 0 -3px; }\n  .grid > .row-type {\n    background: #aaaaff;\n    color: #ffffff;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 7;\n    grid-column: 1 / 8; }\n  .no-select {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clues__ = __webpack_require__("./src/app/clues.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LANG_ZH = 0;
var LANG_EN = 1;
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.players = 6;
        this.playerArr = new Array(this.players).fill(1).map(function (v, i) { return i.toString(); });
        this.icon = {};
        this.color = {};
        this.num = {};
        this.selected = null;
        this.clues = __WEBPACK_IMPORTED_MODULE_0__clues__["a" /* default */];
        this.lang = LANG_ZH;
        this.showMenu = false;
        this.save = ['playerArr', 'icon', 'color', 'num'];
        if (localStorage.language) {
            this.lang = localStorage.language === LANG_ZH.toString() ? LANG_ZH : LANG_EN;
        }
        else if (!navigator.language.startsWith('zh')) {
            this.lang = LANG_EN;
        }
        if (localStorage[this.save[0]]) {
            this.save.forEach(function (v) { return _this[v] = JSON.parse(localStorage[v]); });
        }
    }
    AppComponent.prototype.onButtonClick = function ($) {
        var _this = this;
        if ($.value === null) {
            this[$.type][this.selected] = null;
            return;
        }
        if ($.type === 'num') {
            var target = (this.num[this.selected] = this.num[this.selected] || []);
            var index = target.indexOf($.value);
            if (index === -1) {
                target.push($.value);
            }
            else {
                target.splice(index, 1);
            }
        }
        else {
            this[$.type][this.selected] = $.value.toString();
        }
        this.save.forEach(function (v) { return localStorage[v] = JSON.stringify(_this[v]); });
    };
    AppComponent.prototype.newGame = function () {
        var _this = this;
        var result = confirm(this.lang ? '你確定要清除所有記錄嗎？' : 'Do you really want to clear all the data?');
        if (result) {
            this.save.forEach(function (v) {
                if (!Array.isArray(_this[v])) {
                    _this[v] = {};
                    delete localStorage[v];
                }
            });
        }
        this.showMenu = false;
    };
    AppComponent.prototype.toggleLang = function () {
        localStorage.language = this.lang = this.lang ? 0 : 1;
        this.showMenu = false;
    };
    AppComponent.prototype.changePlayerName = function (index) {
        var name = prompt(this.lang ? 'Please input the player name' : '請輸入玩家名稱');
        if (name) {
            this.playerArr[index] = name;
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_toolbox_component__ = __webpack_require__("./src/app/components/toolbox.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_3__components_toolbox_component__["a" /* ToolboxComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/clues.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ([
    {
        type: ['誰？', 'WHO?'],
        items: [
            ['綠先生', 'Mr.Green'],
            ['黃上校', 'Col.Mustard'],
            ['花博士', 'Dr.Orchid'],
            ['藍夫人', 'Mrs.Peacock'],
            ['梅教授', 'Prof.Plum'],
            ['紅小姐', 'Miss.Scarlett']
        ]
    },
    {
        type: ['兇器？', 'WHAT?'],
        items: [
            ['燭台', 'Candlestick'],
            ['匕首', 'Dagger'],
            ['鉛管', 'Lead pipe'],
            ['手槍', 'Revolver'],
            ['繩索', 'Rope'],
            ['扳手', 'Wrench']
        ]
    },
    {
        type: ['地點？', 'WHERE?'],
        items: [
            ['宴會廳', 'Ballroom'],
            ['撞球室', 'Billiard room'],
            ['溫室', 'Conservatory'],
            ['餐廳', 'Dining room'],
            ['迎賓大廳', 'Hall'],
            ['廚房', 'Kitchen'],
            ['圖書室', 'Library'],
            ['休憩室', 'Lounge'],
            ['書房', 'Study']
        ]
    }
]);


/***/ }),

/***/ "./src/app/components/toolbox.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <button (click)=\"buttonClick.emit({ type:'icon', value: null })\">\r\n    <span class=\"fa fa-2x fa-trash\"></span>\r\n  </button>\r\n  <button *ngFor=\"let icon of iconBtns\" (click)=\"buttonClick.emit({ type:'icon', value: icon })\">\r\n    <span class=\"fa fa-2x\" [ngClass]=\"'fa-' + icon\"></span>\r\n  </button>\r\n</div>\r\n<div class=\"row\">\r\n  <button (click)=\"buttonClick.emit({ type:'num', value: null })\">\r\n    <span class=\"fa fa-2x fa-trash\"></span>\r\n  </button>\r\n  <button class=\"num-btn\" *ngFor=\"let num of numBtns\" (click)=\"buttonClick.emit({ type:'num', value: num })\">{{num}}</button>\r\n</div>\r\n<div class=\"row\">\r\n  <button (click)=\"buttonClick.emit({ type:'color', value: null })\">\r\n    <span class=\"fa fa-2x fa-trash\"></span>\r\n  </button>\r\n  <button class=\"color-btn\" *ngFor=\"let color of colorBtns\" (click)=\"buttonClick.emit({ type:'color', value: color })\">\r\n    <div [style.background]=\"color\"></div>\r\n  </button>\r\n</div>\r\n<div class=\"block\" [style.display]=\"disabled ? 'block' : 'none'\"></div>\r\n"

/***/ }),

/***/ "./src/app/components/toolbox.component.scss":
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100vw;\n  height: 200px;\n  background: #9999ff;\n  padding: 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.block {\n  width: 100%;\n  height: 100%;\n  background: #000000 !important;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.6; }\n\n.row {\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: visible;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\nbutton {\n  margin: 5px;\n  border: none;\n  width: 45px;\n  height: 35px;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 60px;\n          flex: 0 0 60px; }\n\nbutton.num-btn {\n    font-size: 32px; }\n\nbutton.color-btn > div {\n    height: 80%;\n    width: 98%; }\n"

/***/ }),

/***/ "./src/app/components/toolbox.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolboxComponent = /** @class */ (function () {
    function ToolboxComponent() {
        this.disabled = true;
        this.buttonClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */]();
        this.iconBtns = ['check', 'times', 'question', 'exclamation', 'star', 'circle', 'chevron-circle-left', 'chevron-circle-right'];
        this.numBtns = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        this.colorBtns = ['#f25235', '#eeaa56', '#eee860', '#64f28a', '#6394e7', '#c5c5c5'];
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Object)
    ], ToolboxComponent.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* EventEmitter */])
    ], ToolboxComponent.prototype, "buttonClick", void 0);
    ToolboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-toolbox',
            template: __webpack_require__("./src/app/components/toolbox.component.html"),
            styles: [__webpack_require__("./src/app/components/toolbox.component.scss")]
        })
    ], ToolboxComponent);
    return ToolboxComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map