// Home.js

import React from 'react';
import '../styling/About.css'; // Import a separate CSS file for styling
import img from '../images/IMG_0091.jpeg'
import aboutMe from '../data/data';


const About = () => {
  return (
    <section id = 'about'>
      <div  className=" about-container pt-20 grid grid-cols-1 gap-y-4">
        <div className="col-span-1 flex justify-center">
          <div className="relative h-1/3 w-1/3 overflow-hidden rounded-xl">
            <img src={img} alt="It Takes Time" />
          </div>
        </div>
      </div>
      <div className="about-container p-10 grid grid-cols-1 gap-y-4">
        <div className="flex justify-center col-span-1 flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-2">
                <h2 className="text-2xl flex text-justify justify-center font-bold text-white">About Me</h2>
                <p className="prose prose-sm flex-col text-white sm:prose-base">
                  {aboutMe.description}
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
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
