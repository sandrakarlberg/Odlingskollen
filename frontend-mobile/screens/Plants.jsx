import { StyleSheet, SafeAreaView, ScrollView, View, } from "react-native";
import React from "react";
import { lightTheme } from "../theme/colors";
import PlantFilter from "../components/PlantFilter";
import CategoryCard from "../components/CategoryCard";

const Plants = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.PlantFilter}>
          <PlantFilter />
        </View>
        <View>
          <CategoryCard
            title="Växthus 1"
            plants={[
              { name: "Tomat 1", status: "Healty", type: "tomato" },
              { name: "Tomat 2", status: "Unhealty", type: "tomato" },
              { name: "Tomat 3", status: "Healty", type: "tomato" },
            ]}
          style={styles.CategoryCard}/>
          <CategoryCard
            title="Växthus 2"
            plants={[
              { name: "Citron 1", status: "Dying", type: "lemon" },
              { name: "Citron 2", status: "Healty", type: "lemon" },
            ]}
          style={styles.CategoryCard}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Plants;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.primary,
  },
    content: {
  },
  PlantFilter: {
    flex: 1,
    marginBottom: 50,
    borderRadius: 10,
  },
  CategoryCard: {
    flex: 1,
    paddingBottom: 50,
    borderRadius: 10,
  },
});
