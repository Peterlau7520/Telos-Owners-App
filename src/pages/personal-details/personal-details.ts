import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-personal-details',
  templateUrl: 'personal-details.html',
})
export class PersonalDetails {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalDetails');
  }

  finishRegistration() {
    console.log("finishRegistration");
    this.navCtrl.setRoot(HomePage);
  }

}
