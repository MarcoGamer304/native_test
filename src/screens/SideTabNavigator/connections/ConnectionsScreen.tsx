import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ScreenBorder from "../../../components/essential/ScreenBorders";

const connections = [
  { name: "PlayStation", icon: "logo-playstation" },
  { name: "Steam", icon: "logo-steam" },
  { name: "Xbox", icon: "logo-xbox" },
  { name: "Activision", icon: "game-controller" },
  { name: "Electronic Arts", icon: "logo-electron" },
  { name: "Epic Games", icon: "logo-buffer" },
  { name: "Ubisoft", icon: "flame-outline" },
];

export default function ConnectionsScreen() {
  return (
    <ScreenBorder header={true} searchBar={false}>
      <ScrollView contentContainerStyle={styles.container}>
        {connections.map((conn) => (
          <View style={styles.row} key={conn.name}>
            <View style={styles.logoBox}>
              <Icon name={conn.icon} size={32} color="black" />
            </View>
            <Text style={styles.name}>{conn.name}</Text>
            <TouchableOpacity style={styles.connectBtn} activeOpacity={0.3}>
              <Text style={styles.connectText}>Connect</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </ScreenBorder>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 18,
    paddingHorizontal: 0,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderBottomWidth: 2,
    borderBottomColor: "#e0e0e0",
    backgroundColor: "#f4f4f4",
  },
  logoBox: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: "normal",
    color: "#222",
  },
  connectBtn: {
    borderWidth: 1,
    borderColor: "#E63946",
    borderRadius: 22,
    paddingVertical: 6,
    paddingHorizontal: 20,
    marginLeft: 10,
  },
  connectText: {
    color: "#E63946",
    fontWeight: "normal",
    fontSize: 16,
  },
});
