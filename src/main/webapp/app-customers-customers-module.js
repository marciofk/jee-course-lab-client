(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-customers-customers-module"],{

/***/ "./src/app/customers/customers-card.component.css":
/*!********************************************************!*\
  !*** ./src/app/customers/customers-card.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-container {\n    width:85%;\n}\n\n.card {\n    background-color:#fff;\n    border: 1px solid #d4d4d4;\n    height:120px;\n    margin-bottom: 20px;\n    position: relative;\n}\n\n.card-header {\n    background-color:#027FF4;\n    font-size:14pt;\n    color:white;\n    padding:5px;\n    width:100%;\n}\n\n.card-close {\n    color: white;\n    font-weight:bold;\n    margin-right:5px;\n}\n\n.card-body {\n    padding-left: 5px;\n}\n\n.card-body-left {\n    margin-top: -5px;\n}\n\n.card-body-right {\n    margin-left: 20px;\n    margin-top: 2px;\n}\n\n.card-body-content {\n    width: 100px;\n}\n\n.card-image {\n    height:50px;width:50px;margin-top:10px;\n}\n\n.white {\n    color: white;\n}\n\n.white:hover {\n    color: white;\n}"

/***/ }),

/***/ "./src/app/customers/customers-card.component.html":
/*!*********************************************************!*\
  !*** ./src/app/customers/customers-card.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row card-container\">\n        <div class=\"col-sm-6 col-md-4 col-lg-3\" *ngFor=\"let customer of customers;trackBy:trackbyService.customer\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <a [routerLink]=\"['/customers',customer.id,'details']\" class=\"white\">\n                        {{customer.firstName | capitalize }} {{ customer.lastName | capitalize }} \n                    </a>\n                    <a [routerLink]=\"['/customers',customer.id,'edit']\">\n                        <i title=\"Edit\"  \n                           class=\"pull-right glyphicon glyphicon-edit edit-icon white\"></i>\n                    </a>\n                </div>\n                <div class=\"card-body\">\n                    <div class=\"clearfix\">\n                        <div class=\"pull-left card-body-left\">\n                            <a href=\"#\" class=\"white\">\n                                <img src=\"assets/images/{{customer.gender | lowercase}}.png\" class=\"card-image\" />\n                            </a>\n                        </div>\n                        <div class=\"pull-left card-body-right\">\n                            <div class=\"card-body-content\">{{customer.city | trim }}, {{customer.state.name}}</div>\n                            <a [routerLink]=\"['/customers',customer.id,'orders']\">View Orders</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"!customers.length\">\n            No Records Found\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/customers/customers-card.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/customers/customers-card.component.ts ***!
  \*******************************************************/
/*! exports provided: CustomersCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersCardComponent", function() { return CustomersCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_trackby_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/trackby.service */ "./src/app/core/services/trackby.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomersCardComponent = /** @class */ (function () {
    function CustomersCardComponent(trackbyService) {
        this.trackbyService = trackbyService;
        this.customers = [];
    }
    CustomersCardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CustomersCardComponent.prototype, "customers", void 0);
    CustomersCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cm-customers-card',
            template: __webpack_require__(/*! ./customers-card.component.html */ "./src/app/customers/customers-card.component.html"),
            styles: [__webpack_require__(/*! ./customers-card.component.css */ "./src/app/customers/customers-card.component.css")],
            // When using OnPush detectors, then the framework will check an OnPush
            // component when any of its input properties changes, when it fires
            // an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_core_services_trackby_service__WEBPACK_IMPORTED_MODULE_1__["TrackByService"]])
    ], CustomersCardComponent);
    return CustomersCardComponent;
}());



/***/ }),

/***/ "./src/app/customers/customers-grid.component.css":
/*!********************************************************!*\
  !*** ./src/app/customers/customers-grid.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".grid-container  div {\n    padding-left: 0px;\n}\n\n.grid-container td {\n    vertical-align: middle;\n}\n\n.grid-image {\n    height:50px;width:50px;margin-top:10px;\n}"

/***/ }),

