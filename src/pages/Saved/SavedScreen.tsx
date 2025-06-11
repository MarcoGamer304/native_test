import { Text } from "react-native";
import ScreenBorder from "../../components/ScreenBorders";

import { FlatList } from "react-native";
import Post from "../Home/components/Post";
import tweets from "../../provitionalData/twit";
import { TPost } from "../Home/models/types/TPost";

export default function SavedScreen() {

  const savedPosts = (tweets as TPost[]).filter((item) => item.bookmark === true);

  const examplePosts = savedPosts.length > 0 ? savedPosts : [
    {
      id: 101,
      user: "FranCamareno",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      message: "Este es un post guardado de ejemplo.",
      comments: ["Muy útil!", "Gracias"],
      likes: 42,
      shares: 5,
      bookmark: true,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400"
    },
    {
      id: 102,
      user: "Marco",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      message: "Otro post guardado de ejemplo.",
      comments: ["Buenísimo!"],
      likes: 30,
      shares: 2,
      bookmark: true,
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400"
    }
  ];

  return (
    <ScreenBorder header={true} searchBar={false}>
      <FlatList
        data={examplePosts}
        keyExtractor={(item) => item.id.toString()}
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
        contentContainerStyle={{ alignItems: "center", paddingBottom: 32 }}
        style={{ flex: 1 }}
      />
    </ScreenBorder>
  );
}

