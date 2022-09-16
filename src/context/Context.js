import React, { useReducer } from 'react';
import { AppContext } from '.';
import { CHANGE_LANGUAGE, CHANGE_THEME } from './types';
import ThemeReducer from './reducer';
import useLanguage from '../hooks/useLanguage';
import useTheme from '../hooks/useTheme';

const Context = props => {
  const [theme, setTheme] = useTheme();
  const [language, setLanguage] = useLanguage();
  const initialState = {
    language,
    theme,
  };
  const [globalState, dispatch] = useReducer(ThemeReducer, initialState);

  const changeTheme = theme => {
    dispatch({
      type: CHANGE_THEME,
      payload: theme,
    });
    setTheme(theme);
  };

  const changeLanguage = lan => {
    dispatch({
      type: CHANGE_LANGUAGE,
      payload: lan,
    });
    setLanguage(lan);
  };

  const combineFunctions = {
    changeTheme,
    changeLanguage,
  };

  return (
    <AppContext.Provider value={{ ...globalState, ...combineFunctions }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default Context;
