import HomeScreen from "../pages/Home/HomeScreen";
import MessageScreen from "../pages/Message/MessageScreen";
import NotificationScreen from "../pages/Notification/NotificationScreen";
import SearchScreen from "../pages/Search/SearchScreen";
import type { tabsProps } from "../models/types/tabsProps";
import { RootStackParamList } from "../models/types/navigation";

const bottomTabs: (tabsProps & { name: keyof RootStackParamList })[] = [
  { name: "Main", component: HomeScreen, icon: "home-outline" },
  { name: "Search", component: SearchScreen, icon: "search" },
  { name: "Notifications", component: NotificationScreen, icon: "notifications-outline" },
  { name: "Messages", component: MessageScreen, icon: "mail-outline" },
];

export default bottomTabs;
