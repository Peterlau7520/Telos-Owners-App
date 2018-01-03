import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';

@IonicPage()
@Component({
  selector: 'page-forum-post-modal',
  templateUrl: 'forum-post-modal.html',
})
export class ForumPostModal {

  loginResponse: any = {};
  content: any = "";
  token: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage) {
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    this.token = localStorage.getItem("token");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPostModal');
  }

  trim(str) {
    return str.replace(/ /g, '');
  }

  sendPostData(content) {
    if (typeof content == "undefined" || this.trim(content) == "" || content == null) {
      this.showMessage.showToastBottom(" 請輸入內容 | Please enter text to post");
      return false;
    }
    else {
      this.token = localStorage.getItem("token");
      this.loadingService.showLoading("my-loading-class");
      this.dataService.postData("newPost", {
        "estateName": this.loginResponse.user.estateName,
        "account": this.loginResponse.user.account,
        "content": content
      }, {
          headers: {
            'authorization': this.token
          }
        }).subscribe(results => {
          console.log(results);
          if (results.success == true) {
            this.loadingService.hideLoading();
            this.viewCtrl.dismiss({ "closeType": "refresh" });
          }
          else {
            this.showMessage.showToastBottom(results.message);
            this.loadingService.hideLoading();
          }
        }, err => {
          console.log("err", err);
          this.loadingService.hideLoading();
          this.showMessage.showToastBottom("網絡連接問題，請重試 | Unable to post, please try again.");
        });

    }
  }

  dismiss() {
    this.viewCtrl.dismiss({ "closeType": "decline" });
  }

}
