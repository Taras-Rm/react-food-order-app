import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router';

import Header from './components/Header';
import Home from './pages/Home';
import Restaurant from './pages/restaurant/Restaurant';
import { setRestaurants } from './redux/actions/restaurants';

const App = () => {
  const dispatch = useDispatch();

  // Отримую state із фейкового сервера
  React.useEffect(() => {
    axios.get('http://localhost:3001/restaurants').then((response) => {
      dispatch(setRestaurants(response.data));
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
        <Route path="/" component={Home} exact />
        <Route path="/restaurant/:id" component={Restaurant} exact />
      </div>
    </div>
  );
};

export default App;
