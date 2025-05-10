import { View, ActivityIndicator, FlatList, Text } from "react-native";
import Post from "./components/Post";
import ScreenBorder from "../../components/ScreenBorders";
import type { TPost } from "./models/types/TPost";
import FAB from "../../components/FAB";
import usePost from "./hooks/usePost";

export default function HomeScreen() {
  const { allPost, loading, error, refresh } = usePost(1);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <ScreenBorder searchBar={false} header={true}>
      <View className="items-center">
        <FlatList
          data={allPost || []}
          keyExtractor={(item: TPost) => item.id.toString()}
          renderItem={({ item }: { item: TPost }) => (
            <Post
              id={item.id}
              user={item.user}
              message={item.message}
              avatar={item.avatar}
              comments={item.comments}
              likes={item.likes}
              shares={item.shares}
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
