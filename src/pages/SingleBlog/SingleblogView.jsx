import React from "react";
import TimeIcon from "../../Assets/ion_time-outline.png";
import Avatar from "../../Assets/clarity_avatar-line.png";
import Tag from "../../Assets/ant-design_tag-outlined.png";
import BannerImage from "../../Assets/banner image.png";
import DescPhoto from "../../Assets/Mask Group.png";

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
                            <img class="col-start-2 col-span-6" src={BannerImage} alt=""/>
                        </div>
                </div>
                {/* Item # 1 ends */}

                {/* Item # 2 */}
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
                        <div class="mt-6 bg-[#DD730A] min-h-[186px] rounded-tr-3xl rounded-br-3xl rounded-bl-3xl space-y-8">
                                <p class="text-white opacity-90 mx-10">
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
                            <p>Most advanced Techniology</p>
                    </div>

                </div>
                {/* Item # 2 ends */}
            </div>
    )
}

export default SingleblogView;