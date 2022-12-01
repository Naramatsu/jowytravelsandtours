import { useEffect, useState } from 'react';
import {
  getItemFromLocalStorage,
  saveItemInLocalStorage,
} from '../utils/myStorage';

const useTheme = () => {
  const [theme, setTheme] = useState(
    getItemFromLocalStorage('theme') || 'light'
  );

  useEffect(() => {
    setTheme(getItemFromLocalStorage('theme'));
  }, [setTheme]);

  const setNewTheme = (theme) => {
    saveItemInLocalStorage('theme', theme);
    setTheme(theme);
  };

  return [theme, setNewTheme];
};

export default useTheme;
