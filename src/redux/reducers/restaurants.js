const initialState = {
  items: [],
  isLoaded: false,
};

const restaurants = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RESTAURANTS': {
      return {
        ...state,
        items: action.payload,
      };
    }
    default:
      return state;
  }
};

export default restaurants;
