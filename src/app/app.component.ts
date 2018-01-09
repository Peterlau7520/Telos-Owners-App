import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = this.checkIfLoggedIn();

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      /* statusBar.styleBlackTranslucent(); */
      statusBar.styleLightContent();
      /* statusBar.overlaysWebView(false); */
      /* statusBar.backgroundColorByHexString("#000000"); */
      splashScreen.hide();
      this.menu.swipeEnable(false);
    });
  }

  checkIfLoggedIn() {
    if (localStorage.getItem("userCredentials") && localStorage.getItem("loginResponse") && localStorage.getItem("token")) {
      localStorage.setItem("firstTabPage", "Noticeboard");
      return "Tabs";
    }
    else {
      return HomePage;
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
    });
  }

  clearLocalStorage() {
    localStorage.removeItem("loginResponse");
    localStorage.removeItem("token");
    localStorage.removeItem("userCredentials");
    localStorage.removeItem("meeting_details");
    localStorage.removeItem("owners_list");
  }
}

