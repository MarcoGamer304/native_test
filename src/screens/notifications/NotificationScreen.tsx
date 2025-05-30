import Notification from "../../components/Notification";
import notificationData from "../../provitionalData/notificationExamples";
import ScreenBorder from "../../components/essential/ScreenBorders";
import { View } from "react-native";

export default function NotificationScreen() {
  return (
    <ScreenBorder
      searchBar={false}
      header={true}
    >
      <View className="items-center">
        {notificationData.map((item) => (
          <Notification
            id={item.id}
            key={item.id}
            message={item.message}
            avatar={item.avatar}
            user={item.user}
          />
        ))}
      </View>
    </ScreenBorder>
  );
}
