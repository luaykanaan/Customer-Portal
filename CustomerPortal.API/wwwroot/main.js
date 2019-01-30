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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this._jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
        this._authUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'auth/';
        this._isLoggedInSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.isLoggedIn$ = this._isLoggedInSubject.asObservable();
        this._loggedInUserBasicInfoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
        this.loggedInUserBasicInfo$ = this._loggedInUserBasicInfoSubject.asObservable();
        this._undecodedTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]({});
        this.undecodedToken$ = this._undecodedTokenSubject.asObservable();
    }
    AuthService.prototype.checkLoginStatus = function () {
        this._isLoggedInSubject.next(false);
        var token = localStorage.getItem('currentToken');
        if (token) {
            if (!this._jwtHelper.isTokenExpired(token)) {
                this.setLoggedInUserBasicInfo(token);
                this._isLoggedInSubject.next(true);
            }
            else {
                localStorage.removeItem('currentToken');
            }
        }
        return;
    };
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this._authUrl + 'login', model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            if (response) {
                localStorage.setItem('currentToken', response.token);
                _this.setLoggedInUserBasicInfo(response.token);
                _this._isLoggedInSubject.next(true);
            }
        }));
    };
    AuthService.prototype.setLoggedInUserBasicInfo = function (token) {
        this._undecodedTokenSubject.next(token);
        var dt = this._jwtHelper.decodeToken(token);
        var user = { id: dt.nameid, knownAs: dt.unique_name, roles: dt.role, email: dt.email };
        this._loggedInUserBasicInfoSubject.next(user);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('currentToken');
        this._isLoggedInSubject.next(false);
        this._loggedInUserBasicInfoSubject.next(null);
        this._undecodedTokenSubject.next(null);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'customers', component: _customers_customers_component__WEBPACK_IMPORTED_MODULE_5__["CustomersComponent"] },
    { path: 'employees', component: _employees_employees_component__WEBPACK_IMPORTED_MODULE_6__["EmployeesComponent"] },
    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"main-container\">\n  \n  <!-- top-alert -->\n  <app-top-alert></app-top-alert>\n  \n  <!-- top nav -->\n  <app-top-nav></app-top-nav>\n  \n  <!-- content-container -->\n  <div class=\"content-container\">\n\n    <div class=\"content-area\" >\n      <router-outlet></router-outlet>\n    </div>\n\n    <nav class=\"sidenav\">\n      <app-sidenav></app-sidenav>\n    </nav>\n      \n  </div>\n  \n</div>\n\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.doInitialChecks();
    };
    AppComponent.prototype.doInitialChecks = function () {
        this.authService.checkLoginStatus();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "./node_modules/@clr/angular/fesm5/clr-angular.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./customers/customers.component */ "./src/app/customers/customers.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _top_alert_top_alert_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./top-alert/top-alert.component */ "./src/app/top-alert/top-alert.component.ts");
