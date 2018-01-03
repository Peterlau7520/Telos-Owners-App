import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';
import { HomePage } from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-company-chop',
  templateUrl: 'company-chop.html',
})
export class CompanyChop {

  chop_image: any = "";
  token: any;
  loginResponse: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera, public actionSheetCtrl: ActionSheetController, public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage) {
    this.token = localStorage.getItem("token");
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    console.log(this.loginResponse);
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
      destinationType: this.camera.DestinationType.DATA_URL,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
      this.chop_image = 'data:image/png;base64,' + imageData;
      /* this.showMessage.showToastBottom("Uploaded successfully!"); */
    }, (err) => {
      this.showMessage.showToastBottom("無法選取圖片 | Unable to get image");
    });
  }

  goToRegister(chop_image) {
    if (typeof this.chop_image == "undefined" || this.chop_image == "" || this.chop_image == null) {
      this.showMessage.showToastBottom("請選擇至少一張照片 | Please select/take an picture to upload.");
      return false;
    }
    else {
      this.loadingService.showLoading("my-loading-class2");
      let request_data = {
        "account": this.loginResponse.user.account,
        "image": this.chop_image,
        "estateName": this.loginResponse.user.estateName
      };
      this.dataService.postData("saveChop", request_data, {
        headers: {
          'authorization': this.token
        }
      }).subscribe(results => {
        if (results.success == true) {
          this.showMessage.showToastBottom(results.message);

          this.loadingService.hideLoading();

          /* localStorage.setItem("firstTabPage", "Noticeboard");
          this.navCtrl.push("Tabs"); */
          /* this.navCtrl.push("Register"); */
          this.navCtrl.push("IdVerification1");
        }
        else {
          this.loadingService.hideLoading();
          this.showMessage.showToastBottom(results.message);
          if (results.message == "Invalid token" || results.message == "Please login") {
            this.navCtrl.setRoot(HomePage);
          }

        }
      }, err => {
        console.log("err", err);
        this.loadingService.hideLoading();
        this.showMessage.showToastBottom("Unable to save image, please try again.");
      });
    }
  }
}
