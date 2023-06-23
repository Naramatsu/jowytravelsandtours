import { getItemFromLocalStorage, saveItemInLocalStorage } from "./myStorage";

export const addToCombo = (item) => {
  const actualData = getItemFromLocalStorage("combo") || [];
  const isAlreadyStored = actualData.find((i) => i.id === item.id);
  if (!isAlreadyStored) saveItemInLocalStorage("combo", [...actualData, item]);
};

export const removeFromCombo = (item) => {
  const actualData = getItemFromLocalStorage("combo") || [];
  saveItemInLocalStorage(
    "combo",
    actualData.filter((i) => i.id !== item.id)
  );
};
