import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FileOpener } from '@ionic-native/file-opener';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';

@IonicPage()
@Component({
  selector: 'page-noticeboard',
  templateUrl: 'noticeboard.html',
})
export class Noticeboard {

  browser: any;
  public notices: any = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private transfer: FileTransfer,
    private file: File, private iab: InAppBrowser,
    private document: DocumentViewer, private fileOpener: FileOpener, public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage) {
  };
  ionViewDidLoad() {
    console.log('ionViewDidLoad Noticeboard');
  }

  ionViewWillEnter() {
    this.getNoticeBoardData();
  }

  getNoticeBoardData() {
    this.loadingService.showLoading();
    this.dataService.getData("noticeBoard", {}).subscribe(results => {
      if (results.success == true) {
        this.notices = results.notices;
        this.loadingService.hideLoading();
      }
      else {
        this.showMessage.showToastBottom(results.message);
        this.loadingService.hideLoading();
      }
    }, err => {
      console.log("err", err);
      this.loadingService.hideLoading();
      this.showMessage.showToastBottom("Unable to get Noticeboard data, please try again.");
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
