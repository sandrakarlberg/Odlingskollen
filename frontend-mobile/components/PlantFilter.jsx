import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BigButton from "../components/BigButton";

const PlantFilter = () => {
  const handleButtonClick = () => {
    console.log("You pressed the button!");
  };

  return (
    <View style={styles.container}>
      <BigButton
        title="Categories"
        variant="primary"
        onPress={handleButtonClick}
      />
      <BigButton title="Filter" variant="primary" onPress={handleButtonClick} />
    </View>
  );
};

export default PlantFilter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
