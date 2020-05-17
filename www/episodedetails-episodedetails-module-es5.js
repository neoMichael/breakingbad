function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["episodedetails-episodedetails-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodedetails/episodedetails.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodedetails/episodedetails.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEpisodedetailsEpisodedetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\t\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\" defaultHref=\"/tabs/characters\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"data\">{{ data.title }} details</ion-title>    \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card *ngIf=\"data\">\r\n    <ion-card-header>\r\n      \r\n      \r\n        \r\n        <ion-icon  (click)=\"unfavouriteEpisode()\" *ngIf=\"isFavourite\" class=\"starIcon\"  name=\"star\"></ion-icon>         \r\n        <ion-icon  (click)=\"favouriteEpisode()\" *ngIf=\"!isFavourite\" class=\"starIcon\"  name=\"star-outline\"></ion-icon>         \r\n        <ion-card-title>Episode: {{ data.title }}\r\n        <ion-card-subtitle>{{ data.series }}</ion-card-subtitle>\r\n      </ion-card-title>\r\n\r\n    </ion-card-header>\r\n  \r\n    <ion-card-content>\r\n     <h5>Air Date: {{ data.air_date }}</h5>\r\n     <strong>Characters:</strong>\r\n     <ion-item *ngFor=\"let character of data.characters\"> \r\n       <ion-label>\r\n        {{character}}\r\n       </ion-label>\r\n     </ion-item>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/episodedetails/episodedetails-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/episodedetails/episodedetails-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: EpisodedetailsPageRoutingModule */

  /***/
  function srcAppPagesEpisodedetailsEpisodedetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodedetailsPageRoutingModule", function () {
      return EpisodedetailsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _episodedetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./episodedetails.page */
    "./src/app/pages/episodedetails/episodedetails.page.ts");

    var routes = [{
      path: '',
      component: _episodedetails_page__WEBPACK_IMPORTED_MODULE_3__["EpisodedetailsPage"]
    }];

    var EpisodedetailsPageRoutingModule = function EpisodedetailsPageRoutingModule() {
      _classCallCheck(this, EpisodedetailsPageRoutingModule);
    };

    EpisodedetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EpisodedetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/episodedetails/episodedetails.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/episodedetails/episodedetails.module.ts ***!
    \***************************************************************/

  /*! exports provided: EpisodedetailsPageModule */

  /***/
  function srcAppPagesEpisodedetailsEpisodedetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodedetailsPageModule", function () {
      return EpisodedetailsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _episodedetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./episodedetails-routing.module */
    "./src/app/pages/episodedetails/episodedetails-routing.module.ts");
    /* harmony import */


    var _episodedetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./episodedetails.page */
    "./src/app/pages/episodedetails/episodedetails.page.ts");

    var EpisodedetailsPageModule = function EpisodedetailsPageModule() {
      _classCallCheck(this, EpisodedetailsPageModule);
    };

    EpisodedetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _episodedetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["EpisodedetailsPageRoutingModule"]],
      declarations: [_episodedetails_page__WEBPACK_IMPORTED_MODULE_6__["EpisodedetailsPage"]]
    })], EpisodedetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/episodedetails/episodedetails.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/episodedetails/episodedetails.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEpisodedetailsEpisodedetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".starIcon {\n  position: absolute;\n  right: 15px;\n  top: 5px;\n  font-size: 30px;\n  color: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZXBpc29kZWRldGFpbHMvQzpcXHpcXGJyZWFraW5nYmFkL3NyY1xcYXBwXFxwYWdlc1xcZXBpc29kZWRldGFpbHNcXGVwaXNvZGVkZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZXBpc29kZWRldGFpbHMvZXBpc29kZWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lcGlzb2RlZGV0YWlscy9lcGlzb2RlZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Rhckljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IHllbGxvdztcclxufSIsIi5zdGFySWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB5ZWxsb3c7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/episodedetails/episodedetails.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/episodedetails/episodedetails.page.ts ***!
    \*************************************************************/

  /*! exports provided: EpisodedetailsPage */

  /***/
  function srcAppPagesEpisodedetailsEpisodedetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EpisodedetailsPage", function () {
      return EpisodedetailsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_favorite_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/favorite.service */
    "./src/app/services/favorite.service.ts");

    var EpisodedetailsPage = /*#__PURE__*/function () {
      function EpisodedetailsPage(router, api, activatedRoute, fav) {
        _classCallCheck(this, EpisodedetailsPage);

        this.router = router;
        this.api = api;
        this.activatedRoute = activatedRoute;
        this.fav = fav;
        this.isFavourite = false;
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
      }

      _createClass(EpisodedetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.id = this.activatedRoute.snapshot.paramMap.get('id');
          this.episode = this.api.getEpisode(this.id);
          this.episode.subscribe(function (data) {
            _this.data = data[0];
          });
          this.fav.isFavouriteEpisode(this.id).then(function (isFav) {
            _this.isFavourite = isFav;
          });
        }
      }, {
        key: "favouriteEpisode",
        value: function favouriteEpisode() {
          var _this2 = this;

          this.fav.favouriteEpisode(this.id).then(function () {
            _this2.isFavourite = true;
          });
        }
      }, {
        key: "unfavouriteEpisode",
        value: function unfavouriteEpisode() {
          var _this3 = this;

          this.fav.unfavouriteEpisode(this.id).then(function () {
            _this3.isFavourite = false;
          });
        }
      }]);

      return EpisodedetailsPage;
    }();

    EpisodedetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_favorite_service__WEBPACK_IMPORTED_MODULE_4__["FavoriteService"]
      }];
    };

    EpisodedetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-episodedetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./episodedetails.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/episodedetails/episodedetails.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./episodedetails.page.scss */
      "./src/app/pages/episodedetails/episodedetails.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_favorite_service__WEBPACK_IMPORTED_MODULE_4__["FavoriteService"]])], EpisodedetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=episodedetails-episodedetails-module-es5.js.map