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
  bookmark,
}: PostProps): JSX.Element {
  return (
    <View
      className="border"
      style={{
        marginTop: 10,
        width: 380,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: "#dde1e6",
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
          <View className="flex flex-row justify-between items-center" style={{ marginTop: -4, marginRight: 10 }}>
            <Text style={{ fontWeight: "500", fontSize: 15}}>{user}</Text>
            <Icon 
            name="ellipsis-v" 
            size={20} 
            color="#000" />
          </View>
          <Text style={{ fontSize: 15, marginTop: 2 }}>{message}</Text>
        </View>
      </View>

      <View className="flex flex-row items-center justify-between" style={{ marginTop: 5, marginLeft: 60, marginRight: 10 }}>
        <View className="flex flex-row">
          <TouchableOpacity className="py-1.25 flex flex-row items-center" style={{ paddingVertical: 5, marginRight: 15 }}>
            <Icon name="heart-o" size={20} color="#FF0000" />
            <Text className="text-sm"> {likes}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="py-1.25 flex flex-row items-center" style={{ paddingVertical: 5, paddingHorizontal: 15, marginRight: 15 }}>
            <Icon name="comment-o" size={20} color="black" />
            <Text className="text-sm"> {comments.length}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="py-1.25 flex flex-row items-center" style={{ paddingVertical: 5}}>
            <Icon name="share" size={20} color="black" />
            <Text className="text-sm"> {shares}</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity className="py-1.25" style={{ paddingVertical: 5 }}>
          <Icon name="bookmark-o" size={20} color={destacados ? "#000000" : "black"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
