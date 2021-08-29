import React from 'react';
import { BsChevronDown } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';

const ModuleDropdown = (props) => {
  return (
    <div className="dropdown">
      <input id={`dropdown__${props.id}`} type="checkbox" className="a11y dropdown__trigger" />
      <label htmlFor={`dropdown__${props.id}`} className="dropdown__label btn btn--ghost">
        {props.isAdded && <AiOutlinePlus />}
        {props.label || props.id}
        <BsChevronDown className="icon icon--dropdown" size="1.2rem" />
      </label>

      {props.list && (
        <div className="dropdown__content">
          <ul>
            {props.list?.length && props.list.map((item) => <li>{item}</li>)}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ModuleDropdown;