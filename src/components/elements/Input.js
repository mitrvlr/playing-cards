import React from 'react';

const ElementInput = ({
  id,
  label,
  type = 'text',
  placeholder,
  value = '',
  onChange,
  maxLength = 999,
}) => {
  return (
    <>
      <label className="input__label" htmlFor={id}>
        {label || id}
      </label>
      <input
        id={id}
        className="input"
        type={type}
        placeholder={placeholder}
        name={id}
        defaultValue={value || ''}
        onChange={onChange}
        maxLength={maxLength}
      />
    </>
  );
};
export default ElementInput;
