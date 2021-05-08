import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ valutes }) => {
  const [activeValute, setActiveValute] = React.useState(0);

  const onSelectValute = (index) => {
    setActiveValute(index);
  };

  return (
    <div className="header">
      <div className="wrapper">
        <div className="header_back_btn">
          <span>Restaurants</span>
        </div>
        <div className="header_logo">
          <NavLink to="/" className="header_logo__text" href="#h">
            any food
          </NavLink>
        </div>
        <div className="header_valutes">
          <ul className="header_valutes__list">
            {valutes &&
              valutes.map((valute, index) => (
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

export default Header;
