import React from 'react';

const Rating = ({ ratingNum }) => {
  function initRatings() {
    let ratings = document.querySelectorAll('.rating');

    let ratingActive, ratingValue;

    for (let i = 0; i < ratings.length; i++) {
      const rating = ratings[i];
      initRating(rating);
    }

    function initRating(rating) {
      initRatingVars(rating);

      setRatingActiveWidth();

      // if (rating.classList.contains('rating_set')) {
      //   setRating(rating);
      // }
    }

    function initRatingVars(rating) {
      ratingActive = rating.querySelector('.rating__active');
      ratingValue = rating.querySelector('.rating__value');
    }

    function setRatingActiveWidth(index = ratingValue.innerHTML) {
      const ratingActiveWidth = index / 0.05;
      ratingActive.style.width = `${ratingActiveWidth}%`;
    }
  }

  React.useEffect(() => {
    initRatings();
  }, []);

  return (
    <div className="rating">
      <div className="rating__body">
        <div className="rating__active"></div>
        <div className="rating__items">
          <input type="radio" className="rating__item" name="reting__item" />
          <input type="radio" className="rating__item" name="reting__item" />
          <input type="radio" className="rating__item" name="reting__item" />
          <input type="radio" className="rating__item" name="reting__item" />
          <input type="radio" className="rating__item" name="reting__item" />
        </div>
      </div>
      <div className="rating__value">{ratingNum}</div>
    </div>
  );
};

export default Rating;
