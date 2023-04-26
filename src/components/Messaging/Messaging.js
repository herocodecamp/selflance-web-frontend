import React,{useEffect,useState} from 'react'
import MessagingView from './MessagingView'
import { useSelector } from 'react-redux'
import { getConversation } from '../../api/message'

const Messaging = () => {

 const userDetails = useSelector(state=>state.UserData.data)

 const [conversations, setConversations] = useState(null);

 useEffect(()=>{
    getConversation(userDetails._id).then((resp)=>{
        if(resp && resp.error) {console.log(resp.error)}
        setConversations(resp.data)
        console.log("first fetch",resp.data)
    }).catch(err=>console.log(err))
 },[userDetails._id])


  return (
    conversations && 
    (<MessagingView conversations={conversations} currentUser={userDetails._id}/>)
  )
}

export default Messaging