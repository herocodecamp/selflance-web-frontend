import React from "react";
import TimeIcon from "../../Assets/ion_time-outline.png";
import Avatar from "../../Assets/clarity_avatar-line.png";
import Tag from "../../Assets/ant-design_tag-outlined.png";
import BannerImage from "../../Assets/banner image.png";
import DescPhoto from "../../Assets/Mask Group.png";
import ListIcon from "../../Assets/Rectangle 38.png";
import prevButton from "../../Assets/btn regular-prev.png";
import nextButton from "../../Assets/btn regular-next.png";
import BlogImage1 from "../../Assets/blog-1a.png";
import BlogImage2 from "../../Assets/blog-1b.png";
import BlogImage3 from "../../Assets/blog-1c.png";


const SingleblogView =() =>{
    return (
            <div class="flex flex-col">
                {/* Item #1 */}
                <div class="max-h-[588px] bg-[#e5eef4]">
                        <div class="grid grid-cols-8 text-center justify-center items-center space-y-8">
                            {/* Title */}
                            <div class="col-start-3 col-span-4 mt-24 text-3xl font-bold text-center text-[#1D263A]">
                            How is the pandemic affecting the way people work?
                            </div>
                            {/* Subtitle */}
                            <div class="col-start-3 col-span-4 text-[#1D263A] text-xs md:text-sm font-normal opacity-70 justify-self-center">
                                <div class="flex flex-row gap-3">
                                    
                                    <img class="inline" src={Avatar} alt="" /> <p>Chaeol Wallstairs</p> 
                                    
                                   
                                    <img class="inline" src={Tag} alt="" /> <p>Lifestyle</p> 
                                    
                                    
                                    <img class="inline ml-5" src={TimeIcon} alt="" /> <p>3 hours ago</p> 
                                    
                                </div>
                            </div>
                            {/* Subtitle ends */}
                            <img class="col-start-2 col-span-6 z-20" src={BannerImage} alt=""/>
                        </div>
                </div>
                {/* Item # 1 ends */}

                {/* Item # 2 */}
                <div class="bg-[#F9FAFB]">
                    {/* grid 1 */}
                    <div class="grid grid-cols-10 justify-center items-center mt-72">
                        <div class="col-start-4 col-span-4">
                            <div class="text-xs space-y-4 font-normal leading-5 text-[#1D263A] opacity-80">
                            <p>
                            Doubling my 9–5 salary several times in my career is something I never thought would happen. My career went from startup land to call center operator in a short space of time (very limited timespan of 6 months).
                            </p>
                            <p>
                            That meant going from six-figures down to the minimum wage in my home country of Australia. And to top it off, I have no degrees in anything business related — unless you count a sound engineering qualification.
                            </p>
                            <p>
                            If an uneducated guy from the home of the Kangaroo can double their salary, there is definitely hope for you. Popular career websites like “Seek” suggest the typical advice about doing better in your performance review or getting more education from a university. This advice is out of date and I have watched many colleagues fall for this trap and only end up disappointed.
                            </p>
                            <p>
                            Doubling your salary, or at the very least increasing it significantly, is about breaking the norm and trying a few things that are a bit more radical as you’re about to see with these simple tips below.
                            </p>
                            <h1 class="text-xl font-semibold">The goal should be more than money</h1>
                            <p>
                            Okay so you can make more money but if that’s your only goal, the extra zeroes on your bank balance will get really boring real quick.
                            </p>
                            </div>
                            <div class="mt-6 bg-[#DD730A] min-h-[186px] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl space-y-8 items-center">
                                    <p class="text-white opacity-90 mx-10 text-center">
                                    You can develop side-businesses, side-hustles, and hobbies that can supplement your 9–5 income source, and they can all put extra money in your pocket that allows you to work less and not stress so much about bills.
                                    </p>
                            </div>
                            <div class="text-xs space-y-4 mt-6 font-normal leading-5 text-[#1D263A] opacity-80">
                                <p>If an uneducated guy from the home of the Kangaroo can double their salary, there is definitely hope for you. Popular career websites like “Seek” suggest the typical advice about doing better in your performance review or getting more education from a university. This advice is out of date and I have watched many colleagues fall for this trap and only end up disappointed.</p>
                            </div>

                        </div>

                    </div>
                        {/* grid 2 */}
                    <div class="grid grid-cols-10 justify-center items-center mt-6">
                        <div class="col-start-4 col-span-1">
                                <img src={DescPhoto} alt="" />
                        </div>
                        <div class="col-start-5 col-span-3 text-xs space-y-4 font-normal leading-5 text-[#1D263A] opacity-80 ml-6">
                                <p class="text-xl font-semibold">Most advanced Techniology</p>
                                <p>
                                By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following terms.
                                </p>
                        </div>
                        <div class="col-start-4 col-span-4 text-xs space-y-4 font-normal leading-5 text-[#1D263A] opacity-80 mt-10">
                            <h1 class="text-xl font-semibold">Key Summary</h1>
                            <p>
                            By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following terms.
                            </p>
                            <ul class="list-none">
                                <img src={ListIcon} alt=""/>
                                <li>You have rights for royalty free use of our resources for any or all of your personal and commercial projects.</li>
                                <img src={ListIcon} alt=""/>
                                <li>You are not required to attribute or link to UXTheme in any of projects.</li>
                                <img src={ListIcon} alt=""/>
                                <li>We reserve the rights to change prices and revise the resources usage policy in any moment.</li>
                            </ul>
                        </div>
                        {/* Tagged */}
                        <div class="col-start-4 col-span-4 mt-20">
                            <div class="flex flex-row justify-center items-center text-center">
                                    <h1 class="text-sm font-medium">Tagged: </h1>
                                    <div class="h-[45px] w-[90px] font-medium text-xs border-solid border-2 text-center ml-8">
                                        <p class="mt-3">Lifestyle</p>
                                    </div>
                                    <div class="h-[45px] w-[90px] font-medium text-xs border-solid border-2 text-center ml-4">
                                        <p class="mt-3">Technology</p>
                                    </div>
                                    <div class="h-[45px] w-[90px] font-medium text-xs border-solid border-2 text-center ml-4">
                                        <p class="mt-3">Innovation</p>
                                    </div>
                            </div>
                            <hr class="mt-20"></hr>
                        </div>


                    </div>
                        {/* grid 3 */}
                    <div class="grid grid-cols-10 mt-10 gap-2 mb-20">

                        <div class="col-start-4 col-span-2 justify-center items-center">
                            <div class="flex flex-row gap-5">
                                <img src={prevButton} alt=""/>
                                <div class="flex-col mt-2">
                                    <p class="text-xs font-normal text-[#1D263A] opacity-80">Previous project</p>
                                    <h1 class="text-sm font-bold mt-2">Bohous branding...</h1>
                                </div>

                            </div>
                            
                        </div>
                        <div class="col-start-6 col-span-2">
                            <div class="flex flex-row-reverse gap-5">
                                <img class="inline" src={nextButton} alt=""/>
                                <div class="flex-col mt-2">
                                    <p class="text-xs font-normal text-[#1D263A] opacity-80">Next project</p>
                                    <h1 class="text-sm font-bold mt-2">Kiwistech template...</h1>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
                {/* Item # 2 ends */}

                {/* Item # 3 */}
                            {/* Related Articles */}
            <div class="grid grid-rows-1 grid-flow-row mt-20 mb-10 mx-32">
                    <div class="text-[#1D263A] text-4xl font-medium mb-16">Latest articles</div>
                    <div class="columns-1 md:columns-3 space-y-4">
                        {/* Image 1 */}
                        <div class="col-1 col-span-1">
                            <img class="rounded-lg" src={BlogImage1} alt="blog image1"/>
                            <p class="text-[#FF794D] text-xs font-medium mt-2 ml-2">April 02, 2021</p>
                            
                            <a href="/#" target="_blank" >
                                <h2 class="text-[#1D263A] text-base font-medium mt-3 ml-2">06 ways to do workout inside your home during Covid-19 </h2></a>
                        </div>
                        {/* Image 2 */}
                        <div class="col-1">
                            <img class="rounded-lg" src={BlogImage2} alt="blog image2"/>
                            <p class="text-[#FF794D] text-xs font-medium mt-2 ml-2">March 26, 2021</p>
                            <a href="/#" target="_blank">
                            <h4 class="text-[#1D263A] text-base font-medium mt-3 ml-2" >How is the pandemic affecting the way people work?</h4>
                            </a>
                        </div>
                        {/* Image 3 */}
                        <div class="col-1">
                            <img class="rounded-lg" src={BlogImage3} alt="blog image3"/>
                            <p class="text-[#FF794D] text-xs font-medium mt-2 ml-2">March 19, 2021</p>
                            <a href="/#" target="_blank">
                            <h4 class="text-[#1D263A] text-base font-medium mt-3 ml-2" >The parent’s balancing act: using the word ‘No’</h4>
                            </a>
                        </div>
                    </div>
            </div>
                {/* Item # 3 ends */}
            </div>
    )
}

export default SingleblogView;