import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile-page',
  templateUrl: 'profile-page.html',
})
export class ProfilePage {

  user_info: any = {
    "profile_pic": "",
    "first_name": "JUSTIN",
    "last_name": "HO"
  };
  short_name: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.getUserNameFirstChar(this.user_info.first_name, this.user_info.last_name);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  getUserNameFirstChar(first_name, last_name) {
    let str = first_name + " " + last_name + "";
    this.short_name = str.split(' ').map(function (item) { return item[0] }).join('');
    console.log(this.short_name);
  }

  saveProfile(user_info) {
    console.log(user_info);
  }

  openChangePassword() {
    let myModal = this.modalCtrl.create("ChangePasswordPage");
    myModal.onDidDismiss(data => {
    });
    myModal.present();
  }

}
