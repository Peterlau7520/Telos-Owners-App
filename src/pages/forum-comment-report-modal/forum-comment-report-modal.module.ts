import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumCommentReportModal } from './forum-comment-report-modal';

@NgModule({
  declarations: [
    ForumCommentReportModal,
  ],
  imports: [
    IonicPageModule.forChild(ForumCommentReportModal),
  ],
})
export class ForumCommentReportModalModule {}
