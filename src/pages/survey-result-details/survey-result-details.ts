import { Component, ViewChild } from '@angular/core';
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

  @ViewChild('doughnutCanvas') doughnutCanvas;

  doughnutChart: any;
  question_list: any = [];
  allAnswersArray: any = [];
  labelsArray: any = [];
  countsArray: any = [];
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
    this.getAllSurves(this.survey_details);
    /* this.getStaticData(); */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SurveyResultDetails');
  }

  getAllSurves(survey_details) {
    this.loadingService.showLoading();
    this.dataService.postData("surveyResults", {
      "surveyId": survey_details._id,
    }, {
        headers: {
          'authorization': this.token
        }
      }).subscribe(results => {
        console.log(results);
        if (results.success == true) {
          this.labelsArray = [];
          this.countsArray = [];
          let tmp_data_array = [];
          this.question_list = results.data;
          this.question_list.forEach(element => {
            let el_ans_array = element.answers;
            el_ans_array.forEach(ansElement => {
              let tmp_label = ansElement.optionId.optionNameChn + " | " + ansElement.optionId.optionNameEn;
              element.total_counts = ansElement.optionId.optionsChn.length;
              tmp_data_array.push({
                "label": tmp_label,
                "total_counts": element.total_counts
              });
            });
          });
          let data_array = tmp_data_array.filter((thing, index, self) =>
            index == self.findIndex((t) => (
              t.label == thing.label && t.total_counts == thing.total_counts
            ))
          )
          for (let i = 0; i < data_array.length; i++) {
            this.labelsArray.push(data_array[i].label);
            this.countsArray.push(data_array[i].total_counts);
          }
          this.setDataToChart(this.labelsArray, this.countsArray);
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

  setDataToChart(labelsArray, countsArray) {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
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
