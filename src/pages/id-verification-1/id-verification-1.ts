import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ShowMessage } from '../../providers/show-message';

@IonicPage()
@Component({
  selector: 'page-id-verification-1',
  templateUrl: 'id-verification-1.html',
})
export class IdVerification1 {

  license_image: any = "";
  owners_list: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, public showMessage: ShowMessage) {
    if (this.navParams.get("owners_list")) {
      console.log("navParams");
      this.owners_list = JSON.parse(this.navParams.get("owners_list"));
    }
    else {
      console.log("localStorage");
      this.owners_list = JSON.parse(localStorage.getItem("owners_list"));
    }
    console.log(this.owners_list);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad IdVerification1');
  }

  public presentActionSheet(i) {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'Load from Library',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY, i);
          }
        },
        {
          text: 'Use Camera',
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA, i);
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

  public takePicture(sourceType, i) {
    let options: CameraOptions = {
      quality: 40,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL
    }

    this.camera.getPicture(options).then((imageData) => {
      this.owners_list[i].license_image = 'data:image/png;base64,' + imageData;
    }, (err) => {
      this.showMessage.showToastBottom("Unable to get image");
    });
  }

  submitData(i) {
    console.log(i);
    if (i < this.owners_list.length - 1) {
      this.owners_list[i].is_visible = false;
      i++;
      this.owners_list[i].is_visible = true;
    }
    else {
      console.log("return");
      console.log(this.owners_list);
      this.navCtrl.push("CompanyChop");
    }
    console.log(this.owners_list.length);
  }

  goToIDVerification2() {
    this.navCtrl.push("IdVerification2");
  }

}
