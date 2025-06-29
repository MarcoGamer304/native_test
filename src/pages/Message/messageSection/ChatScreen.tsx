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
import { useRoute } from "@react-navigation/native";

export default function ChatScreen() {
  const route = useRoute<any>();
  const chat = route.params?.chat;

  const WebSocket = WebSocketService.getInstance();
  const Axios = AxiosService.getInstance();

  const [text, setText] = useState<string>("");
  const [senderId, setSenderId] = useState<number>(1);
  const [recipientId, setRecipientId] = useState<number>(
    chat ? parseInt(chat.id, 10) : 2
  );
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

    if (chat) {
      init();
    }

    return () => {
      if (chat) {
        WebSocket.disconnect();
      }
    };
  }, [chat]);

  const handleSendMessage = async () => {
    try {
      if (!text.trim() || !chat) return;

      WebSocket.sendMessage(senderId, recipientId, text);
      alert("Mensaje enviado");

      setText("");
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  const handleGetMessages = async () => {
    if (!chat) return;
    try {
      const response = await Axios.get(
        `http://192.168.100.191:3000/api/messages/${chat.id}/all`
      );

      if (response && Array.isArray(response)) {
        setMessages(response.slice(0, 3));
      } else {
        throw new Error("Respuesta inválida");
      }
    } catch (error) {
      console.error("Error al obtener mensajes:", error);
    }
  };

  if (!chat) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Selecciona un chat para empezar a chatear.</Text>
      </View>
    );
  }

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
