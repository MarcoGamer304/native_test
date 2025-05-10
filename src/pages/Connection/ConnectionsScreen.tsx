import { Text } from "react-native";
import ScreenBorder from "../../components/ScreenBorders";

export default function ConnectionsScreen() {
  return (
    <ScreenBorder
      header={true}
      searchBar={false}
    >
      <Text>Connections Screen</Text>
    </ScreenBorder>
  );
}
