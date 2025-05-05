import { io, Socket } from "socket.io-client";
 
 export default class WebSocketService {
   private static instance: WebSocketService;
   private socket: Socket | null = null;
   private url = "http://192.168.100.12:3000";
 
   private constructor() {}
 
   static getInstance(): WebSocketService {
     if (!WebSocketService.instance) {
       WebSocketService.instance = new WebSocketService();
     }
     return WebSocketService.instance;
   }
 
   connect() {
     if (!this.socket) {
       this.socket = io(this.url, {
         transports: ["websocket"],
       });
       console.log(this.socket.active);
     }
   }
 
   sendMessage(message: string) {
     if (this.socket) {
       this.socket.emit("message", message + "from" + this.socket.id);
     } else {
       this.connect();
     }
   }
 
   disconnect() {
     if (this.socket) {
       this.socket.disconnect();
       console.log(this.socket.active);
       this.socket = null;
     }
   }
 }