webpackJsonp([17],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyChopModule", function() { return CompanyChopModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__company_chop__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompanyChopModule = (function () {
    function CompanyChopModule() {
    }
    CompanyChopModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__company_chop__["a" /* CompanyChop */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__company_chop__["a" /* CompanyChop */]),
            ],
        })
    ], CompanyChopModule);
    return CompanyChopModule;
}());

//# sourceMappingURL=company-chop.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompanyChop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_show_message__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompanyChop = (function () {
    function CompanyChop(navCtrl, navParams, camera, actionSheetCtrl, toastCtrl, showMessage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.showMessage = showMessage;
        this.license_image = "";
    }
    CompanyChop.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompanyChop');
    };
    CompanyChop.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    CompanyChop.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 40,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.license_image = 'data:image/png;base64,' + imageData;
            _this.showMessage.showToastBottom("Uploaded successfully!");
        }, function (err) {
            _this.showMessage.showToastBottom("Unable to get image");
        });
    };
    CompanyChop.prototype.goToRegister = function () {
        this.navCtrl.push("Register");
    };
    CompanyChop = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-company-chop',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/company-chop/company-chop.html"*/`<ion-header>\n  <ion-navbar header-color>\n    <!-- <ion-title text-left>HKID (1/2)</ion-title> -->\n  </ion-navbar>\n</ion-header>\n<!-- Themes Register + logo -->\n<ion-content background-size default-background>\n  <ion-grid>\n    <ion-row wrap padding>\n      <ion-col col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 no-padding>\n        <div class="form">\n          <h1 title>印章 | Company Chop</h1>\n          <ion-row margin-bottom padding-bottom>\n            <ion-col class="p-l-r-10 p-t-b-0" margin-vertical padding-vertical>\n              <p margin-bottom>如果您單位屬於貴公司，請上傳其印章圖片 | IF YOUR UNIT(S) IS OWNED BY YOUT COMPANY, PLEASE UPLOAD A PHOTO OF THE COMPANY CHOP.</p>\n              <!-- <ion-row>\n                  <ion-col text-center no-padding class="img-preview-div">\n                    <img *ngIf="!license_image" src="./assets/images/logo/login.png" class="preview-image" alt="">\n                    <img *ngIf="license_image" [src]="license_image" class="preview-image" alt="">\n                  </ion-col>\n                </ion-row> -->\n              <ion-row>\n                <ion-col text-center no-padding>\n                  <button ion-button button-clear-outline round outline color="mytheme" (click)="presentActionSheet()">\n                    <ion-icon name="ios-camera-outline" class="camera-icon"></ion-icon>\n                    拍 | Take</button>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n          <ion-row margin-top>\n            <ion-col text-center margin-top>\n              <button ion-button button-clear-outline round outline class="next-button" color="mytheme" (click)="goToRegister()">下一頁 | Next</button>\n            </ion-col>\n          </ion-row>\n        </div>\n        <!-- <div logo>\n            <img left src="./assets/images/logo/login_3.png">\n          </div> -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/company-chop/company-chop.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_show_message__["a" /* ShowMessage */]])
    ], CompanyChop);
    return CompanyChop;
}());

//# sourceMappingURL=company-chop.js.map

/***/ })

});
//# sourceMappingURL=17.js.map