import React from 'react'
import ProgressBar from './ProgressBar';
import { useDispatch } from "react-redux";
import { becomeSellerActions } from '../../store/BecomeSellerSlice';

const ProfessionalInfo = ({handleStep}) => {

    const dispatch = useDispatch();

    const handleSubmit =(e)=>{
        e.preventDefault()



        

        const occupation = e.target.occupation.value;

        const education = [{
            degreeTitle: e.target.degreeMajor.value,
            InstitutionName: e.target.university.value,
            from: '',
            to: e.target.uniYear.value,
            country: e.target.country.value
        }];
        
        const skills =[
            {
                skillName: e.target.skills.value,
                expLevel: e.target.skillLevel.value
            }
        ];

        const certificate = [{
            certificateTitle: e.target.certificate.value,
            institutionName: e.target.instName.value, 
            year: e.target.year.value
        }]

        const experience =[{
            companyName: '',
            yearsTotal: '', 
            from: '',
            to: ''
        }]

        dispatch(becomeSellerActions.detailsView2({occupation,skills,certificate,education,experience}));

        handleStep(3)
    }
  return (
    <div className='mt-10'>
        <ProgressBar title='Professional Info' size={80} />


        <form onSubmit={handleSubmit}>
            <div className='grid md:grid-cols-1 gap-4'>
                <label className="block">
                    <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Your Occupation</span>
                    <input type="text" name="occupation" className="peer mt-1 text-gray-500 block w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Your Occupation'/>    
                </label>
            </div>
            <div className='grid md:grid-cols-2 gap-4'>
            <label className="block mt-12">
                    <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Skills</span>
                    <input type="text"name="skills" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"/>
                        {/* <option>Choose Skill</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select> */}
                </label>
                <label className="block mt-12">
                    <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Select Experience Level</span>
                    <select type="text" name="skillLevel" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" placeholder='Write a title here'>
                        <option>Basic</option>
                        <option>Intermediate</option>
                        <option>Professional</option>
                    </select>
                </label>
            </div>
            <h3 className='flex w-full text-3xl font-medium my-10'>Education</h3>
            <div className='grid md:grid-cols-2 gap-4'>
            
                <label className="block">
                    <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Country</span>
                    <input type="text" name="country" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                        {/* <option>Country</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select> */}
                </label>
                <label className="block">
                    <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Country of College/University</span>
                    <input type="text" name="university" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                        {/* <option>Uni</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select> */}
                </label>
                
            </div>
            <div className='grid md:grid-cols-2 gap-4 mt-10'>
                <label className="block">
                    <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Major title</span>
                    <input type="text" name="degreeMajor" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                        {/* <option>Major</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select> */}
                </label>
                <label className="block">
                    <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Passing Year</span>
                    <input type="text" name="uniYear" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                        {/* <option>Year</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select> */}
                </label>
                
            </div>
            <h3 className='flex w-full text-3xl font-medium my-10'>Certification</h3>
            <div className='grid md:grid-cols-2 gap-4'>
            
                <label className="block">
                    <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Certification or Award</span>
                    <input type="text" name="certificate" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                        {/* <option>Certificate</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select> */}
                </label>
                <label className="block">
                    <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Certified by</span>
                    <input type="text" name="instName" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                        {/* <option>Google or adobe</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select> */}
                </label>
                
            </div>
            <div className='grid md:grid-cols-2 gap-4 mt-10'>
                <label className="block">
                    <span className="block w-full text-[#00538F] text-2xl font-medium pl-3">Year</span>
                    <input type="text" name="year" className="peer mt-1 block text-gray-500 w-full px-3 py-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                        {/* <option>Year</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select> */}
                </label>
            </div>
            <div className='grid grid-cols-1 gap-4'>
            
                <div className='grid lg:grid-cols-2 gap-4'>
                    <div className="col-end-4 col-span-1 gap-6 mt-12 flex-row-reverse flex gap w-full justify-between text-lg">
                        <button type="submit" className="text-white bg-[#00538F] hover:bg-[#014c82] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg py-3 px-8  lg:px-16 lg:py-6 text-center  w-full items-center " >
                                    Continue
                        
                        </button>
                    </div>
                    
                </div>
            </div>
        </form>
    </div>

  )
}

export default ProfessionalInfo