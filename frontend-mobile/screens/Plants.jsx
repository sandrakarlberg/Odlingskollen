import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { lightTheme } from "../theme/colors";
import PlantFilter from "../components/PlantFilter";

const Plants = () => {
  return (
    <View style={styles.container}>
      <PlantFilter />
    </View>
  );
};

export default Plants;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.primary,
  },
});
