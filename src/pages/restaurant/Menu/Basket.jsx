import React from 'react';
import BasketItem from './BasketItem';

import { useSelector } from 'react-redux';

const Basket = (props) => {
  const items = useSelector((state) => state.basket.items);
  const totalPrice = useSelector((state) => state.basket.totalPrice);

  // Прокинути пропси далі в айтем
  // Перевірка чи не нуль, щоб коли 0, то не відображати тієї страви в корзині
  const basketItems = items.map((item, index) => {
    if (item.count !== 0) {
      return <BasketItem key={`${item}_${index}`} item={item} valute={props.valute} />;
    }
  });

  console.log(items);

  return (
    <div className="basket">
      <div className="basket_title">Basket</div>
      {basketItems.length === 0 ? (
        <div className="basket_items empty">Basket is empty !</div>
      ) : (
        <div className="basket_items">{basketItems}</div>
      )}

      <div className="basket_total">
        <div className="basket_total_item">
          <span className="basket_total_item_f">Delivery costs:</span>
          <span className="basket_total_item_s">free</span>
        </div>
        <div className="basket_total_item end">
          <span className="basket_total_item_f">total</span>
          <span className="basket_total_item_s">{`${(totalPrice * props.valute.curs).toFixed(1)} ${
            props.valute.symbol
          }`}</span>
        </div>
      </div>
      <button className="checkout_btn">Checkount</button>
    </div>
  );
};

export default Basket;
