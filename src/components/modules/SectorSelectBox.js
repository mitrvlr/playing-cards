import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { currentSectorInfo, organizationList, sheetMapMode, sheetVersion1 } from '../../store/atoms';
import { BsCheck } from 'react-icons/bs';

import MemberItem from './MemberItem';

import { SheetMode } from '../../policy';

const SectorSelectBox = ({ list, listLabel, listType, notificationLabel, isDepth, children }) => {
  const [selectItem, setSelectItem] = useState(null);
  const [assignedMembers, setAssignedMembers] = useState([]);
  const [organizations] = useRecoilState(organizationList);
  const [organizationSheet] = useRecoilState(sheetVersion1);
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

  useEffect(() => {
    const assignedMemberSize = organizationSheet.map((sheets) => {
      const assignedMembers = [];
      sheets.sheet.reduce(
        (pre, curr) => curr.member && assignedMembers.push(curr.member),
        0
      );
      return assignedMembers.length;
    });
    setAssignedMembers(assignedMemberSize);
  }, [organizationSheet]);

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
              <BsCheck />
              {item.title}
              {isDepth && (
                <span className="count">
                  {assignedMembers[item.id] || 0} / {item.member.length}
                </span>
              )}
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