import React, { useContext, useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';

import NumbersContext from '../../context/NumbersContext';
import { LotteryBall } from '../LotteryBall/index';

export const LotteryNumbers = () => {
  const { qtyNumbersToGenerate, maxNumber } = useContext(NumbersContext);
  const [numbersArray, setNumbersArray] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  function getNotRepeatedNumber(nums) {
    const newNumber = parseInt(Math.random() * maxNumber, 10) + 1;
    return nums.includes(newNumber) ? getNotRepeatedNumber(nums) : newNumber;
  }

  function getNumbers() {
    const numbers = Array(qtyNumbersToGenerate)
      .fill()
      .reduce(n => [...n, getNotRepeatedNumber(n)], [])
      .sort((a, b) => a - b);

    setNumbersArray(numbers);
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
      <View style={styles.generatedNumbers}>
        {numbersArray &&
          numbersArray.map(number => (
            <LotteryBall key={number} number={number} />
          ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    marginBottom: 12,
  },
  generatedNumbers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
