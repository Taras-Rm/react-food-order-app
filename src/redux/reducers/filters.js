const initialState = {
  category: {
    value: null,
    name: 'all',
  },

  activeValute: {
    name: 'usd',
    id: 0,
    curs: 1,
    symbol: '$',
  },

  // З сервера ціни приходять в доларах

  // Доступні валюти
  valutes: [
    { name: 'usd', id: 0, curs: 1, symbol: '$' },
    { name: 'eur', id: 1, curs: 0.7, symbol: '€' },
    { name: 'rub', id: 2, curs: 67, symbol: '₽' },
    { name: 'uan', id: 3, curs: 27, symbol: '₴' },
  ],
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY': {
      return {
        ...state,
        category: {
          value: action.index,
          name: action.value,
        },
      };
    }
    case 'SET_VALUTE': {
      return {
        ...state,
        activeValute: {
          name: action.valuteName,
          id: action.valuteId,
          curs: action.valuteCurs,
          symbol: action.valuteSymbol,
        },
      };
    }
    default:
      return state;
  }
};

export default filters;
