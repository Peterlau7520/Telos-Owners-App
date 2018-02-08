import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Noticeboard } from './noticeboard';

@NgModule({
  declarations: [
    Noticeboard,
  ],
  imports: [
    IonicPageModule.forChild(Noticeboard),
  ],
})
export class NoticeboardModule {}
