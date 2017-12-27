webpackJsonp([4],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPastMeetingDetailsModule", function() { return ViewPastMeetingDetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_past_meeting_details__ = __webpack_require__(469);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewPastMeetingDetailsModule = (function () {
    function ViewPastMeetingDetailsModule() {
    }
    ViewPastMeetingDetailsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_past_meeting_details__["a" /* ViewPastMeetingDetails */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_past_meeting_details__["a" /* ViewPastMeetingDetails */]),
            ],
        })
    ], ViewPastMeetingDetailsModule);
    return ViewPastMeetingDetailsModule;
}());

//# sourceMappingURL=view-past-meeting-details.module.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPastMeetingDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewPastMeetingDetails = (function () {
    function ViewPastMeetingDetails(element, renderer, navCtrl, navParams, modalCtrl, transfer, file, document) {
        this.element = element;
        this.renderer = renderer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.transfer = transfer;
        this.file = file;
        this.document = document;
        this.is_license_accepted = true;
        this.meeting_details = {};
        this.data = {};
        this.events = {};
        this.poll_list = [];
        this.meeting_details = JSON.parse(this.navParams.get("meeting_details"));
    }
    ViewPastMeetingDetails.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewMeetingPolls');
        this.initParallax();
    };
    ViewPastMeetingDetails.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidEnter ViewMeetingPolls');
        this.getStaticData();
    };
    /* Start Parallax */
    ViewPastMeetingDetails.prototype.initParallax = function () {
        var _this = this;
        this.scrollerHandle = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
        this.header = this.scrollerHandle.firstElementChild;
        this.headerHeight = this.scrollerHandle.clientHeight;
        this.ticking = false;
        this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
        window.addEventListener('resize', function () {
            _this.headerHeight = _this.scrollerHandle.clientHeight;
        }, false);
        this.scrollerHandle.addEventListener('scroll', function () {
            if (!_this.ticking) {
                window.requestAnimationFrame(function () {
                    _this.updateElasticHeader();
                });
            }
            _this.ticking = true;
        });
    };
    ViewPastMeetingDetails.prototype.updateElasticHeader = function () {
        this.scrollTop = this.scrollerHandle.scrollTop;
        if (this.scrollTop >= 0) {
            this.translateAmt = this.scrollTop / 2;
            this.scaleAmt = 1;
        }
        else {
            this.translateAmt = 0;
            this.scaleAmt = -this.scrollTop / this.headerHeight + 1;
        }
        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
        this.ticking = false;
    };
    /* End Parallax */
    ViewPastMeetingDetails.prototype.expandPoll = function (poll_details) {
        poll_details.show = !poll_details.show;
    };
    ViewPastMeetingDetails.prototype.toggleGroup = function (poll_details) {
        poll_details.show = !poll_details.show;
    };
    ViewPastMeetingDetails.prototype.isGroupShown = function (poll_details) {
        return poll_details.show;
    };
    ViewPastMeetingDetails.prototype.getStaticData = function () {
        this.poll_list = [];
        for (var i = 0; i < 1; i++) {
            var tmp_option_list = [];
            this.poll_list.push({
                "poll_title": "Poll " + (i + 1),
                "is_complete": false
            });
            for (var j = 0; j < 3; j++) {
                var tmp_option_value = 6 - (j * 3);
                if (tmp_option_value == 0) {
                    tmp_option_value = 1;
                }
                tmp_option_list.push({
                    "option_title": "Option " + (j + 1),
                    "option_value": tmp_option_value + "0%"
                });
            }
            this.poll_list[i].option_list = tmp_option_list;
        }
        console.log(this.poll_list);
    };
    ViewPastMeetingDetails.prototype.openAgendaFile = function (agenda_details) {
        var _this = this;
        console.log(agenda_details);
        var file_details = agenda_details;
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
    ViewPastMeetingDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-past-meeting-details',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/view-past-meeting-details/view-past-meeting-details.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>{{meeting_details.meeting_titleChn}} | {{meeting_details.meeting_title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- <ion-item no-lines background-size [ngStyle]="{\'background-image\': \'url(\' + meeting_details.meeting_background + \')\'}"> -->\n  <!-- <ion-item no-lines background-size>\n  </ion-item> -->\n\n  <ion-grid no-padding>\n    <ion-row>\n      <!--Parallax Rateing-->\n      <!-- <ion-col col-12>\n        <ion-item no-lines text-wrap header-bcg no-padding>\n          <h1 parallax-title text-center margin-bottom padding-vertical>{{meeting_details.meeting_titleChn}} | {{meeting_details.meeting_title}}</h1>\n        </ion-item>\n      </ion-col> -->\n      <!--Content-->\n      <ion-col col-12>\n        <!--Info-->\n        <ion-item color-1d1d26 no-lines no-margin padding-right>\n          <ion-label>\n            <div info>\n              <span left>\n                <ion-icon>\n                  <img src="./assets/images/icons/date_time.png" class="label-icons-time" alt="">&nbsp;\n                </ion-icon>\n                Meeting Time : {{meeting_details.meeting_startTime}} - {{meeting_details.meeting_endTime}}</span>\n              <span>&nbsp;</span>\n            </div>\n            <div info>\n              <span left>\n                <ion-icon>\n                  <img src="./assets/images/icons/venue.png" class="label-icons-venue" alt="">&nbsp;\n                </ion-icon>\n                Venue : {{meeting_details.meeting_venue}}</span>\n            </div>\n          </ion-label>\n        </ion-item>\n        <!-- Description-->\n        <ion-item color-1d1d26 no-lines text-wrap no-margin padding-right>\n          <ion-label no-margin>\n            <h3 parallax-description>{{meeting_details.meeting_desc}}</h3>\n          </ion-label>\n        </ion-item>\n        <ion-item color-1d1d26 no-lines no-margin padding-right>\n          <ion-label margin-bottom>\n            <div info>\n              <span left>\n                <ion-icon>\n                  <img src="./assets/images/icons/document.png" class="label-icons-file" alt="">&nbsp;\n                </ion-icon>\n                Agenda : </span>\n              <span c-display-inline-block>\n                <a (click)="openAgendaFile(meeting_details.meeting_fileLinks[0])"> {{meeting_details.meeting_fileLinks[0].name}}</a>\n              </span>\n            </div>\n            <div info>\n              <span left>\n                <ion-icon>\n                  <img src="./assets/images/icons/date_time.png" class="label-icons-time" alt="">&nbsp;\n                </ion-icon>\n                Vote by : {{meeting_details.meeting_pollEndTime}}</span>\n            </div>\n          </ion-label>\n        </ion-item>\n        <ion-item color-1d1d26 no-padding>\n          <ion-label no-margin padding-5px>\n            <ion-list>\n              <ul no-margin no-padding class="collapsible">\n                <li no-margin padding-bottom *ngFor="let poll_details of meeting_details.meeting_polls;">\n                  <ion-card>\n                    <!-- Expandable Centered with header Header-->\n                    <div class="collapsible-header" no-margin no-padding (click)="expandPoll(poll_details)">\n                      <ion-item color-1d1d26 no-padding text-center no-lines text-center>\n                        <h3 no-margin c-font-bold>{{poll_details.pollNameChn}} | {{poll_details.pollName}}</h3>\n                        <h3 no-margin c-font-bold>Final Result : {{poll_details.finalResult}}</h3>\n                        <!-- <ion-icon name="md-checkmark" class="check-mark-style" item-end *ngIf="poll_details.is_complete">\n                        </ion-icon> -->\n                      </ion-item>\n                    </div>\n                    <!-- Expandable Centered with header Body -->\n                    <div class="item-accordion" [ngClass]="{\'active\': isGroupShown(poll_details) }" [hidden]="!isGroupShown(poll_details)">\n                      <ion-card no-margin c-width-100 border-top-e7>\n                        <ion-item color-1d1d26 padding-5px text-wrap>\n                          <ion-label no-margin>\n                            <h2 color-1d1d26 class="summary-title">\n                              <img src="./assets/images/icons/poll.png" c-display-inline-block class="label-icons-poll" alt=""> Poll Results</h2>\n                            <h3 color-1d1d26 *ngFor="let result_details of poll_details.results;">{{result_details.choice}} :\n                              <span color-1d1d26 c-font-bold>{{result_details.percentage}}%</span>\n                            </h3>\n                          </ion-label>\n                        </ion-item>\n                      </ion-card>\n                      <ion-card no-margin c-width-100 border-top-e7>\n                        <ion-item color-1d1d26 padding-5px text-wrap>\n                          <ion-label no-margin>\n                            <h2 color-1d1d26 class="summary-title">\n                              <span>\n                                <img src="./assets/images/icons/summary.png" c-display-inline-block class="label-icons-live-summary" alt=""> Summary\n                              </span>\n                            </h2>\n                            <h5 color-1d1d26 class="summary-desc">{{poll_details.summaryChn}}</h5>\n                            <h5 color-1d1d26 class="summary-desc">{{poll_details.summary}} </h5>\n                          </ion-label>\n                        </ion-item>\n                      </ion-card>\n                      <ion-card no-margin c-width-100 border-top-e7>\n                        <ion-item color-1d1d26 padding-5px text-wrap>\n                          <ion-label no-margin>\n                            <h2 color-1d1d26 class="summary-title">\n                              <img src="./assets/images/icons/document.png" c-display-inline-block class="label-icons-file" alt=""> &nbsp;Documents\n                            </h2>\n                            <a *ngFor="let documents of poll_details.fileLinks;" (click)="openAgendaFile(documents)">\n                              {{documents.name}}\n                            </a>\n                          </ion-label>\n                        </ion-item>\n                      </ion-card>\n                    </div>\n                  </ion-card>\n                </li>\n              </ul>\n            </ion-list>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/view-past-meeting-details/view-past-meeting-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_document_viewer__["a" /* DocumentViewer */]])
    ], ViewPastMeetingDetails);
    return ViewPastMeetingDetails;
}());

//# sourceMappingURL=view-past-meeting-details.js.map

/***/ })

});
//# sourceMappingURL=4.js.map