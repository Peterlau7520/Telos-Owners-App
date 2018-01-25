import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  public badgeCount = 10;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("tab Changed const");
    this.tab1Root = localStorage.getItem("firstTabPage");
    this.selectedPage = this.navParams.get("selected_page");
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
    /* this.showMessage.changeTabButtonColor(this.theme_settings.Theme); */
    /* event.color = this.theme_settings.Theme; */
  }

}
