import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableHighlight,
} from "react-native";
import data from "../twit";
import Post from "../components/Publication";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import Header from "../components/Header";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top"]}>
      <Header avatar={"https://randomuser.me/api/portraits/women/2.jpg"} logo={"https://img.freepik.com/vector-premium/diseno-vectorial-todo-mundo-estilo-icono_822882-12052.jpg?semt=ais_hybrid"}></Header>   
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <StatusBar style="dark" />
             {data.map((post) => (
              <Post
                key={post.id}
                user={post.user}
                message={post.message}
                avatar={post.avatar}
                comments={post.comments}
                likes={post.likes}
                shares={post.shares}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddr1e6",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#ddr1e6",
    padding: 10,
  },
});
