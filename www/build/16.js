webpackJsonp([16],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdVerification1Module", function() { return IdVerification1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__id_verification_1__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IdVerification1Module = (function () {
    function IdVerification1Module() {
    }
    IdVerification1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__id_verification_1__["a" /* IdVerification1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__id_verification_1__["a" /* IdVerification1 */]),
            ],
        })
    ], IdVerification1Module);
    return IdVerification1Module;
}());

//# sourceMappingURL=id-verification-1.module.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdVerification1; });
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




var IdVerification1 = (function () {
    function IdVerification1(navCtrl, navParams, camera, actionSheetCtrl, toastCtrl, showMessage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.showMessage = showMessage;
        this.license_image = "";
        this.owners_list = [];
        if (this.navParams.get("owners_list")) {
            console.log("navParams");
            this.owners_list = JSON.parse(this.navParams.get("owners_list"));
        }
        else {
            console.log("localStorage");
            this.owners_list = JSON.parse(localStorage.getItem("owners_list"));
        }
        console.log(this.owners_list);
    }
    IdVerification1.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IdVerification1');
    };
    IdVerification1.prototype.presentActionSheet = function (i) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY, i);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA, i);
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
    IdVerification1.prototype.takePicture = function (sourceType, i) {
        var _this = this;
        var options = {
            quality: 40,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.owners_list[i].license_image = 'data:image/png;base64,' + imageData;
        }, function (err) {
            _this.showMessage.showToastBottom("Unable to get image");
        });
    };
    IdVerification1.prototype.submitData = function (i) {
        console.log(i);
        if (i < this.owners_list.length - 1) {
            this.owners_list[i].is_visible = false;
            i++;
            this.owners_list[i].is_visible = true;
        }
        else {
            console.log("return");
            console.log(this.owners_list);
            this.navCtrl.push("CompanyChop");
        }
        console.log(this.owners_list.length);
    };
    IdVerification1.prototype.goToIDVerification2 = function () {
        this.navCtrl.push("IdVerification2");
    };
    IdVerification1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-id-verification-1',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/id-verification-1/id-verification-1.html"*/`<ion-header>\n  <ion-navbar header-color>\n    <!-- <ion-title text-left>HKID (1/2)</ion-title> -->\n  </ion-navbar>\n</ion-header>\n<!-- Themes Register + logo -->\n<ion-content background-size default-background>\n  <ion-grid>\n    <ion-row wrap padding>\n      <ion-col col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 no-padding *ngFor="let owners_info of owners_list; let i=index;">\n        <div class="form" *ngIf="owners_info.is_visible">\n          <h1 title>身分證 | HKID ({{i+1}}/{{owners_list.length}})</h1>\n          <ion-row>\n            <ion-col class="p-l-r-10 p-t-b-0">\n              <p>請上傳您身分證圖片跟輸入其號碼 | Please upload a photo of your HKID and enter your HKID number below (e.g. R123456)</p>\n              <ion-row>\n                <ion-col text-center no-padding class="img-preview-div">\n                  <img *ngIf="!owners_info.license_image" src="./assets/images/logo/sample.png" class="preview-image" alt="">\n                  <img *ngIf="owners_info.license_image" [src]="owners_info.license_image" class="preview-image" alt="">\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col text-center margin-top no-padding>\n                  <button ion-button button-clear-outline round outline color="mytheme" (click)="presentActionSheet(i)">\n                    <ion-icon name="ios-camera-outline" class="camera-icon"></ion-icon>\n                    拍 | Take</button>\n                </ion-col>\n              </ion-row>\n              <!---Input field username-->\n              <ion-item no-padding transparent padding-bottom>\n                <ion-label floating>身分證號碼 | HKID NUMBER (e.g. R123456)</ion-label>\n                <ion-input required type="text"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row margin-top>\n            <ion-col text-center margin-top>\n              <button ion-button button-clear-outline round outline class="next-button" color="mytheme" (click)="submitData(i)">確定 | Submit</button>\n            </ion-col>\n          </ion-row>\n        </div>\n        <!-- <div logo>\n          <img left src="./assets/images/logo/login_3.png">\n        </div> -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/id-verification-1/id-verification-1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_show_message__["a" /* ShowMessage */]])
    ], IdVerification1);
    return IdVerification1;
}());

//# sourceMappingURL=id-verification-1.js.map

/***/ })

});
//# sourceMappingURL=16.js.map