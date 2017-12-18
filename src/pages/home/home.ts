import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage,
    public storage: Storage) {

  }

  doLoginFunction(form: NgForm) {
    this.loadingService.showLoading();
    this.dataService.postData("login", form.value, {}).subscribe(results => {
      this.loadingService.hideLoading();
      if (results.success == true) {
        this.storage.set('token', results.token);
        if (results.registered == true) {
          localStorage.setItem("firstTabPage", "Noticeboard");
          this.navCtrl.push("Tabs");
        }
      }
      else {
        this.showMessage.showToastBottom(results.message);
      }
    }, err => {
      console.log("err", err);
      this.loadingService.hideLoading();
      this.showMessage.showToastBottom("Unable to login, please try again.");
    });
  }

  goToRegister() {
    this.navCtrl.push("Ownership");
  }

}
