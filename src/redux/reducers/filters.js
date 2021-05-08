const initialState = {
  category: null,
  activeValute: 0,
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CATEGORY': {
      return {
        ...state,
        category: action.category,
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
