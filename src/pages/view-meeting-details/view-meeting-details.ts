import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-view-meeting-details',
  templateUrl: 'view-meeting-details.html',
})
export class ViewMeetingDetails {

  meeting_details: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMeetingDetails');
  }

}
