(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-customer-customer-module"],{

/***/ "./src/app/customer/can-activate.guard.ts":
/*!************************************************!*\
  !*** ./src/app/customer/can-activate.guard.ts ***!
  \************************************************/
/*! exports provided: CanActivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanActivateGuard", function() { return CanActivateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateGuard = /** @class */ (function () {
    function CanActivateGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    CanActivateGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isAuthenticated) {
            return true;
        }
        // Track URL user is trying to go to so we can send them there after logging in
        this.authService.redirectUrl = state.url;
        this.router.navigate(['/login']);
        return false;
    };
    CanActivateGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CanActivateGuard);
    return CanActivateGuard;
}());



/***/ }),

/***/ "./src/app/customer/can-deactivate.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/customer/can-deactivate.guard.ts ***!
  \**************************************************/
/*! exports provided: CanDeactivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function() { return CanDeactivateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/logger.service */ "./src/app/core/services/logger.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard(logger) {
        this.logger = logger;
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component, route, state) {
        this.logger.log("CustomerId: " + route.parent.params['id'] + " URL: " + state.url);
        // Check with component to see if we're able to deactivate
        return component.canDeactivate();
    };
    CanDeactivateGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_core_services_logger_service__WEBPACK_IMPORTED_MODULE_1__["LoggerService"]])
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
}());



/***/ }),

/***/ "./src/app/customer/customer-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/customer/customer-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".details-image {\n    height:100px;width:100px;margin-top:10px;\n}"

/***/ }),

/***/ "./src/app/customer/customer-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/customer/customer-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"customer\">\n  <div class=\"row\">\n    <div class=\"col-md-2\">\n      <img src=\"assets/images/{{customer.gender | lowercase}}.png\" class=\"details-image\" />\n    </div>\n    <div class=\"col-md-10\">\n      <h4>    \n          {{ customer.firstName | capitalize }} {{ customer.lastName | capitalize }}&nbsp;          \n      </h4>\n      <br />\n      {{ customer.address }}\n      <br />\n      {{ customer.city }}, {{ customer.state.name }}\n    </div>\n  </div>    \n  <br /><br />\n  <div class=\"row\">\n    <div class=\"col-md-12\" *ngIf=\"customer && customer.latitude && customer.longitude\">\n      <cm-map [latitude]=\"customer.latitude\" \n           [longitude]=\"customer.longitude\" \n           [zoom]=\"10\" \n           [enabled]=\"mapEnabled\"\n           [markerText]=\"'<h3>' + customer.firstName + ' ' + customer.lastName + '</h3>' + customer.city + ', ' + customer.state.name\"></cm-map>\n    </div>\n  </div>\n</div>   \n<div *ngIf=\"!customer\" class=\"container\">\n   No customer found\n</div>  "

/***/ }),

/***/ "./src/app/customer/customer-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/customer/customer-details.component.ts ***!
  \********************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/data.service */ "./src/app/core/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerDetailsComponent = /** @class */ (function () {
    function CustomerDetailsComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to params so if it changes we pick it up. Could use this.route.parent.snapshot.params["id"] to simplify it.
        this.route.parent.params.subscribe(function (params) {
            var id = +params['id'];
            if (id) {
                _this.dataService.getCustomer(id)
                    .subscribe(function (customer) {
                    _this.customer = customer;
                    _this.mapEnabled = true;
                });
            }
        });
    };
    CustomerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cm-customer-details',
            template: __webpack_require__(/*! ./customer-details.component.html */ "./src/app/customer/customer-details.component.html"),
            styles: [__webpack_require__(/*! ./customer-details.component.css */ "./src/app/customer/customer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-edit.component.css":
/*!******************************************************!*\
  !*** ./src/app/customer/customer-edit.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customer-form input[type='text'], \n.customer-form input[type='number'],\n.customer-form input[type='email'],\n.customer-form select {\n    width:100%;\n}\n\n.customer-form .ng-invalid {\n  border-left: 5px solid #a94442;\n}\n\n.customer-form .ng-valid {\n  border-left: 5px solid #42A948;\n}"

/***/ }),

