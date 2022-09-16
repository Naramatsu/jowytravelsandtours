import { useEffect, useState } from 'react';
import {
  getItemFromLocalStorage,
  saveItemInLocalStorage,
} from '../utils/myStorage';

const useLanguage = () => {
  const [language, setLan] = useState(
    getItemFromLocalStorage('language') || 'es',
  );

  useEffect(() => {
    setLan(getItemFromLocalStorage('language'));
  });

  const setLanguage = language => {
    saveItemInLocalStorage('language', language);
    setLan(language);
  };

  return [language, setLanguage];
};

export default useLanguage;
