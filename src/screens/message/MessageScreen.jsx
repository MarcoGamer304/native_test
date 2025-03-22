import { StyleSheet } from "react-native";
import ScreenBorder from "../../components/essential/ScreenBorders";
import TopTabsNavigator from "../../routes/TopTabsNavigator";
import ChatScreen from "./messageSection/ChatScreen";
import NotificationScreen from "../notifications/NotificationScreen";
export default function MessageScreen() {
  return (
    <ScreenBorder style={styles.container} scrollable={false} searchBar={true}>
      <TopTabsNavigator
        elements={[
          { name: "Teams", component: ChatScreen, icon: "comments" },
          { name: "Message", component: NotificationScreen, icon: "comment" }
        ]}
      />
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
