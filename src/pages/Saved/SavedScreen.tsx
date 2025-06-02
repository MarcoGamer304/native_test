import { Text } from "react-native";
import ScreenBorder from "../../components/ScreenBorders";

export default function SavedScreen() {
  return (
    <ScreenBorder
      header={true}
      searchBar={false}
    >
      <Text>Saved test Screen</Text>
    </ScreenBorder>
  );
}

