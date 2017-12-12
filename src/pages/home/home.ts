import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingService } from '../../providers/loading-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public loadingService: LoadingService) {

  }

  doLoginFunction() {
    /* this.navCtrl.setRoot("Noticeboard"); */
    this.loadingService.showLoading();
    localStorage.setItem("firstTabPage", "Noticeboard");
    /* setTimeout(function () {
    }, 3000);
    this.loadingService.hideLoading(); */
    this.navCtrl.push("Tabs");
  }

  goToRegister() {
    this.navCtrl.push("Ownership");
  }

}
