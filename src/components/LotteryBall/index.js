import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import {
  BALL_BG,
  FONT_COLOR_SECONDARY,
  FONT_SIZE_MEDIUM,
} from '../../styles/styles';

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
    backgroundColor: BALL_BG,
    borderRadius: 50,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: FONT_SIZE_MEDIUM,
    fontWeight: 'bold',
    color: FONT_COLOR_SECONDARY,
  },
});
