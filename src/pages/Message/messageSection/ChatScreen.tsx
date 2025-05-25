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
import Messages from "../components/Messages";
import { obtenerIdUsuario } from "../../../utilities/AsyncStorage";

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
      const response = await Axios.get(
        "http://192.168.100.191:3000/api/messages/1/all"
      );

      if (!response) {
        throw new Error("Error al obtener los mensajes");
      }

      const filterdMap = new Map();

      response.forEach((item: any) => {
        const recipientId = item.recipient.id;
        if (!filterdMap.has(recipientId)) {
          filterdMap.set(recipientId, {
            recipient: item.recipient,
          });
        }
      });

      const filtered = Array.from(filterdMap.values());

      setMessages(filtered);
    } catch (error) {
      console.error("Error al obtener mensajes:", error);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <View className="items-center">
        <FlatList
          data={messages}
          keyExtractor={(item) => item.recipient.id}
          renderItem={({ item }) => (
            <Messages
              id={item.recipient.id}
              key={item.recipient.id}
              user={item}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>

      <TextInput
        editable
        multiline
        maxLength={240}
        onChangeText={setText}
        value={text}
        placeholder="Escribe tu mensaje..."
        keyboardType="default"
        style={{
          borderColor: "gray",
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
      />

      <TouchableOpacity
        onPress={handleSendMessage}
        style={{
          backgroundColor: "#007AFF",
          padding: 10,
          borderRadius: 5,
          marginBottom: 10,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Enviar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => WebSocket.disconnect()}
        style={{
          backgroundColor: "#FF3B30",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Desconectar</Text>
      </TouchableOpacity>
    </View>
  );
}
