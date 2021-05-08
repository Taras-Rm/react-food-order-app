import React from 'react';
import BasketItem from './BasketItem';

const Basket = () => {
  return (
    <div className="basket">
      <div className="basket_title">Basket</div>
      <div className="basket_items">
        <BasketItem />
        <BasketItem />
        <BasketItem />
      </div>
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
          <span className="basket_total_item_s">15.00</span>
        </div>
      </div>
      <button className="checkout_btn">Checkount</button>
    </div>
  );
};

export default Basket;
