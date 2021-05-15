import React from 'react';
import Basket from './Basket';
import MenuItem from './MenuItem';

const Menu = (props) => {
  // Відобразити список страв ресторану в меню
  const foodList = props.menu.map((item, index) => (
    <MenuItem restaurantId={props.restaurantId} key={`${index}_${item.name}`} item={item} />
  ));

  return (
    <div className={`${props.activeItem === null ? '' : 'hidden'} order`}>
      <div className="wrapper">
        <div className="foodlist">
          {/* Відобразити список страв в ресторані (меню) */}
          {foodList}
        </div>
        <Basket />
      </div>
    </div>
  );
};

export default Menu;
