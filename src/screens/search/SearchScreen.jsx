import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableHighlight,
} from "react-native";
import TopTabsNavigator from "../../routes/TopTabsNavigator";
import NotificationScreen from "../notifications/NotificationScreen";
import ScreenBorder from "../../components/essential/ScreenBorders";
import ChatScreen from "../message/ChatScreen";
import HomeScreen from "../home/HomeScreen";

export default function SearchScreen() {
    return (
        <ScreenBorder style={styles.container}>
            <TopTabsNavigator
                elements={[
                    { name: "Sugerencias", component: ChatScreen, icon: "home" },
                    { name: "Historial", component: NotificationScreen, icon: "history" }
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
