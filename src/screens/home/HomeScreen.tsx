import { View, FlatList } from "react-native";
import data from "../../provitionalData/twit";
import Post from "../../components/Post";
import ScreenBorder from "../../components/essential/ScreenBorders";

export default function HomeScreen() {
  return (
    <ScreenBorder searchBar={false} header={true}>
      <View className="items-center">
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Post
              id={item.id}
              user={item.user}
              message={item.message}
              avatar={item.avatar}
              comments={item.comments}
              likes={item.likes}
              shares={item.shares}
              destacados={item.destacados}
              bookmark={item.bookmark}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScreenBorder>
  );
}