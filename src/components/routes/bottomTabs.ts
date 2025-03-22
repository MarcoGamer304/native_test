import HomeScreen from "../../screens/home/HomeScreen";
import ProfileScreen from "../../screens/message/MessageScreen";
import NotificationScreen from "../../screens/notifications/NotificationScreen";
import SearchScreen from "../../screens/search/SearchScreen";
import tabsProps from "../../interfeces/componets/routes/tabsProps"

const bottomTabs : tabsProps[] = [
  { name: "Main", component: HomeScreen, icon: "home" },
  { name: "Search", component: SearchScreen, icon: "search" },
  { name: "Notifications", component: NotificationScreen, icon: "bell" },
  { name: "Messages", component: ProfileScreen, icon: "envelope" },
];

export default bottomTabs;
