import { View, Text, Image } from "react-native";
import Records from "../../../components/Records";
import ScreenBorder from "../../../components/essential/ScreenBorders";
import records from "../../../provitionalData/records";

export default function RecordScreen() {
  return (
    <ScreenBorder header={false} >
      <View>
        {records.map((item) => (
          <Records
            key={item.id}
            notification={item.notification}
            avatar={item.avatar}
            user={item.user}
          />
        ))}
      </View>
    </ScreenBorder>
  );
}
