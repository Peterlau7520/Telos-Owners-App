import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  doLoginFunction() {
    /* this.navCtrl.setRoot("Noticeboard"); */
    localStorage.setItem("firstTabPage", "Noticeboard");
    this.navCtrl.push("Tabs");
  }

  goToRegister() {
    this.navCtrl.push("Ownership");
  }

}
