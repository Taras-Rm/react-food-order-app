import React from 'react';
import { RatingSet } from '../../../components/Rating';
import ReviewItem from './ReviewItem';

const Reviews = ({ reviews, activeItem }) => {
  const reviewsList = reviews.map((item, index) => (
    <ReviewItem item={item} key={`${item.reviewerName}_${index}`} />
  ));

  const sattedRating = (rate) => {
    console.log(rate);
  };

  return (
    <div className={`${activeItem === 1 ? '' : 'hidden'} reviews`}>
      <div className="wrapper">
        <div className="reviewsList">{reviewsList}</div>
        <div className="review_form">
          <h2 className="review_form_title">Leav your review</h2>
          <textarea className="review_form_textarea"></textarea>
          <div className="review_form_raiting">
            <span>Raiting</span>
            <RatingSet initialRating={null} outRating={sattedRating} />
          </div>
          <div>
            <button className="review_form_btn" type="submit">
              Publish review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
