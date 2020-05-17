function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["characterdetails-characterdetails-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characterdetails/characterdetails.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characterdetails/characterdetails.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCharacterdetailsCharacterdetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\t\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\" defaultHref=\"/tabs/characters\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title *ngIf=\"data\">Details</ion-title>    \r\n  </ion-toolbar>\r\n</ion-header>\r\n \r\n<ion-content padding>\r\n\r\n  <ion-card *ngIf=\"data\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle>{{data.category}}</ion-card-subtitle>\r\n      <ion-card-title>\r\n\r\n        </ion-card-title>\r\n      \r\n      <img src=\"{{data.img}}\">\r\n\r\n      <ion-icon  (click)=\"unfavouriteCharacter()\" *ngIf=\"isFavourite\" class=\"starIcon\"  name=\"star\"></ion-icon>         \r\n      <ion-icon  (click)=\"favouriteCharacter()\" *ngIf=\"!isFavourite\" class=\"starIcon\"  name=\"star-outline\"></ion-icon>         \r\n      \r\n\r\n        \r\n        \r\n      \r\n      \r\n    </ion-card-header>\r\n  \r\n    <ion-card-content>\r\n     <p>Name: <strong>{{data.name}}</strong></p>\r\n     <p>Nick Name: <strong>{{data.nickname}}</strong></p>\r\n     <p>DOB: <strong>{{data.birthday}}</strong></p>\r\n     <p>Portrayed: <strong>{{data.portrayed}}</strong></p>\r\n     <p>Status: <strong>{{data.status}}</strong></p>     \r\n    </ion-card-content>\r\n  </ion-card>\r\n \r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/characterdetails/characterdetails-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/characterdetails/characterdetails-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: CharacterdetailsPageRoutingModule */

  /***/
  function srcAppPagesCharacterdetailsCharacterdetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterdetailsPageRoutingModule", function () {
      return CharacterdetailsPageRoutingModule;
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


    var _characterdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./characterdetails.page */
    "./src/app/pages/characterdetails/characterdetails.page.ts");

    var routes = [{
      path: '',
      component: _characterdetails_page__WEBPACK_IMPORTED_MODULE_3__["CharacterdetailsPage"]
    }];

    var CharacterdetailsPageRoutingModule = function CharacterdetailsPageRoutingModule() {
      _classCallCheck(this, CharacterdetailsPageRoutingModule);
    };

    CharacterdetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CharacterdetailsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/characterdetails/characterdetails.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/characterdetails/characterdetails.module.ts ***!
    \*******************************************************************/

  /*! exports provided: CharacterdetailsPageModule */

  /***/
  function srcAppPagesCharacterdetailsCharacterdetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterdetailsPageModule", function () {
      return CharacterdetailsPageModule;
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


    var _characterdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./characterdetails-routing.module */
    "./src/app/pages/characterdetails/characterdetails-routing.module.ts");
    /* harmony import */


    var _characterdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./characterdetails.page */
    "./src/app/pages/characterdetails/characterdetails.page.ts");

    var CharacterdetailsPageModule = function CharacterdetailsPageModule() {
      _classCallCheck(this, CharacterdetailsPageModule);
    };

    CharacterdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _characterdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["CharacterdetailsPageRoutingModule"]],
      declarations: [_characterdetails_page__WEBPACK_IMPORTED_MODULE_6__["CharacterdetailsPage"]]
    })], CharacterdetailsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/characterdetails/characterdetails.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/characterdetails/characterdetails.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCharacterdetailsCharacterdetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".starIcon {\n  position: absolute;\n  right: 15px;\n  top: 5px;\n  font-size: 30px;\n  color: yellow;\n}\n\nimg {\n  height: auto;\n  min-width: 300px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhcmFjdGVyZGV0YWlscy9DOlxcelxcYnJlYWtpbmdiYWQvc3JjXFxhcHBcXHBhZ2VzXFxjaGFyYWN0ZXJkZXRhaWxzXFxjaGFyYWN0ZXJkZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2hhcmFjdGVyZGV0YWlscy9jaGFyYWN0ZXJkZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXJhY3RlcmRldGFpbHMvY2hhcmFjdGVyZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Rhckljb257XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTVweDtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuaW1nIHsgICAgXHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIFxyXG4gIFxyXG4gfSIsIi5zdGFySWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogNXB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB5ZWxsb3c7XG59XG5cbmltZyB7XG4gIGhlaWdodDogYXV0bztcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/characterdetails/characterdetails.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/characterdetails/characterdetails.page.ts ***!
    \*****************************************************************/

  /*! exports provided: CharacterdetailsPage */

  /***/
  function srcAppPagesCharacterdetailsCharacterdetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharacterdetailsPage", function () {
      return CharacterdetailsPage;
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

    var CharacterdetailsPage = /*#__PURE__*/function () {
      function CharacterdetailsPage(router, activatedRoute, api, fav) {
        _classCallCheck(this, CharacterdetailsPage);

        this.router = router;
        this.activatedRoute = activatedRoute;
        this.api = api;
        this.fav = fav;
        this.isFavourite = false;
      }

      _createClass(CharacterdetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.id = this.activatedRoute.snapshot.paramMap.get('id');
          this.character = this.api.getCharacter(this.id);
          this.character.subscribe(function (data) {
            _this.data = data[0];
          });
          this.fav.isFavouriteEpisode(this.id).then(function (isFav) {
            _this.isFavourite = isFav;
          });
        }
      }, {
        key: "favouriteCharacter",
        value: function favouriteCharacter() {
          var _this2 = this;

          this.fav.favouriteCharacter(this.id).then(function () {
            _this2.isFavourite = true;
          });
        }
      }, {
        key: "unfavouriteCharacter",
        value: function unfavouriteCharacter() {
          var _this3 = this;

          this.fav.unfavouriteCharacter(this.id).then(function () {
            _this3.isFavourite = false;
          });
        }
      }]);

      return CharacterdetailsPage;
    }();

    CharacterdetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
      }, {
        type: _services_favorite_service__WEBPACK_IMPORTED_MODULE_4__["FavoriteService"]
      }];
    };

    CharacterdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-characterdetails',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./characterdetails.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/characterdetails/characterdetails.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./characterdetails.page.scss */
      "./src/app/pages/characterdetails/characterdetails.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _services_favorite_service__WEBPACK_IMPORTED_MODULE_4__["FavoriteService"]])], CharacterdetailsPage);
    /***/
  }
}]);
//# sourceMappingURL=characterdetails-characterdetails-module-es5.js.map