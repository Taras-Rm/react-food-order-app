import React from 'react';
import { FaStar } from 'react-icons/fa';

const RatingSet = ({ initialRating, outRating, onChangeRate }) => {
  const [ratingValue, setValue] = React.useState(initialRating);
  const [ratingHover, setHover] = React.useState(null);

  const setNewRating = (value) => {
    setValue(value);
  };

  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => {
        const value = index + 1;
        return (
          <label key={index}>
            <input
              className="star_radio"
              type="radio"
              name="rate"
              value={value}
              onClick={() => setNewRating(value)}
              onChange={onChangeRate}></input>
            <FaStar
              onMouseEnter={() => setHover(value)}
              onMouseLeave={() => setHover(null)}
              size={20}
              color={`${value <= (ratingHover || ratingValue) ? '#ffc107' : 'e4e5e9'}`}
              className="star"
            />
          </label>
        );
      })}
      <span className="rating_value">{ratingHover || ratingValue}</span>
    </div>
  );
};

const RatingRead = ({ initialRating }) => {
  return (
    <div className="rating">
      {[...Array(5)].map((_, index) => {
        const value = index + 1;
        return (
          <label key={index}>
            <input className="star_radio" type="radio" name="rating" value={value}></input>
            <FaStar
              color={`${value <= initialRating ? '#ffc107' : 'e4e5e9'}`}
              size={20}
              className="star"
            />
          </label>
        );
      })}
      <span className="rating_value">{initialRating}</span>
    </div>
  );
};

export { RatingRead, RatingSet };
