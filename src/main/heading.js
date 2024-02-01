import React, { useState, useEffect } from 'react';

const Heading = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Toggle visibility every 4 seconds
    const intervalId = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 4000);

    // Clear interval on component unmount to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='h-84'>
      <h1 className={`heading ${isVisible ? 'animate-slidein' : 'animate-slideout'}`}>
        {isVisible ? 'Find, Apply, and Secure' : 'Elevate your team with Hirers! Post opportunities, find excellence, and empower your organization.'}
      </h1>
      <h1 className={`heading-1 ${isVisible ? 'animate-slideout' : 'animate-slidein'}`}>
        {isVisible ? 'Your Dream Job with Hirers in Just 2 Days!' : 'Join the journey with Hirers towards building a stronger, more accomplished team.'}
      </h1>
      <p className='tagline'>Experience the accelerated journey to your dream career with us.</p>
    </div>
  );
}

export default Heading;
