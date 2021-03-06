import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { setValute } from '../redux/actions/filters';

import { useDispatch, useSelector } from 'react-redux';
import { clearBasket } from '../redux/actions/basket';

const Header = (props) => {
  const dispatch = useDispatch();
  const allValutesInfo = useSelector((state) => {
    return {
      activeValute: state.filters.activeValute,
      valutes: state.filters.valutes,
    };
  });

  const onSelectValute = (id, name, curs, symbol) => {
    dispatch(setValute(id, name, curs, symbol));
  };

  const onRestaurantsBtn = () => {
    dispatch(clearBasket());
  };

  // Слідкую за URL
  const path = props.location.pathname;

  return (
    <div className="header">
      <div className="wrapper">
        <NavLink
          to="/"
          onClick={() => onRestaurantsBtn()}
          className={`${
            path.indexOf('restaurant') !== -1 ? '' : 'header_back_btn_visab'
          } header_back_btn_link`}>
          <div className="header_back_btn">
            <span>Restaurants</span>
          </div>
        </NavLink>

        <div className="header_logo header_logo__text">any food</div>
        <div className="header_valutes">
          <ul className="header_valutes__list">
            {allValutesInfo.activeValute &&
              allValutesInfo.valutes.map((valute, index) => (
                <li
                  key={`${valute.name}_${valute.id}`}
                  onClick={() => onSelectValute(valute.id, valute.name, valute.curs, valute.symbol)}
                  className={`${
                    allValutesInfo.activeValute.id === valute.id ? 'active_valute' : ''
                  } header_valute`}>
                  {valute.name}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// Обертаю в withRouter, щоб знати коли відобразити кнопку "назад"
export default withRouter(Header);
