import { combineReducers, createStore } from 'redux';

import filtersReducer from './reducers/filters';
import restaurantsReducer from './reducers/restaurants';
import basketReducer from './reducers/basket';

let rootReducer = combineReducers({ filtersReducer, restaurantsReducer, basketReducer });

const store = createStore(rootReducer);

export default store;
