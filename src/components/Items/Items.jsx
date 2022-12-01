import React, { useContext, useState } from 'react';
import { addToCombo } from '../../utils/combo';
import Card from 'kromac-ui-18/dist/Card';
import Slider from 'kromac-ui-18/dist/Slider';
import lan from './Items.data.json';
import { AppContext } from '../../context';
import './Items.style.scss';

const Items = ({ item }) => {
  const { language: appLanguage, theme } = useContext(AppContext);
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

  const handlerAddToCombo = (item) => {
    addToCombo(item);
  };

  const handlerAskInWapp = (id) => {
    const url = new URL('https://wa.me/573103504215');
    const message = `${language.urlMessage}
    (${category})
    ${id} - ${name},
    capacity: ${capacity}
    `;
    url.searchParams.set('text', message);
    window.open(url.href, '_blank');
  };

  return (
    <section className={`jtyt__item ${theme}`}>
      <Card image={imgPreview} title={name}>
        <section className="item__info">
          <button
            onClick={() => setShowGallery(true)}
            className="item__view-galery"
          >
            {language.viewGallery}
          </button>
          {showGallery && (
            <section className="item__show__gallery">
              <button
                onClick={() => setShowGallery(false)}
                className="button float"
              >
                x
              </button>
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
            <p>{nearTo.join(', ')}</p>
            <p>{details.join(', ')}</p>
          </section>
          <section className="item__whatsapp">
            <button
              className={`item__whatsapp__btn ${theme}`}
              onClick={() => handlerAskInWapp(id)}
            >
              {language.btnAsk}
            </button>
            <button
              className={`item__whatsapp__btn ${theme}`}
              onClick={() => handlerAddToCombo(item)}
            >
              {language.btnCombo}
            </button>
          </section>
        </section>
      </Card>
    </section>
  );
};

export default Items;
