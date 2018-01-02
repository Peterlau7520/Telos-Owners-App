import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';
import { HomePage } from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-id-verification-1',
  templateUrl: 'id-verification-1.html',
})
export class IdVerification1 {

  license_image: any = "";
  owners_list: any = [];
  owners_list_length: any = 0;
  loginResponse: any = {};
  token: any = "";


  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera, public actionSheetCtrl: ActionSheetController, public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage) {
    if (this.navParams.get("owners_list")) {
      console.log("navParams");
      this.owners_list = JSON.parse(this.navParams.get("owners_list"));
      if (this.owners_list) {
        this.owners_list_length = this.owners_list.length;
      }
      else {
        this.owners_list_length = localStorage.getItem("owners_list_length");
        console.log("owners_list Not Found");
      }
    }
    else {
      console.log("localStorage");
      this.owners_list = JSON.parse(localStorage.getItem("owners_list"));
      if (this.owners_list) {
        this.owners_list_length = this.owners_list.length;
      }
      else {
        this.owners_list_length = localStorage.getItem("owners_list_length");
        console.log("owners_list Not Found");
      }
    }
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    this.token = localStorage.getItem("token");
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
      destinationType: this.camera.DestinationType.DATA_URL,
      correctOrientation: true
    }

    this.camera.getPicture(options).then((imageData) => {
      this.owners_list[i].image = 'data:image/png;base64,' + imageData;
    }, (err) => {
      this.showMessage.showToastBottom(" 無法獲取圖片 | Unable to get image");
    });
  }

  submitData(i) {
    console.log(i);
    if (typeof this.owners_list[i].image == "undefined" || this.owners_list[i].image == "" || this.owners_list[i].image == null) {
      this.showMessage.showToastBottom("請選擇圖片 | Please select/take an picture to upload.");
      return false;
    }
    else if (typeof this.owners_list[i].hkid == "undefined" || this.owners_list[i].hkid == "" || this.owners_list[i].hkid == null) {
      this.showMessage.showToastBottom("請輸入HKID 號碼 | Please enter the HKID number.");
      return false;
    }
    else {
      if (i < this.owners_list.length - 1) {
        this.owners_list[i].is_visible = false;
        i++;
        this.owners_list[i].is_visible = true;
      }
      else {
        this.submitAllHKIDData(this.owners_list);
        /* this.navCtrl.push("CompanyChop"); */
      }
    }
  }

  submitAllHKIDData(owners_list) {

    this.loadingService.showLoading();
    let hkidsArray = [];
    let request_data = {};
    for (let i = 0; i < owners_list.length; i++) {
      hkidsArray.push({
        "image": owners_list[i].image,
        "hkid": owners_list[i].hkid,
      });
    }

    request_data = {
      "hkids": hkidsArray,
      "account": this.loginResponse.user.account,
      "estateName": this.loginResponse.user.estateName
    }

    this.dataService.postData("saveHKID", request_data, {
      headers: {
        'authorization': this.token
      }
    }).subscribe(results => {
      console.log(request_data);
      if (results.success == true) {
        console.log(results);
        this.showMessage.showToastBottom(results.message);
        this.loadingService.hideLoading();
        localStorage.setItem("firstTabPage", "Noticeboard");
        this.navCtrl.push("Tabs");
        /* this.navCtrl.push("Register"); */
      }
      else {
        this.showMessage.showToastBottom(results.message);
        this.loadingService.hideLoading();
        if (results.message == "Invalid token" || results.message == "Please login") {
          this.navCtrl.setRoot(HomePage);
        }
      }
    }, err => {
      console.log("err", err);
      this.loadingService.hideLoading();
      this.showMessage.showToastBottom("網絡連接問題，請重試 | Unable to save HKID data, please try again.");
    });
  }

}
