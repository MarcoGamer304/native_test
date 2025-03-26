import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import tabs from "../components/routes/bottomTabs";

const Stack = createBottomTabNavigator();

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
            tabBarIcon: ({ color }) => (
            <View style={{ width: 36, height: 36, justifyContent: "center", alignItems: "center", marginTop: 5 }}>
                <FontAwesome name={item.icon} color={color} size={28} />
            </View>
            ),
        }}
        />
    ))}
    </Stack.Navigator>
);
}
