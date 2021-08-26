import React, { useState, useEffect } from 'react';
import { BsChevronDown, BsGrid1X2Fill } from 'react-icons/bs/index';
import ModuleSelectBox from '../modules/SelectBox';
import ElementSearchbar from '../elements/Searchbar';
import ElementButton from '../elements/Button';

const initOrganization = [
  {
    id: 0,
    name: '개발실',
  },
  {
    id: 1,
    name: '기획팀',
  },
  {
    id: 2,
    name: '마케팅팀',
  },
];

const SectorCreator = (props) => {
  const [mode, setMode] = useState(false);
  const [organization, setOrganization] = useState(initOrganization);
  const [showDropdown, toggleDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedOrganization, setSelectedOrganization] = useState('');

  const notificationLabel = selectedOrganization.name ?
    `<strong>${selectedOrganization.name}</strong>의 구역을 생성하시겠습니까?` : '구역 생성을 위해 조직을 선택하세요.';

  const selectDropdownItem = (selectedItem) => {
    setSelectedOrganization(selectedItem);
  };

  const onAddSheet = () => {
    if (!selectedOrganization) {
      return alert('선택된 조직이 없습니다.');
    }
    setMode((currentMode) => !currentMode);
  };

  const onResetSector = () => {
    setMode((currentMode) => !currentMode);
    setSelectedOrganization('');
  };

  const onSubmitSector = () => {
    setSelectedOrganization('');
    toggleDropdown(false);
    props.updateSector({ organization: selectedOrganization, color: '#fff08b'});
  };

    useEffect(() => {
    if (!searchValue) {
      return setOrganization(initOrganization);
    }
    const filteredValue = initOrganization.filter((item) => item.name.includes(searchValue));
    setOrganization(filteredValue);
  }, [searchValue]);

  return (
    <div className="dropdown">
      <input
        id="dropdown__sector-creator"
        type="checkbox"
        className="a11y dropdown__trigger"
        checked={showDropdown}
        onChange={() => toggleDropdown((state) => !state)}
      />
      <label htmlFor="dropdown__sector-creator" className="dropdown__label btn btn--secondary">
        <BsGrid1X2Fill />
        ADD SECTOR
        <BsChevronDown className="icon icon--dropdown" size="1.2rem" />
      </label>

      <div className="dropdown__content">
        {mode ? (
          <div className="select-box">
            {notificationLabel && (
              <p className="select-box__notify">
                시트에서 <strong>{selectedOrganization.name}</strong> 좌석을 선택하고 저장하세요.
              </p>
            )}

            <div className="btn-set btn-set--content">
              <ElementButton
                isCancel
                className="btn--thin btn--secondary"
                callback={onResetSector}>
                RESET
              </ElementButton>
              <ElementButton
                isChecked
                className="btn--thin"
                callback={onSubmitSector}
              >
                APPLY
              </ElementButton>
            </div>
          </div>
        ) : (
          <ModuleSelectBox
            listLabel="sector-creator"
            listType="radio"
            list={organization}
            notificationLabel={notificationLabel}
            confirmLabel="ADD"
            isConfirm
            onClickItem={selectDropdownItem}
            onSubmit={onAddSheet}
          >
            <ElementSearchbar
              placeholder="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onResetValue={() => setSearchValue('')}
            />
          </ModuleSelectBox>
        )}
      </div>
    </div>
  );
};
export default SectorCreator;