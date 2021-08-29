import React from 'react';
import { BsCheck } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineClose } from 'react-icons/ai';

const ElementButton = (props) => {
  return (
    <button className={`btn ${props.className}`} disabled={props.disabled} onClick={props.callback}>
      {props.isAdded && <AiOutlinePlus />}
      {props.isChecked && <BsCheck />}
      {props.isCancel && <AiOutlineClose />}
      {props.children}
    </button>
  );
};

export default ElementButton;