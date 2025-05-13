import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import PlantStatusIcon from './PlantStatusIcon';
import { lightTheme } from '../theme/colors';


export default function PlantItem({ name, status, type }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{type === 'tomato' ? '' : '🍋'}</Text>
      <Text style={styles.text}>{name}</Text>
      <PlantStatusIcon status={status} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: lightTheme.primary,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 6,
  },
  icon: {
    fontSize: 20,
  },
  text: {
    flex: 1,
    marginLeft: 10,
  },
});
