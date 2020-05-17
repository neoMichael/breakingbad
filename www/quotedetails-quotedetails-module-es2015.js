(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotedetails-quotedetails-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotedetails/quotedetails.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotedetails/quotedetails.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\t<ion-toolbar color=\"primary\">\r\n\t\t<ion-buttons slot=\"start\" defaulthref=\"/tabs/quotes\">\r\n\t\t\t<ion-back-button></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>Quote detail</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card *ngIf=\"data\">\r\n    <ion-card-header>\r\n      <ion-card-subtitle>{{ data.series }}</ion-card-subtitle>\r\n      \r\n    </ion-card-header>\r\n  \r\n    \r\n    <ion-item>\r\n      <h1 class=\"ion-text-justify\">{{data.quote}}</h1>\r\n    </ion-item>\r\n    <ion-card-title class=\"ion-text-right\">Author: {{ data.author }}</ion-card-title>\r\n  </ion-card>\r\n  \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/quotedetails/quotedetails-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/quotedetails/quotedetails-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: QuotedetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotedetailsPageRoutingModule", function() { return QuotedetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _quotedetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quotedetails.page */ "./src/app/pages/quotedetails/quotedetails.page.ts");




const routes = [
    {
        path: '',
        component: _quotedetails_page__WEBPACK_IMPORTED_MODULE_3__["QuotedetailsPage"]
    }
];
let QuotedetailsPageRoutingModule = class QuotedetailsPageRoutingModule {
};
QuotedetailsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], QuotedetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/quotedetails/quotedetails.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/quotedetails/quotedetails.module.ts ***!
  \***********************************************************/
/*! exports provided: QuotedetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotedetailsPageModule", function() { return QuotedetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _quotedetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quotedetails-routing.module */ "./src/app/pages/quotedetails/quotedetails-routing.module.ts");
/* harmony import */ var _quotedetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quotedetails.page */ "./src/app/pages/quotedetails/quotedetails.page.ts");







let QuotedetailsPageModule = class QuotedetailsPageModule {
};
QuotedetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _quotedetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuotedetailsPageRoutingModule"]
        ],
        declarations: [_quotedetails_page__WEBPACK_IMPORTED_MODULE_6__["QuotedetailsPage"]]
    })
], QuotedetailsPageModule);



/***/ }),

/***/ "./src/app/pages/quotedetails/quotedetails.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/quotedetails/quotedetails.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1b3RlZGV0YWlscy9xdW90ZWRldGFpbHMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/quotedetails/quotedetails.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/quotedetails/quotedetails.page.ts ***!
  \*********************************************************/
/*! exports provided: QuotedetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotedetailsPage", function() { return QuotedetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api.service */ "./src/app/services/api.service.ts");




let QuotedetailsPage = class QuotedetailsPage {
    constructor(router, api, activatedRoute) {
        this.router = router;
        this.api = api;
        this.activatedRoute = activatedRoute;
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        console.log(this.id);
    }
    ngOnInit() {
        this.quote = this.api.getQuote(this.id);
        this.quote.subscribe(data => {
            console.log('my data: ', data);
            this.data = data[0];
        });
    }
};
QuotedetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
QuotedetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quotedetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./quotedetails.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quotedetails/quotedetails.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./quotedetails.page.scss */ "./src/app/pages/quotedetails/quotedetails.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], QuotedetailsPage);



/***/ })

}]);
//# sourceMappingURL=quotedetails-quotedetails-module-es2015.js.map