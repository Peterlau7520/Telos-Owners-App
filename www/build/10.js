webpackJsonp([10],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_page__ = __webpack_require__(327);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_page__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_page__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile-page.module.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
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


var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.user_info = {
            "profile_pic": "",
            "first_name": "JUSTIN",
            "last_name": "HO"
        };
        this.short_name = "";
        this.getUserNameFirstChar(this.user_info.first_name, this.user_info.last_name);
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.getUserNameFirstChar = function (first_name, last_name) {
        var str = first_name + " " + last_name + "";
        this.short_name = str.split(' ').map(function (item) { return item[0]; }).join('');
        console.log(this.short_name);
    };
    ProfilePage.prototype.saveProfile = function (user_info) {
        console.log(user_info);
    };
    ProfilePage.prototype.openChangePassword = function () {
        var myModal = this.modalCtrl.create("ChangePasswordPage");
        myModal.onDidDismiss(function (data) {
        });
        myModal.present();
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-profile-page',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/profile-page/profile-page.html"*/`<ion-header>\n  <ion-navbar header-color>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-left>Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row wrap padding>\n      <ion-col col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        <!--Logo-->\n        <div logo>\n          <ion-item transparent>\n            <ion-label no-margin>\n              <h5 user-f-l-name color="mytheme">{{user_info.first_name}} {{user_info.last_name}}</h5>\n              <h5 user-f-l-name color="mytheme">何雨霽</h5>\n              <!-- <img [src]="user_info.profile_pic" *ngIf="user_info.profile_pic" />\n              <div class="short-name-wrapper" *ngIf="!user_info.profile_pic">\n                <p class="short-name-txt">{{short_name}}</p>\n              </div> -->\n            </ion-label>\n          </ion-item>\n        </div>\n        <!--End logo-->\n        <!--Form-->\n        <div class="form">\n          <ion-item no-padding transparent>\n            <!--Icon for username-->\n            <ion-icon item-left name="ios-call" color="mytheme">\n            </ion-icon>\n            <!---Input field username-->\n            <ion-label floating margin-top>電話 | PHONE</ion-label>\n            <ion-input required type="text" [(ngModel)]="user_info.phone_number"></ion-input>\n          </ion-item>\n          <ion-item no-padding transparent>\n            <!--Icon for email-->\n            <ion-icon item-left name="ios-mail" color="mytheme">\n            </ion-icon>\n            <!---Input field email-->\n            <ion-label floating margin-top>電子郵件 | EMAIL</ion-label>\n            <ion-input required type="email" pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}" required [(ngModel)]="email"></ion-input>\n          </ion-item>\n          <ion-item no-padding transparent>\n            <!--Icon for username-->\n            <ion-icon item-left name="md-person" color="mytheme">\n            </ion-icon>\n            <!---Input field username-->\n            <ion-label floating margin-top>用戶名 | USERNAME</ion-label>\n            <ion-input required type="text" disabled="true" [(ngModel)]="user_info.username"></ion-input>\n          </ion-item>\n          <ion-item no-padding transparent (click)="openChangePassword()">\n            <!--Icon for password-->\n            <ion-icon item-left name="md-lock" color="mytheme">\n            </ion-icon>\n            <!---Input field password-->\n            <ion-label margin-bottom>\n              <p margin-top class="pwd-text">密碼 | PASSWORD</p>\n            </ion-label>\n            <!-- <ion-input required type="password" [(ngModel)]="password"></ion-input> -->\n          </ion-item>\n          <!---Register button-->\n          <ion-row>\n            <ion-col col-12 text-center no-padding padding-top margin-top>\n              <button ion-button button-clear-outline text-center round outline class="login-button" color="mytheme" (click)="saveProfile(user_info)">SAVE</button>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/profile-page/profile-page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile-page.js.map

/***/ })

});
//# sourceMappingURL=10.js.map