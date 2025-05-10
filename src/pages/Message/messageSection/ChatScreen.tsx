//messages screen socket.io
import { Text, TouchableOpacity, TextInput } from "react-native";
import ScreenBorder from "../../../components/ScreenBorders";
import WebSocketService from "../services/webSockets";
import AxiosService from "../services/axios";
import { useState } from "react";

export default function ChatScreen() {
  const WebSocket = WebSocketService.getInstance();
  const Axios = AxiosService.getInstance();
  WebSocket.connect();

  const [text, setText] = useState<string>("");

  return (
    <ScreenBorder header={false} searchBar={false}>
      <Text>hacer sistema de mensajeria</Text>
      <TextInput
        editable
        multiline
        maxLength={240}
        onChangeText={(text) => setText(text)}
        value={text}
        style={{ borderTopColor: "black", borderBottomWidth: 1, padding: 5 }}
        placeholder="message"
        keyboardType="default"
      />
      <TouchableOpacity
        onPress={async () => {
          try {
            WebSocket.sendMessage(text);
            const response = await Axios.post("/api/messages", {
              sender_id: "Marco",
              recipient_id: "Leonora",
              content: text,
            });
            alert(response.data);
            setText("");
          } catch (error) {
            console.error("Error sending message:", error);
          }
        }}
      >
        <Text>Send</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          WebSocket.disconnect();
        }}
      >
        <Text>Disconect</Text>
      </TouchableOpacity>
    </ScreenBorder>
  );
}