/***/ "./src/app/customer/customer-edit.component.html":
/*!*******************************************************!*\
  !*** ./src/app/customer/customer-edit.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form (ngSubmit)=\"submit()\" #customerForm=\"ngForm\" class=\"customer-form\" novalidate>\n    <div class=\"form-group\">\n      <label>First Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"customer.firstName\" #firstName=\"ngModel\" required>\n      <div class=\"alert alert-danger\" [hidden]=\"firstName.pristine || firstName.valid\">First Name is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Last Name</label>\n      <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"customer.lastName\" #lastName=\"ngModel\" required>\n      <div class=\"alert alert-danger\" [hidden]=\"lastName.pristine || lastName.valid\">Last Name is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>Address</label>\n      <input type=\"text\" class=\"form-control\" name=\"address\" [(ngModel)]=\"customer.address\" #address=\"ngModel\" required>\n      <div class=\"alert alert-danger\" [hidden]=\"address.pristine || address.valid\">Address is required</div>\n    </div>\n    <div class=\"form-group\">\n      <label>City</label>\n      <input type=\"text\" class=\"form-control\" name=\"city\" [(ngModel)]=\"customer.city\" #city=\"ngModel\" required>\n      <div class=\"alert alert-danger\" [hidden]=\"city.pristine || city.valid\">City is required</div>\n    </div>\n\n    <div class=\"form-group\">\n\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label>State</label>\n            <select class=\"form-control\"\n                    [(ngModel)]=\"customer.state\"\n                    name=\"state\"\n                    required>\n              <option *ngFor=\"let state of states\" [ngValue]=\"state\">{{state.name}}</option>\n            </select>\n          </div>\n\n        </div>\n        <div class=\"col-md-3\">\n          <img src=\"{{imageResource}}?abbrev={{customer.state.abbreviation}}&type=map\"\n               class=\"thumbnail\" width=\"100%\" height=\"100%\"/>\n        </div>\n        <div class=\"col-md-3\">\n          <img src=\"{{imageResource}}?abbrev={{customer.state.abbreviation}}&type=flag\"\n               class=\"thumbnail\" width=\"100%\" height=\"100%\"/>\n        </div>\n\n      </div>\n\n    </div>\n\n    <div *ngIf=\"customer\">\n      <div class=\"alert alert-warning\" *ngIf=\"customer.id && deleteMessageEnabled\">\n         Delete Customer?&nbsp;&nbsp;<button class=\"btn btn-danger\" (click)=\"delete($event)\">Yes</button>&nbsp;&nbsp;\n         <button class=\"btn btn-default\" (click)=\"deleteMessageEnabled = false\">No</button>\n      </div>\n      <button class=\"btn btn-danger\" *ngIf=\"customer.id && !deleteMessageEnabled\" (click)=\"deleteMessageEnabled = true\">Delete</button>&nbsp;&nbsp;\n\n      <div class=\"pull-right\" *ngIf=\"!deleteMessageEnabled\">\n        <button class=\"btn btn-default\" (click)=\"cancel($event)\">Cancel</button>&nbsp;&nbsp;\n        <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"customerForm.pristine || !customerForm.valid\">{{ operationText }}</button>\n      </div>\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"errorMessage != null\">{{ errorMessage }}</div>\n  </form>\n  <br />\n</div>"

/***/ }),

/***/ "./src/app/customer/customer-edit.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/customer/customer-edit.component.ts ***!
  \*****************************************************/
