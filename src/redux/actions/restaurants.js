import axios from 'axios';

export const setLoaded = (payload) => {
  return {
    type: 'SET_LOADED',
    payload: payload,
  };
};

// Асинхроний запит для отримання ресторанів і їх запис в Redux
export const fetchRestaurants = () => (dispatch) => {
  dispatch(setLoaded(false));
  axios.get('http://localhost:3001/restaurants').then((response) => {
    dispatch(setRestaurants(response.data));
  });
  //dispatch(setLoaded(false));
};

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
