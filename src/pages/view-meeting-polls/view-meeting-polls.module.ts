import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewMeetingPolls } from './view-meeting-polls';

@NgModule({
  declarations: [
    ViewMeetingPolls,
  ],
  imports: [
    IonicPageModule.forChild(ViewMeetingPolls),
  ],
})
export class ViewMeetingPollsModule {}
