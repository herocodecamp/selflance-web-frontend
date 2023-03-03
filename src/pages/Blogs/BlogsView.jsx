import React from "react";
import BlogImage1 from "../../Assets/blog-1a.png";
import BlogImage2 from "../../Assets/blog-1b.png";
import BlogImage3 from "../../Assets/blog-1c.png";
import PopularImage1 from "../../Assets/Blogs-2a.png";
import PopularImage2 from "../../Assets/Blogs-2b.png";
import PopularImage3 from "../../Assets/Blogs-2c.png";
import PopularImage4 from "../../Assets/Blogs-2d.png";
import PopularImage5 from "../../Assets/Blogs-2e.png";
import PopularImage6 from "../../Assets/Blogs-2f.png";
import PopularImage7 from "../../Assets/Blogs-2g.png";
import PopularImage8 from "../../Assets/Blogs-2h.png";
import PopularImage9 from "../../Assets/Blogs-2i.png";

// Hero
const BlogsView = ()=>{
    return (
        <div class="flex flex-col">
            {/* Hero */}
            <div class="h-[360px] bg-[#e5eef4] justify-center items-center">
            <div class="grid grid-cols-6 space-y-8 mt-24">
                <div class="col-start-3 col-span-2 justify-self-center text-6xl font-bold text-[#1D263A]" >Blogs</div>
                <div class="col-start-3 col-span-2 justify-self-center text-center text-[#1D263A] opacity-70">
                    Stay ahead of the competition with the latest advice on marketing, networking, and more from our blog.
                </div>
            </div>
            </div>
            {/* Related Articles */}
            <div class="grid grid-rows-1 grid-flow-row mt-10 mx-32">
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
                    <div class="justify-self-end underline mt-5 mr-2"><a href="/#" target="_blank">See All</a></div>
            </div>

            {/* Popular Articles */}
            <div class="grid grid-rows-1 grid-flow-row mt-10 mx-32">
                    <div class="text-[#1D263A] text-4xl font-medium mb-16">Popular articles</div>
                    <div class="columns-1 md:columns-3 space-y-10">
                        {/* Image 1 */}
                        <div class="col-1 col-span-1">
                            <img class="rounded-lg" src={PopularImage1} alt="blog image1"/>
                            <p class="text-[#FF794D] text-xs font-medium mt-2 ml-2">April 02, 2021</p>
                            
                            <a href="/#" target="_blank" >
                                <h2 class="text-[#1D263A] text-base font-medium mt-3 ml-2">06 ways to do workout inside your home during Covid-19 </h2></a>
                        </div>
                        {/* Image 2 */}
                        <div class="col-1">
                            <img class="rounded-lg" src={PopularImage2} alt="blog image2"/>
                            <p class="text-[#FF794D] text-xs font-medium mt-2 ml-2">March 26, 2021</p>
                            <a href="/#" target="_blank">
                            <h4 class="text-[#1D263A] text-base font-medium mt-3 ml-2" >How is the pandemic affecting the way people work?</h4>
                            </a>
                        </div>
                        {/* Image 3 */}
                        <div class="col-1">
                            <img class="rounded-lg" src={PopularImage3} alt="blog image3"/>
                            <p class="text-[#FF794D] text-xs font-medium mt-2 ml-2">March 19, 2021</p>
                            <a href="/#" target="_blank">
                            <h4 class="text-[#1D263A] text-base font-medium mt-3 ml-2" >The parent’s balancing act: using the word ‘No’</h4>
                            </a>
                        </div>
                        {/* Image 4 */}
                        <div class="col-1 col-span-1">
                            <img class="rounded-lg" src={PopularImage4} alt="blog image1"/>
                            <p class="text-[#FF794D] text-xs font-medium mt-2 ml-2">April 02, 2021</p>
                            
                            <a href="/#" target="_blank" >
                                <h2 class="text-[#1D263A] text-base font-medium mt-3 ml-2">06 ways to do workout inside your home during Covid-19 </h2></a>
                        </div>
                        {/* Image 5 */}
                        <div class="col-1">
                            <img class="rounded-lg" src={PopularImage5} alt="blog image2"/>
                            <p class="text-[#FF794D] text-xs font-medium mt-2 ml-2">March 26, 2021</p>
                            <a href="/#" target="_blank">
                            <h4 class="text-[#1D263A] text-base font-medium mt-3 ml-2" >How is the pandemic affecting the way people work?</h4>
                            </a>
                        </div>
                        {/* Image 6 */}
                        <div class="col-1">
                            <img class="rounded-lg" src={PopularImage6} alt="blog image3"/>
                            <p class="text-[#FF794D] text-xs font-medium mt-2 ml-2">March 19, 2021</p>
                            <a href="/#" target="_blank">
                            <h4 class="text-[#1D263A] text-base font-medium mt-3 ml-2" >The parent’s balancing act: using the word ‘No’</h4>
                            </a>
                        </div>
                        {/* Image 7 */}
                        <div class="col-1 col-span-1">
                            <img class="rounded-lg" src={PopularImage7} alt="blog image1"/>
                            <p class="text-[#FF794D] text-xs font-medium mt-2 ml-2">April 02, 2021</p>
                            
                            <a href="/#" target="_blank" >
                                <h2 class="text-[#1D263A] text-base font-medium mt-3 ml-2">06 ways to do workout inside your home during Covid-19 </h2></a>
                        </div>
                        {/* Image 8 */}
                        <div class="col-1">
                            <img class="rounded-lg" src={PopularImage8} alt="blog image2"/>
                            <p class="text-[#FF794D] text-xs font-medium mt-2 ml-2">March 26, 2021</p>
                            <a href="/#" target="_blank">
                            <h4 class="text-[#1D263A] text-base font-medium mt-3 ml-2" >How is the pandemic affecting the way people work?</h4>
                            </a>
                        </div>
                        {/* Image 9 */}
                        <div class="col-1">
                            <img class="rounded-lg" src={PopularImage9} alt="blog image3"/>
                            <p class="text-[#FF794D] text-xs font-medium mt-2 ml-2">March 19, 2021</p>
                            <a href="/#" target="_blank">
                            <h4 class="text-[#1D263A] text-base font-medium mt-3 ml-2" >The parent’s balancing act: using the word ‘No’</h4>
                            </a>
                        </div>
                    </div>
            </div>

        </div>
    )
}      

export default BlogsView;