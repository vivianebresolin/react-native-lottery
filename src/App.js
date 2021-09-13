import React from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, View } from 'react-native';

import { LotteryNumbers } from './components/LotteryNumbers';
import { SelectModality } from './components/SelectModality';
import { Title } from './components/Title';
import { ModalitiesProvider } from './context/ModalitiesContext';
import { NumbersProvider } from './context/NumbersContext';

import coins from './assets/images/coins.jpg';
import { FONT_SIZE_XX_LARGE } from './styles/styles';

const App = () => {
  return (
    <ModalitiesProvider>
      <NumbersProvider>
        <SafeAreaView style={styles.container}>
          <ImageBackground source={coins} style={styles.bgImage}>
            <View style={styles.bgDark}>
              <View style={styles.content}>
                <Title fontSize={FONT_SIZE_XX_LARGE} mb={32} color={'#FFF'}>
                  NÚMEROS PARA LOTERIA
                </Title>
                <SelectModality />
                <LotteryNumbers />
              </View>
            </View>
          </ImageBackground>
        </SafeAreaView>
      </NumbersProvider>
    </ModalitiesProvider>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    flex: 1,
  },
  bgDark: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.65)',
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
    paddingTop: 36,
  },
});

export default App;
