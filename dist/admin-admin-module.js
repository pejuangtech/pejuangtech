(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _admin_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin.routing */ "./src/app/admin/admin.routing.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/admin/settings/settings.component.ts");
/* harmony import */ var _testimoni_testimoni_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./testimoni/testimoni.component */ "./src/app/admin/testimoni/testimoni.component.ts");
/* harmony import */ var _portofolio_portofolio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./portofolio/portofolio.component */ "./src/app/admin/portofolio/portofolio.component.ts");
/* harmony import */ var _stories_stories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stories/stories.component */ "./src/app/admin/stories/stories.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order/order.component */ "./src/app/admin/order/order.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_7__["SettingsComponent"],
                _testimoni_testimoni_component__WEBPACK_IMPORTED_MODULE_8__["TestimoniComponent"],
                _portofolio_portofolio_component__WEBPACK_IMPORTED_MODULE_9__["PortofolioComponent"],
                _stories_stories_component__WEBPACK_IMPORTED_MODULE_10__["StoriesComponent"],
                _order_order_component__WEBPACK_IMPORTED_MODULE_11__["OrderComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_admin_routing__WEBPACK_IMPORTED_MODULE_5__["AdminLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.routing.ts":
/*!****************************************!*\
  !*** ./src/app/admin/admin.routing.ts ***!
  \****************************************/
/*! exports provided: AdminLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutRoutes", function() { return AdminLayoutRoutes; });
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/admin/settings/settings.component.ts");
/* harmony import */ var _testimoni_testimoni_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./testimoni/testimoni.component */ "./src/app/admin/testimoni/testimoni.component.ts");
/* harmony import */ var _portofolio_portofolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./portofolio/portofolio.component */ "./src/app/admin/portofolio/portofolio.component.ts");
/* harmony import */ var _stories_stories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stories/stories.component */ "./src/app/admin/stories/stories.component.ts");
/* harmony import */ var _order_order_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order/order.component */ "./src/app/admin/order/order.component.ts");
//guard







