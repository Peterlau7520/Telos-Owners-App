webpackJsonp([18],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumPageModule", function() { return ForumPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forum_page__ = __webpack_require__(451);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForumPageModule = (function () {
    function ForumPageModule() {
    }
    ForumPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forum_page__["a" /* ForumPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forum_page__["a" /* ForumPage */]),
            ],
        })
    ], ForumPageModule);
    return ForumPageModule;
}());

//# sourceMappingURL=forum-page.module.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loading_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_show_message__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ForumPage = (function () {
    function ForumPage(navCtrl, navParams, loadingService, dataService, showMessage, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingService = loadingService;
        this.dataService = dataService;
        this.showMessage = showMessage;
        this.modalCtrl = modalCtrl;
        this.forumsList = [];
        this.getStaticData();
    }
    ForumPage.prototype.getStaticData = function () {
        for (var i = 0; i < 5; i++) {
            this.forumsList.push({
                "likes": i * 4,
                "comments": 3,
            });
        }
    };
    ForumPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForumPage');
    };
    ForumPage.prototype.openForumDetailsPage = function () {
        this.navCtrl.push("ForumDetails");
    };
    ForumPage.prototype.openReportPage = function () {
    };
    ForumPage.prototype.openWritePostPage = function () {
        var myModal = this.modalCtrl.create("ForumPostModal");
        myModal.onDidDismiss(function (data) {
        });
        myModal.present();
    };
    ForumPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forum-page',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/forum-page/forum-page.html"*/`<ion-header>\n  <ion-navbar header-color>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-left> 論壇 | FORUM</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-row>\n    <ion-col col-12 no-padding>\n      <ion-card (click)="openWritePostPage()">\n        <ion-card-content>\n          <ion-item no-padding>\n            <ion-label no-margin>\n              <ion-icon item-start no-margin name="ios-create-outline"></ion-icon>\n              <p c-display-inline-block no-margin>您最近在想什麼 ？Post something here :)</p>\n            </ion-label>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-row margin-bottom>\n    <ion-col col-12 no-padding *ngFor="let forum_details of forumsList; let i=index;">\n      <ion-card>\n        <ion-item (click)="openForumDetailsPage()">\n          <h2 left>HKU00{{i+2}}</h2>\n          <p right>12/8/17 00:10</p>\n        </ion-item>\n        <ion-card-content (click)="openForumDetailsPage()">\n          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s\n            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make\n            a type specimen book.\n          </p>\n        </ion-card-content>\n        <ion-row>\n          <ion-col text-center>\n            <button ion-button icon-left clear small>\n              <ion-icon name="ios-thumbs-up-outline"></ion-icon>\n              <div>{{forum_details.likes}}</div>\n            </button>\n          </ion-col>\n          <ion-col text-center>\n            <button ion-button icon-left clear small (click)="openForumDetailsPage()">\n              <ion-icon name="ios-text-outline"></ion-icon>\n              <div>{{forum_details.comments}}</div>\n            </button>\n          </ion-col>\n          <ion-col text-center>\n            <button ion-button icon-left clear small (click)="openReportPage()">\n              <ion-icon name="ios-flag-outline"></ion-icon>\n              <div>投訴 | Report</div>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/forum-page/forum-page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_show_message__["a" /* ShowMessage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], ForumPage);
    return ForumPage;
}());

//# sourceMappingURL=forum-page.js.map

/***/ })

});
//# sourceMappingURL=18.js.map