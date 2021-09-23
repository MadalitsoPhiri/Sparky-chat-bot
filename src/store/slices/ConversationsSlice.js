import {createSlice} from "@reduxjs/toolkit";
import { socket } from "../../socket";
export const ConversationSlice = createSlice({
name:"conversations",
initialState:[],
reducers:{
addNewConversation:(state,action)=>{
    console.log("addNewConversation Running with state: ",state.length)
    console.log("addNewConversation payload: ",action.payload)

    state.push(action.payload)
},
updateConversation:(state,action)=>{
   state[action.payload.conversationIndex] = action.payload
},
addMessage:(state,action)=>{
 state[action.payload.conversationIndex].messages.push(action.payload)
},
updateMessage:(state,action)=>{
    state[action.payload.conversationIndex].messages[action.payload.messageIndex].date = new Date()
    state[action.payload.conversationIndex].messages[action.payload.messageIndex].status = "sent"
}


},


});


export const {addNewConversation,updateConversation, addMessage , updateMessage} = ConversationSlice.actions

export const sendMessage = (msg) => {

    return (dispatch)=>{
        dispatch(addMessage(msg))
          //send socket message here
          socket.emit("onNewMessage",msg,(error,message)=>{
             console.log("socket message err: " ,error )
             console.log("socket message : " ,message )
             if(!error){
                 // update messages
                 dispatch(updateMessage(msg))

             }
          })
    }
  
}


export const createConversation = (con) => {
   console.log("createConversation dispatched")
    return async(dispatch, getState)=>{
        await dispatch(addNewConversation(con))
        const msg = con.messages[0]
        console.log("current state",getState())
        

          //send socket message here
          socket.emit("onNewMessage",msg,function(error,message){
            console.log("sent successfully")
             if(error != null || error != undefined){
                 // update messages
                 dispatch(updateMessage(msg))
                 console.log("sent successfully")

             }else{
                console.log("error sending")
             }
          })
    }
  
}


export default ConversationSlice.reducer