import React from 'react';
import Categories from './components/Categories';

import Header from './components/Header';
import MainBanner from './components/MainBanner';

const App = () => {
  return (
    <div>
      <Header valutes={['usd', 'eur', 'rub', 'uan']} />
      <MainBanner />
      <Categories items={['pizza', 'sushi', 'vegan', 'steak', 'seafood']} />

      <div className="wrapper">
        <div className="foodbox">
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
        </div>
      </div>
    </div>
  );
};

export default App;
