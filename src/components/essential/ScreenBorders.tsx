import React from "react";
import { View, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "../Header";
import ScreenBorderProps from "../../interfeces/componets/essential/screenBorderProps";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ScreenBorder({
  children,
  header = true,
  searchBar = false
}: ScreenBorderProps): JSX.Element {
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-1 items-center justify-start" style={{ backgroundColor: "#f5f5f5" }}>
      <SafeAreaProvider>
        <View style={{ paddingTop: insets.top+10, paddingLeft: insets.left, paddingRight: insets.right}} className="flex-1 w-full">
          {header ? (
            <Header
              avatar={"https://randomuser.me/api/portraits/women/2.jpg"}
              searchBar={searchBar}
            />
          ) : (
            <></>
          )}
          <View className="flex-1">{children}</View>
        </View>
      </SafeAreaProvider>
    </View>
  );
}

