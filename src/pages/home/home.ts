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

  public nature: any;
  constructor(
    public navCtrl: NavController, 
    public loadingService: LoadingService,
    private authprovider: AuthProvider) {

  }

  doLoginFunction() {
    
    this.loadingService.showLoading();
    //check the 
    // eg. nature can be 3 types of objects, 
    //1. is {registered: true}
    //2. is {registered: false, nature: CorporateOwner}
    //3. is {registered: false, nature: Owners, numberOfOwners: 1/2/3/4..}
    //if it's case 1, we go straight to Noticeboard page
    //if it's case 2, we ask user to upload a company chop
    //if it's case 3, we ask user to upload hkid cards and input hkid (just like the registration page)m 
    // and the number of HKID input depends on the numberOfOwners field.

    localStorage.setItem("firstTabPage", "Noticeboard")
    this.navCtrl.push("Tabs");
  }

  goToRegister() {
    this.navCtrl.push("Ownership");
  }

}
