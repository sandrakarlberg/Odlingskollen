import { StyleSheet, View, SafeAreaView } from "react-native";
import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import InfoCardSection from "../components/InfoCardSection";
import SensorStatus from "../components/SensorStatus";
import { lightTheme } from "../theme/colors";
import { useUser } from "../context/UserContext";

const Dashboard = () => {
  const { username } = useUser();

  return (
    <SafeAreaView style={styles.container}>
      <DashboardHeader
        url={require("../assets/icon-farmer-2.png")}
        user={username}
      />
      <InfoCardSection />
      <SensorStatus />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: lightTheme.primary,
    flex: 1,
  },
});
