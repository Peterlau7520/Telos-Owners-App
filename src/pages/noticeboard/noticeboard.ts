import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileOpener } from '@ionic-native/file-opener';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import * as moment from 'moment';

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
  loginResponse: any = {};
  token: any = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private transfer: FileTransfer,
    private file: File, private iab: InAppBrowser,
    private document: DocumentViewer, private fileOpener: FileOpener, public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage) {
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
    this.loadingService.showLoading();
    this.dataService.postData("noticeBoard", {
      "estateName": this.loginResponse.user.estateName
    }, {
        headers: {
          'authorization': this.token
        }
      }).subscribe(results => {
        if (results.success == true) {
          this.notices = results.notices;
          this.notices.forEach(element => {
            element.postDate = moment(element.postDate).format('YYYY-MM-DD HH:mm');
            element.endTime = moment(element.endTime).format('YYYY-MM-DD HH:mm');
          });
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
  }

}
