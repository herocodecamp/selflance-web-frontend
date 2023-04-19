import axios from "axios"

const BaseUrl = 'http://localhost:8000/api/v1'





export const getSellerSearch = async(search,page,category,language,experience)=>{
    console.log('from api:',page)
    search= search ? search : '';
    page = page ? page : '';
    category = category ? category :'';
    language = language ? language :'';
    experience = experience ? experience :'';

    

    try{
         const response = await axios.get(`${BaseUrl}/searchJobPosts/jobposts/?search=${search}&page=${page}&category=${category}&language=${language}&experience=${experience}`)
         console.log('page: ',page, ":", response)
         return response;
    }
    catch(error)
    {
        console.log(error)
    }

}


export const getAllJobs = async()=>{
    try{
            const response = await axios.get(`${BaseUrl}/jobpost/all`)
            return response;
    }
    catch(err)
    {
        console.log(err)
    }
}

