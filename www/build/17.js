webpackJsonp([17],{

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForumPostModalModule", function() { return ForumPostModalModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forum_post_modal__ = __webpack_require__(452);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForumPostModalModule = (function () {
    function ForumPostModalModule() {
    }
    ForumPostModalModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forum_post_modal__["a" /* ForumPostModal */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forum_post_modal__["a" /* ForumPostModal */]),
            ],
        })
    ], ForumPostModalModule);
    return ForumPostModalModule;
}());

//# sourceMappingURL=forum-post-modal.module.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForumPostModal; });
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





var ForumPostModal = (function () {
    function ForumPostModal(navCtrl, navParams, viewCtrl, loadingService, dataService, showMessage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingService = loadingService;
        this.dataService = dataService;
        this.showMessage = showMessage;
    }
    ForumPostModal.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForumPostModal');
    };
    ForumPostModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ForumPostModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forum-post-modal',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/forum-post-modal/forum-post-modal.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title center>Forum</ion-title>\n    <ion-buttons end>\n      <button ion-button color="ffffff" (click)="dismiss()">\n        cancel\n      </button>\n      <button ion-button color="ffffff">\n        Post\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding white-background>\n  <ion-list>\n    <ion-item no-padding>\n      <ion-textarea rows="20" placeholder="Enter text to post"></ion-textarea>\n    </ion-item>\n  </ion-list>\n</ion-content>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/forum-post-modal/forum-post-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_show_message__["a" /* ShowMessage */]])
    ], ForumPostModal);
    return ForumPostModal;
}());

//# sourceMappingURL=forum-post-modal.js.map

/***/ })

});
//# sourceMappingURL=17.js.map