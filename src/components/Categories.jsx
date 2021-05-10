import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';

const Categories = ({ items, onClickItem }) => {
  const [activeItem, setActiveItem] = React.useState(null);

  const dispatch = useDispatch();

  const onSelectItem = (index) => {
    setActiveItem(index);
    //onClickItem(index);
    dispatch(setCategory(index));
  };

  return (
    <div className="recipesmenu">
      <span>Cuisines: </span>
      <ul className="recipesmenu__list">
        <li
          onClick={() => onSelectItem(null)}
          className={`${activeItem === null ? 'active_list_item' : ''} list_item`}>
          all
        </li>

        {
          // перевірка чи прийшли категорії
          items &&
            items.map((item, index) => (
              <li
                onClick={() => onSelectItem(index)}
                key={`${item}_${index}`}
                className={`${activeItem === index ? 'active_list_item' : ''} list_item`}>
                {item}
              </li>
            ))
        }
      </ul>
    </div>
  );
};

export default Categories;
