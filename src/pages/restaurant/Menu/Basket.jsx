import React from 'react';
import BasketItem from './BasketItem';

import { useSelector } from 'react-redux';

const Basket = () => {
  const items = useSelector((state) => state.basket.items);
  const totalPrice = useSelector((state) => state.basket.totalPrice);

  // Прокинути пропси далі в айтем
  // Перевірка чи не нуль, щоб коли 0, то не відображати тієї страви в корзині
  const basketItems = items.map((item, index) => {
    if (item.count !== 0) {
      return <BasketItem key={`${item}_${index}`} item={item} />;
    }
  });

  return (
    <div className="basket">
      <div className="basket_title">Basket</div>
      <div className="basket_items">{basketItems}</div>
      <div className="basket_total">
        <div className="basket_total_item">
          <span className="basket_total_item_f">Sub-total</span>
          <span className="basket_total_item_s">15.00</span>
        </div>
        <div className="basket_total_item">
          <span className="basket_total_item_f">Delivery costs:</span>
          <span className="basket_total_item_s">free</span>
        </div>
        <div className="basket_total_item end">
          <span className="basket_total_item_f">total</span>
          <span className="basket_total_item_s">{totalPrice}</span>
        </div>
      </div>
      <button className="checkout_btn">Checkount</button>
    </div>
  );
};

export default Basket;
