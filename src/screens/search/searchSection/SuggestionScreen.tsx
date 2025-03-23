import { View, Text } from "react-native";
import ScreenBorder from "../../../components/essential/ScreenBorders";

export default function SuggestionScreen() {
  return (
    <ScreenBorder header={false} searchBar={false}>
      <View>
        <Text> Hacer sistema de reels</Text>
      </View>
    </ScreenBorder>
  );
}
