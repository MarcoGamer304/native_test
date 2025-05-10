import Notification from "./components/Notification";
import ScreenBorder from "../../components/ScreenBorders";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import FAB from "../../components/FAB";
import useNotification from "./hooks/useNotification";
import { TNotification } from "./models/types/TNotification";

export default function NotificationScreen() {
  const { allNotifications, loading, error, refresh } = useNotification(1);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <ScreenBorder searchBar={false} header={true}>
      <View className="items-center">
        <FlatList
          data={allNotifications || []}
          keyExtractor={(item: TNotification) => item.id.toString()}
          renderItem={({ item }: { item: TNotification }) => (
            <Notification
              id={item.id}
              message={item.message}
              avatar={item.avatar}
              user={item.user}
            />
          )}
        />
      </View>
      <FAB />
    </ScreenBorder>
  );
}
