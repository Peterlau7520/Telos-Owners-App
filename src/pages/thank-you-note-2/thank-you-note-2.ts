import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-thank-you-note-2',
  templateUrl: 'thank-you-note-2.html',
})
export class ThankYouNote2 {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankYouNote2');
  }

  dismiss() {
    this.viewCtrl.dismiss("closepoll");
  }

}
