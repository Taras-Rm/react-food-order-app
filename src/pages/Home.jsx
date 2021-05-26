import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MainBanner from '../components/MainBanner';
import Categories from '../components/Categories';
import { NavLink } from 'react-router-dom';
import RestaurantItem from './RestaurantItem/RestaurantItem';
import LoadingRestaurantItem from './RestaurantItem/LoadingRestaurantItem';
import { fetchRestaurants } from '../redux/actions/restaurants';

import { setCategory } from '../redux/actions/filters';

const Home = (props) => {
  const dispatch = useDispatch();

  // Отримати масив з ресторанами
  const restaurants = useSelector((state) => state.restaurants.items);
  // Інформація про те чи ресторани завантажилися (для preloader)
  const isLoaded = useSelector((state) => state.restaurants.isLoaded);
  // Отримати ід активної категорії (і перекинути в компоненту Categories)
  const activeCategory = useSelector((state) => state.filters.category);

  // Вмбір категорії
  const onSelectItem = (index, value) => {
    dispatch(setCategory(index, value));
  };

  // Отримати ресторани
  React.useEffect(() => {
    dispatch(fetchRestaurants(activeCategory.value));
    //  activeCategory - ставлю, щоб була реакція на зміни
  }, [activeCategory, dispatch]);

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
        activeCategory={activeCategory}
        onSelectItem={onSelectItem}
        items={['pizza', 'sushi', 'fastfood', 'steak', 'seafood']}
      />

      <div className="wrapper">
        {/* Масив з ресторанами (перевірка чи ресторани завантажилися)*/}
        <div className="restaurant">
          {isLoaded
            ? restaurantsList
            : Array(3)
                .fill(0)
                .map((_, index) => <LoadingRestaurantItem key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
