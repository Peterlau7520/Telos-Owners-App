webpackJsonp([15],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeboardModule", function() { return NoticeboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noticeboard__ = __webpack_require__(323);
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

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Noticeboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_opener__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_loading_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_data_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_show_message__ = __webpack_require__(104);
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
    function Noticeboard(navCtrl, navParams, transfer, file, iab, document, fileOpener, loadingService, dataService, showMessage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transfer = transfer;
        this.file = file;
        this.iab = iab;
        this.document = document;
        this.fileOpener = fileOpener;
        this.loadingService = loadingService;
        this.dataService = dataService;
        this.showMessage = showMessage;
        this.notices = [];
    }
    ;
    Noticeboard.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Noticeboard');
    };
    Noticeboard.prototype.ionViewWillEnter = function () {
        this.getNoticeBoardData();
    };
    Noticeboard.prototype.getNoticeBoardData = function () {
        var _this = this;
        /* this.loadingService.showLoading(); */
        this.dataService.getData("noticeBoard", {}).subscribe(function (results) {
            if (results.success == true) {
                _this.notices = results.notices;
                _this.loadingService.hideLoading();
            }
            else {
                _this.showMessage.showToastBottom(results.message);
                _this.loadingService.hideLoading();
            }
        }, function (err) {
            console.log("err", err);
            _this.loadingService.hideLoading();
            _this.showMessage.showToastBottom("Unable to get Noticeboard data, please try again.");
        });
    };
    Noticeboard.prototype.viewPdfFile = function (notice) {
        var _this = this;
        console.log(JSON.stringify(notice));
        /* this.file.dataDirectory; */
        var file_details = notice.fileLinks[0];
        var options = {
            print: { enabled: false },
            bookmarks: { enabled: false },
            email: { enabled: false },
            title: file_details.name
        };
        var fileTransfer = this.transfer.create();
        var url = file_details.url;
        fileTransfer.download(url, this.file.dataDirectory + file_details.name).then(function (entry) {
            console.log('download complete: ' + entry.toURL());
            _this.document.viewDocument(_this.file.dataDirectory + file_details.name, "application/pdf", options, onShow, onClose, onMissingApp, onError);
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
    Noticeboard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-noticeboard',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/noticeboard/noticeboard.html"*/`<ion-header>\n  <ion-navbar header-color>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-left> 通告 | NOTICEBOARD</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!--Theme Full Image Cards-->\n<ion-content>\n  <ion-grid no-padding>\n    <ion-row margin-bottom>\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4>\n        <ion-card padding text-center *ngFor="let notice of notices; let i = index;" (click)="viewPdfFile(notice)">\n          <div card-content>\n            <img images-filter src="./assets/images/background/{{i+1}}.jpg" />\n            <div card-title>{{notice.titleChn}} | {{notice.title}}</div>\n            <div card-subtitle>\n              <span c-display-inline-block left>\n                通告發出日期 | Post date: {{notice.postDate}}\n              </span>\n              <span c-display-inline-block left>\n                  有效期至 | Effective until:{{notice.endTime}}\n                </span>\n            </div>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/noticeboard/noticeboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_document_viewer__["a" /* DocumentViewer */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_opener__["a" /* FileOpener */], __WEBPACK_IMPORTED_MODULE_7__providers_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_8__providers_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_9__providers_show_message__["a" /* ShowMessage */]])
    ], Noticeboard);
    return Noticeboard;
}());

//# sourceMappingURL=noticeboard.js.map

/***/ })

});
//# sourceMappingURL=15.js.map