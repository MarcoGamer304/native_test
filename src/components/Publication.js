import Icon from "react-native-vector-icons/FontAwesome";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function Post({
  user,
  message,
  avatar,
  comments,
  likes,
  shares,
  destacados
}) {
  return (

      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={{ uri: avatar }} style={styles.avatar} />
          <View style={styles.tweetContent}>
            <View style={styles.headerContainer}>
            <Text style={styles.username}>{user}</Text>
            <Icon name="..." size={20} color="#000" />
            </View>
            <Text style={styles.tweetText}>{message}</Text>
          </View>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}> {comments}</Text>
            <Icon name="comments" size={20} color="blue" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}> {likes}</Text>
            <Icon name="heart" size={20} color="#FF0000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}> {shares}</Text>
            <Icon name="share" size={20} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}></Text>
            <Icon name="destacados" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: "350",
    borderWidth: 1,
    borderColor: "#dde1e6",
    borderRadius: 24,
    backgroundColor: "#dde1e6",
    borderBottomColor: "#dde1e6",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  tweetContent: {
    flex: 1,
  },
  username: {
    fontWeight: "bold",
    fontSize: 16,
  },
  tweetText: {
    fontSize: 14,
    color: "#14171A",
    marginTop: 2,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
   
  },
  actionButton: {
    paddingVertical: 5,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row-reverse",
  },
  actionText: {
    fontSize: 14,
    color: "#657786",
  },
  headerContainer:{
    flex:1,
    justifyContent: "space-between",
    alignContent: "center",
    flexDirection: "row"
  }
});
