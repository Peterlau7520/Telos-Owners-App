import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import * as moment from 'moment';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';

@IonicPage()
@Component({
  selector: 'page-forum-details',
  templateUrl: 'forum-details.html',
})
export class ForumDetails {
  tabBarElement: any;
  forum_details: any = {};
  loginResponse: any = {};
  commentText: any = "";
  token: any = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage,
    public modalCtrl: ModalController) {
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    this.token = localStorage.getItem("token");
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    this.getForumDetails(this.loginResponse);
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumDetails');
  }

  getForumDetails(loginResponse) {
    this.forum_details = JSON.parse(this.navParams.get("forum_details"));
    console.log(this.forum_details);
    this.forum_details.comments.forEach(element => {
      element.commentedTime = moment(element.commentedTime).format('YYYY-MM-DD HH:mm');
      element.likesForComment = element.likedBy.length;
    });
    this.getCommentsByPostIdFunction(this.forum_details, loginResponse);
  }

  getCommentsByPostIdFunction(forum_details, loginResponse) {
    this.token = localStorage.getItem("token");
    this.loadingService.showLoading();
    this.dataService.postData("getCommentsByPostId", {
      "postId": forum_details._id,
      "estateName": loginResponse.user.estateName
    }, {
        headers: {
          'authorization': this.token
        }
      }).subscribe(results => {
        console.log(results);
        if (results.success == true) {
          this.forum_details = results.post[0];
          this.forum_details.totalLikes = this.forum_details.likedBy.length;
          this.forum_details.totalComments = this.forum_details.comments.length;
          this.forum_details.comments.forEach(element => {
            element.commentedTime = moment(element.commentedTime).format('YYYY-MM-DD HH:mm');
            element.likesForComment = element.likedBy.length;
          });
          this.forum_details.postTime = moment(this.forum_details.postTime).format('YYYY-MM-DD HH:mm');
          this.loadingService.hideLoading();
        }
        else {
          this.showMessage.showToastBottom(results.message);
          this.loadingService.hideLoading();
        }
      }, err => {
        console.log("err", err);
        this.loadingService.hideLoading();
        this.showMessage.showToastBottom("Unable to get comments, please try again.");
      });
  }


  openReportPage() {
    let myModal = this.modalCtrl.create("ForumReportModal", { "forum_details": JSON.stringify(this.forum_details) });
    myModal.onDidDismiss(data => {
    });
    myModal.present();
  }

  openCommentReportPage(comment_details) {
    let myModal = this.modalCtrl.create("ForumCommentReportModal", { "comment_details": JSON.stringify(comment_details) });
    myModal.onDidDismiss(data => {
    });
    myModal.present();
  }

  trim(str) {
    return str.replace(/ /g, '');
  }

  addCommentFunction(commentText, forum_details) {
    console.log(commentText);
    if (typeof commentText == "undefined" || this.trim(commentText) == "" || commentText == null) {
      this.showMessage.showToastBottom("Please enter comment text");
      return false;
    }
    else {
      this.token = localStorage.getItem("token");
      /* this.loadingService.showLoading(); */
      this.dataService.postData("newComment", {
        "postId": forum_details._id,
        "estateName": this.loginResponse.user.estateName,
        "account": this.loginResponse.user.account,
        "comment": commentText
      }, {
          headers: {
            'authorization': this.token
          }
        }).subscribe(results => {
          console.log(results);
          if (results.success == true) {
            this.commentText = "";
            this.getCommentsByPostIdFunction(this.forum_details, this.loginResponse);
            this.showMessage.showToastBottom(results.message);
          }
          else {
            this.showMessage.showToastBottom(results.message);
          }
        }, err => {
          console.log("err", err);
          this.showMessage.showToastBottom("Unable to add comment, please try again.");
        });
    }

  }

  likePostFunction(forum_details) {
    this.token = localStorage.getItem("token");
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
          this.forum_details.likedBy.push(this.loginResponse.user._id);
          this.forum_details.totalLikes = this.forum_details.likedBy.length;
          this.showMessage.showToastBottom(results.message);
        }
        else {
          this.showMessage.showToastBottom(results.message);
        }
      }, err => {
        console.log("err", err);
        this.showMessage.showToastBottom("Unable to like post, please try again.");
      });
  }

  likeCommentFunction(comment_details) {
    this.token = localStorage.getItem("token");
    this.dataService.postData("likeComment", {
      "userId": this.loginResponse.user._id,
      "commentId": comment_details._id
    }, {
        headers: {
          'authorization': this.token
        }
      }).subscribe(results => {
        console.log(results);
        if (results.success == true) {
          comment_details.likedBy.push(this.loginResponse.user._id);
          comment_details.likesForComment = comment_details.likedBy.length;
          this.showMessage.showToastBottom(results.message);
        }
        else {
          this.showMessage.showToastBottom(results.message);
        }
      }, err => {
        console.log("err", err);
        this.showMessage.showToastBottom("Unable to like post, please try again.");
      });
  }

}
