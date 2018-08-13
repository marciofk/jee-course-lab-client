(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/about/about.module": [
		"./src/app/about/about.module.ts",
		"app-about-about-module"
	],
	"app/customer/customer.module": [
		"./src/app/customer/customer.module.ts",
		"app-customer-customer-module"
	],
	"app/customers/customers.module": [
		"./src/app/customers/customers.module.ts",
		"app-customers-customers-module"
	],
	"app/orders/orders.module": [
		"./src/app/orders/orders.module.ts",
		"app-orders-orders-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var app_routes = [
    { path: '', pathMatch: 'full', redirectTo: '/customers' },
    { path: 'customers/:id', loadChildren: 'app/customer/customer.module#CustomerModule' },
    { path: 'customers', loadChildren: 'app/customers/customers.module#CustomersModule' },
    { path: 'orders', loadChildren: 'app/orders/orders.module#OrdersModule' },
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
    { path: '**', pathMatch: 'full', redirectTo: '/customers' } // catch any unfound routes and redirect to home page
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(app_routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\n    <cm-navbar></cm-navbar>\n    <router-outlet></router-outlet>\n    <cm-growler position=\"top-right\" timeout=\"2000\"></cm-growler>\n    <cm-modal></cm-modal>\n    <cm-overlay delay=\"300\">\n        <span class=\"spinner\"></span>&nbsp;&nbsp;&nbsp;Loading\n    </cm-overlay>\n</main>\n<br /><br />"

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
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cm-app-component',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_4__["LoginModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"] // Shared (multi-instance) objects
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _growler_growler_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./growler/growler.module */ "./src/app/core/growler/growler.module.ts");
/* harmony import */ var _modal_modal_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal/modal.module */ "./src/app/core/modal/modal.module.ts");
/* harmony import */ var _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overlay/overlay.module */ "./src/app/core/overlay/overlay.module.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/core/navbar/navbar.component.ts");
/* harmony import */ var _services_filter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/filter.service */ "./src/app/core/services/filter.service.ts");
/* harmony import */ var _services_sorter_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/sorter.service */ "./src/app/core/services/sorter.service.ts");
/* harmony import */ var _services_trackby_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/trackby.service */ "./src/app/core/services/trackby.service.ts");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/dialog.service */ "./src/app/core/services/dialog.service.ts");
/* harmony import */ var _ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ensureModuleLoadedOnceGuard */ "./src/app/core/ensureModuleLoadedOnceGuard.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/event-bus.service */ "./src/app/core/services/event-bus.service.ts");
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ "./src/app/core/interceptors/auth.interceptor.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

















var CoreModule = /** @class */ (function (_super) {
    __extends(CoreModule, _super);
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    function CoreModule(parentModule) {
        return _super.call(this, parentModule) || this;
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _growler_growler_module__WEBPACK_IMPORTED_MODULE_4__["GrowlerModule"], _modal_modal_module__WEBPACK_IMPORTED_MODULE_5__["ModalModule"], _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"]],
            exports: [_growler_growler_module__WEBPACK_IMPORTED_MODULE_4__["GrowlerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _modal_modal_module__WEBPACK_IMPORTED_MODULE_5__["ModalModule"], _overlay_overlay_module__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"]],
            declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"]],
            providers: [_services_sorter_service__WEBPACK_IMPORTED_MODULE_10__["SorterService"], _services_filter_service__WEBPACK_IMPORTED_MODULE_9__["FilterService"], _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"], _services_trackby_service__WEBPACK_IMPORTED_MODULE_11__["TrackByService"],
                _services_dialog_service__WEBPACK_IMPORTED_MODULE_12__["DialogService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _services_event_bus_service__WEBPACK_IMPORTED_MODULE_15__["EventBusService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_16__["AuthInterceptor"],
                    multi: true,
                }
            ] // these should be singleton
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}(_ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_13__["EnsureModuleLoadedOnceGuard"]));



/***/ }),

/***/ "./src/app/core/ensureModuleLoadedOnceGuard.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/ensureModuleLoadedOnceGuard.ts ***!
  \*****************************************************/
/*! exports provided: EnsureModuleLoadedOnceGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsureModuleLoadedOnceGuard", function() { return EnsureModuleLoadedOnceGuard; });
var EnsureModuleLoadedOnceGuard = /** @class */ (function () {
    function EnsureModuleLoadedOnceGuard(targetModule) {
        if (targetModule) {
            throw new Error(targetModule.constructor.name + " has already been loaded. Import this module in the AppModule only.");
        }
    }
    return EnsureModuleLoadedOnceGuard;
}());



/***/ }),

/***/ "./src/app/core/growler/growler.component.css":
/*!****************************************************!*\
  !*** ./src/app/core/growler/growler.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    .growler {\n      position: fixed;\n      z-index: 999999;\n    }\n    \n    .growler.close-button:focus {\n      outline: 0;\n    }\n    \n    .growler.top-left {\n      top: 12px;\n      left: 12px;\n    }\n    \n    .growler.top-right {\n      top: 12px;\n      right: 12px;\n    }\n    \n    .growler.bottom-right {\n      bottom: 12px;\n      right: 12px;\n    }\n    \n    .growler.bottom-left {\n      bottom: 12px;\n      left: 12px;\n    }\n    \n    .growler.top-center {\n      top: 12px;\n      left: 50%;\n      -webkit-transform: translate(-50%, 0%);\n              transform: translate(-50%, 0%);\n    }\n    \n    .growler.bottom-center {\n      bottom: 12px;\n      left: 50%;\n      -webkit-transform: translate(-50%, 0%);\n              transform: translate(-50%, 0%);\n    }\n    \n    .growl {\n      cursor: pointer;\n      padding: 5;\n      width: 285px;\n      height: 65px; \n      opacity: 0;      \n      display: flex;\n      align-items: center;\n      justify-content: center;\n      transition: opacity 1s;        \n    }\n    \n    .growl.active {        \n      opacity: 1;\n    }\n    \n    .growl-message {\n\n    }"

/***/ }),

/***/ "./src/app/core/growler/growler.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/growler/growler.component.ts ***!
  \***************************************************/
