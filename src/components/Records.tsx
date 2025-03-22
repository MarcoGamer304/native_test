import { useEffect, useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import recordsProps from "../interfeces/componets/recordsProps";
import {
    StyleSheet,
    Text,
    View,
    Image
} from "react-native";

export default function Notification({ notification, avatar, user }: recordsProps) {

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
        width: "95%",
        backgroundColor: "gray",
        borderRadius: 20,
        paddingHorizontal: 15,
      },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 30
    }, text: {
        fontSize: 15,
        paddingHorizontal: 15,
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
