import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalDetails } from './personal-details';

@NgModule({
  declarations: [
    PersonalDetails,
  ],
  imports: [
    IonicPageModule.forChild(PersonalDetails),
  ],
})
export class PersonalDetailsModule {}
