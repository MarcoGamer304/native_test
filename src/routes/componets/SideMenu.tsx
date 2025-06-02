import { StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import FontAwesome from "react-native-vector-icons/Ionicons";
import { createDrawerNavigator, DrawerContentComponentProps, DrawerItem } from "@react-navigation/drawer";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import sideTabs from "../../components/routes/sideTabs";
import BottomTabsNavigator from "./BottomTabsNavigator";
import CreatePostScreen from '../../screens/create/CreatePostScreen';
import ProfileScreen from '../../pages/Profile/ProfileScreen';

const Stack = createDrawerNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileSection}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
          <Image 
            source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
            style={styles.avatar}
          />
        </TouchableOpacity>
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

      {/* Home button oculto */}
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
      {/* Botón Theme eliminado */}
    </DrawerContentScrollView>
  );
}

export default function SideMenu() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
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
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />
        {sideTabs.filter(item => item.name !== 'Profile').map((item) => (
          <Stack.Screen
            key={item.name}
            name={item.name}
            component={item.component}
          />
        ))}
      </Stack.Navigator>
    </SafeAreaView>
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
