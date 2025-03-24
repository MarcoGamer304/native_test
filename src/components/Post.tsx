import Icon from "react-native-vector-icons/FontAwesome";
import { Text, View, Image, TouchableOpacity } from "react-native";
import PostProps from "../interfeces/componets/postProps";

export default function Post({
  user,
  message,
  avatar,
  comments,
  likes,
  shares,
  destacados,
}: PostProps): JSX.Element {
  return (
    <View
      className="border"
      style={{
        marginTop: 10,
        width: 380,
       // borderColor: "#ffffff",
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: "#dde1e6",
       // borderRadius: 24,
        //backgroundColor: "#dde1e6",
        paddingVertical: 1.5,
        paddingHorizontal: 8,
      }}
    >
      <View className="flex flex-row items-start">
        <Image
          source={{ uri: avatar }}
          className="w-14 h-14 rounded-full"
          style={{ marginRight: 10 }}
        />
        <View className="flex-1">
          <View className="flex flex-row justify-between items-center">
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>{user}</Text>
            <Icon name="comments" size={20} color="#000" />
          </View>
          <Text style={{ fontSize: 15, marginTop: 2 }}>{message}</Text>
        </View>
      </View>

      <View
        className="flex flex-row justify-around"
        style={{ justifyContent: "space-around", marginTop: 10 }}
      >
        <TouchableOpacity
          className="py-1.25 flex  content-center justify-center"
          style={{ paddingVertical: 5, flexDirection: "row-reverse" }}
        >
          <Text className="text-sm"> {comments.length}</Text>
          <Icon name="comments" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          className="py-1.25 flex  content-center justify-center"
          style={{ paddingVertical: 5, flexDirection: "row-reverse" }}
        >
          <Text className="text-sm"> {likes}</Text>
          <Icon name="heart" size={20} color="#FF0000" />
        </TouchableOpacity>
        <TouchableOpacity
          className="py-1.25 flex  content-center justify-center"
          style={{ paddingVertical: 5, flexDirection: "row-reverse" }}
        >
          <Text className="text-sm"> {shares}</Text>
          <Icon name="share" size={20} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          className="py-1.25 flex  content-center justify-center"
          style={{ paddingVertical: 5, flexDirection: "row-reverse" }}
        >
          <Text className="text-sm"></Text>
          <Icon
            name="comments"
            size={20}
            color={destacados === true ? "blue" : "black"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
