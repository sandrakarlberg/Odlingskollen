import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useMemo } from "react";
import PlantItem from "../components/PlantItem";
import { lightTheme } from "../theme/colors";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function CategoryCard({ title, plants }) {
  const navigation = useNavigation();
  const [limit, setLimit] = useState(3);

  const handlePress = () => {
    navigation.navigate("AddPlant");
  };

  const handleShowMore = () => {
    if (limit < plants.length) {
      setLimit(limit + 3);
    } else if (limit >= plants.length) {
      setLimit(3);
    }
  };

  const renderedPlants = useMemo(() => {
    return plants
      .slice(0, limit)
      .map((plant, index) => (
        <PlantItem key={index} {...plant} index={index} />
      ));
  }, [plants]);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={handlePress} style={styles.addButton}>
        <Text style={styles.addButtonText}>Lägg till växt</Text>
      </Pressable>
      {renderedPlants}
      {plants.length > 3 ? (
        <TouchableOpacity
          style={styles.showMoreButton}
          onPress={handleShowMore}
        >
          <Text style={styles.showMoreText}>
            {plants.length <= limit ? "Visa mindre" : "Visa mer"}
          </Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: lightTheme.secondary,
    padding: 40,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  addButton: {
    alignSelf: "center",
    marginVertical: 15,
    backgroundColor: lightTheme.darkButton,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontWeight: 500,
  },
  showMoreButton: {
    backgroundColor: lightTheme.neutral,
    padding: 10,
    borderRadius: 8,
    marginTop: 12,
    alignItems: "center",
  },
  showMoreText: {
    color: lightTheme.card,
    fontWeight: "bold",
  },
});
