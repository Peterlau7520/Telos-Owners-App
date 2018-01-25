import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';
import { Device } from '@ionic-native/device';
import { LocalNotifications } from '@ionic-native/local-notifications';

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
    public modalCtrl: ModalController) {
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
      }, 4000);
      /* return HomePage; */
    }
    return this.rootPage;
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
    localStorage.removeItem("userCredentials");
    localStorage.removeItem("meeting_details");
    localStorage.removeItem("owners_list");
    localStorage.removeItem("selectedPageIndex");
    localStorage.removeItem("forum_details");
  }

  initPushNotification() {
    if (!this.platform.is('cordova')) {
      console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
      return;
    }
    this.oneSignal.startInit('72ae436c-554c-4364-bd3e-03af71505447', '709611482439');
    /* this.oneSignal.setSubscription(true); */
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
          /* let meeting_data = {
            "meeting_id": "5a5d6026a18e165153eee5ed", "meeting_title": "Wing On Villas Annual General Meeting", "meeting_titleChn": "永安村週年大會", "meeting_desc": "我們會討論有關屋苑停車場維修和外墻油刷的潛在合約商 | We will discuss potential contractors for our estate's carpark renovation and outer wall resurfacing.", "meeting_startTime": "2018/01/31 20:00", "meeting_endTime": "21:00", "meeting_venue": "Conference Room", "meeting_fileLinks": [{ "name": "Agendapdf", "url": "https://telospdf.s3.amazonaws.com/WingOnVillas/undefined/Agendapdf" }], "meeting_pollEndTime": "2018-01-17 15:00", "meeting_polls": [{ "_id": "5a5d6026a18e165153eee5ec", "pollName": "To decide which contractor to be in charge of cantilevered carpark construction project!", "pollNameChn": "議案決定屋村懸臂停車場建築合約商", "summary": "To decide which contractor to be in charge of cantilevered carpark project", "summaryChn": "議案決定屋村懸臂停車場建築合約商", "estateName": "WingOnVillas", "endTime": "01-17-2018", "active": true, "finalResult": "", "votes": [], "votingResults": [{ "_id": "5a5d60b54fc730001480f4fb", "resident": "5a59ab2f252709205a3d628a", "choice": "Van Oord Dredging and Marine Contractors B.V." }, { "_id": "5a5d61074fc730001480f4fd", "resident": "5a59ab2f252709205a3d628b", "choice": "Vibro (H.K.) Ltd" }, { "_id": "5a5d619c4fc730001480f4ff", "resident": "5a59ab2f252709205a3d628c", "choice": "VINCI Construction Grands Projets" }, { "_id": "5a5d61ec4fc730001480f501", "resident": "5a59ab2f252709205a3d628d", "choice": "Wide Project Engineering & Construction Co" }, { "_id": "5a5d628f4fc730001480f503", "resident": "5a59ab2f252709205a3d628e", "choice": "Van Oord Dredging and Marine Contractors B.V." }], "results": [], "voted": ["5a59ab2f252709205a3d628a", "5a59ab2f252709205a3d628b", "5a59ab2f252709205a3d628c", "5a59ab2f252709205a3d628d", "5a59ab2f252709205a3d628e"], "options": ["Van Oord Dredging and Marine Contractors B.V.", "Vibro (H.K.) Ltd", "VINCI Construction Grands Projets", "Wide Project Engineering & Construction Co"], "fileLinks": [{ "name": "FirstPageSEOStrategytelostechnologypdf", "url": "https://telospdf.s3.amazonaws.com/WingOnVillas/undefined/Poll/FirstPageSEOStrategytelostechnologypdf" }], "__v": 0 }], "meeting_background": "./assets/images/background/1.jpg", "meeting_youtubelink": "o_KOg4SjpE0"
          } */
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

