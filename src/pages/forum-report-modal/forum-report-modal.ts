import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';

@IonicPage()
@Component({
  selector: 'page-forum-report-modal',
  templateUrl: 'forum-report-modal.html',
})
export class ForumReportModal {

  forum_details: any = {};
  loginResponse: any = {};
  postReport: any = "";
  token: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage) {
    this.forum_details = JSON.parse(this.navParams.get("forum_details"));
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    this.token = localStorage.getItem("token");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumReportModal');
  }

  trim(str) {
    return str.replace(/ /g, '');
  }

  submitReportData(postReport) {
    if (typeof postReport == "undefined" || this.trim(postReport) == "" || postReport == null) {
      this.showMessage.showToastBottom("請輸入內容 | Please enter report text");
      return false;
    }
    else {
      this.token = localStorage.getItem("token");
      this.loadingService.showLoading();
      this.dataService.postData("reportPost", {
        "postId": this.forum_details._id,
        "account": this.loginResponse.user.account,
        "postReport": postReport
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
          this.showMessage.showToastBottom("網絡連接問題，請重試 | Unable to send report, please try again.");
        });
    }
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