/* harmony import */ var _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./top-nav/top-nav.component */ "./src/app/top-nav/top-nav.component.ts");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _sidenav_admin_sidenav_admin_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sidenav-admin/sidenav-admin.component */ "./src/app/sidenav-admin/sidenav-admin.component.ts");
/* harmony import */ var _sidenav_customers_sidenav_customers_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sidenav-customers/sidenav-customers.component */ "./src/app/sidenav-customers/sidenav-customers.component.ts");
/* harmony import */ var _sidenav_support_sidenav_support_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sidenav-support/sidenav-support.component */ "./src/app/sidenav-support/sidenav-support.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _main_area_main_area_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./main-area/main-area.component */ "./src/app/main-area/main-area.component.ts");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm5/ngx-avatar.js");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _employees_employees_component__WEBPACK_IMPORTED_MODULE_12__["EmployeesComponent"],
                _customers_customers_component__WEBPACK_IMPORTED_MODULE_13__["CustomersComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_15__["AdminComponent"],
                _top_alert_top_alert_component__WEBPACK_IMPORTED_MODULE_16__["TopAlertComponent"],
                _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_17__["TopNavComponent"],
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_18__["SidenavComponent"],
                _sidenav_admin_sidenav_admin_component__WEBPACK_IMPORTED_MODULE_19__["SidenavAdminComponent"],
                _sidenav_customers_sidenav_customers_component__WEBPACK_IMPORTED_MODULE_20__["SidenavCustomersComponent"],
                _sidenav_support_sidenav_support_component__WEBPACK_IMPORTED_MODULE_21__["SidenavSupportComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_22__["NotFoundComponent"],
                _main_area_main_area_component__WEBPACK_IMPORTED_MODULE_23__["MainAreaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                ngx_avatar__WEBPACK_IMPORTED_MODULE_24__["AvatarModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot()
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/customers/customers.component.css":
/*!***************************************************!*\
  !*** ./src/app/customers/customers.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/customers/customers.component.html":
/*!****************************************************!*\
  !*** ./src/app/customers/customers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  customers works!\n</p>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomersComponent = /** @class */ (function () {
    function CustomersComponent() {
    }
    CustomersComponent.prototype.ngOnInit = function () {
    };
    CustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.css */ "./src/app/customers/customers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/*!***************************************************!*\
  !*** ./src/app/employees/employees.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9lbXBsb3llZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employees/employees.component.html":
/*!****************************************************!*\
  !*** ./src/app/employees/employees.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  employees works!\n</p>\n"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent() {
    }
    EmployeesComponent.prototype.ngOnInit = function () {
    };
    EmployeesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees/employees.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".start-info-container {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 5em;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhcnQtaW5mby1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiA1ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login *ngIf=\"!isLoggedIn\"></app-login>\n\n\n<div class=\"start-info-container\">\n  <clr-icon shape=\"tree-view\" size=\"64\"></clr-icon>\n  <p>Select an item from the left menu to start</p>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");



var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
        this.isLoggedIn = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isLoggedIn$.subscribe(function (value) { return _this.isLoggedIn = value; });
        this.authService.loggedInUserBasicInfo$.subscribe(function (value) { return _this.loggedInUser = value; });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-card {\n    position:fixed;\n    top: 50%;\n    left: 50%;\n    padding: 2em;\n    width:22em;\n    height: 30em;\n    margin-left: -11em; /*set to a negative number 1/2 of your width*/ \n    margin-top: -15em; /*set to a negative number 1/2 of your height*/\n    \n}\n\n.header-subtitle {\n    font-size: 0.7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQixDQUFDLDhDQUE4QztJQUNsRSxrQkFBa0IsQ0FBQywrQ0FBK0M7O0NBRXJFOztBQUVEO0lBQ0ksaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jYXJkIHtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgcGFkZGluZzogMmVtO1xuICAgIHdpZHRoOjIyZW07XG4gICAgaGVpZ2h0OiAzMGVtO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTFlbTsgLypzZXQgdG8gYSBuZWdhdGl2ZSBudW1iZXIgMS8yIG9mIHlvdXIgd2lkdGgqLyBcbiAgICBtYXJnaW4tdG9wOiAtMTVlbTsgLypzZXQgdG8gYSBuZWdhdGl2ZSBudW1iZXIgMS8yIG9mIHlvdXIgaGVpZ2h0Ki9cbiAgICBcbn1cblxuLmhlYWRlci1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjdlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login-card\">\n  <div class=\"row\">\n    <div class=\"col-lg-5 col-md-8 col-sm-12 col-xs-12\">\n        <div class=\"card\">\n            \n          <div class=\"card-header\">\n            <div class=\"header-title\">Login</div>\n            <div class=\"header-subtitle\">Please login with your credentials</div>\n          </div>\n          \n          <div class=\"card-block\">\n            <div class=\"card-text\">\n              <form clrForm clrLayout=\"vertical\" #loginForm=\"ngForm\" id=\"loginForm\">\n                \n                <clr-input-container>\n                  <label>Email</label>\n                  <input clrInput type=\"email\" [(ngModel)]=\"model.email\" name=\"email\" #email=\"ngModel\" required/>\n                  <clr-control-helper>Please enter your email address</clr-control-helper>\n                  <clr-control-error *clrIfError=\"'required'\">Email is <strong>required</strong></clr-control-error>\n                </clr-input-container>\n\n                <clr-input-container>\n                  <label>Password</label>\n                  <input clrInput type=\"password\" [(ngModel)]=\"model.password\" name=\"password\" #password=\"ngModel\" required minlength=\"8\"/>\n                  <clr-control-helper>Please enter your passsword</clr-control-helper>\n                  <clr-control-error *clrIfError=\"'required'\">Password is <strong>required</strong></clr-control-error>\n                  <clr-control-error *clrIfError=\"'minlength'\">Password must be at least 8 chracters long</clr-control-error>\n                </clr-input-container>\n\n            </form>\n            </div>\n          </div>\n          \n          <div class=\"card-footer\">\n            <button class=\"btn btn-primary\" form=\"loginForm\" (click)=\"login()\" [disabled]=\"!loginForm.valid\">Login</button>\n          </div>\n\n        </div>\n    </div>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, toastr) {
        this.authService = authService;
        this.toastr = toastr;
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function (response) {
            _this.toastr.success('You have logged in successfully');
        }, function (error) {
            if (error.status === 401) {
                _this.toastr.error('Wrong Email or Password', 'Failed to login');
            }
            else {
                _this.toastr.error(error.message, 'Failed to login');
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main-area/main-area.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-area/main-area.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4tYXJlYS9tYWluLWFyZWEuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/main-area/main-area.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-area/main-area.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  main-area works!\n</p>\n"

/***/ }),

/***/ "./src/app/main-area/main-area.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-area/main-area.component.ts ***!
  \**************************************************/
/*! exports provided: MainAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainAreaComponent", function() { return MainAreaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainAreaComponent = /** @class */ (function () {
    function MainAreaComponent() {
    }
    MainAreaComponent.prototype.ngOnInit = function () {
    };
    MainAreaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-area',
            template: __webpack_require__(/*! ./main-area.component.html */ "./src/app/main-area/main-area.component.html"),
            styles: [__webpack_require__(/*! ./main-area.component.css */ "./src/app/main-area/main-area.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainAreaComponent);
    return MainAreaComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/sidenav-admin/sidenav-admin.component.css":
/*!***********************************************************!*\
  !*** ./src/app/sidenav-admin/sidenav-admin.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGVuYXYtYWRtaW4vc2lkZW5hdi1hZG1pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sidenav-admin/sidenav-admin.component.html":
/*!************************************************************!*\
  !*** ./src/app/sidenav-admin/sidenav-admin.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sidenav-admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/sidenav-admin/sidenav-admin.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/sidenav-admin/sidenav-admin.component.ts ***!
  \**********************************************************/
/*! exports provided: SidenavAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavAdminComponent", function() { return SidenavAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidenavAdminComponent = /** @class */ (function () {
    function SidenavAdminComponent() {
    }
    SidenavAdminComponent.prototype.ngOnInit = function () {
    };
    SidenavAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav-admin',
            template: __webpack_require__(/*! ./sidenav-admin.component.html */ "./src/app/sidenav-admin/sidenav-admin.component.html"),
            styles: [__webpack_require__(/*! ./sidenav-admin.component.css */ "./src/app/sidenav-admin/sidenav-admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidenavAdminComponent);
    return SidenavAdminComponent;
}());



/***/ }),

/***/ "./src/app/sidenav-customers/sidenav-customers.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/sidenav-customers/sidenav-customers.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGVuYXYtY3VzdG9tZXJzL3NpZGVuYXYtY3VzdG9tZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/sidenav-customers/sidenav-customers.component.html":
/*!********************************************************************!*\
  !*** ./src/app/sidenav-customers/sidenav-customers.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sidenav-customers works!\n</p>\n"

/***/ }),

/***/ "./src/app/sidenav-customers/sidenav-customers.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/sidenav-customers/sidenav-customers.component.ts ***!
  \******************************************************************/
/*! exports provided: SidenavCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavCustomersComponent", function() { return SidenavCustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidenavCustomersComponent = /** @class */ (function () {
    function SidenavCustomersComponent() {
    }
    SidenavCustomersComponent.prototype.ngOnInit = function () {
    };
    SidenavCustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav-customers',
            template: __webpack_require__(/*! ./sidenav-customers.component.html */ "./src/app/sidenav-customers/sidenav-customers.component.html"),
            styles: [__webpack_require__(/*! ./sidenav-customers.component.css */ "./src/app/sidenav-customers/sidenav-customers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidenavCustomersComponent);
    return SidenavCustomersComponent;
}());



/***/ }),

/***/ "./src/app/sidenav-support/sidenav-support.component.css":
/*!***************************************************************!*\
  !*** ./src/app/sidenav-support/sidenav-support.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGVuYXYtc3VwcG9ydC9zaWRlbmF2LXN1cHBvcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sidenav-support/sidenav-support.component.html":
/*!****************************************************************!*\
  !*** ./src/app/sidenav-support/sidenav-support.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sidenav-support works!\n</p>\n"

/***/ }),

/***/ "./src/app/sidenav-support/sidenav-support.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/sidenav-support/sidenav-support.component.ts ***!
  \**************************************************************/
/*! exports provided: SidenavSupportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavSupportComponent", function() { return SidenavSupportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidenavSupportComponent = /** @class */ (function () {
    function SidenavSupportComponent() {
    }
    SidenavSupportComponent.prototype.ngOnInit = function () {
    };
    SidenavSupportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav-support',
            template: __webpack_require__(/*! ./sidenav-support.component.html */ "./src/app/sidenav-support/sidenav-support.component.html"),
            styles: [__webpack_require__(/*! ./sidenav-support.component.css */ "./src/app/sidenav-support/sidenav-support.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidenavSupportComponent);
    return SidenavSupportComponent;
}());



/***/ }),

/***/ "./src/app/sidenav/sidenav.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-top {\n    width: 100%;\n    padding: 1rem;\n    height: 10rem;\n    text-align: center;\n}\n\n.displayed-sidenav-name {\n    margin-top: 1em;\n}\n\n.custom-avatar {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGNBQWM7SUFDZCxtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSxnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LXRvcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMXJlbTtcbiAgICBoZWlnaHQ6IDEwcmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpc3BsYXllZC1zaWRlbmF2LW5hbWUge1xuICAgIG1hcmdpbi10b3A6IDFlbTtcbn1cblxuLmN1c3RvbS1hdmF0YXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogODBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.html":
/*!************************************************!*\
  !*** ./src/app/sidenav/sidenav.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <section class=\"sidenav-top\" *ngIf=\"isLoggedIn\">\n    <ngx-avatar class=\"custom-avatar\" gravatarId=\"{{loggedInUser.email}}\" name=\"{{loggedInUser.knownAs}}\" size=\"80\"></ngx-avatar>\n    <div class=\"displayed-sidenav-name\">{{loggedInUser.knownAs}}</div>\n  </section>\n\n  <section class=\"sidenav-content\" *ngIf=\"isLoggedIn && isCustomer\">\n    <a [routerLink]=\"['/']\" routerLinkActive=\"active\" class=\"nav-link\"><clr-icon shape=\"list\"></clr-icon>  Contracts</a>\n    <a [routerLink]=\"['/']\" routerLinkActive=\"active\" class=\"nav-link\"><clr-icon shape=\"bank\"></clr-icon>  Banking Details</a>\n    <a [routerLink]=\"['/']\" routerLinkActive=\"active\" class=\"nav-link\"><clr-icon shape=\"details\"></clr-icon>  Personal Details</a>\n    <a [routerLink]=\"['/']\" routerLinkActive=\"active\" class=\"nav-link\"><clr-icon shape=\"memory\"></clr-icon>  Meter Readings</a>\n    <a [routerLink]=\"['/']\" routerLinkActive=\"active\" class=\"nav-link\"><clr-icon shape=\"envelope\"></clr-icon>  Mail</a>\n    <a [routerLink]=\"['/']\" routerLinkActive=\"active\" class=\"nav-link\"><clr-icon shape=\"help\"></clr-icon>  Support</a>\n    <a [routerLink]=\"['/']\" routerLinkActive=\"active\" class=\"nav-link\"><clr-icon shape=\"book\"></clr-icon>  Knowledge Base</a>\n    <a [routerLink]=\"['/']\" routerLinkActive=\"active\" class=\"nav-link\"><clr-icon shape=\"file\"></clr-icon>  All Documents</a>\n  </section>\n\n  <section class=\"sidenav-content\" *ngIf=\"isLoggedIn && isAdmin\">\n    <a [routerLink]=\"['/customers']\" routerLinkActive=\"active\"  class=\"nav-link\"><clr-icon shape=\"users\" class=\"is-solid\"></clr-icon>  Customers</a>\n    <a [routerLink]=\"['/employees']\" routerLinkActive=\"active\"  class=\"nav-link\"><clr-icon shape=\"users\"></clr-icon>  Employees</a>\n  </section>\n\n  <section class=\"sidenav-content\" *ngIf=\"isLoggedIn && isSupport\">\n    <a [routerLink]=\"['/']\" routerLinkActive=\"active\" class=\"nav-link\"><clr-icon shape=\"envelope\"></clr-icon>  Mail</a>\n  </section>\n\n "

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");



var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(authService) {
        this.authService = authService;
        this.isLoggedIn = false;
        this.isCustomer = false;
        this.isAdmin = false;
        this.isSupport = false;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        this.setValues();
    };
    SidenavComponent.prototype.setValues = function () {
        var _this = this;
        this.authService.isLoggedIn$.subscribe(function (value) { return _this.isLoggedIn = value; });
        this.authService.loggedInUserBasicInfo$.subscribe(function (value) {
            _this.loggedInUser = value;
            if (!(Object.keys(value).length === 0 && value.constructor === Object)) {
                if (value.roles.includes('Admin')) {
                    _this.isAdmin = true;
                }
                if (value.roles.includes('Support')) {
                    _this.isSupport = true;
                }
                if (value.roles.includes('Customer')) {
                    _this.isCustomer = true;
                }
            }
        });
    };
    SidenavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/sidenav/sidenav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/top-alert/top-alert.component.css":
/*!***************************************************!*\
  !*** ./src/app/top-alert/top-alert.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcC1hbGVydC90b3AtYWxlcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/top-alert/top-alert.component.html":
/*!****************************************************!*\
  !*** ./src/app/top-alert/top-alert.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-app-level\">\n    \n</div>"

/***/ }),

/***/ "./src/app/top-alert/top-alert.component.ts":
/*!**************************************************!*\
  !*** ./src/app/top-alert/top-alert.component.ts ***!
  \**************************************************/
/*! exports provided: TopAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopAlertComponent", function() { return TopAlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TopAlertComponent = /** @class */ (function () {
    function TopAlertComponent() {
    }
    TopAlertComponent.prototype.ngOnInit = function () {
    };
    TopAlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-top-alert',
            template: __webpack_require__(/*! ./top-alert.component.html */ "./src/app/top-alert/top-alert.component.html"),
            styles: [__webpack_require__(/*! ./top-alert.component.css */ "./src/app/top-alert/top-alert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TopAlertComponent);
    return TopAlertComponent;
}());



/***/ }),

/***/ "./src/app/top-nav/top-nav.component.css":
/*!***********************************************!*\
  !*** ./src/app/top-nav/top-nav.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-logo {\n    margin-right: 0.375rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLW5hdi90b3AtbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7Q0FDMUIiLCJmaWxlIjoic3JjL2FwcC90b3AtbmF2L3RvcC1uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1sb2dvIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMzc1cmVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/top-nav/top-nav.component.html":
/*!************************************************!*\
  !*** ./src/app/top-nav/top-nav.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header header-6\">\n    \n    <div class=\"branding\">\n        <a [routerLink]=\"['/']\" routerLinkActive=\"router-link-active\"  class=\"nav-link\">\n            <img class=\"my-logo\" alt=\"Customer Portal Logo\" src=\"../assets/bolt2.png\">\n            <span class=\"title\">Customer Portal</span>\n        </a>\n    </div>\n        \n    <div class=\"header-actions\" *ngIf=\"isLoggedIn\">\n        <clr-dropdown>\n            <button class=\"nav-icon\" clrDropdownTrigger>\n                <clr-icon shape=\"user\"></clr-icon>\n                <clr-icon shape=\"caret down\"></clr-icon>\n            </button>\n            <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\n                <a href=\"...\" clrDropdownItem>About</a>\n                <a href=\"...\" clrDropdownItem>Preferences</a>\n                <div class=\"dropdown-divider\"></div>\n                <a href=\"...\" clrDropdownItem>Log out</a>\n            </clr-dropdown-menu>\n        </clr-dropdown>\n    </div>\n\n</header>\n\n\n    "

/***/ }),

/***/ "./src/app/top-nav/top-nav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/top-nav/top-nav.component.ts ***!
  \**********************************************/
/*! exports provided: TopNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return TopNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var TopNavComponent = /** @class */ (function () {
    function TopNavComponent(authService) {
        this.authService = authService;
    }
    TopNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.isLoggedIn$.subscribe(function (value) {
            _this.isLoggedIn = value;
        });
    };
    TopNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-top-nav',
            template: __webpack_require__(/*! ./top-nav.component.html */ "./src/app/top-nav/top-nav.component.html"),
            styles: [__webpack_require__(/*! ./top-nav.component.css */ "./src/app/top-nav/top-nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], TopNavComponent);
    return TopNavComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/luaykanaan/DevRepos/CustomerPortal/CustomerPortal-SPA/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map