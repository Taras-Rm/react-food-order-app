const setRestaurants = (items) => {
  return {
    type: 'SET_RESTAURANTS',
    payload: items,
  };
};

const chooseRestaurants = (id) => {
  return {
    type: 'CHOOSE_RESTAURANT',
    restaurantId: id,
  };
};
