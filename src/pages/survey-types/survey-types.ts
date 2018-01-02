import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';
import { HomePage } from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-survey-types',
  templateUrl: 'survey-types.html',
})
export class SurveyTypes {

  survey_list = [];
  completed_survey_list = [];
  new_survey_list: any = [];
  past_survey_list: any = [];
  loginResponse: any = {};
  token: any = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage) {
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    this.token = localStorage.getItem("token");
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyTypes');
  }

  ionViewWillEnter() {
    this.getAllSurves();
  }

  getAllSurves() {
    this.loadingService.showLoading();
    this.dataService.postData("allSurveys", {
      "estateName": this.loginResponse.user.estateName,
      "userId": this.loginResponse.user._id
    }, {
        headers: {
          'authorization': this.token
        }
      }).subscribe(results => {
        if (results.success == true) {
          this.new_survey_list = [];
          this.past_survey_list = [];
          this.survey_list = results.survey;
          console.log(results);
          this.completed_survey_list = results.completedSurveys;
          console.log(this.completed_survey_list);
          this.survey_list.forEach(element => {
            element.effectiveTo = moment(element.effectiveTo).format('YYYY-MM-DD HH:mm');
            this.completed_survey_list.forEach(completedElement => {
              if (element._id == completedElement) {
                element.is_finished = true;
              }
            });
            if (element.status == "expired") {
              this.past_survey_list.push(element);
            }
            else {
              this.new_survey_list.push(element);
            }
          });
          console.log(this.past_survey_list);
          console.log(this.new_survey_list);
          this.loadingService.hideLoading();
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
        this.showMessage.showToastBottom("Unable to get Surveys, please try again.");
      });
  }

  goToNewSurveys() {
    this.navCtrl.push("SurveyList", { "new_surveys": JSON.stringify(this.new_survey_list) });
  }

  goToSurveyResults() {
    this.navCtrl.push("SurveyResults", { "past_surveys": JSON.stringify(this.past_survey_list) });
  }

}
