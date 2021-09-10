import React, { useState } from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { LotteryBall } from '../LotteryBall/index';

export const LotteryNumbers = () => {
  const [qtdNumbers, setQtdNumbers] = useState(10);
  const [numbersArray, setNumbersArray] = useState([]);
  let maxNumber = 60;

  function getNotRepeatedNumber(nums) {
    const newNumber = parseInt(Math.random() * maxNumber, 10) + 1;
    return nums.includes(newNumber) ? getNotRepeatedNumber(nums) : newNumber;
  }

  function getNumbers() {
    const numbers = Array(qtdNumbers)
      .fill()
      .reduce(n => [...n, getNotRepeatedNumber(n)], [])
      .sort((a, b) => a - b);

    setNumbersArray(numbers);
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Gerar números" onPress={getNumbers} color="#239B56" />
      </View>
      <View style={styles.generatedNumbers}>
        {numbersArray &&
          numbersArray.map(number => (
            <LotteryBall key={number} number={number} />
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '55%',
    marginBottom: 12,
  },
  container: {
    alignItems: 'center',
  },
  generatedNumbers: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
