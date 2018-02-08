import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { locale } from 'moment';
import { Badge } from '@ionic-native/badge';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class Tabs {

  tab1Root: any = "";
  tab2Root: any = "AllMeetingsPage";
  selectedPage: any = 0;
  tab3Root: any = "SurveyTypes";
  tab4Root: any = "ForumPage";
  newMeetingsCounts: any;
  newSurveysCounts: any;
  new_notices: any;
  interval: any;
  public badgeCount = 10;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events, public badge: Badge) {
    console.log("tab Changed const");
    this.tab1Root = localStorage.getItem("firstTabPage");
    this.selectedPage = this.navParams.get("selected_page");
    this.newMeetingsCounts = window.localStorage.getItem("newMeetingsCounts");
    this.newSurveysCounts = window.localStorage.getItem("newSurveysCounts");
    this.new_notices = window.localStorage.getItem("new_notices");
    this.events.subscribe('noticeboard:updated', (noticeboardCount) => {
      this.new_notices = noticeboardCount;
      this.requestPermission(this.newMeetingsCounts, this.newSurveysCounts, noticeboardCount);
      console.log('noticeboard:updated');
    });
    this.events.subscribe('newMeetings:updated', (newMeetingsCount) => {
      this.newMeetingsCounts = newMeetingsCount;
      this.requestPermission(newMeetingsCount, this.newSurveysCounts, this.new_notices);
      console.log('newMeetings:updated');
    });

    this.events.subscribe('newSurveys:updated', (newSurveysCounts) => {
      this.newSurveysCounts = newSurveysCounts;
      this.requestPermission(this.newMeetingsCounts, newSurveysCounts, this.new_notices);
      console.log('newSurveys:updated');
    });
    /* this.events.publish('newMeetings:updated', newMeetings.length); */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs');
    this.tab1Root = localStorage.getItem("firstTabPage");
    /* if (this.navParams.get("page_name") == "UpcomingMeetings") {
      this.navCtrl.push("UpcomingMeetings");
    } */
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter Tabs');
    if (this.navParams.get("page_name") == "UpcomingMeetings") {
      /* this.navCtrl.push("UpcomingMeetings"); */
    }
  }

  getBadgesCounts() {

  }

  tabChanged(event) {
    console.log("TAB CHANGED...");
    console.log(event);
    /* this.newMeetingsCounts = window.localStorage.getItem("newMeetingsCounts"); */
    /* this.newSurveysCounts = window.localStorage.getItem("newSurveysCounts"); */
    /* this.new_notices = window.localStorage.getItem("new_notices"); */
    /* this.showMessage.changeTabButtonColor(this.theme_settings.Theme); */
    /* event.color = this.theme_settings.Theme; */
  }

  async requestPermission(newMeetings, newSurveys, new_notices) {
    try {
      if (!newMeetings) {
        newMeetings = 0;
      }
      if (!newSurveys) {
        newSurveys = 0;
      }
      if (!new_notices) {
        new_notices = 0;
      }
      let total_badges = parseInt(newMeetings) + parseInt(newSurveys) + parseInt(new_notices);
      let hasPermission = await this.badge.hasPermission();
      console.log(hasPermission);
      if (!hasPermission) {
        let permission = await this.badge.registerPermission();
        console.log(permission);
      }
      else {
        console.log("total_badges", total_badges);
        this.badge.set(total_badges);
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

}
