import { StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { createDrawerNavigator } from "@react-navigation/drawer";
import sideTabs from "../components/routes/sideTabs";
import BottomTabsNavigator from "./BottomTabsNavigator";

const Stack = createDrawerNavigator();

export default function SideMenu() {
  return (
    <Stack.Navigator
      screenOptions={{
        drawerLabelStyle: { fontSize: 12, fontWeight: "bold" },
        drawerActiveTintColor: "black",
        drawerInactiveTintColor: "gray",
        drawerStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
        },
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={BottomTabsNavigator}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name={"home"} color={color} size={size} />
          ),
        }}
      />

      {sideTabs.map((item) => (
        <Stack.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            drawerIcon: ({ color, size }) => (
              <FontAwesome name={item.icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Stack.Navigator>
  );
}

