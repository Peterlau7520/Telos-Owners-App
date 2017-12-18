webpackJsonp([0],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPastMeetingDetailsModule", function() { return ViewPastMeetingDetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_past_meeting_details__ = __webpack_require__(330);
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

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPastMeetingDetails; });
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


var ViewPastMeetingDetails = (function () {
    function ViewPastMeetingDetails(element, renderer, navCtrl, navParams, modalCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
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
    ViewPastMeetingDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-past-meeting-details',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/view-past-meeting-details/view-past-meeting-details.html"*/`<ion-header>\n  <ion-navbar>\n    <ion-title>Past Meeting</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-item no-lines background-size [ngStyle]="{\'background-image\': \'url(\' + meeting_details.meeting_background + \')\'}">\n  </ion-item>\n\n  <ion-grid no-padding>\n    <ion-row>\n      <!--Parallax Rateing-->\n      <ion-col col-12>\n        <ion-item no-lines header-bcg no-padding>\n          <h1 parallax-title text-center margin-bottom padding-vertical>{{meeting_details.meeting_title}}</h1>\n        </ion-item>\n      </ion-col>\n      <!--Content-->\n      <ion-col col-12>\n        <!--Info-->\n        <ion-item color-1d1d26 no-lines no-margin padding-right>\n          <ion-label>\n            <div info>\n              <span left>Meeting Time : </span>\n              <span>&nbsp;</span>\n            </div>\n            <div info>\n              <span left>Venue : </span>\n              <span>&nbsp;</span>\n            </div>\n          </ion-label>\n        </ion-item>\n        <!-- Description-->\n        <ion-item color-1d1d26 no-lines text-wrap no-margin padding-right>\n          <ion-label no-margin>\n            <h3 parallax-description>{{meeting_details.meeting_desc}}</h3>\n            <h3 parallax-description>{{meeting_details.meeting_desc}}</h3>\n            <h3 parallax-description>{{meeting_details.meeting_desc}}</h3>\n            <h3 parallax-description no-margin>{{meeting_details.meeting_desc}}</h3>\n          </ion-label>\n        </ion-item>\n        <ion-item color-1d1d26 no-lines no-margin padding-right>\n          <ion-label margin-bottom>\n            <div info>\n              <span left>Agenda : </span>\n              <span>&nbsp;</span>\n            </div>\n            <div info>\n              <span left>Vote by : </span>\n              <span>&nbsp;</span>\n            </div>\n          </ion-label>\n        </ion-item>\n        <ion-item color-1d1d26 no-padding>\n          <ion-label no-margin padding-5px>\n            <ion-list>\n              <ul no-margin no-padding class="collapsible">\n                <li no-margin padding-bottom *ngFor="let poll_details of poll_list;">\n                  <ion-card>\n                    <!-- Expandable Centered with header Header-->\n                    <div class="collapsible-header" no-margin no-padding (click)="expandPoll(poll_details)">\n                      <ion-item color-1d1d26 no-padding text-center no-lines text-center>\n                        <h3 no-margin c-font-bold>{{poll_details.poll_title}}</h3>\n                        <h3 no-margin c-font-bold>Final Result : Option 1</h3>\n                        <!-- <ion-icon name="md-checkmark" class="check-mark-style" item-end *ngIf="poll_details.is_complete">\n                        </ion-icon> -->\n                      </ion-item>\n                    </div>\n                    <!-- Expandable Centered with header Body -->\n                    <div class="item-accordion" [ngClass]="{\'active\': isGroupShown(poll_details) }" [hidden]="!isGroupShown(poll_details)">\n                      <ion-card no-margin c-width-100 border-top-e7>\n                        <ion-item color-1d1d26 padding-5px text-wrap>\n                          <ion-label no-margin>\n                            <h2 color-1d1d26 class="summary-title">Poll Results</h2>\n                            <h3 color-1d1d26 *ngFor="let option_details of poll_details.option_list;">{{option_details.option_title}} :\n                              <span color-1d1d26 c-font-bold>{{option_details.option_value}}</span>\n                            </h3>\n                          </ion-label>\n                        </ion-item>\n                      </ion-card>\n                      <ion-card no-margin c-width-100 border-top-e7>\n                        <ion-item color-1d1d26 padding-5px text-wrap>\n                          <ion-label no-margin>\n                            <h2 color-1d1d26 class="summary-title">Summary</h2>\n                            <h5 color-1d1d26 class="summary-desc">summary summary summary summary summary summary summary summary summary summary summary summary\n                              summary summary summary summary</h5>\n                          </ion-label>\n                        </ion-item>\n                      </ion-card>\n                      <ion-card no-margin c-width-100 border-top-e7>\n                        <ion-item color-1d1d26 padding-5px text-wrap>\n                          <ion-label no-margin>\n                            <h2 color-1d1d26 class="summary-title">Documents</h2>\n                            <a>Document1.pdf</a>\n                            <a>Document1.pdf</a>\n                          </ion-label>\n                        </ion-item>\n                      </ion-card>\n                    </div>\n                  </ion-card>\n                </li>\n              </ul>\n            </ion-list>\n          </ion-label>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/view-past-meeting-details/view-past-meeting-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], ViewPastMeetingDetails);
    return ViewPastMeetingDetails;
}());

//# sourceMappingURL=view-past-meeting-details.js.map

/***/ })

});
//# sourceMappingURL=0.js.map