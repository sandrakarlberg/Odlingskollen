import React from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import PlantStatusIcon from './PlantStatusIcon';
import { lightTheme } from '../theme/colors';


export default function PlantItem({ name, status, type }) {
  const getIconSource = (type) => {
    switch (type) {
      case 'tomato':
        return require('../assets/icons8-tomato-48.png');
      case 'lemon':
        return require('../assets/icons8-citrus-48.png');
      default:
        return require('../assets/icon-plant.png');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={getIconSource(type)} style={styles.icon} />
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
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  text: {
    flex: 1,
    marginLeft: 10,
  },
});
