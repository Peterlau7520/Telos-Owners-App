import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public showMessage: ShowMessage) {
    this.survey_details = JSON.parse(this.navParams.get("survey_details"));
    console.log(this.survey_details);
    this.getStaticData();
  }

  getStaticData() {
    this.survey_list = [];
    this.group_list = [];
    for (let i = 0; i < 3; i++) {
      let tmp_group_list = [];
      for (let j = 0; j < 2; j++) {
        let tmp_option_list = [];
        tmp_group_list.push({
          "group_title": "Survey Question"
        });
        for (let k = 0; k < 2; k++) {
          tmp_option_list.push({
            "cost": "",
            "description": "sample description sample description sample description sample description",
            "is_checked": false
          });
        }
        console.log(tmp_option_list);
        tmp_group_list[j].option_list = tmp_option_list;
      }
      this.survey_details.group_list = tmp_group_list;
      this.survey_details.group_list[0].show = true;
    }
    console.log(this.survey_list);
    let tmp_data = JSON.stringify(this.survey_list);
    console.log(tmp_data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Surveys');
  }

  toggleGroup1(group: any, i, survey_details) {
    console.log(group);
    let tmp_group_list = survey_details.group_list;
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
      else {

      }
    }
    this.showMessage.showToastBottom("Answers saved successfully!");
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
      let tmp_group_list = survey_details.group_list;
      i++;
      console.log(i);
      console.log(tmp_group_list.length);
      if (i < tmp_group_list.length) {
        this.toggleGroup(tmp_group_list[i]);
      }
    }

  }

}
