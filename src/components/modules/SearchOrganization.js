import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { currentSectorInfo, organizationList, sheetVersion1 } from '../../store/atoms';
import { BsChevronDown, BsGrid1X2Fill } from 'react-icons/bs/index';
import ElementButton from '../elements/Button';
import OrganizationSelectBox from './OrganizationSelectBox';
import ElementSearchbar from '../elements/Searchbar';

const SearchOrganization = () => {
  const [showDropdown, toggleDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const [organizations] = useRecoilState(organizationList);
  const [list, setList] = useState(organizations);

  const [currentSector, setCurrentSector] = useRecoilState(currentSectorInfo);
  const [organizationSheet, setOrganizationSheet] = useRecoilState(sheetVersion1);

  const onToggleDropdown = () => {
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

  const onSelectEmployee = (employee) => {
    console.log('selected employee : ', employee);
    // 복제된 시트의 좌석 정보에 직원 할당
    // setCloneedOrganizationSheet();
  };

  const onSubmitSector = () => {
    // 좌석 할당 정보 반영
    // setOrganizationSheet(cloneedOrganizationSheet);
  };

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
        <BsGrid1X2Fill />
        ORGANIZATION
        <BsChevronDown className="icon icon--dropdown" size="1.2rem" />
      </label>

      <div className="dropdown__content">
        <OrganizationSelectBox
          isDepth
          confirmLabel="ADD"
          list={list}
          listType="radio"
          listLabel="organization"
          onClickSubItem={onSelectEmployee}
          onSubmit={onSubmitSector}
        >
          <ElementSearchbar
            placeholder="search"
            value={searchValue}
            onChange={onChangeSearchValue}
            onResetValue={() => setSearchValue('')}
          />
          <div>
            {/*<button>EXPAND</button>*/}
            {/*<button>COLLPASE</button>*/}
          </div>
        </OrganizationSelectBox>
      </div>
    </div>
  );
};
export default SearchOrganization;