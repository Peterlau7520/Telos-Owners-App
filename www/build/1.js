webpackJsonp([1],{

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMeetingPollsModule", function() { return ViewMeetingPollsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_meeting_polls__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewMeetingPollsModule = (function () {
    function ViewMeetingPollsModule() {
    }
    ViewMeetingPollsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_meeting_polls__["a" /* ViewMeetingPolls */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_meeting_polls__["a" /* ViewMeetingPolls */]),
            ],
        })
    ], ViewMeetingPollsModule);
    return ViewMeetingPollsModule;
}());

//# sourceMappingURL=view-meeting-polls.module.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewMeetingPolls; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_signature_pad_page_signature_pad_page__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_youtube_video_player__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/* import { SignaturePageModal } from '../../pages/signature-page-modal/signature-page-modal'; */
var ViewMeetingPolls = (function () {
    function ViewMeetingPolls(element, renderer, navCtrl, navParams, modalCtrl, iab, youtube) {
        this.element = element;
        this.renderer = renderer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.iab = iab;
        this.youtube = youtube;
        this.is_license_accepted = false;
        this.meeting_details = {};
        this.data = {};
        this.events = {};
        this.total_signatures = 2;
        this.current_signature = 1;
        this.total_HKIDs = 2;
        this.current_HKID = 1;
        this.poll_list = [];
        this.meeting_details = JSON.parse(this.navParams.get("meeting_details"));
        this.poll_list = this.meeting_details.meeting_polls;
        console.log(this.meeting_details);
    }
    ViewMeetingPolls.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewMeetingPolls');
        this.initParallax();
    };
    ViewMeetingPolls.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidEnter ViewMeetingPolls');
    };
    /* Start Parallax */
    ViewMeetingPolls.prototype.initParallax = function () {
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
    ViewMeetingPolls.prototype.updateElasticHeader = function () {
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
    /* Open modal one by one */
    ViewMeetingPolls.prototype.openViewPoll = function () {
        var _this = this;
        var myModal = this.modalCtrl.create("AgreeUseTelos");
        myModal.onDidDismiss(function (data) {
            console.log(data);
            if (data == "accept") {
                _this.openAgreeUseCompanyChop();
            }
            else {
            }
        });
        myModal.present();
    };
    ViewMeetingPolls.prototype.openAgreeUseCompanyChop = function () {
        var _this = this;
        var myModal1 = this.modalCtrl.create("AgreeUseCompanyChop");
        myModal1.onDidDismiss(function (data) {
            console.log(data);
            if (data == "accept") {
                _this.acceptAgreement(_this.current_signature);
            }
            else {
            }
        });
        myModal1.present();
    };
    ViewMeetingPolls.prototype.acceptAgreement = function (current_signature) {
        var _this = this;
        /* this.navCtrl.push(SignaturePageModal); */
        /* let myModal2 = this.modalCtrl.create(SignaturePageModal); */
        var myModal2 = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pages_signature_pad_page_signature_pad_page__["a" /* SignaturePadPage */], {
            "signatures": this.total_signatures,
            "current_signature": this.current_signature
        });
        myModal2.onDidDismiss(function (data) {
            console.log(data);
            if (!data || typeof data == "undefined") {
                return false;
            }
            else if (data == "thankyou") {
                _this.openThankYouNote();
            }
            else if (data == "outside") {
            }
            else {
                _this.acceptAgreement(_this.current_signature++);
            }
        });
        myModal2.present();
    };
    ViewMeetingPolls.prototype.openThankYouNote = function () {
        var _this = this;
        var myModal3 = this.modalCtrl.create("ThankYouNote");
        myModal3.onDidDismiss(function (data) {
            _this.is_license_accepted = true;
        });
        myModal3.present();
    };
    /* End Open modals one by one */
    ViewMeetingPolls.prototype.expandPoll = function (poll_details) {
        poll_details.show = !poll_details.show;
    };
    ViewMeetingPolls.prototype.toggleGroup = function (poll_details) {
        poll_details.show = !poll_details.show;
    };
    ViewMeetingPolls.prototype.isGroupShown = function (poll_details) {
        return poll_details.show;
    };
    ViewMeetingPolls.prototype.getHKIDByOption = function (poll_details, current_HKID) {
        var _this = this;
        var myModal4 = this.modalCtrl.create("OwnerHkidNumber", {
            "total_HKIDs": this.total_HKIDs,
            "current_HKID": this.current_HKID
        });
        myModal4.onDidDismiss(function (data) {
            console.log(data);
            if (!data || typeof data == "undefined") {
                return false;
            }
            else if (data == "submitted") {
                /* this.getHKIDByOption(); */
                poll_details.is_complete = true;
                _this.current_HKID = 1;
                _this.openThankYouNote2();
            }
            else {
                _this.getHKIDByOption(poll_details, _this.current_HKID++);
            }
        });
        myModal4.present();
    };
    ViewMeetingPolls.prototype.openMeetingURL = function () {
        /* this.browser = this.iab.create("https://www.youtube.com/watch?v=6jiNS_4CEug", '_blank', 'location=no,closebuttoncaption=Cancel,clearcache=yes,clearsessioncache=yes'); */
        this.youtube.openVideo('6jiNS_4CEug');
    };
    ViewMeetingPolls.prototype.openThankYouNote2 = function () {
        var myModal5 = this.modalCtrl.create("ThankYouNote2");
        myModal5.onDidDismiss(function (data) {
            /* this.is_license_accepted = true; */
        });
        myModal5.present();
    };
    ViewMeetingPolls = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-meeting-polls',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/view-meeting-polls/view-meeting-polls.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>近期會議 | Upcoming Meeting</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-item no-lines background-size [ngStyle]="{\'background-image\': \'url(\' + meeting_details.meeting_background + \')\'}">\n  </ion-item>\n\n  <ion-grid no-padding>\n    <ion-row>\n      <!--Parallax Rateing-->\n      <ion-col col-12>\n        <ion-item no-lines header-bcg no-padding>\n          <h1 parallax-title text-center margin-bottom padding-vertical>{{meeting_details.meeting_titleChn}} | {{meeting_details.meeting_title}} </h1>\n        </ion-item>\n      </ion-col>\n      <!--Content-->\n      <ion-col col-12>\n        <!--Info-->\n        <ion-item color-1d1d26 no-lines no-margin padding-right>\n          <ion-label>\n            <ion-row>\n              <ion-col col-12 no-padding>\n                <span left>Meeting Time : {{meeting_details.meeting_startTime}} - {{meeting_details.meeting_endTime}}&nbsp;</span>\n                <span c-display-inline-block>&nbsp;</span>\n              </ion-col>\n              <ion-col col-12 no-padding>\n                <span left>Venue : {{meeting_details.meeting_venue}}&nbsp;</span>\n                <span c-display-inline-block>&nbsp;</span>\n              </ion-col>\n              <ion-col col-12 no-padding>\n                <span left>Live stream :&nbsp;</span>\n                <span c-display-inline-block>\n                  <a (click)="openMeetingURL()">Meeting URL</a>\n                </span>\n              </ion-col>\n            </ion-row>\n          </ion-label>\n        </ion-item>\n        <!-- Description-->\n        <ion-item color-1d1d26 no-lines text-wrap no-margin padding-right>\n          <ion-label no-margin>\n            <h3  parallax-description>Summary</h3>\n          </ion-label>\n        </ion-item>\n        <ion-item color-1d1d26 no-lines no-margin padding-right>\n          <ion-label margin-bottom>\n            <div info>\n              <span left>Agenda : {{meeting_details.meeting_fileLinks[0]}}</span>\n              <span>&nbsp;</span>\n            </div>\n            <div info>\n              <span left>Vote by : {{meeting_details.meeting_pollEndTime}}</span>\n              <span>&nbsp;</span>\n            </div>\n          </ion-label>\n        </ion-item>\n        <ion-item color-1d1d26 no-padding padding-bottom no-lines *ngIf="!is_license_accepted">\n          <ion-label padding no-margin>\n            <ion-card c-width-100 no-margin (click)="openViewPoll()">\n              <ion-card-content text-center margin>\n                <h3 color-1d1d26 no-margin c-font-bold>View Polls</h3>\n              </ion-card-content>\n            </ion-card>\n          </ion-label>\n        </ion-item>\n        <ion-item color-1d1d26 no-padding *ngIf="is_license_accepted">\n          <ion-label no-margin padding-5px>\n            <ion-list>\n              <ul no-margin no-padding class="collapsible">\n                <li no-margin padding-bottom *ngFor="let poll_details of poll_list;">\n                  <ion-card>\n                    <!-- Expandable Centered with header Header-->\n                    <div class="collapsible-header" no-margin no-padding (click)="expandPoll(poll_details)">\n                      <ion-item no-padding text-center no-lines text-center>\n                        <h3 color-1d1d26 no-margin c-font-bold>{{poll_details.pollNameChn}} | {{poll_details.pollName}}</h3>\n                        <ion-icon name="md-checkmark" class="check-mark-style" item-end *ngIf="poll_details.is_complete">\n                        </ion-icon>\n                      </ion-item>\n                    </div>\n                    <!-- Expandable Centered with header Body -->\n                    <div class="item-accordion" [ngClass]="{\'active\': isGroupShown(poll_details) }" [hidden]="!isGroupShown(poll_details)">\n                      <ion-card no-margin c-width-100 border-top-e7>\n                        <ion-item color-1d1d26 padding-5px text-wrap>\n                          <ion-label no-margin>\n                            <h2 color-1d1d26 class="summary-title">Summary</h2>\n                            <h5 color-1d1d26 class="summary-desc">{{poll_details.summaryChn}} | {{poll_details.summary}} </h5>\n                          </ion-label>\n                        </ion-item>\n                      </ion-card>\n                      <ion-card no-margin c-width-100 border-top-e7>\n                        <ion-item color-1d1d26 padding-5px text-wrap>\n                          <ion-label no-margin>\n                            <h2 color-1d1d26 class="summary-title">Documents</h2>\n                            <a *ngFor="let documents of poll_details.fileLinks;">\n                              {{documents.name}}\n                            </a>\n                          </ion-label>\n                        </ion-item>\n                      </ion-card>\n                      <ion-card no-margin c-width-100 border-top-e7>\n                        <ion-item color-1d1d26 padding-5px text-wrap>\n                          <ion-label no-margin>\n                            <h2 color-1d1d26 class="summary-title">Poll Options</h2>\n                            <div margin>\n                              <ion-card no-margin c-width-100 class="margin-top-10" *ngFor="let option_details of poll_details.options;" (click)="getHKIDByOption(poll_details, 1)">\n                                <ion-item no-padding>\n                                  <h5 color-1d1d26 text-center> {{option_details}}</h5>\n                                </ion-item>\n                              </ion-card>\n                            </div>\n                          </ion-label>\n                        </ion-item>\n                      </ion-card>\n                    </div>\n                  </ion-card>\n                </li>\n              </ul>\n            </ion-list>\n          </ion-label>\n\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/view-meeting-polls/view-meeting-polls.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */]])
    ], ViewMeetingPolls);
    return ViewMeetingPolls;
}());

//# sourceMappingURL=view-meeting-polls.js.map

/***/ })

});
//# sourceMappingURL=1.js.map