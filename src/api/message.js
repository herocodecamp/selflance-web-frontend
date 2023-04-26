import axios from "axios"

const BaseUrl = 'http://localhost:8000/api/v1'



// get all conversations of user using userDetail ID


export const getConversation = async(userID)=>{



    try{
         const response = await axios.get(`${BaseUrl}/inbox/conversation/${userID}`)
         return response;
    }
    catch(error)
    {
        console.log(error)
    }

}


// get messages out of the conversation using conversationID

export const getMessage = async(convID)=>{



    try{
         const response = await axios.get(`${BaseUrl}/inbox/message/${convID}`)
         return response;
    }
    catch(error)
    {
        console.log(error)
    }

}

// post new Message
export const postMessage = async(message)=>{



    try{
         const response = await axios.post(`${BaseUrl}/inbox/message/create`,message)
         return response;
    }
    catch(error)
    {
        console.log(error)
    }

}

