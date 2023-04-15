import axios from "axios"

const BaseUrl = 'http://localhost:8000/api/v1'

const USER_END_POINT ={
    SIGNUP: ()=> '/user/signup',
    VERIFY_OTP: ()=> '/user/verifyOTP',
    LOGIN: ()=> '/user/login',
    USER_DETAILS: '/user/userDetails',
    GIG_CREATE: '/gig',
    JOB_CREATE: '/jobpost'
}

const URL = (endPoint) => `${BaseUrl}${endPoint}`
console.log(URL)



//===========> USerDetails API
export const submitUserDetails = async(userDetails, userId) =>{

    try{
        const response = await axios.post(`${BaseUrl}/${USER_END_POINT.USER_DETAILS}/${userId}/create`,userDetails,{
            headers: {
                "Content-Type": "multipart/form-data",
              },
        })

        console.log(response)
        return response
    }
    catch(err)
    {
        console.log(err)
    }
}

export const getUserDetails = async(userId) =>{
    console.log('calling....')
    try{
        const response = await axios.get(`${BaseUrl}/${USER_END_POINT.USER_DETAILS}/${userId}`)

        
        return response
    }
    catch(err)
    {
        console.log(err)
    }
}



//======> Gigs API

export const gigCreate = async(gigDetails, userId) =>{
    try{
        const response = await axios.post(`${BaseUrl}/${USER_END_POINT.GIG_CREATE}/${userId}/create`,gigDetails,{
            headers: {
                "Content-Type": "multipart/form-data",
              },
        })

        console.log(response)
        return response
    }
    catch(err)
    {
        console.log(err)
    }
}

//reading ALL Gigs of the user
export const readAllGigs = async(userId) =>{
    try{
        const response = await axios.get(`${BaseUrl}/${USER_END_POINT.GIG_CREATE}/${userId}`)

        console.log(response)
        return response
    }
    catch(err)
    {
        console.log(err)
    }
}

// reading one gig
export const readGig = async(gigID) =>{
    try{
        const response = await axios.get(`${BaseUrl}/${USER_END_POINT.GIG_CREATE}/gigs/${gigID}`)

        console.log(response)
        return response
    }
    catch(err)
    {
        console.log(err)
    }
}




//===============> JObPOST API
export const jobCreate = async(jobDetails, userId) =>{
    try{
        console.log("from API: ", jobDetails)
        const response = await axios.post(`${BaseUrl}/${USER_END_POINT.JOB_CREATE}/${userId}/create`,jobDetails,{
            headers: {
                "Content-Type": "multipart/form-data",
              },
        })

        console.log(response)
        return response
    }
    catch(err)
    {
        console.log(err)
    }
}


export const readAllJobs = async(userId) =>{
    try{
      
        const response = await axios.get(`${BaseUrl}/${USER_END_POINT.JOB_CREATE}/${userId}/jobposts`)

        console.log(response)
        return response
    }
    catch(err)
    {
        console.log(err)
    }
}








export const userSignUp = async(userInfo) =>{

    try {
        const {data} = await axios.post(URL(USER_END_POINT.SIGNUP()),{
            ...userInfo
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}
export const userVerifyOtp = async(info) =>{

    try {
        const {data} = await axios.post(URL(USER_END_POINT.VERIFY_OTP()),{
            ...info
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}
export const loginUser = async(info) =>{

    try {
        const {data} = await axios.get(URL(USER_END_POINT.LOGIN()),{
            params:{...info}
        });
        return data;
    } catch (error) {
        console.log(error)
    }
}