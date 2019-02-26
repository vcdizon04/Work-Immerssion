import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RationalePage } from './rationale';

@NgModule({
  declarations: [
    RationalePage,
  ],
  imports: [
    IonicPageModule.forChild(RationalePage),
  ],
})
export class RationalePageModule {}
