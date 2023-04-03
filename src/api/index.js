import axios from "axios"

const BaseUrl = 'http://localhost:8000/api/v1'

const USER_END_POINT ={
    SIGNUP: ()=> '/user/signup',
    VERIFY_OTP: ()=> '/user/verifyOTP',
}

const URL = (endPoint) => `${BaseUrl}${endPoint}`
console.log(URL)

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