import React,{useState} from "react";
import { FaAngleRight} from 'react-icons/fa';
import {FaAngleLeft} from 'react-icons/fa';
import {FaArrowLeft} from 'react-icons/fa';
import {FaArrowRight} from 'react-icons/fa';
import GigMainImage from "../../Assets/Service_Details_main_pic.png";
import profileImage from "../../Assets/profileImage.png";
import RatingStar from "../../Assets/Star-filled.png";
import Review from "../../components/Reviews";
import {BsCheck2Square, BsCheck} from "react-icons/bs";
import {FaChevronDown, FaChevronRight} from 'react-icons/fa';



const images = [
 GigMainImage,GigMainImage,GigMainImage,GigMainImage
  ];
// const packageList = ['Summary', 'Price', 'Prototype','Source File', 'Logo', 'No of Pages', 'No. of Revisions', 'Delivery'];

const Packages = ['Basic', 'Standard', 'Premium'];

// packageData[0]=> basic
// packageData[1]=> standard
// packageData[2]=> premium

const packageData= [
    {
        summary: 'I will design 2 App screen including source file + prototype',
        price: '$10',
        prototype: false,
        sourcefile: true,
        logo: false,
        pages: 'Up to 2',
        revisions: '3',
        deliveryDuration: '1'
    },
    {
        summary: 'I will design 4 App screen including source file + prototype',
        price: '$30',
        prototype: true,
        sourcefile: true,
        logo: false,
        pages: 'Up to 4',
        revisions: 'Unlimited',
        deliveryDuration: '2'
    },
    {
        summary: 'I will design 8 App screen including source file + prototype',
        price: '$40',
        prototype: true,
        sourcefile: true,
        logo: true,
        pages: 'Up to 8',
        revisions: 'Unlimited',
        deliveryDuration: '3'
    },
]

const userDetails ={
    id:'1',
    name: 'Hamza Saeed',
    image: profileImage,
    status: 'online',
    about: `Hi guys, my name is Hamza Saeed and I am originally certified by government. I am a professional graphic designer and work on different software like FIGMA, ADOBE XD ,ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR. I am doing this work for the last five years professionally with different companies. There are advantages to using design in business. It has the potential to improve your performance, efficiencies, and the value of your products and services. It can also lower your company's costs and risks. It has the potential to increase customer engagement and retention. Please contact me for queries. Thanks`,
    country: 'Pakistan',
    lastdelivery: '15 Days ago',
    membership: 'Since 2018',
    rating: '4.9',
    completedOrder: '50',
    progressOrder: '02',
    reviews: '20',
    serviceCategory: 'PERSONAL APP DESIGNER EXPERT / GRAPHIC DESIGNER/ FIGMA',
    description: `I welcome you to the ultimate & one-stop-shop for your all graphic design work. I’m a professional graphic designer with over 5 years of experience & would love to work as your personal expert graphic designer. \n

    WHATEVER PHOTOSHOP EDITS YOU NEED: \n
    ✅ Color correction, contrast and brightness\n
    ✅ Photo Repair\n
    ✅ Removing objects or people from the frame\n
    ✅ Compositing images together\n
    ✅ Social Media posts\n
    ✅ Recoloring and tinting\n
    ✅ Cropping\n
    ✅ Sharpening and Smoothing\n
    ✅ Blemish Removal\n
    ✅ Banners\n
    ✅ Photo Manipulation\n
    ✅ Product Photos\n
    
    If you did not find anything you want, feel free to contact me, so that we can find the best solution for your specific needs.
    Why Me?
    ► Good communicator
    ► Quick & responsive
    ► Reasonable prices
    ► Friendly service
    ► Unlimited revisions
    THANK YOU!`,
    
}

const navList =['Overview', 'Details', 'Packages', 'About the Seller', 'Reviews'];
const beadCrumbs =['Graphics & Design', 'App Design'];

