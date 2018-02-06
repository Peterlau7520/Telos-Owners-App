import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyChop } from './company-chop';

@NgModule({
  declarations: [
    CompanyChop,
  ],
  imports: [
    IonicPageModule.forChild(CompanyChop),
  ],
})
export class CompanyChopModule {}
