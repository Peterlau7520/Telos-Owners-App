import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';
import { HomePage } from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-change-password-page',
  templateUrl: 'change-password-page.html',
})
export class ChangePasswordPage {

  password_data: any = {};
  loginResponse: any = {};
  token: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage) {
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    this.token = localStorage.getItem("token");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
  }

  dismiss() {
    this.viewCtrl.dismiss("decline");
  }

  savePassword(password_data) {
    this.loadingService.showLoading();
    this.dataService.postData("changePassword", {
      "account": this.loginResponse.user.account,
      "oldPassword": password_data.old_password,
      "password": password_data.new_password,
      "phone": "",
      "email": ""
    }, {
        headers: {
          'authorization': this.token
        }
      }).subscribe(results => {
        if (results.success == true) {
          this.showMessage.showToastBottom(results.message);
          this.loadingService.hideLoading();
          this.viewCtrl.dismiss("decline");
        }
        else {
          this.showMessage.showToastBottom(results.message);
          this.loadingService.hideLoading();
          if (results.message == "Invalid token" || results.message == "Please login") {
            this.navCtrl.setRoot(HomePage);
          }
        }
      }, err => {
        console.log("err", err);
        this.loadingService.hideLoading();
        this.showMessage.showToastBottom("Unable to save password, please try again.");
      });
  }

}
