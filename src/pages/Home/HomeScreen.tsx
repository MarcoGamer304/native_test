import { View, ActivityIndicator, FlatList, Text } from "react-native";
import Post from "./components/Post";
import ScreenBorder from "../../components/ScreenBorders";
import type { TPost } from "./models/types/TPost";
import FAB from "../../components/FAB";
import usePost from "./hooks/usePost";

export default function HomeScreen() {
  const { allPost, loading, error } = usePost();
  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <ScreenBorder searchBar={false} header={true}>
      <View className="items-center justify-center flex-1 w-full">
        {!allPost || error ? (
          <Text>Error: {error}</Text>
        ) : (
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
        )}
          <FAB />
      </View>
     </ScreenBorder>
  );
}
