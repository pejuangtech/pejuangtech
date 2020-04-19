(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"admin-admin-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
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

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"sidebar\" data-color=\"white\" data-active-color=\"danger\">\r\n    <app-sidebar></app-sidebar>\r\n  </div>\r\n  <div class=\"main-panel\">\r\n    <div class=\"content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <app-footer></app-footer>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/navbars/navbars.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/navbars/navbars.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-wrapper\">\r\n      <div class=\"navbar-toggle\">\r\n        <button type=\"button\" class=\"navbar-toggler\" (click)=\"sidebarToggle()\">\r\n          <span class=\"navbar-toggler-bar bar1\"></span>\r\n          <span class=\"navbar-toggler-bar bar2\"></span>\r\n          <span class=\"navbar-toggler-bar bar3\"></span>\r\n        </button>\r\n      </div>\r\n      <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\r\n    </div>\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"collapse()\" [attr.aria-expanded]=\"!isCollapsed\"\r\n      aria-controls=\"collapseExample\">\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\r\n      <form>\r\n        <div class=\"input-group no-border\">\r\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\r\n          <div class=\"input-group-append\">\r\n            <div class=\"input-group-text\">\r\n              <i class=\"nc-icon nc-zoom-split\"></i>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link btn-magnify\" href=\"javascript:void(0)\">\r\n            <i class=\"nc-icon nc-layout-11\"></i>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Stats</span>\r\n            </p>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"nav-item btn-rotate\" ngbDropdown placement=\"bottom-left\">\r\n          <a class=\"nav-link\" ngbDropdownToggle id=\"navbarDropdownMenuLink\">\r\n            <i class=\"nc-icon nc-bell-55\"></i>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n            </p>\r\n          </a>\r\n          <div ngbDropdownMenu aria-labelledby=\"navbarDropdownMenuLink\" class=\"dropdown-menu dropdown-menu-right\">\r\n            <a ngbDropdownItem href=\"javascript:void(0)\">Action</a>\r\n            <a ngbDropdownItem href=\"javascript:void(0)\">Another action</a>\r\n            <a ngbDropdownItem href=\"javascript:void(0)\">Something else here</a>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link btn-rotate\" href=\"javascript:void(0)\">\r\n            <i class=\"nc-icon nc-settings-gear-65\"></i>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Account</span>\r\n            </p>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/admin/navbars/navbars.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin/navbars/navbars.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/navbars/navbars.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/navbars/navbars.component.ts ***!
  \****************************************************/
/*! exports provided: NavbarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarsComponent", function() { return NavbarsComponent; });
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

var NavbarsComponent = /** @class */ (function () {
    function NavbarsComponent() {
    }
    NavbarsComponent.prototype.ngOnInit = function () {
    };
    NavbarsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbars',
            template: __webpack_require__(/*! ./navbars.component.html */ "./src/app/admin/navbars/navbars.component.html"),
            styles: [__webpack_require__(/*! ./navbars.component.scss */ "./src/app/admin/navbars/navbars.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarsComponent);
    return NavbarsComponent;
}());



/***/ }),

/***/ "./src/app/admin/sidebar/sidebar.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/sidebar/sidebar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-wrapper\">\r\n  <div class=\"logo\">\r\n    <a class=\"simple-text logo-mini\">\r\n      <div class=\"logo-image-small\">\r\n\r\n      </div>\r\n    </a>\r\n    <a href=\"\" class=\"simple-text logo-normal\">\r\n      PejuangTech\r\n    </a>\r\n  </div>\r\n  <ul class=\"nav\">\r\n    <li routerLinkActive=\"active\">\r\n      <a [routerLink]=\"['/admin/dashboard']\">\r\n        <i class=\"nc-icon nc-bank\"></i>\r\n        <p>Dashboard</p>\r\n      </a>\r\n    </li>\r\n    <!-- <li routerLinkActive=\"active\">\r\n      <a [routerLink]=\"['/admin/testimoni']\">\r\n        <i class=\"nc-icon nc-diamond\"></i>\r\n        <p>Testimoni</p>\r\n      </a>\r\n    </li> -->\r\n    <li routerLinkActive=\"active\">\r\n      <a [routerLink]=\"['/admin/stories']\">\r\n        <i class=\"nc-icon nc-bulb-63\"></i>\r\n        <p>Stories</p>\r\n      </a>\r\n    </li>\r\n    <li routerLinkActive=\"active\">\r\n      <a [routerLink]=\"['/admin/portofolio']\">\r\n        <i class=\"nc-icon nc-single-02\"></i>\r\n        <p>Portofolio</p>\r\n      </a>\r\n    </li>\r\n    <li routerLinkActive=\"active\">\r\n      <a [routerLink]=\"['/admin/order']\">\r\n        <i class=\"nc-icon nc-badge\"></i>\r\n        <p>Order Now</p>\r\n      </a>\r\n    </li>\r\n    <li routerLinkActive=\"active\" *ngIf=\"akseskategori == 'superadmin'\">\r\n      <a [routerLink]=\"['/admin/settings']\">\r\n        <i class=\"nc-icon nc-settings-gear-65\"></i>\r\n        <p>Settings</p>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/sidebar/sidebar.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin/sidebar/sidebar.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/sidebar/sidebar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/sidebar/sidebar.component.ts ***!
  \****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// export interface RouteInfo {
//   path: string;
//   title: string;
//   icon: string;
//   class: string;
// }
// export const ROUTES: RouteInfo[] = [
//   { path: '/admin/dashboard', title: 'Dashboard', icon: 'nc-bank', class: '' },
//   { path: '/admin/testimoni', title: 'Testimoni', icon: 'nc-diamond', class: '' },
//   { path: '/admin/portofolio', title: 'Portofolio', icon: 'nc-single-02', class: '' },
//   { path: '/admin/settings', title: 'Settings', icon: 'nc-settings-gear-65', class: '' },
//   // { path: '/admin/maps', title: 'Maps', icon: 'nc-pin-3', class: '' },
//   // { path: '/admin/notifications', title: 'Notifications', icon: 'nc-bell-55', class: '' },
//   // { path: '/admin/typography', title: 'Typography', icon: 'nc-caps-small', class: '' },
// ];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(fsAuth, db, router) {
        var _this = this;
        this.fsAuth = fsAuth;
        this.db = db;
        this.router = router;
        // public menuItems: any[];
        this.isAdmin = false;
        this.user = {};
        this.akses = {};
        this.fsAuth.auth.onAuthStateChanged(function (user) {
            _this.getAkses(user.uid);
            _this.router.events.subscribe(function (e) {
                if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                    _this.cekAkses(e.url, user.uid);
                }
            });
        });
    }
    SidebarComponent.prototype.getAkses = function (uid) {
        var _this = this;
        this.db.collection('admin').doc(uid).valueChanges().subscribe(function (res) {
            if (res != undefined)
                _this.parseAkses(res);
        });
    };
    SidebarComponent.prototype.parseAkses = function (data) {
        this.akseskategori = data.kategori;
        var dat = data.akses;
        for (var i = 0; i < dat.length; i++) {
            this.akses[dat[i]] = true;
        }
    };
    SidebarComponent.prototype.cekAkses = function (url, uid) {
        var _this = this;
        this.db.collection('admin').doc(uid).get().subscribe(function (res) {
            if (res.data().akses != undefined && res.data().akseskategori == 'admin') {
                var idx = res.data().akses.indexOf(url);
                if (idx == -1) {
                    _this.fsAuth.auth.signOut();
                    _this.router.navigate(['/auth']);
                }
            }
        });
    };
    SidebarComponent.prototype.ngOnInit = function () {
        // this.menuItems = ROUTES.filter(menuItem => menuItem);
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/admin/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/admin/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookieconsent */ "./node_modules/ngx-cookieconsent/esm5/ngx-cookieconsent.es5.js");
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







var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location, ccService) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
        this.ccService = ccService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to cookieconsent observables to react to main events
        this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(function () {
            // you can use this.ccService.getConfig() to do stuff...
        });
        this.popupCloseSubscription = this.ccService.popupClose$.subscribe(function () {
            // you can use this.ccService.getConfig() to do stuff...
        });
        this.initializeSubscription = this.ccService.initialize$.subscribe(function (event) {
            // you can use this.ccService.getConfig() to do stuff...
        });
        this.statusChangeSubscription = this.ccService.statusChange$.subscribe(function (event) {
            // you can use this.ccService.getConfig() to do stuff...
        });
        this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(function () {
            // you can use this.ccService.getConfig() to do stuff...
        });
        this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(function (event) {
            // you can use this.ccService.getConfig() to do stuff...
        });
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        this.renderer.listenGlobal('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            }
            else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to cookieconsent observables to prevent memory leaks
        this.popupOpenSubscription.unsubscribe();
        this.popupCloseSubscription.unsubscribe();
        this.initializeSubscription.unsubscribe();
        this.statusChangeSubscription.unsubscribe();
        this.revokeChoiceSubscription.unsubscribe();
        this.noCookieLawSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]),
        __metadata("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_6__["NgcCookieConsentService"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _admin_navbars_navbars_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/navbars/navbars.component */ "./src/app/admin/navbars/navbars.component.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _examples_examples_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/examples.module */ "./src/app/examples/examples.module.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _admin_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/sidebar/sidebar.component */ "./src/app/admin/sidebar/sidebar.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _modal_modal_administrator_modal_administrator_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modal/modal-administrator/modal-administrator.component */ "./src/app/modal/modal-administrator/modal-administrator.component.ts");
/* harmony import */ var _modal_edit_administrator_edit_administrator_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modal/edit-administrator/edit-administrator.component */ "./src/app/modal/edit-administrator/edit-administrator.component.ts");
/* harmony import */ var _modal_edit_about_edit_about_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modal/edit-about/edit-about.component */ "./src/app/modal/edit-about/edit-about.component.ts");
/* harmony import */ var _media_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./media/image-uploader/image-uploader.component */ "./src/app/media/image-uploader/image-uploader.component.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var _modal_detail_order_detail_order_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modal/detail-order/detail-order.component */ "./src/app/modal/detail-order/detail-order.component.ts");
/* harmony import */ var _modal_accepted_order_accepted_order_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modal/accepted-order/accepted-order.component */ "./src/app/modal/accepted-order/accepted-order.component.ts");
/* harmony import */ var _components_portofolio_portofolio_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/portofolio/portofolio.component */ "./src/app/components/portofolio/portofolio.component.ts");
/* harmony import */ var ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-cookieconsent */ "./node_modules/ngx-cookieconsent/esm5/ngx-cookieconsent.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














//firebase












//image cropper





