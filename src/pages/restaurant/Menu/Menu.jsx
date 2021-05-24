import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from '../../../redux/actions/basket';
import Basket from './Basket';
import MenuItem from './MenuItem';

const Menu = (props) => {
  // Відобразити список страв ресторану в меню
  const dispatch = useDispatch();
  // Активна валюта
  const valute = useSelector((state) => state.filters.activeValute);

  const basketItems = useSelector((state) => state.basket.items);

  // Передається в кожну страву з меню (для того щоб не створювати багато dispatch)
  const onClickAddItem = (obj) => {
    dispatch(addItem(obj));
  };

  const onClickDeleteItem = (obj) => {
    dispatch(deleteItem(obj));
  };

  const foodList = props.menu.map((item, index) => (
    <MenuItem
      valute={valute}
      onClickDeleteItem={onClickDeleteItem}
      onClickAddItem={onClickAddItem}
      restaurantId={props.restaurantId}
      key={`${index}_${item.name}`}
      item={item}
      // Передаю кількість доданої їжі, якщо вона додана
      basketItem={
        basketItems.find((basketItem) => basketItem.name === item.name)
          ? basketItems.find((basketItem) => basketItem.name === item.name)
          : ''
      }
    />
  ));

  return (
    <div className={`${props.activeItem === null ? '' : 'hidden'} order`}>
      <div className="wrapper">
        <div className="foodlist">
          {/* Відобразити список страв в ресторані (меню) */}
          {foodList}
        </div>
        <Basket valute={valute} />
      </div>
    </div>
  );
};

export default Menu;
