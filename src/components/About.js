// Home.js

import React from 'react';
import '../styling/About.css'; // Import a separate CSS file for styling
import img from '../images/IMG_0091.jpeg'
import aboutMe from '../data/data';


const About = () => {
  return (
    <section id = 'about'>
      <div  className="about-container grid grid-cols-1 gap-y-4">
        <div className="about-image-container col-span-1 flex justify-center md:justify-start">
          <div className="relative h-100 w-100 overflow-hidden rounded-xl">
            <img src={img} alt="It Takes Time" />
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-y-6">
            <div className=" flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-2">
                <h2 className="text-2xl font-bold text-white">About me</h2>
                <p className="prose prose-sm flex-col text-gray-300 sm:prose-base">
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {aboutMe.aboutItems.map(({label, text, Icon}, idx) => (
                  <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                    {Icon && <Icon className="h-5 w-5 text-white" />}
                    <span className="text-sm font-bold text-white">{label}:</span>
                    <span className=" text-sm text-gray-300">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
