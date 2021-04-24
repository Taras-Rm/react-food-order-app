import React from 'react';

function App() {
  return (
    <div>
      <header>
        <div className="wrapper">
            <div className="header_logo">
                <a className="header_logo__text" href="#h">
                    any food
                </a>
            </div>
            <div className="header_valutes">
                <ul className="header_valutes__list">
                    <li className="header_valute">
                        usd
                    </li>
                    <li className="header_valute">
                        eur
                    </li>
                    <li className="header_valute">
                        rub
                    </li>
                    <li className="header_valute">
                        uan
                    </li>
                </ul>
            </div>
        </div>
    </header>

    <div className="mainbanner">
        <div className="mainbanner_headers">
            <h1 className="mainbanner__header_one">Oredr Food</h1>
            <h2 className="mainbanner__header_two">From 175 restourance</h2>
        </div>
    </div>

    <div className="recipesmenu">
        <span>Cuisines: </span>
        <ul className="recipesmenu__list">
            <li className="recipesmenu__list_item">
               <a href="#r">all</a>
            </li>
            <li className="recipesmenu__list_item">
                <a href="#r">pizza</a>
            </li>
            <li className="recipesmenu__list_item">
                <a href="#r">sushi</a>
            </li>
            <li className="recipesmenu__list_item">
                <a href="#r">vegan</a>
            </li>
            <li className="recipesmenu__list_item">
                <a href="#r">steak</a>
            </li>
            <li className="recipesmenu__list_item">
                <a href="#r">seafood</a>
            </li>
        </ul>
    </div>

    <div>
        <div className="wrapper">
            <div className="foodbox">
                <div className="foodbox__item">
                    <div className="foodbox__item_imgbox">
                        <img alt="food" src="https://bufet.net/uploads/posts/2017-05/1495325512_steyk-iz-govyadiny.jpg"/>
                    </div>
                    <div className="foodbox__item_info">
                        <h3 className="foodbox__item_title">Dishoom</h3>
                        <div className="foodbox__item_category">
                            pizza, sushi, vegan
                        </div>
                        <div className="foodbox__item_raiting">
                            Raiting
                        </div>
                    </div>
                </div>
    
                <div className="foodbox__item">
                    <div className="foodbox__item_imgbox">
                        <img alt="food" src="https://bufet.net/uploads/posts/2017-05/1495325512_steyk-iz-govyadiny.jpg"/>
                    </div>
                    <div className="foodbox__item_info">
                        <h3 className="foodbox__item_title">Dishoom</h3>
                        <div className="foodbox__item_category">
                            pizza, sushi, vegan
                        </div>
                        <div className="foodbox__item_raiting">
                            Raiting
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </div>
    </div>
    );
}

export default App;
