import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThankYouNote } from './thank-you-note';

@NgModule({
  declarations: [
    ThankYouNote,
  ],
  imports: [
    IonicPageModule.forChild(ThankYouNote),
  ],
})
export class ThankYouNoteModule {}
