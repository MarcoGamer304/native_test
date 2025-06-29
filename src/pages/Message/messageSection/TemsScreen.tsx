import React from "react";
import { Text, TouchableOpacity, View, FlatList, StyleSheet, Image } from "react-native";
import ScreenBorder from "../../../components/ScreenBorders";
import WebSocketService from "../services/webSockets";
import { useNavigation } from "@react-navigation/native";

type ChatItem = {
  id: string;
  name: string;
  lastMessage: string;
  timestamp: string;
  avatar: string;
};

const mockChats = [
  {
    id: "1",
    name: "Grupo Los Ratones",
    lastMessage: "ya casi estamos...",
    timestamp: "4:13 p.m",
    avatar: "https://i.pinimg.com/736x/40/47/af/4047af856340397b1e80849815f528a4.jpg", 
  },
  {
    id: "2",
    name: "Luis",
    lastMessage: "todo listo",
    timestamp: "yesterday",
    avatar: "https://i.pinimg.com/736x/40/47/af/4047af856340397b1e80849815f528a4.jpg",
  },
  {
    id: "3",
    name: "Pepe",
    lastMessage: "ya casi estamos...",
    timestamp: "2 days ago",
    avatar: "https://i.pinimg.com/736x/40/47/af/4047af856340397b1e80849815f528a4.jpg", 
  },
];

export default function TeamsScreen() {
  const WebSocket = WebSocketService.getInstance();
  const navigation = useNavigation<any>();

  const handleChatPress = (item: ChatItem) => {
    navigation.navigate('Message', { chat: item });
  };

  const renderChatItem = ({ item }: { item: ChatItem }) => (
    <TouchableOpacity style={styles.chatItemContainer} onPress={() => handleChatPress(item)}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatTextContainer}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatName}>{item.name}</Text>
          <Text style={styles.chatTimestamp}>{item.timestamp}</Text>
        </View>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScreenBorder header={false} searchBar={false}>
      <FlatList
        data={mockChats}
        renderItem={renderChatItem}
        keyExtractor={(item) => item.id}
        style={styles.listContainer}
      />
      {}
      {/* <TouchableOpacity
        style={styles.testButton}
        onPress={() => {
          WebSocket.sendMessage(1, 2, "hola");
        }}
      >
        <Text style={styles.testButtonText}></Text>
      </TouchableOpacity> */}
    </ScreenBorder>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    top: -30,
    width: "100%",
  },
  chatItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  chatTextContainer: {
    flex: 1,
    justifyContent: "center",
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  chatName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black", 
  },
  chatTimestamp: {
    fontSize: 12,
    color: "#A0A0A0", 
  },
  lastMessage: {
    fontSize: 14,
    color: "#5c5b5b", 
    flexShrink: 1,
  },
  testButton: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 8,
    margin: 16,
    alignItems: "center",
  },
  testButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});