import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  ActivityIndicator,
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
    <View style={styles.container}>
      <Text style={styles.label}>Correo electrónico</Text>
      <TextInput
        style={styles.input}
        placeholder="ejemplo@correo.com"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
      />

      <Text style={styles.label}>Contraseña</Text>
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
        <Button title="Iniciar sesión" onPress={handleLogin} />
      )}

      <Button
        title="Sign in"
        onPress={() => {
          navigation.replace("Register");
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
