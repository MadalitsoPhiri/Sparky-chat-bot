import io from "socket.io-client";
const SOCKET_URL = 'ws://sparkychatbot.ddns.net/';

export const socket = io(SOCKET_URL);