import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Badge } from '@ionic-native/badge';
import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';
import { HomePage } from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class Splash {

  loginResponse: any = {};
  token: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public events: Events,
    public splashScreen: SplashScreen,
    public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage,
    public badge: Badge) {
    this.token = localStorage.getItem("token");
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    if (this.loginResponse) {
      this.getNoticeBoardData();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Splash');
  }

  ionViewDidEnter() {

    /* this.splashScreen.hide();

    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 4000); */

  }

  async getNoticeBoardData() {
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
          if (results.success == true) {
            /* this.loadingService.hideLoading(); */
          }
          else {
            this.showMessage.showToastBottom(results.message);
            if (results.message == "Invalid token" || results.message == "Please login") {
              this.navCtrl.setRoot(HomePage);
            }
            /* this.loadingService.hideLoading(); */
          }
        }, err => {
          console.log("err", err);
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
