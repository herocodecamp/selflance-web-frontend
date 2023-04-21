import React, {useState,useEffect} from 'react'
import Control from '../../common/Control/Control'
import JobPost from '../../common/JobPost';
import Stepper from '../../common/Stepper';
import Loading from './Loading';

import { jobPost } from '../../utils/mockData';
import { useParams } from 'react-router-dom';

import { readAllJobs } from '../../api';
import { jobPostActions } from '../../store/JobPostSlice';
import { useDispatch } from 'react-redux';


const JobListView = () => {

    const [posts, setPosts] = useState(null)

    const params = useParams();
    const dispatch = useDispatch();

    useEffect(()=>{

        readAllJobs(params.userID).then((resp)=>{
            if(resp && resp.error)
                {
                    console.log(resp.error)
                }
                else
                {
                    setPosts(resp.data)

                    
                }
        })

    },[params.userID])

    posts && dispatch(jobPostActions.userJobPostData({jobData: posts}))

  return (
    
        posts ? (
            <>
            <div className='min-h-screen md:p-16  m-5'>
            <Control title='Post a Job'/>
            <div className="mt-12">
                <Stepper />  
                <h3 className="mt-8 text-2xl font-medium">
                    Total Job Post({posts.length})
                </h3>
                <div className="jobs">
                    {posts.map((data) => (
                        <>
                        <JobPost key={data._id} data={data}/>
                        </>
                    ))}
                </div>
            </div> 
            </div> </>
            ) : (<Loading />)
    
    
  )
}

export default JobListView