import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import ElementIcon from './Icon';
import ElementInput from './Input';

const ElementSearchbar = (props) => {
  const onSearch = () => {
    if (!props.value) return;
    props.onSearchValue && props.onSearchValue();
  }

  return (
    <div className={`searchbar ${props.className}`}>
      <AiOutlineSearch className="icon icon--search" size="1.4rem" />
      <input
        type="search"
        placeholder={props.placeholder}
        className="input"
        name="search"
        value={props.value}
        onChange={props.onChange}
        onKeyPress={(e) => e.key === 'Enter' && onSearch()}/>
      <ElementIcon isRemoved className="icon icon--remove" callback={props.onResetValue} />
    </div>
  );
};

export default ElementSearchbar;