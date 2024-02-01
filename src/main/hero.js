import React, { useState, useEffect } from 'react';
import employer from './Images/employer.png';
import jobSeeker from './Images/jobSeekers.png';
import arrowL from './Images/Arrow.png';
import arrowR from './Images/arrow-1.png';
import fB from './Images/Fb.png';
import whatsapp from './Images/whatsapp.png';
import linkedln from './Images/Linkedln.png';
import instagram from './Images/instagram.png';
import Heading from './heading';

const Hero = () => {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Toggle visibility every 3 seconds
    const intervalId = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 4000);

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className='background'>
        <div className='Body'>
<Heading/>
          <div className='Cards'>
            <div className='c'>
            <div className="md:flex-shrink-0 employer-div">
              <img className="h-md: employer" src={employer} alt="Card image"/>
            </div>
            <div className="max-w-md bg-white rounded-xl overflow-hidden shadow-lg absolute inset-0 bg-opacity-75 Card"> {/* Background with opacity */}
              <div className="md:flex">
                <div className="p-8 content">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    <h2 className="font-inter text-2xl leading-10 text-right text-gray-900 opacity-100"> {/* Align text to right */}
                      For Employers
                    </h2>
                  </div>
                  <p className="text-gray-600 text-right opacity-100"> {/* Align text to right */}
                    Hire from a large pool of filtered candidates!!
                  </p>
                  <img src={arrowL} className='Arrow' alt='arrow'/>
                </div>
                </div>
                {/* <button className="btn" style={{ width: '175px', height: '39px'}}>Click me</button> */}
      
            </div>
            </div>
<div className='c'>
            <div className="md:flex-shrink-0 JobSeeker-div" style={{ left: '48%' }} >
              <img className="h-md:w-48 jobSeeker" src={jobSeeker} alt="Card image"/>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg absolute inset-0 bg-opacity-75 Card"> {/* Background with opacity */}
              <div className="md:flex">
                <div className="p-8 content-1">
                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                    <h2 className="font-inter text-2xl leading-10 text-left text-gray-900 opacity-100"> {/* Align text to left */}
                      For Job Seekers
                    </h2>
                  </div>
                  <p className="text-left opacity-100"> {/* Align text to left */}
                    Find your dream job with us!!
                  </p>
                  <img src={arrowR} className='Arrow' style={{ transform: 'rotate(180deg)' }} alt='arrow'/>
                </div>
              </div>
              </div>
              {/* <button className="btn" style={{ width: '175px', height: '39px'}}>Click me</button> */}
         
            </div>
          </div>
        </div>
        {/* Navbar on the right side */}
        <div className="navbar">
          {/* Navbar content goes here */}
          {/* Example: */}
          <ul>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
<img src={fB} alt='FaceBook'/>
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
<img src={instagram} alt='Instagram'/>
          </a>
          <a
            href="https://chat.whatsapp.com/JBQaLOOjN7yJumj4i061AE"
            target="_blank"
            rel="noopener noreferrer"
          >
<img src={whatsapp} alt='Whatsapp'/>
          </a>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
<img src={linkedln} alt='linkedln'/>
          </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
