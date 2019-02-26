import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Slide } from 'ionic-angular';
import { LessonViewPage } from '../lesson-view/lesson-view';
import { SliderPage } from '../slider/slider';

/**
 * Generated class for the LessonsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lessons',
  templateUrl: 'lessons.html',
})
export class LessonsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessonsPage');
  }

  goTo(type) {
    // if(type === 'Safety in the Workplace') {
    //   this.navCtrl.push(SliderPage, { type: 'Safety in the Workplace' });
    // } else if(type === 'Work Ethics') {
    //   this.navCtrl.push(SliderPage, { type: 'Work Ethics' });
    // }  else if(type === 'Workplace Right and Responsibilities') {
    //   this.navCtrl.push(LessonViewPage, { type: 'Workplace Right and Responsibilities' });
    // }

    if(type !== 'Safety in the Workplace' && type !== 'Work Ethics') {
      this.navCtrl.push(LessonViewPage, { type: type });
    } else {
      console.log(type);
      this.navCtrl.push(SliderPage, { type: type });
    }
  }

}
