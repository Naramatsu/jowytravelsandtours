const myStorage = window.localStorage;

export const getItemFromLocalStorage = key => {
  return JSON.parse(myStorage.getItem(key));
};

export const removeItemFromLocalStorage = key => {
  myStorage.removeItem(key);
};

export const saveItemInLocalStorage = (key, value) => {
  myStorage.setItem(key, JSON.stringify(value));
};
