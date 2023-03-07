import React,{useState} from "react";
import { FaAngleRight} from 'react-icons/fa';
import {FaAngleLeft} from 'react-icons/fa';
import {FaArrowLeft} from 'react-icons/fa';
import {FaArrowRight} from 'react-icons/fa';
import GigMainImage from "../../Assets/Service_Details_main_pic.png";


const images = [
    'https://picsum.photos/800/400',
    'https://picsum.photos/800/401',
    'https://picsum.photos/800/402',
    'https://picsum.photos/800/403',
  ];
const packageList = ['Summary', 'Price', 'Prototype','Source File', 'Logo', 'No of Pages', 'No. of Revisions', 'Delivery'];

const packageData = {
    basic: [
        'I will design 2 App screen including source file + prototype', '$10', false,true, false, 'Up tp 2', '3', '1'
    ],
    standard: [
        'I will design 8 App screen including source file + prototype', '$30', true,true, false, 'Up tp 4', 'Unlimited', '2'
    ],
    premium: [
        'I will design 4 App screen including source file + prototype', '$60', true,true, true, 'Up tp 8', 'Unlimited', '3'
    ]
}
const userDetails ={
    name: 'Hamza Saeed',
    about: `Hi guys, my name is Hamza Saeed and I am originally certified by government. I am a professional graphic designer and work on different software like FIGMA, ADOBE XD ,ADOBE PHOTOSHOP, ADOBE ILLUSTRATOR. I am doing this work for the last five years professionally with different companies. There are advantages to using design in business. It has the potential to improve your performance, efficiencies, and the value of your products and services. It can also lower your company's costs and risks. It has the potential to increase customer engagement and retention. Please contact me for queries. Thanks`,
    country: 'Pakistan',
    lastdelivery: '15 Days ago',
    membership: 'Since 2018',
    rating: '4.9',
    completedOrder: '50',
    progressOrder: '02',
    reviews: '20',
    serviceCategory: 'PERSONAL APP DESIGNER EXPERT / GRAPHIC DESIGNER/ FIGMA',
    description: `I welcome you to the ultimate & one-stop-shop for your all graphic design work. I’m a professional graphic designer with over 5 years of experience & would love to work as your personal expert graphic designer.

    WHATEVER PHOTOSHOP EDITS YOU NEED:
    ✅ Color correction, contrast and brightness
    ✅ Photo Repair
    ✅ Removing objects or people from the frame
    ✅ Compositing images together
    ✅ Social Media posts
    ✅ Recoloring and tinting
    ✅ Cropping
    ✅ Sharpening and Smoothing
    ✅ Blemish Removal
    ✅ Banners
    ✅ Photo Manipulation
    ✅ Product Photos
    
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

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const previousImageIndex = () =>
    setCurrentImageIndex((index) =>
      index === 0 ? images.length - 1 : index - 1
    );

   const nextImageIndex = () =>
    setCurrentImageIndex((index) => (index + 1) % images.length);

    const handleClick = (index) => {
      setActiveIndex(index);
    };

    return(
        <div class="bg-slate-100">
            <div class="mx-10">
                {/* top nav */}  
                
                <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul class="flex flex-wrap -mb-px">
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

                <div class="grid grid-cols-12 grid-flow-row gap-8 mt-6">
                    {/* Left Section */}
                    <div class="col-start-1 col-span-8 flex flex-col">
                        <div>
                        I will design and develop fully responsive website
                        </div>
                        {/* carousel */}
                        <div class="">
                            <div class="">
                                
                                Image Carousels will live here I will do it later!


                            </div>

                        </div>
                        <div>Detail</div>
                        <div>
                            <h1>{userDetails.serviceCategory}</h1>

                           <p>{userDetails.description}</p>

                        </div>
                        <hr />
                        <div>Packages</div>
                        {/* Packages Table */}
                        <div class="">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam et iusto dolorum est fuga, tempora deleniti ea optio vitae, beatae corporis, fugiat quaerat nemo accusamus saepe! Illo tempora architecto rem.
                                    <div class="flex flex-row max-w-[500px]">
                                        <table class="text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3">
                                                        Packages
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>          
                                                    {
                                                        packageList.map((item, i)=>{
                                                           return( 
                                                            <tr class="bg-white dark:bg-gray-800">
                                                                <th key={i} scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                    {item}
                                                                </th>
                                                        </tr>)
                                                            })
                                                    }
                                            </tbody>
                                        </table>
                                        <table class="text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3">
                                                        Basic
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>          
                                                    {
                                                        packageData.basic.map((item, i)=>{
                                                           return( 
                                                            <tr class="bg-white dark:bg-gray-800">
                                                                <th key={i} scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                    {item}
                                                                </th>
                                                        </tr>)
                                                            })
                                                    }
                                            </tbody>
                                        </table>
                                        <table class="text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3">
                                                        Standard
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>          
                                                    {
                                                        packageData.standard.map((item, i)=>{
                                                           return( 
                                                            <tr class="bg-white dark:bg-gray-800">
                                                                <th key={i} scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                    {item}
                                                                </th>
                                                        </tr>)
                                                            })
                                                    }
                                            </tbody>
                                        </table>
                                        <table class="text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3">
                                                        Premium
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>          
                                                    {
                                                        packageData.premium.map((item, i)=>{
                                                           return( 
                                                            <tr class="bg-white dark:bg-gray-800">
                                                                <th key={i} scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                                    {item}
                                                                </th>
                                                        </tr>)
                                                            })
                                                    }
                                            </tbody>
                                        </table>
                                    </div>


                            

                        </div>

                    </div>
                    {/* Left Section ends */}

                    {/* Right Section */}
                    <div class="col-start-9 col-span-4">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat numquam enim esse natus deserunt repudiandae magnam fugit non praesentium, ab nemo commodi reiciendis voluptas laudantium provident dicta labore officia. Repellendus.

                    </div>
                    

                    
                    {/* Right Section ends */}

                </div>

            </div>

        </div>
    )
}

export default ServiceDetailsView;  