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
/* harmony import */ var _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/auth/signup/signup.component */ "./src/app/components/auth/signup/signup.component.ts");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");
/* harmony import */ var _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/manage/manage.component */ "./src/app/components/manage/manage.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");








var routes = [
    { path: "signup", component: _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"] },
    { path: "login", component: _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "manage", component: _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_6__["ManageComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: "", component: _components_game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
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

module.exports = "/* .errMsg {\r\n  color: red;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUciLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5lcnJNc2cge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn0gKi9cclxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.autoLoginAuth();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/auth/signup/signup.component */ "./src/app/components/auth/signup/signup.component.ts");
/* harmony import */ var _components_game_game_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/game/game.component */ "./src/app/components/game/game.component.ts");
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ "./src/app/interceptors/auth.interceptor.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/manage/manage.component */ "./src/app/components/manage/manage.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _components_auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"],
                _components_game_game_component__WEBPACK_IMPORTED_MODULE_9__["GameComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _components_manage_manage_component__WEBPACK_IMPORTED_MODULE_12__["ManageComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__["AuthInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/auth/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/auth/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/auth/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"text-center\">Log in</h1>\n  <form (submit)=\"onSubmit(loginForm)\" #loginForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"emailId\">Email address</label>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        id=\"emailId\"\n        aria-describedby=\"emailHelp\"\n        placeholder=\"Enter email\"\n        name=\"email\"\n        ngModel\n      />\n      <small id=\"emailHelp\" class=\"form-text text-muted\"\n        >We'll never share your email with anyone else.</small\n      >\n    </div>\n    <div class=\"form-group\">\n      <label for=\"passwordId\">Password</label>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        id=\"passwordId\"\n        placeholder=\"Password\"\n        name=\"password\"\n        ngModel\n      />\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\">Log in!</button>\n  </form>\n  <p class=\"errMsg\">{{ errorMessage }}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/auth/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnDestroy = function () {
        this.authMessageListener.unsubscribe();
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authMessageListener = this.authService
            .getAuthMessageEmitter()
            .subscribe(function (message) {
            _this.errorMessage = message;
        });
    };
    LoginComponent.prototype.onSubmit = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        this.authService.login(email, password);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/signup/signup.component.css":
/*!*************************************************************!*\
  !*** ./src/app/components/auth/signup/signup.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/auth/signup/signup.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/auth/signup/signup.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"text-center\">Sign up</h1>\n  <form (submit)=\"onSubmit(signupForm)\" #signupForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"emailId\">Email address</label>\n      <input\n        type=\"email\"\n        class=\"form-control\"\n        id=\"emailId\"\n        aria-describedby=\"emailHelp\"\n        placeholder=\"Enter email\"\n        name=\"email\"\n        ngModel\n      />\n      <small id=\"emailHelp\" class=\"form-text text-muted\"\n        >We'll never share your email with anyone else.</small\n      >\n    </div>\n    <div class=\"form-group\">\n      <label for=\"passwordId\">Password</label>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        id=\"passwordId\"\n        placeholder=\"Password\"\n        name=\"password\"\n        ngModel\n      />\n    </div>\n    <div class=\"form-group\">\n      <label for=\"passwordId2\">Password</label>\n      <input\n        type=\"password\"\n        class=\"form-control\"\n        id=\"passwordId2\"\n        placeholder=\"Password\"\n        name=\"password2\"\n        ngModel\n      />\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-primary\">Sign up!</button>\n  </form>\n  <p class=\"errMsg\">{{ errorMessage }}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/auth/signup/signup.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/auth/signup/signup.component.ts ***!
  \************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
    }
    SignupComponent.prototype.ngOnDestroy = function () {
        this.authMessageListener.unsubscribe();
    };
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authMessageListener = this.authService
            .getAuthMessageEmitter()
            .subscribe(function (message) {
            _this.errorMessage = message;
        });
    };
    SignupComponent.prototype.onSubmit = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        var rePassword = form.value.password2;
        // //check if email is purdue email
        // if (!email.includes("@purdue.edu")) {
        //   this.errorMessage = "Please use purdue email";
        //   return;
        // }
        //check if password enter correctly
        if (!(password === rePassword)) {
            this.errorMessage = "Please reenter password";
            return;
        }
        //sign up
        this.authService.signup(email, password);
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-signup",
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/auth/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/auth/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/game/game.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/game/game.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".block {\r\n  width: 8rem;\r\n  height: 8rem;\r\n  margin: auto;\r\n  background-color: red;\r\n  border: 1px solid white;\r\n  border-radius: 10px;\r\n}\r\n\r\n.container {\r\n  max-width: 60%;\r\n}\r\n\r\n/* #control .container {\r\n  max-width: 60%;\r\n} */\r\n\r\n#rgbBoard {\r\n  font-size: 2rem;\r\n}\r\n\r\n#head {\r\n  color: white;\r\n  background-color: blue;\r\n  text-transform: uppercase;\r\n}\r\n\r\n/* html {\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  height: 100%;\r\n} */\r\n\r\n#control {\r\n  background-color: white;\r\n  height: 2.5rem;\r\n}\r\n\r\n#control p {\r\n  margin-bottom: 0;\r\n  /* margin-right: 3rem; */\r\n}\r\n\r\n#control button {\r\n  padding: 0;\r\n}\r\n\r\n#gameStatus {\r\n  width: 30rem;\r\n}\r\n\r\n.card {\r\n  position: absolute;\r\n  top: 400px;\r\n  left: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lL2dhbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7R0FFRzs7QUFFSDtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQTs7Ozs7O0dBTUc7O0FBRUg7RUFDRSx1QkFBdUI7RUFDdkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE9BQU87QUFDVCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvY2sge1xyXG4gIHdpZHRoOiA4cmVtO1xyXG4gIGhlaWdodDogOHJlbTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogNjAlO1xyXG59XHJcblxyXG4vKiAjY29udHJvbCAuY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDYwJTtcclxufSAqL1xyXG5cclxuI3JnYkJvYXJkIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbiNoZWFkIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4vKiBodG1sIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufSAqL1xyXG5cclxuI2NvbnRyb2wge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG59XHJcblxyXG4jY29udHJvbCBwIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIC8qIG1hcmdpbi1yaWdodDogM3JlbTsgKi9cclxufVxyXG5cclxuI2NvbnRyb2wgYnV0dG9uIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4jZ2FtZVN0YXR1cyB7XHJcbiAgd2lkdGg6IDMwcmVtO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDAwcHg7XHJcbiAgbGVmdDogMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/game/game.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/game/game.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div id=\"head\" class=\"text-center p-5\">\n    <h1>What color is this?</h1>\n    <p id=\"rgbBoard\"></p>\n  </div>\n  <div\n    id=\"control\"\n    class=\"d-flex justify-content-around align-items-center text-center\"\n  >\n    <button id=\"resetButton\" type=\"button\" class=\"btn btn-link\">\n      Next Level\n    </button>\n    <p id=\"gameStatus\"></p>\n    <div>\n      <button\n        [disabled]=\"!isAuthenticated\"\n        type=\"button\"\n        (click)=\"onClick()\"\n        class=\"btn btn-link\"\n      >\n        Save highscore\n      </button>\n    </div>\n  </div>\n</header>\n\n<section id=\"gameContent\">\n  <div class=\"container mt-5\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-6 col-lg-4\">\n        <div class=\"block\"></div>\n      </div>\n      <div class=\"col-6 col-lg-4\">\n        <div class=\"block\"></div>\n      </div>\n      <div class=\"col-6 col-lg-4\">\n        <div class=\"block\"></div>\n      </div>\n      <div class=\"col-6 col-lg-4\">\n        <div class=\"block\"></div>\n      </div>\n      <div class=\"col-6 col-lg-4\">\n        <div class=\"block\"></div>\n      </div>\n      <div class=\"col-6 col-lg-4\">\n        <div class=\"block\"></div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<div class=\"card text-center\" style=\"width: 18rem;\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Status</h5>\n    <h6 class=\"card-subtitle mb-2 text-muted\">Do you love this game? :)</h6>\n    <p class=\"card-text\">\n      Highscore: <span class=\"text-primary\" id=\"highscore\">0</span> | Chances:\n      <span class=\"text-primary\" id=\"chance\">3</span>\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/game/game.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/game/game.component.ts ***!
  \***************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _assets_js_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/js/script */ "./src/assets/js/script.js");
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");





var GameComponent = /** @class */ (function () {
    function GameComponent(gameService, authService) {
        this.gameService = gameService;
        this.authService = authService;
    }
    GameComponent.prototype.ngOnDestroy = function () {
        this.authListener.unsubscribe();
    };
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        Object(_assets_js_script__WEBPACK_IMPORTED_MODULE_2__["executeGame"])();
        this.isAuthenticated = this.authService.getIsAuthenticated();
        this.authListener = this.authService
            .getAuthEmitter()
            .subscribe(function (isAuthenticated) {
            _this.isAuthenticated = isAuthenticated;
        });
    };
    GameComponent.prototype.onClick = function () {
        var highscore = Object(_assets_js_script__WEBPACK_IMPORTED_MODULE_2__["getHighscore"])();
        this.gameService.saveHighscore(highscore).subscribe(function (response) {
            console.log(response.message);
        }, function (err) {
            console.log(err.error.message);
        });
    };
    GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-game",
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/components/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/components/game/game.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/components/manage/manage.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/manage/manage.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFuYWdlL21hbmFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/manage/manage.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/manage/manage.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"text-center\">Summary</h2>\n\n  <table class=\"table table-bordered text-center\">\n    <thead class=\"table-info\">\n      <tr>\n        <th scope=\"col\">Count</th>\n        <th scope=\"col\">Average</th>\n        <th scope=\"col\">Max</th>\n        <th scope=\"col\">Min</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>{{ summaryInfo.count }}</td>\n        <td>{{ summaryInfo.average }}</td>\n        <td>{{ summaryInfo.max }}</td>\n        <td>{{ summaryInfo.min }}</td>\n      </tr>\n    </tbody>\n  </table>\n\n  <h2 class=\"text-center\">History</h2>\n  <table class=\"table table-hover\">\n    <thead class=\"thead-light\">\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Score</th>\n        <th scope=\"col\">Date</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let highscore of highscoreArray; let i = index\">\n        <th scope=\"row\">{{ i + 1 }}</th>\n        <td>{{ highscore.score }}</td>\n        <td>{{ highscore.created }}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/manage/manage.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/manage/manage.component.ts ***!
  \*******************************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ManageComponent = /** @class */ (function () {
    function ManageComponent(gameService) {
        this.gameService = gameService;
        this.summaryInfo = {};
        this.order = 1;
    }
    ManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameService.getSummary().subscribe(function (response) {
            _this.summaryInfo = response.summary;
        }, function (err) {
            console.log(err.error.message);
        });
        this.gameService
            .getHighscore()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return {
                highscoreArray: response.highscoreArray.map(function (highscore) {
                    return {
                        score: highscore.score,
                        created: new Date(highscore.created)
                    };
                })
            };
        }))
            .subscribe(function (postResponse) {
            _this.highscoreArray = postResponse.highscoreArray;
        }, function (err) {
            console.log(err.error.message);
        });
    };
    ManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-manage",
            template: __webpack_require__(/*! ./manage.component.html */ "./src/app/components/manage/manage.component.html"),
            styles: [__webpack_require__(/*! ./manage.component.css */ "./src/app/components/manage/manage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]])
    ], ManageComponent);
    return ManageComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" routerLink=\"/\">R-Guess-B</a>\n  <button\n    class=\"navbar-toggler\"\n    type=\"button\"\n    data-toggle=\"collapse\"\n    data-target=\"#navbarNavAltMarkup\"\n    aria-controls=\"navbarNavAltMarkup\"\n    aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\"\n  >\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div\n    *ngIf=\"!isAuthenticated\"\n    class=\"collapse navbar-collapse\"\n    id=\"navbarNavAltMarkup\"\n  >\n    <div class=\"navbar-nav ml-auto\">\n      <a class=\"nav-item nav-link\" routerLink=\"/login\">Log In</a>\n    </div>\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" routerLink=\"/signup\">Sign Up</a>\n    </div>\n  </div>\n  <div\n    *ngIf=\"isAuthenticated\"\n    class=\"collapse navbar-collapse\"\n    id=\"navbarNavAltMarkup\"\n  >\n    <div class=\"navbar-nav ml-auto\">\n      <a\n        class=\"nav-item nav-link\"\n        [ngClass]=\"isManage ? 'active' : ''\"\n        routerLink=\"/manage\"\n        >Manage</a\n      >\n    </div>\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link\" (click)=\"logout()\">Log Out</a>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isManage = false;
    }
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.authListener.unsubscribe();
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.isManage = this.router.url === "/manage" ? true : false;
        this.isAuthenticated = this.authService.getIsAuthenticated();
        this.authListener = this.authService
            .getAuthEmitter()
            .subscribe(function (isAuthenticated) {
            _this.isAuthenticated = isAuthenticated;
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuth = this.authService.getIsAuthenticated();
        if (!isAuth) {
            this.router.navigate(["/login"]);
        }
        return isAuth;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/interceptors/auth.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        //now all the request make from client will have the token of the user
        var token = this.authService.getToken();
        var request = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + token)
        });
        return next.handle(request);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/user";
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.authEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.authMessageEmitter = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    AuthService.prototype.signup = function (email, password) {
        var _this = this;
        this.http
            .post(BACKEND_URL + "/signup", {
            email: email,
            password: password
        })
            .subscribe(function () {
            _this.router.navigate(["/login"]);
        }, function (err) {
            _this.authMessageEmitter.next(err.error.message);
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        this.http.post(BACKEND_URL + "/login", { email: email, password: password }).subscribe(function (response) {
            _this.token = response.token;
            if (_this.token) {
                var expirationTime = response.expiresIn;
                //automatically log out after a period of time
                _this.setAuthTimer(expirationTime);
                _this.isAuthenticated = true;
                _this.userId = response.userId;
                _this.authEmitter.next(true);
                var timeNow = new Date();
                var absoluteExpirationDate = new Date(timeNow.getTime() + expirationTime * 1000);
                console.log(absoluteExpirationDate);
                //save auth info so user do not need to log in every time
                _this.saveAuthInfo(_this.userId, absoluteExpirationDate.toISOString(), _this.token);
            }
            _this.router.navigate(["/"]);
        }, function (err) {
            _this.authMessageEmitter.next(err.error.message);
            _this.authEmitter.next(false);
        });
    };
    AuthService.prototype.autoLoginAuth = function () {
        //auto log user in until time expired
        var authInfo = this.getAuthInfo();
        if (!authInfo) {
            return;
        }
        var expirationDate = new Date(authInfo.expirationDate);
        var timeNow = new Date();
        var expiresIn = expirationDate.getTime() - timeNow.getTime();
        if (expiresIn > 0) {
            this.token = authInfo.token;
            this.userId = authInfo.userId;
            this.isAuthenticated = true;
            this.authEmitter.next(true);
            this.setAuthTimer(expiresIn / 1000);
        }
    };
    AuthService.prototype.logout = function () {
        this.token = null;
        this.userId = null;
        this.isAuthenticated = false;
        this.authEmitter.next(false);
        this.clearAuthInfo();
        clearInterval(this.timerInterval);
        this.http.get(BACKEND_URL + "/logout").subscribe(function (response) {
            console.log(response.message);
        }, function (err) {
            console.log(err.error.message);
        });
        //this.router.navigate(["/"]);
    };
    AuthService.prototype.setAuthTimer = function (duration) {
        var _this = this;
        //auto log out for a duration
        this.timerInterval = setInterval(function () {
            _this.logout();
            alert("You have been logged out");
        }, duration * 1000);
    };
    AuthService.prototype.clearAuthInfo = function () {
        localStorage.removeItem("userId");
        localStorage.removeItem("expirationDate");
        localStorage.removeItem("token");
    };
    AuthService.prototype.saveAuthInfo = function (userId, expirationDate, token) {
        //save authentication info to locl storage
        localStorage.setItem("userId", userId);
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("token", token);
    };
    AuthService.prototype.getAuthInfo = function () {
        //get authentication info from local storage
        var userId = localStorage.getItem("userId");
        var expirationDate = localStorage.getItem("expirationDate");
        var token = localStorage.getItem("token");
        if (!token || !expirationDate) {
            return;
        }
        return {
            userId: userId,
            expirationDate: expirationDate,
            token: token
        };
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getAuthEmitter = function () {
        return this.authEmitter.asObservable();
    };
    AuthService.prototype.getIsAuthenticated = function () {
        return this.isAuthenticated;
    };
    AuthService.prototype.getAuthMessageEmitter = function () {
        return this.authMessageEmitter.asObservable();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/game.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var BACKEND_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/game";
var GameService = /** @class */ (function () {
    function GameService(http) {
        this.http = http;
    }
    GameService.prototype.saveHighscore = function (score) {
        return this.http.post(BACKEND_URL + "/score", {
            score: score
        });
    };
    GameService.prototype.getHighscore = function () {
        return this.http.get(BACKEND_URL + "/score");
    };
    GameService.prototype.getSummary = function () {
        return this.http.get(BACKEND_URL + "/summary");
    };
    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/assets/js/script.js":
/*!*********************************!*\
  !*** ./src/assets/js/script.js ***!
  \*********************************/
/*! exports provided: executeGame, getHighscore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "executeGame", function() { return executeGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHighscore", function() { return getHighscore; });
let highscore = 0;
function executeGame() {
  let chanceLeft = 3;
  let choosenRGB;
  const numBlocks = 6;
  let canReset = true;

  //DOM declaration
  var rgbBoard = document.querySelector("#rgbBoard");
  var blocks = document.querySelectorAll(".block");
  var head = document.querySelector("#head");
  var gameStatus = document.querySelector("#control p");
  var resetButton = document.querySelector("#resetButton");
  var highscoreStatus = document.querySelector("#highscore");
  var chanceStatus = document.querySelector("#chance");

  function generateColor() {
    var redColor = Math.floor(Math.random() * 256);
    var greenColor = Math.floor(Math.random() * 256);
    var blueColor = Math.floor(Math.random() * 256);
    var arrayColor = [redColor, greenColor, blueColor];
    return arrayColor;
  }

  function getRGBColor() {
    var arrayColor = generateColor();
    var rgbCodeStr =
      "rgb(" +
      arrayColor[0] +
      ", " +
      arrayColor[1] +
      ", " +
      arrayColor[2] +
      ")";
    return rgbCodeStr;
  }

  function generateOrder(size) {
    return Math.floor(Math.random() * size);
  }

  function guessCorrect() {
    head.style.background = choosenRGB;
    gameStatus.textContent = "Congratulation!";
    canReset = true;
    //make all the blocks unclickable
    this.removeEventListener("click", guessCorrect);
    blocks.forEach(function(block) {
      //set all blocks = correct color
      block.style.background = choosenRGB;
      block.removeEventListener("click", guessWrong);
    });
    highscore++;
    setHighscore();
  }
  function setHighscore() {
    highscoreStatus.textContent = highscore;
  }
  function setChance() {
    chanceStatus.textContent = chanceLeft;
  }

  function guessWrong() {
    this.style.background = "white";
    gameStatus.textContent = "Try Again!";
    chanceLeft--;
    setChance();
    if (chanceLeft <= 0) {
      chanceLeft = 3;
      highscore = 0;
      setHighscore();
      setChance();
      alert("You lose");
      canReset = true;
      resetGame();
    }
    //this.classList.add = "d-none";
  }

  function resetGame() {
    if (canReset == false) {
      alert("Please finish this level first");
      return;
    }
    //renew chances every time it wins
    chanceLeft = 3;
    setChance();
    canReset = false;
    blocks.forEach(function(block) {
      block.removeEventListener("click", guessCorrect);
      block.removeEventListener("click", guessWrong);
    });

    gameStatus.textContent = "";
    head.style.background = "blue";

    //generate new correct block order
    let blockCorrectOrder = generateOrder(numBlocks);
    //generate new correct block color using old var
    choosenRGB = getRGBColor();
    //set new context
    rgbBoard.textContent = choosenRGB;

    assignRGB(blockCorrectOrder);
  }

  function assignRGB(blockCorrectOrder) {
    for (var i = 0; i < numBlocks; i++) {
      var randomRGB = getRGBColor();
      if (i == blockCorrectOrder) {
        blocks[i].style.background = choosenRGB;
        blocks[i].addEventListener("click", guessCorrect);
        continue;
      }
      blocks[i].style.background = randomRGB;
      blocks[i].addEventListener("click", guessWrong);
    }
  }

  resetGame();

  resetButton.addEventListener("click", resetGame);
}
function getHighscore() {
  return Number(highscore);
}


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
    apiUrl: "http://localhost:3000/api",
    production: false
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

module.exports = __webpack_require__(/*! /mnt/d/OneDrive - purdue.edu/MyFiles/Documents/VS Code Workspace/r-guess-b/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map