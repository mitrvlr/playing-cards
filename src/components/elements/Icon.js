import React from 'react';
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

const ElementIcon = (props) => {
  return (
    <button className={`icon-btn ${props.className}`} disabled={props.disabled} onClick={props.callback}>
      {props.isAdded && <AiOutlinePlus />}
      {props.isRemoved && <AiOutlineClose />}
      {props.children}
    </button>
  );
};

export default ElementIcon;