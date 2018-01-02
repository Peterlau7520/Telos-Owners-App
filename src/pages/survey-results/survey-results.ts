import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';
import { HomePage } from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-survey-results',
  templateUrl: 'survey-results.html',
})
export class SurveyResults {

  past_survey_list = [];
  completed_survey_list = [];
  loginResponse: any = {};
  token: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage) {
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    this.past_survey_list = JSON.parse(this.navParams.get("past_surveys"));
    this.token = localStorage.getItem("token");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyResults');
  }

  ionViewWillEnter() {
    /* this.getAllSurves(); */
  }

  toggleGroup(group: any) {
    group.show = !group.show;
  }

  isGroupShown(group: any) {
    return group.show;
  }

  viewSurveyDetails(survey_details) {
    let tmp_survey_details = JSON.stringify(survey_details);
    this.navCtrl.push("SurveyResultDetails", { "survey_details": tmp_survey_details });
  }

}
