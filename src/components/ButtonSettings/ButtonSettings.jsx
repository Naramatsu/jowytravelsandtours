import React, { useContext, useState } from 'react';
import { AppContext } from '../../context';
import lan from './ButtonSettings.data.json';
import Toggle from 'kromac-ui/dist/Toggle';

const ButtonSettings = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const hideModal = () => setIsShowModal(false);
  return (
    <>
      <button className="btn-settings" onClick={() => setIsShowModal(true)}>
        icono
      </button>
      {isShowModal && <ModalSettings onHide={hideModal} />}
    </>
  );
};

const ModalSettings = ({ onHide }) => {
  const {
    changeLanguage,
    changeTheme,
    language: appLanguage,
    theme,
  } = useContext(AppContext);

  const isDark = theme === 'dark';
  const isEnglish = appLanguage === 'en';
  const language = lan[appLanguage];

  const handlerChangeLanguage = () => {
    changeLanguage(appLanguage === 'es' ? 'en' : 'es');
  };

  const handlerChangeTheme = () => {
    changeTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <section className={`modal-settings ${theme}`}>
      <button className="btn-close-modal-settings" onClick={onHide}>
        X
      </button>
      <section className="section-settings">
        <p>{language.language}</p>
        <div>
          <label>Espanol</label>
          <Toggle onChange={handlerChangeLanguage} checked={isEnglish} />
          <label>English</label>
        </div>
      </section>
      <section className="section-settings">
        <p>{language.theme}</p>
        <div>
          <label>{language.light}</label>
          <Toggle onChange={handlerChangeTheme} checked={isDark} />
          <label>{language.dark}</label>
        </div>
      </section>
    </section>
  );
};

export default ButtonSettings;
