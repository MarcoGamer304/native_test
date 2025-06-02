import FontAwesome from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Animated } from "react-native";
import bottomTabs from "../bottomTabs";
import type { RootStackParamList } from "../../models/types/navigation";

const Stack = createBottomTabNavigator<RootStackParamList>();
export const tabBarAnimation = new Animated.Value(1);

export default function BottomTabsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#1e1e1e",
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "gray",
        tabBarBadgeStyle: { backgroundColor: "red", color: "white" },
        tabBarStyle: {
          backgroundColor: "#f5f5f5",
          borderTopWidth: 0,
          marginVertical: 15, 
          justifyContent: "flex-end",
          maxHeight: 40,
          elevation: 0,
        },
        headerShown: false,
      }}
    >
      {bottomTabs.map((item) => (
        <Stack.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome
                name={focused ? item.icon.replace("-outline", "") : item.icon}
                color={color}
                size={28}
              />
            ),
          }}
        />
      ))}
    </Stack.Navigator>
  );
}
