import React from 'react';
import employer from './Images/employer.png';
import jobSeeker from './Images/jobSeekers.png';
import arrowL from './Images/Arrow.png';
import arrowR from './Images/arrow-1.png';

const Card = ({ title, description, arrowImage, arrowRotation }) => {
  return (
    <div className="max-w-md bg-white rounded-xl overflow-hidden shadow-lg absolute inset-0 bg-opacity-75 Card">
      <div className="md:flex">
        <div className="p-8 content">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            <h2 className="font-inter text-2xl leading-10 text-right text-gray-900 opacity-100">
              {title}
            </h2>
          </div>
          <p className="text-gray-600 text-right opacity-100">
            {description}
          </p>
          <img src={arrowImage} className="Arrow" style={{ transform: `rotate(${arrowRotation}deg)` }} alt="arrow"/>
        </div>
      </div>
      <button className="btn" style={{ width: '175px', height: '39px' }}>Click me</button>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="Cards flex">
      <div className="c flex-shrink-0" >
        <div className="md:flex-shrink-0 employer-div">
          <img className="h-md: employer" src={employer} alt="Card image"/>
        </div>
        <Card
          title="For Employers"
          description="Hire from a large pool of filtered candidates!!"
          arrowImage={arrowL}
          arrowRotation={0}
        />
      </div>
      <div className="c">
        <div className="JobSeeker-div">
          <img className="h-md:w-48 jobSeeker" src={jobSeeker} alt="Card image"/>
        </div>
        <Card
          title="For Job Seekers"
          description="Find your dream job with us!!"
          arrowImage={arrowR}
          arrowRotation={180}
        />
      </div>
    </div>
  );
};

export default Cards;
