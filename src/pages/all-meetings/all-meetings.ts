import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';

@IonicPage()
@Component({
  selector: 'page-all-meetings',
  templateUrl: 'all-meetings.html',
})
export class AllMeetingsPage {

  public currentMeetings: any = [];
  pageName: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage) {
    this.pageName = this.navParams.get("page_name");
    console.log("this.pageName", this.pageName);
    if (this.pageName && this.pageName == "UpcomingMeetings") {
      this.goToUpcomingMeetings();
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad IdVerification1');
  }

  ionViewWillEnter() {
    /* this.getMeetingsData(); */
  }
  goToUpcomingMeetings() {
    this.navCtrl.push("UpcomingMeetings");
  }

  goToPastMeetings() {
    this.navCtrl.push("PastMeetings");
  }

}
