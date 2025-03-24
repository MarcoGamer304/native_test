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
      className="flex flex-row items-center justify-start my-0.5 h-14 w-[380px] rounded-full px-4"
      style={{
        margin: 2,
        width: 380,
        backgroundColor: "white",
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
        <FontAwesome name={icon} color={"black"} size={40} />
      )}
      <Text className="text-base mx-4">{notification}</Text>
    </View>
  );
}
