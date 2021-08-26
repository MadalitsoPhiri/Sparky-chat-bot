//Entry point of react app
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
// import './output.css';
import {MemoryRouter} from 'react-router-dom' 
// import {socket} from './socket'






let head = document.querySelector('head')
//    let socketScript =  document.createElement('script')
//    socketScript.src= "https://cdn.socket.io/3.1.3/socket.io.min.js"
//    socketScript.integrity ="sha384-cPwlPLvBTa3sKAgddT6krw0cJat7egBga3DJepJyrLl4Q9/5WLra3rrnMcyTyOnh"
//    socketScript.crossOrigin = "anonymous"
//    head.append(socketScript)
let styleTag = document.createElement('style')
styleTag.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

    #sparkyChatbot_dialog{
     position: fixed;   
     width:320px;
     height: 90%;
     right:1rem;
     top:5%;
     bottom: 5%;
     transition: transform 0.3s ease-in-out;
    }
    .sparkyChatbot_chatbotButton{
     position: fixed;
     right:1rem;
     bottom:1rem;
     transition: transform 0.3s ease-in-out;
    

    }
    .sparkyChatbot_chatbotButton:hover .sparkyChatbot_buttonLogo{
     transition:transform 0.4s ease-out;   
     transform: scale(1.4);
    

    }
    .sparkyChatbot_buttonLogo{
    transition:transform 0.4s ease-out; 
    color:white;
    width:1.5rem; 
    height:1.5rem  
    }
    .hidden{
        display: none;
    }
    .animate-out{
        transform: translateY(150%);
        transition: transform 0.3s ease-in-out;
    }
    .dialog-hidden{
        transform: translateY(150%);
        transition: transform 0.3s ease-in-out;
    }
    .sparkyChatbot_chatbotHeader{
        background-color: #F59E0B;
        padding-right: 1rem;
        padding-left: 1rem;
        padding-top: 0.4rem;
        padding-bottom: 0.4rem;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .sparkyChatbot_headerLogo{
     width:2rem;
     height: 2rem;
     color:white;
    }
    .sparkyChatbot_closeButton{
        width:1.5rem;
     height: 1.5rem;
     color:white;
     cursor: pointer;
    }
    .sparkyChatbot_HeaderText{
        color: white;
        font-family: Poppins,sans-serif;
        font-weight:bold;
        font-size: 1rem;
    }
    .sparkyChatbot_footer{
         display: flex;
         width:100%;
         justify-content: center;
         align-items: center;
    }
    .sparkyChatbot_footer_text{
        font-family: Poppins,sans-serif;
        font-weight: 500;
        font-size: 0.6rem;
    }
`
head.appendChild(styleTag)
//build chatbot button








const registerUiEvents = ()=>{
    let chatbotButton =  document.getElementById("sparkyChatbot_chatbotButton")
        let chatbotDialog = document.getElementById("sparkyChatbot_dialog")
        let closeButton = document.getElementById('sparkyChatbot_closeButton')
        chatbotButton.addEventListener('click',(e)=>{
          console.log("chatbotbutton clicked!")
          chatbotButton.classList.add('animate-out')
          chatbotDialog.classList.remove('dialog-hidden')
        })

        closeButton.addEventListener('click',(e)=>{
          console.log("closeButton clicked!")
          chatbotButton.classList.remove('animate-out')
          chatbotDialog.classList.add('dialog-hidden')
        })

       
}

const start = () => {
    console.log("loaded")
   
  


// const SOCKET_URL = 'ws://localhost:5000';
// const socket = io(SOCKET_URL);

// socket.on('connect',()=>{
//     console.log('connected to chat server')
// })

let body = document.querySelector('body')
let dialog = document.createElement('div')
dialog.id = "sparkyChatbot_dialog"
dialog.classList.add("sparkyChatbot_chatbotDialog","dialog-hidden","shadow-xl","flex","flex-col","rounded-3xl","border")
dialog.innerHTML = `
<div class="bg-white py-2 px-4 rounded-t-2xl flex flex-row justify-between">
           
<svg class="w-8 h-8 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path></svg>
<p class="text-yellow-500 text-lg font-bold">Sparky</p>
<svg id="sparkyChatbot_closeButton" class="w-8 h-8 text-yellow-500 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>

</div>

<div id="sparkyChatbot_entry" class="flex-1 w-80 overflow-y-auto"></div>
<div class="p-2 flex flex-row justify-center items-center flex-shrink-0 "><p class="sparkyChatbot_footer_text">powered by <span style="color:#F59E0B">sparky</span></p></div>      
`

let button = document.createElement('div')
button.id = "sparkyChatbot_chatbotButton"
button.classList.add("sparkyChatbot_chatbotButton","p-4","bg-yellow-500","rounded-full")
button.innerHTML = `
<svg class="sparkyChatbot_buttonLogo" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path></svg>
`





body.appendChild(button)
body.appendChild(dialog)












registerUiEvents()
ReactDOM.render(<MemoryRouter  initialIndex={1}><App /></MemoryRouter>,document.getElementById('sparkyChatbot_entry'))

  }
  
  /** 
   *  Checks the document readyState until it's ready
   */

  function ready(delay){
    if (document.readyState == 'complete') {
        start() // your stuff being invoked when doc is ready
      } else {
        console.log('Retrying!')
        setTimeout(() => { ready(delay) }, delay)
      }
  }

  ready(50)