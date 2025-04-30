import { StyleSheet, View, TextInput } from "react-native";
import React from "react";
import BigButton from "../components/BigButton";
import { lightTheme } from "../theme/colors";

const PlantFilter = () => {
  const handleButtonClick = () => {
    console.log("You pressed the button!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <BigButton
          title="Categories"i
          variant="primary"
          onPress={handleButtonClick}
          style={styles.button}
        />
        <BigButton
          title="Filter"
          variant="primary"
          onPress={handleButtonClick}
          style={styles.button}
        />
      </View>
      <TextInput style={styles.input} />
    </View>
  );
};

export default PlantFilter;

const styles = StyleSheet.create({
  container: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginHorizontal: "auto",
    marginTop: 50,
    width: 300,
  },
  button: {
    width: 145,
  },  
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  input: {
    backgroundColor: lightTheme.secondary,
    borderRadius: 10,
    padding: 12,
  },
});
