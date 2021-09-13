import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { FONT_SIZE_MEDIUM } from '../../styles/styles';

export const LotteryBall = ({ number }) => {
  return (
    <View key={number} style={styles.container}>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: '#E5E7E9',
    borderRadius: 50,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
    color: '#2E4053',
  },
});
