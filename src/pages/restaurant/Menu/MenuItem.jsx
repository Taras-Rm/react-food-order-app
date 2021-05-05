import React from 'react';

const MenuItem = (props) => {
  const [foodCount, setFoodCount] = React.useState(0);

  const onClickPlusFoodCount = (index) => {
    let newCount = foodCount + index;
    setFoodCount(newCount);
  };

  const onClickMinusFoodCount = (index) => {
    let newCount = foodCount - index;
    setFoodCount(newCount);
  };

  return (
    <div className="food_list_item">
      <div className="food_info">
        <h3 className="food_info_title">Chicken</h3>
        <div className="food_info_category">chicken, rise</div>
        <span className="food_price"> 20.00 </span>
      </div>
      <div className="food_item_functionality">
        <span className="food_item_count"> {foodCount} </span>
        <div className="food_item_btns">
          <div
            className={`${foodCount === 0 ? 'minus' : ''} food_item_btn`}
            onClick={() => onClickMinusFoodCount(1)}>
            -
          </div>
          <div className="food_item_btn" onClick={() => onClickPlusFoodCount(1)}>
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
