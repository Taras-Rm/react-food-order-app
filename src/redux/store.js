import { combineReducers, createStore } from 'redux';

import filtersReducer from './reducers/filters';
import restaurantsReducer from './reducers/restaurants';
import basketReducer from './reducers/basket';
import restaurantReducer from './reducers/restaurant';

let rootReducer = combineReducers({
  filters: filtersReducer,
  restaurants: restaurantsReducer,
  basket: basketReducer,
  restaurant: restaurantReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

window.store = store;

export default store;
