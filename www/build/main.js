webpackJsonp([22],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loading_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, loadingService, authprovider) {
        this.navCtrl = navCtrl;
        this.loadingService = loadingService;
        this.authprovider = authprovider;
    }
    HomePage.prototype.doLoginFunction = function (form) {
        this.authprovider.signin(form.value.account, form.value.password);
        this.loadingService.showLoading();
        localStorage.setItem("firstTabPage", "Noticeboard");
        this.navCtrl.push("Tabs");
    };
    HomePage.prototype.goToRegister = function () {
        this.navCtrl.push("Ownership");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/home/home.html"*/`<ion-content>\n  <ion-grid class="bottom-div">\n    <ion-row wrap padding>\n      <ion-col col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6 padding-bottom>\n        <!---Logo-->\n        <img src="./assets/images/logo/logo_white.png" style="margin-bottom:0px;">\n        <form #f="ngForm" (ngSubmit)="doLoginFunction(f)">\n        <!---Input field username-->\n        <ion-item no-padding transparent>\n          <ion-label floating no-margin>用戶名 | USERNAME</ion-label>\n          <ion-input \n          required \n          type="text" \n          ngModel\n          name="account"></ion-input>\n        </ion-item>\n        <!---Input field password-->\n        <ion-item no-padding transparent>\n          <ion-label floating margin-top>密碼 | PASSWORD</ion-label>\n          <ion-input \n          required \n          type="password" \n          ngModel\n          name="password"></ion-input>\n        </ion-item>\n\n        <!---Login button-->\n        <ion-row>\n          <ion-col col-12 text-center no-padding>\n            <button ion-button button-clear-outline text-center round outline class="login-button" type="submit" [disabled]="!f.valid" color="mytheme">登入 | Log In</button>\n          </ion-col>\n          <ion-col col-12 no-padding text-center>\n            <a (click)="goToRegister()" class="create-acc">開新帳戶 | Create an account</a>\n          </ion-col>\n        </ion-row>\n        <!---Register button-->\n      </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_loading_service__["a" /* LoadingService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/agree-use-company-chop/agree-use-company-chop.module": [
		294,
		21
	],
	"../pages/agree-use-telos/agree-use-telos.module": [
		295,
		20
	],
	"../pages/all-meetings/all-meetings.module": [
		296,
		19
	],
	"../pages/change-password-page/change-password-page.module": [
		297,
		18
	],
	"../pages/company-chop/company-chop.module": [
		298,
		17
	],
	"../pages/id-verification-1/id-verification-1.module": [
		299,
		16
	],
	"../pages/noticeboard/noticeboard.module": [
		300,
		15
	],
	"../pages/owner-hkid-number/owner-hkid-number.module": [
		301,
		14
	],
	"../pages/ownership/ownership.module": [
		302,
		13
	],
	"../pages/past-meetings/past-meetings.module": [
		303,
		12
	],
	"../pages/personal-details/personal-details.module": [
		304,
		11
	],
	"../pages/profile-page/profile-page.module": [
		305,
		10
	],
	"../pages/register/register.module": [
		306,
		9
	],
	"../pages/survey-list/survey-list.module": [
		307,
		8
	],
	"../pages/surveys/surveys.module": [
		308,
		7
	],
	"../pages/tabs/tabs.module": [
		309,
		6
	],
	"../pages/thank-you-note-2/thank-you-note-2.module": [
		310,
		5
	],
	"../pages/thank-you-note/thank-you-note.module": [
		311,
		4
	],
	"../pages/upcoming-meetings/upcoming-meetings.module": [
		312,
		3
	],
	"../pages/view-meeting-details/view-meeting-details.module": [
		313,
		2
	],
	"../pages/view-meeting-polls/view-meeting-polls.module": [
		314,
		1
	],
	"../pages/view-past-meeting-details/view-past-meeting-details.module": [
		315,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoadingService = (function () {
    function LoadingService(http, loadingCtrl, sanitizer) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.sanitizer = sanitizer;
    }
    LoadingService.prototype.showLoading = function () {
        var svg = "<svg width=\"60\" height=\"60\" viewBox=\"0 0 44 44\" xmlns=\"http://www.w3.org/2000/svg\" stroke=\"#000000\">\n    <g fill=\"none\" fill-rule=\"evenodd\" stroke-width=\"2\">\n        <circle cx=\"22\" cy=\"22\" r=\"1\">\n            <animate attributeName=\"r\"\n                begin=\"0s\" dur=\"1.8s\"\n                values=\"1; 20\"\n                calcMode=\"spline\"\n                keyTimes=\"0; 1\"\n                keySplines=\"0.165, 0.84, 0.44, 1\"\n                repeatCount=\"indefinite\" />\n            <animate attributeName=\"stroke-opacity\"\n                begin=\"0s\" dur=\"1.8s\"\n                values=\"1; 0\"\n                calcMode=\"spline\"\n                keyTimes=\"0; 1\"\n                keySplines=\"0.3, 0.61, 0.355, 1\"\n                repeatCount=\"indefinite\" />\n        </circle>\n        <circle cx=\"22\" cy=\"22\" r=\"1\">\n            <animate attributeName=\"r\"\n                begin=\"-0.9s\" dur=\"1.8s\"\n                values=\"1; 20\"\n                calcMode=\"spline\"\n                keyTimes=\"0; 1\"\n                keySplines=\"0.165, 0.84, 0.44, 1\"\n                repeatCount=\"indefinite\" />\n            <animate attributeName=\"stroke-opacity\"\n                begin=\"-0.9s\" dur=\"1.8s\"\n                values=\"1; 0\"\n                calcMode=\"spline\"\n                keyTimes=\"0; 1\"\n                keySplines=\"0.3, 0.61, 0.355, 1\"\n                repeatCount=\"indefinite\" />\n        </circle>\n    </g>\n</svg>";
        this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(svg);
        this.loading = this.loadingCtrl.create({
            /* content: 'Please wait', */
            /* dismissOnPageChange: true, */
            showBackdrop: false,
            spinner: 'hide',
            content: this.safeSvg,
            duration: 3000
        });
        this.loading.present();
    };
    LoadingService.prototype.hideLoading = function () {
        this.loading.dismiss().catch(function () { });
        /* this.loading.dismiss(); */
    };
    LoadingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], LoadingService);
    return LoadingService;
}());