/*! exports provided: GrowlerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlerComponent", function() { return GrowlerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _growler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./growler.service */ "./src/app/core/growler/growler.service.ts");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/logger.service */ "./src/app/core/services/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GrowlerComponent = /** @class */ (function () {
    function GrowlerComponent(growlerService, logger) {
        this.growlerService = growlerService;
        this.logger = logger;
        this.growlCount = 0;
        this.growls = [];
        this.position = 'bottom-right';
        this.timeout = 3000;
        growlerService.growl = this.growl.bind(this);
    }
    GrowlerComponent.prototype.ngOnInit = function () { };
    /**
    * Displays a growl message.
    *
    * @param {string} message - The message to display.
    * @param {GrowlMessageType} growlType - The type of message to display (a GrowlMessageType enumeration)
    * @return {number} id - Returns the ID for the generated growl
    */
    GrowlerComponent.prototype.growl = function (message, growlType) {
        this.growlCount++;
        var bootstrapAlertType = _growler_service__WEBPACK_IMPORTED_MODULE_1__["GrowlerMessageType"][growlType].toLowerCase();
        var messageType = "alert-" + bootstrapAlertType;
        var growl = new Growl(this.growlCount, message, messageType, this.timeout, this);
        this.growls.push(growl);
        return growl.id;
    };
    GrowlerComponent.prototype.removeGrowl = function (id) {
        var _this = this;
        this.growls.forEach(function (growl, index) {
            if (growl.id === id) {
                _this.growls.splice(index, 1);
                _this.growlCount--;
                _this.logger.log('removed ' + id);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GrowlerComponent.prototype, "position", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], GrowlerComponent.prototype, "timeout", void 0);
    GrowlerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cm-growler',
            template: "\n    <div [ngClass]=\"position\" class=\"growler\">\n      <div *ngFor=\"let growl of growls\" [ngClass]=\"{active: growl.enabled}\"\n          class=\"growl alert {{ growl.messageType }}\">\n          <span class=\"growl-message\">{{ growl.message }}</span>\n      </div>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./growler.component.css */ "./src/app/core/growler/growler.component.css")]
        }),
        __metadata("design:paramtypes", [_growler_service__WEBPACK_IMPORTED_MODULE_1__["GrowlerService"],
            _services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]])
    ], GrowlerComponent);
    return GrowlerComponent;
}());

var Growl = /** @class */ (function () {
    function Growl(id, message, messageType, timeout, growlerContainer) {
        this.id = id;
        this.message = message;
        this.messageType = messageType;
        this.timeout = timeout;
        this.growlerContainer = growlerContainer;
        this.show();
    }
    Growl.prototype.show = function () {
        var _this = this;
        window.setTimeout(function () {
            _this.enabled = true;
            _this.setTimeout();
        }, 0);
    };
    Growl.prototype.setTimeout = function () {
        var _this = this;
        window.setTimeout(function () {
            _this.hide();
        }, this.timeout);
    };
    Growl.prototype.hide = function () {
        var _this = this;
        this.enabled = false;
        window.setTimeout(function () {
            _this.growlerContainer.removeGrowl(_this.id);
        }, this.timeout);
    };
    return Growl;
}());


/***/ }),

/***/ "./src/app/core/growler/growler.module.ts":
/*!************************************************!*\
  !*** ./src/app/core/growler/growler.module.ts ***!
  \************************************************/
/*! exports provided: GrowlerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlerModule", function() { return GrowlerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ensureModuleLoadedOnceGuard */ "./src/app/core/ensureModuleLoadedOnceGuard.ts");
/* harmony import */ var _growler_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./growler.component */ "./src/app/core/growler/growler.component.ts");
/* harmony import */ var _growler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./growler.service */ "./src/app/core/growler/growler.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var GrowlerModule = /** @class */ (function (_super) {
    __extends(GrowlerModule, _super);
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    function GrowlerModule(parentModule) {
        return _super.call(this, parentModule) || this;
    }
    GrowlerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_growler_component__WEBPACK_IMPORTED_MODULE_3__["GrowlerComponent"]],
            providers: [_growler_service__WEBPACK_IMPORTED_MODULE_4__["GrowlerService"]],
            declarations: [_growler_component__WEBPACK_IMPORTED_MODULE_3__["GrowlerComponent"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [GrowlerModule])
    ], GrowlerModule);
    return GrowlerModule;
}(_ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_2__["EnsureModuleLoadedOnceGuard"]));



/***/ }),

/***/ "./src/app/core/growler/growler.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/growler/growler.service.ts ***!
  \*************************************************/
/*! exports provided: GrowlerService, GrowlerMessageType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlerService", function() { return GrowlerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowlerMessageType", function() { return GrowlerMessageType; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GrowlerService = /** @class */ (function () {
    function GrowlerService() {
    }
    GrowlerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], GrowlerService);
    return GrowlerService;
}());

var GrowlerMessageType;
(function (GrowlerMessageType) {
    GrowlerMessageType[GrowlerMessageType["Success"] = 0] = "Success";
    GrowlerMessageType[GrowlerMessageType["Danger"] = 1] = "Danger";
    GrowlerMessageType[GrowlerMessageType["Warning"] = 2] = "Warning";
    GrowlerMessageType[GrowlerMessageType["Info"] = 3] = "Info";
})(GrowlerMessageType || (GrowlerMessageType = {}));


/***/ }),

/***/ "./src/app/core/interceptors/auth.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        // Get the auth header (fake value is shown here)
        var authHeader = '49a5kdkv409fd39'; // this.authService.getAuthHeader();
        var authReq = req.clone({ headers: req.headers.set('Authorization', authHeader) });
        console.log('auth interceptor');
        return next.handle(authReq);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/core/modal/modal.component.css":
/*!************************************************!*\
  !*** ./src/app/core/modal/modal.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n  background: rgba(0,0,0,0.6);\n}"

/***/ }),

/***/ "./src/app/core/modal/modal.component.html":
/*!*************************************************!*\
  !*** ./src/app/core/modal/modal.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" tabindex=\"-1\" [ngClass]=\"{'in': modalVisibleAnimate}\"\n    [ngStyle]=\"{'display': modalVisible ? 'block' : 'none', 'opacity': modalVisibleAnimate ? 1 : 0}\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"cancel()\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                <h4 class=\"modal-title\">{{ modalContent.header }}</h4>\n            </div>\n            <div class=\"modal-body\">\n                {{ modalContent.body }}\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"cancel()\" *ngIf=\"modalContent.cancelButtonVisible\">{{ modalContent.cancelButtonText }}</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"ok()\">{{ modalContent.OKButtonText }}</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/core/modal/modal.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/modal/modal.component.ts ***!
  \***********************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.service */ "./src/app/core/modal/modal.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
        this.modalVisible = false;
        this.modalVisibleAnimate = false;
        this.modalContent = {};
        this.defaultModalContent = {
            header: 'Please Confirm',
            body: 'Are you sure you want to continue?',
            cancelButtonText: 'Cancel',
            OKButtonText: 'OK',
            cancelButtonVisible: true
        };
        modalService.show = this.show.bind(this);
        modalService.hide = this.hide.bind(this);
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.show = function (modalContent) {
        var _this = this;
        this.modalContent = Object.assign(this.defaultModalContent, modalContent);
        this.modalVisible = true;
        setTimeout(function () { return _this.modalVisibleAnimate = true; });
        var promise = new Promise(function (resolve, reject) {
            _this.cancel = function () {
                _this.hide();
                resolve(false);
            };
            _this.ok = function () {
                _this.hide();
                resolve(true);
            };
        });
        return promise;
    };
    ModalComponent.prototype.hide = function () {
        var _this = this;
        this.modalVisibleAnimate = false;
        setTimeout(function () { return _this.modalVisible = false; }, 300);
    };
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cm-modal',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/core/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.css */ "./src/app/core/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_1__["ModalService"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/core/modal/modal.module.ts":
/*!********************************************!*\
  !*** ./src/app/core/modal/modal.module.ts ***!
  \********************************************/