var cookieConfig = {
    cookie: {
        domain: 'localhost' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
    },
    palette: {
        popup: {
            background: '#000'
        },
        button: {
            background: '#f1d600'
        }
    },
    theme: 'edgeless',
    type: 'opt-out'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _admin_navbars_navbars_component__WEBPACK_IMPORTED_MODULE_10__["NavbarsComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__["AdminComponent"],
                _auth_auth_component__WEBPACK_IMPORTED_MODULE_13__["AuthComponent"],
                _admin_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_20__["SidebarComponent"],
                _modal_modal_administrator_modal_administrator_component__WEBPACK_IMPORTED_MODULE_22__["ModalAdministratorComponent"],
                _modal_edit_administrator_edit_administrator_component__WEBPACK_IMPORTED_MODULE_23__["EditAdministratorComponent"],
                _modal_edit_about_edit_about_component__WEBPACK_IMPORTED_MODULE_24__["EditAboutComponent"],
                _media_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_25__["ImageUploaderComponent"],
                _modal_detail_order_detail_order_component__WEBPACK_IMPORTED_MODULE_27__["DetailOrderComponent"],
                _modal_accepted_order_accepted_order_component__WEBPACK_IMPORTED_MODULE_28__["AcceptedOrderComponent"],
                _components_portofolio_portofolio_component__WEBPACK_IMPORTED_MODULE_29__["PortofolioComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_11__["ComponentsModule"],
                ngx_cookieconsent__WEBPACK_IMPORTED_MODULE_30__["NgcCookieConsentModule"].forRoot(cookieConfig),
                _angular_fire__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_19__["environment"].firebase),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_15__["AngularFirestoreModule"],
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_17__["AngularFireAuthModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_16__["AngularFireStorageModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_18__["AngularFireDatabaseModule"],
                _examples_examples_module__WEBPACK_IMPORTED_MODULE_12__["ExamplesModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_26__["ImageCropperModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [_modal_modal_administrator_modal_administrator_component__WEBPACK_IMPORTED_MODULE_22__["ModalAdministratorComponent"],
                _modal_edit_administrator_edit_administrator_component__WEBPACK_IMPORTED_MODULE_23__["EditAdministratorComponent"],
                _modal_edit_about_edit_about_component__WEBPACK_IMPORTED_MODULE_24__["EditAboutComponent"],
                _media_image_uploader_image_uploader_component__WEBPACK_IMPORTED_MODULE_25__["ImageUploaderComponent"],
                _modal_detail_order_detail_order_component__WEBPACK_IMPORTED_MODULE_27__["DetailOrderComponent"],
                _modal_accepted_order_accepted_order_component__WEBPACK_IMPORTED_MODULE_28__["AcceptedOrderComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _examples_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples/profile/profile.component */ "./src/app/examples/profile/profile.component.ts");
/* harmony import */ var _examples_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/signup/signup.component */ "./src/app/examples/signup/signup.component.ts");
/* harmony import */ var _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/landing/landing.component */ "./src/app/examples/landing/landing.component.ts");
/* harmony import */ var _components_portofolio_portofolio_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/portofolio/portofolio.component */ "./src/app/components/portofolio/portofolio.component.ts");
/* harmony import */ var _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var _auth_auth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _examples_order_now_order_now_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./examples/order-now/order-now.component */ "./src/app/examples/order-now/order-now.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//guard

var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_components_component__WEBPACK_IMPORTED_MODULE_4__["ComponentsComponent"] },
    { path: 'user-profile', component: _examples_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'signup', component: _examples_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"] },
    { path: 'landing', component: _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_7__["LandingComponent"] },
    { path: 'portofolio/:id', component: _components_portofolio_portofolio_component__WEBPACK_IMPORTED_MODULE_8__["PortofolioComponent"] },
    { path: 'order', component: _examples_order_now_order_now_component__WEBPACK_IMPORTED_MODULE_12__["OrderNowComponent"] },
    { path: 'nucleoicons', component: _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_9__["NucleoiconsComponent"] },
    { path: 'auth', component: _auth_auth_component__WEBPACK_IMPORTED_MODULE_10__["AuthComponent"] },
    {
        path: 'admin',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
        children: [
            {
                path: '',
                loadChildren: './admin/admin.module#AdminModule'
            }
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"page-header\" style=\"background-image: url('./assets/img/login-image.jpg');\">\r\n    <div class=\"filter\"></div>\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\r\n          <div class=\"card card-register\">\r\n            <h3 class=\"title\">Welcome</h3>\r\n            <div class=\"social-line text-center\">\r\n              <a href=\"#pablo\" class=\"btn btn-neutral btn-facebook btn-just-icon\">\r\n                <i class=\"fa fa-facebook-square\"></i>\r\n              </a>\r\n              <a href=\"#pablo\" class=\"btn btn-neutral btn-google btn-just-icon\">\r\n                <i class=\"fa fa-google-plus\"></i>\r\n              </a>\r\n              <a href=\"#pablo\" class=\"btn btn-neutral btn-twitter btn-just-icon\">\r\n                <i class=\"fa fa-twitter\"></i>\r\n              </a>\r\n            </div>\r\n            <form class=\"register-form\">\r\n              <label>Email</label>\r\n              <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">\r\n                    <i class=\"nc-icon nc-email-85\"></i>\r\n                  </span>\r\n                </div>\r\n\r\n                <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n              </div>\r\n\r\n              <label>Password</label>\r\n              <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\">\r\n                    <i class=\"nc-icon nc-key-25\"></i>\r\n                  </span>\r\n                </div>\r\n                <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" (focus)=\"focus1=true\"\r\n                  (blur)=\"focus1=false\">\r\n              </div>\r\n              <button class=\"btn btn-danger btn-block btn-round\" (click)=\"login(email,password)\">{{loading ? 'Mohon Tunggu..':'Login'}}</button>\r\n            </form>\r\n            <div class=\"forgot\">\r\n              <a href=\"#\" class=\"btn btn-link btn-danger\">Forgot password?</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"footer register-footer text-center\">\r\n        <h6>&copy;{{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Pejuang Tim</h6>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthComponent = /** @class */ (function () {
    function AuthComponent(afAuth, router, db) {
        this.afAuth = afAuth;
        this.router = router;
        this.db = db;
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent.prototype.login = function (email, password) {
        var _this = this;
        this.loading = true;
        this.afAuth.auth.signInWithEmailAndPassword(email, password).then(function (res) {
            _this.cekAkses(res.user.uid);
        }).catch(function (error) {
            _this.loading = false;
            alert('Email atau Password salah.');
        });
    };
    AuthComponent.prototype.cekAkses = function (uid) {
        var _this = this;
        this.db.collection('admin').doc(uid).get().subscribe(function (res) {
            if (res.data() != undefined)
                _this.routeAction(res.data());
            else
                _this.noaccess();
        });
    };
    AuthComponent.prototype.noaccess = function () {
        this.loading = false;
        this.afAuth.auth.signOut();
        alert('Anda tidak memiliki hak akses.');
    };
    AuthComponent.prototype.routeAction = function (data) {
        this.loading = false;
        if (data.kategori == 'superadmin') {
            this.router.navigate(['/admin/dashboard']);
        }
        else if (data.kategori == 'admin') {
            this.router.navigate(['/' + data.akses[0]]);
        }
        else
            this.noaccess();
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_take__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/take */ "./node_modules/rxjs-compat/_esm5/add/operator/take.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuard = /** @class */ (function () {
    function AuthGuard(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.afAuth.authState
            .take(1)
            .map(function (user) { return !!user; })
            .do(function (loggedIn) {
            if (!loggedIn) {
                alert("Anda tidak mempunyai akses!");
                _this.router.navigate(['/home']);
            }
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-buttons\">\r\n    <div class=\"container\">\r\n        <div class=\"tim-title\">\r\n            <h2>Basic Components</h2>\r\n        </div>\r\n        <div id=\"buttons\">\r\n            <div class=\"tim-title\">\r\n                <h3>Buttons\r\n                    <br/>\r\n                    <small>Pick your style</small>\r\n                </h3>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <button type=\"button\" class=\"btn btn-danger\">Default</button>\r\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Round</button>\r\n                    <button type=\"button\" class=\"btn btn-danger btn-round\"><i class=\"fa fa-heart\"></i> With Icon</button>\r\n                    <button type=\"button\" class=\"btn btn-danger btn-just-icon\"><i class=\"fa fa-heart\"></i></button>\r\n                    <button type=\"button\" class=\"btn btn-danger btn-link\">Simple</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"tim-title\">\r\n                <h3><small>Pick your size</small></h3>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-sm\">Small</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-danger\">Regular</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-lg\">Large</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"tim-title\">\r\n                <h3><small>Pick your color</small></h3>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <button type=\"button\" class=\"btn btn-outline-default btn-round\">Default</button><button type=\"button\" class=\"btn btn-outline-primary btn-round\">Primary</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-info btn-round\">Info</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-success btn-round\">Success</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-warning btn-round\">Warning</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-round\">Danger</button>\r\n                </div>\r\n            </div>\r\n            <br/>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <button type=\"button\" class=\"btn btn-default btn-round\">Default</button>\r\n                    <button type=\"button\" class=\"btn btn-primary btn-round\">Primary</button>\r\n                    <button type=\"button\" class=\"btn btn-info btn-round\">Info</button>\r\n                    <button type=\"button\" class=\"btn btn-success btn-round\">Success</button>\r\n                    <button type=\"button\" class=\"btn btn-warning btn-round\">Warning</button>\r\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Danger</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n            <br/>\r\n        <div class=\"tim-title\">\r\n            <h3>Links</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8\">\r\n                <a href=\"#0\" class=\"btn btn-link btn-default\">Default</a>\r\n                <a href=\"#0\" class=\"btn btn-link btn-primary\">Primary</a>\r\n                <a href=\"#0\" class=\"btn btn-link btn-success\">Success</a>\r\n                <a href=\"#0\" class=\"btn btn-link btn-info\">Info</a>\r\n                <a href=\"#0\" class=\"btn btn-link btn-warning\">Warning</a>\r\n                <a href=\"#0\" class=\"btn btn-link btn-danger\">Danger</a>\r\n                <a href=\"#0\" class=\"btn btn-link btn-neutral\">Neutral</a>\r\n            </div>\r\n        </div>\r\n        <br/>\r\n        <div class=\"tim-title\">\r\n            <h3>Inputs</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-3\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Default\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n                <div class=\"form-group has-success\">\r\n                    <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess1\" value=\"Success\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n                <div class=\"form-group has-danger\">\r\n                    <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputDanger1\" value=\"Error\">\r\n                    <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"basic-addon1\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\r\n                    <div class=\"input-group-append\">\r\n                      <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-group\" aria-hidden=\"true\"></i></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br/>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-6 col-lg-3\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Checkboxes</h3>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\r\n                    Unchecked\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\r\n                    Checked\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check disabled\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled=\"\">\r\n                    Disabled unchecked\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check disabled\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\" disabled=\"\">\r\n                    Disabled checked\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-3\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Radio Buttons</h3>\r\n                </div>\r\n                <div class=\"form-check-radio\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" >\r\n                    Radio is off\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check-radio\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\" checked=\"\">\r\n                    Radio is on\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check-radio disabled\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios3\" value=\"option3\" disabled=\"\">\r\n                    Disabled Radio is off\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n                <div class=\"form-check-radio disabled\">\r\n                  <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios4\" value=\"option3\" checked disabled=\"\">\r\n                    Disabled Radio is on\r\n                    <span class=\"form-check-sign\"></span>\r\n                  </label>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-3\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Toggle Buttons</h3>\r\n                </div>\r\n                <bSwitch\r\n                    [switch-on-color]=\"'primary'\">\r\n                </bSwitch>\r\n                <bSwitch\r\n                    [switch-on-color]=\"'primary'\"\r\n                    [(ngModel)]=\"state_default\"> Toggle is off\r\n                </bSwitch>\r\n            </div>\r\n            <div class=\"col-sm-6 col-lg-3\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Sliders</h3>\r\n                </div>\r\n                <nouislider [connect]=\"false\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"false\" class=\"slider\"></nouislider>\r\n                <br>\r\n                <nouislider class=\"slider slider-info\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"false\"></nouislider>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasicelementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicelementsComponent", function() { return BasicelementsComponent; });
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

var BasicelementsComponent = /** @class */ (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state_default = true;
    }
    BasicelementsComponent.prototype.ngOnInit = function () { };
    BasicelementsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basicelements',
            template: __webpack_require__(/*! ./basicelements.component.html */ "./src/app/components/basicelements/basicelements.component.html"),
            styles: [__webpack_require__(/*! ./basicelements.component.scss */ "./src/app/components/basicelements/basicelements.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicelementsComponent);
    return BasicelementsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.html":
/*!******************************************************!*\
  !*** ./src/app/components/components.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"page-header section-dark\" style=\"background-image: url('assets/img/background.jpg')\">\r\n        <div class=\"filter\"></div>\r\n        <div class=\"content-center\">\r\n            <div class=\"container\">\r\n                <div class=\"title-brand\">\r\n                    <h2 class=\"presentation-title\" style=\"margin-left: -15px;\">Pejuang Tech</h2>\r\n                    <h2 class=\"title\">Build Your Mobile and Web Application</h2>\r\n                    <div class=\"fog-low\">\r\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"fog-low right\">\r\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"moving-clouds\" style=\"background-image: url('assets/img/clouds.png'); \"></div>\r\n    </div>\r\n    <div class=\"main\">\r\n        <!-- <app-basicelements></app-basicelements>\r\n        <app-navigation></app-navigation> -->\r\n        <div class=\"section\">\r\n            <div class=\"container\">\r\n                <div class=\"title\" style=\"text-align: center;\">\r\n                    <h2><b>ABOUT</b></h2>\r\n                </div>\r\n                <p style=\"text-align: center;\">\r\n                    {{about.isi}}\r\n                </p>\r\n\r\n            </div>\r\n        </div>\r\n        <div class=\"section\">\r\n            <div class=\"container\">\r\n                <div class=\"title\" style=\"margin-bottom: 20px; text-align: center;\">\r\n                    <h2>OUR TEAM</h2>\r\n                    <br>\r\n                    <p></p>\r\n                </div>\r\n                <div class=\"row example-page\">\r\n                    <div class=\"col-md-6 text-center\" *ngFor=\"let item of dataTeam\">\r\n                        <div class=\"owner\">\r\n                            <div class=\"avatar\">\r\n                                <img src=\"{{images[item.images] == undefined ? 'https://images.expertmarket.co.uk/wp-content/uploads/sites/default/files/web-design/Computer%20Programmer.png':images[item.images]}}\"\r\n                                    alt=\"Circle Image\" class=\"img-circle  img-responsive\">\r\n                            </div>\r\n                            <div class=\"name\">\r\n                                <h4 class=\"title\">{{item.nama}}</h4>\r\n                                <h6 style=\"margin-top: -20px;\">{{item.skill}}</h6>\r\n                                <br>\r\n                                <p></p>\r\n                                <br>\r\n                                <p></p>\r\n                                <br>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- <div class=\"col-md-6 text-center\">\r\n                        <div class=\"owner\">\r\n                            <div class=\"avatar\">\r\n                                <img src=\"./assets/img/arvian.jpg\" alt=\"Circle Image\" class=\"img-circle img-responsive\">\r\n                            </div>\r\n                            <div class=\"name\">\r\n                                <h4 class=\"title\">Rivani Arvian P</h4>\r\n                                <h6 style=\"margin-top: -20px;\">Back End Developer</h6>\r\n                            </div>\r\n                        </div>\r\n                    </div> -->\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"section\" id=\"carousel\">\r\n            <div class=\"container\">\r\n                <div class=\"tim-title\" style=\"text-align: center;\">\r\n                    <h3>Customer Stories</h3>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8 mr-auto ml-auto\">\r\n                        <div class=\"card page-carousel\">\r\n                            <ngb-carousel>\r\n                                <ng-template ngbSlide *ngFor=\"let data of dataStories\">\r\n                                    <img src=\"{{data.image}}\" alt=\"Random first slide\">\r\n                                    <div class=\"carousel-caption\">\r\n                                        <p>{{data.name}}</p>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </ngb-carousel>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"section text-center\">\r\n            <div class=\"container\">\r\n                <h2>Project Work Processing</h2>\r\n                <br />\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"info\">\r\n                            <img src=\"assets/img/mail.svg\" width=\"60px\" height=\"60px\" />\r\n                            <div class=\"description\">\r\n                                <h4 class=\"info-title\">Contact Us</h4>\r\n                                <p class=\"description text-justify\">Anything about your needs and questions regarding\r\n                                    the\r\n                                    project\r\n                                    website and mobile application, please contact us using the following contact form.\r\n                                    Our marketing will answer your questions within a snap.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"info\">\r\n                            <img src=\"assets/img/negotiation.svg\" width=\"60px\" height=\"60px\" />\r\n                            <div class=\"description\">\r\n                                <h4 class=\"info-title\">Our Contract</h4>\r\n                                <p class=\"description text-justify\">To start a contract with our Team, please clarify\r\n                                    matters relating to technical issues first, development risks, processing time and\r\n                                    especially the costs required.</p>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"info\">\r\n                            <img src=\"assets/img/app.svg\" width=\"60px\" height=\"60px\" />\r\n                            <div class=\"description\">\r\n                                <h4 class=\"info-title\">Basic Specification</h4>\r\n                                <p class=\"description text-justify\">Before the development process begins, we will\r\n                                    determine the basic specifications and designs first. These two parts are then shown\r\n                                    to the client, and we will begin to build after getting approval.</p>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"info\">\r\n                            <img src=\"assets/img/app-development.svg\" width=\"60px\" height=\"60px\" />\r\n                            <div class=\"description\">\r\n                                <h4 class=\"info-title\">UI/Ux Design</h4>\r\n                                <p class=\"description text-justify\">To map out a quality UI / UX design as your desire,\r\n                                    our team designers will make a design\r\n                                    according to the basic needs while considering to the client's desires to create a\r\n                                    good design and easy to use by end users.\r\n                                </p>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" style=\"margin-top: 60px;\">\r\n                    <div class=\"col\"></div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"info\">\r\n                            <img src=\"assets/img/seo-and-web.svg\" width=\"60px\" height=\"60px\" />\r\n                            <div class=\"description\">\r\n                                <h4 class=\"info-title\">Development</h4>\r\n                                <p class=\"description text-justify\">documentation in the application. The coding /\r\n                                    development stage by the programmer will be carried out based on the detailed design\r\n                                    made by our team.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"info\">\r\n                            <img src=\"assets/img/speed.svg\" width=\"60px\" height=\"60px\" />\r\n                            <div class=\"description\">\r\n                                <h4 class=\"info-title\">Testing App</h4>\r\n                                <p class=\"description text-justify\">After the Mobile application or website have been\r\n                                    completed, it followed by a trial session which consists of examining bugs, display\r\n                                    compatibility, page transitions and others.</p>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3\">\r\n                        <div class=\"info\">\r\n                            <img src=\"assets/img/globe.svg\" width=\"60px\" height=\"60px\" />\r\n                            <div class=\"description\">\r\n                                <h4 class=\"info-title\">Publication Phase</h4>\r\n                                <p class=\"description text-justify\">Applications nor websites that have pass through the\r\n                                    trial process, will be published after. The application is uploaded to Google Play /\r\n                                    Appstore and the website is uploaded to the server after the domain is set.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\"></div>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"section section-dark\">\r\n            <div class=\"container\">\r\n                <h2 class=\"title text-center\">Portofolio</h2>\r\n                <div class=\"row example-page\">\r\n                    <div class=\"col-md-6 text-center\" routerLinkActive=\"active\" *ngFor=\"let data of dataPortofolios\">\r\n                        <a [routerLink]=\"['/portofolio', data.id]\">\r\n                            <img src=\"{{data.cover == undefined ? 'https://images.expertmarket.co.uk/wp-content/uploads/sites/default/files/web-design/Computer%20Programmer.png':data.cover}}\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\"\r\n                                style=\"width: 100%\">\r\n                            <a [routerLink]=\"['/portofolio', data.id]\" class=\"btn btn-outline-neutral btn-round\">{{data.name}}</a>\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"section landing-section\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-8 mr-auto ml-auto\">\r\n                        <h2 class=\"text-center\">Send Your Story About PejuangTech</h2>\r\n                        <form class=\"contact-form\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-6\">\r\n                                    <label>Name</label>\r\n                                    <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span class=\"input-group-text\"><i class=\"nc-icon nc-single-02\"></i></span>\r\n                                        </div>\r\n                                        <input type=\"text\" [(ngModel)]=\"data.name\" name=\"name\" class=\"form-control\"\r\n                                            placeholder=\"Name\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-6\">\r\n                                    <label>Email</label>\r\n                                    <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span class=\"input-group-text\"> <i class=\"nc-icon nc-email-85\"></i></span>\r\n                                        </div>\r\n                                        <input type=\"text\" [(ngModel)]=\"data.email\" name=\"email\" class=\"form-control\"\r\n                                            placeholder=\"Email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <label>Message</label>\r\n                            <textarea [(ngModel)]=\"data.message\" name=\"message\" class=\"form-control\" rows=\"4\"\r\n                                placeholder=\"Tell us your thoughts and feelings...\"></textarea>\r\n\r\n                            <div class=\"input-group mb-3\">\r\n                                <div class=\"custom-file\">\r\n                                    <input [(ngModel)]=\"data.image\" name=\"image\" (change)=\"onFileSelected($event)\"\r\n                                        accept=\".png,.jpg\"\r\n                                        [disabled]=\"data.name == null || data.email == null || data.message == null\"\r\n                                        type=\"file\" class=\"custom-file-input\" id=\"inputGroupFile02\">\r\n                                    <label class=\"custom-file-label\" for=\"inputGroupFile02\">Choose file</label>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"image-preview mb-3\" *ngIf=\"previewUrl\">\r\n                                <img [src]=\"previewUrl\" height=\"300\" />\r\n                            </div>\r\n\r\n                            <div class=\"progress\" *ngIf=\"uploadProgress\">\r\n                                <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 100%;\" aria-valuenow=\"0\"\r\n                                    aria-valuemin=\"0\" aria-valuemax=\"100\">{{uploadProgress | async}}%</div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-4 mr-auto ml-auto\">\r\n                                    <button class=\"btn btn-danger btn-lg btn-fill\" (click)=\"sendStories()\"\r\n                                        [disabled]=\"loading || image == null\">{{loading ? 'Sending..':'Send Story'}}</button>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section section-dark\">\r\n        <div class=\"container\">\r\n            <h3 class=\"title\">Contact</h3>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8\">\r\n                    <i class=\"nc-icon nc-email-85\" style=\"color: white;\"></i>\r\n                    <p style=\"color: white;\">pejuangtech.official@gmail.com</p>\r\n                    <i class=\"nc-icon nc-chat-33\" style=\"color: white;\"></i>\r\n                    <p style=\"color: white;\">+62 812-2930-4140</p>\r\n                    <p style=\"color: white;\">+62 823-1603-5745</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../upload.service */ "./src/app/upload.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(modalService, renderer, fsAuth, db, storage, router, upSvc) {
        this.modalService = modalService;
        this.renderer = renderer;
        this.fsAuth = fsAuth;
        this.db = db;
        this.storage = storage;
        this.router = router;
        this.upSvc = upSvc;
        this.page = 4;
        this.page1 = 5;
        this.data = {};
        this.about = [];
        this.dataTeam = [];
        this.images = {};
        //unggah gambar
        // uploadImage() {
        //     var doc = new Date().getTime() + '' + Math.floor(Math.random() * 10000);
        //     this.idStories = doc;
        //     var path = this.idStories + '/stories.png';
        //     this.data.rasio = 1
        //     this.data.path = path
        //     console.log(this.data);
        //     const modalRef = this.modalService.open(ImageUploaderComponent);
        //     modalRef.componentInstance.data = this.data;
        //     modalRef.result.then(res => {
        //         if (res) {
        //             this.db.collection('stories').doc(this.idStories).update({ image: path }).then(res => {
        //             return;
        //             })
        //         }
        //         this.sendStories();
        //     }, dismiss => {
        //     console.log("Cross Button", dismiss)
        //     })
        // }
        this.selectedFile = null;
        this.uploadProgress = null;
        this.previewUrl = null;
        this.fileData = null;
        this.verified = false;
        this.getStories();
        this.getPortofolios();
        this.getAbout();
        this.getTeams();
        this.timestamp = firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.serverTimestamp();
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var input_group_focus = document.getElementsByClassName('form-control');
        var input_group = document.getElementsByClassName('input-group');
        var _loop_1 = function (i) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        };
        for (var i = 0; i < input_group.length; i++) {
            _loop_1(i);
        }
    };
    ComponentsComponent.prototype.getAbout = function () {
        var _this = this;
        this.db.collection('settings').doc('about').collection('data').doc('about').valueChanges().subscribe(function (res) {
            _this.about = res;
        });
    };
    ComponentsComponent.prototype.getTeams = function () {
        var _this = this;
        this.db.collection('settings').doc('teams').collection('dataTeam').valueChanges().subscribe(function (res) {
            _this.dataTeam = res;
            _this.parseData(res);
        });
    };
    ComponentsComponent.prototype.parseData = function (res) {
        var dataTeam = res;
        var obj = Object.keys(dataTeam);
        for (var i = 0; i < obj.length; i++) {
            this.getImage(dataTeam[obj[i]].images);
        }
    };
    ComponentsComponent.prototype.getImage = function (ref) {
        var _this = this;
        if (this.images[ref] == undefined) {
            this.storage.storage.ref(ref).getDownloadURL().then(function (url) {
                _this.images[ref] = url;
            });
        }
    };
    ComponentsComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        var n = Date.now();
        var doc = new Date().getTime() + '' + Math.floor(Math.random() * 10000);
        this.idStories = doc;
        var file = event.target.files[0];
        var filePath = this.idStories + "/" + n;
        var fileRef = this.storage.ref(filePath);
        this.fileData = event.target.files[0];
        this.preview();
        var randomId = Math.random().toString(36).substring(2);
        this.ref = this.storage.ref(randomId);
        this.task = this.ref.put(event.target.files[0]);
        this.uploadProgress = this.task.percentageChanges();
        var task = this.storage.upload(this.idStories + "/" + n, file);
        task
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
            _this.downloadURL = fileRef.getDownloadURL();
            _this.downloadURL.subscribe(function (url) {
                if (url) {
                    _this.fb = url;
                    _this.image = url;
                }
                console.log(_this.fb);
            });
        }))
            .subscribe(function (url) {
            if (url) {
                console.log(url);
            }
        });
    };
    ComponentsComponent.prototype.preview = function () {
        var _this = this;
        // Show preview 
        var mimeType = this.fileData.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(this.fileData);
        reader.onload = function (_event) {
            _this.previewUrl = reader.result;
        };
    };
    ComponentsComponent.prototype.sendStories = function () {
        var _this = this;
        this.loading = true;
        var dt = {
            id: this.idStories,
            name: this.data.name,
            email: this.data.email,
            message: this.data.message,
            image: this.image,
            verified: this.verified,
            datetime: this.timestamp
        };
        this.db.collection('stories').doc(this.idStories).set(dt).then(function (res) {
            _this.loading = false;
            alert('Story sent successfully');
            window.location.reload();
        });
    };
    ComponentsComponent.prototype.getStories = function () {
        var _this = this;
        this.db.collection('stories', function (ref) {
            return ref.where('verified', '==', true);
        }).valueChanges({ idField: 'id' }).subscribe(function (res) {
            _this.dataStories = res;
        });
    };
    ComponentsComponent.prototype.getPortofolios = function () {
        var _this = this;
        this.db.collection('portofolios').valueChanges({ idField: 'id' }).subscribe(function (res) {
            _this.dataPortofolios = res;
        });
    };
    ComponentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-components',
            template: __webpack_require__(/*! ./components.component.html */ "./src/app/components/components.component.html"),
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./basicelements/basicelements.component */ "./src/app/components/basicelements/basicelements.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
/* harmony import */ var _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/components/notification/notification.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/components/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"]
            ],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_11__["ComponentsComponent"],
                _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_7__["BasicelementsComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_9__["TypographyComponent"],
                _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_10__["NucleoiconsComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_12__["NotificationComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["NgbdModalComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["NgbdModalContent"]
            ],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_13__["NgbdModalContent"]],
            exports: [_components_component__WEBPACK_IMPORTED_MODULE_11__["ComponentsComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/modal/modal.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>You can pass an existing component as content of the modal window. In this case remember to add content component\r\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\r\n\r\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\r\n"

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalContent, NgbdModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalContent", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalComponent", function() { return NgbdModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalContent = /** @class */ (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NgbdModalContent.prototype, "name", void 0);
    NgbdModalContent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-content',
            template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"]])
    ], NgbdModalContent);
    return NgbdModalContent;
}());

var NgbdModalComponent = /** @class */ (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    NgbdModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-component',
            template: __webpack_require__(/*! ./modal.component.html */ "./src/app/components/modal/modal.component.html")
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])
    ], NgbdModalComponent);
    return NgbdModalComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-navbars\">\r\n    <div class=\"container\" id=\"menu-dropdown\">\r\n        <div class=\"tim-title\">\r\n            <h3>Menu</h3>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n                    <div class=\"container\">\r\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\r\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-icon\"></span>\r\n                            <span class=\"navbar-toggler-icon\"></span>\r\n                            <span class=\"navbar-toggler-icon\"></span>\r\n                        </button>\r\n                        <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\r\n                            <ul class=\"navbar-nav\">\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <div ngbDropdown class=\"d-inline-block dropdown\">\r\n                                        <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</a>\r\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\r\n                                            <a class=\"dropdown-item\">Action - 1</a>\r\n                                            <a class=\"dropdown-item\">Another Action</a>\r\n                                            <a class=\"dropdown-item\">Something else is here</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </nav>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <nav class=\"navbar navbar-expand-lg bg-danger\">\r\n                    <div class=\"container\">\r\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\r\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu-icon\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-icon\"></span>\r\n                            <span class=\"navbar-toggler-icon\"></span>\r\n                            <span class=\"navbar-toggler-icon\"></span>\r\n                        </button>\r\n                        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbar-menu-icon\">\r\n                            <ul class=\"navbar-nav\">\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-email-85\" aria-hidden=\"true\"></i></a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i></a>\r\n                                </li>\r\n                                <li class=\"nav-item \">\r\n                                    <div ngbDropdown class=\"dropdown\" placement=\"bottom-left\">\r\n                                    <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\r\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-danger dropdown-menu-right\">\r\n                                            <a class=\"dropdown-item\">Action - 1</a>\r\n                                            <a class=\"dropdown-item\">Another Action</a>\r\n                                            <a class=\"dropdown-item\">Something else is here</a>\r\n                                            <div class=\"dropdown-divider\"></div>\r\n                                            <a class=\"dropdown-item\">Separated link</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div id=\"navbar\">\r\n        <div class=\"container\">\r\n            <div class=\"tim-title\">\r\n                <h3>Navigation</h3>\r\n                <br/>\r\n            </div>\r\n        </div>\r\n        <div class=\"navigation-example\">\r\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n                <div class=\"container\">\r\n                    <a class=\"navbar-brand\" href=\"#\">Primary Color</a>\r\n                    <button class=\"navbar-toggler navbar-toggler-right burger-menu\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                    </button>\r\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i>&nbsp;Discover</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i>&nbsp;Profile</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i>&nbsp;Settings</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nav class=\"navbar navbar-expand-lg bg-info\">\r\n                <div class=\"container\">\r\n                    <a class=\"navbar-brand\" href=\"#\">Info Color</a>\r\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                    </button>\r\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\">Discover</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\">Profile</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\">Settings</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nav class=\"navbar navbar-expand-lg bg-success\">\r\n                <div class=\"container\">\r\n                    <a class=\"navbar-brand\" href=\"#\">Success Color</a>\r\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                    </button>\r\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i></a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i> </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\r\n                <div class=\"container\">\r\n                    <a class=\"navbar-brand\" href=\"#\">Warning Color</a>\r\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                    </button>\r\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i></a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\r\n                <div class=\"container\">\r\n                    <a class=\"navbar-brand\" href=\"#\">Danger Color</a>\r\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                    </button>\r\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Share</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Tweet</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i> Pin</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\r\n                <div class=\"container\">\r\n                    <a class=\"navbar-brand\" href=\"#\">Transparent</a>\r\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-transparent\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                        <span class=\"navbar-toggler-bar\"></span>\r\n                    </button>\r\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-transparent\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Facebook</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Twitter</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i> Instagram</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
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

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/notification/notification.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngFor=\"let alert of alerts\">\r\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\">\r\n        <div class=\"container\">\r\n            <ng-container *ngIf=\"alert.icon\">\r\n                <i class=\"nc-icon {{alert.icon}}\"></i>\r\n            </ng-container>\r\n\r\n            {{ alert.message }}\r\n            <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\r\n                <i class=\"nc-icon nc-simple-remove\"></i>\r\n            </button>\r\n        </div>\r\n    </ngb-alert>\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/notification/notification.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notification/notification.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
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

var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
            icon: 'nc-bell-55'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
            icon: 'nc-bell-55'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NotificationComponent.prototype, "alerts", void 0);
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/components/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/components/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n    <h1>Paper Kit 2 Icons</h1>\r\n    <p>Built with <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a></p>\r\n</header>\r\n\r\n<div id=\"icons-wrapper\">\r\n    <section>\r\n        <ul>\r\n            <li>\r\n                <i class=\"nc-icon nc-air-baloon\"></i>\r\n                <p>nc-air-baloon</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-album-2\"></i>\r\n                <p>nc-album-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-alert-circle-i\"></i>\r\n                <p>nc-alert-circle-i</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-align-center\"></i>\r\n                <p>nc-align-center</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-align-left-2\"></i>\r\n                <p>nc-align-left-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-ambulance\"></i>\r\n                <p>nc-ambulance</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-app\"></i>\r\n                <p>nc-app</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-atom\"></i>\r\n                <p>nc-atom</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-badge\"></i>\r\n                <p>nc-badge</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bag-16\"></i>\r\n                <p>nc-bag-16</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bank\"></i>\r\n                <p>nc-bank</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-basket\"></i>\r\n                <p>nc-basket</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bell-55\"></i>\r\n                <p>nc-bell-55</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bold\"></i>\r\n                <p>nc-bold</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-book-bookmark\"></i>\r\n                <p>nc-book-bookmark</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bookmark-2\"></i>\r\n                <p>nc-bookmark-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-box-2\"></i>\r\n                <p>nc-box-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-box\"></i>\r\n                <p>nc-box</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-briefcase-24\"></i>\r\n                <p>nc-briefcase-24</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bulb-63\"></i>\r\n                <p>nc-bulb-63</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bullet-list-67\"></i>\r\n                <p>nc-bullet-list-67</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-bus-front-12\"></i>\r\n                <p>nc-bus-front-12</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-button-pause\"></i>\r\n                <p>nc-button-pause</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-button-play\"></i>\r\n                <p>nc-button-play</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-button-power\"></i>\r\n                <p>nc-button-power</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-calendar-60\"></i>\r\n                <p>nc-calendar-60</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-camera-compact\"></i>\r\n                <p>nc-camera-compact</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-caps-small\"></i>\r\n                <p>nc-caps-small</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-cart-simple\"></i>\r\n                <p>nc-cart-simple</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-chart-bar-32\"></i>\r\n                <p>nc-chart-bar-32</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-chart-pie-36\"></i>\r\n                <p>nc-chart-pie-36</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-chat-33\"></i>\r\n                <p>nc-chat-33</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-check-2\"></i>\r\n                <p>nc-check-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-circle-10\"></i>\r\n                <p>nc-circle-10</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-cloud-download-93\"></i>\r\n                <p>nc-cloud-download-93</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-cloud-upload-94\"></i>\r\n                <p>nc-cloud-upload-94</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-compass-05\"></i>\r\n                <p>nc-compass-05</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-controller-modern\"></i>\r\n                <p>nc-controller-modern</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-credit-card\"></i>\r\n                <p>nc-credit-card</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-delivery-fast\"></i>\r\n                <p>nc-delivery-fast</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-diamond\"></i>\r\n                <p>nc-diamond</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-email-85\"></i>\r\n                <p>nc-email-85</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-favourite-28\"></i>\r\n                <p>nc-favourite-28</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-glasses-2\"></i>\r\n                <p>nc-glasses-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-globe-2\"></i>\r\n                <p>nc-globe-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-globe\"></i>\r\n                <p>nc-globe</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-hat-3\"></i>\r\n                <p>nc-hat-3</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-headphones\"></i>\r\n                <p>nc-headphones</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-html5\"></i>\r\n                <p>nc-html5</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-image\"></i>\r\n                <p>nc-image</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-istanbul\"></i>\r\n                <p>nc-istanbul</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-key-25\"></i>\r\n                <p>nc-key-25</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-laptop\"></i>\r\n                <p>nc-laptop</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-layout-11\"></i>\r\n                <p>nc-layout-11</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-lock-circle-open\"></i>\r\n                <p>nc-lock-circle-open</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-map-big\"></i>\r\n                <p>nc-map-big</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-minimal-down\"></i>\r\n                <p>nc-minimal-down</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-minimal-left\"></i>\r\n                <p>nc-minimal-left</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-minimal-right\"></i>\r\n                <p>nc-minimal-right</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-minimal-up\"></i>\r\n                <p>nc-minimal-up</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-mobile\"></i>\r\n                <p>nc-mobile</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-money-coins\"></i>\r\n                <p>nc-money-coins</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-note-03\"></i>\r\n                <p>nc-note-03</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-palette\"></i>\r\n                <p>nc-palette</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-paper\"></i>\r\n                <p>nc-paper</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-pin-3\"></i>\r\n                <p>nc-pin-3</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-planet\"></i>\r\n                <p>nc-planet</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-refresh-69\"></i>\r\n                <p>nc-refresh-69</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-ruler-pencil\"></i>\r\n                <p>nc-ruler-pencil</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-satisfied\"></i>\r\n                <p>nc-satisfied</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-scissors\"></i>\r\n                <p>nc-scissors</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-send\"></i>\r\n                <p>nc-send</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-settings-gear-65\"></i>\r\n                <p>nc-settings-gear-65</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-settings\"></i>\r\n                <p>nc-settings</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-share-66\"></i>\r\n                <p>nc-share-66</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-shop\"></i>\r\n                <p>nc-shop</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-simple-add\"></i>\r\n                <p>nc-simple-add</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-simple-delete\"></i>\r\n                <p>nc-simple-delete</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-simple-remove\"></i>\r\n                <p>nc-simple-remove</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-single-02\"></i>\r\n                <p>nc-single-02</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-single-copy-04\"></i>\r\n                <p>nc-single-copy-04</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-sound-wave\"></i>\r\n                <p>nc-sound-wave</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-spaceship\"></i>\r\n                <p>nc-spaceship</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-sun-fog-29\"></i>\r\n                <p>nc-sun-fog-29</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-support-17\"></i>\r\n                <p>nc-support-17</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-tablet-2\"></i>\r\n                <p>nc-tablet-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-tag-content\"></i>\r\n                <p>nc-tag-content</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-tap-01\"></i>\r\n                <p>nc-tap-01</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-tie-bow\"></i>\r\n                <p>nc-tie-bow</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-tile-56\"></i>\r\n                <p>nc-tile-56</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-time-alarm\"></i>\r\n                <p>nc-time-alarm</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-touch-id\"></i>\r\n                <p>nc-touch-id</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-trophy\"></i>\r\n                <p>nc-trophy</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-tv-2\"></i>\r\n                <p>nc-tv-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-umbrella-13\"></i>\r\n                <p>nc-umbrella-13</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-user-run\"></i>\r\n                <p>nc-user-run</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-vector\"></i>\r\n                <p>nc-vector</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-watch-time\"></i>\r\n                <p>nc-watch-time</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-world-2\"></i>\r\n                <p>nc-world-2</p>\r\n            </li>\r\n\r\n            <li>\r\n                <i class=\"nc-icon nc-zoom-split\"></i>\r\n                <p>nc-zoom-split</p>\r\n            </li>\r\n            <!-- list of icons here with the proper class-->\r\n        </ul>\r\n    </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.ts ***!
  \*****************************************************************/
