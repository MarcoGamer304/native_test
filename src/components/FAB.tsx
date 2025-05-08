import React from 'react';
import { TouchableOpacity, StyleSheet, Animated } from "react-native";
import FontAwesome from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from '@react-navigation/drawer';
import type { RootStackParamList } from '../models/types/navigation';
import { tabBarAnimation } from '../routes/componets/BottomTabsNavigator';

export default function FAB() {
  const navigation = useNavigation<DrawerNavigationProp<RootStackParamList>>();
  
  return (
    <Animated.View style={[
      styles.fabContainer
    ]}>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate("CreatePost")}
      >
        <FontAwesome name="pencil" size={28} color="#fff" />
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  fabContainer: {
    position: 'absolute',
    right: 15,
    bottom: 30,
    zIndex: 2,
  },
  fab: {
    width: 58,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e63946',
    borderRadius: 28,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.25,
  },
});
