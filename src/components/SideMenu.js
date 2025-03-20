import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

export default function SideMenu(props) {
  return (
    <SafeAreaView style={styles.drawerContainer}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/2.jpg" }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Marco Alonso</Text>
      </View>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => props.navigation.navigate("Home")}
      >
        <Text style={styles.drawerItemText}>Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => props.navigation.navigate("Profile")}
      >
        <Text style={styles.drawerItemText}>Mi Perfil</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d1e6f1",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "#d1e6f1",
    padding: 10,
  },
  drawerContainer: {
    flex: 1,
    backgroundColor: "#333",
    padding: 20,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    color: "#fff",
    fontSize: 18,
    marginTop: 10,
  },
  drawerItem: {
    paddingVertical: 15,
  },
  drawerItemText: {
    color: "#fff",
    fontSize: 16,
  },
});
