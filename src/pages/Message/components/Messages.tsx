import React from "react";
import { Text, View, Image } from "react-native";

const Messages = React.memo(({ user }: any) => {
  console.log("Messages component rendered");
  return (
    <View
      className="flex flex-row items-center justify-start my-1.1 h-14 w-[380px] px-4"
      style={{
        width: 380,
        backgroundColor: "#f5f5f5",
        borderBottomColor: "#dde1e6",
        borderBottomWidth: 1,
        paddingHorizontal: 15,
      }}
    >
      <Image
        source={{
          uri:
            user.recipient.avatar ??
            "https://randomuser.me/api/portraits/men/3.jpg",
        }}
        className="rounded-full"
        style={{ width: 40, height: 40 }}
      />

      <View
        style={{
          marginLeft: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          flex: 1,
          alignItems: "center",
        }}
      >
        <Text className="text-base">{user.recipient.username}</Text>

        <Text className="text-md text-gray-500">
          {user.recipient.online ? "line" : "disconnected"}
        </Text>
        <Text className="text-xs text-gray-500">
          {user.recipient.last_seen ?? "few hours ago"}
        </Text>
      </View>
    </View>
  );
});

export default Messages;