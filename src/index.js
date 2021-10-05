//Entry point of react app
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import {MemoryRouter} from 'react-router-dom'
import {AuthProvider} from './components/AuthContext' 
import { Provider } from 'react-redux';
import {store} from "./store"




const start = () => {
    console.log("loaded")
   
  
let body = document.querySelector('body')
let dialog = document.createElement('div')
dialog.classList.add("absolute")
dialog.style.setProperty('z-index', '999999', 'important');
dialog.id = "sparkyChatbot_dialog"
body.appendChild(dialog)












// registerUiEvents()

ReactDOM.render(

  <Provider store={store}>
   <App />
</Provider>,document.getElementById('sparkyChatbot_dialog'))

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
