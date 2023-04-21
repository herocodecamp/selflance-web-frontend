import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



const StepperView = () => {


    const arr = ['posted','running','completed','response']


    const [current, setCurrent] = useState('posted')
    const navigate = useNavigate();

    const postsData = useSelector(state=>state.JobPost.userJobPosts)
    const userID = useSelector(state=>state.Auth.userId)

  // data containing the responses from the seller

  const respondedJob = postsData.map((item)=>{
    return item.sellerResponses.length !== 0 ? item : null
    
  })

  // data containin the job applied but not being responded 

   const noresponseJob = postsData.map((item)=>{
    return item.sellerResponses.length === 0 ? item : null
    
  })





    const handleResponseData=()=>{
        setCurrent(arr[3])

        navigate('/job_posts/responses',{
            state: {
                sellerResponses: respondedJob
            }})

    }

    const handleJobListData=()=>{
        setCurrent(arr[0])

        navigate(`/job_posts/${userID}/list`)

    }

  return (
    postsData && (
    <div className='hidden lg:block'>
        <ol className="flex items-center w-full gap-16 text-gray-400 font-medium text-center bg-gray-100 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <li className={`relative flex items-center px-8 py-3 cursor-pointer ${current ==='posted' ? "bg-[#00538F] text-white rounded-lg" : "" }`}>
                <button onClick={handleJobListData}>
                Posted Jobs
                </button>
                
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs scale-75 text-black bg-white border-2 border-white rounded-full top-2 right-2 dark:border-gray-900">{postsData.length}</div>
            </li>
            <li className={`relative flex items-center cursor-pointer px-8 py-3 ${current ==='running' ? "bg-[#00538F] text-white rounded-lg" : "" }`}>
                <button onClick={()=>setCurrent(arr[1])}>
                    Running Post
                </button>
               
                
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs scale-75 text-gray-100 bg-gray-500 rounded-full top-2 right-2 dark:border-gray-900">{noresponseJob ? noresponseJob.length : 0}</div>
                
            </li>
            <li className={`relative flex items-center cursor-pointer px-8 py-3 ${current ==='completed' ? "bg-[#00538F] text-white rounded-lg" : "" }`}>
                <button onClick={()=>setCurrent(arr[2])}>
                Completed Posts
                </button>
                
            </li>

            <li className={`relative flex items-center cursor-pointer px-8 py-3 ${current ==='response' ? "bg-[#00538F] text-white rounded-lg" : "" }`}>
                <button onClick={ handleResponseData}>
                    Job Posted Response
                </button>
                
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs scale-75 text-gray-100 bg-gray-500 rounded-full top-2 right-2 dark:border-gray-900">{respondedJob ? respondedJob.length : 0}</div>
            </li>

        </ol>

    </div>
    )
  )
}

export default StepperView