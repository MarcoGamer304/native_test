import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableHighlight,
} from "react-native";
import Notification from "../../components/Notification";
import notificationData from "../../provitionalData/notificationExamples";
import ChatScreen from "../message/messageSection/ChatScreen";
import ScreenBorder from "../../components/essential/ScreenBorders";

export default function NotificationScreen() {
    return (
        <ScreenBorder style={styles.container}>
            <View style={styles.container}>
                {notificationData.map((item) => (
                    <Notification key={item.id} message={item.message} logo={item.avatar} user={item.user} />
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
