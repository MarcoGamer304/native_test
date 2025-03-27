import { View, StyleSheet, FlatList } from "react-native";
import Records from "../../../components/Records";
import recordsData from "../../../provitionalData/records";

export default function RecordScreen() {
  return (
      <View className="items-center">
        <FlatList
          data={recordsData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Records
              id={item.id}
              key={item.id}
              notification={item.notification}
              avatar={item.avatar}
              user={item.user}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
  );
}

