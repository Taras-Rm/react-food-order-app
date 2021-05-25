import React from 'react';
import { RatingRead } from '../../components/Rating';

const RestaurantItem = ({ restaurant }) => {
  return (
    <div className="restaurant__item">
      <div className="restaurant__item_imgbox">
        <img alt="food" src={restaurant.imageUrl} />
      </div>
      <div className="restaurant__item_info">
        <h3 className="restaurant__item_title">{restaurant.name}</h3>
        <div className="restaurant__item_category">{restaurant.foodType.value}</div>
        <RatingRead initialRating={restaurant.rating} />
      </div>
    </div>
  );
};

export default RestaurantItem;
