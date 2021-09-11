import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { LotteryNumbers } from './components/LotteryNumbers';
import { SelectModality } from './components/SelectModality';
import { Title } from './components/Title';
import { ModalitiesProvider } from './context/ModalitiesContext';
import { NumbersProvider } from './context/NumbersContext';

const App = () => {
  return (
    <ModalitiesProvider>
      <NumbersProvider>
        <SafeAreaView style={styles.container}>
          <Title mb={32}>Números aleatórios para Loteria</Title>
          <SelectModality />
          <LotteryNumbers />
        </SafeAreaView>
      </NumbersProvider>
    </ModalitiesProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 18,
    alignItems: 'center',
  },
});

export default App;
