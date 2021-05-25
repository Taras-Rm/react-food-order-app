const initialState = {
  // Масив об'єктів
  items: [],

  // Загальна вартість
  totalPrice: 0,
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
        let newItems = state.items.map((item) =>
          item.name === action.itemName && item.restaurantId === action.itemRestaurantId
            ? { ...item, count: action.itemCount, price: item.price + action.itemPrice }
            : item,
        );
        return {
          ...state,
          items: newItems,
          totalPrice: newItems.reduce((sum, elem) => sum + elem.price, 0),
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
          totalPrice: [...state.items, newItem].reduce((sum, elem) => sum + elem.price, 0),
        };
      }
    }
    case 'DELETE_ITEM': {
      const newItems = state.items
        .map((item) =>
          item.name === action.itemName && item.restaurantId === action.itemRestaurantId
            ? { ...item, count: action.itemCount, price: item.price - action.itemPrice }
            : item,
        )
        .filter((item) => item.count !== 0);
      return {
        ...state,
        items: newItems,
        totalPrice: newItems.reduce((sum, elem) => sum + elem.price, 0),
      };
    }
    case 'CLEAR_BASKET': {
      return {
        ...state,
        items: [],
        totalPrice: 0,
      };
    }
    default:
      return state;
  }
};

export default basket;
