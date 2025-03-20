import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Stack = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarBadgeStyle: barStyles.tabBarBadgeStyle,
          tabBarLabelStyle: barStyles.tabBarLabelStyle,
          tabBarStyle: barStyles.tabBarStyle,
          headerShown: false,
          tabBarStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" color={color} size={size} />
            ),
          }}
        />
        <Stack.Screen
          name="Search"
          component={ProfileScreen}
          options={{
            title: "Search",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="search" color={color} size={size} />
            ),
          }}
        />
        <Stack.Screen
          name="Notifications"
          component={ProfileScreen}
          options={{
            title: "Notifications",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="bell" color={color} size={size} />
            ),
          }}
        />
        <Stack.Screen
          name="Messages"
          component={ProfileScreen}
          options={{
            title: "Messages",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="envelope" color={color} size={size} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const barStyles = StyleSheet.create({
  tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
  tabBarBadgeStyle: { backgroundColor: "red", color: "white" },
  tabBarStyle: {
    backgroundColor: "#1e1e1e",
    borderTopWidth: 0,
  },
});
