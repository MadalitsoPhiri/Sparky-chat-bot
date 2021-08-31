import React,{useEffect,useState} from 'react'
import LoginForm from './components/LoginForm';
import ChatInterface from './components/ChatInterface'
import {Switch,Route,MemoryRouter} from "react-router-dom";
import {socket} from './socket'
import Options from './components/Options';
import WeedGennie from './components/WeedGennie';
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
        <MemoryRouter  initialIndex={1}>
    <div className="flex flex-col bg-gray-100 h-full overflow-y-auto w-full relative">
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
    </div>
</MemoryRouter> 
    )
}
