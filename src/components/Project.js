import React from 'react';
import '../styling/Project.css'; // Import your CSS file
import Slider from './Carousel';
import data from '../data/resume.json'

const ProjectList = () => {
  return (
    <section id="project">
        <div className="project-list">
            <Slider heading="Test" slides={data.Projects} />
        </div>
    </section>
  );
};

export default ProjectList;
