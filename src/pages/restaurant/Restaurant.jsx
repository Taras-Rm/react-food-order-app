import React from 'react';
import { withRouter } from 'react-router';
import Menu from './Menu/Menu';
import Reviews from './Reviews/Reviews';

const Restaurant = (props) => {
  // Перемикач
  const [activeItem, setActiveItem] = React.useState(null);

  return (
    <div>
      <div className="mainbanner">
        <div className="mainbanner_headers">
          <h1 className="mainbanner__header_one">{}</h1>
          <h2 className="mainbanner__header_two">{}</h2>
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
      {activeItem === null ? <Menu /> : activeItem === 1 ? <Reviews /> : null}
    </div>
  );
};

// Обертаю для того, щоб мати доступ до параметрів в url
const RestaurantWithRouter = withRouter(Restaurant);

export default RestaurantWithRouter;
