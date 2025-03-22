import ProfileScreen from "../../screens/SideTabNavigator/profile/ProfileScreen";
import ConnectionsScreen from "../../screens/SideTabNavigator/connections/ConnectionsScreen";
import SavedScreen from "../../screens/SideTabNavigator/saved/SavedScreen";
import SecurityScreen from "../../screens/SideTabNavigator/security/SecurityScreen";
import tabsProps from "../../interfeces/componets/routes/tabsProps";

const sideTabs: tabsProps[] = [
  { name: "Profile", component: ProfileScreen, icon: "user" },
  { name: "Connections", component: ConnectionsScreen, icon: "search" },
  { name: "Saved", component: SavedScreen, icon: "bell" },
  { name: "Security", component: SecurityScreen, icon: "shield" },
  { name: "Settings", component: ProfileScreen, icon: "cogs" }, // hacer menu desplegable
];

export default sideTabs;
