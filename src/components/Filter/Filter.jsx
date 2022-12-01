import React, { useContext, useState } from 'react';
import { AppContext } from '../../context';
import { ignoreDuplicates } from '../../utils/dataGrouper';
import Inputs from '../Inputs/Inputs';
import lan from './Filter.data.json';
import useFormatLocation from '../../hooks/useFormatLocation';
import './Filter.style.scss';

const intialState = {
  name: '',
  location: '',
  capacity: 1,
  details: '',
};

const Filter = ({ items, onFilter, onReset }) => {
  const { pathname } = useFormatLocation();
  const { theme, language: appLanguage } = useContext(AppContext);
  const [form, setForm] = useState(intialState);
  const language = lan[appLanguage];
  const sectionData = language[pathname];
  const options = items.length ? items.map((i) => i.location) : null;

  const handlerFilter = (e) => {
    if (JSON.stringify(form) === JSON.stringify(intialState)) handlerReset(e);
    onFilter(form);
    e.preventDefault();
  };

  const handlerReset = (e) => {
    setForm(intialState);
    onReset();
    e.preventDefault();
  };

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <>
      <section className="table__header">
        <section className="filter_title">
          <p>{language.title}</p>
        </section>
      </section>
      <section className={`filter_container ${theme} kromac-scroll`}>
        {sectionData.map((item, index) => (
          <section key={index} className="filter_input">
            <label>{item.label}</label>
            <Inputs
              {...item}
              value={form[item.inputname]}
              name={item.inputname}
              onChange={handlerChange}
              options={ignoreDuplicates(options)}
            />
          </section>
        ))}
        <section className="btn_filter_section">
          <button className="btn_filter apply" onClick={handlerFilter}>
            {language.btnApply}
          </button>
          <button className="btn_filter" onClick={handlerReset}>
            {language.btnReset}
          </button>
        </section>
      </section>
    </>
  );
};

export default Filter;
