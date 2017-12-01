import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-past-meetings',
  templateUrl: 'past-meetings.html',
})
export class PastMeetings {
  past_meeting_list: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getStaticMeetingList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PastMeetings');
  }

  getStaticMeetingList() {
    for (let i = 0; i < 5; i++) {
      this.past_meeting_list.push({
        "meeting_title": "Meeting Title " + (i + 1),
        "meeting_desc": "meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary",
        "meeting_background": "./assets/images/background/" + (i + 1) + ".jpg"
      });
    }
    console.log(this.past_meeting_list);
  }

  goToViewMeetingDetails(meeting_details) {
    console.log(meeting_details);
  }

}