/*! exports provided: NucleoiconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoiconsComponent", function() { return NucleoiconsComponent; });
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

var NucleoiconsComponent = /** @class */ (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('app-nucleoicons')[0];
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.add('navbar-hidden');
        body.classList.add('demo-icons');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-hidden');
    };
    NucleoiconsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nucleoicons',
            template: __webpack_require__(/*! ./nucleoicons.component.html */ "./src/app/components/nucleoicons/nucleoicons.component.html"),
            styles: [__webpack_require__(/*! ./nucleoicons.component.scss */ "./src/app/components/nucleoicons/nucleoicons.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NucleoiconsComponent);
    return NucleoiconsComponent;
}());



/***/ }),

/***/ "./src/app/components/portofolio/portofolio.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/portofolio/portofolio.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" [style.background-image]=\"getBackground(dataPortofolios?.cover)\">\n  <div class=\"filter\"></div>\n  <div class=\"container\">\n  </div>\n</div>\n<div class=\"main\">\n  <div class=\"section text-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mr-auto ml-auto\">\n          <h2 class=\"title\">{{dataPortofolios?.name}} Description</h2>\n          <h5 class=\"description\">{{dataPortofolios?.description}}.</h5>\n          <br>\n        </div>\n      </div>\n      <br />\n      <h2>Features</h2>\n      <br />\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <div class=\"info\">\n            <div class=\"icon icon-danger\">\n              <i class=\"nc-icon nc-album-2\"></i>\n            </div>\n            <div class=\"description\">\n              <p class=\"description\">{{dataPortofolios?.desc_feature1}}.</p>\n\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"info\">\n            <div class=\"icon icon-danger\">\n              <i class=\"nc-icon nc-bulb-63\"></i>\n            </div>\n            <div class=\"description\">\n              <p>{{dataPortofolios?.desc_feature2}}.</p>\n\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"info\">\n            <div class=\"icon icon-danger\">\n              <i class=\"nc-icon nc-chart-bar-32\"></i>\n            </div>\n            <div class=\"description\">\n              <p>{{dataPortofolios?.desc_feature3}}.</p>\n\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-3\">\n          <div class=\"info\">\n            <div class=\"icon icon-danger\">\n              <i class=\"nc-icon nc-sun-fog-29\"></i>\n            </div>\n            <div class=\"description\">\n              <p>{{dataPortofolios?.desc_feature4}}.</p>\n\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"section\">\n    <div class=\"page-header\" [style.background-image]=\"getBackground(dataPortofolios?.banner)\">\n    </div>\n  </div>\n\n  <!-- <div class=\"section landing-section\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mr-auto ml-auto\">\n          <h2 class=\"text-center\">Need Successful Project ?</h2>\n          <form class=\"contact-form\">\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <label>Name</label>\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"nc-icon nc-single-02\"></i></span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Name\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <label>Email</label>\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"> <i class=\"nc-icon nc-email-85\"></i></span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus1=true\"\n                    (blur)=\"focus1=false\">\n                </div>\n              </div>\n            </div>\n            <label>Message</label>\n            <textarea class=\"form-control\" rows=\"4\" placeholder=\"Tell us your thoughts and feelings...\"></textarea>\n            <div class=\"row\">\n              <div class=\"col-md-4 mr-auto ml-auto\">\n                <button class=\"btn btn-danger btn-lg btn-fill\">Send Message</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div> -->\n</div>"

