import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';

@IonicPage()
@Component({
  selector: 'page-survey-list',
  templateUrl: 'survey-list.html',
})
export class SurveyList {

  survey_list = [];
  completed_survey_list = [];
  loginResponse: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage) {
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyList');
  }

  ionViewWillEnter() {
    this.getAllSurves();
  }

  getAllSurves() {
    this.loadingService.showLoading();
    this.dataService.postData("allSurveys", {
      "estateName": this.loginResponse.user.estateName,
      "userId": this.loginResponse.user._id
    }, {}).subscribe(results => {
      if (results.success == true) {
        this.survey_list = results.survey;
        this.completed_survey_list = results.completedSurveys;
        this.survey_list.forEach(element => {
          this.completed_survey_list.forEach(completedElement => {
            if (element._id == completedElement) {
              element.is_finished = true;
            }
          });
        });
        this.loadingService.hideLoading();
      }
      else {
        this.showMessage.showToastBottom(results.message);
        this.loadingService.hideLoading();
      }
    }, err => {
      console.log("err", err);
      this.loadingService.hideLoading();
      this.showMessage.showToastBottom("Unable to get Upcoming meetings, please try again.");
    });
  }

  toggleGroup(group: any) {
    group.show = !group.show;
  }

  isGroupShown(group: any) {
    return group.show;
  }

  viewSurveyDetails(survey_details) {
    let tmp_survey_details = JSON.stringify(survey_details);
    this.navCtrl.push("Surveys", { "survey_details": tmp_survey_details });
  }

}
