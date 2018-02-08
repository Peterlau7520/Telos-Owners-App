import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumPostModal } from './forum-post-modal';

@NgModule({
  declarations: [
    ForumPostModal,
  ],
  imports: [
    IonicPageModule.forChild(ForumPostModal),
  ],
})
export class ForumPostModalModule {}
