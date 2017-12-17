import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingService } from '../../providers/loading-service';
import { AuthProvider } from '../../providers/auth/auth';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public loadingService: LoadingService,
    private authprovider: AuthProvider) {

  }

  doLoginFunction() {
    
    this.loadingService.showLoading();
    localStorage.setItem("firstTabPage", "Noticeboard")
    this.navCtrl.push("Tabs");
  }

  goToRegister() {
    this.navCtrl.push("Ownership");
  }

}
