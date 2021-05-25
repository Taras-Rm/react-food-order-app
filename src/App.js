import React from 'react';
import { Route } from 'react-router';

import Header from './components/Header';
import Home from './pages/Home';
import Restaurant from './pages/restaurant/Restaurant';

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Route path="/" component={Home} exact />
        <Route path="/restaurant/:id" component={Restaurant} exact />
      </div>
    </div>
  );
};

export default App;
