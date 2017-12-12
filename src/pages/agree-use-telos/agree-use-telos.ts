import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-agree-use-telos',
  templateUrl: 'agree-use-telos.html',
})
export class AgreeUseTelos {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgreeUseTelos');
  }

  openAgeeUseCompany() {
    /* let myModal = this.modalCtrl.create("AgreeUseCompanyChop");
    myModal.present(); */
    this.viewCtrl.dismiss("accept");
  }

  dismiss() {
    this.viewCtrl.dismiss("decline");
  }

}
