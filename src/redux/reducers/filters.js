const initialState = {
  category: {
    value: null,
    name: 'all',
  },
  activeValute: 0,
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
        activeValute: action.valuteId,
      };
    }
    default:
      return state;
  }
};

export default filters;
