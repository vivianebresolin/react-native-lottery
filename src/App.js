import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { LotteryNumbers } from './components/LotteryNumbers';
import { Title } from './components/Title';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Números aleatórios para Loteria</Title>
      <LotteryNumbers />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
});

export default App;
