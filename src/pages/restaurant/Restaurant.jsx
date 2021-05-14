import React from 'react';
import Menu from './Menu/Menu';
import Reviews from './Reviews/Reviews';

import { useSelector } from 'react-redux';

const Restaurant = (props) => {
  // Перемикач
  const [activeItem, setActiveItem] = React.useState(null);

  // Дістати ід вибраного ресторану
  const activeRestourantId = useSelector((state) => state.restaurant.activeRestaurant);

  // Отримую потрібний ресторан (об'єкт) по ід
  const restaurant = useSelector((state) => {
    for (let i = 0; i < state.restaurants.items.length; i++) {
      if (state.restaurants.items[i].id === activeRestourantId) {
        return state.restaurants.items[i];
      }
    }
  });

  React.useEffect(() => {
    // Для зміни фону (під кожен ресторан свій фон)
    document.querySelector(
      '.mainbanner',
    ).style.background = `linear-gradient(rgba(0, 0, 0, -0.3), rgba(0, 0, 0, 0.7)), url(${restaurant.imageUrl}) no-repeat 50% 65%`;
  }, []);

  return (
    <div>
      <div className="mainbanner">
        <div className="mainbanner_headers">
          <h1 className="mainbanner__header_one">{restaurant.name}</h1>
          <h2 className="mainbanner__header_two">{restaurant.foodType.value}</h2>
        </div>
      </div>

      <div className="restourant_case">
        <ul className="restourant_case__list">
          <li
            className={`${
              activeItem === null ? 'active_restourant_case__list_item' : ''
            } restourant_case__list_item`}
            onClick={() => setActiveItem(null)}>
            Menu
          </li>

          <li
            className={`${
              activeItem === 1 ? 'active_restourant_case__list_item' : ''
            } restourant_case__list_item`}
            onClick={() => setActiveItem(1)}>
            Reviews
          </li>
        </ul>
      </div>
      {/* відобразити меню або рев'ю*/}
      {activeItem === null ? (
        <Menu menu={restaurant.food} />
      ) : activeItem === 1 ? (
        <Reviews />
      ) : null}
    </div>
  );
};

// Обертаю для того, щоб мати доступ до параметрів в url
//const RestaurantWithRouter = withRouter(Restaurant);

export default Restaurant;
