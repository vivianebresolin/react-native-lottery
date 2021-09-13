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
        <Title fontSize={FONT_SIZE_MEDIUM} mb={-6}>
          Escolha a modalidade:
        </Title>
      </View>
      <View style={styles.selectContainer}>
        <Picker
          style={styles.select}
          dropdownIconColor={'#fff'}
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
        <View style={styles.qtyNumbersContainer}>
          <View>
            <Title fontSize={FONT_SIZE_MEDIUM} mb={-6}>
              Quantidade de números:
            </Title>
          </View>
          <View style={styles.selectContainer}>
            <Picker
              style={styles.select}
              dropdownIconColor={'#fff'}
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
    width: '80%',
    marginBottom: 16,
    backgroundColor: 'rgba(0,0,0,0.35)',
    borderRadius: 6,
    paddingTop: 16,
  },
  qtyNumbersContainer: {
    marginTop: 8,
  },
  select: {
    width: '50%',
    color: '#fff',
  },
  selectContainer: {
    alignItems: 'center',
  },
});
