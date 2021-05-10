export const setCategory = (index) => {
  return {
    type: 'SET_CATEGORY',
    category: index,
  };
};

export const setValute = (id) => {
  return {
    type: 'SET_VALUTE',
    valuteId: id,
  };
};
