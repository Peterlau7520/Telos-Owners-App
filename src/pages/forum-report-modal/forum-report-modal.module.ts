import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumReportModal } from './forum-report-modal';

@NgModule({
  declarations: [
    ForumReportModal,
  ],
  imports: [
    IonicPageModule.forChild(ForumReportModal),
  ],
})
export class ForumReportModalModule {}
