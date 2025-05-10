import type { TNotification } from "../models/types/TNotification";
import { Text, View, Image } from "react-native";

export default function Notification({
  message,
  avatar,
  user,
}: TNotification) {
  
  const notificationMap: Map<string, string> = new Map([
    ["comment", "commented on your post"],
    ["like", "liked your post"],
    ["follow", "followed your profile"],
  ]);

  return (
    <View
      className="flex flex-row items-center justify-start my-1.3 h-12 rounded-full"
      style={{
        height: 50,
        width: 380,
        backgroundColor: "#f5f5f5",
        borderBottomColor: "#dde1e6",
        borderBottomWidth: 1,
      }}
    >
      <Image
        source={{ uri: avatar }}
        className="mx-3 rounded-full"
        style={{
          width: 40,
          height: 40,
        }}
      />
      <View className="flex flex-row justify-center items-center mx-0.5">
        <Text
          className="text-base font-extrabold"
          style={{ fontWeight: "bold" }}
        >
          {user}{" "}
        </Text>
        <Text className="text-base">{notificationMap.get(message)}</Text>
      </View>
    </View>
  );
}
