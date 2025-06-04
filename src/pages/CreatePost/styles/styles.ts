import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 18,
    paddingBottom: 8,
    borderBottomWidth: 0.5,
    borderColor: "#e6ecf0",
  },
  publishBtn: {
    backgroundColor: "#e63946",
    paddingHorizontal: 18,
    paddingVertical: 7,
    borderRadius: 20,
  },
  publishBtnText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 17,
    color: "#14171A",
    minHeight: 40,
    paddingTop: 5,
  },
  flexSpacer: {
    flex: 1,
  },
  actionBar: {
    paddingLeft: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    gap: 10,
    paddingVertical: 8,
    borderTopWidth: 0.8,
    borderColor: "#e6ecf0",
    backgroundColor: "#fff",
  },
});