//# sourceMappingURL=loading-service.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    AuthProvider.prototype.signin = function (account, password) {
        console.log(account, password);
    };
    AuthProvider.prototype.login = function (credentials) {
        // return new Promise((resolve, reject) => {
        //     let headers = new Headers();
        //     headers.append('Content-Type', 'application/json');
        //     this.http.post('http://telos-residents.herokuapp.com/login', JSON.stringify(credentials), {headers: headers})
        //       .subscribe(res => {
        //         let data = res.json();
        //         this.token = data.token;
        //         this.storage.set('token', data.token);
        //         resolve(data);
        //       }, (err) => {
        //         reject(err);
        //       });
        // });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowMessage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ShowMessage = (function () {
    function ShowMessage(http, platform, toastCtrl, alertCtrl) {
        this.http = http;
        this.platform = platform;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
    }
    ShowMessage.prototype.showToastBottom = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    ShowMessage.prototype.showToastTop = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    ShowMessage.prototype.showToastMiddle = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    ShowMessage.prototype.showErrorAlert = function (text) {
        var alert1 = this.alertCtrl.create({
            title: 'Error',
            subTitle: text,
            buttons: ['OK']
        });
        alert1.present();
    };
    ShowMessage.prototype.showSuccessAlert = function (title, text) {
        var alert2 = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert2.present();
    };
    ShowMessage.prototype.showToastWithBtn = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: "Retry"
        });
        toast.present();
    };
    ShowMessage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */]])
    ], ShowMessage);
    return ShowMessage;
}());

//# sourceMappingURL=show-message.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the MeetingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MeetingsProvider = (function () {
    function MeetingsProvider(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    MeetingsProvider.prototype.getUpcomingMeetings = function () {
        // return new Promise((resolve, reject) => {
        //   //Load token if exists
        //     this.storage.get('token').then((value) => {
        //     this.token = value;
        //     let headers = new Headers();
        //     headers.append('Authorization', this.token);
        //     this.http.get('http://telos-residents.herokuapp.com/getPolls', {headers: headers})
        //           .subscribe(res => {
        //             let data = res.json();
        //             console.log(data);
        //             resolve(data);
        //           }, (err) => {
        //               reject(err);
        //           });
        //         })
        //       });
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://localhost:3000/currentMeetings')
                .subscribe(function (res) {
                var data = res.json();
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    MeetingsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], MeetingsProvider);
    return MeetingsProvider;
}());

//# sourceMappingURL=meetings.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the NoticesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var NoticesProvider = (function () {
    function NoticesProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello NoticesProvider Provider');
    }
    NoticesProvider.prototype.getNotices = function () {
        // return new Promise((resolve, reject) => {
        //   //Load token if exists
        //     this.storage.get('token').then((value) => {
        //     this.token = value;
        //     let headers = new Headers();
        //     headers.append('Authorization', this.token);
        //     this.http.get('http://telos-residents.herokuapp.com/getPolls', {headers: headers})
        //           .subscribe(res => {
        //             let data = res.json();
        //             console.log(data);
        //             resolve(data);
        //           }, (err) => {
        //               reject(err);
        //           });
        //         })
        //       });
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('http://localhost:3000/noticeBoard')
                .subscribe(function (res) {
                var data = res.json();
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    NoticesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], NoticesProvider);
    return NoticesProvider;
}());

