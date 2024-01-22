// Resume.js

import React from 'react';
import ResumeSection from './ResumeSection'; // Assuming you have a ResumeSection component
import '../styling/Resume.css'
import data from '../data/resume.json'
import Skills from './Skils';

const Resume = () => {

  return (
    <section id='resume' className="bg-neutral-100">
      <div className="resume-container">
        <React.Fragment key={"Education"}>
          <ResumeSection title={"Education"} id={'EducationRs'} key={"EducationRs"} items={data.Education} />
         </React.Fragment>
         {<hr className="section-divider" />}
         <React.Fragment key={"work"}>
          <ResumeSection title={"Work"} id={'workRs'} key={"WorkRs"} items={data.Work} />
         </React.Fragment>
         {<hr className="section-divider" />}
         <React.Fragment key={"skills"}>
          <Skills title={"Skills"} id={'skillRs'} key={"skillsRs"} skills={data.Skills} />
         </React.Fragment>
      </div>
    </section>
  );
};

export default Resume;
