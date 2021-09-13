/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text } from 'react-native';
import { FONT_COLOR_PRIMARY, FONT_SIZE_X_LARGE } from '../../styles/styles';

export const Title = ({ children, color, fontSize, mb, textAlign }) => {
  return (
    <Text
      style={{
        color: color || FONT_COLOR_PRIMARY,
        fontSize: fontSize || FONT_SIZE_X_LARGE,
        textAlign: textAlign || 'center',
        marginBottom: mb || 16,
        fontWeight: '700',
      }}>
      {children}
    </Text>
  );
};
