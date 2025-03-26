import ProfileScreen from "../../screens/SideTabNavigator/profile/ProfileScreen";
import ConnectionsScreen from "../../screens/SideTabNavigator/connections/ConnectionsScreen";
import SavedScreen from "../../screens/SideTabNavigator/saved/SavedScreen";
import SecurityScreen from "../../screens/SideTabNavigator/security/SecurityScreen";
import tabsProps from "../../interfeces/componets/routes/tabsProps";

const sideTabs: tabsProps[] = [
  { name: "Profile", component: ProfileScreen, icon: "person-outline" },
  { name: "Connections", component: ConnectionsScreen, icon: "link-outline" },
  { name: "Saved", component: SavedScreen, icon: "bookmark-outline" },
  { name: "Settings", component: SecurityScreen, icon: "settings-outline" },
  { name: "About", component: ProfileScreen, icon: "help-circle-outline" }, // hacer menu desplegable
  { name: "Theme", component: ProfileScreen, icon: "contrast-outline" }
];

export default sideTabs;
