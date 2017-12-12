import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-all-meetings',
  templateUrl: 'all-meetings.html',
})
export class AllMeetingsPage {

  license_image: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController, ) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad IdVerification1');
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
    }, (err) => {
      this.presentToast("Unable to get image");
    });
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  goToCompanyChop() {
    this.navCtrl.push("CompanyChop");
  }

  goToUpcomingMeetings() {
    this.navCtrl.push("UpcomingMeetings");
  }

  goToPastMeetings() {
    this.navCtrl.push("PastMeetings");
  }

}
