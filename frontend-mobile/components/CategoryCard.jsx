import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PlantItem from '../components/PlantItem';
import BigButton from '../components/BigButton';
import { lightTheme } from '../theme/colors';

export default function CategoryCard({ title, plants }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {plants.map((plant, index) => (
        <PlantItem key={index} name={plant.name} status={plant.status} type={plant.type} />
      ))}
      <TouchableOpacity style={styles.showMoreButton}>
        <Text style={styles.showMoreText}>Visa mer</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: lightTheme.secondary,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  showMoreButton: {
    backgroundColor: lightTheme.neutral,
    padding: 10,
    borderRadius: 8,
    marginTop: 12,
    alignItems: 'center',
  },
  showMoreText: {
    color: lightTheme.card,
    fontWeight: 'bold',
  },
});
