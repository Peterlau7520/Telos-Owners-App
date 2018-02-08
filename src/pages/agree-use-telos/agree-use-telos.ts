import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-agree-use-telos',
  templateUrl: 'agree-use-telos.html',
})
export class AgreeUseTelos {

  loginResponse: any = {};
  meeting_details: any = {};
  token: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    this.meeting_details = JSON.parse(localStorage.getItem("meeting_details"));
    if (this.meeting_details) {
      this.meeting_details.displayDate = moment(this.meeting_details.meeting_startTime).format('YYYY/MM/DD');
      this.meeting_details.displayTime = moment(this.meeting_details.meeting_startTime).format('HH:mm');
      this.meeting_details.meeting_proxyFullName = this.meeting_details.meeting_proxyFullName + "";
      this.meeting_details.meeting_proxyFullName = this.meeting_details.meeting_proxyFullName.split(", ", 2);;
      this.meeting_details.firstProxy = this.meeting_details.meeting_proxyFullName[0];
      this.meeting_details.secondProxy = this.meeting_details.meeting_proxyFullName[1];
      console.log(this.meeting_details.meeting_proxyFullName);
      console.log(this.meeting_details.firstProxy);
      console.log(this.meeting_details.secondProxy);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgreeUseTelos');
    /* this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    this.meeting_details = JSON.parse(localStorage.getItem("meeting_details")); */
  }

  openAgeeUseCompany() {
    /* let myModal = this.modalCtrl.create("AgreeUseCompanyChop");
    myModal.present(); */
    this.viewCtrl.dismiss("accept");
  }

  dismiss() {
    this.viewCtrl.dismiss("decline");
  }

}
