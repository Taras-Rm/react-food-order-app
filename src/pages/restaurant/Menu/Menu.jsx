import React from 'react';
import Basket from './Basket';
import MenuItem from './MenuItem';

function Menu() {
  return (
    <div className="order">
      <div className="wrapper">
        <div className="foodlist">
          <MenuItem />
          <MenuItem />
        </div>
        <Basket />
      </div>
    </div>
  );
}

export default Menu;
