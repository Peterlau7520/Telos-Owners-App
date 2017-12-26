import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumDetails } from './forum-details';

@NgModule({
  declarations: [
    ForumDetails,
  ],
  imports: [
    IonicPageModule.forChild(ForumDetails),
  ],
})
export class ForumDetailsModule {}
