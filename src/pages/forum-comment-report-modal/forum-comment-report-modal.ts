import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';

@IonicPage()
@Component({
  selector: 'page-forum-comment-report-modal',
  templateUrl: 'forum-comment-report-modal.html',
})
export class ForumCommentReportModal {

  comment_details: any = {};
  loginResponse: any = {};
  commentReport: any = "";
  token: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage) {
    this.comment_details = JSON.parse(this.navParams.get("comment_details"));
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    this.token = localStorage.getItem("token");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumCommentReportModal');
  }

  trim(str) {
    return str.replace(/ /g, '');
  }

  submitReportData(commentReport) {
    if (typeof commentReport == "undefined" || this.trim(commentReport) == "" || commentReport == null) {
      this.showMessage.showToastBottom(" 請輸入 | Please enter report text");
      return false;
    }
    else {
      this.token = localStorage.getItem("token");
      this.loadingService.showLoading();
      this.dataService.postData("reportComment", {
        "commentId": this.comment_details._id,
        "account": this.loginResponse.user.account,
        "commentReport": commentReport
      }, {
          headers: {
            'authorization': this.token
          }
        }).subscribe(results => {
          console.log(results);
          if (results.success == true) {
            this.showMessage.showToastBottom(results.message);
            this.loadingService.hideLoading();
            this.viewCtrl.dismiss();
          }
          else {
            this.showMessage.showToastBottom(results.message);
            this.loadingService.hideLoading();
          }
        }, err => {
          console.log("err", err);
          this.loadingService.hideLoading();
          this.showMessage.showToastBottom("網絡連接問題 | Unable to send report, please try again.");
        });
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
