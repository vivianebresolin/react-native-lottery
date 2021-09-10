import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { Title } from '../Title';
import { Modalities } from '../../constants/modalities';
import { FONT_SIZE_MEDIUM } from '../../styles/styles';

export const SelectModality = ({ updateIndexModality }) => {
  const [selectedModality, setSelectedModality] = useState();

  return (
    <View style={styles.container}>
      <Title fontSize={FONT_SIZE_MEDIUM} mb={2}>
        Escolha a modalidade:
      </Title>
      <Picker
        selectedValue={selectedModality}
        onValueChange={(modalityName, modalityIndex) => {
          setSelectedModality(modalityName);
          updateIndexModality(modalityIndex);
        }}>
        {Modalities.map(modality => (
          <Picker.Item label={modality.name} value={modality.name} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '60%',
    marginBottom: 16,
  },
});
