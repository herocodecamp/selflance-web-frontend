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


const Articles={
    latest: [
    {
        _id: '0',
        date: 'April 02, 2021',
        title: '06 ways to do workout inside your home during Covid-19',
        image: BlogImage1

    },
    {
        _id: '1',
        date: 'March 26, 2021',
        title: 'How is the pandemic affecting the way people work?',
        image: BlogImage2

    },
    {
        _id: '2',
        date: 'March 19, 2021',
        title: 'How is the pandemic affecting the way people work?',
        image: BlogImage3

    },
],
popular: [
    {
        _id: '0',
        date: 'April 02, 2021',
        title: '06 ways to do workout inside your home during Covid-19',
        image: PopularImage1

    },
    {
        _id: '1',
        date: 'April 02, 2021',
        title: '06 ways to do workout inside your home during Covid-19',
        image: PopularImage2

    },
    {
        _id: '2',
        date: 'April 02, 2021',
        title: '06 ways to do workout inside your home during Covid-19',
        image: PopularImage3

    },
    {
        _id: '3',
        date: 'April 02, 2021',
        title: '06 ways to do workout inside your home during Covid-19',
        image: PopularImage4

    },
    {
        _id: '4',
        date: 'April 02, 2021',
        title: '06 ways to do workout inside your home during Covid-19',
        image: PopularImage5

    },
    {
        _id: '5',
        date: 'April 02, 2021',
        title: '06 ways to do workout inside your home during Covid-19',
        image: PopularImage6

    },
    {
        _id: '6',
        date: 'April 02, 2021',
        title: '06 ways to do workout inside your home during Covid-19',
        image: PopularImage7

    },
    {
        _id: '7',
        date: 'April 02, 2021',
        title: '06 ways to do workout inside your home during Covid-19',
        image: PopularImage8

    },
    {
        _id: '8',
        date: 'April 02, 2021',
        title: '06 ways to do workout inside your home during Covid-19',
        image: PopularImage9

    },

]

}






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
            <div class="grid grid-rows-1 grid-flow-row mt-6 md:mt-10 mx-10 lg:mx-32">
                    <div class="text-[#1D263A] text-2xl md:text-4xl font-medium mb-8 lg:mb-16">Latest articles</div>
                    <div class="columns-1 md:columns-3 space-y-8">
                        {
                            Articles.latest.slice(0,3).map((item,index)=>{
                                return(
                                    <div class="col-1 col-span-1" key={item._id}>
                                        <img class="rounded-lg" src={item.image} alt="blog image1"/>
                                        <p class="text-[#FF794D] text-xs font-medium mt-2 ml-2">{item.date}</p>
                                        
                                        <a href="/#" target="_blank" >
                                            <h2 class="text-[#1D263A] text-base md:text-2xl font-medium mt-3 ml-2">{item.title} </h2></a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div class="justify-self-end underline mt-5 mr-2"><a href="/#" target="_blank">See All</a></div>
            </div>

            {/* Popular Articles */}
            <div class="grid grid-rows-1 grid-flow-row mt-6 md:mt-10 mx-10 lg:mx-32">
                    <div class="text-[#1D263A] text-4xl font-medium mb-16">Popular articles</div>
                    <div class="columns-1 md:columns-3 space-y-10">
                        {
                            Articles.popular.map((item,index)=>{
                                return(
                                    <div class="col-1 col-span-1" key={item._id}>
                                        <img class="rounded-lg" src={item.image} alt="blog image1"/>
                                        <p class="text-[#FF794D] text-xs font-medium mt-2 ml-2">{item.date}</p>
                                        
                                        <a href="/#" target="_blank" >
                                            <h2 class="text-[#1D263A] text-base md:text-2xl font-medium mt-3 ml-2">{item.title}</h2></a>
                                    </div>
                                )
                            })
                        }
                       
                    </div>
            </div>

        </div>
    )
}      

export default BlogsView;