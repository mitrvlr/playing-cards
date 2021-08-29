 import React, { useState } from 'react';
import { useRecoilState } from 'recoil';

import { BsChevronDown, BsGrid1X2Fill } from 'react-icons/bs';

import OrganizationSelectBox from './OrganizationSelectBox';
import ElementSearchbar from '../elements/Searchbar';
import ElementButton from '../elements/Button';

import { organizationList, selectedSeatMap, currentSectorInfo, sheetVersion1, sheetMapMode } from '../../store/atoms';

const SectorCreator = () => {
  const [mode, setMode] = useState(false);
  const [showDropdown, toggleDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const [sheetMode, setSheetMode] = useRecoilState(sheetMapMode);
  const [currentSector, setCurrentSector] = useRecoilState(currentSectorInfo);
  const [selectedSeats, setSelectedSeats] = useRecoilState(selectedSeatMap);
  const [organizationSheet, setOrganizationSheet] = useRecoilState(sheetVersion1);

  const [organizations] = useRecoilState(organizationList);
  const [list, setList] = useState(organizations);

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

  const onSelectSector = (sector) => {
    setMode(true);
    setSheetMode('ADD_SECTOR');
    setList(organizations);
    setSearchValue('');
    setCurrentSector(sector);
  };

  const onResetMode = () => {
    resetDropdown();
    // sector reset 감지
    setOrganizationSheet((state) => state);
  };

  const onSubmitSector = () => {
    toggleDropdown(false);
    resetDropdown();
    onUpdateSector();
  };

  const resetDropdown = () => {
    setMode(false);
    setSheetMode(null);
    setCurrentSector(null);
    setSelectedSeats([]);
  };

  const onUpdateSector = () => {
    const { id, title, color } = currentSector;
    const cloneSheetInfo = JSON.parse(JSON.stringify(organizationSheet));

    cloneSheetInfo.map((organization) => {
      if (organization.id === id) {
        // update sector : 선택한 부서의 섹터 정보가 존재 할 경우.
        // todo: currentSectorInfo 의 sheet 배열이 초기값이 되도록 수정
        const sheet = selectedSeats.map((seat, i) => {
          return {
            memberId: organization.sheet.length + i,
            member: null,
            locate: seat.split(',').map((i) => Number(i)),
          }
        });
        // todo: organization.sheet = sheet
        organization.sheet.push(...sheet);
      } else {
        // add sector : 선택한 부서의 섹터 정보가 존재하지 않을 경우.
        const sheet = selectedSeats.map((seat, i) => {
          return {
            memberId: i,
            member: null,
            locate: seat.split(',').map((i) => Number(i)),
          }
        });
        cloneSheetInfo.push({ id, title, color, sheet });
      }
    });
    setOrganizationSheet(cloneSheetInfo);
  };

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
        {(currentSector && mode) ? (
          <div className="select-box">
            <p className="select-box__notify">시트에서 <strong>{currentSector.title}</strong> 좌석을 선택하고 저장하세요.</p>
            <div className="btn-set btn-set--content">
              <ElementButton isCancel className="btn--thin btn--secondary" callback={onResetMode} />
              <ElementButton isChecked className="btn--thin" callback={onSubmitSector}>APPLY</ElementButton>
            </div>
          </div>
        ) : (
          <OrganizationSelectBox
            confirmLabel="ADD"
            list={list}
            listType="radio"
            listLabel="sector-creator"
            notificationLabel="구역 생성을 위해 조직을 선택하세요."
            onSubmit={onSelectSector}
          >
            <ElementSearchbar
              placeholder="search"
              value={searchValue}
              onChange={onChangeSearchValue}
              onResetValue={() => setSearchValue('')}
            />
          </OrganizationSelectBox>
        )}
      </div>
    </div>
  );
};
export default SectorCreator;