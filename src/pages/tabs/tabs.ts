import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class Tabs {

  tab1Root: any = "";
  tab2Root: any = "UpcomingMeetings";
  tab3Root: any = "PastMeetings";
  tab4Root: any = "Surveys";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("tab Changed const");
    this.tab1Root = localStorage.getItem("firstTabPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs');
    this.tab1Root = localStorage.getItem("firstTabPage");
  }

}
