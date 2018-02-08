import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Ownership } from './ownership';

@NgModule({
  declarations: [
    Ownership,
  ],
  imports: [
    IonicPageModule.forChild(Ownership),
  ],
})
export class OwnershipModule {}
