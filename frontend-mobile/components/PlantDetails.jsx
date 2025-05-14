import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { lightTheme } from "../theme/colors";
import BigButton from "./BigButton";

const PlantDetails = ({ route }) => {
  const navigation = useNavigation();
  const { otherParams } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <BigButton
          title="Gå tillbaka"
          variant="primary"
          onPress={() => navigation.navigate("Main")}
        />
        <Text>{otherParams.name}</Text>
        <Text>{otherParams.status}</Text>
        <Text>{otherParams.type}</Text>
      </View>
    </SafeAreaView>
  );
};

export default PlantDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.primary,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    margin: 20,
    padding: 20,
    height: 700,
  },
});
