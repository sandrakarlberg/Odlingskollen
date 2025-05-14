import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { lightTheme } from "../theme/colors";
import BigButton from "./BigButton";

const PlantDetails = ({ route }) => {
  const navigation = useNavigation();
  const { otherParams } = route.params;

  const backgroundColor =
    otherParams.status === "Healthy"
      ? "#3F6133"
      : otherParams.status === "Unhealthy"
      ? "#FFDE8D"
      : otherParams.status === "Dying"
      ? "#FF0000"
      : "grey";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <BigButton
          title="Gå tillbaka"
          variant="primary"
          onPress={() => navigation.navigate("Main")}
        />
        <Text style={styles.title}>{otherParams.name}</Text>
        <Text style={styles.status}>{otherParams.status}</Text>
        <Text style={styles.type}>{otherParams.type}</Text>
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
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  status: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 20,
  },
  type: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 20,
  },
});
