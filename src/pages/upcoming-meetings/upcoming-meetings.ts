import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-upcoming-meetings',
  templateUrl: 'upcoming-meetings.html',
})
export class UpcomingMeetings {

  public upcoming_meeting_list: any = [];
  public currentMeetings: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.currentMeetings = this.navParams.data.currentMeetings;
    const self = this;
    this.currentMeetings.forEach(function(meeting, i){
      self.upcoming_meeting_list.push({
        "meeting_id": meeting._id,
        "meeting_title": meeting.title,
        "meeting_titleChn": meeting.titleChn,
        "meeting_desc": "Summary",
        "meeting_startTime": meeting.startTime,
        "meeting_endTime": meeting.startTime,
        "meeting_venue": meeting.venue,
        "meeting_fileLinks": meeting.fileLinks,
        "meeting_pollEndTime": meeting.pollEndTime,
        "meeting_polls": meeting.polls,
        "meeting_background": "./assets/images/background/" + (i + 1) + ".jpg"
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingMeetings');
    
  }

  goToViewMeetingDetails(meeting_details) {
    console.log(meeting_details);
    let tmp_meeting_details = JSON.stringify(meeting_details);
    localStorage.setItem("meeting_details", tmp_meeting_details);
    this.navCtrl.push("ViewMeetingPolls", { "meeting_details": tmp_meeting_details });
  }

}
