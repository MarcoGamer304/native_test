import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { TNavigation } from "../Login/models/types/TNavigation";

export default function Access({ navigation }: TNavigation) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/RaidLogo.png')}
          style={styles.logo}
        />
        <Text style={styles.raidText}>R A I D</Text>
      </View>
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate("Login")}
        activeOpacity={0.8}
      >
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => navigation.navigate("Register")}
        activeOpacity={0.8}
      >
        <Text style={styles.signUpText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 16,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 36,
  },
  logo: {
    width: 120,
    height: 200,
    resizeMode: 'contain',
  },
  raidText: {
    fontSize: 28,
    fontStyle: 'italic',
    letterSpacing: 10,
    color: '#232323',
    marginBottom: 24,
  },
  signInButton: {
    backgroundColor: '#e53935',
    borderRadius: 10,
    width: 260,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 14,
  },
  signInText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  signUpButton: {
    backgroundColor: '#f4f4f4',
    borderWidth: 2,
    borderColor: '#232323',
    borderRadius: 10,
    width: 260,
    paddingVertical: 12,
    alignItems: 'center',
  },
  signUpText: {
    color: '#232323',
    fontSize: 18,
    fontWeight: '500',
  },
});
