webpackJsonp([8],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyListModule", function() { return SurveyListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey_list__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SurveyListModule = (function () {
    function SurveyListModule() {
    }
    SurveyListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__survey_list__["a" /* SurveyList */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__survey_list__["a" /* SurveyList */]),
            ],
        })
    ], SurveyListModule);
    return SurveyListModule;
}());

//# sourceMappingURL=survey-list.module.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyList; });
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


var SurveyList = (function () {
    function SurveyList(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.survey_list = [];
        this.getStaticData();
    }
    SurveyList.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SurveyList');
    };
    SurveyList.prototype.getStaticData = function () {
        this.survey_list = [];
        for (var i = 0; i < 3; i++) {
            var tmp_group_list = [];
            this.survey_list.push({
                "survey_title": "Survey " + (i + 1),
                "is_complete": false
            });
        }
        console.log(this.survey_list);
        var tmp_data = JSON.stringify(this.survey_list);
        console.log(tmp_data);
    };
    SurveyList.prototype.toggleGroup = function (group) {
        group.show = !group.show;
    };
    SurveyList.prototype.isGroupShown = function (group) {
        return group.show;
    };
    SurveyList.prototype.viewSurveyDetails = function (survey_details) {
        var tmp_survey_details = JSON.stringify(survey_details);
        this.navCtrl.push("Surveys", { "survey_details": tmp_survey_details });
    };
    SurveyList = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-survey-list',template:/*ion-inline-start:"D:\ionic 2 projects\Projects\Telos-Owners-Ionic-App\src\pages\survey-list\survey-list.html"*/`<ion-header>\n\n  <ion-navbar header-color>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title text-left>屋苑問卷調查 | Surveys</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content white-background>\n\n  <ion-row margin-bottom>\n\n    <ion-col col-12>\n\n      <ul no-margin no-padding class="collapsible">\n\n        <li no-margin *ngFor="let survey_details of survey_list;">\n\n          <ion-card>\n\n            <!-- Expandable Centered with header Header-->\n\n            <div class="collapsible-header" no-margin no-padding (click)="viewSurveyDetails(survey_details)">\n\n              <ion-item no-padding padding text-center transparent no-lines text-center>\n\n                <h2 text-center class="survey-title-text">{{survey_details.survey_title}}</h2>\n\n                <h2 text-center class="survey-title-text">Complete By:</h2>\n\n              </ion-item>\n\n            </div>\n\n          </ion-card>\n\n        </li>\n\n      </ul>\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>`/*ion-inline-end:"D:\ionic 2 projects\Projects\Telos-Owners-Ionic-App\src\pages\survey-list\survey-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SurveyList);
    return SurveyList;
}());

//# sourceMappingURL=survey-list.js.map

/***/ })

});
//# sourceMappingURL=8.js.map