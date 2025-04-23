import { StyleSheet, Text, View } from "react-native";
import React from "react";

const InfoCard = ({ title, info }) => {
  return (
    <View style={styles.card}>
      <Text>{title}</Text>
      <Text>{info}</Text>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    width: 250,
    height: 250,
    margin: 10,
  },
});
