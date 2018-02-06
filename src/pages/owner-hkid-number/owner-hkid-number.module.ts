import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OwnerHkidNumber } from './owner-hkid-number';

@NgModule({
  declarations: [
    OwnerHkidNumber,
  ],
  imports: [
    IonicPageModule.forChild(OwnerHkidNumber),
  ],
})
export class OwnerHkidNumberModule {}
