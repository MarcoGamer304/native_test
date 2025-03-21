import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
} from "react-native";
import ScreenBorder from "../../components/essential/ScreenBorders";

export default function MessageScreen() {
  return (
    <ScreenBorder>
      <View style={styles.container}>
        <Text>Messages</Text>
        <Text style={styles.text}>
          Open up App.js to start working on your app!
        </Text>
      </View>
    </ScreenBorder>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
