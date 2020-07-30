import React from 'react';
import PropTypes from 'prop-types';

const name = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

const Header = ({
  number,
  score,
}) => {
  const toggleItem = (value) => {
    if (number === value) {
      return 'header__select';
    }
    return '';
  };

  return (
    <header className="header">
      <div className="header__top">
        <span className="header__logo">
          Songbird
        </span>
        <span className="header__score">
          {`Score: ${score}`}
        </span>
      </div>
      <ul className="header__list">
        {name.map((item, index) => <li key={item} className={`header__list-item ${toggleItem(index)}`}>{item}</li>)}
      </ul>
    </header>
  );
};

Header.propTypes = {
  number: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default Header;
