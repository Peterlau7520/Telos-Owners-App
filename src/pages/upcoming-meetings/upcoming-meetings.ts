import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';

@IonicPage()
@Component({
  selector: 'page-upcoming-meetings',
  templateUrl: 'upcoming-meetings.html',
})
export class UpcomingMeetings {

  public upcoming_meeting_list: any = [];
  public currentMeetings: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage) {
    /* this.currentMeetings = this.navParams.data.currentMeetings; */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpcomingMeetings');
  }

  ionViewWillEnter() {
    this.getUpcomingMeetingsData();
  }

  getUpcomingMeetingsData() {
    this.loadingService.showLoading();
    this.dataService.getData("currentMeetings", {}).subscribe(results => {
      if (results.success == true) {
        this.currentMeetings = results.currentMeetings;
        const self = this;
        self.upcoming_meeting_list = [];
        this.currentMeetings.forEach(function (meeting, i) {
          self.upcoming_meeting_list.push({
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
      this.showMessage.showToastBottom("Unable to get Upcoming meetings, please try again.");
    });
  }

  goToViewMeetingDetails(meeting_details) {
    console.log(meeting_details);
    let tmp_meeting_details = JSON.stringify(meeting_details);
    localStorage.setItem("meeting_details", tmp_meeting_details);
    this.navCtrl.push("ViewMeetingPolls", { "meeting_details": tmp_meeting_details });
  }

}
