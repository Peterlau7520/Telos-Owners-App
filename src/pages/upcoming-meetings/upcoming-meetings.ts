import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-upcoming-meetings',
  templateUrl: 'upcoming-meetings.html',
})
export class UpcomingMeetings {

  upcoming_meeting_list: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getStaticMeetingList();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingMeetings');
  }

  getStaticMeetingList() {
    for (let i = 0; i < 5; i++) {
      this.upcoming_meeting_list.push({
        "meeting_title": "Meeting Title " + (i + 1),
        "meeting_desc": "meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary meeting summary",
        "meeting_background": "./assets/images/background/" + (i + 1) + ".jpg"
      });
    }
  }

  goToViewMeetingDetails(meeting_details) {
    console.log(meeting_details);
    let tmp_meeting_details = JSON.stringify(meeting_details);
    localStorage.setItem("meeting_details", tmp_meeting_details);
    this.navCtrl.push("ViewMeetingPolls", { "meeting_details": tmp_meeting_details });
  }

}
