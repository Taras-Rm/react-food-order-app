import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { setValute } from '../redux/actions/filters';

import { useDispatch, useSelector } from 'react-redux';

const Header = (props) => {
  const dispatch = useDispatch();
  const allValutesInfo = useSelector((state) => {
    return {
      activeValute: state.filters.activeValute,
      valutes: state.filters.valutes,
    };
  });
  //const [activeValute, setActiveValute] = React.useState(0);

  const onSelectValute = (id, name, curs) => {
    dispatch(setValute(id, name, curs));
  };

  console.log(allValutesInfo);
  // Слідкую за URL
  const path = props.location.pathname;

  return (
    <div className="header">
      <div className="wrapper">
        <NavLink
          to="/"
          className={`${
            path.indexOf('restaurant') !== -1 ? '' : 'header_back_btn_visab'
          } header_back_btn_link`}
          href="#h">
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
                  onClick={() => onSelectValute(valute.id, valute.name, valute.curs)}
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
