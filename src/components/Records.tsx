import { useEffect, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import recordsProps from "../interfeces/componets/recordsProps";
import { Text, View, Image } from "react-native";

export default function Records({ notification, avatar, user }: recordsProps) {
  const [icon, setIcon] = useState("search");

  useEffect(() => {
    if (user) {
      setIcon(avatar);
    }
  }, []);

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
      {icon !== "search" ? (
        <Image
          source={{ uri: avatar }}
          className="rounded-full"
          style={{ width: 40, height: 40 }}
        />
      ) : (
        <FontAwesome name={icon} color={"#1e1e1e"} size={35} />
      )}
      <Text className="text-base mx-4">{notification}</Text>
    </View>
  );
}
