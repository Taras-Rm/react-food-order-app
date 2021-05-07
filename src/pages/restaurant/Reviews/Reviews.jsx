import React from 'react';

const Reviews = (props) => {
  return (
    <div className="reviews">
      <div className="wrapper">
        <div className="reviewsList">
          <div className="review_item">
            <div className="review_item_info">
              <h3 className="review_item_name">Antony</h3>
              <div className="review_item_text">Not bad</div>
            </div>
            <div className="review_item_raiting">5</div>
          </div>
          <div className="review_item">
            <div className="review_item_info">
              <h3 className="review_item_name">Sam</h3>
              <div className="review_item_text">Not burgers</div>
            </div>
            <div className="review_item_raiting">3</div>
          </div>
        </div>
        <div className="review_form">
          <h2 className="review_form_title">Leav your review</h2>
          <textarea className="review_form_textarea"></textarea>
          <div className="review_form_raiting">
            <span>Raiting</span>
            <div className="set_raiting">5</div>
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
