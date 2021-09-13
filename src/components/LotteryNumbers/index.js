import React, { useContext, useState, useEffect } from 'react';
import { Button, View, StyleSheet, ScrollView } from 'react-native';

import ModalitiesContext from '../../context/ModalitiesContext';
import NumbersContext from '../../context/NumbersContext';
import { LotteryBall } from '../LotteryBall/index';

export const LotteryNumbers = () => {
  const { indexSelectedModality } = useState(ModalitiesContext);
  const { qtyNumbersToGenerate, maxNumber, buttonDisabled } =
    useContext(NumbersContext);
  const [numbersArray, setNumbersArray] = useState([]);

  useEffect(() => {
    setNumbersArray([]);
  }, [indexSelectedModality, qtyNumbersToGenerate]);

  function getNotRepeatedNumber(nums) {
    const newNumber = parseInt(Math.random() * maxNumber, 10) + 1;
    return nums.includes(newNumber) ? getNotRepeatedNumber(nums) : newNumber;
  }

  function getNumbers() {
    const generatedNumbers = Array(qtyNumbersToGenerate)
      .fill()
      .reduce(n => [...n, getNotRepeatedNumber(n)], [])
      .sort((a, b) => a - b);

    setNumbersArray(generatedNumbers);
  }

  return (
    <>
      <View style={styles.buttonContainer}>
        <Button
          title="Gerar números"
          onPress={getNumbers}
          color="#239B56"
          disabled={buttonDisabled}
        />
      </View>
      <ScrollView>
        <View style={styles.generatedNumbers}>
          {numbersArray &&
            numbersArray.map(number => (
              <LotteryBall key={number} number={number} />
            ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    marginBottom: 12,
  },
  generatedNumbers: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
