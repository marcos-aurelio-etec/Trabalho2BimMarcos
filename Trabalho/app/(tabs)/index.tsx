import { Image, StyleSheet, View } from 'react-native';
import React from 'react'

import Home from '../../components/Home'
import Sobre from '../../components/Sobre'


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Home />
      <Sobre />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