var AdminLayoutRoutes = [
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'settings',
        component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_2__["SettingsComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'testimoni',
        component: _testimoni_testimoni_component__WEBPACK_IMPORTED_MODULE_3__["TestimoniComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'portofolio',
        component: _portofolio_portofolio_component__WEBPACK_IMPORTED_MODULE_4__["PortofolioComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'stories',
        component: _stories_stories_component__WEBPACK_IMPORTED_MODULE_5__["StoriesComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    },
    {
        path: 'order',
        component: _order_order_component__WEBPACK_IMPORTED_MODULE_6__["OrderComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]]
    }
];


/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section \">\r\n    <div class=\"wrapper\" style=\"margin-top: 40px;\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\" [routerLink]=\"['/admin/order']\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-5 col-md-4\">\r\n                                <div class=\"icon-big text-center icon-warning\">\r\n                                    <i class=\"nc-icon nc-globe text-warning\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-7 col-md-8\">\r\n                                <div class=\"numbers\">\r\n                                    <p class=\"card-category\">Orderan</p>\r\n                                    <p class=\"card-title\" *ngIf=\"data\">{{data?.length}}\r\n                                        <p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-footer \">\r\n                        <hr>\r\n                        <div class=\"stats\">\r\n                            <i class=\"fa fa-refresh\"></i> Update Now\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\" [routerLink]=\"['/admin/portofolio']\">\r\n                    <div class=\"card-body \">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-5 col-md-4\">\r\n                                <div class=\"icon-big text-center icon-warning\">\r\n                                    <i class=\"nc-icon nc-money-coins text-success\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-7 col-md-8\">\r\n                                <div class=\"numbers\">\r\n                                    <p class=\"card-category\">Portofolio</p>\r\n                                    <p class=\"card-title\" *ngIf=\"portofolio\"> {{portofolio?.length}}\r\n                                        <p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-footer \">\r\n                        <hr>\r\n                        <div class=\"stats\">\r\n                            <i class=\"fa fa-calendar-o\"></i> Last day\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\" [routerLink]=\"['/admin/stories']\">\r\n                    <div class=\"card-body \">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-5 col-md-4\">\r\n                                <div class=\"icon-big text-center icon-warning\">\r\n                                    <i class=\"nc-icon nc-vector text-danger\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-7 col-md-8\">\r\n                                <div class=\"numbers\">\r\n                                    <p class=\"card-category\">Stories</p>\r\n                                    <p class=\"card-title\" *ngIf=\"stories\">{{stories?.length}}\r\n                                        <p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-footer \">\r\n                        <hr>\r\n                        <div class=\"stats\">\r\n                            <i class=\"fa fa-clock-o\"></i> In the last hour\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-body \">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-5 col-md-4\">\r\n                                <div class=\"icon-big text-center icon-warning\">\r\n                                    <i class=\"nc-icon nc-favourite-28 text-primary\"></i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-7 col-md-8\">\r\n                                <div class=\"numbers\">\r\n                                    <p class=\"card-category\">Admin</p>\r\n                                    <p class=\"card-title\" *ngIf=\"user\"> {{user?.length}}\r\n                                        <p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-footer \">\r\n                        <hr>\r\n                        <div class=\"stats\">\r\n                            <i class=\"fa fa-refresh\"></i> Update now\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(fsAuth, db, router) {
        var _this = this;
        this.fsAuth = fsAuth;
        this.db = db;
        this.router = router;
        this.isAdmin = false;
        this.user = {};
        this.data = [];
        this.portofolio = [];
        this.stories = [];
        this.fsAuth.auth.onAuthStateChanged(function (user) {
            if (user.uid != null) {
                _this.isAdmin = true;
            }
        });
        this.getOrderAccept();
        this.getPortofolio();
        this.getStories();
        this.getUser();
    }
    DashboardComponent.prototype.ngAfterViewInit = function () {
        firebase_app__WEBPACK_IMPORTED_MODULE_4__["analytics"]().logEvent('pejuangtech', {
            'firstname': true,
            'username': 'PejuangTech'
        });
    };
    DashboardComponent.prototype.getUser = function () {
        var _this = this;
        this.db.collection('users').valueChanges({ idField: 'id' }).subscribe(function (res) {
            _this.user = res;
        });
    };
    DashboardComponent.prototype.keluar = function () {
        var _this = this;
        var conf = confirm('Yakin ingin keluar dari akun?');
        if (conf) {
            this.fsAuth.auth.signOut().then(function (res) {
                _this.router.navigate(['/auth']);
                alert('Anda berhasil keluar!');
            });
        }
        else {
            return;
        }
    };
    DashboardComponent.prototype.getOrderAccept = function () {
        var _this = this;
        this.db.collection('order', function (ref) {
            return ref.where('verified', '==', true);
        }).valueChanges({ idField: 'id' }).subscribe(function (res) {
            _this.data = res;
        });
    };
    DashboardComponent.prototype.getPortofolio = function () {
        var _this = this;
        this.db.collection('portofolios').valueChanges({ idField: 'id' }).subscribe(function (res) {
            _this.portofolio = res;
        });
    };
    DashboardComponent.prototype.getStories = function () {
        var _this = this;
        this.db.collection('stories').valueChanges({ idField: 'id' }).subscribe(function (res) {
            _this.stories = res;
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/admin/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/admin/order/order.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/order/order.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n  <div class=\"container\">\r\n    <ngb-tabset type=\"pills\" style=\"margin-left: 20px; text-align: left;\">\r\n      <ngb-tab title=\"Order\r\n      In\">\r\n        <ng-template ngbTabContent>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                  <h4 class=\"card-title\">Tables Order in</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <table class=\"table table-striped\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th scope=\"col\">No</th>\r\n                        <th scope=\"col\">Name</th>\r\n                        <th scope=\"col\">Phone Number</th>\r\n                        <th scope=\"col\">Email</th>\r\n                        <th scope=\"col\"></th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let data of dataOrder; let idx=index\">\r\n                        <th scope=\"row\">{{idx+1}}</th>\r\n                        <td>\r\n                          {{data.name}}\r\n                        </td>\r\n                        <td>\r\n                          {{data.phone_number}}\r\n                        </td>\r\n                        <td>\r\n                          {{data.email}}\r\n                        </td>\r\n                        <td>\r\n                          <button type=\"button\" class=\"btn btn-primary btn-round\" style=\"margin-right: 5px;\"\r\n                            (click)=\"open()\">Detail</button>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-tab>\r\n      <ngb-tab title=\"Order Accept\">\r\n        <ng-template ngbTabContent>\r\n          <!-- <button class=\"btn btn-primary\" style=\"text-align: right; margin-left: 50px;\" (click)=\"openModal(content)\">Add\r\n            Features</button> -->\r\n          <table class=\"table table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">No</th>\r\n                <th scope=\"col\">Name</th>\r\n                <th scope=\"col\">Phone Number</th>\r\n                <th scope=\"col\">Email</th>\r\n                <th scope=\"col\"></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of data; let idx=index\">\r\n                <th scope=\"row\">{{idx+1}}</th>\r\n                <td>\r\n                  {{item.name}}\r\n                </td>\r\n                <td>\r\n                  {{item.phone_number}}\r\n                </td>\r\n                <td>\r\n                  {{item.email}}\r\n                </td>\r\n                <td>\r\n                  <button type=\"button\" class=\"btn btn-success btn-round\" (click)=\"openAccepted(item)\">Accepted</button>\r\n                  <button type=\"button\" class=\"btn btn-danger btn-round\"\r\n                    (click)=\"delete(item)\">{{loading ? 'Deleting..':'Delete'}}</button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </ng-template>\r\n      </ngb-tab>\r\n    </ngb-tabset>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/order/order.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/order/order.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/order/order.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/order/order.component.ts ***!
  \************************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _modal_detail_order_detail_order_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../modal/detail-order/detail-order.component */ "./src/app/modal/detail-order/detail-order.component.ts");
/* harmony import */ var _modal_accepted_order_accepted_order_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../..//modal/accepted-order/accepted-order.component */ "./src/app/modal/accepted-order/accepted-order.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderComponent = /** @class */ (function () {
    function OrderComponent(db, modalService) {
        this.db = db;
        this.modalService = modalService;
        this.dataOrder = [];
        this.data = [];
        this.datas = [];
        this.getOrder();
        this.getOrderAccept();
    }
    OrderComponent.prototype.ngOnInit = function () {
    };
    OrderComponent.prototype.open = function (administrator) {
        var modalRef = this.modalService.open(_modal_detail_order_detail_order_component__WEBPACK_IMPORTED_MODULE_3__["DetailOrderComponent"]);
        modalRef.componentInstance.user = this.dataOrder;
        modalRef.result.then(function (res) {
            console.log("CloseButton", res);
        }, function (dismiss) {
            console.log("Cross Button", dismiss);
        });
    };
    OrderComponent.prototype.openAccepted = function (item) {
        this.datas = item;
        var modalRef = this.modalService.open(_modal_accepted_order_accepted_order_component__WEBPACK_IMPORTED_MODULE_4__["AcceptedOrderComponent"]);
        modalRef.componentInstance.user = this.datas;
        modalRef.result.then(function (res) {
            console.log("CloseButton", res);
        }, function (dismiss) {
            console.log("Cross Button", dismiss);
        });
    };
    OrderComponent.prototype.getOrder = function () {
        var _this = this;
        this.db.collection('order', function (ref) {
            return ref.where('verified', '==', false);
        }).valueChanges({ idField: 'id' }).subscribe(function (res) {
            _this.dataOrder = res;
        });
    };
    OrderComponent.prototype.getOrderAccept = function () {
        var _this = this;
        this.db.collection('order', function (ref) {
            return ref.where('verified', '==', true);
        }).valueChanges({ idField: 'id' }).subscribe(function (res) {
            _this.data = res;
        });
    };
    OrderComponent.prototype.delete = function (item) {
        var _this = this;
        var id = item.id;
        console.log(id);
        var r = confirm("Are you sure you want to delete this portofolio?");
        if (r == true) {
            this.db.collection('order').doc(id).delete().then(function (res) {
                _this.loading = false;
            });
        }
        else {
            return;
        }
    };
    OrderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order',
            template: __webpack_require__(/*! ./order.component.html */ "./src/app/admin/order/order.component.html"),
            styles: [__webpack_require__(/*! ./order.component.scss */ "./src/app/admin/order/order.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/admin/portofolio/portofolio.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/portofolio/portofolio.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n  <div class=\"container\">\r\n    <button class=\"btn btn-primary\" style=\"text-align: right; margin-left: 50px;\" (click)=\"open(portofolio)\">Add\r\n      Portofolio</button>\r\n      <div class=\"card text-center\" *ngFor=\"let data of dataPortofolios\">\r\n        <div class=\"card-header\">\r\n          {{data.name}}\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <!-- <img src=\"{{data.image}}\" style=\"height: 350px; width: 100%;\"/> -->\r\n          <h5 class=\"card-title\">{{data.description}}.</h5>\r\n          <table class=\"table table-striped\">\r\n            <thead>\r\n              <th scope=\"col\">\r\n                feature 1\r\n              </th>\r\n              <th scope=\"col\">\r\n                feature 2\r\n              </th>\r\n              <th scope=\"col\">\r\n                feature 3\r\n              </th>\r\n              <th scope=\"col\">\r\n                feature 4\r\n              </th>\r\n            </thead>\r\n            <tbody>\r\n              <td>\r\n                {{data.desc_feature1}}\r\n              </td>\r\n              <td>\r\n                {{data.desc_feature2}}\r\n              </td>\r\n              <td>\r\n                {{data.desc_feature3}}\r\n              </td>\r\n              <td>\r\n                {{data.desc_feature4}}\r\n              </td>\r\n            </tbody>\r\n          </table>\r\n          <button (click)=\"delete(data)\" class=\"btn btn-danger\" [disabled]=\"loading\">{{loading ? 'Please wait..':'Delete'}}</button>\r\n        </div>\r\n        <div class=\"card-footer text-muted\">\r\n          {{data.datetime.toDate() | date:'dd MMMM yyy'}}\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <!-- modall -->\r\n\r\n  <ng-template #portofolio let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Portofolio</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <label>Name</label>\r\n          <div class=\"input-textarea\">\r\n            <input [(ngModel)]=\"data.name\" name=\"name\" class=\"form-control\" placeholder=\"Nama\">\r\n          </div>\r\n          \r\n          <label>Description</label>\r\n          <div class=\"input-textarea\">\r\n            <input [(ngModel)]=\"data.description\" name=\"description\" class=\"form-control\" placeholder=\"Description\">\r\n          </div>\r\n          \r\n          <!-- Photos -->\r\n          <label>Cover</label>\r\n          <div class=\"input-group mb-3\">\r\n            <div class=\"custom-file\">\r\n                <input [(ngModel)]=\"data.cover\" name=\"cover\" (change)=\"onFileSelectedCover($event)\"\r\n                    accept=\".png,.jpg\"\r\n                    [disabled]=\"data.name == null || data.description == null\"\r\n                    type=\"file\" class=\"custom-file-input\" id=\"inputGroupFileCover\">\r\n                <label class=\"custom-file-label\" for=\"inputGroupFileCover\">Choose file</label>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Preview & loading -->\r\n          <!-- <div class=\"image-preview mb-3\" *ngIf=\"previewUrlCover\">\r\n            <img [src]=\"previewUrlCover\" height=\"300\" />\r\n          </div> -->\r\n\r\n          <div class=\"progress\" *ngIf=\"uploadProgressCover\">\r\n              <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 100%;\" aria-valuenow=\"0\"\r\n                  aria-valuemin=\"0\" aria-valuemax=\"100\">{{uploadProgressCover | async}}%</div>\r\n          </div>\r\n\r\n          <label>Banner</label>\r\n          <div class=\"input-group mb-3\">\r\n            <div class=\"custom-file\">\r\n                <input [(ngModel)]=\"data.banner\" name=\"banner\" (change)=\"onFileSelectedBanner($event)\"\r\n                    accept=\".png,.jpg\"\r\n                    [disabled]=\"data.name == null || data.description == null\"\r\n                    type=\"file\" class=\"custom-file-input\" id=\"inputGroupFileBanner\">\r\n                <label class=\"custom-file-label\" for=\"inputGroupFileBanner\">Choose file</label>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Preview & loading -->\r\n          <!-- <div class=\"image-preview mb-3\" *ngIf=\"previewUrlBanner\">\r\n            <img [src]=\"previewUrlBanner\" height=\"300\" />\r\n          </div> -->\r\n\r\n          <div class=\"progress\" *ngIf=\"uploadProgressBanner\">\r\n              <div class=\"progress-bar\" role=\"progressbar\" style=\"width: 100%;\" aria-valuenow=\"0\"\r\n                  aria-valuemin=\"0\" aria-valuemax=\"100\">{{uploadProgressBanner | async}}%</div>\r\n          </div>\r\n\r\n          <div class=\"modal-header\">\r\n            <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Features</h4>\r\n          </div>\r\n          <br>\r\n\r\n          <!-- Features -->\r\n          <label>Feature 1</label>\r\n          <div class=\"input-textarea\">\r\n            <input [(ngModel)]=\"data.desc_feature1\" name=\"desc_feature1\" class=\"form-control\" placeholder=\"Description Feature One\">\r\n          </div>\r\n\r\n          <label>Feature 2</label>\r\n          <div class=\"input-textarea\">\r\n            <input [(ngModel)]=\"data.desc_feature2\" name=\"desc_feature2\" class=\"form-control\" placeholder=\"Description Feature Two\">\r\n          </div>\r\n\r\n          <label>Feature 3</label>\r\n          <div class=\"input-textarea\">\r\n            <input [(ngModel)]=\"data.desc_feature3\" name=\"desc_feature3\" class=\"form-control\" placeholder=\"Description Feature Three\">\r\n          </div>\r\n\r\n          <label>Feature 4</label>\r\n          <div class=\"input-textarea\">\r\n            <input [(ngModel)]=\"data.desc_feature4\" name=\"desc_feature4\" class=\"form-control\" placeholder=\"Description Feature Four\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-primary\" style=\"margin-right: 10px;\"\r\n        (click)=\"addPortofolio(); modal.close('Saved')\" [disabled]=\"loading || banner == null || cover == null\">{{loading ? 'Saving..':'Save'}}</button>\r\n    </div>\r\n  </ng-template>"

/***/ }),

/***/ "./src/app/admin/portofolio/portofolio.component.scss":
/*!************************************************************!*\
  !*** ./src/app/admin/portofolio/portofolio.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/portofolio/portofolio.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/portofolio/portofolio.component.ts ***!
  \**********************************************************/
/*! exports provided: PortofolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortofolioComponent", function() { return PortofolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function PortofolioComponent(modalService, fsAuth, db, storage) {
        this.modalService = modalService;
        this.fsAuth = fsAuth;
        this.db = db;
        this.storage = storage;
        this.closeResult = '';
        this.fileToUpload = null;
        this.user = [];
        this.data = {};
        this.selectedFile = null;
        this.uploadProgressCover = null;
        this.previewUrlCover = null;
        this.fileDataCover = null;
        this.uploadProgressBanner = null;
        this.previewUrlBanner = null;
        this.fileDataBanner = null;
        this.formImport = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            importFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.timestamp = firebase_app__WEBPACK_IMPORTED_MODULE_6__["firestore"].FieldValue.serverTimestamp();
    }
    PortofolioComponent.prototype.ngOnInit = function () {
        this.getPortofolios();
    };
    PortofolioComponent.prototype.open = function (portofolio) {
        var _this = this;
        this.modalService.open(portofolio, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PortofolioComponent.prototype.openModal = function (portofolio) {
        var _this = this;
        this.modalService.open(portofolio, { ariaLabelledBy: 'modal-basic-features' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    PortofolioComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    PortofolioComponent.prototype.onFileChange = function (files) {
        this.labelImport.nativeElement.innerText = Array.from(files)
            .map(function (f) { return f.name; })
            .join(', ');
        this.fileToUpload = files.item(0);
    };
    PortofolioComponent.prototype.import = function () {
        console.log('import ' + this.fileToUpload.name);
    };
    PortofolioComponent.prototype.onFileSelectedCover = function (event) {
        var _this = this;
        var doc = new Date().getTime() + '' + Math.floor(Math.random() * 10000);
        this.id_portofolio = doc;
        var file = event.target.files[0];
        var filePath = this.id_portofolio + "/cover";
        var fileRef = this.storage.ref(filePath);
        this.fileDataCover = event.target.files[0];
        this.previewCover();
        var randomId = Math.random().toString(36).substring(2);
        this.refcover = this.storage.ref(randomId);
        this.taskcover = this.refcover.put(event.target.files[0]);
        this.uploadProgressCover = this.taskcover.percentageChanges();
        var task = this.storage.upload(this.id_portofolio + "/cover", file);
        task
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
            _this.downloadURL = fileRef.getDownloadURL();
            _this.downloadURL.subscribe(function (url) {
                if (url) {
                    _this.fbcover = url;
                    _this.cover = url;
                }
            });
        }))
            .subscribe(function (url) {
            if (url) {
            }
        });
    };
    PortofolioComponent.prototype.previewCover = function () {
        var _this = this;
        // Show preview 
        var mimeType = this.fileDataCover.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(this.fileDataCover);
        reader.onload = function (_event) {
            _this.previewUrlCover = reader.result;
        };
    };
    PortofolioComponent.prototype.onFileSelectedBanner = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var filePath = this.id_portofolio + "/banner";
        var fileRef = this.storage.ref(filePath);
        this.fileDataBanner = event.target.files[0];
        this.previewBanner();
        var randomId = Math.random().toString(36).substring(2);
        this.refbanner = this.storage.ref(randomId);
        this.taskbanner = this.refbanner.put(event.target.files[0]);
        this.uploadProgressBanner = this.taskbanner.percentageChanges();
        var task = this.storage.upload(this.id_portofolio + "/banner", file);
        task
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
            _this.downloadURL = fileRef.getDownloadURL();
            _this.downloadURL.subscribe(function (url) {
                if (url) {
                    _this.fbbanner = url;
                    _this.banner = url;
                }
            });
        }))
            .subscribe(function (url) {
            if (url) {
            }
        });
    };
    PortofolioComponent.prototype.previewBanner = function () {
        var _this = this;
        // Show preview 
        var mimeType = this.fileDataBanner.type;
        if (mimeType.match(/image\/*/) == null) {
            return;
        }
        var reader = new FileReader();
        reader.readAsDataURL(this.fileDataBanner);
        reader.onload = function (_event) {
            _this.previewUrlBanner = reader.result;
        };
    };
    PortofolioComponent.prototype.addPortofolio = function () {
        var _this = this;
        this.loading = true;
        var dt = {
            id: this.id_portofolio,
            name: this.data.name,
            description: this.data.description,
            cover: this.cover,
            banner: this.banner,
            desc_feature1: this.data.desc_feature1,
            desc_feature2: this.data.desc_feature2,
            desc_feature3: this.data.desc_feature3,
            desc_feature4: this.data.desc_feature4,
            datetime: this.timestamp
        };
        this.db.collection('portofolios').doc(this.id_portofolio).set(dt).then(function (res) {
            _this.loading = false;
            alert('Portofolio saved successfully');
            window.location.reload();
        });
    };
    PortofolioComponent.prototype.getPortofolios = function () {
        var _this = this;
        this.db.collection('portofolios').valueChanges({ idField: 'id' }).subscribe(function (res) {
            _this.dataPortofolios = res;
        });
    };
    PortofolioComponent.prototype.delete = function (data) {
        var _this = this;
        var id = data.id;
        console.log(id);
        var r = confirm("Are you sure you want to delete this portofolio?");
        if (r == true) {
            this.db.collection('portofolios').doc(id).delete().then(function (res) {
                _this.loading = false;
                window.location.reload();
            });
        }
        else {
            return;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('labelImport'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PortofolioComponent.prototype, "labelImport", void 0);
    PortofolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portofolio',
            template: __webpack_require__(/*! ./portofolio.component.html */ "./src/app/admin/portofolio/portofolio.component.html"),
            styles: [__webpack_require__(/*! ./portofolio.component.scss */ "./src/app/admin/portofolio/portofolio.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_5__["AngularFireStorage"]])
    ], PortofolioComponent);
    return PortofolioComponent;
}());



/***/ }),

/***/ "./src/app/admin/settings/settings.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/settings/settings.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\r\n  <div class=\"container\">\r\n    <ngb-tabset type=\"pills\" style=\"margin-left: 20px; text-align: left;\">\r\n      <ngb-tab title=\"Administrator\">\r\n        <ng-template ngbTabContent>\r\n          <button class=\"btn btn-primary\" style=\"text-align: right; margin-left: 50px;\" (click)=\"open()\">Add\r\n            Administrator</button>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                  <h4 class=\"card-title\">Tables Administrator</h4>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <table class=\"table table-striped\">\r\n                    <thead>\r\n                      <tr>\r\n                        <th scope=\"col\">No</th>\r\n                        <th scope=\"col\">Image</th>\r\n                        <th scope=\"col\">Name</th>\r\n                        <th scope=\"col\">Email</th>\r\n                        <th scope=\"col\">Skill</th>\r\n                        <th scope=\"col\">Category</th>\r\n                        <th scope=\"col\"></th>\r\n                      </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                      <tr *ngFor=\"let item of user; let idx=index\">\r\n                        <th scope=\"row\">{{idx+1}}</th>\r\n                        <td>\r\n                          <div class=\"avatar\">\r\n                            <img src=\"assets/img/new_logo.png\" alt=\"Circle Image\" class=\"img-circle  img-responsive\">\r\n                          </div>\r\n                        </td>\r\n                        <td>\r\n                          {{item.nama}}\r\n                        </td>\r\n                        <td>{{item.email}}</td>\r\n                        <td>{{item.skill}}</td>\r\n                        <td>{{item.category}}</td>\r\n                        <td>\r\n                          <div ngbDropdown class=\"d-inline-block\">\r\n                            <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\"\r\n                              ngbDropdownToggle>Action</button>\r\n                            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n                              <button ngbDropdownItem (click)=\"openEdit(item)\">Update</button>\r\n                              <button ngbDropdownItem (click)=\"hapus(item.id)\">Delete</button>\r\n                            </div>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-tab>\r\n      <ngb-tab title=\"About\">\r\n        <ng-template ngbTabContent>\r\n          <!-- <button class=\"btn btn-primary\" style=\"text-align: right; margin-left: 50px;\" (click)=\"openModal(content)\">Add\r\n            Features</button> -->\r\n          <table class=\"table table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th scope=\"col\">No</th>\r\n                <th scope=\"col\">Description</th>\r\n                <th scope=\"col\"></th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <th scope=\"row\">1</th>\r\n                <td>{{about.isi}}</td>\r\n                <td>\r\n                  <div ngbDropdown class=\"d-inline-block\">\r\n                    <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle>Action</button>\r\n                    <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n                      <button ngbDropdownItem (click)=\"openEditAbout(about)\">Update</button>\r\n                      <!-- <button ngbDropdownItem (click)=\"hapusAbout(item.id)\">Delete</button> -->\r\n                    </div>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </ng-template>\r\n      </ngb-tab>\r\n    </ngb-tabset>\r\n  </div>\r\n  <!-- modall -->\r\n\r\n  <ng-template #administrator let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-title\">Add Administrator</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <label>Name</label>\r\n          <div class=\"input-textarea\">\r\n            <input [(ngModel)]=\"data.nama\" name=\"nama\" class=\"form-control\" placeholder=\"Nama\">\r\n          </div>\r\n          <label>Email</label>\r\n          <div class=\"input-textarea\">\r\n            <input [(ngModel)]=\"data.email\" name=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n          </div>\r\n          <label>Phone</label>\r\n          <div class=\"input-textarea\">\r\n            <input [(ngModel)]=\"data.phone\" name=\"phone\" class=\"form-control\" placeholder=\"Phone\">\r\n          </div>\r\n          <label>Skill</label>\r\n          <div class=\"form-group\">\r\n            <select class=\"form-control\" [(ngModel)]=\"data.skill\" name=\"skill\">\r\n              <option value=\"FRONT END DEVELOPER\">FRONT END DEVELOPER</option>\r\n              <option value=\"BACK END DEVELOPER\">BACK END DEVELOPER</option>\r\n              <option value=\"DESIGNER\">DESIGNER</option>\r\n            </select>\r\n          </div>\r\n          <label>Category</label>\r\n          <div class=\"form-group\">\r\n            <select class=\"form-control\" [(ngModel)]=\"data.category\" name=\"category\">\r\n              <option value=\"admin\">admin</option>\r\n              <option value=\"superadmin\">superadmin</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-primary\" style=\"margin-right: 10px;\"\r\n        (click)=\"tambahData(); modal.close('Saved')\" [disabled]=\"loading\">{{loading ? 'Saving..':'Save'}}</button>\r\n    </div>\r\n  </ng-template>\r\n\r\n  <!-- Edit Data -->\r\n  <ng-template #item let-modal>\r\n    <div class=\"modal-header\">\r\n      <h4 class=\"modal-title\" id=\"modal-basic-edit\">Update Administrator</h4>\r\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <form *ngFor=\"let item of user\">\r\n        <div class=\"form-group\">\r\n          <label>Name</label>\r\n          <div class=\"input-textarea\">\r\n            <input [(ngModel)]=\"data.nama\" name=\"nama\" class=\"form-control\" placeholder=\"Nama\" value=\" {{item.nama}}\">\r\n\r\n          </div>\r\n          <label>Email</label>\r\n          <div class=\"input-textarea\">\r\n            <input [(ngModel)]=\"data.email\" name=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n          </div>\r\n          <label>Phone</label>\r\n          <div class=\"input-textarea\">\r\n            <input [(ngModel)]=\"data.phone\" name=\"phone\" class=\"form-control\" placeholder=\"Phone\">\r\n          </div>\r\n          <label>Skill</label>\r\n          <div class=\"form-group\">\r\n            <select class=\"form-control\" [(ngModel)]=\"data.skill\" name=\"skill\">\r\n              <option value=\"FRONT END DEVELOPER\">FRONT END DEVELOPER</option>\r\n              <option value=\"BACK END DEVELOPER\">BACK END DEVELOPER</option>\r\n              <option value=\"DESIGNER\">DESIGNER</option>\r\n            </select>\r\n          </div>\r\n          <label>Category</label>\r\n          <div class=\"form-group\">\r\n            <select class=\"form-control\" [(ngModel)]=\"data.category\" name=\"category\">\r\n              <option value=\"admin\">admin</option>\r\n              <option value=\"superadmin\">superadmin</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-primary\" style=\"margin-right: 10px;\"\r\n        (click)=\"tambahData(); modal.close('Saved')\" [disabled]=\"loading\">{{loading ? 'Saving..':'Save'}}</button>\r\n    </div>\r\n  </ng-template>"

/***/ }),

