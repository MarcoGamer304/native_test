/* eslint-disable @typescript-eslint/no-require-imports */
import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { TNavigation } from "../models/types/TNavigation";
import useLogin from "../hooks/useLogin";
import { TLogin } from "../models/types/TLogin";

export default function Login({ navigation }: TNavigation) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { requestUser, user, loading, error } = useLogin();

  const handleLogin = async () => {
    const loginData: TLogin = { email, password };
    requestUser(loginData);

    if (user) {
      navigation.replace("Home");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={{ alignItems: "center", marginBottom: 24 }}>
          <Image
            source={require("../../../../assets/RaidLogo.png")}
            style={{ width: 220, height: 120, resizeMode: "contain" }}
          />
        </View>

        <Text style={styles.label}>Your email</Text>
        <TextInput
          style={styles.input}
          placeholder="example@mail.com"
          placeholderTextColor="#bdbdbd"
          onChangeText={setEmail}
          value={email}
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#bdbdbd"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />

        {loading ? (
          <ActivityIndicator color="#fff" style={styles.loadingIndicator} />
        ) : (
          <View style={styles.buttonWrapper}>
            <Button title="Login" onPress={handleLogin} color="#e53935" />
          </View>
        )}

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don’t have an account? </Text>
          <Text
            style={styles.signupLink}
            onPress={() => navigation.replace("Register")}
          >
            Sign up
          </Text>
        </View>

        {error && <Text style={styles.error}>Error: {error}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
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
  container: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingHorizontal: 100,
    paddingVertical: 100,
  },
  label: {
    color: "#232323",
    fontSize: 13,
    marginBottom: 4,
    marginLeft: 2,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 15,
    marginBottom: 10,
    color: "#232323",
  },
  error: {
    color: "red",
    marginTop: 10,
  },
  buttonWrapper: {
    marginTop: 10,
    marginBottom: 8,
    borderRadius: 12,
    width: 260,
    overflow: "hidden",
  },
  loadingIndicator: {
    backgroundColor: "#e53935",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 8,
  },
});
