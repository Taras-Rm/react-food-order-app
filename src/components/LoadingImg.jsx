import React from 'react';
import loadingSVG from './../resources/images/loading.svg';

const LoadingImg = () => {
  return (
    <div className="loading_box">
      <img src={loadingSVG} alt="ff" />
    </div>
  );
};

export default LoadingImg;