/*! exports provided: CustomerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerEditComponent", function() { return CustomerEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/services/data.service */ "./src/app/core/services/data.service.ts");
/* harmony import */ var _core_modal_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/modal/modal.service */ "./src/app/core/modal/modal.service.ts");
/* harmony import */ var _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/growler/growler.service */ "./src/app/core/growler/growler.service.ts");
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/services/logger.service */ "./src/app/core/services/logger.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CustomerEditComponent = /** @class */ (function () {
    function CustomerEditComponent(router, route, dataService, growler, modalService, logger) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.growler = growler;
        this.modalService = modalService;
        this.logger = logger;
        this.imageResource = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].localApiServer + "/api/image/state";
        this.customer = {
            id: 0,
            firstName: '',
            lastName: '',
            gender: '',
            address: '',
            city: '',
            state: {
                abbreviation: '',
                name: ''
            }
        };
        this.operationText = 'Insert';
    }
    CustomerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to params so if it changes we pick it up. Don't technically need that here
        // since param won't be changing while component is alive.
        // Could use this.route.parent.snapshot.params["id"] to simplify it.
        this.route.parent.params.subscribe(function (params) {
            var id = +params['id'];
            if (id !== 0) {
                _this.operationText = 'Update';
                _this.getCustomer(id);
            }
        });
        this.dataService.getStates().subscribe(function (states) { return _this.states = states; });
    };
    CustomerEditComponent.prototype.getCustomer = function (id) {
        var _this = this;
        this.dataService.getCustomer(id).subscribe(function (customer) {
            _this.customer = customer;
        });
    };
    CustomerEditComponent.prototype.submit = function () {
        var _this = this;
        if (this.customer.id === 0) {
            console.log("Customer: " + JSON.stringify(this.customer));
            this.dataService.insertCustomer(this.customer)
                .subscribe(function (insertedCustomer) {
                if (insertedCustomer) {
                    // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
                    _this.customerForm.form.markAsPristine();
                    _this.router.navigate(['/customers']);
                }
                else {
                    var msg = 'Unable to insert customer';
                    _this.growler.growl(msg, _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_5__["GrowlerMessageType"].Danger);
                    _this.errorMessage = msg;
                }
            }, function (err) { return _this.logger.log(err); });
        }
        else {
            this.dataService.updateCustomer(this.customer)
                .subscribe(function (status) {
                if (status) {
                    // Mark form as pristine so that CanDeactivateGuard won't prompt before navigation
                    _this.customerForm.form.markAsPristine();
                    _this.growler.growl('Operation performed successfully.', _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_5__["GrowlerMessageType"].Success);
                    // this.router.navigate(['/customers']);
                }
                else {
                    var msg = 'Unable to update customer';
                    _this.growler.growl(msg, _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_5__["GrowlerMessageType"].Danger);
                    _this.errorMessage = msg;
                }
            }, function (err) { return _this.logger.log(err); });
        }
    };
    CustomerEditComponent.prototype.cancel = function (event) {
        event.preventDefault();
        // Route guard will take care of showing modal dialog service if data is dirty
        this.router.navigate(['/customers']);
    };
    CustomerEditComponent.prototype.delete = function (event) {
        var _this = this;
        event.preventDefault();
        this.dataService.deleteCustomer(this.customer.id)
            .subscribe(function (status) {
            if (status) {
                _this.router.navigate(['/customers']);
            }
            else {
                _this.errorMessage = 'Unable to delete customer';
            }
        }, function (err) { return _this.logger.log(err); });
    };
    CustomerEditComponent.prototype.canDeactivate = function () {
        if (!this.customerForm.dirty) {
            return true;
        }
        // Dirty show display modal dialog to user to confirm leaving
        var modalContent = {
            header: 'Lose Unsaved Changes?',
            body: 'You have unsaved changes! Would you like to leave the page and lose them?',
            cancelButtonText: 'Cancel',
            OKButtonText: 'Leave'
        };
        return this.modalService.show(modalContent);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('customerForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], CustomerEditComponent.prototype, "customerForm", void 0);
    CustomerEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cm-customer-edit',
            template: __webpack_require__(/*! ./customer-edit.component.html */ "./src/app/customer/customer-edit.component.html"),
            styles: [__webpack_require__(/*! ./customer-edit.component.css */ "./src/app/customer/customer-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _core_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _core_growler_growler_service__WEBPACK_IMPORTED_MODULE_5__["GrowlerService"],
            _core_modal_modal_service__WEBPACK_IMPORTED_MODULE_4__["ModalService"],
            _core_services_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"]])
    ], CustomerEditComponent);
    return CustomerEditComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-orders.component.html":
/*!*********************************************************!*\
  !*** ./src/app/customer/customer-orders.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\" *ngIf=\"customer && customer.orders\">\n        <h4>Orders for {{ customer.firstName | capitalize }} {{ customer.lastName | capitalize }}</h4>\n        <br />\n        <table class=\"table table-striped table-hover orders-table\">\n            <tr *ngFor=\"let order of customer.orders;trackBy:ordersTrackBy\">\n                <td>{{ order.productName }}</td>\n                <td class=\"text-right\">{{ order.itemCost | currency:'USD':'symbol' }}</td>    \n            </tr>\n            <tr class=\"summary-border\">\n                <td>&nbsp;</td>\n                <td class=\"text-right\">{{ customer.orderTotal | currency:'USD':'symbol' }}</td>\n            </tr>\n        </table>\n    </div>\n    <div *ngIf=\"customer && !customer.orders\" class=\"row\">\n        No orders found\n    </div> \n    <div *ngIf=\"!customer\" class=\"row\">\n        No customer found\n    </div>  \n</div>"

/***/ }),

