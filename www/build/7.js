webpackJsonp([7],{

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveysModule", function() { return SurveysModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__surveys__ = __webpack_require__(330);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SurveysModule = (function () {
    function SurveysModule() {
    }
    SurveysModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__surveys__["a" /* Surveys */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__surveys__["a" /* Surveys */]),
            ],
        })
    ], SurveysModule);
    return SurveysModule;
}());

//# sourceMappingURL=surveys.module.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Surveys; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_show_message__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Surveys = (function () {
    function Surveys(navCtrl, navParams, showMessage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showMessage = showMessage;
        this.group_list = [];
        this.survey_list = [];
        this.survey_details = {};
        this.survey_details = JSON.parse(this.navParams.get("survey_details"));
        console.log(this.survey_details);
        this.getStaticData();
    }
    Surveys.prototype.getStaticData = function () {
        this.survey_list = [];
        this.group_list = [];
        for (var i = 0; i < 3; i++) {
            var tmp_group_list = [];
            for (var j = 0; j < 2; j++) {
                var tmp_option_list = [];
                tmp_group_list.push({
                    "group_title": "Survey Question"
                });
                for (var k = 0; k < 2; k++) {
                    tmp_option_list.push({
                        "cost": "",
                        "description": "sample description sample description sample description sample description",
                        "is_checked": false
                    });
                }
                console.log(tmp_option_list);
                tmp_group_list[j].option_list = tmp_option_list;
            }
            this.survey_details.group_list = tmp_group_list;
            this.survey_details.group_list[0].show = true;
        }
        console.log(this.survey_list);
        var tmp_data = JSON.stringify(this.survey_list);
        console.log(tmp_data);
    };
    Surveys.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Surveys');
    };
    Surveys.prototype.toggleGroup1 = function (group, i, survey_details) {
        console.log(group);
        var tmp_group_list = survey_details.group_list;
        for (var j = 0; j < tmp_group_list.length; j++) {
            if (j == i) {
                /* tmp_group_list[j].show = true; */
                if (tmp_group_list[j].show == true) {
                    tmp_group_list[j].show = false;
                }
                else {
                    tmp_group_list[j].show = true;
                }
            }
            else {
                tmp_group_list[j].show = false;
            }
        }
        /* group.show = !group.show; */
    };
    Surveys.prototype.toggleGroup = function (group) {
        group.show = !group.show;
    };
    Surveys.prototype.isGroupShown = function (group) {
        return group.show;
    };
    Surveys.prototype.submitData = function (group_list) {
        /* group.is_complete = true; */
        console.log(group_list);
        /* for (let i = 0; i < group.length; i++) {
          console.log(group[i]);
          let tmp_option_list = group[i].option_list;
          for (let j = 0; j < tmp_option_list.length; j++) {
            if (tmp_option_list[j].is_checked == true) {
              console.log("TRUE");
              group[i].is_complete = true;
              j++;
            }
            else {
              console.log("FALSE");
              group[i].is_complete = false;
            }
          }
        } */
        for (var l = 0; l < group_list.length; l++) {
            var element = group_list[l];
            if (!element.is_complete || element.is_complete == false) {
                console.log(element);
                this.showMessage.showToastBottom("Please answer each question.");
                return false;
            }
            else {
            }
        }
        this.showMessage.showToastBottom("Answers saved successfully!");
    };
    Surveys.prototype.valueChanged = function (group, i, survey_details) {
        console.log(group);
        console.log(i);
        console.log(survey_details);
        /* for (let j = 0; j < survey_details.length; j++) {
          console.log(survey_details[j].is_complete);
        } */
        if (group.is_complete && group.is_complete > 0) {
            this.toggleGroup(group);
            var tmp_group_list = survey_details.group_list;
            i++;
            console.log(i);
            console.log(tmp_group_list.length);
            if (i < tmp_group_list.length) {
                this.toggleGroup(tmp_group_list[i]);
            }
        }
    };
    Surveys = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-surveys',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/surveys/surveys.html"*/`<ion-header>\n  <ion-navbar header-color>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-left>屋苑問卷調查 | Surveys</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row margin-bottom>\n    <ion-col col-12>\n      <ion-row padding>\n        <ion-col col-12 no-padding>\n          <p color-1d1d26 style="font-size: 16px !important;" no-margin>Survey Title: {{survey_details.survey_title}}</p>\n          <p color-1d1d26 style="font-size: 16px !important;" no-margin>Complete By:</p>\n        </ion-col>\n      </ion-row>\n      <ion-list>\n        <ul no-margin no-padding class="collapsible">\n          <li no-margin *ngFor="let group of survey_details.group_list; let i=index;">\n            <ion-card transparent>\n              <!-- Expandable Centered with header Header-->\n              <div class="collapsible-header" no-margin no-padding (click)="toggleGroup1(group, i, survey_details)">\n                <ion-item color-1d1d26 no-padding text-center transparent no-lines text-center>\n                  <h2 color-1d1d26 text-center item-title>{{group.group_title}}</h2>\n                  <ion-icon name="md-checkmark" class="check-mark-style" item-end *ngIf="group.is_complete">\n                  </ion-icon>\n                </ion-item>\n              </div>\n              <!-- Expandable Centered with header Body -->\n              <div class="item-accordion" transparent [ngClass]="{\'active\': isGroupShown(group) }" [hidden]="!isGroupShown(group)">\n\n                <ion-list radio-group transparent [(ngModel)]="group.is_complete" (ionChange)="valueChanged(group, i, survey_details)">\n                  <ion-card no-margin transparent c-width-100 *ngFor="let option_details of group.option_list; let k=index;" style="box-shadow: none;">\n                    <ion-item color-1d1d26 transparent text-wrap>\n                      <ion-label margin-vertical item-title>\n                        <p color-1d1d26 under-line>Option 1</p>\n                        <p color-1d1d26>Cost : {{option_details.cost}}</p>\n                        <p color-1d1d26 style="font-family:\'avenir\'">Description : {{option_details.description}}</p>\n                      </ion-label>\n                      <!-- <ion-checkbox [(ngModel)]="option_details.is_checked" (ionChange)="valueChanged($event, group, i, k, survey_details)"></ion-checkbox> -->\n                      <ion-radio item-left [value]="k+1" color="mytheme"></ion-radio>\n                    </ion-item>\n                  </ion-card>\n                </ion-list>\n              </div>\n            </ion-card>\n          </li>\n        </ul>\n      </ion-list>\n      <ion-row margin-vertical>\n        <ion-col text-center margin-top padding-horizontal>\n          <button ion-button button-clear-outline round outline class="next-button" color="mytheme" (click)="submitData(survey_details.group_list)">確定 | Submit</button>\n        </ion-col>\n      </ion-row>\n    </ion-col>\n  </ion-row>\n</ion-content>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/surveys/surveys.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_show_message__["a" /* ShowMessage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_show_message__["a" /* ShowMessage */]) === "function" && _c || Object])
    ], Surveys);
    return Surveys;
    var _a, _b, _c;
}());

//# sourceMappingURL=surveys.js.map

/***/ })

});
//# sourceMappingURL=7.js.map