import { StyleSheet, View } from "react-native";
import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import InfoCardSection from "../components/InfoCardSection";
import { lightTheme } from "../theme/colors";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <DashboardHeader
        url={require("../assets/icon-farmer.png")}
        user="Amanda"
      />
      <InfoCardSection />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightTheme.primary,
    flex: 1,
  },
});
