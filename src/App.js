import axios from 'axios';
import React from 'react';
import { Route } from 'react-router';

import Header from './components/Header';
import Home from './pages/Home';
import RestaurantWithRouter from './pages/restaurant/Restaurant';

const App = () => {
  // Для всього state
  const [restaurants, setRestaurants] = React.useState([]);

  // Отримую state із тестової бази даних db.json
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then((response) => {
      setRestaurants(response.data.restaurants);
    });
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
        <Route path="/" render={() => <Home restaurants={restaurants} />} exact />
        <Route
          path="/restaurant/:id"
          render={() => <RestaurantWithRouter restaurants={restaurants} />}
          exact
        />
      </div>
    </div>
  );
};

export default App;
