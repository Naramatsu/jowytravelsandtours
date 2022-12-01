import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context';
import data from '../../data.json';
import Filter from '../Filter';
import Items from '../Items';
import Panel from 'kromac-ui-18/dist/Panel';
import TableHeader from '../TableHeader';
import useFormatLocation from '../../hooks/useFormatLocation';
import { filterByAnyProperty } from '../../utils/dataGrouper';
import './SectionTemplate.style.scss';

const SectionTemplate = () => {
  const { pathname } = useFormatLocation();
  const { language: appLanguage, theme } = useContext(AppContext);
  const [allData, setAllData] = useState(data[appLanguage][pathname]);
  const [items, setItems] = useState(allData.items);

  useEffect(() => {
    setAllData(data[appLanguage][pathname]);
  }, [setAllData, appLanguage, pathname]);

  useEffect(() => {
    setItems(allData.items);
  }, [allData]);

  const handlerChangeCategory = (category) => {
    if (category !== '') {
      setItems(allData.items.filter((data) => data.category === category));
    } else {
      setItems(allData.items);
    }
  };

  const onFilter = (filter) => {
    setItems(filterByAnyProperty(allData.items, filter));
  };

  const onReset = () => {
    setItems(allData.items);
  };

  return (
    <section className="panel-section">
      <h1>{allData.title}</h1>
      <p className="description">{allData.description}</p>
      <section className="panel-section__container">
        <Panel>
          <Filter items={allData.items} onFilter={onFilter} onReset={onReset} />
        </Panel>
        <Panel>
          <TableHeader
            tabs={allData.categories}
            handlerChange={handlerChangeCategory}
          />
          <section className={`items__table kromac-scroll ${theme}`}>
            {items.length ? (
              items.map((item, index) => <Items item={item} key={index} />)
            ) : (
              <h5>No options found.</h5>
            )}
          </section>
        </Panel>
      </section>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default SectionTemplate;
