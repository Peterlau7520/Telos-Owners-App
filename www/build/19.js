webpackJsonp([19],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumDetailsModule", function() { return ForumDetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forum_details__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForumDetailsModule = (function () {
    function ForumDetailsModule() {
    }
    ForumDetailsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forum_details__["a" /* ForumDetails */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forum_details__["a" /* ForumDetails */]),
            ],
        })
    ], ForumDetailsModule);
    return ForumDetailsModule;
}());

//# sourceMappingURL=forum-details.module.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumDetails; });
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





var ForumDetails = (function () {
    function ForumDetails(navCtrl, navParams, loadingService, dataService, showMessage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingService = loadingService;
        this.dataService = dataService;
        this.showMessage = showMessage;
    }
    ForumDetails.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForumDetails');
    };
    ForumDetails.prototype.openReportPage = function () {
    };
    ForumDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forum-details',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/forum-details/forum-details.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Forum</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content no-padding>\n  <ion-row>\n    <ion-col no-padding>\n      <ion-card no-margin c-width-100>\n        <ion-item>\n          <ion-label no-margin>\n            <h2 left>HKU001</h2>\n            <p right>12/8/17 00:10</p>\n          </ion-label>\n        </ion-item>\n        <ion-card-content>\n          <p post-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s\n            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make\n            a type specimen book.\n          </p>\n        </ion-card-content>\n        <ion-row>\n          <ion-col text-center>\n            <button ion-button icon-left clear small>\n              <ion-icon name="ios-thumbs-up-outline"></ion-icon>\n              <div>12</div>\n            </button>\n          </ion-col>\n          <ion-col text-center>\n            <button ion-button icon-left clear small (click)="openReportPage()">\n              <ion-icon name="ios-flag-outline"></ion-icon>\n              <div>Report</div>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  <ion-item-group>\n    <ion-item-divider no-lines color="light">\n      <ion-label no-margin>Comments</ion-label>\n    </ion-item-divider>\n  </ion-item-group>\n  <ion-row>\n    <ion-col col-12 no-padding>\n      <ion-card no-margin c-box-shadow-none border-bottom-ee c-width-100>\n        <ion-item>\n          <ion-label no-margin>\n            <h2 left>HKU0023</h2>\n            <p right>12/8/17 00:10</p>\n          </ion-label>\n        </ion-item>\n        <ion-card-content>\n          <p comment-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n          </p>\n        </ion-card-content>\n        <ion-row>\n          <ion-col text-center>\n            <button ion-button icon-left clear small>\n              <ion-icon name="ios-thumbs-up-outline"></ion-icon>\n              <div>7</div>\n            </button>\n          </ion-col>\n          <ion-col text-center>\n            <button ion-button icon-left clear small (click)="openReportPage()">\n              <ion-icon name="ios-flag-outline"></ion-icon>\n              <div>Report</div>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-col>\n    <ion-col col-12 no-padding>\n      <ion-card no-margin c-box-shadow-none border-bottom-ee c-width-100>\n        <ion-item>\n          <ion-label no-margin>\n            <h2 left>HKU0021</h2>\n            <p right>12/8/17 00:10</p>\n          </ion-label>\n        </ion-item>\n        <ion-card-content>\n          <p comment-text>when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n          </p>\n        </ion-card-content>\n        <ion-row>\n          <ion-col text-center>\n            <button ion-button icon-left clear small>\n              <ion-icon name="ios-thumbs-up-outline"></ion-icon>\n              <div>5</div>\n            </button>\n          </ion-col>\n          <ion-col text-center>\n            <button ion-button icon-left clear small (click)="openReportPage()">\n              <ion-icon name="ios-flag-outline"></ion-icon>\n              <div>Report</div>\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n</ion-content>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/forum-details/forum-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_show_message__["a" /* ShowMessage */]])
    ], ForumDetails);
    return ForumDetails;
}());

//# sourceMappingURL=forum-details.js.map

/***/ })

});
//# sourceMappingURL=19.js.map