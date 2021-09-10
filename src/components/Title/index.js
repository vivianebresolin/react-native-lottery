/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';
import { FONT_SIZE_X_LARGE } from '../../styles/styles';

export const Title = ({ children, color, fontSize }) => {
  return (
    <Text
      style={{
        color: color || '#2E4053',
        fontSize: fontSize || FONT_SIZE_X_LARGE,
        textAlign: 'center',
        marginBottom: 16,
      }}>
      {children}
    </Text>
  );
};
