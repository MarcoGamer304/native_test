import notificationProps from "../interfeces/componets/notificationProps";
import { Text, View, Image } from "react-native";

export default function Notification({
  message,
  avatar,
  user,
}: notificationProps) {
  const notificationMap: Map<string, string> = new Map([
    ["comment", "commented on your post"],
    ["like", "liked your post"],
    ["follow", "followed your profile"],
  ]);

  return (
    <View
      className="flex flex-row items-center justify-start my-1.5 h-12 rounded-full"
      style={{
        margin: 2,
        height: 50,
        width: 380,
        backgroundColor: "gray",
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
