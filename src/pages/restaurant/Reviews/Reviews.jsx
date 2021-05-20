import { useFormik } from 'formik';
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

  const validate = (values) => {
    const errors = {};

    if (!values.comment) {
      errors.comment = 'Required';
    } else if (values.comment.length > 20) {
      errors.comment = 'Must be less 20 characters';
    }

    if (!values.rate) {
      errors.rate = 'Rate is required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      comment: '',
      rate: null,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={`${activeItem === 1 ? '' : 'hidden'} reviews`}>
      <div className="wrapper">
        <div className="reviewsList">{reviewsList}</div>
        <form className="review_form" onSubmit={formik.handleSubmit}>
          <h2 className="review_form_title">Leav your review</h2>
          <textarea
            id="comment"
            name="comment"
            type="text"
            className={`${formik.errors.comment ? 'validate' : ''} review_form_textarea`}
            onChange={formik.handleChange}
            value={formik.values.comment}></textarea>
          <div className="review_form_raiting">
            <span>Raiting</span>
            <RatingSet
              initialRating={formik.values.rate}
              onChangeRate={formik.handleChange}
              outRating={sattedRating}
            />
            {`${formik.errors.rate ? 'Rate is required' : ''}`}
          </div>
          <div>
            <button type="submit" className="review_form_btn" type="submit">
              Publish review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
