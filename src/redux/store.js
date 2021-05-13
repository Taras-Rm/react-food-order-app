import { combineReducers, createStore, applyMiddleware, compose } from 'redux';

import filtersReducer from './reducers/filters';
import restaurantsReducer from './reducers/restaurants';
import basketReducer from './reducers/basket';
import restaurantReducer from './reducers/restaurant';

import thunk from 'redux-thunk';

let rootReducer = combineReducers({
  filters: filtersReducer,
  restaurants: restaurantsReducer,
  basket: basketReducer,
  restaurant: restaurantReducer,
});

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnchancer(applyMiddleware(thunk)));

window.store = store;

export default store;
