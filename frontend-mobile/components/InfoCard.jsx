import { StyleSheet, Text, View } from "react-native";
import React from "react";

const InfoCard = ({ title, info }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  );
};

export default InfoCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 40,
    width: 310,
    height: 310,
    margin: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  info: {
    marginTop: 15,
    fontSize: 15,
  }
});
