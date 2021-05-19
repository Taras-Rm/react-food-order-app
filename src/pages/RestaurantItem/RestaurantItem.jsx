import React from 'react';
import Rating from '../../components/Rating';

const RestaurantItem = ({ restaurant }) => {
  console.log(restaurant);
  return (
    <div className="restaurant__item">
      <div className="restaurant__item_imgbox">
        <img alt="food" src={restaurant.imageUrl} />
      </div>
      <div className="restaurant__item_info">
        <h3 className="restaurant__item_title">{restaurant.name}</h3>
        <div className="restaurant__item_category">{restaurant.foodType.value}</div>
        {/* <div className="restaurant__item_raiting">{restaurant.raiting}</div> */}
        <Rating ratingNum={restaurant.rating} />
      </div>
    </div>
  );
};

export default RestaurantItem;
