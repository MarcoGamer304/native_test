import ProfileScreen from "../pages/Profile/ProfileScreen";
import ConnectionsScreen from "../pages/Connection/ConnectionsScreen";
import SavedScreen from "../pages/Saved/SavedScreen";
import SecurityScreen from "../pages/Security/SecurityScreen";
import type { tabsProps } from "../models/types/tabsProps";
import LoginScreen from "../pages/Login/LoginScreen";

const sideTabs: tabsProps[] = [
  { name: "Profile", component: ProfileScreen, icon: "person-outline" },
  { name: "Connections", component: ConnectionsScreen, icon: "link-outline" },
  { name: "Saved", component: SavedScreen, icon: "bookmark-outline" },
  { name: "Settings", component: SecurityScreen, icon: "settings-outline" },
  { name: "About", component: ProfileScreen, icon: "help-circle-outline" },
  { name: "Theme", component: ProfileScreen, icon: "moon-outline" },
 // {name: "Login", component: LoginScreen, icon: "moon-outline"}
];

export default sideTabs;
