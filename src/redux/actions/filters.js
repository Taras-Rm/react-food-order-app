export const setCategory = (index, value) => {
  return {
    type: 'SET_CATEGORY',
    index: index,
    value: value,
  };
};

export const setValute = (id, name, curs, symbol) => {
  return {
    type: 'SET_VALUTE',
    valuteId: id,
    valuteName: name,
    valuteCurs: curs,
    valuteSymbol: symbol,
  };
};
