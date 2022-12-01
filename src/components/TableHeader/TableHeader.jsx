import React, { useContext, useState } from 'react';
import { AppContext } from '../../context';
import './TableHeader.style.scss';

const TableHeader = ({ tabs, handlerChange }) => {
  const [activeTab, setActiveTab] = useState('');
  const { language } = useContext(AppContext);

  const changeTab = (tab) => {
    setActiveTab(tab);
    handlerChange(tab);
  };

  const isActiveTab = (tab) => (tab === activeTab ? 'active' : '');

  return (
    <section className="table__header kromac-scroll-bg-dark">
      <section onClick={() => changeTab('')} className={isActiveTab('')}>
        {language === 'es' ? <p>Todos</p> : <p>All</p>}
      </section>
      {tabs.map((tab, index) => (
        <section
          key={index}
          onClick={() => changeTab(tab)}
          className={isActiveTab(tab)}
        >
          <p>{tab}</p>
        </section>
      ))}
    </section>
  );
};

export default TableHeader;
