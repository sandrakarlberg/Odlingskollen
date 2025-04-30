import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { lightTheme } from "../theme/colors";
import PlantFilter from "../components/PlantFilter";

const Plants = () => {
  return (
    <SafeAreaView style={styles.container}>
      <PlantFilter />
    </SafeAreaView>
  );
};

export default Plants;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.primary,
  },
});
