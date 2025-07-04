import ScreenBorder from "../../components/ScreenBorders";
import TopTabsNavigator from "../../routes/TopTabsNavigator";
import ChatScreen from "./messageSection/ChatScreen";
import TeamsScreen from "./messageSection/TemsScreen";

export default function MessageScreen() {
  
  return (
    <ScreenBorder searchBar={false} header={true}>
      <TopTabsNavigator
        elements={[
          { name: "Teams", component: TeamsScreen, icon: "comments" },
          { name: "Message", component: ChatScreen, icon: "comment" },
        ]}
        tabBarVisible={false}
      />
    </ScreenBorder>
  );
}
