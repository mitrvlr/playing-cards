import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { currentSectorInfo, organizationList, sheetMapMode } from '../../store/atoms';

import { BsChevronDown, BsPeopleFill } from 'react-icons/bs';

import ElementSearchbar from '../elements/Searchbar';
import SectorSelectBox from './SectorSelectBox';

import { SheetMode } from '../../policy';

const MemberSelector = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showDropdown, toggleDropdown] = useState(false);
  const [sheetMode, setSheetMode] = useRecoilState(sheetMapMode);
  const [currentSector, setCurrentSector] = useRecoilState(currentSectorInfo);

  const [organizations] = useRecoilState(organizationList);
  const [list, setList] = useState(organizations);

  const onToggleDropdown = () => {
    if (showDropdown) {
      resetDropdown();
    } else {
      setSheetMode(null);
    }
    toggleDropdown((state) => !state);
  };

  const resetDropdown = () => {
    setList(organizations);
    setSearchValue('');
    setCurrentSector(null);
    setSheetMode(null);
  };

  const onChangeSearchValue = (e) => {
    const { value } = e.target;
    const filteredList = organizations.filter((item) => item.title.includes(value));

    if (!value) {
      setList(organizations);
    }
    setList(filteredList);
    setSearchValue(value);
  };

  useEffect(() => {
    const isSelectSectorMode = sheetMode === SheetMode.SELECT_SECTOR;
    const isSelectMemberMode = sheetMode === SheetMode.SELECT_MEMBER;

    if (isSelectSectorMode) {
      toggleDropdown(false);
    }
    if (isSelectMemberMode) {
      const selectedSector = organizations.find((organization) => organization.id === currentSector.id);
      setList([selectedSector]);
      toggleDropdown(true);
    }
    if (!sheetMode) {
      setList(organizations);
    }
  }, [sheetMode, currentSector]);

  return (
    <div className="dropdown search-organization">
      <input
        id="dropdown-organization"
        className="a11y dropdown__trigger"
        type="checkbox"
        checked={showDropdown}
        onChange={onToggleDropdown}
      />
      <label className="dropdown__label btn" htmlFor="dropdown-organization">
        <BsPeopleFill size="1.6rem" />
        ORGANIZATION
        <BsChevronDown className="icon icon--dropdown" size="1.2rem" />
      </label>

      <div className="dropdown__content">
        <SectorSelectBox
          isDepth
          list={list}
          listType="checkbox"
          listLabel="organization"
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
export default MemberSelector;