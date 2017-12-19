import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';

@IonicPage()
@Component({
  selector: 'page-past-meetings',
  templateUrl: 'past-meetings.html',
})
export class PastMeetings {

  past_meeting_list: any = [];
  pastMeetings: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PastMeetings');
  }

  ionViewWillEnter() {
    this.getPastMeetingsData();
  }

  getPastMeetingsData() {
    this.loadingService.showLoading();
    this.dataService.getData("pastMeetings", {}).subscribe(results => {
      if (results.success == true) {
        this.pastMeetings = results.pastMeetings;
        const self = this;
        self.past_meeting_list = [];
        this.pastMeetings.forEach(function (meeting, i) {
          self.past_meeting_list.push({
            "meeting_id": meeting._id,
            "meeting_title": meeting.title,
            "meeting_titleChn": meeting.titleChn,
            "meeting_desc": meeting.meetingSummaryChn + " | " + meeting.meetingSummary,
            "meeting_startTime": meeting.startTime,
            "meeting_endTime": meeting.startTime,
            "meeting_venue": meeting.venue,
            "meeting_fileLinks": meeting.fileLinks,
            "meeting_pollEndTime": meeting.pollEndTime,
            "meeting_polls": meeting.polls,
            "meeting_background": "./assets/images/background/" + (i + 1) + ".jpg"
          })
        })
        this.loadingService.hideLoading();
      }
      else {
        this.showMessage.showToastBottom(results.message);
        this.loadingService.hideLoading();
      }
    }, err => {
      console.log("err", err);
      this.loadingService.hideLoading();
      this.showMessage.showToastBottom("Unable to get Past meetings, please try again.");
    });
  }

  goToViewMeetingDetails(meeting_details) {
    console.log(meeting_details);
    let tmp_meeting_details = JSON.stringify(meeting_details);
    localStorage.setItem("meeting_details", tmp_meeting_details);
    this.navCtrl.push("ViewPastMeetingDetails", { "meeting_details": tmp_meeting_details });
  }

}
