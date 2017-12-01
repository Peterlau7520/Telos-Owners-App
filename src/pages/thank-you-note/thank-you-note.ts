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
    /* this.navCtrl.push("ViewMeetingDetails").then(() => { */
    localStorage.setItem("", "");
    this.viewCtrl.dismiss();

    /* const index = this.viewCtrl.index;
    this.navCtrl.remove(index); */
    /* }); */
  }

}
