import React from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "./Header";
import { ScreenBorderProps } from "../models/types/screenBorderProps";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform } from 'react-native';

export default function ScreenBorder({
  children,
  header = true,
  searchBar = false
}: ScreenBorderProps): JSX.Element {
 
  const insets = useSafeAreaInsets();
  const top = Platform.OS === 'android' ? insets.top : 0;

  return (
    <View className="flex-1 items-center justify-start" style={{ backgroundColor: "#f5f5f5" }}>

        <View style={{ paddingTop: top, paddingRight: insets.right, paddingLeft: insets.left}} className="flex-1 w-full">
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
    </View>
  );
}

