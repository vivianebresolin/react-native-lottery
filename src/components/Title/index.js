/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';
import { FONT_SIZE_X_LARGE } from '../../styles/styles';

export const Title = ({ children, color, fontSize, mb }) => {
  return (
    <Text
      style={{
        color: color || '#2E4053',
        fontSize: fontSize || FONT_SIZE_X_LARGE,
        textAlign: 'center',
        marginBottom: mb || 16,
      }}>
      {children}
    </Text>
  );
};
