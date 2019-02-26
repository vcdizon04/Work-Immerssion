import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SliderPageModule } from '../pages/slider/slider.module';
import { RationalePageModule } from '../pages/rationale/rationale.module';
import { DescProgramPageModule } from '../pages/desc-program/desc-program.module';
import { DefitionTermsPageModule } from '../pages/defition-terms/defition-terms.module';
import { LessonsPageModule } from '../pages/lessons/lessons.module';
import { LessonViewPageModule } from '../pages/lesson-view/lesson-view.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SliderPageModule,
    RationalePageModule,
    DescProgramPageModule,
    DefitionTermsPageModule,
    LessonsPageModule,
    LessonViewPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
