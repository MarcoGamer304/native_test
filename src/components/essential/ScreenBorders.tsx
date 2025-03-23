import React from "react";
import { View, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "../Header";
import ScreenBorderProps from "../../interfeces/componets/essential/screenBorderProps";

export default function ScreenBorder({
  children,
  header = true,
  searchBar = false
}: ScreenBorderProps): JSX.Element {
  return (
    <View className="flex-1 bg-white items-center justify-start">
      <SafeAreaProvider>
        <SafeAreaView>
          {header ? (
            <Header
              avatar={"https://randomuser.me/api/portraits/women/2.jpg"}
              searchBar={searchBar}
            />
          ) : (
            <></>
          )}
          <View className="flex-1">{children}</View>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}

