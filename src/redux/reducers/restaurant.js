const initialState = {
  activeRestaurant: null,
  menuItems: [],
};

const restaurant = (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_RESTAURANT': {
      return {
        ...state,
        activeRestaurant: action.restaurantId,
      };
    }
    case 'SET_MENU': {
      return {
        ...state,
        menuItems: action.items,
      };
    }
    default:
      return state;
  }
};

export default restaurant;
