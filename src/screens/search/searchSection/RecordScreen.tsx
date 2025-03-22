import { View, StyleSheet } from "react-native";
import Records from "../../../components/Records";
import ScreenBorder from "../../../components/essential/ScreenBorders";
import records from "../../../provitionalData/records";

export default function RecordScreen() {
  return (
    <ScreenBorder header={false} scrollable={true} searchBar={false}>
      <View style={styles.container}>
        {records.map((item) => (
          <Records
            key={item.id}
            notification={item.notification}
            avatar={item.avatar}
            user={item.user}
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
  },
});
