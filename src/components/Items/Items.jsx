import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import Card from "kromac-ui-18/dist/Card";
import Slider from "kromac-ui-18/dist/Slider";
import lan from "./Items.data.json";
import "./Items.style.scss";
import { BsXCircleFill } from "react-icons/bs";
import { FaQuestion, FaRegEye, FaShoppingCart } from "react-icons/fa";

const Items = ({ item, role }) => {
  const {
    language: appLanguage,
    theme,
    removeItemFromCombo,
    addItemToCombo,
  } = useContext(AppContext);
  const language = lan[appLanguage];
  const [showGallery, setShowGallery] = useState(false);
  const {
    id,
    name,
    imgPreview,
    location,
    capacity,
    nearTo,
    details,
    category,
  } = item;

  const handlerAskInWapp = (id) => {
    const url = new URL("https://wa.me/573103504215");
    const message = `${language.urlMessage}
    (${category})
    ${id} - ${name},
    capacity: ${capacity}
    `;
    url.searchParams.set("text", message);
    window.open(url.href, "_blank");
  };

  const isComboItem = role === "combo";

  return (
    <section className={`jtyt__item ${theme}`}>
      <Card image={imgPreview} title={name}>
        <section className="item__info">
          {!isComboItem && (
            <button
              onClick={() => setShowGallery(true)}
              className="item__view__galery icon__section"
            >
              <FaRegEye />
              {language.viewGallery}
            </button>
          )}
          {showGallery && (
            <section className="item__show__gallery">
              <BsXCircleFill
                className="btn__close__modal"
                onClick={() => setShowGallery(false)}
              />

              <Slider content={[{ img: imgPreview }]} />
            </section>
          )}
          <section className="item__info__title">
            {language.info.map((item, index) => (
              <p key={index}>
                <b>{item}:</b>
              </p>
            ))}
          </section>
          <section className="item__info__subtitle">
            <p>{name}</p>
            <p>{location}</p>
            <p>
              {language.upTo}
              {capacity} {language.persons}
            </p>
            <p>{nearTo.join(", ")}</p>
            <p>{details.join(", ")}</p>
          </section>
          {!isComboItem ? (
            <section className="item__whatsapp">
              <button
                className={`item__whatsapp__btn icon__section ${theme}`}
                onClick={() => handlerAskInWapp(id)}
              >
                <FaQuestion />
                {language.btnAsk}
              </button>
              <button
                className={`item__whatsapp__btn icon__section ${theme}`}
                onClick={() => addItemToCombo(item)}
              >
                <FaShoppingCart />
                {language.btnCombo}
              </button>
            </section>
          ) : (
            <section className="item__whatsapp combo">
              <button
                className={`item__whatsapp__btn icon__section ${theme}`}
                onClick={() => removeItemFromCombo(item)}
              >
                {language.removeFromCombo}
              </button>
            </section>
          )}
        </section>
      </Card>
    </section>
  );
};

export default Items;
