import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { TNavigation } from "../models/types/TNavigation";
import useRegister from "../hooks/useRegister";
import { TRegister } from "../models/types/TRegister";
import { styles } from "../styles/styles";

export default function Register({ navigation }: TNavigation) {
  const {
    requestUser,
    user,
    loading,
    error,
    setEmail,
    setLast_name,
    setName,
    setUsername,
    setPassword,
    setPassword_confirmation,
    email,
    password,
    username,
    last_name,
    name,
    password_confirmation,
  } = useRegister();

  const handleRegister = async () => {
    const loginData: TRegister = {
      email,
      password,
      username,
      last_name,
      name,
      password_confirmation,
    };

    requestUser(loginData);

    if (user) {
      navigation.replace("Login");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Text style={styles.label}>Usename</Text>
      <TextInput
        style={styles.input}
        placeholder="Your userame"
        onChangeText={setName}
        value={name}
      />

      <Text style={styles.label}>Lastname</Text>
      <TextInput
        style={styles.input}
        placeholder="Lastname"
        onChangeText={setLast_name}
        value={last_name}
        autoCapitalize="sentences"
        keyboardType="ascii-capable"
      />

      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
        autoCapitalize="sentences"
        keyboardType="ascii-capable"
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

      <Text style={styles.label}>Confirmation</Text>
      <TextInput
        style={styles.input}
        placeholder="••••••••"
        secureTextEntry
        onChangeText={setPassword_confirmation}
        value={password_confirmation}
      />

      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleRegister}
          activeOpacity={0.8}
        >
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
    </TouchableWithoutFeedback>
  );
}

