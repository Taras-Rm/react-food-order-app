import React from 'react';

const BasketItem = (props) => {
  const [count, setCount] = React.useState(0);

  const onMinusClick = (index) => {
    let newCunt = count - index;
    setCount(newCunt);
  };

  const onPlusClick = (index) => {
    let newCunt = count + index;
    setCount(newCunt);
  };
  return (
    <div className="basket_item">
      <span className="basket_item_name">Chicken</span>
      <div className="basket_item_func">
        <div className={`${count === 0 ? 'minus' : ''} basket_btn`} onClick={() => onMinusClick(1)}>
          -
        </div>
        <span className="basket_count">{count}</span>
        <div className="basket_btn" onClick={() => onPlusClick(1)}>
          +
        </div>
      </div>
      <span className="basket_item_price">20.00</span>
    </div>
  );
};

export default BasketItem;
