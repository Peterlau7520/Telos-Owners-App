import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewPastMeetingDetails } from './view-past-meeting-details';

@NgModule({
  declarations: [
    ViewPastMeetingDetails,
  ],
  imports: [
    IonicPageModule.forChild(ViewPastMeetingDetails),
  ],
})
export class ViewPastMeetingDetailsModule {}
