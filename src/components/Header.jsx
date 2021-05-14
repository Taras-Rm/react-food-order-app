import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';

const Header = (props) => {
  const [activeValute, setActiveValute] = React.useState(0);

  const onSelectValute = (index) => {
    setActiveValute(index);
  };

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
            {props.valutes &&
              props.valutes.map((valute, index) => (
                <li
                  key={`${valute.name}_${index}`}
                  onClick={() => onSelectValute(index)}
                  className={`${activeValute === index ? 'active_valute' : ''} header_valute`}>
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
