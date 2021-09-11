import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { Title } from '../Title';

import { FONT_SIZE_MEDIUM } from '../../styles/styles';
import ModalitiesContext from '../../context/ModalitiesContext';

export const SelectModality = () => {
  const {
    modalities,
    selectedModality,
    updateSelectedModality,
    updateIndexModality,
  } = useContext(ModalitiesContext);

  return (
    <View style={styles.container}>
      <View>
        <Title fontSize={FONT_SIZE_MEDIUM} mb={2}>
          Escolha a modalidade:
        </Title>
      </View>
      <Picker
        selectedValue={selectedModality}
        onValueChange={(modalityName, modalityIndex) => {
          updateSelectedModality(modalityName);
          updateIndexModality(modalityIndex);
        }}>
        {modalities &&
          modalities.map(modality => (
            <Picker.Item
              key={modality.name}
              label={modality.name}
              value={modality.name}
            />
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
