import { Text } from "react-native";
import ScreenBorder from "../../../components/essential/ScreenBorders";

export default function ProfileScreen() {
  return (
    <ScreenBorder
      header={true}
      searchBar={false}
    >
      <Text>profileScreen</Text>
    </ScreenBorder>
  );
}
