import React from 'react';

const Header = () => (
  <header className="header">
    <div className="header__top">
      <span className="header__logo">
        Songbird
      </span>
      <span>
        Score:
      </span>
    </div>
    <ul className="header__list">
      <li className="header__list-item">Разминка</li>
      <li className="header__list-item">Воробьиные</li>
      <li className="header__list-item">Лесные птицы</li>
      <li className="header__list-item">Певчие птицы</li>
      <li className="header__list-item">Хищные птицы</li>
      <li className="header__list-item">Морские птицы</li>
    </ul>
  </header>
)

export default Header;