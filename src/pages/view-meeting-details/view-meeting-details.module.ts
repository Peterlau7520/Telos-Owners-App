import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewMeetingDetails } from './view-meeting-details';

@NgModule({
  declarations: [
    ViewMeetingDetails,
  ],
  imports: [
    IonicPageModule.forChild(ViewMeetingDetails),
  ],
})
export class ViewMeetingDetailsModule {}
