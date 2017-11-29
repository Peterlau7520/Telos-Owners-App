import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/* import { FileOpener } from '@ionic-native/file-opener'; */
/* import { InAppBrowser } from '@ionic-native/in-app-browser'; */

@IonicPage()
@Component({
  selector: 'page-noticeboard',
  templateUrl: 'noticeboard.html',
})
export class Noticeboard {

  browser: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Noticeboard');
  }

  viewPdfFile(card_title) {
    /* const options: DocumentViewerOptions = {
      title: card_title
    }
    this.document.viewDocument('./assets/pdf/Telos_Ionic.pdf', 'application/pdf', options);
    let baseUrl = location.href.replace("/index.html", "");
    function  {
      console.log(file);
      return baseUrl + "/" + file;
    } */
    /* this.fileOpener.open('file:///android_asset/www/pdf/Telos_Ionic.pdf', 'application/pdf')
      .then(() => console.log('File is opened'))
      .catch(e => console.log('Error openening file', e)); */
    /* this.browser = this.iab.create('assets/pdf/Telos_Ionic.pdf', '_blank', 'closebuttoncaption=Cancel,clearcache=yes,clearsessioncache=yes'); */
    console.log(this.browser);
  }

  viewPdfFile1(card_title) {
    /* const options: DocumentViewerOptions = {
      title: card_title
    }
    this.document.viewDocument('./assets/pdf/Telos_Ionic.pdf', 'application/pdf', options);
    let baseUrl = location.href.replace("/index.html", "");
    function  {
      console.log(file);
      return baseUrl + "/" + file;
    } */
    /* this.fileOpener.open('file:///android_asset/www/pdf/Telos_Ionic.pdf', 'application/pdf')
      .then(() => console.log('File is opened'))
      .catch(e => console.log('Error openening file', e)); */
    /* this.browser = this.iab.create('../assets/pdf/Telos_Ionic.pdf', '_blank', 'closebuttoncaption=Cancel,clearcache=yes,clearsessioncache=yes'); */
    console.log(this.browser);
  }


}
