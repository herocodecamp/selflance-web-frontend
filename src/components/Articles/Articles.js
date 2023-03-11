import React from "react";
import { LatestArticlesView } from "./ArticlesView";
import { PopularArticlesView } from "./ArticlesView";



const LatestArticles = ()=>{
    return(
        <LatestArticlesView />
    )
}

const PopularArticles = () =>{
    return(
        <PopularArticlesView />
    )
}

export  {LatestArticles,PopularArticles};