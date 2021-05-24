export const addItem = ({ name, newCount, price, restaurantId }) => {
  return {
    type: 'ADD_ITEM',
    itemName: name,
    itemCount: newCount,
    itemPrice: price,
    itemRestaurantId: restaurantId,
  };
};

export const deleteItem = ({ name, newCount, price, restaurantId }) => {
  return {
    type: 'DELETE_ITEM',
    itemName: name,
    itemCount: newCount,
    itemPrice: price,
    itemRestaurantId: restaurantId,
  };
};

export const clearBasket = () => {
  return {
    type: 'CLEAR_BASKET',
  };
};
