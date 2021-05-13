import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router';

import Header from './components/Header';
import Home from './pages/Home';
import Restaurant from './pages/restaurant/Restaurant';
import { fetchRestaurants } from './redux/actions/restaurants';

const App = () => {
  // Доступні валюти
  const valutes = [
    { name: 'usd', id: 0 },
    { name: 'eur', id: 1 },
    { name: 'rub', id: 2 },
    { name: 'uan', id: 3 },
  ];

  return (
    <div>
      <Header valutes={valutes} />
      <div>
        <Route path="/" component={Home} exact />
        <Route path="/restaurant/:id" component={Restaurant} exact />
      </div>
    </div>
  );
};

export default App;
