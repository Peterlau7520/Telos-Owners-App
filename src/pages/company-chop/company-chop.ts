import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ShowMessage } from '../../providers/show-message';

@IonicPage()
@Component({
  selector: 'page-company-chop',
  templateUrl: 'company-chop.html',
})
export class CompanyChop {

  license_image: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public showMessage: ShowMessage) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyChop');
  }

  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  public takePicture(sourceType) {
    let options: CameraOptions = {
      quality: 40,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL
    }

    this.camera.getPicture(options).then((imageData) => {
      this.license_image = 'data:image/png;base64,' + imageData;
      this.showMessage.showToastBottom("Uploaded successfully!");
    }, (err) => {
      this.showMessage.showToastBottom("Unable to get image");
    });
  }

  goToRegister() {
    this.navCtrl.push("Register");
  }
}
