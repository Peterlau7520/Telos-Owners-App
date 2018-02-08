import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Badge } from '@ionic-native/badge';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';
import { HomePage } from '../../pages/home/home';

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
  token: any = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingService: LoadingService,
    public events: Events,
    private dataService: DataService,
    private showMessage: ShowMessage,
    public badge: Badge) {
    this.survey_details = JSON.parse(this.navParams.get("survey_details"));
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    this.token = localStorage.getItem("token");
    console.log(this.survey_details);
    /* this.getStaticData(); */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Surveys');
    this.assignValuesToCompletedSurveys(this.survey_details);
  }

  assignValuesToCompletedSurveys(survey_details) {
    let env = this;
    env.survey_details.question.forEach(function (questionEle, j) {
      env.survey_details.completed_questions.forEach(function (completedEle, k) {
        if (completedEle.questionId == questionEle._id) {
          questionEle.optionIds.forEach(function (questionOption, k) {
            console.log(completedEle);
            console.log(questionOption);
            if (completedEle.optionId == questionOption._id) {
              questionEle.is_complete = k + 1;
            }
          });
          /* questionEle.is_complete =  */
          /* questionEle.is_complete = 1; */
        }
      });
    });
  }

  toggleGroup1(group: any, i, survey_details) {
    /* console.log(group); */
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
        this.showMessage.showToastBottom("請回答每一項問題 :) | Please answer each question.");
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
      userId: this.loginResponse.user._id,
      estateName: this.loginResponse.user.estateName
    }

    this.loadingService.showLoading("my-loading-class");
    this.dataService.postData("submitSurveys", request_data, {
      headers: {
        'authorization': this.token
      }
    }).subscribe(results => {
      if (results.success == true) {
        this.showMessage.showToastBottom(results.message);
        this.survey_details.is_completed = true;
        this.dataService.postData("getBadge", {
          "estateName": this.loginResponse.user.estateName,
          "account": this.loginResponse.user.account
        }, {
            headers: {
              'authorization': this.token
            }
          }).subscribe(results => {
            let newMeetings = results.newMeetings;
            let newSurveys = results.newSurveys;
            localStorage.setItem("newMeetingsCounts", newMeetings.length);
            localStorage.setItem("newSurveysCounts", newSurveys.length);
            let new_notices = window.localStorage.getItem("new_notices");
            this.events.publish('newMeetings:updated', newMeetings.length);
            this.events.publish('newSurveys:updated', newSurveys.length);
            this.requestPermission(newMeetings.length, newSurveys.length, new_notices);
            if (results.success == true) {
              /* this.loadingService.hideLoading(); */
            }
            else {
              this.showMessage.showToastBottom(results.message);
              if (results.message == "Invalid token" || results.message == "Please login") {
                this.navCtrl.setRoot(HomePage);
              }
              /* this.loadingService.hideLoading(); */
            }
          }, err => {
            console.log("err", err);
            /* this.loadingService.hideLoading(); */
            /* this.showMessage.showToastBottom("網絡連接問題，請重試 | Unable to get Noticeboard data, please try again."); */
          });
        /* this.loadingService.showLoading("my-loading-class"); */
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
      this.showMessage.showToastBottom("網絡連接問題，請重試 | Unable to save survey data, please try again.");
    });
  }

  valueChanged(group, i, survey_details) {
    /* console.log(group);
    console.log(i);
    console.log(survey_details); */
    if (group.is_complete) {
      this.toggleGroup(group);
      let tmp_group_list = survey_details.question;
      i++;
      /* console.log(i);
      console.log(tmp_group_list.length); */
      if (i < tmp_group_list.length) {
        this.toggleGroup(tmp_group_list[i]);
      }
    }

  }

  async requestPermission(newMeetings, newSurveys, new_notices) {
    try {
      if (!newMeetings) {
        newMeetings = 0;
      }
      if (!newSurveys) {
        newSurveys = 0;
      }
      if (!new_notices) {
        new_notices = 0;
      }
      let total_badges = parseInt(newMeetings) + parseInt(newSurveys) + parseInt(new_notices);
      let hasPermission = await this.badge.hasPermission();
      console.log(hasPermission);
      if (!hasPermission) {
        let permission = await this.badge.registerPermission();
        console.log(permission);
      }
      else {
        this.badge.set(total_badges);
        this.getBadges();
      }
    } catch (e) {
      console.warn(e);
    }
  }

  async getBadges() {
    try {
      let badgeAmount = await this.badge.get();
      console.log("badgeAmount", badgeAmount);
    }
    catch (e) {
      console.warn(e);
    }
  }


}
