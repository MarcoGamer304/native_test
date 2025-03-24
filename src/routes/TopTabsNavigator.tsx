import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import tabsProps from "../interfeces/componets/routes/tabsProps";

const Tab = createBottomTabNavigator();

export default function TopTabsNavigator({
  elements,
} : {
  elements: tabsProps[];
}) {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
        tabBarBadgeStyle: { backgroundColor: "red", color: "white" },
        tabBarStyle: {
          backgroundColor: "white",
          paddingTop: "2%",
          height: "10%",
        },
        headerShown: false,
        tabBarPosition: "top",
      }}
    >
      {elements.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name={item.icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}