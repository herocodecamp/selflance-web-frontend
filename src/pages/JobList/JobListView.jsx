import React from 'react'
import Control from '../../common/Control/Control'
import JobPost from '../../common/JobPost';
import Stepper from '../../common/Stepper'

import { jobPost } from '../../utils/mockData';

const JobListView = () => {

  return (
    <div className='min-h-screen md:p-16  m-5'>
        <Control title='Post a Job'/>
        <div className="mt-12">
            <Stepper/>  
            <h3 className="mt-8 text-2xl font-medium">
                Total Job Post({jobPost.length})
            </h3>
            <div className="jobs">
                {jobPost.map((data) => (
                    <>
                    <JobPost key={data.key} data={data}/>
                    </>
                ))}
            </div>
        </div>
        



    </div>
  )
}

export default JobListView