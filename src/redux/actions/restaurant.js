const chooseRestaurants = (id) => {
  return {
    type: 'CHOOSE_RESTAURANT',
    restaurantId: id,
  };
};

const setMenu = (items) => {
  return {
    type: 'SET_MENU',
    items: items,
  };
};
