webpackJsonp([7],{

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThankYouNoteModule", function() { return ThankYouNoteModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__thank_you_note__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThankYouNoteModule = (function () {
    function ThankYouNoteModule() {
    }
    ThankYouNoteModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__thank_you_note__["a" /* ThankYouNote */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__thank_you_note__["a" /* ThankYouNote */]),
            ],
        })
    ], ThankYouNoteModule);
    return ThankYouNoteModule;
}());

//# sourceMappingURL=thank-you-note.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThankYouNote; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThankYouNote = (function () {
    function ThankYouNote(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    ThankYouNote.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ThankYouNote');
    };
    ThankYouNote.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ThankYouNote = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-thank-you-note',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/thank-you-note/thank-you-note.html"*/`<ion-content class="main-view">\n  <div class="overlay" (click)="dismiss()"></div>\n  <div class="modal_content" (click)="dismiss()">\n    <ion-row class="modal_inner_content">\n      <ion-col>\n        <ion-row>\n          <p col-12 class="agree-title" text-center no-margin>Thank you, you are now welcome to vote.</p>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/thank-you-note/thank-you-note.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], ThankYouNote);
    return ThankYouNote;
}());

//# sourceMappingURL=thank-you-note.js.map

/***/ })

});
//# sourceMappingURL=7.js.map