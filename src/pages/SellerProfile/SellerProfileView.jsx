import React,{useState} from "react";
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

const SellerProfileView= ()=>{

        const params = useParams()

        return(<>
                <div class="mt-6 md:mt-12">
                    <div class="grid grid-cols-12 mx-2 lg:mx-16 gap-3 md:gap-5">
                        {/* Left section */}
                        <div class="col-start-1 col-span-5 md:col-span-3 border border-solid rounded-lg p-2 md:p-4 content-center items-center text-center">
                            {/* Edit and Online */}
                            <div class="flex flex-col md:flex-row flex-wrap">
                                {/* Edit */}
                                <span class="text-[10px] md:text-sm font-medium text-[#979797] inline-flex items-center">
                                    <MdOutlineEdit class="mr-1 h-[13px] w-[13px] text-[#979797]" />
                                    Edit
                                </span>
                                {/* Online */}
                                <span class="ml-2 text-[#27AE60] text-[10px] md:text-sm font-normal">

                                        <ul class="list-disc">
                                            <li class="text-start md:ml-10 lg:ml-20 xl:ml-28">Online</li>
                                        </ul>
                                </span>
                            </div>
                           {/* Avatar */}
                           <div class=""><img src={ProfilePic} alt="pic" class="inline rounded-full mt-5 h-auto w-[80px] md:w-[143px] self-center" /></div>
                           
                           <div class="mt-1 md:mt-5 space-y-1 md:space-y-2">
                                <p class="text-[#4F4F4F] text-[8px] md:text-xs font-medium opacity-80">Local Time - 4:55 PM</p>
                                <p class="text-lg md:text-3xl font-bold" >{sellerData.name}</p>
                                <p class="text-[#4F4F4F] text-xs md:text-sm font-normal opacity-80" >{sellerData.location}</p>
                           </div>
                           {/* Buttons */}
                           <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-4 md:mt-8 w-full">Contact</button>
                           <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-[8px] md:text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full mt-1 md:mt-2">Set Availability</button>

                            {/* Info List */}

                            <ul class="list-none space-y-5 md:space-y-10 text-left mt-4 md:mt-8">
                                <li>
                                    <div class="grid grid-cols-3">
                                        <div class="col-start-1 col-span-2">
                                            <h1 class="text-[10px] md:text-base font-bold">Video Introduction</h1>
                                        </div>
                                        <div class="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            <button type="button" class="w-[16.67px] h-[16.67px] bg-white rounded-full border-[#979797] border-2 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"><p class="font-black text-sm text-[#979797] mt-[-5.5px]">+</p></button>
                                        </div>
                                        <div class="col-span-full justify-start fomt-medium text-sm text-[#828282] mt-1">
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
                                    <div class="grid grid-cols-3">
                                        <div class="col-start-1 col-span-2">
                                            <h1 class="text-[10px] md:text-base font-bold">Hourly Rate</h1>
                                        </div>
                                        <div class="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            <button type="button"><img src={EditIcon} alt="" class="w-[17px] h-[17px]" /></button>
                                        </div>
                                        <div class="col-span-full justify-start text-[10px] md:text-sm text-[#828282] mt-1">
                                            {sellerData.hourlyRate}
                                        </div>
                                    </div>       
                                </li>

                                <li>
                                    <div class="grid grid-cols-3">
                                        <div class="col-start-1 col-span-2">
                                            <h1 class="text-[10px] md:text-base font-bold">Last Delivery</h1>
                                        </div>
                                        <div class="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            
                                        </div>
                                        <div class="col-span-full justify-start  text-[10px] md:text-sm text-[#828282] mt-1">
                                        {sellerData.lastDelivery}
                                        </div>
                                    </div>         
                                </li>

                                <li>
                                    <div class="grid grid-cols-3">
                                        <div class="col-start-1 col-span-2">
                                            <h1 class="text-[10px] md:text-base font-bold">Languages</h1>
                                        </div>
                                        <div class="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            <button type="button" class="w-[17px] h-[17px] text-lg md:text-2xl font-black text-[#979797]"><p class="mt-[-6.4px]">+</p></button>
                                        </div>
                                        <div class="col-span-full justify-start  text-[10px] md:text-sm text-[#828282] mt-1">
                                            <div class="flex flex-col items-start space-y-2">
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
                                    <div class="grid grid-cols-3">
                                        <div class="col-start-1 col-span-2">
                                            <h1 class="text-[10px] md:text-base font-bold">Verification</h1>
                                        </div>
                                        <div class="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            
                                        </div>
                                        <div class="col-span-full justify-start  text-[10px] md:text-sm text-[#828282] mt-1">
                                                <h1>ID: {sellerData.verification ? 'Verified':'Not Verified'}</h1>
                                        </div>
                                    </div> 
                                    
                                </li>

                                <li>
                                    <div class="grid grid-cols-3">
                                        <div class="col-start-1 col-span-2">
                                            <h1 class="text-[10px] md:text-base font-bold">Skills</h1>
                                        </div>
                                        <div class="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            <button type="button" class="w-[17px] h-[17px] text-lg md:text-2xl font-black text-[#979797]"><p class="mt-[-6.4px]">+</p></button>
                                        </div>
                                        <div class="col-span-full mt-3">
                                            <div class="flex flex-row flex-wrap gap-1 md:gap-2">
                                                {
                                                    sellerData.skills.map((item,index)=>{
                                                        return(
                                                            <div key={index} class="bg-[#F5F5F5] text-[#333333] text-xs font-normal mt-2 text-center rounded-[41px] min-h-[26px] min-w-[67px]"> <p class="p-1">{item}</p></div>
                                                        )
                                                    })
                                                }

                                            </div>
                                            
                                        </div>
                                    </div> 
                                    
                                </li>

                                <li>
                                    <div class="grid grid-cols-3">
                                        <div class="col-start-1 col-span-2">
                                            <h1 class="text-[10px] md:text-base font-bold">Education</h1>
                                        </div>
                                        <div class="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            <button type="button" class="w-[17px] h-[17px] text-lg md:text-2xl font-black text-[#979797]"><p class="mt-[-6.4px]">+</p></button>
                                        </div>
                                        {
                                            sellerData.education.map((item,index)=>{
                                                return(
                                                    <div class="col-span-full justify-start  text-[10px] md:text-sm text-[#828282] mt-1">
                                                    <div class="flex flex-col items-start space-y-1 mt-3">
                                                        <p>
                                                            {item.uniName}
                                                        </p>
                                                        <p>{item.from} - {item.to}</p>
                                                        <p class="font-medium text-black">{item.name}</p>
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }
                                        
                                    </div> 
                                    
                                </li>
                                <li>
                                <div class="grid grid-cols-3">
                                        <div class="col-start-1 col-span-2">
                                            <h1 class="text-[10px] md:text-base font-bold">Work Experience</h1>
                                        </div>
                                        <div class="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            <button type="button" class="w-[17px] h-[17px] text-lg md:text-2xl font-black text-[#979797]"><p class="mt-[-6.4px]">+</p></button>
                                        </div>
                                        {
                                            sellerData.experience.map((item,index)=>{
                                                return(
                                                    <div class="col-span-full justify-start  text-[10px] md:text-sm text-[#828282] mt-1">
                                                    <div class="flex flex-col items-start space-y-1 mt-3">
                                                        <p>
                                                            {item.company}
                                                        </p>
                                                        <p>{item.from} - {item.to}</p>
                                                        <p class="font-medium text-black">{item.years} Years Experience</p>
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }
                                        
                                    </div> 
                                </li>
                            </ul>
                            
                        </div>
                        {/* Left section ends */}


                        {/* Right section */}
                        <div class=" col-start-6 md:col-start-4 col-span-7 md:col-span-9 border border-solid rounded-lg p-2 md:p-6 mb-10">
                            {/* Rating */}
                            <div class="flex flex-row items-center">
                                   
                                    <img src={RatingStar} class="flex-initial w-[14px] md:w-[22px]" alt=""/>
                                    <img src={RatingStar} class="flex-initial ml-1 w-[14px] md:w-[22px]" alt=""/>
                                    <img src={RatingStar} class="flex-initial ml-1 w-[14px] md:w-[22px]" alt=""/>
                                    <img src={RatingStar} class="flex-initial ml-1 w-[14px] md:w-[22px]" alt=""/>
                                    <img src={RatingStar} class="flex-initial ml-1 w-[14px] md:w-[22px]" alt=""/>
                                    
                                    <p class="ml-2 md:ml-4 font-normal text-xs md:text-base">{sellerData.rating}</p>
                                    <div class="hidden lg:block text-end ml-96"><p class="text-base text-[#828282] font-medium">{sellerData.reviews} Reviews</p></div>   
                            </div>
                            {/* Name and Details */}
                            <div class="mb-2 md:mb-5">
                                <h1 class="text-[#00538F] font-bold text-lg md:text-2xl mt-2 md:mt-5">{sellerData.name}</h1>
                                <h4 class="font-bold text-xs md:text-lg mt-1">{sellerData.jobCategory}</h4>
                                <p class="md:block text-[#333333] text-[7px] md:text-sm text-left mt-1 leadig-4 md:leading-6">
                                    {sellerData.about}
                                </p>
                                
                                
                                <span class="text-[5px] md:text-sm font-medium text-[#979797] inline-flex items-center mt-1 md:mt-10">
                                        <BiTime class="text-[#979797] flex-initial mr-3" />
            
                                        Joined {sellerData.joined}
                                </span>
                                <hr class="mt-2 md:mt-10"></hr>
                            </div>

                            {/* Gigs */}
                            <div class="flex items-center justify-between">
                                <h4 class="font-bold  text-sm md:text-xl">Active Gigs</h4>
                                <button type="button" class="text-[8px] md:text-base font-medium text-[#828282] mr-2">
                                    <Link to={`/${params.userID}/gig/create`}>Create New</Link></button>

                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-3 mt-5 md:mt-10">
                                {/* 1 */}
                                {
                                    sellerData.gigs.map((item,index)=>{
                                        return(
                                            <div key={index} class="col-1 col-span-1 max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                            {/* Image */}
                                                <a href="/#">
                                                    <img class="rounded-t-lg" src={item.image} alt="" />
                                                </a>
                                                <div class="p-2 lg:p-5">
                                                    {/* Description */}
                                                <a href="/#">
                                                    <h5 class="mb-2 text-sm lg:text-lg font-bold tracking-tight text-gray-900 dark:text-white"><Link to="/users/search/:userID/gig-details">{item.title}</Link></h5>
                                                </a>
                                                
                                                <p class="mb-3 text-[10px] md:text-sm font-medium text-[#00538F] dark:text-gray-400 text-right">Starting at {item.startingRate}</p>
                                                
                                                <hr class=""/>
                                                {/* gig rating */}
                                                {/* later will ciew the stars depending upon the rating */}

                                                <div class="flex flex-row items-center mt-3">
                                                    <img src={RatingStar} class="flex-initial w-[10px] lg:w-[17.79px]" alt=""/>
                                                    <img src={RatingStar} class="flex-initial w-[10px] lg:w-[17.79px] ml-1" alt=""/>
                                                    <img src={RatingStar} class="flex-initial w-[10px] lg:w-[17.79px] ml-1" alt=""/>
                                                    <img src={RatingStar} class="flex-initial w-[10px] lg:w-[17.79px] ml-1" alt=""/>
                                                    <img src={RatingStar} class="flex-initial w-[10px] lg:w-[17.79px] ml-1" alt=""/>
                                                    <p class="text-[8px] lg:text-xs ml-2">{item.rating}</p>
                                                    <p class="text-[0px] lg:text-xs text-[#828282] ml-4">{item.reviews} Reviews</p>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })
                                }

                            </div>

                            {/* Portfolios */}
                            <div class="flex items-center justify-between mt-10">
                                <h4 class="font-bold  text-sm md:text-xl">Portfolio</h4>
                                <button type="button" class="text-[10px] md:text-base font-medium text-[#828282] mr-2">View All</button>

                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-3 mt-5 md:mt-10">
                                {/* 1 */}
                                {
                                    sellerData.portfolio.slice(0,3).map((item,index)=>{
                                        return(
                                            <div key={index} class="col-1 col-span-1 max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                            {/* Image */}
                                                    <a href="/#">
                                                        <img class="rounded-t-lg" src={item.image} alt="" />
                                                    </a>
                                                    <div class="ml-2 mt-3">
                                                        {/* Description */}
                                                    <a href="/#">
                                                        <h5 class="mb-2 text-xs lg:text-base font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                                    </a>
                                                    </div>
                                            </div>
                                        )
                                    })
                                }
                                

                            </div>

                            <hr class="mt-10" />
                            
                            <div class="hidden md:block">
                            {/* Reviews */}
                                <div class="flex justify-between mt-10">
                                    {/* Review */}
                                    <div class="flex flex-row items-center">
                                        <h4 class="font-bold  text-sm md:text-xl">Reviews ({sellerData.reviews})</h4>
                                        <img src={RatingStar} class="flex-initial w-[10px] md:w-[17.79px] h-[9px] md:h-[16.42px] ml-3 " alt=""/> <p class="text-sm ml-1">4.9</p>
                                    </div>
                                    
                                    <div>
                                        <label for="filter" class="border-none mr-2"></label>
                                        <select id="filter" class=" border-none text-xs md:text-sm font-medium text-[#828282] mr-2">
                                                            <option>Most Relevant</option>
                                                            <option>Positive Reviews</option>
                                                            <option>Negative Reviews</option>
                                                            <option>All</option>
                                        </select>
                                    </div>


                                </div>

                                {/* USer feedbacks */}
                                <Review />

                                    <div class="text-right mt-10 text-[##121F3E] underline opacity-80">
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