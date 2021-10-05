import React,{useEffect,useState} from 'react'
import LoginForm from './components/LoginForm';
import ChatInterface from './components/ChatInterface'
import {Switch,Route,MemoryRouter} from "react-router-dom";
import {socket} from './socket'
import Options from './components/Options';
import WeedGennie from './components/WeedGennie';
import {motion, AnimatePresence} from "framer-motion"
import Home from './components/Home';
import ChatArea from './components/ChatArea';
import {useDispatch,useSelector} from "react-redux";
import { recieveNewMessage, updateMessage } from './store/slices/ConversationsSlice';

export default function App() {
    const [isOpen,setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const conversations = useSelector(state => state.conversations)
  
    useEffect(()=>{
        socket.on("connect", () => {
            console.log("connected"); // prints { x: "42", EIO: "4", transport: "polling" }
            socket.emit('onTraffic')
            
          
        });
        
        socket.on("onAck",(payload)=>{
            console.log("onAck",payload)
            dispatch(updateMessage(payload))
        })

        socket.on("onAgentNewMessage",(msg)=>{
            dispatch(recieveNewMessage(msg))
        })

       

        console.log(conversations)
        
    },[])
    const handleOpen = ()=>{
        setIsOpen(!isOpen)
    }
    return (
        <MemoryRouter  initialIndex={1}>
    {/* <div className="flex flex-col bg-gray-100 h-full overflow-y-auto w-full relative">
        <Switch>
            <Route path="/" exact>
            <LoginForm />
            </Route>
            <Route path="/chat" exact>
            <ChatInterface />
            </Route>
            <Route path="/options" exact>
            <Options />
            </Route>
            <Route path="/weedgennie" exact>
            <WeedGennie />
            </Route>
 
         
      
        </Switch>
    </div> */}



  <div className="fixed -bottom-0 right-0  w-full h-full  flex flex-col items-end  justify-end sm:p-5 sm:max-h-[850px] sm:min-h-[400px] overflow-y-hidden">
  <AnimatePresence>
    {isOpen && <motion.div animate={{y:0,opacity:1}} initial={{y:50,opacity:0}} exit={{y:50,opacity:0}} transition={{type:"tween"}} className={`relative rounded-lg w-full h-full flex  bg-white flex-1 shadow-xl sm:mb-5  sm:w-96 overflow-y-hidden z-10 `}>
    <div onClick={handleOpen} className="p-2 rounded-lg fixed right-6 top-5 sm:hidden flex flex-col justify-center items-center cursor-pointer z-50"><div className="rounded-lg absolute bg-black opacity-30 w-full h-full"></div><svg className="w-6 h-6 text-white z-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></div>
    <AnimatePresence >
    <Switch>
            <Route path="/" exact>
                
            <Home />
            </Route>
            <Route path="/chat" exact>
            <ChatArea />
            </Route>

            <Route path="/chat/:index" exact>
            <ChatArea />
            </Route>
            <Route path="/options" exact>
            <Options />
            </Route>
            <Route path="/weedgennie" exact>
            <WeedGennie />
            </Route>
 
         
      
        </Switch>
        </AnimatePresence>
       </motion.div>}
    </AnimatePresence>
    <div className=" absolute -bottom-0 right-0 m-5 sm:m-0 cursor-pointer rounded-full flex sm:static bg-[#602E9E] w-[60px] h-[60px] flex-shrink-0 shadow-2xl flex-col justify-center items-center " onClick={handleOpen}> 
      <motion.svg animate={{rotateZ:isOpen?0:180,originX:"50%",originY:"50%"}} className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></motion.svg>
    </div>
  </div>
 
</MemoryRouter> 
    )
}
