import React, { useReducer } from "react";
import { AppContext } from ".";
import {
  ADD_TO_COMBO,
  CHANGE_LANGUAGE,
  CHANGE_THEME,
  REMOVE_FROM_COMBO,
} from "./types";
import ThemeReducer from "./reducer";
import useLanguage from "../hooks/useLanguage";
import useTheme from "../hooks/useTheme";
import { getItemFromLocalStorage } from "../utils/myStorage";
import { addToCombo, removeFromCombo } from "../utils/combo";

const Context = (props) => {
  const [theme, setTheme] = useTheme();
  const [language, setLanguage] = useLanguage();
  const initialState = {
    language,
    theme,
    combo: getItemFromLocalStorage("combo") || [],
  };
  const [globalState, dispatch] = useReducer(ThemeReducer, initialState);

  const changeTheme = (theme) => {
    dispatch({
      type: CHANGE_THEME,
      payload: theme,
    });
    setTheme(theme);
  };

  const changeLanguage = (lan) => {
    dispatch({
      type: CHANGE_LANGUAGE,
      payload: lan,
    });
    setLanguage(lan);
  };

  const addItemToCombo = (item) => {
    dispatch({
      type: ADD_TO_COMBO,
      payload: item,
    });
    addToCombo(item);
  };

  const removeItemFromCombo = (item) => {
    dispatch({
      type: REMOVE_FROM_COMBO,
      payload: item,
    });
    removeFromCombo(item);
  };

  const combineFunctions = {
    changeTheme,
    changeLanguage,
    addItemToCombo,
    removeItemFromCombo,
  };

  return (
    <AppContext.Provider value={{ ...globalState, ...combineFunctions }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default Context;
