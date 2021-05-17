import axios from 'axios';
import Categories from '../../components/Categories';

export const setLoaded = (payload) => {
  return {
    type: 'SET_LOADED',
    payload: payload,
  };
};

// Асинхроний запит для отримання ресторанів і їх запис в Redux
export const fetchRestaurants = (category) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      // Перевірка на те чи показувати всі категорії чи якусь обрану
      category === null
        ? 'http://localhost:3001/restaurants?_sort=raiting&_order=desc'
        : `http://localhost:3001/restaurants?foodType.id=${category}`,
    )
    .then((response) => {
      dispatch(setRestaurants(response.data));
    });
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
