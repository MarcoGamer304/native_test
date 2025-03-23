import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import HeaderProps from "../interfeces/componets/headerProps";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { View, Image, Pressable, TextInput } from "react-native";

type NavigationType = DrawerNavigationProp<any>;

export default function Header({
  avatar,
  searchBar,
}: HeaderProps): JSX.Element {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation<NavigationType>();

  return (
    <View className="flex-row items-center h-50 justify-between w-full">
      <Pressable onPress={() => navigation.openDrawer()}>
        <Image
          source={{ uri: avatar }}
          className="h-14 w-14 rounded-full mx-5"
        />
      </Pressable>
      {searchBar === true ? (
        <View
          className="flex flex-row items-center flex-1 mx-4 rounded-full"
          style={{ backgroundColor: "#f0f0f0", paddingHorizontal: 10 }}
        >
          <FontAwesome
            name={"search"}
            color={"black"}
            size={30}
            style={{ marginHorizontal: 6 }}
          />
          <TextInput
            className="flex-1 h-12 w-5 mx-3"
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
          />
        </View>
      ) : (
        <Image
          className="h-14 w-14 rounded-full mx-5"
          source={{
            uri: "https://img.freepik.com/vector-premium/diseno-vectorial-todo-mundo-estilo-icono_822882-12052.jpg?semt=ais_hybrid",
          }}
        />
      )}
    </View>
  );
}
