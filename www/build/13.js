webpackJsonp([13],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnershipModule", function() { return OwnershipModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ownership__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OwnershipModule = (function () {
    function OwnershipModule() {
    }
    OwnershipModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ownership__["a" /* Ownership */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ownership__["a" /* Ownership */]),
            ],
        })
    ], OwnershipModule);
    return OwnershipModule;
}());

//# sourceMappingURL=ownership.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ownership; });
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


var Ownership = (function () {
    function Ownership(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.data = {};
        this.owners_list = [];
        this.pushDefaultItemIntoArray();
    }
    Ownership.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Ownership');
    };
    Ownership.prototype.pushDefaultItemIntoArray = function () {
        for (var i = 0; i < 1; i++) {
            this.owners_list.push({
                "owner_full_name": ""
            });
        }
    };
    Ownership.prototype.removeItemFromArray = function (i) {
        console.log(i);
        this.owners_list.splice(i, 1);
        /* console.log(this.owners_list); */
    };
    Ownership.prototype.pushItemIntoArray = function () {
        this.owners_list.push({
            "owner_full_name": ""
        });
    };
    Ownership.prototype.goToIDVerification1 = function () {
        for (var i = 0; i < this.owners_list.length; i++) {
            var tmp_owner_info = this.owners_list[i];
            if (i == 0) {
                tmp_owner_info.is_visible = true;
            }
            else {
                tmp_owner_info.is_visible = false;
            }
        }
        var tmp_owner_list = JSON.stringify(this.owners_list);
        localStorage.setItem("owners_list", tmp_owner_list);
        this.navCtrl.push("IdVerification1", { "owners_list": tmp_owner_list });
    };
    Ownership = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-ownership',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/ownership/ownership.html"*/`<ion-header>\n  <ion-navbar header-color>\n    <!-- <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button> -->\n    <!-- <ion-title text-left>Ownership</ion-title> -->\n  </ion-navbar>\n</ion-header>\n<!-- Themes Register + logo -->\n<ion-content background-size default-background>\n  <ion-grid>\n    <ion-row wrap padding>\n      <ion-col col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 no-padding>\n        <!--Form-->\n        <div class="form">\n          <!--Form Title-->\n          <h1 title>業主資料 | Ownership</h1>\n          <ion-row>\n            <ion-col class="p-l-r-10 p-t-b-0">\n              <p>請輸入您單位的每一位業主之全名 | Please enter the full names of all the owners of your unit:</p>\n              <ion-item transparent no-padding *ngFor="let owners_info of owners_list; let i = index;">\n                <ion-label floating margin-top>全名 | FULL NAME ({{i+1}})</ion-label>\n                <ion-input required type="text" [(ngModel)]="owners_info.owner_full_name"></ion-input>\n                <button ion-button clear item-end no-margin no-padding class="close-btn">\n                  <ion-icon name="md-close" (click)="removeItemFromArray(i)" *ngIf="owners_list.length>1">\n                  </ion-icon>\n                </button>\n                <!-- <ion-icon item-end name="md-close" class="close-icon">\n                </ion-icon> -->\n              </ion-item>\n              <!-- <ion-item no-padding>\n                <ion-label floating margin-top>全名 | FULL NAME</ion-label>\n                <ion-input required type="text"></ion-input>\n              </ion-item> -->\n              <!---Register button-->\n              <ion-row margin-vertical>\n                <ion-col text-center margin-bottom>\n                  <button ion-button button-clear-outline round outline color="mytheme" (click)="pushItemIntoArray()">加業主 | Add Owner</button>\n                </ion-col>\n              </ion-row>\n            </ion-col>\n          </ion-row>\n          <ion-row margin-top>\n            <ion-col text-center margin-top>\n              <button ion-button button-clear-outline round outline class="next-button" color="mytheme" (click)="goToIDVerification1()">下一頁 | Next</button>\n            </ion-col>\n          </ion-row>\n        </div>\n        <!-- <div logo>\n          <img left src="./assets/images/logo/login_3.png">\n        </div> -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/ownership/ownership.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], Ownership);
    return Ownership;
}());

//# sourceMappingURL=ownership.js.map

/***/ })

});
//# sourceMappingURL=13.js.map