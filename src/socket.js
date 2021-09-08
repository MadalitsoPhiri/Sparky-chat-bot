import io from "socket.io-client";
const SOCKET_URL = 'wss://sparky-chatbot-backend.herokuapp.com/';

export const socket = io(SOCKET_URL,{secure: true});