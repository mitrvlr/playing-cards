import React, { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs/index';
import { AiOutlinePlus } from 'react-icons/ai/index';
import ElementSearchbar from '../elements/Searchbar';
import ModuleSelectBox from './SelectBox';

const ModuleDropdown = (props) => {
  const [showDropdown, toggleDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="dropdown">
      <input id={`dropdown__${props.id}`} type="checkbox" className="a11y dropdown__trigger" checked={showDropdown} onChange={(e) => toggleDropdown((state) => !state)} />
      <label htmlFor={`dropdown__${props.id}`} className="dropdown__label btn btn--ghost">
        {props.isAdded && <AiOutlinePlus />}
        {props.label || props.id}
        <BsChevronDown className="icon icon--dropdown" size="1.2rem" />
      </label>
      {props.list && (
        <div className="dropdown__content">
          <ModuleSelectBox list={props.list}>
            {props.search && (
              <ElementSearchbar
                value={searchValue}
                placeholder="search"
                onChange={(e) => setSearchValue(e.target.value)}
                onResetValue={() => setSearchValue('')}
                onSearchValue={() => {}}
              />
            )}
          </ModuleSelectBox>
        </div>
      )}
    </div>
  );
};

export default ModuleDropdown;