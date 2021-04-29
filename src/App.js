import React from 'react';
import { Route } from 'react-router';

import Header from './components/Header';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';

const App = () => {
  return (
    <div>
      <Header valutes={['usd', 'eur', 'rub', 'uan']} />
      <div>
        <Route path="/" component={Home} exact />
        <Route path="/restaurant" component={Restaurant} />
      </div>
    </div>
  );
};

export default App;