/***/ }),

/***/ "./src/app/components/portofolio/portofolio.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/portofolio/portofolio.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/portofolio/portofolio.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/portofolio/portofolio.component.ts ***!
  \***************************************************************/
/*! exports provided: PortofolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortofolioComponent", function() { return PortofolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PortofolioComponent = /** @class */ (function () {
    function PortofolioComponent(fsAuth, db, storage, actRoute, _sanitizer) {
        this.fsAuth = fsAuth;
        this.db = db;
        this.storage = storage;
        this.actRoute = actRoute;
        this._sanitizer = _sanitizer;
        this.id_portofolio = this.actRoute.snapshot.params.id;
        this.getPortofolios(this.id_portofolio);
    }
    PortofolioComponent.prototype.ngOnInit = function () {
    };
    PortofolioComponent.prototype.getPortofolios = function (id_portofolio) {
        var _this = this;
        this.db.collection('portofolios').doc(id_portofolio).valueChanges().subscribe(function (res) {
            _this.dataPortofolios = res;
        });
    };
    PortofolioComponent.prototype.getBackground = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle("linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(" + image + ")");
    };
    PortofolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portofolio',
            template: __webpack_require__(/*! ./portofolio.component.html */ "./src/app/components/portofolio/portofolio.component.html"),
            styles: [__webpack_require__(/*! ./portofolio.component.scss */ "./src/app/components/portofolio/portofolio.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"]])
    ], PortofolioComponent);
    return PortofolioComponent;
}());



