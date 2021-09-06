import io from "socket.io-client";
const SOCKET_URL = 'https://sparkychatbot.ddns.net/';

export const socket = io(SOCKET_URL);