import { NavigationContainer } from "@react-navigation/native";
import BottomTabsNavigator from "./src/routes/BottomTabsNavigator";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <BottomTabsNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
