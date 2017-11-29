import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PastMeetings } from './past-meetings';

@NgModule({
  declarations: [
    PastMeetings,
  ],
  imports: [
    IonicPageModule.forChild(PastMeetings),
  ],
})
export class PastMeetingsModule {}
