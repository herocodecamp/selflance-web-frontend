import React from 'react'
import support from '../../Assets/support2.png'
import { useNavigate, useParams } from 'react-router-dom'



const Summary = () => {

const navigate = useNavigate();
const params = useParams();

  return (
    <div className='flex flex-col items-center my-12'>
      
        <div className='w-2/6'>
            <div className='flex flex-col items-center '>
                <img src={support} alt="" />
                <h2 className='font-bold text-2xl mt-5'>Congratulations</h2>
                <p className='mt-5 text-gray-400 text-center'>Your workplace is successfully completed and click on Continue to give your services.</p>
                <div className='flex gap-3 mt-5'>
                {/* <button type="button" className=" border border-gray-400 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 px-8  lg:px-16  text-center  w-full items-center ">
                Cancel
                
                </button> */}
                <button type="button" className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 px-8  lg:px-16  text-center  w-full items-center " onClick={()=>navigate(`/users/${params.userID}/profile`)}>
                Continue
                
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Summary