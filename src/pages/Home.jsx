import React from 'react';
import { useSelector } from 'react-redux';

import MainBanner from '../components/MainBanner';
import Categories from '../components/Categories';
import { NavLink } from 'react-router-dom';
import RestaurantItem from './RestaurantItem';

const Home = (props) => {
  // Отримати масив з ресторанами
  const restaurants = useSelector((state) => state.restaurants.items);

  // Маплю масив з ресторанами
  const restaurantsList = restaurants.map((restaurant) => (
    <NavLink key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
      <RestaurantItem restaurant={restaurant} />
    </NavLink>
  ));

  return (
    <div>
      <MainBanner />
      <Categories
        onClickItem={(i) => console.log(i)}
        items={['pizza', 'sushi', 'vegan', 'steak', 'seafood']}
      />

      <div className="wrapper">
        {/* Масив з ресторанами*/}
        <div className="restaurant">{restaurantsList}</div>
      </div>
    </div>
  );
};

export default Home;
