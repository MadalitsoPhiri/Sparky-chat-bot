import React,{useContext} from 'react'
import { format } from 'timeago.js';
import { AuthContext } from './AuthContext';
import {motion} from "framer-motion"


export default function Message({msg}) {

    return (
       msg.sender != "client" ? <motion.div initial={{y:300}} animate={{y:0}} transition={{type:"tween"}} className="w-full flex flex-col items-start mb-5" >
           <div className="w-full mb-2 flex flex-row overflow-x-hidden items-end">
            <div className="bg-gray-500 w-8 h-8 flex flex-row justify-center items-center flex-shrink-0 mr-3 mb-5 rounded-full">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path></svg>
                </div> 
                <div className="flex flex-col flex-1 w-full">
                <p className="text-sm text-black flex-1 px-4 py-4 bg-[#e6e4e7] rounded-md  break-words max-w-[85%] mb-1">
     {msg.text}
</p> 
<p className="text-[13px] font-light text-gray-700">{msg.sender} • {format(msg.date)}.</p> 
                </div>  
           
               </div>
  
</motion.div>    :<motion.div initial={{y:300}} animate={{y:0}} transition={{type:"tween"}} className="w-full flex flex-col items-end mb-5"><p className="text-sm text-white px-4 py-4 bg-[#6c459c] rounded-md max-w-[90%] break-words mb-1">
        {msg.text}
</p> 
<p className="text-[13px] font-light text-gray-700">{msg.status === "sent" ? format(msg.date):msg.status}</p>   
</motion.div>    
    )
}
