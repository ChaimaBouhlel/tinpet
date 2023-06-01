import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [animalId, setAnimalId] = useState(null);

  return (
    <FormContext.Provider value={{ animalId, setAnimalId }}>
      {children}
    </FormContext.Provider>
  );
};