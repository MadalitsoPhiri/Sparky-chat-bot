import React,{useState,useEffect,useContext} from 'react'
import Loading from './Loading'
import {socket} from '../socket'
import { AuthContext } from './AuthContext'
import Message from './Message'

const Loader = ()=>{
    return(
        <div
        class="bg-white flex space-x-2 pt-3 px-3 pb-1 rounded-full justify-center "
      
        
      >
      <div class="bg-gray-500 p-1 w-2 h-2 rounded-full messageLoadingAnimation"></div>
      <div class="bg-gray-500 p-1 w-2 h-2 rounded-full messageLoadingAnimation-200"></div>
      <div class="bg-gray-500 p-1 w-2 h-2 rounded-full messageLoadingAnimation-400"></div>
      
      </div>
    )
}
export default function ChatInterface() {
    const {user} = useContext(AuthContext)
    const [loading, setLoading] = useState(true)
    const [messages,setMessages] = useState([])
    const [inputText,setInputText] = useState('')
    useEffect(() => {
        socket.emit('Queued',user)
        socket.on('onStartCon',()=>{
            setLoading(false)
        })
        socket.on('agentMessage',(msg)=>{
         setMessages(prev=>[...prev,msg])
        })
        socket.on('onNewMessage',(msg)=>{
            console.log('msg:'+ msg.text)
            setMessages(prev=>[...prev,msg])
            setLoading(false)
        })
    }, [])

    const handlechatInputChange = (e)=>{
       setInputText(e.target.value)
    }

    const handleMessageSend = ()=>{
       let lastMessage =  messages[messages.length - 1]
      console.log(inputText)
      socket.emit('newMessage',{conversationId:lastMessage.conversationId,text:inputText,senderId:user._id},()=>{})
    }
  
    if(loading){
      return <Loading msg="finding available agents please wait..."/>  
    }
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="flex flex-col flex-1 bg-yellow-50 w-full overflow-y-auto p-4 gap-5">
            {/* <div className="bg-yellow-200 p-2 rounded-lg self-end max-w-3/4 owner relative mr-2 flex flex-col gap-2">
            <p className="text-black font-medium text-xs  break-words mr-1">Hello there gdgdgdfdfd dgdgdgdvdgd hddhdbhdbd djbddbdhbdhd jndjndjdnjdnjdnd jdjdjdnjdnjddjdjdj kmdkdkmdkdmkdmkdmkdmd</p>
            <p className="self-end text-xs">yestarday</p>
            </div>

            <div className="bg-gray-200 p-2 rounded-lg self-start max-w-3/4 peer relative ml-2 flex flex-col gap-2">
            <p className="text-black font-medium text-xs  break-words ml-1">Hello there gdgdgdfdfd dgdgdgdvdgd hddhdbhdbd djbddbdhbdhd jndjndjdnjdnjdnd jdjdjdnjdnjddjdjdj kmdkdkmdkdmkdmkdmkdmd</p>
            <p className="self-end text-xs">yestarday</p>
            </div>

            
            <div className="bg-gray-200 p-2 rounded-lg self-start max-w-3/4 peer relative ml-2 flex flex-col gap-2">
            <p className="text-black font-medium text-xs  break-words ml-1">Hello there gdgdgdfdfd </p>
            <p className="self-end text-xs">yestarday</p>
            </div>

            
            <div className="bg-gray-200 p-2 rounded-lg self-start max-w-3/4 peer relative ml-2 flex flex-col gap-2">
            <p className="text-black font-medium text-xs  break-words ml-1">Hello there gdgdgdfdfd dgdgdgdvdgd hddhdbhdbd djbddbdhbdhd </p>
            <p className="self-end text-xs">yestarday</p>
            </div> */}
              {messages.map((item,index)=>{
                  return <Message msg={item} key={index}/>
              })}
            </div>
            <div className=" w-full p-3 flex flex-row gap-3">
                <input value={inputText} onChange={handlechatInputChange} type="text" name="price" id="name" className="focus-ring-1 focus:ring-yellow-500 focus:border-yellow-500 block w-full px-3 p-2 sm:text-sm border-2  border-gray-300 rounded-full focus:outline-none shadow-sm"  type="text"></input>
                <button onClick={handleMessageSend} className="rounded-full p-2 bg-yellow-400 flex flex-row justify-center items-center"><svg className="w-6 h-6 transform rotate-90 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg></button>
            </div>
     
        </div>
    )
}