/*! exports provided: ModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalModule", function() { return ModalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ensureModuleLoadedOnceGuard */ "./src/app/core/ensureModuleLoadedOnceGuard.ts");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.component */ "./src/app/core/modal/modal.component.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.service */ "./src/app/core/modal/modal.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ModalModule = /** @class */ (function (_super) {
    __extends(ModalModule, _super);
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    function ModalModule(parentModule) {
        return _super.call(this, parentModule) || this;
    }
    ModalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]],
            declarations: [_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"]],
            providers: [_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [ModalModule])
    ], ModalModule);
    return ModalModule;
}(_ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_2__["EnsureModuleLoadedOnceGuard"]));



/***/ }),

/***/ "./src/app/core/modal/modal.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/modal/modal.service.ts ***!
  \*********************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalService = /** @class */ (function () {
    function ModalService() {
    }
    ModalService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "./src/app/core/navbar/navbar.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inner navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\" style=\"\">\n            <button type=\"button\" class=\"navbar-toggle\" \n                    (click)=\"isCollapsed = !isCollapsed\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" routerLink=\"/customers\">\n                <img src=\"assets/images/people.png\" alt=\"logo\" />\n                <span class=\"app-title\">Customer Manager</span>\n            </a>\n            <span class=\"navbar-collapse\" [attr.data-collapse]=\"isCollapsed\">\n                <ul class=\"nav navbar-nav nav-pills navBarPadding\">\n                    <li routerLinkActive=\"active\"><a routerLink=\"/customers\">Customers</a></li>\n                    <li routerLinkActive=\"active\"><a routerLink=\"/orders\">Orders</a></li>\n                    <li routerLinkActive=\"active\"><a routerLink=\"/about\">About</a></li>\n                    <li routerLinkActive=\"active\" (click)=\"loginOrOut()\"><a>{{ loginLogoutText }}</a></li>\n                    <li><p>[exercise placeholder]</p></li>\n\n\n                </ul>\n            </span>\n\n\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/core/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _growler_growler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../growler/growler.service */ "./src/app/core/growler/growler.service.ts");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/logger.service */ "./src/app/core/services/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, authservice, growler, logger) {
        this.router = router;
        this.authservice = authservice;
        this.growler = growler;
        this.logger = logger;
        this.loginLogoutText = 'Login';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.authservice.authChanged
            .subscribe(function (loggedIn) {
            _this.setLoginLogoutText();
        }, function (err) { return _this.logger.log(err); });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NavbarComponent.prototype.loginOrOut = function () {
        var _this = this;
        var isAuthenticated = this.authservice.isAuthenticated;
        if (isAuthenticated) {
            this.authservice.logout()
                .subscribe(function (status) {
                _this.setLoginLogoutText();
                _this.growler.growl('Logged Out', _growler_growler_service__WEBPACK_IMPORTED_MODULE_3__["GrowlerMessageType"].Info);
                _this.router.navigate(['/customers']);
                return;
            }, function (err) { return _this.logger.log(err); });
        }
        this.redirectToLogin();
    };
    NavbarComponent.prototype.redirectToLogin = function () {
        this.router.navigate(['/login']);
    };
    NavbarComponent.prototype.setLoginLogoutText = function () {
        this.loginLogoutText = (this.authservice.isAuthenticated) ? 'Logout' : 'Login';
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cm-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/core/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _growler_growler_service__WEBPACK_IMPORTED_MODULE_3__["GrowlerService"],
            _services_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/core/overlay/overlay-request-response.interceptor.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/overlay/overlay-request-response.interceptor.ts ***!
  \**********************************************************************/
/*! exports provided: OverlayRequestResponseInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayRequestResponseInterceptor", function() { return OverlayRequestResponseInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/event-bus.service */ "./src/app/core/services/event-bus.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OverlayRequestResponseInterceptor = /** @class */ (function () {
    function OverlayRequestResponseInterceptor(eventBus) {
        this.eventBus = eventBus;
    }
    OverlayRequestResponseInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var randomTime = this.getRandomIntInclusive(0, 1500);
        var started = Date.now();
        this.eventBus.emit(new _services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__["EmitEvent"](_services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__["Events"].httpRequest));
        return next
            .handle(req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(randomTime), // Simulate random Http call delays
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                var elapsed = Date.now() - started;
                _this.eventBus.emit(new _services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__["EmitEvent"](_services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__["Events"].httpResponse));
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            _this.eventBus.emit(new _services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__["EmitEvent"](_services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__["Events"].httpResponse));
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }));
    };
    OverlayRequestResponseInterceptor.prototype.getRandomIntInclusive = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
    };
    OverlayRequestResponseInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_event_bus_service__WEBPACK_IMPORTED_MODULE_4__["EventBusService"]])
    ], OverlayRequestResponseInterceptor);
    return OverlayRequestResponseInterceptor;
}());



/***/ }),

/***/ "./src/app/core/overlay/overlay.component.css":
/*!****************************************************!*\
  !*** ./src/app/core/overlay/overlay.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\n  display:none;\n}\n\n.overlay.active {        \n  display: block;\n}\n\n.overlay-background {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: block;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n  background-color:rgba(0,0,0,0.6);\n}\n\n.overlay-content {\n\n}\n\n.overlay-content {\n  position: fixed;\n  z-index: 999999;\n  top: 50%;\n  left: 50%;\n  background-color: white;\n  border: 1px solid rgb(94, 94, 94);\n  -webkit-transform: translate(-50%, 0%);\n          transform: translate(-50%, 0%);\n\n  cursor: pointer;\n  padding: 5;\n  width: 285px;\n  height: 100px;    \n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: opacity 1s;        \n} \n"

/***/ }),

