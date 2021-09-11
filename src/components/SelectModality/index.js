import React, { useContext } from 'react';
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
  const {
    getArrayQtyNumbersToBet,
    arrayQtyNumbersToBet,
    qtyNumbersToGenerate,
    getQtyNumbersToGenerate,
  } = useContext(NumbersContext);

  return (
    <View style={styles.container}>
      <View>
        <Title fontSize={FONT_SIZE_MEDIUM} mb={2}>
          Escolha a modalidade:
        </Title>
      </View>
      <View style={styles.selectContainer}>
        <Picker
          style={styles.select}
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
      {arrayQtyNumbersToBet.length !== 0 && (
        <View>
          <View>
            <Title fontSize={FONT_SIZE_MEDIUM} mb={2}>
              Quantidade de números:
            </Title>
          </View>
          <View style={styles.selectContainer}>
            <Picker
              style={styles.select}
              selectedValue={qtyNumbersToGenerate}
              onValueChange={qty => getQtyNumbersToGenerate(qty)}>
              {arrayQtyNumbersToBet &&
                arrayQtyNumbersToBet.map(modality => (
                  <Picker.Item
                    key={modality}
                    label={modality.toString()}
                    value={modality}
                  />
                ))}
            </Picker>
          </View>
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
  select: {
    width: '65%',
  },
  selectContainer: {
    alignItems: 'center',
  },
});
