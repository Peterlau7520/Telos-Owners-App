webpackJsonp([21],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreeUseCompanyChopModule", function() { return AgreeUseCompanyChopModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agree_use_company_chop__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AgreeUseCompanyChopModule = (function () {
    function AgreeUseCompanyChopModule() {
    }
    AgreeUseCompanyChopModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__agree_use_company_chop__["a" /* AgreeUseCompanyChop */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__agree_use_company_chop__["a" /* AgreeUseCompanyChop */]),
            ],
        })
    ], AgreeUseCompanyChopModule);
    return AgreeUseCompanyChopModule;
}());

//# sourceMappingURL=agree-use-company-chop.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgreeUseCompanyChop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/* import { SignaturePadPage } from '../../pages/signature-pad-page/signature-pad-page'; */
var AgreeUseCompanyChop = (function () {
    function AgreeUseCompanyChop(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    AgreeUseCompanyChop.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgreeUseCompanyChop');
    };
    AgreeUseCompanyChop.prototype.dismiss = function () {
        this.viewCtrl.dismiss("decline");
    };
    AgreeUseCompanyChop.prototype.acceptAgreement = function () {
        /* let myModal = this.modalCtrl.create(SignaturePadPage, {
          "signatures": 2,
          "current_signature": 1
        });
        myModal.present(); */
        this.viewCtrl.dismiss("accept");
    };
    AgreeUseCompanyChop = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-agree-use-company-chop',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/agree-use-company-chop/agree-use-company-chop.html"*/`<ion-content class="main-view">\n  <div class="overlay" (click)="dismiss()"></div>\n  <div class="modal_content">\n    <ion-row class="modal_inner_content">\n      <ion-col col-12>\n        <p class="agree-title" text-center>Agree to use your company\'s chop to appoint a Telos employee as a proxy : </p>\n      </ion-col>\n      <ion-col col-12>\n        <p>\n          &nbsp;\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <button ion-button button-clear-outline round outline class="next-button login-button" color="mytheme" (click)="dismiss()">Decline</button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button button-clear-outline round outline class="next-button login-button" color="mytheme" (click)="acceptAgreement()">Accept</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/agree-use-company-chop/agree-use-company-chop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], AgreeUseCompanyChop);
    return AgreeUseCompanyChop;
}());

//# sourceMappingURL=agree-use-company-chop.js.map

/***/ })

});
//# sourceMappingURL=21.js.map