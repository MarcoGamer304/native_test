import {
  Text,
  TouchableOpacity,
  TextInput,
  View,
  FlatList,
} from "react-native";
import WebSocketService from "../services/webSockets";
import AxiosService from "../services/axios";
import { useState, useEffect } from "react";
import { obtenerIdUsuario } from "../../../utilities/AsyncStorage";
import Icon from "react-native-vector-icons/Ionicons";

export default function ChatScreen() {
  const WebSocket = WebSocketService.getInstance();
  const Axios = AxiosService.getInstance();

  const [text, setText] = useState<string>("");
  const [senderId, setSenderId] = useState<number>(1);
  const [recipientId] = useState<number>(2);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    const init = async () => {
      const id = await obtenerIdUsuario();
      setSenderId(id);

      WebSocket.connect();
      WebSocket.register(id, [101]);

      WebSocket.onPrivateMessage((data) => {
        console.log("Mensaje privado recibido:", data);
        handleGetMessages();
      });

      WebSocket.onMessageSent((data) => {
        console.log("Mensaje enviado:", data);
        handleGetMessages();
      });

      WebSocket.onMessageError((error) => {
        console.log("Error en el envío:", error);
      });

      handleGetMessages();
    };

    init();

    return () => {
      WebSocket.disconnect();
    };
  }, []);

  const handleSendMessage = async () => {
    try {
      if (!text.trim()) return;

      WebSocket.sendMessage(senderId, recipientId, text);
      alert("Mensaje enviado");

      setText("");
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  const handleGetMessages = async () => {
    try {
      const response = await Axios.get("http://192.168.100.191:3000/api/messages/1/all");

      if (response && Array.isArray(response)) {
        setMessages(response.slice(0, 3));
      } else {
        throw new Error("Respuesta inválida");
      }
    } catch (error) {
      console.error("Error al obtener mensajes:", error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          const isMyMessage = item.sender?.id === senderId;

          return (
            <View
              style={{
                alignSelf: isMyMessage ? "flex-end" : "flex-start",
                backgroundColor: isMyMessage ? "#DCF8C5" : "#E4E6EB",
                padding: 10,
                borderRadius: 10,
                marginBottom: 10,
                maxWidth: "75%",
              }}
            >
              <Text style={{ fontWeight: "bold", marginBottom: 4 }}>
                {item.sender?.username ?? "usuario"}
              </Text>
              <Text>{item.content}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
      />

      <View style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}>
        <TextInput
          editable
          multiline
          maxLength={240}
          onChangeText={setText}
          value={text}
          placeholder="Message..."
          keyboardType="default"
          style={{
            flex: 1,
            backgroundColor: "#e0e0e0",
            borderRadius: 20,
            paddingVertical: 10,
            paddingHorizontal: 16,
            marginRight: 8,
            fontSize: 16,
            color: "#333",
          }}
        />
        <TouchableOpacity
          onPress={handleSendMessage}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#e0e0e0",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="send-sharp" size={22} color="#E63946" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
