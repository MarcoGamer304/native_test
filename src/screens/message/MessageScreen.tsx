import ScreenBorder from "../../components/essential/ScreenBorders";
import TopTabsNavigator from "../../routes/TopTabsNavigator";
import ChatScreen from "./messageSection/ChatScreen";
import TeamsScreen from "./messageSection/TemsScreen";

export default function MessageScreen() {
  return (
    <ScreenBorder
      searchBar={true}
      header={true}
    >
      <TopTabsNavigator
        elements={[
          { name: "Teams", component: TeamsScreen, icon: "comments" },
          { name: "Message", component: ChatScreen, icon: "comment" },
        ]}
      />
    </ScreenBorder>
  );
}

