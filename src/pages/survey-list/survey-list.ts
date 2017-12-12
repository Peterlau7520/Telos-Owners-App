import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-survey-list',
  templateUrl: 'survey-list.html',
})
export class SurveyList {
  survey_list = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getStaticData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyList');
  }

  getStaticData() {
    this.survey_list = [];
    for (let i = 0; i < 3; i++) {
      let tmp_group_list = [];
      this.survey_list.push({
        "survey_title": "Survey " + (i + 1),
        "is_complete": false
      });
    }
    console.log(this.survey_list);
    let tmp_data = JSON.stringify(this.survey_list);
    console.log(tmp_data);
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
