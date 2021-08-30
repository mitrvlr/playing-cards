import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { currentSectorInfo, organizationList, sheetMapMode } from '../../store/atoms';
import { BsCheck } from 'react-icons/bs';

import MemberItem from './MemberItem';

import { SheetMode } from '../../policy';

const SectorSelectBox = ({ list, listLabel, listType, notificationLabel, isDepth, children }) => {
  const [selectItem, setSelectItem] = useState(null);
  const [organizations] = useRecoilState(organizationList);
  const [sheetMode, setSheetMode] = useRecoilState(sheetMapMode);
  const [currentSector, setCurrentSector] = useRecoilState(currentSectorInfo);

  const onChangeCheckbox = (e, selectedOrganization) => {
    const { checked } = e.target;
    const selectedSector = organizations.find((organization) => organization.id === selectedOrganization.id);

    setCurrentSector(selectedSector);

    if (checked && isDepth) {
      setSheetMode(SheetMode.SELECT_MEMBER);
    }
    if (!checked) {
      setSheetMode(null);
    }
    if (sheetMode === SheetMode.SELECT_SECTOR) {
      setSheetMode(SheetMode.ASSIGN_SECTOR);
      setSelectItem(selectedOrganization);
    }
  };

  return (
    <div className="select-box">
      {children}

      <ul className="select-box__list">
        {list?.map((item) => (
          <li key={item.id}>
            <input
              id={`${listLabel}-${item.id}`}
              className="a11y"
              name={listLabel}
              type={listType || 'checkbox' }
              checked={isDepth ? sheetMode === SheetMode.SELECT_MEMBER : currentSector?.id === item.id}
              onChange={(e) => onChangeCheckbox(e, item)}
            />
            <label htmlFor={`${listLabel}-${item.id}`}>
              <BsCheck />{item.title}
            </label>

            {(isDepth && item.member?.length) && (
              <ul className="select-box__list">
                {item.member.map((subItem) => <MemberItem key={subItem.memberId} memberInfo={subItem} />)}
              </ul>
            )}
          </li>
        ))}
      </ul>
      {notificationLabel && <p className="select-box__notify" dangerouslySetInnerHTML={ {__html: notificationLabel} } />}
    </div>
  );
};

export default SectorSelectBox;