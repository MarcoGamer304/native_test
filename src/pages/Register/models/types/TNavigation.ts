import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type StackParamList = {
  Login: undefined;
  Home: undefined;
  Register: undefined;
};

export type TNavigation = {
  navigation: NativeStackNavigationProp<StackParamList, "Register">;
};
