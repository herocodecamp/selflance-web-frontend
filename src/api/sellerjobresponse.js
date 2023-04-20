import axios from "axios"

const BaseUrl = 'http://localhost:8000/api/v1'


export const jobResponse = async(userDeatilID,jobID,jobDetails)=>{

    try{
        const response = await axios.post(`${BaseUrl}/jobresponse/${userDeatilID}/${jobID}/create`,jobDetails,{
            headers: {
                "Content-Type": "multipart/form-data",
              },
        })

        
        return response
    }
    catch(err)
    {
        console.log(err)
    }
}