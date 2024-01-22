// ResumeSection.js

import React from 'react';
import '../styling/ResumeSection.css'; // Import your custom CSS file
import Timeline from './Timeline';

const ResumeSection = ({ title, items , id }) => { 

    return(
    // <div className='container resume-section-container'>
    //     <div className='row'>
    //         <div className='col-3'>
    //             <h2>{title}</h2>
    //         </div>
    //         <div className='col-9'>
    //         {items.map((item, index) => (
    //                                 <Timeline item={item} id={index}/>
    //                             ))}
    //         </div>
    //     </div>
    // </div>
    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4" id = {"RS"+ id}>
    <div className="col-span-1 flex justify-center md:justify-start">
      <div className="relative h-max">
        <h2 className="text-xl font-bold uppercase text-neutral-800">{title}</h2>
        <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
      </div>
    </div>
    <div className="col-span-1 flex flex-col md:col-span-3">
                    {items.map((item, index) => (
                                    <Timeline item={item} id={index}/>
                                ))}
    </div>
  </div>
    );
};

export default ResumeSection;
