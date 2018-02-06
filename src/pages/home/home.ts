import { Component } from '@angular/core';
import { Platform, NavController, Tabs, Events } from 'ionic-angular';
import { OneSignal } from '@ionic-native/onesignal';
import { Device } from '@ionic-native/device';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Badge } from '@ionic-native/badge';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  deviceToken: any;
  loginResponse: any = {};
  userCredentials: any = {};
  token: any = "";
  form: NgForm;

  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    public events: Events,
    public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage,
    private device: Device,
    public oneSignal: OneSignal,
    private localNotifications: LocalNotifications,
    public badge: Badge) {
    this.platform.ready().then(() => {

      //this.initPushNotification();
      if (localStorage.getItem('userCredentials')) {
        this.userCredentials = JSON.parse(localStorage.getItem('userCredentials'));
        /* this.form.value.account = this.userCredentials.account;
        this.form.value.password = this.userCredentials.password; */
      }
    });
  }

  doLoginFunction(form: NgForm, tmpuserCredentials) {
    /* localStorage.setItem("firstTabPage", "Noticeboard");
    this.navCtrl.push("Tabs"); */

    this.loadingService.showLoading("my-loading-class2");
    let deviceInfo = this.getdeviceInfo();
    form.value.deviceToken = localStorage.getItem("deviceToken");
    form.value.deviceType = deviceInfo.device_platform;
    form.value.account = tmpuserCredentials.account;
    form.value.password = tmpuserCredentials.password;
    console.log(deviceInfo);
    console.log(form.value);
    this.dataService.postData("login", form.value, {}).subscribe(results => {
      if (results.success == true) {
        this.loginResponse = results;
        this.token = results.token;
        localStorage.setItem('token', results.token);
        localStorage.setItem('loginResponse', JSON.stringify(results));
        let userCredentials = {
          "account": tmpuserCredentials.account,
          "password": tmpuserCredentials.password
        }
        localStorage.setItem('userCredentials', JSON.stringify(userCredentials));
        this.getNoticeBoardData(userCredentials, this.loginResponse);
        console.log(results);
      }
      else {
        this.loadingService.hideLoading();
        this.showMessage.showToastBottom(results.message);
      }
    }, err => {
      console.log("err", err);
      this.loadingService.hideLoading();
      this.showMessage.showToastBottom("網絡連接問題，請重試 | Unable to login, please try again.");
    });
  }

  addOwnerInfoData(numberOfOwners) {
    let owners_list = [];
    for (let i = 0; i < numberOfOwners; i++) {
      /* let tmp_owner_info = this.owners_list[i]; */
      if (i == 0) {
        owners_list.push({ is_visible: true, image: "" });
        /* tmp_owner_info.is_visible = true; */
      }
      else {
        /* tmp_owner_info.is_visible = false; */
        owners_list.push({ is_visible: false, image: "" });
      }
    }
    let tmp_owner_list = JSON.stringify(owners_list);
    localStorage.setItem("owners_list", tmp_owner_list);
  }

  goToRegister() {
    this.navCtrl.push("Ownership");
  }

  getdeviceInfo() {
    let deviceInfo: any = {};
    deviceInfo.device_model_name = this.device.model;
    deviceInfo.device_vendor_name = this.device.manufacturer;
    deviceInfo.device_os_version = this.device.version;
    deviceInfo.device_platform = this.device.platform;
    deviceInfo.device_udid = this.device.uuid;
    return deviceInfo;
  }

  /* initPushNotification() {
    if (!this.platform.is('cordova')) {
      console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
      return;
    }
    this.oneSignal.startInit('72ae436c-554c-4364-bd3e-03af71505447', '709611482439');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    this.oneSignal.registerForPushNotifications();
    this.oneSignal.getIds().then((data) => {
      console.log("GETIDS DATA", data);
      this.deviceToken = data.pushToken;
    });
    this.oneSignal.handleNotificationReceived().subscribe((data) => {
      // do something when notification is received
      this.localNotifications.schedule({
        title: "Telos",
        text: data.payload.body
      });
      console.log("NOTIFICATION RECEIVED", data);
    }, (err) => {
      console.log("NOTIFICATION ERROR", err);
    });

    this.oneSignal.handleNotificationOpened().subscribe(() => {
      // do something when a notification is opened
      console.log("NOTIFICATION OPENED");
      localStorage.setItem("selectedPageIndex", "2");
    }, (err) => {
      console.log(err);
      console.log("NOTIFICATION OPENING ERROR", err);
    });

    this.oneSignal.endInit();
  } */

  async getNoticeBoardData(userCredentials, loginResponse) {
    try {
      this.token = localStorage.getItem("token");
      await this.dataService.postData("getBadge", {
        "estateName": this.loginResponse.user.estateName,
        "account": this.loginResponse.user.account
      }, {
          headers: {
            'authorization': this.token
          }
        }).subscribe(results => {
          let newMeetings = results.newMeetings;
          let newSurveys = results.newSurveys;
          localStorage.setItem("newMeetingsCounts", newMeetings.length);
          localStorage.setItem("newSurveysCounts", newSurveys.length);
          this.events.publish('newMeetings:updated', newMeetings.length);
          this.events.publish('newSurveys:updated', newSurveys.length);
          this.requestPermission(newMeetings.length, newSurveys.length);
          if (loginResponse.user.registered == true) {
            localStorage.setItem('userCredentials', JSON.stringify(userCredentials));
            localStorage.setItem("firstTabPage", "Noticeboard");
            this.loadingService.hideLoading();
            this.navCtrl.push("Tabs").then(() => {
            });
          }
          else if (loginResponse.user.registered == false) {
            if (loginResponse.user.nature == "CorporateOwner") {
              this.addOwnerInfoData(loginResponse.user.numberOfOwners);
              this.navCtrl.push("CompanyChop").then(() => {
                this.loadingService.hideLoading();
              });
            }
            else {
              /* this.addOwnerInfoData(results.user.numberOfOwners);
              this.navCtrl.push("IdVerification1").then(() => {
                this.loadingService.hideLoading();
              }); */

              localStorage.setItem('userCredentials', JSON.stringify(userCredentials));
              localStorage.setItem("firstTabPage", "Noticeboard");
              this.loadingService.hideLoading();
              this.navCtrl.push("Tabs").then(() => {
              });
            }
          }
          else {
            localStorage.setItem('userCredentials', JSON.stringify(userCredentials));
            localStorage.setItem("firstTabPage", "Noticeboard");
            this.loadingService.hideLoading();
            this.navCtrl.push("Tabs").then(() => {
            });
          }
        }, err => {
          console.log("err", err);
          this.loadingService.hideLoading();
          this.showMessage.showToastBottom("網絡連接問題，請重試 | Unable to login, please try again.");
          /* this.loadingService.hideLoading(); */
          /* this.showMessage.showToastBottom("網絡連接問題，請重試 | Unable to get Noticeboard data, please try again."); */
        });
    }
    catch (e) {
      console.warn(e);
    }
    /* this.loadingService.showLoading("my-loading-class"); */
  }

  async requestPermission(newMeetings, newSurveys) {
    try {
      let total_badges = parseInt(newMeetings) + parseInt(newSurveys);
      let hasPermission = await this.badge.hasPermission();
      console.log(hasPermission);
      if (!hasPermission) {
        let permission = await this.badge.registerPermission();
        console.log(permission);
      }
      else {
        this.getBadges();
        this.badge.set(total_badges);
      }
    } catch (e) {
      console.warn(e);
    }
  }

  async getBadges() {
    try {
      let badgeAmount = await this.badge.get();
      console.log("badgeAmount", badgeAmount);
    }
    catch (e) {
      console.warn(e);
    }
  }

}
