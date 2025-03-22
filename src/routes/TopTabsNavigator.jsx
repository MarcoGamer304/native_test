import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Tab = createBottomTabNavigator();

export default function TopTabsNavigator({ elements }) {

    return (
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "gray",
            tabBarLabelStyle: barStyles.tabBarLabelStyle,
            tabBarBadgeStyle: barStyles.tabBarBadgeStyle,
            tabBarStyle: barStyles.tabBarStyle,
            headerShown: false, 
            tabBarPosition: "top"
        }}
        >
            {elements.map((item, index) => (
                <Tab.Screen
                    key={index}
                    name={item.name}
                    component={item.component}
                    options={{
                        tabBarIcon: ({ color, size }) => <FontAwesome name={item.icon} color={color} size={size} />,
                    }}
                />
            ))}
        </Tab.Navigator>
    );
}

const barStyles = StyleSheet.create({
    tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
    tabBarBadgeStyle: { backgroundColor: "red", color: "white" },
    tabBarStyle: {
        backgroundColor: "#fff",
        paddingTop:"2%",
        height: "10%"
    },
});
