webpackJsonp([16],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdVerification1Module", function() { return IdVerification1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__id_verification_1__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IdVerification1Module = (function () {
    function IdVerification1Module() {
    }
    IdVerification1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__id_verification_1__["a" /* IdVerification1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__id_verification_1__["a" /* IdVerification1 */]),
            ],
        })
    ], IdVerification1Module);
    return IdVerification1Module;
}());

//# sourceMappingURL=id-verification-1.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdVerification1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_show_message__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var IdVerification1 = (function () {
    function IdVerification1(navCtrl, navParams, camera, actionSheetCtrl, loadingService, dataService, showMessage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingService = loadingService;
        this.dataService = dataService;
        this.showMessage = showMessage;
        this.license_image = "";
        this.owners_list = [];
        this.owners_list_length = 0;
        this.loginResponse = {};
        this.token = "";
        if (this.navParams.get("owners_list")) {
            console.log("navParams");
            this.owners_list = JSON.parse(this.navParams.get("owners_list"));
            if (this.owners_list) {
                this.owners_list_length = this.owners_list.length;
            }
            else {
                this.owners_list_length = localStorage.getItem("owners_list_length");
                console.log("owners_list Not Found");
            }
        }
        else {
            console.log("localStorage");
            this.owners_list = JSON.parse(localStorage.getItem("owners_list"));
            if (this.owners_list) {
                this.owners_list_length = this.owners_list.length;
            }
            else {
                this.owners_list_length = localStorage.getItem("owners_list_length");
                console.log("owners_list Not Found");
            }
        }
        this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
        this.token = localStorage.getItem("token");
        console.log(this.owners_list);
    }
    IdVerification1.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IdVerification1');
    };
    IdVerification1.prototype.presentActionSheet = function (i) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY, i);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA, i);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    IdVerification1.prototype.takePicture = function (sourceType, i) {
        var _this = this;
        var options = {
            quality: 40,
            sourceType: sourceType,
            destinationType: this.camera.DestinationType.DATA_URL,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.owners_list[i].image = 'data:image/png;base64,' + imageData;
        }, function (err) {
            _this.showMessage.showToastBottom("Unable to get image");
        });
    };
    IdVerification1.prototype.submitData = function (i) {
        console.log(i);
        if (typeof this.owners_list[i].image == "undefined" || this.owners_list[i].image == "" || this.owners_list[i].image == null) {
            this.showMessage.showToastBottom("Please select/take an picture to upload.");
            return false;
        }
        else if (typeof this.owners_list[i].hkid == "undefined" || this.owners_list[i].hkid == "" || this.owners_list[i].hkid == null) {
            this.showMessage.showToastBottom("Please enter the HKID number.");
            return false;
        }
        else {
            if (i < this.owners_list.length - 1) {
                this.owners_list[i].is_visible = false;
                i++;
                this.owners_list[i].is_visible = true;
            }
            else {
                this.submitAllHKIDData(this.owners_list);
                /* this.navCtrl.push("CompanyChop"); */
            }
        }
    };
    IdVerification1.prototype.submitAllHKIDData = function (owners_list) {
        var _this = this;
        this.loadingService.showLoading();
        var hkidsArray = [];
        var request_data = {};
        for (var i = 0; i < owners_list.length; i++) {
            hkidsArray.push({
                "image": owners_list[i].image,
                "hkid": owners_list[i].hkid,
            });
        }
        request_data = {
            "hkids": hkidsArray,
            "account": this.loginResponse.user.account,
            "estateName": this.loginResponse.user.estateName
        };
        this.dataService.postData("saveHKID", request_data, {
            headers: {
                'authorization': this.token
            }
        }).subscribe(function (results) {
            console.log(request_data);
            if (results.success == true) {
                console.log(results);
                _this.showMessage.showToastBottom(results.message);
                _this.loadingService.hideLoading();
                localStorage.setItem("firstTabPage", "Noticeboard");
                _this.navCtrl.push("Tabs");
                /* this.navCtrl.push("Register"); */
            }
            else {
                _this.showMessage.showToastBottom(results.message);
                _this.loadingService.hideLoading();
                if (results.message == "Invalid token" || results.message == "Please login") {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]);
                }
            }
        }, function (err) {
            console.log("err", err);
            _this.loadingService.hideLoading();
            _this.showMessage.showToastBottom("Unable to save HKID data, please try again.");
        });
    };
    IdVerification1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-id-verification-1',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/id-verification-1/id-verification-1.html"*/`<ion-header>\n  <ion-navbar header-color>\n    <!-- <ion-title text-left>HKID (1/2)</ion-title> -->\n  </ion-navbar>\n</ion-header>\n<!-- Themes Register + logo -->\n<ion-content background-size default-background>\n  <ion-grid>\n    <ion-row wrap padding>\n      <ion-col col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 no-padding *ngFor="let owners_info of owners_list; let i=index;">\n        <div class="form" *ngIf="owners_info.is_visible">\n          <h1 title>身分證 | HKID ({{i+1}}/{{owners_list_length}})</h1>\n          <ion-row>\n            <ion-col class="p-l-r-10 p-t-b-0">\n              <p>請上傳您身分證圖片跟輸入其號碼 | Please upload a photo of your HKID and enter your HKID number below (e.g. R123456)</p>\n              <ion-row>\n                <ion-col text-center no-padding class="img-preview-div">\n                  <img *ngIf="!owners_info.image" src="./assets/images/logo/sample.png" class="preview-image" alt="">\n                  <img *ngIf="owners_info.image" [src]="owners_info.image" class="preview-image" alt="">\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col text-center margin-top no-padding>\n                  <button ion-button button-clear-outline round outline color="mytheme" (click)="presentActionSheet(i)">\n                    <ion-icon name="ios-camera-outline" class="camera-icon"></ion-icon>\n                    拍 | Take</button>\n                </ion-col>\n              </ion-row>\n              <!---Input field username-->\n              <ion-item no-padding transparent padding-bottom>\n                <ion-label floating>身分證號碼 | HKID NUMBER (e.g. R123456)</ion-label>\n                <ion-input required type="text" [(ngModel)]="owners_info.hkid"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row margin-top>\n            <ion-col text-center margin-top>\n              <button ion-button button-clear-outline round outline class="next-button" color="mytheme" (click)="submitData(i)">確定 | Submit</button>\n            </ion-col>\n          </ion-row>\n        </div>\n        <!-- <div logo>\n          <img left src="./assets/images/logo/login_3.png">\n        </div> -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/id-verification-1/id-verification-1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__providers_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_service__["a" /* DataService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_show_message__["a" /* ShowMessage */]])
    ], IdVerification1);
    return IdVerification1;
}());

//# sourceMappingURL=id-verification-1.js.map

/***/ })

});
//# sourceMappingURL=16.js.map