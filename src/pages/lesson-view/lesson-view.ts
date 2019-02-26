import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LessonViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lesson-view',
  templateUrl: 'lesson-view.html',
})
export class LessonViewPage {
  title = '';
  content = '';
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.title = this.navParams.get('type');
    if(this.title === 'Workplace Right and Responsibilities') {
      this.content = `
        <img src="assets/imgs/rightandresponsibilities/AFL_WebBanner_72ppi_small.png" alt="">
        <p> 
        Work Immersion is an integral part of the K to 12 Program in fully realizing its goal to produce job-ready graduates equipped with industry-based skills.
        </p>
        <p>
        DOLE strongly affirms that while work immersion contributes to the full realization of the objectives of the K to 12 Program, the safety, health, and morals of SHS students, especially those below 18 years of age, shall be a paramount area of consideration.
        </p>
        <p>
        However, in fully realizing the goal of the K to 12 Work Immersion Program, the health, safety, and morals of SHS students must not be compromised.
        Provides conditions on the Time and Hours of Work Immersion
        </p>
        <ul>
        <li> Provides that Work Immersion shall not be considered as an employment arrangement and shall in no case result in the replacement or diminution of benefits of workers in the establishment. </li>
        <li> Enumerates activities that subjects SHS students to imminent danger and are declared hazardous and prohibited by DOLE. </li>
        </ul>
        <h4><strong>Amendments to the Labor Advisory includes reiteration on the ff:</strong> ( Amendments to DOLE Labor Advisory No. 8-16) </h4>
        <ul>
        <li>Time and Hours of Work Immersion </li>
        <li> Orientation on Safety and Provision of Personal Protective Equipment</li>
        <li> Supervised Learning and Work Immersion </li>
        <li>Relaxation of Prohibited Activities (inputs from PACU) </li>
        <li>Monitoring of Establishments </li>
        </ul>
        <h4> Representation and consultation </h4>
        <p>Workers have the right to consult in the workplace when decisions are made about their health and safety. Workers have the right to describe for their views on any health and safety issues in the workplace. </p>
        <h4> Workers duty of care </h4>
        <ul>
        <li> Have reasonable care for your health and worker safety, and for the health and safety of others, while at work.  </li>
        <li> Follow the reasonable directions provided by, or on behalf of, the employer on health-related or safety-related issues. </li>
        <li> Follow the reasonable directions provided by, or on behalf of, the employer on health-related or safety-related issues.  </li>
        <li> Report an accident at the employer's workplace as soon as possible.  </li>
        <li> Intentionally or carelessly interfere with or misuse safety equipment provided by the worker's employer. </li>
        <li> Intentionally or carelessly interfere with or misuse safety equipment provided by the worker's employer. </li>
        </ul>
        <h4> Staying safe at work </h4>
        <p>Accidents and workplace injuries can be avoided if appropriate care is taken by both the employer and the employer. Workers have the responsibility to take reasonable care of their own health and safety. </p>
        <ul>
        <li>Pay attention to any training you receive, including training in your workplace induction. </li>
        <li>Talk to your supervisor if you think a job is too dangerous or difficult for you. </li>
        <li>Ask for training when you are doing a new task or using / running new tools or machinery. </li>
        <li>Asked to the supervised to make sure you are doing the job correctly. </li>
        <li>Report all the risks, close to misses and injuries (no matter how small) to your supervisor. </li>
        </ul>
      `
      console.log(this.content);
    } else   if(this.title === 'Confidentiality in the Workplace') {
      this.content = `
      <p> Confidentiality in the workplace can be defined as keeping private information, employees and clients informed. Typically, organizations have taken steps to ensure that client information remains confidential but when it comes to employee information, it may not be particularly specific. However, this process of thinking needs to be changed and employers need to understand its importance, then they can only expect their staff to treat client and customer information with care. </p>
      <h4>Importance of confidentiality at work</h4>
      <p>Confidentiality is most important. It is the worker's responsibility to treat all workplace information with care and precaution. 
      A worker should be careful enough not to disclose any information that is considered by the organization to be sensitive and confidential, to a third party, until and unless the worker consults and obtain permission from his supervisor about the same. 
      Also, a person should refrain from sharing any personal details with fellow work colleagues. It helps to maintain a professional attitude at work.</p>
      <p>A worker should know what files or materials he / she permits to access at the office and he / she must obey it. Under any circumstances these files must be shared or provided to unauthorized persons. This is because if it reaches the wrong hands, it can be considered as a breach of confidentiality and the employee may be dismissed for it. 
      Also, workerss should not discuss any business dealings with clients, outside of work.</p>
      <p>As long as the owner is concerned, any personal or professional details of the workers should be handled by gentleness. Data relating to personal details of a worker, application forms, references, health data, and salary structure should be kept properly due to its unnecessary use, it may lead to workplace discrimination. Only HR department staff who require data for certain purposes should be given access to personal files of workers.</p>
      <p>Keeping confidentiality is important for a variety of reasons. The client or customer may file legal claims against the organization if they feel that some confidential information about them is announced by the organization or its employees. This can have a negative impact on the business reputation. So it's very important for workers as well as organizations to protect workplace information</p>
      <h5>Confidential workplace information can generally be broken down into three categories:</h5>
      <h4>EMPLOYEE INFORMATION:</h4>
      <p>Many states have laws which govern the confidentiality and disposal of “personal identifying information” (e.g., an employee’s Social Security number, home address or telephone number, e-mail address, Internet identification name or password, parent’s surname prior to marriage or driver’s license number)</p>
      <h4>MANAGEMENT INFORMATION:</h4>
      <p>Confidential management information includes discussion about employee relations issues, disciplinary actions, impending layoffs/reductions-in-force, terminations, workplace investigations of employee misconduct, etc. While disclose of this information isn’t necessarily “illegal”, it is almost always counterproductive and can seriously damage the collective “psyche” of a workplace</p>
      <h4>BUSINESS INFORMATION:</h4>
      <p>We oftentimes refer to confidential business information as “proprietary information” or “trade secrets”. This refers to information that’s not generally known to the public and would not ordinarily be available to competitors except via illegal or improper means. Common examples of “trade secrets” include manufacturing processes and methods, business plans, financial data, budgets and forecasts, computer programs and data compilation, client/customer lists, ingredient formulas and recipes, membership or employee lists, supplier lists, etc. “Trade secrets” does not include information that a company voluntarily gives to potential customers, posts on its website, or otherwise freely provides to others outside of the company</p>
      `
    
    }  else if(this.title === 'Effective Conflict Resolution') {
      this.content = `
        <img src="assets/imgs/effective/K.jpg">
        <h4>What is conflict?</h4>
        <ul>
        <li>A state of incompatibility of ideas between two or more parties or individuals 
        Natural disagreement resulting from individuals or groups that differ in attitudes, beliefs, values or needs.</li>
        <li>Natural disagreement resulting from individuals or groups that differ in attitudes, beliefs, values or needs.</li>
        </ul>
        <h4>Conflict Resolution Techniques</h4>
        <p>Consider the following conflict resolution techniques to help resolve issues in your office:</p>
        <p>Listen, Then Speak Out
        Believe it or not, just listening to an employee’s issue is the first and most important step in resolving conflict. You should simply listen to all parties involved to completely understand the nature of conflict, and then start troubleshooting solutions</p>
        <p>Gather the Group
        As a leader, you’ll need to arrange a meeting with all involved parties to discuss the issue. Give everyone a chance to speak; this is a good opportunity to hear all sides and gain a full understanding of the conflict. Having a group meeting may also expedite a resolution that will satisfy everyone.</p>
        <p>Be Impartial
        Don’t take sides! In a leadership position, you shouldn’t display any sort of opinion that favors one person over another. If you are partial towards one person, try to access the situation from all sides to come up with a fair and reasonable solution</p>
        <p>Do Not Postpone Conflict Resolution
        Address the conflict immediately. Otherwise, the situation could escalate and could affect employee performance. Just make sure not to address the situation too quickly or without careful consideration, as your decision will directly affect the demeanor and performance of your staff</p>
        <p>Promote Teamwork
        Encouragement and motivation are powerful. Remind your staff of successful projects that required teamwork to complete. This is one of the most effective conflict resolution techniques and will really make the employees think about the importance of working in a team</p>
        <p>Broadcast Praise
        As stated above, the power of encouragement and motivation can be multiplied when it is spread to recognize those who are modeling the teamwork and cooperation that is desired within any conflict. Try to give suitable models in these instances because behavior modeling can be risky if there are elements in the model that are undesirable.</p>
        <h5>Conflict Prevention</h5>
        <p>Conflict Prevention
        Being Open
        If we have issues, we need to express and deal with them immediately and not allow it to accumulate and dwell upon.</p>
        <p>Maintain Clear Communication
        Articulate thoughts clearly, question and clarify views.</p>
        <p>Encourage different points of view and evaluating each fairly without any personal bias
        The clear disadvantage is that it can lead us to make assumption about them and take action based on those biases</p>
        <p>Not looking for blame
        Encourage ownership of the problem and solution</p>
        <p>Demontrating respect for team members rather than resorting to blame game
        For any team to be successful it is criticalthat the team members respect each other.
        Keeping team issue within team
        Talk issues within the team, talking outside results in conflict escalation</p>                                                        


      `
    } else if(this.title === 'Discussion of Portfolio') {
      this.content = `
        <h5>Cover page</h5>
        <h4>Ply page</h4>
        <p>In this part, you may put a blank white paper without anything written.</p>
        <h5>Approval sheet</h5>
        <p>In this part, you need to indicate the names of the professor/adviser and principal in work immersion.</p>
        <h4>Acknowledgement</h4>
        <pIn this part, you may enumerate all the people you want to thank and their contribution. You may use their nicknames. No contractions and abbreviations are allowed. Either first person or third person can be used.</p>
        <h5>Table of the content</h5>
        <h5>Work immersion objectives</h5>
        <h4>Introduction:</h4>
        <ul>
          <h4>Introduction</h4>
          <p>In this part, you may give an overview of what your portfolio is all about.  You should discuss the things which are expected to be read in your manuscript. In addition, you may give an impression on what you experienced in your practice teaching/work immersion</p>
          <h4>Getting Acquainted with the Business/Office</h4>
          <p>This part contains an introduction about the business/office- its history, environment, staff and the like. Pictures with captions are also required on this part. </p>
          <h4>Goals and Objectives of the Business/Office<h4>
          <p>This part contains the goals and objectives of the business/office</p>
          <h4>Organization/Administration of the Business/Office</h4>
          <p>This part contains the organizational structure of the business/office. Pictures of the administrators and staff are mandatory.</p>
          <h4>Business/Office Environment</h4>
          <p>This part contains a discussion about your impression to the business/office environment where you were deployed.<p>
          <h4>
          Business/Office Facilities</h4>
          <p>Physical plant and other equipment and facilities of the business/office should be discussed on this page. In addition, pictures are mandatory (with caption).</p>    
        </ul>
        <h4>Narratives Report:</h4>
        <ul>
          <h4>First Day of Work Immersion</h4>
          <ul>
            <h4>Deployment Day</h4>
            <p>This part contains your experience during your deployment day. This also includes your first impression to the business/office and its staff.  More so, you may include the standard operating procedure (SOP) of your assigned work immersion place.<.p>
            <h4>Observation Week</h4>
            <p>This part contains your experience during your observation week.</p>
          </ul>
          <h4>Actual Job/Work Assignment</h4>
          <ul>
            <h4> Participation in Business/Office Work </h4>
            <p>This part contains the role or obligation given to you by your immediate supervisor. In addition, you may state your experiences as a neophyte worker and how you handled the different situations that you encountered regarding your job</p>

          </ul>
        </ul>
        <h4>Learner’s Interesting and Related Activities:</h4>
        <ul>
          <h4>Establishing Relationships</h4>
          <ul>
            <h4>Developing Rapport with the Staff</h4>
            <p>This part narrates how you established strong rapport with staff. You may tell the moments that you shared with them either positive or negative.</p>
          </ul>
          <h4>Problems Encountered</h4>
          <ul>
            <h4>Problems Observed in the Business/Office</h4>
            <p>This part contains the problems that you encountered in the business/office where you were deployed. </p>
            <h4>Problems Observed among the Staff</h4>
            <p>This part contains the problems that you encountered among the staff of the business/office where you were deployed.</p>
          </ul>
          <h4>Personal Reflection</h4>
          <ul>
            <h4>Positive Experiences in the Business/Office</h4>
            <p>On this page, you should write your positive experiences during your internship. Stories inside and outside the business/office where you were deployed may be included.</p>
            <h4>Negative Experiences in the Business/Office</h4>
            <p>On this page, you should write your negative experiences during your internship. Stories inside and outside the business/office where you were deployed may be included.</p>
            <h4>My Recommendations to the Problems Encountered</h4>
            <p>This part shows your suggestions on how to solve the existing problems of the business/office where you were deployed.</p>
          </ul>
        </ul> 
      <h4>Appendices</h4>
      <ul>
        <p>	In this page, you need to place the following: </p>
        <p>Certificate of the English Critic</p>
        <p>Resume</p>
        <p>Application Form</p>
        <p>Police Clearance</p>
        <p>Community Tax Certificates</p>
        <p>Barangay Clearance</p>
        <p>Daily Time Record</p>
      </ul>
     

      `
    } else if(this.title === 'Resume Format') {
      this.content = `
        <p>Grade 12 students must also undergo the experience of preparing the required documents for the job application. Hence, knowing how to write a simple but formal resume is a must, as it is the applicant's passport to employment. The following tips may be helpful in writing a good resume worth catching the eye of the interviewer:</p>
        <ul>
          <li>Single page is highly preferable</li>
          <li>Eliminate the objective part and other non-valuable information</li>
          <li>Highlight skills or qualifications relevant to the job by placing them at the top part</li>
          <li>Do not put closing line and applicant's signature at the end of the resume</li>
        </ul>
        <img src="assets/imgs/resume/resume-sample.png">
        <h4>RESUME MUST COMPOSED OF;</h4>
        <ul>
          <li>Picture</li>
          <li>Complete name</li>
          <li>Current address</li>
          <li>Email</li>
          <li>Cellphone </li>
          <li>Career Objective
          </li>
          <li>Skills/ Qualifications
          </li>
          <li>Educational Attainment
          </li>
          <li>Work expirience</li>
          <li>Training/ Seminars</li>
          <li>Character references</li>
        </ul>
      `
    } else if(this.title === 'Application Letter') {
      this.content = `
        <h4>APPLICATION FORMAT</h4>
        <img src="assets/imgs/application/sample-cover-letter-mechanic.jpg">
        <p>The Work Immersion Program for Senior High School aims to develop among learners life and career skills, and will prepare them to make decisions on post secondary education or employment. Through partnership building, DepEd hopes that the Partner Institutions will provide learners with work immersion opportunities, workplace or hands-on experience, and additional learning resources. </p>
        <h4>Preparing Your Letter</h4>
        <ol>
          <li>Grab a piece of paper and make two columns. In the left column write “Requirements” and in the right, “My Skills”. Read the job application carefully and become familiar with the requirements for this job. Next you will compare those to your skills and experiences on your resume.
          In the left column write down the requirements and skills needed for the job.
          In the right column write down points from your resume that fit those.
          Having these points of interest that correlate to the job will help you provide the most important information in your cover letter quickly and effectively.
          Image titled Write a Letter of Application for a Job Step 1</li>
          <li>Start your letter by adding your contact information at the top. You want to make it as easy as possible for your prospective employer to contact you and know who you are. Before you begin your letter, make sure that you have the proper letterhead.
          Make sure your document is aligned to the left.
          Include the current date, then separated by a space, add your contact information:
          Name,
          Address,
          Phone number,
          Email address,
          Personal website (if you have one),
          LinkedIn profile,
          Image titled Write a Letter of Application for a Job Step 2</li>
          <li>Include the company’s information. After you include your information, you need to include the name of the employer to whom you are applying for the job, his title, name of company and address.
          By including the contact information of the company to which you are applying, you are showing that you have taken the time to write a specific letter or application to this company, and have done your research on the hiring manager for the position.
          Doing your homework puts you ahead of a majority of applications which are clearly generic cut and paste letters, and shows you are dedicated.
          If you don’t know the name of the hiring manager, search the company’s website to see if you can find him. Go to LinkedIn, and even search Twitter. If you can’t narrow down a specific name, see if you can find the head of the department to which you are applying. If all else fails and you have no name, it’s ok to address your cover letter to the hiring manager of the department. Example: “[Department] Hiring Manager”.
          Image titled Write a Letter of Application for a Job Step 4</li>
          <li>Address your letter to the person whom you are writing. To begin your letter, you want to be formal and start with a proper address. Don’t address it to “To Whomsoever it May Concern”, as this is informal, generic, and gives the impression that you haven’t researched the company.
          Once again, if you don’t have the hiring manager’s name, a simple “Dear [Department] Hiring Manager” will do.</li>
                                                  
        </ol>
        <h4>Part 2</h4>
        <h4>Writing Your Letter</h4>
        <ol>
        <li>Write an engaging first paragraph. Employers read a lot of cover letters, and most of the time a hiring manager will scan them quickly deciding if your letter goes in the trash or the “keep” pile. Don’t bury the lead, treat your application letter like a news article.
        Open with a strong, declarative statement that informs your reader that you are excited to be applying for [the position] at [company].
        Be short and specific with what attracted you to the job. What is it about the company that you like? Give an example, and don’t be afraid to be a little conversational depending on how casual the company is.
        Show the manager that you are not only familiar with the company’s work, but that you are a good fit by writing in a similar tone to the company.
        For example: if you are applying to a company that writes news articles, try to embody a tone that is similar to those articles. Are they serious, do they add humor? If it’s a more formal company like a big marketing firm or financial institution, you might want to be more authoritative, but always be polite.
        Image titled Write a Letter of Application for a Job Step 5</li>
        <li>State where you found the position to which you are applying. Before applying, do some research and see if you know anyone at the company. It’s always better to have an in and reference, and don’t be afraid to name drop if you have the employee’s permission.
        If you don’t have a contact at the company, still be sure to include where you found the application, such as via a job site, the company’s site, in a newspaper, etc.
        Image titled Write Children's Books Step 5</li>
        <li>Explain why hiring you will benefit the employer. You don’t want to tell them why getting hired will benefit you. There’s a reason this position is open, there’s a problem that needs solving. You’re here to solve it.
        Look at your list of accomplishments and experience and find one or two examples that you can speak about. These should highlight why you will be great in the role.For example, if you see that the position needs someone who can lead a team and handle multiple projects at once, look at your accomplishments to see if you have any experience that solves that need. If you've led team members before, briefly speak to how your leadership skills increased productivity across multiple projects.
        Anytime that you can provide stats and numbers, do so. When describing why hiring you will benefit the employer, try to use stats like an increase in revenue or a cut down on costs under your leadership.
        Image titled Write a Letter of Application for a Job Step 7
        </li>
        <li>Briefly summarize your strengths, qualifications, and experience. In your second paragraph, you want to mirror the job qualifications to two or three of your abilities and experiences that show why you’re perfect for the role.
        Refer to your CV or resume, and your skills section from your outline for more explanations of your qualifications and skills.
        Look for quick anecdotes that highlight how you’ve been able to solve issues that the company you are applying for might have based on the requirements.
        Include the most relevant aspects of your career. While more recent accomplishments are a good place to start, you may have done something in the past that fits perfectly to the requirements; don’t be afraid to dig deep.
        Image titled Write Children's Books Step 11</li>
        <li>Paint a picture of yourself that’s not on your resume. A hiring manager can read your CV or resume and see what you have done in your previous jobs. You want to show the hiring manager who the person behind the accomplishments is.
        In one or two sentences, express how the company has impacted you personally. If you are applying to your dream job, chances are this company has somehow shaped your life.
        Don’t get too sappy, and keep it short. But by showing the human side of yourself with a story, you show that you’re more than just facts on a piece of paper.</li>        

        </ol>
        <h4>Part 3</h4>
        <h4>Finishing Up Your Letter</h4>
        <ol>
          <li>Briefly summarize why you’re the perfect candidate for the job in one sentence. Ending your letter of application on the right note is a very important part of your letter as it can help you land the interview.
          When you explain how you can contribute to the company, remember that you want to put yourself in the shoes of the hiring manager. It’s about how your contributions will help the company, not how the company will help you.
          Ask yourself what you would be looking for in a candidate if you were hiring.
          Image titled Write a Letter of Application for a Job Step 10</li>
          <li>Invite the hiring manager to contact you. Inform your reader that you would love the opportunity to speak further about the position and provide your contact info again.
          You can conclude your letter by thanking the hiring manager and ending with a statement like I look forward to hearing from you at your earliest convenience.
          Don’t just ask the hiring manager to contact you if he feels you are a good fit. Show some confidence (without being cocky) by telling him that you look forward to speaking further.
          Image titled Write a Letter of Application for a Job Step 11</li>
          <li>Sign off. Signing off can seem like an afterthought, or become frustrating if you don’t know what is appropriate. Use Yours sincerely or simply “Best”.
          Being too formal can hurt you here as you may come off insincere, or it may not fit the style of the rest of your letter.
          By saying something like “Best” or “Best wishes”, you show respect without sounding like you’re writing a love letter. Alternatively, something like “Cheers” may be too informal and can come off as presumptuous.
          Image titled Write a Letter of Application for a Job Step 12</li>
          <li>Write your name underneath. After you sign off, write your full name on the last line, and consider including a signature.
          If you have set up a signature on your word processor, you can insert it under your name.
          Alternatively, you can print out your letter and sign your name by hand if you wish. Although with this method, you will have to scan your letter back into your computer.A signature is not always required.</li>


        </ol>        
      `
    } else {
      this.content = `
        <h4> Barangay Clearance </h4>
        <img src="assets/imgs/requirements/BARANGAY CLEARANCE.jpg">
        <h4> Cedula </h4>
        <img src="assets/imgs/requirements/CEDULA.png">
        <h4>Police Clearance<h4>
        <img src="assets/imgs/requirements/POLICE CLEARANCE.jpg">
      `
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessonViewPage');
  }

}
