import data from '../data.json';

export const getAllTabs = (language) =>
  Object.keys(data[language]).map((tab) => tab);

export const ignoreDuplicates = (items) => {
  const data = [];
  items.forEach((item) => {
    if (!data.includes(item)) data.push(item);
  });
  return data;
};

export const isEmpty = (input) => {
  if (!input || input === '' || !input.length) return true;
  return false;
};

export const filterByAnyProperty = (items, q) => {
  const result = [];
  items.forEach((item) => {
    const temp = [];
    Object.keys(q).forEach((key) => {
      if (!isEmpty(q[key])) {
        switch (key) {
          case 'capacity':
            if (parseInt(item[key]) >= parseInt(q[key])) {
              temp.push(true);
            } else {
              temp.push(false);
            }
            break;

          default:
            if (
              item[key]
                .toString()
                .toUpperCase()
                .includes(q[key].toString().toUpperCase())
            ) {
              temp.push(true);
            } else {
              temp.push(false);
            }
            break;
        }
      }
    });
    if (!temp.some((val) => !val)) {
      result.push(item);
    }
  });

  return result;
};
