//messages screen socket.io
import { Text, TouchableOpacity } from "react-native";
import ScreenBorder from "../../../components/essential/ScreenBorders";
import Websocket from "../../../services/webSockets";
import WebSocketService from "../../../services/webSockets";

export default function ChatScreen() {
  const WebSocket = WebSocketService.getInstance();
  WebSocket.connect();
  return (
    <ScreenBorder header={false} searchBar={false}>
      <Text>hacer sistema de mensajeria</Text>
      <TouchableOpacity
        onPress={() => {
          WebSocket.sendMessage("test prueba");
        }}
      >
        <Text>hola</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{WebSocket.disconnect()}}>
        <Text>desconectar</Text>
      </TouchableOpacity>
    </ScreenBorder>
  );
}
