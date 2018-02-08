import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Platform, ToastController, AlertController } from 'ionic-angular';

@Injectable()
export class ShowMessage {

  constructor(public http: Http, public platform: Platform, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  }

  public showToastBottom(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  public showToastTop(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  public showToastMiddle(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

  public showErrorAlert(text) {
    let alert1 = this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['OK']
    });
    alert1.present();
  }

  public showSuccessAlert(title, text) {
    let alert2 = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: ['OK']
    });
    alert2.present();
  }

  public showToastWithBtn(text) {
    let toast = this.toastCtrl.create({
      message: text,
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: "Retry"
    });
    toast.present();
  }

}
