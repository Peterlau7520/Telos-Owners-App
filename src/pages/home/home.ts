import { Component } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { OneSignal } from '@ionic-native/onesignal';
import { Device } from '@ionic-native/device';
import { LocalNotifications } from '@ionic-native/local-notifications';

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

  constructor(
    private platform: Platform,
    public navCtrl: NavController,
    public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage,
    private device: Device,
    public oneSignal: OneSignal,
    private localNotifications: LocalNotifications) {
    this.platform.ready().then(() => {

      this.initPushNotification();
    });
  }

  doLoginFunction(form: NgForm) {
    /* localStorage.setItem("firstTabPage", "Noticeboard");
    this.navCtrl.push("Tabs"); */

    this.loadingService.showLoading("my-loading-class2");
    let deviceInfo = this.getdeviceInfo();
    form.value.deviceToken = this.deviceToken;
    console.log(deviceInfo);
    console.log(form.value);
    this.dataService.postData("login", form.value, {}).subscribe(results => {
      if (results.success == true) {
        localStorage.setItem('token', results.token);
        localStorage.setItem('loginResponse', JSON.stringify(results));
        let userCredentials = {
          "account": form.value.account,
          "password": form.value.password
        }
        console.log(results);
        if (results.user.registered == true) {
          localStorage.setItem('userCredentials', JSON.stringify(userCredentials));
          localStorage.setItem("firstTabPage", "Noticeboard");
          this.loadingService.hideLoading();
          this.navCtrl.push("Tabs").then(() => {
          });
        }
        else if (results.user.registered == false) {
          if (results.user.nature == "CorporateOwner") {
            this.addOwnerInfoData(results.user.numberOfOwners);
            this.navCtrl.push("CompanyChop").then(() => {
              this.loadingService.hideLoading();
            });
          }
          else {
            this.addOwnerInfoData(results.user.numberOfOwners);
            this.navCtrl.push("IdVerification1").then(() => {
              this.loadingService.hideLoading();
            });
          }
        }
        else {
          this.loadingService.hideLoading();
        }
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

  initPushNotification() {
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
    }, (err) => {
      console.log(err);
      console.log("NOTIFICATION OPENING ERROR", err);
    });

    this.oneSignal.endInit();
  }

}
