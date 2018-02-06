import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
/* import { SignaturePadPage } from '../../pages/signature-pad-page/signature-pad-page'; */

@IonicPage()
@Component({
  selector: 'page-agree-use-company-chop',
  templateUrl: 'agree-use-company-chop.html',
})
export class AgreeUseCompanyChop {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgreeUseCompanyChop');
  }

  dismiss() {
    this.viewCtrl.dismiss("decline");
  }

  acceptAgreement() {
    /* let myModal = this.modalCtrl.create(SignaturePadPage, {
      "signatures": 2,
      "current_signature": 1
    });
    myModal.present(); */
    this.viewCtrl.dismiss("accept");
  }

}
