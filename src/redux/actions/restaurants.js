export const setRestaurants = (items) => {
  return {
    type: 'SET_RESTAURANTS',
    payload: items,
  };
};

export const chooseRestaurants = (id) => {
  return {
    type: 'CHOOSE_RESTAURANT',
    restaurantId: id,
  };
};
