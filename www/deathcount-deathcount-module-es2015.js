(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["deathcount-deathcount-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deathcount/deathcount.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deathcount/deathcount.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>Mobile CA2 - Michael Santos - 2019287</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n \r\n<ion-content>\r\n  <ion-searchbar name=\"searchText\" [(ngModel)]=\"searchText\" showCancelButton=\"focus\" cancelButtonText=\"Cancel\"></ion-searchbar>\r\n\r\n  <h1 class=\"ion-text-center\">⚰️ Death Count</h1>\r\n  <ion-list>\r\n    <div *ngFor=\"let death of deathcount | async\">\r\n      <ion-item *ngIf=\"search(death)\" >\r\n      <p><em>{{ death.death }}</em> was dead by <strong>{{ death.responsible }}</strong></p>\r\n    </ion-item>\r\n    </div>\r\n    \r\n  </ion-list> \r\n\r\n  \r\n  \r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/deathcount/deathcount-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/deathcount/deathcount-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DeathcountPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathcountPageRoutingModule", function() { return DeathcountPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _deathcount_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deathcount.page */ "./src/app/pages/deathcount/deathcount.page.ts");




const routes = [
    {
        path: '',
        component: _deathcount_page__WEBPACK_IMPORTED_MODULE_3__["DeathcountPage"]
    }
];
let DeathcountPageRoutingModule = class DeathcountPageRoutingModule {
};
DeathcountPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeathcountPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/deathcount/deathcount.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/deathcount/deathcount.module.ts ***!
  \*******************************************************/
/*! exports provided: DeathcountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathcountPageModule", function() { return DeathcountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _deathcount_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deathcount-routing.module */ "./src/app/pages/deathcount/deathcount-routing.module.ts");
/* harmony import */ var _deathcount_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deathcount.page */ "./src/app/pages/deathcount/deathcount.page.ts");







let DeathcountPageModule = class DeathcountPageModule {
};
DeathcountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _deathcount_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeathcountPageRoutingModule"]
        ],
        declarations: [_deathcount_page__WEBPACK_IMPORTED_MODULE_6__["DeathcountPage"]]
    })
], DeathcountPageModule);



/***/ }),

/***/ "./src/app/pages/deathcount/deathcount.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/deathcount/deathcount.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlYXRoY291bnQvZGVhdGhjb3VudC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/deathcount/deathcount.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/deathcount/deathcount.page.ts ***!
  \*****************************************************/
/*! exports provided: DeathcountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathcountPage", function() { return DeathcountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");




let DeathcountPage = class DeathcountPage {
    constructor(router, api) {
        this.router = router;
        this.api = api;
        this.searchText = '';
    }
    ngOnInit() {
        this.deathcount = this.api.getDeaths();
        this.deathcount.subscribe(data => {
        });
    }
    search(deaths) {
        return deaths.responsible.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
    }
};
DeathcountPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
DeathcountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deathcount',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./deathcount.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/deathcount/deathcount.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./deathcount.page.scss */ "./src/app/pages/deathcount/deathcount.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
], DeathcountPage);



/***/ })

}]);
//# sourceMappingURL=deathcount-deathcount-module-es2015.js.map