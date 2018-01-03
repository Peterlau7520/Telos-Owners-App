import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { ShowMessage } from '../../providers/show-message';

@IonicPage()
@Component({
  selector: 'page-owner-hkid-number',
  templateUrl: 'owner-hkid-number.html',
})
export class OwnerHkidNumber {


  total_HKIDs: any;
  current_HKID: any;
  hkid_val: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, private showMessage: ShowMessage) {
    this.total_HKIDs = this.navParams.get("total_HKIDs");
    this.current_HKID = this.navParams.get("current_HKID");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OwnerHkidNumber');
  }

  dismiss() {
    this.viewCtrl.dismiss("decline");
  }

  submitHKID(hkid_val) {
    if (typeof hkid_val == "undefined" || hkid_val == "" || hkid_val == null) {
      this.showMessage.showToastBottom("Please enter HKID");
      return false;
    }
    else {
      if (this.current_HKID >= this.total_HKIDs) {
        this.viewCtrl.dismiss({ "closeType": "submitted", "hkid_val": hkid_val });
        console.log("IF");
        return false;
      }
      else {
        console.log("else");
        this.viewCtrl.dismiss({ "closeType": "repeat", "hkid_val": hkid_val, "current_HKID": this.current_HKID });
        /* this.viewCtrl.dismiss(this.current_HKID); */
      }
    }
  }

}
