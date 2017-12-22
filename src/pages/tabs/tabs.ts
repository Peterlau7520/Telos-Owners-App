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
  tab3Root: any = "SurveyList";
  tab4Root: any = "ForumPage";
  public badgeCount = 10;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("tab Changed const");
    this.tab1Root = localStorage.getItem("firstTabPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs');
    this.tab1Root = localStorage.getItem("firstTabPage");
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