const ServiceDetailsView = () =>{

    const [activeIndex, setActiveIndex] = useState(0);
    const [activePkgTab, setActivePkgTab] = useState('Basic');

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const [showDetails, setShowDetails] = useState(false);
    const[showAboutText, setShowAboutText] = useState(false);

    const previousImageIndex = () =>
    setCurrentImageIndex((index) =>
      index === 0 ? images.length - 1 : index - 1
    );

   const nextImageIndex = () =>
    setCurrentImageIndex((index) => (index + 1) % images.length);

    const handleOfferClick = (index) => {
            console.log(index);
    };

    return(
        <div class="bg-rosewhite">
            <div class="mx-4 md:mx-10">
                {/* top nav */}  
                
                <div class="hidden md:block text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul class="flex flex-wrap">
                        {
                            navList.map((i,index)=>{
                                return(<li class="mr-2" key={index}>
                            <a href="/#" class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-blue-600 dark:hover:text-gray-300 active">{i}</a>
                                </li>)
                            })
                        }
                </ul>

                </div>
                {/* Breadcrumbs */}
                
                <nav class="flex mt-10" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    {
                        beadCrumbs.map((item,index)=>{
                            return(
                                    <li class="inline-flex items-center" key={index}>
                                    <a href="/#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                        {item}
                                    </a>
                                      <FaAngleRight/>
                                    </li>
                            )
                        })
                    }
                </ol>
                </nav>

                <div class="grid grid-cols-12 grid-flow-col gap-2 md:gap-8 mt-6">
                    {/* Left Section */}
                    <div class="col-span-full md:col-start-1 md:col-span-8 flex flex-col">
                        <div class="text-xl md:text-5xl font-bold">
                        I will design and develop fully responsive website
                        </div>
                        {/* carousel */}
                        <div class="object-center mt-5 md:mt-10 mb-5 mr-4">  
                                <img src={images.slice(0,4)[currentImageIndex]} alt="" class="rounded-lg object-center"/>
                                <div class="flex items-center justify-center mt-1">
                                    <button type="button" onClick={previousImageIndex} class="cursor-pointer p-1 md:p-2 w-6 h-6 text-white bg-black rounded-full  md:w-8 md:h-8 dark:text-gray-800 bg-opacity-30"><FaArrowLeft  /></button>
                                    <button type="button" onClick={nextImageIndex} class="ml-20 cursor-pointer p-1 md:p-2 w-6 h-6 text-white bg-black rounded-full  md:w-8 md:h-8 dark:text-gray-800 bg-opacity-30"> <FaArrowRight /></button>
                                </div>
                        </div>
                        <div class="hidden md:block">
                                <div class="grid gric-cols-4 gap-5">
                                    {
                                        images.slice(0,4).map((item,index)=>{
                                            return(
                                                <div class={`col-start-${index+1} col-span-1`}>
                                                    
                                                    <img src={item} alt="" class={currentImageIndex === index ? `border-4 border-solid border-[#00538F] rounded-lg`: ''}/>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                        </div>
                        {/* details */}
                                <div class="hidden md:flex">
                                    <div class="text-2xl font-medium mt-0 md:mt-10">Detail</div>
                                    
                                    <div class="my-3">
                                        <h1>{userDetails.serviceCategory}</h1>
        
                                        <p>{userDetails.description}</p>
        
                                    </div>
                                </div>

                            <div class="md:hidden">
                                {
                                    showDetails ? (
                                        <div>
                                        <button class="" onClick={()=>setShowDetails(!showDetails)}>
                                                        <div class="flex flex-row items-center">
                                                        <p class="text-xl font-normal mt-0" >Details</p> <FaChevronDown />
                                                        </div>
                                        </button>
                                    <div class="my-3">
                                        <h1 class="text-sm">{userDetails.serviceCategory}</h1>
        
                                        <p class="text-xs leading-4">{userDetails.description}</p>
        
                                    </div>
                                        </div>): (
                                            <div>
                                                <button class="md:hidden" onClick={()=>setShowDetails(!showDetails)}>
                                                    <div class="flex flex-row items-center">
                                                    <p>Details</p> <FaChevronRight />
                                                    </div>
                                                    </button>
                                            </div>
                                        )
                                }
                                
                            </div>
                        <hr class="my-5 md:my-10" />
                        {/* Packages Table */}
                        <div class="hidden md:block">
                            <div class=" text-xl md:text-3xl font-medium">Packages</div>

                            <div class="border border-solid border-[#D1D1D1] my-5 md:my-10">
                                
                                            <div class="relative overflow-x-auto">
                                                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                                        <tr>
                                                            <th scope="col" class="px-2 md:px-6 py-3 border-r-2">
                                                                Packages
                                                            </th>
                                                            {
                                                                Packages.map((item,index)=>{
                                                                    return(
                                                                    <th scope="col" class="px-2 md:px-6 py-3 border-r-2" key={index}>
                                                                        {item}
                                                                    </th>)
                                                                })
                                                            }
                                                        
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" class="px-2 md:px-6 py-3 border-r-2 text-gray-900 whitespace-nowrap dark:text-white">
                                                                Summary
                                                            </th>
                                                            {
                                                                packageData.map((item,index)=>{
                                                                    return(
                                                                        <td class="px-1 md:px-6 py-4 text-xs border-r-2" key={index}>
                                                                            {item.summary}
                                                                        </td>
                                                                    )
                                                                })
                                                            }
                                                        </tr>

                                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" class="px-2 md:px-6 py-3 border-r-2 text-gray-900 whitespace-nowrap dark:text-white">
                                                                Price
                                                            </th>
                                                            {
                                                                packageData.map((item,index)=>{
                                                                    return(
                                                                        <td class="px-6 py-4 border-r-2" key={index}>
                                                                            {item.price}
                                                                        </td>
                                                                    )
                                                                })
                                                            }
                                                        </tr>

                                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" class="px-2 md:px-6 py-3 border-r-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Prototype
                                                            </th>
                                                            {
                                                                packageData.map((item,index)=>{
                                                                    return(
                                                                        <td class="px-6 py-4 border-r-2" key={index}>
                                                                            {item.prototype === true ? <BsCheck2Square /> : ''}
                                                                        </td>
                                                                    )
                                                                })
                                                            }
                                                        </tr>

                                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" class="px-2 md:px-6 py-3 border-r-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Source File
                                                            </th>
                                                            {
                                                                packageData.map((item,index)=>{
                                                                    return(
                                                                        <td class="px-6 py-4 border-r-2" key={index}>
                                                                            {item.sourcefile === true ? <BsCheck2Square /> : ''}
                                                                        </td>
                                                                    )
                                                                })
                                                            }
                                                        </tr>

                                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" class="px-2 md:px-6 py-3 border-r-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Logo
                                                            </th>
                                                            {
                                                                packageData.map((item,index)=>{
                                                                    return(
                                                                        <td class="px-6 py-4 border-r-2" key={index}>
                                                                            {item.logo === true ? <BsCheck2Square /> : ''}
                                                                        </td>
                                                                    )
                                                                })
                                                            }
                                                        </tr>

                                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" class="px-2 md:px-6 py-3 border-r-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                No. of Pages
                                                            </th>
                                                            {
                                                                packageData.map((item,index)=>{
                                                                    return(
                                                                        <td class="px-6 py-4 border-r-2" key={index}>
                                                                            {item.pages}
                                                                        </td>
                                                                    )
                                                                })
                                                            }
                                                        </tr>

                                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" class="px-6 py-4 border-r-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                No. of Revisions
                                                            </th>
                                                            {
                                                                packageData.map((item,index)=>{
                                                                    return(
                                                                        <td class="px-6 py-4 border-r-2" key={index}>
                                                                            {item.revisions}
                                                                        </td>
                                                                    )
                                                                })
                                                            }
                                                        </tr>

                                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" class="px-6 py-4 border-r-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                Delivery
                                                            </th>
                                                            {
                                                                packageData.map((item,index)=>{
                                                                    return(
                                                                        <td class="px-6 py-4 border-r-2" key={index}>
                                                                            {item.deliveryDuration}
                                                                        </td>
                                                                    )
                                                                })
                                                            }
                                                        </tr>
                                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                            <th scope="row" class="px-6 py-4 font-medium border-r-2 text-gray-900 whitespace-nowrap dark:text-white">
                                                            
                                                            </th>
                                                            {
                                                                Packages.map((item,index)=>{
                                                                    return(
                                                                        <td class="px-6 py-4 border-r-2" key={index}>
                                                                            <button class="bg-[#00538F] w-[120px] text-white font-medium text-lg rounded-md" onClick={console.log(index)}>Select</button>
                                                                        </td>
                                                                    )
                                                                })
                                                            }
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>

                            </div>
                        </div>


                        {/* About the Seller */}
                        <div class="text-2xl font-medium my-2 md:my-5 ">About the Seller</div>
                        <div class="border border-solid border-#D1D1D1 rounded-lg p-3 md:p-8 my-5 md:my-10">
                                <div class="grid grid-cols-12">
                                    <div class="col-start-1 col-span-4 md:col-span-2">
                                        <span><img src={userDetails.image}  alt="pic" class="flex-initial w-[125px] h-auto rounded-full overflow-hidden self-center" /></span>

                                    </div>
                                    <div class="col-start-5 md:col-start-3 col-span-6 md:col-span-3 items-center ml-3 md:ml-0">
                                        <p class="text-base md:text-lg font-bold ">{userDetails.name}</p>
                                        <p class="text-[#FFB33E] font-bold text-sm md:text-base ">{userDetails.rating}</p>
                                        <p class="text-[#27AE60] text-sm md:text-base">{userDetails.status}</p>

                                    </div>
                                </div>
                                <div class="hidden md:flex my-3 md:my-8 font-base text-[#4F5350] text-xs md:text-sm leading-5 md:leading-8">
                                                {userDetails.about}
                                               
                                </div>
                                {/* smaller screen size */}
                                <div>
                                    {
                                        showAboutText ? (
                                            <div class="my-3 md:my-8 font-base text-[#4F5350] text-xs md:text-sm leading-5 md:leading-8">
                                                {userDetails.about}
                                                <button class="md:hidden" onClick={()=>setShowAboutText(!showAboutText)}>
                                                    <p class="font-bold">....show less</p> 
                                                </button>
                                            </div>
                                        ):(
                                        <div class="md:hidden my-3 md:my-8 font-base text-[#4F5350] text-xs md:text-sm leading-5 md:leading-8">
                                        {userDetails.about.slice(0,40)}
                                        <button class="md:hidden" onClick={()=>setShowAboutText(!showAboutText)}>
                                                <p class="font-bold">....see more</p>
                                        </button>
                                    </div>)
                                    }
                                </div>
                                
                                <div class="hidden md:grid md:grid-cols-8 md:gap-10 md:justify-start">
                                    <div class="col-start-1 col-span-2">
                                        <h4 class="text-xs font-medium">country</h4>
                                        <h2 class="text-sm md:text-lg font-medium mt-3">{userDetails.country}</h2>
                                    </div>
                                    <div class="col-start-3 col-span-2">
                                        <h4 class="text-xs font-medium">Last Delivery</h4>
                                        <h2 class="text-sm md:text-lg font-medium mt-3">{userDetails.lastdelivery}</h2>
                                    </div>
                                    <div class="col-start-5 col-span-2">
                                        <h4 class="text-xs font-medium">Membership</h4>
                                        <h2 class="text-sm md:text-lg font-medium mt-3">{userDetails.membership}</h2>
                                    </div>

                                </div>
                        </div>
                        
                        {/* Reviews */}
                            <div class="hidden md:block">
                                <div class="">
                                    <div class="flex justify-between mt-5 md:mt-10">
                                            {/* Review */}
                                            <div class="flex flex-row items-center">
                                                <h4 class="font-bold  text-sm md:text-xl">
                                                    Reviews (46) 
                                                    </h4>
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
                                </div>
                                <div>
                                    <Review />
                                </div>
                            </div>
                    </div>
                    {/* Left Section ends */}

                    {/* Right Section */}
                    <div class="col-span-full md:col-start-9 md:col-span-4 space-y-8">
                        {/* Box-1 */}
                        <div class="">
                            <div class="text-xl font-bold text-gray-800">Price</div>
                            <div class="border border-solid border-[#D1D1D1]">
                                {/* nav */}
                                    <div>
                                        <nav>
                                        <ul class="border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                                            <div class="grid grid-cols-3">
                                                {
                                                    Packages.map((item,index)=>{
                                                        return(
                                                            <div class="object-center">
                                                                <div class = {activePkgTab === item ? `col-start-${index+1} col-span-1 md:px-3 border-r border-gray-200 dark:border-gray-700 bg-[#00538F] text-white`: `col-start-${index+1} col-span-1 md:px-3 border-r border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400`} >
                                                                    <li class="">
                                                                        <button class=" text-xs md:text-sm h-[35.23px] md:h-[52.23px] font-medium block" onClick={()=>{setActiveIndex(index); setActivePkgTab(item)}}>{item}</button>
                                                                    </li>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>

                                        </ul>
                                        </nav>
                                        {/* Package Data */}
                                        <div class="p-1 md:p-5">
                                            <div class="text-[#121F3E] text-xl font-bold">
                                            {packageData[activeIndex].price}
                                            </div>
                                            <div class="text-[#121F3E] text-base md:text-lg font-medium my-2">
                                            I can design the website with 6 pages.
                                            </div>
                                            <div class="grid grid-cols-2 my-5 items-center">
                                                <div class="col-start-1 col-span-1 place-self-start text-xs md:text-sm text-[#4F5350] opacity-80 font-medium">
                                                        Delivery days
                                                </div>
                                                <div class="col-start-2 col-span-1 place-self-end text-xs md:text-sm font-medium">
                                                    {packageData[activeIndex].deliveryDuration}
                                                </div>

                                            </div>

                                            <div class="grid grid-cols-2 my-5">
                                                <div class="col-start-1 col-span-1 place-self-start text-xs md:text-sm text-[#4F5350] opacity-80 font-medium">
                                                        Revisions
                                                </div>
                                                <div class="col-start-2 col-span-1 place-self-end text-xs md:text-sm font-medium">
                                                    {packageData[activeIndex].revisions}
                                                </div>

                                            </div>

                                            <hr class="my-3"/>

                                            <div class="grid grid-cols-2 my-5">
                                                <div class="col-start-1 col-span-1 place-self-start text-xs md:text-sm text-[#4F5350] opacity-80 font-medium">
                                                    No. of Pages  
                                                </div>
                                                <div class="col-start-2 col-span-1 place-self-end text-xs md:text-sm font-medium">
                                                {packageData[activeIndex].pages}
                                                </div>

                                            </div>

                                            <div class="grid grid-cols-2 my-5">
                                                <div class="col-start-1 col-span-1 place-self-start text-xs md:text-sm text-[#4F5350] opacity-80 font-medium">
                                                        Prototype
                                                </div>
                                                <div class="col-start-2 col-span-1 place-self-end text-xs md:text-sm font-medium">
                                                    {packageData[activeIndex].prototype === true ? <BsCheck /> : ''}
                                                </div>

                                            </div>

                                            <div class="grid grid-cols-2 my-5">
                                                <div class="col-start-1 col-span-1 place-self-start text-xs md:text-sm text-[#4F5350] opacity-80 font-medium">
                                                        Source File
                                                </div>
                                                <div class="col-start-2 col-span-1 place-self-end text-xs md:text-sm font-medium">
                                                    {packageData[activeIndex].sourcefile === true ? <BsCheck /> : '' }
                                                </div>

                                            </div>

                                            <div class=" grid grid-cols-1">
                                                <div class="col-span-full place-self-center">
                                                <button class="bg-[#00538F] text-white rounded-lg w-[100px] md:w-[350px] h-[30px] md:h-[47px] text-xs md:text-lg font-medium" onClick={()=>{handleOfferClick(activeIndex)}}>Select Offer</button>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                            </div>
                        </div>

                        {/* Box-2 */}
                        <div class="border border-solid border-[/#D1D1D1] rounded-lg p-2 md:p-8 items-center">
                                                <div class="flex flex-row items-center justify-center">
                                                <img src={userDetails.image}  alt="pic" class="inline-block object-center w-[77px] h-auto rounded-full" />
                                                </div>
                                                <div class="text-center text-lg font-medium">{userDetails.name}</div>
                                                <div  class="text-center text-[#FFB33E] text-sm font-medium mt-1">{userDetails.rating}</div>
                                                <div class="text-center flex mb-5 mt-3 mx-10">
                                                    <button class="bg-[#00538F] text-white rounded-lg w-[180px] md:w-[400px] h-[35px]  md:h-[57px] text-xs md:text-lg font-medium" >Contact this Seller</button>
                                                </div>
                                                <hr />
                                                <div class="mb-5" >
                                                    <div class="grid grid-cols-2 gap-2">
                                                        <div class="col-start-1 col-span-1 text-xs md:text-lg my-2">
                                                            Seller's Rating
                                                        </div>
                                                        <div class="col-start-2 col-span-1 justify-self-end my-2 text-xs md:text-lg text-[#FFB33E]">
                                                            {userDetails.rating}
                                                        </div>   
                                                    </div>
                                                    <hr />
                                                    <div class="grid grid-cols-2">
                                                        <div class="col-start-1 col-span-1 text-xs md:text-lg my-2">
                                                            Completed Orders
                                                        </div>
                                                        <div class="col-start-2 col-span-1 justify-self-end my-2 text-xs md:text-lg">
                                                            {userDetails.completedOrder}
                                                        </div>   
                                                    </div>
                                                    <hr />
                                                    <div class="grid grid-cols-2">
                                                        <div class="col-start-1 col-span-1 text-xs md:text-lg my-2">
                                                            Order in Progress
                                                        </div>
                                                        <div class="col-start-2 col-span-1 justify-self-end my-2 text-xs md:text-lg">
                                                            {userDetails.progressOrder}
                                                        </div>   
                                                    </div>
                                                    <hr />
                                                    <div class="grid grid-cols-2">
                                                        <div class="col-start-1 col-span-1 my-2 text-xs md:text-lg">
                                                            Reviews
                                                        </div>
                                                        <div class="col-start-2 col-span-1 justify-self-end my-2 text-xs md:text-lg">
                                                            {/* insted update the userDetail to contain the comments: [] then use the comments.length()*/}
                                                            {userDetails.reviews}
                                                        </div>   
                                                    </div>
                                                    <hr />

                                                </div>
                        </div>
                        

                    </div>
                    

                    
                    {/* Right Section ends */}

                </div>

            </div>

        </div>
    )
}

export default ServiceDetailsView;  