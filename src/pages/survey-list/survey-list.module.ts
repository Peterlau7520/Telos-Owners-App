import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurveyList } from './survey-list';

@NgModule({
  declarations: [
    SurveyList,
  ],
  imports: [
    IonicPageModule.forChild(SurveyList),
  ],
})
export class SurveyListModule {}
