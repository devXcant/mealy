import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/restaurant-info-components";

const isAndroid = Platform.OS === "android";

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, marginTop: isAndroid ? 50 : 0 }}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={ setSearchQuery}
          value={searchQuery}
        />
      </View>
      <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
        <Text>
            <RestaurantInfo />
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
    search:{
        padding: 15,
backgroundColor: 'white',
    }
});
