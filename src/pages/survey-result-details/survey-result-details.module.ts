import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurveyResultDetails } from './survey-result-details';

@NgModule({
  declarations: [
    SurveyResultDetails,
  ],
  imports: [
    IonicPageModule.forChild(SurveyResultDetails),
  ],
})
export class SurveyResultDetailsModule {}
