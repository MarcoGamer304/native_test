import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from "react-native";
import { TNavigation } from "../models/types/TNavigation";
import useRegister from "../hooks/useRegister";
import { TRegister } from "../models/types/TRegister";

export default function Register({ navigation }: TNavigation) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [birthday, setBirthday] = useState("");
  const [name, setName] = useState("");

  const { requestUser, user, loading, error } = useRegister();

  const handleRegister = async () => {
    const loginData: TRegister = {
      email,
      password,
      age: parseInt(age, 10),
      birthday,
      name,
    };

    requestUser(loginData);

    if (user) {
      navigation.replace("Login");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Usename</Text>
      <TextInput
        style={styles.input}
        placeholder="Your userame"
        onChangeText={setName}
        value={name}
      />

      <Text style={styles.label}>Birthday</Text>
      <TextInput
        style={styles.input}
        placeholder="DD-MM-YYYY"
        onChangeText={setBirthday}
        value={birthday}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="example@mail.com"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="••••••••"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <TouchableOpacity style={styles.loginButton} onPress={handleRegister} activeOpacity={0.8}>
          <Text style={styles.loginButtonText}>Create account</Text>
        </TouchableOpacity>
      )}

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Do you have an account? </Text>
        <Text
          style={styles.signupLink}
          onPress={() => navigation.replace("Login")}
        >
          Login
        </Text>
      </View>

      {error && <Text style={styles.error}>Error: {error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f4f4f4',
  },
  label: { marginBottom: 5, alignSelf: 'flex-start' },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    width: 260,
    backgroundColor: '#fff',
  },
  loginButton: {
    backgroundColor: '#e53935',
    borderRadius: 10,
    width: 260,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 14,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  signupButton: {
    backgroundColor: '#f4f4f4',
    borderWidth: 2,
    borderColor: '#232323',
    borderRadius: 10,
    width: 260,
    paddingVertical: 12,
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#232323',
    fontSize: 18,
    fontWeight: '500',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  signupText: {
    color: '#bdbdbd',
    fontSize: 15,
  },
  signupLink: {
    color: '#1976d2',
    fontSize: 15,
    marginLeft: 2,
    fontWeight: '500',
  },

  error: { color: "red", marginTop: 10 },
});
