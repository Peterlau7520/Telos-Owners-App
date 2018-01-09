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
    /* this.getAllSurves(); */
  }

  /* getAllSurves() {
    this.loadingService.showLoading("my-loading-class");
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
          this.completed_survey_list = results.completedSurveys;
          this.survey_list.forEach(normalSurvey => {
            normalSurvey.completed_questions = [];
            normalSurvey.is_completed = false;
            normalSurvey.effectiveTo = moment(normalSurvey.effectiveTo).format('YYYY-MM-DD HH:mm');
            this.completed_survey_list.forEach(completedSurvey => {
              if (completedSurvey.surveyId == normalSurvey._id) {
                normalSurvey.is_completed = true;
                completedSurvey.userAnswer.forEach(userAnswerEle => {
                  if (userAnswerEle.userId == this.loginResponse.user._id) {
                    normalSurvey.completed_questions.push({ "questionId": userAnswerEle.optionId.questionId, "optionNameEn": userAnswerEle.optionId.optionNameEn, "optionId": userAnswerEle.optionId._id });
                  }
                });
              }
            });
          });


          this.survey_list.forEach(element => {
            element.effectiveTo = moment(element.effectiveTo).format('YYYY-MM-DD HH:mm');
            if (element.status == "expired") {
              this.past_survey_list.push(element);
            }
            else {
              this.new_survey_list.push(element);
            }
          });

          console.log("past_survey_list", this.past_survey_list);
          console.log("new_survey_list", this.new_survey_list);
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
        this.showMessage.showToastBottom("網絡連接問題，請重試 | Unable to get Surveys, please try again.");
      });
  } */

  goToNewSurveys() {
    this.navCtrl.push("SurveyList");
  }

  goToSurveyResults() {
    this.navCtrl.push("SurveyResults");
  }

}
