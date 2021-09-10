import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { LotteryNumbers } from './components/LotteryNumbers';
import { SelectModality } from './components/SelectModality';
import { Title } from './components/Title';

const App = () => {
  const [indexSelectedModality, setIndexSelectedModality] = useState();

  function updateIndexModality(index) {
    setIndexSelectedModality(index);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Title>Números aleatórios para Loteria</Title>
      <SelectModality updateIndexModality={updateIndexModality} />
      <LotteryNumbers indexModality={indexSelectedModality} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    alignItems: 'center',
  },
});

export default App;