/***/ }),

/***/ "./src/app/components/typography/typography.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n    <div class=\"container tim-container\">\r\n        <div class=\"tim-title\">\r\n            <h3>Typography</h3>\r\n            <br/>\r\n        </div>\r\n        <div id=\"typography\">\r\n            <div class=\"row\">\r\n                <div class=\"typography-line\">\r\n                    <h1>\r\n                        <span class=\"note\">Header 1</span> Thinking in textures\r\n                    </h1>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <h2>\r\n                        <span class=\"note\">Header 2</span> Thinking in textures\r\n                    </h2>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <h3>\r\n                        <span class=\"note\">Header 3</span> Thinking in textures\r\n                    </h3>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <h4>\r\n                        <span class=\"note\">Header 4</span> Thinking in textures\r\n                    </h4>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <h5>\r\n                        <span class=\"note\">Header 5</span> Thinking in textures\r\n                    </h5>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <h6>\r\n                        <span class=\"note\">Header 6</span> Thinking in textures\r\n                    </h6>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <p>\r\n                        <span class=\"note\">Paragraph</span> Thinking in textures\r\n                    </p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <span class=\"note\">Quote</span>\r\n                    <blockquote class=\"blockquote\">\r\n                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\r\n                        <footer class=\"blockquote-footer\">Someone famous in <cite title=\"source Title\">Source Title</cite></footer>\r\n                    </blockquote>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <span class=\"note\">Muted text</span>\r\n                    <p class=\"text-muted\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <span class=\"note\">Primary text</span>\r\n                    <p class=\"text-primary\">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <span class=\"note\">Success text</span>\r\n                    <p class=\"text-success\">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <span class=\"note\">Info text</span>\r\n                    <p class=\"text-info\">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <span class=\"note\">Warning text</span>\r\n                    <p class=\"text-warning\">Etiam porta sem malesuada magna mollis euismod.</p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <span class=\"note\">Danger text</span>\r\n                    <p class=\"text-danger\">Donec ullamcorper nulla non metus auctor fringilla.</p>\r\n                </div>\r\n                <div class=\"typography-line\">\r\n                    <h2><span class=\"note\">Small tag</span>Header with small subtitle\r\n                        <br/>\r\n                        <small>\".small\" is a tag for the headers</small>\r\n                    </h2>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <br/>\r\n        <div id=\"images\">\r\n            <div class=\"container\">\r\n                <div class=\"tim-title\">\r\n                    <h3>Images</h3>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-xs-8 col-sm-6 col-md-3\">\r\n                        <h4 class=\"images-title\">Rounded Image</h4>\r\n                        <img src=\"assets/img/uriel-soberanes.jpg\" class=\"img-rounded img-responsive\" alt=\"Rounded Image\">\r\n                        <div class=\"img-details\">\r\n                            <div class=\"author\">\r\n                                <img src=\"assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\r\n                            </div>\r\n                            <p>Chet Faker</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\r\n                        <h4 class=\"images-title\">Circle Image</h4>\r\n                        <img src=\"assets/img/faces/joe-gardner-2.jpg\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\">\r\n                        <p class=\"text-center\">Joe Gardner</p>\r\n                    </div>\r\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\r\n                        <h4 class=\"images-title\">Thumbnail</h4>\r\n                        <img src=\"assets/img/faces/clem-onojeghuo-3.jpg\" class=\"img-thumbnail img-responsive\" alt=\"Rounded Image\">\r\n                        <p class=\"text-center\">Erik Faker</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/typography/typography.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/typography/typography.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
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

var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__(/*! ./typography.component.html */ "./src/app/components/typography/typography.component.html"),
            styles: [__webpack_require__(/*! ./typography.component.scss */ "./src/app/components/typography/typography.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/examples/examples.module.ts":
/*!*********************************************!*\
  !*** ./src/app/examples/examples.module.ts ***!
  \*********************************************/
/*! exports provided: ExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/examples/landing/landing.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/examples/profile/profile.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/examples/signup/signup.component.ts");
/* harmony import */ var _portofolio_portofolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./portofolio/portofolio.component */ "./src/app/examples/portofolio/portofolio.component.ts");
/* harmony import */ var _order_now_order_now_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./order-now/order-now.component */ "./src/app/examples/order-now/order-now.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    ExamplesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            ],
            declarations: [
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                _portofolio_portofolio_component__WEBPACK_IMPORTED_MODULE_7__["PortofolioComponent"],
                _order_now_order_now_component__WEBPACK_IMPORTED_MODULE_8__["OrderNowComponent"]
            ]
        })
    ], ExamplesModule);
    return ExamplesModule;
}());



/***/ }),

/***/ "./src/app/examples/landing/landing.component.html":
/*!*********************************************************!*\
  !*** ./src/app/examples/landing/landing.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('./assets/img/daniel-olahh.jpg');\">\r\n    <div class=\"filter\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"motto text-center\">\r\n            <h1>Example page</h1>\r\n            <h3>Start designing your landing page here.</h3>\r\n            <br />\r\n            <a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" class=\"btn btn-outline-neutral btn-round\"><i class=\"fa fa-play\"></i>Watch video</a>\r\n            <button type=\"button\" class=\"btn btn-outline-neutral btn-round\">Download</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"main\">\r\n    <div class=\"section text-center\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 mr-auto ml-auto\">\r\n                <h2 class=\"title\">Let's talk product</h2>\r\n                <h5 class=\"description\">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>\r\n                <br>\r\n                <a href=\"#paper-kit\" class=\"btn btn-danger btn-round\">See Details</a>\r\n            </div>\r\n        </div>\r\n        <br/><br/>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <div class=\"info\">\r\n                    <div class=\"icon icon-danger\">\r\n                        <i class=\"nc-icon nc-album-2\"></i>\r\n                    </div>\r\n                    <div class=\"description\">\r\n                        <h4 class=\"info-title\">Beautiful Gallery</h4>\r\n                        <p class=\"description\">Spend your time generating new ideas. You don't have to think of implementing.</p>\r\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"info\">\r\n                    <div class=\"icon icon-danger\">\r\n                        <i class=\"nc-icon nc-bulb-63\"></i>\r\n                    </div>\r\n                    <div class=\"description\">\r\n                        <h4 class=\"info-title\">New Ideas</h4>\r\n                        <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>\r\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"info\">\r\n                    <div class=\"icon icon-danger\">\r\n                        <i class=\"nc-icon nc-chart-bar-32\"></i>\r\n                    </div>\r\n                    <div class=\"description\">\r\n                        <h4 class=\"info-title\">Statistics</h4>\r\n                        <p>Choose from a veriety of many colors resembling sugar paper pastels.</p>\r\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"info\">\r\n                    <div class=\"icon icon-danger\">\r\n                        <i class=\"nc-icon nc-sun-fog-29\"></i>\r\n                    </div>\r\n                    <div class=\"description\">\r\n                        <h4 class=\"info-title\">Delightful design</h4>\r\n                        <p>Find unique and handmade delightful designs related items directly from our sellers.</p>\r\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"section section-dark text-center\">\r\n    <div class=\"container\">\r\n        <h2 class=\"title\">Let's talk about us</h2>\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card card-profile card-plain\">\r\n                    <div class=\"card-avatar\">\r\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/clem-onojeghuo-3.jpg\" alt=\"...\"></a>\r\n                    </div>\r\n                    <div class=\"card-block\">\r\n                        <a href=\"#paper-kit\">\r\n                            <div class=\"author\">\r\n                                <h4 class=\"card-title\">Henry Ford</h4>\r\n                                <h6 class=\"card-category\">Product Manager</h6>\r\n                            </div>\r\n                        </a>\r\n                        <p class=\"card-description text-center\">\r\n                        Teamwork is so important that it is virtually impossible for you to reach the heights of your capabilities or make the money that you want without becoming very good at it.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"card-footer text-center\">\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card card-profile card-plain\">\r\n                    <div class=\"card-avatar\">\r\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"...\"></a>\r\n                    </div>\r\n                    <div class=\"card-block\">\r\n                        <a href=\"#paper-kit\">\r\n                            <div class=\"author\">\r\n                                <h4 class=\"card-title\">Sophie West</h4>\r\n                                <h6 class=\"card-category\">Designer</h6>\r\n                            </div>\r\n                        </a>\r\n                        <p class=\"card-description text-center\">\r\n                        A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others. No one can whistle a symphony. It takes an orchestra to play it.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"card-footer text-center\">\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"col-md-4\">\r\n                <div class=\"card card-profile card-plain\">\r\n                    <div class=\"card-avatar\">\r\n                        <a href=\"#avatar\"><img src=\"./assets/img/faces/erik-lucatero-2.jpg\" alt=\"...\"></a>\r\n                    </div>\r\n                    <div class=\"card-block\">\r\n                        <a href=\"#paper-kit\">\r\n                            <div class=\"author\">\r\n                                <h4 class=\"card-title\">Robert Orben</h4>\r\n                                <h6 class=\"card-category\">Developer</h6>\r\n                            </div>\r\n                        </a>\r\n                        <p class=\"card-description text-center\">\r\n                        The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"card-footer text-center\">\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\r\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n    <div class=\"section landing-section\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 mr-auto ml-auto\">\r\n                    <h2 class=\"text-center\">Keep in touch?</h2>\r\n                    <form class=\"contact-form\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <label>Name</label>\r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                      <span class=\"input-group-text\"><i class=\"nc-icon nc-single-02\"></i></span>\r\n                                    </div>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <label>Email</label>\r\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                                    <div class=\"input-group-prepend\">\r\n                                      <span class=\"input-group-text\">  <i class=\"nc-icon nc-email-85\"></i></span>\r\n                                    </div>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <label>Message</label>\r\n                        <textarea class=\"form-control\" rows=\"4\" placeholder=\"Tell us your thoughts and feelings...\"></textarea>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4 mr-auto ml-auto\">\r\n                                <button class=\"btn btn-danger btn-lg btn-fill\">Send Message</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/examples/landing/landing.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/examples/landing/landing.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/examples/landing/landing.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/examples/landing/landing.component.ts ***!
  \*******************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
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

var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () { };
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/examples/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/examples/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/examples/order-now/order-now.component.html":
/*!*************************************************************!*\
  !*** ./src/app/examples/order-now/order-now.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" style=\"background-image: url('./assets/img/bg.jpg');\">\r\n  <div class=\"filter\"></div>\r\n  <div class=\"container \">\r\n    <div class=\"card card-register\">\r\n      <form class=\"register-form\">\r\n        <h6>Do you want to discuss your project ?</h6>\r\n        <label>Name</label>\r\n        <div class=\"input-textarea\">\r\n          <input name=\"name\" class=\"form-control\" [(ngModel)]=\"dataOrder.name\" placeholder=\"Name\">\r\n        </div>\r\n        <label>Phone Number</label>\r\n        <div class=\"input-textarea\">\r\n          <input name=\"phone_number\" class=\"form-control\" [(ngModel)]=\"dataOrder.phone\" placeholder=\"Phone Number\">\r\n        </div>\r\n        <label>Email Address</label>\r\n        <div class=\"input-textarea\">\r\n          <input name=\"email\" class=\"form-control\" [(ngModel)]=\"dataOrder.email\" placeholder=\"Email\">\r\n        </div>\r\n        <label>Descripe Your Project</label>\r\n        <div class=\"input-textarea\">\r\n          <input name=\"description\" class=\"form-control\" [(ngModel)]=\"dataOrder.description\"\r\n            placeholder=\"Descripe Your Project\">\r\n        </div>\r\n\r\n        <button class=\"btn btn-info btn-block btn-round\" (click)=\"addOrder()\"\r\n          [disabled]=\"loading == true\">{{loading ? 'Sending..':'Send Note'}}</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"section section-dark\">\r\n  <div class=\"container\">\r\n    <h3 class=\"title\">Contact</h3>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <i class=\"nc-icon nc-email-85\" style=\"color: white;\"></i>\r\n        <p style=\"color: white;\">pejuangtech.official@gmail.com</p>\r\n        <i class=\"nc-icon nc-chat-33\" style=\"color: white;\"></i>\r\n        <p style=\"color: white;\">+62 812-2930-4140</p>\r\n        <p style=\"color: white;\">+62 823-1603-5745</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/examples/order-now/order-now.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/examples/order-now/order-now.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/examples/order-now/order-now.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/examples/order-now/order-now.component.ts ***!
  \***********************************************************/
