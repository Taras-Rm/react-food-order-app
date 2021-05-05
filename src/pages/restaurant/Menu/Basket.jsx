import React from 'react';

const Basket = () => {
  return (
    <div className="basket">
      <div className="basket_title">Basket</div>
      <div className="basket_items">
        <div className="basket_item">
          <span className="basket_item_name">Chicken lvflg kkgf</span>
          <div className="basket_item_func">
            <div className="basket_btn">-</div>
            <span className="basket_count"> 1 </span>
            <div className="basket_btn">+</div>
          </div>
          <span className="basket_item_price">20.00</span>
        </div>
        <div className="basket_item">
          <span className="basket_item_name">Chicken</span>
          <div className="basket_item_func">
            <div className="basket_btn">-</div>
            <span className="basket_count"> 1 </span>
            <div className="basket_btn">+</div>
          </div>
          <span className="basket_item_price">20.00</span>
        </div>
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
