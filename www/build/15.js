webpackJsonp([15],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeboardModule", function() { return NoticeboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noticeboard__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NoticeboardModule = (function () {
    function NoticeboardModule() {
    }
    NoticeboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__noticeboard__["a" /* Noticeboard */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__noticeboard__["a" /* Noticeboard */]),
            ],
        })
    ], NoticeboardModule);
    return NoticeboardModule;
}());

//# sourceMappingURL=noticeboard.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Noticeboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_opener__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_notices_notices__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var Noticeboard = (function () {
    function Noticeboard(platform, navCtrl, navParams, transfer, file, iab, document, fileOpener, noticeProvider) {
        var _this = this;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transfer = transfer;
        this.file = file;
        this.iab = iab;
        this.document = document;
        this.fileOpener = fileOpener;
        this.noticeProvider = noticeProvider;
        this.notices = [];
        this.noticeProvider.getNotices().then(function (info) {
            _this.notices = info['notices'];
            console.log(_this.notices);
        }, function (err) {
            // loading.present();
            //  const alert = this.alertCtril.create({
            //    title: 'Errors',
            //    message: 'Failed to retrieve documents',
            //    buttons: [
            //      {
            //        text: 'Ok',
            //        role: 'cancel',
            //      }
            //    ] 
            //  });
        });
    }
    ;
    Noticeboard.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Noticeboard');
    };
    Noticeboard.prototype.IonViewDidEnter = function () {
    };
    Noticeboard.prototype.viewPdfFile = function (card_title) {
        var _this = this;
        /* this.file.dataDirectory; */
        var options = {
            print: { enabled: false },
            bookmarks: { enabled: false },
            email: { enabled: false },
            title: card_title
        };
        var fileTransfer = this.transfer.create();
        var url = 'https://www.ets.org/Media/Tests/GRE/pdf/gre_research_validity_data.pdf';
        fileTransfer.download(url, this.file.dataDirectory + 'demopdfflie.pdf').then(function (entry) {
            console.log('download complete: ' + entry.toURL());
            _this.document.viewDocument(_this.file.dataDirectory + "demopdfflie.pdf", "application/pdf", options, onShow, onClose, onMissingApp, onError);
        }, function (error) {
            console.log(error);
            // handle error
        });
        function onShow() {
            window.console.log('document shown');
            //e.g. track document usage
        }
        function onClose() {
            window.console.log('document closed');
            //e.g. remove temp files
        }
        function onMissingApp(appId, installer) {
            if (confirm("PDF viewer not available on your device, Do you want to install the free PDF Viewer App to view this document?")) {
                installer();
            }
        }
        function onError(error) {
            window.console.log(error);
            alert("Sorry! Cannot view document.");
        }
    };
    Noticeboard.prototype.viewPdfFile1 = function (card_title) {
        var _this = this;
        /* let file_url = "https://www.ets.org/Media/Tests/GRE/pdf/gre_research_validity_data.pdf"; */
        var fileTransfer = this.transfer.create();
        var url = 'https://www.ets.org/Media/Tests/GRE/pdf/gre_research_validity_data.pdf';
        fileTransfer.download(url, this.file.dataDirectory + 'demopdfflie.pdf').then(function (entry) {
            console.log('download complete: ' + entry.toURL());
            _this.document.viewDocument(_this.file.dataDirectory + "demopdfflie.pdf", "application/pdf", { print: { enabled: true }, bookmarks: { enabled: true }, email: { enabled: true }, title: "document title" });
        }, function (error) {
            console.log(error);
            // handle error
        });
    };
    Noticeboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-noticeboard',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/noticeboard/noticeboard.html"*/`<ion-header>\n  <ion-navbar header-color>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-left> 通告 | NOTICEBOARD</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!--Theme Full Image Cards-->\n<ion-content>\n  <ion-grid no-padding>\n    <ion-row margin-bottom>\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4>\n        <ion-card padding text-center *ngFor="let notice of notices" (click)="viewPdfFile(\'Card 1\')" >\n          <div card-content>\n            <img images-filter src="./assets/images/background/1.jpg" />\n            <div card-title>Card 1 {{notice.title}}</div>\n            <div card-subtitle>Description about card 1</div>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<!--Fab Button-->\n<!-- <ion-fab #fab bottom right>\n  <button button-ion-fab ion-fab (click)="onEvent(\'onFab\', data, $event)">\n    <ion-icon name="add"></ion-icon>\n  </button>\n</ion-fab> -->`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/noticeboard/noticeboard.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__["a" /* DocumentViewer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__["a" /* DocumentViewer */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_opener__["a" /* FileOpener */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_opener__["a" /* FileOpener */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__providers_notices_notices__["a" /* NoticesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_notices_notices__["a" /* NoticesProvider */]) === "function" && _j || Object])
    ], Noticeboard);
    return Noticeboard;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=noticeboard.js.map

/***/ })

});
//# sourceMappingURL=15.js.map