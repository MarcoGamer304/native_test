import { View, StyleSheet, FlatList } from "react-native";
import recordsData from "../ProvisionalData/records";
import Records from "../components/Records";

export default function SuggestionScreen() {
  return (
      <View className="items-center" style={{}}>
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