/***/ "./src/app/customers/customers-grid.component.html":
/*!*********************************************************!*\
  !*** ./src/app/customers/customers-grid.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row grid-container\">\n        <div class=\"col-md-10\">\n            <div class=\"table\">\n                <table class=\"table table-striped table-hover\">\n                    <thead>\n                        <tr>\n                            <th>&nbsp;</th>\n                            <th cmSortBy=\"firstName\" (sorted)=\"sort($event)\">First Name</th>\n                            <th cmSortBy=\"lastName\" (sorted)=\"sort($event)\">Last Name</th>\n                            <th cmSortBy=\"address\" (sorted)=\"sort($event)\">Address</th>\n                            <th cmSortBy=\"city\" (sorted)=\"sort($event)\">City</th>\n                            <th cmSortBy=\"state.name\" (sorted)=\"sort($event)\">State</th>\n                            <!-- Or you can do this directly rather than using sort-by directive -->\n                            <th (click)=\"sort('orderTotal')\">Order Total</th>\n                            <th>&nbsp;</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let customer of customers;trackBy:trackbyService.customer\">\n                            <td><img src=\"assets/images/{{ customer.gender | lowercase }}.png\"\n                                    class=\"grid-image\" alt=\"Customer Image\" /></td>\n                            <td><a [routerLink]=\"['/customers',customer.id,'details']\">{{ customer.firstName | capitalize }}</a></td>\n                            <td>{{ customer.lastName | capitalize }}</td>\n                            <td>{{ customer.address }}</td>\n                            <td>{{ customer.city | trim }}</td>\n                            <td>{{ customer.state.name }}</td>\n                            <td>{{ customer.orderTotal | currency:'USD':'symbol' }}</td>\n                            <td><a [routerLink]=\"['/customers',customer.id,'orders']\">View Orders</a></td>\n                        </tr>\n                        <tr *ngIf=\"!customers.length\">\n                            <td>&nbsp;</td>\n                            <td colspan=\"7\">No Records Found</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/customers/customers-grid.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/customers/customers-grid.component.ts ***!
  \*******************************************************/
/*! exports provided: CustomersGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersGridComponent", function() { return CustomersGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_sorter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/sorter.service */ "./src/app/core/services/sorter.service.ts");
/* harmony import */ var _core_services_trackby_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/trackby.service */ "./src/app/core/services/trackby.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomersGridComponent = /** @class */ (function () {
    function CustomersGridComponent(sorterService, trackbyService) {
        this.sorterService = sorterService;
        this.trackbyService = trackbyService;
        this.customers = [];
    }
    CustomersGridComponent.prototype.ngOnInit = function () {
    };
    CustomersGridComponent.prototype.sort = function (prop) {
        this.sorterService.sort(this.customers, prop);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CustomersGridComponent.prototype, "customers", void 0);
    CustomersGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cm-customers-grid',
            template: __webpack_require__(/*! ./customers-grid.component.html */ "./src/app/customers/customers-grid.component.html"),
            styles: [__webpack_require__(/*! ./customers-grid.component.css */ "./src/app/customers/customers-grid.component.css")],
            // When using OnPush detectors, then the framework will check an OnPush
            // component when any of its input properties changes, when it fires
            // an event, or when an observable fires an event ~ Victor Savkin (Angular Team)
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_core_services_sorter_service__WEBPACK_IMPORTED_MODULE_1__["SorterService"], _core_services_trackby_service__WEBPACK_IMPORTED_MODULE_2__["TrackByService"]])
    ], CustomersGridComponent);
    return CustomersGridComponent;
}());



/***/ }),

/***/ "./src/app/customers/customers-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/customers/customers-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CustomersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersRoutingModule", function() { return CustomersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _customers_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers-card.component */ "./src/app/customers/customers-card.component.ts");
/* harmony import */ var _customers_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customers-grid.component */ "./src/app/customers/customers-grid.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', component: _customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"] }
];
var CustomersRoutingModule = /** @class */ (function () {
    function CustomersRoutingModule() {
    }
    CustomersRoutingModule.components = [_customers_component__WEBPACK_IMPORTED_MODULE_2__["CustomersComponent"], _customers_card_component__WEBPACK_IMPORTED_MODULE_3__["CustomersCardComponent"], _customers_grid_component__WEBPACK_IMPORTED_MODULE_4__["CustomersGridComponent"]];
    CustomersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CustomersRoutingModule);
    return CustomersRoutingModule;
}());



/***/ }),

