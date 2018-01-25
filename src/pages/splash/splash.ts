import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class Splash {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public splashScreen: SplashScreen) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Splash');
  }

  ionViewDidEnter() {

    /* this.splashScreen.hide();

    setTimeout(() => {
      this.viewCtrl.dismiss();
    }, 4000); */

  }

}
