import TopTabsNavigator from "../../routes/TopTabsNavigator";
import ScreenBorder from "../../components/essential/ScreenBorders";
import SuggestionScreen from "./searchSection/SuggestionScreen";
import RecordScreen from "./searchSection/RecordScreen";

export default function SearchScreen() {
    return (
        <ScreenBorder searchBar={true} header={true}>
            <TopTabsNavigator
                elements={[
                    { name: "Suggestion", component: SuggestionScreen, icon: "home" },
                    { name: "Historial", component: RecordScreen, icon: "history" }
                ]}
            />
        </ScreenBorder>
    );
}
