import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';

@IonicPage()
@Component({
  selector: 'page-surveys',
  templateUrl: 'surveys.html',
})
export class Surveys {

  group_list: any = [];
  survey_list: any = [];
  survey_details: any = {};
  questionsArray: any = [];
  loginResponse: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage) {
    this.survey_details = JSON.parse(this.navParams.get("survey_details"));
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    console.log(this.survey_details);
    /* this.getStaticData(); */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Surveys');
  }

  toggleGroup1(group: any, i, survey_details) {
    console.log(group);
    let tmp_group_list = survey_details.question;
    for (let j = 0; j < tmp_group_list.length; j++) {
      if (j == i) {
        /* tmp_group_list[j].show = true; */
        if (tmp_group_list[j].show == true) {
          tmp_group_list[j].show = false;
        }
        else {
          tmp_group_list[j].show = true;
        }
      }
      else {
        tmp_group_list[j].show = false;
      }
    }
    /* group.show = !group.show; */
  }

  toggleGroup(group: any) {
    group.show = !group.show;
  }

  isGroupShown(group: any) {
    return group.show;
  }

  submitData(group_list) {
    /* group.is_complete = true; */
    this.questionsArray = [];
    console.log(group_list);
    /* for (let i = 0; i < group.length; i++) {
      console.log(group[i]);
      let tmp_option_list = group[i].option_list;
      for (let j = 0; j < tmp_option_list.length; j++) {
        if (tmp_option_list[j].is_checked == true) {
          console.log("TRUE");
          group[i].is_complete = true;
          j++;
        }
        else {
          console.log("FALSE");
          group[i].is_complete = false;
        }
      }
    } */
    for (let l = 0; l < group_list.length; l++) {
      const element = group_list[l];
      if (!element.is_complete || element.is_complete == false) {
        console.log(element);
        this.showMessage.showToastBottom("Please answer each question.");
        return false;
      }
      console.log("element", element);
      this.questionsArray.push({ "questionId": element.optionIds[element.is_complete - 1].questionId, "optionId": element.optionIds[element.is_complete - 1]._id });
    }
    console.log("this.questionsArray", this.questionsArray);
    /* this.showMessage.showToastBottom("Answers saved successfully!"); */
    this.saveSurveyData(this.questionsArray);
  }

  saveSurveyData(questionsArray) {
    let request_data = {
      surveyId: this.survey_details._id,
      questions: questionsArray,
      userId: this.loginResponse.user._id
    }

    this.loadingService.showLoading();
    this.dataService.postData("submitSurveys", request_data, {}).subscribe(results => {
      if (results.success == true) {
        this.showMessage.showToastBottom(results.message);
        this.loadingService.hideLoading();
      }
      else {
        this.showMessage.showToastBottom(results.message);
        this.loadingService.hideLoading();
      }
    }, err => {
      console.log("err", err);
      this.loadingService.hideLoading();
      this.showMessage.showToastBottom("Unable to save survey data, please try again.");
    });
  }

  valueChanged(group, i, survey_details) {
    console.log(group);
    console.log(i);
    console.log(survey_details);
    /* for (let j = 0; j < survey_details.length; j++) {
      console.log(survey_details[j].is_complete);
    } */
    if (group.is_complete && group.is_complete > 0) {
      this.toggleGroup(group);
      let tmp_group_list = survey_details.question;
      i++;
      console.log(i);
      console.log(tmp_group_list.length);
      if (i < tmp_group_list.length) {
        this.toggleGroup(tmp_group_list[i]);
      }
    }

  }

}
