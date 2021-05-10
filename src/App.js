import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router';

import Header from './components/Header';
import Home from './pages/Home';
import RestaurantWithRouter from './pages/restaurant/Restaurant';
import { setRestaurants } from './redux/actions/restaurants';
import { setCategory } from './redux/actions/filters';

const App = () => {
  const dispatch = useDispatch();

  // Отримую state із тестової бази даних db.json
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then((response) => {
      dispatch(setRestaurants(response.data.restaurants));
    });
    console.log('pppppp');
  }, []);

  return (
    <div>
      <Header
        valutes={[
          { name: 'usd', id: 0 },
          { name: 'eur', id: 1 },
          { name: 'rub', id: 2 },
          { name: 'uan', id: 3 },
        ]}
      />
      <div>
        <Route path="/" component={Home} exact />
        <Route
          path="/restaurant/:id"
          render={() => <RestaurantWithRouter restaurants={[]} />}
          exact
        />
      </div>
    </div>
  );
};

export default App;
