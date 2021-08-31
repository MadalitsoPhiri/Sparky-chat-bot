import React,{useContext} from 'react'
import { format } from 'timeago.js';
import { AuthContext } from './AuthContext';

export default function Message({msg}) {
    const {user} = useContext(AuthContext)
    console.log(msg)
    console.log(user)
    return (
        <div className={` p-2 rounded-lg ${msg.senderId === user._id ?'self-end owner bg-yellow-200 mr-2':'bg-gray-200 self-start peer ml-2'} max-w-3/4 relative  flex flex-col gap-2`}>
            <p className="text-black font-medium text-xs  break-words mr-1">{msg.text}</p>
            <p className="self-end text-xs">{format(msg.createdAt)}</p>
        </div>
    )
}
