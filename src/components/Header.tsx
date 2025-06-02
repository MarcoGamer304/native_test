import FontAwesome from "react-native-vector-icons/Ionicons";
import { JSX, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import type { HeaderProps } from "../models/types/headerProps";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { View, Image, Pressable, TextInput, Text } from "react-native";

type NavigationType = DrawerNavigationProp<any>;

export default function Header({
  avatar,
  searchBar,
}: HeaderProps): JSX.Element {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation<NavigationType>();

  return (
    <View className="flex-row items-center h-16 justify-between w-full" style={{ paddingBottom: 10, borderBottomColor: "#dde1e6", borderBottomWidth: 1 }}>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Image
          source={{ uri: avatar }}
          className="h-12 w-12 rounded-full mx-5"
        />
      </Pressable>
      {searchBar === true ? (
        <View
          className="flex flex-row items-center flex-1 mx-4 rounded-full"
          style={{ backgroundColor: "#e0e0e0", paddingHorizontal: 10 }}
        >
          <FontAwesome
            name={"search-outline"}
            size={25}
            style={{ marginHorizontal: 1, color: "#1e1e1e" }}
          />
          <TextInput
            className="flex-1 h-12 w-5 mx-3"
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      ) : (
        <Text className="text-2xl font-bold mx-5" style={{ fontFamily: 'Nunito', color: "#e63946"}}>RAID</Text>
      )}
    </View>
  );
}
