import React from 'react'
import avatar from "../../Assets/svg/user.svg"


export default function Conversation({conversation, currentUser}) {

var otherUsers=[]

conversation.members[0].receiverDetailId._id !== currentUser && otherUsers.push(conversation.members[0].receiverDetailId)
conversation.members[0].sendersDetailId._id !== currentUser && otherUsers.push(conversation.members[0].sendersDetailId)
//  filtering other users 
//  conversation.members.map((item)=>
//  {
//     item.receiverDetailId._id !== currentUser && otherUsers.push(item);
//     item.sendersDetailId._id !== currentUser && otherUsers.push(item)

//     return otherUsers
//  }
//  )
const PF = process.env.REACT_APP_PF
 console.log("=>",otherUsers)

  return (
    <div>
        <div className='flex items-center py-1 px-6 cursor-pointer hover:bg-gray-200'>
                                <div className='flex items-center py-1 '>
                                <div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                    <img src={otherUsers[0].profileImage ? `${PF}/${otherUsers[0].profileImage}`: avatar} alt='' />
                                </div>
                                    <div className='ml-4'>
                                        <h1 className='text-sm font-medium'>{otherUsers[0].firstname} {otherUsers[0].lastname}</h1>
                                        {/* <p className='text-xs text-gray-400'>{message.message}</p> */}
                                    </div>
                                </div>
                                {/* <div className='ml-auto flex flex-col'>
                                    <p className='text-xs text-gray-400'>{message.time}</p>
                                    {message.unread > 0 &&
                                    <div className='text-xs text-right items-center ml-2 scale-75'><span className=' px-1 rounded-full bg-red-500 text-white'>{message.unread}</span></div>
                                    }
                                </div> */}
                            </div>
    </div>
  )
}
