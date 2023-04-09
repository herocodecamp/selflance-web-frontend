import axios from "axios"

const BaseUrl = 'http://localhost:8000/api/v1'

const USER_END_POINT ={
    SIGNUP: ()=> '/user/signup',
    VERIFY_OTP: ()=> '/user/verifyOTP',
    LOGIN: ()=> '/user/login',
    USER_DETAILS: '/user/userDetails'
}

const URL = (endPoint) => `${BaseUrl}${endPoint}`
console.log(URL)

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