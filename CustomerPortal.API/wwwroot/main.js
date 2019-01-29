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



var routes = [];
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

module.exports = ".my-logo {\n    margin-right: 0.375rem;\n}\n.sidenav-top {\n    width: 100%;\n    padding: 1rem;\n    height: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7Q0FDMUI7QUFDRDtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsY0FBYztDQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWxvZ28ge1xuICAgIG1hcmdpbi1yaWdodDogMC4zNzVyZW07XG59XG4uc2lkZW5hdi10b3Age1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgaGVpZ2h0OiAxMHJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"main-container\">\n  \n  <!--  -->\n  <div class=\"alert alert-app-level\">\n      \n  </div>\n  \n  <!--  -->\n  <header class=\"header header-6\">\n    <div class=\"branding\">\n      <a href=\"...\" class=\"nav-link\">\n          <img class=\"my-logo\" alt=\"Customer Portal Logo\" src=\"../assets/bolt2.png\">\n          <span class=\"title\">Customer Portal</span>\n      </a>\n    </div>\n    <div class=\"header-actions\" *ngIf=\"isLoggedIn\">\n      <clr-dropdown>\n        <button class=\"nav-icon\" clrDropdownTrigger>\n          <clr-icon shape=\"user\"></clr-icon>\n          <clr-icon shape=\"caret down\"></clr-icon>\n        </button>\n        <clr-dropdown-menu *clrIfOpen clrPosition=\"bottom-right\">\n          <a href=\"...\" clrDropdownItem>About</a>\n          <a href=\"...\" clrDropdownItem>Preferences</a>\n          <div class=\"dropdown-divider\"></div>\n          <a href=\"...\" clrDropdownItem>Log out</a>\n        </clr-dropdown-menu>\n      </clr-dropdown>\n    </div>\n  </header>\n  \n  <!--  -->\n  <div class=\"content-container\">\n\n    <app-login *ngIf=\"!isLoggedIn\"></app-login>\n      \n    <div class=\"content-area\" *ngIf=\"isLoggedIn\">\n      <p>the main content here</p>\n      <router-outlet></router-outlet>\n    </div>\n      \n    <nav class=\"sidenav\" *ngIf=\"isLoggedIn\">\n\n      <section class=\"sidenav-top\">\n        <div>gravatar and name here</div>\n      </section>\n\n      <section class=\"sidenav-content\">\n        <a href=\"...\" class=\"nav-link active\"><clr-icon shape=\"list\"></clr-icon>  Contracts</a>\n        <a href=\"...\" class=\"nav-link\"><clr-icon shape=\"bank\"></clr-icon>  Banking Details</a>\n        <a href=\"...\" class=\"nav-link\"><clr-icon shape=\"details\"></clr-icon>  Personal Details</a>\n        <a href=\"...\" class=\"nav-link\"><clr-icon shape=\"memory\"></clr-icon>  Meter Readings</a>\n        <a href=\"...\" class=\"nav-link\"><clr-icon shape=\"envelope\"></clr-icon>  Mail</a>\n        <a href=\"...\" class=\"nav-link\"><clr-icon shape=\"help\"></clr-icon>  Support</a>\n        <a href=\"...\" class=\"nav-link\"><clr-icon shape=\"book\"></clr-icon>  Knowledge Base</a>\n        <a href=\"...\" class=\"nav-link\"><clr-icon shape=\"file\"></clr-icon>  All Documents</a>\n      </section>\n\n    </nav>\n\n  </div>\n\n</div>\n\n\n"

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
        var _this = this;
        this.authService.checkLoginStatus();
        this.authService.isLoggedIn$.subscribe(function (value) {
            _this.isLoggedIn = value;
        });
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












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
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