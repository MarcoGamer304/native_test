import Notification from "../../components/Notification";
import notificationData from "../../provitionalData/notificationExamples";
import ScreenBorder from "../../components/essential/ScreenBorders";
import { StyleSheet, View } from "react-native";

export default function NotificationScreen() {
  return (
    <ScreenBorder
      style={styles.container}
      scrollable={false}
      searchBar={true}
      header={true}
    >
      <View style={styles.container}>
        {notificationData.map((item) => (
          <Notification
            id={item.id}
            key={item.id}
            message={item.message}
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
    justifyContent: "flex-start",
  },
  text: {
    color: "white",
  },
});
