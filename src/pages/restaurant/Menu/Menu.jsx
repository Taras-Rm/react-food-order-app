import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../../../redux/actions/basket';
import Basket from './Basket';
import MenuItem from './MenuItem';

const Menu = (props) => {
  // Відобразити список страв ресторану в меню
  const dispatch = useDispatch();

  // Передається в кожну страву з меню (для того щоб не створювати багато dispatch)
  const onClickAddItem = (obj) => {
    dispatch(addItem(obj));
  };

  const onClickDeleteItem = (obj) => {
    dispatch(deleteItem(obj));
  };

  const foodList = props.menu.map((item, index) => (
    <MenuItem
      onClickDeleteItem={onClickDeleteItem}
      onClickAddItem={onClickAddItem}
      restaurantId={props.restaurantId}
      key={`${index}_${item.name}`}
      item={item}
    />
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
