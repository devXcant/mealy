import React from "react";
import styled from "styled-components";
import { SafeAreaView, StyleSheet, View, Platform } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

const Title = styled.Text`
  padding: 16px;

`

const RestaurantInfo = ({ restaurant = {} }) => {
  const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;
  const {
    name = "some restaurant",
    icon,
    photos = ["https://unsplash.com/collections/WbSnJpjwbiU/food"],
    address = "100 some randon street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card>
  );
};

export default RestaurantInfo;

const styles = StyleSheet.create({
  card: { backgroundColor: "white" },
  cover: { padding: 20, backgroundColor: "white" },
});
