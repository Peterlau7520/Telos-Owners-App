import { Component } from '@angular/core';
import { IonicPage, NavController, Events, NavParams } from 'ionic-angular';
import { FileOpener } from '@ionic-native/file-opener';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import * as moment from 'moment';
import { Badge } from '@ionic-native/badge';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';
import { HomePage } from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-noticeboard',
  templateUrl: 'noticeboard.html',
})
export class Noticeboard {

  browser: any;
  public notices: any = [];
  unreadNotices: any = [];
  viewedNotice: any = [];
  new_notices: any;
  loginResponse: any = {};
  token: any = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    private transfer: FileTransfer,
    private file: File, private iab: InAppBrowser,
    private document: DocumentViewer, private fileOpener: FileOpener, public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage,
    public badge: Badge) {
    this.notices = [];
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    this.token = localStorage.getItem("token");
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad Noticeboard');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter Noticeboard');
    this.notices = [];
    this.getNoticeBoardData();
  }

  getNoticeBoardData() {
    this.loadingService.showLoading("my-loading-class");
    this.dataService.postData("noticeBoard", {
      "estateName": this.loginResponse.user.estateName,
      "account": this.loginResponse.user.account,
    }, {
        headers: {
          'authorization': this.token
        }
      }).subscribe(results => {
        if (results.success == true) {
          this.notices = results.notices;
          this.unreadNotices = results.unreadNotices;
          this.viewedNotice = results.viewedNotice;
          this.new_notices = 0;
          this.notices.forEach(element => {
            element.postDate = moment(element.postDate).format('YYYY/MM/DD HH:mm');
            element.endTime = moment(element.endTime).format('YYYY/MM/DD HH:mm');
            this.unreadNotices.forEach(unReadElement => {
              if (element._id == unReadElement) {
                element.is_new = true;
                this.new_notices++;
              }
            });
            this.viewedNotice.forEach(viewedElement => {
              if (element._id == viewedElement) {
                element.is_new = false;
              }
            });
          });
          localStorage.setItem("new_notices", this.new_notices);
          this.events.publish('noticeboard:updated', this.new_notices);
          let newMeetingsCount = localStorage.getItem("newMeetingsCounts");
          let newSurveysCounts = localStorage.getItem("newSurveysCounts");
          this.requestPermission(newMeetingsCount, newSurveysCounts, this.new_notices);
          this.loadingService.hideLoading();
        }
        else {
          this.showMessage.showToastBottom(results.message);
          if (results.message == "Invalid token" || results.message == "Please login") {
            this.navCtrl.setRoot(HomePage);
          }
          this.loadingService.hideLoading();
        }
      }, err => {
        console.log("err", err);
        this.loadingService.hideLoading();
        this.showMessage.showToastBottom("網絡連接問題，請重試 | Unable to get Noticeboard data, please try again.");
      });

  }

  viewPdfFile(notice) {
    /* this.viewedNoticeFunction(notice); */
    console.log(JSON.stringify(notice));
    /* this.file.dataDirectory; */
    let file_details = notice.fileLinks[0];
    const options: DocumentViewerOptions = {
      print: { enabled: false },
      bookmarks: { enabled: false },
      email: { enabled: false },
      title: file_details.name
    };
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = file_details.url;
    fileTransfer.download(url, this.file.dataDirectory + file_details.name).then((entry) => {
      console.log('download complete: ' + entry.toURL());
      this.document.viewDocument(this.file.dataDirectory + file_details.name, "application/pdf",
        options, onShow, onClose, onMissingApp, onError);
    }, (error) => {
      console.log(error);
      // handle error
    });

    function onShow() {
      window.console.log('document shown');
      //e.g. track document usage
    }

    function onClose() {
      window.console.log('document closed');
      //e.g. remove temp files
    }

    function onMissingApp(appId, installer) {
      if (confirm("PDF viewer not available on your device, Do you want to install the free PDF Viewer App to view this document?")) {
        installer();
      }
    }

    function onError(error) {
      window.console.log(error);
      alert("Sorry! Cannot view document.");
    }

    /* notice.is_new = false; */
    this.viewedNoticeFunction(notice);
  }

  viewedNoticeFunction(notice_data) {
    if (notice_data.is_new && notice_data.is_new == true) {
      this.loadingService.showLoading("my-loading-class4");
      this.dataService.postData("viewedNotice", {
        "account": this.loginResponse.user.account,
        "noticeId": notice_data._id
      }, {
          headers: {
            'authorization': this.token
          }
        }).subscribe(results => {
          if (results.message == "Invalid token" || results.message == "Please login") {
            this.navCtrl.setRoot(HomePage);
          }
          else {
            this.dataService.postData("noticeBoard", {
              "estateName": this.loginResponse.user.estateName,
              "account": this.loginResponse.user.account,
            }, {
                headers: {
                  'authorization': this.token
                }
              }).subscribe(results => {
                if (results.success == true) {
                  this.notices = results.notices;
                  this.new_notices = 0;
                  this.unreadNotices = results.unreadNotices;
                  this.viewedNotice = results.viewedNotice;
                  this.notices.forEach(element => {
                    element.postDate = moment(element.postDate).format('YYYY/MM/DD HH:mm');
                    element.endTime = moment(element.endTime).format('YYYY/MM/DD HH:mm');
                    this.unreadNotices.forEach(unReadElement => {
                      if (element._id == unReadElement) {
                        element.is_new = true;
                        this.new_notices++;
                      }
                    });
                    this.viewedNotice.forEach(viewedElement => {
                      if (element._id == viewedElement) {
                        element.is_new = false;
                      }
                    });
                  });
                  localStorage.setItem("new_notices", this.new_notices);
                  this.events.publish('noticeboard:updated', this.new_notices);
                  let newMeetingsCount = localStorage.getItem("newMeetingsCounts");
                  let newSurveysCounts = localStorage.getItem("newSurveysCounts");
                  this.requestPermission(newMeetingsCount, newSurveysCounts, this.new_notices);
                  this.loadingService.hideLoading();
                }
                else {
                  this.showMessage.showToastBottom(results.message);
                  if (results.message == "Invalid token" || results.message == "Please login") {
                    this.navCtrl.setRoot(HomePage);
                  }
                  this.loadingService.hideLoading();
                }
              }, err => {
                console.log("err", err);
                this.loadingService.hideLoading();
                /* this.showMessage.showToastBottom("網絡連接問題，請重試 | Unable to get Noticeboard data, please try again."); */
              });
          }
        }, err => {
          console.log("err", err);
          this.loadingService.hideLoading();
          /* this.showMessage.showToastBottom("網絡連接問題，請重試 | Unable to get Noticeboard data, please try again."); */
        });
    }
    else {
      this.loadingService.showLoading("my-loading-class4");
      let TIME_IN_MS = 3000;
      let hideLoadingTimeOut = setTimeout(() => {
        this.loadingService.hideLoading();
      }, TIME_IN_MS);
    }
  }

  async requestPermission(newMeetings, newSurveys, new_notices) {
    try {
      let total_badges = parseInt(newMeetings) + parseInt(newSurveys) + parseInt(new_notices);
      let hasPermission = await this.badge.hasPermission();
      console.log(hasPermission);
      if (!hasPermission) {
        let permission = await this.badge.registerPermission();
        console.log(permission);
      }
      else {
        this.getBadges();
        this.badge.set(total_badges);
      }
    } catch (e) {
      console.warn(e);
    }
  }

  async getBadges() {
    try {
      let badgeAmount = await this.badge.get();
      console.log("badgeAmount", badgeAmount);
    }
    catch (e) {
      console.warn(e);
    }
  }

}
