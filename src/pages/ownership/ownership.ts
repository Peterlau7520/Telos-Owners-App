import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-ownership',
  templateUrl: 'ownership.html',
})
export class Ownership {

  data: any = {};
  owners_list: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pushDefaultItemIntoArray();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Ownership');
  }

  pushDefaultItemIntoArray() {
    for (let i = 0; i < 1; i++) {
      this.owners_list.push({
        "owner_full_name": ""
      });
    }
  }

  removeItemFromArray(i) {
    console.log(i);
    this.owners_list.splice(i, 1);
    /* console.log(this.owners_list); */
  }

  pushItemIntoArray() {
    this.owners_list.push({
      "owner_full_name": ""
    });
  }

  goToIDVerification1() {
    for (let i = 0; i < this.owners_list.length; i++) {
      let tmp_owner_info = this.owners_list[i];
      if (i == 0) {
        tmp_owner_info.is_visible = true;
      }
      else {
        tmp_owner_info.is_visible = false;
      }
    }
    let tmp_owner_list = JSON.stringify(this.owners_list);
    localStorage.setItem("owners_list", tmp_owner_list);
    this.navCtrl.push("IdVerification1", { "owners_list": tmp_owner_list });
  }

}
