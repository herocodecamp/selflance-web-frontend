import React, {useState, useEffect} from 'react'
import {BsEmojiSmile, BsFillCheckCircleFill, BsFillStarFill, BsSearch, BsThreeDotsVertical} from 'react-icons/bs'
import { messages } from '../../utils/mockData'
import { chatData } from '../../utils/mockData'
import Conversation from './Conversation';
import Messages from './Messages';
import avatar from "../../Assets/svg/user.svg"
import profileImg from '../../Assets/msg_profile.png';
import {GrAttachment} from 'react-icons/gr'
import { AiOutlineSend } from 'react-icons/ai';

import { getMessage,postMessage } from '../../api/message';

const MessagingView = ({conversations, currentUser}) => {


    const [currentChat, setCurrentChat] = useState(null)
    const [usermessages, setUserMessages] = useState(null)
    const [newMessage, setNewMessage] = useState("")

  

    useEffect(()=>{
        currentChat && getMessage(currentChat._id).then((resp)=>{

            if(resp && resp.error) {console.log(resp.error)}
            
            setUserMessages(resp.data)
        }).catch(err=>console.log(err))

    },[currentChat])

    var other =[]

  usermessages &&  usermessages.map((m)=>
         {
            if(currentUser !== m.sender) {
                m.conversationId.members.map((item)=>(
                    Object.values(item).map((i)=>(i._id?i._id !== currentUser && other.push(i): null))
                ))
            }
         }
    )

    // console.log("from messaging view", usermessages)
    
    const PF = process.env.REACT_APP_PF

    // console.log(currentChat)
    // console.log("messages: ", usermessages)

    const handleSubmit=async(e)=>{
        e.preventDefault()

        const message={
            conversationId: currentChat._id,
            sender: currentUser,
            text: newMessage
        }

        // console.log("new message to post",message)

        postMessage(message).then((resp)=>{
            if(resp && resp.error) {console.log(resp.error)}
            setNewMessage("")
            // console.log("post message response", resp.data)
        }).catch(err=>console.log(err))
    }

  return (
    <div className='max-h-screen h-screen'>
    <div className='grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid h-screen'>
        <div className='hidden col-span-1 md:block bg-[#FAFAFA] min-h-full font-bold overflow-y-scroll'>
            <div>
                <h1 className='text-2xl mt-8 mx-6'>Messages</h1>
                <form className='mx-6'>   
                    <label htmlFor="default-search" className="mb-2 text-sm font-normal text-gray-900 sr-only dark:text-white">Search</label>
                    <div className="relative ">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <BsSearch className=''/>
                        </div>
                        <input type="search" id="default-search" className="block bg-[#F4F4F4] w-full px-4 my-3 pl-10 text-sm text-gray-900 border-none rounded-full focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Messages" required/>
                        <button type="submit" className="sr-only">Search</button>
                    </div>
                </form>
            </div>

            <div>
                {
                    
                    
                    conversations.map((conv)=>
                        (<div key={conv._id} onClick={()=>setCurrentChat(conv)} >
                            <Conversation conversation= {conv} currentUser={currentUser}/>
                        </div>)
                    )

                }
                {/* {
                    messages.map((message) => {
                        return (
                            <div key={message.id} onClick={(e) => {handleProfile(e, message.id)}} className='flex items-center py-1 px-6 cursor-pointer hover:bg-gray-200'>
                                <div className='flex items-center py-1 '>
                                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                    <img src={avatar} alt='' />
                                </div>
                                    <div className='ml-4'>
                                        <h1 className='text-sm font-medium'>{message.name}</h1>
                                        <p className='text-xs text-gray-400'>{message.message}</p>
                                    </div>
                                </div>
                                <div className='ml-auto flex flex-col'>
                                    <p className='text-xs text-gray-400'>{message.time}</p>
                                    {message.unread > 0 &&
                                    <div className='text-xs text-right items-center ml-2 scale-75'><span className=' px-1 rounded-full bg-red-500 text-white'>{message.unread}</span></div>
                                    }
                                </div>
                            </div>
                        )
                    })

                } */}
                
            </div>
            

        </div>


        <div className='col-span-2 relative '>
        

            <div className=''>

                {
                    currentChat ? (
                        <>
                        {
                            other.length >0 && (
                                <>
                                <div  className='flex justify-between bg-[#FAFAFA] p-2 lg:p-4 sticky w-full top-0 z-10'>

                                    <div className='flex items-center gap-2'>
                                        <div className="relative w-16 h-16 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                        <img src={other[0].profileImage? `${PF}/${other[0].profileImage}` : avatar} alt='' />
                                        </div>
                                        <div>
                                            <h3 className='text-xl font-medium'>{other[0].firstname} {other[0].lastname}</h3>
                                            <p className='text-xs text-gray-400'>Last seen 2 hours ago</p>
                                        </div>
                                    </div>

                                    <div className='flex items-center'>
                                        <BsSearch className=' ml-4'/>
                                        <BsThreeDotsVertical className='ml-4'/>   
                                    </div> 

                                </div>

                                </>
                            )
                        }
                        <div className='h-64 overflow-y-scroll overscroll-contain'>
                        {
                           usermessages &&  usermessages.map((m)=>(
                                        <Messages msg={m} own={currentUser === m.sender} currentUserID={currentUser}/>
                            ))
                            
                        }
                        </div>
                        </>
                    
                    ) :
                    <div className='mb-96'>Please Select the Conversation</div>
                }

            </div>

                    {/* message write */}
            <div className='fixed bottom-0 w-[50%]'>
                    <div className=''>
                        <div className='items-center '>
                            <form onSubmit={handleSubmit} className='w-full lg:p-8 p-3 bg-[#FAFAFA] '>
                                <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-5 gap-3 cursor-pointer">
                                    <BsEmojiSmile className=''/>
                                    <GrAttachment className=''/>
                                </div>
                                <input type="text" id="email-address-icon" value={newMessage} className="bg-[#EDEDED] text-gray-900 font-medium text-sm rounded-full border-none focus:border-none block w-full pl-20 pr-10 p-5 " onChange={(e)=>setNewMessage(e.target.value)}/>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-5 cursor-pointer">
                                    <AiOutlineSend />
                                    
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>

         
        </div>



        <div className='profile hidden col-span-1 lg:block h-full bg-[#FAFAFA]'>
        {
            currentChat ? (
                other.length > 0 && (
                    <>
                            
                                <div className='flex flex-col gap-y-10 justify-center p-8 sticky w-full bottom-0 h-full z-10'>
                                    <div className='flex flex-col items-center'>
                                        <div className="relative w-50 h-50 overflow-hidden bg-[#C1BAF2] rounded-full dark:bg-gray-600">
                                            <img src={other[0].profileImage? `${PF}/${other[0].profileImage}` : avatar} alt='' />
                                        </div>
                                        <div className='text-center'>
                                            <h3 className='text-xl font-bold'>{other[0].firstname} {other[0].lastname}</h3>
                                            <p className='text-xs mt-3 text-gray-400'>UI UX Designer</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col justify-between gap-y-3'>
                                        <div className='flex items-center'>
                                            <p className='font-medium text-xl flex-1'>Verification</p>
                                            <p className='text-xs font-medium text-gray-400'>ID: Verified <BsFillCheckCircleFill className='inline text-[#00538F]' /> </p>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='font-medium text-xl flex-1'>Seller Level</p>
                                            <p className='text-xs font-medium text-gray-400'>Level 1 </p>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='font-medium text-xl flex-1'>From</p>
                                            <p className='text-xs font-medium text-gray-400'>{other[0].location && other[0].location}</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='font-medium text-xl flex-1'>Since</p>
                                            <p className='text-xs font-medium text-gray-400'>2020</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className='font-medium text-xl flex-1'>Reviews</p>
                                            <p className='text-xs font-medium text-gray-400'>(49) <span className='text-[#FFB33E]'><BsFillStarFill className='inline'/> 4.9</span></p>
                                        </div>
                                    </div>
                                </div>

                

                    </>
                )
            ): (<></>)
        }
        </div>

    </div>
    </div>
  )
}

export default MessagingView