/***/ "./src/app/customers/customers.component.html":
/*!****************************************************!*\
  !*** ./src/app/customers/customers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"customers view indent\">\n    <div class=\"container\">\n        <header>\n            <h3>\n                <span class=\"glyphicon glyphicon-user\"></span>\n                {{ title }}\n            </h3>\n        </header>\n        <br />\n        <div class=\"row\">\n            <div class=\"col-md-10\">\n                <div class=\"navbar\">\n                    <ul class=\"nav navbar-nav\">\n                        <li class=\"toolbar-item\">\n                            <a (click)=\"changeDisplayMode(displayModeEnum.Card)\" [class.active]=\"displayMode === displayModeEnum.Card\">\n                                <span class=\"glyphicon glyphicon-th-large\"></span> Card View\n                            </a>\n                        </li>\n                        <li class=\"toolbar-item\">\n                            <a (click)=\"changeDisplayMode(displayModeEnum.Grid)\" [class.active]=\"displayMode === displayModeEnum.Grid\">\n                                <span class=\"glyphicon glyphicon-align-justify\"></span> List View\n                            </a>\n                        </li>\n                        <li class=\"toolbar-item\">\n                            <a (click)=\"changeDisplayMode(displayModeEnum.Map)\" [class.active]=\"displayMode === displayModeEnum.Map\">\n                                <span class=\"glyphicon glyphicon-map-marker\"></span> Map View\n                            </a>\n                        </li>\n                        <li class=\"toolbar-item\">\n                            <a routerLink=\"/customers/0/edit\">\n                                <span class=\"glyphicon glyphicon-plus\"></span> New Customer\n                            </a>\n                        </li>\n                    </ul>\n                    <cm-filter-textbox class=\"navbar-right\"\n                     (changed)=\"filterChanged($event)\"></cm-filter-textbox>\n                </div>\n            </div>\n        </div>\n        \n        <cm-customers-card \n          [customers]=\"filteredCustomers\" \n          [hidden]=\"displayMode !== displayModeEnum.Card\"></cm-customers-card>\n    \n        <cm-customers-grid \n          [customers]=\"filteredCustomers\" \n          [hidden]=\"displayMode !== displayModeEnum.Grid\"></cm-customers-grid>\n\n        <cm-map *ngIf=\"filteredCustomers.length\" \n            [zoom]=\"2\" \n            [enabled]=\"displayMode === displayModeEnum.Map\" \n            [hidden]=\"displayMode !== displayModeEnum.Map\">\n          <cm-map-point \n            *ngFor=\"let customer of filteredCustomers\" \n            [latitude]=\"customer.latitude\" \n            [longitude]=\"customer.longitude\"\n            [markerText]=\"'<h3>' + customer.firstName + ' ' + customer.lastName + '</a></h3>' + customer.city + ', ' + customer.state.name\"></cm-map-point>\n        </cm-map>\n\n        <cm-pagination\n            [totalItems]=\"totalRecords\" \n            [pageSize]=\"pageSize\" \n            (pageChanged)=\"pageChanged($event)\"></cm-pagination>\n          \n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/customers/customers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/customers/customers.component.ts ***!
  \**************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _core_services_filter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/filter.service */ "./src/app/core/services/filter.service.ts");
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/logger.service */ "./src/app/core/services/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(dataService, filterService, logger) {
        this.dataService = dataService;
        this.filterService = filterService;
        this.logger = logger;
        this.customers = [];
        this.filteredCustomers = [];
        this.displayModeEnum = DisplayModeEnum;
        this.totalRecords = 0;
        this.pageSize = 10;
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this.title = 'Customers';
        this.filterText = 'Filter Customers:';
        this.displayMode = DisplayModeEnum.Card;
        this.getCustomersPage(1);
    };
    CustomersComponent.prototype.changeDisplayMode = function (mode) {
        this.displayMode = mode;
    };
    CustomersComponent.prototype.pageChanged = function (page) {
        this.getCustomersPage(page);
    };
    CustomersComponent.prototype.getCustomersPage = function (page) {
        var _this = this;
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe(function (response) {
            _this.customers = _this.filteredCustomers = response.results;
            _this.totalRecords = response.totalRecords;
        }, function (err) { return _this.logger.log(err); }, function () { return _this.logger.log('getCustomersPage() retrieved customers for page: ' + page); });
    };
    CustomersComponent.prototype.filterChanged = function (data) {
        if (data && this.customers) {
            data = data.toUpperCase();
            var props = ['firstName', 'lastName', 'city', 'state.name'];
            this.filteredCustomers = this.filterService.filter(this.customers, data, props);
        }
        else {
            this.filteredCustomers = this.customers;
        }
    };
    CustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cm-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/customers/customers.component.html")
        }),
        __metadata("design:paramtypes", [_core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _core_services_filter_service__WEBPACK_IMPORTED_MODULE_2__["FilterService"],
            _core_services_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"]])
    ], CustomersComponent);
    return CustomersComponent;
}());

var DisplayModeEnum;
(function (DisplayModeEnum) {
    DisplayModeEnum[DisplayModeEnum["Card"] = 0] = "Card";
    DisplayModeEnum[DisplayModeEnum["Grid"] = 1] = "Grid";
    DisplayModeEnum[DisplayModeEnum["Map"] = 2] = "Map";
})(DisplayModeEnum || (DisplayModeEnum = {}));


/***/ }),

/***/ "./src/app/customers/customers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/customers/customers.module.ts ***!
  \***********************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customers-routing.module */ "./src/app/customers/customers-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_customers_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomersRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
            declarations: [_customers_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomersRoutingModule"].components]
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-customers-customers-module.js.map