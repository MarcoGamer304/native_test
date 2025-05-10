import { StyleSheet, View, Text, Image } from "react-native";
import FontAwesome from "react-native-vector-icons/Ionicons";
import { createDrawerNavigator, DrawerContentComponentProps, DrawerItem } from "@react-navigation/drawer";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import sideTabs from "../sideTabs";
import BottomTabsNavigator from "./BottomTabsNavigator";
import CreatePostScreen from "../../pages/Post/CreatePostScreen";

const Stack = createDrawerNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileSection}>
        <Image 
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          style={styles.avatar}
        />
        <Text style={styles.username}>MarcoElizondo</Text>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>1.5K</Text>
            <Text style={styles.statLabel}>Siguiendo</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2.8K</Text>
            <Text style={styles.statLabel}>Seguidores</Text>
          </View>
        </View>
      </View>

      <DrawerItem
        label="Home"
        icon={({ color, size }) => (
          <FontAwesome name="home-outline" color={color} size={size} />
        )}
        onPress={() => props.navigation.navigate('Home')}
      />
      {sideTabs.filter(item => item.name !== "Theme").map((item) => (
        <DrawerItem
          key={item.name}
          label={item.name}
          icon={({ color }) => (
            <FontAwesome name={item.icon} color={color} size={24} />
          )}
          onPress={() => props.navigation.navigate(item.name)}
        />
      ))}
      <View style={{ flex: 1 }} />
      <DrawerItem
        label={''}
        icon={({ color }) => (
          <FontAwesome name={sideTabs.find(item => item.name === "Theme")?.icon || "moon-outline"} color={color} size={34} />
        )}
        onPress={() => props.navigation.navigate('Theme')}
        style={{ position: 'absolute', left: 0, bottom: -200, width: 66, height: 66, borderRadius: 33, alignItems: 'flex-start', paddingLeft: 16}}
      />
    </DrawerContentScrollView>
  );
}

export default function SideMenu() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          drawerLabelStyle: { fontSize: 14, fontWeight: "bold" },
          drawerActiveTintColor: "black",
          drawerInactiveTintColor: "gray",
          drawerStyle: {
            backgroundColor: "#f5f5f5",
            borderTopWidth: 0,
          },
          headerShown: false,
          drawerStatusBarAnimation: "slide",
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Stack.Screen
          name="Home"
          component={BottomTabsNavigator}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePostScreen}
        />
        {sideTabs.map((item) => (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
          />
        ))}
      </Stack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  profileSection: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#dde1e6",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 12,
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  statsContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  statItem: {
    marginRight: 24,
  },
  statNumber: {
    fontSize: 15,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 14,
    color: "#657786",
  },
});
