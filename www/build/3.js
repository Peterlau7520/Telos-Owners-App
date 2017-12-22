webpackJsonp([3],{

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingMeetingsModule", function() { return UpcomingMeetingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__upcoming_meetings__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpcomingMeetingsModule = (function () {
    function UpcomingMeetingsModule() {
    }
    UpcomingMeetingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__upcoming_meetings__["a" /* UpcomingMeetings */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__upcoming_meetings__["a" /* UpcomingMeetings */]),
            ],
        })
    ], UpcomingMeetingsModule);
    return UpcomingMeetingsModule;
}());

//# sourceMappingURL=upcoming-meetings.module.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpcomingMeetings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loading_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_show_message__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpcomingMeetings = (function () {
    function UpcomingMeetings(navCtrl, navParams, loadingService, dataService, showMessage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingService = loadingService;
        this.dataService = dataService;
        this.showMessage = showMessage;
        this.upcoming_meeting_list = [];
        this.currentMeetings = [];
        this.loginResponse = {};
        /* this.currentMeetings = this.navParams.data.currentMeetings; */
        this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    }
    UpcomingMeetings.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UpcomingMeetings');
    };
    UpcomingMeetings.prototype.ionViewWillEnter = function () {
        this.getUpcomingMeetingsData();
    };
    UpcomingMeetings.prototype.getUpcomingMeetingsData = function () {
        var _this = this;
        this.loadingService.showLoading();
        this.dataService.postData("currentMeetings", {
            "estateName": this.loginResponse.user.estateName
        }, {}).subscribe(function (results) {
            if (results.success == true) {
                _this.currentMeetings = results.currentMeetings;
                var self_1 = _this;
                self_1.upcoming_meeting_list = [];
                _this.currentMeetings.forEach(function (meeting, i) {
                    self_1.upcoming_meeting_list.push({
                        "meeting_id": meeting._id,
                        "meeting_title": meeting.title,
                        "meeting_titleChn": meeting.titleChn,
                        "meeting_desc": meeting.meetingSummaryChn + " | " + meeting.meetingSummary,
                        "meeting_startTime": meeting.startTime,
                        "meeting_endTime": meeting.startTime,
                        "meeting_venue": meeting.venue,
                        "meeting_fileLinks": meeting.fileLinks,
                        "meeting_pollEndTime": meeting.pollEndTime,
                        "meeting_polls": meeting.polls,
                        "meeting_background": "./assets/images/background/" + (i + 1) + ".jpg"
                    });
                });
                _this.loadingService.hideLoading();
            }
            else {
                _this.showMessage.showToastBottom(results.message);
                _this.loadingService.hideLoading();
            }
        }, function (err) {
            console.log("err", err);
            _this.loadingService.hideLoading();
            _this.showMessage.showToastBottom("Unable to get Upcoming meetings, please try again.");
        });
    };
    UpcomingMeetings.prototype.goToViewMeetingDetails = function (meeting_details) {
        console.log(meeting_details);
        var tmp_meeting_details = JSON.stringify(meeting_details);
        localStorage.setItem("meeting_details", tmp_meeting_details);
        this.navCtrl.push("ViewMeetingPolls", { "meeting_details": tmp_meeting_details });
    };
    UpcomingMeetings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-upcoming-meetings',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/upcoming-meetings/upcoming-meetings.html"*/`<ion-header>\n  <ion-navbar header-color>\n    <ion-title text-left>近期會議 | Upcoming Meetings</ion-title>\n  </ion-navbar>\n</ion-header>\n<!--Theme Styled cards 2-->\n<ion-content>\n  <ion-grid no-padding>\n    <ion-row margin-bottom>\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 *ngFor="let meeting_details of upcoming_meeting_list;" (click)="goToViewMeetingDetails(meeting_details)">\n        <ion-card text-left>\n          <div card-image>\n            <img images-filter [src]="meeting_details.meeting_background" />\n            <h2 card-title>{{meeting_details.meeting_titleChn}} | {{meeting_details.meeting_title}}</h2>\n          </div>\n          <ion-card-content>\n            <p card-body-text>{{meeting_details.meeting_desc}}</p>\n            <ion-row margin-top padding-top>\n              <ion-col no-padding>\n                <p card-body-text class="footer-card-txt">Meeting Date & Time: {{meeting_details.meeting_startTime}} - {{meeting_details.meeting_endTime}}</p>\n              </ion-col>\n            </ion-row>\n            <ion-row padding-top>\n              <ion-col no-padding>\n                <p card-body-text class="footer-card-txt">Venue: {{meeting_details.meeting_venue}}</p>\n              </ion-col>\n            </ion-row>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/upcoming-meetings/upcoming-meetings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_show_message__["a" /* ShowMessage */]])
    ], UpcomingMeetings);
    return UpcomingMeetings;
}());

//# sourceMappingURL=upcoming-meetings.js.map

/***/ })

});
//# sourceMappingURL=3.js.map