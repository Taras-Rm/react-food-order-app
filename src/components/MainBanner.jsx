import React from 'react';

import { useSelector } from 'react-redux';

const MainBanner = () => {
  const countOfRestourances = useSelector((state) => state.restaurants.items.length);
  return (
    <div className="mainbanner">
      <div className="mainbanner_headers">
        <h1 className="mainbanner__header_one">Oredr Food</h1>
        <h2 className="mainbanner__header_two">From {countOfRestourances} restourances</h2>
      </div>
    </div>
  );
};

export default MainBanner;
