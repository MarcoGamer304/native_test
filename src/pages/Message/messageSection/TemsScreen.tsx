import { Text, TouchableOpacity } from "react-native";
import ScreenBorder from "../../../components/ScreenBorders";
import WebSocketService from "../services/webSockets";

export default function TeamsScreen() {
  const WebSocket = WebSocketService.getInstance();
  WebSocket.connect();
  return (
    <ScreenBorder header={false} searchBar={false}>
      <Text> Hacer sistema teams messages</Text>
      <TouchableOpacity
        onPress={() => {
          WebSocket.sendRoomMessage(1, 1, "room message");
        }}
      >
        <Text>hola</Text>
      </TouchableOpacity>
    </ScreenBorder>
  );
}
