import React from 'react';

const RestaurantItem = ({ restaurant }) => {
  return (
    <div className="restaurant__item">
      <div className="restaurant__item_imgbox">
        <img alt="food" src={restaurant.imageUrl} />
      </div>
      <div className="restaurant__item_info">
        <h3 className="restaurant__item_title">{restaurant.name}</h3>
        <div className="restaurant__item_category">{restaurant.foodType.value}</div>
        <div className="restaurant__item_raiting">{restaurant.raiting}</div>
      </div>
    </div>
  );
};

export default RestaurantItem;