//# sourceMappingURL=notices.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignaturePadPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/* @IonicPage() */
var SignaturePadPage = (function () {
    function SignaturePadPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.signaturePadOptions = {
            'minWidth': 1,
            /* 'canvasWidth': 400,
            'canvasHeight': 200, */
            'backgroundColor': '#ffffff',
            'penColor': '#666a73'
        };
        this.signature = '';
        this.isDrawing = false;
        this.total_signatures = this.navParams.get("signatures");
        this.current_signature = this.navParams.get("current_signature");
        console.log(this.total_signatures);
    }
    SignaturePadPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignaturePad');
        /* this.signaturePad.resizeCanvas(); */
        /* this.signaturePad.clear(); */
    };
    SignaturePadPage.prototype.canvasResize = function () {
        var canvas = document.querySelector('canvas');
        var ratio = Math.max(window.devicePixelRatio || 1, 1);
        canvas.width = canvas.offsetWidth * ratio;
        canvas.height = canvas.offsetHeight * ratio;
        canvas.getContext("2d").scale(ratio, ratio);
    };
    SignaturePadPage.prototype.drawComplete = function () {
        this.isDrawing = false;
    };
    SignaturePadPage.prototype.drawStart = function () {
        this.isDrawing = true;
    };
    SignaturePadPage.prototype.clearSignaturePad = function () {
        this.signaturePad.clear();
    };
    SignaturePadPage.prototype.saveSignature = function () {
        this.signature = this.signaturePad.toDataURL();
        console.log(this.signature);
        this.signaturePad.clear();
        if (this.current_signature >= this.total_signatures) {
            this.viewCtrl.dismiss("thankyou");
            console.log("IF");
            return false;
        }
        else {
            console.log("else");
            /* this.current_signature++;
            let myModal = this.modalCtrl.create(SignaturePadPage, {
              "signatures": this.total_signatures,
              "current_signature": this.current_signature
            });
            myModal.present(); */
            /* if (this.current_signature == this.total_signatures) {
              console.log("Else IF");
              this.viewCtrl.dismiss("thankyou");
            }
            else { */
            this.viewCtrl.dismiss(this.current_signature);
            /* } */
        }
    };
    SignaturePadPage.prototype.clearPad = function () {
        this.signaturePad.clear();
    };
    SignaturePadPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss("outside");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], SignaturePadPage.prototype, "signaturePad", void 0);
    SignaturePadPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signature-pad',template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/signature-pad-page/signature-pad-page.html"*/`<ion-content class="main-view">\n  <div class="overlay" (click)="dismiss()"></div>\n  <!-- <div class="overlay"></div> -->\n  <div class="modal_content">\n    <ion-row class="modal_inner_content">\n      <ion-col>\n        <ion-icon name="md-close" class="close-button" (click)="dismiss()"></ion-icon>\n        <ion-row>\n          <p col-12 class="agree-title" style="margin-bottom:0;" text-center>Electronic Signature ({{current_signature}}/{{total_signatures}})</p>\n        </ion-row>\n        <ion-row>\n          <ion-col col-12 border-bottom [ngClass]="{\'drawing-active\': isDrawing}">\n            <signature-pad [options]="signaturePadOptions" id="signatureCanvas"></signature-pad>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col text-center>\n        <button ion-button button-clear-outline round outline class="next-button login-button" color="mytheme" (click)="clearSignaturePad()">Clear</button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button button-clear-outline round outline class="next-button login-button" color="mytheme" (click)="saveSignature()">Submit</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/pages/signature-pad-page/signature-pad-page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], SignaturePadPage);
    return SignaturePadPage;
}());

