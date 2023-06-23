import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import lan from "./FloatButton.data.json";
import Toggle from "kromac-ui-18/dist/Toggle";
import "./FloatButton.style.scss";
import { BsXCircleFill } from "react-icons/bs";

const FloatButton = ({ Icon }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const hideModal = () => setIsShowModal(false);
  return (
    <>
      <button className="btn__settings" onClick={() => setIsShowModal(true)}>
        <Icon />
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

  const isDark = theme === "dark";
  const isEnglish = appLanguage === "en";
  const language = lan[appLanguage];

  const handlerChangeLanguage = () => {
    changeLanguage(appLanguage === "es" ? "en" : "es");
  };

  const handlerChangeTheme = () => {
    changeTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section className={`modal-settings ${theme}`}>
      <BsXCircleFill className="btn__close__modal" onClick={onHide} />
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
          <Toggle
            onChange={handlerChangeTheme}
            onColor="#111b21"
            offColor="#ffffff"
            checked={isDark}
          />
          <label>{language.dark}</label>
        </div>
      </section>
    </section>
  );
};

export default FloatButton;
