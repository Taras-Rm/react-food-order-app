const initialState = {
  // Масив об'єктів
  items: [],

  item: {
    name: '',
    count: 0,
    price: 10,
  },
};

const basket = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      // Перевірка на те чи така страва в меню вже додана, для того, щоб не створювати нових об'єктів в корзині
      if (
        state.items.find(
          (item) => item.name === action.itemName && item.restaurantId === action.itemRestaurantId,
        )
      ) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.name === action.itemName && item.restaurantId === action.itemRestaurantId
              ? { ...item, count: action.itemCount }
              : item,
          ),
        };
      } else {
        let newItem = {
          name: action.itemName,
          count: action.itemCount,
          price: action.itemPrice,
          restaurantId: action.itemRestaurantId,
        };
        return {
          ...state,
          items: [...state.items, newItem],
        };
      }
    }
    case 'DELETE_ITEM': {
      return {
        ...state,
        items: state.items.map((item) =>
          item.name === action.itemName && item.restaurantId === action.itemRestaurantId
            ? { ...item, count: action.itemCount }
            : item,
        ),
      };
    }
    default:
      return state;
  }
};

export default basket;
