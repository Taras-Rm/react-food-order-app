import axios from 'axios';

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
        ? '/restaurants?_sort=raiting&_order=desc'
        : `/restaurants?foodType.id=${category}`,
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
