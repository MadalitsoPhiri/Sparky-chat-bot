import io from "socket.io-client";
const SOCKET_URL1 = 'wss://www.getsparky.io/';
//for the development server
const SOCKET_URL2 = 'ws://localhost:5000/';

export const socket = io(SOCKET_URL2,{secure: true});