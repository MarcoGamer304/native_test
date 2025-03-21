import { StyleSheet, Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tabs from "../components/routes/tabs"

const Stack = createBottomTabNavigator();

export default function App() {

    return (
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
            {tabs.map((item) => (
                <Stack.Screen
                    key={item.name}
                    name={item.name}
                    component={item.component}
                    options={{
                        tabBarIcon: ({ color, size }) => <FontAwesome name={item.icon} color={color} size={size} />,
                    }}
                />
            ))}
        </Stack.Navigator>
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