/***/ "./src/app/core/overlay/overlay.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/overlay/overlay.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"overlay\" [class.active]=\"enabled\">\n    <div class=\"overlay-background\"></div>\n    <div class=\"overlay-content\">\n        <ng-content></ng-content>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/core/overlay/overlay.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/overlay/overlay.component.ts ***!
  \***************************************************/
/*! exports provided: OverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayComponent", function() { return OverlayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/event-bus.service */ "./src/app/core/services/event-bus.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OverlayComponent = /** @class */ (function () {
    function OverlayComponent(eventBus) {
        this.eventBus = eventBus;
        this.enabled = false;
        this.queue = [];
        this.timerId = null;
        this.timerHideId = null;
        this.delay = 500;
    }
    OverlayComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Handle request
        this.httpRequestSub = this.eventBus.on(_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__["Events"].httpRequest, (function () {
            _this.queue.push({});
            if (_this.queue.length === 1) {
                // Only show if we have an item in the queue after the delay time
                setTimeout(function () {
                    if (_this.queue.length) {
                        _this.enabled = true;
                    }
                }, _this.delay);
            }
        }));
        // Handle response
        this.httpResponseSub = this.eventBus.on(_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__["Events"].httpResponse, (function () {
            _this.queue.pop();
            if (_this.queue.length === 0) {
                // Since we don't know if another XHR request will be made, pause before
                // hiding the overlay. If another XHR request comes in then the overlay
                // will stay visible which prevents a flicker
                setTimeout(function () {
                    // Make sure queue is still 0 since a new XHR request may have come in
                    // while timer was running
                    if (_this.queue.length === 0) {
                        _this.enabled = false;
                    }
                }, _this.delay);
            }
        }));
    };
    OverlayComponent.prototype.ngOnDestroy = function () {
        this.httpRequestSub.unsubscribe();
        this.httpResponseSub.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], OverlayComponent.prototype, "delay", void 0);
    OverlayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cm-overlay',
            template: __webpack_require__(/*! ./overlay.component.html */ "./src/app/core/overlay/overlay.component.html"),
            styles: [__webpack_require__(/*! ./overlay.component.css */ "./src/app/core/overlay/overlay.component.css")]
        }),
        __metadata("design:paramtypes", [_services_event_bus_service__WEBPACK_IMPORTED_MODULE_1__["EventBusService"]])
    ], OverlayComponent);
    return OverlayComponent;
}());



/***/ }),

/***/ "./src/app/core/overlay/overlay.module.ts":
/*!************************************************!*\
  !*** ./src/app/core/overlay/overlay.module.ts ***!
  \************************************************/
