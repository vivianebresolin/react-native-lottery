import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { Title } from '../Title';
import ModalitiesContext from '../../context/ModalitiesContext';
import NumbersContext from '../../context/NumbersContext';

import { FONT_SIZE_MEDIUM } from '../../styles/styles';

export const SelectModality = () => {
  const {
    modalities,
    selectedModality,
    updateSelectedModality,
    updateIndexModality,
  } = useContext(ModalitiesContext);
  const { getArrayQtyNumbersToBet, qtyNumbersToBet, qtyNumbersToGenerate } =
    useContext(NumbersContext);
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={styles.container}>
      <View>
        <Title fontSize={FONT_SIZE_MEDIUM} mb={2}>
          Escolha a modalidade:
        </Title>
      </View>
      <View>
        <Picker
          selectedValue={selectedModality}
          onValueChange={(modalityName, modalityIndex) => {
            updateSelectedModality(modalityName);
            updateIndexModality(modalityIndex);
            getArrayQtyNumbersToBet(modalityIndex);
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
      {qtyNumbersToBet.length !== 0 && (
        <View>
          <Picker
            selectedValue={qtyNumbersToGenerate}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }>
            {qtyNumbersToBet &&
              qtyNumbersToBet.map(modality => (
                <Picker.Item
                  key={modality}
                  label={modality.toString()}
                  value={modality}
                />
              ))}
          </Picker>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '60%',
    marginBottom: 16,
  },
});
