import React, { createContext, useState } from 'react';
import { modalities } from '../constants/modalities';

const ModalitiesContext = createContext({});

export const ModalitiesProvider = props => {
  const [selectedModality, setSelectedModality] = useState();
  const [indexSelectedModality, setIndexSelectedModality] = useState(0);

  function updateSelectedModality(modality) {
    setSelectedModality(modality);
  }

  function updateIndexModality(index) {
    setIndexSelectedModality(index);
  }

  return (
    <ModalitiesContext.Provider
      value={{
        modalities,
        selectedModality,
        updateSelectedModality,
        updateIndexModality,
        indexSelectedModality,
      }}>
      {props.children}
    </ModalitiesContext.Provider>
  );
};

export default ModalitiesContext;
