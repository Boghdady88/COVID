function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _pages_country_country_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/country/country.component */
    "./src/app/pages/country/country.component.ts");
    /* harmony import */


    var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/not-found/not-found.component */
    "./src/app/pages/not-found/not-found.component.ts");

    var routes = [{
      path: '',
      component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }, {
      path: 'country/:name',
      component: _pages_country_country_component__WEBPACK_IMPORTED_MODULE_3__["CountryComponent"]
    }, {
      path: '**',
      component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _layouts_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./layouts/layout.component */
    "./src/app/layouts/layout.component.ts");

    var AppComponent = function AppComponent(translate) {
      _classCallCheck(this, AppComponent);

      this.translate = translate;
      translate.addLangs(['en', 'fr', 'de']);
      translate.setDefaultLang('en');
      var browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/en|de|fr/) ? browserLang : 'en');
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-layout");
        }
      },
      directives: [_layouts_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: HttpLoaderFactory, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function () {
      return HttpLoaderFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _layouts_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./layouts/layout.component */
    "./src/app/layouts/layout.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
    /* harmony import */


    var _layouts_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./layouts/topbar/topbar.component */
    "./src/app/layouts/topbar/topbar.component.ts");
    /* harmony import */


    var _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./layouts/navbar/navbar.component */
    "./src/app/layouts/navbar/navbar.component.ts");
    /* harmony import */


    var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./layouts/footer/footer.component */
    "./src/app/layouts/footer/footer.component.ts");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _pages_country_country_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./pages/country/country.component */
    "./src/app/pages/country/country.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./pages/not-found/not-found.component */
    "./src/app/pages/not-found/not-found.component.ts");
    /* harmony import */


    var _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./shared/countup/countup.component */
    "./src/app/shared/countup/countup.component.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");

    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {};

    function HttpLoaderFactory(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http);
    }

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_21__["ModalModule"].forRoot(), _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production,
        registrationStrategy: 'registerImmediately'
      }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
        }
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _layouts_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"], _layouts_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_12__["TopbarComponent"], _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"], _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"], _pages_country_country_component__WEBPACK_IMPORTED_MODULE_16__["CountryComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__["NotFoundComponent"], _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_20__["CountupComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_21__["ModalModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _layouts_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"], _layouts_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_12__["TopbarComponent"], _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"], _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_15__["DashboardComponent"], _pages_country_country_component__WEBPACK_IMPORTED_MODULE_16__["CountryComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_19__["NotFoundComponent"], _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_20__["CountupComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_21__["ModalModule"].forRoot(), _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production,
            registrationStrategy: 'registerImmediately'
          }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
              useFactory: HttpLoaderFactory,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }
          })],
          providers: [{
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/getdata.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/services/getdata.service.ts ***!
    \**************************************************/

  /*! exports provided: GetdataService */

  /***/
  function srcAppCoreServicesGetdataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetdataService", function () {
      return GetdataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"];

    var GetdataService = /*#__PURE__*/function () {
      function GetdataService(_http) {
        _classCallCheck(this, GetdataService);

        this._http = _http;
        this.host = "https://api.coronastatistics.live";
      }

      _createClass(GetdataService, [{
        key: "getAll",
        value: function getAll(type) {
          return this._http.get("".concat(this.host, "/countries?sort=").concat(type)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getCountry",
        value: function getCountry(name) {
          return this._http.get("".concat(this.host, "/countries/").concat(name)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getTimeline",
        value: function getTimeline() {
          return this._http.get("".concat(this.host, "/timeline")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getTimelineCountry",
        value: function getTimelineCountry(country) {
          return this._http.get("".concat(this.host, "/timeline/").concat(country)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getTimelineGlobal",
        value: function getTimelineGlobal() {
          return this._http.get("".concat(this.host, "/timeline/global")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          window.alert("Please check your internet connection!.");
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }
      }]);

      return GetdataService;
    }();

    GetdataService.ɵfac = function GetdataService_Factory(t) {
      return new (t || GetdataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    GetdataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GetdataService,
      factory: GetdataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetdataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layouts/footer/footer.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/layouts/footer/footer.component.ts ***!
    \****************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppLayoutsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FooterComponent_option_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var lang_r40 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lang_r40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r40);
      }
    }

    var FooterComponent = function FooterComponent(translate) {
      _classCallCheck(this, FooterComponent);

      this.translate = translate;
    };

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]));
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 36,
      vars: 19,
      consts: [[1, "footer"], [1, "container-fluid"], [1, "row"], [1, "col-md-4", "pt-1"], [1, "text-danger"], [1, "fas", "fa-heart"], ["href", "https://ossamarafique.com"], [1, "col-md-6", "pt-1"], [1, "text-md-right", "footer-links", "d-none", "d-sm-block"], ["href", "https://github.com/OssamaRafique/Corona-Statistics-And-Tracker-Dashboard-Angular-9"], [1, "text-blue"], [1, "fab", "fa-osi"], ["href", "https://ko-fi.com/ossamarafique"], [1, "text-warning"], [1, "fas", "fa-mug-hot"], ["href", "https://www.ossamarafique.com/#contact"], [1, "text-success"], [1, "far", "fa-paper-plane"], [1, "col-md-2"], [1, "form-control", "form-control-sm", 3, "change"], ["lang", ""], ["selected", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ossama Rafique");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 19, 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FooterComponent_Template_select_change_30_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

            var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

            return ctx.translate.use(_r38.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, FooterComponent_option_35_Template, 2, 2, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" 2020 \xA9 ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, "Shared.Other.12"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, "Shared.Other.13"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 11, "Shared.Other.7"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 13, "Shared.Other.8"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 15, "Shared.Other.11"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 17, "Shared.Other.20"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.translate.getLangs());
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [{
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layouts/layout.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/layouts/layout.component.ts ***!
    \*********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutsLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./topbar/topbar.component */
    "./src/app/layouts/topbar/topbar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/layouts/footer/footer.component.ts");

    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);

        this.showMobileMenu = false;
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)();
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 5,
      vars: 0,
      consts: [["id", "topnav"], [1, "wrapper"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-topbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        }
      },
      directives: [_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_1__["TopbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layouts/navbar/navbar.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/layouts/navbar/navbar.component.ts ***!
    \****************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppLayoutsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showMobileMenu = false;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // activate menu item based on location
          var links = document.getElementsByClassName('side-nav-link-ref');
          var matchingMenuItem = null; // tslint:disable-next-line: prefer-for-of

          for (var i = 0; i < links.length; i++) {
            // tslint:disable-next-line: no-string-literal
            if (location.pathname === links[i]['pathname']) {
              matchingMenuItem = links[i];
              break;
            }
          }

          if (matchingMenuItem) {
            matchingMenuItem.classList.add('active');
            var parent = matchingMenuItem.parentElement;
            /**
             * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
             * We should come up with non hard coded approach
             */

            if (parent) {
              parent.classList.add('active');
              var parent2 = parent.parentElement;

              if (parent2) {
                parent2.classList.add('in');
              }

              var parent3 = parent2.parentElement;

              if (parent3) {
                parent3.classList.add('active');
                var childAnchor = parent3.querySelector('.has-dropdown');

                if (childAnchor) {
                  childAnchor.classList.add('active');
                }
              }

              var parent4 = parent3.parentElement;

              if (parent4) {
                parent4.classList.add('in');
              }

              var parent5 = parent4.parentElement;

              if (parent5) {
                parent5.classList.add('active');
              }
            }
          }
        }
        /**
         * On menu click
         */

      }, {
        key: "onMenuClick",
        value: function onMenuClick(event) {
          var nextEl = event.target.nextSibling;

          if (nextEl && !nextEl.classList.contains('open')) {
            var parentEl = event.target.parentNode;

            if (parentEl) {
              parentEl.classList.remove('open');
            }

            nextEl.classList.add('open');
          } else if (nextEl) {
            nextEl.classList.remove('open');
          }

          return false;
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      inputs: {
        showMobileMenu: "showMobileMenu"
      },
      decls: 2,
      vars: 0,
      consts: [[1, "topbar-menu"], [1, "container-fluid"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [];
      }, {
        showMobileMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/layouts/topbar/topbar.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/layouts/topbar/topbar.component.ts ***!
    \****************************************************/

  /*! exports provided: TopbarComponent */

  /***/
  function srcAppLayoutsTopbarTopbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopbarComponent", function () {
      return TopbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var TopbarComponent = /*#__PURE__*/function () {
      function TopbarComponent() {
        _classCallCheck(this, TopbarComponent);

        this.showButton = false;
      }

      _createClass(TopbarComponent, [{
        key: "onbeforeinstallprompt",
        value: function onbeforeinstallprompt(e) {
          console.log(e); // Prevent Chrome 67 and earlier from automatically showing the prompt

          e.preventDefault(); // Stash the event so it can be triggered later.

          this.deferredPrompt = e;
          this.showButton = true;
        }
      }, {
        key: "addToHomeScreen",
        value: function addToHomeScreen() {
          var _this = this;

          // hide our user interface that shows our A2HS button
          this.showButton = false; // Show the prompt

          this.deferredPrompt.prompt(); // Wait for the user to respond to the prompt

          this.deferredPrompt.userChoice.then(function (choiceResult) {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
            } else {
              console.log('User dismissed the A2HS prompt');
            }

            _this.deferredPrompt = null;
          });
        }
      }]);

      return TopbarComponent;
    }();

    TopbarComponent.ɵfac = function TopbarComponent_Factory(t) {
      return new (t || TopbarComponent)();
    };

    TopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopbarComponent,
      selectors: [["app-topbar"]],
      hostBindings: function TopbarComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeinstallprompt", function TopbarComponent_beforeinstallprompt_HostBindingHandler($event) {
            return ctx.onbeforeinstallprompt($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 12,
      vars: 3,
      consts: [[1, "navbar-custom"], [1, "container-fluid"], [1, "logo-box", "mx-auto"], ["routerLink", "/", 1, "logo", "text-center"], [1, "logo-lg"], ["src", "assets/images/logo-light.png", "alt", "", "height", "40"], [1, "logo-sm"], [1, "btn", "btn-waves-effect", "btn-lighten-blue", "ml-5", "btn-xs", 3, "click"], [1, "fas", "fa-plus-circle"]],
      template: function TopbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopbarComponent_Template_button_click_8_listener() {
            return ctx.addToHomeScreen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 1, "Shared.Other.19"), "");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-topbar',
          templateUrl: './topbar.component.html',
          styleUrls: ['./topbar.component.scss']
        }]
      }], function () {
        return [];
      }, {
        onbeforeinstallprompt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:beforeinstallprompt', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/country/country.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/country/country.component.ts ***!
    \****************************************************/

  /*! exports provided: CountryComponent */

  /***/
  function srcAppPagesCountryCountryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryComponent", function () {
      return CountryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_utils_countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/utils/countries */
    "./src/app/shared/utils/countries.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @amcharts/amcharts4/core */
    "./node_modules/@amcharts/amcharts4/core.js");
    /* harmony import */


    var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @amcharts/amcharts4/charts */
    "./node_modules/@amcharts/amcharts4/charts.js");
    /* harmony import */


    var _core_services_getdata_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../core/services/getdata.service */
    "./src/app/core/services/getdata.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/countup/countup.component */
    "./src/app/shared/countup/countup.component.ts");

    function CountryComponent_h2_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/flags/", ctx_r30.countryCodes[ctx_r30.country.country].toLowerCase(), ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx_r30.country.country);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r30.country.country, "'s ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 4, "Shared.Other.18"), "");
      }
    }

    function CountryComponent_h4_109_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("\n", ctx_r31.country.country, "'s ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, "Home.InfectionCountries.1"), "\n");
      }
    }

    function CountryComponent_span_128_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r32.totalRecoveries / ctx_r32.finishedCases * 100, ".1-2"), "%");
      }
    }

    function CountryComponent_ng_template_129_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "N/A");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CountryComponent_span_140_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r35.totalDeaths / ctx_r35.finishedCases * 100, ".1-2"), "%");
      }
    }

    function CountryComponent_ng_template_141_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "N/A");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var CountryComponent = /*#__PURE__*/function () {
      function CountryComponent(route, _getDataService, zone, translate) {
        _classCallCheck(this, CountryComponent);

        this.route = route;
        this._getDataService = _getDataService;
        this.zone = zone;
        this.translate = translate;
        this.isLoading = true;
        this.totalCases = 0;
        this.totalDeaths = 0;
        this.totalCritical = 0;
        this.todayCases = 0;
        this.todayDeaths = 0;
        this.activeCases = 0;
        this.casesPer1M = 0;
        this.finishedCases = 0;
        this.countryCodes = _shared_utils_countries__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.translations = {};
      }

      _createClass(CountryComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this2 = this;

          this.zone.runOutsideAngular(function () {
            if (_this2.pieChart) {
              _this2.pieChart.dispose();
            }

            if (_this2.lineChart) {
              _this2.lineChart.dispose();
            }

            if (_this2.radarChart) {
              _this2.radarChart.dispose();
            }
          });
        }
      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.translate.get(['Shared.Other.14', 'Shared.Other.15', 'Shared.Other.16', 'Shared.Other.17', 'Shared.TopCards.1', 'Shared.TopCards.3', 'Shared.TopCards.4']).subscribe(function (translations) {
                      _this3.setTranslations(translations);

                      return 0;
                    });

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          var nameTimeline = this.route.snapshot.paramMap.get("name").toLowerCase();

          if (nameTimeline == "usa") {
            nameTimeline = "us";
          } else if (nameTimeline == "taiwan") {
            nameTimeline = "taiwan*";
          } else if (nameTimeline == "isle of man") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "aruba") {
            nameTimeline = "netherlands";
          } else if (nameTimeline == "sint maarten") {
            nameTimeline = "netherlands";
          } else if (nameTimeline == "st. vincent grenadines") {
            nameTimeline = "saint vincent and the grenadines";
          } else if (nameTimeline == "timor-leste") {
            nameTimeline = "East Timor";
          } else if (nameTimeline == "montserrat") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "gambia") {
            nameTimeline = "gambia, the";
          } else if (nameTimeline == "cayman islands") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "bermuda") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "greenland") {
            nameTimeline = "denmark";
          } else if (nameTimeline == "st. barth") {
            nameTimeline = "saint barthelemy";
          } else if (nameTimeline == "congo") {
            nameTimeline = "congo (brazzaville)";
          } else if (nameTimeline == "saint martin") {
            nameTimeline = "france";
          } else if (nameTimeline == "gibraltar") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "mayotte") {
            nameTimeline = "france";
          } else if (nameTimeline == "bahamas") {
            nameTimeline = "bahamas, the";
          } else if (nameTimeline == "french guiana") {
            nameTimeline = "france";
          } else if (nameTimeline == "u.s. virgin islands") {
            nameTimeline = "us";
          } else if (nameTimeline == "curaçao") {
            nameTimeline = "netherlands";
          } else if (nameTimeline == "puerto rico") {
            nameTimeline = "us";
          } else if (nameTimeline == "french polynesia") {
            nameTimeline = "france";
          } else if (nameTimeline == "ivory coast") {
            nameTimeline = "Cote d'Ivoire";
          } else if (nameTimeline == "macao") {
            nameTimeline = "china";
          } else if (nameTimeline == "drc") {
            nameTimeline = "congo (kinshasa)";
          } else if (nameTimeline == "channel islands") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "réunion") {
            nameTimeline = "france";
          } else if (nameTimeline == "guadeloupe") {
            nameTimeline = "france";
          } else if (nameTimeline == "faeroe islands") {
            nameTimeline = "Denmark";
          } else if (nameTimeline == "uae") {
            nameTimeline = "United Arab Emirates";
          } else if (nameTimeline == "diamond princess") {
            nameTimeline = "australia";
          } else if (nameTimeline == "hong kong") {
            nameTimeline = "china";
          } else if (nameTimeline == "uk") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "car") {
            nameTimeline = "central african republic";
          }

          this.zone.runOutsideAngular(function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])(_this4._getDataService.getCountry(_this4.route.snapshot.paramMap.get("name")), _this4._getDataService.getTimelineCountry(nameTimeline)).subscribe(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  getAllData = _ref2[0],
                  getTimelineData = _ref2[1];

              _this4.isLoading = false;
              _this4.country = getAllData;
              _this4.totalCases = getAllData["cases"];
              _this4.totalDeaths = getAllData["deaths"];
              _this4.totalRecoveries = getAllData["recovered"];
              _this4.totalCritical = getAllData["critical"];
              _this4.todayCases = getAllData["todayCases"];
              _this4.todayDeaths = getAllData["todayDeaths"];
              _this4.activeCases = getAllData["active"];
              _this4.casesPer1M = getAllData["casesPerOneMillion"];
              _this4.finishedCases = _this4.totalDeaths + _this4.totalRecoveries;
              _this4.timeLine = getTimelineData;

              _this4.loadPieChart();

              _this4.loadLineChart();

              _this4.loadRadar();
            });
          });
        }
      }, {
        key: "loadLineChart",
        value: function loadLineChart() {
          var _this5 = this;

          var caseData = [];

          if (!this.timeLine.multiple) {
            caseData = this.timeLine.data.timeline;
          } else {
            var data = {};
            this.timeLine.data.forEach(function (element) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _this6 = this;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        element.timeline.forEach(function (o) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                    if (!data.hasOwnProperty(o.date)) {
                                      data[o.date] = {};
                                      data[o.date]["cases"] = 0;
                                      data[o.date]["deaths"] = 0;
                                      data[o.date]["recovered"] = 0;
                                    }

                                    data[o.date].cases += parseInt(o.cases);
                                    data[o.date].deaths += parseInt(o.deaths);
                                    data[o.date].recovered += parseInt(o.recovered);

                                  case 4:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2);
                          }));
                        });

                      case 1:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));
            });
            Object.keys(data).forEach(function (key) {
              caseData.push({
                date: new Date(key),
                cases: data[key].cases,
                recovered: data[key].recovered,
                deaths: data[key].deaths
              });
            });
          }

          caseData.push({
            date: new Date().getTime(),
            cases: this.totalCases,
            recovered: this.totalRecoveries,
            deaths: this.totalDeaths
          });

          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["create"]("lineChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["XYChart"]);

          chart.numberFormatter.numberFormat = "#a";
          chart.numberFormatter.bigNumberPrefixes = [{
            "number": 1e+3,
            "suffix": "K"
          }, {
            "number": 1e+6,
            "suffix": "M"
          }, {
            "number": 1e+9,
            "suffix": "B"
          }]; // Create axes

          var dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["DateAxis"]());
          dateAxis.renderer.minGridDistance = 50;
          var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["ValueAxis"]());
          valueAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#adb5bd");
          dateAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#adb5bd");
          chart = this.createSeriesLine(chart, "#21AFDD", "cases");
          chart = this.createSeriesLine(chart, "#10c469", "recovered");
          chart = this.createSeriesLine(chart, "#ff5b5b", "deaths");
          chart.data = caseData;
          chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["Legend"]();
          chart.legend.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#adb5bd");
          chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["XYCursor"]();
          this.lineChart = chart;
        }
      }, {
        key: "loadPieChart",
        value: function loadPieChart() {
          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["create"]("pieChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["PieChart"]);

          chart.data.push({
            type: 'Recoveries',
            number: this.totalRecoveries,
            "color": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#10c469")
          });
          chart.data.push({
            type: 'Deaths',
            number: this.totalDeaths,
            "color": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#ff5b5b")
          });
          chart.data.push({
            type: 'Critical',
            number: this.totalCritical,
            "color": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#f9c851")
          });
          var pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["PieSeries"]());
          pieSeries.dataFields.value = "number";
          pieSeries.dataFields.category = "type";
          pieSeries.labels.template.disabled = true;
          pieSeries.ticks.template.disabled = true;
          pieSeries.slices.template.propertyFields.fill = "color";
          pieSeries.slices.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#313a46");
          pieSeries.slices.template.strokeWidth = 1;
          pieSeries.slices.template.strokeOpacity = 1;
          this.pieChart = chart;
        }
      }, {
        key: "loadRadar",
        value: function loadRadar() {
          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["create"]("radarChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["RadarChart"]); // Add data


          chart.data = [{
            "category": this.translations.critical,
            "value": this.totalCritical / this.activeCases * 100,
            "full": 100
          }, {
            "category": this.translations.deaths,
            "value": this.totalDeaths / this.finishedCases * 100,
            "full": 100
          }, {
            "category": this.translations.recovered,
            "value": this.totalRecoveries / this.finishedCases * 100,
            "full": 100
          }, {
            "category": this.translations.active,
            "value": 100 - this.totalCritical / this.activeCases * 100,
            "full": 100
          }]; // Make chart not full circle

          chart.startAngle = -90;
          chart.endAngle = 180;
          chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["percent"](20); // Set number format

          chart.numberFormatter.numberFormat = "#.#'%'"; // Create axes

          var categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["CategoryAxis"]());
          categoryAxis.dataFields.category = "category";
          categoryAxis.renderer.grid.template.location = 0;
          categoryAxis.renderer.grid.template.strokeOpacity = 0;
          categoryAxis.renderer.labels.template.horizontalCenter = "right";
          categoryAxis.renderer.labels.template.adapter.add("fill", function (fill, target) {
            if (target.dataItem.index == 0) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#f9c851");
            }

            if (target.dataItem.index == 1) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#ff5b5b");
            }

            if (target.dataItem.index == 2) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#10c469");
            }

            return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#21AFDD");
          });
          categoryAxis.renderer.minGridDistance = 10;
          var valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["ValueAxis"]());
          valueAxis.renderer.grid.template.strokeOpacity = 0;
          valueAxis.min = 0;
          valueAxis.max = 100;
          valueAxis.strictMinMax = true;
          valueAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#adb5bd"); // Create series

          var series1 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["RadarColumnSeries"]());
          series1.dataFields.valueX = "full";
          series1.dataFields.categoryY = "category";
          series1.clustered = false;
          series1.columns.template.fill = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["InterfaceColorSet"]().getFor("alternativeBackground");
          series1.columns.template.fillOpacity = 0.08;
          series1.columns.template["cornerRadiusTopLeft"] = 20;
          series1.columns.template.strokeWidth = 0;
          series1.columns.template.radarColumn.cornerRadius = 20;
          var series2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["RadarColumnSeries"]());
          series2.dataFields.valueX = "value";
          series2.dataFields.categoryY = "category";
          series2.clustered = false;
          series2.columns.template.strokeWidth = 0;
          series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
          series2.columns.template.radarColumn.cornerRadius = 20;
          series2.columns.template.adapter.add("fill", function (fill, target) {
            //return chart.colors.getIndex(target.dataItem.index);
            if (target.dataItem.index == 0) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#f9c851");
            }

            if (target.dataItem.index == 1) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#ff5b5b");
            }

            if (target.dataItem.index == 2) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#10c469");
            }

            return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#21AFDD");
          }); // Add cursor

          chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["RadarCursor"]();
          chart.cursor.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#282e38");
          chart.tooltip.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#282e38");
          this.radarChart = chart;
        }
      }, {
        key: "createSeriesLine",
        value: function createSeriesLine(chart, color, type) {
          var name = null;

          if (type == "cases") {
            name = this.translations.cases;
          } else if (type == "recoveries") {
            name = this.translations.recovered;
          } else if (type == "deaths") {
            name = this.translations.deaths;
          }

          if (!name) {
            name = type.charAt(0).toUpperCase() + type.slice(1);
          }

          var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["LineSeries"]());
          series.dataFields.valueY = type;
          series.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"](color);
          series.dataFields.dateX = "date";
          series.strokeWidth = 2;
          series.minBulletDistance = 10;
          series.tooltipText = "{valueY} " + name;
          series.tooltip.pointerOrientation = "vertical";
          series.tooltip.background.cornerRadius = 20;
          series.tooltip.background.fillOpacity = 0.5;
          series.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"](color);
          series.legendSettings.labelText = name;
          series.tooltip.autoTextColor = false;
          series.tooltip.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#282e38");
          return chart;
        }
      }, {
        key: "setTranslations",
        value: function setTranslations(translations) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.translations.active = translations['Shared.Other.14'];
                    this.translations.recovered = translations['Shared.Other.15'];
                    this.translations.deaths = translations['Shared.Other.16'];
                    this.translations.critical = translations['Shared.Other.17'];
                    this.translations.cases = translations['Shared.Other.14'];

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return CountryComponent;
    }();

    CountryComponent.ɵfac = function CountryComponent_Factory(t) {
      return new (t || CountryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_getdata_service__WEBPACK_IMPORTED_MODULE_6__["GetdataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]));
    };

    CountryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CountryComponent,
      selectors: [["app-country"]],
      decls: 193,
      vars: 147,
      consts: [[1, "container-fluid"], ["class", "text-center mt-3 mb-3", 4, "ngIf"], [1, "row"], [1, "col-xl-3", "col-md-6", "col-6"], [1, "card-box"], [1, "header-title", "m-0", "text-md-left", "text-center"], [1, "topBoxes"], [1, "fa-3x", "text-center"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2"], [1, "topBoxesDetails", "text-md-right", "text-center"], [1, "badge", "badge-blue", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "mdi", "mdi-trending-up"], [1, "font-weight-normal"], [1, "text-muted"], [1, "progress", "progress-bar-alt-blue", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-blue", 2, "width", "100%"], [1, "badge", "badge-danger", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-danger", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "100%"], [1, "badge", "badge-success", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-success", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "100%"], [1, "badge", "badge-warning", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-warning", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "100%"], [1, "col-xl-4"], [1, "header-title", "mb-3"], [1, "inbox-widget"], ["id", "radarChart", 2, "width", "100%", "height", "400px"], [1, "col-xl-8"], [1, "header-title", "mt-0", "mb-3", "mt-md-0"], [1, "table-responsive"], ["id", "lineChart", 2, "width", "100%", "height", "400px", "overflow", "hidden"], ["class", "header-title mb-3", 4, "ngIf"], ["id", "pieChart", 2, "width", "100%", "height", "300px"], [1, "col-xl-5"], [1, "header-title", "mt-0", "mb-3"], [1, "col-12"], [1, "col-xl-6", "col-md-6"], [1, "card-box", "widget-user", "bg-d"], [1, "text-center"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-blue"], [1, "font-weight-normal", "text-success"], [4, "ngIf", "ngIfElse"], ["naRecovery", ""], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-danger"], [1, "font-weight-normal", "text-danger"], ["naDeath", ""], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-warning"], [1, "font-weight-normal", "text-warning"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-info"], [1, "font-weight-normal", "text-info"], [1, "col-xl-3"], [1, "card-box", "text-center"], ["target", "_blank", "href", "https://www.facebook.com/sharer/sharer.php?u=https://coronastatistics.live", 1, "btn", "btn-icon", "waves-effect", "btn-blue", "mr-1"], [1, "fab", "fa-facebook"], ["target", "_blank", "href", "https://twitter.com/intent/tweet?url=https://coronastatistics.live&hashtags=Covid_19,CoronavirusPandemic,coronastatistics,corona&text=Stay%20Updated%20with%20Live%20Coronavirus%20Tracker", 1, "btn", "btn-icon", "waves-effect", "btn-blue", "mr-1"], [1, "fab", "fa-twitter"], ["target", "_blank", "href", "https://vk.com/share.php?url=https://coronastatistics.live", 1, "btn", "btn-icon", "waves-effect", "btn-blue", "mr-1"], [1, "fab", "fa-vk"], ["href", "whatsapp://send?text=Coronavirus live statistics and tracker https://coronastatistics.live", "data-action", "share/whatsapp/share", 1, "btn", "btn-icon", "waves-effect", "btn-blue"], [1, "fab", "fa-whatsapp"], ["href", "https://ko-fi.com/ossamarafique", 1, "btn", "btn-", "waves-effect", "btn-danger", "d-block", "mt-1", "mx-auto"], [1, "fas", "fa-coffee"], [1, "text-center", "mt-3", "mb-3"], ["width", "100px", 3, "src", "alt"]],
      template: function CountryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CountryComponent_h2_1_Template, 4, 6, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](58, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](61, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](76, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](80, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](83, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](84, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "h4", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](92, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](94, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "h4", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](101, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](105, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](109, CountryComponent_h4_109_Template, 3, 4, "h4", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](111, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](113, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "h4", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](118, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "i", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "h2", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](128, CountryComponent_span_128_Template, 3, 4, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, CountryComponent_ng_template_129_Template, 2, 0, "ng-template", null, 44, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](133, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](138, "i", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "h2", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](140, CountryComponent_span_140_Template, 3, 4, "span", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](141, CountryComponent_ng_template_141_Template, 2, 0, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](145, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](150, "i", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "h2", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](153, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](156, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "i", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "h2", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](164, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](167, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](172, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](173, "app-countup");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](177, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](180, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "a", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](182, "i", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "a", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "i", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "a", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "i", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "a", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "i", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "a", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](192, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](130);

          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](142);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 82, "Shared.TopCards.2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 84, ctx.totalCases), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.todayCases, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 86, "Shared.TopCards.6"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 88, "Shared.TopCards.3"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](33, 90, ctx.totalDeaths / ctx.finishedCases * 100, ".1-2"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 93, ctx.totalDeaths), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.todayDeaths, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 95, "Shared.TopCards.6"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 97, "Shared.TopCards.4"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](54, 99, ctx.totalRecoveries / ctx.finishedCases * 100, ".1-2"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](58, 102, ctx.totalRecoveries), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](61, 104, ctx.activeCases), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](62, 106, "Shared.TopCards.8"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](69, 108, "Shared.TopCards.5"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](76, 110, ctx.totalCritical / ctx.activeCases * 100, ".1-2"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](80, 113, ctx.totalCritical), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](83, 115, ctx.casesPer1M), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](84, 117, "Shared.TopCards.7"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](92, 119, "Shared.RateDistribution.1"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](101, 121, "Shared.InfectionsHistory.1"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](118, 123, "Shared.Rates.1"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.finishedCases > 0)("ngIfElse", _r33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](133, 125, "Shared.Rates.2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.finishedCases > 0)("ngIfElse", _r36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](145, 127, "Shared.Rates.3"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](153, 129, ctx.totalCritical / ctx.activeCases * 100, ".1-2"), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](156, 132, "Shared.Rates.4"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](164, 134, 100 - ctx.totalCritical / ctx.activeCases * 100, ".1-2"), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](167, 137, "Shared.Rates.4"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](172, 139, "Shared.Other.2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](177, 141, "Shared.Other.9"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](180, 143, "Shared.Other.10"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](192, 145, "Shared.Other.8"), " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_10__["CountupComponent"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"]],
      styles: [".bg-d[_ngcontent-%COMP%] {\n  background-color: #282d37;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY291bnRyeS9FOlxcUHJvamVjdHNcXFdvcmtTcGFjZVxcQ292aWQtMTktU3RhdGlzdGljcy1EYXNoYm9hcmQtQW5ndWxhci05LW1hc3RlciAoMSlcXENvdmlkLTE5LVN0YXRpc3RpY3MtRGFzaGJvYXJkLUFuZ3VsYXItOS1tYXN0ZXIvc3JjXFxhcHBcXHBhZ2VzXFxjb3VudHJ5XFxjb3VudHJ5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb3VudHJ5L2NvdW50cnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY291bnRyeS9jb3VudHJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyODJkMzc7XG59IiwiLmJnLWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyZDM3O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CountryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-country',
          templateUrl: './country.component.html',
          styleUrls: ['./country.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _core_services_getdata_service__WEBPACK_IMPORTED_MODULE_6__["GetdataService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_utils_countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/utils/countries */
    "./src/app/shared/utils/countries.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @amcharts/amcharts4/core */
    "./node_modules/@amcharts/amcharts4/core.js");
    /* harmony import */


    var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @amcharts/amcharts4/charts */
    "./node_modules/@amcharts/amcharts4/charts.js");
    /* harmony import */


    var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @amcharts/amcharts4/themes/animated */
    "./node_modules/@amcharts/amcharts4/themes/animated.js");
    /* harmony import */


    var _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @amcharts/amcharts4/maps */
    "./node_modules/@amcharts/amcharts4/maps.js");
    /* harmony import */


    var _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @amcharts/amcharts4-geodata/worldLow */
    "./node_modules/@amcharts/amcharts4-geodata/worldLow.js");
    /* harmony import */


    var _core_services_getdata_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../core/services/getdata.service */
    "./src/app/core/services/getdata.service.ts");
    /* harmony import */


    var fuse_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! fuse.js */
    "./node_modules/fuse.js/dist/fuse.js");
    /* harmony import */


    var fuse_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../shared/countup/countup.component */
    "./src/app/shared/countup/countup.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = ["autoShownModal"];

    function DashboardComponent_div_1_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h6", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutAnimation", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 6, "Shared.HowToPrevent.Slide1.1"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 8, "Shared.HowToPrevent.Slide1.2"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 10, "Shared.HowToPrevent.Slide1.3"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 12, "Shared.HowToPrevent.Slide1.4"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 14, "Shared.HowToPrevent.Slide1.5"));
      }
    }

    function DashboardComponent_div_1_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutAnimation", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, "Shared.HowToPrevent.Slide2.1"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, "Shared.HowToPrevent.Slide2.2"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 8, "Shared.HowToPrevent.Slide2.3"));
      }
    }

    function DashboardComponent_div_1_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutAnimation", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, "Shared.HowToPrevent.Slide3.1"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, "Shared.HowToPrevent.Slide3.2"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 8, "Shared.HowToPrevent.Slide3.3"));
      }
    }

    function DashboardComponent_div_1_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutAnimation", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, "Shared.HowToPrevent.Slide4.1"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, "Shared.HowToPrevent.Slide4.2"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 8, "Shared.HowToPrevent.Slide4.3"), " ");
      }
    }

    function DashboardComponent_div_1_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h5", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInOutAnimation", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, "Shared.HowToPrevent.Slide5.1"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, "Shared.HowToPrevent.Slide5.2"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 8, "Shared.HowToPrevent.Slide5.3"), " ");
      }
    }

    function DashboardComponent_div_1_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_div_1_div_10_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17);

          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r16.nextStep();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "Shared.HowToPrevent.buttonNext"), " ");
      }
    }

    function DashboardComponent_div_1_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 114);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "input", 115, 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "label", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_div_1_div_11_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r19.close(_r18.checked);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "i", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 2, "Shared.HowToPrevent.dontShowText"));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](12, 4, "Shared.HowToPrevent.buttonClose"), "");
      }
    }

    var _c1 = function _c1() {
      return {
        show: true
      };
    };

    function DashboardComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 94, 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onHidden", function DashboardComponent_div_1_Template_div_onHidden_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22);

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r21.onHidden();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DashboardComponent_div_1_div_5_Template, 17, 16, "div", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DashboardComponent_div_1_div_6_Template, 11, 10, "div", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DashboardComponent_div_1_div_7_Template, 11, 10, "div", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DashboardComponent_div_1_div_8_Template, 11, 10, "div", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, DashboardComponent_div_1_div_9_Template, 11, 10, "div", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, DashboardComponent_div_1_div_10_Template, 6, 3, "div", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DashboardComponent_div_1_div_11_Template, 13, 6, "div", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.modalStep == 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.modalStep == 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.modalStep == 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.modalStep == 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.modalStep == 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.modalStep != 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.modalStep == 5);
      }
    }

    function DashboardComponent_div_129_img_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 129);
      }

      if (rf & 2) {
        var country_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/flags/", ctx_r24.countryCodes[country_r23.country].toLowerCase(), ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", country_r23.country);
      }
    }

    function DashboardComponent_div_129_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 130);
      }

      if (rf & 2) {
        var country_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", country_r23.country);
      }
    }

    var _c2 = function _c2(a1) {
      return ["/country", a1];
    };

    function DashboardComponent_div_129_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 122);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DashboardComponent_div_129_img_3_Template, 1, 2, "img", 123);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DashboardComponent_div_129_ng_template_4_Template, 1, 1, "ng-template", null, 124, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 125);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " & ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 128);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r23 = ctx.$implicit;

        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c2, country_r23.country.toLowerCase()));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.countryCodes[country_r23.country])("ngIfElse", _r25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](country_r23.country);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", country_r23.cases, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 12, "Home.AffectedCountries.10"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", country_r23.deaths, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 14, "Home.AffectedCountries.11"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("+", country_r23.todayCases, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 16, "Home.AffectedCountries.10"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("+", country_r23.todayDeaths, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 18, "Home.AffectedCountries.11"), "");
      }
    }

    function DashboardComponent_h2_250_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx_r7.isLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.fuse.list.length, "");
      }
    } //am4core.useTheme(am4themes_dataviz);


    _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_6__["default"]);

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(zone, _getDataService, translate) {
        _classCallCheck(this, DashboardComponent);

        this.zone = zone;
        this._getDataService = _getDataService;
        this.translate = translate;
        this.isModalShown = false;
        this.modalStep = 1;
        this.translations = {};
        this.caseData = [];
        this.recoveriesData = [];
        this.deathData = [];
        this.isLoading = true;
        this.isLoadingMap = true;
        this.isLoadingCountries = true;
        this.sortType = "todayCases";
        this.countryCodes = _shared_utils_countries__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.countries = [];
      }

      _createClass(DashboardComponent, [{
        key: "ngDoCheck",
        value: function ngDoCheck() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this7 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.translate.get(['Shared.Other.14', 'Shared.Other.15', 'Shared.Other.16', 'Shared.Other.17', 'Shared.TopCards.1', 'Shared.TopCards.3', 'Shared.TopCards.4']).subscribe(function (translations) {
                      _this7.setTranslations(translations);

                      return 0;
                    });

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "calculateSum",
        value: function calculateSum(index) {
          var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.countries;
          var total = 0;

          for (var i = 0, _len = array.length; i < _len; i++) {
            total += array[i][index];
          }

          return total;
        }
      }, {
        key: "sortData",
        value: function sortData(data, sortBy) {
          try {
            var sortProp = sortBy;
            data.sort(function (a, b) {
              if (a[sortProp] < b[sortProp]) {
                return -1;
              } else if (a[sortProp] > b[sortProp]) {
                return 1;
              }

              return 0;
            });
          } catch (e) {
            console.error("ERROR while sorting", e);
            return data;
          }

          return data;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this8 = this;

          this.zone.runOutsideAngular(function () {
            if (_this8.pieChart) {
              _this8.pieChart.dispose();
            }

            if (_this8.mapChart) {
              _this8.mapChart.dispose();
            }

            if (_this8.lineChart) {
              _this8.lineChart.dispose();
            }

            if (_this8.radarChart) {
              _this8.radarChart.dispose();
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            var _this9 = this;

            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.ngDoCheck();

                  case 2:
                    if (!localStorage.getItem("dontShow")) {
                      this.showModal();
                    }

                    this.zone.runOutsideAngular(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this9, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                        var _this10 = this;

                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this._getDataService.getAll(this.sortType), this._getDataService.getTimelineGlobal()).subscribe(function (_ref3) {
                                  var _ref4 = _slicedToArray(_ref3, 2),
                                      getAllData = _ref4[0],
                                      getTimelineData = _ref4[1];

                                  _this10.isLoading = false;
                                  _this10.isLoadingCountries = false;
                                  _this10.isLoadingMap = false;
                                  _this10.countries = getAllData;
                                  _this10.totalCases = _this10.calculateSum("cases");
                                  _this10.totalDeaths = _this10.calculateSum("deaths");
                                  _this10.totalRecoveries = _this10.calculateSum("recovered");
                                  _this10.totalCritical = _this10.calculateSum("critical");
                                  _this10.todayCases = _this10.calculateSum("todayCases");
                                  _this10.todayDeaths = _this10.calculateSum("todayDeaths");
                                  _this10.activeCases = _this10.calculateSum("active");
                                  _this10.casesPer1M = _this10.calculateSum("casesPerOneMillion");
                                  _this10.finishedCases = _this10.totalDeaths + _this10.totalRecoveries;
                                  _this10.fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_10__(_this10.countries, {
                                    shouldSort: true,
                                    threshold: 0.6,
                                    location: 0,
                                    distance: 100,
                                    minMatchCharLength: 1,
                                    keys: ["country"]
                                  });
                                  _this10.timeLine = getTimelineData;

                                  _this10.loadLineChart(false);

                                  _this10.loadRadar();

                                  _this10.loadPieChart();
                                });

                              case 1:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee6, this);
                      }));
                    });

                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "searchCountries",
        value: function searchCountries(key) {
          if (key) {
            this.countries = this.fuse.search(key);
            if (Object(util__WEBPACK_IMPORTED_MODULE_12__["isUndefined"])(this.directiveScroll)) return;
            this.directiveScroll.directiveRef.scrollToTop();
            return;
          }

          this.countries = this.fuse.list;
        }
      }, {
        key: "sortCountries",
        value: function sortCountries(key, skey) {
          this.isLoadingCountries = true;
          this.sortType = key;
          this.loadSorted();
        }
      }, {
        key: "loadSorted",
        value: function loadSorted() {
          var _this11 = this;

          this._getDataService.getAll(this.sortType).subscribe(function (data) {
            _this11.countries = data;
            _this11.isLoadingCountries = false;
          });
        }
      }, {
        key: "loadPieChart",
        value: function loadPieChart() {
          var tempData = this.fuse.list.slice();
          this.sortData(tempData, "cases");
          tempData = tempData.reverse();

          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["create"]("pieChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["PieChart"]);

          chart.data = tempData.slice(0, 10);
          var otherCases = tempData.slice(10, tempData.length);
          chart.data.push({
            country: 'Other',
            cases: this.calculateSum("cases", otherCases)
          });
          var pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["PieSeries"]());
          pieSeries.dataFields.value = "cases";
          pieSeries.dataFields.category = "country";
          pieSeries.labels.template.disabled = true;
          pieSeries.ticks.template.disabled = true;
          pieSeries.slices.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#313a46");
          pieSeries.slices.template.strokeWidth = 1;
          pieSeries.slices.template.strokeOpacity = 1;
          this.pieChart = chart;
          this.loadMap("cases");
        }
      }, {
        key: "loadLineChart",
        value: function loadLineChart(chartType) {
          var _this12 = this;

          this.caseData = [];

          if (this.lineChart) {
            this.lineChart.dispose();
          }

          Object.keys(this.timeLine).forEach(function (key) {
            _this12.caseData.push({
              date: new Date(key),
              cases: _this12.timeLine[key].cases,
              recoveries: _this12.timeLine[key].recovered,
              deaths: _this12.timeLine[key].deaths
            });
          });
          this.caseData.push({
            date: new Date().getTime(),
            cases: this.totalCases,
            recoveries: this.totalRecoveries,
            deaths: this.totalDeaths
          });

          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["create"]("lineChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["XYChart"]);

          chart.numberFormatter.numberFormat = "#a";
          chart.numberFormatter.bigNumberPrefixes = [{
            "number": 1e+3,
            "suffix": "K"
          }, {
            "number": 1e+6,
            "suffix": "M"
          }, {
            "number": 1e+9,
            "suffix": "B"
          }]; // Create axes

          var dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["DateAxis"]());
          dateAxis.renderer.minGridDistance = 50;
          var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["ValueAxis"]());
          valueAxis.logarithmic = chartType;
          valueAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#adb5bd");
          dateAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#adb5bd");
          chart = this.createSeriesLine(chart, "#21AFDD", "cases");
          chart = this.createSeriesLine(chart, "#10c469", "recoveries");
          chart = this.createSeriesLine(chart, "#ff5b5b", "deaths");
          chart.data = this.caseData;
          chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["Legend"]();
          chart.legend.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#adb5bd");
          chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["XYCursor"]();
          this.lineChart = chart;
        }
      }, {
        key: "loadMap",
        value: function loadMap(option) {
          var _this13 = this;

          this.isLoadingMap = true;

          if (this.mapChart) {
            this.mapChart.dispose();
          }

          var color = "#21AFDD";

          if (option == "recovered") {
            color = "#10c469";
          } else if (option == "critical") {
            color = "#f9c851";
          } else if (option == "deaths") {
            color = "#ff5b5b";
          }

          var mapData = [];
          this.fuse.list.forEach(function (element) {
            if (element[option] != 0) {
              mapData.push({
                id: _this13.countryCodes[element.country],
                name: element.country,
                value: element[option],
                color: _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"](color)
              });
            }
          });

          var chartMap = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["create"]("worldChart", _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_7__["MapChart"]); // Set map definition


          chartMap.geodata = _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_8__["default"]; // Set projection

          chartMap.projection = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_7__["projections"].Miller(); // Create map polygon series

          var polygonSeries = chartMap.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_7__["MapPolygonSeries"]());
          polygonSeries.exclude = ["AQ"];
          polygonSeries.useGeodata = true;
          polygonSeries.nonScalingStroke = true;
          polygonSeries.strokeWidth = 0.5;
          polygonSeries.calculateVisualCenter = true;
          var imageSeries = chartMap.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_7__["MapImageSeries"]());
          imageSeries.data = mapData;
          imageSeries.dataFields.value = "value";
          var imageTemplate = imageSeries.mapImages.template;
          imageTemplate.nonScaling = true;
          var circle = imageTemplate.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["Circle"]);
          circle.fillOpacity = 0.7;
          circle.propertyFields.fill = "color";
          circle.tooltipText = "{name}: [bold]{value}[/]";
          chartMap.events.on("ready", function () {
            _this13.isLoadingMap = false;
          });
          imageSeries.heatRules.push({
            "target": circle,
            "property": "radius",
            "min": 4,
            "max": 30,
            "dataField": "value"
          });
          imageTemplate.adapter.add("latitude", function (latitude, target) {
            var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext["id"]);

            if (polygon) {
              return polygon.visualLatitude;
            }

            return latitude;
          });
          imageTemplate.adapter.add("longitude", function (longitude, target) {
            var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext["id"]);

            if (polygon) {
              return polygon.visualLongitude;
            }

            return longitude;
          });
          var polygonTemplate = polygonSeries.mapPolygons.template;
          polygonTemplate.tooltipText = "{name}";
          polygonTemplate.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#282d37");
          polygonTemplate.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#313a46");
          this.mapChart = chartMap;
        }
      }, {
        key: "loadRadar",
        value: function loadRadar() {
          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["create"]("radarChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["RadarChart"]); // Add data


          chart.data = [{
            "category": this.translations.critical,
            "value": this.totalCritical / this.activeCases * 100,
            "full": 100
          }, {
            "category": this.translations.deaths,
            "value": this.totalDeaths / this.finishedCases * 100,
            "full": 100
          }, {
            "category": this.translations.recovered,
            "value": this.totalRecoveries / this.finishedCases * 100,
            "full": 100
          }, {
            "category": this.translations.active,
            "value": 100 - this.totalCritical / this.activeCases * 100,
            "full": 100
          }]; // Make chart not full circle

          chart.startAngle = -90;
          chart.endAngle = 180;
          chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["percent"](20); // Set number format

          chart.numberFormatter.numberFormat = "#.#'%'"; // Create axes

          var categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["CategoryAxis"]());
          categoryAxis.dataFields.category = "category";
          categoryAxis.renderer.grid.template.location = 0;
          categoryAxis.renderer.grid.template.strokeOpacity = 0;
          categoryAxis.renderer.labels.template.horizontalCenter = "right";
          categoryAxis.renderer.labels.template.adapter.add("fill", function (fill, target) {
            if (target.dataItem.index == 0) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#f9c851");
            }

            if (target.dataItem.index == 1) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#ff5b5b");
            }

            if (target.dataItem.index == 2) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#10c469");
            }

            return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#21AFDD");
          });
          categoryAxis.renderer.minGridDistance = 10;
          var valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["ValueAxis"]());
          valueAxis.renderer.grid.template.strokeOpacity = 0;
          valueAxis.min = 0;
          valueAxis.max = 100;
          valueAxis.strictMinMax = true;
          valueAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#adb5bd"); // Create series

          var series1 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["RadarColumnSeries"]());
          series1.dataFields.valueX = "full";
          series1.dataFields.categoryY = "category";
          series1.clustered = false;
          series1.columns.template.fill = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["InterfaceColorSet"]().getFor("alternativeBackground");
          series1.columns.template.fillOpacity = 0.08;
          series1.columns.template["cornerRadiusTopLeft"] = 20;
          series1.columns.template.strokeWidth = 0;
          series1.columns.template.radarColumn.cornerRadius = 20;
          var series2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["RadarColumnSeries"]());
          series2.dataFields.valueX = "value";
          series2.dataFields.categoryY = "category";
          series2.clustered = false;
          series2.columns.template.strokeWidth = 0;
          series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
          series2.columns.template.radarColumn.cornerRadius = 20;
          series2.columns.template.adapter.add("fill", function (fill, target) {
            //return chart.colors.getIndex(target.dataItem.index);
            if (target.dataItem.index == 0) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#f9c851");
            }

            if (target.dataItem.index == 1) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#ff5b5b");
            }

            if (target.dataItem.index == 2) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#10c469");
            }

            return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#21AFDD");
          }); // Add cursor

          chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["RadarCursor"]();
          chart.cursor.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#282e38");
          chart.tooltip.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#282e38");
          this.radarChart = chart;
        }
      }, {
        key: "createSeriesLine",
        value: function createSeriesLine(chart, color, type) {
          var name = type.charAt(0).toUpperCase() + type.slice(1);

          if (type == "cases") {
            name = this.translations.cases;
          } else if (type == "recoveries") {
            name = this.translations.recovered;
          } else if (type == "deaths") {
            name = this.translations.deaths;
          }

          var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_5__["LineSeries"]());
          series.dataFields.valueY = type;
          series.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"](color);
          series.dataFields.dateX = "date";
          series.strokeWidth = 2;
          series.minBulletDistance = 10;
          series.tooltipText = "{valueY} " + name;
          series.tooltip.pointerOrientation = "vertical";
          series.tooltip.background.cornerRadius = 20;
          series.tooltip.background.fillOpacity = 0.5;
          series.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"](color);
          series.legendSettings.labelText = name;
          series.tooltip.autoTextColor = false;
          series.tooltip.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_4__["color"]("#282e38");
          return chart;
        }
      }, {
        key: "showModal",
        value: function showModal() {
          this.modalStep = 1;
          this.isModalShown = true;
        }
      }, {
        key: "hideModal",
        value: function hideModal() {
          this.autoShownModal.hide();
        }
      }, {
        key: "onHidden",
        value: function onHidden() {
          this.isModalShown = false;
        }
      }, {
        key: "nextStep",
        value: function nextStep() {
          this.modalStep += 1;
        }
      }, {
        key: "close",
        value: function close(dontShow) {
          if (dontShow) {
            localStorage.setItem("dontShow", "true");
          }

          this.hideModal();
        }
      }, {
        key: "setTranslations",
        value: function setTranslations(translations) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.translations.active = translations['Shared.Other.14'];
                    this.translations.recovered = translations['Shared.Other.15'];
                    this.translations.deaths = translations['Shared.Other.16'];
                    this.translations.critical = translations['Shared.Other.17'];
                    this.translations.cases = translations['Shared.Other.14'];

                  case 5:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_getdata_service__WEBPACK_IMPORTED_MODULE_9__["GetdataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      viewQuery: function DashboardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarComponent"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.directiveScroll = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.autoShownModal = _t.first);
        }
      },
      decls: 279,
      vars: 221,
      consts: [[1, "container-fluid"], ["bsModal", "", "class", "modal fade d-block", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-auto-name", 3, "config", "onHidden", 4, "ngIf"], [1, "row"], [1, "col-xl-3", "col-md-6", "col-6"], [1, "card-box"], [1, "header-title", "m-0", "text-md-left", "text-center"], [1, "topBoxes"], [1, "fa-3x", "text-center"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2"], [1, "topBoxesDetails", "text-md-right", "text-center"], [1, "badge", "badge-blue", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "mdi", "mdi-trending-up"], [1, "font-weight-normal"], [1, "text-muted"], [1, "progress", "progress-bar-alt-blue", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-blue", 2, "width", "100%"], [1, "badge", "badge-danger", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-danger", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "100%"], [1, "badge", "badge-success", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-success", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "100%"], [1, "badge", "badge-warning", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-warning", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "100%"], [1, "col-xl-4"], [1, "float-right"], [1, "header-title", "mb-3"], [1, "form-group", "row"], [1, "col-md-8", "col-8"], ["type", "text", "id", "example-placeholder", 1, "form-control", 3, "placeholder", "keyup"], ["search", ""], [1, "col-md-4", "col-4"], [1, "custom-select", 3, "change"], ["sortBy", ""], ["selected", "", "disabled", ""], ["value", "cases"], ["value", "todayCases"], ["value", "deaths"], ["value", "todayDeaths"], ["value", "recovered"], [1, "infectedCountries"], [2, "height", "346px"], ["perfectscrollbar", ""], ["class", "infectedCountry", 4, "ngFor", "ngForOf"], [1, "col-xl-8"], [1, "float-md-right", "float-right", "d-md-inline", "d-none"], ["type", "button", 1, "btn", "btn-xs", "btn-lighten-blue", "waves-effect", "waves-light", "width-xs", "mr-md-1", "mr-0", 3, "click"], ["type", "button", 1, "btn", "btn-xs", "btn-lighten-danger", "waves-effect", "waves-light", "width-xs", "mr-md-1", "mr-0", 3, "click"], ["type", "button", 1, "btn", "btn-xs", "btn-lighten-success", "waves-effect", "waves-light", "width-xs", "mr-md-1", "mr-0", 3, "click"], ["type", "button", 1, "btn", "btn-xs", "btn-lighten-warning", "waves-effect", "waves-light", "width-xs", 3, "click"], [1, "header-title", "mt-0", "mb-3", "mt-md-0"], ["type", "button", 1, "btn", "btn-xs", "btn-lighten-secondary", "waves-effect", "waves-light", "width-xs", "mr-md-1", "mr-0", 3, "click"], [1, "table-responsive"], ["id", "worldChart", 2, "width", "100%", "height", "400px", "overflow", "hidden"], [1, "d-md-none", "d-inline"], ["type", "button", 1, "btn", "btn-block", "btn-xs", "btn-lighten-blue", "waves-effect", "waves-light", "width-xs", "mr-md-1", "mr-0", 3, "click"], ["type", "button", 1, "btn", "btn-block", "btn-xs", "btn-lighten-danger", "waves-effect", "waves-light", "width-xs", "mr-md-1", "mr-0", 3, "click"], ["type", "button", 1, "btn", "btn-block", "btn-xs", "btn-lighten-success", "waves-effect", "waves-light", "width-xs", "mr-md-1", "mr-0", 3, "click"], ["type", "button", 1, "btn", "btn-block", "btn-xs", "btn-lighten-warning", "waves-effect", "waves-light", "width-xs", 3, "click"], [1, "inbox-widget"], ["id", "radarChart", 2, "width", "100%", "height", "400px"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "enableLogarithmicScale", 1, "custom-control-input", 3, "change"], ["enableLogarithmicScale", ""], ["for", "enableLogarithmicScale", 1, "custom-control-label"], ["id", "lineChart", 2, "width", "100%", "height", "400px", "overflow", "hidden"], ["id", "pieChart", 2, "width", "100%", "height", "300px"], [1, "col-xl-5"], [1, "header-title", "mt-0", "mb-3"], [1, "col-12"], [1, "col-xl-6", "col-md-6"], [1, "card-box", "widget-user", "bg-d"], [1, "text-center"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-blue"], [1, "font-weight-normal", "text-success"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-danger"], [1, "font-weight-normal", "text-danger"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-warning"], [1, "font-weight-normal", "text-warning"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-info"], ["class", "font-weight-normal text-info", 3, "d-none", 4, "ngIf"], [1, "col-xl-3"], [1, "card-box", "text-center"], ["target", "_blank", "href", "https://www.facebook.com/sharer/sharer.php?u=https://coronastatistics.live", 1, "btn", "btn-icon", "waves-effect", "btn-blue", "mr-1"], [1, "fab", "fa-facebook"], ["target", "_blank", "href", "https://twitter.com/intent/tweet?url=https://coronastatistics.live&hashtags=Covid_19,CoronavirusPandemic,coronastatistics,corona&text=Stay%20Updated%20with%20Live%20Coronavirus%20Tracker", 1, "btn", "btn-icon", "waves-effect", "btn-blue", "mr-1"], [1, "fab", "fa-twitter"], ["target", "_blank", "href", "https://vk.com/share.php?url=https://coronastatistics.live", 1, "btn", "btn-icon", "waves-effect", "btn-blue", "mr-1"], [1, "fab", "fa-vk"], ["href", "whatsapp://send?text=Coronavirus live statistics and tracker https://coronastatistics.live", "data-action", "share/whatsapp/share", 1, "btn", "btn-icon", "waves-effect", "btn-blue"], [1, "fab", "fa-whatsapp"], ["href", "https://ko-fi.com/ossamarafique", 1, "btn", "btn-", "waves-effect", "btn-danger", "d-block", "mt-1", "mx-auto"], [1, "fas", "fa-coffee"], ["bsModal", "", "tabindex", "-1", "role", "dialog", "aria-labelledby", "dialog-auto-name", 1, "modal", "fade", "d-block", 3, "config", "onHidden"], ["autoShownModal", "bs-modal"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-body", "text-center", "pt-4"], ["class", "modal-step", 4, "ngIf"], ["class", "col-12 text-center", 4, "ngIf"], [1, "modal-step"], ["src", "assets/images/step-1.png", "width", "125"], [1, "text-white", "mt-3"], [1, "text-blue"], [1, "text-white"], [1, "text-danger"], ["src", "assets/images/step-2.png", "width", "125"], ["src", "assets/images/step-3.png", "width", "125"], ["src", "assets/images/step-4.png", "width", "125"], ["src", "assets/images/step-5.png", "width", "125"], [1, "col-12", "text-center"], [1, "btn", "btn-secondary", "waves-effect", "waves-light", "mb-4", 3, "click"], [1, "fa", "fa-arrow-right", "mr-1"], [1, "form-group"], ["type", "checkbox", "id", "forDontShow", 1, "custom-control-input"], ["dontShow", ""], ["for", "forDontShow", 1, "custom-control-label"], [1, "btn", "btn-blue", "waves-effect", "waves-light", "mb-4", 3, "click"], [1, "fas", "fa-times-circle", "mr-1"], [1, "infectedCountry"], [3, "routerLink"], [1, "infectedCountryFlag"], ["style", "height: 30px;\n                width: 40px;", 3, "src", "alt", 4, "ngIf", "ngIfElse"], ["unknown", ""], [1, "infectedCountryName", "mt-0", "mb-1"], [1, "infectedCountryDetails", "font-weight-bold"], [1, "infectedCountryCases", "text-blue"], [1, "infectedCountryDeaths", "text-danger"], [2, "height", "30px", "width", "40px", 3, "src", "alt"], ["src", "assets/flags/unknown.svg", 3, "alt"], [1, "font-weight-normal", "text-info"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_div_1_Template, 12, 9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](37, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](58, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](61, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "h4", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](76, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](80, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](83, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](84, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](86, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](93, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "h4", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](96, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "input", 30, 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function DashboardComponent_Template_input_keyup_99_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](100);

            return ctx.searchCountries(_r2.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](101, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](102, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "select", 33, 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DashboardComponent_Template_select_change_104_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](105);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](100);

            return ctx.sortCountries(_r3.value, _r2.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "option", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](108, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "option", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](111, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "option", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](114, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](117, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "option", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](120, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "option", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](123, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "perfect-scrollbar", 42, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, DashboardComponent_div_129_Template, 22, 22, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_133_listener() {
            return ctx.loadMap("cases");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](135, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_136_listener() {
            return ctx.loadMap("deaths");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](138, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_139_listener() {
            return ctx.loadMap("recovered");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](141, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_142_listener() {
            return ctx.loadMap("critical");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](144, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "h4", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](147, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_148_listener() {
            return ctx.showModal();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](150, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](152, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](154, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_156_listener() {
            return ctx.loadMap("cases");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](158, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_159_listener() {
            return ctx.loadMap("deaths");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](161, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "button", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_162_listener() {
            return ctx.loadMap("recovered");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](164, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_165_listener() {
            return ctx.loadMap("critical");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](167, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "h4", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](173, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](175, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "input", 63, 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DashboardComponent_Template_input_change_182_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](183);

            return ctx.loadLineChart(_r6.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "label", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](185);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](186, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "h4", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](189, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](191, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "h4", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](199, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](201, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](203, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "h4", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](207);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](208, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](210, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](216, "i", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "h2", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](219, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](222, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](227, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "h2", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](229);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](230, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](232);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](233, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](238, "i", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "h2", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](241, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](242, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](243);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](244, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](249, "i", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](250, DashboardComponent_h2_250_Template, 2, 3, "h2", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](253, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](258, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](259, "app-countup");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](262);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](263, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](266, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "a", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](268, "i", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "a", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](270, "i", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](271, "a", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](272, "i", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "a", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](274, "i", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "a", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](276, "i", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](277);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](278, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isModalShown);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 109, "Shared.TopCards.2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 111, ctx.totalCases), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.todayCases, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 113, "Shared.TopCards.6"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 115, "Shared.TopCards.3"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](33, 117, ctx.totalDeaths / ctx.finishedCases * 100, ".1-2"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](37, 120, ctx.totalDeaths), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.todayDeaths, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 122, "Shared.TopCards.6"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 124, "Shared.TopCards.4"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](54, 126, ctx.totalRecoveries / ctx.finishedCases * 100, ".1-2"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](58, 129, ctx.totalRecoveries), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](61, 131, ctx.activeCases), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](62, 133, "Shared.TopCards.8"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](69, 135, "Shared.TopCards.5"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](76, 137, ctx.totalCritical / ctx.activeCases * 100, ".1-2"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](80, 140, ctx.totalCritical), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](83, 142, ctx.casesPer1M), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](84, 144, "Shared.TopCards.7"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](93, 146, "Home.AffectedCountries.2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](96, 148, "Home.AffectedCountries.1"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate3"]("placeholder", "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](101, 150, "Home.AffectedCountries.3"), " ", ctx.countries.length, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](102, 152, "Home.AffectedCountries.1"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](108, 154, "Home.AffectedCountries.4"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](111, 156, "Home.AffectedCountries.5"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](114, 158, "Home.AffectedCountries.6"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](117, 160, "Home.AffectedCountries.7"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](120, 162, "Home.AffectedCountries.8"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](123, 164, "Home.AffectedCountries.9"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoadingCountries);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoadingCountries);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.countries);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](135, 166, "Shared.TopCards.1"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](138, 168, "Shared.TopCards.3"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](141, 170, "Shared.TopCards.4"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](144, 172, "Shared.TopCards.5"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](147, 174, "Home.WorldMap.1"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](150, 176, "Home.WorldMap.2"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoadingMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoadingMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](158, 178, "Shared.TopCards.1"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](161, 180, "Shared.TopCards.3"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](164, 182, "Shared.TopCards.4"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](167, 184, "Shared.TopCards.5"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](173, 186, "Shared.RateDistribution.1"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](186, 188, "Shared.InfectionsHistory.2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](189, 190, "Shared.InfectionsHistory.1"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](199, 192, "Home.InfectionCountries.1"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](208, 194, "Shared.Rates.1"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](219, 196, ctx.totalRecoveries / ctx.finishedCases * 100, ".1-2"), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](222, 199, "Shared.Rates.2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](230, 201, ctx.totalDeaths / ctx.finishedCases * 100, ".1-2"), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](233, 204, "Shared.Rates.3"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](241, 206, ctx.totalCritical / ctx.activeCases * 100, ".1-2"), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](244, 209, "Shared.Rates.4"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fuse);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](253, 211, "Shared.Other.1"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](258, 213, "Shared.Other.2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](263, 215, "Shared.Other.9"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](266, 217, "Shared.Other.10"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](278, 219, "Shared.Other.8"), " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_17__["CountupComponent"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_13__["ModalDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_18__["RouterLinkWithHref"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["DecimalPipe"]],
      styles: [".bg-d[_ngcontent-%COMP%] {\n  background-color: #282d37;\n}\n\n.modal-step[_ngcontent-%COMP%] {\n  min-height: 270px;\n  transition: all 0.2s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0U6XFxQcm9qZWN0c1xcV29ya1NwYWNlXFxDb3ZpZC0xOS1TdGF0aXN0aWNzLURhc2hib2FyZC1Bbmd1bGFyLTktbWFzdGVyICgxKVxcQ292aWQtMTktU3RhdGlzdGljcy1EYXNoYm9hcmQtQW5ndWxhci05LW1hc3Rlci9zcmNcXGFwcFxccGFnZXNcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUNDRjs7QURDQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctZHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmQzNztcbn1cbi5tb2RhbC1zdGVwe1xuICBtaW4taGVpZ2h0OiAyNzBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59IiwiLmJnLWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyZDM3O1xufVxuXG4ubW9kYWwtc3RlcCB7XG4gIG1pbi1oZWlnaHQ6IDI3MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn0iXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('fadeInOutAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])(600)])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('fadeInOutAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])(600)])])]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _core_services_getdata_service__WEBPACK_IMPORTED_MODULE_9__["GetdataService"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__["TranslateService"]
        }];
      }, {
        directiveScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarComponent"]]
        }],
        autoShownModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['autoShownModal', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/not-found/not-found.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/not-found/not-found.component.ts ***!
    \********************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppPagesNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 6,
      vars: 0,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "text-center"], [1, "mt-5"], ["src", "assets/images/404.png"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sorry, This page doesn't exist.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/countup/countup.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/countup/countup.component.ts ***!
    \*****************************************************/

  /*! exports provided: CountupComponent */

  /***/
  function srcAppSharedCountupCountupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountupComponent", function () {
      return CountupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function CountupComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r42.timer["days"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r42.timer["hours"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r42.timer["minutes"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r42.timer["seconds"], " ");
      }
    }

    var CountupComponent = /*#__PURE__*/function () {
      function CountupComponent() {
        _classCallCheck(this, CountupComponent);

        this.oldDate = new Date("2019-12-01");
      }

      _createClass(CountupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this14 = this;

          setInterval(function () {
            _this14.timer = _this14.dhms(Math.floor(new Date().getTime() - _this14.oldDate.getTime()));
          }, 1000);
        }
      }, {
        key: "dhms",
        value: function dhms(difference) {
          var days, hours, mins, secs;
          days = Math.floor(difference / (60 * 60 * 1000 * 24) * 1);
          hours = Math.floor(difference % (60 * 60 * 1000 * 24) / (60 * 60 * 1000) * 1);
          mins = Math.floor(difference % (60 * 60 * 1000 * 24) % (60 * 60 * 1000) / (60 * 1000) * 1);
          secs = Math.floor(difference % (60 * 60 * 1000 * 24) % (60 * 60 * 1000) % (60 * 1000) / 1000 * 1);
          return {
            days: days,
            hours: hours,
            minutes: mins,
            seconds: secs
          };
        }
      }]);

      return CountupComponent;
    }();

    CountupComponent.ɵfac = function CountupComponent_Factory(t) {
      return new (t || CountupComponent)();
    };

    CountupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CountupComponent,
      selectors: [["app-countup"]],
      decls: 14,
      vars: 13,
      consts: [["class", "row font-weight-bold", 4, "ngIf"], [1, "row"], [1, "col-3"], [1, "row", "font-weight-bold"]],
      template: function CountupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CountupComponent_div_0_Template, 9, 4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.timer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "Shared.Other.3"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "Shared.Other.4"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 9, "Shared.Other.5"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 11, "Shared.Other.6"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb3VudHVwL2NvdW50dXAuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-countup',
          templateUrl: './countup.component.html',
          styleUrls: ['./countup.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/utils/countries.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/utils/countries.ts ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedUtilsCountriesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = {
      'Afghanistan': 'AF',
      'Aland Islands': 'AX',
      'Albania': 'AL',
      'Algeria': 'DZ',
      'American Samoa': 'AS',
      'Andorra': 'AD',
      'Angola': 'AO',
      'Anguilla': 'AI',
      'Antarctica': 'AQ',
      'Antigua And Barbuda': 'AG',
      'Argentina': 'AR',
      'Armenia': 'AM',
      'Aruba': 'AW',
      'Australia': 'AU',
      'Austria': 'AT',
      'Azerbaijan': 'AZ',
      'Bahamas': 'BS',
      'Bahrain': 'BH',
      'Bangladesh': 'BD',
      'Barbados': 'BB',
      'Belarus': 'BY',
      'Belgium': 'BE',
      'Belize': 'BZ',
      'Benin': 'BJ',
      'Bermuda': 'BM',
      'Bhutan': 'BT',
      'Bolivia': 'BO',
      'Bosnia and Herzegovina': 'BA',
      'Botswana': 'BW',
      'Bouvet Island': 'BV',
      'Brazil': 'BR',
      'British Indian Ocean Territory': 'IO',
      'Brunei': 'BN',
      'Bulgaria': 'BG',
      'Burkina Faso': 'BF',
      'Burundi': 'BI',
      'Cambodia': 'KH',
      'Cameroon': 'CM',
      'Canada': 'CA',
      'Cape Verde': 'CV',
      'Cayman Islands': 'KY',
      'Central African Republic': 'CF',
      'Chad': 'TD',
      'Chile': 'CL',
      'China': 'CN',
      'Christmas Island': 'CX',
      'Cocos (Keeling) Islands': 'CC',
      'Colombia': 'CO',
      'Comoros': 'KM',
      'Congo': 'CG',
      'DRC': 'CD',
      'Cook Islands': 'CK',
      'Costa Rica': 'CR',
      'Ivory Coast': 'CI',
      'Croatia': 'HR',
      'Cuba': 'CU',
      'Cyprus': 'CY',
      'Czechia': 'CZ',
      'Denmark': 'DK',
      'Djibouti': 'DJ',
      'Dominica': 'DM',
      'Dominican Republic': 'DO',
      'Ecuador': 'EC',
      'Egypt': 'EG',
      'El Salvador': 'SV',
      'Equatorial Guinea': 'GQ',
      'Eritrea': 'ER',
      'Estonia': 'EE',
      'Ethiopia': 'ET',
      'Falkland Islands': 'FK',
      'Faeroe Islands': 'FO',
      'Fiji': 'FJ',
      'Finland': 'FI',
      'France': 'FR',
      'French Guiana': 'GF',
      'French Polynesia': 'PF',
      'French Southern Territories': 'TF',
      'Gabon': 'GA',
      'Gambia': 'GM',
      'Georgia': 'GE',
      'Germany': 'DE',
      'Ghana': 'GH',
      'Gibraltar': 'GI',
      'Greece': 'GR',
      'Greenland': 'GL',
      'Grenada': 'GD',
      'Guadeloupe': 'GP',
      'Guam': 'GU',
      'Guatemala': 'GT',
      'Guernsey': 'GG',
      'Guinea': 'GN',
      'Guinea-Bissau': 'GW',
      'Guyana': 'GY',
      'Haiti': 'HT',
      'Heard Island & Mcdonald Islands': 'HM',
      'Holy See (Vatican City State)': 'VA',
      'Honduras': 'HN',
      'Hong Kong': 'HK',
      'Hungary': 'HU',
      'Iceland': 'IS',
      'India': 'IN',
      'Indonesia': 'ID',
      'Iran': 'IR',
      'Iraq': 'IQ',
      'Ireland': 'IE',
      'Isle Of Man': 'IM',
      'Israel': 'IL',
      'Italy': 'IT',
      'Jamaica': 'JM',
      'Japan': 'JP',
      'Channel Islands': 'JE',
      'Jordan': 'JO',
      'Kazakhstan': 'KZ',
      'Kenya': 'KE',
      'Kiribati': 'KI',
      'Korea': 'KR',
      'S. Korea': 'KR',
      'Kuwait': 'KW',
      'Kyrgyzstan': 'KG',
      'Lao People\'s Democratic Republic': 'LA',
      'Latvia': 'LV',
      'Lebanon': 'LB',
      'Lesotho': 'LS',
      'Liberia': 'LR',
      'Libyan Arab Jamahiriya': 'LY',
      'Liechtenstein': 'LI',
      'Lithuania': 'LT',
      'Luxembourg': 'LU',
      'Macao': 'MO',
      'Macedonia': 'MK',
      'Madagascar': 'MG',
      'Malawi': 'MW',
      'Malaysia': 'MY',
      'Maldives': 'MV',
      'Mali': 'ML',
      'Malta': 'MT',
      'Marshall Islands': 'MH',
      'Martinique': 'MQ',
      'Mauritania': 'MR',
      'Mauritius': 'MU',
      'Mayotte': 'YT',
      'Mexico': 'MX',
      'Micronesia, Federated States Of': 'FM',
      'Moldova': 'MD',
      'Monaco': 'MC',
      'Mongolia': 'MN',
      'Montenegro': 'ME',
      'Montserrat': 'MS',
      'Morocco': 'MA',
      'Mozambique': 'MZ',
      'Myanmar': 'MM',
      'Namibia': 'NA',
      'Nauru': 'NR',
      'Nepal': 'NP',
      'Netherlands': 'NL',
      'Netherlands Antilles': 'AN',
      'New Caledonia': 'NC',
      'New Zealand': 'NZ',
      'Nicaragua': 'NI',
      'Niger': 'NE',
      'Nigeria': 'NG',
      'Niue': 'NU',
      'Norfolk Island': 'NF',
      'North Macedonia': 'MP',
      'Norway': 'NO',
      'Oman': 'OM',
      'Pakistan': 'PK',
      'Palau': 'PW',
      'Palestine': 'PS',
      'Panama': 'PA',
      'Papua New Guinea': 'PG',
      'Paraguay': 'PY',
      'Peru': 'PE',
      'Philippines': 'PH',
      'Pitcairn': 'PN',
      'Poland': 'PL',
      'Portugal': 'PT',
      'Puerto Rico': 'PR',
      'Qatar': 'QA',
      'Réunion': 'RE',
      'Romania': 'RO',
      'Russia': 'RU',
      'Rwanda': 'RW',
      'Saint Barthelemy': 'BL',
      'St. Barth': 'BL',
      'Saint Helena': 'SH',
      'Saint Kitts And Nevis': 'KN',
      'Saint Lucia': 'LC',
      'Saint Martin': 'MF',
      'Saint Pierre And Miquelon': 'PM',
      'St. Vincent Grenadines': 'VC',
      'Samoa': 'WS',
      'San Marino': 'SM',
      'Sao Tome And Principe': 'ST',
      'Saudi Arabia': 'SA',
      'Senegal': 'SN',
      'Serbia': 'RS',
      'Seychelles': 'SC',
      'Sierra Leone': 'SL',
      'Singapore': 'SG',
      'Slovakia': 'SK',
      'Slovenia': 'SI',
      'Solomon Islands': 'SB',
      'Somalia': 'SO',
      'South Africa': 'ZA',
      'South Georgia And Sandwich Isl.': 'GS',
      'Spain': 'ES',
      'Sri Lanka': 'LK',
      'Sudan': 'SD',
      'Suriname': 'SR',
      'Svalbard And Jan Mayen': 'SJ',
      'Swaziland': 'SZ',
      'Sweden': 'SE',
      'Switzerland': 'CH',
      'Syrian Arab Republic': 'SY',
      'Taiwan': 'TW',
      'Tajikistan': 'TJ',
      'Tanzania': 'TZ',
      'Thailand': 'TH',
      'Timor-Leste': 'TL',
      'Togo': 'TG',
      'Tokelau': 'TK',
      'Tonga': 'TO',
      'Trinidad and Tobago': 'TT',
      'Tunisia': 'TN',
      'Turkey': 'TR',
      'Turkmenistan': 'TM',
      'Turks And Caicos Islands': 'TC',
      'Tuvalu': 'TV',
      'Uganda': 'UG',
      'Ukraine': 'UA',
      'UAE': 'AE',
      'UK': 'GB',
      'USA': 'US',
      'United States Outlying Islands': 'UM',
      'Uruguay': 'UY',
      'Uzbekistan': 'UZ',
      'Vanuatu': 'VU',
      'Venezuela': 'VE',
      'Vietnam': 'VN',
      'Virgin Islands, British': 'VG',
      'U.S. Virgin Islands': 'VI',
      'Wallis And Futuna': 'WF',
      'Western Sahara': 'EH',
      'Yemen': 'YE',
      'Zambia': 'ZM',
      'Zimbabwe': 'ZW',
      'Curaçao': 'CW'
    };
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: true
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Projects\WorkSpace\Covid-19-Statistics-Dashboard-Angular-9-master (1)\Covid-19-Statistics-Dashboard-Angular-9-master\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map