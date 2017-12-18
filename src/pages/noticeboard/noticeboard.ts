import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { FileOpener } from '@ionic-native/file-opener';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import {NoticesProvider} from '../../providers/notices/notices';

@IonicPage()
@Component({
  selector: 'page-noticeboard',
  templateUrl: 'noticeboard.html',
})
export class Noticeboard {

  browser: any;
  public notices: any = [];

  constructor(
    public platform: Platform, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private transfer: FileTransfer, 
    private file: File, private iab: InAppBrowser, 
    private document: DocumentViewer, private fileOpener: FileOpener,
    public noticeProvider: NoticesProvider) {
      this.noticeProvider.getNotices().then((info) => {
        this.notices = info['notices'];
        console.log(this.notices);
      }, (err) => {
        // loading.present();
        //  const alert = this.alertCtril.create({
        //    title: 'Errors',
        //    message: 'Failed to retrieve documents',
        //    buttons: [
        //      {
        //        text: 'Ok',
        //        role: 'cancel',
        //      }
        //    ] 
        //  });
  
      });
    };
  ionViewDidLoad() {
    console.log('ionViewDidLoad Noticeboard');
  }

  IonViewDidEnter() {

  }

  viewPdfFile(card_title) {
    /* this.file.dataDirectory; */
    const options: DocumentViewerOptions = {
      print: { enabled: false },
      bookmarks: { enabled: false },
      email: { enabled: false },
      title: card_title
    };
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'https://www.ets.org/Media/Tests/GRE/pdf/gre_research_validity_data.pdf';
    fileTransfer.download(url, this.file.dataDirectory + 'demopdfflie.pdf').then((entry) => {
      console.log('download complete: ' + entry.toURL());
      this.document.viewDocument(this.file.dataDirectory + "demopdfflie.pdf", "application/pdf",
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

  viewPdfFile1(card_title) {
    /* let file_url = "https://www.ets.org/Media/Tests/GRE/pdf/gre_research_validity_data.pdf"; */
    const fileTransfer: FileTransferObject = this.transfer.create();
    const url = 'https://www.ets.org/Media/Tests/GRE/pdf/gre_research_validity_data.pdf';
    fileTransfer.download(url, this.file.dataDirectory + 'demopdfflie.pdf').then((entry) => {
      console.log('download complete: ' + entry.toURL());
      this.document.viewDocument(this.file.dataDirectory + "demopdfflie.pdf", "application/pdf",
        { print: { enabled: true }, bookmarks: { enabled: true }, email: { enabled: true }, title: "document title" });
    }, (error) => {
      console.log(error);
      // handle error
    });
  }

}