/*! exports provided: OverlayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayModule", function() { return OverlayModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ensureModuleLoadedOnceGuard */ "./src/app/core/ensureModuleLoadedOnceGuard.ts");
/* harmony import */ var _overlay_request_response_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlay-request-response.interceptor */ "./src/app/core/overlay/overlay-request-response.interceptor.ts");
/* harmony import */ var _overlay_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overlay.component */ "./src/app/core/overlay/overlay.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var OverlayModule = /** @class */ (function (_super) {
    __extends(OverlayModule, _super);
    // Looks for the module in the parent injector to see if it's already been loaded (only want it loaded once)
    function OverlayModule(parentModule) {
        return _super.call(this, parentModule) || this;
    }
    OverlayModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_overlay_component__WEBPACK_IMPORTED_MODULE_5__["OverlayComponent"]],
            declarations: [_overlay_component__WEBPACK_IMPORTED_MODULE_5__["OverlayComponent"]],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _overlay_request_response_interceptor__WEBPACK_IMPORTED_MODULE_4__["OverlayRequestResponseInterceptor"],
                    multi: true,
                }
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [OverlayModule])
    ], OverlayModule);
    return OverlayModule;
}(_ensureModuleLoadedOnceGuard__WEBPACK_IMPORTED_MODULE_3__["EnsureModuleLoadedOnceGuard"]));



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.localApiServer = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].localApiServer;
        this.authUrl = this.localApiServer + '/api/auth';
        this.isAuthenticated = false;
        this.authChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AuthService.prototype.userAuthChanged = function (status) {
        this.authChanged.emit(status); // Raise changed event
    };
    AuthService.prototype.login = function (userLogin) {
        var _this = this;
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('email', userLogin.email)
            .set('password', userLogin.password);
        return this.http.post(this.authUrl + '/login', body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Content-type', 'application/x-www-form-urlencoded'),
            withCredentials: true
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (loggedIn) {
            _this.isAuthenticated = loggedIn;
            _this.userAuthChanged(loggedIn);
            return loggedIn;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.post(this.authUrl + '/logout', null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (loggedOut) {
            _this.isAuthenticated = !loggedOut;
            _this.userAuthChanged(!loggedOut); // Return loggedIn status
            return loggedOut;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    AuthService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            var errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error || 'Server error');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AuthService.prototype, "authChanged", void 0);
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/data.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/data.service.ts ***!
  \***********************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.localApiServer = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].localApiServer;
        this.customersBaseUrl = this.localApiServer + '/api/customers';
        this.ordersBaseUrl = this.localApiServer + '/api/orders';
    }
    DataService.prototype.getCustomersPage = function (page, pageSize) {
        var _this = this;
        return this.http.get(this.customersBaseUrl + "/page/" + page + "/" + pageSize, { observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            var totalRecords = +res.headers.get('X-InlineCount');
            console.log('Total records ' + totalRecords);
            console.log('Headers: ' + JSON.stringify(res.headers));
            var customers = res.body;
            _this.calculateCustomersOrderTotal(customers);
            return {
                results: customers,
                totalRecords: totalRecords
            };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.getCustomers = function () {
        var _this = this;
        return this.http.get(this.customersBaseUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (customers) {
            _this.calculateCustomersOrderTotal(customers);
            return customers;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.getCustomer = function (id) {
        var _this = this;
        return this.http.get(this.customersBaseUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (customer) {
            _this.calculateCustomersOrderTotal([customer]);
            return customer;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.insertCustomer = function (customer) {
        console.log(JSON.stringify(customer));
        return this.http.post(this.customersBaseUrl, customer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.updateCustomer = function (customer) {
        return this.http.put(this.customersBaseUrl + '/' + customer.id, customer)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.status; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.deleteCustomer = function (id) {
        return this.http.delete(this.customersBaseUrl + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.status; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.getStates = function () {
        return this.http.get(this.localApiServer + '/api/states')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    DataService.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error.error instanceof Error) {
            var errMessage = error.error.message;
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errMessage);
            // Use the following instead if using lite-server
            // return Observable.throw(err.text() || 'backend server error');
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(error || 'Node.js server error');
    };
    DataService.prototype.calculateCustomersOrderTotal = function (customers) {
        for (var _i = 0, customers_1 = customers; _i < customers_1.length; _i++) {
            var customer = customers_1[_i];
            if (customer && customer.orders) {
                var total = 0;
                for (var _a = 0, _b = customer.orders; _a < _b.length; _a++) {
                    var order = _b[_a];
                    total += order.itemCost;
                }
                customer.orderTotal = total;
            }
        }
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/core/services/dialog.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/dialog.service.ts ***!
  \*************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DialogService = /** @class */ (function () {
    function DialogService() {
        this.message = 'Is it OK?';
    }
    DialogService.prototype.confirm = function (message) {
        if (message) {
            this.message = message;
        }
        this.promise = new Promise(this.resolver);
        return this.promise;
    };
    DialogService.prototype.resolver = function (resolve) {
        return resolve(window.confirm('Is it OK?'));
    };
    DialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/core/services/event-bus.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/event-bus.service.ts ***!
  \****************************************************/
/*! exports provided: EventBusService, EmitEvent, Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBusService", function() { return EventBusService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmitEvent", function() { return EmitEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventBusService = /** @class */ (function () {
    function EventBusService() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    EventBusService.prototype.on = function (event, action) {
        return this.subject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (e) {
            return e.name === event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (e) {
            return e.value;
        }))
            .subscribe(action);
    };
    EventBusService.prototype.emit = function (event) {
        this.subject.next(event);
    };
    EventBusService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], EventBusService);
    return EventBusService;
}());

var EmitEvent = /** @class */ (function () {
    function EmitEvent(name, value) {
        this.name = name;
        this.value = value;
    }
    return EmitEvent;
}());

var Events;
(function (Events) {
    Events[Events["httpRequest"] = 0] = "httpRequest";
    Events[Events["httpResponse"] = 1] = "httpResponse";
})(Events || (Events = {}));


/***/ }),

/***/ "./src/app/core/services/filter.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/filter.service.ts ***!
  \*************************************************/
/*! exports provided: FilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterService", function() { return FilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_property_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/property-resolver */ "./src/app/core/services/property-resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterService = /** @class */ (function () {
    function FilterService() {
    }
    FilterService.prototype.filter = function (items, data, props) {
        return items.filter(function (item) {
            var match = false;
            for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
                var prop = props_1[_i];
                if (prop.indexOf('.') > -1) {
                    var value = _core_services_property_resolver__WEBPACK_IMPORTED_MODULE_1__["PropertyResolver"].resolve(prop, item);
                    if (value && value.toUpperCase().indexOf(data) > -1) {
                        match = true;
                        break;
                    }
                    continue;
                }
                if (item[prop].toString().toUpperCase().indexOf(data) > -1) {
                    match = true;
                    break;
                }
            }
            return match;
        });
    };
    FilterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FilterService);
    return FilterService;
}());



/***/ }),

/***/ "./src/app/core/services/logger.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/logger.service.ts ***!
  \*************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.log = function (msg) {
        console.log(msg);
    };
    LoggerService.prototype.logError = function (msg) {
        console.error(msg);
    };
    LoggerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/core/services/property-resolver.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/property-resolver.ts ***!
  \****************************************************/
/*! exports provided: PropertyResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyResolver", function() { return PropertyResolver; });
var PropertyResolver = /** @class */ (function () {
    function PropertyResolver() {
    }
    PropertyResolver.resolve = function (path, obj) {
        return path.split('.').reduce(function (prev, curr) {
            return (prev ? prev[curr] : undefined);
        }, obj || self);
    };
    return PropertyResolver;
}());



/***/ }),

/***/ "./src/app/core/services/sorter.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/sorter.service.ts ***!
  \*************************************************/
/*! exports provided: SorterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorterService", function() { return SorterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_property_resolver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/property-resolver */ "./src/app/core/services/property-resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SorterService = /** @class */ (function () {
    function SorterService() {
        this.property = null;
        this.direction = 1;
    }
    SorterService.prototype.sort = function (collection, prop) {
        var _this = this;
        this.property = prop;
        this.direction = (this.property === prop) ? this.direction * -1 : 1;
        collection.sort(function (a, b) {
            var aVal;
            var bVal;
            // Handle resolving complex properties such as 'state.name' for prop value
            if (prop && prop.indexOf('.') > -1) {
                aVal = _core_services_property_resolver__WEBPACK_IMPORTED_MODULE_1__["PropertyResolver"].resolve(prop, a);
                bVal = _core_services_property_resolver__WEBPACK_IMPORTED_MODULE_1__["PropertyResolver"].resolve(prop, b);
            }
            else {
                aVal = a[prop];
                bVal = b[prop];
            }
            // Fix issues that spaces before/after string value can cause such as ' San Francisco'
            if (_this.isString(aVal)) {
                aVal = aVal.trim().toUpperCase();
            }
            if (_this.isString(bVal)) {
                bVal = bVal.trim().toUpperCase();
            }
            if (aVal === bVal) {
                return 0;
            }
            else if (aVal > bVal) {
                return _this.direction * -1;
            }
            else {
                return _this.direction * 1;
            }
        });
    };
    SorterService.prototype.isString = function (val) {
        return (val && (typeof val === 'string' || val instanceof String));
    };
    SorterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], SorterService);
    return SorterService;
}());



/***/ }),

/***/ "./src/app/core/services/trackby.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/trackby.service.ts ***!
  \**************************************************/
/*! exports provided: TrackByService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackByService", function() { return TrackByService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TrackByService = /** @class */ (function () {
    function TrackByService() {
    }
    TrackByService.prototype.customer = function (index, customer) {
        return customer.id;
    };
    TrackByService.prototype.order = function (index, order) {
        return index;
    };
    TrackByService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], TrackByService);
    return TrackByService;
}());



/***/ }),

