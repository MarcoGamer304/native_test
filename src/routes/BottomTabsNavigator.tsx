import FontAwesome from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import tabs from "../components/routes/bottomTabs"

const Stack = createBottomTabNavigator();

export default function BottomTabsNavigator() {

    return (
        <Stack.Navigator
            screenOptions={{
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "gray",
                tabBarBadgeStyle: { backgroundColor: "red", color: "white" },
                tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
                tabBarStyle: {
                    backgroundColor: "#1e1e1e",
                    borderTopWidth: 0,
                },
                headerShown: false
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
