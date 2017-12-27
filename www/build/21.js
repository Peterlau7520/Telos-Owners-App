webpackJsonp([21],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_password_page__ = __webpack_require__(447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangePasswordPageModule = (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__change_password_page__["a" /* ChangePasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change_password_page__["a" /* ChangePasswordPage */]),
            ],
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());

//# sourceMappingURL=change-password-page.module.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loading_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_show_message__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChangePasswordPage = (function () {
    function ChangePasswordPage(navCtrl, navParams, viewCtrl, loadingService, dataService, showMessage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingService = loadingService;
        this.dataService = dataService;
        this.showMessage = showMessage;
        this.password_data = {};
        this.loginResponse = {};
        this.token = "";
        this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
        this.token = localStorage.getItem("token");
    }
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePasswordPage');
    };
    ChangePasswordPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss("decline");
    };
    ChangePasswordPage.prototype.savePassword = function (password_data) {
        var _this = this;
        this.loadingService.showLoading();
        this.dataService.postData("changePassword", {
            "account": this.loginResponse.user.account,
            "oldPassword": password_data.old_password,
            "password": password_data.new_password,
            "phone": "",
            "email": ""
        }, {
            headers: {
                'authorization': this.token
            }
        }).subscribe(function (results) {
            if (results.success == true) {
                _this.showMessage.showToastBottom(results.message);
                _this.loadingService.hideLoading();
                _this.viewCtrl.dismiss("decline");
            }
            else {
                _this.showMessage.showToastBottom(results.message);
                _this.loadingService.hideLoading();
                if (results.message == "Invalid token" || results.message == "Please login") {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */]);
                }
            }
        }, function (err) {
            console.log("err", err);
            _this.loadingService.hideLoading();
            _this.showMessage.showToastBottom("Unable to save password, please try again.");
        });
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-change-password-page',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/change-password-page/change-password-page.html"*/`<ion-content class="main-view">\n  <div class="overlay" (click)="dismiss()"></div>\n  <div class="modal_content">\n    <ion-row class="modal_inner_content">\n      <ion-col>\n        <ion-icon name="md-close" class="close-button" (click)="dismiss()"></ion-icon>\n        <ion-row>\n          <p col-12 class="agree-title" text-center no-margin>改密碼 | Reset Password</p>\n          <!-- <button ion-button buttin-clear round> -->\n          <!-- </button> -->\n        </ion-row>\n        <ion-row>\n          <ion-col col-12>\n            <div class="form">\n              <ion-item transparent no-padding>\n                <ion-label floating margin-top>輸入久密碼 | ENTER OLD PASSWORD</ion-label>\n                <ion-input required type="password" [(ngModel)]="password_data.old_password"></ion-input>\n              </ion-item>\n              <ion-item transparent no-padding>\n                <ion-label floating margin-top>輸入新密碼 | ENTER NEW PASSWORD</ion-label>\n                <ion-input required type="password" [(ngModel)]="password_data.new_password"></ion-input>\n              </ion-item>\n              <ion-item transparent no-padding>\n                <ion-label floating margin-top>再次輸入新密碼 | RE-ENTER NEW PASSWORD</ion-label>\n                <ion-input required type="password" [(ngModel)]="password_data.renew_password"></ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <button ion-button button-clear-outline round outline class="next-button login-button" color="mytheme" (click)="savePassword(password_data)">確定 | Confirm</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/change-password-page/change-password-page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_show_message__["a" /* ShowMessage */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password-page.js.map

/***/ })

});
//# sourceMappingURL=21.js.map