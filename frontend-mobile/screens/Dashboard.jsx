import { StyleSheet, View, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import DashboardHeader from "../components/DashboardHeader";
import InfoCardSection from "../components/InfoCardSection";
import SensorStatus from "../components/SensorStatus";
import { lightTheme } from "../theme/colors";
import { useUser } from "../context/UserContext";
import Timeline from "../components/Timelines";

const Dashboard = () => {
  const { username } = useUser();

  const plants = [
    { step: 6, title: 'Not Started Yet', color: '#A0A0A0' },
    { step: 5, title: '4 tasks completed', subtitle: 'In Progress', color: '#D97E33' },
    { step: 4, title: '3 tasks completed', subtitle: 'Completed on 04/23/2024', color: '#3FA46A' },
    { step: 3, title: '4 tasks completed', subtitle: 'Completed on 04/23/2024', color: '#3FA46A' },
  ];
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <DashboardHeader
        url={require("../assets/icon-farmer-2.png")}
        user={username}
      />
      <InfoCardSection />
      <SensorStatus />
      <Timeline steps={plants} />
      </ScrollView>
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
