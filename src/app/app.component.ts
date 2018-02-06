import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';
import { Device } from '@ionic-native/device';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Badge } from '@ionic-native/badge';

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = this.checkIfLoggedIn();

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public menu: MenuController,
    private device: Device,
    public oneSignal: OneSignal,
    private localNotifications: LocalNotifications,
    public modalCtrl: ModalController,
    public badge: Badge) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      /* this.initPushNotification(); */
      this.rootPage = this.checkIfLoggedIn();
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      /* this.splashScreen.hide(); */
      /* this.nav.push("Splash"); */
      this.menu.swipeEnable(false);
    });
  }

  checkIfLoggedIn() {
    /* let splash = this.modalCtrl.create("Splash");
    splash.present(); */
    this.rootPage = "Splash";
    this.platform.ready().then(() => {
      this.initPushNotification();
      this.requestPermission();
    });
    if (localStorage.getItem("userCredentials") && localStorage.getItem("loginResponse") && localStorage.getItem("token")) {
      setTimeout(() => {
        this.rootPage = "Tabs";
      }, 4000);
      /* localStorage.setItem("firstTabPage", "Noticeboard");
      return "Tabs"; */
    }
    else {
      setTimeout(() => {
        /* splash.dismiss(); */
        this.rootPage = HomePage;
      }, 3000);
      /* return HomePage; */
    }
    return this.rootPage;
  }

  async requestPermission() {
    try {
      let hasPermission = await this.badge.hasPermission();
      console.log(hasPermission);
      if (!hasPermission) {
        let permission = await this.badge.registerPermission();
        console.log(permission);
      }
      else {
        this.getBadges();
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

  openNoticeboard(page) {
    console.log(page);
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    localStorage.setItem("firstTabPage", page);
    this.nav.setRoot("Tabs");
  }

  openProfilePage(page) {
    console.log(page);
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page);
  }

  doLogout() {
    this.nav.setRoot(HomePage).then(() => {
      this.clearLocalStorage();
      /* this.oneSignal.setSubscription(false); */
    });
  }

  clearLocalStorage() {
    localStorage.removeItem("loginResponse");
    localStorage.removeItem("token");
    localStorage.removeItem("meeting_details");
    localStorage.removeItem("owners_list");
    localStorage.removeItem("selectedPageIndex");
    localStorage.removeItem("forum_details");
    localStorage.removeItem("newMeetingsCounts");
    localStorage.removeItem("newSurveysCounts");
    localStorage.removeItem("new_notices");
    this.badge.clear();
  }

  initPushNotification() {
    if (!this.platform.is('cordova')) {
      console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
      return;
    }
    this.oneSignal.startInit('72ae436c-554c-4364-bd3e-03af71505447', '709611482439');
    //this.oneSignal.setSubscription(true);
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    this.oneSignal.registerForPushNotifications();
    this.oneSignal.getIds().then((data) => {
      console.log("GETIDS DATA", data);
      localStorage.setItem("deviceToken", JSON.stringify(data.pushToken));
    });
    this.oneSignal.handleNotificationReceived().subscribe((data) => {
      // do something when notification is received
      //this.localNotifications.schedule({
      //  title: "Telos",
      // text: data.payload.body
      //}); 
      console.log("NOTIFICATION RECEIVED", data);
    }, (err) => {
      console.log("NOTIFICATION ERROR", err);
    });

    this.oneSignal.handleNotificationOpened().subscribe((data) => {
      // do something when a notification is opened
      console.log("NOTIFICATION OPENED");
      console.log("NOTIFICATION OPENED", data);
      let notification_data = data;
      if (data.notification.payload.additionalData) {
        if (data.notification.payload.additionalData.page && data.notification.payload.additionalData.page == "noticeboard") {
          this.nav.setRoot("Tabs", { "selected_page": 0 }).then(() => {
          });
        }
        else if (data.notification.payload.additionalData.page && data.notification.payload.additionalData.page == "forum") {
          this.nav.setRoot("Tabs", { "selected_page": 3 }).then(() => {
          });
        }
        else if (data.notification.payload.additionalData.page && data.notification.payload.additionalData.page == "meeting") {
          this.nav.setRoot("Tabs", { "selected_page": 1, "page_name": "UpcomingMeetings" }).then(() => {
            //this.nav.push("UpcomingMeetings");
          });
        }
      }
    }, (err) => {
      console.log(err);
      console.log("NOTIFICATION OPENING ERROR", err);
    });

    this.oneSignal.endInit();
  }

}

