import data from '../data.json';

export const getAllTabs = language =>
  Object.keys(data[language]).map(tab => tab);

export const ignoreDuplicates = items => {
  const data = [];
  items.forEach(item => {
    if (!data.includes(item)) data.push(item);
  });
  return data;
};

export const filterByAnyProperty = (items, q) => {
  const values = items.map(item => {
    return Object.values(item).join();
  });
  const ids = values
    .filter(item => item.toUpperCase().includes(q.toUpperCase()))
    .map(item => item.split(',')[0]);
  return items.filter(item => ids.includes(item.id));
};