/***/ "./src/app/customer/customer-orders.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/customer/customer-orders.component.ts ***!
  \*******************************************************/
/*! exports provided: CustomerOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerOrdersComponent", function() { return CustomerOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/services/data.service */ "./src/app/core/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerOrdersComponent = /** @class */ (function () {
    function CustomerOrdersComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.orders = [];
    }
    CustomerOrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Subscribe to params so if it changes we pick it up.  Could use this.route.parent.snapshot.params["id"] to simplify it.
        this.route.parent.params.subscribe(function (params) {
            var id = +params['id'];
            _this.dataService.getCustomer(id).subscribe(function (customer) {
                _this.customer = customer;
            });
        });
    };
    CustomerOrdersComponent.prototype.ordersTrackBy = function (index, orderItem) {
        return index;
    };
    CustomerOrdersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cm-customer-orders',
            template: __webpack_require__(/*! ./customer-orders.component.html */ "./src/app/customer/customer-orders.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _core_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], CustomerOrdersComponent);
    return CustomerOrdersComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/customer/customer-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CustomerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerRoutingModule", function() { return CustomerRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.component */ "./src/app/customer/customer.component.ts");
/* harmony import */ var _customer_orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customer-orders.component */ "./src/app/customer/customer-orders.component.ts");
/* harmony import */ var _customer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-details.component */ "./src/app/customer/customer-details.component.ts");
/* harmony import */ var _customer_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customer-edit.component */ "./src/app/customer/customer-edit.component.ts");
/* harmony import */ var _can_activate_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./can-activate.guard */ "./src/app/customer/can-activate.guard.ts");
/* harmony import */ var _can_deactivate_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./can-deactivate.guard */ "./src/app/customer/can-deactivate.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: _customer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerComponent"],
        children: [
            { path: 'orders', component: _customer_orders_component__WEBPACK_IMPORTED_MODULE_3__["CustomerOrdersComponent"] },
            { path: 'details', component: _customer_details_component__WEBPACK_IMPORTED_MODULE_4__["CustomerDetailsComponent"] },
            {
                path: 'edit',
                component: _customer_edit_component__WEBPACK_IMPORTED_MODULE_5__["CustomerEditComponent"],
                canActivate: [_can_activate_guard__WEBPACK_IMPORTED_MODULE_6__["CanActivateGuard"]],
                canDeactivate: [_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_7__["CanDeactivateGuard"]]
            }
        ]
    }
];
var CustomerRoutingModule = /** @class */ (function () {
    function CustomerRoutingModule() {
    }
    CustomerRoutingModule.components = [_customer_component__WEBPACK_IMPORTED_MODULE_2__["CustomerComponent"], _customer_orders_component__WEBPACK_IMPORTED_MODULE_3__["CustomerOrdersComponent"], _customer_details_component__WEBPACK_IMPORTED_MODULE_4__["CustomerDetailsComponent"], _customer_edit_component__WEBPACK_IMPORTED_MODULE_5__["CustomerEditComponent"]];
    CustomerRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_can_activate_guard__WEBPACK_IMPORTED_MODULE_6__["CanActivateGuard"], _can_deactivate_guard__WEBPACK_IMPORTED_MODULE_7__["CanDeactivateGuard"]]
        })
    ], CustomerRoutingModule);
    return CustomerRoutingModule;
}());



