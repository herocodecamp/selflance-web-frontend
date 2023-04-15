import React,{useState,useEffect} from "react";
import EditIcon from "../../Assets/edit.png";
import ProfilePic from "../../Assets/avatar.png";
import RatingStar from "../../Assets/Star-filled.png";
import TimeIcon from "../../Assets/ion_time-outline.png";
import GigPic1 from "../../Assets/Active_Gig_1.png";
import GigPic2 from "../../Assets/Active_Gig_2.png";
import GigPic3 from "../../Assets/Active_Gig_3.png";
import GigPic4 from "../../Assets/Active_Gig_4.png";
import GigPic5 from "../../Assets/Active_Gig_5.png";
import PortfolioImage1 from "../../Assets/seller_portfolio-1.png";
import PortfolioImage2 from "../../Assets/seller_portfolio-2.png";
import PortfolioImage3 from "../../Assets/seller_portfolio-3.png";
import Review from "../../components/Reviews";
import { MdOutlineEdit } from "react-icons/md";
import { BiTime } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";


const sellerData={
    _id: '1',
    name: 'Hamza Saeed',
    location: "Austin Texas, USA",
    jobCategory: "UI UX Designer and Webflow Developer",
    about: `I possess a unique combination of design expertise and technical know-how that allows me to create beautiful and functional websites that not only look great, but also deliver an exceptional user experience. With years of experience in the industry, I have honed my skills in user research, wireframing, prototyping, and designing interfaces that are intuitive, accessible, and visually appealing. Additionally, my proficiency in Webflow enables me to bring my designs to life in a way that is both efficient and effective, resulting in websites that are not only stunning, but also responsive and optimised for performance. With a keen eye for detail and a passion for user-centred design, I am committed to delivering top-notch solutions that exceed client expectations and elevate the online presence of any business.
    `,
    joined: 'March 03, 2023',
    videoIntro: [],
    hourlyRate: '$14.00/hr',
    lastDelivery: '10 Days Ago',
    reviews: '49',
    rating: '4.9',
    languages: [{
                    language: 'Urdu',
                    grip: 'Fluent'
                },
                {
                    language: 'English',
                    grip: 'Fluent'
                },
                {
                    language: 'German',
                    grip: 'Fluent'
                },
            ],
    verification: true,
    skills: ['UI UX', 'Design', 'Webflow', 'Development', 'Java', 'UI/UX', 'Graphics','Figma', 'Javascript','Prototyping'],
    education: [
                    {
                        name: "Software Engineering",
                        uniName: 'COMSATS University, Islamabad',
                        from: '2017',
                        to: '2021'
                    },
                    {
                        name: "Software Engineering",
                        uniName: 'COMSATS University, Islamabad',
                        from: '2017',
                        to: '2021'
                    },
                ],
    experience: [
                    {
                        company: 'COMSATS University, Islamabad',
                        years: '4',
                        from: '2017',
                        to: '2021'

                    },
                    {
                        company: 'COMSATS University, Islamabad',
                        years: '4',
                        from: '2017',
                        to: '2021'

                    },
                
                ],
    gigs: [
        {
            title: 'I will design and develop fully responsive website',
            startingRate: '$200',
            rating: '4.9',
            gigReviews: '49',
            image: GigPic1,
            gigComments: []
        },
        {
            title: 'I will design and develop fully responsive website',
            startingRate: '$200',
            rating: '4.9',
            gigReviews: '49',
            image: GigPic2,
            gigComments: []
        },
        {
            title: 'I will design and develop fully responsive website',
            startingRate: '$200',
            rating: '4.9',
            gigReviews: '49',
            image: GigPic3,
            gigComments: []
        },
        {
            title: 'I will design and develop fully responsive website',
            startingRate: '$200',
            rating: '4.9',
            gigReviews: '49',
            image: GigPic4,
            gigComments: []
        },
        {
            title: 'I will design and develop fully responsive website',
            startingRate: '$200',
            rating: '4.9',
            gigReviews: '49',
            image: GigPic5,
            gigComments: []
        },

    ],
    portfolio: [
        {
            title: 'Chefy - Personal Chef App',
            image: PortfolioImage1,
            description:''
        },
        {
            title: 'Logo Design',
            image: PortfolioImage2,
            description:''
        },
        {
            title: 'Mobile Application design',
            image: PortfolioImage3,
            description:''
        },
        {
            title: 'Chefy - Personal Chef App',
            image: PortfolioImage1,
            description:''
        },

    ]
}

