import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import InfoCard from "./InfoCard";

const InfoCardSection = () => {
  const content = [
    {
      id: 1,
      title: "Looks good!",
      info: "The plants are getting enough sun, but the water levels are dropping.",
    },
    {
      id: 2,
      title: "Looks okay.",
      info: "The plants are getting enough sun, but the water levels are low.",
    },
    {
      id: 3,
      title: "Looks bad!",
      info: "The plants are not getting enough sun and the water levels are too low.",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={[styles.scrollContent]}
      >
        {content.map((item) => (
          <InfoCard key={item.id} title={item.title} info={item.info} />
        ))}
      </ScrollView>
    </View>
  );
};

export default InfoCardSection;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  scrollContent: {
    padding: 30,
    alignContent: "center",
  },
});