/*! exports provided: OrderNowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderNowComponent", function() { return OrderNowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderNowComponent = /** @class */ (function () {
    function OrderNowComponent(db) {
        this.db = db;
        this.dataOrder = [];
        this.verified = false;
        this.timestamp = firebase__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.serverTimestamp();
    }
    OrderNowComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    OrderNowComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    OrderNowComponent.prototype.ngOnInit = function () {
    };
    OrderNowComponent.prototype.addOrder = function () {
        var _this = this;
        this.loading = true;
        var doc = new Date().getTime() + '' + Math.floor(Math.random() * 10000);
        this.idOrder = doc;
        var dt = {
            id: this.idOrder,
            name: this.dataOrder.name,
            phone_number: this.dataOrder.phone,
            email: this.dataOrder.email,
            description: this.dataOrder.description,
            verified: this.verified,
            datetime: this.timestamp
        };
        console.log(this.idOrder);
        this.db.collection('order').doc(this.idOrder).set(dt).then(function (res) {
            _this.loading = false;
            alert('your note has been sended to admin');
            window.location.reload();
        });
    };
    OrderNowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-now',
            template: __webpack_require__(/*! ./order-now.component.html */ "./src/app/examples/order-now/order-now.component.html"),
            styles: [__webpack_require__(/*! ./order-now.component.scss */ "./src/app/examples/order-now/order-now.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], OrderNowComponent);
    return OrderNowComponent;
}());



/***/ }),

/***/ "./src/app/examples/portofolio/portofolio.component.html":
/*!***************************************************************!*\
  !*** ./src/app/examples/portofolio/portofolio.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" style=\"background-image: url('./assets/img/pesanaja.jpg');\">\r\n  <div class=\"filter\"></div>\r\n  <div class=\"container\">\r\n  </div>\r\n</div>\r\n<div class=\"main\">\r\n  <div class=\"section text-center\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 mr-auto ml-auto\">\r\n          <h2 class=\"title\">Description</h2>\r\n          <h5 class=\"description\">PesanAja is an application for ordering\r\n            food in the campus area. users can\r\n            order food with a device and the\r\n            food will be delivered by the runner.</h5>\r\n          <br>\r\n        </div>\r\n      </div>\r\n      <br />\r\n      <h2>Features</h2>\r\n      <br />\r\n      <div class=\"row\">\r\n        <div class=\"col-md-3\">\r\n          <div class=\"info\">\r\n            <div class=\"icon icon-danger\">\r\n              <i class=\"nc-icon nc-album-2\"></i>\r\n            </div>\r\n            <div class=\"description\">\r\n              <h4 class=\"info-title\">Beautiful Gallery</h4>\r\n              <p class=\"description\">Spend your time generating new ideas. You don't have to think of implementing.</p>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"info\">\r\n            <div class=\"icon icon-danger\">\r\n              <i class=\"nc-icon nc-bulb-63\"></i>\r\n            </div>\r\n            <div class=\"description\">\r\n              <h4 class=\"info-title\">New Ideas</h4>\r\n              <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"info\">\r\n            <div class=\"icon icon-danger\">\r\n              <i class=\"nc-icon nc-chart-bar-32\"></i>\r\n            </div>\r\n            <div class=\"description\">\r\n              <h4 class=\"info-title\">Statistics</h4>\r\n              <p>Choose from a veriety of many colors resembling sugar paper pastels.</p>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n          <div class=\"info\">\r\n            <div class=\"icon icon-danger\">\r\n              <i class=\"nc-icon nc-sun-fog-29\"></i>\r\n            </div>\r\n            <div class=\"description\">\r\n              <h4 class=\"info-title\">Delightful design</h4>\r\n              <p>Find unique and handmade delightful designs related items directly from our sellers.</p>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"section\">\r\n    <div class=\"page-header\" style=\"background-image: url('./assets/img/landing page.jpg');\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"section landing-section\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 mr-auto ml-auto\">\r\n          <h2 class=\"text-center\">Need Successful Project ?</h2>\r\n          <form class=\"contact-form\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-6\">\r\n                <label>Name</label>\r\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"nc-icon nc-single-02\"></i></span>\r\n                  </div>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Name\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-6\">\r\n                <label>Email</label>\r\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"> <i class=\"nc-icon nc-email-85\"></i></span>\r\n                  </div>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus1=true\"\r\n                    (blur)=\"focus1=false\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <label>Message</label>\r\n            <textarea class=\"form-control\" rows=\"4\" placeholder=\"Tell us your thoughts and feelings...\"></textarea>\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 mr-auto ml-auto\">\r\n                <button class=\"btn btn-danger btn-lg btn-fill\">Send Message</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/examples/portofolio/portofolio.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/examples/portofolio/portofolio.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/examples/portofolio/portofolio.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/examples/portofolio/portofolio.component.ts ***!
  \*************************************************************/
/*! exports provided: PortofolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortofolioComponent", function() { return PortofolioComponent; });
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

var PortofolioComponent = /** @class */ (function () {
    function PortofolioComponent() {
    }
    PortofolioComponent.prototype.ngOnInit = function () {
    };
    PortofolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portofolio',
            template: __webpack_require__(/*! ./portofolio.component.html */ "./src/app/examples/portofolio/portofolio.component.html"),
            styles: [__webpack_require__(/*! ./portofolio.component.scss */ "./src/app/examples/portofolio/portofolio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortofolioComponent);
    return PortofolioComponent;
}());



/***/ }),

/***/ "./src/app/examples/profile/profile.component.html":
/*!*********************************************************!*\
  !*** ./src/app/examples/profile/profile.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('./assets/img/fabio-mangione.jpg');\">\r\n        <div class=\"filter\"></div>\r\n    </div>\r\n    <div class=\"section profile-content\">\r\n        <div class=\"container\">\r\n            <div class=\"owner\">\r\n                <div class=\"avatar\">\r\n                    <img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\r\n                </div>\r\n                <div class=\"name\">\r\n                    <h4 class=\"title\">Jane Faker<br /></h4>\r\n                    <h6 class=\"description\">Music Producer</h6>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\r\n                    <p>An artist of considerable range, Jane Faker — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. </p>\r\n                    <br />\r\n                    <button class=\"btn btn-outline-default btn-round\"><i class=\"fa fa-cog\"></i> Settings</button>\r\n                </div>\r\n            </div>\r\n            <br/>\r\n            <div class=\"nav-tabs-navigation\">\r\n                <div class=\"nav-tabs-wrapper\">\r\n                    <ngb-tabset [justify]=\"'center'\">\r\n                        <ngb-tab title=\"Follows\">\r\n                            <ng-template ngbTabContent >\r\n                                <div class=\"row following\" id=\"follows\">\r\n                                    <div class=\"col-md-6 ml-auto mr-auto\">\r\n                                        <ul class=\"list-unstyled follows\">\r\n                                            <li>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\r\n                                                        <img src=\"./assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\r\n                                                    </div>\r\n                                                    <div class=\"col-md-7 col-sm-4 ml-auto\">\r\n                                                        <h6>Flume<br/><small>Musical Producer</small></h6>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-3 col-sm-2 ml-auto mr-auto\">\r\n                                                        <div class=\"form-check\">\r\n                                                          <label class=\"form-check-label\">\r\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\r\n                                                            <span class=\"form-check-sign\"></span>\r\n                                                          </label>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </li>\r\n                                            <hr />\r\n                                            <li>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-2 col-sm-2 ml-auto mr-auto\">\r\n                                                        <img src=\"./assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\r\n                                                    </div>\r\n                                                    <div class=\"col-md-7 col-sm-4 ml-auto\">\r\n                                                        <h6>Banks<br /><small>Singer</small></h6>\r\n                                                    </div>\r\n                                                    <div class=\"col-md-3 col-sm-2 ml-auto mr-auto\">\r\n                                                        <div class=\"form-check\">\r\n                                                          <label class=\"form-check-label\">\r\n                                                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\r\n                                                            <span class=\"form-check-sign\"></span>\r\n                                                          </label>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-template>\r\n                        </ngb-tab>\r\n                        <ngb-tab title=\"Following\">\r\n                            <ng-template ngbTabContent>\r\n                                <h3 class=\"text-muted\">Not following anyone yet :(</h3>\r\n                                <br>\r\n                                <button class=\"btn btn-warning btn-round\">Find artists</button>\r\n                            </ng-template>\r\n                        </ngb-tab>\r\n                    </ngb-tabset>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/examples/profile/profile.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/examples/profile/profile.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/examples/profile/profile.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/examples/profile/profile.component.ts ***!
  \*******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
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

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/examples/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/examples/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/examples/signup/signup.component.html":
/*!*******************************************************!*\
  !*** ./src/app/examples/signup/signup.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n    <div class=\"page-header\" style=\"background-image: url('./assets/img/login-image.jpg');\">\r\n        <div class=\"filter\"></div>\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\r\n                      <div class=\"card card-register\">\r\n                          <h3 class=\"title\">Welcome</h3>\r\n                          <div class=\"social-line text-center\">\r\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-facebook btn-just-icon\">\r\n                                  <i class=\"fa fa-facebook-square\"></i>\r\n                              </a>\r\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-google btn-just-icon\">\r\n                                  <i class=\"fa fa-google-plus\"></i>\r\n                              </a>\r\n                              <a href=\"#pablo\" class=\"btn btn-neutral btn-twitter btn-just-icon\">\r\n                                  <i class=\"fa fa-twitter\"></i>\r\n                              </a>\r\n                          </div>\r\n                          <form class=\"register-form\">\r\n                              <label>Email</label>\r\n                              <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                <div class=\"input-group-prepend\">\r\n                                  <span class=\"input-group-text\">\r\n                                      <i class=\"nc-icon nc-email-85\"></i>\r\n                                  </span>\r\n                                </div>\r\n\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\r\n                              </div>\r\n\r\n                              <label>Password</label>\r\n                              <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                                <div class=\"input-group-prepend\">\r\n                                  <span class=\"input-group-text\">\r\n                                      <i class=\"nc-icon nc-key-25\"></i>\r\n                                  </span>\r\n                                </div>\r\n                                  <input type=\"text\" class=\"form-control\" placeholder=\"Password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\r\n                              </div>\r\n                              <button class=\"btn btn-danger btn-block btn-round\">Register</button>\r\n                          </form>\r\n                          <div class=\"forgot\">\r\n                              <a href=\"#\" class=\"btn btn-link btn-danger\">Forgot password?</a>\r\n                          </div>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"footer register-footer text-center\">\r\n                    <h6>&copy;{{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim</h6>\r\n                </div>\r\n            </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/examples/signup/signup.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/examples/signup/signup.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/examples/signup/signup.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/examples/signup/signup.component.ts ***!
  \*****************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
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

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
        this.test = new Date();
    }
    SignupComponent.prototype.ngOnInit = function () { };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/examples/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.scss */ "./src/app/examples/signup/signup.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/media/image-uploader/image-uploader.component.html":