/***/ "./src/app/admin/settings/settings.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/settings/settings.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/settings/settings.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/settings/settings.component.ts ***!
  \******************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modal_modal_administrator_modal_administrator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modal/modal-administrator/modal-administrator.component */ "./src/app/modal/modal-administrator/modal-administrator.component.ts");
/* harmony import */ var _modal_edit_administrator_edit_administrator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../modal/edit-administrator/edit-administrator.component */ "./src/app/modal/edit-administrator/edit-administrator.component.ts");
/* harmony import */ var _modal_edit_about_edit_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modal/edit-about/edit-about.component */ "./src/app/modal/edit-about/edit-about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(modalService, fsAuth, router, db) {
        var _this = this;
        this.modalService = modalService;
        this.fsAuth = fsAuth;
        this.router = router;
        this.db = db;
        this.closeResult = '';
        this.isAdmin = false;
        this.user = [];
        this.data = {};
        this.oldAkses = [];
        this.akses = [
            {
                0: '/admin/dashboard',
                1: '/admin/portofolio',
            }
        ];
        this.datas = [];
        this.dataAbout = [];
        this.about = [];
        this.error = {};
        this.loadingHapus = {};
        this.fsAuth.auth.onAuthStateChanged(function (user) {
            if (user.uid != null) {
                _this.isAdmin = true;
            }
            _this.getUser();
            _this.getAbout();
        });
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.open = function (administrator) {
        var modalRef = this.modalService.open(_modal_modal_administrator_modal_administrator_component__WEBPACK_IMPORTED_MODULE_5__["ModalAdministratorComponent"]);
        modalRef.componentInstance.user = this.user;
        modalRef.result.then(function (res) {
            console.log("CloseButton", res);
        }, function (dismiss) {
            console.log("Cross Button", dismiss);
        });
    };
    SettingsComponent.prototype.openEdit = function (item) {
        this.datas = item;
        console.log(this.datas);
        var modalRef = this.modalService.open(_modal_edit_administrator_edit_administrator_component__WEBPACK_IMPORTED_MODULE_6__["EditAdministratorComponent"]);
        modalRef.componentInstance.user = this.datas;
        modalRef.result.then(function (res) {
            console.log("CloseButton", res);
        }, function (dismiss) {
            console.log("Cross Button", dismiss);
        });
    };
    SettingsComponent.prototype.openEditAbout = function (item) {
        this.dataAbout = item;
        console.log(this.dataAbout);
        var modalRef = this.modalService.open(_modal_edit_about_edit_about_component__WEBPACK_IMPORTED_MODULE_7__["EditAboutComponent"]);
        modalRef.componentInstance.about = this.dataAbout;
        modalRef.result.then(function (res) {
            console.log("CloseButton", res);
        }, function (dismiss) {
            console.log("Cross Button", dismiss);
        });
    };
    SettingsComponent.prototype.getUser = function () {
        var _this = this;
        this.db.collection('users').valueChanges().subscribe(function (res) {
            _this.user = res;
        });
    };
    SettingsComponent.prototype.getAbout = function () {
        var _this = this;
        this.db.collection('settings').doc('about').collection('data').doc('about').valueChanges().subscribe(function (res) {
            _this.about = res;
        });
    };
    SettingsComponent.prototype.tambahData = function () {
        this.loading = true;
        if (this.user.id == undefined)
            this.tambahAkun();
        else
            this.updateMember();
    };
    SettingsComponent.prototype.tambahAkun = function () {
        var _this = this;
        this.fsAuth.auth.createUserWithEmailAndPassword(this.data.email, this.data.phone).then(function (res) {
            _this.tambahUser(res);
        });
    };
    SettingsComponent.prototype.tambahUser = function (user) {
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
    SettingsComponent.prototype.tambahTeam = function (user) {
        var dt = {
            images: '',
            nama: this.data.nama,
            skill: this.data.skill
        };
        this.db.collection('settings').doc('teams').collection('dataTeam').doc(user.user.uid).set(dt).then(function (res) {
        });
    };
    SettingsComponent.prototype.tambahAdmin = function (user) {
        var dt = {
            akses: ['/admin/dashboard'],
            kategori: this.data.category
        };
        if (this.user != null) {
            this.db.collection('admin').doc(user.user.uid).set(dt).then(function (res) {
                alert('Administrator baru berhasil ditambahkan');
            });
        }
        else {
            var akses = this.oldAkses.concat(this.akses);
            this.db.collection('admin').doc(user.user.uid).update({ akses: akses }).then(function (res) {
                alert('Administrator baru berhasil ditambahkan');
            });
        }
    };
    SettingsComponent.prototype.updateMember = function () {
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
        });
    };
    SettingsComponent.prototype.hapus = function (rowID) {
        var r = confirm("Anda yakin ingin menghapus data ini secara permanen ?");
        if (r == true) {
            this.hapusAkses(rowID);
            this.hapusTeam(rowID);
            this.db.collection('users').doc(rowID).delete();
            alert('Administrator baru berhasil dihapus');
        }
        else {
            return;
        }
    };
    SettingsComponent.prototype.hapusAkses = function (id) {
        var _this = this;
        this.loadingHapus[id] = true;
        this.db.collection('admin').doc(id).delete().then(function (res) {
            _this.loadingHapus[id] = false;
        });
    };
    SettingsComponent.prototype.hapusTeam = function (id) {
        var _this = this;
        this.loadingHapus[id] = true;
        this.db.collection('settings').doc('teams').collection('dataTeam').doc(id).delete().then(function (res) {
            _this.loadingHapus[id] = false;
        });
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/admin/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/admin/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/admin/stories/stories.component.html":
/*!******************************************************!*\
  !*** ./src/app/admin/stories/stories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\" *ngFor=\"let data of dataStories\">\n  <div class=\"card-header\">\n    {{data.name}}\n  </div>\n  <div class=\"card-body\">\n    <img src=\"{{data.image}}\" style=\"height: 350px; width: 100%;\"/>\n    <h5 class=\"card-title\">{{data.email}}</h5>\n    <p class=\"card-text\">{{data.message}}.</p>\n    <button (click)=\"accept(data)\" class=\"btn btn-primary\" *ngIf=\"data.verified == false\" [disabled]=\"loading\">{{loading ? 'Please wait..':'Accept'}}</button>\n    <button (click)=\"delete(data)\" class=\"btn btn-danger\" [disabled]=\"loading\">{{loading ? 'Please wait..':'Delete'}}</button>\n    <button class=\"btn btn-success\" *ngIf=\"data.verified == true\">Accepted</button>\n  </div>\n  <div class=\"card-footer text-muted\">\n    {{data.datetime.toDate() | date:'dd MMMM yyy'}}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/admin/stories/stories.component.scss":
/*!******************************************************!*\
  !*** ./src/app/admin/stories/stories.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/stories/stories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/admin/stories/stories.component.ts ***!
  \****************************************************/
/*! exports provided: StoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoriesComponent", function() { return StoriesComponent; });
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




var StoriesComponent = /** @class */ (function () {
    function StoriesComponent(fsAuth, router, db) {
        var _this = this;
        this.fsAuth = fsAuth;
        this.router = router;
        this.db = db;
        this.isAdmin = false;
        this.user = [];
        this.verified = false;
        this.fsAuth.auth.onAuthStateChanged(function (user) {
            if (user.uid != null) {
                _this.isAdmin = true;
            }
            _this.getStories();
        });
    }
    StoriesComponent.prototype.ngOnInit = function () {
    };
    StoriesComponent.prototype.getStories = function () {
        var _this = this;
        this.db.collection('stories', function (ref) {
            return ref.orderBy('verified', 'asc');
        }).valueChanges({ idField: 'id' }).subscribe(function (res) {
            _this.dataStories = res;
        });
    };
    StoriesComponent.prototype.accept = function (data) {
        var _this = this;
        var id = data.id;
        console.log(id);
        var r = confirm("Are you sure you want to accept this story?");
        if (r == true) {
            var dt = { verified: true };
            this.db.collection('stories').doc(id).update(dt).then(function (res) {
                _this.loading = false;
                window.location.reload();
            });
        }
        else {
            return;
        }
    };
    StoriesComponent.prototype.delete = function (data) {
        var _this = this;
        var id = data.id;
        console.log(id);
        var r = confirm("Are you sure you want to delete this story?");
        if (r == true) {
            this.db.collection('stories').doc(id).delete().then(function (res) {
                _this.loading = false;
                window.location.reload();
            });
        }
        else {
            return;
        }
    };
    StoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stories',
            template: __webpack_require__(/*! ./stories.component.html */ "./src/app/admin/stories/stories.component.html"),
            styles: [__webpack_require__(/*! ./stories.component.scss */ "./src/app/admin/stories/stories.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], StoriesComponent);
    return StoriesComponent;
}());



/***/ }),

/***/ "./src/app/admin/testimoni/testimoni.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/testimoni/testimoni.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  testimoni works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin/testimoni/testimoni.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/testimoni/testimoni.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/testimoni/testimoni.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/testimoni/testimoni.component.ts ***!
  \********************************************************/
/*! exports provided: TestimoniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimoniComponent", function() { return TestimoniComponent; });
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

var TestimoniComponent = /** @class */ (function () {
    function TestimoniComponent() {
    }
    TestimoniComponent.prototype.ngOnInit = function () {
    };
    TestimoniComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimoni',
            template: __webpack_require__(/*! ./testimoni.component.html */ "./src/app/admin/testimoni/testimoni.component.html"),
            styles: [__webpack_require__(/*! ./testimoni.component.scss */ "./src/app/admin/testimoni/testimoni.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimoniComponent);
    return TestimoniComponent;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map