/***/ "./src/app/core/services/validation.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/validation.service.ts ***!
  \*****************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (code) {
        var config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.'
        };
        return config[code];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        // tslint:disable-next-line
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        // tslint:disable-next-line
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        // (?!.*\s)          - Spaces are not allowed
        // tslint:disable-next-line
        if (control.value.match(/^(?=.*\d)(?=.*[a-zA-Z!@#$%^&*])(?!.*\s).{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    return ValidationService;
}());



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'login', component: _login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule.components = [_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]];
    LoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form input[type='text'], \n.login-form input[type='email'],\n.login-form input[type='password'] {\n    width:75%;\n}\n\n.login-form .ng-invalid {\n  border-left: 5px solid #a94442;\n}\n\n.login-form .ng-valid {\n  border-left: 5px solid #42A948;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view\">\n    <div class=\"container\">\n        <header>\n            <h3><span class=\"glyphicon glyphicon-lock\"></span> Login </h3>\n        </header>\n        <br />\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"submit(loginForm)\" class=\"login-form\" novalidate>\n            <div class=\"login\">\n                <div class=\"row\">\n                    <div class=\"col-md-2\">\n                        Email:\n                    </div>\n                    <div class=\"col-md-10\">\n                        <input type=\"email\" name=\"email\" class=\"form-control\" formControlName=\"email\" />\n                        <div class=\"alert alert-danger\" [hidden]=\"loginForm.controls.email.untouched || loginForm.controls.email.valid\">\n                            A valid email address is required\n                        </div>\n                    </div>\n                </div>\n                <br />\n                <div class=\"row\">\n                    <div class=\"col-md-2\">\n                        Password:\n                    </div>\n                    <div class=\"col-md-10\">\n                        <input type=\"password\" name=\"password\" class=\"form-control\" formControlName=\"password\" />\n                        <div class=\"alert alert-danger\" [hidden]=\"loginForm.controls.password.untouched || loginForm.controls.password.valid\">\n                            Password is required (6 or more characters with at least one number)\n                        </div>\n                    </div>\n                </div>\n                <br />\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!loginForm.valid\">Login</button>\n                    </div>\n                </div>\n                <br />\n                <div class=\"statusRow\">\n                    <br />\n                    <div class=\"label label-important\" *ngIf=\"errorMessage\">\n                        <span class=\"glyphicon glyphicon-thumbs-down icon-white\"></span>&nbsp;&nbsp;Error: {{ errorMessage }}\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-5\">\n                        <div class=\"alert alert-info\" role=\"alert\">\n                            <p>Number of successful login attempts so far <span class=\"badge\">{{ visits }}</span></p>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </form>\n        \n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/services/validation.service */ "./src/app/core/services/validation.service.ts");
/* harmony import */ var _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/growler/growler.service */ "./src/app/core/growler/growler.service.ts");
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services/logger.service */ "./src/app/core/services/logger.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, authService, growler, logger, cookieService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.growler = growler;
        this.logger = logger;
        this.cookieService = cookieService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    LoginComponent.prototype.buildForm = function () {
        var emailValue;
        emailValue = this.cookieService.get('email');
        this.visits = this.cookieService.get('visits');
        console.log('email: ' + emailValue);
        this.loginForm = this.formBuilder.group({
            email: [emailValue, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _core_services_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"].emailValidator]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _core_services_validation_service__WEBPACK_IMPORTED_MODULE_4__["ValidationService"].passwordValidator]]
        });
    };
    LoginComponent.prototype.submit = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        this.authService.login(value)
            .subscribe(function (status) {
            if (status) {
                _this.growler.growl('Logged in', _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_5__["GrowlerMessageType"].Info);
                if (_this.authService.redirectUrl) {
                    var redirectUrl = _this.authService.redirectUrl;
                    _this.authService.redirectUrl = '';
                    _this.router.navigate([redirectUrl]);
                }
                else {
                    _this.router.navigate(['/customers']);
                }
            }
            else {
                var loginError = 'Unable to login';
                _this.errorMessage = loginError;
                _this.growler.growl(loginError, _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_5__["GrowlerMessageType"].Danger);
            }
        }, function (err) { return _this.logger.log(err); });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cm-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_5__["GrowlerService"],
            _core_services_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"]],
            declarations: [_login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"].components]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/shared/directives/sortby.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/directives/sortby.directive.ts ***!
  \*******************************************************/
/*! exports provided: SortByDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortByDirective", function() { return SortByDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SortByDirective = /** @class */ (function () {
    function SortByDirective() {
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(SortByDirective.prototype, "sortBy", {
        set: function (value) {
            this.sortProperty = value;
        },
        enumerable: true,
        configurable: true
    });
    SortByDirective.prototype.onClick = function () {
        event.preventDefault();
        this.sorted.next(this.sortProperty); // Raise clicked event
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], SortByDirective.prototype, "sorted", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('cmSortBy'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SortByDirective.prototype, "sortBy", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], SortByDirective.prototype, "onClick", null);
    SortByDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[cmSortBy]'
        }),
        __metadata("design:paramtypes", [])
    ], SortByDirective);
    return SortByDirective;
}());



/***/ }),

/***/ "./src/app/shared/filter-textbox/filter-textbox.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/filter-textbox/filter-textbox.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "cm-filter-textbox {\n    margin-top: 5px;\n}\n"

/***/ }),

/***/ "./src/app/shared/filter-textbox/filter-textbox.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/filter-textbox/filter-textbox.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form>\n        Filter:\n        <input type=\"text\" name=\"filter\"\n            [(ngModel)]=\"model.filter\" \n            (keyup)=\"filterChanged($event)\"  />\n</form>"

/***/ }),

/***/ "./src/app/shared/filter-textbox/filter-textbox.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/filter-textbox/filter-textbox.component.ts ***!
  \*******************************************************************/
/*! exports provided: FilterTextboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTextboxComponent", function() { return FilterTextboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterTextboxComponent = /** @class */ (function () {
    function FilterTextboxComponent() {
        this.model = { filter: null };
        this.changed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FilterTextboxComponent.prototype.filterChanged = function (event) {
        event.preventDefault();
        this.changed.emit(this.model.filter); // Raise changed event
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FilterTextboxComponent.prototype, "changed", void 0);
    FilterTextboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cm-filter-textbox',
            template: __webpack_require__(/*! ./filter-textbox.component.html */ "./src/app/shared/filter-textbox/filter-textbox.component.html"),
            styles: [__webpack_require__(/*! ./filter-textbox.component.css */ "./src/app/shared/filter-textbox/filter-textbox.component.css")]
        })
    ], FilterTextboxComponent);
    return FilterTextboxComponent;
}());



/***/ }),

/***/ "./src/app/shared/filter-textbox/filter-textbox.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/filter-textbox/filter-textbox.module.ts ***!
  \****************************************************************/
