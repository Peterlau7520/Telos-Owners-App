import { Component, ViewChild, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { Chart } from 'chart.js';

import { LoadingService } from '../../providers/loading-service';
import { DataService } from '../../providers/data-service';
import { ShowMessage } from '../../providers/show-message';
import { HomePage } from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-survey-result-details',
  templateUrl: 'survey-result-details.html',
})
export class SurveyResultDetails {

  /* @ViewChild('doughnutCanvas') doughnutCanvas; */
  @ViewChildren('doughnutCanvas') doughnutCanvas;

  doughnutChart: any;
  question_list: any = [];
  allAnswersArray: any = [];
  allGraphsArray: any = [];
  allGraphsArray_length: any;
  survey_details: any = {};
  loginResponse: any = {};
  token: any = "";
  group_list: any = [];
  survey_list: any = [];
  questionsArray: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingService: LoadingService,
    private dataService: DataService,
    private showMessage: ShowMessage) {
    this.survey_details = JSON.parse(this.navParams.get("survey_details"));
    this.loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    this.token = localStorage.getItem("token");
    console.log(this.survey_details);
    /* this.getStaticData(); */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyResultDetails');
  }

  ionViewWillEnter() {
    this.getAllSurves(this.survey_details, this.doughnutCanvas);
  }

  getAllSurves(survey_details, doughnutCanvas) {
    this.loadingService.showLoading("my-loading-class");
    this.dataService.postData("surveyResults", {
      "surveyId": survey_details._id,
    }, {
        headers: {
          'authorization': this.token
        }
      }).subscribe(results => {
        console.log(results);
        if (results.success == true) {
          this.question_list = results.data;
          this.question_list.forEach(element => {
            let el_ans_array = element.answers;
            element.labelsArray = [];
            element.countsArray = [];
            element.optionsList = [];
            el_ans_array.forEach(ansElement => {
              let tmp_label = ansElement.optionId.optionNameChn + " | " + ansElement.optionId.optionNameEn;
              element.total_counts = ansElement.optionId.optionsChn.length;
              element.optionsList.push({
                "chnOptionsArray": ansElement.optionId.optionsChn,
                "enOptionsArray": ansElement.optionId.optionsEn,
                "optionNameChn": ansElement.optionId.optionNameChn,
                "optionNameEn": ansElement.optionId.optionNameEn
              });
            });
            element.optionsList = element.optionsList.filter((thing, index, self) =>
              index == self.findIndex((t) => (
                t.optionNameEn == thing.optionNameEn && t.optionNameChn == thing.optionNameChn
              ))
            )
            for (let i = 0; i < element.optionsList.length; i++) {
              element.labelsArray.push(element.optionsList[i].optionNameChn + " | " + element.optionsList[i].optionNameEn);
              element.countsArray.push(element.optionsList[i].chnOptionsArray.length);
            }
          });
          this.doughnutCanvas.changes.subscribe(c => {
            this.allGraphsArray = c.toArray();
            this.allGraphsArray_length = this.allGraphsArray.length;
            for (let j = 0; j < this.allGraphsArray_length; j++) {
              this.setDataToChart(this.allGraphsArray[j], this.question_list[j].labelsArray, this.question_list[j].countsArray);
            }
          });
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
        this.showMessage.showToastBottom("Unable to get Survey details, please try again.");
      });
  }

  setDataToChart(doughnutCanvas, labelsArray, countsArray) {
    this.doughnutChart = new Chart(doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: labelsArray,
        datasets: [{
          label: '# of Votes',
          data: countsArray,
          backgroundColor: [
            '#FF6384', '#FF9F40', '#FFCD56', '#4BC0C0', '#36A2EB', '#FF6384', '#FF9F40', '#FFCD56',
            '#4BC0C0', '#36A2EB', '#FF6384', '#FF9F40', '#FFCD56', '#4BC0C0', '#36A2EB'],
        }]
      }
    });
  }

  toggleGroup1(group: any, i, question_list) {
    let tmp_group_list = question_list;
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
