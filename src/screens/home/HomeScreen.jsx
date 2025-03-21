import { StyleSheet, View } from "react-native";
import data from "../../provitionalData/twit";
import Post from "../../components/Publication";
import ScreenBorder from "../../components/essential/ScreenBorders";

export default function HomeScreen() {
  return (
    <ScreenBorder>
      <View style={styles.container}>
        {data.map((post) => (
          <Post
            key={post.id}
            user={post.user}
            message={post.message}
            avatar={post.avatar}
            comments={post.comments}
            likes={post.likes}
            shares={post.shares}
            destacados={post.destacados}
          />
        ))}
      </View>
    </ScreenBorder>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddr1e6",
    alignItems: "center",
    justifyContent: "center",
  }
});