/*! exports provided: FilterTextboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTextboxModule", function() { return FilterTextboxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _filter_textbox_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-textbox.component */ "./src/app/shared/filter-textbox/filter-textbox.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FilterTextboxModule = /** @class */ (function () {
    function FilterTextboxModule() {
    }
    FilterTextboxModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            exports: [_filter_textbox_component__WEBPACK_IMPORTED_MODULE_3__["FilterTextboxComponent"]],
            declarations: [_filter_textbox_component__WEBPACK_IMPORTED_MODULE_3__["FilterTextboxComponent"]]
        })
    ], FilterTextboxModule);
    return FilterTextboxModule;
}());



/***/ }),

/***/ "./src/app/shared/map/map.component.html":
/*!***********************************************!*\
  !*** ./src/app/shared/map/map.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #mapContainer [style.height]=\"mapHeight\" [style.width]=\"mapWidth\">Map Loading....</div>"

/***/ }),

/***/ "./src/app/shared/map/map.component.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/map/map.component.ts ***!
  \*********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _mapPoint_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapPoint.component */ "./src/app/shared/map/mapPoint.component.ts");
/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts" />
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapComponent = /** @class */ (function () {
    function MapComponent() {
        this.markers = [];
        this.latitude = 34.5133;
        this.longitude = -94.1629;
        this.markerText = 'Your Location';
        this.zoom = 8;
    }
    Object.defineProperty(MapComponent.prototype, "enabled", {
        // Necessary since a map rendered while container is hidden
        // will not load the map tiles properly and show a grey screen
        get: function () {
            return this.isEnabled;
        },
        set: function (isEnabled) {
            this.isEnabled = isEnabled;
            this.init();
        },
        enumerable: true,
        configurable: true
    });
    MapComponent.prototype.ngOnInit = function () {
        if (this.latitude && this.longitude) {
            if (this.mapHeight && this.mapWidth) {
                this.mapHeight = this.height + 'px';
                this.mapWidth = this.width + 'px';
            }
            else {
                var hw = this.getWindowHeightWidth(this.mapDiv.nativeElement.ownerDocument);
                this.mapHeight = hw.height / 2 + 'px';
                this.mapWidth = hw.width + 'px';
            }
        }
    };
    MapComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.mapPoints.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(500))
            .subscribe(function () {
            if (_this.enabled) {
                _this.renderMapPoints();
            }
        });
    };
    MapComponent.prototype.init = function () {
        var _this = this;
        // Need slight delay to avoid grey box when google script has previously been loaded.
        // Otherwise map <div> container may not be visible yet which causes the grey box.
        setTimeout(function () {
            _this.ensureScript();
        }, 200);
    };
    MapComponent.prototype.getWindowHeightWidth = function (document) {
        var width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        var height = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        if (width > 900) {
            width = 900;
        }
        return { height: height, width: width };
    };
    MapComponent.prototype.ensureScript = function () {
        var _this = this;
        this.loadingScript = true;
        var document = this.mapDiv.nativeElement.ownerDocument;
        var script = document.querySelector('script[id="googlemaps"]');
        if (script) {
            if (this.isEnabled) {
                this.renderMap();
            }
        }
        else {
            var mapsScript = document.createElement('script');
            mapsScript.id = 'googlemaps';
            mapsScript.type = 'text/javascript';
            mapsScript.async = true;
            mapsScript.defer = true;
            mapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDg6QToCPZ6rCeEeMJEAarN6DAoRHSHp2Q';
            mapsScript.onload = function () {
                _this.loadingScript = false;
                if (_this.isEnabled) {
                    _this.renderMap();
                }
            };
            document.body.appendChild(mapsScript);
        }
    };
    MapComponent.prototype.renderMap = function () {
        var latlng = this.createLatLong(this.latitude, this.longitude);
        var options = {
            zoom: this.zoom,
            center: latlng,
            mapTypeControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapDiv.nativeElement, options);
        if (this.mapPoints && this.mapPoints.length) {
            this.renderMapPoints();
        }
        else {
            this.createMarker(latlng, this.map, this.markerText);
        }
    };
    MapComponent.prototype.createLatLong = function (latitude, longitude) {
        return (latitude && longitude) ? new google.maps.LatLng(latitude, longitude) : null;
    };
    MapComponent.prototype.renderMapPoints = function () {
        var _this = this;
        if (this.map) {
            this.clearMapPoints();
            this.mapPoints.forEach(function (point) {
                var mapPointLatlng = _this.createLatLong(point.latitude, point.longitude);
                _this.createMarker(mapPointLatlng, _this.map, point.markerText);
            });
        }
    };
    MapComponent.prototype.clearMapPoints = function () {
        this.markers.forEach(function (marker) {
            marker.setMap(null);
        });
        this.markers = [];
    };
    MapComponent.prototype.createMarker = function (position, map, title) {
        var infowindow = new google.maps.InfoWindow({
            content: title
        });
        var marker = new google.maps.Marker({
            position: position,
            map: map,
            title: title,
            animation: google.maps.Animation.DROP
        });
        this.markers.push(marker);
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MapComponent.prototype, "height", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MapComponent.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "latitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "longitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "markerText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "zoom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], MapComponent.prototype, "enabled", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('mapContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MapComponent.prototype, "mapDiv", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_mapPoint_component__WEBPACK_IMPORTED_MODULE_2__["MapPointComponent"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], MapComponent.prototype, "mapPoints", void 0);
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cm-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/shared/map/map.component.html"),
            // When using OnPush detectors, then the framework will check an OnPush
            // component when any of its input properties changes, when it fires
            // an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/shared/map/map.module.ts":
/*!******************************************!*\
  !*** ./src/app/shared/map/map.module.ts ***!
  \******************************************/
/*! exports provided: MapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapModule", function() { return MapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map.component */ "./src/app/shared/map/map.component.ts");
/* harmony import */ var _mapPoint_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mapPoint.component */ "./src/app/shared/map/mapPoint.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MapModule = /** @class */ (function () {
    function MapModule() {
    }
    MapModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"], _mapPoint_component__WEBPACK_IMPORTED_MODULE_3__["MapPointComponent"]],
            declarations: [_map_component__WEBPACK_IMPORTED_MODULE_2__["MapComponent"], _mapPoint_component__WEBPACK_IMPORTED_MODULE_3__["MapPointComponent"]]
        })
    ], MapModule);
    return MapModule;
}());



/***/ }),

/***/ "./src/app/shared/map/mapPoint.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/map/mapPoint.component.ts ***!
  \**************************************************/
/*! exports provided: MapPointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPointComponent", function() { return MapPointComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapPointComponent = /** @class */ (function () {
    function MapPointComponent() {
    }
    MapPointComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MapPointComponent.prototype, "longitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MapPointComponent.prototype, "latitude", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MapPointComponent.prototype, "markerText", void 0);
    MapPointComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cm-map-point',
            template: ""
        }),
        __metadata("design:paramtypes", [])
    ], MapPointComponent);
    return MapPointComponent;
}());