/*!********************************************************************!*\
  !*** ./src/app/media/image-uploader/image-uploader.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Unggah Gambar</h1>\r\n<div mat-dialog-content>\r\n\r\n  <input type=\"file\" (change)=\"fileChangeEvent($event)\" />\r\n\r\n  <image-cropper\r\n      [imageChangedEvent]=\"imageChangedEvent\"\r\n      [maintainAspectRatio]=\"true\"\r\n      [aspectRatio]=\"rasio\"\r\n      format=\"png\"\r\n      (imageCropped)=\"imageCropped($event)\"\r\n      (imageLoaded)=\"imageLoaded()\"\r\n      (cropperReady)=\"cropperReady()\"\r\n      (loadImageFailed)=\"loadImageFailed()\"\r\n  ></image-cropper>\r\n\r\n</div>\r\n\r\n<div mat-dialog-actions class=\"uk-flex\">\r\n  <span class=\"uk-width-expand\"></span>\r\n  <button mat-button (click)=\"onNoClick()\">Batal</button>\r\n  <button mat-raised-button color=\"primary\" (click)=\"unggahGambar()\"\r\n    [disabled]=\"loading\">{{loading ? 'Mengunggah..':'Unggah'}}</button>\r\n</div>"

/***/ }),

/***/ "./src/app/media/image-uploader/image-uploader.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/media/image-uploader/image-uploader.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/media/image-uploader/image-uploader.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/media/image-uploader/image-uploader.component.ts ***!
  \******************************************************************/
/*! exports provided: ImageUploaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageUploaderComponent", function() { return ImageUploaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageUploaderComponent = /** @class */ (function () {
    function ImageUploaderComponent(activeModal, fsAuth, db, storage) {
        this.activeModal = activeModal;
        this.fsAuth = fsAuth;
        this.db = db;
        this.storage = storage;
        this.passEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.rasio = this.data.rasio;
        this.path = this.data.path;
    }
    ImageUploaderComponent.prototype.ngOnInit = function () {
    };
    ImageUploaderComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
    };
    ImageUploaderComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
    };
    ImageUploaderComponent.prototype.imageLoaded = function () {
        // show cropper
    };
    ImageUploaderComponent.prototype.cropperReady = function () {
        // cropper ready
    };
    ImageUploaderComponent.prototype.loadImageFailed = function () {
        // show message
    };
    ImageUploaderComponent.prototype.unggahGambar = function () {
        var _this = this;
        this.loading = true;
        this.storage.ref(this.path).putString(this.croppedImage, 'data_url').then(function (res) {
            _this.activeModal.close(true);
        });
    };
    ImageUploaderComponent.prototype.onNoClick = function () {
        this.activeModal.close();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImageUploaderComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ImageUploaderComponent.prototype, "passEntry", void 0);
    ImageUploaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-uploader',
            template: __webpack_require__(/*! ./image-uploader.component.html */ "./src/app/media/image-uploader/image-uploader.component.html"),
            styles: [__webpack_require__(/*! ./image-uploader.component.scss */ "./src/app/media/image-uploader/image-uploader.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]])
    ], ImageUploaderComponent);
    return ImageUploaderComponent;
}());



/***/ }),

/***/ "./src/app/modal/accepted-order/accepted-order.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modal/accepted-order/accepted-order.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Detail Order</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label>Name</label>\r\n      <div class=\"input-textarea\">\r\n        <input [(ngModel)]=\"user.name\" name=\"nama\" class=\"form-control\" placeholder=\"Nama\">\r\n      </div>\r\n      <label>Phone</label>\r\n      <div class=\"input-textarea\">\r\n        <input [(ngModel)]=\"user.phone_number\" name=\"phone_number\" class=\"form-control\" placeholder=\"Phone\">\r\n      </div>\r\n      <label>Email</label>\r\n      <div class=\"input-textarea\">\r\n        <input [(ngModel)]=\"user.email\" name=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n      </div>\r\n      <label>Description</label>\r\n      <div class=\"input-textarea\">\r\n        <input [(ngModel)]=\"user.description\" name=\"description\" class=\"form-control\" placeholder=\"Description\">\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-default btn-round\" (click)=\"activeModal.dismiss('Cross click')\">Close</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modal/accepted-order/accepted-order.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modal/accepted-order/accepted-order.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modal/accepted-order/accepted-order.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modal/accepted-order/accepted-order.component.ts ***!
  \******************************************************************/
/*! exports provided: AcceptedOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcceptedOrderComponent", function() { return AcceptedOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AcceptedOrderComponent = /** @class */ (function () {
    function AcceptedOrderComponent(activeModal, db) {
        this.activeModal = activeModal;
        this.db = db;
        this.passEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AcceptedOrderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AcceptedOrderComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AcceptedOrderComponent.prototype, "passEntry", void 0);
    AcceptedOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-accepted-order',
            template: __webpack_require__(/*! ./accepted-order.component.html */ "./src/app/modal/accepted-order/accepted-order.component.html"),
            styles: [__webpack_require__(/*! ./accepted-order.component.scss */ "./src/app/modal/accepted-order/accepted-order.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], AcceptedOrderComponent);
    return AcceptedOrderComponent;
}());



/***/ }),

/***/ "./src/app/modal/detail-order/detail-order.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modal/detail-order/detail-order.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Detail Order</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form *ngFor=\"let user of user\">\r\n    <div class=\"form-group\">\r\n      <label>Name</label>\r\n      <div class=\"input-textarea\">\r\n        <input [(ngModel)]=\"user.name\" name=\"nama\" class=\"form-control\" placeholder=\"Nama\">\r\n      </div>\r\n      <label>Phone</label>\r\n      <div class=\"input-textarea\">\r\n        <input [(ngModel)]=\"user.phone_number\" name=\"phone_number\" class=\"form-control\" placeholder=\"Phone\">\r\n      </div>\r\n      <label>Email</label>\r\n      <div class=\"input-textarea\">\r\n        <input [(ngModel)]=\"user.email\" name=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n      </div>\r\n      <label>Description</label>\r\n      <div class=\"input-textarea\">\r\n        <input [(ngModel)]=\"user.description\" name=\"description\" class=\"form-control\" placeholder=\"Description\">\r\n      </div>\r\n    </div>\r\n    <button type=\"button\" class=\"btn btn-info btn-round\" (click)=\"accept(user)\">Accept</button>\r\n  </form>\r\n  <div class=\"modal-footer\">\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modal/detail-order/detail-order.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modal/detail-order/detail-order.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modal/detail-order/detail-order.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modal/detail-order/detail-order.component.ts ***!
  \**************************************************************/
