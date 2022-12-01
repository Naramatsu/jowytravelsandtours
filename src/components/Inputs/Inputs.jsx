import React from 'react';
import './Inputs.style.scss';

const Inputs = (props) => {
  const { inputtype } = props;
  switch (inputtype) {
    case 'input':
    case 'number':
      return <Input {...props} />;
    case 'combo':
      return <ComboBox {...props} />;
    case 'range':
      return <Range {...props} />;
    case 'textarea':
      return <TextArea {...props} />;
    default:
      return <></>;
  }
};

const Input = ({ name, value, onChange, inputtype, ...rest }) => {
  const inputformat = inputtype === 'input' ? 'text' : inputtype;
  return (
    <input
      type={inputformat}
      className="input_format"
      placeholder="Type here"
      name={name}
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
};

const ComboBox = ({ name, value, options, onChange, ...rest }) => (
  <select
    name={name}
    className="input_format"
    onChange={onChange}
    value={value || 'all'}
    {...rest}
  >
    <option value="">All</option>
    {options.map((option, index) => (
      <option key={index} value={option}>
        {option}
      </option>
    ))}
  </select>
);

const Range = ({ name, value, onChange, ...rest }) => (
  <section className="input-range">
    <label>1 to</label>
    <input
      type="range"
      name={name}
      value={value}
      onChange={onChange}
      min="1"
      max="50"
      {...rest}
    />
    <label>{value}</label>
  </section>
);

const TextArea = ({ name, value, onChange, ...rest }) => (
  <textarea
    name={name}
    onChange={onChange}
    value={value}
    placeholder="Type here"
    {...rest}
  ></textarea>
);

export default Inputs;