//# sourceMappingURL=signature-pad-page.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_document_viewer__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_signaturepad__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_youtube_video_player__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_screen_orientation__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_show_message__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_loading_service__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_component__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_signature_pad_page_signature_pad_page__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_meetings_meetings__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_notices_notices__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_signature_pad_page_signature_pad_page__["a" /* SignaturePadPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10_angular2_signaturepad__["SignaturePadModule"],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */], {
                    backButtonText: ""
                }, {
                    links: [
                        { loadChildren: '../pages/agree-use-company-chop/agree-use-company-chop.module#AgreeUseCompanyChopModule', name: 'AgreeUseCompanyChop', segment: 'agree-use-company-chop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/agree-use-telos/agree-use-telos.module#AgreeUseTelosModule', name: 'AgreeUseTelos', segment: 'agree-use-telos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/all-meetings/all-meetings.module#IdVerification2Module', name: 'AllMeetingsPage', segment: 'all-meetings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password-page/change-password-page.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/company-chop/company-chop.module#CompanyChopModule', name: 'CompanyChop', segment: 'company-chop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/id-verification-1/id-verification-1.module#IdVerification1Module', name: 'IdVerification1', segment: 'id-verification-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/noticeboard/noticeboard.module#NoticeboardModule', name: 'Noticeboard', segment: 'noticeboard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/owner-hkid-number/owner-hkid-number.module#OwnerHkidNumberModule', name: 'OwnerHkidNumber', segment: 'owner-hkid-number', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ownership/ownership.module#OwnershipModule', name: 'Ownership', segment: 'ownership', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/past-meetings/past-meetings.module#PastMeetingsModule', name: 'PastMeetings', segment: 'past-meetings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal-details/personal-details.module#PersonalDetailsModule', name: 'PersonalDetails', segment: 'personal-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-page/profile-page.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterModule', name: 'Register', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/survey-list/survey-list.module#SurveyListModule', name: 'SurveyList', segment: 'survey-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/surveys/surveys.module#SurveysModule', name: 'Surveys', segment: 'surveys', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsModule', name: 'Tabs', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/thank-you-note-2/thank-you-note-2.module#ThankYouNote2Module', name: 'ThankYouNote2', segment: 'thank-you-note-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/thank-you-note/thank-you-note.module#ThankYouNoteModule', name: 'ThankYouNote', segment: 'thank-you-note', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/upcoming-meetings/upcoming-meetings.module#UpcomingMeetingsModule', name: 'UpcomingMeetings', segment: 'upcoming-meetings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-meeting-details/view-meeting-details.module#ViewMeetingDetailsModule', name: 'ViewMeetingDetails', segment: 'view-meeting-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-meeting-polls/view-meeting-polls.module#ViewMeetingPollsModule', name: 'ViewMeetingPolls', segment: 'view-meeting-polls', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-past-meeting-details/view-past-meeting-details.module#ViewPastMeetingDetailsModule', name: 'ViewPastMeetingDetails', segment: 'view-past-meeting-details', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_18__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_19__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_signature_pad_page_signature_pad_page__["a" /* SignaturePadPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_youtube_video_player__["a" /* YoutubeVideoPlayer */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_15__providers_show_message__["a" /* ShowMessage */],
                __WEBPACK_IMPORTED_MODULE_16__providers_loading_service__["a" /* LoadingService */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_opener__["a" /* FileOpener */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_document_viewer__["a" /* DocumentViewer */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_21__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_meetings_meetings__["a" /* MeetingsProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_notices_notices__["a" /* NoticesProvider */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menu) {
        var _this = this;
        this.menu = menu;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleBlackTranslucent();
            /* statusBar.overlaysWebView(false); */
            /* statusBar.backgroundColorByHexString("#000000"); */
            splashScreen.hide();
            _this.menu.swipeEnable(false);
        });
    }
    MyApp.prototype.openNoticeboard = function (page) {
        console.log(page);
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        localStorage.setItem("firstTabPage", page);
        this.nav.setRoot("Tabs");
    };
    MyApp.prototype.openProfilePage = function (page) {
        console.log(page);
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page);
    };
    MyApp.prototype.doLogout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/Peter/Desktop/Telos-Owners-App/src/app/app.html"*/`<ion-split-pane when="xl">\n    <ion-menu [content]="content">\n        <ion-header>\n            <div class="header-background-image">\n                <img src="assets/images/logo/logo_white.png">\n            </div>\n        </ion-header>\n\n        <ion-content color="primary">\n            <ion-list no-margin>\n                <button menuClose paddinge-left ion-item no-lines item-title main-menu (click)="openNoticeboard(\'Noticeboard\')">\n                    <ion-icon icon-small item-left name="ios-home-outline"></ion-icon>\n                    主頁 | Home\n                </button>\n            </ion-list>\n            <ion-list no-margin>\n                <button menuClose paddinge-left ion-item no-lines item-title main-menu (click)="openProfilePage(\'ProfilePage\')">\n                    <ion-icon icon-small item-left name="ios-person-outline"></ion-icon>\n                    我 | Profile\n                </button>\n            </ion-list>\n            <ion-list no-margin>\n                <button menuClose paddinge-left ion-item no-lines item-title main-menu (click)="doLogout()">\n                    <ion-icon icon-small item-left name="ios-log-out-outline"></ion-icon>\n                    登出 | Log Out\n                </button>\n            </ion-list>\n        </ion-content>\n    </ion-menu>\n\n    <ion-nav [root]="rootPage" #content main swipeBackEnabled="false"></ion-nav>\n</ion-split-pane>`/*ion-inline-end:"/Users/Peter/Desktop/Telos-Owners-App/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[213]);
//# sourceMappingURL=main.js.map