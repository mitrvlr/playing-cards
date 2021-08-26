import React from 'react';
import { BsGrid1X2Fill, BsFillGrid3X3GapFill } from 'react-icons/bs';
import { AiOutlinePlus } from "react-icons/ai";
import { BsCheck } from 'react-icons/bs/index';

const ElementButton = (props) => {
  return (
    <button className={`btn ${props.className}`} disabled={props.disabled} onClick={props.callback}>
      {props.isAdded && <AiOutlinePlus />}
      {props.isChecked && <BsCheck />}
      {props.addSheet && <BsFillGrid3X3GapFill />}
      {props.addSector && <BsGrid1X2Fill />}
      {props.children}
    </button>
  );
};

export default ElementButton;