import { combineReducers, createStore } from 'redux';

import filtersReducer from './reducers/filters';
import restaurantsReducer from './reducers/restaurants';
import basketReducer from './reducers/basket';
import restaurantReducer from './reducers/restaurant';

let rootReducer = combineReducers({
  filtersReducer,
  restaurantsReducer,
  basketReducer,
  restaurantReducer,
});

const store = createStore(rootReducer);

export default store;
