import React from 'react'
import jobpost from './Hirers/jobpost.png'
import arrow from './Hirers/whitearrow.png'

const Job = () => (
    <>
  <div className='post-job h-32'>
    <h1 className='text-white text-center mx-auto'>“POST JOB IN 3 EASY STEPS”</h1>
    <div className='flex my-4 text-white justify-center'>
    <p>1.)Submit Job Details</p>
    <img className='mb-4' src={arrow}/>
    <p>2.)Select Payment Method</p>
    <img className='mb-4' src={arrow}/>
    <p>3.)Job will be Posted after Verification</p>  
    </div>
  </div>

    <div className='flex'>
     <form className="w-3/5 bg-white job-form">
<div class="flex my-6 justify-between">
<input type="text" className="flex-1 mr-10 ml-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Company Name/Add." />
      <input type="text" className="flex-1 ml-8 mr-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Name" />
</div>

<div class="flex my-6  justify-between">
<input type="text" className="flex-1 mr-10 ml-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Email & Phone Number" />
      <input type="text" className="flex-1 ml-8 mr-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Designation" />
</div>

<div class="flex my-6 justify-between">
<input type="text" className="flex-1 mr-10 ml-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Job location" />
      <input type="text" className="flex-1 ml-8 mr-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Job Title " />
</div>

<div class="flex my-6  justify-between">
<input type="text" className="flex-1 mr-10 ml-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Work timings" />
      <input type="text" className="flex-1 ml-8 mr-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Salary" />
</div>

<div class="flex my-6  justify-between">
<input type="text" className="flex-1 mr-10 ml-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="No. of Candidates" />
      <input type="text" className="flex-1 ml-8 mr-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Education" />
</div>

<div class="flex my-6 justify-between">
<input type="text" className="flex-1 w-4/5 mx-3 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Next process after applying for candidates(eg: direct joining, Interview process" />
</div>

<div class="flex my-6 justify-between">
<input type="text" className="flex-1 mr-10 ml-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Interview Location with timings" />
      <input type="text" className="flex-1 ml-8 mr-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Upload company logo" />
</div>

<div class="flex my-6 justify-between">
<input type="text" style={{ height: '20vh' }} className="flex-1 h-25 w-4/5 mx-3 px-4 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400" placeholder="Job Description" />
</div>
<button class="mt-4 mr-6 rounded-full float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>

</form>
<div className='m-auto'>
  <img src={jobpost} alt='jobpost'/>
</div>
 
</div>
    </>
  );
  

export default Job;