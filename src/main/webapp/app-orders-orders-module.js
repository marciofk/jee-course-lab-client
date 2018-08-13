(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-orders-orders-module"],{

/***/ "./src/app/orders/orders-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/orders/orders-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OrdersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function() { return OrdersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders.component */ "./src/app/orders/orders.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _orders_component__WEBPACK_IMPORTED_MODULE_2__["OrdersComponent"] }
];
var OrdersRoutingModule = /** @class */ (function () {
    function OrdersRoutingModule() {
    }
    OrdersRoutingModule.components = [_orders_component__WEBPACK_IMPORTED_MODULE_2__["OrdersComponent"]];
    OrdersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], OrdersRoutingModule);
    return OrdersRoutingModule;
}());



/***/ }),

/***/ "./src/app/orders/orders.component.html":
/*!**********************************************!*\
  !*** ./src/app/orders/orders.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"customers view indent\">\n    <div class=\"container\">\n        <header>\n            <h3>\n                <span class=\"glyphicon glyphicon-folder-open\"></span>&nbsp;&nbsp;Orders\n            </h3>\n        </header>\n        <br />\n\n        <div class=\"container\">\n            <div *ngIf=\"customers\">\n\n                <div class=\"row\" *ngFor=\"let customer of customers;trackBy:trackbyService.customer\">\n                    <h4>{{ customer.firstName | capitalize }} {{ customer.lastName | capitalize }}</h4>\n                    <br />\n                    <table *ngIf=\"customer.orders && customer.orders.length\" class=\"table table-striped table-hover orders-table\">\n                        <tr *ngFor=\"let order of customer.orders;trackBy:trackbyService.order\">\n                            <td>{{order.productName}}</td>\n                            <td class=\"text-right\">{{ order.itemCost | currency:'USD':'symbol' }}</td>    \n                        </tr>\n                        <tr class=\"summary-border\">\n                            <td>&nbsp;</td>\n                            <td class=\"text-right\">{{ customer.orderTotal | currency:'USD':'symbol' }}\n                        </tr>\n                    </table>\n                    <div *ngIf=\"!customer.orders || !customer.orders.length\">\n                        No orders found\n                    </div> \n                </div>\n\n                <cm-pagination [hidden]=\"!customers\"\n                    [totalItems]=\"totalRecords\" \n                    [pageSize]=\"pageSize\" \n                    (pageChanged)=\"pageChanged($event)\"></cm-pagination>\n\n            </div>\n            <div *ngIf=\"!customers\">\n                No customers found\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/orders/orders.component.ts":
/*!********************************************!*\
  !*** ./src/app/orders/orders.component.ts ***!
  \********************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/data.service */ "./src/app/core/services/data.service.ts");
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



var OrdersComponent = /** @class */ (function () {
    function OrdersComponent(dataService, trackbyService) {
        this.dataService = dataService;
        this.trackbyService = trackbyService;
        this.totalRecords = 0;
        this.pageSize = 5;
    }
    OrdersComponent.prototype.ngOnInit = function () {
        this.getCustomersPage(1);
    };
    OrdersComponent.prototype.pageChanged = function (page) {
        this.getCustomersPage(page);
    };
    OrdersComponent.prototype.getCustomersPage = function (page) {
        var _this = this;
        this.dataService.getCustomersPage((page - 1) * this.pageSize, this.pageSize)
            .subscribe(function (response) {
            _this.totalRecords = response.totalRecords;
            _this.customers = response.results;
        });
    };
    OrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cm-customers-orders',
            template: __webpack_require__(/*! ./orders.component.html */ "./src/app/orders/orders.component.html")
        }),
        __metadata("design:paramtypes", [_core_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _core_services_trackby_service__WEBPACK_IMPORTED_MODULE_2__["TrackByService"]])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "./src/app/orders/orders.module.ts":
/*!*****************************************!*\
  !*** ./src/app/orders/orders.module.ts ***!
  \*****************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders-routing.module */ "./src/app/orders/orders-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _orders_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrdersRoutingModule"]],
            declarations: [_orders_routing_module__WEBPACK_IMPORTED_MODULE_2__["OrdersRoutingModule"].components]
        })
    ], OrdersModule);
    return OrdersModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-orders-orders-module.js.map