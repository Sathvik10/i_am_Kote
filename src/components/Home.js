// Home.js

import React from 'react';
import '../styling/Home.css'; // Import a separate CSS file for styling
import GitHubIcon from './Icons/GithubIcon';
import LinkedInIcon from './Icons/LinkedInIcon';
import InstagramIcon from './Icons/InstagramIcon';
import { ExternalLinks } from '../data/data';

const Home = () => {
  return (
    <section id = "home">
        <div className="home-container">
        <div className="background-image"></div>
          {/* <div className="card">
              <h1>Welcome to My Website</h1>
              <p>This is a description of the content on the home page.</p>
          </div> */}
          <div className="z-10  max-w-screen-lg px-4 lg:px-0">
          <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm">
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-7xl">{"Sathvik Kote"}</h1>
            <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
              {"I am a Software Engineer by profession, currently pursing my masters at Texas A&M. I love to play football, hoping to watch FIFA 2026."}            
            </p>
            <div className="flex gap-x-4 text-neutral-100">
              {/* <Socials /> */}
              {<GitHubIcon link={ExternalLinks.github} />}
              {<LinkedInIcon link={ExternalLinks.linkedIn} />}
              {<InstagramIcon link={ExternalLinks.instagram}/>}
            </div>
            <div className="flex w-full justify-center gap-x-4">
              {/* {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none px-4 py-2 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary ? 'border-orange-500 ring-orange-500' : 'border-white ring-white',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 text-white sm:h-6 sm:w-6" />}
                </a>
              ))} */}
            </div>
          </div>
        </div>
        </div>

    </section>
  );
};

export default Home;
