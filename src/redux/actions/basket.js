export const addItem = (name, count, price, restaurantId) => {
  return {
    type: 'ADD_ITEM',
    itemName: name,
    itemCount: count,
    itemPrice: price,
    itemRestaurantId: restaurantId,
  };
};

export const deleteItem = (name, count, restaurantId) => {
  return {
    type: 'DELETE_ITEM',
    itemName: name,
    itemCount: count,
    itemRestaurantId: restaurantId,
  };
};
