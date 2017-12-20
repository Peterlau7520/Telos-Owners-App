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
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyList');
  }

  ionViewWillEnter() {
    this.getAllSurves();
  }

  getAllSurves() {
    this.loadingService.showLoading();
    this.dataService.getData("allSurveys", {}).subscribe(results => {
      if (results.success == true) {
        this.survey_list = results.survey;
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
