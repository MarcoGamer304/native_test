import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { tabsProps } from '../models/types/tabsProps';

const Tab = createMaterialTopTabNavigator();

export default function TopTabsNavigator({
  elements,
}: {
  elements: tabsProps[];
}) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#1e1e1e",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: { 
          fontSize: 13, 
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: "#f5f5f5",
          elevation: 0, 
          shadowOpacity: 0,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#E63946",
          height: 2.5,
          width: "50%",
          borderRadius: 20,
          
        },
        tabBarIndicatorContainerStyle: {
          borderBottomWidth: 0.5,
          borderBottomColor: 'gray',
          marginBottom: 0
        },
      }}
    >
      {elements.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
        />
      ))}
    </Tab.Navigator>
  );
}