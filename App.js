import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import RestaurantScreen from "./src/features/screens/restaurant.screen";
const isAndroid = Platform.OS === "android";
export default function App() {
  return (
    <>
      <RestaurantScreen/>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
