import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableHighlight,
} from "react-native";
import { useEffect, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Notification({ notification, avatar, user }) {

    const [icon, setIcon] = useState("search");

    useEffect(() => {
        if (user) { setIcon(avatar) }
    }, []);

    return (
        <View style={styles.container}>
            {
                icon !== "search" ? <Image source={{ uri: avatar }} style={styles.avatar} /> :
                    <FontAwesome name={icon} color={"black"} size={styles.avatar.width} />
            }
            <Text style={styles.text}>{notification}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        margin: 2,
        height: 50,
        width: "97%",
        backgroundColor: "gray",
        borderRadius: 20,
        paddingHorizontal: 20,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 30
    }, text: {
        fontSize: 15,
        paddingHorizontal: 10,
    },
    textUser: {
        fontSize: 15,
        fontWeight: "bold"
    },
    message: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "row",
        margin: 2
    }
});
