import FontAwesome from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Animated } from "react-native";
import tabs from "../components/routes/bottomTabs";
import { RootStackParamList } from "../types/navigation";


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
          paddingTop: -20,
          
        },
        headerShown: false,
      }}
    >
      {tabs.map((item) => (
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
