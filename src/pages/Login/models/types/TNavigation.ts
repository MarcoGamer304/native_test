import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type StackParamList = {
  Login: undefined;
  Home: undefined;
};

export type TNavigation = {
  navigation: NativeStackNavigationProp<StackParamList, "Login">;
};