const SellerProfileView= ({user, userID, allGigs})=>{

      
        

        return(<>
                <div className="mt-6 md:mt-12">
                    <div className="grid grid-cols-12 mx-2 lg:mx-16 gap-3 md:gap-5">
                        {/* Left section */}
                        { user && 
                        (<div className="col-start-1 col-span-5 md:col-span-3 border border-solid rounded-lg p-2 md:p-4 content-center items-center text-center">
                            {/* Edit and Online */}
                            <div className="flex flex-col md:flex-row flex-wrap">
                                {/* Edit */}
                                <span className="text-[10px] md:text-sm font-medium text-[#979797] inline-flex items-center">
                                    <MdOutlineEdit className="mr-1 h-[13px] w-[13px] text-[#979797]" />
                                    Edit
                                </span>
                                {/* Online */}
                                <span className="ml-2 text-[#27AE60] text-[10px] md:text-sm font-normal">

                                        <ul className="list-disc">
                                            <li className="text-start md:ml-10 lg:ml-20 xl:ml-28">Online</li>
                                        </ul>
                                </span>
                            </div>
                           {/* Avatar */}
                           <div className=""><img src={`http://localhost:8000/${user.profileImage}`} alt="pic" className="inline rounded-full mt-5 h-auto w-[80px] md:w-[143px] self-center" /></div>
                           
                           <div className="mt-1 md:mt-5 space-y-1 md:space-y-2">
                                <p className="text-[#4F4F4F] text-[8px] md:text-xs font-medium opacity-80">Local Time - 4:55 PM</p>
                                <p className="text-lg md:text-3xl font-bold" >{user.firstname} {user.lastname}</p>
                                <p className="text-[#4F4F4F] text-xs md:text-sm font-normal opacity-80" >{sellerData.location}</p>
                           </div>
                           {/* Buttons */}
                           <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4 md:mt-8 w-full">Contact</button>
                           <button type="button" className="py-2.5 px-5 mr-2 mb-2 text-[8px] md:text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full mt-1 md:mt-2">Set Availability</button>

                            {/* Info List */}

                            <ul className="list-none space-y-5 md:space-y-10 text-left mt-4 md:mt-8">
                                <li>
                                    <div className="grid grid-cols-3">
                                        <div className="col-start-1 col-span-2">
                                            <h1 className="text-[10px] md:text-base font-bold">Video Introduction</h1>
                                        </div>
                                        <div className="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            <button type="button" className="w-[16.67px] h-[16.67px] bg-white rounded-full border-[#979797] border-2 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"><p className="font-black text-sm text-[#979797] mt-[-5.5px]">+</p></button>
                                        </div>
                                        <div className="col-span-full justify-start fomt-medium text-sm text-[#828282] mt-1">
                                            {sellerData.videoIntro.map((item,index)=>{
                                                return(
                                                    <div key={index}>
                                                        {item}
                                                    </div>
                                                )
                                                
                                            })}
                                        </div>
                                    </div> 
                                </li>

                                <li>
                                    <div className="grid grid-cols-3">
                                        <div className="col-start-1 col-span-2">
                                            <h1 className="text-[10px] md:text-base font-bold">Hourly Rate</h1>
                                        </div>
                                        <div className="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            <button type="button"><img src={EditIcon} alt="" className="w-[17px] h-[17px]" /></button>
                                        </div>
                                        <div className="col-span-full justify-start text-[10px] md:text-sm text-[#828282] mt-1">
                                            {user.hourlyRate}/hr
                                        </div>
                                    </div>       
                                </li>

                                <li>
                                    <div className="grid grid-cols-3">
                                        <div className="col-start-1 col-span-2">
                                            <h1 className="text-[10px] md:text-base font-bold">Last Delivery</h1>
                                        </div>
                                        <div className="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            
                                        </div>
                                        <div className="col-span-full justify-start  text-[10px] md:text-sm text-[#828282] mt-1">
                                        {sellerData.lastDelivery}
                                        </div>
                                    </div>         
                                </li>

                                <li>
                                    <div className="grid grid-cols-3">
                                        <div className="col-start-1 col-span-2">
                                            <h1 className="text-[10px] md:text-base font-bold">Languages</h1>
                                        </div>
                                        <div className="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            <button type="button" className="w-[17px] h-[17px] text-lg md:text-2xl font-black text-[#979797]"><p className="mt-[-6.4px]">+</p></button>
                                        </div>
                                        <div className="col-span-full justify-start  text-[10px] md:text-sm text-[#828282] mt-1">
                                            <div className="flex flex-col items-start space-y-2">
                                                {
                                                    sellerData.languages.map((lang,index)=>{
                                                        return(
                                                            <p>{lang.language} - {lang.grip}</p>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div> 
                                    
                                </li>

                                <li>
                                    <div className="grid grid-cols-3">
                                        <div className="col-start-1 col-span-2">
                                            <h1 className="text-[10px] md:text-base font-bold">Verification</h1>
                                        </div>
                                        <div className="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            
                                        </div>
                                        <div className="col-span-full justify-start  text-[10px] md:text-sm text-[#828282] mt-1">
                                                <h1>ID: {sellerData.verification ? 'Verified':'Not Verified'}</h1>
                                        </div>
                                    </div> 
                                    
                                </li>

                                <li>
                                    <div className="grid grid-cols-3">
                                        <div className="col-start-1 col-span-2">
                                            <h1 className="text-[10px] md:text-base font-bold">Skills</h1>
                                        </div>
                                        <div className="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            <button type="button" className="w-[17px] h-[17px] text-lg md:text-2xl font-black text-[#979797]"><p className="mt-[-6.4px]">+</p></button>
                                        </div>
                                        <div className="col-span-full mt-3">
                                            <div className="flex flex-row flex-wrap gap-1 md:gap-2">
                                                {
                                                    user.skills.map((item,index)=>{
                                                        return(
                                                            <div key={index} className="bg-[#F5F5F5] text-[#333333] text-xs font-normal mt-2 text-center rounded-[41px] min-h-[26px] min-w-[67px]"> <p className="p-1">{item.skillName}</p></div>
                                                        )
                                                    })
                                                }

                                            </div>
                                            
                                        </div>
                                    </div> 
                                    
                                </li>

                                <li>
                                    <div className="grid grid-cols-3">
                                        <div className="col-start-1 col-span-2">
                                            <h1 className="text-[10px] md:text-base font-bold">Education</h1>
                                        </div>
                                        <div className="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            <button type="button" className="w-[17px] h-[17px] text-lg md:text-2xl font-black text-[#979797]"><p className="mt-[-6.4px]">+</p></button>
                                        </div>
                                        {
                                            user.education.map((item,index)=>{
                                                return(
                                                    <div className="col-span-full justify-start  text-[10px] md:text-sm text-[#828282] mt-1">
                                                    <div className="flex flex-col items-start space-y-1 mt-3">
                                                        <p>
                                                            {item.InstitutionName}
                                                        </p>
                                                        <p>{item.from} - {item.to}</p>
                                                        <p className="font-medium text-black">{item.degreeTitle}</p>
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }
                                        
                                    </div> 
                                    
                                </li>
                                <li>
                                <div className="grid grid-cols-3">
                                        <div className="col-start-1 col-span-2">
                                            <h1 className="text-[10px] md:text-base font-bold">Work Experience</h1>
                                        </div>
                                        <div className="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            <button type="button" className="w-[17px] h-[17px] text-lg md:text-2xl font-black text-[#979797]"><p className="mt-[-6.4px]">+</p></button>
                                        </div>
                                        {
                                            user.experience.map((item,index)=>{
                                                return(
                                                    <div className="col-span-full justify-start  text-[10px] md:text-sm text-[#828282] mt-1">
                                                    <div className="flex flex-col items-start space-y-1 mt-3">
                                                        <p>
                                                            {item.companyName}
                                                        </p>
                                                        <p>{item.from} - {item.to}</p>
                                                        <p className="font-medium text-black">{item.yearsTotal} Years Experience</p>
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }
                                        
                                    </div> 
                                </li>
                            </ul>
                            
                        </div>)}
                        {/* Left section ends */}


                        {/* Right section */}
                        <div className=" col-start-6 md:col-start-4 col-span-7 md:col-span-9 border border-solid rounded-lg p-2 md:p-6 mb-10">
                            {/* Rating */}
                            <div className="flex flex-row items-center">
                                   
                                    <img src={RatingStar} className="flex-initial w-[14px] md:w-[22px]" alt=""/>
                                    <img src={RatingStar} className="flex-initial ml-1 w-[14px] md:w-[22px]" alt=""/>
                                    <img src={RatingStar} className="flex-initial ml-1 w-[14px] md:w-[22px]" alt=""/>
                                    <img src={RatingStar} className="flex-initial ml-1 w-[14px] md:w-[22px]" alt=""/>
                                    <img src={RatingStar} className="flex-initial ml-1 w-[14px] md:w-[22px]" alt=""/>
                                    
                                    <p className="ml-2 md:ml-4 font-normal text-xs md:text-base">{sellerData.rating}</p>
                                    <div className="hidden lg:block text-end ml-96"><p className="text-base text-[#828282] font-medium">{sellerData.reviews} Reviews</p></div>   
                            </div>
                            {/* Name and Details */}
                            <div className="mb-2 md:mb-5">
                                <h1 className="text-[#00538F] font-bold text-lg md:text-2xl mt-2 md:mt-5">{user.firstname} {user.lastname}</h1>
                                <h4 className="font-bold text-xs md:text-lg mt-1">{sellerData.jobCategory}</h4>
                                <p className="md:block text-[#333333] text-[7px] md:text-sm text-left mt-1 leadig-4 md:leading-6">
                                    {user.jobDescription}
                                </p>
                                
                                
                                <span className="text-[5px] md:text-sm font-medium text-[#979797] inline-flex items-center mt-1 md:mt-10">
                                        <BiTime className="text-[#979797] flex-initial mr-3" />
            
                                        Joined {sellerData.joined}
                                </span>
                                <hr className="mt-2 md:mt-10"></hr>
                            </div>

                            {/* Gigs */}
                            <div className="flex items-center justify-between">
                                <h4 className="font-bold  text-sm md:text-xl">Active Gigs</h4>
                                <button type="button" className="text-[8px] md:text-base font-medium text-[#828282] mr-2">
                                    <Link to={`/${userID}/gig/create`}>Create New</Link></button>

                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-3 mt-5 md:mt-10">
                                {/* 1 */}
                                {
                                    allGigs.map((item)=>{
                                        return(
                                            <div key={item._id} className="col-1 col-span-1 max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                            {/* Image */}
                                                <a href="/#">
                                                    <img className="rounded-t-lg" src={`http://localhost:8000/${item.gigImages[0].url}`} alt="" />
                                                </a>
                                                <div className="p-2 lg:p-5">
                                                    {/* Description */}
                                                <a href="/#">
                                                    <h5 className="mb-2 text-sm lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white"><Link to={`/users/search/${item._id}/gig-details`}>{item.title}</Link></h5>
                                                </a>
                                                
                                                <p className="mb-3 text-[10px] md:text-sm font-medium text-[#00538F] dark:text-gray-400 text-right">Starting at {item.packages[0].price}</p>
                                                
                                                <hr className=""/>
                                                {/* gig rating */}
                                                {/* later will ciew the stars depending upon the rating */}

                                                <div className="flex flex-row items-center mt-3">
                                                    <img src={RatingStar} className="flex-initial w-[10px] lg:w-[17.79px]" alt=""/>
                                                    <img src={RatingStar} className="flex-initial w-[10px] lg:w-[17.79px] ml-1" alt=""/>
                                                    <img src={RatingStar} className="flex-initial w-[10px] lg:w-[17.79px] ml-1" alt=""/>
                                                    <img src={RatingStar} className="flex-initial w-[10px] lg:w-[17.79px] ml-1" alt=""/>
                                                    <img src={RatingStar} className="flex-initial w-[10px] lg:w-[17.79px] ml-1" alt=""/>
                                                    <p className="text-[8px] lg:text-xs ml-2">{item.rating}</p>
                                                    <p className="text-[0px] lg:text-xs text-[#828282] ml-4"> Reviews</p>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })
                                }

                            </div>

                            {/* Portfolios */}
                            <div className="flex items-center justify-between mt-10">
                                <h4 className="font-bold  text-sm md:text-xl">Portfolio</h4>
                                <button type="button" className="text-[10px] md:text-base font-medium text-[#828282] mr-2">View All</button>

                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-3 mt-5 md:mt-10">
                                {/* 1 */}
                                {
                                    sellerData.portfolio.slice(0,3).map((item,index)=>{
                                        return(
                                            <div key={index} className="col-1 col-span-1 max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                            {/* Image */}
                                                    <a href="/#">
                                                        <img className="rounded-t-lg" src={item.image} alt="" />
                                                    </a>
                                                    <div className="ml-2 mt-3">
                                                        {/* Description */}
                                                    <a href="/#">
                                                        <h5 className="mb-2 text-xs lg:text-base font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                                    </a>
                                                    </div>
                                            </div>
                                        )
                                    })
                                }
                                

                            </div>

                            <hr className="mt-10" />
                            
                            <div className="hidden md:block">
                            {/* Reviews */}
                                <div className="flex justify-between mt-10">
                                    {/* Review */}
                                    <div className="flex flex-row items-center">
                                        <h4 className="font-bold  text-sm md:text-xl">Reviews ({sellerData.reviews})</h4>
                                        <img src={RatingStar} className="flex-initial w-[10px] md:w-[17.79px] h-[9px] md:h-[16.42px] ml-3 " alt=""/> <p className="text-sm ml-1">4.9</p>
                                    </div>
                                    
                                    <div>
                                        <label for="filter" className="border-none mr-2"></label>
                                        <select id="filter" className=" border-none text-xs md:text-sm font-medium text-[#828282] mr-2">
                                                            <option>Most Relevant</option>
                                                            <option>Positive Reviews</option>
                                                            <option>Negative Reviews</option>
                                                            <option>All</option>
                                        </select>
                                    </div>


                                </div>

                                {/* USer feedbacks */}
                                <Review />

                                    <div className="text-right mt-10 text-[##121F3E] underline opacity-80">
                                        See All Reviews
                                    </div>
                                </div>     
                        </div>

                        {/* Right section ends */}

                    </div>
                </div>
        </>)
}
export default SellerProfileView;