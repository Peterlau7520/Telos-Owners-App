webpackJsonp([15],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeboardModule", function() { return NoticeboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noticeboard__ = __webpack_require__(315);
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

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Noticeboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_opener__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__ = __webpack_require__(206);
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
    function Noticeboard(platform, navCtrl, navParams, transfer, file, iab, document, fileOpener) {
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transfer = transfer;
        this.file = file;
        this.iab = iab;
        this.document = document;
        this.fileOpener = fileOpener;
    }
    Noticeboard.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Noticeboard');
    };
    Noticeboard.prototype.IonViewDidEnter = function () {
        /* const options: DocumentViewerOptions = {
          title: 'My PDF'
        }
        this.document.viewDocument('https://www.ets.org/Media/Tests/GRE/pdf/gre_research_validity_data.pdf', 'application/pdf', options) */
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
            selector: 'page-noticeboard',template:/*ion-inline-start:"D:\ionic 2 projects\Projects\Telos-Owners-Ionic-App\src\pages\noticeboard\noticeboard.html"*/`<ion-header>\n\n  <ion-navbar header-color>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-left> 通告 | NOTICEBOARD</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<!--Theme Full Image Cards-->\n\n<ion-content>\n\n  <ion-grid no-padding>\n\n    <ion-row margin-bottom>\n\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4>\n\n        <ion-card padding text-center (click)="viewPdfFile(\'Card 1\')">\n\n          <div card-content>\n\n            <img images-filter src="./assets/images/background/1.jpg" />\n\n            <div card-title>Card 1</div>\n\n            <div card-subtitle>Description about card 1.</div>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4>\n\n        <ion-card padding text-center (click)="viewPdfFile(\'Card 2\')">\n\n          <div card-content>\n\n            <img images-filter src="./assets/images/background/2.jpg" />\n\n            <div card-title>Card 2</div>\n\n            <div card-subtitle>Description about card 2.</div>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4>\n\n        <ion-card padding text-center (click)="viewPdfFile(\'Card 3\')">\n\n          <div card-content>\n\n            <img images-filter src="./assets/images/background/3.jpg" />\n\n            <div card-title>Card 3</div>\n\n            <div card-subtitle>Description about card 3.</div>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4>\n\n        <ion-card padding text-center (click)="viewPdfFile(\'Card 4\')">\n\n          <div card-content>\n\n            <img images-filter src="./assets/images/background/4.jpg" />\n\n            <div card-title>Card 4</div>\n\n            <div card-subtitle>Description about card 4.</div>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4>\n\n        <ion-card padding text-center (click)="viewPdfFile(\'Card 5\')">\n\n          <div card-content>\n\n            <img images-filter src="./assets/images/background/5.jpg" />\n\n            <div card-title>Card 5</div>\n\n            <div card-subtitle>Description about card 5.</div>\n\n          </div>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n<!--Fab Button-->\n\n<!-- <ion-fab #fab bottom right>\n\n  <button button-ion-fab ion-fab (click)="onEvent(\'onFab\', data, $event)">\n\n    <ion-icon name="add"></ion-icon>\n\n  </button>\n\n</ion-fab> -->`/*ion-inline-end:"D:\ionic 2 projects\Projects\Telos-Owners-Ionic-App\src\pages\noticeboard\noticeboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__["a" /* DocumentViewer */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_opener__["a" /* FileOpener */]])
    ], Noticeboard);
    return Noticeboard;
}());

//# sourceMappingURL=noticeboard.js.map

/***/ })

});
//# sourceMappingURL=15.js.map