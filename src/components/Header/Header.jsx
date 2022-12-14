import React, { useContext } from 'react';
import { AppContext } from '../../context';
import lan from './Header.data.json';
import { Link } from 'react-router-dom';
import useFormatLocation from '../../hooks/useFormatLocation';

const isActiveTab = (path, tab) => (path === tab ? 'active' : '');

const Header = () => {
  const { language: appLanguage } = useContext(AppContext);
  const language = lan[appLanguage];
  const { pathname } = useFormatLocation();

  return (
    <header className="header__container">
      {language
        .filter((item, index) => index < 3)
        .map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className={isActiveTab(pathname, item.link)}
          >
            <p>{item.label}</p>
          </Link>
        ))}
      <section className={`header__logo ${isActiveTab(pathname, '')}`}>
        <Link to="/">
          <img src="JTYT_logo.png" alt="logo" />
        </Link>
      </section>
      {language
        .filter((item, index) => index > 2)
        .map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className={isActiveTab(pathname, item.link)}
          >
            <p>{item.label}</p>
          </Link>
        ))}
      <Link to="aboutus" className="header__btn-about">
        {appLanguage === 'es' ? <p>Sobre Nosotros</p> : <p>About us</p>}
      </Link>
    </header>
  );
};

export default Header;
