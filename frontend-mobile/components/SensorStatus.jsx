import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { lightTheme } from "../theme/colors";

const SensorStatus = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.status}>All sensors are online</Text>
    </View>
  );
};

export default SensorStatus;

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightTheme.neutral,
    padding: 30,
    borderBottomLeftRadius: 10,
    borderBottomEndRadius: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  status: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },
});
