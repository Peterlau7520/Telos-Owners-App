import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurveyTypes } from './survey-types';

@NgModule({
  declarations: [
    SurveyTypes,
  ],
  imports: [
    IonicPageModule.forChild(SurveyTypes),
  ],
})
export class SurveyTypesModule {}
