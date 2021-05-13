import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';
import { fetchRestaurants } from '../redux/actions/restaurants';

const Categories = ({ items, activeCategory }) => {
  const dispatch = useDispatch();

  const onSelectItem = (index) => {
    dispatch(setCategory(index));
    //dispatch(fetchRestaurants());
  };

  return (
    <div className="recipesmenu">
      <span>Cuisines: </span>
      <ul className="recipesmenu__list">
        <li
          onClick={() => onSelectItem(null)}
          className={`${activeCategory === null ? 'active_list_item' : ''} list_item`}>
          all
        </li>

        {
          // перевірка чи прийшли категорії
          items &&
            items.map((item, index) => (
              <li
                onClick={() => onSelectItem(index)}
                key={`${item}_${index}`}
                className={`${activeCategory === index ? 'active_list_item' : ''} list_item`}>
                {item}
              </li>
            ))
        }
      </ul>
    </div>
  );
};

export default Categories;
