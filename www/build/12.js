webpackJsonp([12],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastMeetingsModule", function() { return PastMeetingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__past_meetings__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PastMeetingsModule = (function () {
    function PastMeetingsModule() {
    }
    PastMeetingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__past_meetings__["a" /* PastMeetings */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__past_meetings__["a" /* PastMeetings */]),
            ],
        })
    ], PastMeetingsModule);
    return PastMeetingsModule;
}());

//# sourceMappingURL=past-meetings.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastMeetings; });
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


var PastMeetings = (function () {
    function PastMeetings(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.past_meeting_list = [];
        this.getStaticMeetingList();
    }
    PastMeetings.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PastMeetings');
    };
    PastMeetings.prototype.getStaticMeetingList = function () {
        for (var i = 0; i < 5; i++) {
            this.past_meeting_list.push({
                "meeting_title": "Meeting Title " + (i + 1),
                "meeting_desc": "meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary",
                "meeting_background": "./assets/images/background/" + (i + 1) + ".jpg"
            });
        }
        console.log(this.past_meeting_list);
    };
    PastMeetings.prototype.goToViewMeetingDetails = function (meeting_details) {
        console.log(meeting_details);
        var tmp_meeting_details = JSON.stringify(meeting_details);
        localStorage.setItem("meeting_details", tmp_meeting_details);
        this.navCtrl.push("ViewPastMeetingDetails", { "meeting_details": tmp_meeting_details });
    };
    PastMeetings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-past-meetings',template:/*ion-inline-start:"D:\ionic 2 projects\Projects\Telos-Owners-Ionic-App\src\pages\past-meetings\past-meetings.html"*/`<ion-header>\n\n  <ion-navbar header-color>\n\n    <ion-title text-left> 過往會議 | Past Meetings</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-grid no-padding>\n\n    <ion-row margin-bottom>\n\n      <ion-col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 *ngFor="let meeting_details of past_meeting_list;" (click)="goToViewMeetingDetails(meeting_details)">\n\n        <ion-card text-left>\n\n          <div card-image>\n\n            <img images-filter [src]="meeting_details.meeting_background" />\n\n            <h2 card-title>{{meeting_details.meeting_title}}</h2>\n\n          </div>\n\n          <ion-card-content>\n\n            <p card-body-text>{{meeting_details.meeting_desc}}</p>\n\n            <ion-row margin-top padding-top>\n\n              <ion-col col-6 no-padding>\n\n                <p card-body-text class="footer-card-txt">Meeting Date & Time:</p>\n\n              </ion-col>\n\n              <ion-col col-3 no-padding>\n\n                <p card-body-text class="footer-card-txt">Verdict:</p>\n\n              </ion-col>\n\n              <ion-col col-3 no-padding>\n\n                <p card-body-text class="footer-card-txt">Voted:</p>\n\n              </ion-col>\n\n            </ion-row>\n\n          </ion-card-content>\n\n        </ion-card>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>`/*ion-inline-end:"D:\ionic 2 projects\Projects\Telos-Owners-Ionic-App\src\pages\past-meetings\past-meetings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], PastMeetings);
    return PastMeetings;
}());

//# sourceMappingURL=past-meetings.js.map

/***/ })

});
//# sourceMappingURL=12.js.map