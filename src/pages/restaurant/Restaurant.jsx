import React from 'react';
import Menu from './Menu/Menu';
import Reviews from './Reviews/Reviews';

import { useSelector, useDispatch } from 'react-redux';
import { fetchRestaurant } from '../../redux/actions/restaurant';
import { withRouter } from 'react-router';
import LoadingImg from '../../components/LoadingImg';

const Restaurant = (props) => {
  const dispatch = useDispatch();
  // Перемикач
  const [activeItem, setActiveItem] = React.useState(null);

  const activeRestourant = useSelector((state) => state.restaurant.activeRestaurant);
  const isLoaded = useSelector((state) => state.restaurant.isLoaded);

  React.useEffect(() => {
    // Отримую потрібний ресторан (об'єкт) по ID, яке беру з URL
    dispatch(fetchRestaurant(props.match.params.id));
  }, [props]);

  // Перевірка на те чи завантажено ресторан
  return isLoaded ? (
    <div>
      <div className="mainbanner" rest_fon={activeRestourant.imageUrl}>
        <div className="mainbanner_headers">
          <h1 className="mainbanner__header_one">{activeRestourant.name}</h1>
          <h2 className="mainbanner__header_two">{activeRestourant.foodType.value}</h2>
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

      <Menu
        restaurantId={activeRestourant.id}
        activeItem={activeItem}
        menu={activeRestourant.food}
      />
      <Reviews activeItem={activeItem} reviews={activeRestourant.reviews} />
    </div>
  ) : (
    <LoadingImg />
  );
};

// Обертаю для того, щоб мати доступ до параметрів в url
//const RestaurantWithRouter = withRouter(Restaurant);

export default withRouter(Restaurant);
