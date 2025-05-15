import { StyleSheet, SafeAreaView, ScrollView, View } from "react-native";
import { useEffect, useState } from "react";
import { lightTheme } from "../theme/colors";
import PlantFilter from "../components/PlantFilter";
import CategoryCard from "../components/CategoryCard";
import { fetchPlants } from "../services/api";

const Plants = () => {
  const [userPlants, setUserPlants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPlants();
      if (data) setUserPlants(data);
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.PlantFilter}>
          <PlantFilter />
        </View>
        <View>
          <CategoryCard
            title="Växthus 1"
            plants={userPlants.map((item) => ({
              id: item.flower_id,
              name: item.flower_name,
              lastWatered: item.last_watered,
              moisture: item.moisture,
              sunlight: item.sunlight,
              status: "Healthy",
            }))}
          />
          <CategoryCard
            title="Växthus 2"
            plants={[
              { name: "Tomat 1", status: "Healthy", type: "tomato" },
              { name: "Tomat 2", status: "Unhealthy", type: "tomato" },
              { name: "Tomat 3", status: "Healthy", type: "tomato" },
            ]}
            style={styles.CategoryCard}
          />
          <CategoryCard
            title="Växthus 3"
            plants={[
              { name: "Citron 1", status: "Dying", type: "lemon" },
              { name: "Citron 2", status: "Healthy", type: "lemon" },
            ]}
            style={styles.CategoryCard}
          />
          <CategoryCard
            title="Växthus 4"
            plants={[
              { name: "Citron 1", status: "Dying", type: "lemon" },
              { name: "Citron 2", status: "Healthy", type: "lemon" },
            ]}
            style={styles.CategoryCard}
          />
          <CategoryCard
            title="Växthus 5"
            plants={[
              { name: "Tomat 1", status: "Healthy", type: "tomato" },
              { name: "Tomat 2", status: "Unhealthy", type: "tomato" },
              { name: "Tomat 3", status: "Healthy", type: "tomato" },
            ]}
            style={styles.CategoryCard}
          />
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
    marginBottom: 45, //la till margin för annars hamnade knappen under navbar
  },
  content: {},
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
