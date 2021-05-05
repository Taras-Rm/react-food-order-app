import React from 'react';

const Categories = ({ items }) => {
  const [activeItem, setActiveItem] = React.useState(null);

  const onSelectItem = (index) => {
    setActiveItem(index);
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
