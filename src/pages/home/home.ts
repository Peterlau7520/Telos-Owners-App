import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
    private showMessage: ShowMessage, ) {

  }

  doLoginFunction(form: NgForm) {
    /* localStorage.setItem("firstTabPage", "Noticeboard");
    this.navCtrl.push("Tabs"); */
    this.loadingService.showLoading();
    this.dataService.postData("login", form.value, {}).subscribe(results => {
      if (results.success == true) {
        localStorage.setItem('token', results.token);
        localStorage.setItem('loginResponse', JSON.stringify(results));
        console.log(results);
        if (results.user.registered == true) {
          localStorage.setItem("firstTabPage", "Noticeboard");
          this.navCtrl.push("Tabs").then(() => {
            this.loadingService.hideLoading();
          });

        }
        else if (results.user.registered == false) {
          if (results.user.nature == "CorporateOwner") {
            this.navCtrl.push("CompanyChop").then(() => {
              this.loadingService.hideLoading();
            });
          }
          else {
            this.addOwnerInfoData(results.user.numberOfOwners);
            this.navCtrl.push("IdVerification1").then(() => {
              this.loadingService.hideLoading();
            });
          }
        }
        else {
          this.loadingService.hideLoading();
        }
      }
      else {
        this.loadingService.hideLoading();
        this.showMessage.showToastBottom(results.message);
      }
    }, err => {
      console.log("err", err);
      this.loadingService.hideLoading();
      this.showMessage.showToastBottom("Unable to login, please try again.");
    });
  }

  addOwnerInfoData(numberOfOwners) {
    let owners_list = [];
    for (let i = 0; i < numberOfOwners; i++) {
      /* let tmp_owner_info = this.owners_list[i]; */
      if (i == 0) {
        owners_list.push({ is_visible: true, image: "" });
        /* tmp_owner_info.is_visible = true; */
      }
      else {
        /* tmp_owner_info.is_visible = false; */
        owners_list.push({ is_visible: false, image: "" });
      }
    }
    let tmp_owner_list = JSON.stringify(owners_list);
    localStorage.setItem("owners_list", tmp_owner_list);
  }

  goToRegister() {
    this.navCtrl.push("Ownership");
  }

}
