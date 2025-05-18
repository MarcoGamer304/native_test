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
      console.log("Conectado:", this.socket.active);
    }
  }

  register(userId: number, groupIds: number[]) {
    if (this.socket) {
      this.socket.emit("register", { userId, groupIds });
    } else {
      this.connect();
      setTimeout(() => this.register(userId, groupIds), 500);
    }
  }

  onUserMessages(callback: (data: any) => void) {
    if (this.socket) {
      this.socket.on("user_messages", callback);
    }
  }

  sendMessage(sender_id: number, recipient_id: number, content: string) {
    if (this.socket) {
      this.socket.emit("private_message", {
        sender_id,
        recipient_id,
        content,
        created_at: new Date(),
        updated_at: new Date(),
      });
   
    }
  }

  sendRoomMessage(sender_id: number, groupId: number, content: string) {
    if (this.socket) {
      this.socket.emit("group_message", {
        sender_id,
        groupId,
        content,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }
  }

  onPrivateMessage(callback: (data: any) => void) {
    if (this.socket) {
      this.socket.on("new_private_message", callback);
    }
  }

  onGroupMessage(callback: (data: any) => void) {
    if (this.socket) {
      this.socket.on("new_group_message", callback);
    }
  }

  onMessageSent(callback: (data: any) => void) {
    if (this.socket) {
      this.socket.on("message_sent", callback);
    }
  }

  onMessageError(callback: (error: any) => void) {
    if (this.socket) {
      this.socket.on("message_error", callback);
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
