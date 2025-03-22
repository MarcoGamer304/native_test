import notificationProps from "../interfeces/componets/notificationProps";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Notification({
  message,
  avatar,
  user,
}: notificationProps) {
  const notificationMap: Map<string, string> = new Map([
    ["comment", "commented on your post"],
    ["like", "liked your post"],
    ["follow", "followed your profile"],
  ]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.message}>
        <Text style={styles.textUser}>{user} </Text>
        <Text style={styles.text}>{notificationMap.get(message)}</Text>
      </View>
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
  },
  avatar: {
    width: 40,
    height: 40,
    marginHorizontal: 15,
    borderRadius: 30,
  },
  text: {
    fontSize: 15,
  },
  textUser: {
    fontSize: 15,
    fontWeight: "bold",
  },
  message: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row",
    margin: 2,
  },
});
