import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";

export default function Header({ avatar, searchBar = false }) {

  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      {searchBar === true ?
        <View style={styles.searchContainer}>
          <FontAwesome name={"search"} color={"black"} size={30} />
          <TextInput style={styles.input}
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText} />
        </View>
        : <Image source={{ uri: "https://img.freepik.com/vector-premium/diseno-vectorial-todo-mundo-estilo-icono_822882-12052.jpg?semt=ais_hybrid" }} style={styles.avatar} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 105,
    width: "100%",
    backgroundColor: "white"
  },
  avatar: {
    width: 50,
    height: 50,
    marginTop: 35,
    marginHorizontal: 30,
    borderRadius: 30
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 10,
    flex: 1,
    marginLeft: 10,
    width: "50%",
    marginTop: 35,
    marginHorizontal: 20,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 40,
    width: 20,
    marginHorizontal: 10,
  },
});
