webpackJsonp([6],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsModule = (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* Tabs */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* Tabs */]),
            ],
        })
    ], TabsModule);
    return TabsModule;
}());

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Tabs = (function () {
    function Tabs(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = "";
        this.tab2Root = "AllMeetingsPage";
        this.tab3Root = "PastMeetings";
        this.tab4Root = "SurveyList";
        this.badgeCount = 10;
        console.log("tab Changed const");
        this.tab1Root = localStorage.getItem("firstTabPage");
    }
    Tabs.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tabs');
        this.tab1Root = localStorage.getItem("firstTabPage");
    };
    Tabs.prototype.getBadgesCounts = function () {
    };
    Tabs.prototype.tabChanged = function (event) {
        console.log("TAB CHANGED...");
        console.log(event);
        /* this.showMessage.changeTabButtonColor(this.theme_settings.Theme); */
        /* event.color = this.theme_settings.Theme; */
    };
    Tabs = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/tabs/tabs.html"*/`<ion-tabs (ionChange)="tabChanged($event)">\n  <ion-tab [root]="tab1Root" tabTitle="通告 Noticaboard" tabIcon="ios-alert"></ion-tab>\n  <!-- <ion-tab [root]="tab2Root" tabTitle="將來會議 Meetings" tabIcon="ios-calendar" [tabBadge]="badgeCount" tabBadgeStyle="danger"></ion-tab> -->\n  <ion-tab [root]="tab2Root" tabTitle="將來會議 Meetings" tabIcon="ios-calendar"></ion-tab>\n  <!-- <ion-tab [root]="tab3Root" tabTitle="以往會議 Past&nbsp;Meetings" tabIcon="ios-paper"></ion-tab> -->\n  <ion-tab [root]="tab4Root" tabTitle="問卷 Surveys" tabIcon="ios-clipboard"></ion-tab>\n</ion-tabs>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/tabs/tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], Tabs);
    return Tabs;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=6.js.map