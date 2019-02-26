import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slider',
  templateUrl: 'slider.html',
})
export class SliderPage {
  title: String = '';
  slides: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const type = this.navParams.get('type');
    console.log(type)
    if(type === 'do') {
      this.title = "Do's";
      this.slides = [
        {
         file: 'dos/do 1.jpg',
         description: 'Do act professionally at all times.'
        }, 
        { 
          file: 'dos/DO 2.jpg',
          description: 'Do talk to your supervisor, or contact the school placement organiser if you have any concerns.'
        }, 
        {
          file: 'dos/DO 3.jpg',
          description: 'Be friendly without immediately aligning yourself with any one employee or employee group.'
        }, 
          { file: 'dos/DO4.png',description: 'Dress appropriately and adopt a similar degree of formality.'}, 
         { file: 'dos/DO5.png', description: 'Offer to help others if there’s aything you might be able to do after you finish your task.'}, 
         { file: 'dos/DO 6.jpg', description: 'Follow the organization rules and regulations.'}, 
         { file: 'dos/do7a.png', description: 'Stay positive and enjoy your work immersion.'}, 
         { file: 'dos/do8.png', description: 'Be familiarize in your work place.'}, 
         { file: 'dos/do9.jpg', description: 'Do have a good communication with the employees.'}, 
         { file: 'dos/do10.png', description: 'Acquire or improve interpersonal skills' }]
    } else if(type === 'dont') {
      this.title = "Dont's";
      this.slides = [
        { file: 'donts/dt1.jpg',description: "Don't sleep during working hours."},
        { file: 'donts/dt 2.jpg',description: "Don't be late on work."}, 
        { file: 'donts/dt3.png',description: "Dont make face and complained with the task given to you."},  
        { file: 'donts/dt 4.png',description: "Don't be afraud to asked question related to your work specially if it's important."},  
        { file: 'donts/dt 5.jpg',description: "Don't try use equipments without the authorization of the staffs."},  
        { file: 'donts/dt 6.jpg',description: "Don't use gadget during working hours."},  
        { file: 'donts/dt7.jpeg',description: "Don't combine work and personal activities including having excessive visitors at work and personal issues during work time."},  
        { file: 'donts/dt 8.jpeg',description: "Don't complain if being bored and expect to stay until the end of the working day."},  
        { file: 'donts/dt1.jpg',description: "Don't try to court favour with your boss or immediate supervisors."},  
        { file: 'donts/dt 10.jpg',description: "Don't engage in idle gossip about other colleagues or your boss or 'bad mouth' them."},  
      ]
    } else if(type === 'Safety in the Workplace') {
      this.title = 'Safety in the Workplace';
      this.slides = [
        {file: 'safetyworkplace/1b.jpg', description: 'Know the potential hazards in the work place. After knowing it, avoid the hazardous areas and situations.' , title: 'Be aware of your Surrounding' },
        {file: 'safetyworkplace/2a.jpg' , description: 'To avoid back problems, keep your shoulder and hips in line. Also, use a proper posture to prevent back problems to avoid injuries, use ergonomics furniture and safety equipment to easy to teach.', title: 'Keep the right position of your body to protect your back' },
        {file: 'safetyworkplace/3.jpg', description: 'Taking regular break time can help you to rest for a while to regain your energy. Taking difficulty task and with proper concentration is the best to stay alert.', title: 'Take regular break' },
        {file: 'safetyworkplace/4.jpg', description: 'Follow the proper precaution of the tools, do not shortcut the instruction. In addition, shortcut is most leading reason why there are many employees are injured and had accident. Therefore, using the tools with proper precaution can less the possible accident in the workplace.', title: 'Tool and machines must use properly'},
        {file: 'safetyworkplace/5.jpg', description: 'In case of an emergency, you will need to hurry, easy access to the exits. It is also recommended to keep clear access to the device shutoffs in case you need to quickly stop them from working.', title: 'Keep the emergency exits convenient'},
        {file: 'safetyworkplace/6a.png', description: 'To the supervisor information in the workplace about the safeness and hazard risk they must know by the supervisor. They are obligated to ensure the safeness of their employees to have a safe environment and taking care the dangerous condition in the work place.', title: 'Report dangerous (harmful) condition' },
        {file: 'safetyworkplace/7.jpg', description: 'Use wheelbarrow, conveyor belt, crank or forklift to save a time to lift something that is really heavy during your workday.', title: 'Use mechanical aids wherever possible'},
        {file: 'safetyworkplace/8.jpg', description: 'If you do not have the proper safety equipment for a job, you can get injured. Depending on work, equipment such as earplugs, earmuffs, hard hats, glass mirrors, gloves or a full-face mask greatly reduces the risk of damage to the workplace.', title: 'Wear the Correct Safety Equipment'}
      ]
    } else {
      this.title = 'Work Ethics';
      this.slides = [
        {file: 'work ethics pictures/1) attendance/Colorful-hands-raised-Image-Credit-Free-Range-Stock-Jack-Moreh-New.png', title: 'Attendace', description: 'Attendance has a large impact on individal and team success.Absenteeism can also profoundly impact job performance and retention.How to maintain Good attendance? <p>Make work a high priority.Know your schedule.Make use of an alarm clock.Get enough sleep.Arrange your transportation.Inform your supervisor of an absence.<p>'},
        {file: 'work ethics pictures/2)character/emo.jpg', title: 'Character', description: `
        Loyalty,
        
        Honesty, 

        Trustworthy,
        
        Dependability, 
        
        Reliability, 
        
        Initiative, 
        
        Self-discipline, 
        
        Self-responsibility, 
        `},
        {file: 'work ethics pictures/3) team work/coworking.png', title: 'Team Work', description: `
        Respecting the rights of others, 
        
        Being a team worker, 
        
        Being coorperative, 
        
        Being assertive, 
        
        Displaying costumer service attitude, 
        
        Seeking opportunities for continuous learning, 
        
        Demonstrating mannerly behavior, 

        Respecting confidentiality 
        `},
        {file: 'work ethics pictures/4) Appearance/Office-Etiquette1.jpg', title: 'Appearance', description: `<p>“A person makes their first impression of someone in three seconds” </p> <p>Dress appropriately, Personal hygiene, Good manners  </p>`},
        {file: 'work ethics pictures/5) Attitude/attitude-clipart-canstock18127728.jpg', title: 'Attitude', description: `
        Demonstrating a positive attitude, 

        Appearing self confident, 
        
        Having realistic expectations for self 
        `},
        {file: 'work ethics pictures/6) productivity/51bd0809f793b9f5f4004c05595d74a2.jpg', title: 'Productivity', description: `
        Following safety procedures,  

        Conserving materials,  
        
        Keeping the work area neat and clean, 
        
        Following directions properly 
        `},
        {file: 'work ethics pictures/7) organizational skills/20180927-autism-event.png', title: 'Organizational Skills', description: `
        Preparing for assignments at home, 

        Prioritize- what’s most important?, 
        
        Set timetables-list what you have achieved and what is still pending, 
        
        Spend time wisely 
        `},
        {file: 'work ethics pictures/8) communication skills/kisspng-businessperson-meeting-clip-art-teamwork-5acd09f6557889.7938610515233868703501.jpg', title: 'Communication Skills', description: `
        Verbal or nonverbal must be clear, 

        To the point, 
        
        Empathetic, 
        
        We must always treat others as we would like others to treat us 
        `},
        {file: 'work ethics pictures/9) cooperation/download (2).png', title: 'Cooperation', description: `
        Developing good working relationships, 

        Following the chain of command, 
        
        Good at conflict management, 
        
        Being a good problem solver 
        `},
        {file: 'work ethics pictures/10) respect/img14.png', title: 'Respect', description: `
        Work to the best of your ability, 

        Do what’s asked the first time, 
        
        Accept and acknowledge an individuals talents and knowledge 
        `},


      ]
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderPage');
  }

}
