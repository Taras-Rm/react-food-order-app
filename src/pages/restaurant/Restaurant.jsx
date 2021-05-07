import React from 'react';
import { withRouter } from 'react-router';
import Menu from './Menu/Menu';
import Reviews from './Reviews/Reviews';

const Restaurant = (props) => {
  React.useEffect(() => {
    const restau = props.restaurants.filter((item) => item.id === Number(props.match.params.id));
    setActiveRestaurant(restau[0]);

    // Міняти фон банера залежно від ресторану
    document.querySelector(
      '.mainbanner',
    ).style.background = `linear-gradient(rgba(0, 0, 0, -0.3), rgba(0, 0, 0, 0.7)), url(${activeRestaurant.imageUrl}) no-repeat 50% 65%`;
  });
  // Встановити вибраний ресторан
  const [activeRestaurant, setActiveRestaurant] = React.useState({});
  // Перемикач
  const [activeItem, setActiveItem] = React.useState(null);

  console.log(activeRestaurant);

  return (
    <div>
      <div className="mainbanner">
        <div className="mainbanner_headers">
          <h1 className="mainbanner__header_one">{activeRestaurant.name}</h1>
          <h2 className="mainbanner__header_two">{activeRestaurant.foodType}</h2>
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
        <Menu foodList={activeRestaurant.food} />
      ) : activeItem === 1 ? (
        <Reviews />
      ) : null}
    </div>
  );
};

// Обертаю для того, щоб мати доступ до параметрів в url
const RestaurantWithRouter = withRouter(Restaurant);

export default RestaurantWithRouter;
