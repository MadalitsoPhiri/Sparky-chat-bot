import React,{useEffect,useState} from 'react'
import LoginForm from './components/LoginForm';
import ChatInterface from './components/ChatInterface'
import {Switch,Route} from "react-router-dom";
import {socket} from './socket'
socket.on("connect", () => {
    console.log("connected"); // prints { x: "42", EIO: "4", transport: "polling" }
    socket.emit('onTraffic')
    
  
});

socket.on("onAck",(payload)=>{
    console.log(payload)
})

export default function App() {
    useEffect(()=>{
      
    },[])
    return (
        
    <div className="flex flex-col bg-gray-100 h-full overflow-y-auto w-full relative">
        <Switch>
            <Route path="/" exact component={LoginForm}/>
            <Route path="/chat" component={ChatInterface}/>
 
         
      
        </Switch>
    </div>
       
    )
}
