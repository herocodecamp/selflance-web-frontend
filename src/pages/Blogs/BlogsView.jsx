import React from "react";
import { LatestArticles } from "../../components/Articles";
import { PopularArticles } from "../../components/Articles";


const BlogsView = ()=>{
    return (
        <div class="flex flex-col">
            {/* Hero */}
            <div class="h-{360px] bg-[#e5eef4] justify-center items-center">
            <div class="grid grid-cols-6  space-y-8  my-12 md:my-24">
                <div class="col-start-2 col-span-4 justify-self-center text-4xl md:text-6xl font-bold text-[#1D263A]" >Blogs</div>
                <div class="col-start-2 md:col-start-3 col-span-4 md:col-span-2 justify-self-center text-sm md:text-xl text-center text-[#1D263A] opacity-70">
                    Stay ahead of the competition with the latest advice on marketing, networking, and more from our blog.
                </div>
            </div>
            </div>
            {/* Latest Articles */}
            <div>
                <LatestArticles />
            </div>

            {/* Popular Articles */}
            <div>
                <PopularArticles />
            </div>

        </div>
    )
}      

export default BlogsView;