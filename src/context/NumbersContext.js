import React, { createContext, useContext, useState } from 'react';
import ModalitiesContext from './ModalitiesContext';

const NumbersContext = createContext({});

export const NumbersProvider = props => {
  const { modalities } = useContext(ModalitiesContext);
  const [qtyNumbersToBet, setQtyNumbersToBet] = useState([]);
  const [qtyNumbersToGenerate, setQtyNumbersToGenerate] = useState(0);

  function getArrayQtyNumbersToBet(index) {
    const arrayOfQtyNumbers = modalities[index].qtyNumbersToBet;
    setQtyNumbersToBet(arrayOfQtyNumbers);
  }

  return (
    <NumbersContext.Provider
      value={{
        getArrayQtyNumbersToBet,
        qtyNumbersToBet,
        qtyNumbersToGenerate,
      }}>
      {props.children}
    </NumbersContext.Provider>
  );
};

export default NumbersContext;