/*! exports provided: DetailOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailOrderComponent", function() { return DetailOrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailOrderComponent = /** @class */ (function () {
    function DetailOrderComponent(activeModal, db) {
        this.activeModal = activeModal;
        this.db = db;
        this.passEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DetailOrderComponent.prototype.ngOnInit = function () {
    };
    DetailOrderComponent.prototype.accept = function (user) {
        var _this = this;
        var id = user.id;
        var r = confirm("Are you sure you want to accept this story?");
        if (r == true) {
            var dt = { verified: true };
            this.db.collection('order').doc(id).update(dt).then(function (res) {
                _this.loading = false;
                window.location.reload();
            });
        }
        else {
            return;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DetailOrderComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DetailOrderComponent.prototype, "passEntry", void 0);
    DetailOrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-order',
            template: __webpack_require__(/*! ./detail-order.component.html */ "./src/app/modal/detail-order/detail-order.component.html"),
            styles: [__webpack_require__(/*! ./detail-order.component.scss */ "./src/app/modal/detail-order/detail-order.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], DetailOrderComponent);
    return DetailOrderComponent;
}());



/***/ }),

/***/ "./src/app/modal/edit-about/edit-about.component.html":
/*!************************************************************!*\
  !*** ./src/app/modal/edit-about/edit-about.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Update About</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <form>\n    <div class=\"form-group\">\n      <label>About</label>\n      <div class=\"input-textarea\">\n        <textarea [(ngModel)]=\"about.isi\" name=\"isi\" class=\"form-control\" placeholder=\"About\" rows=\"4\"></textarea>\n      </div>\n    </div>\n  </form>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-primary\" style=\"margin-right: 10px;\"\n      (click)=\" updateAbout();activeModal.dismiss('Data Updated')\"\n      [disabled]=\"loading\">{{loading ? 'Saving..':'Update'}}</button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/modal/edit-about/edit-about.component.scss":
/*!************************************************************!*\
  !*** ./src/app/modal/edit-about/edit-about.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modal/edit-about/edit-about.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/modal/edit-about/edit-about.component.ts ***!
  \**********************************************************/
/*! exports provided: EditAboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAboutComponent", function() { return EditAboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditAboutComponent = /** @class */ (function () {
    function EditAboutComponent(activeModal, fsAuth, db) {
        this.activeModal = activeModal;
        this.fsAuth = fsAuth;
        this.db = db;
        this.passEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EditAboutComponent.prototype.ngOnInit = function () {
    };
    EditAboutComponent.prototype.updateAbout = function () {
        var _this = this;
        this.passEntry.emit(this.about);
        this.db.collection('settings').doc('about').collection('data').doc('about').update(this.about).then(function (res) {
            _this.loading = false;
            alert('Data about baru berhasil diperbarui');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditAboutComponent.prototype, "about", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EditAboutComponent.prototype, "passEntry", void 0);
    EditAboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-about',
            template: __webpack_require__(/*! ./edit-about.component.html */ "./src/app/modal/edit-about/edit-about.component.html"),
            styles: [__webpack_require__(/*! ./edit-about.component.scss */ "./src/app/modal/edit-about/edit-about.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], EditAboutComponent);
    return EditAboutComponent;
}());



/***/ }),

/***/ "./src/app/modal/edit-administrator/edit-administrator.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modal/edit-administrator/edit-administrator.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Edit Administrator</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label>Name</label>\r\n      <div class=\"input-textarea\">\r\n        <input [(ngModel)]=\"user.nama\" name=\"nama\" class=\"form-control\" placeholder=\"Nama\">\r\n      </div>\r\n      <label>Email</label>\r\n      <div class=\"input-textarea\">\r\n        <input [(ngModel)]=\"user.email\" name=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n      </div>\r\n      <label>Phone</label>\r\n      <div class=\"input-textarea\">\r\n        <input [(ngModel)]=\"user.phone\" name=\"phone\" class=\"form-control\" placeholder=\"Phone\">\r\n      </div>\r\n      <label>Skill</label>\r\n      <div class=\"form-group\">\r\n        <select class=\"form-control\" [(ngModel)]=\"user.skill\" name=\"skill\">\r\n          <option value=\"FRONT END DEVELOPER\">FRONT END DEVELOPER</option>\r\n          <option value=\"BACK END DEVELOPER\">BACK END DEVELOPER</option>\r\n          <option value=\"DESIGNER\">DESIGNER</option>\r\n        </select>\r\n      </div>\r\n      <label>Category</label>\r\n      <div class=\"form-group\">\r\n        <select class=\"form-control\" [(ngModel)]=\"user.category\" name=\"category\">\r\n          <option value=\"admin\">admin</option>\r\n          <option value=\"superadmin\">superadmin</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" style=\"margin-right: 10px;\"\r\n      (click)=\" updateMember();activeModal.dismiss('Data Updated')\"\r\n      [disabled]=\"loading\">{{loading ? 'Saving..':'Edit'}}</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modal/edit-administrator/edit-administrator.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modal/edit-administrator/edit-administrator.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modal/edit-administrator/edit-administrator.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modal/edit-administrator/edit-administrator.component.ts ***!
  \**************************************************************************/
/*! exports provided: EditAdministratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAdministratorComponent", function() { return EditAdministratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditAdministratorComponent = /** @class */ (function () {
    function EditAdministratorComponent(activeModal, fsAuth, db) {
        this.activeModal = activeModal;
        this.fsAuth = fsAuth;
        this.db = db;
        this.data = {};
        this.isAdmin = false;
        this.oldAkses = [];
        this.akses = [
            {
                0: '/admin/dashboard',
                1: '/admin/portofolio',
            }
        ];
        this.passEntry = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    EditAdministratorComponent.prototype.ngOnInit = function () {
    };
    EditAdministratorComponent.prototype.updateMember = function () {
        var _this = this;
        this.passEntry.emit(this.user);
        var doc = this.user.id;
        this.db.collection('users').doc(doc).update(this.user).then(function (res) {
            _this.loading = false;
            alert('Administrator baru berhasil diperbarui');
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditAdministratorComponent.prototype, "user", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], EditAdministratorComponent.prototype, "passEntry", void 0);
    EditAdministratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-administrator',
            template: __webpack_require__(/*! ./edit-administrator.component.html */ "./src/app/modal/edit-administrator/edit-administrator.component.html"),
            styles: [__webpack_require__(/*! ./edit-administrator.component.scss */ "./src/app/modal/edit-administrator/edit-administrator.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], EditAdministratorComponent);
    return EditAdministratorComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal-administrator/modal-administrator.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modal/modal-administrator/modal-administrator.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Administrator</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label>Name</label>\r\n      <div class=\"input-textarea\">\r\n        <input [(ngModel)]=\"data.nama\" name=\"nama\" class=\"form-control\" placeholder=\"Nama\">\r\n      </div>\r\n      <label>Email</label>\r\n      <div class=\"input-textarea\">\r\n        <input [(ngModel)]=\"data.email\" name=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n      </div>\r\n      <label>Phone</label>\r\n      <div class=\"input-textarea\">\r\n        <input [(ngModel)]=\"data.phone\" name=\"phone\" class=\"form-control\" placeholder=\"Phone\">\r\n      </div>\r\n      <label>Skill</label>\r\n      <div class=\"form-group\">\r\n        <select [(ngModel)]=\"data.skill\" class=\"form-control\" name=\"skill\">\r\n          <option value=\"FRONT END DEVELOPER\">FRONT END DEVELOPER</option>\r\n          <option value=\"BACK END DEVELOPER\">BACK END DEVELOPER</option>\r\n          <option value=\"DESIGNER\">DESIGNER</option>\r\n        </select>\r\n      </div>\r\n      <label>Category</label>\r\n      <div class=\"form-group\">\r\n        <select [(ngModel)]=\"data.category\" class=\"form-control\" name=\"category\">\r\n          <option value=\"admin\">admin</option>\r\n          <option value=\"superadmin\">superadmin</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-primary\" style=\"margin-right: 10px;\"\r\n      (click)=\"tambahData(); activeModal.close('Saved')\" [disabled]=\"loading\">{{loading ? 'Saving..':'Save'}}</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modal/modal-administrator/modal-administrator.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modal/modal-administrator/modal-administrator.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modal/modal-administrator/modal-administrator.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modal/modal-administrator/modal-administrator.component.ts ***!
  \****************************************************************************/
/*! exports provided: ModalAdministratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAdministratorComponent", function() { return ModalAdministratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModalAdministratorComponent = /** @class */ (function () {
    function ModalAdministratorComponent(activeModal, fsAuth, db, router) {
        var _this = this;
        this.activeModal = activeModal;
        this.fsAuth = fsAuth;
        this.db = db;
        this.router = router;
        this.user = [];
        this.data = {};
        this.isAdmin = false;
        this.oldAkses = [];
        this.akses = [
            {
                0: '/admin/dashboard',
                1: '/admin/portofolio',
            }
        ];
        this.about = [];
        this.error = {};
        this.fsAuth.auth.onAuthStateChanged(function (user) {
            if (user.uid != null) {
                _this.isAdmin = true;
            }
            _this.getUser();
            _this.getAbout();
        });
    }
    ModalAdministratorComponent.prototype.ngOnInit = function () {
    };
    ModalAdministratorComponent.prototype.getUser = function () {
        var _this = this;
        this.db.collection('users').valueChanges().subscribe(function (res) {
            _this.user = res;
        });
    };
    ModalAdministratorComponent.prototype.getAbout = function () {
        var _this = this;
        this.db.collection('settings').doc('about').valueChanges().subscribe(function (res) {
            _this.about = res;
        });
    };
    ModalAdministratorComponent.prototype.tambahData = function () {
        this.loading = true;
        if (this.user.id == undefined)
            this.tambahAkun();
        else
            this.updateMember();
    };
    ModalAdministratorComponent.prototype.tambahAkun = function () {
        var _this = this;
        this.fsAuth.auth.createUserWithEmailAndPassword(this.data.email, this.data.phone).then(function (res) {
            _this.tambahUser(res);
        });
    };
    ModalAdministratorComponent.prototype.tambahUser = function (user) {
        var _this = this;
        var dt = {
            id: user.user.uid,
            nama: this.data.nama,
            email: this.data.email,
            phone: this.data.phone,
            skill: this.data.skill,
            category: this.data.category
        };
        this.db.collection('users').doc(user.user.uid).set(dt).then(function (res) {
            _this.tambahTeam(user);
            _this.tambahAdmin(user);
        });
    };
    ModalAdministratorComponent.prototype.tambahTeam = function (user) {
        var dt = {
            images: '',
            nama: this.data.nama,
            skill: this.data.skill
        };
        this.db.collection('settings').doc('teams').collection('dataTeam').doc(user.user.uid).set(dt).then(function (res) {
        });
    };
    ModalAdministratorComponent.prototype.tambahAdmin = function (user) {
        var dt = {
            akses: ['/admin/dashboard'],
            kategori: this.data.category
        };
        if (this.user != null) {
            this.db.collection('admin').doc(user.user.uid).set(dt).then(function (res) {
                alert('Administrator baru berhasil ditambahkan');
                window.location.reload();
            });
        }
        else {
            var akses = this.oldAkses.concat(this.akses);
            this.db.collection('admin').doc(user.user.uid).update({ akses: akses }).then(function (res) {
                alert('Administrator baru berhasil ditambahkan');
                window.location.reload();
            });
        }
    };
    ModalAdministratorComponent.prototype.updateMember = function () {
        var _this = this;
        var doc = this.user.uid;
        this.user.nama = this.data.nama;
        this.user.email = this.data.email;
        this.user.phone = this.data.phone;
        this.user.skill = this.data.skill;
        this.user.category = this.data.category;
        this.db.collection('users').doc(doc).update(this.user).then(function (res) {
            _this.loading = false;
            alert('Administrator baru berhasil diperbarui');
            window.location.reload();
        });
    };
    ModalAdministratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-administrator',
            template: __webpack_require__(/*! ./modal-administrator.component.html */ "./src/app/modal/modal-administrator/modal-administrator.component.html"),
            styles: [__webpack_require__(/*! ./modal-administrator.component.scss */ "./src/app/modal/modal-administrator/modal-administrator.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ModalAdministratorComponent);
    return ModalAdministratorComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer \">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <nav class=\"footer-nav\">\r\n                <ul>\r\n                    <li><a>PejuangTech</a></li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"credits ml-auto\">\r\n                <span class=\"copyright\">\r\n                    © {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Pejuang Tim\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-translate\">\r\n            <a class=\"navbar-brand\" routerLink=\"\" *ngIf=\"isAdmin == false\" style=\"color: turquoise;\">PejuangTech</a>\r\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\"\r\n                data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\"\r\n                aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\r\n                <span class=\"navbar-toggler-bar\"></span>\r\n                <span class=\"navbar-toggler-bar\"></span>\r\n                <span class=\"navbar-toggler-bar\"></span>\r\n            </button>\r\n        </div>\r\n        <div class=\"navbar-collapse\" id=\"navbarToggler\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\r\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Twitter\" data-placement=\"bottom\"\r\n                        href=\"https://twitter.com/pejuangTech\" target=\"_blank\">\r\n                        <i class=\"fa fa-twitter\"></i>\r\n                        <p class=\"d-lg-none\">Twitter</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\r\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Like us on Facebook\" data-placement=\"bottom\"\r\n                        href=\"https://www.facebook.com/pejuangTech\" target=\"_blank\">\r\n                        <i class=\"fa fa-facebook-square\"></i>\r\n                        <p class=\"d-lg-none\">Facebook</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\r\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Instagram\" data-placement=\"bottom\"\r\n                        href=\"https://www.instagram.com/pejuangTech\" target=\"_blank\">\r\n                        <i class=\"fa fa-instagram\"></i>\r\n                        <p class=\"d-lg-none\">Instagram</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\r\n                    <a class=\"nav-link\" rel=\"tooltip\" title=\"Star on GitHub\" data-placement=\"bottom\"\r\n                        href=\"https://www.github.com/pejuangTech\" target=\"_blank\">\r\n                        <i class=\"fa fa-github\"></i>\r\n                        <p class=\"d-lg-none\">GitHub</p>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"!isHome()\">\r\n                    <a [routerLink]=\"['/home']\" *ngIf=\"!isDocumentation()\" class=\"nav-link\"><i\r\n                            class=\"nc-icon nc-layout-11\"></i>Home</a>\r\n                    <a [routerLink]=\"['/home']\" *ngIf=\"isDocumentation()\" class=\"nav-link\">Back to Kit</a>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"isDocumentation()\">\r\n                    <a href=\"https://github.com/pejuangTech\" target=\"_blank\" class=\"nav-link\">Have an issue</a>\r\n                </li>\r\n                <!-- Jika belum login -->\r\n                <li class=\"nav-item\">\r\n                    <button *ngIf=\"isAdmin == false\" type=\"button\" class=\"btn btn-outline-primary btn-round\"\r\n                        routerLink=\"/auth\">Login</button>\r\n                </li>\r\n\r\n                <!-- Jika sudah login -->\r\n                <li class=\"nav-item\">\r\n                    <button *ngIf=\"isAdmin == true\" type=\"button\" class=\"btn btn-outline-primary btn-round\"\r\n                        (click)=\"dashboard()\">{{user == undefined ? 'Memuat Data..':user.nama}}</button>\r\n                </li>\r\n\r\n                <!-- Jika sudah login -->\r\n                <li class=\"nav-item\">\r\n                    <button *ngIf=\"isAdmin == true\" type=\"button\" class=\"btn btn-outline-danger btn-round\"\r\n                        (click)=\"keluar()\">Keluar</button>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <button type=\"button\" class=\"btn btn-outline-warning btn-round\" routerLink=\"/order\">Order\r\n                        Now</button>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, fsAuth, element, router, db) {
        var _this = this;
        this.location = location;
        this.fsAuth = fsAuth;
        this.element = element;
        this.router = router;
        this.db = db;
        this.isAdmin = false;
        this.user = {};
        this.sidebarVisible = false;
        this.fsAuth.auth.onAuthStateChanged(function (user) {
            if (user == null) {
                console.error();
            }
            else if (user.uid != null) {
                _this.isAdmin = true;
                _this.getUser(user.uid);
            }
        }, function (error) {
            // Handle error here
            // Show popup with errors or just console.error
            console.error(error);
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.getUser = function (uid) {
        var _this = this;
        this.db.collection('users').doc(uid).get().subscribe(function (res) {
            _this.user = res.data();
        });
    };
    NavbarComponent.prototype.dashboard = function () {
        if (this.user.id != null) {
            this.router.navigate(['admin/dashboard']);
        }
    };
    NavbarComponent.prototype.keluar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var conf;
            var _this = this;
            return __generator(this, function (_a) {
                conf = confirm('Yakin ingin keluar dari akun?');
                if (conf) {
                    this.fsAuth.auth.signOut().then(function (res) {
                        _this.isAdmin = false;
                        _this.router.navigate(['/']);
                        alert('Anda berhasil keluar!');
                    });
                }
                else {
                    return [2 /*return*/];
                }
                return [2 /*return*/];
            });
        });
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/home') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/upload.service.ts":
/*!***********************************!*\
  !*** ./src/app/upload.service.ts ***!
  \***********************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UploadService = /** @class */ (function () {
    function UploadService(dbs) {
        this.dbs = dbs;
        this.basePath = '/uploads';
    }
    UploadService.prototype.pushUpload = function (upload) {
        var _this = this;
        var storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
        var uploadTask = storageRef.child(this.basePath + "/" + upload.file.name).put(upload.file);
        uploadTask.on(firebase_app__WEBPACK_IMPORTED_MODULE_2__["storage"].TaskEvent.STATE_CHANGED, function (snapshot) {
            // upload in progress
            upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        }, function (error) {
            // upload failed
            console.log(error);
        }, function () {
            // upload success
            upload.url = uploadTask.snapshot.downloadURL;
            upload.name = upload.file.name;
            _this.saveFileData(upload);
        });
    };
    UploadService.prototype.saveFileData = function (upload) {
        this.dbs.list('${this.basePath}/').push(upload);
    };
    UploadService.prototype.deleteUpload = function (upload) {
        var _this = this;
        this.deleteFileData(upload.$key)
            .then(function () {
            _this.deleteFileStorage(upload.name);
        })
            .catch(function (error) { return console.log(error); });
    };
    // Deletes the file details from the realtime db
    UploadService.prototype.deleteFileData = function (key) {
        return this.dbs.list('${this.basePath}/').remove(key);
    };
    // Firebase files must have unique names in their respective storage dir
    // So the name serves as a unique key
    UploadService.prototype.deleteFileStorage = function (name) {
        var storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
        storageRef.child(this.basePath + "/" + name).delete();
    };
    UploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_1__["AngularFireDatabase"]])
    ], UploadService);
    return UploadService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAhUFe86ErDO8xtOTcpWdTdOPR9RgkB7nw",
        authDomain: "web-profile-ha.firebaseapp.com",
        databaseURL: "https://web-profile-ha.firebaseio.com",
        projectId: "web-profile-ha",
        storageBucket: "web-profile-ha.appspot.com",
        messagingSenderId: "772296898600",
        appId: "1:772296898600:web:99a3dbd8fc47ff086b1d1d",
        measurementId: "G-ZK76E9N0RR"
    },
    Frontend: {}
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
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/analytics */ "./node_modules/firebase/analytics/dist/index.esm.js");
/*!

 =========================================================
 * Paper Kit 2 Angular - v1.2.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/paper-kit-2-angular
 * Copyright 2017 Creative Tim (https://www.creative-tim.com)
 * Licensed under MIT (https://github.com/timcreative/paper-kit/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Kuliah\Sem 6\Project\web-profile\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map