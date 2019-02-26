import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LessonViewPage } from './lesson-view';

@NgModule({
  declarations: [
    LessonViewPage,
  ],
  imports: [
    IonicPageModule.forChild(LessonViewPage),
  ],
})
export class LessonViewPageModule {}
