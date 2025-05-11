import ScreenBorder from "../../components/ScreenBorders";
import Register from "./components/Register";
import { TNavigation } from "./models/types/TNavigation";

export default function RegisterScreen({ navigation }: TNavigation) {
  return (
    <ScreenBorder header={false} searchBar={false}>
      <Register navigation={navigation}/>
    </ScreenBorder>
  );
}
