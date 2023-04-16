import axios from "axios"

const BaseUrl = 'http://localhost:8000/api/v1'





const getSearch = async(search,page,subCategory)=>{

    search= search ? search : '';
    page = page ? page : '';
    subCategory = subCategory ? subCategory :'';

    try{
         const response = await axios.get(`${BaseUrl}/searchGigs/gigs/?search=${search}&page=${page}&subCategory=${subCategory}`)
         return response;
    }
    catch(error)
    {
        console.log(error)
    }

}

export default getSearch;