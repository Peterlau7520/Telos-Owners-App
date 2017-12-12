import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-owner-hkid-number',
  templateUrl: 'owner-hkid-number.html',
})
export class OwnerHkidNumber {


  total_HKIDs: any;
  current_HKID: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
    this.total_HKIDs = this.navParams.get("total_HKIDs");
    this.current_HKID = this.navParams.get("current_HKID");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OwnerHkidNumber');
  }

  dismiss() {
    this.viewCtrl.dismiss("decline");
  }

  submitHKID() {
    if (this.current_HKID >= this.total_HKIDs) {
      this.viewCtrl.dismiss("submitted");
      console.log("IF");
      return false;
    }
    else {
      console.log("else");
      this.viewCtrl.dismiss(this.current_HKID);
    }
  }

}
