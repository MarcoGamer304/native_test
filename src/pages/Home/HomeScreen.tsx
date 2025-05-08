import { View, FlatList } from "react-native";
import data from "./ProvisionalData/twit";
import Post from "./components/Post";
import ScreenBorder from "../../components/ScreenBorders";
import type { PostProps } from "./models/types/postProps";
import FAB from "../../components/FAB";

export default function HomeScreen() {
  return (
    <ScreenBorder searchBar={false} header={true}>
      <View className="items-center">
        <FlatList
          data={data}
          keyExtractor={(item: PostProps) => item.id.toString()}
          renderItem={({ item }: { item: PostProps }) => (
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
              image={item.image}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <FAB />
    </ScreenBorder>
  );
}
