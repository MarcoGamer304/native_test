import { Text } from "react-native";
import ScreenBorder from "../../../components/essential/ScreenBorders";

export default function SecurityScreen() {
  return (
    <ScreenBorder
      header={true}
      searchBar={false}
    >
      <Text>Security Screen</Text>
    </ScreenBorder>
  );
}
