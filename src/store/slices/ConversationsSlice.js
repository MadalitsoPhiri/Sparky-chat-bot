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
   state[action.payload.index].allowInput = action.payload.msg.allowInput
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


export const {addNewConversation,updateConversation, addMessage , updateMessage, } = ConversationSlice.actions

export const sendMessage = (msg) => {

    return async(dispatch,getState)=>{
        await dispatch(addMessage(msg))
          //send socket message here
   
          socket.emit("onNewMessage",msg)
    }
  
}


export const createConversation = (con) => {
   console.log("createConversation dispatched")
    return async(dispatch, getState)=>{
        await dispatch(addNewConversation(con))
        let msg = con.messages[0]
        
        console.log("current state",getState())
        

          //send socket message here
          socket.emit("onNewMessage",msg)
    }
  
}

export const recieveNewMessage = (msg) =>{ 
    return async(dispatch, getState)=>{
        const conversations = getState().conversations
        console.log("conversation Array: ",conversations)
        console.log("received message: ",msg)
       
        conversations.forEach((conversation, index) => {
            if(conversation.id === msg.conversationId){
                msg["conversationIndex"] = index
              dispatch(addMessage(msg))
              dispatch(updateConversation({index,msg}))
            }
            console.log("current conversation: ",conversation)
            console.log("current index: ",index)

        });
     
        



     

    }
}


export default ConversationSlice.reducer