import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurveyResults } from './survey-results';

@NgModule({
  declarations: [
    SurveyResults,
  ],
  imports: [
    IonicPageModule.forChild(SurveyResults),
  ],
})
export class SurveyResultsModule {}
