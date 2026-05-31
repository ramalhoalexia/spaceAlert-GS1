import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { AppContextValue } from '../interfaces';

const useApp = (): AppContextValue => {
  const ctx = useContext(AppContext);

  if (!ctx) {
    throw new Error(
      'Erro identificado'
    );
  }

  return ctx;
};

export default useApp;
