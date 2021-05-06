import React from 'react';

import MainBanner from '../components/MainBanner';
import Categories from '../components/Categories';
import { NavLink } from 'react-router-dom';
import RestaurantItem from './RestaurantItem';

const Home = ({ restaurants }) => {
  // Маплю масив з ресторанами
  const restaurantsList = restaurants.map((restaurant) => (
    <NavLink key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
      <RestaurantItem restaurant={restaurant} />
    </NavLink>
  ));
  return (
    <div>
      <MainBanner />
      <Categories items={['pizza', 'sushi', 'vegan', 'steak', 'seafood']} />

      <div className="wrapper">
        {/* Масив з ресторанами*/}
        <div className="restaurant">{restaurantsList}</div>
      </div>
    </div>
  );
};

export default Home;
