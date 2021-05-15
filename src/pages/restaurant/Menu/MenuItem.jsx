import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteItem } from '../../../redux/actions/basket';

const MenuItem = (props) => {
  const dispatch = useDispatch();

  const [foodCount, setFoodCount] = React.useState(0);

  const onClickPlusFoodCount = (index, name, price) => {
    let newCount = foodCount + index;
    setFoodCount(newCount);
    dispatch(addItem(name, newCount, price, props.restaurantId));
  };

  const onClickMinusFoodCount = (index, name) => {
    let newCount = foodCount - index;
    setFoodCount(newCount);
    dispatch(deleteItem(name, newCount, props.restaurantId));
  };

  return (
    <div className="food_list_item">
      <div className="food_info">
        <h3 className="food_info_title">{props.item.name}</h3>
        <div className="food_info_category">{props.item.ingradients.join(', ')}</div>
        <span className="food_price">{props.item.price}</span>
      </div>
      <div className="food_item_functionality">
        <span className="food_item_count"> {foodCount} </span>
        <div className="food_item_btns">
          <div
            className={`${foodCount === 0 ? 'minus' : ''} food_item_btn`}
            onClick={() => onClickMinusFoodCount(1, props.item.name)}>
            -
          </div>
          <div
            className="food_item_btn"
            onClick={() => onClickPlusFoodCount(1, props.item.name, props.item.price)}>
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
