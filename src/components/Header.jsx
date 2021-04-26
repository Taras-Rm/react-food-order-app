import React from 'react';

const Header = ({ valutes }) => {
  const [activeValute, setActiveValute] = React.useState(0);

  const onSelectValute = (index) => {
    setActiveValute(index);
  };

  console.log(activeValute);

  return (
    <div className="header">
      <div className="wrapper">
        <div className="header_logo">
          <a className="header_logo__text" href="#h">
            any food
          </a>
        </div>
        <div className="header_valutes">
          <ul className="header_valutes__list">
            {valutes &&
              valutes.map((valute, index) => (
                <li
                  key={`${valute}_${index}`}
                  onClick={() => onSelectValute(index)}
                  className={`${activeValute === index ? 'active_valute' : ''} header_valute`}>
                  {valute}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
