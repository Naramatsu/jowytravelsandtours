import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context';
import data from '../../data.json';
import Filter from '../Filter';
import Items from '../Items';
import Panel from 'kromac-ui/dist/Panel';
import TableHeader from '../TableHeader';
import useFormatLocation from '../../hooks/useFormatLocation';
import { filterByAnyProperty } from '../../utils/dataGrouper';

const SectionTemplate = () => {
  const { pathname } = useFormatLocation();
  const { language: appLanguage, theme } = useContext(AppContext);
  const [allData, setAllData] = useState(data[appLanguage][pathname]);
  const [items, setItems] = useState(allData.items);

  useEffect(() => {
    setAllData(data[appLanguage][pathname]);
  });

  useEffect(() => {
    setItems(allData.items);
  }, [allData]);

  const handlerChangeCategory = category => {
    if (category !== '') {
      setItems(allData.items.filter(data => data.category === category));
    } else {
      setItems(allData.items);
    }
  };

  const onFilter = filter => {
    // filterByAnyProperty(allData.items, filter);
    console.log('filter', filter);
  };

  return (
    <section className="panel-section">
      <h1>{allData.title}</h1>
      <p className="description">{allData.description}</p>
      <section className="panel-section__container">
        <Panel>
          <Filter items={allData.items} onFilter={onFilter} />
        </Panel>
        <Panel>
          <TableHeader
            tabs={allData.categories}
            handlerChange={handlerChangeCategory}
          />
          <section className={`items__table kromac-scroll ${theme}`}>
            {items.map((item, index) => (
              <Items item={item} key={index} />
            ))}
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
