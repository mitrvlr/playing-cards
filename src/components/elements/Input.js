import React from 'react';

const ElementInput = (props) => {
  return (
    <>
      <label className="input__label" htmlFor={props.id}>{props.label || props.id}</label>
      <input
        id={props.id}
        className="input"
        type={props.type || 'text'}
        placeholder={props.placeholder}
        name={props.id}
        value={props.value || ''}
        onChange={props.onChange}
      />
    </>
  );
};
export default ElementInput;