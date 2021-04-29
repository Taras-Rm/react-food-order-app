import React from 'react';

import MainBanner from '../components/MainBanner';
import Categories from '../components/Categories';
import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <div>
      <MainBanner />
      <Categories items={['pizza', 'sushi', 'vegan', 'steak', 'seafood']} />

      <div className="wrapper">
        <div className="foodbox">
          <NavLink to="/restaurant">
            <div className="foodbox__item">
              <div className="foodbox__item_imgbox">
                <img
                  alt="food"
                  src="https://bufet.net/uploads/posts/2017-05/1495325512_steyk-iz-govyadiny.jpg"
                />
              </div>
              <div className="foodbox__item_info">
                <h3 className="foodbox__item_title">Dishoom</h3>
                <div className="foodbox__item_category">pizza, sushi, vegan</div>
                <div className="foodbox__item_raiting">Raiting</div>
              </div>
            </div>
          </NavLink>
          <NavLink to="/restaurant">
            <div className="foodbox__item">
              <div className="foodbox__item_imgbox">
                <img
                  alt="food"
                  src="https://bufet.net/uploads/posts/2017-05/1495325512_steyk-iz-govyadiny.jpg"
                />
              </div>
              <div className="foodbox__item_info">
                <h3 className="foodbox__item_title">Dishoom</h3>
                <div className="foodbox__item_category">pizza, sushi, vegan</div>
                <div className="foodbox__item_raiting">Raiting</div>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Home;