/***/ }),

/***/ "./src/app/customer/customer.component.html":
/*!**************************************************!*\
  !*** ./src/app/customer/customer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"orders view\">\n    <div class=\"container\">\n        <header>\n            <h3><span class=\"glyphicon glyphicon-user\"></span>&nbsp;&nbsp;Customer Information</h3>\n        </header>\n        <br />\n        <div class=\"navbar\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"toolbar-item\">\n                    <a routerLink=\"details\" routerLinkActive=\"active\">\n                       <span class=\"glyphicon glyphicon-list\"></span>&nbsp;&nbsp;Customer Details\n                    </a>\n                </li>\n                <li class=\"toolbar-item\">\n                    <a routerLink=\"orders\" routerLinkActive=\"active\">\n                        <span class=\"glyphicon glyphicon-tags\"></span>&nbsp;&nbsp;Customer Orders\n                    </a>\n                </li>\n                <li class=\"toolbar-item\">\n                    <a routerLink=\"edit\" routerLinkActive=\"active\">\n                        <span class=\"glyphicon glyphicon-edit\"></span>&nbsp;&nbsp;Edit Customer\n                    </a>\n                </li>\n            </ul>\n        </div>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n            <br />\n            <br />\n            <a routerLink=\"/customers\">View all Customers</a>\n        </div>\n    </div>\n</div>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/customer/customer.component.ts":
/*!************************************************!*\
  !*** ./src/app/customer/customer.component.ts ***!
  \************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CustomerComponent = /** @class */ (function () {
    // displayMode: CustomerDisplayModeEnum;
    // displayModeEnum = CustomerDisplayModeEnum;
    function CustomerComponent(router) {
        this.router = router;
    }
    CustomerComponent.prototype.ngOnInit = function () {
        // No longer needed due to routerLinkActive feature in Angular
        // const path = this.router.url.split('/')[3];
        // switch (path) {
        //   case 'details':
        //     this.displayMode = CustomerDisplayModeEnum.Details;
        //     break;
        //   case 'orders':
        //     this.displayMode = CustomerDisplayModeEnum.Orders;
        //     break;
        //   case 'edit':
        //     this.displayMode = CustomerDisplayModeEnum.Edit;
        //     break;
        // }
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cm-orders',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/customer/customer.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CustomerComponent);
    return CustomerComponent;
}());

// enum CustomerDisplayModeEnum {
//   Details=0,
//   Orders=1,
//   Edit=2
// }


/***/ }),

/***/ "./src/app/customer/customer.module.ts":
/*!*********************************************!*\
  !*** ./src/app/customer/customer.module.ts ***!
  \*********************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-routing.module */ "./src/app/customer/customer-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CustomerModule = /** @class */ (function () {
    function CustomerModule() {
    }
    CustomerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_customer_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomerRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]],
            declarations: [_customer_routing_module__WEBPACK_IMPORTED_MODULE_2__["CustomerRoutingModule"].components]
        })
    ], CustomerModule);
    return CustomerModule;
}());



/***/ })

}]);
//# sourceMappingURL=app-customer-customer-module.js.map