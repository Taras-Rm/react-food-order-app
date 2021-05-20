import React from 'react';
import { RatingRead, RatingSet } from '../../../components/Rating';

const ReviewItem = ({ item }) => {
  return (
    <div className="review_item">
      <div className="review_item_info">
        <h3 className="review_item_name">{item.reviewerName}</h3>
        <div className="review_item_text">{item.comment}</div>
      </div>
      {/* <Rating  setRatingType={false} /> */}
      <RatingRead initialRating={item.mark} />
    </div>
  );
};

export default ReviewItem;
