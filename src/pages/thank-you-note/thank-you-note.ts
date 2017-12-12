import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-thank-you-note',
  templateUrl: 'thank-you-note.html',
})
export class ThankYouNote {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThankYouNote');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
