webpackJsonp([14],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerHkidNumberModule", function() { return OwnerHkidNumberModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__owner_hkid_number__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OwnerHkidNumberModule = (function () {
    function OwnerHkidNumberModule() {
    }
    OwnerHkidNumberModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__owner_hkid_number__["a" /* OwnerHkidNumber */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__owner_hkid_number__["a" /* OwnerHkidNumber */]),
            ],
        })
    ], OwnerHkidNumberModule);
    return OwnerHkidNumberModule;
}());

//# sourceMappingURL=owner-hkid-number.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnerHkidNumber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OwnerHkidNumber = (function () {
    function OwnerHkidNumber(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.total_HKIDs = this.navParams.get("total_HKIDs");
        this.current_HKID = this.navParams.get("current_HKID");
    }
    OwnerHkidNumber.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OwnerHkidNumber');
    };
    OwnerHkidNumber.prototype.dismiss = function () {
        this.viewCtrl.dismiss("decline");
    };
    OwnerHkidNumber.prototype.submitHKID = function () {
        if (this.current_HKID >= this.total_HKIDs) {
            this.viewCtrl.dismiss("submitted");
            console.log("IF");
            return false;
        }
        else {
            console.log("else");
            this.viewCtrl.dismiss(this.current_HKID);
        }
    };
    OwnerHkidNumber = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-owner-hkid-number',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/owner-hkid-number/owner-hkid-number.html"*/`<ion-content class="main-view">\n  <!-- <div class="overlay" (click)="dismiss()"></div> -->\n  <div class="overlay"></div>\n  <div class="modal_content">\n    <ion-row class="modal_inner_content">\n      <ion-col col-12>\n        <p class="agree-title" text-center>Owner {{current_HKID}} Name</p>\n        <p class="agree-title" no-margin text-center>Please type your HKID number below (e.g. R123456)</p>\n      </ion-col>\n      <ion-col col-12>\n        <div class="form">\n          <ion-item transparent no-padding>\n            <ion-label floating margin-top>身分證號碼 | HKID Number</ion-label>\n            <ion-input required type="text"></ion-input>\n          </ion-item>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <button ion-button button-clear-outline round outline class="next-button login-button" color="mytheme" (click)="submitHKID()">Submit</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/owner-hkid-number/owner-hkid-number.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], OwnerHkidNumber);
    return OwnerHkidNumber;
}());

//# sourceMappingURL=owner-hkid-number.js.map

/***/ })

});
//# sourceMappingURL=14.js.map