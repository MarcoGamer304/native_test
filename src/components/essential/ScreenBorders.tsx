import React from "react";
import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "../Header"; 
import ScreenBorderProps from "../../interfeces/componets/essential/screenBorderProps";

export default function ScreenBorder({
  children,      
  header = true,
  scrollable = true,
  searchBar = false,
  style,
}: ScreenBorderProps): JSX.Element {
  return (
    <View style={[styles.container, style]}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          {header ? <Header avatar={"https://randomuser.me/api/portraits/women/2.jpg"} searchBar={searchBar} /> : <></>}
          <View style={styles.scrollContainer}>
            {scrollable ? (
              <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                {children} 
              </ScrollView>
            ) : (
              children
            )}
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    flex: 1,
  },
});