webpackJsonp([20],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgreeUseTelosModule", function() { return AgreeUseTelosModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agree_use_telos__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AgreeUseTelosModule = (function () {
    function AgreeUseTelosModule() {
    }
    AgreeUseTelosModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__agree_use_telos__["a" /* AgreeUseTelos */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__agree_use_telos__["a" /* AgreeUseTelos */]),
            ],
        })
    ], AgreeUseTelosModule);
    return AgreeUseTelosModule;
}());

//# sourceMappingURL=agree-use-telos.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgreeUseTelos; });
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


var AgreeUseTelos = (function () {
    function AgreeUseTelos(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    AgreeUseTelos.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AgreeUseTelos');
    };
    AgreeUseTelos.prototype.openAgeeUseCompany = function () {
        /* let myModal = this.modalCtrl.create("AgreeUseCompanyChop");
        myModal.present(); */
        this.viewCtrl.dismiss("accept");
    };
    AgreeUseTelos.prototype.dismiss = function () {
        this.viewCtrl.dismiss("decline");
    };
    AgreeUseTelos = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-agree-use-telos',template:/*ion-inline-start:"D:\ionic 2 projects\Projects\Telos-Owners-Ionic-App\src\pages\agree-use-telos\agree-use-telos.html"*/`<ion-content class="main-view">\n  <div class="overlay" (click)="dismiss()"></div>\n  <div class="modal_content">\n    <ion-row class="modal_inner_content">\n      <ion-col col-12>\n        <p class="agree-title">Before using our platform to vote, please agree to use a Telos Technology\'s employee as your proxy : </p>\n      </ion-col>\n      <ion-col col-12>\n        <p>\n          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy\n          text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n          book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially\n          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n          and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. There\n          are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,\n          by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage\n          of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem\n          Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator\n          on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures,\n          to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition,\n          injected humour, or non-characteristic words etc.\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <button ion-button button-clear-outline round outline class="next-button login-button" color="mytheme" (click)="dismiss()">Decline</button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button button-clear-outline round outline class="next-button login-button" color="mytheme" (click)="openAgeeUseCompany()">Accept</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>`/*ion-inline-end:"D:\ionic 2 projects\Projects\Telos-Owners-Ionic-App\src\pages\agree-use-telos\agree-use-telos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], AgreeUseTelos);
    return AgreeUseTelos;
}());

//# sourceMappingURL=agree-use-telos.js.map

/***/ })

});
//# sourceMappingURL=20.js.map