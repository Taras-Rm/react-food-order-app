const initialState = {
  activeRestaurant: null,
  menuItems: [],

  isLoaded: false,
};

const restaurant = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RESTAURANT': {
      return {
        ...state,
        activeRestaurant: action.restaurantObj,
        isLoaded: true,
      };
    }
    case 'SET_MENU': {
      return {
        ...state,
        menuItems: action.items,
      };
    }
    case 'SET_LOADED': {
      return {
        ...state,
        isLoaded: action.payload,
      };
    }
    default:
      return state;
  }
};

export default restaurant;
