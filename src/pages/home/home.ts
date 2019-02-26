import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { SliderPage } from '../slider/slider';
import { RationalePage } from '../rationale/rationale';
import { DescProgramPage } from '../desc-program/desc-program';
import { DefitionTermsPage } from '../defition-terms/defition-terms';
import { LessonsPage } from '../lessons/lessons';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public view: ViewController) {

  }

  goTo(type) {
    if(type === 'do') {
      this.navCtrl.push(SliderPage, {type: 'do'});
    } else if(type === 'dont') {
      this.navCtrl.push(SliderPage, {type: 'dont'});
    } else if(type === 'rationale') {
      this.navCtrl.push(RationalePage)
    } else if(type === 'descProgram') {
      this.navCtrl.push(DescProgramPage)
    } else if(type === 'defitionTerms') {
      this.navCtrl.push(DefitionTermsPage)
    } else {
      this.navCtrl.push(LessonsPage);
    }
    
  }
 
}
