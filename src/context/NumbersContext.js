import React, { createContext, useContext, useEffect, useState } from 'react';
import ModalitiesContext from './ModalitiesContext';

const NumbersContext = createContext({});

export const NumbersProvider = props => {
  const { modalities, indexSelectedModality } = useContext(ModalitiesContext);
  const [arrayQtyNumbersToBet, setArrayQtyNumbersToBet] = useState([]);
  const [qtyNumbersToGenerate, setQtyNumbersToGenerate] = useState(0);
  const [maxNumber, setMaxNumber] = useState(0);

  function getArrayQtyNumbersToBet(index) {
    const arrayOfQtyNumbers = modalities[index].qtyNumbersToBet;
    setArrayQtyNumbersToBet(arrayOfQtyNumbers);
  }

  function getQtyNumbersToGenerate(number) {
    setQtyNumbersToGenerate(number);
  }

  useEffect(() => {
    setMaxNumber(modalities[indexSelectedModality].numbersAvailableToChoose);
  }, [modalities, indexSelectedModality]);

  useEffect(() => {
    setQtyNumbersToGenerate(arrayQtyNumbersToBet[0]);
  }, [arrayQtyNumbersToBet]);

  return (
    <NumbersContext.Provider
      value={{
        getArrayQtyNumbersToBet,
        arrayQtyNumbersToBet,
        qtyNumbersToGenerate,
        getQtyNumbersToGenerate,
        maxNumber,
      }}>
      {props.children}
    </NumbersContext.Provider>
  );
};

export default NumbersContext;
