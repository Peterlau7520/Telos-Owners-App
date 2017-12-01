import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-surveys',
  templateUrl: 'surveys.html',
})
export class Surveys {
  group_list: any = [];
  survey_list: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getStaticData();
  }

  getStaticData() {
    this.survey_list = [];
    this.group_list = [];
    for (let i = 0; i < 3; i++) {
      let tmp_group_list = [];
      this.survey_list.push({
        "survey_title": "Survey " + (i + 1),
        "is_complete": false
      });
      for (let j = 0; j < 2; j++) {
        let tmp_option_list = [];
        tmp_group_list.push({
          "group_title": "Survey Question"
        });
        for (let k = 0; k < 2; k++) {
          tmp_option_list.push({
            "cost": "",
            "description": "sample description",
            "is_checked": false
          });
        }
        console.log(tmp_option_list);
        tmp_group_list[j].option_list = tmp_option_list;
      }
      this.survey_list[i].group_list = tmp_group_list;
    }
    console.log(this.survey_list);
    let tmp_data = JSON.stringify(this.survey_list);
    console.log(tmp_data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Surveys');
  }

  toggleGroup(group: any) {
    group.show = !group.show;
  }

  isGroupShown(group: any) {
    return group.show;
  }

  submitData(group) {
    /* group.is_complete = true; */
    for (let i = 0; i < group.length; i++) {
      console.log(group[i]);
      let tmp_option_list = group[i].option_list;
      for (let j = 0; j < tmp_option_list.length; j++) {
        if (tmp_option_list[j].is_checked == true) {
          console.log("TRUE");
          group[i].is_complete = true;
        }
        else {
          console.log("FALSE");
          group[i].is_complete = false;
        }
      }
    }
    console.log(group);
  }

}
