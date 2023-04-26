import React from 'react'
import {BsEmojiSmile, BsFillCheckCircleFill, BsFillStarFill, BsSearch, BsThreeDotsVertical} from 'react-icons/bs'
import avatar from "../../Assets/svg/user.svg"


export default function Messages({msg, own, currentUserID}) {

    console.log("from message component: ", msg ,"and", own)
    const PF = process.env.REACT_APP_PF

    // extracting own data
    const ownData = msg.conversationId.members[0].sendersDetailId._id === currentUserID ?  msg.conversationId.members[0].sendersDetailId : msg.conversationId.members[0].receiverDetailId

    
    // extracting other user data
    const otherData = msg.conversationId.members[0].sendersDetailId._id !== currentUserID ?  msg.conversationId.members[0].sendersDetailId : msg.conversationId.members[0].receiverDetailId

    // console.log("own data: ", ownData)
    // console.log("other data: ", otherData)

  return (
                
    <div className=''>
                <div className='flex items-center py-1 px-2 lg:px-8'>
                               
                                    { !own ?
                                <div className={`flex py-1`}>
                                        <div className={`flex`}>
                                            <div className="relative w-10 h-10 overflow-hidden bg-[#C1BAF2] rounded-full dark:bg-gray-600">
                                                <img src={otherData.profileImage? `${PF}/${otherData.profileImage}` : avatar} alt='' />
                                            </div>
                                            <div className='flex-col '>
                                                <p className='text-xs font-bold mb-2'>{otherData.firstname} {otherData.lastname}</p>
                                                <p className='text-xs p-2 lg:p-5 bg-[#E0E0E0] rounded-lg rounded-tl-none'>{msg.text}</p>
                                            </div>
                                        </div>
                                        
                                </div>
                                :
                                <div className={`flex py-1 ml-auto`}>
                                    <div className={`flex flex-row-reverse`}>
                                        <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                            <img src={ownData.profileImage? `${PF}/${ownData.profileImage}` : avatar} alt='' />
                                        </div>
                                        <div className='flex-col '>
                                            <p className='text-xs font-bold mb-2 text-right'>you</p>
                                            <p className='text-xs p-2 lg:p-5 bg-[#2F80ED] text-white rounded-lg rounded-tr-none'>{msg.text}</p>
                                        </div>
                                    </div>

                                </div>

                                    }
                            </div>
    
    </div>
  )
}
