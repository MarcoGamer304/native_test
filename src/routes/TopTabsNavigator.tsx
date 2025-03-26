import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import FontAwesome from "react-native-vector-icons/FontAwesome";
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
        tabBarActiveTintColor: "#1e1e1e",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: { fontSize: 13, fontWeight: "bold", marginBottom: 5, marginTop: -15,},
        tabBarBadgeStyle: { backgroundColor: "red", color: "white" },
        
        tabBarStyle: {
          backgroundColor: "#f5f5f5",
          borderTopWidth: 0,
          paddingTop: "-10%",
          height: "8%",
          borderBottomWidth: 1,
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
            tabBarIcon: ({}) => (null),

              
          }}
        />
      ))}
    </Tab.Navigator>
  );
}