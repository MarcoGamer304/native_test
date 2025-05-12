import ScreenBorder from "../../components/ScreenBorders";
import Login from "./components/Login";
import { TNavigation } from "./models/types/TNavigation";

export default function LoginScreen({ navigation }: TNavigation) {
  return (
    <ScreenBorder header={false} searchBar={false}>
      <Login navigation={navigation}/>
    </ScreenBorder>
  );
}
