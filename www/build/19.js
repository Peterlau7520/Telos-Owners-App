webpackJsonp([19],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdVerification2Module", function() { return IdVerification2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_meetings__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IdVerification2Module = (function () {
    function IdVerification2Module() {
    }
    IdVerification2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__all_meetings__["a" /* AllMeetingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__all_meetings__["a" /* AllMeetingsPage */]),
            ],
        })
    ], IdVerification2Module);
    return IdVerification2Module;
}());

//# sourceMappingURL=all-meetings.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllMeetingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AllMeetingsPage = (function () {
    function AllMeetingsPage(navCtrl, navParams, camera, actionSheetCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.toastCtrl = toastCtrl;
        this.license_image = "";
    }
    AllMeetingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IdVerification1');
    };
    AllMeetingsPage.prototype.presentActionSheet = function () {
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
    AllMeetingsPage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 40,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.license_image = 'data:image/png;base64,' + imageData;
        }, function (err) {
            _this.presentToast("Unable to get image");
        });
    };
    AllMeetingsPage.prototype.presentToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    AllMeetingsPage.prototype.goToCompanyChop = function () {
        this.navCtrl.push("CompanyChop");
    };
    AllMeetingsPage.prototype.goToUpcomingMeetings = function () {
        this.navCtrl.push("UpcomingMeetings");
    };
    AllMeetingsPage.prototype.goToPastMeetings = function () {
        this.navCtrl.push("PastMeetings");
    };
    AllMeetingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-all-meetings',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/all-meetings/all-meetings.html"*/`<ion-header>\n  <ion-navbar header-color>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-left>會議 | Meetings</ion-title>\n  </ion-navbar>\n</ion-header>\n<!-- Themes Register + logo -->\n<ion-content white-background>\n  <ion-row margin-bottom>\n    <ion-col col-12>\n      <ul no-margin no-padding class="collapsible">\n        <li no-margin>\n          <ion-card>\n            <div class="collapsible-header" no-margin no-padding (click)="goToUpcomingMeetings()">\n              <ion-item no-padding padding text-center transparent no-lines text-center>\n                <ion-label style="margin-right: 0; margin-left: 0;">\n                  <h2 text-center no-margin class="survey-title-text">近期會議 | Upcoming Meetings</h2>\n                </ion-label>\n              </ion-item>\n            </div>\n          </ion-card>\n        </li>\n        <li no-margin>\n          <ion-card>\n            <div class="collapsible-header" no-margin no-padding (click)="goToPastMeetings()">\n              <ion-item no-padding padding text-center transparent no-lines text-center>\n                <ion-label style="margin-right: 0; margin-left: 0;">\n                  <h2 text-center no-margin class="survey-title-text">過往會議 | Past Meetings</h2>\n                </ion-label>\n              </ion-item>\n            </div>\n          </ion-card>\n        </li>\n      </ul>\n    </ion-col>\n  </ion-row>\n</ion-content>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/all-meetings/all-meetings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], AllMeetingsPage);
    return AllMeetingsPage;
}());

//# sourceMappingURL=all-meetings.js.map

/***/ })

});
//# sourceMappingURL=19.js.map