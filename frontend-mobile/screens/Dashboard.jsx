import { StyleSheet, View } from "react-native";
import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import { lightTheme } from "../theme/colors";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <DashboardHeader />
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
