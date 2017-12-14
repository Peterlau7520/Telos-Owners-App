webpackJsonp([11],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDetailsModule", function() { return PersonalDetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal_details__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonalDetailsModule = (function () {
    function PersonalDetailsModule() {
    }
    PersonalDetailsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__personal_details__["a" /* PersonalDetails */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__personal_details__["a" /* PersonalDetails */]),
            ],
        })
    ], PersonalDetailsModule);
    return PersonalDetailsModule;
}());

//# sourceMappingURL=personal-details.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PersonalDetails = (function () {
    function PersonalDetails(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PersonalDetails.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalDetails');
    };
    PersonalDetails.prototype.finishRegistration = function () {
        console.log("finishRegistration");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
    };
    PersonalDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-personal-details',template:/*ion-inline-start:"D:\ionic 2 projects\Projects\Telos-Owners-Ionic-App\src\pages\personal-details\personal-details.html"*/`<ion-header>\n  <ion-navbar header-color>\n    <!-- <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button> -->\n    <!-- <ion-title text-left>Ownership</ion-title> -->\n  </ion-navbar>\n</ion-header>\n<!-- Themes Register + logo -->\n<ion-content background-size default-background>\n  <ion-grid>\n    <ion-row wrap padding>\n      <ion-col col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 no-padding>\n        <!--Form-->\n        <div class="form">\n          <!--Form Title-->\n          <h1 title>個人資料 | Personal details</h1>\n          <ion-row>\n            <ion-col class="p-l-r-10 p-t-b-0">\n              <p>請按照管理公司發表的信之說明來填表 | Please fill out the form according to the instructions sent to you by your building management</p>\n              <ion-item no-padding>\n                <ion-label floating no-margin>AUTHORIZATION CODE</ion-label>\n                <ion-input required type="text"></ion-input>\n              </ion-item>\n              <ion-item no-padding>\n                <ion-label floating margin-top>屋苑 | ESTATE</ion-label>\n                <ion-input required type="text"></ion-input>\n              </ion-item>\n              <ion-item no-padding>\n                <ion-label floating no-margin style="white-space: pre-line;">座 | BLOCK/TOWER (要是您屋苑沒分座數請輸入 | Block | if only one block/tower, enter: Block):</ion-label>\n                <ion-input required type="text"></ion-input>\n              </ion-item>\n              <ion-item no-padding>\n                <ion-label floating margin-top>樓 | FLOOR</ion-label>\n                <ion-input required type="text"></ion-input>\n              </ion-item>\n              <ion-item no-padding>\n                <ion-label floating margin-top>單位 | UNIT</ion-label>\n                <ion-input required type="text"></ion-input>\n              </ion-item>\n              <ion-row margin-top>\n                <ion-col text-center margin-top>\n                  <button ion-button button-clear-outline round outline class="next-button" color="mytheme" (click)="finishRegistration()">完成 | Done</button>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n        </div>\n        <!-- <div logo>\n            <img left src="./assets/images/logo/login_3.png">\n          </div> -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"D:\ionic 2 projects\Projects\Telos-Owners-Ionic-App\src\pages\personal-details\personal-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PersonalDetails);
    return PersonalDetails;
}());

//# sourceMappingURL=personal-details.js.map

/***/ })

});
//# sourceMappingURL=11.js.map