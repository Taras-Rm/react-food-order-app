import React from 'react';

const Categories = ({ items, activeCategory, onSelectItem }) => {
  return (
    <div className="recipesmenu">
      <span>Cuisines: </span>
      <ul className="recipesmenu__list">
        <li
          onClick={() => onSelectItem(null, 'all')}
          className={`${activeCategory.value === null ? 'active_list_item' : ''} list_item`}>
          all
        </li>

        {
          // перевірка чи прийшли категорії
          items &&
            items.map((item, index) => (
              <li
                onClick={() => onSelectItem(index, item)}
                key={`${item}_${index}`}
                className={`${activeCategory.value === index ? 'active_list_item' : ''} list_item`}>
                {item}
              </li>
            ))
        }
      </ul>
    </div>
  );
};

export default Categories;
