import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
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
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={setName}
        value={name}
      />

      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        placeholder="25"
        keyboardType="numeric"
        onChangeText={setAge}
        value={age}
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
        placeholder="example@correo.com"
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
        <Button title="Registrarse" onPress={handleRegister} />
      )}

      <Button
        title="Register"
        onPress={() => {
          navigation.replace("Login");
        }}
      />

      {error && <Text style={styles.error}>Error: {error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1, justifyContent: "center" },
  label: { marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
  error: { color: "red", marginTop: 10 },
});
