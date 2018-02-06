import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpcomingMeetings } from './upcoming-meetings';

@NgModule({
  declarations: [
    UpcomingMeetings,
  ],
  imports: [
    IonicPageModule.forChild(UpcomingMeetings),
  ],
})
export class UpcomingMeetingsModule {}
