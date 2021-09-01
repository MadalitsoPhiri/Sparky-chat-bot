import io from "socket.io-client";
const SOCKET_URL = 'http://sparkychatbot.ddns.net/';

export const socket = io(SOCKET_URL);