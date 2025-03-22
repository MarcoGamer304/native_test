import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export default interface ScreenBorderProps {
  children: ReactNode;
  style?: ViewStyle;
  header: boolean;
  scrollable: boolean;
  searchBar: boolean;
}
