import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import * as moment from 'moment';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';

@IonicPage()
@Component({
  selector: 'page-forum-page',
  templateUrl: 'forum-page.html',
})
export class ForumPage {

  forumsList: any = [];
  loginResponse: any = {};
  token: any = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage,
    public modalCtrl: ModalController) {
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    this.token = localStorage.getItem("token");
  }

  ionViewWillEnter() {
    this.getForumList();
  }

  getForumList() {
    this.token = localStorage.getItem("token");
    this.loadingService.showLoading("my-loading-class");
    this.dataService.postData("getForum", {
      "estateName": this.loginResponse.user.estateName
    }, {
        headers: {
          'authorization': this.token
        }
      }).subscribe(results => {
        console.log(results);
        if (results.success == true) {
          this.forumsList = results.posts;
          this.forumsList.forEach(forumEle => {
            forumEle.postTime = moment(forumEle.postTime).format('YYYY/MM/DD HH:mm');
            forumEle.totalLikes = forumEle.likedBy.length;
            forumEle.totalComments = forumEle.comments.length;
            forumEle.is_liked = false;
            forumEle.likedBy.forEach(likedUserID => {
              if (likedUserID == this.loginResponse.user._id) {
                forumEle.is_liked = true;
              }
            });
          });
          this.loadingService.hideLoading();
        }
        else {
          this.showMessage.showToastBottom(results.message);
          this.loadingService.hideLoading();
        }
      }, err => {
        console.log("err", err);
        this.loadingService.hideLoading();
        this.showMessage.showToastBottom("網絡連接問題，請重試 | Unable to get forums, please try again.");
      });
  }

  getForumList1() {
    this.token = localStorage.getItem("token");
    /* this.loadingService.showLoading("my-loading-class"); */
    this.dataService.postData("getForum", {
      "estateName": this.loginResponse.user.estateName
    }, {
        headers: {
          'authorization': this.token
        }
      }).subscribe(results => {
        console.log(results);
        if (results.success == true) {
          this.forumsList = results.posts;
          this.forumsList.forEach(forumEle => {
            forumEle.postTime = moment(forumEle.postTime).format('YYYY/MM/DD HH:mm');
            forumEle.totalLikes = forumEle.likedBy.length;
            forumEle.totalComments = forumEle.comments.length;
            forumEle.is_liked = false;
            forumEle.likedBy.forEach(likedUserID => {
              if (likedUserID == this.loginResponse.user._id) {
                forumEle.is_liked = true;
              }
            });
          });
          /* this.loadingService.hideLoading(); */
        }
        else {
          this.showMessage.showToastBottom(results.message);
          /* this.loadingService.hideLoading(); */
        }
      }, err => {
        console.log("err", err);
        /* this.loadingService.hideLoading(); */
        this.showMessage.showToastBottom("網絡連接問題，請重試 | Unable to get forums, please try again.");
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumPage');
  }

  openForumDetailsPage(forum_details) {
    let tmp_forum_details = JSON.stringify(forum_details);
    localStorage.setItem("forum_details", tmp_forum_details);
    this.navCtrl.push("ForumDetails", { "forum_details": tmp_forum_details });
  }

  openReportPage(forum_details) {
    let myModal = this.modalCtrl.create("ForumReportModal", { "forum_details": JSON.stringify(forum_details) });
    myModal.onDidDismiss(data => {
    });
    myModal.present();
  }

  openWritePostPage() {
    let myModal = this.modalCtrl.create("ForumPostModal");
    myModal.onDidDismiss(data => {
      if (data.closeType == "refresh") {
        this.getForumList();
      }
      console.log(data);
    });
    myModal.present();
  }

  likePostFunction(forum_details) {
    this.token = localStorage.getItem("token");
    this.loadingService.showLoading("my-loading-class4");
    this.dataService.postData("likePost", {
      "userId": this.loginResponse.user._id,
      "postId": forum_details._id
    }, {
        headers: {
          'authorization': this.token
        }
      }).subscribe(results => {
        console.log(results);
        if (results.success == true) {
          this.loadingService.hideLoading();
          this.getForumList1();
          this.showMessage.showToastBottom(results.message);
        }
        else {
          this.showMessage.showToastBottom(results.message);
          this.loadingService.hideLoading();
        }
      }, err => {
        console.log("err", err);
        this.loadingService.hideLoading();
        this.showMessage.showToastBottom(" 網絡連接問題，請重試 | Unable to like post, please try again.");
      });
  }

  likePostFunction1() {
    this.showMessage.showToastBottom(" 您已贊好 | You have already liked this post");
  }

}
