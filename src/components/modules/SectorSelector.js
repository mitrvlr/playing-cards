 import React, { useState, useEffect } from 'react';
 import { useRecoilState } from 'recoil';

import { BsChevronDown, BsGrid1X2Fill } from 'react-icons/bs';
 import { organizationList, currentSectorInfo, sheetMapMode } from '../../store/atoms';

import ElementSearchbar from '../elements/Searchbar';
import SectorSelectBox from './SectorSelectBox';

 import { SheetMode } from '../../policy';

const SectorSelector = () => {
  const [showDropdown, toggleDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [sheetMode, setSheetMode] = useRecoilState(sheetMapMode);
  const [currentSector, setCurrentSector] = useRecoilState(currentSectorInfo);

  const [organizations] = useRecoilState(organizationList);
  const [list, setList] = useState(organizations);

  const onToggleDropdown = () => {
    if (showDropdown) {
      setSheetMode(null);
    } else {
      setSheetMode(SheetMode.SELECT_SECTOR);
    }
    toggleDropdown((state) => !state);
  };

  const onChangeSearchValue = (e) => {
    const { value } = e.target;
    const filteredList = organizations.filter((item) => item.title.includes(value));

    setList(filteredList);
    setSearchValue(value);

    if (!value) {
      setList(organizations);
    }
  };

  const onSubmitSector = () => {
    setCurrentSector(null);
    onToggleDropdown();
  };

  useEffect(() => {
    if (!sheetMode) {
      toggleDropdown(false);
      setCurrentSector(null);
    }
  }, [sheetMode]);

  return (
    <div className="dropdown sector-creator">
      <input
        id="dropdown-sector-creator"
        className="a11y dropdown__trigger"
        type="checkbox"
        checked={showDropdown}
        onChange={onToggleDropdown}
      />
      <label className="dropdown__label btn" htmlFor="dropdown-sector-creator">
        <BsGrid1X2Fill />
        ADD SECTOR
        <BsChevronDown className="icon icon--dropdown" size="1.2rem" />
      </label>

      <div className="dropdown__content">
        <SectorSelectBox
          list={list}
          listType="radio"
          listLabel="sector-creator"
          notificationLabel="조직을 선택하고 구역을 설정하세요."
        >
          <ElementSearchbar
            placeholder="search"
            value={searchValue}
            onChange={onChangeSearchValue}
            onResetValue={() => setSearchValue('')}
          />
        </SectorSelectBox>
      </div>
    </div>
  );
};
export default SectorSelector;