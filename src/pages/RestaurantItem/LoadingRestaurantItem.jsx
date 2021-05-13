import React from 'react';
// Використав react-sceleton як preloader
import ContentLoader from 'react-content-loader';

const LoadingRestaurantItem = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={1000}
      height={200}
      viewBox="0 0 1000 200"
      backgroundColor="#f0f0f0"
      foregroundColor="#d6d6d6"
      {...props}>
      <rect x="0" y="0" rx="5" ry="5" width="150" height="150" />
      <rect x="200" y="8" rx="5" ry="5" width="137" height="28" />
      <rect x="200" y="57" rx="5" ry="5" width="138" height="21" />
      <rect x="200" y="108" rx="5" ry="5" width="20" height="20" />
    </ContentLoader>
  );
};

export default LoadingRestaurantItem;
