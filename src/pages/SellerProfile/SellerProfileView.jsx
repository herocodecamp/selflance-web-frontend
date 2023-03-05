import React from "react";
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
import Avatar1 from "../../Assets/seller_review_avatar_1.png";
import Avatar2 from "../../Assets/seller_review_avatar_2.png";
import Avatar3 from "../../Assets/seller_review_avatar_3.png";
import FlagImage from "../../Assets/seller_review_flag.png";
import LocationIcon from "../../Assets/location-icon.png"


const SellerProfileView= ()=>{
        return(<>
                <div class="flex flex-col md:flex-row mt-12">
                    <div class="grid grid-cols-12 md-4 mx-3 md:mx-16 gap-5">
                        {/* Left section */}
                        <div class="col-start-1 col-span-5 md:col-span-3 flex-col border border-solid rounded-lg p-4 content-center	justify-center items-center text-center">
                            {/* Edit and Online */}
                            <div class="flex flex-col md:flex-row">
                                {/* Edit */}
                                <span class="text-sm font-medium text-[#979797] inline-flex items-center">
                                        <img src={EditIcon} alt="" class="flex-initial mr-1 h-[13px] w-[13px]"/>
                                    Edit
                                    </span>
                                {/* Online */}
                                <span class="ml-2 md:ml-40 text-[#27AE60] text-sm font-normal">

                                        <ul class="list-disc">
                                            <li class="text-left">Online</li>
                                        </ul>
                                </span>
                            </div>
                           {/* Avatar */}
                           <span><img src={ProfilePic} alt="pic" class="flex-initial mt-5 h-[143px] w-[143px] self-center" /></span>
                           
                           <div class="mt-5 space-y-2">
                                <p class="text-[#4F4F4F] text-xs font-medium opacity-80">Local Time - 4:55 PM</p>
                                <p class="text-3xl font-bold" >Hamza Saeed</p>
                                <p class="text-[#4F4F4F] text-sm font-normal opacity-80" > Austin Texas, USA</p>
                           </div>
                           {/* Buttons */}
                           <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-8 w-full">Contact</button>
                           <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full mt-2">Set Availability</button>

                            {/* Info List */}

                            <ul class="list-none space-y-10 text-left mt-8">
                                <li>
                                    <div class="grid grid-cols-3">
                                        <div class="col-start-1 col-span-2">
                                            <h1 class="text-base font-bold">Video Introduction</h1>
                                        </div>
                                        <div class="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            <button type="button" class="w-[16.67px] h-[16.67px] bg-white rounded-full border-[#979797] border-2 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"><p class="font-black text-sm text-[#979797] mt-[-5.5px]">+</p></button>
                                        </div>
                                    </div> 
                                    </li>
                                <li>
                                    <div class="grid grid-cols-3">
                                        <div class="col-start-1 col-span-2">
                                            <h1 class="text-base font-bold">Hourly Rate</h1>
                                        </div>
                                        <div class="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            <button type="button"><img src={EditIcon} alt="" class="w-[17px] h-[17px]" /></button>
                                        </div>
                                        <div class="col-span-full justify-start fomt-medium text-sm text-[#828282] mt-1">
                                        $15.00/hr
                                        </div>
                                    </div>       
                                </li>
                                <li>
                                    <div class="grid grid-cols-3">
                                        <div class="col-start-1 col-span-2">
                                            <h1 class="text-base font-bold">Last Delivery</h1>
                                        </div>
                                        <div class="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            
                                        </div>
                                        <div class="col-span-full justify-start fomt-medium text-sm text-[#828282] mt-1">
                                        10 Days Ago
                                        </div>
                                    </div>         
                                </li>
                                <li>
                                    <div class="grid grid-cols-3">
                                        <div class="col-start-1 col-span-2">
                                            <h1 class="text-base font-bold">Languages</h1>
                                        </div>
                                        <div class="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            <button type="button" class="w-[17px] h-[17px] text-2xl font-black text-[#979797]"><p class="mt-[-6.4px]">+</p></button>
                                        </div>
                                        <div class="col-span-full justify-start fomt-medium text-sm text-[#828282] mt-1">
                                            <div class="flex flex-col items-start space-y-2">
                                                <p>Urdu - Fluent</p>
                                                <p>English - Fluent</p>
                                                <p>German - Fluent</p>
                                            </div>
                                        </div>
                                    </div> 
                                    
                                </li>
                                <li>
                                    <div class="grid grid-cols-3">
                                        <div class="col-start-1 col-span-2">
                                            <h1 class="text-base font-bold">Verification</h1>
                                        </div>
                                        <div class="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            
                                        </div>
                                        <div class="col-span-full justify-start fomt-medium text-sm text-[#828282] mt-1">
                                        ID: Verified
                                        </div>
                                    </div> 
                                    
                                </li>
                                <li>
                                    <div class="grid grid-cols-3">
                                        <div class="col-start-1 col-span-2">
                                            <h1 class="text-base font-bold">Skills</h1>
                                        </div>
                                        <div class="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            <button type="button" class="w-[17px] h-[17px] text-2xl font-black text-[#979797]"><p class="mt-[-6.4px]">+</p></button>
                                        </div>
                                        <div class="col-span-full mt-3">
                                            <div class="grid grid-cols-3 gap-2">

                                                <div class="bg-[#00538F] text-white text-sm font-normal mt-2 text-center rounded-[41px] h-[26px] w-[67px]"> <p class="mt-[1.5px]">UI UX 1</p></div>

                                                <div class="bg-[#F5F5F5] text-[#333333] text-sm font-normal mt-2 text-center rounded-[41px] h-[26px] w-[67px]"> <p class="mt-[1.5px]">Design</p></div>

                                                <div class="bg-[#F5F5F5] text-[#333333] text-sm font-normal mt-2 text-center rounded-[41px] h-[26px] w-[67px]"> <p class="mt-[1.5px]">Webflow</p></div>

                                                <div class="bg-[#F5F5F5] text-[#333333] text-sm font-normal mt-2 text-center rounded-[41px] h-[26px] w-[67px]"> <p class="mt-[1.5px]">Development</p></div>

                                                <div class="bg-[#F5F5F5] text-[#333333] text-sm font-normal mt-2 text-center rounded-[41px] h-[26px] w-[67px]"> <p class="mt-[1.5px]">Java</p></div>

                                                <div class="bg-[#F5F5F5] text-[#333333] text-sm font-normal mt-2 text-center rounded-[41px] h-[26px] w-[67px]"> <p class="mt-[1.5px]">UI UX 1</p></div>

                                                <div class="bg-[#F5F5F5] text-[#333333] text-sm font-normal mt-2 text-center rounded-[41px] h-[26px] w-[67px]"> <p class="mt-[1.5px]">UI/UX</p></div>

                                                <div class="bg-[#F5F5F5] text-[#333333] text-sm font-normal mt-2 text-center rounded-[41px] h-[26px] w-[67px]"> <p class="mt-[1.5px]">Graphics</p></div>

                                                <div class="bg-[#F5F5F5] text-[#333333] text-sm font-normal mt-2 text-center rounded-[41px] h-[26px] w-[67px]"> <p class="mt-[1.5px]">Figma</p></div>

                                                <div class="bg-[#F5F5F5] text-[#333333] text-sm font-normal mt-2 text-center rounded-[41px] h-[26px] w-[67px]"> <p class="mt-[1.5px]">Javascript</p></div>

                                                <div class="bg-[#F5F5F5] text-[#333333] text-sm font-normal mt-2 text-center rounded-[41px] h-[26px] w-[67px]"> <p class="mt-[1.5px]">Prototyping</p></div>
                                              
                                            </div>
                                            
                                        </div>
                                    </div> 
                                    
                                </li>
                                <li>
                                    <div class="grid grid-cols-3">
                                        <div class="col-start-1 col-span-2">
                                            <h1 class="text-base font-bold">Education</h1>
                                        </div>
                                        <div class="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            <button type="button" class="w-[17px] h-[17px] text-2xl font-black text-[#979797]"><p class="mt-[-6.4px]">+</p></button>
                                        </div>
                                        <div class="col-span-full justify-start fomt-medium text-sm text-[#828282] mt-1">
                                            <div class="flex flex-col items-start space-y-1 mt-3">
                                                <p>COMSATS University, Islamabad</p>
                                                <p>2017 - 2021</p>
                                                <p class="font-medium text-black">Software Engineering</p>
                                            </div>
                                        </div>

                                        <div class="col-span-full justify-start fomt-medium text-sm text-[#828282] mt-1">
                                            <div class="flex flex-col items-start space-y-1 mt-3">
                                                <p>COMSATS University, Islamabad</p>
                                                <p>2017 - 2021</p>
                                                <p class="font-medium text-black">Software Engineering</p>
                                            </div>
                                        </div>
                                    </div> 
                                    
                                </li>
                                <li>
                                <div class="grid grid-cols-3">
                                        <div class="col-start-1 col-span-2">
                                            <h1 class="text-base font-bold">Work Experience</h1>
                                        </div>
                                        <div class="col-start-3 col-span-1 flex flex-row-reverse items-center">
                                            <button type="button" class="w-[17px] h-[17px] text-2xl font-black text-[#979797]"><p class="mt-[-6.4px]">+</p></button>
                                        </div>
                                        <div class="col-span-full justify-start fomt-medium text-sm text-[#828282] mt-1">
                                            <div class="flex flex-col items-start space-y-1 mt-3">
                                                <p>COMSATS University, Islamabad</p>
                                                <p>2017 - 2021</p>
                                                <p class="font-medium text-black">4 Years Experience</p>
                                            </div>
                                        </div>

                                        <div class="col-span-full justify-start fomt-medium text-sm text-[#828282] mt-1">
                                            <div class="flex flex-col items-start space-y-1 mt-3">
                                                <p>COMSATS University, Islamabad</p>
                                                <p>2017 - 2021</p>
                                                <p class="font-medium text-black">4 Years Experience</p>
                                            </div>
                                        </div>
                                    </div> 
                                </li>
                            </ul>
                            
                        </div>
                        {/* Left section ends */}


                        {/* Right section */}
                        <div class="col-start-6 md:col-start-4 col-span-7 md:col-span-9 flex-col border border-solid rounded-lg p-6 mb-10">
                            {/* Rating */}
                            <div class="flex flex-row items-center">
                                   
                                    <img src={RatingStar} class="flex-initial" alt=""/>
                                    <img src={RatingStar} class="flex-initial ml-1" alt=""/>
                                    <img src={RatingStar} class="flex-initial ml-1" alt=""/>
                                    <img src={RatingStar} class="flex-initial ml-1" alt=""/>
                                    <img src={RatingStar} class="flex-initial ml-1" alt=""/>
                                    
                                    <p class="ml-4 font-normal text-base">4.9</p>
                                    <div class="text-right ml-96"><p class="text-base text-[#828282] font-medium">49 Reviews</p></div>   
                            </div>
                            {/* Name and Details */}
                            <div class="mb-5">
                                <h1 class="text-[#00538F] font-bold text-2xl mt-5">Hamza Saeed</h1>
                                <h4 class="font-bold text-lg mt-1">UI UX Designer and Webflow developer</h4>
                                <p class="text-[#333333] text-sm text-left mt-1 leading-6">I possess a unique combination of design expertise and technical know-how that allows me to create beautiful and functional websites that not only look great, but also deliver an exceptional user experience. With years of experience in the industry, I have honed my skills in user research, wireframing, prototyping, and designing interfaces that are intuitive, accessible, and visually appealing. Additionally, my proficiency in Webflow enables me to bring my designs to life in a way that is both efficient and effective, resulting in websites that are not only stunning, but also responsive and optimised for performance. With a keen eye for detail and a passion for user-centred design, I am committed to delivering top-notch solutions that exceed client expectations and elevate the online presence of any business.
                                </p>
                                <span class="text-sm font-medium text-[#979797] inline-flex items-center mt-10">
                                        <img src={TimeIcon} alt="" class="flex-initial mr-3"/>
                                        Joined March 03, 2023
                                </span>
                                <hr class="mt-10"></hr>
                            </div>

                            {/* Gigs */}
                            <div class="flex items-center justify-between">
                                <h4 class="font-bold  text-sm md:text-xl">Active Gigs</h4>
                                <button type="button" class="text-xs md:text-base font-medium text-[#828282] mr-2">Create New</button>

                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-3 mt-10">
                                {/* 1 */}
                                <div class="col-1 col-span-1 max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    {/* Image */}
                                <a href="/#">
                                    <img class="rounded-t-lg" src={GigPic1} alt="" />
                                </a>
                                <div class="p-5">
                                    {/* Description */}
                                <a href="/#">
                                    <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">I will design and develop fully responsive website</h5>
                                </a>
                                
                                <p class="mb-3 text-sm font-medium text-[#00538F] dark:text-gray-400 text-right">Starting at 200$</p>
                                
                                <hr class=""/>
                                {/* gig rating */}
                                <div class="flex flex-row items-center mt-3">
                                    <img src={RatingStar} class="flex-initial w-[17.79px]" alt=""/>
                                    <img src={RatingStar} class="flex-initial w-[17.79px] ml-1" alt=""/>
                                    <img src={RatingStar} class="flex-initial w-[17.79px] ml-1" alt=""/>
                                    <img src={RatingStar} class="flex-initial w-[17.79px] ml-1" alt=""/>
                                    <img src={RatingStar} class="flex-initial w-[17.79px] ml-1" alt=""/>
                                    <p class="text-xs ml-2">4.9</p>
                                    <p class="text-[0px] md:text-xs text-[#828282] ml-4">49 Reviews</p>
                                </div>
                            </div>
                                </div>

                                {/* 2 */}
                                <div class=" col-1 col-span-1 max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    {/* Image */}
                                <a href="/#">
                                    <img class="rounded-t-lg" src={GigPic2} alt="" />
                                </a>
                                <div class="p-5">
                                    {/* Description */}
                                <a href="/#">
                                    <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">I will design and develop fully responsive website</h5>
                                </a>
                                
                                <p class="mb-3 text-sm font-medium text-[#00538F] dark:text-gray-400 text-right">Starting at 200$</p>
                                
                                <hr class=""/>
                                {/* gig rating */}
                                <div class="flex flex-row items-center mt-3">
                                    <img src={RatingStar} class="flex-initial w-[17.79px]" alt=""/>
                                    <img src={RatingStar} class="flex-initial w-[17.79px] ml-1" alt=""/>
                                    <img src={RatingStar} class="flex-initial w-[17.79px] ml-1" alt=""/>
                                    <img src={RatingStar} class="flex-initial w-[17.79px] ml-1" alt=""/>
                                    <img src={RatingStar} class="flex-initial w-[17.79px] ml-1" alt=""/>
                                    <p class="text-xs ml-2">4.9</p>
                                    <p class="text-[0px] md:text-xs text-[#828282] ml-4">49 Reviews</p>
                                </div>
                            </div>


                                </div>

                                {/* 3 */}
                                <div class=" col-1 col-span-1 max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    {/* Image */}
                                <a href="/#">
                                    <img class="rounded-t-lg" src={GigPic3} alt="" />
                                </a>
                                <div class="p-5">
                                    {/* Description */}
                                <a href="/#">
                                    <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">I will design and develop fully responsive website</h5>
                                </a>
                                
                                <p class="mb-3 text-sm font-medium text-[#00538F] dark:text-gray-400 text-right">Starting at 200$</p>
                                
                                <hr class=""/>
                                {/* gig rating */}
                                <div class="flex flex-row items-center mt-3">
                                    <img src={RatingStar} class="flex-initial w-[17.79px]" alt=""/>
                                    <img src={RatingStar} class="flex-initial w-[17.79px] ml-1" alt=""/>
                                    <img src={RatingStar} class="flex-initial w-[17.79px] ml-1" alt=""/>
                                    <img src={RatingStar} class="flex-initial w-[17.79px] ml-1" alt=""/>
                                    <img src={RatingStar} class="flex-initial w-[17.79px] ml-1" alt=""/>
                                    <p class="text-xs ml-2">4.9</p>
                                    <p class="text-[0px] md:text-xs text-[#828282] ml-4">49 Reviews</p>
                                </div>
                            </div>
                                </div>

                                {/* 4 */}
                                <div class=" col-1 col-span-1 max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    {/* Image */}
                                <a href="/#">
                                    <img class="rounded-t-lg" src={GigPic4} alt="" />
                                </a>
                                <div class="p-5">
                                    {/* Description */}
                                <a href="/#">
                                    <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">I will design and develop fully responsive website</h5>
                                </a>
                                
                                <p class="mb-3 text-sm font-medium text-[#00538F] dark:text-gray-400 text-right">Starting at 200$</p>
                                
                                <hr class=""/>
                                {/* gig rating */}
                                <div class="flex flex-row items-center mt-3">
                                    <img src={RatingStar} class="flex-initial w-[17.79px]" alt=""/>
                                    <img src={RatingStar} class="flex-initial w-[17.79px] ml-1" alt=""/>
                                    <img src={RatingStar} class="flex-initial w-[17.79px] ml-1" alt=""/>
                                    <img src={RatingStar} class="flex-initial w-[17.79px] ml-1" alt=""/>
                                    <img src={RatingStar} class="flex-initial w-[17.79px] ml-1" alt=""/>
                                    <p class="text-xs ml-2">4.9</p>
                                    <p class="text-[0px] md:text-xs text-[#828282] ml-4">49 Reviews</p>
                                </div>
                            </div>
                                </div>

                                 {/* 5 */}
                                 <div class=" col-1 col-span-1 max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    {/* Image */}
                                <a href="/#">
                                    <img class="rounded-t-lg" src={GigPic5} alt="" />
                                </a>
                                <div class="p-5">
                                    {/* Description */}
                                <a href="/#">
                                    <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">I will design and develop fully responsive website</h5>
                                </a>
                                
                                <p class="mb-3 text-sm font-medium text-[#00538F] dark:text-gray-400 text-right">Starting at 200$</p>
                                
                                <hr class=""/>
                                {/* gig rating */}
                                <div class="flex flex-row items-center mt-3">
                                    <img src={RatingStar} class="flex-initial w-[17.79px]" alt=""/>
                                    <img src={RatingStar} class="flex-initial w-[17.79px] ml-1" alt=""/>
                                    <img src={RatingStar} class="flex-initial w-[17.79px] ml-1" alt=""/>
                                    <img src={RatingStar} class="flex-initial w-[17.79px] ml-1" alt=""/>
                                    <img src={RatingStar} class="flex-initial w-[17.79px] ml-1" alt=""/>
                                    <p class="text-xs ml-2">4.9</p>
                                    <p class="text-[0px] md:text-xs text-[#828282] ml-4">49 Reviews</p>
                                </div>
                            </div>
                                </div>
                                

                            </div>

                            {/* Portfolios */}
                            <div class="flex items-center justify-between mt-10">
                                <h4 class="font-bold  text-sm md:text-xl">Portfolio</h4>
                                <button type="button" class="text-xs md:text-base font-medium text-[#828282] mr-2">View All</button>

                            </div>
                            
                            <div class="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-3 mt-10">
                                {/* 1 */}
                                <div class="col-1 col-span-1 max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    {/* Image */}
                                <a href="/#">
                                    <img class="rounded-t-lg" src={PortfolioImage1} alt="" />
                                </a>
                                <div class="ml-2 mt-3">
                                    {/* Description */}
                                <a href="/#">
                                    <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Chefy - Personal Chef App</h5>
                                </a>
                                </div>
                                </div>

                                {/* 2 */}
                                <div class="col-1 col-span-1 max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    {/* Image */}
                                <a href="/#">
                                    <img class="rounded-t-lg" src={PortfolioImage2} alt="" />
                                </a>
                                <div class="ml-2 mt-3">
                                    {/* Description */}
                                <a href="/#">
                                    <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Logo Design</h5>
                                </a>
                                </div>
                                </div>

                                {/* 3 */}
                                <div class="col-1 col-span-1 max-w-[250px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    {/* Image */}
                                <a href="/#">
                                    <img class="rounded-t-lg" src={PortfolioImage3} alt="" />
                                </a>
                                <div class="ml-2 mt-3">
                                    {/* Description */}
                                <a href="/#">
                                    <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">Mobile Application design</h5>
                                </a>
                                </div>
                                </div>
                                

                            </div>

                            <hr class="mt-10" />
                            

                            {/* Reviews */}
                            <div class="flex justify-between mt-10">
                                {/* Review */}
                                <div class="flex flex-row items-center">
                                    <h4 class="font-bold  text-sm md:text-xl">Reviews (46)</h4>
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
                                {/* 1 */}
                                <div class="border border-solid rounded-lg mt-10 p-8">
                                    {/* Details */}
                                    <div class="grid grid-cols-12 gap-x-0">
                                        <div class="col-start-1 col-span-1">
                                            <img src={Avatar1} alt="" class="h-[60.43] w-[60.43]" />
                                        </div>
                                        <div class="col-start-2 col-span-2 ml-5">
                                            <div class="flex flex-col">
                                                <h1 class="font-medium text-base">Abdul Korim</h1>
                                                <h6 class="flex flex-row items-center mt-[2px]"> <img src={FlagImage} alt="" class="h-[13.47px] w-[21.29px] mt-[5px]" />
                                                    <p class="text-sm text-[#4F5350] opacity-80">Morroco</p></h6>
                                            </div>
                                        </div>

                                        
                                        <div class="col-start-9 col-span-3 flex flex-row justify-end">
                                            <p class="mr-10 text-xs font-medium text-[#4F5350] opacity-70">3 Days Ago</p>
                                            <img src={RatingStar} class="w-[8px] md:w-[12.79px] h-[7px] md:h-[11px] mt-[1.8px]" alt=""/> <p class="ml-2 text-xs font-medium text-[#FFB33E]">5.0</p>
                                        </div>
                                       

                                    </div>
                                    {/* comment */}
                                    <div class="grid grid-cols-12">
                                        <div class="col-span-full mt-5 text-sm font-normal leading-7 text-[#4F5350] opacity-75 text-left">
                                        Wow, I was blown away by the level of service I received from this company. Their team was incredibly responsive and went above and beyond to ensure that my needs were met. I would highly recommend them to anyone in need of their services.
                                        </div>
                                    </div>
                                </div>

                                {/* 2 */}
                                <div class="border border-solid rounded-lg mt-10 p-8">
                                    {/* Details */}
                                    <div class="grid grid-cols-12 gap-x-0">
                                        <div class="col-start-1 col-span-1">
                                            <img src={Avatar2} alt="" class="h-[60.43] w-[60.43]" />
                                        </div>
                                        <div class="col-start-2 col-span-2 ml-5">
                                            <div class="flex flex-col">
                                                <h1 class="font-medium text-base">Abdul Korim</h1>
                                                <h6 class="flex flex-row items-center mt-[2px]"> <img src={FlagImage} alt="" class="h-[13.47px] w-[21.29px] mt-[5px]" />
                                                    <p class="text-sm text-[#4F5350] opacity-80">Morroco</p></h6>
                                            </div>
                                        </div>

                                        
                                        <div class="col-start-9 col-span-3 flex flex-row justify-end">
                                            <p class="mr-10 text-xs font-medium text-[#4F5350] opacity-70">3 Days Ago</p>
                                            <img src={RatingStar} class="w-[8px] md:w-[12.79px] h-[7px] md:h-[11px] mt-[1.8px]" alt=""/> <p class="ml-2 text-xs font-medium text-[#FFB33E]">5.0</p>
                                        </div>
                                       

                                    </div>
                                    {/* comment */}
                                    <div class="grid grid-cols-12">
                                        <div class="col-span-full mt-5 text-sm font-normal leading-7 text-[#4F5350] opacity-75 text-left">
                                        Wow, I was blown away by the level of service I received from this company. Their team was incredibly responsive and went above and beyond to ensure that my needs were met. I would highly recommend them to anyone in need of their services.
                                        </div>
                                    </div>
                                </div>

                                 {/* 3 */}
                                 <div class="border border-solid rounded-lg mt-10 p-8">
                                    {/* Details */}
                                    <div class="grid grid-cols-12 gap-x-0">
                                        <div class="col-start-1 col-span-1">
                                            <img src={Avatar3} alt="" class="h-[60.43] w-[60.43]" />
                                        </div>
                                        <div class="col-start-2 col-span-2 ml-5">
                                            <div class="flex flex-col">
                                                <h1 class="font-medium text-base">Abdul Korim</h1>
                                                <h6 class="flex flex-row items-center mt-[2px]"> <img src={FlagImage} alt="" class="h-[13.47px] w-[21.29px] mt-[5px]" />
                                                    <p class="text-sm text-[#4F5350] opacity-80">Morroco</p></h6>
                                            </div>
                                        </div>

                                        
                                        <div class="col-start-9 col-span-3 flex flex-row justify-end">
                                            <p class="mr-10 text-xs font-medium text-[#4F5350] opacity-70">3 Days Ago</p>
                                            <img src={RatingStar} class="w-[8px] md:w-[12.79px] h-[7px] md:h-[11px] mt-[1.8px]" alt=""/> <p class="ml-2 text-xs font-medium text-[#FFB33E]">5.0</p>
                                        </div>
                                       

                                    </div>
                                    {/* comment */}
                                    <div class="grid grid-cols-12">
                                        <div class="col-span-full mt-5 text-sm font-normal leading-7 text-[#4F5350] opacity-75 text-left">
                                        Wow, I was blown away by the level of service I received from this company. Their team was incredibly responsive and went above and beyond to ensure that my needs were met. I would highly recommend them to anyone in need of their services.
                                        </div>
                                    </div>
                                </div>

                                <div class="text-right mt-10 text-[##121F3E] underline opacity-80">
                                    See All Reviews
                                </div>
                                
                        </div>
                        {/* Right section ends */}

                    </div>
                </div>
        </>)
}
export default SellerProfileView;