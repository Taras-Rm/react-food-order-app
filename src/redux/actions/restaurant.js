export const chooseRestaurant = (id) => {
  return {
    type: 'CHOOSE_RESTAURANT',
    restaurantId: id,
  };
};

export const setMenu = (items) => {
  return {
    type: 'SET_MENU',
    items: items,
  };
};
