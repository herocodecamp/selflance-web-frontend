import React from 'react'
import Control from '../../common/Control/Control'
import Stepper from '../../common/Stepper'
import { sellerResponse } from '../../utils/mockData';
import {HiOutlineTrash} from 'react-icons/hi'
import seller from '../../Assets/image.png'
// import { jobPost } from '../../utils/mockData';
import JobPost from '../../common/JobPost';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import avatar from  "../../Assets/svg/user.svg"
import JobResponseDataView from './JobResponseDataView';


const JobResponseView = () => {
  const location = useLocation();

  const dataJobs = location.state.sellerResponses;



  const JobResponse = ({data, ID, mainindex}) => {
    // need to extract the seller responses from te data array



    return (
      <div>
      {data.sellerResponses.map((item, index)=>(
          <>
          <JobResponseDataView item={item} ID={ID} dataJobs={dataJobs} respIndex={index} index={mainindex}/>
          </>
      ))}
      </div>


    )
    
  }


  return (

    dataJobs &&

    (<div className='min-h-screen md:p-16  m-5'>
        <Control title='Job Posted Response'/>
        <div className="mt-12">
            <Stepper />
            {/* <div>
            <h3 className="mt-8 text-2xl font-medium">
                  Posted Job Request
            </h3>
            <div className="job">
              <JobPost data={jobPost[0]}/>
            </div>
            </div> */}
            <div>
              <h3 className="mt-8 text-2xl font-medium">
                  Response from Seller
              </h3>
              <div className="jobs">
                  {dataJobs.map((item,index) => (
                      <>
                      <JobResponse key={item._id} data={item} ID={item._id} mainindex={index}/>
                      </>
                  ))}
              </div>
            </div>
        </div>
        



    </div>) 
  )
}

export default JobResponseView