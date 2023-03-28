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
import { Link } from "react-router-dom";


const Blogs =[
    {
        _id: '0',
        author: 'Chaeol Wallstairs',
        date: 'April 02, 2021',
        title: 'How is the pandemic affecting the way people work?',
        mainImage: BlogImage1,
        tags: ['Lifestyle','Technology','Innovation'],
        latest: true,
        popular: true,
        quotes: [{
                    title: 'The goal should be more than money',
                    description: `Okay so you can make more money but if that’s your only goal, the extra zeroes on your bank balance will get really boring real quick. ${<br/>} If an uneducated guy from the home of the Kangaroo can double their salary, there is definitely hope for you. Popular career websites like “Seek” suggest the typical advice about doing better in your performance review or getting more education from a university. This advice is out of date and I have watched many colleagues fall for this trap and only end up disappointed.`,
                    quote: 'You can develop side-businesses, side-hustles, and hobbies that can supplement your 9–5 income source, and they can all put extra money in your pocket that allows you to work less and not stress so much about bills.'
                 },],
        imagecards:[
            {
                title:'Most advanced Techniology',
                description: 'By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following terms.',
                image: BlogImage1
            },
        ],
        summary: {
            details: 'By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following terms.',
            keypoints: ['You have rights for royalty free use of our resources for any or all of your personal and commercial projects.', 'You are not required to attribute or link to UXTheme in any of projects.', 'We reserve the rights to change prices and revise the resources usage policy in any moment.']
        },
        blogDescription: `Doubling my 9–5 salary several times in my career is something I never thought would happen. My career went from startup land to call center operator in a short space of time (very limited timespan of 6 months). ${<br/>}That meant going from six-figures down to the minimum wage in my home country of Australia. And to top it off, I have no degrees in anything business related — unless you count a sound engineering qualification.${<br/>}If an uneducated guy from the home of the Kangaroo can double their salary, there is definitely hope for you. Popular career websites like “Seek” suggest the typical advice about doing better in your performance review or getting more education from a university. This advice is out of date and I have watched many colleagues fall for this trap and only end up disappointed.${<br/>}Doubling your salary, or at the very least increasing it significantly, is about breaking the norm and trying a few things that are a bit more radical as you’re about to see with these simple tips below.`
    },
    {
        _id: '1',
        author: 'Chaeol Wallstairs',
        date: 'March 26, 2021',
        title: 'How is the pandemic affecting the way people work?',
        mainImage: BlogImage2,
        tags: ['Lifestyle','Technology','Innovation'],
        latest: true,
        popular: true,
        quotes: [{
                    title: 'The goal should be more than money',
                    description: `Okay so you can make more money but if that’s your only goal, the extra zeroes on your bank balance will get really boring real quick. ${<br/>} If an uneducated guy from the home of the Kangaroo can double their salary, there is definitely hope for you. Popular career websites like “Seek” suggest the typical advice about doing better in your performance review or getting more education from a university. This advice is out of date and I have watched many colleagues fall for this trap and only end up disappointed.`,
                    quote: 'You can develop side-businesses, side-hustles, and hobbies that can supplement your 9–5 income source, and they can all put extra money in your pocket that allows you to work less and not stress so much about bills.'
                 },],
        imagecards:[
            {
                title:'Most advanced Techniology',
                description: 'By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following terms.',
                image: BlogImage1
            },
        ],
        summary: {
            details: 'By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following terms.',
            keypoints: ['You have rights for royalty free use of our resources for any or all of your personal and commercial projects.', 'You are not required to attribute or link to UXTheme in any of projects.', 'We reserve the rights to change prices and revise the resources usage policy in any moment.']
        },
        blogDescription: `Doubling my 9–5 salary several times in my career is something I never thought would happen. My career went from startup land to call center operator in a short space of time (very limited timespan of 6 months). ${<br/>}That meant going from six-figures down to the minimum wage in my home country of Australia. And to top it off, I have no degrees in anything business related — unless you count a sound engineering qualification.${<br/>}If an uneducated guy from the home of the Kangaroo can double their salary, there is definitely hope for you. Popular career websites like “Seek” suggest the typical advice about doing better in your performance review or getting more education from a university. This advice is out of date and I have watched many colleagues fall for this trap and only end up disappointed.${<br/>}Doubling your salary, or at the very least increasing it significantly, is about breaking the norm and trying a few things that are a bit more radical as you’re about to see with these simple tips below.`
    },
    {
        _id: '2',
        author: 'Chaeol Wallstairs',
        date: 'March 19, 2021',
        title: 'The parent’s balancing act: using the word ‘No’',
        mainImage: BlogImage3,
        tags: ['Lifestyle','Technology','Innovation'],
        latest: true,
        popular: true,
        quotes: [{
                    title: 'The goal should be more than money',
                    description: `Okay so you can make more money but if that’s your only goal, the extra zeroes on your bank balance will get really boring real quick. ${<br/>} If an uneducated guy from the home of the Kangaroo can double their salary, there is definitely hope for you. Popular career websites like “Seek” suggest the typical advice about doing better in your performance review or getting more education from a university. This advice is out of date and I have watched many colleagues fall for this trap and only end up disappointed.`,
                    quote: 'You can develop side-businesses, side-hustles, and hobbies that can supplement your 9–5 income source, and they can all put extra money in your pocket that allows you to work less and not stress so much about bills.'
                 },],
        imagecards:[
            {
                title:'Most advanced Techniology',
                description: 'By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following terms.',
                image: BlogImage1
            },
        ],
        summary: {
            details: 'By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following terms.',
            keypoints: ['You have rights for royalty free use of our resources for any or all of your personal and commercial projects.', 'You are not required to attribute or link to UXTheme in any of projects.', 'We reserve the rights to change prices and revise the resources usage policy in any moment.']
        },
        blogDescription: `Doubling my 9–5 salary several times in my career is something I never thought would happen. My career went from startup land to call center operator in a short space of time (very limited timespan of 6 months). ${<br/>}That meant going from six-figures down to the minimum wage in my home country of Australia. And to top it off, I have no degrees in anything business related — unless you count a sound engineering qualification.${<br/>}If an uneducated guy from the home of the Kangaroo can double their salary, there is definitely hope for you. Popular career websites like “Seek” suggest the typical advice about doing better in your performance review or getting more education from a university. This advice is out of date and I have watched many colleagues fall for this trap and only end up disappointed.${<br/>}Doubling your salary, or at the very least increasing it significantly, is about breaking the norm and trying a few things that are a bit more radical as you’re about to see with these simple tips below.`
    },
    {
        _id: '3',
        author: 'Chaeol Wallstairs',
        date: 'April 02, 2021',
        title: 'How is the pandemic affecting the way people work?',
        mainImage: PopularImage1,
        tags: ['Lifestyle','Technology','Innovation'],
        latest: true,
        popular: true,
        quotes: [{
                    title: 'The goal should be more than money',
                    description: `Okay so you can make more money but if that’s your only goal, the extra zeroes on your bank balance will get really boring real quick. ${<br/>} If an uneducated guy from the home of the Kangaroo can double their salary, there is definitely hope for you. Popular career websites like “Seek” suggest the typical advice about doing better in your performance review or getting more education from a university. This advice is out of date and I have watched many colleagues fall for this trap and only end up disappointed.`,
                    quote: 'You can develop side-businesses, side-hustles, and hobbies that can supplement your 9–5 income source, and they can all put extra money in your pocket that allows you to work less and not stress so much about bills.'
                 },],
        imagecards:[
            {
                title:'Most advanced Techniology',
                description: 'By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following terms.',
                image: BlogImage1
            },
        ],
        summary: {
            details: 'By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following terms.',
            keypoints: ['You have rights for royalty free use of our resources for any or all of your personal and commercial projects.', 'You are not required to attribute or link to UXTheme in any of projects.', 'We reserve the rights to change prices and revise the resources usage policy in any moment.']
        },
        blogDescription: `Doubling my 9–5 salary several times in my career is something I never thought would happen. My career went from startup land to call center operator in a short space of time (very limited timespan of 6 months). ${<br/>}That meant going from six-figures down to the minimum wage in my home country of Australia. And to top it off, I have no degrees in anything business related — unless you count a sound engineering qualification.${<br/>}If an uneducated guy from the home of the Kangaroo can double their salary, there is definitely hope for you. Popular career websites like “Seek” suggest the typical advice about doing better in your performance review or getting more education from a university. This advice is out of date and I have watched many colleagues fall for this trap and only end up disappointed.${<br/>}Doubling your salary, or at the very least increasing it significantly, is about breaking the norm and trying a few things that are a bit more radical as you’re about to see with these simple tips below.`
    },
    {
        _id: '4',
        author: 'Chaeol Wallstairs',
        date: 'March 26, 2021',
        title: 'How is the pandemic affecting the way people work?',
        mainImage: PopularImage2,
        tags: ['Lifestyle','Technology','Innovation'],
        latest: false,
        popular: true,
        quotes: [{
                    title: 'The goal should be more than money',
                    description: `Okay so you can make more money but if that’s your only goal, the extra zeroes on your bank balance will get really boring real quick. ${<br/>} If an uneducated guy from the home of the Kangaroo can double their salary, there is definitely hope for you. Popular career websites like “Seek” suggest the typical advice about doing better in your performance review or getting more education from a university. This advice is out of date and I have watched many colleagues fall for this trap and only end up disappointed.`,
                    quote: 'You can develop side-businesses, side-hustles, and hobbies that can supplement your 9–5 income source, and they can all put extra money in your pocket that allows you to work less and not stress so much about bills.'
                 },],
        imagecards:[
            {
                title:'Most advanced Techniology',
                description: 'By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following terms.',
                image: BlogImage1
            },
        ],
        summary: {
            details: 'By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following terms.',
            keypoints: ['You have rights for royalty free use of our resources for any or all of your personal and commercial projects.', 'You are not required to attribute or link to UXTheme in any of projects.', 'We reserve the rights to change prices and revise the resources usage policy in any moment.']
        },
        blogDescription: `Doubling my 9–5 salary several times in my career is something I never thought would happen. My career went from startup land to call center operator in a short space of time (very limited timespan of 6 months). ${<br/>}That meant going from six-figures down to the minimum wage in my home country of Australia. And to top it off, I have no degrees in anything business related — unless you count a sound engineering qualification.${<br/>}If an uneducated guy from the home of the Kangaroo can double their salary, there is definitely hope for you. Popular career websites like “Seek” suggest the typical advice about doing better in your performance review or getting more education from a university. This advice is out of date and I have watched many colleagues fall for this trap and only end up disappointed.${<br/>}Doubling your salary, or at the very least increasing it significantly, is about breaking the norm and trying a few things that are a bit more radical as you’re about to see with these simple tips below.`
    },
    {
        _id: '5',
        author: 'Chaeol Wallstairs',
        date: 'March 19, 2021',
        title: 'The parent’s balancing act: using the word ‘No’',
        mainImage: PopularImage3,
        tags: ['Lifestyle','Technology','Innovation'],
        latest: false,
        popular: true,
        quotes: [{
                    title: 'The goal should be more than money',
                    description: `Okay so you can make more money but if that’s your only goal, the extra zeroes on your bank balance will get really boring real quick. ${<br/>} If an uneducated guy from the home of the Kangaroo can double their salary, there is definitely hope for you. Popular career websites like “Seek” suggest the typical advice about doing better in your performance review or getting more education from a university. This advice is out of date and I have watched many colleagues fall for this trap and only end up disappointed.`,
                    quote: 'You can develop side-businesses, side-hustles, and hobbies that can supplement your 9–5 income source, and they can all put extra money in your pocket that allows you to work less and not stress so much about bills.'
                 },],
        imagecards:[
            {
                title:'Most advanced Techniology',
                description: 'By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following terms.',
                image: BlogImage1
            },
        ],
        summary: {
            details: 'By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following terms.',
            keypoints: ['You have rights for royalty free use of our resources for any or all of your personal and commercial projects.', 'You are not required to attribute or link to UXTheme in any of projects.', 'We reserve the rights to change prices and revise the resources usage policy in any moment.']
        },
        blogDescription: `Doubling my 9–5 salary several times in my career is something I never thought would happen. My career went from startup land to call center operator in a short space of time (very limited timespan of 6 months). ${<br/>}That meant going from six-figures down to the minimum wage in my home country of Australia. And to top it off, I have no degrees in anything business related — unless you count a sound engineering qualification.${<br/>}If an uneducated guy from the home of the Kangaroo can double their salary, there is definitely hope for you. Popular career websites like “Seek” suggest the typical advice about doing better in your performance review or getting more education from a university. This advice is out of date and I have watched many colleagues fall for this trap and only end up disappointed.${<br/>}Doubling your salary, or at the very least increasing it significantly, is about breaking the norm and trying a few things that are a bit more radical as you’re about to see with these simple tips below.`
    },
    {
        _id: '6',
        author: 'Chaeol Wallstairs',
        date: 'April 02, 2021',
        title: 'How is the pandemic affecting the way people work?',
        mainImage: PopularImage4,
        tags: ['Lifestyle','Technology','Innovation'],
        latest: false,
        popular: true,
        quotes: [{
                    title: 'The goal should be more than money',
                    description: `Okay so you can make more money but if that’s your only goal, the extra zeroes on your bank balance will get really boring real quick. ${<br/>} If an uneducated guy from the home of the Kangaroo can double their salary, there is definitely hope for you. Popular career websites like “Seek” suggest the typical advice about doing better in your performance review or getting more education from a university. This advice is out of date and I have watched many colleagues fall for this trap and only end up disappointed.`,
                    quote: 'You can develop side-businesses, side-hustles, and hobbies that can supplement your 9–5 income source, and they can all put extra money in your pocket that allows you to work less and not stress so much about bills.'
                 },],
        imagecards:[
            {
                title:'Most advanced Techniology',
                description: 'By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following terms.',
                image: BlogImage1
            },
        ],
        summary: {
            details: 'By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following terms.',
            keypoints: ['You have rights for royalty free use of our resources for any or all of your personal and commercial projects.', 'You are not required to attribute or link to UXTheme in any of projects.', 'We reserve the rights to change prices and revise the resources usage policy in any moment.']
        },
        blogDescription: `Doubling my 9–5 salary several times in my career is something I never thought would happen. My career went from startup land to call center operator in a short space of time (very limited timespan of 6 months). ${<br/>}That meant going from six-figures down to the minimum wage in my home country of Australia. And to top it off, I have no degrees in anything business related — unless you count a sound engineering qualification.${<br/>}If an uneducated guy from the home of the Kangaroo can double their salary, there is definitely hope for you. Popular career websites like “Seek” suggest the typical advice about doing better in your performance review or getting more education from a university. This advice is out of date and I have watched many colleagues fall for this trap and only end up disappointed.${<br/>}Doubling your salary, or at the very least increasing it significantly, is about breaking the norm and trying a few things that are a bit more radical as you’re about to see with these simple tips below.`
    },
    {
        _id: '7',
        author: 'Chaeol Wallstairs',
        date: 'March 26, 2021',
        title: 'How is the pandemic affecting the way people work?',
        mainImage: PopularImage5,
        tags: ['Lifestyle','Technology','Innovation'],
        latest: false,
        popular: true,
        quotes: [{
                    title: 'The goal should be more than money',
                    description: `Okay so you can make more money but if that’s your only goal, the extra zeroes on your bank balance will get really boring real quick. ${<br/>} If an uneducated guy from the home of the Kangaroo can double their salary, there is definitely hope for you. Popular career websites like “Seek” suggest the typical advice about doing better in your performance review or getting more education from a university. This advice is out of date and I have watched many colleagues fall for this trap and only end up disappointed.`,
                    quote: 'You can develop side-businesses, side-hustles, and hobbies that can supplement your 9–5 income source, and they can all put extra money in your pocket that allows you to work less and not stress so much about bills.'
                 },],
        imagecards:[
            {
                title:'Most advanced Techniology',
                description: 'By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following terms.',
                image: BlogImage1
            },
        ],
        summary: {
            details: 'By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following terms.',
            keypoints: ['You have rights for royalty free use of our resources for any or all of your personal and commercial projects.', 'You are not required to attribute or link to UXTheme in any of projects.', 'We reserve the rights to change prices and revise the resources usage policy in any moment.']
        },
        blogDescription: `Doubling my 9–5 salary several times in my career is something I never thought would happen. My career went from startup land to call center operator in a short space of time (very limited timespan of 6 months). ${<br/>}That meant going from six-figures down to the minimum wage in my home country of Australia. And to top it off, I have no degrees in anything business related — unless you count a sound engineering qualification.${<br/>}If an uneducated guy from the home of the Kangaroo can double their salary, there is definitely hope for you. Popular career websites like “Seek” suggest the typical advice about doing better in your performance review or getting more education from a university. This advice is out of date and I have watched many colleagues fall for this trap and only end up disappointed.${<br/>}Doubling your salary, or at the very least increasing it significantly, is about breaking the norm and trying a few things that are a bit more radical as you’re about to see with these simple tips below.`
    },
    {
        _id: '8',
        author: 'Chaeol Wallstairs',
        date: 'March 19, 2021',
        title: 'The parent’s balancing act: using the word ‘No’',
        mainImage: PopularImage9,
        tags: ['Lifestyle','Technology','Innovation'],
        latest: false,
        popular: true,
        quotes: [{
                    title: 'The goal should be more than money',
                    description: `Okay so you can make more money but if that’s your only goal, the extra zeroes on your bank balance will get really boring real quick. ${<br/>} If an uneducated guy from the home of the Kangaroo can double their salary, there is definitely hope for you. Popular career websites like “Seek” suggest the typical advice about doing better in your performance review or getting more education from a university. This advice is out of date and I have watched many colleagues fall for this trap and only end up disappointed.`,
                    quote: 'You can develop side-businesses, side-hustles, and hobbies that can supplement your 9–5 income source, and they can all put extra money in your pocket that allows you to work less and not stress so much about bills.'
                 },],
        imagecards:[
            {
                title:'Most advanced Techniology',
                description: 'By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following terms.',
                image: BlogImage1
            },
        ],
        summary: {
            details: 'By purchasing or downloading resource (“item” or “file”) you are being granted a license to use these files for specific uses under certain conditions. Ownership remains with UXTheme, and you are required to abide by the following terms.',
            keypoints: ['You have rights for royalty free use of our resources for any or all of your personal and commercial projects.', 'You are not required to attribute or link to UXTheme in any of projects.', 'We reserve the rights to change prices and revise the resources usage policy in any moment.']
        },
        blogDescription: `Doubling my 9–5 salary several times in my career is something I never thought would happen. My career went from startup land to call center operator in a short space of time (very limited timespan of 6 months). ${<br/>}That meant going from six-figures down to the minimum wage in my home country of Australia. And to top it off, I have no degrees in anything business related — unless you count a sound engineering qualification.${<br/>}If an uneducated guy from the home of the Kangaroo can double their salary, there is definitely hope for you. Popular career websites like “Seek” suggest the typical advice about doing better in your performance review or getting more education from a university. This advice is out of date and I have watched many colleagues fall for this trap and only end up disappointed.${<br/>}Doubling your salary, or at the very least increasing it significantly, is about breaking the norm and trying a few things that are a bit more radical as you’re about to see with these simple tips below.`
    },   
]


