import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  label: { marginBottom: 5, alignSelf: "flex-start" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    width: 260,
    backgroundColor: "#fff",
  },
  loginButton: {
    backgroundColor: "#e53935",
    borderRadius: 10,
    width: 260,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 14,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  signupButton: {
    backgroundColor: "#f4f4f4",
    borderWidth: 2,
    borderColor: "#232323",
    borderRadius: 10,
    width: 260,
    paddingVertical: 12,
    alignItems: "center",
  },
  signupButtonText: {
    color: "#232323",
    fontSize: 18,
    fontWeight: "500",
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 8,
  },
  signupText: {
    color: "#bdbdbd",
    fontSize: 15,
  },
  signupLink: {
    color: "#1976d2",
    fontSize: 15,
    marginLeft: 2,
    fontWeight: "500",
  },

  error: { color: "red", marginTop: 10 },
});
