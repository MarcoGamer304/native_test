import { Text, StyleSheet } from "react-native";
import ScreenBorder from "../../../components/essential/ScreenBorders";

export default function ConnectionsScreen() {
  return (
    <ScreenBorder
      style={styles.container}
      header={true}
      scrollable={false}
      searchBar={false}
    >
      <Text>Connections Screen</Text>
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
});
