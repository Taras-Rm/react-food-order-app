const initialState = {
  category: {
    value: null,
    name: 'all',
  },

  activeValute: {
    name: 'usd',
    id: 0,
    curs: 27,
  },

  // Доступні валюти
  valutes: [
    { name: 'usd', id: 0, curs: 27 },
    { name: 'eur', id: 1, curs: 30 },
    { name: 'rub', id: 2, curs: 0.4 },
    { name: 'uan', id: 3, curs: 1 },
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
        },
      };
    }
    default:
      return state;
  }
};

export default filters;
