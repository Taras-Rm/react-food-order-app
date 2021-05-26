import axios from 'axios';

export const setRestaurant = (restaurantObj) => {
  return {
    type: 'SET_RESTAURANT',
    restaurantObj,
  };
};

export const setLoaded = (payload) => {
  return {
    type: 'SET_LOADED',
    payload: payload,
  };
};

export const fetchRestaurant = (id) => (dispatch) => {
  dispatch(setLoaded);
  axios.get(`http://localhost:3001/restaurants?id=${id}`).then((response) => {
    dispatch(setRestaurant(response.data));
  });
};

export const setMenu = (items) => {
  return {
    type: 'SET_MENU',
    items: items,
  };
};
