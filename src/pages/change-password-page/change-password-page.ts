import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ShowMessage } from '../../providers/show-message';

@IonicPage()
@Component({
  selector: 'page-change-password-page',
  templateUrl: 'change-password-page.html',
})
export class ChangePasswordPage {

  password_data: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public showMessage: ShowMessage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }

  dismiss() {
    this.viewCtrl.dismiss("decline");
  }

  savePassword(password_data) {
    this.showMessage.showToastBottom("Password updated successfully!");
    this.viewCtrl.dismiss("decline");
  }

}
