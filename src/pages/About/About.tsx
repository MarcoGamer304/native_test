import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import ScreenBorder from "../../components/ScreenBorders";

const options = [
  { icon: "chatbubble-ellipses-outline", label: "Help Center" },
  { icon: "person-outline", label: "Account Status" },
  { icon: "key-outline", label: "Privacy" },
  { icon: "mail-outline", label: "Support Inbox" },
  { icon: "flag-outline", label: "Report a problem" },
  { icon: "document-text-outline", label: "Policies" },
];

export default function AboutScreen() {
  return (
    <ScreenBorder header={true} searchBar={false}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>About</Text>
        <Text style={styles.subtitle}>RAID Help Center</Text>
        <View style={styles.optionsBox}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.label}
              style={styles.option}
              activeOpacity={0.3}
              // onPress={() => {}}
            >
              <Icon
                name={option.icon}
                size={24}
                color="#222"
                style={styles.icon}
              />
              <Text style={styles.label}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ScreenBorder>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    flexGrow: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 4,
    color: "#222",
  },
  subtitle: {
    color: "#555",
    marginBottom: 18,
    fontSize: 14,
  },
  optionsBox: {
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    paddingVertical: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 1,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  icon: {
    marginRight: 18,
    width: 28,
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    color: "#222",
  },
});

