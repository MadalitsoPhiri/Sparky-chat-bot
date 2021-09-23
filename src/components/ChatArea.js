import React, { useEffect, useState, useRef } from 'react'
import { useHistory, useParams } from "react-router-dom";
import { AnimatePresence, motion, } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import Message from './Message';
import { addNewConversation, createConversation, sendMessage } from '../store/slices/ConversationsSlice';

export default function ChatArea() {
    let history = useHistory();
    let { index } = useParams()
    const dispatch = useDispatch()
    const conversations = useSelector(state => state.conversations)
    const [messageInput,setMessageInput] = useState("")
    const [conversationIndex,setConversationIndex] = useState(null)
    const [tempCoversationIndex,setTempCoversationIndex] = useState(null)

    const [sendButtonVisible,setSendButtonVisible] = useState(false)
    const [toolbarExpanded,setToolbarExpanded] = useState(false)
    const messagesEndRef = useRef()
   
  
    const handleBack = ()=>{
        history.goBack()
    }
    const handleSendMessage = ()=>{
        if(conversationIndex != null){
            const messageLength = conversations[conversationIndex].messages.length
            if(messageInput != ""){
                dispatch(sendMessage({text:messageInput,sender:"client",email:"annonymous",name:"annonynous",date:new Date(),status:"sending",conversationIndex,messageIndex:messageLength}))
               
              }
        }else{
            // create a new conversation
            const con = {
                id:1237468734,
                messages:[{text:messageInput,sender:"client",email:"annonymous",name:"annonynous",date:new Date(),status:"sending",conversationIndex:conversations.length,messageIndex:0}],
                sessionId:null,
                lastmessage:{text:messageInput,sender:"client",email:"annonymous",name:"annonynous",date:new Date(),status:"sending",conversationIndex:conversations.length,messageIndex:0}
            }
        
            //dispatch to store
            setTempCoversationIndex(conversations.length)
          dispatch(createConversation(con))



        }
         console.log(conversations) 
    }

    const handleSendMessagefromOptions = (e)=>{
       console.log(e.target.textContent)
       setMessageQeue((prev)=>[...prev,{text:e.target.textContent,sender:"annonymous",email:""}])
    }

  
    const handleMessageInputChnage = (e)=>{
        setMessageInput(e.target.value)
        if(e.target.value === ""){
          setSendButtonVisible(false)
        }else{
            setSendButtonVisible(true)
        }

    }

    const handleToolbarExpansion = ()=>{
        // if(!toolbarExanded){
        //     setToolbarExpanded(true)
        // }
        // setToolbarExpanded(!toolbarExpanded)
      
    }
    useEffect(()=>{
        if(conversationIndex == null){
          setConversationIndex(tempCoversationIndex)
        }
     },[conversations])

    useEffect(()=>{
        if(index){
            console.log("conversationId",index)
            setConversationIndex(index)
          }
     },[])
  
    
    return (
        <div className="relative flex flex-col flex-1 w-full h-full bg-white overflow-y-hidden">
            <div  className="flex-1 flex flex-col overflow-y-hidden">
                {/* toolbar */}
                <div className={`bg-[#602E9E] py-3 px-2 flex flex-row flex-shrink-0`}>
                    {/* back button */}
                    <div onClick={handleBack} className="px-3 py-6 flex justify-center items-center cursor-pointer h-0 hover:bg-[#0000002d]  rounded-lg">
                    <svg class="w-[28px] h-[28px] text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </div>

                   <div onClick={handleToolbarExpansion} className={`${!toolbarExpanded && "hover:bg-[#0000002d]"} rounded-lg px-2 cursor-pointer ml-2 `}>

                   <AnimatePresence>
                       {!toolbarExpanded?<motion.div className="flex flex-row items-center justify-center ">
                                <div className="relative flex flex-row py-2  w-9 justify-center items-center">
                                
                                <div className="absolute -top-2 left-0 bg-red-500 h-9 w-9 rounded-full border-2  border-[#602E9E] "></div>
                                <div className="absolute -top-2 left-2 bg-green-500 h-9 w-9 rounded-full border-2  border-[#602E9E] "></div>
                                <div className="absolute -top-2 left-4 bg-blue-500 h-9 w-9  rounded-full border-2  border-[#602E9E] ">
                                <img src="https://scontent.flun1-1.fna.fbcdn.net/v/t1.6435-9/39500132_10155573310807401_2542865486727610368_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEm7xlGIvoPy-vPuTYQQcwd1CQcxXR2lHTUJBzFdHaUdE13lgeOOMBVodwGBoY-GaNGLMD27Oh1fRcIQ_yyGOz6&_nc_ohc=4R2AYO8JjY4AX8kTjkO&_nc_ht=scontent.flun1-1.fna&oh=b5037090e4d50eb00979a37aff2600fa&oe=61718E5E" className="bg-black rounded-full "/>
                                </div>
                                

                                    
                            </div>

                            <motion.div className="ml-7" initial={{opacity:0}} animate={{opacity:1}} transition={{type:"tween"}}>
                                <p className="text-white text-base font-light">Sparky</p>
                                <div className="flex flex-row justify-start items-center">
                                <svg className="w-4 h-4 text-gray-100 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                <p className="text-gray-100 text-sm font-light">A few minutes</p>
                                </div>
                                
                            </motion.div>

                       </motion.div>:
                      
                       <motion.div className="flex flex-col pb-2" initial={{height:0}} animate={{height:"180px"}} transition={{type:'tween'}} exit={{height:0}}>
                       <p className="text-white text-xl font-light my-2">Sparky</p>
                       <p className="text-[#ffffffc7] font-light text-sm mb-4">Sparky helps you make personalized cannabis recommendations.</p>
                       <div>
                       <motion.div className="flex flex-row mb-4" initial={{opacity:0}} animate={{opacity:1}} transition={{type:"tween",delay:0.2}}>
                    <div className="mr-4 flex flex-row -space-x-10">
                      <div className="bg-red-500 h-14 w-14 rounded-full border-4  border-[#602E9E]"></div>
                        <div className="bg-green-500 h-14 w-14 rounded-full border-4  border-[#602E9E]"></div>
                          <img src="https://scontent.flun1-1.fna.fbcdn.net/v/t1.6435-9/39500132_10155573310807401_2542865486727610368_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEm7xlGIvoPy-vPuTYQQcwd1CQcxXR2lHTUJBzFdHaUdE13lgeOOMBVodwGBoY-GaNGLMD27Oh1fRcIQ_yyGOz6&_nc_ohc=4R2AYO8JjY4AX8kTjkO&_nc_ht=scontent.flun1-1.fna&oh=b5037090e4d50eb00979a37aff2600fa&oe=61718E5E" className="bg-black h-14 w-14 rounded-full  border-4  border-[#602E9E]"/>
                    </div>
                    <div>
                      <p className="text-[#ffffffc7] text-sm font-light">Our usual reply time</p>
                      <div className="flex flex-row justify-start items-center">
                        <svg className="w-4 h-4 text-white  mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <p className="text-white text-sm font-semibold">A few minutes</p>
                      </div>
                      
                    </div>
              </motion.div>
                       </div>
                           </motion.div>
                           }
                           </AnimatePresence>
                  

                   </div>

              
                </div>
                {/* chat messages */}
                <div className="overflow-y-auto w-full flex-1 flex flex-col  ">
                 
                
                  {conversationIndex === null ?<div className="flex flex-col items-end justify-end h-full px-[26px] py-[26px]">
                            <div className="group rounded-lg p-[10px] bg-transparent  mb-2 ">
                                <p className="text-[#a7a5aa]   text-sm text-right">👋  Hey hey! Welcome to Leaf Lab Cannabis.How can we help you today?</p>
                            </div>
                            <div onClick={handleSendMessagefromOptions} className="group rounded-lg p-[10px] bg-[#e4dcec] mb-2 hover:bg-[#602E9E] cursor-pointer">
                                <p className="text-[#602E9E] group-hover:text-white  text-sm">Just browsing!</p>
                            </div>

                            <div onClick={handleSendMessagefromOptions} className="group rounded-lg p-[10px] bg-[#e4dcec] mb-2 hover:bg-[#602E9E] cursor-pointer">
                                <p className="text-[#602E9E] group-hover:text-white  text-sm">I’m new to Cannabis and have a question.</p>
                            </div>

                            <div onClick={handleSendMessagefromOptions} className="group rounded-lg p-[10px] bg-[#e4dcec] mb-2 hover:bg-[#602E9E] cursor-pointer">
                                <p className="text-[#602E9E] group-hover:text-white text-sm">Help me pick the right strains and products.</p>
                            </div>
                  </div>:<div className="flex flex-col items-end  h-full overscroll-y-auto overflow-x-hidden px-[26px] py-[26px]">
                            {conversations[conversationIndex].messages.map((item,index)=>{
                               return <Message msg={item} key={index}/>
                                  
                            })}
                            <div ref={messagesEndRef} /> 
                      </div>}



                </div>
            </div>
            <motion.div initial={{y:"200"}} animate={{y:0}} transition={{type:"tween",duration:0.3,ease:"anticipate"}} className="flex flex-row w-full border-t border-gray-200 py-[18px] pl-7 pr-5 flex-shrink-0">
                <input value={messageInput} onChange={handleMessageInputChnage} className="flex-1 outline-none text-[13px] mr-4" type="text" placeholder="Send a message.."/>
                <button className="flex-shrink-0 mr-2 rounded-full hover:bg-gray-100"><svg class="w-[20px] h-[20px]  text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path></svg></button>
                {sendButtonVisible && <button onClick={handleSendMessage} className="flex-shrink-0 rounded-full hover:bg-gray-100"><svg class="w-[20px] h-[20px] text-[#602E9E] transform rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg></button>}
            </motion.div>
        </div>
    )
}
