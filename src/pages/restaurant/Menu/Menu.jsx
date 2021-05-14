import React from 'react';
import Basket from './Basket';
import MenuItem from './MenuItem';

const Menu = (props) => {
  const foodList = props.menu.map((item, index) => (
    <MenuItem key={`${index}_${item.name}`} item={item} />
  ));

  return (
    <div className={`${props.activeItem === null ? '' : 'hidden'} order`}>
      <div className="wrapper">
        <div className="foodlist">
          {/* Відобразити всю їжу в ресторані */}
          {foodList}
        </div>
        <Basket />
      </div>
    </div>
  );
};

export default Menu;
