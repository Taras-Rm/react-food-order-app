import React from 'react';

const BasketItem = (props) => {
  const onMinusClick = (index, name) => {
    let oldCount = props.item.count ? props.item.count : 0;
    let newCount = oldCount - index;
    const obj = {
      name,
      newCount,
      price: props.item.price / props.item.count,
      restaurantId: props.item.restaurantId,
    };
    props.onClickDeleteItem(obj);
  };

  const onPlusClick = (index, name) => {
    let oldCount = props.item.count ? props.item.count : 0;
    let newCount = oldCount + index;
    const obj = {
      name,
      newCount,
      price: props.item.price / props.item.count,
      restaurantId: props.item.restaurantId,
    };
    props.onClickAddItem(obj);
  };

  console.log(props.item);
  return (
    <div className="basket_item">
      <span className="basket_item_name">{props.item.name}</span>
      <div className="basket_item_func">
        <div
          className={`${!props.item.count ? 'minus' : ''} basket_btn`}
          onClick={() => onMinusClick(1, props.item.name)}>
          -
        </div>
        <span className="basket_count">{props.item.count}</span>
        <div className="basket_btn" onClick={() => onPlusClick(1, props.item.name)}>
          +
        </div>
      </div>
      <span className="basket_item_price">{`${(props.item.price * props.valute.curs).toFixed(1)} ${
        props.valute.symbol
      }`}</span>
    </div>
  );
};

export default BasketItem;
