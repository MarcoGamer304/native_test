import { StatusBar } from "expo-status-bar";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableHighlight,
} from "react-native";
import TopTabsNavigator from "../../routes/TopTabsNavigator";
import ScreenBorder from "../../components/essential/ScreenBorders";
import SuggestionScreen from "./searchSection/SuggestionScreen";
import RecordScreen from "./searchSection/RecordScreen";
export default function SearchScreen() {
    return (
        <ScreenBorder style={styles.container} scrollable={false} searchBar={true}>
            <TopTabsNavigator
                elements={[
                    { name: "Suggestion", component: RecordScreen, icon: "home" },
                    { name: "Historial", component: SuggestionScreen, icon: "history" }
                ]}
            />
        </ScreenBorder>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
    },
});
