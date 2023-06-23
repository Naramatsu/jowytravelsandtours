import React, { useContext } from "react";
import { FaQuestion } from "react-icons/fa";
import { AppContext } from "../../context";
import Items from "../Items";
import lan from "./CarShop.data.json";
import "./CarShop.style.scss";

const CarShop = () => {
  const { combo = [], language: appLanguage, theme } = useContext(AppContext);
  const language = lan[appLanguage];

  const handlerAskInWapp = () => {
    const url = new URL("https://wa.me/573103504215");
    const message = `${language.urlMessage}
    (COMBO)
    ${combo.map((item) => `* ${item.id} - ${item.name}`)}
    `;
    url.searchParams.set("text", message);
    window.open(url.href, "_blank");
  };

  return (
    <section className="carshop">
      <h3>Combo</h3>
      <section className="carshop__content">
        <section className="carshop__content__items kromac-scroll">
          {combo.length ? (
            combo.map((item) => (
              <Items item={item} key={item.id} role="combo" />
            ))
          ) : (
            <h3>{language.emptyItems}</h3>
          )}
          {combo.length ? (
            combo.map((item) => (
              <Items item={item} key={item.id} role="combo" />
            ))
          ) : (
            <h3>{language.emptyItems}</h3>
          )}
          {combo.length ? (
            combo.map((item) => (
              <Items item={item} key={item.id} role="combo" />
            ))
          ) : (
            <h3>{language.emptyItems}</h3>
          )}
        </section>

        <button
          className={`item__whatsapp__btn icon__section ${theme}`}
          onClick={handlerAskInWapp}
        >
          <FaQuestion />
          Ask for all
        </button>
      </section>
    </section>
  );
};

export default CarShop;
