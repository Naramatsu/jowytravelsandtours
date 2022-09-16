import { CHANGE_LANGUAGE, CHANGE_THEME } from './types';

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
    default:
      return state;
  }
};

export default reducer;
