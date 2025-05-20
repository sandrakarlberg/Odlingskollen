import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import InfoCard from "./InfoCard";

const InfoCardSection = () => {
  const content = [
    {
      id: 1,
      title: "Ser bra ut!",
      info: "Växterna får tillräckligt med sol, men vattennivåerna har börjat sjunka.",
    },
    {
      id: 2,
      title: "Ser okej ut.",
      info: "Växterna får tillräckligt med sol, men vattennivåerna är låga.",
    },
    {
      id: 3,
      title: "Ser dåligt ut!",
      info: "Växterna får inte tillräckligt med sol och vattennivåerna är för låga.",
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
