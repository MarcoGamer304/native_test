import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";

export default function Header({ avatar, logo }) {
  return (

    <View style={styles.container}>     
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <Image source={{ uri: logo }} style={styles.avatar}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 80,
    width: "100%",
    backgroundColor: "white"
  },
  avatar: {
    width: 50,
    height: 50,
    marginHorizontal: 30,
    borderRadius: 30
  }
});
