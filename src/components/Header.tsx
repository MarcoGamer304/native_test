import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import HeaderProps from "../interfeces/componets/headerProps";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import {
  StyleSheet,
  View,
  Image,
  Pressable ,
  TextInput
} from "react-native";

type NavigationType = DrawerNavigationProp<any>;

export default function Header({ avatar, searchBar }: HeaderProps ): JSX.Element{

  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation<NavigationType>();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.openDrawer()}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
      </Pressable>
      {searchBar === true ?
        <View style={styles.searchContainer}>
          <FontAwesome name={"search"} color={"black"} size={30} />
          <TextInput style={styles.input}
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText} />
        </View>
        : <Image source={{ uri: "https://img.freepik.com/vector-premium/diseno-vectorial-todo-mundo-estilo-icono_822882-12052.jpg?semt=ais_hybrid" }} style={styles.avatar} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    width: "100%",
    backgroundColor: "white",
    marginBottom: 5
  },
  avatar: {
    width: 50,
    height: 50,
   
    marginHorizontal: 30,
    borderRadius: 30
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 10,
    flex: 1,
    marginLeft: 10,
    width: "50%",
    marginHorizontal: 20,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    height: 40,
    width: 20,
    marginHorizontal: 10,
  },
});
