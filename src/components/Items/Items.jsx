import React, { useContext } from 'react';
import { addToCombo } from '../../utils/combo';
import Card from 'kromac-ui/dist/Card';
import lan from './Items.data.json';
import { AppContext } from '../../context';

const Items = ({ item }) => {
  const { language: appLanguage, theme } = useContext(AppContext);
  const language = lan[appLanguage];
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

  const handlerAddToCombo = item => {
    addToCombo(item);
  };

  const handlerAskInWapp = id => {
    const url = new URL('https://wa.me/573103504215');
    const message = `${language.urlMessage}
    (${category})
    ${id} - ${name},
    capacity: ${capacity.join(' - ')}
    `;
    url.searchParams.set('text', message);
    window.open(url.href, '_blank');
  };

  return (
    <section className={`jtyt__item ${theme}`}>
      <Card image={imgPreview} title={name}>
        <section className="item__info">
          <button className="item__view-galery">{language.viewGallery}</button>
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
