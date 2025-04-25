import Icon from "react-native-vector-icons/Ionicons";
import { Text, View, Image, TouchableOpacity, ImageSourcePropType } from "react-native";
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
  image,
}: PostProps): JSX.Element {
  return (
    <View
      className="border"
      style={{
        backgroundColor: "#f5f5f5",
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
          <View className="flex flex-row justify-between items-center" style={{ marginTop: -4, marginRight: 5 }}>
            <Text style={{ fontWeight: "600", fontSize: 15}}>{user}</Text>
            <Icon 
              name="ellipsis-vertical" 
              size={20} 
              color="#292929" 
            />
          </View>
          <Text style={{ fontSize: 15, marginTop: 2, marginRight: 12 }}>{message}</Text>
          {image && (
            <Image
              source={image as ImageSourcePropType}
              style={{
                width: '100%',
                height: 200,
                borderRadius: 12,
                marginTop: 10,
                marginBottom: 5
              }}
              resizeMode="cover"
            />
          )}
        </View>
      </View>

      <View className="flex flex-row items-center justify-between" style={{ marginTop: 5, marginLeft: 60, marginRight: 10 }}>
        <View className="flex flex-row">
          <TouchableOpacity className="py-1.25 flex flex-row items-center" style={{ paddingVertical: 5, marginRight: 15 }}>
            <Icon name="heart-outline" size={20} color="black" />
            <Text className="text-sm"> {likes}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="py-1.25 flex flex-row items-center" style={{ paddingVertical: 5, paddingHorizontal: 12, marginRight: 15 }}>
            <Icon name="chatbubble-outline" size={19} color="black" />
            <Text className="text-sm"> {Array.isArray(comments) ? comments.length : 0}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="py-1.25 flex flex-row items-center" style={{ paddingVertical: 5}}>
            <Icon name="repeat" size={20} color="black" />
            <Text className="text-sm"> {shares}</Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity className="py-1.25" style={{ paddingVertical: 5 }}>
          <Icon name="bookmark-outline" size={20} color={destacados ? "#000000" : "black"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
