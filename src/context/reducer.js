import {
  ADD_TO_COMBO,
  CHANGE_LANGUAGE,
  CHANGE_THEME,
  REMOVE_FROM_COMBO,
} from "./types";

const reducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case CHANGE_THEME:
      return {
        ...state,
        theme: payload,
      };
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: payload,
      };
    case ADD_TO_COMBO:
      return {
        ...state,
        combo: [...state.combo, payload],
      };
    case REMOVE_FROM_COMBO:
      return {
        ...state,
        combo: state.combo.filter((item) => item.id !== payload.id),
      };
    default:
      return state;
  }
};

export default reducer;
