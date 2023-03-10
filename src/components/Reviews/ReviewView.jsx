import React from "react";
import Avatar1 from "../../Assets/seller_review_avatar_1.png";
import Avatar2 from "../../Assets/seller_review_avatar_2.png";
import Avatar3 from "../../Assets/seller_review_avatar_3.png";
import FlagImage from "../../Assets/seller_review_flag.png";
import RatingStar from "../../Assets/Star-filled.png";

const comments = [
    {
        _id: '1',
        name: 'Abdul Korim',
        image: Avatar1,
        country: 'Morroco',
        countryFlag: FlagImage,
        duration: '3 Days ago',
        rating: '5',
        comment: 'Wow, I was blown away by the level of service I received from this company. Their team was incredibly responsive and went above and beyond to ensure that my needs were met. I would highly recommend them to anyone in need of their services.',

    },
    {
        _id: '2',
        name: 'Usman Abbas',
        image: Avatar2,
        country: 'Morroco',
        countryFlag: FlagImage,
        duration: '3 Days ago',
        rating: '5',
        comment: 'Wow, I was blown away by the level of service I received from this company. Their team was incredibly responsive and went above and beyond to ensure that my needs were met. I would highly recommend them to anyone in need of their services.',

    },
    {
        _id: '3',
        name: 'Prince Art',
        image: Avatar3,
        country: 'Morroco',
        countryFlag: FlagImage,
        duration: '3 Days ago',
        rating: '5',
        comment: 'Wow, I was blown away by the level of service I received from this company. Their team was incredibly responsive and went above and beyond to ensure that my needs were met. I would highly recommend them to anyone in need of their services.',

    },

]


const ReviewView = ()=>{
    return(
        <>
        {
            comments.map((item)=>{
                return(
                    <div class="border border-solid rounded-lg mt-10 p-8">
                {/* Details */}
                <div class="grid grid-cols-12 gap-x-0" key={item._id}>
                    <div class="col-start-1 col-span-1">
                        <img src={item.image} alt="" class="h-[60.43] w-[60.43]" />
                    </div>
                    <div class="col-start-2 col-span-2 ml-5">
                        <div class="flex flex-col">
                            <h1 class="font-medium text-base">{item.name}</h1>
                            <h6 class="flex flex-row items-center mt-[2px]"> <img src={FlagImage} alt="" class="h-[13.47px] w-[21.29px] mt-[5px]" />
                                <p class="text-sm text-[#4F5350] opacity-80">{item.country}</p></h6>
                        </div>
                    </div>

                    
                    <div class="col-start-9 col-span-3 flex flex-row justify-end">
                        <p class="mr-10 text-xs font-medium text-[#4F5350] opacity-70">{item.duration}</p>
                        <img src={RatingStar} class="w-[8px] md:w-[12.79px] h-[7px] md:h-[11px] mt-[1.8px]" alt=""/> <p class="ml-2 text-xs font-medium text-[#FFB33E]">5.0</p>
                    </div>
                   

                </div>
                {/* comment */}
                <div class="grid grid-cols-12">
                    <div class="col-span-full mt-5 text-sm font-normal leading-7 text-[#4F5350] opacity-75 text-left">
                        {item.comment}
                    </div>
                </div>
            </div>
                )
            })
        }
        </>
    )
}

export default ReviewView;