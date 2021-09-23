import React, { useEffect } from 'react'
import InfoCard from './InfoCard'
import { useHistory } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import ConversationPreview from './ConversationPreview';

export default function Home() {
  const history = useHistory()

  const conversationState = useSelector(state => state.conversations)
  const conversationCount = conversationState.length
  const handleSendMesage = ()=>{
    history.push('/chat')
  }

  const handleContinueConversation = (index)=>{
    history.push(`/chat/${index}`)
  }

  useEffect(()=>{
  console.log("Home: ",conversationCount)
  },[])
    return (
     
         <motion.div  className="relative flex flex-1 w-full h-full bg-white overflow-y-auto" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0 ,x:-200}}>
      <div className="absolute bg-[#602E9E] h-64 w-full "></div>
      <div className="bg-transparent w-full h-full z-10 overflow-y-auto p-4">
           
          <motion.div className="bg-transparent w-full  mb-4 p-5" initial={{y:200,opacity:0}} animate={{y:0,opacity:1}} transition={{type:"tween",duration:0.4}}>
            
            <svg className="w-8 h-8 mb-4 text-[#FDD518]" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path></svg>
            <p className="text-white font-normal text-3xl mb-4"> <span className="mr-0">Hi</span> <span className="text-4xl">✌️</span></p>
            <p className="text-white font-extralight text-[13px] text-base">Sparky helps you make personalized cannabis recommendations.</p>
          </motion.div>

          {conversationCount > 0 && <InfoCard>
            <div className="w-full">
            <p className="text-base mt-6 mb-3 mx-6">Continue the conversation</p>
            {conversationState.map((item,index)=>{
              return  <div key={index} onClick={()=>handleContinueConversation(index)}><ConversationPreview/></div>
            })}
              

            </div>  
           
            </InfoCard>}
          {/* <!-- Spark a conversation component --> */}
       {conversationCount < 3 ? <motion.div className="border-[#9f8bb8] border-t-2 rounded-md shadow-lg bg-white w-full  mb-4" initial={{y:200,opacity:0}} animate={{y:0,opacity:1}} transition={{type:"tween",duration:0.4}}>
            <div className="border border-t-none rounded-t-none  px-6 py-[26px]">
              <p className="mb-4 text-base font-semi-bold">{conversationCount === 0? "Spark a conversation":"Spark another conversation"}</p>
              <div className="flex flex-row mb-4">
                    <div className="mr-4 flex flex-row -space-x-10">
                      <div className="bg-red-500 h-14 w-14 rounded-full border-4  border-white"></div>
                        <div className="bg-green-500 h-14 w-14 rounded-full border-4  border-white"></div>
                          <img src="https://scontent.flun1-1.fna.fbcdn.net/v/t1.6435-9/39500132_10155573310807401_2542865486727610368_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEm7xlGIvoPy-vPuTYQQcwd1CQcxXR2lHTUJBzFdHaUdE13lgeOOMBVodwGBoY-GaNGLMD27Oh1fRcIQ_yyGOz6&_nc_ohc=4R2AYO8JjY4AX8kTjkO&_nc_ht=scontent.flun1-1.fna&oh=b5037090e4d50eb00979a37aff2600fa&oe=61718E5E" className="bg-black h-14 w-14 rounded-full  border-4  border-white"/>
                    </div>
                    <div>
                      <p className="text-[#737376] text-sm font-light">Our usual reply time</p>
                      <div className="flex flex-row justify-start items-center">
                        <svg className="w-4 h-4 text-[#602E9E]  mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <p className="text-black text-sm font-semibold">A few minutes</p>
                      </div>
                      
                    </div>
              </div>
              <button onClick={handleSendMesage} className={`rounded-full  ${conversationCount ===0 ?"bg-[#602E9E]":"bg-transparent border-2 border-[#602E9E]"} flex flex-row justify-center items-center px-7 py-3`}>
                 <svg className={`w-6 h-6 ${conversationCount === 0?"text-white":"text-[#602E9E]"} transform rotate-90`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                 <p className={`ml-3 ${conversationCount === 0?"text-white":"text-[#602E9E]"} text-sm`}>Send us a message</p>
              </button>

             </div>
          </motion.div>:null}
         


          {/* <!-- ask sparky component --> */}
         <motion.div className="border-[#938bb8] border-t-2 rounded-md shadow-lg bg-white w-full  mb-4" initial={{y:200,opacity:0}} animate={{y:0,opacity:1}} transition={{type:"tween",duration:0.4}}>
            <div className="border border-t-none rounded-t-none flex flex-col px-6 py-[26px]">
              <p className="font-semibold mb-3">Ask Sparky</p>
             <div className="w-full flex flex-row ">
               <input type="text" className="focus:bg-white bg-gray-50 pl-4 border border-gray-300 rounded-l flex-1 h-10  outline-none shadow-inner" placeholder="Search our articles"/>
               <div className="bg-[#602E9E] w-10 h-10 rounded-r flex justify-center items-center cursor-pointer flex-shrink-0">
                 <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
               </div>
             </div>
            </div>
          </motion.div>



       <InfoCard>
          <div className="w-full h-full  flex flex-col cursor-pointer">
            <img className="justify-self-center object-contain w-full" src="https://storage.googleapis.com/propzi-1e9c2.appspot.com/Black%20and%20White%20Summer%20Collage%20Instagram%20Post%20(1)%201.png"/>
            <div className="w-full h-auto bg-[#FAFAFA] flex flex-col p-4">
              <p className="text-[#602E9E] font-bold">Brampton Launch Giveaway</p>
              <p className="text-[#818283]"> Visit us for our new store launch this Sunday! We have prizes, contests, ice-cream and more.</p>
            </div>
          </div>
       </InfoCard>
        {/* <div className="border-[#9f8bb8] border-t-2 rounded-md shadow-lg bg-white w-full h-20 mb-4">
            <div className="border border-t-none rounded-sm h-full">

            </div>
          </div> */}



           

                </div>
     </motion.div>
      
    
    )
}


