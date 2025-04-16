import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const DashboardHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/icon-farmer.png")}
          style={styles.headerIcon}
        />
        <Text style={styles.headerText}>Hello, user!</Text>
      </View>
    </View>
  );
};

export default DashboardHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "start",
    padding: 40,
    marginHorizontal: 70,
    marginTop: 10,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerIcon: {
    backgroundColor: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderWidth: 10,
    borderRadius: "100%",
  },
});