/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination>.active>a, \n.pagination>.active>a:focus, \n.pagination>.active>a:hover, \n.pagination>.active>span, \n.pagination>.active>span:focus, \n.pagination>.active>span:hover {\n  background-color: #027FF4;\n  border-color: #027FF4;\n}\n\n.pagination a {\n    cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav [hidden]=\"!isVisible\">\n  <ul class=\"pagination\">\n    <li [class.disabled]=\"!previousEnabled\" (click)=\"previousNext(-1, $event)\">\n      <a aria-label=\"Previous\">\n        <span aria-hidden=\"true\">&laquo;</span>\n      </a>\n    </li>\n    <li *ngFor=\"let page of pages\" (click)=\"changePage(page, $event)\" [class.active]=\"currentPage === page\">\n      <a>{{ page }}</a>\n    </li>\n    <li [class.disabled]=\"!nextEnabled\" (click)=\"previousNext(1, $event)\">\n      <a aria-label=\"Next\">\n        <span aria-hidden=\"true\">&raquo;</span>\n      </a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/shared/pagination/pagination.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.component.ts ***!
  \***********************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.pages = [];
        this.currentPage = 1;
        this.isVisible = false;
        this.previousEnabled = false;
        this.nextEnabled = true;
        this.pageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(PaginationComponent.prototype, "pageSize", {
        get: function () {
            return this.pagerPageSize;
        },
        set: function (size) {
            this.pagerPageSize = size;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "totalItems", {
        get: function () {
            return this.pagerTotalItems;
        },
        set: function (itemCount) {
            this.pagerTotalItems = itemCount;
            this.update();
        },
        enumerable: true,
        configurable: true
    });
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent.prototype.update = function () {
        if (this.pagerTotalItems && this.pagerPageSize) {
            this.totalPages = Math.ceil(this.pagerTotalItems / this.pageSize);
            this.isVisible = true;
            if (this.totalItems >= this.pageSize) {
                for (var i = 1; i < this.totalPages + 1; i++) {
                    this.pages.push(i);
                }
            }
            return;
        }
        this.isVisible = false;
    };
    PaginationComponent.prototype.previousNext = function (direction, event) {
        var page = this.currentPage;
        if (direction === -1) {
            if (page > 1) {
                page--;
            }
        }
        else {
            if (page < this.totalPages) {
                page++;
            }
        }
        this.changePage(page, event);
    };
    PaginationComponent.prototype.changePage = function (page, event) {
        if (event) {
            event.preventDefault();
        }
        if (this.currentPage === page) {
            return;
        }
        this.currentPage = page;
        this.previousEnabled = this.currentPage > 1;
        this.nextEnabled = this.currentPage < this.totalPages;
        this.pageChanged.emit(page);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], PaginationComponent.prototype, "pageSize", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], PaginationComponent.prototype, "totalItems", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationComponent.prototype, "pageChanged", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cm-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/shared/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/shared/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/shared/pagination/pagination.module.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/pagination/pagination.module.ts ***!
  \********************************************************/
/*! exports provided: PaginationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationModule", function() { return PaginationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pagination_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination.component */ "./src/app/shared/pagination/pagination.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaginationModule = /** @class */ (function () {
    function PaginationModule() {
    }
    PaginationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            exports: [_pagination_component__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"]],
            declarations: [_pagination_component__WEBPACK_IMPORTED_MODULE_2__["PaginationComponent"]]
        })
    ], PaginationModule);
    return PaginationModule;
}());



/***/ }),

/***/ "./src/app/shared/pipes/capitalize.pipe.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/pipes/capitalize.pipe.ts ***!
  \*************************************************/
/*! exports provided: CapitalizePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CapitalizePipe", function() { return CapitalizePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CapitalizePipe = /** @class */ (function () {
    function CapitalizePipe() {
    }
    CapitalizePipe.prototype.transform = function (value) {
        return typeof value === 'string' && value.charAt(0).toUpperCase() + value.slice(1) || value;
    };
    CapitalizePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'capitalize' })
    ], CapitalizePipe);
    return CapitalizePipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/trim.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/pipes/trim.pipe.ts ***!
  \*******************************************/
/*! exports provided: TrimPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimPipe", function() { return TrimPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TrimPipe = /** @class */ (function () {
    function TrimPipe() {
    }
    TrimPipe.prototype.transform = function (value) {
        if (!value) {
            return '';
        }
        return value.trim();
    };
    TrimPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'trim' })
    ], TrimPipe);
    return TrimPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _filter_textbox_filter_textbox_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-textbox/filter-textbox.module */ "./src/app/shared/filter-textbox/filter-textbox.module.ts");
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map/map.module */ "./src/app/shared/map/map.module.ts");
/* harmony import */ var _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagination/pagination.module */ "./src/app/shared/pagination/pagination.module.ts");
/* harmony import */ var _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/capitalize.pipe */ "./src/app/shared/pipes/capitalize.pipe.ts");
/* harmony import */ var _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/trim.pipe */ "./src/app/shared/pipes/trim.pipe.ts");
/* harmony import */ var _directives_sortby_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/sortby.directive */ "./src/app/shared/directives/sortby.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _map_map_module__WEBPACK_IMPORTED_MODULE_4__["MapModule"], _filter_textbox_filter_textbox_module__WEBPACK_IMPORTED_MODULE_3__["FilterTextboxModule"], _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"]],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_6__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_7__["TrimPipe"], _directives_sortby_directive__WEBPACK_IMPORTED_MODULE_8__["SortByDirective"],
                _map_map_module__WEBPACK_IMPORTED_MODULE_4__["MapModule"], _filter_textbox_filter_textbox_module__WEBPACK_IMPORTED_MODULE_3__["FilterTextboxModule"], _pagination_pagination_module__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"]],
            declarations: [_pipes_capitalize_pipe__WEBPACK_IMPORTED_MODULE_6__["CapitalizePipe"], _pipes_trim_pipe__WEBPACK_IMPORTED_MODULE_7__["TrimPipe"], _directives_sortby_directive__WEBPACK_IMPORTED_MODULE_8__["SortByDirective"]]
        })
    ], SharedModule);
    return SharedModule;
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
var environment = {
    production: false,
    localApiServer: 'http://localhost:8095'
};


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

module.exports = __webpack_require__(/*! /Users/marciofk/Google Drive/Info/HvA/jee-course-materials/jee-course-lab-client/src/main/ngapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map