const Articles={
    latest: [
    {
        _id: '0',
        date: 'April 02, 2021',
        title: '06 ways to do workout inside your home during Covid-19',
        image: BlogImage1,
        tags:['Chaeol Wallstairs','Lifestyle','3 hours ago'],
        description: ``

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



const LatestArticlesView = ()=>{
    return(
        <div class="grid grid-rows-1 grid-flow-row mt-6 md:mt-10 mx-10 lg:mx-32">
        <div class="text-[#1D263A] text-2xl md:text-4xl font-medium mb-8 lg:mb-16">Latest articles</div>
        <div class="columns-1 md:columns-3 space-y-8">
            {
                Articles.latest.slice(0,3).map((item,index)=>{
                    return(
                        <div class="col-1 col-span-1" key={item._id}>
                            <img class="rounded-lg" src={item.image} alt="blog image1"/>
                            <p class="text-[#FF794D] text-xs font-medium mt-2 ml-2">{item.date}</p>
                            
                            <Link to="/blogs/:blogID" >
                                <h2 class="text-[#1D263A] text-base md:text-2xl font-medium mt-3 ml-2">{item.title} </h2></Link>
                        </div>
                    )
                })
            }
        </div>
        <div class="justify-self-end underline mt-5 mr-2"><a href="/#" target="_blank">See All</a></div>
        </div>
    )
}

const PopularArticlesView = () =>{
    return(
        <div class="grid grid-rows-1 grid-flow-row mt-6 md:mt-10 mx-10 lg:mx-32">
                    <div class="text-[#1D263A] text-2xl md:text-4xl font-medium mb-16">Popular articles</div>
                    <div class="columns-1 md:columns-3 space-y-10">
                        {
                            Articles.popular.slice(0,9).map((item,index)=>{
                                return(
                                    <div class="col-1 col-span-1" key={item._id}>
                                        <img class="rounded-lg" src={item.image} alt="blog image1"/>
                                        <p class="text-[#FF794D] text-xs font-medium mt-2 ml-2">{item.date}</p>
                                        
                                        <Link to="/blogs/:blogID" >
                                            <h2 class="text-[#1D263A] text-base md:text-2xl font-medium mt-3 ml-2">{item.title}</h2></Link>
                                    </div>
                                )
                            })
                        }
                       
                    </div>
            </div>
    )
}

export  {LatestArticlesView,PopularArticlesView};