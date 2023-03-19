import React from "react";
import Logo from '../../Assets/logo.png'

const FooterView = () =>{
    return(
        <div class=" h-[800px] md:h-[592px] bg-[#00538F]">
            <div class="flex flex-row flex-wrap lg:grid  lg:grid-flow-rows lg:grid-cols-11  gap-6 md:gap-10 mx-3 md:mx-10 lg:mx-28 justify-between text-white">
                <div class="flex flex-col items-center lg:items-start  lg:col-span-3 mt-8 lg:mt-32">
                        <img src={Logo} alt="Logo" class="flex-none w-40" />
                        
                        <p class="text-xs font-normal mt-2 lg:mt-10 opacity-80 text-center lg:text-left leading-6">
                        Empowering freelancers worldwide with hassle-free and commission-free services. Join the freelance revolution with us today and start earning more
                        </p>
                        
                </div>
                <div class="flex flex-col lg:col-span-2 lg:mt-32">
                    <h1 class="text-xs font-normal">COMPANY</h1>
                    <ul class="mt-5 space-y-4 text-sm font-normal opacity-80">
                        <li><a href="/#">Home</a></li>
                        <li><a href="/#">Explore</a></li>
                        <li><a href="/#">How it Works</a></li>
                        <li><a href="/#">Why Selflance</a></li>
                        <li><a href="/#">Blogs</a></li>
                        <li><a href="/#">Invite Friends</a></li>
                    </ul>
                </div>
                <div class="flex flex-col lg:col-span-2 lg:mt-32">
                    <h1 class="text-xs font-normal">HELP</h1>
                    <ul class="mt-5 space-y-4 text-sm font-normal opacity-80">
                        <li><a href="/#">Help & Support</a></li>
                        <li><a href="/#">Language Support</a></li>
                        <li><a href="/#">Terms & Condition</a></li>
                        <li><a href="/#">Privacy Policy</a></li>
                        <li><a href="/#">Selling on Selflance</a></li>
                        <li><a href="/#">Buying on Selflance</a></li>
                    </ul>
                </div>
                <div class="flex flex-col lg:col-span-2 lg:mt-32">
                    <h1 class="text-xs font-normal">COMPANY</h1>
                    <ul class="mt-5 space-y-4 text-sm font-normal opacity-80">
                        <li><a href="/#">Graphic & Design</a></li>
                        <li><a href="/#">Programming & Tech</a></li>
                        <li><a href="/#">Video & Animation</a></li>
                        <li><a href="/#">Digital Marketing</a></li>
                        <li><a href="/#">Writing & Translation</a></li>
                    </ul>
                </div>
                <div class="flex flex-col lg:col-span-2 lg:mt-32">
                    <h1 class="text-xs font-normal">CATEGORIES</h1>
                    <ul class="mt-5 space-y-4 text-sm font-normal opacity-80">
                        <li><a href="/#">Data</a></li>
                        <li><a href="/#">LifeStyle</a></li>
                        <li><a href="/#">Photography</a></li>
                        <li><a href="/#">Business</a></li>
                        <li><a href="/#">Sitemap</a></li>
                    </ul>
                </div>
                
            </div>
            <hr class="mx-10 lg:mx-32 mt-10 lg:mt-20"></hr>
            <div class="text-white text-center mt-7 lg:mt-10">
            © Copyright 2021, All Rights Reserved by Selflance
            </div>
        </div>
    )
}

export default FooterView;